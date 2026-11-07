<?php
/**
 * The configuration of bezzle.ch's own API: the visitor numbers the site counts itself (hit.php, trail.php) and the
 * admin area that reads them (admin.php). Every endpoint requires this.
 *
 * The deploy (scripts/bake-config.mjs) replaces each getenv('X') ?: 'default' expression with the value of the
 * repository's secret of the same name, as One.com's PHP sets no environment of its own: keep that exact shape.
 */
require_once __DIR__ . '/_env.php';

date_default_timezone_set('Europe/Zurich');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
header('X-Robots-Tag: noindex');

ini_set('display_errors', 0);
error_reporting(E_ALL);

// The database on the webspace (One.com's MySQL).
$dbHost = getenv('DB_HOST') ?: 'localhost';
$dbName = getenv('DB_NAME') ?: 'bezzle';
$dbUser = getenv('DB_USER') ?: 'root';
$dbPass = getenv('DB_PASS') ?: 'root';

define('SITE_URL', rtrim(getenv('SITE_URL') ?: 'https://bezzle.ch', '/'));
// The admin area's password (bezzle.ch/admin); shorter than 12 characters, or empty, keeps the admin area shut.
define('ADMIN_PASSWORD', getenv('ADMIN_PASSWORD') ?: '');
// OpenAI, for the admin area's read of the visitor numbers (_openai.php); empty leaves the read out.
define('OPENAI_API_KEY', getenv('OPENAI_API_KEY') ?: '');
// The key what is kept only as a hash is hashed under (the networks the admin area was opened from): drawn from the
// database's password, which only the server knows, so no secret of its own has to be kept.
define('SERVER_KEY', hash('sha256', 'bezzle.ch|' . $dbPass));

function json_out($data, int $code = 200): never
{
    http_response_code($code);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function json_in(): array
{
    $raw = file_get_contents('php://input');
    $data = json_decode($raw ?: '', true);
    return is_array($data) ? $data : [];
}

function db(): PDO
{
    global $dbHost, $dbName, $dbUser, $dbPass;
    static $pdo = null;
    if ($pdo) return $pdo;
    $pdo = new PDO("mysql:host=$dbHost;dbname=$dbName;charset=utf8mb4", $dbUser, $dbPass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);
    // The server's clock and the database's agree on Zurich time, whatever the database was set to.
    $pdo->exec("SET time_zone = '" . (new DateTimeImmutable())->format('P') . "'");
    return $pdo;
}

/**
 * A crude per-address rate limit on a file, enough to keep password guessing and floods off a shared host.
 * Returns how many earlier requests from the same address fell in the window.
 */
function rate_limit(string $bucket, int $max, int $windowSeconds): int
{
    $ip = $_SERVER['REMOTE_ADDR'] ?? '0';
    $file = sys_get_temp_dir() . '/bezzle-rl-' . $bucket . '-' . md5($ip);
    $now = time();
    $hits = is_file($file) ? array_filter(array_map('intval', file($file, FILE_IGNORE_NEW_LINES)), fn($t) => $t > $now - $windowSeconds) : [];
    if (count($hits) >= $max) json_out(['error' => 'Too many requests. Try again in a little while.'], 429);
    $hits[] = $now;
    file_put_contents($file, implode("\n", $hits));
    return count($hits) - 1;
}
