<?php
/**
 * The admin area's API (bezzle.ch/admin): the site's own visitor numbers, each visit replayed, and where each page is
 * clicked. One password, ADMIN_PASSWORD; a session that lasts until it goes 90 days unused (_admin.php). Changes are
 * POSTed as JSON, which a page on another site cannot send with the cookie.
 *
 *   GET  ?action=me | ping (for the deploy: whether the database answers)
 *   POST ?action=login {password} | logout
 *   The visitor numbers (_views.php), over 7, 30 or 90 days or days of one's own, and OpenAI's read of the three
 *   periods (_openai.php):
 *   GET  ?action=analytics&days= | analytics&from=&to= | live | insight&days=   POST ?action=insight {days}
 *   The read's actions ticked off, done or set aside, which the next read is told:
 *   POST ?action=mark {action: {title, kind, where, how}, status: done|skipped, note} | unmark {id}
 *   Each visit, one by one, and how its pages were used, to replay; and each page's clicks and scroll depth (_trails.php):
 *   GET  ?action=sessions&day= | session&id= | heatmap&path=&lang=&screen=&days=
 */
require __DIR__ . '/config.php';
require_once __DIR__ . '/_admin.php';
require __DIR__ . '/_views.php';
require __DIR__ . '/_trails.php';
require __DIR__ . '/_openai.php';

$action = (string) ($_GET['action'] ?? '');
$post = $_SERVER['REQUEST_METHOD'] === 'POST';
$in = $post ? json_in() : [];
if ($post && !str_starts_with($_SERVER['CONTENT_TYPE'] ?? '', 'application/json')) json_out(['error' => 'JSON only.'], 415);

// Signed in, and not idle for more than ADMIN_SESSION_DAYS.
$seen = admin_seen();
$admin = $seen !== null;
// Noted once an hour: the session runs another ADMIN_SESSION_DAYS from here, and the network the admin area is open
// on is the maker's own, left out of the visitor numbers (_views.php).
if ($admin && $seen < time() - 3600) { admin_touch(); remember_own_network(); }

if ($action === 'me') json_out(['admin' => $admin, 'configured' => strlen(ADMIN_PASSWORD) >= 12]);

// For the deploy's check: the database answers and has its tables (made here, on first use, if they are not yet).
// Says nothing but whether it works.
if ($action === 'ping') {
    try { views_schema(); trails_schema(); admin_schema(); $stored = true; } catch (Throwable $e) { error_log('ping: ' . $e->getMessage()); $stored = false; }
    json_out(['stored' => $stored, 'configured' => strlen(ADMIN_PASSWORD) >= 12], $stored ? 200 : 503);
}

if ($action === 'login' && $post) {
    if (strlen(ADMIN_PASSWORD) < 12) json_out(['error' => 'The admin area is not set up: ADMIN_PASSWORD needs at least 12 characters.'], 503);
    rate_limit('admin-login', 8, 900);
    if (!hash_equals(hash('sha256', ADMIN_PASSWORD), hash('sha256', (string) ($in['password'] ?? '')))) json_out(['error' => 'Wrong password.'], 401);
    admin_sign_in();
    remember_own_network();
    json_out(['admin' => true]);
}

if ($action === 'logout' && $post) {
    admin_sign_out();
    json_out(['admin' => false]);
}

if (!$admin) json_out(['error' => 'Please sign in.'], 401);

if (!$post) switch ($action) {
    case 'analytics':
        // One of the periods on offer, or days of one's own (from, to). The network left out right now goes along,
        // so the view can say which (never part of what the read is written from).
        $period = analytics_period($_GET) ?? period_of_days(analytics_days($_GET['days'] ?? 30));
        json_out(analytics(...$period) + ['network' => request_network()]);

    case 'live':
        json_out(live());

    case 'sessions':
        json_out(sessions_list(session_day($_GET['day'] ?? null)));

    case 'session':
        $s = session_detail((string) ($_GET['id'] ?? ''));
        if (!$s) json_out(['error' => 'No such session.'], 404);
        json_out($s);

    case 'heatmap':
        $screen = (string) ($_GET['screen'] ?? '');
        $lang = (string) ($_GET['lang'] ?? '');
        json_out(heatmap((string) ($_GET['path'] ?? ''), in_array($lang, SITE_LANGS, true) ? $lang : 'en',
            in_array($screen, ['desktop', 'tablet', 'phone'], true) ? $screen : 'desktop', heatmap_days($_GET['days'] ?? 0)));

    case 'insight':
        json_out(insight_read(analytics_days($_GET['days'] ?? 30)) + ['configured' => OPENAI_API_KEY !== '']);

    default:
        json_out(['error' => 'Unknown action.'], 400);
}

switch ($action) {
    case 'insight':
        if (OPENAI_API_KEY === '') json_out(['error' => 'Set the OPENAI_API_KEY secret and deploy, and the numbers get a read here.', 'configured' => false], 503);
        rate_limit('insight', 12, 3600);
        @set_time_limit(180);
        try {
            json_out(insight_write(analytics_days($in['days'] ?? 30)) + ['configured' => true]);
        } catch (Throwable $e) {
            error_log('insight: ' . $e->getMessage());
            json_out(['error' => $e->getMessage()], 502);
        }

    case 'mark':
        insight_mark(is_array($in['action'] ?? null) ? $in['action'] : [], (string) ($in['status'] ?? ''), (string) ($in['note'] ?? ''));
        json_out(['done' => insight_done()]);

    case 'unmark':
        insight_unmark((int) ($in['id'] ?? 0));
        json_out(['done' => insight_done()]);
}
json_out(['error' => 'Unknown action.'], 400);
