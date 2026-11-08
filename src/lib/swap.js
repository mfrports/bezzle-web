/** Words with a part of them replaced, for the Windows words (src/words-windows.js): a part no longer
    there fails the build, so no page goes out half for the Mac. `where` names the words in the error. */
export const swap = (s, ...pairs) => pairs.reduce((x, [a, b]) => {
    if (!x.includes(a)) throw new Error(`Bezzle for Windows' words: “${a}” is no longer in the words it replaces (“${x.slice(0, 60)}…”); change the replacement to match`);
    return x.replace(a, b);
}, s);
