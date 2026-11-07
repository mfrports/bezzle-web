<?php
/**
 * The admin area's sign-in (admin.php): a random key in a cookie that is HTTP-only, SameSite=Strict
 * and, over HTTPS, Secure, which the database knows only by its hash. Not PHP's own sessions: the
 * shared host clears their files after half an hour or so. A browser stays signed in until it goes
 * ADMIN_SESSION_DAYS without opening the admin area, or signs out.
 *
 * Read by _views.php too: the browser signed in here is the maker's, and its visits are not counted.
 * Made on first use, like views_schema().
 */

/** How long a browser stays signed in without opening the admin area. */
const ADMIN_SESSION_DAYS = 90;

function admin_schema(): void
{
    static $done = false;
    if ($done) return;
    $done = true;
    db()->exec("CREATE TABLE IF NOT EXISTS admin_sessions (token CHAR(64) PRIMARY KEY, seen_at DATETIME NOT NULL) ENGINE=InnoDB");
}

/** A key as admin_sessions keeps it: hashed under the password, so a new password signs every browser out. */
function admin_hash(string $key): string
{
    return hash_hmac('sha256', $key, ADMIN_PASSWORD);
}

/** The cookie's key as admin_sessions keeps it, or null without a well formed one. */
function admin_token(): ?string
{
    $key = (string) ($_COOKIE['bezzle_admin'] ?? '');
    return preg_match('/^[0-9a-f]{64}$/', $key) ? admin_hash($key) : null;
}

/** Sends the cookie for another ADMIN_SESSION_DAYS, or with an empty key takes it away. */
function admin_cookie(string $key): void
{
    $https = !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || ($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https';
    setcookie('bezzle_admin', $key, ['expires' => $key === '' ? 1 : time() + ADMIN_SESSION_DAYS * 86400, 'path' => '/api/', 'secure' => $https, 'httponly' => true, 'samesite' => 'Strict']);
}

/** When this browser's session was last noted in use, or null when it isn't signed in. */
function admin_seen(): ?int
{
    $token = admin_token();
    if ($token === null) return null;
    admin_schema();
    $st = db()->prepare('SELECT seen_at FROM admin_sessions WHERE token = ? AND seen_at > ?');
    $st->execute([$token, date('Y-m-d H:i:s', time() - ADMIN_SESSION_DAYS * 86400)]);
    $seen = $st->fetchColumn();
    return $seen === false ? null : strtotime($seen);
}

/** The session is in use: it runs another ADMIN_SESSION_DAYS from now, in the table and in the browser. */
function admin_touch(): void
{
    db()->prepare('UPDATE admin_sessions SET seen_at = ? WHERE token = ?')->execute([date('Y-m-d H:i:s'), admin_token()]);
    admin_cookie((string) $_COOKIE['bezzle_admin']);
}

/** Signs this browser in with a new key; sessions that ran out go on the way. */
function admin_sign_in(): void
{
    admin_schema();
    $key = bin2hex(random_bytes(32));
    $pdo = db();
    $pdo->prepare('DELETE FROM admin_sessions WHERE seen_at < ?')->execute([date('Y-m-d H:i:s', time() - ADMIN_SESSION_DAYS * 86400)]);
    $pdo->prepare('INSERT INTO admin_sessions (token, seen_at) VALUES (?, ?)')->execute([admin_hash($key), date('Y-m-d H:i:s')]);
    admin_cookie($key);
}

/** Signs this browser out: its key is forgotten, so a copy of the cookie is worth nothing either. */
function admin_sign_out(): void
{
    $token = admin_token();
    if ($token !== null) {
        admin_schema();
        db()->prepare('DELETE FROM admin_sessions WHERE token = ?')->execute([$token]);
    }
    admin_cookie('');
}
