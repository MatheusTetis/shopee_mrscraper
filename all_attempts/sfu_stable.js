"use strict";
(("undefined" != typeof self ? self : this).webpackChunkshopee_pc = ("undefined" != typeof self ? self : this).webpackChunkshopee_pc || []).push([[7327], {
    92320: (e, t, i) => {
        i.d(t, {
            DV: () => Rt
        });
        var a, r, o, n, s, l, c, p, d, h, u, v, f, m, g, y, _, w, b, R, C, H = i(84898), S = "device_sz_fingerprint", k = "sz-token", P = "af-ac-enc-sz-token", A = "x-sz-sdk-version", E = "d-nonptcha-sync", T = "/verify/traffic", x = "/verify/traffic/error", D = "/buyer/login", F = {
            onInit: () => {}
            ,
            onComplete: () => {}
            ,
            onFail: () => {}
            ,
            onTimeout: () => {}
        }, I = ((o = {})[(r = fe)(0)] = F,
        o[r(1)] = F,
        o.hookFUFetch = F,
        o.hookFUXhr = F,
        o), O = {
            test: "90a081b48a9c87345189bda87a989d23",
            uat: "5a733eaa4e1df48aa36fd9316f093107",
            staging: "d9dd212362d63e8ddb085bb5bce5259f",
            stable: "dc6fe70845cb784460ead6c7fd76bb91",
            live: "f9ffc83459897a13dd14c537e84b1753"
        }, U = ((a = {}).env = {
            test: "test.",
            stable: "test-stable.",
            staging: "staging.",
            liveish: "live-test.",
            live: "",
            uat: "uat."
        },
        a.cid = {
            SG: "sg",
            TW: "xiapi",
            MY: "my",
            PH: "ph",
            TH: "th",
            ID: "id",
            VN: "vn",
            BR: "br",
            MX: "mx",
            CO: "co",
            CL: "cl",
            PL: "pl",
            AR: "xiapi",
            ES: "xiapi",
            FR: "xiapi",
            IN: "xiapi"
        },
        a), L = ["/api/v2/item/get", "/api/v4/item/get", "/api/v4/pdp/get", "/api/v4/pdp/get_pc", "/api/v4/pdp/get_rw"], M = ["/api/v4/search/search_facet", "/api/v4/search/search_items", "/api/v4/search/search_page_common", "/api/v4/search/get_ymal_items", "/api/v4/search/search_filter_config", "/api/v4/search/search_mart_items", "/api/v4/search/search_user"], N = ["/api/v4/shop/get_shop_detail", "/api/v4/shop/get_categories", "/api/v4/shop/get_shop_tab", "/api/v4/shop/rcmd_items", "/api/v4/shop/get_shop_base", "/api/v4/shop/get_shop_seo", "/api/v4/shop/get_products_tab_data", "/api/v4/shop/get_membership_data", "/api/v4/shop/get_campaign_preview", "/api/v4/shop/get_top_products", "/api/v4/shop/get_shop_seller_show", "/api/v4/shop/get_shop_seller_info", "/api/v4/shop/is_show", "/api/v4/shop/get_shop_by_user", "/api/v4/shop/get_follow_prize_campaign", "/api/v4/shop/get_shop_base_preview", "/api/v4/shop/search_items", "/api/v4/shop/get_shop_core_info", "/api/v4/shop/get_popup_data", "/api/v4/shop/get_campaign_tab_data", "/api/v4/shop/block_user", "/api/v4/shop/get_scp_list", "/api/v4/shop/get_shop_tab_preview", "/api/v4/shop/unfollow", "/api/v4/shop/follow"], q = Object.freeze({
            REQUEST_TIMEOUT: -99,
            FE_SERVER_ERROR: -999,
            SERVER_ERROR: 10005,
            t: 90309999
        });
        (s = n || (n = {}))[s.Captcha = 1] = "Captcha",
        s[s.ForceLogin = 2] = "ForceLogin",
        s[s.Redirect = 5] = "Redirect",
        s[s.FORCE_DOWNLOAD_APP = 8] = "FORCE_DOWNLOAD_APP",
        s[s.FORCE_BIND_PHONE = 9] = "FORCE_BIND_PHONE",
        s[s.VERIFY_PHONE = 10] = "VERIFY_PHONE",
        (c = l || (l = {}))[c.Block = 2] = "Block",
        c[c.Challenge = 3] = "Challenge",
        (d = p || (p = {}))[d.Level1 = 1] = "Level1",
        d[d.Level2 = 2] = "Level2",
        d[d.Level3 = 3] = "Level3",
        (u = h || (h = {})).External = "1",
        u.Internal = "2",
        (f = v || (v = {})).ShopeeInternal = "1",
        f.ShopeeApp = "2",
        (g = m || (m = {}))[g.AntiCrawler = 0] = "AntiCrawler",
        g[g.Dfp = 1] = "Dfp",
        (_ = y || (y = {})).Request = "request",
        _.Success = "success",
        _.Timeout = "timeout",
        _.Failed = "failed",
        (b = w || (w = {}))[b.PC = 0] = "PC",
        b[b.RW = 1] = "RW",
        b[b.SHOPEELIVE = 2] = "SHOPEELIVE",
        b[b.BANK = 3] = "BANK",
        (C = R || (R = {})).FORCEAPP = "1",
        C.BINDPHONE = "2",
        C.VERIFYPHONE = "3";
        var B, z, j = !("undefined" == typeof window || !window.document || !window.document.createElement), V = /beeshop|shopee/i, W = /shopee.*app_type=2(\s|$)/i, X = /shopee-food-driver/i, Q = /shopee-express-driver/i, J = /shopeepay|airpay/i, Y = /mitra/i, G = /seatalk/i, K = /shopee-toc-acc-sdk/i, $ = /now/i, Z = /spinjam.*app_type=20(\s|$)/i;
        (z = B || (B = {}))[z.Shopee = 1] = "Shopee",
        z[z.ShopeeFoodDriver = 2] = "ShopeeFoodDriver",
        z[z.ShopeePartner = 3] = "ShopeePartner",
        z[z.ShopeeExpressDriver = 4] = "ShopeeExpressDriver",
        z[z.ShopeePay = 5] = "ShopeePay",
        z[z.Mitra = 6] = "Mitra",
        z[z.SeaTalk = 7] = "SeaTalk",
        z[z.ShopeeAccountSdk = 8] = "ShopeeAccountSdk",
        z[z.ShopeeFoodBuyer = 11] = "ShopeeFoodBuyer",
        z[z.SPinjam = 12] = "SPinjam";
        var ee = () => void 0 !== ( (e=( () => {
            if (j)
                return window.navigator.userAgent
        }
        )()) => {
            if (void 0 !== e)
                return X.test(e) ? B.ShopeeFoodDriver : W.test(e) ? B.ShopeePartner : Q.test(e) ? B.ShopeeExpressDriver : Y.test(e) ? B.Mitra : G.test(e) ? B.SeaTalk : K.test(e) ? B.ShopeeAccountSdk : $.test(e) ? B.ShopeeFoodBuyer : J.test(e) ? B.ShopeePay : V.test(e) ? B.Shopee : Z.test(e) ? B.SPinjam : void 0
        }
        )();
        function te(e, t) {
            var i = function(e, t=!1) {
                if (!e)
                    return "";
                var i = Object.keys(e).filter((t => null != e[t]));
                return i.length ? (t ? "" : "?") + i.sort().map((function(t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                }
                )).join("&") : ""
            }(t);
            if (!i.substring(1))
                return e;
            var [a,r] = e.split("#");
            return a = a.indexOf("?") > -1 ? a + "&" + i.substring(1) : "" + a + i,
            r ? a + "#" + r : a
        }
        var ie = [/^(seller\.)((xiapi|sg|th|vn|id|ph|br|my|tw|mx|co|cl|in|ar|pl|fr|es)\.)((test|uat|staging|live-test|test-stable)\.)?shopee\.cn$/, /^(banhang\.)((test|uat|staging|live-test|test-stable)\.)?shopee\.vn$/, /^(seller\.)((test|uat|staging|live-test|test-stable)\.)?shopee\.(co\.(id|th)|com\.(ar|br|co|mx|my)|cl|es|fr|in|ph|pl|sg|tw)$/];
        function ae(e) {
            if (!e)
                return !1;
            try {
                var {hostname: t} = new URL(e);
                return ie.some((e => e.test(t)))
            } catch (e) {
                return !1
            }
        }
        function re() {
            return self.__ENV__
        }
        function oe() {
            return self.__LOCALE__
        }
        var ne, se = ((ne = {}).malls = {
            SG: "shopee.sg",
            TW: "shopee.tw",
            MY: "shopee.com.my",
            PH: "shopee.ph",
            TH: "shopee.co.th",
            ID: "shopee.co.id",
            VN: "shopee.vn",
            BR: "shopee.com.br",
            MX: "shopee.com.mx",
            CO: "shopee.com.co",
            CL: "shopee.cl",
            AR: "shopee.com.ar",
            FR: "shopee.fr",
            PL: "shopee.pl",
            ES: "shopee.es",
            IN: "shopee.in"
        },
        ne.envs = {
            test: "test.",
            stable: "test-stable.",
            staging: "staging.",
            liveish: "live-test.",
            live: "",
            uat: "uat."
        },
        ne);
        function le(e) {
            var {env: t, locale: i} = e;
            return "https://" + se.envs[t] + se.malls[i]
        }
        var ce = /web_sdk_host=snack/i;
        function pe({isRelative: e, host: t, path: i, params: a}) {
            return te("" + (e ? "" : t) + i, a)
        }
        function de({history: e, redirectType: t, shouldReplaceHistory: i, absoluteRedirectPath: a, relativeRedirectPath: r}) {
            var o, n, s, l;
            t !== h.External && e ? i ? e.replace(r) : ee() ? null == (o = window) || null == (o = o.WebViewJavascriptBridge) || o.callHandler("navigate", ((s = {}).url = a,
            s.popSelf = 0,
            s.navbar = {},
            s)) : e.push(r) : i ? location.replace(a) : ee() ? null == (n = window) || null == (n = n.WebViewJavascriptBridge) || n.callHandler("navigate", ((l = {}).url = a,
            l.popSelf = 0,
            l.navbar = {},
            l)) : location.href = a
        }
        function he({history: e, next: t, appKey: i, scene: a="crawler_item", shouldReplaceHistory: r=!0, clientId: o, redirectType: n=h.External, verificationPageHost: s=location.origin, antiBotTrackingId: l, setRedirecting: c}) {
            n !== h.External && e || c && c();
            var p, d, u, v = (0,
            H.A)({
                is_initial: !0,
                app_key: i,
                scene: a,
                client_id: o,
                redirect_type: n,
                next: t,
                should_replace_history: r,
                anti_bot_tracking_id: l
            }, t.includes("__mobile__") || ee() ? {
                __mobile__: 1
            } : {});
            de(((u = {}).history = e,
            u.redirectType = n,
            u.shouldReplaceHistory = r,
            u.absoluteRedirectPath = pe(((d = {
                isRelative: !1
            }).host = s,
            d.path = T,
            d.params = v,
            d)),
            u.relativeRedirectPath = pe(((p = {
                isRelative: !0
            }).host = s,
            p.path = T,
            p.params = v,
            p)),
            u))
        }
        function ue({history: e, trackingId: t, shouldReplaceHistory: i=!0, redirectType: a=h.External, verificationPageHost: r=location.origin, homeUrl: o, isLoggedIn: n=!0, error_type: s}) {
            var l, c, p, d, u, v, f = (0,
            H.A)({
                tracking_id: t,
                is_logged_in: n,
                home_url: o || location.origin
            }, s ? ((p = {}).type = s,
            p) : {}, s === R.BINDPHONE || s === R.VERIFYPHONE ? ((c = {}).next = location.href,
            c) : {}, location.origin.includes("xiapibuy") ? ((l = {}).origin = location.origin,
            l) : {}, ee() ? {
                __mobile__: 1
            } : {});
            de(((v = {}).history = e,
            v.redirectType = a,
            v.shouldReplaceHistory = i,
            v.absoluteRedirectPath = pe(((u = {
                isRelative: !1
            }).host = r,
            u.path = x,
            u.params = f,
            u)),
            v.relativeRedirectPath = pe(((d = {
                isRelative: !0
            }).host = r,
            d.path = x,
            d.params = f,
            d)),
            v))
        }
        function ve({history: e, next: t, redirectType: i=h.External, shouldReplaceHistory: a=!0, verificationPageHost: r=location.origin, isFromGoogleAdsPDP: o, trackingId: n}) {
            var s, l = (0,
            H.A)({
                next: t
            }, t.includes("__mobile__") || ee() ? {
                __mobile__: 1
            } : {}, o ? ((s = {}).is_from_fu = (new Date).getTime(),
            s) : {}, {
                fu_tracking_id: n
            });
            if (function() {
                if (j) {
                    var e = window.navigator.userAgent;
                    if (ce.test(e))
                        return !0
                }
                return !1
            }())
                window.SHPLSBridge && (async () => {
                    !(await window.SHPLSBridge.checkLogin()) && (await window.SHPLSBridge.login(),
                    window.location.reload())
                }
                )();
            else if (ee()) {
                var c;
                null == (c = window) || null == (c = c.WebViewJavascriptBridge) || c.callHandler("login", ((d = {}).redirectPath = te("main", ((p = {}).apprl = t,
                p)),
                d.redirectTab = 1,
                d), (e => {
                    0 === (null == e ? void 0 : e.error) && location.replace(t)
                }
                ))
            } else {
                var p, d;
                if (location.origin.includes("xiapibuy")) {
                    var u = window.location.origin + "/api/seller_platform/nonce/callback/"
                      , v = window.btoa(JSON.stringify(((w = {}).next = window.location.href,
                    w)))
                      , f = re();
                    de(((_ = {}).history = e,
                    _.redirectType = h.External,
                    _.shouldReplaceHistory = a,
                    _.absoluteRedirectPath = pe(((y = {
                        isRelative: !1
                    }).host = "https://account.seller." + (U.env[f] || "") + "shopee.com",
                    y.path = "/signin/oauth/identifier",
                    y.params = ((g = {
                        account_type: 2
                    }).client_id = O[f] || O.live,
                    g.require_passwd = !0,
                    g.login_types = "[1,2,3,4,5]",
                    g.redirect_uri = u,
                    g.region = oe(),
                    g.response_type = "tob_nonce",
                    g.scope = "profile",
                    g.state = v,
                    g),
                    y)),
                    _.relativeRedirectPath = pe(((m = {
                        isRelative: !0
                    }).host = r,
                    m.path = D,
                    m.params = l,
                    m)),
                    _))
                } else {
                    var m, g, y, _, w, b, R, C;
                    de(((C = {}).history = e,
                    C.redirectType = i,
                    C.shouldReplaceHistory = a,
                    C.absoluteRedirectPath = pe(((R = {
                        isRelative: !1
                    }).host = r,
                    R.path = D,
                    R.params = l,
                    R)),
                    C.relativeRedirectPath = pe(((b = {
                        isRelative: !0
                    }).host = r,
                    b.path = D,
                    b.params = l,
                    b)),
                    C))
                }
            }
        }
        function fe(e, t) {
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
                    for (var s = 0, l = a.length; s < l; s++)
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
        function me(e, t) {
            return new Promise(( (i, a) => {
                setTimeout(( () => {
                    try {
                        i(t())
                    } catch (e) {
                        a(e)
                    }
                }
                ), e)
            }
            ))
        }
        var ge = "1.12.18"
          , ye = e => {
            var t, i, a;
            !ae(window.location.href) && (null == (t = window) || null == (t = t.Sentry) || t.captureException(e, ((a = {}).tags = ((i = {
                sentryProjectSlug: "shopee-secure-fetch-utils"
            }).sfuVersion = "" + ge,
            i),
            a)))
        }
        ;
        function _e({antiCrawlerConfig: e, response: t, pathname: i, platform: a, source: r, setRedirecting: o, getRedirecting: s, triggerAntiCrawlerCustomizedErrorPage: c, triggerAntiCrawlerForceLogin: p, triggerAntiCrawlerVerification: d, enablePopup: u}) {
            var v, f, m, g, y, _, b, C, H, S, k, P, A, E;
            if (t && e) {
                var x, D, F, I, O, L, M, N, B, z, V, W, X;
                if (t[3] ? (M = (O = t)[4],
                N = O[0],
                B = O[1],
                W = O[2],
                V = O[3],
                z = null == (x = L = O[6]) ? void 0 : x[0],
                X = null == (D = L) ? void 0 : D[1]) : (M = (O = t).challenge_type,
                N = O.action_type,
                B = O.tracking_id,
                W = O.is_login,
                V = O.error,
                z = null == (F = O.captcha_extra_info) ? void 0 : F.tracking_id,
                X = null == (I = O.captcha) ? void 0 : I.business),
                V !== q.t)
                    return;
                if (location.href.includes("/verify/traffic") || location.href.includes("/verify/captcha"))
                    return;
                if (s && o && s())
                    return;
                if (N === l.Block) {
                    var Q = a === w.SHOPEELIVE ? location.origin + "/pc/setup" : e.homeUrl;
                    return void c((E = {},
                    E.trackingId = B || "",
                    E.shouldReplaceHistory = e.shouldReplaceHistory,
                    E.redirectType = e.redirectType,
                    E.isLoggedIn = W,
                    E.verificationPageHost = e.verificationPageHost,
                    E.homeUrl = Q,
                    E))
                }
                if (M === n.Captcha) {
                    var J = a == w.PC || a == w.RW ? (X || "TSS") + "." + w[a] : r ? (X || "TSS") + "." + r : e.appKey;
                    if (!J)
                        return;
                    return void (u && e.usePopupCaptcha ? ( ({appKey: e, scene: t="crawler_item", clientId: i, shouldReplaceHistory: a, antiBotTrackingId: r, verificationPageHost: o}) => {
                        if (j) {
                            if (document.querySelector("#sfu-captcha-modal"))
                                return;
                            var n = document.createElement("div");
                            n.setAttribute("id", "sfu-captcha-modal"),
                            n.classList.add("sfu-captcha-modal"),
                            n.classList.add("open");
                            var s = document.createElement("div");
                            s.classList.add("sfu-captcha-modal-body"),
                            n.appendChild(s);
                            var l = document.createElement("iframe")
                              , c = ((g = {
                                is_initial: !0
                            }).app_key = e,
                            g.scene = t,
                            g.client_id = i,
                            g.redirect_type = h.Internal,
                            g.use_popup = !0,
                            g.should_replace_history = a,
                            g.anti_bot_tracking_id = r,
                            g.__mobile__ = "1",
                            g)
                              , p = pe(((m = {
                                isRelative: !1
                            }).host = o || window.location.protocol + "//" + window.location.host,
                            m.path = T,
                            m.params = c,
                            m));
                            l.setAttribute("src", p),
                            l.setAttribute("name", "sfu-captcha-modal-iframe"),
                            l.style.width = "100%",
                            l.style.height = "100%",
                            s.appendChild(l),
                            document.body.appendChild(n),
                            document.body.classList.add("sfu-captcha-modal-open");
                            var d = document.createElement("script");
                            d.setAttribute("type", "text/javascript");
                            var u = document.createTextNode("\n    function closeSFUCaptchaModal() {\n        var sfuCaptchaModal = document.querySelector('#sfu-captcha-modal');\n        if(sfuCaptchaModal){\n          sfuCaptchaModal.remove();\n        }\n        document.body.classList.remove('sfu-captcha-modal-open');\n    }\n    ");
                            d.appendChild(u);
                            var v = document.createElement("style");
                            v.setAttribute("type", "text/css");
                            var f = document.createTextNode("\n    .sfu-captcha-modal {\n        display: none;\n        position: fixed; \n        inset: 0;\n        background-color: rgba(0, 0, 0, .75);\n        z-index: 100000;\n        overflow: auto;\n    }\n    .sfu-captcha-modal.open {\n        display: flex;\n    }\n    .sfu-captcha-modal-body {\n        width: 80vw;\n        max-width: 500px;\n        min-width:  400px;\n        height: 550px;\n        margin: auto; \n        background: #fff;\n    }\n    .sfu-captcha-modal iframe {\n      box-sizing: border-box;\n    }\n    body.sfu-captcha-modal-open {\n        overflow: hidden;\n    }");
                            return v.appendChild(f),
                            document.getElementsByTagName("head")[0].appendChild(v),
                            void document.getElementsByTagName("head")[0].appendChild(d)
                        }
                        var m, g
                    }
                    )((A = {},
                    A.clientId = e.captchaClientId || "",
                    A.next = e.next || location.href,
                    A.appKey = J,
                    A.scene = "crawler_item",
                    A.redirectType = e.redirectType,
                    A.shouldReplaceHistory = e.shouldReplaceHistory,
                    A.verificationPageHost = e.verificationPageHost,
                    A.antiBotTrackingId = z,
                    A)) : d((P = {},
                    P.clientId = e.captchaClientId || "",
                    P.next = e.next || location.href,
                    P.appKey = J,
                    P.scene = "crawler_item",
                    P.redirectType = e.redirectType,
                    P.shouldReplaceHistory = e.shouldReplaceHistory,
                    P.verificationPageHost = e.verificationPageHost,
                    P.antiBotTrackingId = z,
                    P.setRedirecting = o,
                    P)))
                }
                if (M === n.Redirect) {
                    var Y = re()
                      , G = oe();
                    if (Y && G) {
                        var K = "https://" + (U.cid[G] || "xiapi") + "." + (U.env[Y] || "") + "xiapibuy.com";
                        location.replace(K)
                    }
                    return
                }
                if (M === n.ForceLogin) {
                    var $;
                    if (location.href.includes("/buyer/login") || location.href.includes("/buyer/authenticate"))
                        return;
                    var Z = location.pathname.startsWith("/product") && location.href.includes("gads_t_sig");
                    Z && (a === w.PC || a === w.RW) && (window.BITrack ? window.BITrack(((k = {}).data = ((S = {
                        type: "v3"
                    }).timestamp = (new Date).getTime(),
                    S.info = ((H = {
                        operation: "action_sfu_handle"
                    }).data = ((C = {
                        code: 1
                    }).scenario = JSON.stringify(((b = {}).response = t,
                    b.pathname = i,
                    b)),
                    C),
                    H),
                    S),
                    k)) : !ae(window.location.href) && (null == ($ = window) || null == ($ = $.Sentry) || $.captureMessage("BITrack is not defined", ((_ = {}).tags = ((y = {
                        sentryProjectSlug: "shopee-secure-fetch-utils"
                    }).sfuVersion = "" + ge,
                    y),
                    _)))),
                    p(((g = {}).next = e.next || location.href,
                    g.redirectType = e.redirectType,
                    g.shouldReplaceHistory = e.shouldReplaceHistory,
                    g.verificationPageHost = e.verificationPageHost,
                    g.isFromGoogleAdsPDP = Z,
                    g.trackingId = B || "",
                    g))
                }
                if (M === n.FORCE_DOWNLOAD_APP)
                    return void c((m = {},
                    m.trackingId = B || "",
                    m.shouldReplaceHistory = e.shouldReplaceHistory,
                    m.redirectType = e.redirectType,
                    m.verificationPageHost = e.verificationPageHost,
                    m.error_type = R.FORCEAPP,
                    m));
                if (M === n.FORCE_BIND_PHONE)
                    return void c((f = {},
                    f.trackingId = B || "",
                    f.shouldReplaceHistory = e.shouldReplaceHistory,
                    f.redirectType = e.redirectType,
                    f.verificationPageHost = e.verificationPageHost,
                    f.error_type = R.BINDPHONE,
                    f));
                if (M === n.VERIFY_PHONE)
                    return void c((v = {},
                    v.trackingId = B || "",
                    v.shouldReplaceHistory = e.shouldReplaceHistory,
                    v.redirectType = e.redirectType,
                    v.verificationPageHost = e.verificationPageHost,
                    v.error_type = R.VERIFYPHONE,
                    v))
            }
        }
        var we = (e, t, i, a) => {
            if (!e.allowCors && !i)
                return !1;
            if (a && e.limitMethods && !e.limitMethods.some((e => e.toLowerCase() === a.toLowerCase())))
                return !1;
            switch (e.match) {
            case "contain":
                if (t.includes(e.policyurl))
                    return !e.exclude || !e.exclude.some((e => t.includes(e)));
                break;
            case "regexp":
                if (e.policyurl.test(t))
                    return !e.exclude || !e.exclude.some((e => t.includes(e)));
                break;
            case "full":
                if (e.policyurl === t)
                    return !0
            }
            return !1
        }
          , be = (e, t, i, a) => {
            for (var r = 0; r < e.length; r++) {
                var o = e[r];
                if (we(o, t, i, a))
                    return o
            }
        }
        ;
        class Re {
            constructor(e=20) {
                this.items = [],
                this.maxSize = e
            }
            enqueue(e) {
                this.size() >= this.maxSize && (this.dequeue(),
                e instanceof Se && this.items[0].civid),
                this.items.push(e)
            }
            dequeue() {
                return this.isEmpty() ? "Underflow" : this.items.shift()
            }
            isEmpty() {
                return 0 === this.items.length
            }
            size() {
                return this.items.length
            }
            getItems() {
                return this.items
            }
        }
        class Ce {
            constructor(e, t) {
                this.key = e,
                this.timestamp = t
            }
            serialize() {
                var e = new ArrayBuffer(6)
                  , t = new DataView(e);
                return t.setUint16(0, this.key),
                t.setUint32(2, this.timestamp),
                e
            }
        }
        class He {
            constructor(e, t, i) {
                this.x = e,
                this.y = t,
                this.timestamp = i
            }
            serialize() {
                var e = new ArrayBuffer(8)
                  , t = new DataView(e);
                return t.setUint16(0, this.x),
                t.setUint16(2, this.y),
                t.setUint32(4, this.timestamp),
                e
            }
        }
        class Se {
            constructor(e, t, i, a, r, o, n, s, l, c, p) {
                this.operation = e,
                this.timestamp = t,
                this.civid = i,
                this.page_type = a,
                this.page_section = r,
                this.target_type = o,
                this.last_civ_id = n,
                this.itemidl = s,
                this.itemidr = l,
                this.shopidl = c,
                this.shopidr = p
            }
            serialize(e) {
                var t = new ArrayBuffer(34)
                  , i = new DataView(t);
                i.setUint8(0, this.operation),
                i.setUint32(1, this.timestamp),
                i.setUint8(5, e.indexOf(this.civid));
                for (var a = 0; a < this.page_type.length; a++)
                    i.setUint8(6 + a, this.page_type.charCodeAt(a));
                for (a = 0; a < this.page_section.length; a++)
                    i.setUint8(11 + a, this.page_section.charCodeAt(a));
                return i.setUint8(16, this.target_type),
                i.setUint8(17, e.indexOf(this.last_civ_id)),
                i.setUint32(18, this.itemidl),
                i.setUint32(22, this.itemidr),
                i.setUint32(26, this.shopidl),
                i.setUint32(30, this.shopidr),
                t
            }
        }
        class ke {
            constructor(e, t, i, a, r, o, n, s) {
                this.basetimestampl = e,
                this.basetimestampr = t,
                this.cividmaplen = i,
                this.eventlen = a,
                this.oribitlen = r,
                this.cividmap = o,
                this.currentTimeOffset = n,
                this.nonce = s
            }
            serialize() {
                var e = this.cividmap.length
                  , t = new ArrayBuffer(23 + e)
                  , i = new DataView(t);
                i.setUint32(0, this.basetimestampl),
                i.setUint32(4, this.basetimestampr),
                i.setUint8(8, this.cividmaplen),
                i.setUint8(9, this.eventlen),
                i.setUint8(10, this.oribitlen);
                for (var a = 0; a < e; a++)
                    i.setUint8(11 + a, this.cividmap.charCodeAt(a));
                for (i.setUint32(11 + e, this.currentTimeOffset),
                a = 0; a < 8; a++)
                    i.setUint8(15 + e + a, this.nonce[a]);
                return t
            }
        }
        var Pe = new Re(20)
          , Ae = new Re(21)
          , Ee = new Re(5)
          , Te = new Re(5)
          , xe = {
            view: 1,
            auto_view: 2,
            click: 3,
            impression: 4,
            other: 5
        }
          , De = {
            item: 1,
            shop: 2,
            voucher: 3,
            banner: 4,
            category: 5,
            skinny_banner: 6,
            cluster: 7,
            tab: 8,
            other: 9
        };
        function Fe() {
            return ["Tk8XDnsQq5ySTxa8t7aI", "Li3MgnsQq5ySTxa8t7aI", "DwpXg7DQJNnADiQuJCn5LiySb5yYDi3KTxXQghySJC3StinWgb", "DwpXg7DQJNnADiQuJCn5LiySaC3Sq7ylL7DXLG", "DwpXg7DQJNnADiQuJCn5LiySyCySTkgXq7n6Tk3A", "J7MODkUNy7nXDhgOJNaCJhQATxb", "qk86TtgSqxyNb73AgCQW", "g7y6y7yRaiy7TksQaCQAg7ySJwpXLWb"]
        }
        function Ie() {
            try {
                var e = void 0 !== performance.timeOrigin ? performance.timeOrigin : performance.timing.navigationStart
                  , t = Math.floor(performance.now());
                e < Math.pow(10, 10) && (e *= 1e3);
                var i = Math.floor(e / Math.pow(10, 9))
                  , a = Math.floor(e % Math.pow(10, 9))
                  , r = [];
                Pe.getItems().map((e => {
                    r.includes(e.civid) || "" === e.civid || r.push(e.civid),
                    r.includes(e.last_civ_id) || "" === e.last_civ_id || r.push(e.last_civ_id)
                }
                )),
                Ee.getItems().map((e => {
                    r.includes(e.civid) || "" === e.civid || r.push(e.civid),
                    r.includes(e.last_civ_id) || "" === e.last_civ_id || r.push(e.last_civ_id)
                }
                ));
                var o = function(e=8) {
                    for (var t = new Uint8Array(e), i = 0; i < e; i++)
                        t[i] = Math.floor(256 * Math.random());
                    return t
                }()
                  , n = new ke(i,a,r.length,Pe.size() + Ee.size(),Ae.size(),r.join(""),t,o)
                  , s = 23 + n.cividmap.length + 34 * (Pe.size() + Ee.size()) + 8 * Ae.size() + 6 * Te.size()
                  , l = new ArrayBuffer(s)
                  , c = new Uint8Array(l);
                c.set(new Uint8Array(n.serialize()), 0);
                var p = 23 + n.cividmap.length;
                Pe.getItems().map((e => {
                    (null == e ? void 0 : e.serialize) && (c.set(new Uint8Array(e.serialize(r)), p),
                    p += 34)
                }
                )),
                Ee.getItems().map((e => {
                    (null == e ? void 0 : e.serialize) && (c.set(new Uint8Array(e.serialize(r)), p),
                    p += 34)
                }
                )),
                Ae.getItems().map((e => {
                    (null == e ? void 0 : e.serialize) && (c.set(new Uint8Array(e.serialize()), p),
                    p += 8)
                }
                )),
                Te.getItems().map((e => {
                    (null == e ? void 0 : e.serialize) && (c.set(new Uint8Array(e.serialize()), p),
                    p += 6)
                }
                ));
                for (var d = btoa(String.fromCharCode.apply(null, Array.from(c))), h = "", u = 1, v = 0; v < d.length; v++)
                    d[v] === d[v + 1] ? u++ : (h += u >= 5 ? "A|" + u + "|" : d[v].repeat(u),
                    u = 1);
                return h
            } catch (e) {
                return ye(e),
                "error"
            }
        }
        function Oe({locale: e, env: t, platform: a, source: r, ACConfig: o, performanceTrackings: n=I, enableGlobalHook: s, enableTMS: l, enablePopup: c, policies: p, onError: d= () => {}
        }) {
            var u, v = null, f = null, g = null, y = null, _ = null, b = null, R = !1;
            function C() {
                R = !0
            }
            function T() {
                return R
            }
            function x(e) {
                (a === w.PC || a === w.RW) && ye(e)
            }
            async function D({history: r, onFail: o= () => {}
            }) {
                var s, l, c, p, d = fe;
                if (a !== w.BANK && (r && (b = r),
                null == f && null == g && j))
                    try {
                        n[d(0)].onInit(),
                        n[d(1)].onInit(),
                        f = (async () => i.e(6476).then(i.bind(i, 14854)))(),
                        v = await f,
                        n[d(1)].onComplete(),
                        (e || t) && (v.default ? v.default.setSdkConfig((0,
                        H.A)({}, e ? ((p = {}).region = e,
                        p) : {}, t ? ((c = {}).env = t,
                        c) : {})) : v.setSdkConfig((0,
                        H.A)({}, e ? ((l = {}).region = e,
                        l) : {}, t ? ((s = {}).env = t,
                        s) : {}))),
                        g = v.default ? v.default.initSdk(m.Dfp) : v.initSdk(m.Dfp),
                        y = me(5e3, ( () => ({
                            timeout: !0
                        }))),
                        _ = me(1e3, ( () => ({
                            timeout: !0
                        }))),
                        n[d(0)].onComplete()
                    } catch (e) {
                        var h, u;
                        x(e),
                        null != (h = (u = n[d(0)]).onFail) && h.call(u),
                        o()
                    }
            }
            function F() {
                var e, t = function(e) {
                    for (var t = "", i = 0; i < e.length; i++)
                        t += e[i].toString(16).padStart(2, "0");
                    return t
                }(function() {
                    for (var e = new Uint8Array(8), t = 0; t < 8; t++)
                        e[t] = Math.floor(256 * Math.random());
                    return e
                }());
                return (e = {})["af-ac-enc-dat"] = t,
                e
            }
            async function O({shouldWaitForDfpInit: e=!1}={}) {
                try {
                    return await f,
                    await Promise.race([g, e ? y : _]),
                    v.default ? v.default.getClientCheckData() : v.getClientCheckData()
                } catch (e) {
                    return x(e),
                    d(e),
                    ""
                }
            }
            function U() {
                return "" + ge
            }
            async function q() {
                try {
                    await f;
                    var e = v.default ? v.default.getDegradedData() : v.getDegradedData();
                    return e && "string" == typeof e ? [...e].some((e => e.charCodeAt(0) > 127)) ? "" : e : ""
                } catch (e) {
                    return x(e),
                    ""
                }
            }
            return ( () => {
                if (j && s && !window.__fu_hook) {
                    window.__fu_hook = !0,
                    l && function() {
                        try {
                            document.addEventListener("keydown", (function(e) {
                                try {
                                    var t, i = performance.now();
                                    if (void 0 !== e.key && null !== e.key)
                                        1 == e.key.length ? t = new Ce(e.key.charCodeAt(0),i) : e.key.length > 1 && (t = new Ce(e.key.charCodeAt(0) << 8 | e.key.charCodeAt(e.key.length - 1),i)),
                                        Te.enqueue(t);
                                    else if (void 0 !== e.keyCode) {
                                        var a = new Ce(e.keyCode,i);
                                        Te.enqueue(a)
                                    }
                                } catch (e) {
                                    return ye(e),
                                    "error"
                                }
                            }
                            )),
                            navigator.maxTouchPoints > 0 ? (document.addEventListener("touchmove", (function(e) {
                                try {
                                    if (void 0 !== e.touches && null !== e.touches) {
                                        var t = void 0;
                                        if (e.touches.length > 0 ? t = e.touches : e.changedTouches.length > 0 && (t = e.changedTouches),
                                        void 0 !== t) {
                                            var i = performance.now()
                                              , a = new He(t[0].clientX + 1e4,t[0].clientY,i);
                                            Ae.enqueue(a)
                                        }
                                    }
                                } catch (e) {
                                    return ye(e),
                                    "error"
                                }
                            }
                            )),
                            document.addEventListener("touchend", (function(e) {
                                try {
                                    if (void 0 !== e.touches && null !== e.touches) {
                                        var t = void 0;
                                        if (e.touches.length > 0 ? t = e.touches : e.changedTouches.length > 0 && (t = e.changedTouches),
                                        void 0 !== t) {
                                            var i = performance.now()
                                              , a = new He(t[0].clientX + 1e4,t[0].clientY,i);
                                            Ae.enqueue(a)
                                        }
                                    }
                                } catch (e) {
                                    return ye(e),
                                    "error"
                                }
                            }
                            ))) : (document.addEventListener("mousemove", (function(e) {
                                try {
                                    var t = performance.now()
                                      , i = new He(e.clientX,e.clientY,t);
                                    Ae.enqueue(i)
                                } catch (e) {
                                    return ye(e),
                                    "error"
                                }
                            }
                            )),
                            document.addEventListener("click", (function(e) {
                                try {
                                    var t = performance.now()
                                      , i = new He(e.clientX + 1e4,e.clientY,t);
                                    Ae.enqueue(i)
                                } catch (e) {
                                    return ye(e),
                                    "error"
                                }
                            }
                            )))
                        } catch (e) {
                            ye(e)
                        }
                        if ("function" == typeof window.IDBObjectStore) {
                            var e = IDBObjectStore.prototype.add;
                            try {
                                IDBObjectStore.prototype.add = function(t, i) {
                                    try {
                                        if ("object" == typeof t && null !== t && null !== t.data && void 0 !== t.data) {
                                            var a = JSON.parse(t.data);
                                            if (null !== a.operation && void 0 !== a.operation) {
                                                var r = -1 !== xe[a.operation] ? xe[a.operation] : 0
                                                  , o = a.event_timestamp - (void 0 !== performance.timeOrigin ? performance.timeOrigin : performance.timing.navigationStart)
                                                  , n = a.civ_id.replaceAll("-", "")
                                                  , s = a.page_type.slice(0, 5)
                                                  , l = a.page_section.slice(0, 5)
                                                  , c = 0;
                                                "" != a.target_type && null !== a.target_type && (c = De[a.target_type] ? De[a.target_type] : 9);
                                                var p = "";
                                                null !== a.last_civ_id && void 0 !== a.last_civ_id && (p = a.last_civ_id.replaceAll("-", ""));
                                                var d = 0
                                                  , h = 0;
                                                if (null !== a.data && void 0 !== a.data) {
                                                    var u = a.data;
                                                    if (null !== u.viewed_objects && void 0 !== u.viewed_objects && u.viewed_objects.length > 0) {
                                                        var v = u.viewed_objects[0];
                                                        null != v && (null !== v.ctx_itemid && void 0 !== v.ctx_itemid && (d = v.ctx_itemid),
                                                        null !== v.itemid && void 0 !== v.itemid && (d = v.itemid),
                                                        null !== v.item_id && void 0 !== v.item_id && (d = v.item_id),
                                                        null !== v.ctx_shopid && void 0 !== v.ctx_shopid && (h = v.ctx_shopid),
                                                        null !== v.shopid && void 0 !== v.shopid && (h = v.shopid),
                                                        null !== v.shop_id && void 0 !== v.shop_id && (h = v.shop_id))
                                                    }
                                                }
                                                var f = Math.floor(d / Math.pow(10, 9))
                                                  , m = d % Math.pow(10, 9)
                                                  , g = Math.floor(h / Math.pow(10, 9))
                                                  , y = h % Math.pow(10, 9);
                                                3 == r ? Ee.enqueue(new Se(r,o,n,s,l,c,p,f,m,g,y)) : Pe.enqueue(new Se(r,o,n,s,l,c,p,f,m,g,y))
                                            }
                                        }
                                    } catch (e) {
                                        ye(e)
                                    }
                                    return e.call(this, t, i)
                                }
                            } catch (e) {
                                ye(e)
                            }
                        }
                    }();
                    var {fetch: i} = window;
                    window.fetch = async (...s) => {
                        var d, u, v, f, m, g, [y,_] = s;
                        try {
                            var R, S, k, I = (k = window.Request && y instanceof Request ? new URL(y.url,window.location.origin) : new URL(y.toString(),window.location.origin)).origin === window.location.origin, O = k.pathname.replace(/\/+$/, ""), B = null == (R = _) || null == (R = R.method) ? void 0 : R.toLowerCase(), z = performance.now(), j = !1, V = !1;
                            if (!j && null != (S = _) && S.anticrawler && (j = !0),
                            l && (L.some((e => O === e)) || M.some((e => O === e)) || N.some((e => O === e))) && (V = !0),
                            !j && p && Array.isArray(p) && p.length > 0 && (j = Boolean(be(p, O, I, B))),
                            j) {
                                var W;
                                n.hookFUFetch.onInit(),
                                D({});
                                var X = U()
                                  , Q = await q()
                                  , J = F();
                                if (window.Request && y instanceof Request) {
                                    if (y.headers.set(A, X),
                                    y.headers.set(P, Q),
                                    Object.entries(J).forEach(( ([e,t]) => {
                                        y.headers.set(e, t)
                                    }
                                    )),
                                    V) {
                                        var Y = Ie();
                                        y.headers.set(E, Y)
                                    }
                                } else if (_)
                                    if (Array.isArray(_.headers)) {
                                        if (_.headers.push([A, X]),
                                        _.headers.push([P, Q]),
                                        Object.entries(J).forEach(( ([e,t]) => {
                                            var i;
                                            (null == (i = _) ? void 0 : i.headers).push([e, t])
                                        }
                                        )),
                                        V) {
                                            var G = Ie();
                                            _.headers.push([E, G])
                                        }
                                    } else
                                        _.headers = (0,
                                        H.A)({}, _.headers, J, {
                                            [P]: Q,
                                            [A]: X
                                        }, V ? ((g = {})[E] = Ie(),
                                        g) : {});
                                else
                                    (m = {}).headers = (0,
                                    H.A)({}, J, {
                                        [P]: Q,
                                        [A]: X
                                    }, V ? ((f = {})[E] = Ie(),
                                    f) : {}),
                                    _ = m;
                                (a === w.PC || a === w.RW) && (!window.__SFUC && (window.__SFUC = 0),
                                window.__SFUC++);
                                var K = performance.now()
                                  , $ = Math.floor(K - z);
                                (null == (W = _) || !W.anticrawler) && n.hookFUFetch.onComplete($)
                            }
                            var Z = await i(y, _);
                            if (!Z || !Z.ok)
                                return Z;
                            try {
                                var {status: ee} = Z;
                                if (j && ee >= 200 && ee < 300 && 204 !== ee) {
                                    var te = Z.headers.get("content-type");
                                    if (te && te.includes("application/json")) {
                                        var ie, ae = await Z.clone().json();
                                        if (!ae || "object" != typeof ae || Array.isArray(ae))
                                            return Z;
                                        var re = null != (ie = _) && ie.anticrawler ? _.anticrawler : null == o ? void 0 : o[O];
                                        _e((u = fe,
                                        (v = {}).antiCrawlerConfig = (0,
                                        H.A)({
                                            redirectType: a == w.PC || a == w.RW ? h.Internal : h.External,
                                            verificationPageHost: a == w.PC || a == w.RW ? location.origin : le((d = {},
                                            d.env = t || "live",
                                            d.locale = e || "SG",
                                            d))
                                        }, re, {
                                            shouldReplaceHistory: !1 !== (null == re ? void 0 : re.shouldReplaceHistory) && "false" !== (null == re ? void 0 : re.shouldReplaceHistory)
                                        }),
                                        v.response = ae,
                                        v.pathname = O,
                                        v.platform = a,
                                        v.source = r,
                                        v.setRedirecting = C,
                                        v.getRedirecting = T,
                                        v[u(2)] = e => ue((0,
                                        H.A)({}, e, {
                                            history: b
                                        })),
                                        v[u(3)] = e => ve((0,
                                        H.A)({}, e, {
                                            history: b
                                        })),
                                        v[u(4)] = e => he((0,
                                        H.A)({}, e, {
                                            history: b
                                        })),
                                        v.enablePopup = c,
                                        v))
                                    }
                                }
                                return Z
                            } catch (e) {
                                return x(e),
                                Z
                            }
                        } catch (e) {
                            return x(e),
                            i(...s)
                        }
                    }
                    ;
                    var d = XMLHttpRequest.prototype.open
                      , u = XMLHttpRequest.prototype.setRequestHeader
                      , v = XMLHttpRequest.prototype.send;
                    XMLHttpRequest.prototype.open = function(...e) {
                        this.openargs = e,
                        this.headers = {},
                        d.apply(this, e)
                    }
                    ,
                    XMLHttpRequest.prototype.setRequestHeader = function(e, t) {
                        this.headers[e] = t,
                        u.call(this, e, t)
                    }
                    ,
                    XMLHttpRequest.prototype.send = async function(i) {
                        try {
                            var s = ""
                              , d = !1
                              , u = !1;
                            if (this.openargs) {
                                var f = new URL(this.openargs[1].toString(),window.location.origin)
                                  , m = f.origin === window.location.origin;
                                s = f.pathname.replace(/\/+$/, "");
                                var g = this.openargs[0].toLowerCase()
                                  , y = performance.now();
                                if (p && Array.isArray(p) && p.length > 0 && (d = Boolean(be(p, s, m, g))),
                                l && (L.some((e => s === e)) || M.some((e => s === e)) || N.some((e => s === e))) && (u = !0),
                                d) {
                                    n.hookFUXhr.onInit(),
                                    D({});
                                    var _ = U();
                                    !this.headers[A] && this.setRequestHeader(A, _);
                                    var R = F();
                                    for (var S in R)
                                        !this.headers[S] && this.setRequestHeader(S, R[S]);
                                    var k = await q();
                                    if (!this.headers[P] && this.setRequestHeader(P, k),
                                    u) {
                                        var I = Ie();
                                        !this.headers[E] && this.setRequestHeader(E, I)
                                    }
                                    (a === w.PC || a === w.RW) && (!window.__SFUC && (window.__SFUC = 0),
                                    window.__SFUC++);
                                    var O = performance.now()
                                      , B = Math.floor(O - y);
                                    n.hookFUXhr.onComplete(B)
                                }
                            }
                            var z = this.onreadystatechange;
                            this.onreadystatechange = (...i) => {
                                if (this.readyState === XMLHttpRequest.DONE)
                                    try {
                                        if (d && this.status >= 200 && this.status < 300 && 204 !== this.status) {
                                            var n = this.getResponseHeader("Content-Type");
                                            if (n && !n.includes("application/json"))
                                                return;
                                            var l = this.responseType;
                                            if ("blob" == l || "arraybuffer" == l || "document" == l)
                                                return;
                                            var p = l && "text" !== l && this.response ? this.response : JSON.parse(this.responseText)
                                              , u = null == o ? void 0 : o[s];
                                            _e((f = fe,
                                            (m = {}).antiCrawlerConfig = (0,
                                            H.A)({
                                                redirectType: a == w.PC || a == w.RW ? h.Internal : h.External,
                                                verificationPageHost: a == w.PC || a == w.RW ? location.origin : le((v = {},
                                                v.env = t || "live",
                                                v.locale = e || "SG",
                                                v))
                                            }, u, {
                                                shouldReplaceHistory: "false" !== (null == u ? void 0 : u.shouldReplaceHistory)
                                            }),
                                            m.response = p,
                                            m.pathname = s,
                                            m.source = r,
                                            m.platform = a,
                                            m.setRedirecting = C,
                                            m.getRedirecting = T,
                                            m[f(2)] = e => ue((0,
                                            H.A)({}, e, {
                                                history: b
                                            })),
                                            m[f(3)] = e => ve((0,
                                            H.A)({}, e, {
                                                history: b
                                            })),
                                            m[f(4)] = e => he((0,
                                            H.A)({}, e, {
                                                history: b
                                            })),
                                            m.enablePopup = c,
                                            m))
                                        }
                                    } catch (e) {
                                        x(e)
                                    }
                                var v, f, m;
                                null == z || z.apply(this, i)
                            }
                        } catch (e) {
                            x(e)
                        } finally {
                            v.call(this, i)
                        }
                    }
                }
            }
            )(),
            (u = {}).i = D,
            u.o = U,
            u.p = q,
            u.l = async function() {
                try {
                    await f;
                    var e = v.default ? await v.default.getLongToken() : await v.getLongToken();
                    return e && "string" == typeof e ? e : ""
                } catch (e) {
                    return x(e),
                    ""
                }
            }
            ,
            u.u = F,
            u.h = e => he((0,
            H.A)({}, e, {
                history: b
            })),
            u.v = e => ue((0,
            H.A)({}, e, {
                history: b
            })),
            u.m = e => ve((0,
            H.A)({}, e, {
                history: b
            })),
            u._ = O,
            u.R = async function({shouldWaitForDfpInit: e=!1, useHeader: t, customDfp: i}) {
                try {
                    await f,
                    await Promise.race([g, e ? y : _]);
                    var a = "string" == typeof i ? i : await O((n = {},
                    n[fe(5)] = e,
                    n));
                    return t ? a.length >= 300 ? {} : ((o = {})[k] = a,
                    o) : ((r = {})[S] = a,
                    r)
                } catch (e) {
                    return x(e),
                    d(e),
                    {}
                }
                var r, o, n
            }
            ,
            u.getRedirecting = T,
            u.setRedirecting = C,
            u.ACConfig = o,
            u
        }
        var Ue, Le, Me, Ne, qe, Be, ze, je, Ve, We, Xe, Qe, Je, Ye, Ge, Ke, $e, Ze, et, tt, it, at, rt, ot, nt, st, lt, ct, pt, dt, ht, ut, vt, ft, mt, gt, yt, _t, wt = ((Le = {})["/webapi/v1/shop_page/replay/add"] = {
            shouldReplaceHistory: "false"
        },
        Le["/webapi/v1/host_config/permission"] = {
            shouldReplaceHistory: "false"
        },
        Le["/webapi/v1/item/my_shop"] = {
            shouldReplaceHistory: "false"
        },
        Le["/webapi/v1/item/my_likes"] = {
            shouldReplaceHistory: "false"
        },
        Le["/webapi/v1/item/my_recent"] = {
            shouldReplaceHistory: "false"
        },
        Le["/webapi/v1/item/parse_url"] = {
            shouldReplaceHistory: "false"
        },
        Le), bt = ((Ue = {})["/api/v4/microsite/get_items"] = {
            shouldReplaceHistory: "false"
        },
        Ue["/api/v4/market_coin/get_product_feeds"] = {
            shouldReplaceHistory: "false"
        },
        Ue["/api/v2/add_on_deal/info"] = {
            shouldReplaceHistory: "false"
        },
        Ue["/api/v2/add_on_deal/get_main_item_info"] = {
            shouldReplaceHistory: "false"
        },
        Ue["/api/v2/add_on_deal/get_add_on_deal_list"] = {
            shouldReplaceHistory: "false"
        },
        Ue["/api/v2/add_on_deal/get_sub_item_info"] = {
            shouldReplaceHistory: "false"
        },
        Ue["/api/v4/flash_sale/flash_sale_get_items"] = {
            shouldReplaceHistory: "false"
        },
        Ue["/api/v4/flash_sale/spm/get_all_itemids"] = {
            shouldReplaceHistory: "false"
        },
        Ue["/api/v4/pdp/other_quantities/get"] = {
            shouldReplaceHistory: "false"
        },
        Ue["/api/v4/product/get_shop_info"] = {
            shouldReplaceHistory: "false"
        },
        Ue["/api/v4/search/search_prefills"] = {
            shouldReplaceHistory: "false"
        },
        Ue["/api/v4/search/search_hint"] = {
            shouldReplaceHistory: "false"
        },
        Ue["/api/v4/search/trending_search"] = {
            shouldReplaceHistory: "false"
        },
        Ue);
        _t = {
            policyurl: /api\/v3\/affiliateplatform\/.*/,
            match: "regexp"
        },
        yt = {
            policyurl: /api\/pas\/v1\/setup_helper\/.*/,
            match: "regexp"
        },
        gt = {
            policyurl: "api/selleradmin/v1/product",
            match: "contain"
        },
        mt = {
            policyurl: "api/marketing/v4/review_prize/get_products",
            match: "contain"
        },
        ft = {
            policyurl: "api/marketing/v4/discount/global/get_items",
            match: "contain"
        },
        vt = {
            policyurl: "api/v3/settings/reply_shop_rating",
            match: "contain"
        },
        ut = {
            policyurl: "api/marketing/v3/public/product_selector",
            match: "contain"
        },
        ht = {
            policyurl: /webchat\/api\/v1\.2\/mini\/order\/.*/,
            match: "regexp"
        },
        dt = {
            policyurl: /webchat\/api\/v1\.2\/order\/.*\/rate_buyer/,
            match: "regexp"
        },
        pt = {
            policyurl: /webchat\/api\/v1\.2\/order\/.*\/cancel/,
            match: "regexp"
        },
        ct = {
            policyurl: "webchat/api/v1.2/mini/orders/orders_by_buyer",
            match: "contain"
        },
        lt = {
            policyurl: "webchat/api/v1.2/orders/orders_by_buyer",
            match: "contain"
        },
        st = {
            policyurl: "api/mkt/cmt/bidding/bidding_list",
            match: "contain"
        },
        nt = {
            policyurl: "api/mkt/cmt/nominated/nominated_entity_list",
            match: "contain"
        },
        ot = {
            policyurl: "api/mkt/cmt/preview/preview_list",
            match: "contain"
        },
        rt = {
            policyurl: "api/mkt/cmt/product/online/selector/verify",
            match: "contain"
        },
        at = {
            policyurl: "api/mkt/cmt/product/online/selector/verify_products_select_for_bid",
            match: "contain"
        },
        it = {
            policyurl: "api/crm/v1/product_selector",
            match: "contain"
        },
        tt = {
            policyurl: "api/marketing/v4/graphql/query",
            match: "contain"
        },
        et = {
            policyurl: "api/marketing/v4/public/product_selector",
            match: "contain"
        },
        Ze = {
            policyurl: "api/marketing/v4/shop_flash_sale/batch_items/get",
            match: "contain"
        },
        $e = {
            policyurl: "api/n/decoration/public/get_flash_sale_info",
            match: "contain"
        },
        Ke = {
            policyurl: "api/n/decoration/public/get_mega_campaign_items",
            match: "contain"
        },
        Ge = {
            policyurl: "api/marketing/v4/review_prize/get_recommend_products",
            match: "contain"
        },
        Ye = {
            policyurl: "api/marketing/v4/review_prize/get_svs_item_info",
            match: "contain"
        },
        Je = {
            policyurl: "api/marketing/v4/review_prize/item/list",
            match: "contain"
        },
        Qe = {
            policyurl: "api/marketing/v4/review_prize/product_selector",
            match: "contain"
        },
        Xe = {
            policyurl: "api/marketing/v3/voucher/product_selector",
            match: "contain"
        },
        We = {
            policyurl: "api/v1/affiliateplatform/shop/itemsv2",
            match: "contain"
        },
        Ve = {
            policyurl: "api/v3/affiliateplatform/gql",
            match: "contain"
        },
        je = {
            policyurl: "api/tool/mass_product/get_unpublished_product_list",
            match: "contain"
        },
        ze = {
            policyurl: "api/v2/message",
            match: "contain",
            allowCors: !0
        },
        Be = {
            policyurl: "api/v2/solution",
            match: "contain",
            allowCors: !0
        },
        qe = {
            policyurl: "api/v2/user_message_history",
            match: "contain",
            allowCors: !0
        },
        Ne = {
            policyurl: "api/v2/init_session",
            match: "contain",
            allowCors: !0
        },
        Me = {
            policyurl: "api/v2/order_list",
            match: "contain",
            allowCors: !0
        };
        function Rt({locale: e, env: t, platform: a, source: r, enableGlobalHook: o, enableTMS: n, baseUrl: s="", shouldAppendHost: l, allowShortDfp: c=!0, headers: p, enablePopup: d=!1, handleMaintenanceModeResponse: h, policies: u, performanceTrackings: v=I, onError: f= () => {}
        , onJsonResponse: m= () => {}
        }) {
            var g, y, _, b, R, C = (_ = {},
            (y = a) == w.PC || y == w.RW ? _ = bt : y === w.SHOPEELIVE && (_ = wt),
            _), P = Oe(((g = {}).locale = e,
            g.platform = a,
            g.source = r,
            g.policies = u,
            g.env = t,
            g.ACConfig = C,
            g.performanceTrackings = v,
            g.enableTMS = n,
            g.enableGlobalHook = o,
            g.enablePopup = d,
            g.onError = f,
            g)), {i: E, _: T, R: x, v: D, m: F, h: O, o: U, p: L, l: M} = P;
            async function N(e, t, a) {
                try {
                    var r = !j && !/^(https?:)?\/\//.test(e) || l ? "" + s + e : e
                      , o = null != t && t.isFormData ? a || new FormData : JSON.stringify(a)
                      , n = null != t && t.isFormData ? void 0 : {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }
                      , c = await (window.global = window,
                    i.g && i.g.fetch ? i.g.fetch : fetch)(r, (0,
                    H.A)({
                        method: t && t.method ? t.method : "GET",
                        headers: (0,
                        H.A)({}, n, null != t && t.overideCreateSFUHeaders ? null == t ? void 0 : t.headers : (0,
                        H.A)({}, p, null == t ? void 0 : t.headers))
                    }, t && !1 === t.withCredentials ? {} : (_ = {
                        credentials: "include"
                    },
                    _), {
                        body: o,
                        signal: null == t ? void 0 : t.signal,
                        anticrawler: null == t ? void 0 : t.antiCrawlerConfig
                    }))
                      , {status: d} = c;
                    if (d >= 200 && d < 300) {
                        var u = c.headers.get("content-type");
                        if (u && !u.includes("application/json"))
                            return c;
                        var v = await c.json();
                        return m(v, c),
                        "object" != typeof v || Array.isArray(v) ? v : (0,
                        H.A)({}, v, {
                            __raw: c
                        })
                    }
                    return 408 === d ? ((y = {}).error = q.REQUEST_TIMEOUT,
                    y.error_msg = d.toString(),
                    y.__raw = c,
                    y) : (h && h(c),
                    (g = {}).error = q.SERVER_ERROR,
                    g.error_msg = null == d ? void 0 : d.toString(),
                    g.__raw = c,
                    g)
                } catch (e) {
                    return (f = {}).error = q.SERVER_ERROR,
                    f.error_msg = e,
                    f
                }
                var f, g, y, _
            }
            async function B(e, t, i) {
                var a = fe
                  , {antiCrawler: r, apiProtection: o, deviceFingerPrint: n} = (null == i ? void 0 : i[a(6)]) || {};
                n && E({});
                var s, l, c, p, d = n ? await x((c = fe,
                p = {},
                p.useHeader = null == n ? void 0 : n.useHeader,
                p[c(5)] = n[c(5)] || !1,
                p.customDfp = n.customDfp,
                p)) : {}, h = null != n && n.dataFormatter ? n.dataFormatter(null != n && n.useHeader ? d[k] || "" : d[S] || "") : d, u = null != i && i.isFormData || null != n && n.useHeader || (l = h) && 0 === Object.keys(l).length && Object.getPrototypeOf(l) === Object.prototype ? t : (0,
                H.A)({}, t, h), v = r ? P.u() : {};
                return await N(e, (s = {
                    method: "POST"
                },
                s.headers = (0,
                H.A)({}, null == i ? void 0 : i.headers, v, null != n && n.useHeader ? h : {}, {
                    [A]: U()
                }),
                s.isFormData = null == i ? void 0 : i.isFormData,
                s.overideCreateSFUHeaders = null == i ? void 0 : i.overideCreateSFUHeaders,
                s.withCredentials = null == o ? void 0 : o.withCredentials,
                s.signal = null == i ? void 0 : i.signal,
                s.antiCrawlerConfig = r,
                s), u)
            }
            return b = fe,
            (R = {}).http = N,
            R.get = async function(e, t) {
                var i = fe
                  , {antiCrawler: a, apiProtection: r, deviceFingerPrint: o} = (null == t ? void 0 : t[i(6)]) || {};
                o && E({});
                var n, s, l, c = await (o ? x((s = fe,
                l = {
                    useHeader: !0
                },
                l[s(5)] = o[s(5)] || !1,
                l.customDfp = o.customDfp,
                l)) : Promise.resolve({})), p = null != o && o.dataFormatter ? o.dataFormatter(c["sz-token"] || "") : c, d = a ? P.u() : {};
                return await N(e, (n = {
                    method: "GET"
                },
                n.headers = (0,
                H.A)({}, null == t ? void 0 : t.headers, d, p, {
                    [A]: U()
                }),
                n.overideCreateSFUHeaders = null == t ? void 0 : t.overideCreateSFUHeaders,
                n.withCredentials = null == r ? void 0 : r.withCredentials,
                n.signal = null == t ? void 0 : t.signal,
                n.antiCrawlerConfig = a,
                n))
            }
            ,
            R.post = B,
            R.postForm = async function(e, t, i) {
                var a = new FormData;
                for (var r in t)
                    a.append(r, t[r]);
                return B(e, a, (0,
                H.A)({}, i, {
                    isFormData: !0
                }))
            }
            ,
            R[b(0)] = function(e) {
                var t;
                j && P.i(((t = {}).history = null == e ? void 0 : e.history,
                t))
            }
            ,
            R[b(4)] = O,
            R[b(2)] = D,
            R[b(3)] = F,
            R[b(7)] = T,
            R.getLongToken = M,
            R
        }
    }
}]);
//# sourceMappingURL=https://sourcemap.webfe.shopeemobile.com/pcmall-static/_/sfu-stable.c9421dc694385c15.js.map
