<?php
/**
 * How each page was used, for the admin area's Sessions view: the trail lib/trail.js records while a page is in
 * view (where the pointer went, how far down the page was and when, what was clicked or tapped, which field was
 * put in focus or typed in, when the page was hidden and when the site was left), kept with the page view it belongs to (_views.php).
 * Never what was typed: of the page's own text only the label of what was clicked, with anything that looks
 * like an e-mail address, a shared design's secret or a long number taken out. Kept for TRAIL_DAYS. No trail is sent
 * to OpenAI: the read gets only totals from them, of what at least two visitors share (trail_summary).
 *
 * A session is one visitor's views on one day, split where they were away for more than SESSION_GAP. The
 * visitor is the day's hash (_views.php), so a session never reaches into another day, nor to a person.
 *
 * Every click is kept a second time on its own (view_clicks), where on the page it landed and in how wide a
 * window, so a page's heatmap is one query rather than the reading of every trail; how far down each view was
 * read is the views' own scroll.
 *
 * Written by trail.php; read by admin.php (sessions, session, heatmap) and the read (insight_write). Made on first use.
 */
require_once __DIR__ . '/_views.php';

/** How long a trail is kept. */
const TRAIL_DAYS = 30;
/** The most one batch may weigh, and how many batches one page view may send (lib/trail.js sends one every 8 seconds at most). */
const TRAIL_BYTES = 65536;
const TRAIL_BATCHES = 400;
/** The longest a page is recorded, in ms: as long as hit.php counts reading time. */
const TRAIL_MS = 1800000;
/** Pages never recorded (lib/trail.js leaves them out too): the admin area. */
const TRAIL_PRIVATE = ['/admin.html'];
/** Away for longer than this, in seconds, and the next view starts a new session. */
const SESSION_GAP = 1800;

function trails_schema(): void
{
    static $done = false;
    if ($done) return;
    $done = true;
    views_schema();
    // One row per batch: its events as JSON, when the page came into view by the visitor's own clock (ms, so the
    // pages of a session line up to the millisecond), the window's size as the batch begins (the first batch
    // always has it, for the heatmaps), and its clicks and rage clicks counted for the list.
    $pdo = db();
    $pdo->exec("CREATE TABLE IF NOT EXISTS view_trails (
        vid CHAR(16) NOT NULL,
        seq SMALLINT UNSIGNED NOT NULL,
        started BIGINT UNSIGNED NULL,
        width SMALLINT UNSIGNED NULL,
        height SMALLINT UNSIGNED NULL,
        events MEDIUMTEXT NOT NULL,
        clicks SMALLINT UNSIGNED NOT NULL DEFAULT 0,
        rage SMALLINT UNSIGNED NOT NULL DEFAULT 0,
        created_at DATETIME NOT NULL,
        PRIMARY KEY (vid, seq),
        INDEX (created_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");
    // Every click again, for the heatmaps: the page, the window's width, where it landed on the page (in the
    // window, for something that stays put there, such as the bar at the top), and what it was.
    $pdo->exec("CREATE TABLE IF NOT EXISTS view_clicks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        vid CHAR(16) NOT NULL,
        path VARCHAR(160) NOT NULL,
        site_lang CHAR(2) NOT NULL,
        width SMALLINT UNSIGNED NOT NULL,
        x SMALLINT UNSIGNED NOT NULL,
        y MEDIUMINT UNSIGNED NOT NULL,
        fixed TINYINT(1) NOT NULL DEFAULT 0,
        kind CHAR(1) NOT NULL DEFAULT '',
        label VARCHAR(60) NOT NULL DEFAULT '',
        rage TINYINT(1) NOT NULL DEFAULT 0,
        created_at DATETIME NOT NULL,
        INDEX (path, site_lang, created_at),
        INDEX (created_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");
}

/* ── Keeping ─────────────────────────────────────────────────────────────── */

/** A whole number from a batch, held to 0 to $max; null for anything that is not a number. */
function trail_int($v, int $max): ?int
{
    return is_int($v) || (is_float($v) && is_finite($v)) ? max(0, min($max, (int) round($v))) : null;
}

/** A label as it is kept: one line of at most 60 characters, without what looks like an e-mail address, a code or secret (a long run of letters and digits) or a long number. */
function trail_label($s): string
{
    if (!is_string($s) || !mb_check_encoding($s, 'UTF-8')) return '';
    $s = preg_replace('/[\x00-\x1F\x7F\s]+/u', ' ', $s);
    $s = preg_replace(['/[^\s@]+@[^\s@]+/u', '/[A-Za-z0-9_.\-]{24,}/', '/\d{5,}/'], '…', $s);
    return trim(mb_substr(trim($s), 0, 60));
}

/** A batch's events as they are kept: the known kinds only, each in its own shape, in time order. */
function trail_events(array $list): array
{
    $out = [];
    foreach (array_slice($list, 0, 4000) as $e) {
        if (!is_array($e) || !array_is_list($e) || !is_string($e[0] ?? null)) continue;
        $t = trail_int($e[1] ?? null, PHP_INT_MAX);
        if ($t === null || $t > TRAIL_MS) continue;
        $n = fn(int $i, int $max) => trail_int($e[$i] ?? null, $max) ?? 0;
        $one = match ($e[0]) {
            'v' => ['v', $t, $n(2, 10000), $n(3, 10000), $n(4, 1)],
            'm' => ['m', $t, $n(2, 10000), $n(3, 10000)],
            's' => ['s', $t, $n(2, 2000000), $n(3, 2000000)],
            'c' => ['c', $t, $n(2, 10000), $n(3, 10000), in_array($e[4] ?? '', ['a', 'b', 'f'], true) ? $e[4] : '', trail_label($e[5] ?? ''), $n(6, 2000000), $n(7, 1)],
            'f', 'i' => [$e[0], $t, trail_label($e[2] ?? '')],
            'h' => ['h', $t, $n(2, 1)],
            'x' => ['x', $t],
            default => null,
        };
        if ($one) $out[] = $one;
    }
    usort($out, fn($a, $b) => $a[1] <=> $b[1]);
    return $out;
}

/**
 * Which of a batch's clicks (in order) are rage clicks, and how many bursts they make: three or more on one spot,
 * each within half a second of the one before (the Sessions view marks them the same way).
 */
function trail_rage(array $clicks): array
{
    $marked = array_fill(0, count($clicks), false);
    $bursts = 0;
    $n = count($clicks);
    $i = 0;
    while ($i < $n) {
        $j = $i;
        while ($j + 1 < $n && $clicks[$j + 1][1] - $clicks[$j][1] <= 500
            && abs($clicks[$j + 1][2] - $clicks[$i][2]) <= 30 && abs($clicks[$j + 1][3] - $clicks[$i][3]) <= 30) $j++;
        if ($j - $i >= 2) {
            $bursts++;
            for ($k = $i; $k <= $j; $k++) $marked[$k] = true;
        }
        $i = $j + 1;
    }
    return [$marked, $bursts];
}

/** One batch, as trail.php received it: kept for a page view counted in the last day, unless that page is never recorded. */
function record_trail(array $in): void
{
    $seq = $in['q'] ?? null;
    if (!is_int($seq) || $seq < 0 || $seq >= TRAIL_BATCHES || !is_array($in['e'] ?? null)) return;
    trails_schema();
    $pdo = db();
    $st = $pdo->prepare('SELECT path, site_lang FROM views WHERE vid = ? AND created_at > ? LIMIT 1');
    $st->execute([$in['id'], date('Y-m-d H:i:s', time() - 86400)]);
    $view = $st->fetch();
    if (!$view || in_array($view['path'], TRAIL_PRIVATE, true)) return;
    $events = trail_events($in['e']);
    if (!$events) return;
    $windows = array_values(array_filter($events, fn($e) => $e[0] === 'v'));
    $clicks = array_values(array_filter($events, fn($e) => $e[0] === 'c'));
    [$rage, $bursts] = trail_rage($clicks);
    $started = is_int($in['at'] ?? null) && $in['at'] > 0 && $in['at'] < 2 ** 53 ? $in['at'] : null;
    $now = date('Y-m-d H:i:s');
    // A batch sent twice (a beacon and its retry) is kept once, its clicks too.
    $st = $pdo->prepare('INSERT IGNORE INTO view_trails (vid, seq, started, width, height, events, clicks, rage, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)');
    $st->execute([$in['id'], $seq, $started, $windows[0][2] ?? null, $windows[0][3] ?? null, json_encode($events, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE), count($clicks), $bursts, $now]);
    if ($clicks && $st->rowCount()) {
        // Each click in the window it was made in: the batch's own, or the one an earlier batch began with.
        $before = null;
        $rows = [];
        foreach ($clicks as $k => $c) {
            $width = null;
            foreach ($windows as $w) if ($w[1] <= $c[1]) $width = $w[2];
            if ($width === null) {
                if ($before === null) {
                    $q = $pdo->prepare('SELECT width FROM view_trails WHERE vid = ? AND seq < ? AND width IS NOT NULL ORDER BY seq DESC LIMIT 1');
                    $q->execute([$in['id'], $seq]);
                    $before = (int) $q->fetchColumn();
                }
                $width = $before;
            }
            if (!$width) continue;
            array_push($rows, $in['id'], $view['path'], $view['site_lang'], $width, $c[2], $c[7] ? $c[3] : $c[3] + $c[6], $c[7], $c[4], $c[5], $rage[$k] ? 1 : 0, $now);
        }
        if ($rows) $pdo->prepare('INSERT INTO view_clicks (vid, path, site_lang, width, x, y, fixed, kind, label, rage, created_at) VALUES '
            . implode(',', array_fill(0, count($rows) / 11, '(?,?,?,?,?,?,?,?,?,?,?)')))->execute($rows);
    }
    // Trails are kept for TRAIL_DAYS; now and then the older ones go.
    if (random_int(1, 200) === 1) {
        $cut = date('Y-m-d H:i:s', strtotime('-' . TRAIL_DAYS . ' days'));
        $pdo->prepare('DELETE FROM view_trails WHERE created_at < ?')->execute([$cut]);
        $pdo->prepare('DELETE FROM view_clicks WHERE created_at < ?')->execute([$cut]);
    }
}

/* ── Reading ─────────────────────────────────────────────────────────────── */

/** The day the Sessions view asks for (?day=Y-m-d), today for none: never past today, nor before the counts go back (13 months). */
function session_day($v): DateTimeImmutable
{
    $today = new DateTimeImmutable('today');
    $d = is_string($v) && preg_match('/^\d{4}-\d{2}-\d{2}$/', $v) ? DateTimeImmutable::createFromFormat('!Y-m-d', $v) : false;
    if (!$d || $d->format('Y-m-d') !== $v) return $today;
    return min(max($d, $today->modify('-13 months')), $today);
}

/** Views with how much of them was recorded (batches, clicks, rage), by visitor and time, for $where on the views. */
function session_views(string $where, array $args, DateTimeImmutable $day): array
{
    trails_schema();
    $from = $day->format('Y-m-d H:i:s');
    // A view's batches can come in until the next day.
    $st = db()->prepare("SELECT v.*, COALESCE(t.batches, 0) AS batches, COALESCE(t.clicks, 0) AS clicks, COALESCE(t.rage, 0) AS rage
        FROM views v LEFT JOIN (SELECT vid, COUNT(*) AS batches, SUM(clicks) AS clicks, SUM(rage) AS rage FROM view_trails
            WHERE created_at >= ? AND created_at < ? GROUP BY vid) t ON t.vid = v.vid
        WHERE $where AND v.created_at >= ? AND v.created_at < ? ORDER BY v.visitor, v.created_at, v.id LIMIT 20000");
    $st->execute([$from, $day->modify('+2 days')->format('Y-m-d H:i:s'), ...$args, $from, $day->modify('+1 day')->format('Y-m-d H:i:s')]);
    return $st->fetchAll();
}

/** The steps (view_events: download, download-win, app, open) of a day, or of $days days from it, by visitor: [name, time]. */
function session_steps(DateTimeImmutable $day, ?string $visitor = null, int $days = 1): array
{
    $st = db()->prepare('SELECT name, visitor, created_at FROM view_events WHERE created_at >= ? AND created_at < ?' . ($visitor ? ' AND visitor = ?' : '') . ' ORDER BY created_at, id');
    $st->execute([$day->format('Y-m-d H:i:s'), $day->modify("+$days days")->format('Y-m-d H:i:s'), ...($visitor ? [$visitor] : [])]);
    $out = [];
    foreach ($st->fetchAll() as $e) $out[$e['visitor']][] = [$e['name'], strtotime($e['created_at'])];
    return $out;
}

/**
 * Views (by visitor, then time) as sessions: each one visitor's views with no gap longer than SESSION_GAP, and the
 * steps they took meanwhile (each step goes to the last session that began before it).
 */
function sessions_of(array $views, array $steps): array
{
    $out = [];
    $cur = null;
    foreach ($views as $v) {
        $at = strtotime($v['created_at']);
        if ($cur === null || $cur['visitor'] !== $v['visitor'] || $at - $cur['until'] > SESSION_GAP) {
            if ($cur) $out[] = $cur;
            $cur = ['visitor' => $v['visitor'], 'start' => $at, 'until' => $at, 'views' => [], 'steps' => []];
        }
        $cur['views'][] = $v;
        $cur['until'] = max($cur['until'], $at + (int) $v['seconds']);
    }
    if ($cur) $out[] = $cur;
    // A step is logged when the page reports it (lib/track.js), a moment after its view.
    foreach ($out as $i => $s) {
        $next = isset($out[$i + 1]) && $out[$i + 1]['visitor'] === $s['visitor'] ? $out[$i + 1]['start'] : PHP_INT_MAX;
        foreach ($steps[$s['visitor']] ?? [] as $e) if ($e[1] >= $s['start'] - 5 && $e[1] < $next) $out[$i]['steps'][] = $e;
    }
    return $out;
}

/** A session as the Sessions view lists it. */
function session_row(array $s): array
{
    $first = $s['views'][0];
    $sum = fn(string $col) => array_sum(array_map(fn($v) => (int) $v[$col], $s['views']));
    return [
        'id' => $first['vid'],
        'start' => $first['created_at'],
        'end' => date('Y-m-d H:i:s', $s['until']),
        'seconds' => $sum('seconds'),
        'scroll' => max(array_map(fn($v) => (int) $v['scroll'], $s['views'])),
        'pages' => array_map(fn($v) => ['path' => $v['path'], 'lang' => $v['site_lang'], 'missing' => (bool) $v['missing']], $s['views']),
        // Where the visit came from is known on the page it landed on.
        'channel' => $first['entry'] ? $first['channel'] : null,
        'referrer' => $first['referrer'],
        'source' => $first['source'],
        'campaign' => $first['campaign'],
        'device' => $first['device'],
        'browser' => $first['browser'],
        'lang' => $first['lang'],
        'zone' => $first['zone'],
        'recorded' => $sum('batches') > 0,
        'clicks' => $sum('clicks'),
        'rage' => $sum('rage'),
        'steps' => array_values(array_unique(array_column($s['steps'], 0))),
    ];
}

/** A day's sessions, the newest first. */
function sessions_list(DateTimeImmutable $day): array
{
    $sessions = sessions_of(session_views('1', [], $day), session_steps($day));
    usort($sessions, fn($a, $b) => $b['start'] <=> $a['start']);
    $pdo = db();
    return [
        'day' => $day->format('Y-m-d'),
        'today' => (new DateTimeImmutable('today'))->format('Y-m-d'),
        // When counting began, and recording: the days before them have no sessions, or none replayed.
        'since' => $pdo->query('SELECT MIN(created_at) FROM views')->fetchColumn() ?: null,
        'recordedSince' => $pdo->query('SELECT MIN(created_at) FROM view_trails')->fetchColumn() ?: null,
        'keep' => TRAIL_DAYS,
        'sessions' => array_map('session_row', $sessions),
    ];
}

/** One session in full, by the id of any of its views: its views in order with their trails, and its steps. Null when there is none. */
function session_detail(string $vid): ?array
{
    if (!preg_match('/^[a-f0-9]{16}$/', $vid)) return null;
    trails_schema();
    $pdo = db();
    $st = $pdo->prepare('SELECT visitor, created_at FROM views WHERE vid = ? ORDER BY created_at LIMIT 1');
    $st->execute([$vid]);
    $one = $st->fetch();
    if (!$one) return null;
    $day = new DateTimeImmutable(substr($one['created_at'], 0, 10));
    $s = null;
    foreach (sessions_of(session_views('v.visitor = ?', [$one['visitor']], $day), session_steps($day, $one['visitor'])) as $x)
        if (in_array($vid, array_column($x['views'], 'vid'), true)) $s = $x;
    if (!$s) return null;

    // The trails, batch by batch.
    $vids = array_column($s['views'], 'vid');
    $st = $pdo->prepare('SELECT vid, started, events FROM view_trails WHERE vid IN (' . implode(',', array_fill(0, count($vids), '?')) . ') ORDER BY vid, seq');
    $st->execute($vids);
    $trails = [];
    foreach ($st->fetchAll() as $b) {
        $trails[$b['vid']]['started'] ??= $b['started'] === null ? null : (int) $b['started'];
        $trails[$b['vid']]['events'] ??= [];
        array_push($trails[$b['vid']]['events'], ...(json_decode($b['events'], true) ?: []));
    }
    foreach ($trails as &$t) usort($t['events'], fn($a, $b) => $a[1] <=> $b[1]);
    unset($t);

    return session_row($s) + [
        'views' => array_map(fn($v) => [
            'id' => $v['vid'], 'path' => $v['path'], 'lang' => $v['site_lang'], 'missing' => (bool) $v['missing'], 'at' => $v['created_at'],
            'seconds' => $v['seconds'] === null ? null : (int) $v['seconds'], 'scroll' => $v['scroll'] === null ? null : (int) $v['scroll'],
            'private' => in_array($v['path'], TRAIL_PRIVATE, true),
            'started' => $trails[$v['vid']]['started'] ?? null, 'events' => $trails[$v['vid']]['events'] ?? [],
        ], $s['views']),
        'stepsAt' => array_map(fn($e) => ['name' => $e[0], 'at' => date('Y-m-d H:i:s', $e[1])], $s['steps']),
        'keep' => TRAIL_DAYS,
        // When recording began (as far back as trails are kept), so the player can say why a session has none.
        'recordedSince' => $pdo->query('SELECT MIN(created_at) FROM view_trails')->fetchColumn() ?: null,
    ];
}

/* ── Heatmaps ────────────────────────────────────────────────────────────── */

/** The periods the Heatmaps view offers: the last week, or as far back as trails are kept. */
function heatmap_days($v): int
{
    return (int) $v === 7 ? 7 : TRAIL_DAYS;
}

/** A window's width as the kind of screen the Heatmaps view groups it under, at the site's own breakpoints (600: the page's narrow margins; 1060: the header's full menu). */
function screen_of(string $col): string
{
    return "CASE WHEN $col < 600 THEN 'phone' WHEN $col < 1060 THEN 'tablet' ELSE 'desktop' END";
}

/**
 * A page's heatmap over the last $days days, on one kind of screen: its recorded views, the typical window, every
 * click (where it landed, in how wide a window, on what), and how far down the views were read (views by the
 * percent of the page they reached). With the pages that have recordings, the most viewed first, to choose from;
 * no page asked for is the first of them.
 */
function heatmap(string $path, string $lang, string $screen, int $days): array
{
    trails_schema();
    $pdo = db();
    $q = function (string $sql, ...$args) use ($pdo): array { $st = $pdo->prepare($sql); $st->execute($args); return $st->fetchAll(); };
    $since = (new DateTimeImmutable('today'))->modify('-' . ($days - 1) . ' days')->format('Y-m-d H:i:s');
    $pages = $q('SELECT v.path, v.site_lang AS lang, COUNT(*) AS views FROM views v JOIN view_trails t ON t.vid = v.vid AND t.seq = 0
        WHERE v.created_at >= ? GROUP BY v.path, v.site_lang ORDER BY views DESC, v.path LIMIT 80', $since);
    if (!preg_match('#^/[a-z0-9/_.\-]{0,159}$#', $path)) [$path, $lang] = $pages ? [$pages[0]['path'], $pages[0]['lang']] : ['/', 'en'];
    if (!in_array($lang, SITE_LANGS, true)) $lang = 'en';

    $screens = ['desktop' => 0, 'tablet' => 0, 'phone' => 0];
    $views = [];
    foreach ($q('SELECT ' . screen_of('t.width') . ' AS screen, t.width, t.height, v.scroll FROM views v JOIN view_trails t ON t.vid = v.vid AND t.seq = 0
        WHERE v.path = ? AND v.site_lang = ? AND v.created_at >= ? AND t.width IS NOT NULL', $path, $lang, $since) as $v) {
        $screens[$v['screen']]++;
        if ($v['screen'] === $screen) $views[] = $v;
    }
    // The window most of them had, as near as a middle value comes.
    $middle = function (array $list): ?int { sort($list); return $list ? (int) $list[intdiv(count($list), 2)] : null; };
    $depth = array_fill(0, 101, 0);
    foreach ($views as $v) if ($v['scroll'] !== null) $depth[min(100, max(0, (int) $v['scroll']))]++;

    // The clicks, the newest first if there are very many; each label once, the clicks pointing at it.
    $labels = [];
    $index = [];
    $clicks = [];
    foreach ($q('SELECT width, x, y, fixed, kind, label, rage FROM view_clicks WHERE path = ? AND site_lang = ? AND created_at >= ? AND ' . screen_of('width') . ' = ?
        ORDER BY id DESC LIMIT 20000', $path, $lang, $since, $screen) as $c) {
        $key = $c['kind'] . '|' . $c['label'];
        if (!isset($index[$key])) { $index[$key] = count($labels); $labels[] = [$c['kind'], $c['label']]; }
        $clicks[] = [(int) $c['x'], (int) $c['y'], (int) $c['width'], (int) $c['fixed'], $index[$key], (int) $c['rage']];
    }
    return [
        'days' => $days,
        'keep' => TRAIL_DAYS,
        'path' => $path,
        'lang' => $lang,
        'screen' => $screen,
        'pages' => array_map(fn($p) => ['path' => $p['path'], 'lang' => $p['lang'], 'views' => (int) $p['views']], $pages),
        'screens' => $screens,
        'views' => count($views),
        'window' => $views ? [$middle(array_column($views, 'width')), $middle(array_column($views, 'height'))] : null,
        'depth' => $depth,
        'labels' => $labels,
        'clicks' => $clicks,
    ];
}

/* ── For the read ────────────────────────────────────────────────────────── */

/** What a click landed on, as the read names it (lib/trail.js: "a" link, "b" button, "f" field, "" anything else). */
const CLICK_KINDS = ['a' => 'link', 'b' => 'button', 'f' => 'field', '' => 'none'];

/**
 * How the site was used over the days $from to $to, for the read (insight_write): the visits as sessions, the ways
 * through the site and where they ended; and from the recordings, which are kept TRAIL_DAYS and so cover the last
 * days only, how far down each page was read and what was clicked on it. Counts only, and only what at least two
 * visitors share, so nothing in it is one visit's.
 */
function trail_summary(DateTimeImmutable $from, DateTimeImmutable $to): array
{
    trails_schema();
    $pdo = db();
    $q = function (string $sql, ...$args) use ($pdo): array { $st = $pdo->prepare($sql); $st->execute($args); return $st->fetchAll(); };
    $at = fn(DateTimeImmutable $d) => $d->format('Y-m-d H:i:s');
    $end = $to->modify('+1 day');
    $middle = function (array $list): ?int { sort($list); return $list ? (int) $list[intdiv(count($list), 2)] : null; };
    // A tally that knows who is in it, so only what at least two visitors share is passed on.
    $tally = function (array &$t, string $key, string $who, array $add = []): void {
        $t[$key] ??= ['sessions' => 0, 'who' => []];
        $t[$key]['sessions']++;
        $t[$key]['who'][$who] = true;
        foreach ($add as $k => $n) $t[$key][$k] = ($t[$key][$k] ?? 0) + $n;
    };
    $shared = function (array $t, string $name, int $limit): array {
        $t = array_filter($t, fn($r) => count($r['who']) >= 2);
        uasort($t, fn($a, $b) => $b['sessions'] <=> $a['sessions']);
        $out = [];
        foreach (array_slice($t, 0, $limit, true) as $key => $r) { unset($r['who']); $out[] = [$name => (string) $key] + $r; }
        return $out;
    };

    // The period's sessions, from the views (kept 13 months, so the whole period).
    $views = $q('SELECT visitor, path, seconds, created_at FROM views WHERE created_at >= ? AND created_at < ? ORDER BY visitor, created_at, id LIMIT 30000', $at($from), $at($end));
    $sessions = sessions_of($views, session_steps($from, null, $from->diff($to)->days + 1));
    $paths = $exits = $steps = [];
    foreach ($sessions as $s) {
        // The way through the site: its first four pages, a page opened again right after itself once.
        $pages = [];
        foreach ($s['views'] as $v) if (end($pages) !== $v['path']) $pages[] = $v['path'];
        $did = array_unique(array_column($s['steps'], 0));
        $tally($paths, implode(' > ', array_slice($pages, 0, 4)) . (count($pages) > 4 ? ' > …' : ''), $s['visitor'],
            ['downloaded' => (int) (in_array('download', $did, true) || in_array('download-win', $did, true)), 'shared' => (int) (in_array('app', $did, true) || in_array('open', $did, true))]);
        if (!$did) $tally($exits, end($pages), $s['visitor']);
        // The page in view when a step was taken: the last one opened before it. Once a session for each.
        $taken = [];
        foreach ($s['steps'] as [$name, $time]) {
            $page = $s['views'][0]['path'];
            foreach ($s['views'] as $v) if (strtotime($v['created_at']) <= $time) $page = $v['path'];
            $taken["$name $page"] = [$name, $page];
        }
        foreach ($taken as [$name, $page]) { $steps[$name] ??= []; $tally($steps[$name], $page, $s['visitor']); }
    }
    $out = ['sessions' => [
        'count' => count($sessions),
        'pages' => $middle(array_map(fn($s) => count($s['views']), $sessions)),
        'seconds' => $middle(array_map(fn($s) => array_sum(array_map(fn($v) => (int) $v['seconds'], $s['views'])), $sessions)),
        'paths' => $shared($paths, 'path', 12),
        'exits' => $shared($exits, 'path', 8),
        'steps' => ['download' => $shared($steps['download'] ?? [], 'path', 6), 'download-win' => $shared($steps['download-win'] ?? [], 'path', 6), 'app' => $shared($steps['app'] ?? [], 'path', 6), 'open' => $shared($steps['open'] ?? [], 'path', 6)],
    ]];

    // The recordings: of the period's last TRAIL_DAYS at most, and not before recording began.
    $since = max($from, (new DateTimeImmutable('today'))->modify('-' . (TRAIL_DAYS - 1) . ' days'));
    $first = $pdo->query('SELECT MIN(created_at) FROM view_trails')->fetchColumn();
    if ($first) $since = max($since, new DateTimeImmutable(substr($first, 0, 10)));
    if (!$first || $since >= $end) return $out + ['recordings' => null];
    $range = [$at($since), $at($end)];
    $all = (int) $q('SELECT COUNT(*) AS n FROM views WHERE created_at >= ? AND created_at < ?', ...$range)[0]['n'];
    // A view counts as recorded when its first batch came in, as on the heatmaps.
    $recorded = (int) $q('SELECT COUNT(*) AS n FROM views v JOIN view_trails t ON t.vid = v.vid AND t.seq = 0 WHERE v.created_at >= ? AND v.created_at < ?', ...$range)[0]['n'];
    $pages = $q('SELECT v.path, COUNT(*) AS views, COUNT(DISTINCT v.visitor) AS visitors, SUM(v.scroll IS NOT NULL) AS scrolled,
            SUM(v.scroll >= 25) AS r25, SUM(v.scroll >= 50) AS r50, SUM(v.scroll >= 75) AS r75, SUM(v.scroll >= 100) AS r100
        FROM views v JOIN view_trails t ON t.vid = v.vid AND t.seq = 0
        WHERE v.created_at >= ? AND v.created_at < ? GROUP BY v.path HAVING visitors >= 2 ORDER BY views DESC, v.path LIMIT 12', ...$range);
    $clicks = [];
    foreach ($q('SELECT c.path, c.kind, c.label, COUNT(*) AS clicks, COUNT(DISTINCT v.visitor) AS visitors, COUNT(DISTINCT CASE WHEN c.rage = 1 THEN v.visitor END) AS raging
        FROM view_clicks c JOIN views v ON v.vid = c.vid
        WHERE c.created_at >= ? AND c.created_at < ? GROUP BY c.path, c.kind, c.label HAVING visitors >= 2 ORDER BY visitors DESC, clicks DESC', ...$range) as $c)
        $clicks[$c['path']][] = $c;
    $click = fn($c, array $only) => array_intersect_key(['kind' => CLICK_KINDS[$c['kind']] ?? 'none', 'label' => $c['label'] === '' ? '(no label)' : $c['label'],
        'clicks' => (int) $c['clicks'], 'visitors' => (int) $c['visitors']], array_flip($only));
    return $out + ['recordings' => [
        'from' => $since->format('Y-m-d'),
        'to' => $to->format('Y-m-d'),
        'views' => $recorded,
        'share' => $all ? round($recorded / $all, 2) : null,
        'pages' => array_map(function ($p) use ($clicks, $click) {
            $own = $clicks[$p['path']] ?? [];
            $n = (int) $p['scrolled'];
            return [
                'path' => $p['path'],
                'views' => (int) $p['views'],
                'reached' => $n ? array_map(fn($k) => round((int) $p["r$k"] / $n, 2), ['25' => 25, '50' => 50, '75' => 75, '100' => 100]) : null,
                'clicked' => array_map(fn($c) => $click($c, ['kind', 'label', 'clicks', 'visitors']), array_slice(array_values(array_filter($own, fn($c) => $c['kind'] !== '')), 0, 8)),
                'none' => array_map(fn($c) => $click($c, ['label', 'clicks', 'visitors']), array_slice(array_values(array_filter($own, fn($c) => $c['kind'] === '')), 0, 5)),
                'rage' => array_map(fn($c) => $click($c, ['kind', 'label']) + ['visitors' => (int) $c['raging']], array_values(array_filter($own, fn($c) => $c['raging'] >= 2))),
            ];
        }, $pages),
    ]];
}
