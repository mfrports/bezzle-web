<?php
/**
 * The site's own visitor numbers, for the admin area's Visitors view. No cookies, nothing kept in the browser for it,
 * no IP addresses. A page view keeps the page and its language, where the visit came from (the other site's name, or
 * the utm_source / ref its link was tagged with), the browser's language and time zone, the kind of device and
 * browser, and how long and how far down the page was read.
 *
 * Visitors are told apart for one day only: by a hash of address and browser under a key that is drawn each day and
 * deleted the next, after which no hash can be made again. So a view can't be tied to a person, nor to the same
 * person's views on another day.
 *
 * The steps after a view (view_events), tied to the day's visitor so the way from a visit to a download can be
 * followed: download (the zip), app (the browser version opened, from a shared design's page), open (a shared
 * design handed to Bezzle on the Mac, its bezzle:// link). The pages report them as they are taken (lib/track.js).
 *
 * The maker's own visits are not counted: the browser signed in to the admin area, and every device on a network the
 * admin area was opened from in the last 30 days (view_networks).
 *
 * Written by hit.php; read by admin.php (analytics, live, insight, and the read's actions ticked off). Made on first use.
 */
require_once __DIR__ . '/_admin.php';

/** The site's languages, as its paths have them (/de/…, /fr/…, /it/…; English without). */
const SITE_LANGS = ['en', 'de', 'fr', 'it'];
/** The steps a visit can take after a page, as the pages report them: download is the Mac's zip, download-win an installer of Bezzle for Windows. */
const VIEW_STEPS = ['download', 'download-win', 'app', 'open'];
/** Either download, in SQL. */
const DOWNLOADS = "('download', 'download-win')";

function views_schema(): void
{
    static $done = false;
    if ($done) return;
    $done = true;
    $pdo = db();
    $pdo->exec("CREATE TABLE IF NOT EXISTS views (
        id INT AUTO_INCREMENT PRIMARY KEY,
        vid CHAR(16) NOT NULL,
        visitor CHAR(16) NOT NULL,
        path VARCHAR(160) NOT NULL,
        site_lang CHAR(2) NOT NULL DEFAULT 'en',
        missing TINYINT(1) NOT NULL DEFAULT 0,
        entry TINYINT(1) NOT NULL DEFAULT 0,
        channel VARCHAR(12) NULL,
        referrer VARCHAR(100) NULL,
        source VARCHAR(48) NULL,
        campaign VARCHAR(48) NULL,
        device VARCHAR(10) NOT NULL,
        browser VARCHAR(10) NOT NULL,
        lang VARCHAR(16) NULL,
        zone VARCHAR(48) NULL,
        seconds SMALLINT UNSIGNED NULL,
        scroll TINYINT UNSIGNED NULL,
        created_at DATETIME NOT NULL,
        INDEX (created_at, visitor),
        INDEX (vid),
        INDEX (visitor)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");
    $pdo->exec("CREATE TABLE IF NOT EXISTS view_events (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(16) NOT NULL,
        visitor CHAR(16) NOT NULL,
        created_at DATETIME NOT NULL,
        INDEX (created_at),
        INDEX (visitor)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");
    // Today's key for the visitor hash; yesterday's is deleted as soon as today's is drawn.
    $pdo->exec("CREATE TABLE IF NOT EXISTS view_salts (day DATE PRIMARY KEY, salt CHAR(64) NOT NULL) ENGINE=InnoDB");
    // The networks the admin area was opened from lately, as keyed hashes: the maker's own, not counted.
    $pdo->exec("CREATE TABLE IF NOT EXISTS view_networks (network CHAR(64) PRIMARY KEY, seen_at DATETIME NOT NULL) ENGINE=InnoDB");
    // The model's last read of each period (7, 30 or 90 days).
    $pdo->exec("CREATE TABLE IF NOT EXISTS view_insights (
        days SMALLINT PRIMARY KEY,
        body MEDIUMTEXT NOT NULL,
        created_at DATETIME NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");
    // The reads' actions the maker ticked off, done or set aside, with a note: the next read is told (insight_write).
    $pdo->exec("CREATE TABLE IF NOT EXISTS view_actions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        status VARCHAR(8) NOT NULL,
        title VARCHAR(255) NOT NULL,
        kind VARCHAR(8) NOT NULL,
        place VARCHAR(255) NOT NULL DEFAULT '',
        how TEXT NOT NULL,
        note VARCHAR(500) NULL,
        created_at DATETIME NOT NULL,
        INDEX (created_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");
}

/* ── Counting ────────────────────────────────────────────────────────────── */

/** A browser a person uses: not a crawler, a link preview or a headless browser. */
function counted_browser(string $ua): bool
{
    return str_contains($ua, 'Mozilla/') && !preg_match('/bot|crawl|spider|slurp|preview|headless|lighthouse|pingdom|uptime|monitor|playwright/i', $ua);
}

/** Whether the request carries a live admin session (_admin.php's cookie): the maker's own visits are not counted. */
function admin_signed_in(): bool
{
    try { return admin_seen() !== null; } catch (Throwable $e) { return false; }
}

/** How long a network stays uncounted after the admin area was last opened from it. */
const OWN_NETWORK_DAYS = 30;

/**
 * The network a request comes from: an IPv4 address as it is, an IPv6 address by its first 64 bits, which every
 * device on one home network shares. Null for loopback, private, reserved and carrier NAT addresses (development,
 * the tests, a proxy in front): never the maker's own network as the site sees it.
 */
function request_network(): ?string
{
    $ip = (string) ($_SERVER['REMOTE_ADDR'] ?? '');
    if (preg_match('/^::ffff:(\d+\.\d+\.\d+\.\d+)$/i', $ip, $m)) $ip = $m[1];
    if (!filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) return null;
    if (!str_contains($ip, ':')) return (ip2long($ip) & 0xFFC00000) === 0x64400000 ? null : $ip; // 100.64.0.0/10
    return inet_ntop(substr(inet_pton($ip), 0, 8) . str_repeat("\0", 8)) . '/64';
}

/** A network as view_networks keeps it: hashed under the server's key, so the table holds no address. */
function network_key(string $network): string
{
    return hash_hmac('sha256', $network, SERVER_KEY);
}

/** The admin area is open: its network goes uncounted for OWN_NETWORK_DAYS. Never stands in the way. */
function remember_own_network(): void
{
    $net = request_network();
    if ($net === null) return;
    try {
        views_schema();
        db()->prepare('REPLACE INTO view_networks (network, seen_at) VALUES (?, ?)')->execute([network_key($net), date('Y-m-d H:i:s')]);
        db()->prepare('DELETE FROM view_networks WHERE seen_at < ?')->execute([date('Y-m-d H:i:s', strtotime('-' . OWN_NETWORK_DAYS . ' days'))]);
    } catch (Throwable $e) { error_log('own network not kept: ' . $e->getMessage()); }
}

/** Whether the request comes from a network the admin area was opened from lately: the maker's phone, another browser. */
function own_network(): bool
{
    $net = request_network();
    if ($net === null) return false;
    try {
        views_schema();
        $st = db()->prepare('SELECT 1 FROM view_networks WHERE network = ? AND seen_at > ?');
        $st->execute([network_key($net), date('Y-m-d H:i:s', strtotime('-' . OWN_NETWORK_DAYS . ' days'))]);
        return (bool) $st->fetchColumn();
    } catch (Throwable $e) { return false; }
}

/** Whether this request counts: a person's browser, and not the maker's own (signed in, or on their network). */
function counted_request(): bool
{
    static $counted = null;
    return $counted ??= counted_browser($_SERVER['HTTP_USER_AGENT'] ?? '') && !admin_signed_in() && !own_network();
}

/** Who is visiting, for today only: a hash of address and browser under today's key. */
function visitor_id(): string
{
    static $salt = null;
    if ($salt === null) {
        $pdo = db();
        $day = date('Y-m-d');
        $read = $pdo->prepare('SELECT salt FROM view_salts WHERE day = ?');
        $read->execute([$day]);
        $salt = $read->fetchColumn();
        if (!$salt) {
            // The day's first view draws its key and deletes the older ones: their hashes can't be made again.
            $pdo->prepare('INSERT IGNORE INTO view_salts (day, salt) VALUES (?, ?)')->execute([$day, bin2hex(random_bytes(32))]);
            $pdo->prepare('DELETE FROM view_salts WHERE day < ?')->execute([$day]);
            $read->execute([$day]);
            $salt = $read->fetchColumn();
        }
    }
    return substr(hash('sha256', $salt . '|' . ($_SERVER['REMOTE_ADDR'] ?? '') . '|' . ($_SERVER['HTTP_USER_AGENT'] ?? '')), 0, 16);
}

/** Mac, iPhone, iPad, Windows, Android, Linux, ChromeOS or Other. An iPad asks for the Mac site, so the page says whether it has touch. */
function ua_device(string $ua, bool $touch): string
{
    return match (true) {
        (bool) preg_match('/iPhone|iPod/', $ua) => 'iPhone',
        str_contains($ua, 'iPad'), str_contains($ua, 'Macintosh') && $touch => 'iPad',
        str_contains($ua, 'Macintosh') => 'Mac',
        str_contains($ua, 'Android') => 'Android',
        str_contains($ua, 'Windows') => 'Windows',
        str_contains($ua, 'CrOS') => 'ChromeOS',
        str_contains($ua, 'Linux') => 'Linux',
        default => 'Other',
    };
}

/** The browser family. Arc, Brave and Vivaldi say they are Chrome, and count as Chrome. */
function ua_browser(string $ua): string
{
    return match (true) {
        str_contains($ua, 'Edg/'), str_contains($ua, 'EdgiOS') => 'Edge',
        str_contains($ua, 'OPR/'), str_contains($ua, 'Opera') => 'Opera',
        str_contains($ua, 'DuckDuckGo/') => 'DuckDuckGo',
        str_contains($ua, 'Firefox/'), str_contains($ua, 'FxiOS') => 'Firefox',
        str_contains($ua, 'Chrome/'), str_contains($ua, 'CriOS') => 'Chrome',
        str_contains($ua, 'Safari/') => 'Safari',
        default => 'Other',
    };
}

/** The other site a visit came from, without www.; null for none and for this site itself. */
function referrer_host(string $host): ?string
{
    $h = strtolower(trim($host));
    if (!preg_match('/^[a-z0-9][a-z0-9.\-]{0,99}$/', $h)) return null;
    $h = preg_replace('/^(www|m|l|lm|mobile)\./', '', $h);
    $own = preg_replace('/^www\./', '', strtolower((string) parse_url(SITE_URL, PHP_URL_HOST)));
    if ($h === $own || $h === 'bezzle.ch' || $h === 'localhost') return null;
    return $h;
}

/** A utm_source, ref or campaign name as a short lowercase slug; null when there is none. */
function view_slug(string $s): ?string
{
    $s = trim(preg_replace('/[^a-z0-9._\-]+/', '-', strtolower($s)), '-');
    return $s === '' ? null : substr($s, 0, 48);
}

/**
 * Where a visit came from, as one of six channels: Campaign (a tagged link), AI (an assistant that linked here),
 * Search, Social, Referral (any other site), Direct (no referrer: typed, a bookmark, an app, most e-mail, and the
 * link to a shared design that Bezzle copies).
 */
function channel_of(?string $host, ?string $source): string
{
    if ($source) return 'Campaign';
    if (!$host) return 'Direct';
    $is = fn(array $names) => (bool) array_filter($names, fn($n) => $host === $n || str_ends_with($host, '.' . $n));
    if ($is(['chatgpt.com', 'chat.openai.com', 'perplexity.ai', 'claude.ai', 'gemini.google.com', 'copilot.microsoft.com', 'chat.mistral.ai', 'poe.com', 'phind.com', 'you.com', 'chat.deepseek.com', 'meta.ai', 'grok.com'])) return 'AI';
    if (preg_match('/(^|\.)(google|bing|yahoo|yandex|baidu|ecosia|duckduckgo|startpage|qwant|kagi|brave|mojeek|swisscows|search)\./', $host)) return 'Search';
    if ($is(['news.ycombinator.com', 'hn.algolia.com', 'reddit.com', 'x.com', 'twitter.com', 't.co', 'bsky.app', 'threads.net', 'threads.com', 'linkedin.com', 'lnkd.in', 'facebook.com', 'instagram.com', 'youtube.com', 'youtu.be', 'producthunt.com', 'lobste.rs', 'tildes.net', 'tiktok.com', 'mastodon.social', 'dribbble.com', 'behance.net', 'designernews.co', 'pinterest.com'])
        || preg_match('/(^|\.)mastodon\.|\.social$/', $host)) return 'Social';
    return 'Referral';
}

/** A page's path as it is kept: lowercase, and a shared design's page without anything after it (old links carried a code there). */
function view_path($p): string
{
    $path = strtolower((string) $p);
    if (str_starts_with($path, '/open.html')) return '/open.html';
    return preg_match('#^/[a-z0-9/_.\-]{0,159}$#', $path) ? $path : '/';
}

/** One page view, as hit.php received it from the page (src/lib/track.js). */
function record_view(array $in, string $ua): void
{
    views_schema();
    // Where the visit came from is only known on the page it landed on.
    $entry = !empty($in['n']);
    $host = $entry ? referrer_host((string) ($in['r'] ?? '')) : null;
    $source = $entry ? view_slug((string) ($in['s'] ?? '')) : null;
    $lang = preg_match('/^([a-z]{2,3})(?:-([a-z0-9]{2,8}))?$/i', (string) ($in['l'] ?? ''), $m) ? strtolower($m[1]) . (isset($m[2]) ? '-' . strtoupper($m[2]) : '') : null;
    $zone = (string) ($in['z'] ?? '');
    if (!preg_match('#^[A-Za-z_]+(?:/[A-Za-z0-9_+\-]+){0,2}$#', $zone) || strlen($zone) > 48) $zone = null;
    db()->prepare('INSERT INTO views (vid, visitor, path, site_lang, missing, entry, channel, referrer, source, campaign, device, browser, lang, zone, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')->execute([
        $in['id'], visitor_id(), view_path($in['p'] ?? '/'), in_array($in['sl'] ?? '', SITE_LANGS, true) ? $in['sl'] : 'en', empty($in['nf']) ? 0 : 1, $entry ? 1 : 0,
        $entry ? channel_of($host, $source) : null, $host, $source, $entry ? view_slug((string) ($in['c'] ?? '')) : null,
        ua_device($ua, !empty($in['tp'])), ua_browser($ua), $lang, $zone, date('Y-m-d H:i:s'),
    ]);
    // Views are kept for 13 months; now and then the older ones go.
    if (random_int(1, 200) === 1) {
        $cut = date('Y-m-d H:i:s', strtotime('-13 months'));
        db()->prepare('DELETE FROM views WHERE created_at < ?')->execute([$cut]);
        db()->prepare('DELETE FROM view_events WHERE created_at < ?')->execute([$cut]);
    }
}

/** A step after a view (one of VIEW_STEPS), tied to today's visitor so the way to it can be followed. Never stands in the way. */
function count_event(string $name): void
{
    if (!in_array($name, VIEW_STEPS, true)) return;
    try {
        if (!counted_request()) return;
        views_schema();
        db()->prepare('INSERT INTO view_events (name, visitor, created_at) VALUES (?, ?, ?)')->execute([$name, visitor_id(), date('Y-m-d H:i:s')]);
    } catch (Throwable $e) { error_log("$name not counted: " . $e->getMessage()); }
}

/* ── Reading ─────────────────────────────────────────────────────────────── */

/** The periods the Visitors view offers as buttons, and the read is written for. */
const ANALYTICS_PERIODS = [7, 30, 90];

/** One of those periods; 30 for anything else. */
function analytics_days($v): int
{
    return in_array((int) $v, ANALYTICS_PERIODS, true) ? (int) $v : 30;
}

/** The last $days days, today included (Zurich time): the first and the last day. */
function period_of_days(int $days): array
{
    $today = new DateTimeImmutable('today');
    return [$today->modify('-' . ($days - 1) . ' days'), $today];
}

/**
 * Days of the visitor's own choosing (?from=Y-m-d&to=Y-m-d, both included, Zurich time; one alone is a single day),
 * or null when none are asked for. They end today at the latest and begin no earlier than the counts go back
 * (13 months); the two may come in either order.
 */
function analytics_period(array $in): ?array
{
    $day = function ($v): ?DateTimeImmutable {
        if (!is_string($v) || !preg_match('/^\d{4}-\d{2}-\d{2}$/', $v)) return null;
        $d = DateTimeImmutable::createFromFormat('!Y-m-d', $v);
        return $d && $d->format('Y-m-d') === $v ? $d : null;
    };
    $from = $day($in['from'] ?? null);
    $to = $day($in['to'] ?? null);
    if (!$from && !$to) return null;
    $from ??= $to;
    $to ??= $from;
    if ($from > $to) [$from, $to] = [$to, $from];
    $today = new DateTimeImmutable('today');
    $first = $today->modify('-13 months');
    $to = min(max($to, $first), $today);
    $from = min(max($from, $first), $to);
    return [$from, $to];
}

/** The app's releases with their days, as the deploy wrote them from the release notes (scripts/api-facts.mjs), newest first. */
/** Bezzle for Windows, as the Deploy workflow found its feed (scripts/api-facts.mjs): null until its first release. */
function site_windows(): ?array
{
    $file = __DIR__ . '/_windows.json';
    $w = is_file($file) ? json_decode((string) file_get_contents($file), true) : null;
    return is_array($w) && isset($w['version']) ? $w : null;
}

function site_releases(): array
{
    $file = __DIR__ . '/_releases.json';
    $list = is_file($file) ? json_decode((string) file_get_contents($file), true) : null;
    return is_array($list) ? array_values(array_filter($list, fn($r) => is_array($r) && isset($r['version'], $r['date']))) : [];
}

/**
 * Everything the Visitors view shows for the days $from to $to (both included, Zurich time), with the same number
 * of days before them for comparison.
 */
function analytics(DateTimeImmutable $from, DateTimeImmutable $to): array
{
    views_schema();
    $pdo = db();
    $q = function (string $sql, ...$args) use ($pdo): array { $st = $pdo->prepare($sql); $st->execute($args); return $st->fetchAll(); };
    $today = new DateTimeImmutable('today');
    $days = $from->diff($to)->days + 1;
    $before = $from->modify("-$days days");
    $at = fn(DateTimeImmutable $d) => $d->format('Y-m-d H:i:s');
    $cur = [$at($from), $at($to->modify('+1 day'))];
    $int = fn($v) => $v === null ? null : (int) round((float) $v);

    $totals = function (array $range) use ($q, $int): array {
        $v = $q('SELECT COUNT(DISTINCT visitor) AS visitors, COUNT(*) AS views, AVG(seconds) AS seconds, AVG(scroll) AS scroll FROM views WHERE created_at >= ? AND created_at < ?', ...$range)[0];
        // A bounce: one page, and no step after it.
        $bounced = (int) $q('SELECT COUNT(*) AS n FROM (SELECT visitor FROM views WHERE created_at >= ? AND created_at < ? GROUP BY visitor HAVING COUNT(*) = 1) lone
            WHERE NOT EXISTS (SELECT 1 FROM view_events e WHERE e.visitor = lone.visitor)', ...$range)[0]['n'];
        $ev = $q("SELECT SUM(name IN " . DOWNLOADS . ") AS downloads, SUM(name = 'download-win') AS windows, SUM(name = 'app') AS app, SUM(name = 'open') AS opened FROM view_events WHERE created_at >= ? AND created_at < ?", ...$range)[0];
        $visitors = (int) $v['visitors'];
        return [
            'visitors' => $visitors,
            'views' => (int) $v['views'],
            'seconds' => $int($v['seconds']),
            'scroll' => $int($v['scroll']),
            'bounce' => $visitors ? round($bounced / $visitors, 3) : null,
            'downloads' => (int) $ev['downloads'],
            // Of them, Bezzle for Windows' installers.
            'downloadsWin' => (int) $ev['windows'],
            // A shared design followed: opened in the browser version, or handed to Bezzle on the Mac.
            'shared' => (int) $ev['app'] + (int) $ev['opened'],
        ];
    };

    // Day by day, both periods in one go, every day present.
    $byDay = [];
    foreach ($q('SELECT DATE(created_at) AS day, COUNT(DISTINCT visitor) AS visitors, COUNT(*) AS views, AVG(seconds) AS seconds FROM views WHERE created_at >= ? AND created_at < ? GROUP BY DATE(created_at)', $at($before), $cur[1]) as $r)
        $byDay[$r['day']] = ['visitors' => (int) $r['visitors'], 'views' => (int) $r['views'], 'seconds' => $int($r['seconds'])];
    foreach ($q("SELECT DATE(created_at) AS day, SUM(name IN " . DOWNLOADS . ") AS downloads, SUM(name NOT IN " . DOWNLOADS . ") AS shared FROM view_events WHERE created_at >= ? AND created_at < ? GROUP BY DATE(created_at)", $at($before), $cur[1]) as $r) {
        $byDay[$r['day']]['downloads'] = (int) $r['downloads'];
        $byDay[$r['day']]['shared'] = (int) $r['shared'];
    }
    $series = function (DateTimeImmutable $start) use ($days, $byDay): array {
        $out = [];
        for ($i = 0; $i < $days; $i++) {
            $day = $start->modify("+$i days")->format('Y-m-d');
            $out[] = ['day' => $day] + ($byDay[$day] ?? []) + ['visitors' => 0, 'views' => 0, 'seconds' => null, 'downloads' => 0, 'shared' => 0];
        }
        return $out;
    };

    // Visitors, and how many of them downloaded Bezzle the same day, by one of the views' columns.
    $split = fn(string $col, string $where = '1', int $limit = 20) => $q("SELECT v.$col AS name, COUNT(DISTINCT v.visitor) AS visitors, COUNT(DISTINCT e.visitor) AS downloaded
        FROM views v LEFT JOIN view_events e ON e.visitor = v.visitor AND e.name IN " . DOWNLOADS . "
        WHERE $where AND v.created_at >= ? AND v.created_at < ? GROUP BY v.$col ORDER BY visitors DESC LIMIT $limit", ...$cur);
    $rows = fn(array $rs, string $key) => array_map(fn($r) => [$key => $r['name'], 'visitors' => (int) $r['visitors'], 'downloaded' => (int) $r['downloaded']], $rs);
    $distinct = fn(string $table, string $where) => (int) $q("SELECT COUNT(DISTINCT visitor) AS n FROM $table WHERE $where AND created_at >= ? AND created_at < ?", ...$cur)[0]['n'];

    $heat = array_fill(0, 7, array_fill(0, 24, 0));
    foreach ($q('SELECT WEEKDAY(created_at) AS d, HOUR(created_at) AS h, COUNT(*) AS n FROM views WHERE created_at >= ? AND created_at < ? GROUP BY d, h', ...$cur) as $r)
        $heat[(int) $r['d']][(int) $r['h']] = (int) $r['n'];

    $now = $totals($cur);
    $siteLangs = array_fill_keys(SITE_LANGS, 0);
    foreach ($q('SELECT site_lang, COUNT(DISTINCT visitor) AS visitors FROM views WHERE created_at >= ? AND created_at < ? GROUP BY site_lang', ...$cur) as $r)
        if (isset($siteLangs[$r['site_lang']])) $siteLangs[$r['site_lang']] = (int) $r['visitors'];

    return [
        'days' => $days,
        'from' => $from->format('Y-m-d'),
        'to' => $to->format('Y-m-d'),
        'today' => $today->format('Y-m-d'),
        // Days of the visitor's own choosing, rather than one of the periods the buttons offer.
        'custom' => $to != $today || !in_array($days, ANALYTICS_PERIODS, true),
        // When counting began: the days before it are empty because nothing was counted, not because nobody came.
        'since' => $pdo->query('SELECT MIN(created_at) FROM views')->fetchColumn() ?: null,
        'now' => live()['now'],
        'totals' => $now,
        'previous' => $totals([$at($before), $cur[0]]),
        'daily' => $series($from),
        'previousDaily' => $series($before),
        'pages' => array_map(fn($r) => [
            'path' => $r['path'], 'views' => (int) $r['views'], 'visitors' => (int) $r['visitors'], 'entries' => (int) $r['entries'],
            'seconds' => $int($r['seconds']), 'scroll' => $int($r['scroll']), 'missing' => (bool) $r['missing'],
            'langs' => ['de' => (int) $r['de'], 'fr' => (int) $r['fr'], 'it' => (int) $r['it']],
        ], $q("SELECT path, COUNT(*) AS views, COUNT(DISTINCT visitor) AS visitors, SUM(entry) AS entries, AVG(seconds) AS seconds, AVG(scroll) AS scroll,
                SUM(site_lang = 'de') AS de, SUM(site_lang = 'fr') AS fr, SUM(site_lang = 'it') AS it, MAX(missing) AS missing
            FROM views WHERE created_at >= ? AND created_at < ? GROUP BY path ORDER BY views DESC, path LIMIT 60", ...$cur)),
        'channels' => $rows($split('channel', 'v.entry = 1'), 'channel'),
        'referrers' => array_map(fn($r) => $r + ['channel' => channel_of($r['host'], null)], $rows($split('referrer', 'v.referrer IS NOT NULL', 15), 'host')),
        'campaigns' => $rows($split('source', 'v.source IS NOT NULL', 10), 'source'),
        'devices' => $rows($split('device'), 'device'),
        'browsers' => $rows($split('browser'), 'browser'),
        'languages' => array_map(fn($r) => ['lang' => $r['l'], 'visitors' => (int) $r['visitors']], $q("SELECT LOWER(SUBSTRING_INDEX(lang, '-', 1)) AS l, COUNT(DISTINCT visitor) AS visitors
            FROM views WHERE lang IS NOT NULL AND created_at >= ? AND created_at < ? GROUP BY l ORDER BY visitors DESC LIMIT 12", ...$cur)),
        // Visitors who read the site in each of its languages.
        'siteLangs' => $siteLangs,
        'zones' => array_map(fn($r) => ['zone' => $r['zone'], 'visitors' => (int) $r['visitors']], $q('SELECT zone, COUNT(DISTINCT visitor) AS visitors
            FROM views WHERE zone IS NOT NULL AND created_at >= ? AND created_at < ? GROUP BY zone ORDER BY visitors DESC LIMIT 80', ...$cur)),
        // Page views by weekday (Monday first) and hour, Zurich time.
        'heat' => $heat,
        'funnel' => [
            'visitors' => $now['visitors'],
            'downloadPage' => $distinct('views', "path = '/download.html'"),
            'downloaded' => $distinct('view_events', "name IN " . DOWNLOADS),
            // A shared design's page, and where it was followed: the browser version, or Bezzle on the Mac.
            'link' => $distinct('views', "path = '/open.html'"),
            'app' => $distinct('view_events', "name = 'app'"),
            'opened' => $distinct('view_events', "name = 'open'"),
        ],
        'releases' => array_values(array_filter(site_releases(), fn($r) => $r['date'] >= $before->format('Y-m-d') && $r['date'] <= $to->format('Y-m-d'))),
    ];
}

/** Who is on the site right now: visitors with a view in the last five minutes, and their pages. */
function live(): array
{
    views_schema();
    $since = date('Y-m-d H:i:s', time() - 300);
    $st = db()->prepare('SELECT path, COUNT(DISTINCT visitor) AS visitors FROM views WHERE created_at >= ? GROUP BY path ORDER BY visitors DESC');
    $st->execute([$since]);
    $pages = array_map(fn($r) => ['path' => $r['path'], 'visitors' => (int) $r['visitors']], $st->fetchAll());
    $st = db()->prepare('SELECT COUNT(DISTINCT visitor) FROM views WHERE created_at >= ?');
    $st->execute([$since]);
    return ['now' => (int) $st->fetchColumn(), 'pages' => $pages];
}

/* ── The read ────────────────────────────────────────────────────────────── */

const INSIGHT_SYSTEM = <<<'TXT'
You write a short read of the visitor numbers of bezzle.ch for the one person who makes Bezzle. They open the admin area, read what you wrote, and decide what to work on next. Write for them: plain, direct and specific, in English.

About Bezzle and the site:
- Bezzle is a free design app for the Mac: a complete design studio for apps, websites, social posts and print. It is free, with every feature included: no subscription, no account, no trial, no paid tier. It needs macOS 26 or later. One person in Switzerland makes it.
- The only place to get it is https://bezzle.ch/download.html (for the Mac a zip, signed and notarized by Apple; for Windows, once it is out, an installer that is not signed, so Windows' SmartScreen asks before running it). There is nothing to buy: success is more of the right people downloading it and using it.
- The site is in English, German, French and Italian. English pages have plain paths (/support.html); the others live under /de, /fr and /it and are counted together with their English page here, with each language's share given.
- Pages: / (home: a scroll story that rebuilds Bezzle's window and plays one feature per chapter: files from Adobe XD, Figma and Sketch, every size and dark mode, components, prototypes, hand-off, cutouts, dark mode in one click, decks of posts, live co-editing, AI assistants), /download.html (the download, with the install played on a Mac, or on a Windows PC for visitors on Windows once Bezzle for Windows is out), /releases.html (What's New), /docs/ and /docs/<topic>.html (in-depth documentation, one page per tool or topic), /support.html (questions and answers), /privacy.html, /open.html (a shared design's link: whoever gets the link lands here, and opens the design in Bezzle on a Mac, or follows it live in the browser version at /app/ without a Mac).
- The facts for anything you write to be posted or sent, and the only ones (never invent features, numbers, quotes or reviews): Bezzle is a complete design studio for the Mac, and it is free: not a trial, not freemium. It opens Adobe XD, Figma and Sketch files with their artboards, layers, masks, text and pictures, and brings in any website as layers. Components and styles: every copy follows its component. An artboard dragged to a new size composes its layout again, and one click draws its dark look. Prototypes play in a real device; developers measure everything and copy CSS or SwiftUI. Remove Background makes a cutout on the Mac in one click. A design can be shared by a link and edited together live, end-to-end encrypted. It works with AI assistants through a server that runs only on the Mac. It exports PNG, JPEG, WebP, AVIF, SVG and PDF. It needs macOS 26 or later. Made by one person in Switzerland, who writes as "I".
- Who can install it: people on a Mac with macOS 26, and on a PC with Windows 11 once Bezzle for Windows is out (the input says whether it is). Visitors on an iPhone, iPad or Android, and on Windows before then, can read about it and can open a shared design in the browser, but not install it. Bezzle for Windows does not have Remove Background yet.

How the numbers were counted. The site counts itself, without cookies:
- visitors: different people, told apart for one day only; someone who comes on three days counts three times.
- views: pages viewed. seconds: the average time a page was actively read. scroll: how far down a page was read, in percent.
- bounce: the share of visitors who saw one page and took no step after it.
- downloads: downloads of the app started from the site, the Mac's and Windows' together; downloadsWin: of them, Bezzle for Windows' installers. shared: shared designs followed from /open.html, in the browser version or in Bezzle.
- channels say where a visit started: Search; Social (including Hacker News, Reddit, Product Hunt, Dribbble and Behance); AI (assistants such as ChatGPT, Perplexity and Claude that linked here); Referral (any other site; mfrports.github.io is the site's old address, which sends its visitors here, and github.com is where the downloads live); Campaign (links tagged with utm_source or ref); Direct (no referrer: typed, a bookmark, an app, most e-mail, and most links to a shared design, which people send in messages).
- "downloaded" next to a channel, device or browser counts the visitors among them who downloaded the app the same day.
- siteLangs is how many visitors read the site in each of its languages; languages is the language their browser asks for. heat is page views by weekday (Monday first) and hour, Zurich time.
- funnel: of the visitors, those who saw the download page and those who downloaded; and of those who came to a shared design's page (link), those who opened it in the browser version (app) or in Bezzle (opened).
- "previous" is the same number of days just before. "since" is when counting began: days before it are empty because nothing was counted yet, not because nobody came.

How the visits went, from the admin area's Sessions and Heatmaps views. Counts only, and only what at least two visitors share; a click two visitors made is no pattern either:
- sessions: the period's visits as sessions, one visitor's pages with no gap of more than 30 minutes. pages and seconds are the middle session's. paths: the most common ways through the site, the first four pages in order ("…" when it went on), with how many sessions took each and how many of those downloaded. exits: the last page of sessions that took no step. steps: the page in view when a download began, or a shared design was opened.
- recordings: how the pages were used, from the recordings of the period's last days only (they are kept 30 days: from and to say which). views is the views recorded and share their part of all views: visitors can turn recording off. For each page: reached, the share of its recorded views that got 25, 50, 75 and 100 percent of the way down (the home page is one long scroll story, so its depth is how much of the story was watched); clicked, the links, buttons and fields clicked or tapped most, by their label, with clicks and visitors; none, clicks on things that do nothing, a heading by its words or else the kind of element (img, p), which people often take for a link; rage, what visitors clicked three or more times fast on one spot, a sign it did not respond as they expected.
- Use them to say where and why a page loses people: a story most leave before the chapter that would win them, a button many click that leads nowhere they want, a heading taken for a link, a way through the site that ends in a download, a page that ends many sessions.

What changed on the site:
- <changes> lists the recent changes to the site, newest first, as they went live: the date, then what was changed. It comes from the site's own change history, so it is the site as it stands now: where it differs from the description above, it is right. A change titled "Bezzle 1.4.2" or the like is a release of the app.
- Never suggest something a change already did. Build on it instead, or leave it out.
- When a change went live in the period, say whether the number it was meant to move has moved, and how many days it has had. A change a few days old has not had time to show anything.

What the maker did with earlier reads:
- <done> lists actions from earlier reads that the maker ticked off in the admin area, newest first: the date, done or set aside, the action, and their note on what came of it. It covers the work the change history can't show: posts, e-mails, checks.
- Never suggest an action <done> lists again, nor the same thing under another title, nor a part of it. Take its note as fact and build on it: a check that found nothing wrong is settled, a post that went up is a source to look for in the numbers, and the read says so where it matters.
- Leave out what the maker set aside.
- A done check may come back only when the numbers since give a clear new reason, and then its why says what is new since it was done.

How to write it:
- Lead with where things stand, then what changed against the previous period and the likely reason (a release, a change to the site, a source that sent people, a page). Name the numbers: "312 visitors, up from 240", not "more visitors".
- Small numbers are noise. With fewer than about 100 visitors in the period, or when counting began only days ago, say the picture is early and keep conclusions modest. Never call a change of a handful of visits a trend.
- Use only the numbers given. Don't invent figures, benchmarks or causes you can't see; when you suspect a cause, say it is a guess.
- The actions are about more of the right people trying Bezzle: designers and developers on a Mac (and on Windows, once Bezzle for Windows is out) who pay for design tools today, or who open Adobe XD, Figma or Sketch files, finding the site and downloading it. Order them by expected effect. Three to five, no filler. Good actions follow from these numbers, for example: a source that brings visitors who download, a page people leave quickly, a language whose readers download less, a button clicked in a rage, a shared design's page that few follow.
- Each action does the work rather than naming it: the reader acts on it in minutes, with nothing left to think out. The kinds:
  - post: something to publish elsewhere. where: the one site and the exact place on it ("Reddit, r/macapps"; "Hacker News, Show HN"; "Product Hunt"; "Designer News"; a Mastodon or Bluesky account). url: the page to post from (https://www.reddit.com/r/macapps/submit, https://news.ycombinator.com/submit). subject: the title as that place wants it ("Show HN: …" on Hacker News). body: the whole post, ready to paste, in the maker's first person, specific about what Bezzle does and does not do, with the link in it. Pick places from what the numbers show: a source that already sent visitors who downloaded deserves more; places where Mac users (and, once it is out, Windows users) and designers read, and where people look for a home for their Adobe XD, Figma or Sketch files; a German, French or Italian place for that audience. One place per action, and the post written for that place.
  - mail: an e-mail to send. where: who gets it. subject: the subject. body: the whole text.
  - site: a change to bezzle.ch. where: the page path. body: a brief precise enough to hand to a developer without questions: what to change, where on the page, and the exact words of any new copy, in the site's voice (plain and quiet, no exclamation marks), in all four languages where the words are new.
  - other: anything else. where: where it happens. body: exactly what to do.
- Every link in a post or e-mail is a bezzle.ch page with ?ref=<place> on it (https://bezzle.ch/?ref=reddit-macapps), so the Campaigns tab shows what it brought: put it in link and in the text. Link the page that fits the audience, a docs page where it answers their question, not only the home page. url, subject, link and check are empty strings where they do not apply.
- check: one line on what to look at before doing it, such as a community's rule on self-promotion, the best time to post, or that the page still says what the text claims; or an empty string.
- why names the numbers that call for it and the number that should move; how says the action in a sentence or two.
- The site promises no tracking cookies and no third-party analytics, and the app collects no data at all. Never suggest tracking pixels, retargeting, accounts, sign-ups or anything else that would break that promise.
- No marketing clichés, no exclamation marks, and no em dashes or en dashes: use commas, colons or full stops instead, in the read and in every post or e-mail. Keep the read short: the headline one sentence, the summary two to four sentences, each detail one or two. A post or e-mail is as long as it needs to be, usually 80 to 200 words.
TXT;

/** The shape the model answers in (strict structured outputs: every field required, nothing else allowed). */
function insight_format(): array
{
    $str = fn(string $what) => ['type' => 'string', 'description' => $what];
    $obj = fn(array $props) => ['type' => 'object', 'properties' => $props, 'required' => array_keys($props), 'additionalProperties' => false];
    return ['type' => 'json_schema', 'name' => 'visitor_read', 'strict' => true, 'schema' => $obj([
        'headline' => $str('One sentence: where things stand.'),
        'mood' => ['type' => 'string', 'enum' => ['early', 'growing', 'steady', 'slipping'], 'description' => 'early when there is too little data to judge.'],
        'summary' => $str('Two to four sentences: what changed against the previous period, and why it probably did.'),
        'findings' => ['type' => 'array', 'description' => 'Three to five things that stand out in the numbers.', 'items' => $obj([
            'title' => $str('A few words.'),
            'detail' => $str('One or two sentences, with the numbers.'),
            'figure' => $str('The one number it is about, short, for example "4.1%" or "212 visitors".'),
        ])],
        'actions' => ['type' => 'array', 'description' => 'Three to five things to do, the biggest expected effect first, each worked out so it can be done at once.', 'items' => $obj([
            'title' => $str('What to do, as an instruction of a few words.'),
            'why' => $str('The numbers that call for it, and the number it should move.'),
            'how' => $str('What to change or make, and where, in a sentence or two.'),
            'kind' => ['type' => 'string', 'enum' => ['post', 'mail', 'site', 'other'], 'description' => 'post: something to publish elsewhere. mail: an e-mail to send. site: a change to bezzle.ch. other: anything else.'],
            'where' => $str('post: the one site and the exact place on it. mail: who gets it. site: the page path. other: where it happens.'),
            'url' => $str('post: the page to post from, as a full URL. Otherwise an empty string.'),
            'subject' => $str('post: the title of the post, as that place wants it. mail: the subject. Otherwise an empty string.'),
            'body' => $str('post or mail: the whole text, ready to paste, with the link in it. site: the brief for the developer, with the exact new copy. other: exactly what to do.'),
            'link' => $str('The bezzle.ch link the text uses, with ?ref=<place> on it. An empty string for a site change.'),
            'check' => $str('One line on what to look at before doing it, or an empty string.'),
            'impact' => ['type' => 'string', 'enum' => ['high', 'medium', 'low']],
            'effort' => ['type' => 'string', 'enum' => ['small', 'medium', 'large']],
        ])],
        'watch' => $str('One sentence: what to look at next time, or what would change this read.'),
    ])];
}

/** The last read of a period, if any. */
function insight_read(int $days): array
{
    views_schema();
    $st = db()->prepare('SELECT body, created_at FROM view_insights WHERE days = ?');
    $st->execute([$days]);
    $row = $st->fetch();
    return ['read' => $row ? json_decode($row['body'], true) : null, 'at' => $row['created_at'] ?? null, 'done' => insight_done()];
}

/** The actions the maker ticked off, newest first: over 180 days, like the change history (scripts/api-facts.mjs). */
function insight_done(): array
{
    views_schema();
    $st = db()->prepare('SELECT * FROM view_actions WHERE created_at >= ? ORDER BY created_at DESC, id DESC LIMIT 100');
    $st->execute([date('Y-m-d H:i:s', time() - 180 * 86400)]);
    return array_map(fn($r) => ['id' => (int) $r['id'], 'status' => $r['status'], 'title' => $r['title'], 'kind' => $r['kind'], 'where' => $r['place'], 'how' => $r['how'], 'note' => $r['note'], 'at' => $r['created_at']],
        $st->fetchAll());
}

/** Ticks a read's action off: done, or set aside (skipped), with what came of it. */
function insight_mark(array $a, string $status, string $note): void
{
    $title = mb_substr(trim((string) ($a['title'] ?? '')), 0, 255);
    if ($title === '' || !in_array($status, ['done', 'skipped'], true)) json_out(['error' => 'Which action, and done or set aside?'], 400);
    $kind = in_array($a['kind'] ?? '', ['post', 'mail', 'site', 'other'], true) ? $a['kind'] : 'other';
    views_schema();
    db()->prepare('INSERT INTO view_actions (status, title, kind, place, how, note, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)')->execute([
        $status, $title, $kind, mb_substr(trim((string) ($a['where'] ?? '')), 0, 255), mb_substr(trim((string) ($a['how'] ?? '')), 0, 2000),
        mb_substr(trim($note), 0, 500) ?: null, date('Y-m-d H:i:s'),
    ]);
}

/** Takes a tick back: the action is open again, and the next read may suggest it. */
function insight_unmark(int $id): void
{
    views_schema();
    db()->prepare('DELETE FROM view_actions WHERE id = ?')->execute([$id]);
}

/** <done> as insight_write hands it over: one line per action, with the maker's note. */
function insight_done_lines(): array
{
    return array_map(fn($d) => sprintf('- %s, %s: %s (%s%s). %s%s', substr($d['at'], 0, 10), $d['status'] === 'done' ? 'done' : 'set aside', $d['title'], $d['kind'],
        $d['where'] === '' ? '' : ", {$d['where']}", $d['how'], $d['note'] === null ? '' : ' Note: ' . json_encode($d['note'], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES)), insight_done());
}

/**
 * What changed on the site since $from, one line each, newest first: the commits the deploy wrote to _changes.json
 * (scripts/api-facts.mjs). Null when there is no such file, as when the API runs locally.
 */
function site_changes(string $from): ?array
{
    $file = __DIR__ . '/_changes.json';
    if (!is_file($file)) return null;
    $lines = [];
    foreach (json_decode((string) file_get_contents($file), true) ?: [] as $c) {
        if (($c['date'] ?? '') < $from) continue;
        $lines[] = "- {$c['date']}: {$c['title']}" . (empty($c['detail']) ? '' : ". {$c['detail']}");
        if (count($lines) === 150) break;
    }
    return $lines;
}

/**
 * Has the model read the period's numbers, and keeps what it wrote. Sends only the counts above and how the visits
 * went (trail_summary, what at least two visitors share), never anything about a single visit.
 */
function insight_write(int $days): array
{
    $data = analytics(...period_of_days($days));
    unset($data['now'], $data['previousDaily']);
    // The Sessions and Heatmaps views, summed up (_trails.php, which admin.php loads).
    $trails = function_exists('trail_summary') ? trail_summary(...period_of_days($days)) : null;
    if ($trails) $data += $trails;
    $version = site_releases()[0]['version'] ?? null;
    $windows = site_windows();
    // What changed on the site over both periods, and over 30 days at least, so a 7-day read knows the recent work too.
    $since = min((new DateTimeImmutable($data['from']))->modify("-$days days"), new DateTimeImmutable('-30 days'))->format('Y-m-d');
    $changes = site_changes($since);
    $done = insight_done_lines();
    $prompt = sprintf(
        "Today is %s, Zurich time. Here are the numbers for the last %d days (%s to %s), with the %d days before them as \"previous\". Counting began %s.\nThe current version of Bezzle is %s.\n%s\n\n<numbers>\n%s\n</numbers>\n\nWhat changed on the site since %s:\n<changes>\n%s\n</changes>\n\nWhat the maker did with the actions of earlier reads:\n<done>\n%s\n</done>\n\nWrite the read.",
        date('l, j F Y'), $days, $data['from'], $data['to'], $days, $data['since'] ? 'on ' . substr($data['since'], 0, 10) : 'only now: nothing has been counted yet',
        $version ?? 'not known', $windows ? sprintf('Bezzle for Windows is out: version %s since %s, for Windows %s. Its downloads are downloadsWin.', $windows['version'], $windows['date'] ?? 'its first release', $windows['os'] ?? '11') : 'Bezzle for Windows is not out yet: the site says it is on its way, and visitors on Windows cannot install Bezzle.', json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
        $since, $changes === null ? 'Not known this time: the list of changes was not deployed.' : ($changes ? implode("\n", $changes) : 'Nothing.'),
        $done ? implode("\n", $done) : 'Nothing ticked off yet.',
    );
    $res = openai_request([
        // The limit counts the reasoning too, and the posts and briefs in the actions take room.
        'max_output_tokens' => 24000,
        // Medium is enough for reading a page of numbers, and keeps the answer well inside a web request.
        'reasoning' => ['effort' => 'medium'],
        'text' => ['format' => insight_format()],
        'instructions' => INSIGHT_SYSTEM,
        'input' => $prompt,
    ]);
    $read = json_decode(openai_text($res), true);
    if (!is_array($read) || empty($read['headline'])) throw new RuntimeException('The model answered in a shape this page can not read.');
    $read['model'] = $res['model'] ?? OPENAI_MODEL;
    // Kept with the read, as the admin area does not show these numbers itself: they go along to Claude Code.
    if ($trails) $read['trails'] = $trails;
    $at = date('Y-m-d H:i:s');
    db()->prepare('REPLACE INTO view_insights (days, body, created_at) VALUES (?, ?, ?)')->execute([$days, json_encode($read, JSON_UNESCAPED_UNICODE), $at]);
    return ['read' => $read, 'at' => $at, 'done' => insight_done()];
}
