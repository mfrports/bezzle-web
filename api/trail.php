<?php
/**
 * Keeps how a page was used, for the admin area's Sessions view (_trails.php): the batches the site's own pages
 * send while a page is in view and when it is left (src/lib/trail.js), each under the id of its page view.
 * Always answers 204, as hit.php does: recording never stands in anyone's way. Kept only for a page view that
 * was counted, so not for crawlers, automated browsers, whoever is signed in to the admin area, nor the
 * networks it was opened from lately.
 */
require __DIR__ . '/config.php';
require __DIR__ . '/_trails.php';

$done = function (): never { http_response_code(204); exit; };
if ($_SERVER['REQUEST_METHOD'] !== 'POST') $done();
// A beacon is sent as text/plain, so this reads the body whatever its type says. Past TRAIL_BYTES it is cut, and no longer JSON.
$in = json_decode((string) file_get_contents('php://input', false, null, 0, TRAIL_BYTES), true);
if (!is_array($in) || !preg_match('/^[a-f0-9]{16}$/', (string) ($in['id'] ?? ''))) $done();
if (!counted_request()) $done();

try {
    rate_limit('trail', 1500, 3600);
    record_trail($in);
} catch (Throwable $e) { error_log('trail not kept: ' . $e->getMessage()); }
$done();
