"""The release notes for the What's New page: src/releases/RELEASE_NOTES.md, a copy of the app's
RELEASE_NOTES.md that its Scripts/release.sh writes here with every release. Edit the notes in the
app, not here. The app's Scripts/release/notes.py reads the same shape, described at the top of the file."""
import html, os, re

PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "releases", "RELEASE_NOTES.md")
LANGS = ("en", "de", "fr", "it")


def version_key(version):
    parts = [int(p) for p in version.split(".")]
    return tuple(parts + [0] * (3 - len(parts)))


def parse(path=PATH):
    """Every release, newest first: {version, date, notes: {lang: {title, lede, items, after}}}."""
    text = re.sub(r"<!--.*?-->", "", open(path, encoding="utf-8").read(), flags=re.S)
    releases = []
    for block in re.split(r"^## ", text, flags=re.M)[1:]:
        head, _, body = block.partition("\n")
        m = re.fullmatch(r"(\d+(?:\.\d+){0,2}) · (\d{4}-\d{2}-\d{2})", head.strip())
        if not m:
            raise ValueError(f"A release heading should read '## <version> · <YYYY-MM-DD>', not '## {head.strip()}'")
        version, date = m.groups()
        notes = {}
        for part in re.split(r"^### ", body, flags=re.M)[1:]:
            head, _, rest = part.partition("\n")
            m = re.fullmatch(r"([a-z]{2}): (.+)", head.strip())
            if not m:
                raise ValueError(f"{version}: a language heading should read '### en: <Title.>', not '### {head.strip()}'")
            lang, title = m.groups()
            paragraphs = [" ".join(p.split()) for p in re.split(r"\n\s*\n", rest.strip()) if p.strip()]
            if not paragraphs:
                raise ValueError(f"{version} {lang}: no lede")
            items, after = [], []
            for p in paragraphs[1:]:
                if p.startswith("- "):
                    for line in re.split(r" (?=- \*\*)", p):
                        m = re.fullmatch(r"- \*\*(.+?)\*\* (.+)", line)
                        if not m:
                            raise ValueError(f"{version} {lang}: a highlight should read '- **Lead.** Text', not '{line[:60]}'")
                        items.append(m.groups())
                else:
                    after.append(p)
            notes[lang] = dict(title=title.strip(), lede=paragraphs[0], items=items, after=after)
        missing = [lang for lang in LANGS if lang not in notes]
        if missing:
            raise ValueError(f"{version}: no notes in {', '.join(missing)}")
        releases.append(dict(version=version, date=date, notes=notes))
    return releases


def inline(s):
    return re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", html.escape(s, quote=False))


def to_html(n, heading="h2"):
    out = [f"<{heading}>{inline(n['title'])}</{heading}>", f"<p>{inline(n['lede'])}</p>"]
    if n["items"]:
        out.append("<ul>" + "".join(f"<li><strong>{inline(a)}</strong> {inline(b)}</li>" for a, b in n["items"]) + "</ul>")
    out += [f"<p>{inline(p)}</p>" for p in n["after"]]
    return "\n".join(out)
