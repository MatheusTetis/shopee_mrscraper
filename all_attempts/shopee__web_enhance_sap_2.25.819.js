// t = 318
function n(t, e) {
    var r = l
      , i = r();
    return r.H || (r.H = []),
    (n = function(e, o) {
        var u = r.H[e = +e];
        return u || (void 0 === n.L && (n.F = function(t) {
            for (var e, n, r = "", i = "", o = 0, u = 0; n = t.charAt(u++); ~n && (e = o % 4 ? 64 * e + n : n,
            o++ % 4) && (r += String.fromCharCode(255 & e >> (-2 * o & 6))))
                n = "dbkfxmhicwepuyglzrjvoasqntUTKSMRQPZDNWHXIJYCOALGEVFB2845697130+/=".indexOf(n);
            for (var s = 0, a = r.length; s < a; s++)
                i += "%" + ("00" + r.charCodeAt(s).toString(16)).slice(-2);
            return decodeURIComponent(i)
        }
        ,
        t = arguments,
        n.L = !0),
        u = n.F(i[e]),
        r.H[e] = u),
        u
    }
    )(t, e)
}

function d(t, e) {
    var n = h
      , r = n();
    return n.no || (n.no = []),
    (d = function(e, i) {
        var o = n.no[e = +e];
        return o || (void 0 === d.nS && (d.ng = function(t) {
            for (var e, n, r = "", i = "", o = 0, u = 0; n = t.charAt(u++); ~n && (e = o % 4 ? 64 * e + n : n,
            o++ % 4) && (r += String.fromCharCode(255 & e >> (-2 * o & 6))))
                n = "kvrjtgadozhcbfwylnsmexiqupWXEVCZYRSHPLJOFNKQMAUDGIBT6132895074+/=".indexOf(n);
            for (var s = 0, a = r.length; s < a; s++)
                i += "%" + ("00" + r.charCodeAt(s).toString(16)).slice(-2);
            return decodeURIComponent(i)
        }
        ,
        t = arguments,
        d.nS = !0),
        o = d.ng(r[e]),
        n.no[e] = o),
        o
    }
    )(t, e)
}

// t = anticrawler: undefined, body: undefined, credentials: "include", headers: {...}, method: "GET", signal: undefined
t =  {
    "anticrawler": undefined,
    "body": undefined,
    "credentials": "include",
    "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-API-SOURCE": "pc",
        "X-CSRFToken": "j8X1QYld85Yc8xjj7sCvkYzXbUA5LDXG",
        "X-Requested-With": "XMLHttpRequest",
        "X-Shopee-Language": "zh-Hant",
        "x-sz-sdk-version": "1.12.18"
    },
    "method": "GET",
    "signal": undefined
}
e = "x-sap-ri"
function encryptHeader(t, e) {
    var r = n;
    if (t && t[r(322)]) {
        if (s(t))
            return t[r(322)][r(45)](e);
        if (!(t[r(322)]instanceof Array))
            return t[r(322)][e];
        for (var i = 0; i < t[r(322)].length; i++)
            if (t[r(322)][i][0] === e)
                return t[r(322)][i][1]
    }
    return ""
}

function encryptHeaderNew(t, e) {
    for (var i = 0; i < t["header"].length; i++)
        if (t["header"][i][0] === e)
            return t["header"][i][1]
}

console.log(encryptHeader(t, e))