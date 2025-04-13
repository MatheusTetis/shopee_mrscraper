// function_k.js
import { a } from './global.js';
import { i } from './var_i.js';
import { j } from './var_j.js';
import { n } from './function_n.js';

function k(t) {
    var e = j[t];
    console.log("function k Log", e, t, j)
    return void 0 !== e || (e = j[t] = {
        exports: {}
    }, i[t](e, e.exports, k)), e.exports
}
k.m = i, (() => {
    var t = [];
    k.O = function(e, r, i, o) {
        var u = n;
        if (!r) {
            for (var s = 1 / 0, a = 0; a < t.length; a++) {
                r = t[a][0], i = t[a][1], o = t[a][2];
                for (var f, h = !0, c = 0; c < r.length; c++)(!1 & o || o <= s) && Object.keys(k.O)[u(370)]((function(t) {
                    return k.O[t](r[c])
                })) ? r.splice(c--, 1) : (h = !1, o < s && (s = o));
                h && (t.splice(a--, 1), void 0 !== (f = i())) && (e = f)
            }
            return e
        }
        for (o = o || 0, a = t.length; 0 < a && t[a - 1][2] > o; a--) t[a] = t[a - 1];
        t[a] = [r, i, o]
    }
})(), k.g = function() {
    var t = n;
    if ("object" == typeof globalThis) return globalThis;
    try {
        return this || new Function(t(371))()
    } catch (t) {
        if ("object" == typeof window) return window
    }
}(), k.o = function(t, e) {
    var r = n;
    return Object.prototype[r(24)][r(15)](t, e)
}, (() => {
    function t(t, e) {
        var i, o, u, s = n,
            a = e[0],
            f = e[1],
            h = e[2],
            c = 0;
        if (a[s(310)]((function(t) {
                return 0 !== r[t]
            }))) {
            for (i in f) k.o(f, i) && (k.m[i] = f[i]);
            h && (u = h(k))
        }
        for (t && t(e); c < a.length; c++) o = a[c], k.o(r, o) && r[o] && r[o][0](), r[o] = 0;
        return k.O(u)
    }
    var e = n,
        r = {
            57: 0
        },
        i = (k.O.j = function(t) {
            return 0 === r[t]
        }, globalThis[e(372) + a] = globalThis[e(372) + a] || []);
    i.forEach(t[e(36)](null, 0)), i.push = t[e(36)](null, i.push[e(36)](i))
})();

export { k };