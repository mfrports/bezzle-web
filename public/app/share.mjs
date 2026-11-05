// A design shared by link, in a browser: its room on Bezzle's relay, as Relay/SHARING.md lays it
// out, the same as the Mac's Sharing and CloudShare keep it. Runs alike in a browser and in Node.
//
//   const keys = await ShareKeys.fromLink(location.href)       // or ShareKeys.fromSecret(bytes)
//   const room = new SharedRoom({ keys, me: { replica, writer, name } })
//   const { parts, meta } = await room.load()                  // every copy's records, opened
//   room.follow({ onNews, onGone })                           // the relay says when there is more
//
// Everything leaves the browser sealed with AES-256-GCM under keys made from the link's secret
// (HKDF-SHA256), so the relay keeps what it cannot read. What the records hold, and how they
// merge, is the core's business: these are only their bytes.

const enc = new TextEncoder()
const subtle = globalThis.crypto.subtle

export const RELAY = 'https://bezzle-live.bezzle-live.workers.dev'

// MARK: Bytes

export function b64url(bytes) {
  let s = ''
  for (const b of bytes) s += String.fromCharCode(b)
  return btoa(s).replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/, '')
}

export function fromB64url(text) {
  if (!/^[A-Za-z0-9_-]+$/.test(text)) return null
  const plain = text.replaceAll('-', '+').replaceAll('_', '/') + '='.repeat((4 - (text.length % 4)) % 4)
  try { return Uint8Array.from(atob(plain), (c) => c.charCodeAt(0)) } catch { return null }
}

export const hex = (bytes) => Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('')
export const toB64 = (bytes) => { let s = ''; for (const b of bytes) s += String.fromCharCode(b); return btoa(s) }
const concat = (...parts) => { const out = new Uint8Array(parts.reduce((n, p) => n + p.length, 0)); let at = 0; for (const p of parts) { out.set(p, at); at += p.length } return out }

// MARK: Keys

async function hkdf(ikm, salt, info) {
  const key = await subtle.importKey('raw', ikm, 'HKDF', false, ['deriveBits'])
  return new Uint8Array(await subtle.deriveBits({ name: 'HKDF', hash: 'SHA-256', salt, info: enc.encode(info) }, key, 256))
}

/** Everything a room needs, made from the link's secret, as the Mac's `ShareKeys` makes it. */
export class ShareKeys {
  static async fromSecret(secret) {
    if (!(secret instanceof Uint8Array) || secret.length !== 32) throw new Error('A secret is 32 bytes')
    const salt = enc.encode('bezzle-share-2')
    const k = new ShareKeys()
    k.secret = secret
    k.room = hex(await hkdf(secret, salt, 'room'))
    k.readToken = b64url(await hkdf(secret, salt, 'read'))
    k.writeToken = b64url(await hkdf(secret, salt, 'write'))
    k.sealKey = await hkdf(secret, salt, 'seal')
    k.namesKey = await subtle.importKey('raw', await hkdf(secret, salt, 'names'), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
    // This session's salt, which everything it seals carries, and its own key from it.
    k.salt = crypto.getRandomValues(new Uint8Array(16))
    k.subkeys = new Map()
    k.sessionKey = await k.subkey(k.salt)
    return k
  }

  /** From a design's link: Bezzle's page on the web with `#2.<secret>`, or `bezzle://share/2.<secret>`. */
  static async fromLink(link) {
    const secret = ShareKeys.secretIn(link)
    if (!secret) throw new Error('This link does not lead to a design')
    return ShareKeys.fromSecret(fromB64url(secret))
  }

  static secretIn(link) {
    const m = String(link).match(/(?:^|[^A-Za-z0-9_.-])2\.([A-Za-z0-9_-]{43})(?![A-Za-z0-9_-])/)
    const bytes = m && fromB64url(m[1])
    return bytes?.length === 32 ? m[1] : null
  }

  async subkey(salt) {
    const id = hex(salt)
    if (!this.subkeys.has(id)) {
      const raw = await hkdf(this.sealKey, salt, 'bezzle-seal-2')
      this.subkeys.set(id, await subtle.importKey('raw', raw, 'AES-GCM', false, ['encrypt', 'decrypt']))
    }
    return this.subkeys.get(id)
  }

  /** `plain`, sealed so that only those with the secret can open it, bound to what it is `about`. */
  async seal(plain, about) {
    const nonce = crypto.getRandomValues(new Uint8Array(12))
    const box = new Uint8Array(await subtle.encrypt({ name: 'AES-GCM', iv: nonce, additionalData: enc.encode(`${this.room}/${about}`) }, this.sessionKey, plain))
    return concat(Uint8Array.of(0x02), this.salt, nonce, box)
  }

  /** What `sealed` holds, or null when it is not this room's or not about `about`. */
  async open(sealed, about) {
    if (!sealed || sealed.length < 1 + 16 + 12 + 16 || sealed[0] !== 0x02) return null
    try {
      const key = await this.subkey(sealed.slice(1, 17))
      return new Uint8Array(await subtle.decrypt({ name: 'AES-GCM', iv: sealed.slice(17, 29), additionalData: enc.encode(`${this.room}/${about}`) }, key, sealed.slice(29)))
    } catch {
      return null
    }
  }

  /** The name a picture goes by in the room. */
  async pictureName(name) {
    return hex(new Uint8Array(await subtle.sign('HMAC', this.namesKey, enc.encode(name))))
  }
}

export async function sha256hex(text) { return hex(new Uint8Array(await subtle.digest('SHA-256', enc.encode(text)))) }

// MARK: Records

/** A copy's part, from a record's key: changes (`c.`) or the whole design (`w.`) up to a time. */
export function part(key) {
  const m = /^([cw])\.([a-z0-9]{1,32})\.(\d{15})$/.exec(key)
  return m ? { kind: m[1], replica: m[2], upTo: Number(m[3]) } : null
}

export const partKey = (kind, replica, upTo) => `${kind}.${replica}.${String(upTo).padStart(15, '0')}`
const byTime = (a, b) => a.upTo - b.upTo || (a.kind === b.kind ? 0 : a.kind === 'c' ? -1 : 1)

/**
 * Of one copy's parts, which to read, given those read already and those that would not open: its
 * newest whole that opens, and every part of changes after it, not read yet. One following the copy
 * along needs no whole. The same rule as the Mac's `FolderShare.toRead`.
 */
export function toRead(parts, read = new Set(), failed = new Set()) {
  const all = [...parts].sort(byTime)
  const key = (p) => `${p.kind}${p.upTo}`
  const isRead = (p) => read.has(key(p))
  const unread = (after) => all.filter((p) => p.kind === 'c' && p.upTo > after && !isRead(p))
  const whole = all.filter((p) => p.kind === 'w' && !failed.has(key(p))).pop()
  if (!whole) return unread(-Infinity)
  if (isRead(whole)) return unread(whole.upTo)
  const previous = all.filter((p) => p.kind === 'w' && p.upTo < whole.upTo).pop()
  const following = read.size > 0 && all.some((p) => p.kind === 'c' && p.upTo === whole.upTo)
    && (!previous || isRead(previous) || read.has(`c${previous.upTo}`))
  if (following) return unread(previous ? previous.upTo : -Infinity)
  return [whole, ...unread(whole.upTo)]
}

export const FOLD_AFTER = 24
export function shouldFold(parts) {
  const since = Math.max(-Infinity, ...parts.filter((p) => p.kind === 'w').map((p) => p.upTo))
  return parts.filter((p) => p.kind === 'c' && p.upTo > since).length >= FOLD_AFTER
}
export function folded(parts, upTo) {
  const before = parts.filter((p) => p.kind === 'w' && p.upTo < upTo).sort(byTime).pop()
  return before ? parts.filter((p) => p.upTo < before.upTo) : []
}
export const nextUpTo = (clock, parts) => Math.max(clock, Math.max(0, ...parts.map((p) => p.upTo)) + 1)

// MARK: The relay

export class ShareError extends Error {
  constructor(kind, status) { super(`${kind}${status ? ` (${status})` : ''}`); this.kind = kind; this.status = status }
}

/** Bezzle's relay over HTTPS. */
export class Relay {
  constructor(base = RELAY) { this.base = base.replace(/^ws/, 'http').replace(/\/$/, '') }

  async ask(method, path, { token, headers = {}, body } = {}) {
    let res
    try {
      res = await fetch(`${this.base}/v2/${path}`, { method, body, cache: 'no-store',
        headers: { ...(token ? { Authorization: `Bearer ${token}` } : {}), ...headers } })
    } catch {
      throw new ShareError('unreachable')
    }
    if (res.status === 410) throw new ShareError('gone', 410)
    return res
  }

  async create(room, hashes) {
    const res = await this.ask('POST', room, { body: JSON.stringify(hashes), headers: { 'Content-Type': 'application/json' } })
    if (res.status !== 201) throw new ShareError('refused', res.status)
  }

  async list(room, since, read) {
    const res = await this.ask('GET', `${room}?since=${since}`, { token: read })
    if (res.status === 404) throw new ShareError('missing', 404)
    if (res.status !== 200) throw new ShareError('refused', res.status)
    return res.json()
  }

  async get(room, key, read) {
    const res = await this.ask('GET', `${room}/${key}`, { token: read })
    if (res.status === 404) return null
    if (res.status !== 200) throw new ShareError('refused', res.status)
    return new Uint8Array(await res.arrayBuffer())
  }

  async put(room, key, body, { write, writer, owner }) {
    const headers = { 'Content-Type': 'application/octet-stream', ...(writer ? { 'X-Bezzle-Writer': writer } : {}), ...(owner ? { 'X-Bezzle-Owner': owner } : {}) }
    const res = await this.ask('PUT', `${room}/${key}`, { token: write, headers, body })
    // Taken already: a record written once is the same wherever it came from.
    if (![200, 201, 409].includes(res.status)) throw new ShareError('refused', res.status)
  }

  async delete(room, key, { write, writer }) {
    const res = await this.ask('DELETE', `${room}/${key}`, { token: write, headers: { 'X-Bezzle-Writer': writer } })
    if (![200, 204, 404].includes(res.status)) throw new ShareError('refused', res.status)
  }

  liveURL(room, read) { return `${this.base.replace(/^http/, 'ws')}/v2/${room}/live?read=${encodeURIComponent(read)}` }
}

// MARK: A room

/**
 * A shared design's room, from a browser: what everyone has written there, and this browser's
 * own records, which nobody else ever writes. `me` is { replica, writer, name }: this browser's
 * name among the copies, the token its records are written with, and the name others see.
 */
export class SharedRoom {
  constructor({ keys, relay = new Relay(), me }) {
    this.keys = keys
    this.relay = relay
    this.me = me
    this.seq = 0
    this.known = new Map() // key → seq
    this.read = new Map() // replica → Set of `${kind}${upTo}` read
    this.failed = new Map()
    this.behind = new Set()
    this.people = new Map()
    this.meta = null
    this.versions = new Map()
  }

  get own() { return [...this.known.keys()].map(part).filter((p) => p && p.replica === this.me.replica) }

  /** Everything there is, first: every copy's parts to read, opened, with the design's name and owner. */
  async load() { return this.look(true) }

  /** What is new since the last look. */
  async poll() { return this.look(false) }

  async look(fully) {
    const listing = await this.relay.list(this.keys.room, fully ? 0 : this.seq, this.keys.readToken)
    if (fully) this.known.clear()
    const changed = []
    for (const r of listing.records) {
      if (this.known.get(r.key) !== r.seq) changed.push(r.key)
      this.known.set(r.key, r.seq)
    }
    this.seq = Math.max(this.seq, listing.seq)
    const byReplica = new Map()
    for (const key of this.known.keys()) {
      const p = part(key)
      if (p) byReplica.set(p.replica, [...(byReplica.get(p.replica) ?? []), p])
    }
    const parts = []
    let again = false
    for (const [who, all] of byReplica) {
      if (who === this.me.replica && !fully) continue
      let read = this.read.get(who) ?? new Set()
      if (this.behind.delete(who)) read = new Set([...read].filter((k) => k.startsWith('w')))
      const failed = this.failed.get(who) ?? new Set()
      for (const p of toRead(all, read, failed)) {
        const key = partKey(p.kind, who, p.upTo), id = `${p.kind}${p.upTo}`
        const sealed = await this.relay.get(this.keys.room, key, this.keys.readToken)
        if (!sealed) {
          // Folded into a whole meanwhile: that whole is read next time.
          this.known.delete(key)
          if (p.kind === 'c') { this.behind.add(who); again = true }
          continue
        }
        const packed = await this.keys.open(sealed, key)
        if (packed) {
          parts.push(packed)
          this.read.set(who, (this.read.get(who) ?? new Set()).add(id))
          failed.delete(id)
        } else {
          this.failed.set(who, failed.add(id))
        }
      }
    }
    const decode = async (key) => {
      const sealed = await this.relay.get(this.keys.room, key, this.keys.readToken)
      const plain = sealed && await this.keys.open(sealed, key)
      try { return plain && JSON.parse(new TextDecoder().decode(plain)) } catch { return null }
    }
    let peopleChanged = false
    const versions = []
    for (const key of changed) {
      if (key === 'meta') this.meta = await decode(key) ?? this.meta
      else if (key.startsWith('m.')) {
        const person = await decode(key)
        if (person?.replica === key.slice(2)) { this.people.set(person.replica, person); peopleChanged = true }
      } else if (key.startsWith('v.')) {
        const version = await decode(key)
        if (version?.name) { this.versions.set(key.slice(2), version); versions.push(version) }
      }
    }
    return { parts, meta: this.meta, peopleChanged, versions, again }
  }

  /** A picture the design shows, by its name in the design; null while it is not in the room. */
  async picture(name) {
    const key = `p.${await this.keys.pictureName(name)}`
    if (!this.known.has(key)) return null
    const sealed = await this.relay.get(this.keys.room, key, this.keys.readToken)
    return sealed && this.keys.open(sealed, key)
  }

  /** Sends what was changed here (`packed`, the core's changes up to `clock`) as a record of this
   *  browser's own, and now and then the whole design (`whole()`, packed), deleting this browser's
   *  records from before its previous whole. */
  async send(packed, clock, whole) {
    const own = this.own
    const upTo = nextUpTo(clock, own)
    await this.put(partKey('c', this.me.replica, upTo), packed)
    own.push({ kind: 'c', replica: this.me.replica, upTo })
    if (whole && shouldFold(own)) {
      await this.put(partKey('w', this.me.replica, upTo), whole())
      own.push({ kind: 'w', replica: this.me.replica, upTo })
      for (const p of folded(own, upTo)) {
        const key = partKey(p.kind, p.replica, p.upTo)
        await this.relay.delete(this.keys.room, key, { write: this.keys.writeToken, writer: this.me.writer })
        this.known.delete(key)
      }
    }
  }

  async put(key, plain) {
    const sealed = await this.keys.seal(plain, key)
    await this.relay.put(this.keys.room, key, sealed, { write: this.keys.writeToken, writer: this.me.writer })
    this.known.set(key, this.known.get(key) ?? 0)
    const p = part(key)
    if (p) this.read.set(p.replica, (this.read.get(p.replica) ?? new Set()).add(`${p.kind}${p.upTo}`))
  }

  /** Says who works from this browser, once. */
  async introduce(since = Date.now()) {
    const person = { replica: this.me.replica, name: this.me.name, app: 'web', since }
    await this.put(`m.${this.me.replica}`, enc.encode(JSON.stringify(person)))
  }

  /**
   * Listens to the room: `onNews` when there are records to fetch, `onGone` when the owner stopped
   * sharing it, `onLink(state)` as the connection comes and goes. It keeps itself open, trying again
   * a little later each time. Returns a function that stops it.
   */
  follow({ onNews, onGone, onLink = () => {} }) {
    let socket, stopped = false, attempt = 0, pinger, retry
    const connect = () => {
      if (stopped) return
      onLink('connecting')
      socket = new WebSocket(this.relay.liveURL(this.keys.room, this.keys.readToken))
      socket.binaryType = 'arraybuffer'
      socket.onopen = () => { attempt = 0; onLink('live'); pinger = setInterval(() => socket.readyState === 1 && socket.send('ping'), 20_000) }
      socket.onmessage = (e) => {
        if (typeof e.data === 'string') return
        const b = new Uint8Array(e.data)
        if (b[0] === 0x05 && b.length >= 9) {
          const seq = Number(new DataView(b.buffer, b.byteOffset).getBigUint64(1))
          if (seq > this.seq) onNews(seq)
        } else if (b[0] === 0x06) {
          stopped = true
          onGone()
        }
      }
      socket.onclose = () => {
        clearInterval(pinger)
        if (stopped) return
        onLink('away')
        retry = setTimeout(connect, Math.min(30_000, 1000 * 2 ** attempt++))
      }
    }
    connect()
    // Should the socket miss anything, a look every half minute finds it.
    const looking = setInterval(() => !stopped && onNews(this.seq), 30_000)
    return () => { stopped = true; clearInterval(looking); clearTimeout(retry); clearInterval(pinger); socket?.close() }
  }
}

/** This browser's name among the copies and the token its records are written with, kept between visits. */
export function browserSelf(store = globalThis.localStorage) {
  const letters = 'abcdefghijklmnopqrstuvwxyz0123456789'
  const random = (n) => Array.from(crypto.getRandomValues(new Uint8Array(n)), (b) => letters[b % letters.length]).join('')
  const get = (k) => { try { return store?.getItem(k) } catch { return null } }
  const set = (k, v) => { try { store?.setItem(k, v) } catch {} }
  let replica = get('bezzle.replica')
  if (!replica || !/^[a-z0-9]{1,32}$/.test(replica)) { replica = random(16); set('bezzle.replica', replica) }
  let writer = get('bezzle.writer')
  if (!writer) { writer = b64url(crypto.getRandomValues(new Uint8Array(32))); set('bezzle.writer', writer) }
  return { replica, writer, name: get('bezzle.name') ?? '' }
}
