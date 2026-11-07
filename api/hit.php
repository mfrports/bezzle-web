<?php
/**
 * Counts a page view for the admin area's Visitors view (_views.php). The site's own pages send it (src/lib/track.js)
 * when a page is shown ({t: "v"}), again whenever it is left or hidden ({t: "e"}: the seconds it was read and how far
 * down), and when a step is taken from it ({t: "s", n: download | app | open}). Always answers 204: counting never
 * stands in anyone's way. Not counted: crawlers, link previews, automated browsers, whoever is signed in to the admin
 * area, and the networks it was opened from lately (own_network()).
 */
require __DIR__ . '/config.php';
require __DIR__ . '/_views.php';

$done = function (): never { http_response_code(204); exit; };
if ($_SERVER['REQUEST_METHOD'] !== 'POST') $done();
// A beacon is sent as text/plain, so this reads the body whatever its type says.
$in = json_decode((string) file_get_contents('php://input', false, null, 0, 4096), true);
if (!is_array($in)) $done();
$ua = $_SERVER['HTTP_USER_AGENT'] ?? '';
$type = (string) ($in['t'] ?? '');
// A step needs no view of its own (the download can start before the page's view is sent); the others name theirs.
if ($type !== 's' && !preg_match('/^[a-f0-9]{16}$/', (string) ($in['id'] ?? ''))) $done();
if (!counted_request()) $done();

try {
    views_schema();
    if ($type === 'e') {
        // The end of a view, sent on every hide: keep the most time and the deepest scroll reported, for a day.
        db()->prepare('UPDATE views SET seconds = GREATEST(COALESCE(seconds, 0), ?), scroll = GREATEST(COALESCE(scroll, 0), ?) WHERE vid = ? AND created_at > ?')
            ->execute([min(1800, max(0, (int) ($in['d'] ?? 0))), min(100, max(0, (int) ($in['s'] ?? 0))), $in['id'], date('Y-m-d H:i:s', time() - 86400)]);
    } elseif ($type === 'v') {
        rate_limit('hit', 600, 3600);
        record_view($in, $ua);
    } elseif ($type === 's') {
        rate_limit('step', 120, 3600);
        count_event((string) ($in['n'] ?? ''));
    }
} catch (Throwable $e) { error_log('view not counted: ' . $e->getMessage()); }
$done();
