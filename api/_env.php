<?php
/**
 * .env loader for LOCAL development only. Production sets real environment
 * variables (or the deploy workflow seds them into config.php); this fills
 * only what is not already set.
 */
(function () {
    $envFile = dirname(__DIR__) . '/.env';
    if (!is_file($envFile)) return;
    foreach (file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
        $line = trim($line);
        if ($line === '' || $line[0] === '#' || !str_contains($line, '=')) continue;
        [$name, $value] = explode('=', $line, 2);
        $name = trim($name);
        $value = preg_replace('/^([\'"])(.*)\1$/', '$2', trim($value));
        if (getenv($name) === false) { putenv("$name=$value"); $_ENV[$name] = $value; }
    }
})();
