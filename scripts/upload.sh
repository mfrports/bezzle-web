#!/bin/bash
# Puts the built site on bezzle.ch's webspace at One.com by FTP, for the Deploy workflow.
#
# Only what changed goes up: the server keeps a list of every file it was given with its hash
# (.htdeploy, which .htaccess keeps from visitors), and a file goes up when its hash is not on that
# list. The server's settings (.htaccess) go first, then the pictures, scripts and the browser
# version, then the pages that use them, and the update feed last, so nobody is offered what is not
# there yet. Each file is written under a temporary name and renamed into place, so no visitor and no
# copy of Bezzle reads half of one. Files no longer built are removed at the end; the new list is
# written once everything else went through, so a run that stops half way is made good by the next.
#
#   FTP_SERVER=… FTP_USERNAME=… FTP_PASSWORD=… FTP_PATH=… scripts/upload.sh [dist] [--all]
#
# FTP_SERVER is a host name (FTP, encrypted with TLS whenever the server offers it) or a URL that
# names the protocol: ftps://host, sftp://host. FTP_PATH is the website's folder on the server (the
# login's own folder when empty). --all sends every file again, whatever the list says.
# Needs lftp (apt-get install lftp, brew install lftp).
set -euo pipefail

DIST="dist"
ALL=""
for arg in "$@"; do
  case "$arg" in
    --all) ALL=1 ;;
    "") ;;
    *) DIST="$arg" ;;
  esac
done
fail() { echo "::error::$*" >&2; exit 1; }
: "${FTP_SERVER:?FTP_SERVER is missing}" "${FTP_USERNAME:?FTP_USERNAME is missing}" "${FTP_PASSWORD:?FTP_PASSWORD is missing}"
# Spaces and line breaks around a pasted secret are no part of it.
trim() { local v="$1"; v="${v#"${v%%[![:space:]]*}"}"; v="${v%"${v##*[![:space:]]}"}"; printf %s "$v"; }
for name in FTP_SERVER FTP_USERNAME FTP_PATH FTP_PASSWORD; do
  value="${!name:-}"
  if [ "$name" = FTP_PASSWORD ]; then trimmed="${value%%[$'\r\n']*}"; else trimmed="$(trim "$value")"; fi
  [ "$value" = "$trimmed" ] || { echo "::warning::$name has a space or line break around it, left out"; printf -v "$name" %s "$trimmed"; }
  # GitHub hides each secret in the log as it was given; what is left of it, too.
  [ "${GITHUB_ACTIONS:-}" != true ] || [ -z "$trimmed" ] || [ "$name" = FTP_PATH ] || echo "::add-mask::$trimmed"
done
REMOTE="${FTP_PATH:-}"
REMOTE="${REMOTE%/}"
[ -n "$REMOTE" ] || REMOTE="."
[ -f "$DIST/index.html" ] || fail "$DIST/index.html is missing: build the site first (npm run build)"
command -v lftp >/dev/null || fail "lftp is missing"
case "$FTP_SERVER" in
  *://*) URL="$FTP_SERVER" ;;
  *) URL="ftp://$FTP_SERVER" ;;
esac

WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT
export LFTP_PASSWORD="$FTP_PASSWORD"

# lftp with the login, settings and the website's folder; the commands come on standard input.
# The password goes by the environment alone, never on a command line or into a file.
remote() {
  {
    cat <<EOF
set cmd:fail-exit ${FAIL_EXIT:-yes}
set net:timeout 30
set net:max-retries 4
set net:reconnect-interval-base 5
set net:persist-retries 2
set ftp:ssl-allow yes
set ftp:passive-mode yes
set ftp:prefer-epsv no
set sftp:auto-confirm yes
set xfer:use-temp-file yes
set xfer:temp-file-name .in.*
set mirror:parallel-transfer-count 4
open --env-password -u "$FTP_USERNAME" "$URL"
cd "$REMOTE"
EOF
    cat
  } | lftp
}

# What is built, every file with its hash, in a fixed order.
if command -v sha256sum >/dev/null; then HASH=(sha256sum); else HASH=(shasum -a 256); fi
(cd "$DIST" && find . -type f ! -name .htdeploy | sed 's#^\./##' | LC_ALL=C sort | while IFS= read -r f; do
  [[ "$f" =~ ^[A-Za-z0-9._@+/-]+$ ]] || { echo "A file name the upload does not take: $f" >&2; exit 1; }
  printf '%s  %s\n' "$("${HASH[@]}" "$f" | cut -d' ' -f1)" "$f"
done) > "$WORK/new"

# What the server has, by its list; none on the first upload.
: > "$WORK/old"
if echo "get .htdeploy -o \"$WORK/old\"" | remote >/dev/null 2>"$WORK/get.log"; then
  echo "The server has $(wc -l < "$WORK/old" | tr -d ' ') files on its list"
else
  cat "$WORK/get.log" >&2
  if grep -qiE "login failed|login incorrect|authentication failed|530" "$WORK/get.log"; then
    # The server's side of it, for finding out why: the password never shows.
    echo "The login, as the server answered it (FTP_USERNAME has ${#FTP_USERNAME} characters):"
    lftp -d -c "set ftp:ssl-allow yes; set net:max-retries 1; open --env-password -u \"$FTP_USERNAME\" \"$URL\"; cls -1 ." 2>&1 \
      | grep -E '^(<---|--->|\*\*\*\*|Certificate|WARNING)' | grep -viE 'PASS ' | tail -25 || true
    fail "The server did not take the login (FTP_USERNAME, FTP_PASSWORD)"
  fi
  ! grep -q "^cd:" "$WORK/get.log" || fail "The website's folder (FTP_PATH) is not on the server, or the server not reachable (FTP_SERVER)"
  grep -qiE "^get:.*(550|no such file|not found|does not exist)" "$WORK/get.log" || fail "Could not reach the server, or read its list"
  : > "$WORK/old"
  echo "The server has no list yet: everything goes up"
fi
LC_ALL=C sort -o "$WORK/old" "$WORK/old"
LC_ALL=C sort "$WORK/new" > "$WORK/new.sorted"
if [ -n "$ALL" ]; then cp "$WORK/new" "$WORK/send"; else LC_ALL=C comm -13 "$WORK/old" "$WORK/new.sorted" > "$WORK/send"; fi
cut -d' ' -f3- "$WORK/old" | LC_ALL=C sort > "$WORK/old.paths"
cut -d' ' -f3- "$WORK/new" | LC_ALL=C sort > "$WORK/new.paths"
LC_ALL=C comm -23 "$WORK/old.paths" "$WORK/new.paths" > "$WORK/gone"
echo "$(wc -l < "$WORK/send" | tr -d ' ') to send, $(wc -l < "$WORK/gone" | tr -d ' ') to remove"

# The files to send, in their order, each group a tree of its own that lftp mirrors up.
stage() { # group path
  mkdir -p "$WORK/$1/$(dirname "$2")"
  ln "$DIST/$2" "$WORK/$1/$2" 2>/dev/null || cp "$DIST/$2" "$WORK/$1/$2"
}
cut -d' ' -f3- "$WORK/send" | while IFS= read -r f; do
  case "$f" in
    .htaccess|*/.htaccess) stage 1-settings "$f" ;;
    updates/appcast.xml) stage 4-feed "$f" ;;
    *.html) stage 3-pages "$f" ;;
    *) stage 2-files "$f" ;;
  esac
done
for group in 1-settings 2-files 3-pages 4-feed; do
  [ -d "$WORK/$group" ] || continue
  echo "Sending the ${group#*-}…"
  echo "mirror --reverse --transfer-all --no-perms --no-umask --no-symlinks --parallel=4 --verbose=1 \"$WORK/$group\" ." | remote
done

# What is no longer built, then the new list.
if [ -s "$WORK/gone" ]; then
  echo "Removing $(wc -l < "$WORK/gone" | tr -d ' ') files no longer built…"
  sed 's/.*/rm -f "&"/' "$WORK/gone" | FAIL_EXIT=no remote || true
fi
echo "put \"$WORK/new\" -o .htdeploy" | remote
echo "Done: $(wc -l < "$WORK/new" | tr -d ' ') files on the server"
