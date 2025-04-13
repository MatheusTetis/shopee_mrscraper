// vm_readable.js

export function runVM(g, n, r, i, o, u, s, a) {
    const xt = 15;
    const mt = 4;
    let t = 0;
    let ht = false;

    function getDecoded(idx) {
        return r[idx];  // Placeholder for decode logic
    }

    function writeMemory(idx, val) {
        const segment = idx >> mt;
        r[idx & xt][segment] = val;
    }

    let Dt = g[t++];

    while (!ht && t < n && Dt !== undefined) {
        // Simplified readable VM opcode logic
        if (Dt < 5) {
            const ct = g[t++];
            const bt = g[t++];
            const val = getDecoded(bt);
            const pow = getDecoded(ct);
            s[val] = Math.pow(s[val], pow);
        } else if (Dt < 10) {
            const ct = g[t++];
            const bt = g[t++];
            writeMemory(bt, -getDecoded(ct));
        }

        // Fetch next opcode
        Dt = g[t++];
    }

    return ht;
}
