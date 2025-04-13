// function_c_readable.js
import { d } from './function_d.js';
import { e } from './var_e.js';
import { f } from './var_f.js';
import { g } from './var_g.js';

export function c(g, n, r, i, o, u, s, a) {
    // Initialization of many variables, simplified here for clarity
    var ct, bt, lt, Tt, dt, pt, vt, Rt, gt, yt, wt, Mt, Jt, Ht, Et, Lt, It, qt, Wt, Xt, _t, At, kt, Ut, St, Bt, Nt, Ot, Pt, jt, zt, Zt, Gt, Dt, Ft, Kt, Vt, Qt, Ct = d;

    // Define constants and functions
    qt = qt || (
        At = "function",
        kt = "symbol",
        Ut = eval,
        Ht = void 0,
        Jt = String[Ct(0)],
        Wt = Math[Ct(1)],
        Ft = Ct(2),
        Xt = Array,
        _t = "prototype",
        Dt = Ut(Ct(3)),
        Qt = "slice",
        Et = Dt(r),
        Kt = "push",
        Vt = "pop"
    );
    const xt = 15;
    const mt = 4;
    let t = 0;
    let ht = false;

    function Lt(idx, val) {
        const segment = idx >> mt;
        r[idx & xt][segment] = val;
    }

    Dt = g[t++];

    while (!ht && t < n && Dt !== undefined) {
        if (Dt < 5) {
            const ct = g[t++];
            const bt = g[t++];
            const lt = Et(bt);
            const Tt = Et(ct);
            s[lt] = Math[Ct(1)](s[lt], Tt);
        } else if (Dt < 6) {
            const ct = g[t++];
            const bt = g[t++];
            Lt(bt, -Et(ct)) || f[33] < f[297];
        } else if (Dt < 13) {
            const ct = g[t++];
            const bt = g[t++];
            Lt(bt, new(Et(ct))) && a;
        } else if (Dt < 14) {
            const ct = g[t++];
            Lt(ct, false);
        } else if (Dt < 15) {
            const ct = g[t++];
            t += ct;
        } else if (Dt < 100) {
            const ct = g[t++], bt = g[t++], lt = g[t++];
            Lt(lt, Et(bt) + Et(ct));
        } else if (Dt < 200) {
            const ct = g[t++], bt = g[t++], lt = g[t++];
            Lt(lt, Et(bt) - Et(ct));
        } else if (Dt < 300) {
            const ct = g[t++], bt = g[t++], lt = g[t++];
            Lt(lt, Et(bt) * Et(ct));
        } else if (Dt < 400) {
            const ct = g[t++], bt = g[t++], lt = g[t++];
            Lt(lt, Et(bt) / Et(ct));
        } else if (Dt < 500) {
            const ct = g[t++], bt = g[t++], lt = g[t++];
            Lt(lt, Et(bt) % Et(ct));
        } else if (Dt < 600) {
            const ct = g[t++], bt = g[t++];
            const type = typeof Et(bt);
            Lt(ct, type);
        } else if (Dt < 700) {
            const ct = g[t++], bt = g[t++], lt = g[t++];
            Lt(lt, Et(bt) >>> Et(ct));
        } else if (Dt < 800) {
            const ct = g[t++], bt = g[t++], lt = g[t++];
            Lt(lt, Et(bt) & Et(ct));
        } else if (Dt < 900) {
            const ct = g[t++], bt = g[t++], lt = g[t++];
            Lt(lt, Et(bt) | Et(ct));
        } else if (Dt < 990) {
            const ct = g[t++], bt = g[t++], lt = g[t++];
            Lt(lt, Et(bt) ^ Et(ct));
        } else {
            ht = 233;
        }

        Dt = g[t++];
    }

    return ht;
}

