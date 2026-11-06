#!/bin/bash
# Brings the pictures the home page's story is built from into public/img, as WebP:
#   app/<locale>/<scene>.webp  the app's window in each scene, captured in each language for the
#                              screenshots (AppStore/screenshots-src/assets in the app), 2560 wide
#   parts/*.webp               what the scenes move on their own: the poster in four sizes, the
#                              café's posts, the pug and its cutout, the phone and its screens,
#                              the Wander photos, the paper grain
# Run it again when the captures change. Needs cwebp (brew install webp).
# Usage: scripts/import-assets.sh [path to the app repository]
set -euo pipefail
APP="${1:-$HOME/Documents/apps/Bezzle}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$APP/AppStore/screenshots-src"
OUT="$ROOT/public/img"
command -v cwebp >/dev/null || { echo "cwebp is missing: brew install webp" >&2; exit 1; }
[ -d "$SRC/assets/en-US" ] || { echo "No captures in $SRC/assets: is $APP the app repository?" >&2; exit 1; }

webp() { # source, target, width, quality
  cwebp -quiet -mt -m 6 -q "$4" -resize "$3" 0 -metadata none "$1" -o "$2"
}

for locale in en-US de-DE fr-FR it; do
  mkdir -p "$OUT/app/$locale"
  for scene in home hero adapt components prototype inspect cutout dark deck together ai; do
    webp "$SRC/assets/$locale/$scene.png" "$OUT/app/$locale/$scene.webp" 2560 84
  done
done

D="$SRC/designs"
mkdir -p "$OUT/parts"
for size in poster square story thumbnail; do webp "$SRC/assets/size-$size.png" "$OUT/parts/size-$size.webp" 1080 88; done
for i in 1 2 3 4 5; do webp "$SRC/assets/post$i.png" "$OUT/parts/post$i.webp" 720 86; done
webp "$D/Adoption Day.bezzle/images/31594F7F-FC07-4A13-B885-0556DAFA9934.jpg" "$OUT/parts/pug.webp" 1600 84
webp "$D/Adoption Day.bezzle/images/31594F7F-FC07-4A13-B885-0556DAFA9934-cutout.png" "$OUT/parts/pug-cutout.webp" 1600 88
webp "$D/Wander Pitch.bezzle/images/D721F1F0-95D1-43E4-B61F-DF72CBFFC1E9.png" "$OUT/parts/screen-discover.webp" 786 88
webp "$D/Wander Pitch.bezzle/images/FCE9A466-1ADB-496F-9E98-922C2E10AD49.png" "$OUT/parts/screen-place.webp" 786 88
webp "$D/Wander Pitch.bezzle/images/F6970A2B-BDF6-4F31-8959-883EF62BCE54.png" "$OUT/parts/screen-saved.webp" 786 88
while read -r id name; do
  webp "$D/Wander.bezzle/images/$id.jpg" "$OUT/parts/$name.webp" 720 82
done <<'PLACES'
30DE5E24-EB63-45D7-9B05-F97EDF548CDF lysefjord
4B398F94-3765-4675-BFBF-9A91C604D70D hallstatt
070C6809-AE38-45A2-8022-BBD6811E4406 neuschwanstein
12EA471B-C339-40B6-B824-BE17A07404E4 yosemite
4A077D0E-1CE1-4757-8715-AECD6FB06908 grand-canyon
3CC32039-6FDB-47CE-93F3-E282DAC6DB0B seljalandsfoss
PLACES
webp "$D/Ember & Oat.bezzle/images/A6EECBF1-3627-41AE-BA7A-62EF28734DB1.jpg" "$OUT/parts/latte.webp" 1080 84
cp "$SRC/assets/grain.png" "$OUT/parts/grain.png"
webp "$SRC/assets/icon.png" "$OUT/icon-512.webp" 512 92
du -sh "$OUT/app" "$OUT/parts"
