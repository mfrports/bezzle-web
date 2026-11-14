// The page's few words, in the visitor's language where Bezzle has it: English, German, French
// and Italian. Where the app or the website says the same thing, these are its words
// (Bezzle/Localizable.xcstrings; the website's invitation page), so that a design reads alike in
// the app, on the website and here. The app's French says "vous"; this page says "tu", like
// the website. `node tools/words.mjs` holds them to that.

export const WORDS = {
  en: {
    opening: 'Opening…', live: 'Live', connecting: 'Connecting…', away: 'Reconnecting…', gone: 'No longer shared', offline: 'Offline', none: 'No design',
    by: (n) => `Shared by ${n}`,
    incomplete: ['This link is not complete.', 'Ask for a new invitation.'],
    ended: ['This design is no longer shared.', 'The design’s owner has stopped sharing it.'],
    missing: ['This link does not lead to a design.', 'Ask for a new invitation.'],
    unreachable: ['Bezzle could not reach the design.', 'Check the connection and open the link again.'],
    empty: ['Nothing to show yet.', 'The design has no artboards.'],
    boards: 'Artboards', play: 'Play the film', stop: 'Stop the film', film: 'Film', people: 'People', goTo: (n) => `Go to ${n}`,
  },
  de: {
    opening: 'Wird geöffnet …', live: 'Live', connecting: 'Verbinden …', away: 'Neu verbinden …', gone: 'Nicht mehr geteilt', offline: 'Offline', none: 'Kein Design',
    by: (n) => `Geteilt von ${n}`,
    incomplete: ['Dieser Link ist unvollständig.', 'Bitte um eine neue Einladung.'],
    ended: ['Dieses Design wird nicht mehr geteilt.', 'Der Eigentümer des Designs teilt es nicht mehr.'],
    missing: ['Dieser Link führt zu keinem Design.', 'Bitte um eine neue Einladung.'],
    unreachable: ['Bezzle konnte das Design nicht erreichen.', 'Prüfe die Verbindung und öffne den Link noch einmal.'],
    empty: ['Noch nichts zu sehen.', 'Das Design hat keine Zeichenflächen.'],
    boards: 'Zeichenflächen', play: 'Den Film abspielen', stop: 'Den Film anhalten', film: 'Film', people: 'Personen', goTo: (n) => `Zu ${n}`,
  },
  fr: {
    opening: 'Ouverture…', live: 'En direct', connecting: 'Connexion…', away: 'Reconnexion…', gone: 'Plus partagé', offline: 'Hors ligne', none: 'Aucun design',
    by: (n) => `Partagé par ${n}`,
    incomplete: ['Ce lien est incomplet.', 'Demande une nouvelle invitation.'],
    ended: ['Ce design n’est plus partagé.', 'Le propriétaire du design a cessé de le partager.'],
    missing: ['Ce lien ne mène à aucun design.', 'Demande une nouvelle invitation.'],
    unreachable: ['Bezzle n’a pas pu atteindre le design.', 'Vérifie la connexion et ouvre à nouveau le lien.'],
    empty: ['Rien à voir pour l’instant.', 'Le design n’a pas de plan de travail.'],
    boards: 'Plans de travail', play: 'Lire le film', stop: 'Arrêter le film', film: 'Film', people: 'Personnes', goTo: (n) => `Vers ${n}`,
  },
  it: {
    opening: 'Apertura…', live: 'Dal vivo', connecting: 'Connessione…', away: 'Riconnessione…', gone: 'Non più condiviso', offline: 'Offline', none: 'Nessun design',
    by: (n) => `Condiviso da ${n}`,
    incomplete: ['Questo link è incompleto.', 'Chiedi un nuovo invito.'],
    ended: ['Questo design non è più condiviso.', 'Il proprietario del design ha smesso di condividerlo.'],
    missing: ['Questo link non porta a nessun design.', 'Chiedi un nuovo invito.'],
    unreachable: ['Bezzle non è riuscito a raggiungere il design.', 'Controlla la connessione e apri di nuovo il link.'],
    empty: ['Ancora niente da vedere.', 'Il design non ha tavole da disegno.'],
    boards: 'Tavole da disegno', play: 'Riproduci il film', stop: 'Ferma il film', film: 'Film', people: 'Persone', goTo: (n) => `Vai a ${n}`,
  },
}

/** The first of the visitor's languages the page has words in; English otherwise. */
export function language(wanted = globalThis.navigator?.languages ?? [globalThis.navigator?.language ?? 'en']) {
  return wanted.map((l) => String(l).slice(0, 2).toLowerCase()).find((l) => WORDS[l]) ?? 'en'
}
