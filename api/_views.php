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
 * Written by hit.php; read by admin.php (analytics, live). Made on first use.
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

/** The periods the Visitors view offers as buttons. */
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
