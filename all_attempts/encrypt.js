a = [
    "Tk8XDnsQq5ySTxa8t7aI",
    "Li3MgnsQq5ySTxa8t7aI",
    "DwpXg7DQJNnADiQuJCn5LiySb5yYDi3KTxXQghySJC3StinWgb", // "triggerAntiCrawlerCustomizedErrorPage"
    "DwpXg7DQJNnADiQuJCn5LiySaC3Sq7ylL7DXLG", // "triggerAntiCrawlerForceLogin"
    "DwpXg7DQJNnADiQuJCn5LiySyCySTkgXq7n6Tk3A", // "triggerAntiCrawlerVerification"
    "J7MODkUNy7nXDhgOJNaCJhQATxb",
    "qk86TtgSqxyNb73AgCQW",
    "g7y6y7yRaiy7TksQaCQAg7ySJwpXLWb" // "getWebDeviceFingerprint"
]

QY = [
    "initSecuritySdk",
    "loadSecuritySdk",
    "triggerAntiCrawlerCustomizedErrorPage",
    "triggerAntiCrawlerForceLogin",
    "triggerAntiCrawlerVerification",
    "getWebDeviceFingerprint"
]

function fe(e, t) {// e = "DwpXg7DQJNnADiQuJCn5LiySyCySTkgXq7n6Tk3A" = a[4]
    var i = Fe
      , a = i();
    return !i.QY && (i.QY = []),
    fe = function(t, r) {
        t -= 0;
        var o = i.QY[t];
        return o || (void 0 === fe.Qf && (fe.Qg = function(e) {
            for (var t, i, a = "", r = "", o = 0, n = 0; i = e.charAt(n++); ~i && (t = o % 4 ? 64 * t + i : i,
            o++ % 4) ? a += String.fromCharCode(255 & t >> (-2 * o & 6)) : 0)
                i = "rmjuhniwzpdclsoebafvtykxqgTLJDBVGMRFNQCWPXHIZKAOEUSY6975284013+/=".indexOf(i);
            for (var s = 0, l = a.length; s < l; s++)// a = "triggerAntiCrawlerVerification"
                r += "%" + ("00" + a.charCodeAt(s).toString(16)).slice(-2);
            return decodeURIComponent(r)
        }
        ,
        e = arguments,
        fe.Qf = !0),
        o = fe.Qg(a[t]),
        i.QY[t] = o),
        o
    }
    ,
    fe(e, t)
}

SAP
: 
Array(2)
0
: 
{p: 100, v: '2.25.802'}
1
: 
{p: 0, v: '2.25.795'}

SHOPEE_CCMS
: 
appKey
: 
"PYNtwNVG"
appSecret
: 
"c2f03b9922ca8cdd4933e44afabfede646fb2118"

class $l {
    constructor(e, t, n) {
        this.env = e.toLowerCase(),
        this.locale = t.toUpperCase(),
        this.props = n,
        n.initSubscribe(this.sync.bind(this))
    }
    dataPostProcesser(e, t) {
        const {platform: n, getCookies: r} = this.props;
        this.cookies || (this.cookies = r());
        const a = this.cookies;
        return (0,
        Kl.YL)((0,
        te.A)({
            userid: a.SPC_U && "-" !== a.SPC_U ? parseInt(a.SPC_U, 10) : void 0,
            sessionid: a.SPC_R_T_ID,
            token: a.SPC_R_T_IV,
            deviceid: a.SPC_F,
            platform: n,
            timestamp: (new Date).getTime(),
            country: this.locale,
            dfp: t
        }, e))
    }
    async sync({data: e}) {
        const t = await L.AV.getWebDeviceFingerprint({
            shouldWaitForDfpInit: !0
        })
          , n = this.dataPostProcesser(e, t);
        return "live" !== this.env && (0,
        g.trackLog)({
            data: n,
            raw: e
        }, "AD"),
        fetch($l.REPORT_ENDPOINT, {
            method: "POST",
            body: JSON.stringify(n)
        })
    }
}

"/api/v4/search/search_prefills"
