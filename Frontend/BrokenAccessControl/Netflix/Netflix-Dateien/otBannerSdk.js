/**
 * onetrust-banner-sdk
 * v202301.1.0
 * by OneTrust LLC
 * Copyright 2023
 */
!function () {
    "use strict";
    var o = function (e, t) {
        return (o = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
        })(e, t)
    };
    var k, e, t, n, r = function () {
        return (r = Object.assign || function (e) {
            for (var t, o = 1, n = arguments.length; o < n; o++) for (var r in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }).apply(this, arguments)
    };

    function p(i, s, a, l) {
        return new (a = a || Promise)(function (e, t) {
            function o(e) {
                try {
                    r(l.next(e))
                } catch (e) {
                    t(e)
                }
            }

            function n(e) {
                try {
                    r(l.throw(e))
                } catch (e) {
                    t(e)
                }
            }

            function r(t) {
                t.done ? e(t.value) : new a(function (e) {
                    e(t.value)
                }).then(o, n)
            }

            r((l = l.apply(i, s || [])).next())
        })
    }

    function g(o, n) {
        var r, i, s, e, a = {
            label: 0, sent: function () {
                if (1 & s[0]) throw s[1];
                return s[1]
            }, trys: [], ops: []
        };
        return e = {
            next: t(0),
            throw: t(1),
            return: t(2)
        }, "function" == typeof Symbol && (e[Symbol.iterator] = function () {
            return this
        }), e;

        function t(t) {
            return function (e) {
                return function (t) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (r = 1, i && (s = 2 & t[0] ? i.return : t[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, t[1])).done) return s;
                        switch (i = 0, s && (t = [2 & t[0], s.value]), t[0]) {
                            case 0:
                            case 1:
                                s = t;
                                break;
                            case 4:
                                return a.label++, {value: t[1], done: !1};
                            case 5:
                                a.label++, i = t[1], t = [0];
                                continue;
                            case 7:
                                t = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(s = 0 < (s = a.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                    a.label = t[1];
                                    break
                                }
                                if (6 === t[0] && a.label < s[1]) {
                                    a.label = s[1], s = t;
                                    break
                                }
                                if (s && a.label < s[2]) {
                                    a.label = s[2], a.ops.push(t);
                                    break
                                }
                                s[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        t = n.call(o, a)
                    } catch (e) {
                        t = [6, e], i = 0
                    } finally {
                        r = s = 0
                    }
                    if (5 & t[0]) throw t[1];
                    return {value: t[0] ? t[1] : void 0, done: !0}
                }([t, e])
            }
        }
    }

    function b() {
        for (var e = 0, t = 0, o = arguments.length; t < o; t++) e += arguments[t].length;
        var n = Array(e), r = 0;
        for (t = 0; t < o; t++) for (var i = arguments[t], s = 0, a = i.length; s < a; s++, r++) n[r] = i[s];
        return n
    }

    (e = k = k || {})[e.ACTIVE = 0] = "ACTIVE", e[e.ALWAYS_ACTIVE = 1] = "ALWAYS_ACTIVE", e[e.EXPIRED = 2] = "EXPIRED", e[e.NO_CONSENT = 3] = "NO_CONSENT", e[e.OPT_OUT = 4] = "OPT_OUT", e[e.PENDING = 5] = "PENDING", e[e.WITHDRAWN = 6] = "WITHDRAWN", (n = t = t || {}).ping = "ping", n.addEventListener = "addEventListener", n.removeEventListener = "removeEventListener", n.hasSection = "hasSection", n.getSection = "getSection", n.getField = "getField", n.getGPPData = "getGPPData";
    var i = setTimeout;

    function l(e) {
        return Boolean(e && void 0 !== e.length)
    }

    function s() {
    }

    function a(e) {
        if (!(this instanceof a)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], y(e, this)
    }

    function c(o, n) {
        for (; 3 === o._state;) o = o._value;
        0 !== o._state ? (o._handled = !0, a._immediateFn(function () {
            var e = 1 === o._state ? n.onFulfilled : n.onRejected;
            if (null !== e) {
                var t;
                try {
                    t = e(o._value)
                } catch (e) {
                    return void u(n.promise, e)
                }
                d(n.promise, t)
            } else (1 === o._state ? d : u)(n.promise, o._value)
        })) : o._deferreds.push(n)
    }

    function d(t, e) {
        try {
            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var o = e.then;
                if (e instanceof a) return t._state = 3, t._value = e, void h(t);
                if ("function" == typeof o) return void y((n = o, r = e, function () {
                    n.apply(r, arguments)
                }), t)
            }
            t._state = 1, t._value = e, h(t)
        } catch (e) {
            u(t, e)
        }
        var n, r
    }

    function u(e, t) {
        e._state = 2, e._value = t, h(e)
    }

    function h(e) {
        2 === e._state && 0 === e._deferreds.length && a._immediateFn(function () {
            e._handled || a._unhandledRejectionFn(e._value)
        });
        for (var t = 0, o = e._deferreds.length; t < o; t++) c(e, e._deferreds[t]);
        e._deferreds = null
    }

    function C(e, t, o) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = o
    }

    function y(e, t) {
        var o = !1;
        try {
            e(function (e) {
                o || (o = !0, d(t, e))
            }, function (e) {
                o || (o = !0, u(t, e))
            })
        } catch (e) {
            if (o) return;
            o = !0, u(t, e)
        }
    }

    function f() {
    }

    a.prototype.catch = function (e) {
        return this.then(null, e)
    }, a.prototype.then = function (e, t) {
        var o = new this.constructor(s);
        return c(this, new C(e, t, o)), o
    }, a.prototype.finally = function (t) {
        var o = this.constructor;
        return this.then(function (e) {
            return o.resolve(t()).then(function () {
                return e
            })
        }, function (e) {
            return o.resolve(t()).then(function () {
                return o.reject(e)
            })
        })
    }, a.all = function (t) {
        return new a(function (n, r) {
            if (!l(t)) return r(new TypeError("Promise.all accepts an array"));
            var i = Array.prototype.slice.call(t);
            if (0 === i.length) return n([]);
            var s = i.length;

            function a(t, e) {
                try {
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var o = e.then;
                        if ("function" == typeof o) return void o.call(e, function (e) {
                            a(t, e)
                        }, r)
                    }
                    i[t] = e, 0 == --s && n(i)
                } catch (e) {
                    r(e)
                }
            }

            for (var e = 0; e < i.length; e++) a(e, i[e])
        })
    }, a.resolve = function (t) {
        return t && "object" == typeof t && t.constructor === a ? t : new a(function (e) {
            e(t)
        })
    }, a.reject = function (o) {
        return new a(function (e, t) {
            t(o)
        })
    }, a.race = function (r) {
        return new a(function (e, t) {
            if (!l(r)) return t(new TypeError("Promise.race accepts an array"));
            for (var o = 0, n = r.length; o < n; o++) a.resolve(r[o]).then(e, t)
        })
    }, a._immediateFn = "function" == typeof setImmediate ? function (e) {
        setImmediate(e)
    } : function (e) {
        i(e, 0)
    }, a._unhandledRejectionFn = function (e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    };
    var v, m, S, P, T, A, L, I, _, E, V, B, w, x, O, G, N, D, J, H, F, R, q, M, U, j, z, K, W, Y, X, Q, $, Z, ee, te,
        oe, ne, re, ie, se, ae, le, ce, de, ue, pe, he, ge, Ce, ye, fe, ve, ke, me, be, Se, Pe, Te, Ae, Le, Ie, _e, Ee,
        Ve, Be = new (f.prototype.initPolyfill = function () {
            this.initArrayIncludesPolyfill(), this.initObjectAssignPolyfill(), this.initArrayFillPolyfill(), this.initClosestPolyfill(), this.initIncludesPolyfill(), this.initEndsWithPoly(), this.initCustomEventPolyfill(), this.promisesPolyfil()
        }, f.prototype.initArrayIncludesPolyfill = function () {
            Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                value: function (e) {
                    for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
                    if (null == this) throw new TypeError("Array.prototype.includes called on null or undefined");
                    var n = Object(this), r = parseInt(n.length, 10) || 0;
                    if (0 === r) return !1;
                    var i, s, a = t[1] || 0;
                    for (0 <= a ? i = a : (i = r + a) < 0 && (i = 0); i < r;) {
                        if (e === (s = n[i]) || e != e && s != s) return !0;
                        i++
                    }
                    return !1
                }, writable: !0, configurable: !0
            })
        }, f.prototype.initEndsWithPoly = function () {
            String.prototype.endsWith || Object.defineProperty(String.prototype, "endsWith", {
                value: function (e, t) {
                    return (void 0 === t || t > this.length) && (t = this.length), this.substring(t - e.length, t) === e
                }, writable: !0, configurable: !0
            })
        }, f.prototype.initClosestPolyfill = function () {
            Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || Object.defineProperty(Element.prototype, "closest", {
                value: function (e) {
                    var t = this;
                    do {
                        if (t.matches(e)) return t;
                        t = t.parentElement || t.parentNode
                    } while (null !== t && 1 === t.nodeType);
                    return null
                }, writable: !0, configurable: !0
            })
        }, f.prototype.initIncludesPolyfill = function () {
            String.prototype.includes || Object.defineProperty(String.prototype, "includes", {
                value: function (e, t) {
                    return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
                }, writable: !0, configurable: !0
            })
        }, f.prototype.initObjectAssignPolyfill = function () {
            "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
                value: function (e, t) {
                    if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                    for (var o = Object(e), n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        if (null != r) for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (o[i] = r[i])
                    }
                    return o
                }, writable: !0, configurable: !0
            })
        }, f.prototype.initArrayFillPolyfill = function () {
            Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
                value: function (e) {
                    if (null == this) throw new TypeError("this is null or not defined");
                    for (var t = Object(this), o = t.length >>> 0, n = arguments[1] >> 0, r = n < 0 ? Math.max(o + n, 0) : Math.min(n, o), i = arguments[2], s = void 0 === i ? o : i >> 0, a = s < 0 ? Math.max(o + s, 0) : Math.min(s, o); r < a;) t[r] = e, r++;
                    return t
                }
            })
        }, f.prototype.initCustomEventPolyfill = function () {
            if ("function" == typeof window.CustomEvent) return !1;

            function e(e, t) {
                t = t || {bubbles: !1, cancelable: !1, detail: void 0};
                var o = document.createEvent("CustomEvent");
                return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o
            }

            e.prototype = window.Event.prototype, window.CustomEvent = e
        }, f.prototype.insertViewPortTag = function () {
            var e = document.querySelector('meta[name="viewport"]'), t = document.createElement("meta");
            t.name = "viewport", t.content = "width=device-width, initial-scale=1", e || document.head.appendChild(t)
        }, f.prototype.promisesPolyfil = function () {
            "undefined" == typeof Promise && (window.Promise = a)
        }, f);
    (m = v = v || {})[m.Unknown = 0] = "Unknown", m[m.BannerCloseButton = 1] = "BannerCloseButton", m[m.ConfirmChoiceButton = 2] = "ConfirmChoiceButton", m[m.AcceptAll = 3] = "AcceptAll", m[m.RejectAll = 4] = "RejectAll", m[m.BannerSaveSettings = 5] = "BannerSaveSettings", m[m.ContinueWithoutAcceptingButton = 6] = "ContinueWithoutAcceptingButton", (P = S = S || {})[P.Banner = 1] = "Banner", P[P.PC = 2] = "PC", P[P.API = 3] = "API", (A = T = T || {}).AcceptAll = "AcceptAll", A.RejectAll = "RejectAll", A.UpdateConsent = "UpdateConsent", (I = L = L || {})[I.Purpose = 1] = "Purpose", I[I.SpecialFeature = 2] = "SpecialFeature", (E = _ = _ || {}).Legal = "legal", E.UserFriendly = "user_friendly", (B = V = V || {}).Top = "top", B.Bottom = "bottom", (x = w = w || {})[x.Banner = 0] = "Banner", x[x.PrefCenterHome = 1] = "PrefCenterHome", x[x.VendorList = 2] = "VendorList", x[x.CookieList = 3] = "CookieList", (G = O = O || {})[G.RightArrow = 39] = "RightArrow", G[G.LeftArrow = 37] = "LeftArrow", (D = N = N || {}).AfterTitle = "AfterTitle", D.AfterDescription = "AfterDescription", D.AfterDPD = "AfterDPD", (H = J = J || {}).PlusMinus = "Plusminus", H.Caret = "Caret", H.NoAccordion = "NoAccordion", (R = F = F || {}).Consent = "Consent", R.LI = "LI", R.AddtlConsent = "AddtlConsent", (M = q = q || {}).Iab1Pub = "eupubconsent", M.Iab2Pub = "eupubconsent-v2", M.Iab1Eu = "euconsent", M.Iab2Eu = "euconsent-v2", (j = U = U || {})[j.Disabled = 0] = "Disabled", j[j.Consent = 1] = "Consent", j[j.LegInt = 2] = "LegInt", (K = z = z || {})[K["Banner - Allow All"] = 1] = "Banner - Allow All", K[K["Banner - Reject All"] = 2] = "Banner - Reject All", K[K["Banner - Close"] = 3] = "Banner - Close", K[K["Preference Center - Allow All"] = 4] = "Preference Center - Allow All", K[K["Preference Center - Reject All"] = 5] = "Preference Center - Reject All", K[K["Preference Center - Confirm"] = 6] = "Preference Center - Confirm", (Y = W = W || {}).Active = "1", Y.InActive = "0", (Q = X = X || {}).Host = "Host", Q.GenVendor = "GenVen", (Z = $ = $ || {})[Z.Host = 1] = "Host", Z[Z.GenVen = 2] = "GenVen", Z[Z.HostAndGenVen = 3] = "HostAndGenVen", (te = ee = ee || {})[te.minDays = 1] = "minDays", te[te.maxDays = 30] = "maxDays", te[te.maxYear = 31536e3] = "maxYear", te[te.maxSecToDays = 86400] = "maxSecToDays", (ne = oe = oe || {})[ne.RTL = 0] = "RTL", ne[ne.LTR = 1] = "LTR", (ie = re = re || {})[ie.GoogleVendor = 1] = "GoogleVendor", ie[ie.GeneralVendor = 2] = "GeneralVendor", (ae = se = se || {})[ae.Days = 1] = "Days", ae[ae.Weeks = 7] = "Weeks", ae[ae.Months = 30] = "Months", ae[ae.Years = 365] = "Years", (ce = le = le || {}).Checkbox = "Checkbox", ce.Toggle = "Toggle", (ue = de = de || {}).SlideIn = "Slide_In", ue.FadeIn = "Fade_In", ue.RemoveAnimation = "Remove_Animation", (he = pe = pe || {}).Link = "Link", he.Icon = "Icon", (Ce = ge = ge || {}).consent = "consent", Ce.set = "set", (fe = ye = ye || {}).update = "update", fe.default = "default", fe.ads_data_redaction = "ads_data_redaction", (ke = ve = ve || {}).analytics_storage = "analytics_storage", ke.ad_storage = "ad_storage", ke.functionality_storage = "functionality_storage", ke.personalization_storage = "personalization_storage", ke.security_storage = "security_storage", ke.region = "region", ke.wait_for_update = "wait_for_update", (be = me = me || {}).granted = "granted", be.denied = "denied", (Pe = Se = Se || {})[Pe.HostList = 0] = "HostList", Pe[Pe.IabVendors = 1] = "IabVendors", Pe[Pe.VendorServices = 2] = "VendorServices", (Ae = Te = Te || {}).OBJECT_TO_LI = "ObjectToLI", Ae.LI_ACTIVE_IF_LEGAL_BASIS = "LIActiveIfLegalBasis", (Ie = Le = Le || {}).cookies = "cookies", Ie.vendors = "vendors", (Ee = _e = _e || {}).Name = "OTGPPConsent", Ee[Ee.ChunkSize = 4e3] = "ChunkSize", Ee.ChunkCountParam = "GPPCookiesCount", Ee[Ee.ReconsentFrequencyDate = 365] = "ReconsentFrequencyDate";
    var we = "AwaitingReconsent", xe = "consentId", Oe = "geolocation", Ge = "interactionCount", Ne = "isIABGlobal",
        De = "NotLandingPage", He = "isGpcEnabled", Fe = {
            ADDITIONAL_CONSENT_STRING: "OTAdditionalConsentString",
            ALERT_BOX_CLOSED: "OptanonAlertBoxClosed",
            OPTANON_CONSENT: "OptanonConsent",
            EU_PUB_CONSENT: "eupubconsent-v2",
            EU_CONSENT: "euconsent-v2",
            SELECTED_VARIANT: "OTVariant",
            OT_PREVIEW: "otpreview",
            GPP_CONSENT: _e.Name
        }, Re = "CONFIRMED", qe = "OPT_OUT", Me = "NO_CHOICE", Ue = "NOTGIVEN", je = "NO_OPT_OUT", ze = "always active",
        Ke = "active", We = "inactive landingpage", Je = "inactive", Ye = "dnt", Xe = "LOCAL", Qe = "TEST",
        $e = "LOCAL_TEST", Ze = "data-language", et = "otCookieSettingsButton.json",
        tt = "otCookieSettingsButtonRtl.json", ot = "otCenterRounded", nt = "otFlat", rt = "otFloatingRoundedCorner",
        it = "otFloatingFlat", st = "otFloatingRoundedIcon", at = "otFloatingRounded", lt = "otChoicesBanner",
        ct = "otNoBanner", dt = "otPcCenter", ut = "otPcList", pt = "otPcPanel", ht = "otPcPopup", gt = "otPcTab",
        Ct = "hidebanner",
        yt = ((Ve = {})[se.Days] = "PCenterVendorListLifespanDay", Ve[se.Weeks] = "LfSpnWk", Ve[se.Months] = "PCenterVendorListLifespanMonth", Ve[se.Years] = "LfSpnYr", Ve),
        ft = "DNAC", vt = "Category", kt = "Host", mt = "General Vendor", bt = "VendorService", St = "aria-label",
        Pt = "aria-hidden", Tt = "BRANCH", At = "COOKIE", Lt = "IAB2_FEATURE", It = "IAB2_PURPOSE",
        _t = "IAB2_SPL_FEATURE", Et = "IAB2_SPL_PURPOSE", Vt = "IAB2_STACK",
        Bt = ["IAB2_PURPOSE", "IAB2_STACK", "IAB2_FEATURE", "IAB2_SPL_PURPOSE", "IAB2_SPL_FEATURE"],
        wt = ["COOKIE", "BRANCH", "IAB2_STACK"], xt = ["IAB2_PURPOSE", "IAB2_SPL_FEATURE"],
        Ot = ["IAB2_FEATURE", "IAB2_SPL_PURPOSE"],
        Gt = ["IAB2_PURPOSE", "IAB2_SPL_PURPOSE", "IAB2_FEATURE", "IAB2_SPL_FEATURE"], Nt = new function () {
        };

    function Dt(e, t, o) {
        void 0 === o && (o = !1);

        function n(e) {
            if (!e) return null;
            var t = e.trim();
            return ";" !== t.charAt(t.length - 1) && (t += ";"), t.trim()
        }

        var i = n(e.getAttribute("style")), s = n(t), r = "";
        r = o && i ? function () {
            for (var e = i.split(";").concat(s.split(";")).filter(function (e) {
                return 0 !== e.length
            }), t = "", o = "", n = e.length - 1; 0 <= n; n--) {
                var r = e[n].substring(0, e[n].indexOf(":") + 1).trim();
                t.indexOf(r) < 0 && (t += r, o += e[n] + ";")
            }
            return o
        }() : s, e.setAttribute("style", r)
    }

    function Ht() {
    }

    var Ft, Rt = new (Ht.prototype.convertKeyValueLowerCase = function (e) {
        for (var t in e) e[t.toLowerCase()] ? e[t.toLowerCase()] = e[t].toLowerCase() : (e[t] && (e[t.toLowerCase()] = e[t].toLowerCase()), delete e[t]);
        return e
    }, Ht.prototype.arrToStr = function (e) {
        return e.toString()
    }, Ht.prototype.strToArr = function (e) {
        return e ? e.split(",") : []
    }, Ht.prototype.strToMap = function (e) {
        if (!e) return new Map;
        for (var t = new Map, o = 0, n = this.strToArr(e); o < n.length; o++) {
            var r = n[o].split(":");
            t.set(r[0], "1" === r[1])
        }
        return t
    }, Ht.prototype.empty = function (e) {
        var t = document.getElementById(e);
        if (t) for (; t.hasChildNodes();) t.removeChild(t.lastChild)
    }, Ht.prototype.show = function (e) {
        var t = document.getElementById(e);
        t && Dt(t, "display: block;", !0)
    }, Ht.prototype.remove = function (e) {
        var t = document.getElementById(e);
        t && t.parentNode && t.parentNode.removeChild(t)
    }, Ht.prototype.appendTo = function (e, t) {
        var o, n = document.getElementById(e);
        n && ((o = document.createElement("div")).innerHTML = t, n.appendChild(o))
    }, Ht.prototype.contains = function (e, t) {
        var o;
        for (o = 0; o < e.length; o += 1) if (e[o].toString().toLowerCase() === t.toString().toLowerCase()) return !0;
        return !1
    }, Ht.prototype.indexOf = function (e, t) {
        var o;
        for (o = 0; o < e.length; o += 1) if (e[o] === t) return o;
        return -1
    }, Ht.prototype.endsWith = function (e, t) {
        return -1 !== e.indexOf(t, e.length - t.length)
    }, Ht.prototype.generateUUID = function () {
        var o = (new Date).getTime();
        return "undefined" != typeof performance && "function" == typeof performance.now && (o += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
            var t = (o + 16 * Math.random()) % 16 | 0;
            return o = Math.floor(o / 16), ("x" === e ? t : 3 & t | 8).toString(16)
        })
    }, Ht.prototype.getActiveIdArray = function (e) {
        return e.filter(function (e) {
            return "true" === e.split(":")[1]
        }).map(function (e) {
            return parseInt(e.split(":")[0])
        })
    }, Ht.prototype.distinctArray = function (e) {
        var t = new Array;
        return e.forEach(function (e) {
            t.indexOf(e) < 0 && t.push(e)
        }), t
    }, Ht.prototype.findIndex = function (e, t) {
        for (var o = -1, n = 0; n < e.length; n++) if (void 0 !== e[n] && t(e[n], n)) {
            o = n;
            break
        }
        return o
    }, Ht.prototype.getURL = function (e) {
        var t = document.createElement("a");
        return t.href = e, t
    }, Ht.prototype.removeURLPrefixes = function (e) {
        return e.toLowerCase().replace(/(^\w+:|^)\/\//, "").replace("www.", "")
    }, Ht.prototype.removeChild = function (e) {
        if (e) if (e instanceof NodeList || e instanceof Array) for (var t = 0; t < e.length; t++) e[t].parentElement.removeChild(e[t]); else e.parentElement.removeChild(e)
    }, Ht.prototype.getRelativeURL = function (e, t, o) {
        if (void 0 === o && (o = !1), t) {
            var n = "./" + e.replace(/^(http|https):\/\//, "").split("/").slice(1).join("/").replace(".json", "");
            return o ? n : n + ".js"
        }
        return e
    }, Ht.prototype.setCheckedAttribute = function (e, t, o) {
        e && (t = document.querySelector(e)), t && (t.setAttribute("aria-checked", o.toString()), o ? t.setAttribute("checked", "") : t.removeAttribute("checked"), t.checked = o)
    }, Ht.prototype.setDisabledAttribute = function (e, t, o) {
        e && (t = document.querySelector(e)), t && (o ? t.setAttribute("disabled", o.toString()) : t.removeAttribute("disabled"))
    }, Ht.prototype.setHtmlAttributes = function (e, t) {
        for (var o in t) e.setAttribute(o, t[o]), e[o] = t[o]
    }, Ht.prototype.calculateCookieLifespan = function (e) {
        if (e < 0) return Kt.LifespanTypeText;
        var t = Math.floor(e / ee.maxSecToDays);
        if (t < ee.minDays) return "< 1 " + Kt.PCenterVendorListLifespanDay;
        if (t < ee.maxDays) return t + " " + Kt.PCenterVendorListLifespanDays;
        var o = Math.floor(t / ee.maxDays);
        return 1 === o ? o + " " + Kt.PCenterVendorListLifespanMonth : o + " " + Kt.PCenterVendorListLifespanMonths
    }, Ht.prototype.insertElement = function (e, t, o) {
        e && t && e.insertAdjacentElement(o, t)
    }, Ht.prototype.customQuerySelector = function (t) {
        return function (e) {
            return t.querySelector(e)
        }
    }, Ht.prototype.customQuerySelectorAll = function (t) {
        return function (e) {
            return t.querySelectorAll(e)
        }
    }, Ht), qt = (Mt.prototype.removeAlertBox = function () {
        null !== this.getCookie(Fe.ALERT_BOX_CLOSED) && this.setCookie(Fe.ALERT_BOX_CLOSED, "", 0, !0)
    }, Mt.prototype.removeIab1 = function () {
        null !== this.getCookie(q.Iab1Pub) && this.setCookie(q.Iab1Pub, "", 0, !0)
    }, Mt.prototype.removeIab2 = function () {
        null !== this.getCookie(q.Iab2Pub) && this.setCookie(q.Iab2Pub, "", 0, !0)
    }, Mt.prototype.removeAddtlStr = function () {
        null !== this.getCookie(Fe.ADDITIONAL_CONSENT_STRING) && this.setCookie(Fe.ADDITIONAL_CONSENT_STRING, "", 0, !0)
    }, Mt.prototype.removeVariant = function () {
        null !== this.getCookie(Fe.SELECTED_VARIANT) && this.setCookie(Fe.SELECTED_VARIANT, "", 0, !0)
    }, Mt.prototype.removeOptanon = function () {
        null !== this.getCookie(Fe.OPTANON_CONSENT) && this.setCookie(Fe.OPTANON_CONSENT, "", 0, !0)
    }, Mt.prototype.removePreview = function () {
        null !== this.getCookie(Fe.OT_PREVIEW) && this.setCookie(Fe.OT_PREVIEW, "", 0, !0)
    }, Mt.prototype.writeCookieParam = function (e, t, o, n) {
        var r, i, s, a, l = {}, c = this.getCookie(e);
        if (c) for (i = c.split("&"), r = 0; r < i.length; r += 1) s = i[r].split("="), l[decodeURIComponent(s[0])] = s[0] === t && n ? decodeURIComponent(s[1]) : decodeURIComponent(s[1]).replace(/\+/g, " ");
        l[t] = o;
        var d = Nt.moduleInitializer.TenantFeatures;
        d && d.CookieV2CookieDateTimeInISO ? l.datestamp = (new Date).toISOString() : l.datestamp = (new Date).toString(), l.version = Jt.otSDKVersion, a = this.param(l), this.setCookie(e, a, Kt.ReconsentFrequencyDays)
    }, Mt.prototype.readCookieParam = function (e, t, o) {
        var n, r, i, s, a = this.getCookie(e);
        if (a) {
            for (r = {}, i = a.split("&"), n = 0; n < i.length; n += 1) s = i[n].split("="), r[decodeURIComponent(s[0])] = o ? decodeURIComponent(s[1]) : decodeURIComponent(s[1]).replace(/\+/g, " ");
            return t && r[t] ? r[t] : t && !r[t] ? "" : r
        }
        return ""
    }, Mt.prototype.getCookie = function (e) {
        if (Nt && Nt.moduleInitializer && Nt.moduleInitializer.MobileSDK) {
            var t = this.getCookieDataObj(e);
            if (t) return t.value
        }
        if (Jt.isAMP && (Jt.ampData = JSON.parse(localStorage.getItem(Jt.dataDomainId)) || {}, Jt.ampData)) return Jt.ampData[e] || null;
        var o, n, r = e + "=", i = document.cookie.split(";");
        for (o = 0; o < i.length; o += 1) {
            for (n = i[o]; " " === n.charAt(0);) n = n.substring(1, n.length);
            if (0 === n.indexOf(r)) return n.substring(r.length, n.length)
        }
        return null
    }, Mt.prototype.setAmpStorage = function () {
        window.localStorage.setItem(Jt.dataDomainId, JSON.stringify(Jt.ampData))
    }, Mt.prototype.removeAmpStorage = function () {
        window.localStorage.removeItem(Jt.dataDomainId)
    }, Mt.prototype.handleAmp = function (e, t) {
        "" !== t ? Jt.ampData[e] = t : delete Jt.ampData[e], 0 === Object.keys(Jt.ampData).length ? this.removeAmpStorage() : this.setAmpStorage()
    }, Mt.prototype.setCookie = function (e, t, o, n, r) {
        if (void 0 === n && (n = !1), void 0 === r && (r = new Date), Jt.isAMP) this.handleAmp(e, t); else {
            var i = void 0;
            i = o ? (r.setTime(r.getTime() + 24 * o * 60 * 60 * 1e3), "; expires=" + r.toUTCString()) : n ? "; expires=" + new Date(0).toUTCString() : "";
            var s = Nt.moduleInitializer, a = s && s.Domain ? s.Domain.split("/") : [], l = "";
            a.length <= 1 ? a[1] = "" : l = a.slice(1).join("/");
            var c = "Samesite=Lax";
            s.CookieSameSiteNoneEnabled && (c = "Samesite=None; Secure");
            var d = s.ScriptType === Qe || s.ScriptType === $e;
            if (Jt.isPreview || !d && !s.MobileSDK) u = t + i + "; path=/" + l + "; domain=." + a[0] + "; " + c, document.cookie = e + "=" + u; else {
                var u = t + i + "; path=/; " + c;
                s.MobileSDK ? this.setCookieDataObj({
                    name: e,
                    value: t,
                    expires: i,
                    date: r,
                    domainAndPath: a
                }) : document.cookie = e + "=" + u
            }
        }
    }, Mt.prototype.setCookieDataObj = function (t) {
        if (t) {
            Jt.otCookieData || (window.OneTrust && window.OneTrust.otCookieData ? Jt.otCookieData = window.OneTrust.otCookieData : Jt.otCookieData = []);
            var e = Rt.findIndex(Jt.otCookieData, function (e) {
                return e.name === t.name
            });
            -1 < e ? Jt.otCookieData[e] = t : Jt.otCookieData.push(t)
        }
    }, Mt.prototype.getCookieDataObj = function (t) {
        Jt.otCookieData && 0 !== Jt.otCookieData.length || (window.OneTrust && window.OneTrust.otCookieData ? Jt.otCookieData = window.OneTrust.otCookieData : Jt.otCookieData = []);
        var e = Rt.findIndex(Jt.otCookieData, function (e) {
            return e.name === t
        });
        if (0 <= e) {
            var o = Jt.otCookieData[e];
            if (o.date) return new Date(o.date) < new Date ? (Jt.otCookieData.splice(e, 1), null) : o
        }
        return null
    }, Mt.prototype.param = function (e) {
        var t, o = "";
        for (t in e) e.hasOwnProperty(t) && ("" !== o && (o += "&"), o += t + "=" + encodeURIComponent(e[t]).replace(/%20/g, "+"));
        return o
    }, Mt);

    function Mt() {
    }

    var Ut = (jt.prototype.setRegionRule = function (e) {
        this.rule = e
    }, jt.prototype.getRegionRule = function () {
        return this.rule
    }, jt.prototype.getRegionRuleType = function () {
        return this.multiVariantTestingEnabled && this.selectedVariant ? this.selectedVariant.TemplateType : this.conditionalLogicEnabled && !this.allConditionsFailed ? this.Condition.TemplateType : this.rule.Type
    }, jt.prototype.canUseGoogleVendors = function (e) {
        return !!e && (this.conditionalLogicEnabled && !this.allConditionsFailed ? this.Condition.UseGoogleVendors : this.rule.UseGoogleVendors)
    }, jt.prototype.initVariables = function () {
        this.consentableGrps = [], this.consentableIabGrps = [], this.iabGrps = [], this.iabGrpIdMap = {}, this.domainGrps = {}, this.iabGroups = {
            purposes: {},
            legIntPurposes: {},
            specialPurposes: {},
            features: {},
            specialFeatures: {}
        }
    }, jt.prototype.init = function (e) {
        this.getGPCSignal(), this.initVariables();
        var t = e.DomainData;
        this.setPublicDomainData(JSON.parse(JSON.stringify(t))), this.domainDataMapper(t), this.commonDataMapper(e.CommonData), Kt.NtfyConfig = e.NtfyConfig || {}, this.setBannerName(), this.setPcName(), this.populateGPCSignal(), Kt.GoogleConsent.GCEnable && this.initGCM()
    }, jt.prototype.getGPCSignal = function () {
        this.gpcEnabled = !0 === navigator.globalPrivacyControl
    }, jt.prototype.isValidConsentNoticeGroup = function (e, t) {
        if (!e.ShowInPopup) return !1;
        var o = e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length || e.VendorServices && e.VendorServices.length,
            n = !1, r = !1, i = !1;
        if (e && !e.Parent) {
            e.SubGroups.length && (n = e.SubGroups.some(function (e) {
                return e.GroupName && e.ShowInPopup && e.FirstPartyCookies.length
            }), r = e.SubGroups.some(function (e) {
                return e.GroupName && e.ShowInPopup && (e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length)
            }), !t || e.FirstPartyCookies.length && e.Hosts.length || (i = !e.SubGroups.some(function (e) {
                return -1 === Bt.indexOf(e.Type)
            })));
            var s = e.SubGroups.some(function (e) {
                return -1 < Bt.indexOf(e.Type)
            });
            (-1 < Bt.indexOf(e.Type) || s) && (e.ShowVendorList = !0), (e.Hosts.length || r || n) && (e.ShowHostList = !0)
        }
        return o || -1 < Bt.indexOf(e.Type) || n || r || i
    }, jt.prototype.extractGroupIdForIabGroup = function (e) {
        return -1 < e.indexOf("ISPV2_") ? e = e.replace("ISPV2_", "") : -1 < e.indexOf("IABV2_") ? e = e.replace("IABV2_", "") : -1 < e.indexOf("IFEV2_") ? e = e.replace("IFEV2_", "") : -1 < e.indexOf("ISFV2_") && (e = e.replace("ISFV2_", "")), e
    }, jt.prototype.populateGroups = function (e, r) {
        var i = this, s = {}, a = [];
        e.forEach(function (e) {
            var t = e.CustomGroupId;
            if (void 0 !== e.HasConsentOptOut && e.IsIabPurpose || (e.HasConsentOptOut = !0), !(!r.IsIabEnabled && -1 < Bt.indexOf(e.Type) || "IAB2" === i.iabType && (e.Type === It || e.Type === Vt) && !e.HasConsentOptOut && !e.HasLegIntOptOut || e.Type === _t && !e.HasConsentOptOut) && (t !== zt.purposeOneGrpId || e.ShowInPopup || (i.purposeOneTreatment = !0), i.grpContainLegalOptOut = e.HasLegIntOptOut || i.grpContainLegalOptOut, e.SubGroups = [], e.Parent ? a.push(e) : s[t] = e, "IAB2" === i.iabType && -1 < Bt.indexOf(e.Type))) {
                var o = i.extractGroupIdForIabGroup(t);
                i.iabGrpIdMap[t] = o, e.IabGrpId = o;
                var n = {
                    description: e.GroupDescription,
                    descriptionLegal: e.DescriptionLegal,
                    id: Number(o),
                    name: e.GroupName
                };
                switch (e.Type) {
                    case It:
                        i.iabGroups.purposes[o] = n;
                        break;
                    case Et:
                        i.iabGroups.specialPurposes[o] = n;
                        break;
                    case Lt:
                        i.iabGroups.features[o] = n;
                        break;
                    case _t:
                        i.iabGroups.specialFeatures[o] = n
                }
            }
        }), a.forEach(function (e) {
            s[e.Parent] && e.ShowInPopup && (e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length || -1 < Bt.indexOf(e.Type)) && s[e.Parent].SubGroups.push(e)
        });
        var t = [];
        return Object.keys(s).forEach(function (e) {
            i.isValidConsentNoticeGroup(s[e], r.IsIabEnabled) && (s[e].SubGroups.sort(function (e, t) {
                return e.Order - t.Order
            }), t.push(s[e]))
        }), this.initGrpVar(t), t.sort(function (e, t) {
            return e.Order - t.Order
        })
    }, jt.prototype.initGrpVar = function (e) {
        var o = this, n = !0, r = !0;
        e.forEach(function (e) {
            b([e], e.SubGroups).forEach(function (e) {
                var t;
                e.Type !== At && e.Type !== It && e.Type !== _t || (o.domainGrps[e.PurposeId.toLowerCase()] = e.CustomGroupId), -1 < wt.indexOf(e.Type) && o.consentableGrps.push(e), -1 < xt.indexOf(e.Type) && o.consentableIabGrps.push(e), -1 === wt.indexOf(e.Type) && o.iabGrps.push(e), o.gpcEnabled && e.IsGpcEnabled && (e.Status = Je), (t = o.DNTEnabled && e.IsDntEnabled ? Ye : e.Status.toLowerCase()) !== Ke && t !== We && t !== Ye || (n = !1), t !== We && t !== ze && (r = !1), o.gpcForAGrpEnabled || (o.gpcForAGrpEnabled = e.IsGpcEnabled)
            })
        }), this.isOptInMode = n, this.isSoftOptInMode = r
    }, jt.prototype.domainDataMapper = function (e) {
        var t, o, n = {
            AriaClosePreferences: e.AriaClosePreferences,
            AriaOpenPreferences: e.AriaOpenPreferences,
            AriaPrivacy: e.AriaPrivacy,
            CenterRounded: e.CenterRounded,
            Flat: e.Flat,
            FloatingFlat: e.FloatingFlat,
            FloatingRounded: e.FloatingRounded,
            FloatingRoundedCorner: e.FloatingRoundedCorner,
            FloatingRoundedIcon: e.FloatingRoundedIcon,
            VendorLevelOptOut: e.IsIabEnabled,
            AboutCookiesText: e.AboutCookiesText,
            AboutLink: e.AboutLink,
            AboutText: e.AboutText,
            ActiveText: e.ActiveText,
            AddLinksToCookiepedia: e.AddLinksToCookiepedia,
            AlertAllowCookiesText: e.AlertAllowCookiesText,
            AlertCloseText: e.AlertCloseText,
            AlertLayout: e.AlertLayout,
            AlertMoreInfoText: e.AlertMoreInfoText,
            AlertNoticeText: e.AlertNoticeText,
            AllowAllText: e.PreferenceCenterConfirmText,
            AlwaysActiveText: e.AlwaysActiveText,
            BannerAdditionalDescPlacement: e.BannerAdditionalDescPlacement,
            BannerAdditionalDescription: e.BannerAdditionalDescription,
            BannerCloseButtonText: e.BannerCloseButtonText,
            BannerFeatureDescription: e.BannerFeatureDescription,
            BannerFeatureTitle: e.BannerFeatureTitle,
            BannerIABPartnersLink: e.BannerIABPartnersLink,
            BannerInformationDescription: e.BannerInformationDescription,
            BannerInformationTitle: e.BannerInformationTitle,
            BannerNonIABVendorListText: e.BannerNonIABVendorListText,
            BannerPosition: e.BannerPosition,
            BannerPurposeDescription: e.BannerPurposeDescription,
            BannerPurposeTitle: e.BannerPurposeTitle,
            BannerRejectAllButtonText: e.BannerRejectAllButtonText,
            BannerRelativeFontSizesToggle: e.BannerRelativeFontSizesToggle,
            BannerSettingsButtonDisplayLink: e.BannerSettingsButtonDisplayLink,
            BannerShowRejectAllButton: e.BannerShowRejectAllButton,
            BShowOptOutSignal: e.BShowOptOutSignal,
            BOptOutSignalText: e.BOptOutSignalText,
            BRegionAriaLabel: e.BRegionAriaLabel,
            BannerTitle: e.BannerTitle,
            BCloseButtonType: e.BCloseButtonType,
            BContinueText: e.BContinueText,
            BCookiePolicyLinkScreenReader: e.BCookiePolicyLinkScreenReader,
            BnrLogoAria: e.BnrLogoAria,
            BImprintLinkScreenReader: e.BImprintLinkScreenReader,
            BInitialFocus: e.BInitialFocus,
            BInitialFocusLinkAndButton: e.BInitialFocusLinkAndButton,
            BRejectConsentType: e.BRejectConsentType,
            BSaveBtnTxt: e.BSaveBtnText,
            BShowImprintLink: e.BShowImprintLink,
            BShowPolicyLink: e.BShowPolicyLink,
            BShowSaveBtn: e.BShowSaveBtn,
            cctId: e.cctId,
            ChoicesBanner: e.ChoicesBanner,
            CloseShouldAcceptAllCookies: e.CloseShouldAcceptAllCookies,
            CloseText: e.CloseText,
            ConfirmText: e.ConfirmText,
            ConsentModel: {Name: e.ConsentModel},
            CookieListDescription: e.CookieListDescription,
            CookieListTitle: e.CookieListTitle,
            CookieSettingButtonText: e.CookieSettingButtonText,
            CookiesUsedText: e.CookiesUsedText,
            CustomJs: e.CustomJs,
            firstPartyTxt: e.CookieFirstPartyText,
            FooterDescriptionText: e.FooterDescriptionText,
            ForceConsent: e.ForceConsent,
            GeneralVendors: e.GeneralVendors,
            GeneralVendorsEnabled: e.PCenterUseGeneralVendorsToggle,
            GenVenOptOut: e.PCenterAllowVendorOptout,
            GlobalRestrictionEnabled: e.GlobalRestrictionEnabled,
            GlobalRestrictions: e.GlobalRestrictions,
            GoogleConsent: {
                GCAdStorage: e.GCAdStorage,
                GCAnalyticsStorage: e.GCAnalyticsStorage,
                GCEnable: e.GCEnable,
                GCFunctionalityStorage: e.GCFunctionalityStorage,
                GCPersonalizationStorage: e.GCPersonalizationStorage,
                GCRedactEnable: e.GCRedactEnable,
                GCSecurityStorage: e.GCSecurityStorage,
                GCWaitTime: e.GCWaitTime
            },
            GroupGenVenListLabel: e.PCenterGeneralVendorThirdPartyCookiesText,
            Groups: this.populateGroups(e.Groups, e),
            HideToolbarCookieList: e.HideToolbarCookieList,
            IabType: e.IabType,
            InactiveText: e.InactiveText,
            IsConsentLoggingEnabled: e.IsConsentLoggingEnabled,
            IsIabEnabled: e.IsIabEnabled,
            IsIabThirdPartyCookieEnabled: e.IsIabThirdPartyCookieEnabled,
            IsLifespanEnabled: e.IsLifespanEnabled,
            Language: e.Language,
            LastReconsentDate: e.LastReconsentDate,
            LfSpanSecs: e.PCLifeSpanSecs,
            LfSpnWk: e.PCLifeSpanWk,
            LfSpnWks: e.PCLifeSpanWks,
            LfSpnYr: e.PCLifeSpanYr,
            LfSpnYrs: e.PCLifeSpanYrs,
            LifespanDurationText: e.LifespanDurationText,
            MainInfoText: e.MainInfoText,
            MainText: e.MainText,
            ManagePreferenceText: e.PreferenceCenterManagePreferencesText,
            NewVendorsInactiveEnabled: e.NewVendorsInactiveEnabled,
            NewWinTxt: e.PreferenceCenterMoreInfoScreenReader,
            NextPageAcceptAllCookies: e.NextPageAcceptAllCookies,
            NextPageCloseBanner: e.NextPageCloseBanner,
            NoBanner: e.NoBanner,
            OnClickAcceptAllCookies: e.OnClickAcceptAllCookies,
            OnClickCloseBanner: e.OnClickCloseBanner,
            OverriddenVendors: null != (t = e.OverriddenVendors) ? t : {},
            OverridenGoogleVendors: null != (o = e.OverridenGoogleVendors) ? o : {},
            Publisher: e.publisher,
            PublisherCC: e.PublisherCC,
            ReconsentFrequencyDays: e.ReconsentFrequencyDays,
            ScrollAcceptAllCookies: e.ScrollAcceptAllCookies,
            ScrollCloseBanner: e.ScrollCloseBanner,
            ShowAlertNotice: e.ShowAlertNotice,
            showBannerCloseButton: e.showBannerCloseButton,
            ShowPreferenceCenterCloseButton: e.ShowPreferenceCenterCloseButton,
            ThirdPartyCookieListText: e.ThirdPartyCookieListText,
            thirdPartyTxt: e.CookieThirdPartyText,
            UseGoogleVendors: this.canUseGoogleVendors(e.PCTemplateUpgrade),
            VendorConsentModel: e.VendorConsentModel,
            VendorListText: e.VendorListText,
            Vendors: e.Vendors,
            PCCategoryStyle: e.PCCategoryStyle || le.Checkbox,
            PCShowAlwaysActiveToggle: e.PCShowAlwaysActiveToggle,
            PCenterImprintLinkScreenReader: e.PCenterImprintLinkScreenReader,
            PCenterImprintLinkText: e.PCenterImprintLinkText,
            PCenterImprintLinkUrl: e.PCenterImprintLinkUrl,
            PCShowOptOutSignal: e.PCShowOptOutSignal,
            PCOptOutSignalText: e.PCOptOutSignalText,
            PCRegionAriaLabel: e.PCRegionAriaLabel,
            PCHostNotFound: e.PCHostNotFound,
            PCVendorNotFound: e.PCVendorNotFound,
            PCTechNotFound: e.PCTechNotFound
        };
        this.setPCDomainData(n, e), this.setAdditionalTechnologies(n, e), this.setVendorServiceConfigData(n, e), this.setDomainCommonDataDefaults(n, e), this.setDomainPCDataDefaults(n, e), e.PCTemplateUpgrade && (e.Center || e.Panel) && (n.PCAccordionStyle = e.PCAccordionStyle), n.PCenterEnableAccordion = e.PCAccordionStyle !== J.NoAccordion, this.legIntSettings = e.LegIntSettings || {}, void 0 === this.legIntSettings.PAllowLI && (this.legIntSettings.PAllowLI = !0), Nt.moduleInitializer.MobileSDK || (this.pagePushedDown = e.BannerPushesDownPage), Kt = r(r({}, Kt), n)
    }, jt.prototype.setPCDomainData = function (e, t) {
        e.PCAccordionStyle = J.Caret, e.PCActiveText = t.PCActiveText, e.PCCloseButtonType = t.PCCloseButtonType, e.PCContinueText = t.PCContinueText, e.PCCookiePolicyLinkScreenReader = t.PCCookiePolicyLinkScreenReader, e.PCCookiePolicyText = t.PCCookiePolicyText, e.PCenterAllowAllConsentText = t.PCenterAllowAllConsentText, e.PCenterApplyFiltersText = t.PCenterApplyFiltersText, e.PCenterBackText = t.PCenterBackText, e.PCenterCancelFiltersText = t.PCenterCancelFiltersText, e.PCenterClearFiltersText = t.PCenterClearFiltersText, e.PCenterCookiesListText = t.PCenterCookiesListText, e.PCenterEnableAccordion = t.PCenterEnableAccordion, e.PCenterFilterText = t.PCenterFilterText, e.PCenterGeneralVendorsText = t.PCenterGeneralVendorsText, e.PCenterRejectAllButtonText = t.PCenterRejectAllButtonText, e.PCenterSelectAllVendorsText = t.PCenterSelectAllVendorsText, e.PCenterShowRejectAllButton = t.PCenterShowRejectAllButton, e.PCenterUserIdDescriptionText = t.PCenterUserIdDescriptionText, e.PCenterUserIdNotYetConsentedText = t.PCenterUserIdNotYetConsentedText, e.PCenterUserIdTimestampTitleText = t.PCenterUserIdTimestampTitleText, e.PCenterUserIdTitleText = t.PCenterUserIdTitleText, e.PCenterVendorListDescText = t.PCenterVendorListDescText, e.PCenterVendorListDisclosure = t.PCenterVendorListDisclosure, e.PCenterVendorListLifespan = t.PCenterVendorListLifespan, e.PCenterVendorListLifespanDay = t.PCenterVendorListLifespanDay, e.PCenterVendorListLifespanDays = t.PCenterVendorListLifespanDays, e.PCenterVendorListLifespanMonth = t.PCenterVendorListLifespanMonth, e.PCenterVendorListLifespanMonths = t.PCenterVendorListLifespanMonths, e.PCenterVendorListNonCookieUsage = t.PCenterVendorListNonCookieUsage, e.PCenterVendorListStorageDomain = t.PCenterVendorListStorageDomain, e.PCVLSDomainsUsed = t.PCVLSDomainsUsed, e.PCVLSUse = t.PCVLSUse, e.PCenterVendorListStorageIdentifier = t.PCenterVendorListStorageIdentifier, e.PCenterVendorListStoragePurposes = t.PCenterVendorListStoragePurposes, e.PCenterVendorListStorageType = t.PCenterVendorListStorageType, e.PCenterVendorsListText = t.PCenterVendorsListText, e.PCenterViewPrivacyPolicyText = t.PCenterViewPrivacyPolicyText, e.PCGoogleVendorsText = t.PCGoogleVendorsText, e.PCGrpDescLinkPosition = t.PCGrpDescLinkPosition, e.PCGrpDescType = t.PCGrpDescType, e.PCGVenPolicyTxt = t.PCGeneralVendorsPolicyText, e.PCIABVendorsText = t.PCIABVendorsText, e.PCInactiveText = t.PCInactiveText, e.PCLogoAria = t.PCLogoScreenReader, e.PCOpensCookiesDetailsAlert = t.PCOpensCookiesDetailsAlert, e.PCenterVendorListScreenReader = t.PCenterVendorListScreenReader, e.PCOpensVendorDetailsAlert = t.PCOpensVendorDetailsAlert, e.PCenterDynamicRenderingEnable = t.PCenterDynamicRenderingEnable, e.PCTemplateUpgrade = t.PCTemplateUpgrade, e.PCVendorFullLegalText = t.PCVendorFullLegalText, e.PCViewCookiesText = t.PCViewCookiesText, e.PCLayout = {
            Center: t.Center,
            List: t.List,
            Panel: t.Panel,
            Popup: t.Popup,
            Tab: t.Tab
        }, e.PCenterVendorListLinkText = t.PCenterVendorListLinkText, e.PCenterVendorListLinkAriaLabel = t.PCenterVendorListLinkAriaLabel, e.PreferenceCenterPosition = t.PreferenceCenterPosition
    }, jt.prototype.setVendorServiceConfigData = function (e, t) {
        e.VendorServiceConfig = {
            PCVSOptOut: t.PCVSOptOut,
            PCVSEnable: t.PCVSEnable,
            PCVSExpandCategory: t.PCVSExpandCategory,
            PCVSExpandGroup: t.PCVSExpandGroup,
            PCVSCategoryView: t.PCVSCategoryView,
            PCVSNameText: t.PCVSNameText,
            PCVSAllowAllText: t.PCVSAllowAllText,
            PCVSListTitle: t.PCVSListTitle,
            PCVSParentCompanyText: t.PCVSParentCompanyText,
            PCVSAddressText: t.PCVSAddressText,
            PCVSDefaultCategoryText: t.PCVSDefaultCategoryText,
            PCVSDefaultDescriptionText: t.PCVSDefaultDescriptionText,
            PCVSDPOEmailText: t.PCVSDPOEmailText,
            PCVSDPOLinkText: t.PCVSDPOLinkText,
            PCVSPrivacyPolicyLinkText: t.PCVSPrivacyPolicyLinkText,
            PCVSCookiePolicyLinkText: t.PCVSCookiePolicyLinkText,
            PCVSOptOutLinkText: t.PCVSOptOutLinkText,
            PCVSLegalBasisText: t.PCVSLegalBasisText
        }
    }, jt.prototype.setAdditionalTechnologies = function (e, t) {
        e.AdditionalTechnologiesConfig = {
            PCShowTrackingTech: t.PCShowTrackingTech,
            PCCookiesLabel: t.PCCookiesLabel,
            PCTechDetailsText: t.PCTechDetailsText,
            PCTrackingTechTitle: t.PCTrackingTechTitle,
            PCLocalStorageLabel: t.PCLocalStorageLabel,
            PCSessionStorageLabel: t.PCSessionStorageLabel,
            PCTechDetailsAriaLabel: t.PCTechDetailsAriaLabel,
            PCLocalStorageDurationText: t.PCLocalStorageDurationText,
            PCSessionStorageDurationText: t.PCSessionStorageDurationText
        }
    }, jt.prototype.setDomainCommonDataDefaults = function (e, t) {
        e.AdvancedAnalyticsCategory = t.AdvancedAnalyticsCategory || "", e.BannerDPDDescription = t.BannerDPDDescription || [], e.BannerDPDDescriptionFormat = t.BannerDPDDescriptionFormat || "", e.BannerDPDTitle = t.BannerDPDTitle || "", e.CategoriesText = t.CategoriesText || "Categories", e.CookiesText = t.CookiesText || "Cookies", e.CookiesDescText = t.CookiesDescText || "Description", e.LifespanText = t.LifespanText || "Lifespan", e.LifespanTypeText = t.LifespanTypeText || "Session", e.PCenterConsentText = t.PCenterConsentText || "Consent"
    }, jt.prototype.setDomainPCDataDefaults = function (e, t) {
        e.PCenterCookieListFilterAria = t.PCenterCookieListFilterAria || "Filter", e.PCenterCookieListSearch = t.PCenterCookieListSearch || "Search", e.PCenterCookieSearchAriaLabel = t.PCenterCookieSearchAriaLabel || "Cookie list search", e.PCenterFilterAppliedAria = t.PCenterFilterAppliedAria || "Applied", e.PCenterFilterClearedAria = t.PCenterFilterClearedAria || "Filters Cleared", e.PCenterLegIntColumnHeader = t.PCenterLegIntColumnHeader || "Legitimate Interest", e.PCenterLegitInterestText = t.PCenterLegitInterestText || "Legitimate Interest", e.PCenterVendorListFilterAria = t.PCenterVendorListFilterAria || "Filter", e.PCenterVendorListSearch = t.PCenterVendorListSearch || "Search", e.PCenterVendorSearchAriaLabel = t.PCenterVendorSearchAriaLabel || "Vendor list search", e.PCFirstPartyCookieListText = t.PCFirstPartyCookieListText || "First Party Cookies", e.PCShowConsentLabels = !(!t.Tab || !t.PCTemplateUpgrade) && t.PCShowConsentLabels, e.PCShowPersistentCookiesHoverButton = t.PCShowPersistentCookiesHoverButton || !1
    }, jt.prototype.commonDataMapper = function (e) {
        var t = {
            iabThirdPartyConsentUrl: e.IabThirdPartyCookieUrl,
            optanonHideAcceptButton: e.OptanonHideAcceptButton,
            optanonHideCookieSettingButton: e.OptanonHideCookieSettingButton,
            optanonStyle: e.OptanonStyle,
            optanonStaticContentLocation: e.OptanonStaticContentLocation,
            bannerCustomCSS: e.BannerCustomCSS.replace(/\\n/g, ""),
            pcCustomCSS: e.PCCustomCSS.replace(/\\n/g, ""),
            textColor: e.TextColor,
            buttonColor: e.ButtonColor,
            buttonTextColor: e.ButtonTextColor,
            bannerMPButtonColor: e.BannerMPButtonColor,
            bannerMPButtonTextColor: e.BannerMPButtonTextColor,
            backgroundColor: e.BackgroundColor,
            bannerAccordionBackgroundColor: e.BannerAccordionBackgroundColor,
            BContinueColor: e.BContinueColor,
            PCContinueColor: e.PCContinueColor,
            pcTextColor: e.PcTextColor,
            pcButtonColor: e.PcButtonColor,
            pcButtonTextColor: e.PcButtonTextColor,
            pcAccordionBackgroundColor: e.PcAccordionBackgroundColor,
            pcLinksTextColor: e.PcLinksTextColor,
            bannerLinksTextColor: e.BannerLinksTextColor,
            pcEnableToggles: e.PcEnableToggles,
            pcBackgroundColor: e.PcBackgroundColor,
            pcMenuColor: e.PcMenuColor,
            pcMenuHighLightColor: e.PcMenuHighLightColor,
            legacyBannerLayout: e.LegacyBannerLayout,
            optanonLogo: e.OptanonLogo,
            oneTrustFtrLogo: e.OneTrustFooterLogo,
            optanonCookieDomain: e.OptanonCookieDomain,
            cookiePersistentLogo: e.CookiePersistentLogo,
            optanonGroupIdPerformanceCookies: e.OptanonGroupIdPerformanceCookies,
            optanonGroupIdFunctionalityCookies: e.OptanonGroupIdFunctionalityCookies,
            optanonGroupIdTargetingCookies: e.OptanonGroupIdTargetingCookies,
            optanonGroupIdSocialCookies: e.OptanonGroupIdSocialCookies,
            optanonShowSubGroupCookies: e.ShowSubGroupCookies,
            useRTL: e.UseRTL,
            showBannerCookieSettings: e.ShowBannerCookieSettings,
            showBannerAcceptButton: e.ShowBannerAcceptButton,
            showCookieList: e.ShowCookieList,
            allowHostOptOut: e.AllowHostOptOut,
            CookiesV2NewCookiePolicy: e.CookiesV2NewCookiePolicy,
            cookieListTitleColor: e.CookieListTitleColor,
            cookieListGroupNameColor: e.CookieListGroupNameColor,
            cookieListTableHeaderColor: e.CookieListTableHeaderColor,
            CookieListTableHeaderBackgroundColor: e.CookieListTableHeaderBackgroundColor,
            cookieListPrimaryColor: e.CookieListPrimaryColor,
            cookieListCustomCss: e.CookieListCustomCss,
            pcShowCookieHost: e.PCShowCookieHost,
            pcShowCookieDuration: e.PCShowCookieDuration,
            pcShowCookieType: e.PCShowCookieType,
            pcShowCookieCategory: e.PCShowCookieCategory,
            pcShowCookieDescription: e.PCShowCookieDescription,
            ConsentIntegration: e.ConsentIntegration,
            ConsentPurposesText: e.BConsentPurposesText || "Consent Purposes",
            FeaturesText: e.BFeaturesText || "Features",
            LegitimateInterestPurposesText: e.BLegitimateInterestPurposesText || "Legitimate Interest Purposes",
            ConsentText: e.BConsentText || "Consent",
            LegitInterestText: e.BLegitInterestText || "Legit. Interest",
            pcDialogClose: e.PCDialogClose || "dialog closed",
            pCFooterLogoUrl: e.PCFooterLogoUrl,
            SpecialFeaturesText: e.BSpecialFeaturesText || "Special Features",
            SpecialPurposesText: e.BSpecialPurposesText || "Special Purposes",
            pcCListName: e.PCCListName || "Name",
            pcCListHost: e.PCCListHost || "Host",
            pcCListDuration: e.PCCListDuration || "Duration",
            pcCListType: e.PCCListType || "Type",
            pcCListCategory: e.PCCListCategory || "Category",
            pcCListDescription: e.PCCListDescription || "Description",
            IabLegalTextUrl: e.IabLegalTextUrl,
            pcLegIntButtonColor: e.PcLegIntButtonColor,
            pcLegIntButtonTextColor: e.PcLegIntButtonTextColor,
            PCenterExpandToViewText: e.PCenterExpandToViewText,
            BCategoryContainerColor: e.BCategoryContainerColor,
            BCategoryStyleColor: e.BCategoryStyleColor,
            BLineBreakColor: e.BLineBreakColor,
            BSaveBtnColor: e.BSaveBtnColor,
            BCategoryStyle: e.BCategoryStyle,
            BAnimation: e.BAnimation,
            BFocusBorderColor: e.BFocusBorderColor,
            PCFocusBorderColor: e.PCFocusBorderColor,
            BnrLogo: e.BnrLogo,
            OTCloseBtnLogo: e.OTCloseBtnLogo,
            OTExternalLinkLogo: e.OTExternalLinkLogo
        };
        this.cookieListMapper(t, e), Kt = r(r({}, Kt), t), this.pubDomainData.CookiesV2NewCookiePolicy = e.CookiesV2NewCookiePolicy
    }, jt.prototype.cookieListMapper = function (e, t) {
        e.TTLGroupByTech = t.TTLGroupByTech, e.TTLShowTechDesc = t.TTLShowTechDesc
    }, jt.prototype.setPublicDomainData = function (r) {
        this.pubDomainData = {
            AboutCookiesText: r.AboutCookiesText,
            AboutLink: r.AboutLink,
            AboutText: r.AboutText,
            ActiveText: r.ActiveText,
            AddLinksToCookiepedia: r.AddLinksToCookiepedia,
            AlertAllowCookiesText: r.AlertAllowCookiesText,
            AlertCloseText: r.AlertCloseText,
            AlertLayout: r.AlertLayout,
            AlertMoreInfoText: r.AlertMoreInfoText,
            AlertNoticeText: r.AlertNoticeText,
            AllowAllText: r.PreferenceCenterConfirmText,
            AlwaysActiveText: r.AlwaysActiveText,
            BAnimation: r.BAnimation,
            BannerCloseButtonText: r.BannerCloseButtonText,
            BannerDPDDescription: r.BannerDPDDescription || [],
            BannerDPDDescriptionFormat: r.BannerDPDDescriptionFormat || "",
            BannerDPDTitle: r.BannerDPDTitle || "",
            BannerFeatureDescription: r.BannerFeatureDescription,
            BannerFeatureTitle: r.BannerFeatureTitle,
            BannerIABPartnersLink: r.BannerIABPartnersLink,
            BannerInformationDescription: r.BannerInformationDescription,
            BannerInformationTitle: r.BannerInformationTitle,
            BannerPosition: r.BannerPosition,
            BannerPurposeDescription: r.BannerPurposeDescription,
            BannerPurposeTitle: r.BannerPurposeTitle,
            BannerRejectAllButtonText: r.BannerRejectAllButtonText,
            BannerRelativeFontSizesToggle: r.BannerRelativeFontSizesToggle,
            BannerSettingsButtonDisplayLink: r.BannerSettingsButtonDisplayLink,
            BannerShowRejectAllButton: r.BannerShowRejectAllButton,
            BannerTitle: r.BannerTitle,
            BCategoryContainerColor: r.BCategoryContainerColor,
            BCategoryStyle: r.BCategoryStyle,
            BCategoryStyleColor: r.BCategoryStyleColor,
            BCloseButtonType: r.BCloseButtonType,
            BContinueText: r.BContinueText,
            BInitialFocus: r.BInitialFocus,
            BInitialFocusLinkAndButton: r.BInitialFocusLinkAndButton,
            BLineBreakColor: r.BLineBreakColor,
            BRejectConsentType: r.BRejectConsentType,
            BSaveBtnColor: r.BSaveBtnColor,
            BSaveBtnTxt: r.BSaveBtnText,
            BShowSaveBtn: r.BShowSaveBtn,
            CategoriesText: r.CategoriesText,
            cctId: r.cctId,
            ChoicesBanner: r.ChoicesBanner,
            CloseShouldAcceptAllCookies: r.CloseShouldAcceptAllCookies,
            CloseText: r.CloseText,
            ConfirmText: r.ConfirmText,
            ConsentIntegrationData: null,
            ConsentModel: {Name: r.ConsentModel},
            CookieListDescription: r.CookieListDescription,
            CookieListTitle: r.CookieListTitle,
            CookieSettingButtonText: r.CookieSettingButtonText,
            CookiesText: r.CookiesText,
            CookiesDescText: r.CookiesDescText,
            CookiesUsedText: r.CookiesUsedText,
            CustomJs: r.CustomJs,
            Domain: Nt.moduleInitializer.Domain,
            FooterDescriptionText: r.FooterDescriptionText,
            ForceConsent: r.ForceConsent,
            GeneralVendors: r.GeneralVendors,
            GoogleConsent: {
                GCAdStorage: r.GCAdStorage,
                GCAnalyticsStorage: r.GCAnalyticsStorage,
                GCEnable: r.GCEnable,
                GCFunctionalityStorage: r.GCFunctionalityStorage,
                GCPersonalizationStorage: r.GCPersonalizationStorage,
                GCRedactEnable: r.GCRedactEnable,
                GCSecurityStorage: r.GCSecurityStorage,
                GCWaitTime: r.GCWaitTime
            },
            Groups: null,
            HideToolbarCookieList: r.HideToolbarCookieList,
            IabType: r.IabType,
            InactiveText: r.InactiveText,
            IsBannerLoaded: !1,
            IsConsentLoggingEnabled: r.IsConsentLoggingEnabled,
            IsIABEnabled: r.IsIabEnabled,
            IsIabThirdPartyCookieEnabled: r.IsIabThirdPartyCookieEnabled,
            IsLifespanEnabled: r.IsLifespanEnabled,
            Language: r.Language,
            LastReconsentDate: r.LastReconsentDate,
            LifespanDurationText: r.LifespanDurationText,
            LifespanText: r.LifespanText,
            LifespanTypeText: r.LifespanTypeText,
            MainInfoText: r.MainInfoText,
            MainText: r.MainText,
            ManagePreferenceText: r.PreferenceCenterManagePreferencesText,
            NextPageAcceptAllCookies: r.NextPageAcceptAllCookies,
            NextPageCloseBanner: r.NextPageCloseBanner,
            NoBanner: r.NoBanner,
            OnClickAcceptAllCookies: r.OnClickAcceptAllCookies,
            OnClickCloseBanner: r.OnClickCloseBanner,
            OverridenGoogleVendors: r.OverridenGoogleVendors,
            PCAccordionStyle: J.Caret,
            PCCloseButtonType: r.PCCloseButtonType,
            PCContinueText: r.PCContinueText,
            PCenterAllowAllConsentText: r.PCenterAllowAllConsentText,
            PCenterApplyFiltersText: r.PCenterApplyFiltersText,
            PCenterBackText: r.PCenterBackText,
            PCenterCancelFiltersText: r.PCenterCancelFiltersText,
            PCenterClearFiltersText: r.PCenterClearFiltersText,
            PCenterCookieSearchAriaLabel: r.PCenterCookieSearchAriaLabel || "Cookie list search",
            PCenterCookiesListText: r.PCenterCookiesListText,
            PCenterEnableAccordion: r.PCenterEnableAccordion,
            PCenterExpandToViewText: r.PCenterExpandToViewText,
            PCenterFilterAppliedAria: r.PCenterFilterAppliedAria || "Applied",
            PCenterFilterClearedAria: r.PCenterFilterClearedAria || "Filters Cleared",
            PCenterFilterText: r.PCenterFilterText,
            PCenterRejectAllButtonText: r.PCenterRejectAllButtonText,
            PCenterSelectAllVendorsText: r.PCenterSelectAllVendorsText,
            PCenterShowRejectAllButton: r.PCenterShowRejectAllButton,
            PCenterUserIdDescriptionText: r.PCenterUserIdDescriptionText,
            PCenterUserIdNotYetConsentedText: r.PCenterUserIdNotYetConsentedText,
            PCenterUserIdTimestampTitleText: r.PCenterUserIdTimestampTitleText,
            PCenterUserIdTitleText: r.PCenterUserIdTitleText,
            PCenterVendorListDescText: r.PCenterVendorListDescText,
            PCenterVendorSearchAriaLabel: r.PCenterVendorSearchAriaLabel || "Vendor list search",
            PCenterVendorsListText: r.PCenterVendorsListText,
            PCenterViewPrivacyPolicyText: r.PCenterViewPrivacyPolicyText,
            PCFirstPartyCookieListText: r.PCFirstPartyCookieListText,
            PCGoogleVendorsText: r.PCGoogleVendorsText,
            PCGrpDescLinkPosition: r.PCGrpDescLinkPosition,
            PCGrpDescType: r.PCGrpDescType,
            PCIABVendorsText: r.PCIABVendorsText,
            PCLogoAria: r.PCLogoScreenReader,
            PCOpensCookiesDetailsAlert: r.PCOpensCookiesDetailsAlert,
            PCenterVendorListScreenReader: r.PCenterVendorListScreenReader,
            PCOpensVendorDetailsAlert: r.PCOpensVendorDetailsAlert,
            PCShowPersistentCookiesHoverButton: r.PCShowPersistentCookiesHoverButton,
            PCenterDynamicRenderingEnable: r.PCenterDynamicRenderingEnable,
            PCTemplateUpgrade: r.PCTemplateUpgrade,
            PCVendorFullLegalText: r.PCVendorFullLegalText,
            PCViewCookiesText: r.PCViewCookiesText,
            PCLayout: {Center: r.Center, List: r.List, Panel: r.Panel, Popup: r.Popup, Tab: r.Tab},
            PCenterVendorListLinkText: r.PCenterVendorListLinkText,
            PCenterVendorListLinkAriaLabel: r.PCenterVendorListLinkAriaLabel,
            PCenterImprintLinkScreenReader: r.PCenterImprintLinkScreenReader,
            PCenterImprintLinkText: r.PCenterImprintLinkText,
            PCenterImprintLinkUrl: r.PCenterImprintLinkUrl,
            PreferenceCenterPosition: r.PreferenceCenterPosition,
            ScrollAcceptAllCookies: r.ScrollAcceptAllCookies,
            ScrollCloseBanner: r.ScrollCloseBanner,
            ShowAlertNotice: r.ShowAlertNotice,
            showBannerCloseButton: r.showBannerCloseButton,
            ShowPreferenceCenterCloseButton: r.ShowPreferenceCenterCloseButton,
            ThirdPartyCookieListText: r.ThirdPartyCookieListText,
            UseGoogleVendors: this.canUseGoogleVendors(r.PCTemplateUpgrade),
            VendorConsentModel: r.VendorConsentModel,
            VendorLevelOptOut: r.IsIabEnabled,
            VendorListText: r.VendorListText,
            CookiesV2NewCookiePolicy: !1
        }, r.PCTemplateUpgrade && (r.Center || r.Panel) && r.PCAccordionStyle !== J.NoAccordion && (this.pubDomainData.PCAccordionStyle = r.PCAccordionStyle), this.pubDomainData.PCenterEnableAccordion = r.PCAccordionStyle !== J.NoAccordion;
        var i = [];
        r.Groups.forEach(function (e) {
            var t, o;
            if (r.IsIabEnabled || !e.IsIabPurpose) {
                e.Cookies = JSON.parse(JSON.stringify(e.FirstPartyCookies));
                var n = null === (o = e.Hosts) || void 0 === o ? void 0 : o.reduce(function (e, t) {
                    return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
                }, []);
                (t = e.Cookies).push.apply(t, n), i.push(e)
            }
        }), this.pubDomainData.Groups = i
    }, jt.prototype.setBannerScriptElement = function (e) {
        this.bannerScriptElement = e, this.setDomainElementAttributes()
    }, jt.prototype.setGCMcallback = function () {
        window.otEventListeners && window.otEventListeners.length && window.otEventListeners.forEach(function (e) {
            e && "consent.changed" === e.event && (zt.gcmUpdateCallback = e.listener)
        })
    }, jt.prototype.setDomainElementAttributes = function () {
        this.bannerScriptElement && (this.bannerScriptElement.hasAttribute("data-document-language") && this.setUseDocumentLanguage("true" === this.bannerScriptElement.getAttribute("data-document-language")), this.bannerScriptElement.hasAttribute("data-ignore-ga") && (this.ignoreGoogleAnlyticsCall = "true" === this.bannerScriptElement.getAttribute("data-ignore-ga")), this.bannerScriptElement.hasAttribute("data-ignore-html") && (this.ignoreInjectingHtmlCss = "true" === this.bannerScriptElement.getAttribute("data-ignore-html")))
    }, jt.prototype.setUseDocumentLanguage = function (e) {
        this.useDocumentLanguage = e
    }, jt.prototype.setPcName = function () {
        var e = Kt.PCLayout;
        e.Center ? this.pcName = dt : e.Panel ? this.pcName = pt : e.Popup ? this.pcName = ht : e.List ? this.pcName = ut : e.Tab && (this.pcName = gt)
    }, jt.prototype.setBannerName = function () {
        Kt.Flat ? this.bannerName = nt : Kt.FloatingRoundedCorner ? this.bannerName = rt : Kt.FloatingFlat ? this.bannerName = it : Kt.FloatingRounded ? this.bannerName = at : Kt.FloatingRoundedIcon ? this.bannerName = st : Kt.CenterRounded ? this.bannerName = ot : Kt.ChoicesBanner ? this.bannerName = lt : Kt.NoBanner && (this.bannerName = ct)
    }, jt.prototype.populateGPCSignal = function () {
        var e = Ft.readCookieParam(Fe.OPTANON_CONSENT, He), t = this.gpcForAGrpEnabled && this.gpcEnabled ? "1" : "0";
        this.gpcValueChanged = e ? e != t : this.gpcForAGrpEnabled, Ft.writeCookieParam(Fe.OPTANON_CONSENT, He, t)
    }, jt.prototype.initGCM = function () {
        var o = [];
        Object.keys(this.rule.States).forEach(function (t) {
            zt.rule.States[t].forEach(function (e) {
                o.push((t + "-" + e).toUpperCase())
            })
        });
        var e = zt.rule.Countries.map(function (e) {
            return e.toUpperCase()
        });
        zt.gcmCountries = e.concat(o)
    }, jt);

    function jt() {
        var t = this;
        this.DNTEnabled = "yes" === navigator.doNotTrack || "1" === navigator.doNotTrack, this.gpcEnabled = !1, this.gpcForAGrpEnabled = !1, this.pagePushedDown = !1, this.iabGroups = {
            purposes: {},
            legIntPurposes: {},
            specialPurposes: {},
            features: {},
            specialFeatures: {}
        }, this.iabType = null, this.grpContainLegalOptOut = !1, this.purposeOneTreatment = !1, this.ignoreInjectingHtmlCss = !1, this.ignoreGoogleAnlyticsCall = !1, this.mobileOnlineURL = [], this.iabGrpIdMap = {}, this.iabGrps = [], this.consentableGrps = [], this.consentableIabGrps = [], this.domainGrps = {}, this.thirdPartyiFrameLoaded = !1, this.thirdPartyiFrameResolve = null, this.thirdPartyiFramePromise = new Promise(function (e) {
            t.thirdPartyiFrameResolve = e
        }), this.isOptInMode = !1, this.isSoftOptInMode = !1, this.gpcValueChanged = !1, this.conditionalLogicEnabled = !1, this.allConditionsFailed = !1, this.canUseConditionalLogic = !1, this.gtmUpdatedinStub = !1, this.gcmDevIdSet = !1, this.purposeOneGrpId = "IABV2_1"
    }

    var zt, Kt = {};

    function Wt() {
        this.otSDKVersion = "202301.1.0", this.isAMP = !1, this.ampData = {}, this.otCookieData = window.OneTrust && window.OneTrust.otCookieData || [], this.syncRequired = !1, this.isIabSynced = !1, this.isGacSynced = !1, this.grpsSynced = [], this.syncedValidGrp = !1, this.groupsConsent = [], this.initialGroupsConsent = [], this.hostsConsent = [], this.initialHostConsent = [], this.genVendorsConsent = {}, this.vsConsent = new Map, this.initialGenVendorsConsent = {}, this.vendors = {
            list: [],
            searchParam: "",
            vendorTemplate: null,
            selectedVendors: [],
            selectedPurpose: [],
            selectedLegInt: [],
            selectedLegIntVendors: [],
            selectedSpecialFeatures: []
        }, this.initialVendors = {
            list: [],
            searchParam: "",
            vendorTemplate: null,
            selectedVendors: [],
            selectedPurpose: [],
            selectedLegInt: [],
            selectedLegIntVendors: [],
            selectedSpecialFeatures: []
        }, this.oneTrustIABConsent = {
            purpose: [],
            legimateInterest: [],
            features: [],
            specialFeatures: [],
            specialPurposes: [],
            vendors: [],
            legIntVendors: [],
            vendorList: null,
            IABCookieValue: ""
        }, this.initialOneTrustIABConsent = {
            purpose: [],
            legimateInterest: [],
            features: [],
            specialFeatures: [],
            specialPurposes: [],
            vendors: [],
            legIntVendors: [],
            vendorList: null,
            IABCookieValue: ""
        }, this.addtlVendors = {vendorConsent: [], vendorSelected: {}}, this.initialAddtlVendors = {
            vendorConsent: [],
            vendorSelected: {}
        }, this.addtlConsentVersion = "1~", this.initialAddtlVendorsList = {}, this.isAddtlConsent = !1, this.currentGlobalFilteredList = [], this.filterByIABCategories = [], this.filterByCategories = [], this.hosts = {
            hostTemplate: null,
            hostCookieTemplate: null
        }, this.generalVendors = {
            gvTemplate: null,
            gvCookieTemplate: null
        }, this.oneTrustAlwaysActiveHosts = [], this.alwaysActiveGenVendors = [], this.softOptInGenVendors = [], this.optInGenVendors = [], this.optanonHostList = [], this.srcExecGrps = [], this.htmlExecGrps = [], this.srcExecGrpsTemp = [], this.htmlExecGrpsTemp = [], this.isPCVisible = !1, this.dataGroupState = [], this.userLocation = {
            country: "",
            state: ""
        }, this.vendorsSetting = {}, this.dsParams = {}, this.isV2Stub = !1, this.fireOnetrustGrp = !1, this.showVendorService = !1, this.showGeneralVendors = !1, this.genVenOptOutEnabled = !1, this.vsIsActiveAndOptOut = !1, this.bAsset = {}, this.pcAsset = {}, this.csBtnAsset = {}, this.cStyles = {}, this.vendorDomInit = !1, this.genVendorDomInit = !1, this.syncNtfyContent = {}, this.ntfyRequired = !1, this.skipAddingHTML = !1, this.bnrAnimationInProg = !1, this.isPreview = !1, this.geoFromUrl = "", this.hideBanner = !1, this.setAttributePolyfillIsActive = !1, this.storageBaseURL = "", this.isKeyboardUser = !1, this.customerStyles = new Map, this.showTrackingTech = !1, this.currentTrackingTech = {}
    }

    var Jt = new (Wt.prototype.getVendorsInDomain = function () {
        var e;
        if (!Jt._vendorsInDomain) {
            var t = new Map, o = null != (e = Kt.Groups) ? e : [];
            Jt.setVendorServicesMap(o, t), Jt._vendorsInDomain = t
        }
        return Jt._vendorsInDomain
    }, Wt.prototype.setVendorServicesMap = function (e, t) {
        for (var o, n = 0, r = e; n < r.length; n++) {
            var i = r[n];
            i.SubGroups && 0 < i.SubGroups.length && Jt.setVendorServicesMap(i.SubGroups, t);
            for (var s = 0, a = null != (o = i.VendorServices) ? o : []; s < a.length; s++) {
                var l = a[s], c = Object.assign({}, i);
                delete c.VendorServices, l.groupRef = c, t.set(l.CustomVendorServiceId, l)
            }
        }
    }, Wt.prototype.clearVendorsInDomain = function () {
        Jt._vendorsInDomain = null
    }, Wt), Yt = (Xt.insertAfter = function (e, t) {
        t.parentNode.insertBefore(e, t.nextSibling)
    }, Xt.insertBefore = function (e, t) {
        t.parentNode.insertBefore(e, t)
    }, Xt.inArray = function (e, t) {
        return t.indexOf(e)
    }, Xt.ajax = function (e) {
        var t, o, n, r, i, s, a = null, l = new XMLHttpRequest;
        t = e.type, o = e.url, e.dataType, n = e.contentType, r = e.data, i = e.success, a = e.error, s = e.sync, l.open(t, o, !s), l.setRequestHeader("Content-Type", n), l.onload = function () {
            if (200 <= this.status && this.status < 400) {
                var e = JSON.parse(this.responseText);
                i(e)
            } else a({message: "Error Loading Data", statusCode: this.status})
        }, l.onerror = function (e) {
            a(e)
        }, "post" === t.toLowerCase() || "put" === t.toLowerCase() ? l.send(r) : l.send()
    }, Xt.prevNextHelper = function (o, e, n) {
        var r = [];

        function i(e, t, o) {
            t[e] && o ? o.includes(".") ? (t[e].classList[0] || t[e].classList.value && t[e].classList.value.includes(o.split(".")[1])) && r.push(t[e]) : o.includes("#") ? t[e].id === o.split("#")[1] && r.push(t[e]) : t[e].tagName === document.createElement(o.trim()).tagName && r.push(t[e]) : t[e] && r.push(t[e])
        }

        return "string" == typeof e ? Array.prototype.forEach.call(document.querySelectorAll(e), function (e, t) {
            i(o, e, n)
        }) : i(o, e, n), r
    }, Xt.browser = function () {
        var e, t, o;
        return navigator.sayswho = (t = navigator.userAgent, o = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [], /trident/i.test(o[1]) ? "IE " + ((e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || "") : "Chrome" === o[1] && null != (e = t.match(/\b(OPR|Edge)\/(\d+)/)) ? e.slice(1).join(" ").replace("OPR", "Opera") : (o = o[2] ? [o[1], o[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) && o.splice(1, 1, e[1]), o.join(" "))), {
            version: parseInt(navigator.sayswho.split(" ")[1]),
            type: navigator.sayswho.split(" ")[0],
            userAgent: navigator.userAgent
        }
    }, Xt.isNodeList = function (e) {
        var t = Object.prototype.toString.call(e);
        return "[object NodeList]" === t || "[object Array]" === t
    }, Xt.prototype.fadeOut = function (e) {
        var t = this;
        if (void 0 === e && (e = 60), 1 <= this.el.length) for (var o = 0; o < this.el.length; o++) {
            var n = "\n                    visibility: hidden;\n                    opacity: 0;\n                    transition: visibility 0s " + e + "ms, opacity " + e + "ms linear;\n                ";
            Dt(this.el[o], n, !0)
        }
        var r = setInterval(function () {
            if (1 <= t.el.length) for (var e = 0; e < t.el.length; e++) t.el[e].style.opacity <= 0 && (Dt(t.el[e], "display: none;", !0), clearInterval(r), "optanon-popup-bg" === t.el[e].id && t.el[e].removeAttribute("style"))
        }, e);
        return this
    }, Xt.prototype.hide = function () {
        if (1 <= this.el.length) for (var e = 0; e < this.el.length; e++) Dt(this.el[e], "display: none;", !0), this.el[e].setAttribute(Pt, !0); else Xt.isNodeList(this.el) || (Dt(this.el, "display: none;", !0), this.el.setAttribute(Pt, !0));
        return this
    }, Xt.prototype.show = function (e) {
        if (void 0 === e && (e = "block"), 1 <= this.el.length) for (var t = 0; t < this.el.length; t++) Dt(this.el[t], "display: " + e + ";", !0), this.el[t].removeAttribute(Pt); else Xt.isNodeList(this.el) || (Dt(this.el, "display: " + e + ";", !0), this.el.removeAttribute(Pt));
        return this
    }, Xt.prototype.remove = function () {
        if (1 <= this.el.length) for (var e = 0; e < this.el.length; e++) this.el[e].parentNode.removeChild(this.el[e]); else this.el.parentNode.removeChild(this.el);
        return this
    }, Xt.prototype.css = function (e) {
        if (e) if (1 <= this.el.length) {
            if (!e.includes(":")) return this.el[0].style[e];
            for (var t = 0; t < this.el.length; t++) Dt(this.el[t], e)
        } else {
            if (!e.includes(":")) return this.el.style[e];
            Dt(this.el, e)
        }
        return this
    }, Xt.prototype.removeClass = function (e) {
        if (1 <= this.el.length) for (var t = 0; t < this.el.length; t++) this.el[t].classList ? this.el[t].classList.remove(e) : this.el[t].className = this.el[t].className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "); else this.el.classList ? this.el.classList.remove(e) : this.el.className = this.el.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        return this
    }, Xt.prototype.addClass = function (e) {
        if (1 <= this.el.length) for (var t = 0; t < this.el.length; t++) this.el[t].classList ? this.el[t].classList.add(e) : this.el[t].className += " " + e; else this.el.classList ? this.el.classList.add(e) : this.el.className += " " + e;
        return this
    }, Xt.prototype.on = function (r, i, s) {
        var e = this;
        if ("string" != typeof i) if (this.el && "HTML" === this.el.nodeName && "load" === r || "resize" === r || "scroll" === r) switch (r) {
            case"load":
                window.onload = i;
                break;
            case"resize":
                window.onresize = i;
                break;
            case"scroll":
                window.onscroll = i
        } else if (this.el && 1 <= this.el.length) for (var t = 0; t < this.el.length; t++) this.el[t].addEventListener(r, i); else this.el && this.el instanceof Element && this.el.addEventListener(r, i); else if (this.el && "HTML" === this.el.nodeName && "load" === r || "resize" === r || "scroll" === r) switch (r) {
            case"load":
                window.onload = s;
                break;
            case"resize":
                window.onresize = s;
                break;
            case"scroll":
                window.onscroll = s
        } else {
            var a = function (o) {
                var n = o.target;
                e.el.eventExecuted = !0, Array.prototype.forEach.call(document.querySelectorAll(i), function (e, t) {
                    Zt["" + r + i] && delete Zt["" + r + i], e.addEventListener(r, s), e === n && s && s.call(e, o)
                }), e.el && e.el[0] ? e.el[0].removeEventListener(r, a) : e.el && e.el instanceof Element && e.el.removeEventListener(r, a)
            };
            if (this.el && 1 <= this.el.length) for (t = 0; t < this.el.length; t++) this.el[t].eventExecuted = !1, this.el[t].eventExecuted || this.el[t].addEventListener(r, a); else this.el && (this.el.eventExecuted = !1, !this.el.eventExecuted && this.el instanceof Element && (Zt["" + r + i] || (Zt["" + r + i] = !0, this.el.addEventListener(r, a))))
        }
        return this
    }, Xt.prototype.off = function (e, t) {
        if (1 <= this.el.length) for (var o = 0; o < this.el.length; o++) this.el[o].removeEventListener(e, t); else this.el.removeEventListener(e, t);
        return this
    }, Xt.prototype.one = function (t, o) {
        var n = this;
        if (1 <= this.el.length) for (var e = 0; e < this.el.length; e++) this.el[e].addEventListener(t, function (e) {
            e.stopPropagation(), e.currentTarget.dataset.triggered || (o(), e.currentTarget.dataset.triggered = !0)
        }); else {
            var r = function (e) {
                e.stopPropagation(), o(), n.off(t, r)
            };
            this.el.addEventListener(t, r)
        }
        return this
    }, Xt.prototype.trigger = function (e) {
        var t = new CustomEvent(e, {customEvent: "yes"});
        return this.el.dispatchEvent(t), this
    }, Xt.prototype.focus = function () {
        return 1 <= this.el.length ? this.el[0].focus() : this.el.focus(), this
    }, Xt.prototype.attr = function (e, t) {
        return this.el && 1 <= this.el.length ? t ? ("class" === e ? this.addClass(t) : this.el[0].setAttribute(e, t), this) : this.el[0].getAttribute(e) : t && this.el ? ("class" === e ? this.addClass(t) : this.el.setAttribute(e, t), this) : this.el && this.el.getAttribute(e)
    }, Xt.prototype.html = function (e) {
        if (null == e) return 1 <= this.el.length ? this.el[0].innerHTML : this.el.innerHTML;
        if (1 <= this.el.length) for (var t = 0; t < this.el.length; t++) this.el[t].innerHTML = e; else this.el.innerHTML = e;
        return this
    }, Xt.prototype.append = function (o) {
        if ("string" != typeof o || o.includes("<") || o.includes(">")) if (Array.isArray(o)) {
            var n = this;
            Array.prototype.forEach.call(o, function (e, t) {
                document.querySelector(n.selector).appendChild(new Xt(e, "ce").el)
            })
        } else if ("string" == typeof o || Array.isArray(o)) if ("string" == typeof this.selector) document.querySelector(this.selector).appendChild(new Xt(o, "ce").el); else if (this.useEl) {
            var r = document.createDocumentFragment(), i = !(!o.includes("<th") && !o.includes("<td"));
            if (i) {
                var e = o.split(" ")[0].split("<")[1];
                r.appendChild(document.createElement(e)), r.firstChild.innerHTML = o
            }
            Array.prototype.forEach.call(this.el, function (e, t) {
                i ? e.appendChild(r.firstChild) : e.appendChild(new Xt(o, "ce").el)
            })
        } else this.selector.appendChild(new Xt(o, "ce").el); else if ("string" == typeof this.selector) document.querySelector(this.selector).appendChild(o); else if (1 <= o.length) for (var t = 0; t < o.length; t++) this.selector.appendChild(o[t]); else this.selector.appendChild(o); else this.el.insertAdjacentText("beforeend", o);
        return this
    }, Xt.prototype.text = function (o) {
        if (this.el) {
            if (1 <= this.el.length) {
                if (!o) return this.el[0].textContent;
                Array.prototype.forEach.call(this.el, function (e, t) {
                    e.textContent = o
                })
            } else {
                if (!o) return this.el.textContent;
                this.el.textContent = o
            }
            return this
        }
    }, Xt.prototype.data = function (o, n) {
        if (this.el.length < 1) return this;
        if (!(1 <= this.el.length)) return r(this.el, n);

        function r(e, t) {
            if (!t) return JSON.parse(e.getAttribute("data-" + o));
            "object" == typeof t ? e.setAttribute("data-" + o, JSON.stringify(t)) : e.setAttribute("data-" + o, t)
        }

        return Array.prototype.forEach.call(this.el, function (e, t) {
            r(e, n)
        }), this
    }, Xt.prototype.height = function (e) {
        this.el.length && (this.el = this.el[0]);
        for (var t = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-top").split("px")[0]), o = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-bottom").split("px")[0]), n = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-top").split("px")[0]), r = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-bottom").split("px")[0]), i = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("height").split("px")[0]), s = [t, o, n, r], a = 0, l = 0; l < s.length; l++) 0 < s[l] && (a += s[l]);
        if (!e) return this.selector === document ? i : this.el.clientHeight - a;
        var c = e.toString().split(parseInt(e))[1] ? e.toString().split(parseInt(e))[1] : "px",
            d = "number" == typeof e ? e : parseInt(e.toString().split(c)[0]);
        return (c && "px" === c || "%" === c || "em" === c || "rem" === c) && (0 < d ? Dt(this.el, "height: " + (a + d + c) + ";", !0) : "auto" === e && Dt(this.el, "height: " + e + ";", !0)), this
    }, Xt.prototype.each = function (e) {
        var t = !1;
        return void 0 === this.el.length && (this.el = [this.el], t = !0), Array.prototype.forEach.call(this.el, e), t && (this.el = this.el[0]), this
    }, Xt.prototype.is = function (e) {
        return this.el.length ? (this.el[0].matches || this.el[0].matchesSelector || this.el[0].msMatchesSelector || this.el[0].mozMatchesSelector || this.el[0].webkitMatchesSelector || this.el[0].oMatchesSelector).call(this.el[0], e) : (this.el.matches || this.el.matchesSelector || this.el.msMatchesSelector || this.el.mozMatchesSelector || this.el.webkitMatchesSelector || this.el.oMatchesSelector).call(this.el, e)
    }, Xt.prototype.filter = function (e) {
        return this.el = Array.prototype.filter.call(document.querySelectorAll(this.selector), e), this
    }, Xt.prototype.animate = function (s, a) {
        var l, c = this;
        for (var e in this.el = document.querySelector(this.selector), s) l = e, function () {
            var e = parseInt(s[l]), t = s[l].split(parseInt(s[l]))[1] ? s[l].split(parseInt(s[l]))[1] : "px",
                o = "\n                      @keyframes slide-" + ("top" === l ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + ("top" === l ? c.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + (e + t) + ";\n                          }\n                      }\n                      @-webkit-keyframes slide-" + ("top" === l ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + ("top" === l ? c.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + (e + t) + ";\n                          }\n                      }\n                      @-moz-keyframes slide-" + ("top" === l ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + ("top" === l ? c.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + (e + t) + ";\n                          }\n                      }\n                      ",
                n = document.head.querySelector("#onetrust-style");
            if (n ? n.innerHTML += o : ((i = document.createElement("style")).id = "onetrust-legacy-style", i.type = "text/css", i.innerHTML = o, document.head.appendChild(i)), Xt.browser().type = Xt.browser().version <= 8) {
                var r = "top" === l ? "-webkit-animation: slide-up-custom " : "-webkit-animation: slide-down-custom " + a + "ms ease-out forwards;";
                Dt(c.el, r)
            } else {
                var i = "\n                        animation-name: " + ("top" === l ? "slide-up-custom" : "slide-down-custom") + ";\n                        animation-duration: " + a + "ms;\n                        animation-fill-mode: forwards;\n                        animation-timing-function: ease-out;\n                    ";
                Dt(c.el, i, !0)
            }
        }();
        return this
    }, Xt.prototype.scrollTop = function () {
        return this.el.scrollTop
    }, Xt);

    function Xt(e, t) {
        switch (void 0 === t && (t = ""), this.selector = e, this.useEl = !1, t) {
            case"ce":
                var o = Xt.browser().type.toLowerCase(), n = Xt.browser().version;
                if (n < 10 && "safari" === o || "chrome" === o && n <= 44 || n <= 40 && "firefox" === o) {
                    var r = document.implementation.createHTMLDocument();
                    r.body.innerHTML = e, this.el = r.body.children[0]
                } else {
                    var i = document.createRange().createContextualFragment(e);
                    this.el = i.firstChild
                }
                this.length = 1;
                break;
            case"":
                this.el = e === document || e === window ? document.documentElement : "string" != typeof e ? e : document.querySelectorAll(e), this.length = e === document || e === window || "string" != typeof e ? 1 : this.el.length;
                break;
            default:
                this.length = 0
        }
    }

    function Qt(e, t) {
        return void 0 === t && (t = ""), new Yt(e, t)
    }

    var $t, Zt = {}, eo = (to.prototype.getDataLanguageCulture = function () {
        var e = zt.bannerScriptElement;
        return e && e.getAttribute(Ze) ? this.checkAndTansformLangCodeWithUnderdscore(e.getAttribute(Ze).toLowerCase()) : this.detectDocumentOrBrowserLanguage().toLowerCase()
    }, to.prototype.checkAndTansformLangCodeWithUnderdscore = function (e) {
        return e.replace(/\_/, "-")
    }, to.prototype.detectDocumentOrBrowserLanguage = function () {
        var e = "";
        if (zt.langSwitcherPldr) {
            var t = Rt.convertKeyValueLowerCase(zt.langSwitcherPldr), o = this.getUserLanguage().toLowerCase();
            if (!(e = t[o] || t[o + "-" + o] || (t.default === o ? t.default : null))) if (2 === o.length) for (var n = 0; n < Object.keys(t).length; n += 1) {
                var r = Object.keys(t)[n];
                if (r.substr(0, 2) === o) {
                    e = t[r];
                    break
                }
            } else 2 < o.length && (e = t[o.substr(0, 2)]);
            e = e || t.default
        }
        return e
    }, to.prototype.getUserLanguage = function () {
        return zt.useDocumentLanguage ? this.checkAndTansformLangCodeWithUnderdscore(document.documentElement.lang) : navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language || navigator.userLanguage
    }, to.prototype.isValidLanguage = function (e, t) {
        var o = Rt.convertKeyValueLowerCase(zt.langSwitcherPldr);
        return !(!o || !o[t] && !o[t + "-" + t] && o.default !== t)
    }, to.prototype.getLangJsonUrl = function (e) {
        void 0 === e && (e = null);
        var t, o = zt.getRegionRule();
        if (e) {
            if (e = e.toLowerCase(), !this.isValidLanguage(o, e)) return null
        } else e = this.getDataLanguageCulture();
        return Jt.lang = e, Jt.consentLanguage = e.substr(0, 2), t = zt.canUseConditionalLogic ? zt.bannerDataParentURL + "/" + o.Id + "/" + zt.Condition.Id + "/" + e : zt.bannerDataParentURL + "/" + o.Id + "/" + e, zt.multiVariantTestingEnabled && (t = zt.bannerDataParentURL + "/" + o.Id + "/variants/" + zt.selectedVariant.Id + "/" + e), t
    }, to.prototype.populateLangSwitcherPlhdr = function () {
        var e = zt.getRegionRule();
        if (e) {
            var t = e.Variants;
            if (zt.multiVariantTestingEnabled && t) {
                var o = Ft.getCookie(Fe.SELECTED_VARIANT), n = void 0;
                o && (n = t[Rt.findIndex(t, function (e) {
                    return e.Id === o
                })]), o && n || (n = t[Math.floor(Math.random() * t.length)]), zt.langSwitcherPldr = n.LanguageSwitcherPlaceholder, zt.selectedVariant = n
            } else zt.canUseConditionalLogic ? zt.langSwitcherPldr = zt.Condition.LanguageSwitcherPlaceholder : zt.langSwitcherPldr = e.LanguageSwitcherPlaceholder
        }
    }, to);

    function to() {
    }

    var oo, no = (ro.prototype.getLangJson = function (e) {
        if (void 0 === e && (e = null), zt.previewMode) {
            var t = JSON.parse(window.sessionStorage.getItem("otPreviewData"));
            return Promise.resolve(t.langJson)
        }
        var o = $t.getLangJsonUrl(e);
        return o ? oo.otFetch(o + ".json") : Promise.resolve(null)
    }, ro.prototype.getPersistentCookieSvg = function (e) {
        var t = e || Kt.cookiePersistentLogo;
        return t ? oo.otFetch(t, !0) : Promise.resolve(null)
    }, ro.prototype.fetchGvlObj = function () {
        return this.otFetch(Nt.moduleInitializer.IabV2Data.globalVendorListUrl)
    }, ro.prototype.fetchGoogleVendors = function () {
        var e = io.updateCorrectIABUrl(Nt.moduleInitializer.GoogleData.googleVendorListUrl);
        return io.checkMobileOfflineRequest(io.getBannerVersionUrl()) ? io.otFetchOfflineFile(Rt.getRelativeURL(e, !0)) : (zt.mobileOnlineURL.push(e), this.otFetch(e))
    }, ro.prototype.getStorageDisclosure = function (t) {
        return p(this, void 0, void 0, function () {
            return g(this, function (e) {
                return [2, this.otFetch(t, !1, !0)]
            })
        })
    }, ro.prototype.loadCMP = function () {
        var o = this;
        return new Promise(function (e) {
            var t = o.checkIfRequiresPollyfill() ? "otTCF-ie" : "otTCF";
            io.jsonp(io.getBannerVersionUrl() + "/" + t + ".js", e, e)
        })
    }, ro.prototype.getCSBtnContent = function () {
        return p(this, void 0, void 0, function () {
            var t, o, n, r;
            return g(this, function (e) {
                switch (e.label) {
                    case 0:
                        return t = Kt.useRTL ? oe.RTL : oe.LTR, Jt.csBtnAsset[t] ? [3, 2] : (o = io.getBannerSDKAssestsUrl() + "/" + (Kt.useRTL ? tt : et), n = Jt.csBtnAsset, r = t, [4, this.otFetch(o)]);
                    case 1:
                        n[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, Jt.csBtnAsset[t]]
                }
            })
        })
    }, ro.prototype.getPcContent = function (s) {
        return void 0 === s && (s = !1), p(this, void 0, void 0, function () {
            var t, o, n, r, i;
            return g(this, function (e) {
                switch (e.label) {
                    case 0:
                        return t = Kt.useRTL ? oe.RTL : oe.LTR, Jt.pcAsset[t] && !s ? [3, 2] : (o = io.getBannerSDKAssestsUrl(), Kt.PCTemplateUpgrade && (o += "/v2"), n = o + "/" + zt.pcName + (Kt.useRTL ? "Rtl" : "") + ".json", r = Jt.pcAsset, i = t, [4, this.otFetch(n)]);
                    case 1:
                        r[i] = e.sent(), e.label = 2;
                    case 2:
                        return [2, Jt.pcAsset[t]]
                }
            })
        })
    }, ro.prototype.getBannerContent = function (l, c) {
        return void 0 === l && (l = !1), void 0 === c && (c = null), p(this, void 0, void 0, function () {
            var t, o, n, r, i, s, a;
            return g(this, function (e) {
                switch (e.label) {
                    case 0:
                        if (t = Kt.useRTL ? oe.RTL : oe.LTR, o = c || $t.getDataLanguageCulture(), Jt.bAsset[t] && !l) return [3, 2];
                        if (n = zt.getRegionRule(), r = void 0, Nt.fp.CookieV2SSR) {
                            if (zt.previewMode) return i = JSON.parse(window.sessionStorage.getItem("otPreviewData")), [2, Promise.resolve(i.bLayout)];
                            r = zt.bannerDataParentURL + "/" + n.Id, zt.canUseConditionalLogic && (r += "/" + zt.Condition.Id), r += "/bLayout-" + o + ".json"
                        } else r = io.getBannerSDKAssestsUrl() + "/" + zt.bannerName + (Kt.useRTL ? "Rtl" : "") + ".json";
                        return s = Jt.bAsset, a = t, [4, this.otFetch(r)];
                    case 1:
                        s[a] = e.sent(), e.label = 2;
                    case 2:
                        return [2, Jt.bAsset[t]]
                }
            })
        })
    }, ro.prototype.getCommonStyles = function (i) {
        return void 0 === i && (i = !1), p(this, void 0, void 0, function () {
            var t, o, n, r;
            return g(this, function (e) {
                switch (e.label) {
                    case 0:
                        return t = Kt.useRTL ? oe.RTL : oe.LTR, Jt.cStyles[t] && !i ? [3, 2] : (o = io.getBannerSDKAssestsUrl() + "/otCommonStyles" + (Kt.useRTL ? "Rtl" : "") + ".css", n = Jt.cStyles, r = t, [4, this.otFetch(o, !0)]);
                    case 1:
                        n[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, Jt.cStyles[t]]
                }
            })
        })
    }, ro.prototype.getSyncNtfyContent = function () {
        return p(this, void 0, void 0, function () {
            var t, o, n, r;
            return g(this, function (e) {
                switch (e.label) {
                    case 0:
                        return t = Kt.useRTL ? oe.RTL : oe.LTR, Jt.syncNtfyContent[t] ? [3, 2] : (o = io.getBannerSDKAssestsUrl() + "/otSyncNotification" + (Kt.useRTL ? "Rtl" : "") + ".json", n = Jt.syncNtfyContent, r = t, [4, this.otFetch(o)]);
                    case 1:
                        n[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, Jt.syncNtfyContent[t]]
                }
            })
        })
    }, ro.prototype.getConsentProfile = function (e, t) {
        var o = this, n = {Identifier: e, TenantId: Jt.tenantId, Authorization: t};
        return new Promise(function (e) {
            o.getJSON(Jt.consentApi, n, e, e)
        })
    }, ro.prototype.checkIfRequiresPollyfill = function () {
        var e = window.navigator.userAgent;
        return 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/") || "undefined" == typeof Set
    }, ro.prototype.otFetch = function (r, i, s) {
        return void 0 === i && (i = !1), void 0 === s && (s = !1), p(this, void 0, void 0, function () {
            var t, o, n = this;
            return g(this, function (e) {
                switch (e.label) {
                    case 0:
                        return io.checkMobileOfflineRequest(r) ? [4, io.otFetchOfflineFile(r)] : [3, 2];
                    case 1:
                        return [2, e.sent()];
                    case 2:
                        return e.trys.push([2, 9, , 10]), zt.mobileOnlineURL.push(r), "undefined" != typeof fetch ? [3, 3] : [2, new Promise(function (e) {
                            n.getJSON(r, null, e, e, i)
                        })];
                    case 3:
                        return [4, fetch(r)];
                    case 4:
                        return t = e.sent(), s && t.headers.get("Access-Control-Allow-Credentials") ? [2, Promise.resolve()] : i ? [4, t.text()] : [3, 6];
                    case 5:
                        return [2, e.sent()];
                    case 6:
                        return [4, t.json()];
                    case 7:
                        return [2, e.sent()];
                    case 8:
                        return [3, 10];
                    case 9:
                        return o = e.sent(), console.log("Error in fetch URL : " + r + " Exception :" + o), [3, 10];
                    case 10:
                        return [2]
                }
            })
        })
    }, ro.prototype.getJSON = function (e, t, o, n, r) {
        void 0 === t && (t = null), void 0 === r && (r = !1);
        var i = new XMLHttpRequest;
        if (i.open("GET", e, !0), t) for (var s in t) i.setRequestHeader(s, t[s]);
        i.onload = function () {
            if (200 <= this.status && this.status < 400 && this.responseText) {
                var e = void 0;
                e = r ? this.responseText : JSON.parse(this.responseText), o(e)
            } else n({message: "Error Loading Data", statusCode: this.status})
        }, i.onerror = function (e) {
            n(e)
        }, i.send()
    }, ro);

    function ro() {
    }

    var io, so = (ao.prototype.addLogoUrls = function () {
        io.checkMobileOfflineRequest(io.getBannerVersionUrl()) || (zt.mobileOnlineURL.push(io.updateCorrectUrl(Kt.optanonLogo)), zt.mobileOnlineURL.push(io.updateCorrectUrl(Kt.oneTrustFtrLogo)))
    }, ao.prototype.getCookieLabel = function (e, t, o) {
        if (void 0 === o && (o = !0), !e) return "";
        var n = e.Name;
        return t && (n = '\n                <a  class="cookie-label"\n                    href="' + (o ? "http://cookiepedia.co.uk/cookies/" : "http://cookiepedia.co.uk/host/") + e.Name + '"\n                    rel="noopener"\n                    target="_blank"\n                >\n                    ' + e.Name + '&nbsp;<span class="ot-scrn-rdr">' + Kt.NewWinTxt + "</span>\n                </a>\n            "), n
    }, ao.prototype.getBannerSDKAssestsUrl = function () {
        return this.getBannerVersionUrl() + "/assets"
    }, ao.prototype.getBannerVersionUrl = function () {
        var e = zt.bannerScriptElement.getAttribute("src");
        return "" + (-1 !== e.indexOf("/consent/") ? e.split("consent/")[0] + "scripttemplates/" : e.split("otSDKStub")[0]) + Nt.moduleInitializer.Version
    }, ao.prototype.checkMobileOfflineRequest = function (e) {
        return Nt.moduleInitializer.MobileSDK && new RegExp("^file://", "i").test(e)
    }, ao.prototype.updateCorrectIABUrl = function (e) {
        var t = Nt.moduleInitializer.ScriptType;
        if (t === Xe || t === $e) {
            var o = Rt.getURL(e), n = zt.bannerScriptElement,
                r = n && n.getAttribute("src") ? Rt.getURL(n.getAttribute("src")) : null;
            r && o && r.hostname !== o.hostname && (e = (e = (r = "" + zt.bannerDataParentURL) + o.pathname.split("/").pop().replace(/(^\/?)/, "/")).replace(o.hostname, r.hostname))
        }
        return e
    }, ao.prototype.updateCorrectUrl = function (e, t) {
        void 0 === t && (t = !1);
        var o = Rt.getURL(e), n = zt.bannerScriptElement,
            r = n && n.getAttribute("src") ? Rt.getURL(n.getAttribute("src")) : null;
        if (r && o && r.hostname !== o.hostname) {
            var i = Nt.moduleInitializer.ScriptType;
            if (i === Xe || i === $e) {
                if (t) return e;
                e = (r = zt.bannerDataParentURL + "/" + zt.getRegionRule().Id) + o.pathname.replace(/(^\/?)/, "/")
            } else e = null == e ? void 0 : e.replace(o.hostname, r.hostname)
        }
        return e
    }, ao.prototype.isBundleOrStackActive = function (n, r) {
        void 0 === r && (r = null);
        var i = Jt.oneTrustIABConsent, s = !0;
        r = r || Jt.groupsConsent;
        for (var a = 0, e = function () {
            var t = n.SubGroups[a];
            if (t.Type === At) (-1 < (e = Rt.findIndex(r, function (e) {
                return e.split(":")[0] === t.CustomGroupId
            })) && "0" === r[e].split(":")[1] || !r.length) && (s = !1); else {
                var e, o = t.Type === _t ? i.specialFeatures : i.purpose;
                (-1 < (e = Rt.findIndex(o, function (e) {
                    return e.split(":")[0] === t.IabGrpId
                })) && "false" === o[e].split(":")[1] || !o.length) && (s = !1)
            }
            a++
        }; e(), s && a < n.SubGroups.length;) ;
        return s
    }, ao.prototype.otFetchOfflineFile = function (r) {
        return p(this, void 0, void 0, function () {
            var t, o, n;
            return g(this, function (e) {
                switch (e.label) {
                    case 0:
                        return r = r.replace(".json", ".js"), t = r.split("/"), o = t[t.length - 1], n = o.split(".js")[0], [4, new Promise(function (e) {
                            function t() {
                                e(window[n])
                            }

                            io.jsonp(r, t, t)
                        })];
                    case 1:
                        return [2, e.sent()]
                }
            })
        })
    }, ao.prototype.jsonp = function (e, t, o) {
        io.checkMobileOfflineRequest(e) || zt.mobileOnlineURL.push(e);
        var n = document.createElement("script"), r = document.getElementsByTagName("head")[0];

        function i() {
            t()
        }

        n.onreadystatechange = function () {
            "loaded" !== this.readyState && "complete" !== this.readyState || i()
        }, n.onload = i, n.onerror = function () {
            o()
        }, n.type = "text/javascript", n.async = !0, n.src = e, Jt.crossOrigin && n.setAttribute("crossorigin", Jt.crossOrigin), r.appendChild(n)
    }, ao.prototype.isCookiePolicyPage = function (e) {
        var t = !1, o = Rt.removeURLPrefixes(window.location.href), n = Qt("<div></div>", "ce").el;
        Qt(n).html(e);
        for (var r = n.querySelectorAll("a"), i = 0; i < r.length; i++) if (Rt.removeURLPrefixes(r[i].href) === o) {
            t = !0;
            break
        }
        return t
    }, ao.prototype.isBannerVisible = function () {
        var e = !1, t = document.getElementById("onetrust-banner-sdk");
        return t && t.getAttribute("style") && (e = -1 !== t.getAttribute("style").indexOf("display: none") || -1 !== t.getAttribute("style").indexOf("display:none")), e
    }, ao.prototype.hideBanner = function () {
        var e = this;
        Jt.bnrAnimationInProg ? setTimeout(function () {
            return e.hideBanner()
        }, 100) : Qt("#onetrust-banner-sdk").fadeOut(400)
    }, ao.prototype.resetFocusToBody = function () {
        document.activeElement && document.activeElement.blur()
    }, ao.prototype.getDuration = function (e) {
        var t = e.Length, o = e.DurationType, n = "";
        if (!t || 0 === parseInt(t)) return Kt.LfSpanSecs;
        var r = parseInt(t);
        if (o) {
            var i = 1 < (r = this.round_to_precision(r / o, .5)) ? yt[o] + "s" : yt[o];
            Kt.LifespanDurationText && 1 === o && (i = "LifespanDurationText"), n = r + " " + Kt[i]
        } else n = this.getDurationText(r);
        return n
    }, ao.prototype.isDateCurrent = function (e) {
        var t = e.split("/"), o = parseInt(t[1]), n = parseInt(t[0]), r = parseInt(t[2]), i = new Date, s = i.getDate(),
            a = i.getFullYear(), l = i.getMonth() + 1;
        return a < r || r === a && l < n || r === a && n === l && s <= o
    }, ao.prototype.insertFooterLogo = function (e) {
        var t = Qt(e).el;
        if (t.length && Kt.oneTrustFtrLogo) {
            var o = io.updateCorrectUrl(Kt.oneTrustFtrLogo);
            io.checkMobileOfflineRequest(io.getBannerVersionUrl()) && (o = Rt.getRelativeURL(o, !0, !0));
            for (var n = 0; n < t.length; n++) {
                var r = t[n].querySelector("img"), i = "Powered by OneTrust " + Kt.NewWinTxt;
                Qt(t[n]).attr("href", Kt.pCFooterLogoUrl), r.setAttribute("src", o), r.setAttribute("title", i), Qt(t[n]).attr("aria-label", i)
            }
        }
    }, ao.prototype.getUTCFormattedDate = function (e) {
        var t = new Date(e);
        return t.getUTCFullYear() + "-" + (t.getUTCMonth() + 1).toString().padStart(2, "0") + "-" + t.getUTCDate().toString().toString().padStart(2, "0") + " " + t.getUTCHours() + ":" + t.getUTCMinutes().toString().toString().padStart(2, "0") + ":" + t.getUTCSeconds().toString().toString().padStart(2, "0")
    }, ao.prototype.getDurationText = function (e) {
        return 365 <= e ? (e /= 365, (e = this.round_to_precision(e, .5)) + " " + (1 < e ? Kt.LfSpnYrs : Kt.LfSpnYr)) : Kt.LifespanDurationText ? e + " " + Kt.LifespanDurationText : e + " " + (1 < e ? Kt.PCenterVendorListLifespanDays : Kt.PCenterVendorListLifespanDay)
    }, ao.prototype.round_to_precision = function (e, t) {
        var o = +e + (void 0 === t ? .5 : t / 2);
        return o - o % (void 0 === t ? 1 : +t)
    }, ao.prototype.isOptOutEnabled = function () {
        return Kt.PCTemplateUpgrade ? Jt.genVenOptOutEnabled : Kt.allowHostOptOut
    }, ao.prototype.findUserType = function (e) {
        Jt.isKeyboardUser = !(!e || 0 !== e.detail)
    }, ao.prototype.getCSSPropsFromString = function (e) {
        if (e) {
            var t = e.length, n = {};
            return e.endsWith(";") && (e = e.substring(0, t - 1)), e.trim().split(";").forEach(function (e) {
                var t = e.trim().toString().split(":"),
                    o = JSON.parse('{ "' + t[0].trim() + '" : "' + t[1].trim() + '" }');
                n = Object.assign(n, o)
            }), n
        }
        return {}
    }, ao.prototype.setCloseIcon = function (e) {
        var t = io.updateCorrectUrl(Kt.OTCloseBtnLogo), o = Qt(e);
        o.length && Dt(o.el, 'background-image: url("' + t + '")', !0)
    }, ao.prototype.createOptOutSignalElement = function (e, t) {
        var o = e(t ? "#ot-pc-content" : "#onetrust-policy"), n = document.createElement("div");
        n.classList.add("ot-optout-signal");
        var r = document.createElement("div");
        r.classList.add("ot-optout-icon");
        var i = document.createElement("span");
        return i.innerText = t ? Kt.PCOptOutSignalText : Kt.BOptOutSignalText, n.append(r), n.append(i), null != o && o.prepend(n), this.applyGuardLogo(), n
    }, ao.prototype.applyGuardLogo = function () {
        return p(this, void 0, void 0, function () {
            var t, o, n;
            return g(this, function (e) {
                switch (e.label) {
                    case 0:
                        return (t = Kt.cookiePersistentLogo).includes("ot_guard_logo.svg") || (o = t.indexOf("static/"), t = t.replace(t.slice(o + 7), "ot_guard_logo.svg")), [4, oo.getPersistentCookieSvg(t)];
                    case 1:
                        return n = e.sent(), Qt(".ot-optout-icon").html(n), [2]
                }
            })
        })
    }, ao);

    function ao() {
    }

    var lo, co = {
        P_Content: "#ot-pc-content",
        P_Logo: ".ot-pc-logo",
        P_Title: "#ot-pc-title",
        P_Policy_Txt: "#ot-pc-desc",
        P_Vendor_Title_Elm: "#ot-lst-title",
        P_Vendor_Title: "#ot-lst-title h3",
        P_Manage_Cookies_Txt: "#ot-category-title",
        P_Label_Txt: ".ot-label-txt",
        P_Category_Header: ".ot-cat-header",
        P_Category_Grp: ".ot-cat-grp",
        P_Category_Item: ".ot-cat-item",
        P_Vendor_List: "#ot-pc-lst",
        P_Vendor_Content: "#ot-lst-cnt",
        P_Vendor_Container: "#ot-ven-lst",
        P_Ven_Bx: "ot-ven-box",
        P_Ven_Name: ".ot-ven-name",
        P_Ven_Link: ".ot-ven-link",
        P_Ven_Ctgl: "ot-ven-ctgl",
        P_Ven_Ltgl: "ot-ven-litgl",
        P_Ven_Ltgl_Only: "ot-ven-litgl-only",
        P_Ven_Opts: ".ot-ven-opts",
        P_Triangle: "#ot-anchor",
        P_Fltr_Modal: "#ot-fltr-modal",
        P_Fltr_Options: ".ot-fltr-opts",
        P_Fltr_Option: ".ot-fltr-opt",
        P_Select_Cntr: "#ot-sel-blk",
        P_Host_Cntr: "#ot-host-lst",
        P_Host_Hdr: ".ot-host-hdr",
        P_Host_Desc: ".ot-host-desc",
        P_Li_Hdr: ".ot-pli-hdr",
        P_Li_Title: ".ot-li-title",
        P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
        P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
        P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
        P_Host_Title: ".ot-host-name",
        P_Leg_Select_All: ".ot-sel-all-hdr",
        P_Leg_Header: ".ot-li-hdr",
        P_Acc_Header: ".ot-acc-hdr",
        P_Cnsnt_Header: ".ot-consent-hdr",
        P_Tgl_Cntr: ".ot-tgl-cntr",
        P_CBx_Cntr: ".ot-chkbox",
        P_Sel_All_Host_El: "ot-selall-hostcntr",
        P_Sel_All_Vendor_Consent_El: "ot-selall-vencntr",
        P_Sel_All_Vendor_Leg_El: "ot-selall-licntr",
        P_c_Name: "ot-c-name",
        P_c_Host: "ot-c-host",
        P_c_Duration: "ot-c-duration",
        P_c_Type: "ot-c-type",
        P_c_Category: "ot-c-category",
        P_c_Desc: "ot-c-description",
        P_Host_View_Cookies: ".ot-host-expand",
        P_Host_Opt: ".ot-host-opt",
        P_Host_Info: ".ot-host-info",
        P_Arrw_Cntr: ".ot-arw-cntr",
        P_Acc_Txt: ".ot-acc-txt",
        P_Vendor_CheckBx: "ot-ven-chkbox",
        P_Vendor_LegCheckBx: "ot-ven-leg-chkbox",
        P_Host_UI: "ot-hosts-ui",
        P_Host_Cnt: "ot-host-cnt",
        P_Host_Bx: "ot-host-box",
        P_Ven_Dets: ".ot-ven-dets",
        P_Ven_Disc: ".ot-ven-disc",
        P_Gven_List: "#ot-gn-venlst",
        P_Close_Btn: ".ot-close-icon",
        P_Ven_Lst_Cntr: ".ot-vlst-cntr",
        P_Host_Lst_cntr: ".ot-hlst-cntr",
        P_Sub_Grp_Cntr: ".ot-subgrp-cntr",
        P_Subgrp_Desc: ".ot-subgrp-desc",
        P_Subgp_ul: ".ot-subgrps",
        P_Subgrp_li: ".ot-subgrp",
        P_Subgrp_Tgl_Cntr: ".ot-subgrp-tgl",
        P_Grp_Container: ".ot-grps-cntr",
        P_Privacy_Txt: "#ot-pvcy-txt",
        P_Privacy_Hdr: "#ot-pvcy-hdr",
        P_Active_Menu: "ot-active-menu",
        P_Desc_Container: ".ot-desc-cntr",
        P_Tab_Grp_Hdr: "ot-grp-hdr1",
        P_Search_Cntr: "#ot-search-cntr",
        P_Clr_Fltr_Txt: "#clear-filters-handler",
        P_Acc_Grp_Desc: ".ot-acc-grpdesc",
        P_Acc_Container: ".ot-acc-grpcntr",
        P_Line_Through: "line-through",
        P_Vendor_Search_Input: "#vendor-search-handler"
    }, uo = {
        P_Grp_Container: ".groups-container",
        P_Content: "#ot-content",
        P_Category_Header: ".category-header",
        P_Desc_Container: ".description-container",
        P_Label_Txt: ".label-text",
        P_Acc_Grp_Desc: ".ot-accordion-group-pc-container",
        P_Leg_Int_Hdr: ".leg-int-header",
        P_Not_Always_Active: "p:not(.ot-always-active)",
        P_Category_Grp: ".category-group",
        P_Category_Item: ".category-item",
        P_Sub_Grp_Cntr: ".cookie-subgroups-container",
        P_Acc_Container: ".ot-accordion-pc-container",
        P_Close_Btn: ".pc-close-button",
        P_Logo: ".pc-logo",
        P_Title: "#pc-title",
        P_Privacy_Txt: "#privacy-text",
        P_Privacy_Hdr: "#pc-privacy-header",
        P_Policy_Txt: "#pc-policy-text",
        P_Manage_Cookies_Txt: "#manage-cookies-text",
        P_Vendor_Title: "#vendors-list-title",
        P_Vendor_Title_Elm: "#vendors-list-title",
        P_Vendor_List: "#vendors-list",
        P_Vendor_Content: "#vendor-list-content",
        P_Vendor_Container: "#vendors-list-container",
        P_Ven_Bx: "vendor-box",
        P_Ven_Name: ".vendor-title",
        P_Ven_Link: ".vendor-privacy-notice",
        P_Ven_Ctgl: "ot-vendor-consent-tgl",
        P_Ven_Ltgl: "ot-leg-int-tgl",
        P_Ven_Ltgl_Only: "ot-leg-int-tgl-only",
        P_Ven_Opts: ".vendor-options",
        P_Triangle: "#ot-triangle",
        P_Fltr_Modal: "#ot-filter-modal",
        P_Fltr_Options: ".ot-group-options",
        P_Fltr_Option: ".ot-group-option",
        P_Select_Cntr: "#select-all-container",
        P_Host_Cntr: "#hosts-list-container",
        P_Host_Hdr: ".host-info",
        P_Host_Desc: ".host-description",
        P_Host_Opt: ".host-option-group",
        P_Host_Info: ".vendor-host",
        P_Ven_Dets: ".vendor-purpose-groups",
        P_Ven_Disc: ".ot-ven-disc",
        P_Gven_List: "#ot-gn-venlst",
        P_Arrw_Cntr: ".ot-arrow-container",
        P_Li_Hdr: ".leg-int-header",
        P_Li_Title: ".leg-int-title",
        P_Acc_Txt: ".accordion-text",
        P_Tgl_Cntr: ".ot-toggle-group",
        P_CBx_Cntr: ".ot-chkbox-container",
        P_Host_Title: ".host-title",
        P_Leg_Select_All: ".leg-int-sel-all-hdr",
        P_Leg_Header: ".leg-int-hdr",
        P_Cnsnt_Header: ".consent-hdr",
        P_Acc_Header: ".accordion-header",
        P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
        P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
        P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
        P_Sel_All_Host_El: "select-all-hosts-input-container",
        P_Sel_All_Vendor_Consent_El: "select-all-vendors-input-container",
        P_Sel_All_Vendor_Leg_El: "select-all-vendors-leg-input-container",
        P_c_Name: "cookie-name-container",
        P_c_Host: "cookie-host-container",
        P_c_Duration: "cookie-duration-container",
        P_c_Type: "cookie-type-container",
        P_c_Category: "cookie-category-container",
        P_c_Desc: "cookie-description-container",
        P_Host_View_Cookies: ".host-view-cookies",
        P_Vendor_CheckBx: "vendor-chkbox",
        P_Vendor_LegCheckBx: "vendor-leg-chkbox",
        P_Host_UI: "hosts-list",
        P_Host_Cnt: "host-list-content",
        P_Host_Bx: "host-box",
        P_Ven_Lst_Cntr: ".category-vendors-list-container",
        P_Host_Lst_cntr: ".category-host-list-container",
        P_Subgrp_Desc: ".cookie-subgroups-description-legal",
        P_Subgp_ul: ".cookie-subgroups",
        P_Subgrp_li: ".cookie-subgroup",
        P_Subgrp_Tgl_Cntr: ".cookie-subgroup-toggle",
        P_Active_Menu: "active-group",
        P_Tab_Grp_Hdr: "group-toggle",
        P_Search_Cntr: "#search-container",
        P_Clr_Fltr_Txt: "#clear-filters-handler p",
        P_Vendor_Search_Input: "#vendor-search-handler"
    };

    function po() {
    }

    var ho, go = new (po.prototype.initializeBannerVariables = function (e) {
        var t, o = e.DomainData;
        zt.iabType = o.IabType, t = o.PCTemplateUpgrade, lo = t ? co : uo, zt.init(e), Jt.showGeneralVendors = Kt.GeneralVendorsEnabled && Kt.PCTemplateUpgrade, Jt.showVendorService = Nt.fp.CookieV2VendorServiceScript && Kt.VendorServiceConfig.PCVSEnable && "IAB2" !== Kt.IabType && Kt.PCTemplateUpgrade, Jt.vsIsActiveAndOptOut = Jt.showVendorService && Kt.VendorServiceConfig.PCVSOptOut, Jt.showTrackingTech = Nt.fp.CookieV2TrackingTechPrefCenter && Kt.AdditionalTechnologiesConfig.PCShowTrackingTech, Jt.genVenOptOutEnabled = Jt.showGeneralVendors && Kt.GenVenOptOut, io.addLogoUrls(), this.setGeolocationInCookies(), this.setOrUpdate3rdPartyIABConsentFlag()
    }, po.prototype.initializeVendorInOverriddenVendors = function (e, t) {
        Kt.OverriddenVendors[e] = {disabledCP: [], disabledLIP: [], active: t, legInt: !1, consent: !1}
    }, po.prototype.applyGlobalRestrictionsonNewVendor = function (e, t, o, n) {
        var r = Kt.GlobalRestrictions, i = Kt.OverriddenVendors;
        switch (i[t] || this.initializeVendorInOverriddenVendors(t, !0), i[t].disabledCP || (i[t].disabledCP = []), i[t].disabledLIP || (i[t].disabledLIP = []), r[o]) {
            case U.Disabled:
                n ? i[t].disabledCP.push(o) : i[t].disabledLIP.push(o), Kt.Publisher.restrictions[o][t] = U.Disabled;
                break;
            case U.Consent:
                n ? (i[t].consent = !0, Kt.Publisher.restrictions[o][t] = U.Consent) : (i[t].disabledLIP.push(o), this.checkFlexiblePurpose(e, t, o, !1));
                break;
            case U.LegInt:
                n ? (i[t].disabledCP.push(o), this.checkFlexiblePurpose(e, t, o, !0)) : (i[t].legInt = !0, Kt.Publisher.restrictions[o][t] = U.LegInt);
                break;
            case void 0:
                n ? i[t].consent = !0 : i[t].legInt = !0
        }
    }, po.prototype.checkFlexiblePurpose = function (e, t, o, n) {
        e.flexiblePurposes.includes(o) ? (n ? Kt.OverriddenVendors[t].legInt = !0 : Kt.OverriddenVendors[t].consent = !0, Kt.Publisher.restrictions[o][t] = n ? U.LegInt : U.Consent) : Kt.Publisher.restrictions[o][t] = U.Disabled
    }, po.prototype.removeInActiveVendorsForTcf = function (i) {
        var s = this, a = Jt.iabData.vendorListVersion, e = Kt.Publisher, l = Kt.GlobalRestrictionEnabled,
            c = !(0 === Object.keys(e).length || e && 0 === Object.keys(e.restrictions).length);
        Object.keys(i.vendors).forEach(function (t) {
            var o = i.vendors[t];
            o.iab2GVLVersion > a && (Kt.NewVendorsInactiveEnabled ? s.initializeVendorInOverriddenVendors(t, !1) : l && (o.purposes.forEach(function (e) {
                s.applyGlobalRestrictionsonNewVendor(o, t, e, !0)
            }), o.legIntPurposes.forEach(function (e) {
                s.applyGlobalRestrictionsonNewVendor(o, t, e, !1)
            })));
            var e = !1;
            Kt.IsIabThirdPartyCookieEnabled || (zt.legIntSettings.PAllowLI ? Kt.OverriddenVendors[t] && !Kt.OverriddenVendors[t].active && (e = !0) : -1 < Kt.Vendors.indexOf(Number(t)) && (e = !0));
            var n = !o.purposes.length && !o.flexiblePurposes.length;
            Kt.OverriddenVendors[t] && !Kt.OverriddenVendors[t].consent && (n = !0);
            var r = !0;
            zt.legIntSettings.PAllowLI && (!o.legIntPurposes.length || Kt.OverriddenVendors[t] && !Kt.OverriddenVendors[t].legInt || (r = !1)), !n || !r || o.specialPurposes.length || o.features.length || o.specialFeatures.length || (e = !0), !l && c && o.iab2GVLVersion > a && (e = !0), e && delete i.vendors[t]
        })
    }, po.prototype.setPublisherRestrictions = function () {
        var e = Kt.Publisher;
        if (e && e.restrictions) {
            var s = this.iabStringSDK(), t = e.restrictions, a = Jt.iabData,
                l = Jt.oneTrustIABConsent.vendorList.vendors;
            Object.keys(t).forEach(function (n) {
                var r, i = t[n], e = zt.iabGroups.purposes[n];
                e && (r = {
                    description: e.description,
                    purposeId: e.id,
                    purposeName: e.name
                }), Object.keys(i).forEach(function (e) {
                    if (Jt.vendorsSetting[e]) {
                        var t = Jt.vendorsSetting[e].arrIndex;
                        1 === i[e] && -1 === l[e].purposes.indexOf(Number(n)) ? a.vendors[t].purposes.push(r) : 2 === i[e] && -1 === l[e].legIntPurposes.indexOf(Number(n)) && a.vendors[t].legIntPurposes.push(r);
                        var o = s.purposeRestriction(Number(n), i[e]);
                        Jt.tcModel.publisherRestrictions.add(Number(e), o)
                    }
                })
            })
        }
    }, po.prototype.populateVendorListTCF = function () {
        return p(this, void 0, void 0, function () {
            var t, o, n, r, i, s, a, l, c;
            return g(this, function (e) {
                switch (e.label) {
                    case 0:
                        return t = this.iabStringSDK(), o = Jt.iabData, n = io.updateCorrectIABUrl(o.globalVendorListUrl), r = !this.isIABCrossConsentEnabled(), io.checkMobileOfflineRequest(io.getBannerVersionUrl()) ? [3, 1] : (zt.mobileOnlineURL.push(n), i = t.gvl(n, Jt.gvlObj), [3, 3]);
                    case 1:
                        return a = (s = t).gvl, l = [null], [4, io.otFetchOfflineFile(Rt.getRelativeURL(n, !0))];
                    case 2:
                        i = a.apply(s, l.concat([e.sent()])), e.label = 3;
                    case 3:
                        return this.removeInActiveVendorsForTcf(i), Jt.oneTrustIABConsent.vendorList = i, this.assignIABDataWithGlobalVendorList(i), c = Jt, [4, t.tcModel(i)];
                    case 4:
                        c.tcModel = e.sent(), r && this.setPublisherRestrictions(), Jt.tcModel.cmpId = parseInt(o.cmpId), Jt.tcModel.cmpVersion = parseInt(o.cmpVersion);
                        try {
                            Jt.tcModel.consentLanguage = Jt.consentLanguage
                        } catch (e) {
                            Jt.tcModel.consentLanguage = "EN"
                        }
                        return Jt.tcModel.consentScreen = parseInt(o.consentScreen), Jt.tcModel.isServiceSpecific = r, Jt.tcModel.purposeOneTreatment = zt.purposeOneTreatment, Kt.PublisherCC ? Jt.tcModel.publisherCountryCode = Kt.PublisherCC : Jt.userLocation.country && (Jt.tcModel.publisherCountryCode = Jt.userLocation.country), Jt.cmpApi = t.cmpApi(Jt.tcModel.cmpId, Jt.tcModel.cmpVersion, r, Kt.UseGoogleVendors ? {
                            getTCData: this.addtlConsentString,
                            getInAppTCData: this.addtlConsentString
                        } : void 0), null !== this.alertBoxCloseDate() && !this.needReconsent() || this.resetTCModel(), [2]
                }
            })
        })
    }, po.prototype.resetTCModel = function () {
        var e = this.iabStringSDK(), t = Jt.tcModel.clone();
        if (t.unsetAll(), zt.legIntSettings.PAllowLI) {
            var o = zt.consentableIabGrps.filter(function (e) {
                return e.HasLegIntOptOut && e.Type === It
            }).map(function (e) {
                return parseInt(zt.iabGrpIdMap[e.CustomGroupId])
            }), n = Object.keys(Jt.vendorsSetting).filter(function (e) {
                return Jt.vendorsSetting[e].legInt
            }).map(function (e) {
                return parseInt(e)
            });
            t.purposeLegitimateInterests.set(o), t.vendorLegitimateInterests.set(n), t.isServiceSpecific && t.publisherLegitimateInterests.set(o)
        }
        Jt.cmpApi.update(e.tcString().encode(t), !0)
    }, po.prototype.addtlConsentString = function (e, t, o) {
        t && t.tcString && (t.addtlConsent = "" + Jt.addtlConsentVersion + (Jt.isAddtlConsent ? Jt.addtlVendors.vendorConsent.join(".") : "")), "function" == typeof e ? e(t, o) : console.error("__tcfapi received invalid parameters.")
    }, po.prototype.setIabData = function () {
        Jt.iabData = Nt.moduleInitializer.IabV2Data, Jt.iabData.consentLanguage = Jt.consentLanguage
    }, po.prototype.assignIABDataWithGlobalVendorList = function (r) {
        var i = Kt.OverriddenVendors;
        Jt.iabData.vendorListVersion = r.vendorListVersion, Jt.iabData.vendors = [], Object.keys(r.vendors).forEach(function (n) {
            Jt.vendorsSetting[n] = {consent: !0, legInt: !0, arrIndex: 0, specialPurposesOnly: !1};
            var e = {}, t = r.vendors[n];
            e.vendorId = n, e.vendorName = t.name, e.policyUrl = t.policyUrl, e.cookieMaxAge = Rt.calculateCookieLifespan(t.cookieMaxAgeSeconds), e.usesNonCookieAccess = t.usesNonCookieAccess, e.deviceStorageDisclosureUrl = t.deviceStorageDisclosureUrl || null;
            var o = !t.legIntPurposes.length && !t.purposes.length && t.specialPurposes.length;
            zt.legIntSettings.PAllowLI && ((!i[n] || i[n].legInt) && (i[n] || t.legIntPurposes.length) || o) || (Jt.vendorsSetting[n].legInt = !1), zt.legIntSettings.PAllowLI && o && (Jt.vendorsSetting[n].specialPurposesOnly = !0), i[n] && !i[n].consent || !i[n] && !t.purposes.length && !t.flexiblePurposes.length ? Jt.vendorsSetting[n].consent = !1 : t.purposes.length || t.flexiblePurposes.length || (Jt.vendorsSetting[n].consent = !1), e.features = t.features.map(function (e) {
                var t, o = zt.iabGroups.features[e];
                return o && (t = {description: o.description, featureId: o.id, featureName: o.name}), t
            }), e.specialFeatures = r.vendors[n].specialFeatures.reduce(function (e, t) {
                var o = zt.iabGroups.specialFeatures[t];
                return o && e.push({description: o.description, featureId: o.id, featureName: o.name}), e
            }, []), e.purposes = r.vendors[n].purposes.reduce(function (e, t) {
                var o = zt.iabGroups.purposes[t];
                return !o || i[n] && i[n].disabledCP && -1 !== i[n].disabledCP.indexOf(t) || e.push({
                    description: o.description,
                    purposeId: o.id,
                    purposeName: o.name
                }), e
            }, []), e.legIntPurposes = r.vendors[n].legIntPurposes.reduce(function (e, t) {
                var o = zt.iabGroups.purposes[t];
                return !o || i[n] && i[n].disabledLIP && -1 !== i[n].disabledLIP.indexOf(t) || e.push({
                    description: o.description,
                    purposeId: o.id,
                    purposeName: o.name
                }), e
            }, []), e.specialPurposes = t.specialPurposes.map(function (e) {
                var t, o = zt.iabGroups.specialPurposes[e];
                return o && (t = {description: o.description, purposeId: o.id, purposeName: o.name}), t
            }), Jt.iabData.vendors.push(e), Jt.vendorsSetting[n].arrIndex = Jt.iabData.vendors.length - 1
        })
    }, po.prototype.populateIABCookies = function () {
        return p(this, void 0, void 0, function () {
            return g(this, function (e) {
                switch (e.label) {
                    case 0:
                        if (!this.isIABCrossConsentEnabled()) return [3, 5];
                        e.label = 1;
                    case 1:
                        return e.trys.push([1, 3, , 4]), [4, this.setIAB3rdPartyCookie(Fe.EU_CONSENT, "", 0, !0)];
                    case 2:
                        return e.sent(), [3, 4];
                    case 3:
                        return e.sent(), this.setIABCookieData(), this.updateCrossConsentCookie(!1), [3, 4];
                    case 4:
                        return [3, 6];
                    case 5:
                        go.needReconsent() || this.setIABCookieData(), e.label = 6;
                    case 6:
                        return [2]
                }
            })
        })
    }, po.prototype.setIAB3rdPartyCookie = function (e, t, o, n) {
        var r = Kt.iabThirdPartyConsentUrl;
        try {
            if (r && document.body) return this.updateThirdPartyConsent(r, e, t, o, n);
            throw new ReferenceError
        } catch (e) {
            throw e
        }
    }, po.prototype.setIABCookieData = function () {
        Jt.oneTrustIABConsent.IABCookieValue = Ft.getCookie(Fe.EU_PUB_CONSENT)
    }, po.prototype.updateThirdPartyConsent = function (n, r, i, s, a) {
        return p(this, void 0, void 0, function () {
            var t, o;
            return g(this, function (e) {
                return t = window.location.protocol + "//" + n + "/?name=" + r + "&value=" + i + "&expire=" + s + "&isFirstRequest=" + a, document.getElementById("onetrustIabCookie") ? (document.getElementById("onetrustIabCookie").contentWindow.location.replace(t), [2]) : (Dt(o = document.createElement("iframe"), "display: none;", !0), o.id = "onetrustIabCookie", o.setAttribute("title", "OneTrust IAB Cookie"), o.src = t, document.body.appendChild(o), [2, new Promise(function (e) {
                    o.onload = function () {
                        zt.thirdPartyiFrameResolve(), zt.thirdPartyiFrameLoaded = !0, e()
                    }, o.onerror = function () {
                        throw zt.thirdPartyiFrameResolve(), zt.thirdPartyiFrameLoaded = !0, e(), new URIError
                    }
                })])
            })
        })
    }, po.prototype.setIABVendor = function (n, r) {
        if (void 0 === n && (n = !0), void 0 === r && (r = !1), Jt.iabData.vendors.forEach(function (e) {
            var t = e.vendorId;
            if (zt.legIntSettings.PAllowLI) {
                var o = void 0;
                o = r ? n : !!Jt.vendorsSetting[t].consent && n, Jt.oneTrustIABConsent.vendors.push(t.toString() + ":" + o), Jt.oneTrustIABConsent.legIntVendors.push(t.toString() + ":" + Jt.vendorsSetting[t].legInt)
            } else Jt.oneTrustIABConsent.legIntVendors = [], Jt.oneTrustIABConsent.vendors.push(t.toString() + ":" + n)
        }), Kt.UseGoogleVendors) {
            var t = Jt.addtlVendors;
            Object.keys(Jt.addtlVendorsList).forEach(function (e) {
                n && (t.vendorSelected["" + e.toString()] = !0, t.vendorConsent.push("" + e.toString()))
            })
        }
    }, po.prototype.setOrUpdate3rdPartyIABConsentFlag = function () {
        var e = this.getIABCrossConsentflagData();
        Kt.IsIabEnabled ? e && !this.needReconsent() || this.updateCrossConsentCookie(Kt.IsIabThirdPartyCookieEnabled) : e && !this.reconsentRequired() && "true" !== e || this.updateCrossConsentCookie(!1)
    }, po.prototype.isIABCrossConsentEnabled = function () {
        return "true" === this.getIABCrossConsentflagData()
    }, po.prototype.getIABCrossConsentflagData = function () {
        return Ft.readCookieParam(Fe.OPTANON_CONSENT, Ne)
    }, po.prototype.setGeolocationInCookies = function () {
        var e = Ft.readCookieParam(Fe.OPTANON_CONSENT, Oe);
        if (Jt.userLocation && !e && this.isAlertBoxClosedAndValid()) {
            var t = Jt.userLocation.country + ";" + Jt.userLocation.state;
            this.setUpdateGeolocationCookiesData(t)
        } else this.reconsentRequired() && e && this.setUpdateGeolocationCookiesData("")
    }, po.prototype.iabStringSDK = function () {
        var e = Nt.moduleInitializer.otIABModuleData;
        if (Kt.IsIabEnabled && e) return {
            gvl: e.tcfSdkRef.gvl,
            tcModel: e.tcfSdkRef.tcModel,
            tcString: e.tcfSdkRef.tcString,
            cmpApi: e.tcfSdkRef.cmpApi,
            purposeRestriction: e.tcfSdkRef.purposeRestriction
        }
    }, po.prototype.setUpdateGeolocationCookiesData = function (e) {
        Ft.writeCookieParam(Fe.OPTANON_CONSENT, Oe, e)
    }, po.prototype.reconsentRequired = function () {
        return (Nt.moduleInitializer.MobileSDK || this.awaitingReconsent()) && this.needReconsent()
    }, po.prototype.awaitingReconsent = function () {
        return "true" === Ft.readCookieParam(Fe.OPTANON_CONSENT, we)
    }, po.prototype.needReconsent = function () {
        var e = this.alertBoxCloseDate(), t = Kt.LastReconsentDate;
        return e && t && new Date(t) > new Date(e)
    }, po.prototype.updateCrossConsentCookie = function (e) {
        Ft.writeCookieParam(Fe.OPTANON_CONSENT, Ne, e)
    }, po.prototype.alertBoxCloseDate = function () {
        return Ft.getCookie(Fe.ALERT_BOX_CLOSED)
    }, po.prototype.isAlertBoxClosedAndValid = function () {
        return null !== this.alertBoxCloseDate() && !this.reconsentRequired()
    }, po.prototype.generateLegIntButtonElements = function (e, t, o) {
        void 0 === o && (o = !1);
        var n = e ? "display:none;" : "";
        return '<div class="ot-leg-btn-container" data-group-id="' + t + '" data-el-id="' + t + '-leg-out" is-vendor="' + o + '">\n                    <button class="ot-obj-leg-btn-handler ' + (e ? "ot-leg-int-enabled ot-inactive-leg-btn" : "ot-active-leg-btn") + '">\n                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">\n                            <path fill="' + Kt.pcButtonTextColor + '" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/>\n                        </svg>\n                        <span>' + (e ? zt.legIntSettings.PObjectLegIntText : zt.legIntSettings.PObjectionAppliedText) + '\n                        </span>\n                    </button>\n                    <button\n                        class="ot-remove-objection-handler"\n                            data-style="color:' + Kt.pcButtonColor + "; " + n + '"\n                    >\n                        ' + zt.legIntSettings.PRemoveObjectionText + "\n                    </button>\n                </div>"
    }, po.prototype.syncAlertBoxCookie = function (e) {
        var t = Kt.ReconsentFrequencyDays;
        Ft.setCookie(Fe.ALERT_BOX_CLOSED, e, t, !1, new Date(e))
    }, po.prototype.syncCookieExpiry = function () {
        if (Jt.syncRequired) {
            var e = Kt.ReconsentFrequencyDays, t = Ft.getCookie(Fe.ALERT_BOX_CLOSED),
                o = Ft.getCookie(Fe.OPTANON_CONSENT);
            Ft.setCookie(Fe.OPTANON_CONSENT, o, e, !1, new Date(t)), go.needReconsent() && Ft.removeAlertBox();
            var n = Ft.getCookie(Fe.EU_PUB_CONSENT);
            n && (go.isIABCrossConsentEnabled() ? Ft.removeIab2() : Ft.setCookie(Fe.EU_PUB_CONSENT, n, e, !1, new Date(t)));
            var r = Ft.getCookie(Fe.ADDITIONAL_CONSENT_STRING);
            r && Ft.setCookie(Fe.ADDITIONAL_CONSENT_STRING, r, e, !1, new Date(t))
        }
    }, po.prototype.syncOtPreviewCookie = function () {
        var e = Ft.getCookie(Fe.OT_PREVIEW);
        e && Ft.setCookie(Fe.OT_PREVIEW, e, 1, !1)
    }, po.prototype.dispatchConsentEvent = function () {
        window.dispatchEvent(new CustomEvent("OTConsentApplied", {OTConsentApplied: "yes"}))
    }, po), Co = function () {
    };
    var yo, fo = (vo.prototype.isAlwaysActiveGroup = function (e) {
        if (this.getGrpStatus(e)) {
            var t = this.getGrpStatus(e).toLowerCase();
            return e.Parent && t !== ze && (t = this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase()), t === ze
        }
        return !0
    }, vo.prototype.getGrpStatus = function (e) {
        return e && e.Status ? zt.DNTEnabled && e.IsDntEnabled ? Ye : e.Status : ""
    }, vo.prototype.getParentGroup = function (t) {
        if (t) {
            var e = Kt.Groups.filter(function (e) {
                return e.OptanonGroupId === t
            });
            return 0 < e.length ? e[0] : null
        }
        return null
    }, vo.prototype.checkIfGroupHasConsent = function (t) {
        var e = Jt.groupsConsent, o = Rt.findIndex(e, function (e) {
            return e.split(":")[0] === t.CustomGroupId
        });
        return -1 < o && "1" === e[o].split(":")[1]
    }, vo.prototype.checkIsActiveByDefault = function (e) {
        if (this.getGrpStatus(e)) {
            var t = this.getGrpStatus(e).toLowerCase();
            return e.Parent && t !== ze && (t = this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase()), t === ze || t === We || t === Ke || t === Ye && !zt.DNTEnabled
        }
        return !0
    }, vo.prototype.getGroupById = function (e) {
        for (var t = null, o = 0, n = Kt.Groups; o < n.length; o++) {
            for (var r = n[o], i = 0, s = b(r.SubGroups, [r]); i < s.length; i++) {
                var a = s[i];
                if (a.CustomGroupId === e) {
                    t = a;
                    break
                }
            }
            if (t) break
        }
        return t
    }, vo.prototype.isSoftOptInGrp = function (e) {
        if (e) {
            var t = e && !e.Parent ? e : yo.getParentGroup(e.Parent);
            return "inactive landingpage" === yo.getGrpStatus(t).toLowerCase()
        }
        return !1
    }, vo.prototype.isOptInGrp = function (e) {
        return !!e && "inactive" === yo.getGrpStatus(e).toLowerCase()
    }, vo.prototype.getParentByGrp = function (e) {
        return e.Parent ? this.getGroupById(e.Parent) : null
    }, vo.prototype.getVSById = function (e) {
        return Jt.getVendorsInDomain().get(e)
    }, vo.prototype.getGrpByVendorId = function (e) {
        var t = null;
        return Jt.getVendorsInDomain().has(e) && (t = Jt.getVendorsInDomain().get(e).groupRef), t
    }, vo);

    function vo() {
    }

    var ko, mo = (bo.prototype.ensureConsentId = function (e, t) {
        var o, n = !1, r = Ft.readCookieParam(Fe.OPTANON_CONSENT, xe, !0);
        if (o = !e && t ? (n = !0, 1) : 0, r) {
            var i = parseInt(Ft.readCookieParam(Fe.OPTANON_CONSENT, Ge), 10);
            isNaN(i) || (o = t ? ++i : i, n = !1)
        } else r = Rt.generateUUID(), Ft.writeCookieParam(Fe.OPTANON_CONSENT, xe, r);
        return Ft.writeCookieParam(Fe.OPTANON_CONSENT, Ge, o), {id: r, count: o, addDfltInt: n}
    }, bo.prototype.isAnonymousConsent = function () {
        var e = !0, t = Jt.dsParams;
        return t && t.hasOwnProperty("isAnonymous") && (e = t.isAnonymous), e
    }, bo.prototype.isAuthUsr = function (e) {
        Jt.consentPreferences ? Ft.writeCookieParam(Fe.OPTANON_CONSENT, "iType", "") : Ft.writeCookieParam(Fe.OPTANON_CONSENT, "iType", "" + z[e])
    }, bo.prototype.createConsentTxn = function (e, t, o, n) {
        void 0 === t && (t = ""), void 0 === o && (o = !1), void 0 === n && (n = !0);
        var r = this.ensureConsentId(e, n), i = Kt.ConsentIntegration, s = window.navigator.userAgent,
            a = /OneTrustBot/.test(s);
        if (i.ConsentApi && i.RequestInformation && r.id && !a) {
            var l = Nt.moduleInitializer;
            ko.noOptOutToogle = l.TenantFeatures.CookieV2NoOptOut;
            var c = Jt.bannerCloseSource;
            ko.isCloseByIconOrLink = c === v.BannerCloseButton || c === v.ContinueWithoutAcceptingButton;
            var d = {
                requestInformation: i.RequestInformation,
                identifier: r.id,
                customPayload: {Interaction: r.count, AddDefaultInteraction: r.addDfltInt},
                isAnonymous: this.isAnonymousConsent(),
                test: l.ScriptType === Qe || l.ScriptType === $e,
                purposes: this.getConsetPurposes(e),
                dsDataElements: {}
            };
            Jt.isV2Stub && (d.syncGroup = Jt.syncGrpId, "IAB2" !== zt.iabType || go.isIABCrossConsentEnabled() || (d.tcStringV2 = Ft.getCookie(Fe.EU_PUB_CONSENT)), Kt.UseGoogleVendors && (d.gacString = Ft.getCookie(Fe.ADDITIONAL_CONSENT_STRING)));
            var u = yo.getGroupById(Kt.AdvancedAnalyticsCategory);
            if (u && this.canSendAdvancedAnalytics(d.purposes, u) && (d.dsDataElements = {
                InteractionType: t,
                Country: Jt && Jt.userLocation ? Jt.userLocation.country : "",
                UserAgent: s,
                ConsentModel: Kt.ConsentModel.Name
            }), !l.MobileSDK && n && d.purposes.length) {
                var p = JSON.stringify(d);
                e && navigator.sendBeacon ? (navigator.sendBeacon(i.ConsentApi, p), go.dispatchConsentEvent()) : !o && zt.apiSource !== T.UpdateConsent && Jt.consentInteractionType === t || (Jt.isV2Stub && t && this.isAuthUsr(t), Yt.ajax({
                    url: i.ConsentApi,
                    type: "post",
                    dataType: "json",
                    contentType: "application/json",
                    data: JSON.stringify(d),
                    sync: e,
                    success: function () {
                        go.dispatchConsentEvent()
                    },
                    error: function () {
                        go.dispatchConsentEvent()
                    }
                }))
            }
            zt.pubDomainData.ConsentIntegrationData = {consentApi: i.ConsentApi, consentPayload: d}
        }
        Jt.consentInteractionType = t
    }, bo.prototype.getGrpDetails = function (e, i) {
        var s = [];
        return e.forEach(function (e) {
            var t = e.split(":"), o = t[0], n = "true" === t[1] ? "1" : "0", r = ko.getOptanonIdForIabGroup(o, i);
            s.push(r + ":" + n)
        }), s
    }, bo.prototype.getOptanonIdForIabGroup = function (e, t) {
        var o;
        return t === L.Purpose ? o = "IABV2_" + e : t === L.SpecialFeature && (o = "ISFV2_" + e), o
    }, bo.prototype.getConsetPurposes = function (r) {
        var e, t, i = this, s = [], o = [], n = Jt.oneTrustIABConsent;
        return e = n && n.purpose ? this.getGrpDetails(n.purpose, L.Purpose) : [], t = n && n.specialFeatures ? this.getGrpDetails(n.specialFeatures, L.SpecialFeature) : [], o = b(n.specialPurposes, n.features), b(Jt.groupsConsent, e, t).forEach(function (e) {
            var t = e.split(":"), o = yo.getGroupById(t[0]);
            if (o && o.PurposeId) {
                var n = i.getTransactionType(o, t, r);
                s.push({
                    Id: o.PurposeId,
                    TransactionType: n.txnType
                }), i.setVSConsentByGroup(o, n).forEach(function (e) {
                    return s.push(e)
                })
            }
        }), o.forEach(function (e) {
            e.purposeId && s.push({Id: e.purposeId, TransactionType: Me})
        }), Jt.bannerCloseSource = v.Unknown, s
    }, bo.prototype.setVSConsentByGroup = function (e, o) {
        var n = [];
        return Jt.showVendorService && e.VendorServices && e.VendorServices.forEach(function (e) {
            var t;
            t = o.useOwn ? Jt.vsConsent.get(e.CustomVendorServiceId) ? Re : qe : o.txnType, n.push({
                Id: e.PurposeId,
                TransactionType: t
            })
        }), n
    }, bo.prototype.getTransactionType = function (e, t, o) {
        var n = {txnType: Me, useOwn: !1};
        return e.Status === ze ? n.txnType = Me : e.Status === Je && ko.isCloseByIconOrLink || o ? n.txnType = Ue : e.Status === Ke && ko.isCloseByIconOrLink ? n.txnType = ko.noOptOutToogle ? je : Re : (n.useOwn = !0, n.txnType = this.getTxnType(t[1])), n
    }, bo.prototype.getTxnType = function (e) {
        return "0" === e ? qe : Re
    }, bo.prototype.isPurposeConsentedTo = function (e, t) {
        var o = [Re, Me];
        return e.some(function (e) {
            return e.Id === t.PurposeId && -1 !== o.indexOf(e.TransactionType)
        })
    }, bo.prototype.canSendAdvancedAnalytics = function (t, e) {
        var o = this;
        return "BRANCH" === e.Type || "IAB2_STACK" === e.Type ? e.SubGroups.length && e.SubGroups.every(function (e) {
            return o.isPurposeConsentedTo(t, e)
        }) : this.isPurposeConsentedTo(t, e)
    }, bo);

    function bo() {
    }

    var So, Po = (To.prototype.isIabCookieValid = function () {
        var e = null;
        switch (zt.iabType) {
            case"IAB2":
                e = Ft.getCookie("eupubconsent-v2")
        }
        return null !== e
    }, To.prototype.iabTypeIsChanged = function () {
        this.isIabCookieValid() || (Ft.removeAlertBox(), Ft.removeIab1())
    }, To.prototype.initializeIABModule = function () {
        return p(this, void 0, void 0, function () {
            return g(this, function (e) {
                switch (e.label) {
                    case 0:
                        return Kt.IsIabEnabled ? (Nt.moduleInitializer.otIABModuleData = window.otIabModule, go.setIabData(), [4, go.populateVendorListTCF()]) : [3, 2];
                    case 1:
                        return e.sent(), go.isIABCrossConsentEnabled() || this.iabTypeIsChanged(), go.populateIABCookies(), Kt.UseGoogleVendors && this.removeInActiveAddtlVendors(), [3, 3];
                    case 2:
                        Ft.removeIab1(), e.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, To.prototype.removeInActiveAddtlVendors = function () {
        var e = Kt.OverridenGoogleVendors;
        for (var t in Jt.addtlVendorsList) e && e[t] && !e[t].active && delete Jt.addtlVendorsList[t]
    }, To.prototype.getIABConsentData = function () {
        var e = Jt.oneTrustIABConsent, t = go.iabStringSDK().tcString();
        Jt.tcModel.unsetAllPurposeConsents(), Jt.tcModel.unsetAllVendorConsents(), Jt.tcModel.unsetAllVendorLegitimateInterests(), Jt.tcModel.unsetAllSpecialFeatureOptins(), Jt.tcModel.unsetAllPurposeLegitimateInterests(), Jt.tcModel.publisherConsents.empty(), Jt.tcModel.publisherLegitimateInterests.empty(), Jt.tcModel.purposeConsents.set(Rt.getActiveIdArray(e.purpose)), Jt.tcModel.publisherConsents.set(Rt.getActiveIdArray(e.purpose));
        var o = zt.legIntSettings.PAllowLI ? Rt.getActiveIdArray(e.legimateInterest) : [];
        Jt.tcModel.purposeLegitimateInterests.set(o), Jt.tcModel.publisherLegitimateInterests.set(o), Jt.tcModel.vendorConsents.set(Rt.getActiveIdArray(Rt.distinctArray(e.vendors))), zt.legIntSettings.PAllowLI && !o.length && (e.legIntVendors = []), Jt.tcModel.vendorLegitimateInterests.set(Rt.getActiveIdArray(Rt.distinctArray(e.legIntVendors))), Jt.tcModel.specialFeatureOptins.set(Rt.getActiveIdArray(e.specialFeatures));
        var n = new Date, r = new Date(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), 0, 0, 0);
        Jt.tcModel.lastUpdated = r, Jt.tcModel.created = r;
        var i = t.encode(Jt.tcModel);
        return Jt.cmpApi.update(i, !1), i
    }, To.prototype.decodeTCString = function (e) {
        return go.iabStringSDK().tcString().decode(e)
    }, To.prototype.getVendorConsentsRequestV2 = function (e) {
        var o;
        return window.__tcfapi("getInAppTCData", 2, function (e, t) {
            o = [e, t]
        }), e.apply(this, o)
    }, To.prototype.getPingRequestForTcf = function (e) {
        var t;
        return window.__tcfapi("ping", 2, function (e) {
            t = [e]
        }), e.apply(this, t)
    }, To.prototype.populateVendorAndPurposeFromCookieData = function () {
        var r = Jt.oneTrustIABConsent, e = So.decodeTCString(r.IABCookieValue), i = {}, s = {};
        zt.iabGrps.forEach(function (e) {
            e.Type === It ? i[zt.iabGrpIdMap[e.CustomGroupId]] = e : e.Type === _t && (s[zt.iabGrpIdMap[e.CustomGroupId]] = e)
        });
        var a = [];
        e.vendorConsents.forEach(function (e, t) {
            var o = e;
            Jt.vendorsSetting[t] && Jt.vendorsSetting[t].consent || !e || (a.push(t), o = !1), r.vendors.push(t + ":" + o)
        }), e.vendorConsents.unset(a), a = [], e.vendorLegitimateInterests.forEach(function (e, t) {
            var o = e;
            Jt.vendorsSetting[t] && Jt.vendorsSetting[t].legInt || !e || (a.push(t), o = !1), r.legIntVendors.push(t + ":" + o)
        }), e.vendorLegitimateInterests.unset(a), a = [], e.purposeConsents.forEach(function (e, o) {
            var t = e;
            i[o] && i[o].HasConsentOptOut || !e || (a.push(o), t = !1);
            var n = Rt.findIndex(r.purpose, function (e, t) {
                return e.split(":")[0] === o.toString()
            });
            -1 === n ? r.purpose.push(o + ":" + t) : r.purpose[n] = o + ":" + t
        }), e.purposeConsents.unset(a), e.publisherConsents.unset(a), a = [], e.specialFeatureOptins.forEach(function (e, o) {
            var t = e;
            s[o] && s[o].HasConsentOptOut || !e || (a.push(o), t = !1);
            var n = Rt.findIndex(r.specialFeatures, function (e, t) {
                return e.split(":")[0] === o.toString()
            });
            -1 === n ? r.specialFeatures.push(o + ":" + t) : r.specialFeatures[n] = o + ":" + t
        }), e.specialFeatureOptins.unset(a), a = [], e.purposeLegitimateInterests.forEach(function (e, o) {
            var t = e;
            i[o] && i[o].HasLegIntOptOut && zt.legIntSettings.PAllowLI || !e || (a.push(o), t = !1);
            var n = Rt.findIndex(r.legimateInterest, function (e, t) {
                return e.split(":")[0] === o.toString()
            });
            -1 === n ? r.legimateInterest.push(o + ":" + t) : r.legimateInterest[n] = o + ":" + t
        }), e.purposeLegitimateInterests.unset(a), e.publisherLegitimateInterests.unset(a), this.syncBundleAndStack(), e.gvl = Jt.tcModel.gvl, e.isServiceSpecific = !go.isIABCrossConsentEnabled(), Jt.tcModel = e;
        var t = go.iabStringSDK().tcString().encode(e);
        go.isAlertBoxClosedAndValid() ? (r.IABCookieValue !== t && (r.IABCookieValue = t, go.isIABCrossConsentEnabled() ? go.setIAB3rdPartyCookie(Fe.EU_CONSENT, r.IABCookieValue, Kt.ReconsentFrequencyDays, !1) : Ft.setCookie(Fe.EU_PUB_CONSENT, r.IABCookieValue, Kt.ReconsentFrequencyDays)), Jt.cmpApi.update(t, !1)) : go.resetTCModel()
    }, To.prototype.syncBundleAndStack = function () {
        var e = Ft.readCookieParam(Fe.OPTANON_CONSENT, "groups");
        Jt.groupsConsent = Rt.strToArr(e), Kt.Groups.forEach(function (t) {
            if (t.Type === Tt || t.Type === Vt) {
                var e = io.isBundleOrStackActive(t), o = Rt.findIndex(Jt.groupsConsent, function (e) {
                    return e.split(":")[0] === t.CustomGroupId
                }), n = t.CustomGroupId + ":" + Number(e);
                -1 < o ? Jt.groupsConsent[o] = n : Jt.groupsConsent.push(n)
            }
        }), Ft.writeCookieParam(Fe.OPTANON_CONSENT, "groups", Jt.groupsConsent.join(","))
    }, To.prototype.populateGoogleConsent = function () {
        if (Kt.UseGoogleVendors) {
            var e = Ft.getCookie(Fe.ADDITIONAL_CONSENT_STRING);
            e && (Jt.isAddtlConsent = !0, Jt.addtlVendors.vendorConsent = e.replace(Jt.addtlConsentVersion, "").split("."))
        }
    }, To.prototype.isInitIABCookieData = function (e) {
        return "init" === e || go.needReconsent()
    }, To.prototype.updateFromGlobalConsent = function (e) {
        var t = Jt.oneTrustIABConsent;
        t.IABCookieValue = e, t.purpose = t.purpose || [], t.specialFeatures = t.specialFeatures || [], t.legIntVendors = [], t.legimateInterest = t.legimateInterest || [], t.vendors = [], So.populateVendorAndPurposeFromCookieData(), Ft.setCookie(Fe.EU_PUB_CONSENT, "", -1)
    }, To);

    function To() {
    }

    var Ao, Lo = "groups", Io = "hosts", _o = "genVendors", Eo = "vs",
        Vo = (Bo.prototype.writeHstParam = function (e, t) {
            void 0 === t && (t = null), Ft.writeCookieParam(e, "hosts", Rt.arrToStr(t || Jt.hostsConsent))
        }, Bo.prototype.writeGenVenCookieParam = function (e) {
            var t = Kt.GeneralVendors, o = Jt.genVendorsConsent, n = "";
            t.forEach(function (e) {
                n += e.VendorCustomId + ":" + (o[e.VendorCustomId] ? "1" : "0") + ","
            }), Ft.writeCookieParam(e, "genVendors", n)
        }, Bo.prototype.writeVSConsentCookieParam = function (e) {
            var o = "";
            Jt.vsConsent.forEach(function (e, t) {
                return o += t + ":" + (e ? "1" : "0") + ","
            }), o = o.slice(0, -1), Ft.writeCookieParam(e, Eo, o)
        }, Bo.prototype.updateGroupsInCookie = function (e, t) {
            void 0 === t && (t = null), Ft.writeCookieParam(e, "groups", Rt.arrToStr(t || Jt.groupsConsent))
        }, Bo.prototype.writeGrpParam = function (e, t) {
            void 0 === t && (t = null), this.updateGroupsInCookie(e, t), Kt.IsIabEnabled && go.isAlertBoxClosedAndValid() && this.insertOrUpdateIabCookies()
        }, Bo.prototype.insertOrUpdateIabCookies = function () {
            var e = Jt.oneTrustIABConsent;
            if (e.purpose && e.vendors) {
                Jt.isAddtlConsent = Kt.UseGoogleVendors, e.IABCookieValue = So.getIABConsentData();
                var t = Kt.ReconsentFrequencyDays;
                go.isIABCrossConsentEnabled() ? go.setIAB3rdPartyCookie(Fe.EU_CONSENT, e.IABCookieValue, t, !1) : (Ft.setCookie(Fe.EU_PUB_CONSENT, e.IABCookieValue, t), Kt.UseGoogleVendors && Ft.setCookie(Fe.ADDITIONAL_CONSENT_STRING, "" + Jt.addtlConsentVersion + Jt.addtlVendors.vendorConsent.join("."), t))
            }
        }, Bo);

    function Bo() {
    }

    var wo, xo = (Oo.prototype.initGenVendorConsent = function () {
        var n = this;
        if (Kt.GenVenOptOut) {
            var e = zt.consentableGrps, t = Ft.readCookieParam(Fe.OPTANON_CONSENT, "genVendors");
            t ? (Jt.genVendorsConsent = {}, t.split(",").forEach(function (e) {
                if (e) {
                    var t = e.split(":");
                    "1" === t[1] && (Jt.genVendorsConsent[t[0]] = !0)
                }
            })) : (Jt.genVendorsConsent = {}, e.forEach(function (e) {
                var o = Jt.syncRequired ? yo.checkIfGroupHasConsent(e) : yo.checkIsActiveByDefault(e);
                e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function (e) {
                    var t = n.isGenVenPartOfAlwaysActiveGroup(e);
                    Jt.genVendorsConsent[e] = t || o
                })
            }))
        } else Jt.genVendorsConsent = {}, Ao.writeGenVenCookieParam(Fe.OPTANON_CONSENT)
    }, Oo.prototype.populateGenVendorLists = function () {
        zt.consentableGrps.forEach(function (e) {
            e.GeneralVendorsIds && (yo.isAlwaysActiveGroup(e) ? e.GeneralVendorsIds.forEach(function (e) {
                Jt.alwaysActiveGenVendors.push(e)
            }) : yo.isOptInGrp(e) ? e.GeneralVendorsIds.forEach(function (e) {
                Jt.optInGenVendors.push(e)
            }) : yo.isSoftOptInGrp(e) && e.GeneralVendorsIds.forEach(function (e) {
                Jt.optInGenVendors.includes(e) || Jt.softOptInGenVendors.push(e)
            }))
        })
    }, Oo.prototype.updateGenVendorStatus = function (e, t) {
        Jt.genVendorsConsent[e] = t || this.isGenVenPartOfAlwaysActiveGroup(e)
    }, Oo.prototype.isGenVenPartOfAlwaysActiveGroup = function (e) {
        return Jt.alwaysActiveGenVendors.includes(e)
    }, Oo);

    function Oo() {
    }

    var Go, No = (Do.prototype.synchroniseCookieGroupData = function (e) {
        var t = Ft.readCookieParam(Fe.OPTANON_CONSENT, "groups"), r = Rt.strToArr(t),
            i = Rt.strToArr(t.replace(/:0|:1/g, "")), o = go.needReconsent(), s = !1, a = !1;
        e.forEach(function (e) {
            var t = e.CustomGroupId;
            if (e.Type !== Tt && e.Type !== Vt) if (-1 === Rt.indexOf(i, t)) {
                s = !0;
                var o = yo.checkIsActiveByDefault(e);
                a = !0, r.push(t + (o ? ":1" : ":0"))
            } else if (zt.gpcEnabled && e.IsGpcEnabled && zt.gpcValueChanged) {
                var n = r.indexOf(t + ":1");
                -1 < n && (a = !0, r[n] = t + ":0")
            }
        }), a = this.updateConsentForBundleGrps(e, r, i, a, o), (a = this.removeRedundantGrpsFromCookie(r, o, a)) && (Jt.fireOnetrustGrp = !0, Ao.updateGroupsInCookie(Fe.OPTANON_CONSENT, r), Jt.syncRequired && s && Ft.removeAlertBox())
    }, Do.prototype.removeRedundantGrpsFromCookie = function (e, o, t) {
        for (var n = e.length, r = t, i = function () {
            var t = e[n].replace(/:0|:1/g, "");
            Kt.Groups.some(function (e) {
                return (!o || e.Type !== Vt) && (e.CustomGroupId === t || e.SubGroups.some(function (e) {
                    return e.CustomGroupId === t
                }))
            }) || (r = !0, e.splice(n, 1))
        }; n--;) i();
        return r
    }, Do.prototype.updateConsentForBundleGrps = function (e, s, a, t, l) {
        var c = t;
        return e.forEach(function (e) {
            var t = e.Type === Tt || e.Type === Vt, o = e.CustomGroupId;
            if (t) if (-1 === Rt.indexOf(a, o)) {
                var n = io.isBundleOrStackActive(e, s);
                c = !0, s.push(o + (n ? ":1" : ":0"))
            } else if (l && "false" === go.getIABCrossConsentflagData() || zt.gpcEnabled && zt.gpcValueChanged || Jt.syncRequired) {
                var r = io.isBundleOrStackActive(e, s), i = s.indexOf(o + ":" + (r ? "0" : "1"));
                -1 < i && (c = !0, s[i] = o + (r ? ":1" : ":0"))
            }
        }), c
    }, Do.prototype.groupHasConsent = function (t) {
        var e = Rt.strToArr(Ft.readCookieParam(Fe.OPTANON_CONSENT, "groups")), o = Rt.findIndex(e, function (e) {
            return e.split(":")[0] === t.CustomGroupId
        });
        return -1 < o && "1" === e[o].split(":")[1]
    }, Do.prototype.synchroniseCookieHostData = function () {
        var n = this, e = Ft.readCookieParam(Fe.OPTANON_CONSENT, "hosts"), r = Rt.strToArr(e),
            i = Rt.strToArr(e.replace(/:0|:1/g, "")), s = !1;
        Kt.Groups.forEach(function (e) {
            b(e.SubGroups, [e]).forEach(function (o) {
                o.Hosts.length && o.Hosts.forEach(function (e) {
                    if (-1 === Rt.indexOf(i, e.HostId)) {
                        s = !0;
                        var t = Jt.syncRequired ? n.groupHasConsent(o) : yo.checkIsActiveByDefault(o);
                        r.push(e.HostId + (t ? ":1" : ":0"))
                    }
                })
            })
        });
        for (var o = r.length, t = function () {
            var t = r[o].replace(/:0|:1/g, "");
            Kt.Groups.some(function (e) {
                return b(e.SubGroups, [e]).some(function (e) {
                    return e.Hosts.some(function (e) {
                        return e.HostId === t
                    })
                })
            }) || (s = !0, r.splice(o, 1))
        }; o--;) t();
        s && (Jt.fireOnetrustGrp = !0, Ao.writeHstParam(Fe.OPTANON_CONSENT, r))
    }, Do.prototype.toggleGroupHosts = function (e, t) {
        var o = this;
        e.Hosts.forEach(function (e) {
            o.updateHostStatus(e, t)
        })
    }, Do.prototype.toggleGroupGenVendors = function (e, t) {
        e.GeneralVendorsIds.forEach(function (e) {
            wo.updateGenVendorStatus(e, t)
        })
    }, Do.prototype.updateHostStatus = function (t, e) {
        var o = Rt.findIndex(Jt.hostsConsent, function (e) {
            return !t.isActive && t.HostId === e.replace(/:0|:1/g, "")
        });
        if (-1 < o) {
            var n = e || this.isHostPartOfAlwaysActiveGroup(t.HostId);
            Jt.hostsConsent[o] = t.HostId + ":" + (n ? "1" : "0")
        }
    }, Do.prototype.isHostPartOfAlwaysActiveGroup = function (e) {
        return Jt.oneTrustAlwaysActiveHosts.includes(e)
    }, Do);

    function Do() {
    }

    var Ho, Fo = function () {
        this.assets = function () {
            return {
                name: "otCookiePolicy",
                html: '<div class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <h5 class="cookies-used-header">Cookies Used</h5>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description"><span\n                            class="ot-mobile-border"></span>These\n                        cookies are used to make sure\n                        visitor page requests are routed to the same server in all browsing sessions.</td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n    <section class="subgroup">\n        <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n        <p class="ot-sdk-cookie-policy-group-desc">description</p>\n        <h6 class="cookies-used-header">Cookies Used</h6>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>\n\x3c!-- New Cookies policy Link--\x3e\n<div id="ot-sdk-cookie-policy-v2" class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title" class="ot-sdk-cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <section class="ot-sdk-subgroup">\n            <ul>\n                <li>\n                    <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n                    <p class="ot-sdk-cookie-policy-group-desc">description</p>\n                </li>\n            </ul>\n        </section>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="ot-table-header ot-host">Host</th>\n                    <th scope="col" class="ot-table-header ot-host-description">Host Description</th>\n                    <th scope="col" class="ot-table-header ot-cookies">Cookies</th>\n                    <th scope="col" class="ot-table-header ot-cookies-type">Type</th>\n                    <th scope="col" class="ot-table-header ot-life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="ot-host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="ot-host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="ot-cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-td-content">ARRAffinity</span>\n                    </td>\n                    <td class="ot-cookies-type" data-label="Type">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-type-td-content">1st Party</span>\n                    </td>\n                    <td class="ot-life-span-td" data-label="Life Span">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-life-span-td-content">100 days</span>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>',
                css: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-right:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:left}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;left:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-left:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;left:6px;width:40%;padding-right:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;left:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-right:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;left:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}",
                cssRTL: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-left:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:right}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;right:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-right:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;right:6px;width:40%;padding-left:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;right:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-left:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;right:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}"
            }
        }
    }, Ro = (qo.prototype.isLandingPage = function () {
        var e = Ft.readCookieParam(Fe.OPTANON_CONSENT, "landingPath");
        return !e || e === location.href
    }, qo.prototype.setLandingPathParam = function (e) {
        Ft.writeCookieParam(Fe.OPTANON_CONSENT, "landingPath", e)
    }, qo);

    function qo() {
    }

    var Mo, Uo = (jo.prototype.loadBanner = function () {
        Nt.moduleInitializer.ScriptDynamicLoadEnabled ? "complete" === document.readyState ? Qt(window).trigger("otloadbanner") : window.addEventListener("load", function (e) {
            Qt(window).trigger("otloadbanner")
        }) : "loading" !== document.readyState ? Qt(window).trigger("otloadbanner") : window.addEventListener("DOMContentLoaded", function (e) {
            Qt(window).trigger("otloadbanner")
        }), zt.pubDomainData.IsBannerLoaded = !0
    }, jo.prototype.OnConsentChanged = function (e) {
        var t = e.toString();
        Mo.consentChangedEventMap[t] || (Mo.consentChangedEventMap[t] = !0, window.addEventListener("consent.onetrust", e))
    }, jo.prototype.triggerGoogleAnalyticsEvent = function (e, t, o, n) {
        var r = !1;
        if (Nt.moduleInitializer.GATrackToggle && ("AS" === Nt.moduleInitializer.GATrackAssignedCategory || "" === Nt.moduleInitializer.GATrackAssignedCategory || window.OnetrustActiveGroups.includes("," + Nt.moduleInitializer.GATrackAssignedCategory + ",")) && (r = !0), !zt.ignoreGoogleAnlyticsCall && r) {
            void 0 !== window._gaq && window._gaq.push(["_trackEvent", e, t, o, n]), "function" == typeof window.ga && window.ga("send", "event", e, t, o, n);
            var i = window[zt.otDataLayer.name];
            !zt.otDataLayer.ignore && void 0 !== i && i && i.constructor === Array && i.push({
                event: "trackOptanonEvent",
                optanonCategory: e,
                optanonAction: t,
                optanonLabel: o,
                optanonValue: n
            })
        }
    }, jo.prototype.setAlertBoxClosed = function (e) {
        var t = (new Date).toISOString();
        e ? Ft.setCookie(Fe.ALERT_BOX_CLOSED, t, Kt.ReconsentFrequencyDays) : Ft.setCookie(Fe.ALERT_BOX_CLOSED, t, 0);
        var o = Qt(".onetrust-pc-dark-filter").el[0];
        o && "none" !== getComputedStyle(o).getPropertyValue("display") && Qt(".onetrust-pc-dark-filter").fadeOut(400)
    }, jo.prototype.updateConsentFromCookie = function (t) {
        return p(this, void 0, void 0, function () {
            return g(this, function (e) {
                return t ? (So.isInitIABCookieData(t) || So.updateFromGlobalConsent(t), "init" === t && (Ft.removeIab1(), go.isAlertBoxClosedAndValid() && go.resetTCModel(), Ft.removeAlertBox())) : (go.resetTCModel(), go.updateCrossConsentCookie(!1), go.setIABCookieData()), Mo.assetPromise.then(function () {
                    Mo.loadBanner()
                }), [2]
            })
        })
    }, jo);

    function jo() {
        var t = this;
        this.consentChangedEventMap = {}, this.assetResolve = null, this.assetPromise = new Promise(function (e) {
            t.assetResolve = e
        })
    }

    var zo, Ko = "opt-out", Wo = "OneTrust Cookie Consent", Jo = "Banner Auto Close", Yo = "Banner Close Button",
        Xo = "Banner - Continue without Accepting", Qo = "Banner - Confirm", $o = "Preferences Close Button",
        Zo = "Preference Center Opened From Banner", en = "Preference Center Opened From Button",
        tn = "Preference Center Opened From Function", on = "Preferences Save Settings",
        nn = "Vendors List Opened From Function", rn = "Floating Cookie Settings Open Button",
        sn = "Floating Cookie Settings Close Button", an = "Preferences Toggle On", ln = "Preferences Toggle Off",
        cn = "General Vendor Toggle On", dn = "General Vendor Toggle Off", un = "Host Toggle On",
        pn = "Host Toggle Off", hn = "Preferences Legitimate Interest Objection",
        gn = "Preferences Legitimate Interest Remove Objection", Cn = "IAB Vendor Toggle ON",
        yn = "IAB Vendor Toggle Off", fn = "IAB Vendor Legitimate Interest Objection",
        vn = "IAB Vendor Legitimate Interest Remove Objection", kn = "Vendor Service Toggle On",
        mn = "Vendor Service Toggle Off", bn = (Sn.prototype.initializeFeaturesAndSpecialPurposes = function () {
            Jt.oneTrustIABConsent.features = [], Jt.oneTrustIABConsent.specialPurposes = [], Kt.Groups.forEach(function (e) {
                if ("IAB2_FEATURE" === e.Type || "IAB2_SPL_PURPOSE" === e.Type) {
                    var t = {};
                    t.groupId = e.OptanonGroupId, t.purposeId = e.PurposeId, t.value = !0, "IAB2_FEATURE" === e.Type ? Jt.oneTrustIABConsent.features.push(t) : Jt.oneTrustIABConsent.specialPurposes.push(t)
                }
            })
        }, Sn.prototype.initGrpsAndHosts = function () {
            this.initializeGroupData(zt.consentableGrps), Kt.showCookieList && io.isOptOutEnabled() ? this.initializeHostData(zt.consentableGrps) : (Jt.hostsConsent = [], Ao.writeHstParam(Fe.OPTANON_CONSENT))
        }, Sn.prototype.ensureHtmlGroupDataInitialised = function () {
            if (this.initGrpsAndHosts(), Jt.showGeneralVendors && (wo.populateGenVendorLists(), wo.initGenVendorConsent()), Kt.IsIabEnabled && (this.initializeIABData(), this.initializeFeaturesAndSpecialPurposes()), Jt.vsIsActiveAndOptOut && this.initializeVendorsService(), go.setOrUpdate3rdPartyIABConsentFlag(), go.setGeolocationInCookies(), Kt.IsConsentLoggingEnabled) {
                var e = window.OneTrust.dataSubjectParams || {}, t = Ft.readCookieParam(Fe.OPTANON_CONSENT, "iType"),
                    o = "", n = !1;
                t && Jt.isV2Stub && e.id && e.token && (n = !0, o = z[t]), ko.createConsentTxn(!1, o, !1, n)
            }
        }, Sn.prototype.initializeVendorsService = function () {
            var n = go.isAlertBoxClosedAndValid(), e = Ft.readCookieParam(Fe.OPTANON_CONSENT, Eo), r = Rt.strToMap(e);
            Jt.getVendorsInDomain().forEach(function (e, t) {
                if (!r.has(t)) {
                    var o = !n && yo.checkIsActiveByDefault(e.groupRef);
                    r.set(t, o)
                }
            }), Jt.vsConsent = r
        }, Sn.prototype.initializeGroupData = function (e) {
            var t = Ft.readCookieParam(Fe.OPTANON_CONSENT, Lo);
            t ? (Go.synchroniseCookieGroupData(e), t = Ft.readCookieParam(Fe.OPTANON_CONSENT, Lo), Jt.groupsConsent = Rt.strToArr(t)) : (Jt.groupsConsent = [], e.forEach(function (e) {
                Jt.groupsConsent.push(e.CustomGroupId + (yo.checkIsActiveByDefault(e) && e.HasConsentOptOut ? ":1" : ":0"))
            }), Kt.IsConsentLoggingEnabled && window.addEventListener("beforeunload", this.consentDefaulCall))
        }, Sn.prototype.initializeHostData = function (e) {
            var t = Ft.readCookieParam(Fe.OPTANON_CONSENT, "hosts");
            if (t) Go.synchroniseCookieHostData(), t = Ft.readCookieParam(Fe.OPTANON_CONSENT, "hosts"), Jt.hostsConsent = Rt.strToArr(t), e.forEach(function (e) {
                yo.isAlwaysActiveGroup(e) && e.Hosts.length && e.Hosts.forEach(function (e) {
                    Jt.oneTrustAlwaysActiveHosts.push(e.HostId)
                })
            }); else {
                Jt.hostsConsent = [];
                var r = {};
                e.forEach(function (e) {
                    var o = yo.isAlwaysActiveGroup(e),
                        n = Jt.syncRequired ? Go.groupHasConsent(e) : yo.checkIsActiveByDefault(e);
                    e.Hosts.length && e.Hosts.forEach(function (e) {
                        if (r[e.HostId]) Go.updateHostStatus(e, n); else {
                            r[e.HostId] = !0, o && Jt.oneTrustAlwaysActiveHosts.push(e.HostId);
                            var t = Go.isHostPartOfAlwaysActiveGroup(e.HostId);
                            Jt.hostsConsent.push(e.HostId + (t || n ? ":1" : ":0"))
                        }
                    })
                })
            }
        }, Sn.prototype.consentDefaulCall = function () {
            var e = parseInt(Ft.readCookieParam(Fe.OPTANON_CONSENT, Ge), 10);
            !isNaN(e) && 0 !== e || (Mo.triggerGoogleAnalyticsEvent(Wo, "Click", "No interaction"), Kt.IsConsentLoggingEnabled && ko.createConsentTxn(!0), window.removeEventListener("beforeunload", zo.consentDefaulCall))
        }, Sn.prototype.fetchAssets = function (h) {
            return void 0 === h && (h = null), p(this, void 0, void 0, function () {
                var t, o, n, r, i, s, a, l, c, d, u, p;
                return g(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return s = Nt.moduleInitializer, a = go.isAlertBoxClosedAndValid(), l = !!h, c = zo.isFetchBanner(s.IsSuppressBanner, a), d = zo.cookieSettingBtnPresent(), i = "IAB2" === Kt.IabType ? Kt.PCShowPersistentCookiesHoverButton && (!Kt.PCenterDynamicRenderingEnable || Kt.PCenterDynamicRenderingEnable && !d) : Kt.PCShowPersistentCookiesHoverButton, u = "true" === Jt.urlParams.get(Ct), Jt.hideBanner = u, [4, Promise.all([!c || Kt.NoBanner || u ? Promise.resolve(null) : oo.getBannerContent(l, h), !s.IsSuppressPC || Jt.isPCVisible ? oo.getPcContent() : Promise.resolve(null), i ? oo.getCSBtnContent() : Promise.resolve(null), oo.getCommonStyles()])];
                        case 1:
                            return p = e.sent(), t = p[0], o = p[1], n = p[2], r = p[3], zo.fetchContent(t, o, n, r), zo.setCookieListGroupData(), [2]
                    }
                })
            })
        }, Sn.prototype.fetchContent = function (e, t, o, n) {
            if (e) {
                var r = e.html;
                Nt.fp.CookieV2SSR || (r = atob(e.html)), this.bannerGroup = {name: e.name, html: r, css: e.css}
            }
            t && (this.preferenceCenterGroup = {
                name: t.name,
                html: atob(t.html),
                css: t.css
            }, Nt.isV2Template = Kt.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(t.name)), o && (this.csBtnGroup = {
                name: "CookieSettingsButton",
                html: atob(o.html),
                css: o.css
            }), n && (this.commonStyles = n)
        }, Sn.prototype.cookieSettingBtnPresent = function () {
            return Qt("#ot-sdk-btn").length || Qt(".ot-sdk-show-settings").length || Qt(".optanon-show-settings").length
        }, Sn.prototype.isFetchBanner = function (e, t) {
            return !e || Kt.ShowAlertNotice && !t && e && !Qt("#onetrust-banner-sdk").length
        }, Sn.prototype.setCookieListGroupData = function () {
            if (!Nt.fp.CookieV2TrackingTechnologies) {
                var e = (new Fo).assets();
                zo.cookieListGroup = {name: e.name, html: e.html, css: Kt.useRTL ? e.cssRTL : e.css}
            }
        }, Sn.prototype.initializeIabPurposeConsentOnReload = function () {
            var t = this;
            zt.consentableIabGrps.forEach(function (e) {
                t.setIABConsent(e, !1), e.IsLegIntToggle = !0, t.setIABConsent(e, !1)
            })
        }, Sn.prototype.initializeIABData = function (o, n, r) {
            var i = this;
            void 0 === o && (o = !1), void 0 === n && (n = !1), void 0 === r && (r = !1);
            var e = Jt.oneTrustIABConsent;
            e.purpose = [], e.vendors = [], e.legIntVendors = [], e.specialFeatures = [], e.legimateInterest = [];
            var t = Jt.addtlVendors, s = Kt.VendorConsentModel === Ko;
            if (t.vendorConsent = [], !e.IABCookieValue || o || n || go.reconsentRequired()) {
                zt.consentableIabGrps.forEach(function (e) {
                    if (n && !r) i.setIABConsent(e, yo.isAlwaysActiveGroup(e)); else if (r) e.HasConsentOptOut && i.setIABConsent(e, !1); else {
                        var t = o && e.HasConsentOptOut;
                        i.setIABConsent(e, t), "IAB2_PURPOSE" === e.Type && (e.IsLegIntToggle = !0, i.setIABConsent(e, e.HasLegIntOptOut))
                    }
                }), Kt.IsIabEnabled && r && (Jt.oneTrustIABConsent.legimateInterest = Jt.vendors.selectedLegInt.slice());
                var a = o || !n && s;
                r && (a = s), go.setIABVendor(a, r), !go.reconsentRequired() || o || n || go.resetTCModel()
            } else this.initializeIabPurposeConsentOnReload(), So.populateGoogleConsent(), So.populateVendorAndPurposeFromCookieData()
        }, Sn.prototype.canSoftOptInInsertForGroup = function (e) {
            var t = yo.getGroupById(e);
            if (t) {
                var o = t && !t.Parent ? t : yo.getParentGroup(t.Parent);
                return "inactive landingpage" !== yo.getGrpStatus(o).toLowerCase() || !Ho.isLandingPage()
            }
        }, Sn.prototype.setIABConsent = function (e, t) {
            e.Type === _t ? this.setIabSpeciFeatureConsent(e, t) : e.IsLegIntToggle ? (this.setIabLegIntConsent(e, t), e.IsLegIntToggle = !1) : this.setIabPurposeConsent(e, t)
        }, Sn.prototype.setIabPurposeConsent = function (o, n) {
            var r = !1;
            Jt.oneTrustIABConsent.purpose = Jt.oneTrustIABConsent.purpose.map(function (e) {
                var t = e.split(":")[0];
                return t === o.IabGrpId && (e = t + ":" + n, r = !0), e
            }), r || Jt.oneTrustIABConsent.purpose.push(o.IabGrpId + ":" + n)
        }, Sn.prototype.setIabLegIntConsent = function (o, n) {
            var r = !1;
            Jt.oneTrustIABConsent.legimateInterest = Jt.oneTrustIABConsent.legimateInterest.map(function (e) {
                var t = e.split(":")[0];
                return t === o.IabGrpId && (e = t + ":" + n, r = !0), e
            }), r || Jt.oneTrustIABConsent.legimateInterest.push(o.IabGrpId + ":" + n)
        }, Sn.prototype.setIabSpeciFeatureConsent = function (o, n) {
            var r = !1;
            Jt.oneTrustIABConsent.specialFeatures = Jt.oneTrustIABConsent.specialFeatures.map(function (e) {
                var t = e.split(":")[0];
                return t === o.IabGrpId && (e = t + ":" + n, r = !0), e
            }), r || Jt.oneTrustIABConsent.specialFeatures.push(o.IabGrpId + ":" + n)
        }, Sn);

    function Sn() {
    }

    var Pn, Tn = (An.prototype.getAllowAllButton = function () {
        return Qt("#onetrust-pc-sdk #accept-recommended-btn-handler")
    }, An.prototype.getSelectedVendors = function () {
        return Qt("#onetrust-pc-sdk " + lo.P_Tgl_Cntr + " .ot-checkbox input:checked")
    }, An);

    function An() {
    }

    var Ln, In = (_n.prototype.setBannerFocus = function () {
        var e = Array.prototype.slice.call(Qt("#onetrust-banner-sdk .onetrust-vendors-list-handler").el),
            t = Array.prototype.slice.call(Qt('#onetrust-banner-sdk #onetrust-policy-text [href],#onetrust-banner-sdk #onetrust-policy-text button,#onetrust-banner-sdk #onetrust-policy-text [tabindex]:not([tabindex="-1"])').el),
            o = Array.prototype.slice.call(Qt("#onetrust-banner-sdk .ot-bnr-save-handler").el),
            n = Array.prototype.slice.call(Qt("#onetrust-banner-sdk #onetrust-pc-btn-handler").el),
            r = Array.prototype.concat.call(Array.prototype.slice.call(Qt("#onetrust-banner-sdk .category-switch-handler:not([disabled])").el), Array.prototype.slice.call(Qt("#onetrust-banner-sdk .ot-cat-lst button").el), e),
            i = Array.prototype.concat.call(t, r),
            s = Array.prototype.slice.call(Qt("#onetrust-banner-sdk .onetrust-close-btn-handler").el);
        zt.bannerName === it && (i = Array.prototype.concat.call(e, t));
        var a = Array.prototype.slice.call(Qt("#onetrust-banner-sdk #onetrust-accept-btn-handler").el),
            l = Array.prototype.slice.call(Qt("#onetrust-banner-sdk #onetrust-reject-all-handler").el),
            c = Array.prototype.concat.call(o, a, l, n);
        (zt.bannerName !== nt || Kt.IsIabEnabled) && zt.bannerName !== ot && zt.bannerName !== at || (c = Array.prototype.concat.call(n, l, a));
        var d = Array.prototype.slice.call(Qt("#onetrust-banner-sdk .ot-gv-list-handler").el);
        zt.bannerName === lt ? (i = Array.prototype.concat.call(d, i), c = Array.prototype.slice.call(Qt("#onetrust-banner-sdk #onetrust-button-group button").el)) : i = Array.prototype.concat.call(i, d), this.bannerEl = Array.prototype.concat.call(Array.prototype.slice.call(Qt("#onetrust-banner-sdk #onetrust-cookie-btn").el), i, Array.prototype.slice.call(Qt("#onetrust-banner-sdk .banner-option-input").el), c, Array.prototype.slice.call(Qt("#onetrust-banner-sdk .ot-bnr-footer-logo a").el), s), this.banner = Qt("#onetrust-banner-sdk").el[0], (Kt.BInitialFocus || Kt.BInitialFocusLinkAndButton || Kt.ForceConsent) && (Kt.BInitialFocus ? this.banner.focus() : this.bannerEl[0].focus())
    }, _n.prototype.handleBannerFocus = function (e, t) {
        var o = e.target, n = Ln.bannerEl, r = n.indexOf(o), i = n.length - 1, s = null;
        if (this.handleBannerFocusBodyReset(t, r, i)) io.resetFocusToBody(); else if (this.banner === o) s = this.handleInitialBannerFocus(t, n, i, s); else for (; !s;) {
            var a = void 0;
            0 !== (a = t ? r <= 0 ? n[i] : n[r - 1] : r === i ? n[0] : n[r + 1]).clientHeight || 0 !== a.offsetHeight ? s = a : t ? r-- : r++
        }
        s && (e.preventDefault(), s.focus())
    }, _n.prototype.handleBannerFocusBodyReset = function (e, t, o) {
        return !(Kt.ForceConsent || !Kt.BInitialFocus && !Kt.BInitialFocusLinkAndButton || !(e && 0 === t || !e && t === o))
    }, _n.prototype.handleInitialBannerFocus = function (e, t, o, n) {
        return e && Kt.ForceConsent ? n = t[o] : e || (n = t[0]), n
    }, _n.prototype.setPCFocus = function (e) {
        if (e && !(e.length <= 0)) {
            for (var t = 0; t < e.length; t++) e[t].setAttribute("tabindex", "0");
            this.setFirstAndLast(e);
            var o = Kt.ShowPreferenceCenterCloseButton,
                n = o ? this.getElementForFocus(e, Kt.PCLayout.Popup ? 2 : 1, !0) : null, r = {preventScroll: !0};
            this.firstItem ? o ? n.focus(r) : this.firstItem.focus(r) : e[0].focus(), this.firstItem && Qt(this.firstItem).on("keydown", Ln.firstItemHandler), this.lastItem && Qt(this.lastItem).on("keydown", Ln.lastItemHandler)
        }
    }, _n.prototype.setFirstAndLast = function (e) {
        this.firstItem = this.getElementForFocus(e, 0, !0), this.lastItem = this.firstItem ? this.getElementForFocus(e, e.length - 1, !1) : null
    }, _n.prototype.setLastItem = function () {
        var e = this.getPCElements(), t = this.getElementForFocus(e, e.length - 1, !1);
        t !== this.lastItem && (Qt(this.lastItem).off("keydown", Ln.lastItemHandler), this.lastItem = t, Qt(t).on("keydown", Ln.lastItemHandler))
    }, _n.prototype.getPCElements = function () {
        var e = "#onetrust-pc-sdk #close-pc-btn-handler,\n            #onetrust-pc-sdk .back-btn-handler,\n            #onetrust-pc-sdk ." + lo.P_Active_Menu + ',\n            #onetrust-pc-sdk input,\n            #onetrust-pc-sdk a,\n            #onetrust-pc-sdk [tabindex="0"] button,\n            #onetrust-pc-sdk .save-preference-btn-handler,\n            #onetrust-pc-sdk .ot-pc-refuse-all-handler,\n            #onetrust-pc-sdk #accept-recommended-btn-handler';
        return Jt.pcLayer === w.CookieList ? e += " ,#onetrust-pc-sdk " + lo.P_Content + " .powered-by-logo" : e += ",#onetrust-pc-sdk #vendor-list-save-btn .powered-by-logo", Array.prototype.slice.call(Qt(e).el)
    }, _n.prototype.getActiveTab = function () {
        return document.querySelector('#onetrust-pc-sdk .category-menu-switch-handler[tabindex="0"]')
    }, _n.prototype.getElementForFocus = function (e, t, o) {
        for (var n = e[t]; o ? n && null === n.offsetParent && t < e.length - 1 : n && null === n.offsetParent && 0 < t;) n = e[t], o ? ++t : --t;
        return n
    }, _n.prototype.firstItemHandler = function (e) {
        var t = document.getElementById("onetrust-banner-sdk");
        if (9 === e.keyCode && e.shiftKey && Ln.firstItem !== t) e.preventDefault(), Ln.lastItem.focus(); else {
            var o = "close-pc-btn-handler" === e.target.id && ("13" === e.keyCode || "32" === e.keyCode || "Enter" === e.code || "Space" === e.code);
            if (Kt.PCLayout.Tab && Jt.pcLayer === w.PrefCenterHome && !o) {
                var n = Ln.getActiveTab();
                n && (e.preventDefault(), n.focus())
            }
        }
    }, _n.prototype.lastItemHandler = function (e) {
        if (9 === e.keyCode && !e.shiftKey) {
            e.preventDefault();
            var t = Jt.pcLayer === w.VendorList || Jt.pcLayer === w.CookieList;
            Kt.PCLayout.Tab && Jt.isPCVisible && !Kt.ShowPreferenceCenterCloseButton && !t ? Ln.getActiveTab().focus() : Ln.firstItem.focus()
        }
    }, _n);

    function _n() {
        this.bannerEl = []
    }

    var En, Vn = (Bn.prototype.getAllGroupElements = function () {
        return document.querySelectorAll("div#onetrust-pc-sdk " + lo.P_Category_Grp + " " + lo.P_Category_Item + ":not(.ot-vnd-item)")
    }, Bn.prototype.toggleGrpElements = function (e, t, o, n) {
        void 0 === n && (n = !1), zt.pcName === gt && Kt.PCTemplateUpgrade && (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")));
        for (var r = e.querySelectorAll('input[class*="category-switch-handler"]'), i = 0; i < r.length; i++) {
            var s = r[i].getAttribute("id").includes("leg-out");
            n && (!n || s) || (Rt.setCheckedAttribute(null, r[i], o), r[i] && Kt.PCShowConsentLabels && (r[i].parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? Kt.PCActiveText : Kt.PCInactiveText))
        }
        zt.legIntSettings.PAllowLI && zt.legIntSettings.PShowLegIntBtn && t.Type === It && t.HasLegIntOptOut && !n && En.updateLegIntBtnElement(e.querySelector(".ot-leg-btn-container"), o)
    }, Bn.prototype.toogleAllSubGrpElements = function (e, t) {
        if (e.ShowSubgroup) {
            var o = e.CustomGroupId, n = this.getGroupElementByOptanonGroupId(o.toString());
            En.toogleSubGroupElement(n, t, e.IsLegIntToggle)
        } else this.updateHiddenSubGroupData(e, t)
    }, Bn.prototype.toogleSubGroupElement = function (e, t, o, n) {
        void 0 === o && (o = !1), void 0 === n && (n = !1), zt.pcName === gt && Kt.PCTemplateUpgrade && (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")));
        for (var r = e.querySelectorAll("li" + lo.P_Subgrp_li), i = 0; i < r.length; i++) {
            var s = yo.getGroupById(r[i].getAttribute("data-optanongroupid")), a = s.OptanonGroupId,
                l = yo.getParentGroup(s.Parent);
            zt.legIntSettings.PAllowLI && zt.legIntSettings.PShowLegIntBtn && o && s.Type === It && s.HasLegIntOptOut && l.ShowSubgroupToggle && En.updateLegIntBtnElement(r[i], t);
            var c = o ? "[id='ot-sub-group-id-" + a + "-leg-out']" : "[id='ot-sub-group-id-" + a + "']",
                d = r[i].querySelector('input[class*="cookie-subgroup-handler"]' + c);
            Rt.setCheckedAttribute(null, d, t), d && Kt.PCShowConsentLabels && (d.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = t ? Kt.PCActiveText : Kt.PCInactiveText), n || (s.IsLegIntToggle = o, En.toggleGrpStatus(s, t), s.IsLegIntToggle = !1, Go.toggleGroupHosts(s, t), Jt.genVenOptOutEnabled && Go.toggleGroupGenVendors(s, t))
        }
    }, Bn.prototype.toggleGrpStatus = function (e, t) {
        var o = e.IsLegIntToggle && e.Type === It ? t ? gn : hn : t ? an : ln;
        Mo.triggerGoogleAnalyticsEvent(Wo, o, e.GroupName + ": " + e.OptanonGroupId), t ? this.updateEnabledGroupData(e) : this.updateDisabledGroupData(e)
    }, Bn.prototype.setInputID = function (e, t, o, n, r) {
        Qt(e).attr("id", t), Qt(e).attr("name", t), Qt(e).data("optanonGroupId", o), Rt.setCheckedAttribute(null, e, n), Qt(e).attr("aria-labelledby", r)
    }, Bn.prototype.updateEnabledGroupData = function (e) {
        if (-1 < xt.indexOf(e.Type)) this.updateIabGroupData(e, !0); else {
            var t = En.getGroupVariable(), o = Rt.indexOf(t, e.CustomGroupId + ":0");
            -1 !== o && (t[o] = e.CustomGroupId + ":1")
        }
    }, Bn.prototype.updateDisabledGroupData = function (e) {
        if (-1 < xt.indexOf(e.Type)) this.updateIabGroupData(e, !1); else if (e.Status !== ze) {
            var t = En.getGroupVariable(), o = Rt.indexOf(t, e.CustomGroupId + ":1");
            -1 !== o && (t[o] = e.CustomGroupId + ":0")
        }
    }, Bn.prototype.updateIabGroupData = function (e, t) {
        if (e.Type === _t) this.updateIabSpecialFeatureData(e.IabGrpId, t); else {
            var o = e.IsLegIntToggle ? Jt.vendors.selectedLegInt : Jt.vendors.selectedPurpose;
            this.updateIabPurposeData(e.IabGrpId, t, o)
        }
    }, Bn.prototype.isAllSubgroupsDisabled = function (e) {
        return !e.SubGroups.some(function (e) {
            return En.isGroupActive(e)
        })
    }, Bn.prototype.isAllSubgroupsEnabled = function (e) {
        return !e.SubGroups.some(function (e) {
            return En.IsGroupInActive(e)
        })
    }, Bn.prototype.toggleGroupHtmlElement = function (e, t, o) {
        if (zt.legIntSettings.PAllowLI && zt.legIntSettings.PShowLegIntBtn && e.Type === It && e.HasLegIntOptOut) {
            var n = document.querySelector("[data-el-id=" + t + "]");
            n && this.updateLegIntBtnElement(n, o)
        }
        var r = Qt("#ot-group-id-" + t).el[0];
        Rt.setCheckedAttribute(null, r, o), r && Kt.PCShowConsentLabels && (r.parentElement.querySelector(".ot-label-status").innerHTML = o ? Kt.PCActiveText : Kt.PCInactiveText)
    }, Bn.prototype.updateLegIntBtnElement = function (e, t) {
        var o = zt.legIntSettings, n = e.querySelector(".ot-obj-leg-btn-handler"),
            r = e.querySelector(".ot-remove-objection-handler");
        t ? (n.classList.add("ot-inactive-leg-btn"), n.classList.add("ot-leg-int-enabled"), n.classList.remove("ot-active-leg-btn")) : (n.classList.add("ot-active-leg-btn"), n.classList.remove("ot-inactive-leg-btn"), n.classList.remove("ot-leg-int-enabled")), n.querySelector("span").innerText = t ? o.PObjectLegIntText : o.PObjectionAppliedText, Dt(r, "display: " + (t ? "none" : "inline-block") + ";", !0)
    }, Bn.prototype.isGroupActive = function (e) {
        return -1 < xt.indexOf(e.Type) ? -1 !== this.isIabPurposeActive(e) : -1 !== Yt.inArray(e.CustomGroupId + ":1", En.getGroupVariable())
    }, Bn.prototype.safeFormattedGroupDescription = function (e) {
        return e && e.GroupDescription ? e.GroupDescription.replace(/\r\n/g, "<br>") : ""
    }, Bn.prototype.canInsertForGroup = function (e, t) {
        void 0 === t && (t = !1);
        var o, n = null != e && void 0 !== e, r = Ft.readCookieParam(Fe.OPTANON_CONSENT, "groups"),
            i = Jt.groupsConsent.join(","), s = Ft.readCookieParam(Fe.OPTANON_CONSENT, "hosts"),
            a = Jt.hostsConsent.join(",");
        if (t) return !0;
        r === i && s === a || zo.ensureHtmlGroupDataInitialised();
        var l = [];
        if (Jt.showGeneralVendors) for (var c = 0, d = Object.entries(Jt.genVendorsConsent); c < d.length; c++) {
            var u = d[c], p = u[0], h = u[1];
            l.push(p + ":" + (h ? "1" : "0"))
        }
        Jt.showVendorService && Jt.vsConsent.forEach(function (e, t) {
            l.push(t + ":" + (e ? "1" : "0"))
        });
        var g = Jt.groupsConsent.concat(Jt.hostsConsent).concat(l);
        o = Rt.contains(g, e + ":1");
        var C = this.doesHostExist(e), y = this.doesGroupExist(e), f = !1;
        Jt.showGeneralVendors ? f = this.doesGenVendorExist(e) : Jt.showVendorService && (f = this.doesVendorServiceExist(e));
        var v = !(!C && !f) || o && zo.canSoftOptInInsertForGroup(e);
        return !(!n || !(o && v || !y && !C && !f))
    }, Bn.prototype.setAllowAllButton = function () {
        var t = 0, e = Kt.Groups.some(function (e) {
            if (-1 === Ot.indexOf(e.Type)) return En.IsGroupInActive(e) && t++, e.SubGroups.some(function (e) {
                return En.IsGroupInActive(e)
            }) && t++, 1 <= t
        }), o = Pn.getAllowAllButton();
        return e ? o.show("inline-block") : o.hide(), Ln.lastItem && Ln.setLastItem(), e
    }, Bn.prototype.isAnyGroupOptedOut = function () {
        for (var e = !1, t = 0, o = Kt.Groups; t < o.length; t++) {
            var n = o[t];
            if (!0 === En.IsGroupInActive(n)) {
                e = !0;
                break
            }
        }
        return e
    }, Bn.prototype.getGroupVariable = function () {
        return Jt.groupsConsent
    }, Bn.prototype.IsGroupInActive = function (e) {
        return -1 < xt.indexOf(e.Type) ? -1 === this.isIabPurposeActive(e) : !(-1 < Ot.indexOf(e.Type)) && -1 === Yt.inArray(e.CustomGroupId + ":1", En.getGroupVariable())
    }, Bn.prototype.updateIabPurposeData = function (t, e, o) {
        var n = Rt.findIndex(o, function (e) {
            return e.split(":")[0] === t
        });
        o[n = -1 === n ? Number(t) : n] = t + ":" + e
    }, Bn.prototype.updateIabSpecialFeatureData = function (t, e) {
        var o = Rt.findIndex(Jt.vendors.selectedSpecialFeatures, function (e) {
            return e.split(":")[0] === t
        });
        o = -1 === o ? Number(t) : o, Jt.vendors.selectedSpecialFeatures[o] = t + ":" + e
    }, Bn.prototype.getGroupElementByOptanonGroupId = function (e) {
        return document.querySelector("#onetrust-pc-sdk " + lo.P_Category_Grp + " " + lo.P_Category_Item + '[data-optanongroupid=\n            "' + e + '"]')
    }, Bn.prototype.updateHiddenSubGroupData = function (e, t) {
        e.SubGroups.forEach(function (e) {
            En.toggleGrpStatus(e, t), Go.toggleGroupHosts(e, t), Jt.genVenOptOutEnabled && Go.toggleGroupGenVendors(e, t)
        })
    }, Bn.prototype.isIabPurposeActive = function (e) {
        var t;
        return t = e.Type === _t ? Jt.vendors.selectedSpecialFeatures : e.IsLegIntToggle ? Jt.vendors.selectedLegInt : Jt.vendors.selectedPurpose, Yt.inArray(e.IabGrpId + ":true", t)
    }, Bn.prototype.doesGroupExist = function (e) {
        return !!yo.getGroupById(e)
    }, Bn.prototype.doesHostExist = function (e) {
        var t = Jt.hostsConsent;
        return -1 !== t.indexOf(e + ":0") || -1 !== t.indexOf(e + ":1")
    }, Bn.prototype.doesGenVendorExist = function (t) {
        return !!Kt.GeneralVendors && !!Kt.GeneralVendors.find(function (e) {
            return e.VendorCustomId === t
        })
    }, Bn.prototype.doesVendorServiceExist = function (e) {
        return Jt.getVendorsInDomain().has(e)
    }, Bn);

    function Bn() {
    }

    var wn, xn = (On.prototype.updateFilterSelection = function (e) {
        var t, o;
        void 0 === e && (e = !1), o = e ? (t = Jt.filterByCategories, "data-optanongroupid") : (t = Jt.filterByIABCategories, "data-purposeid");
        for (var n = Qt("#onetrust-pc-sdk .category-filter-handler").el, r = 0; r < n.length; r++) {
            var i = n[r].getAttribute(o), s = -1 < t.indexOf(i);
            Rt.setCheckedAttribute(null, n[r], s)
        }
    }, On.prototype.cancelHostFilter = function () {
        for (var e = Qt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-optanongroupid"), n = 0 <= Jt.filterByCategories.indexOf(o);
            Rt.setCheckedAttribute(null, e[t], n)
        }
    }, On.prototype.updateHostFilterList = function () {
        for (var e = Qt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-optanongroupid");
            if (e[t].checked && Jt.filterByCategories.indexOf(o) < 0) Jt.filterByCategories.push(o); else if (!e[t].checked && -1 < Jt.filterByCategories.indexOf(o)) {
                var n = Jt.filterByCategories;
                Jt.filterByCategories.splice(n.indexOf(o), 1)
            }
        }
        return Jt.filterByCategories
    }, On.prototype.InitializeHostList = function () {
        Jt.hosts.hostTemplate = Qt(lo.P_Vendor_List + " " + lo.P_Host_Cntr + " li").el[0].cloneNode(!0), Jt.hosts.hostCookieTemplate = Qt(lo.P_Vendor_List + " " + lo.P_Host_Cntr + " " + lo.P_Host_Opt + " li").el[0].cloneNode(!0)
    }, On.prototype.getCookiesForGroup = function (t) {
        var o = [], n = [];
        return t.FirstPartyCookies.length && t.FirstPartyCookies.forEach(function (e) {
            n.push(r(r({}, e), {groupName: t.GroupName}))
        }), t.Hosts.length && t.Hosts.forEach(function (e) {
            o.push(r(r({}, e), {
                isActive: "always active" === yo.getGrpStatus(t).toLowerCase(),
                groupName: t.GroupName,
                Type: X.Host
            }))
        }), {firstPartyCookiesList: n, thirdPartyCookiesList: o}
    }, On.prototype.reactivateSrcTag = function (e) {
        var t = ["src"];
        e.setAttribute(t[0], e.getAttribute("data-" + t[0])), e.removeAttribute("data-src")
    }, On.prototype.reactivateScriptTag = function (e) {
        var t = e.parentNode, o = document.createElement(e.tagName);
        o.innerHTML = e.innerHTML;
        var n = e.attributes;
        if (0 < n.length) for (var r = 0; r < n.length; r++) "type" !== n[r].name ? o.setAttribute(n[r].name, n[r].value, !0) : o.setAttribute("type", "text/javascript", !0);
        t.appendChild(o), t.removeChild(e)
    }, On.prototype.reactivateTag = function (e, t) {
        var o, n = 0 <= e.className.indexOf("ot-vscat"), r = 0 <= e.className.indexOf("optanon-category");
        n && r ? o = this.getGroupElements(e.className, Jt.showVendorService) : n ? Jt.showVendorService ? o = this.getGroupElements(e.className, !0) : this.unBlockTag(t, e) : r && (Jt.showVendorService ? this.unBlockTag(t, e) : o = this.getGroupElements(e.className, !1));
        var i = !0;
        if (o && 0 < o.length) {
            for (var s = 0; s < o.length; s++) if (!En.canInsertForGroup(o[s].trim())) {
                i = !1;
                break
            }
            i && this.unBlockTag(t, e)
        }
    }, On.prototype.unBlockTag = function (e, t) {
        e ? this.reactivateSrcTag(t) : this.reactivateScriptTag(t)
    }, On.prototype.getGroupElements = function (e, t) {
        return t ? e.match(/ot-vscat(-[a-zA-Z0-9,]+)+($|\s)/)[0].split(/ot-vscat-/i)[1].split("-") : e.match(/optanon-category(-[a-zA-Z0-9,]+)+($|\s)/)[0].split(/optanon-category-/i)[1].split("-")
    }, On.prototype.substitutePlainTextScriptTags = function () {
        var t = this, e = [].slice.call(document.querySelectorAll('script[class*="optanon-category"]')),
            o = [].slice.call(document.querySelectorAll('*[class*="optanon-category"]'));
        e = Array.from(new Set(e.concat([].slice.call(document.querySelectorAll('script[class*="ot-vscat"]') || [])))), o = Array.from(new Set(o.concat([].slice.call(document.querySelectorAll('*[class*="ot-vscat"]') || [])))), Array.prototype.forEach.call(o, function (e) {
            "SCRIPT" !== e.tagName && e.hasAttribute("data-src") && t.reactivateTag(e, !0)
        }), Array.prototype.forEach.call(e, function (e) {
            e.hasAttribute("type") && "text/plain" === e.getAttribute("type") && t.reactivateTag(e, !1)
        })
    }, On);

    function On() {
    }

    var Gn, Nn = (Dn.prototype.getSearchQuery = function (e) {
        var t = this, o = e.trim().split(/\s+/g);
        return new RegExp(o.map(function (e) {
            return t.escapeRegExp(e)
        }).join("|") + "(.+)?", "gi")
    }, Dn.prototype.escapeRegExp = function (e) {
        return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
    }, Dn.prototype.setGlobalFilteredList = function (e) {
        return Jt.currentGlobalFilteredList = e
    }, Dn.prototype.filterList = function (t, e, n) {
        var o = n && n.length;
        if ("" === t && !o) return this.setGlobalFilteredList(e);
        if (o) {
            var r = Qt("#onetrust-pc-sdk " + lo.P_Fltr_Options + " input").el.length, i = [], s = !1;
            r !== n.length ? e.forEach(function (o) {
                s = !0, o.vendorName && n.forEach(function (e) {
                    var t = parseInt(zt.iabGrpIdMap[e]);
                    -1 < e.indexOf("IFEV2_") ? (o.features || []).forEach(function (e) {
                        e.featureId === t && i.push(o)
                    }) : -1 < e.indexOf("ISFV2_") ? o.specialFeatures.forEach(function (e) {
                        e.featureId === t && i.push(o)
                    }) : -1 < e.indexOf("ISPV2_") ? (o.specialPurposes || []).forEach(function (e) {
                        e.purposeId === t && i.push(o)
                    }) : (o.purposes.forEach(function (e) {
                        e.purposeId === t && i.push(o)
                    }), o.legIntPurposes.forEach(function (e) {
                        e.purposeId === t && i.push(o)
                    }))
                })
            }) : i = e, s && (i = i.filter(function (e, t, o) {
                return o.indexOf(e) === t
            })), this.setGlobalFilteredList(i)
        }
        return "" === t ? Jt.currentGlobalFilteredList : Jt.currentGlobalFilteredList.filter(function (e) {
            if (e.vendorName) return e.vendorName.toLowerCase().includes(t.toLowerCase())
        })
    }, Dn.prototype.loadVendorList = function (e, t) {
        void 0 === e && (e = "");
        var o = Jt.vendors;
        Jt.currentGlobalFilteredList = o.list, e ? (o.searchParam = e, Jt.filterByIABCategories = [], wn.updateFilterSelection(!1)) : o.searchParam !== e ? o.searchParam = "" : t = Jt.filterByIABCategories;
        var n = this.filterList(o.searchParam, o.list, t);
        Qt("#onetrust-pc-sdk " + lo.P_Vendor_Content).el[0].scrollTop = 0, this.initVendorsData(e, n)
    }, Dn.prototype.searchVendors = function (e, t, o, n) {
        if (n) {
            var r = this.getSearchQuery(n), i = 0;
            for (var s in t) if (s) {
                var a = o === re.GoogleVendor ? s : t[s].VendorCustomId,
                    l = Qt("" + e.vendorAccBtn + a).el[0].parentElement;
                r.lastIndex = 0, r.test(t[s][e.name]) ? (Dt(l, this._displayNull, !0), i++) : Dt(l, "display: none;", !0)
            }
            0 === i ? (Qt(e.accId).hide(), o === re.GoogleVendor ? this.hasGoogleVendors = !1 : this.hasGenVendors = !1) : (o === re.GoogleVendor ? this.hasGoogleVendors = !0 : this.hasGenVendors = !0, Qt(e.accId).show()), this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, n)
        } else for (var c = Qt(" " + e.venListId + ' li[style^="display: none"]').el, d = 0; d < c.length; d++) Dt(c[d], this._displayNull, !0);
        var u = Qt("#onetrust-pc-sdk " + e.selectAllEvntHndlr).el[0];
        document.querySelector(e.venListId + ' li:not([style^="display: none"]) ' + e.ctgl + " > input[checked]") ? Rt.setCheckedAttribute("", u, !0) : Rt.setCheckedAttribute("", u, !1), document.querySelector(e.venListId + ' li:not([style^="display: none"]) ' + e.ctgl + " > input:not([checked])") ? u.parentElement.classList.add("line-through") : u.parentElement.classList.remove("line-through")
    }, Dn.prototype.initGoogleVendors = function () {
        this.populateAddtlVendors(Jt.addtlVendorsList), this.venAdtlSelAllTglEvent()
    }, Dn.prototype.initGenVendors = function () {
        this.populateGeneralVendors(), Kt.GenVenOptOut && Kt.GeneralVendors && Kt.GeneralVendors.length && this.genVenSelectAllTglEvent()
    }, Dn.prototype.resetAddtlVendors = function () {
        Gn.searchVendors(Gn.googleSearchSelectors, Jt.addtlVendorsList, re.GoogleVendor), this.showConsentHeader()
    }, Dn.prototype.venAdtlSelAllTglEvent = function () {
        Gn.selectAllEventHandler({
            vendorsList: '#ot-addtl-venlst li:not([style^="display: none"]) .ot-ven-adtlctgl input',
            selAllCntr: "#onetrust-pc-sdk #ot-selall-adtlvencntr",
            selAllChkbox: "#onetrust-pc-sdk #ot-selall-adtlven-handler"
        })
    }, Dn.prototype.genVenSelectAllTglEvent = function () {
        var e = {
            vendorsList: lo.P_Gven_List + ' li:not([style^="display: none"]) .ot-ven-gvctgl input',
            selAllCntr: "#onetrust-pc-sdk #ot-selall-gnvencntr",
            selAllChkbox: "#onetrust-pc-sdk #ot-selall-gnven-handler"
        };
        Gn.selectAllEventHandler(e)
    }, Dn.prototype.selectAllEventHandler = function (e) {
        for (var t = Qt(e.vendorsList).el, o = Qt(e.selAllCntr).el[0], n = Qt(e.selAllChkbox).el[0], r = !0, i = 0; i < t.length; i++) {
            if (!t[i].checked) {
                r = !1;
                break
            }
            r = !0
        }
        o && (r ? o.classList.remove("line-through") : o.classList.add("line-through")), n.checked = !0;
        for (var s = 0; s < t.length && !t[s].checked; s++) s !== t.length - 1 || t[s].checked || (n.checked = !1);
        Rt.setCheckedAttribute("", n, n.checked)
    }, Dn.prototype.vendorLegIntToggleEvent = function () {
        for (var e = Qt(lo.P_Vendor_Container + ' li:not([style^="display: none"]) .' + lo.P_Ven_Ltgl + " input").el, t = Qt("#onetrust-pc-sdk #" + lo.P_Sel_All_Vendor_Leg_El).el[0], o = Qt("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0], n = !0, r = 0; r < e.length; r++) {
            if (!e[r].checked) {
                n = !1;
                break
            }
            n = !0
        }
        n ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
        for (var i = 0; i < e.length && !e[i].checked; i++) i !== e.length - 1 || e[i].checked || (o.checked = !1);
        Rt.setCheckedAttribute("", o, o.checked)
    }, Dn.prototype.vendorsListEvent = function () {
        for (var e = Qt(lo.P_Vendor_Container + ' li:not([style^="display: none"]) .' + lo.P_Ven_Ctgl + " input").el, t = Qt("#onetrust-pc-sdk #" + lo.P_Sel_All_Vendor_Consent_El).el[0], o = Qt("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0], n = !0, r = 0; r < e.length; r++) {
            if (!e[r].checked) {
                n = !1;
                break
            }
            n = !0
        }
        n ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
        for (var i = 0; i < e.length && !e[i].checked; i++) i !== e.length - 1 || e[i].checked || (o.checked = !1);
        Rt.setCheckedAttribute("", o, o.checked)
    }, Dn.prototype.showEmptyResults = function (e, t, o) {
        void 0 === o && (o = !1);
        var n = Qt("#onetrust-pc-sdk #no-results");
        e ? this.setNoResultsContent(t, o) : (Qt("#onetrust-pc-sdk " + lo.P_Vendor_Content).removeClass("no-results"), n.length && n.remove())
    }, Dn.prototype.playSearchStatus = function (e) {
        var t = e ? document.querySelectorAll(lo.P_Host_Cntr + " > li") : document.querySelectorAll(lo.P_Vendor_Container + ' li:not([style$="none;"]),' + lo.P_Gven_List + ' li:not([style$="none;"])'),
            o = t.length, n = Qt('#onetrust-pc-sdk [role="status"]');
        o ? n.text(t.length + " " + (e ? "host" : "vendor") + (1 < o ? "s" : "") + " returned.") : n.el[0].textContent = ""
    }, Dn.prototype.setNoResultsContent = function (e, t) {
        void 0 === t && (t = !1);
        var o = Qt("#onetrust-pc-sdk #no-results").el[0];
        if (!o) {
            var n = Gn.getNoResultsFound(t), r = document.createElement("div"), i = document.createElement("p"),
                s = document.createTextNode(n), a = document.createElement("span");
            return r.id = "no-results", a.id = "user-text", a.innerText = e, i.appendChild(a), i.appendChild(s), r.appendChild(i), Qt("#onetrust-pc-sdk " + lo.P_Vendor_Content).addClass("no-results"), Qt("#vendor-search-handler").el[0].setAttribute("aria-describedby", r.id), Qt("#onetrust-pc-sdk " + lo.P_Vendor_Content).append(r)
        }
        o.querySelector("span").innerText = e
    }, Dn.prototype.searchHostList = function (e) {
        var t = {}, o = [];
        Jt.showTrackingTech ? (t = Jt.currentTrackingTech, e && (t = Gn.getFilteredAdditionaTechtData(e, t)), o = t.Cookies) : (o = Jt.currentGlobalFilteredList, e && (o = this.searchList(e, o))), this.initHostData({
            searchString: e,
            cookiesList: o,
            addTechData: t
        })
    }, Dn.prototype.searchList = function (e, t) {
        var o = this.getSearchQuery(e);
        return t.filter(function (e) {
            return o.lastIndex = 0, o.test(e.DisplayName || e.HostName)
        })
    }, Dn.prototype.setListSearchValues = function (e) {
        var t = Kt.PCenterVendorSearchAriaLabel, o = Kt.PCenterVendorListSearch, n = Kt.PCenterVendorsListText;
        e === Le.cookies && (t = Kt.PCenterCookieSearchAriaLabel, o = Kt.PCenterCookieListSearch, n = Kt.PCenterCookiesListText), Jt.cookieListType !== $.HostAndGenVen && Jt.cookieListType !== $.Host || !Jt.showTrackingTech || (n = Kt.AdditionalTechnologiesConfig.PCTrackingTechTitle), document.querySelector("#onetrust-pc-sdk " + lo.P_Vendor_Title).innerText = n;
        var r = Qt("#onetrust-pc-sdk " + lo.P_Vendor_Search_Input);
        r.el[0].placeholder = o, r.attr("aria-label", t)
    }, Dn.prototype.initHostData = function (e) {
        var t = e.searchString, o = e.cookiesList, n = e.addTechData;
        Jt.optanonHostList = o;
        var r = !1;
        this.setBackBtnTxt(), Qt(lo.P_Vendor_List + " #select-all-text-container p").html(Kt.PCenterAllowAllConsentText);
        var i = Gn.getHostParentContainer(), s = o && 0 === o.length;
        Jt.showTrackingTech && (s = 0 === n.LocalStorages.length && 0 === n.SessionStorages.length && (0 === n.Cookies.length || 0 === n.Cookies[0].Cookies.length)), this.showEmptyResults(s, t, !0), this.setHostListSearchValues(), Qt("#filter-btn-handler").el[0].setAttribute(this.ARIA_LABEL_ATTRIBUTE, Kt.PCenterCookieListFilterAria), Qt("#filter-btn-handler title").html(Kt.PCenterCookieListFilterAria), Nt.isV2Template && Qt("#ot-sel-blk span:first-child").html(Kt.PCenterAllowAllConsentText || Kt.ConsentText);
        for (var a = document.createDocumentFragment(), l = 0; l < o.length; l++) {
            var c = Jt.hosts.hostTemplate.cloneNode(!0), d = o[l].DisplayName || o[l].HostName;
            this.createHostAccordions(d, c, l), r = this.createHostCheckboxes(d, o, l, c, r), d = this.populateHostDataIntoDOMElements(c, o, d, l, a)
        }
        Gn.setCookiesInsideHostContainer(i, a, n);
        var u = 1 === o.length && o[0].HostName === Kt.PCFirstPartyCookieListText;
        if (io.isOptOutEnabled() && !u) {
            Rt.setDisabledAttribute("#onetrust-pc-sdk #select-all-hosts-groups-handler", null, !r);
            for (var p = Qt("#onetrust-pc-sdk " + lo.P_Host_Cntr + " .ot-host-tgl input").el, h = 0; h < p.length; h++) p[h].addEventListener("click", this.hostsListEvent);
            Qt("#onetrust-pc-sdk " + lo.P_Select_Cntr).removeClass("ot-hide"), this.hostsListEvent()
        } else Qt("#onetrust-pc-sdk " + lo.P_Select_Cntr).addClass("ot-hide")
    }, Dn.prototype.setCookiesInsideHostContainer = function (e, t, o) {
        if (Jt.showTrackingTech && o) {
            var n = Gn.getAdditionalTechnologiesHtml(o);
            if (0 < n.children.length) {
                var r = n.querySelector("." + this.TECH_COOKIES_SELECTOR + " .ot-acc-txt");
                if (r) {
                    var i = e.querySelector("ul" + lo.P_Host_Cntr);
                    i.appendChild(t), r.appendChild(i)
                }
                e.appendChild(n)
            }
        } else e.appendChild(t)
    }, Dn.prototype.getHostParentContainer = function () {
        var e = null;
        return Jt.showTrackingTech ? (e = document.querySelector("#onetrust-pc-sdk " + lo.P_Vendor_Content + " .ot-sdk-column"), Gn.removeTrackingTechAccorions()) : (e = document.querySelector("#onetrust-pc-sdk " + lo.P_Vendor_Content + " ul" + lo.P_Host_Cntr)).innerHTML = "", e
    }, Dn.prototype.removeTrackingTechAccorions = function () {
        var e = document.querySelector("#onetrust-pc-sdk " + lo.P_Vendor_Content + " .ot-sdk-column"),
            t = e.querySelector("." + this.TECH_COOKIES_SELECTOR + " ul" + lo.P_Host_Cntr);
        if (t ? (t.innerHTML = "", e.appendChild(t)) : (t = e.querySelector("ul" + lo.P_Host_Cntr)).innerHTML = "", e) for (var o = e.querySelectorAll(".ot-add-tech"), n = o.length - 1; 0 <= n; n--) {
            var r = o.item(n);
            e.removeChild(r)
        }
    }, Dn.prototype.setHostListSearchValues = function () {
        var e = zt.pcName;
        Kt.GeneralVendorsEnabled && (Nt.isV2Template || e !== gt) && this.setListSearchValues(Le.vendors), Kt.GeneralVendorsEnabled || !Nt.isV2Template && e === gt || this.setListSearchValues(Le.cookies)
    }, Dn.prototype.createHostAccordions = function (e, t, o) {
        var n = t.querySelector("." + lo.P_Host_Bx);
        n && Rt.setHtmlAttributes(n, {
            id: "host-" + o,
            name: "host-" + o,
            "aria-label": e + " " + Kt.PCViewCookiesText,
            "aria-controls": "ot-host-acc-txt-" + o
        });
        var r = t.querySelector(lo.P_Acc_Txt);
        r && Rt.setHtmlAttributes(r, {id: "ot-host-acc-txt-" + o, role: "region", "aria-labelledby": n.id})
    }, Dn.prototype.createHostCheckboxes = function (e, t, o, n, r) {
        var i = io.isOptOutEnabled(), s = Nt.isV2Template, a = zt.pcName;
        if (!i || t[o].isFirstParty) {
            var l = n.querySelector(".ot-host-tgl");
            l && l.parentElement.removeChild(l)
        } else {
            var c = void 0;
            s ? ((c = ho.chkboxEl.cloneNode(!0)).classList.add("ot-host-tgl"), c.querySelector("input").classList.add("host-checkbox-handler"), a === gt ? n.querySelector(lo.P_Host_Hdr).insertAdjacentElement("beforebegin", c) : n.querySelector(lo.P_Tgl_Cntr).insertAdjacentElement("beforeend", c)) : c = n.querySelector(".ot-host-tgl"), Rt.setHtmlAttributes(c.querySelector("input"), {
                id: "ot-host-chkbox-" + o,
                "aria-label": e,
                hostId: t[o].HostId,
                ckType: t[o].Type
            }), c.querySelector("label").setAttribute("for", "ot-host-chkbox-" + o), (t[o].Type === X.GenVendor ? Jt.genVendorsConsent[t[o].HostId] : -1 !== Jt.hostsConsent.indexOf(t[o].HostId + ":1")) ? (Rt.setCheckedAttribute(null, c.querySelector("input"), !0), t[o].isActive ? Rt.setDisabledAttribute(null, c.querySelector("input"), !0) : r = r || !0) : (r = !0, Rt.setCheckedAttribute(null, c.querySelector("input"), !1)), c.querySelector(lo.P_Label_Txt).innerText = e
        }
        return r
    }, Dn.prototype.populateHostDataIntoDOMElements = function (o, n, e, r, t) {
        var i, s = this, a = Nt.isV2Template, l = zt.pcName;
        if (Kt.PCAccordionStyle === J.PlusMinus) o.querySelector(lo.P_Acc_Header).insertAdjacentElement("afterbegin", ho.plusMinusEl.cloneNode(!0)); else if (a) {
            var c = ho.arrowEl.cloneNode(!0);
            l === gt ? o.querySelector(lo.P_Host_View_Cookies).insertAdjacentElement("afterend", c) : o.querySelector(lo.P_Tgl_Cntr).insertAdjacentElement("beforeend", c)
        }
        Kt.AddLinksToCookiepedia && !n[r].isFirstParty && (e = '\n                            <a  class="cookie-label"\n                                href="http://cookiepedia.co.uk/host/' + n[r].HostName + '"\n                                rel="noopener"\n                                target="_blank"\n                            >\n                                ' + e + '&nbsp;<span class="ot-scrn-rdr">' + Kt.NewWinTxt + "</span>\n                            </a>\n                        "), o.querySelector(lo.P_Host_Title).innerHTML = e, o.querySelector(lo.P_Host_Desc).innerHTML = n[r].Description, n[r].PrivacyPolicy && Kt.pcShowCookieHost && o.querySelector(lo.P_Host_Desc).insertAdjacentHTML("afterend", '<a href="' + n[r].PrivacyPolicy + '" rel="noopener" target="_blank">' + (a ? Kt.PCGVenPolicyTxt : Kt.PCCookiePolicyText) + '&nbsp;<span class="ot-scrn-rdr">' + Kt.NewWinTxt + "</span></a>");
        var d = o.querySelector(lo.P_Host_View_Cookies);
        if (!Jt.showGeneralVendors || n[r].Cookies && n[r].Cookies.length ? Kt.PCViewCookiesText && (d.innerHTML = Kt.PCViewCookiesText) : (Rt.removeChild(d), Qt(o).addClass("ot-hide-acc")), !n[r].Description || !Kt.pcShowCookieHost) {
            var u = o.querySelector(lo.P_Host_Desc);
            u.parentElement.removeChild(u)
        }
        return Qt(o.querySelector(lo.P_Host_Opt)).html(""), null !== (i = n[r].Cookies) && void 0 !== i && i.forEach(function (e) {
            var t = s.getCookieElement(e, n[r]);
            Qt(o.querySelector(lo.P_Host_Opt)).append(t)
        }), t.append(o), e
    }, Dn.prototype.hostsListEvent = function () {
        for (var e = Qt("#onetrust-pc-sdk " + lo.P_Host_Cntr + " .ot-host-tgl input").el, t = Qt("#onetrust-pc-sdk #" + lo.P_Sel_All_Host_El).el[0], o = Qt("#onetrust-pc-sdk #select-all-hosts-groups-handler").el[0], n = Qt("#onetrust-pc-sdk " + lo.P_Cnsnt_Header).el[0], r = !0, i = 0; i < e.length; i++) {
            if (!e[i].checked) {
                r = !1;
                break
            }
            r = !0
        }
        r ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
        for (var s = 0; s < e.length && !e[s].checked; s++) s !== e.length - 1 || e[s].checked || (o.checked = !1);
        Rt.setCheckedAttribute("", o, o.checked), o && n && o.setAttribute(this.ARIA_LABEL_ATTRIBUTE, n.textContent + " " + Kt.PCenterSelectAllVendorsText)
    }, Dn.prototype.loadHostList = function (e, t) {
        var o = {}, n = [];
        n = Jt.showTrackingTech ? (o = Gn.getAdditionalTechnologiesDataFromGroup(t), (Jt.currentTrackingTech = o).Cookies) : Gn.getCombinedCookieList(t), Jt.currentGlobalFilteredList = n, this.initHostData({
            searchString: e,
            cookiesList: n,
            addTechData: o
        })
    }, Dn.prototype.getCombinedCookieList = function (e) {
        var t = [], o = [], n = [];
        if (Jt.cookieListType !== $.GenVen) {
            var r = Gn.getFirstsAndThirdCookisFromGroups(e);
            o = r.firstPartyCookiesList, t = r.thirdPartyCookiesList, o.length && t.unshift({
                HostName: Kt.PCFirstPartyCookieListText,
                DisplayName: Kt.PCFirstPartyCookieListText,
                HostId: this.FIRST_PARTY_COOKIES_GROUP_NAME,
                isFirstParty: !0,
                Cookies: o,
                Description: ""
            })
        }
        if (Jt.showGeneralVendors) {
            var i = this.getFilteredGenVendorsList(e);
            n = b(t, this.mapGenVendorListToHostFormat(i))
        } else n = t;
        return n
    }, Dn.prototype.mapGenVendorListToHostFormat = function (e) {
        return e.map(function (e) {
            return {
                Cookies: e.Cookies,
                DisplayName: e.Name,
                HostName: e.Name,
                HostId: e.VendorCustomId,
                Description: e.Description,
                Type: X.GenVendor,
                PrivacyPolicy: e.PrivacyPolicyUrl,
                isActive: -1 < Jt.alwaysActiveGenVendors.indexOf(e.VendorCustomId)
            }
        })
    }, Dn.prototype.mapGenVendorToHostFormat = function (e) {
        return {
            Cookies: e.Cookies,
            DisplayName: e.Name,
            HostName: e.Name,
            HostId: e.VendorCustomId,
            Description: e.Description,
            Type: X.GenVendor
        }
    }, Dn.prototype.getFilteredGenVendorsList = function (t) {
        var o = [], e = [];
        if (t.length) {
            Kt.Groups.forEach(function (e) {
                b(e.SubGroups, [e]).forEach(function (e) {
                    -1 !== t.indexOf(e.CustomGroupId) && e.GeneralVendorsIds && e.GeneralVendorsIds.forEach(function (e) {
                        o.push(e)
                    })
                })
            });
            var n = Kt.GeneralVendors;
            return o.length && (e = n.filter(function (e) {
                if (-1 < o.indexOf(e.VendorCustomId)) return e
            })), e
        }
        return Kt.GeneralVendors
    }, Dn.prototype.initVendorsData = function (e, t) {
        var o = this, n = t, r = Jt.vendors.list;
        if (this.setBackBtnTxt(), Qt(lo.P_Vendor_List + " #select-all-text-container p").html(Kt.PCenterAllowAllConsentText), Gn.setConsentLegIntAndHeaderText(), Qt("#onetrust-pc-sdk #filter-btn-handler").el[0].setAttribute(this.ARIA_LABEL_ATTRIBUTE, Kt.PCenterVendorListFilterAria), Qt("#onetrust-pc-sdk #filter-btn-handler title").html(Kt.PCenterVendorListFilterAria), this.hasIabVendors = 0 < n.length, this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, e, !1), Gn.hideOrShowVendorList(n), Qt("#onetrust-pc-sdk " + lo.P_Vendor_Container + " ." + lo.P_Ven_Bx).length !== r.length && this.attachVendorsToDOM(), n.length !== r.length) r.forEach(function (e) {
            var t = Qt(lo.P_Vendor_Container + " #IAB" + e.vendorId).el[0].parentElement;
            -1 === n.indexOf(e) ? Dt(t, "display: none;", !0) : Dt(t, o._displayNull, !0)
        }); else for (var i = Qt(lo.P_Vendor_Container + ' li[style^="display: none"]').el, s = 0; s < i.length; s++) Dt(i[s], this._displayNull, !0);
        !Nt.isV2Template && zt.pcName === gt || this.setListSearchValues(Le.vendors);
        var a = document.querySelector("#vdr-lst-dsc");
        if (!a && Kt.PCenterVendorListDescText) if ((a = document.createElement("p")).id = "vdr-lst-dsc", Qt(a).html(Kt.PCenterVendorListDescText), zt.pcName !== gt && zt.pcName !== ut) {
            var l = document.querySelector("#onetrust-pc-sdk " + lo.P_Vendor_Title_Elm);
            l && l.insertAdjacentElement("afterend", a)
        } else {
            var c = document.querySelector(lo.P_Vendor_Content + " .ot-sdk-row");
            c && c.insertAdjacentElement("beforebegin", a)
        }
        Qt("#onetrust-pc-sdk " + lo.P_Select_Cntr).removeClass("ot-hide"), this.vendorsListEvent(), zt.legIntSettings.PAllowLI && this.vendorLegIntToggleEvent()
    }, Dn.prototype.setConsentLegIntAndHeaderText = function () {
        Nt.isV2Template && (Qt("#ot-sel-blk span:first-child").html(Kt.PCenterAllowAllConsentText || Kt.ConsentText), Qt("#ot-sel-blk span:last-child").html(Kt.LegitInterestText), Qt("#onetrust-pc-sdk " + lo.P_Cnsnt_Header).html(Kt.PCenterAllowAllConsentText), zt.legIntSettings.PAllowLI && !zt.legIntSettings.PShowLegIntBtn && Qt("#onetrust-pc-sdk .ot-sel-all-hdr .ot-li-hdr").html(Kt.PCenterLegitInterestText), zt.legIntSettings.PAllowLI && !zt.legIntSettings.PShowLegIntBtn || Dt(Qt("#ot-sel-blk span:first-child").el[0], "max-width: 100%;", !0))
    }, Dn.prototype.hideOrShowVendorList = function (e) {
        0 === e.length ? Qt("#ot-lst-cnt .ot-acc-cntr").hide() : Qt("#ot-lst-cnt .ot-acc-cntr").show(), Jt.showTrackingTech && Gn.removeTrackingTechAccorions()
    }, Dn.prototype.updateVendorsDOMToggleStatus = function (e, t) {
        void 0 === t && (t = !1);
        for (var o = Qt(lo.P_Vendor_Container + " " + lo.P_Tgl_Cntr).el, n = Kt.VendorConsentModel === Ko, r = 0; r < o.length; r++) {
            var i = o[r].querySelector("." + lo.P_Ven_Ctgl + " input"),
                s = o[r].querySelector("." + lo.P_Ven_Ltgl + " input");
            t ? (i && Rt.setCheckedAttribute("", i, n), s && Rt.setCheckedAttribute("", s, !0)) : (i && Rt.setCheckedAttribute("", i, e), s && Rt.setCheckedAttribute("", s, e))
        }
        var a = Qt("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0];
        if (a) {
            a.parentElement.classList.remove("line-through");
            var l = !!t || e;
            Rt.setCheckedAttribute("", a, l)
        }
        var c = Qt("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0];
        c && (c.parentElement.classList.remove("line-through"), l = t ? n : e, Rt.setCheckedAttribute("", c, l)), Kt.UseGoogleVendors && (t ? this.updateGoogleCheckbox(n) : this.updateGoogleCheckbox(e)), Jt.showGeneralVendors && Kt.GenVenOptOut && this.updateGenVenCheckbox(e)
    }, Dn.prototype.updateGenVenCheckbox = function (e) {
        for (var t = Qt(lo.P_Gven_List + " .ot-ven-gvctgl input").el, o = 0; o < t.length; o++) Rt.setCheckedAttribute("", t[o], e);
        var n = Qt("#onetrust-pc-sdk #ot-selall-gnven-handler").el[0];
        n && (n.parentElement.classList.remove("line-through"), Rt.setCheckedAttribute("", n, e))
    }, Dn.prototype.updateGoogleCheckbox = function (e) {
        for (var t = Qt("#ot-addtl-venlst .ot-tgl-cntr input").el, o = 0; o < t.length; o++) Rt.setCheckedAttribute("", t[o], e);
        var n = Qt("#onetrust-pc-sdk #ot-selall-adtlven-handler").el[0];
        n && (n.parentElement.classList.remove("line-through"), Rt.setCheckedAttribute("", n, e))
    }, Dn.prototype.updateVendorDisclosure = function (e, t) {
        var o = Qt(lo.P_Vendor_Container + " #IAB" + e).el[0].parentElement;
        if (t && t.disclosures) {
            var r = o.querySelector(lo.P_Ven_Dets), i = o.querySelector(lo.P_Ven_Disc).cloneNode(!0),
                n = i.cloneNode(!0);
            n.innerHTML = "<p><b>" + Kt.PCenterVendorListDisclosure + ": </b></p>", r.insertAdjacentElement("beforeend", n), t.disclosures.forEach(function (e) {
                var t = i.cloneNode(!0),
                    o = "<p>" + Kt.PCenterVendorListStorageIdentifier + " </p> <p>" + (e.name || e.identifier) + " </p>";
                if (e.type && (o += "<p>" + Kt.PCenterVendorListStorageType + " </p> <p>" + e.type + " </p>"), e.maxAgeSeconds) {
                    var n = Rt.calculateCookieLifespan(e.maxAgeSeconds);
                    o += "<p>" + Kt.PCenterVendorListLifespan + " </p> <p>" + n + " </p>"
                }
                e.domain && (o += "<p>" + Kt.PCenterVendorListStorageDomain + " </p> <p>" + e.domain + " </p>"), e.purposes && (o += "<p>" + Kt.PCenterVendorListStoragePurposes + ' </p><div class="disc-pur-cont">', e.purposes.forEach(function (e) {
                    var t = zt.iabGroups.purposes[e].name;
                    t && (o += ' <p class="disc-pur">' + t + " </p>")
                }), o += "</div>"), t.innerHTML = o, r.insertAdjacentElement("beforeend", t)
            }), this.updateDomainsUsageInDisclosures(t, i, r)
        }
    }, Dn.prototype.updateDomainsUsageInDisclosures = function (e, n, r) {
        if (e.domains && e.domains.length) {
            var t = n.cloneNode(!0);
            t.innerHTML = "<p><b>" + Kt.PCVLSDomainsUsed + ": </b></p>", r.insertAdjacentElement("beforeend", t), e.domains.forEach(function (e) {
                var t, o = n.cloneNode(!0);
                e.domain && (t = "<p>" + Kt.PCenterVendorListStorageDomain + " </p> <p>" + e.domain + " </p>"), e.use && (t += "<p>" + Kt.PCVLSUse + " </p> <p>" + e.use + " </p>"), o.innerHTML = t, r.insertAdjacentElement("beforeend", o)
            })
        }
    }, Dn.prototype.addDescriptionElement = function (e, t) {
        var o = document.createElement("p");
        o.innerHTML = t || "", e.parentNode.insertBefore(o, e)
    }, Dn.prototype.attachVendorsToDOM = function () {
        var R, q, M = Jt.vendors.list, U = Kt.IabType, j = zt.pcName, z = Jt.vendors.vendorTemplate.cloneNode(!0);
        Jt.discVendors = {}, Nt.isV2Template && (R = z.querySelector(".ot-ven-pur").cloneNode(!0), q = z.querySelector(lo.P_Ven_Disc).cloneNode(!0), Qt(z.querySelector(".ot-ven-dets")).html(""));
        for (var K = document.createDocumentFragment(), e = function (e) {
            var t = z.cloneNode(!0), o = M[e].vendorId, n = M[e].vendorName, r = t.querySelector("." + lo.P_Ven_Bx),
                i = Jt.vendorsSetting[o], s = t.querySelector(lo.P_Ven_Link);
            Rt.setHtmlAttributes(r, {
                id: "IAB" + o,
                name: "IAB" + o,
                "aria-controls": "IAB-ACC-TXT" + o,
                "aria-label": n
            }), r.nextElementSibling.setAttribute("for", "IAB" + o), t.querySelector(lo.P_Ven_Name).innerText = n, Rt.setHtmlAttributes(s, {
                href: M[e].policyUrl,
                rel: "noopener",
                target: "_blank"
            }), s.innerHTML = Kt.PCenterViewPrivacyPolicyText + "&nbsp;<span class='ot-scrn-rdr'>" + n + " " + Kt.NewWinTxt + "</span>";
            var a = Nt.isV2Template ? ho.chkboxEl.cloneNode(!0) : t.querySelector(".ot-checkbox"), l = a.cloneNode(!0),
                c = a.cloneNode(!0), d = t.querySelector(lo.P_Tgl_Cntr);
            Nt.isV2Template || a.parentElement.removeChild(a);
            var u = t.querySelector(lo.P_Arrw_Cntr);
            if (i.consent) {
                c.classList.add(lo.P_Ven_Ctgl);
                var p = -1 !== Yt.inArray(o + ":true", Jt.vendors.selectedVendors), h = c.querySelector("input");
                if (Nt.isV2Template) {
                    h.classList.add("vendor-checkbox-handler");
                    var g = c.querySelector(".ot-label-status");
                    Kt.PCShowConsentLabels ? g.innerHTML = p ? Kt.PCActiveText : Kt.PCInactiveText : Rt.removeChild(g)
                }
                Rt.setCheckedAttribute("", h, p), Rt.setHtmlAttributes(h, {
                    id: lo.P_Vendor_CheckBx + "-" + e,
                    vendorid: o,
                    "aria-label": n
                }), c.querySelector("label").setAttribute("for", lo.P_Vendor_CheckBx + "-" + e), c.querySelector(lo.P_Label_Txt).textContent = n, j === gt ? Kt.PCTemplateUpgrade ? d.insertAdjacentElement("beforeend", c) : Qt(d).append(c) : d.insertBefore(c, u)
            }
            if (i.legInt && !i.specialPurposesOnly) {
                var C = -1 !== Yt.inArray(o + ":true", Jt.vendors.selectedLegIntVendors);
                if (zt.legIntSettings.PShowLegIntBtn) {
                    var y = go.generateLegIntButtonElements(C, o, !0);
                    t.querySelector(lo.P_Acc_Txt).insertAdjacentHTML("beforeend", y);
                    var f = t.querySelector(".ot-remove-objection-handler");
                    f && Dt(f, f.getAttribute("data-style"))
                } else h = l.querySelector("input"), Nt.isV2Template && (h.classList.add("vendor-checkbox-handler"), g = l.querySelector(".ot-label-status"), Kt.PCShowConsentLabels ? g.innerHTML = C ? Kt.PCActiveText : Kt.PCInactiveText : Rt.removeChild(g)), l.classList.add(lo.P_Ven_Ltgl), h.classList.remove("vendor-checkbox-handler"), h.classList.add("vendor-leg-checkbox-handler"), Rt.setCheckedAttribute("", h, C), Rt.setHtmlAttributes(h, {
                    id: lo.P_Vendor_LegCheckBx + "-" + e,
                    "leg-vendorid": o,
                    "aria-label": n
                }), l.querySelector("label").setAttribute("for", lo.P_Vendor_LegCheckBx + "-" + e), l.querySelector(lo.P_Label_Txt).textContent = n, t.querySelector("." + lo.P_Ven_Ctgl) && (u = t.querySelector("." + lo.P_Ven_Ctgl)), j !== gt || d.children.length ? d.insertBefore(l, u) : Qt(d).append(l), i.consent || j !== gt || l.classList.add(lo.P_Ven_Ltgl_Only)
            }
            Nt.isV2Template && (d.insertAdjacentElement("beforeend", ho.arrowEl.cloneNode(!0)), Kt.PCAccordionStyle !== J.Caret && t.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", ho.plusMinusEl.cloneNode(!0)));
            var v = t.querySelector(lo.P_Acc_Txt);
            if (v && Rt.setHtmlAttributes(v, {
                id: "IAB-ACC-TXT" + o,
                "aria-labelledby": "IAB-ACC-TXT" + o,
                role: "region"
            }), M[e].deviceStorageDisclosureUrl && (Rt.setHtmlAttributes(r, {"disc-vid": o}), Jt.discVendors[o] = {
                isFetched: !1,
                disclosureUrl: M[e].deviceStorageDisclosureUrl
            }), Nt.isV2Template) W.populateVendorDetailsHtml(t, R, M[e], q); else {
                var k = t.querySelector(".vendor-option-purpose"), m = t.querySelector(".vendor-consent-group"),
                    b = t.querySelector(".legitimate-interest"), S = t.querySelector(".legitimate-interest-group"),
                    P = t.querySelector(".spl-purpose"), T = t.querySelector(".spl-purpose-grp"),
                    A = t.querySelector(".vendor-feature"), L = t.querySelector(".vendor-feature-group"),
                    I = t.querySelector(".vendor-spl-feature"), _ = t.querySelector(".vendor-spl-feature-grp"),
                    E = m.cloneNode(!0), V = S.cloneNode(!0), B = T.cloneNode(!0), w = L.cloneNode(!0),
                    x = _.cloneNode(!0);
                q = t.querySelector(lo.P_Ven_Disc);
                var O = t.querySelector(lo.P_Ven_Dets), G = q.cloneNode(!0);
                q.parentElement.removeChild(q), W.attachVendorDisclosure(G, M[e]), O.insertAdjacentElement("afterbegin", G), m.parentElement.removeChild(m), i.consent && (Qt(k.querySelector("p")).text(Kt.ConsentPurposesText), M[e].purposes.forEach(function (e) {
                    Qt(E.querySelector(".consent-category")).text(e.purposeName);
                    var t = E.querySelector(".consent-status");
                    t && E.removeChild(t), b.insertAdjacentHTML("beforebegin", E.outerHTML)
                })), i.consent || k.parentElement.removeChild(k);
                var N = V.querySelector(".vendor-opt-out-handler");
                "IAB2" === Kt.IabType && N.parentElement.removeChild(N), S.parentElement.removeChild(S), i.legInt && (Qt(b.querySelector("p")).text(Kt.LegitimateInterestPurposesText), zt.legIntSettings.PAllowLI && "IAB2" === Kt.IabType && M[e].legIntPurposes.forEach(function (e) {
                    Qt(V.querySelector(".consent-category")).text(e.purposeName), b.insertAdjacentHTML("afterend", V.outerHTML)
                })), i.legInt || b.parentElement.removeChild(b), T.parentElement.removeChild(T), "IAB2" === U && M[e].specialPurposes.forEach(function (e) {
                    Qt(B.querySelector(".consent-category")).text(e.purposeName), P.insertAdjacentHTML("afterend", B.outerHTML)
                }), 0 === M[e].specialPurposes.length ? P.parentElement.removeChild(P) : Qt(P.querySelector("p")).text(Kt.SpecialPurposesText), L.parentElement.removeChild(L), Qt(A.querySelector("p")).text(Kt.FeaturesText), M[e].features.forEach(function (e) {
                    Qt(w.querySelector(".consent-category")).text(e.featureName), A.insertAdjacentHTML("afterend", w.outerHTML)
                }), 0 === M[e].features.length && A.parentElement.removeChild(A), I.parentElement.removeChild(_), "IAB2" === U && M[e].specialFeatures.forEach(function (e) {
                    Qt(x.querySelector(".consent-category")).text(e.featureName), I.insertAdjacentHTML("afterend", x.outerHTML)
                }), 0 === M[e].specialFeatures.length ? I.parentElement.removeChild(I) : Qt(I.querySelector("p")).text(Kt.SpecialFeaturesText);
                var D = r.parentElement.querySelector(".vendor-purposes p");
                D.parentElement.removeChild(D)
            }
            K.appendChild(t);
            var H = Qt("#onetrust-pc-sdk " + lo.P_Sel_All_Vendor_Consent_Handler).el[0];
            H && H.setAttribute(W.ARIA_LABEL_ATTRIBUTE, Kt.PCenterSelectAllVendorsText + " " + Kt.LegitInterestText);
            var F = Qt("#onetrust-pc-sdk " + lo.P_Sel_All_Vendor_Leg_Handler).el[0];
            F && F.setAttribute(W.ARIA_LABEL_ATTRIBUTE, Kt.PCenterSelectAllVendorsText + " " + Kt.ConsentText)
        }, W = this, t = 0; t < M.length; t++) e(t);
        document.querySelector("#onetrust-pc-sdk " + lo.P_Vendor_Container).append(K)
    }, Dn.prototype.populateVendorDetailsHtml = function (e, t, o, n) {
        var r = e.querySelector(".ot-ven-dets"), i = Jt.vendorsSetting[o.vendorId], s = n.cloneNode(!0);
        if (this.attachVendorDisclosure(s, o), r.insertAdjacentElement("beforeEnd", s), i.consent) {
            var a = t.cloneNode(!0), l = "<h4>" + Kt.ConsentPurposesText + "</h4>";
            l += "<ul>", o.purposes.forEach(function (e) {
                l += "<li><p>" + e.purposeName + "</p></li>"
            }), l += "</ul>", a.innerHTML = l, r.insertAdjacentElement("beforeEnd", a)
        }
        if (i.legInt && o.legIntPurposes.length) {
            var c = t.cloneNode(!0), d = "<h4>" + Kt.LegitimateInterestPurposesText + "</h4>";
            d += "<ul>", o.legIntPurposes.forEach(function (e) {
                d += "<li><p>" + e.purposeName + "</p></li>"
            }), d += "</ul>", c.innerHTML = d, r.insertAdjacentElement("beforeEnd", c)
        }
        if ("IAB2" === zt.iabType && o.specialPurposes.length) {
            var u = t.cloneNode(!0), p = "<h4>" + Kt.SpecialPurposesText + "</h4>";
            p += "<ul>", o.specialPurposes.forEach(function (e) {
                p += "<li><p>" + e.purposeName + "</p></li>"
            }), p += "</ul>", u.innerHTML = p, r.insertAdjacentElement("beforeEnd", u)
        }
        if (o.features.length) {
            var h = t.cloneNode(!0), g = "<h4>" + Kt.FeaturesText + "</h4>";
            g += "<ul>", o.features.forEach(function (e) {
                g += "<li><p>" + e.featureName + "</p></li>"
            }), g += "</ul>", h.innerHTML = g, r.insertAdjacentElement("beforeEnd", h)
        }
        if ("IAB2" === zt.iabType && o.specialFeatures.length) {
            var C = t.cloneNode(!0), y = "<h4>" + Kt.SpecialFeaturesText + "</h4>";
            y += "<ul>", o.specialFeatures.forEach(function (e) {
                y += "<li><p>" + e.featureName + "</p></li>"
            }), y += "</ul>", C.innerHTML = y, r.insertAdjacentElement("beforeEnd", C)
        }
    }, Dn.prototype.InitializeVendorList = function () {
        if (Jt.vendors.list = Jt.iabData ? Jt.iabData.vendors : null, Jt.vendors.vendorTemplate = Qt(lo.P_Vendor_Container + " li").el[0].cloneNode(!0), Qt("#onetrust-pc-sdk " + lo.P_Vendor_Container).html(""), !Nt.isV2Template && zt.pcName === gt) {
            var e, t = Jt.vendors.vendorTemplate.querySelectorAll(lo.P_Acc_Header);
            zt.legIntSettings.PAllowLI && "IAB2" === zt.iabType ? (e = t[0]).parentElement.removeChild(e) : (e = t[1]).parentElement.removeChild(e)
        }
    }, Dn.prototype.cancelVendorFilter = function () {
        for (var e = Qt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-purposeid"), n = 0 <= Jt.filterByIABCategories.indexOf(o);
            Rt.setCheckedAttribute(null, e[t], n)
        }
    }, Dn.prototype.attachVendorDisclosure = function (e, t) {
        var o = "<h4>" + Kt.PCenterVendorListLifespan + " :</h4><span> " + t.cookieMaxAge + "</span>";
        t.usesNonCookieAccess && (o += "<p>" + Kt.PCenterVendorListNonCookieUsage + "</p>"), e.innerHTML = o
    }, Dn.prototype.updateVendorFilterList = function () {
        for (var e = Qt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-purposeid");
            if (e[t].checked && Jt.filterByIABCategories.indexOf(o) < 0) Jt.filterByIABCategories.push(o); else if (!e[t].checked && -1 < Jt.filterByIABCategories.indexOf(o)) {
                var n = Jt.filterByIABCategories;
                Jt.filterByIABCategories.splice(n.indexOf(o), 1)
            }
        }
        return Jt.filterByIABCategories
    }, Dn.prototype.saveVendorStatus = function () {
        var e = Jt.vendors, t = Jt.oneTrustIABConsent;
        t.purpose = e.selectedPurpose.slice(), t.legimateInterest = e.selectedLegInt.slice(), t.vendors = e.selectedVendors.slice(), t.legIntVendors = e.selectedLegIntVendors.slice(), t.specialFeatures = e.selectedSpecialFeatures.slice();
        var o = Jt.addtlVendors;
        o.vendorConsent = Object.keys(o.vendorSelected)
    }, Dn.prototype.updateIabVariableReference = function () {
        var e = Jt.oneTrustIABConsent, t = Jt.vendors;
        t.selectedPurpose = e.purpose.slice(), t.selectedLegInt = e.legimateInterest.slice(), t.selectedVendors = e.vendors.slice(), t.selectedLegIntVendors = e.legIntVendors.slice(), t.selectedSpecialFeatures = e.specialFeatures.slice();
        var o = Jt.addtlVendors;
        o.vendorSelected = {}, o.vendorConsent.forEach(function (e) {
            o.vendorSelected[e] = !0
        })
    }, Dn.prototype.allowAllhandler = function () {
        zo.initializeIABData(!0, !1)
    }, Dn.prototype.rejectAllHandler = function (e) {
        void 0 === e && (e = !1), zo.initializeIABData(!1, !0, e)
    }, Dn.prototype.populateAddtlVendors = function (e) {
        var t = Kt.PCAccordionStyle === J.Caret ? ho.arrowEl.cloneNode(!0) : ho.plusMinusEl.cloneNode(!0),
            o = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"), n = o.cloneNode(!0);
        Rt.removeChild(n.querySelector("#ot-selall-hostcntr")), Rt.removeChild(o.querySelector("#ot-selall-vencntr")), Rt.removeChild(o.querySelector("#ot-selall-licntr"));
        var r = ho.accordionEl.cloneNode(!0);
        r.classList.add("ot-iab-acc"), r.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", t.cloneNode(!0)), r.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + Kt.PCIABVendorsText + "</div>"), r.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", n), r.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", Qt("#ot-ven-lst").el[0]), Qt("#ot-lst-cnt .ot-sdk-column").append(r), r.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, Kt.PCIABVendorsText), this.iabAccInit = !0;
        var i = n.cloneNode(!0);
        Rt.removeChild(i.querySelector("#ot-selall-licntr")), i.querySelector(".ot-chkbox").id = "ot-selall-adtlvencntr", i.querySelector("input").id = "ot-selall-adtlven-handler", i.querySelector("label").setAttribute("for", "ot-selall-adtlven-handler");
        var s = ho.accordionEl.cloneNode(!0);
        s.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", t.cloneNode(!0)), s.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + Kt.PCGoogleVendorsText + "</div>"), s.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", i), s.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "<ul id='ot-addtl-venlst'></ul>"), s.classList.add("ot-adtlv-acc"), s.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, Kt.PCGoogleVendorsText);
        var a = Jt.vendors.vendorTemplate.cloneNode(!0);
        for (var l in a.querySelector("button").classList.remove("ot-ven-box"), a.querySelector("button").classList.add("ot-addtl-venbox"), Rt.removeChild(a.querySelector(".ot-acc-txt")), e) if (e[l]) {
            var c = a.cloneNode(!0), d = e[l].name;
            c.querySelector(lo.P_Ven_Name).innerText = d;
            var u = c.querySelector("button");
            Rt.setHtmlAttributes(u, {id: "Adtl-IAB" + l}), Rt.setHtmlAttributes(c.querySelector(lo.P_Ven_Link), {
                href: e[l].policyUrl,
                rel: "noopener",
                target: "_blank"
            }), c.querySelector(lo.P_Ven_Link).innerHTML = Kt.PCenterViewPrivacyPolicyText + "&nbsp;<span class='ot-scrn-rdr'>" + d + " " + Kt.NewWinTxt + "</span>";
            var p = ho.chkboxEl.cloneNode(!0);
            p.classList.remove("ot-ven-ctgl"), p.classList.add("ot-ven-adtlctgl");
            var h = Boolean(Jt.addtlVendors.vendorSelected[l]), g = p.querySelector("input");
            g.classList.add("ot-addtlven-chkbox-handler");
            var C = p.querySelector(".ot-label-status");
            Kt.PCShowConsentLabels ? C.innerHTML = h ? Kt.PCActiveText : Kt.PCInactiveText : Rt.removeChild(C), Rt.setCheckedAttribute("", g, h), Rt.setHtmlAttributes(g, {
                id: "ot-addtlven-chkbox-" + l,
                "addtl-vid": l,
                "aria-label": d
            }), p.querySelector("label").setAttribute("for", "ot-addtlven-chkbox-" + l), p.querySelector(lo.P_Label_Txt).textContent = d;
            var y = c.querySelector(lo.P_Tgl_Cntr);
            Qt(y).append(p), y.insertAdjacentElement("beforeend", ho.arrowEl.cloneNode(!0)), Kt.PCAccordionStyle !== J.Caret && c.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", ho.plusMinusEl.cloneNode(!0)), Qt(s.querySelector("#ot-addtl-venlst")).append(c)
        }
        Qt("#ot-lst-cnt .ot-sdk-column").append(s), Qt("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr > input", function (e) {
            Rt.setCheckedAttribute(null, e.target, e.target.checked)
        }), this.showConsentHeader()
    }, Dn.prototype.populateGeneralVendors = function () {
        var p = this, e = Kt.GeneralVendors, t = document.querySelector(".ot-gv-acc"), h = !!t;
        if (!e.length) return this.hasGenVendors = !1, void (t && Qt(t).hide());
        this.hasGenVendors = !0, t && Qt(t).show();
        var o = Kt.PCAccordionStyle === J.Caret ? ho.arrowEl.cloneNode(!0) : ho.plusMinusEl.cloneNode(!0);
        this.iabAccInit || this.addIabAccordion();
        var n = document.createElement("div");
        n.setAttribute("class", "ot-sel-all-chkbox");
        var r = ho.chkboxEl.cloneNode(!0);
        r.id = "ot-selall-gnvencntr", r.querySelector("input").id = "ot-selall-gnven-handler", r.querySelector("label").setAttribute("for", "ot-selall-gnven-handler"), Qt(n).append(r);
        var g = ho.accordionEl.cloneNode(!0);
        g.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", o.cloneNode(!0)), g.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + Kt.PCenterGeneralVendorsText + "</div>"), Kt.GenVenOptOut && g.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", n), g.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "<ul id='ot-gn-venlst'></ul>"), g.classList.add("ot-gv-acc"), g.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, Kt.PCenterGeneralVendorsText);
        var C = Jt.vendors.vendorTemplate.cloneNode(!0);
        C.querySelector("button").classList.remove("ot-ven-box"), C.querySelector("button").classList.add("ot-gv-venbox"), Qt(C.querySelector(".ot-acc-txt")).html('<ul class="ot-host-opt"></ul>'), h && Qt("" + lo.P_Gven_List).html("");
        var y = !0;
        e.forEach(function (e) {
            var o = p.mapGenVendorToHostFormat(e), n = C.cloneNode(!0), t = e.VendorCustomId, r = e.Name,
                i = n.querySelector(lo.P_Ven_Link);
            n.querySelector(lo.P_Ven_Name).innerText = r;
            var s = n.querySelector("button");
            if (Rt.setHtmlAttributes(s, {id: "Gn-" + t}), e.PrivacyPolicyUrl ? (Rt.setHtmlAttributes(i, {
                href: e.PrivacyPolicyUrl,
                rel: "noopener",
                target: "_blank"
            }), i.innerHTML = Kt.PCGVenPolicyTxt + "&nbsp;<span class='ot-scrn-rdr'>" + r + " " + Kt.NewWinTxt + "</span>") : i.classList.add("ot-hide"), p.addDescriptionElement(i, e.Description), Kt.GenVenOptOut) {
                var a = ho.chkboxEl.cloneNode(!0);
                a.classList.remove("ot-ven-ctgl"), a.classList.add("ot-ven-gvctgl");
                var l = Boolean(Jt.genVendorsConsent[t]), c = a.querySelector("input");
                c.classList.add("ot-gnven-chkbox-handler");
                var d = a.querySelector(".ot-label-status");
                Kt.PCShowConsentLabels ? d.innerHTML = l ? Kt.PCActiveText : Kt.PCInactiveText : Rt.removeChild(d), Rt.setCheckedAttribute("", c, l), Rt.setHtmlAttributes(c, {
                    id: "ot-gnven-chkbox-" + t,
                    "gn-vid": t,
                    "aria-label": r
                }), wo.isGenVenPartOfAlwaysActiveGroup(t) ? Rt.setDisabledAttribute(null, c, !0) : y = !1, a.querySelector("label").setAttribute("for", "ot-gnven-chkbox-" + t), a.querySelector(lo.P_Label_Txt).textContent = r;
                var u = n.querySelector(lo.P_Tgl_Cntr);
                Qt(u).append(a), u.insertAdjacentElement("beforeend", ho.arrowEl.cloneNode(!0))
            }
            Kt.PCAccordionStyle !== J.Caret && n.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", ho.plusMinusEl.cloneNode(!0)), e.Cookies.length || Qt(n).addClass("ot-hide-acc"), e.Cookies.forEach(function (e) {
                var t = p.getCookieElement(e, o);
                Qt(n.querySelector(".ot-host-opt")).append(t)
            }), h ? Qt("" + lo.P_Gven_List).append(n) : Qt(g.querySelector("" + lo.P_Gven_List)).append(n)
        }), h || Qt("#ot-lst-cnt .ot-sdk-column").append(g), Qt("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr > input", function (e) {
            Rt.setCheckedAttribute(null, e.target, e.target.checked)
        }), this.showConsentHeader(), y && Rt.setDisabledAttribute("#ot-selall-gnven-handler", null, !0)
    }, Dn.prototype.addIabAccordion = function () {
        var e = Kt.PCAccordionStyle === J.Caret ? ho.arrowEl.cloneNode(!0) : ho.plusMinusEl.cloneNode(!0),
            t = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"), o = t.cloneNode(!0);
        Rt.removeChild(o.querySelector("#ot-selall-hostcntr")), Rt.removeChild(t.querySelector("#ot-selall-vencntr")), Rt.removeChild(t.querySelector("#ot-selall-licntr"));
        var n = ho.accordionEl.cloneNode(!0);
        n.classList.add("ot-iab-acc"), n.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", e.cloneNode(!0)), n.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + Kt.PCIABVendorsText + "</div>"), n.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", o), n.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", Qt("#ot-ven-lst").el[0]), Qt("#ot-lst-cnt .ot-sdk-column").append(n), n.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, Kt.PCIABVendorsText), this.iabAccInit = !0
    }, Dn.prototype.showConsentHeader = function () {
        var e = zt.legIntSettings;
        Qt("#onetrust-pc-sdk .ot-sel-all-hdr").show(), e.PAllowLI && !e.PShowLegIntBtn || Qt("#onetrust-pc-sdk .ot-li-hdr").hide()
    }, Dn.prototype.setBackBtnTxt = function () {
        Nt.isV2Template ? (Qt(lo.P_Vendor_List + " .back-btn-handler").attr(this.ARIA_LABEL_ATTRIBUTE, Kt.PCenterBackText), Qt(lo.P_Vendor_List + " .back-btn-handler title").html(Kt.PCenterBackText)) : Qt(lo.P_Vendor_List + " .back-btn-handler .pc-back-button-text").html(Kt.PCenterBackText)
    }, Dn.prototype.getCookieElement = function (e, t) {
        var o = Jt.hosts.hostCookieTemplate.cloneNode(!0), n = o.querySelector("div").cloneNode(!0);
        n.classList.remove("cookie-name-container"), Qt(o).html("");
        var r = e.Name;
        Kt.AddLinksToCookiepedia && t.isFirstParty && (r = io.getCookieLabel(e, Kt.AddLinksToCookiepedia));
        var i = n.cloneNode(!0);
        if (i.classList.add(lo.P_c_Name), i.querySelector("div:nth-child(1)").innerHTML = Kt.pcCListName, i.querySelector("div:nth-child(2)").innerHTML = r, Qt(o).append(i), Kt.pcShowCookieHost) {
            var s = n.cloneNode(!0);
            s.classList.add(lo.P_c_Host), s.querySelector("div:nth-child(1)").innerHTML = Kt.pcCListHost, s.querySelector("div:nth-child(2)").innerHTML = e.Host, Qt(o).append(s)
        }
        if (Kt.pcShowCookieDuration) {
            var a = n.cloneNode(!0);
            a.classList.add(lo.P_c_Duration), a.querySelector("div:nth-child(1)").innerHTML = Kt.pcCListDuration, a.querySelector("div:nth-child(2)").innerHTML = e.IsSession ? Kt.LifespanTypeText : io.getDuration(e), Qt(o).append(a)
        }
        if (Kt.pcShowCookieType) {
            var l = t.Type === X.GenVendor ? !e.isThirdParty : t.isFirstParty, c = n.cloneNode(!0);
            c.classList.add(lo.P_c_Type), c.querySelector("div:nth-child(1)").innerHTML = Kt.pcCListType, c.querySelector("div:nth-child(2)").innerHTML = l ? Kt.firstPartyTxt : Kt.thirdPartyTxt, Qt(o).append(c)
        }
        if (Kt.pcShowCookieCategory) {
            var d = void 0;
            if (d = t.Type === X.GenVendor ? e.category : t.isFirstParty ? e.groupName : t.groupName) {
                var u = n.cloneNode(!0);
                u.classList.add(lo.P_c_Category), u.querySelector("div:nth-child(1)").innerHTML = Kt.pcCListCategory, u.querySelector("div:nth-child(2)").innerHTML = d, Qt(o).append(u)
            }
        }
        if (Kt.pcShowCookieDescription && e.description) {
            var p = n.cloneNode(!0);
            p.classList.add(lo.P_c_Desc), p.querySelector("div:nth-child(1)").innerHTML = Kt.pcCListDescription, p.querySelector("div:nth-child(2)").innerHTML = e.description, Qt(o).append(p)
        }
        return o
    }, Dn.prototype.getNoResultsFound = function (e) {
        return " " + (Jt.showTrackingTech ? Kt.PCTechNotFound : e ? Kt.PCHostNotFound : Kt.PCVendorNotFound) + "."
    }, Dn.prototype.getAdditionalTechnologiesHtml = function (e) {
        var t = document.createDocumentFragment(), o = Kt.AdditionalTechnologiesConfig, n = 0 < e.Cookies.length;
        if (n && e.Cookies[0].HostId === this.FIRST_PARTY_COOKIES_GROUP_NAME && (n = 0 < e.Cookies[0].Cookies.length), n) {
            var r = Gn.getMainAccordionContainer(o.PCCookiesLabel, o.PCCookiesLabel, !1);
            r.classList.add(this.TECH_COOKIES_SELECTOR), t.appendChild(r)
        }
        if (0 < e.LocalStorages.length) {
            var i = Gn.getMainAccordionContainer(o.PCLocalStorageLabel, o.PCLocalStorageLabel);
            i.classList.add("tech-local"), Gn.setSessionLocalStorageTemplate(i, e.LocalStorages, Kt.AdditionalTechnologiesConfig.PCLocalStorageDurationText), t.appendChild(i)
        }
        if (0 < e.SessionStorages.length) {
            var s = Gn.getMainAccordionContainer(o.PCSessionStorageLabel, o.PCSessionStorageDurationText);
            s.classList.add("tech-session"), Gn.setSessionLocalStorageTemplate(s, e.SessionStorages, Kt.AdditionalTechnologiesConfig.PCSessionStorageDurationText), t.appendChild(s)
        }
        return t
    }, Dn.prototype.getMainAccordionContainer = function (e, t, o) {
        void 0 === o && (o = !0);
        var n = Gn.getAccordionStyleElement(), r = ho.accordionEl.cloneNode(!0);
        return r.classList.add("ot-add-tech"), r.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", n), r.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + e + "</div>"), r.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, t), o && r.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeend", '<ul id="ot-host-lst" style="display: block;"></ul>'), r.cloneNode(!0)
    }, Dn.prototype.setSessionLocalStorageTemplate = function (e, t, o) {
        var n = Jt.hosts.hostTemplate.cloneNode(!0);
        Rt.removeChild(n.querySelector(".ot-a scc-txt"));
        var r = e.querySelector(".ot-acc-txt " + lo.P_Host_Cntr);
        r.removeAttribute("style"), r.classList.add("ot-host-opt");
        for (var i = 0, s = t; i < s.length; i++) {
            var a = s[i], l = Gn.getSessionLocalStorageElement(a, o);
            r.append(l)
        }
    }, Dn.prototype.getSessionLocalStorageElement = function (e, t) {
        var o = Jt.hosts.hostCookieTemplate.cloneNode(!0), n = o.querySelector("div").cloneNode(!0);
        Qt(o).html("");
        var r = Gn.createKeyValueDivEle(n, lo.P_c_Name, Kt.pcCListName, e.Name);
        Qt(o).append(r);
        var i = Gn.createKeyValueDivEle(n, lo.P_c_Host, Kt.pcCListHost, e.Host);
        Qt(o).append(i);
        var s = Gn.createKeyValueDivEle(n, lo.P_c_Duration, Kt.pcCListDuration, t);
        Qt(o).append(s);
        var a = Gn.createKeyValueDivEle(n, lo.P_c_Desc, Kt.pcCListDescription, e.description);
        return Qt(o).append(a), o
    }, Dn.prototype.createKeyValueDivEle = function (e, t, o, n) {
        var r = e.cloneNode(!0);
        return r.classList.add(t), r.querySelector("div:nth-child(1)").innerHTML = o, r.querySelector("div:nth-child(2)").innerHTML = n, r
    }, Dn.prototype.getAdditionalTechnologiesDataFromGroup = function (e) {
        for (var t, o, n, r, i, s = [], a = {
            SessionStorages: [],
            LocalStorages: [],
            Cookies: []
        }, l = 0, c = Gn.getGroupsFromFilter(e); l < c.length; l++) {
            var d = c[l], u = wn.getCookiesForGroup(d);
            s = b(s, null != (t = u.firstPartyCookiesList) ? t : []), a.Cookies = b(a.Cookies, u.thirdPartyCookiesList), a.LocalStorages = b(a.LocalStorages, null != (n = null === (o = d.TrackingTech) || void 0 === o ? void 0 : o.LocalStorages) ? n : []), a.SessionStorages = b(a.SessionStorages, null != (i = null === (r = d.TrackingTech) || void 0 === r ? void 0 : r.SessionStorages) ? i : [])
        }
        return s.length && a.Cookies.unshift({
            HostName: Kt.PCFirstPartyCookieListText,
            DisplayName: Kt.PCFirstPartyCookieListText,
            HostId: this.FIRST_PARTY_COOKIES_GROUP_NAME,
            isFirstParty: !0,
            Cookies: s,
            Description: ""
        }), a
    }, Dn.prototype.getFirstsAndThirdCookisFromGroups = function (e) {
        var o = [], n = [];
        return Gn.getGroupsFromFilter(e).forEach(function (e) {
            var t = wn.getCookiesForGroup(e);
            o = b(o, t.firstPartyCookiesList), n = b(n, t.thirdPartyCookiesList)
        }), {firstPartyCookiesList: o, thirdPartyCookiesList: n}
    }, Dn.prototype.getGroupsFromFilter = function (t) {
        var o = [];
        return Kt.Groups.forEach(function (e) {
            b(e.SubGroups, [e]).forEach(function (e) {
                t && t.length ? -1 !== t.indexOf(e.CustomGroupId) && o.push(e) : o.push(e)
            })
        }), o
    }, Dn.prototype.getAccordionStyleElement = function () {
        return Kt.PCAccordionStyle === J.Caret ? ho.arrowEl.cloneNode(!0) : ho.plusMinusEl.cloneNode(!0)
    }, Dn.prototype.getFilteredAdditionaTechtData = function (e, t) {
        var o, n, r, i, s, a = {SessionStorages: [], LocalStorages: [], Cookies: []}, l = this.getSearchQuery(e),
            c = JSON.parse(JSON.stringify(t));
        return c.Cookies[0].HostId === this.FIRST_PARTY_COOKIES_GROUP_NAME && ((s = c.Cookies.shift()).Cookies = null === (o = s.Cookies) || void 0 === o ? void 0 : o.filter(function (e) {
            return l.lastIndex = 0, l.test(e.Name || e.Host)
        })), a.Cookies = null === (n = c.Cookies) || void 0 === n ? void 0 : n.filter(function (e) {
            return l.lastIndex = 0, l.test(e.DisplayName || e.HostName)
        }), s && 0 < s.Cookies.length && a.Cookies.unshift(s), a.LocalStorages = null === (r = c.LocalStorages) || void 0 === r ? void 0 : r.filter(function (e) {
            return l.lastIndex = 0, l.test(e.Name || e.Host)
        }), a.SessionStorages = null === (i = c.SessionStorages) || void 0 === i ? void 0 : i.filter(function (e) {
            return l.lastIndex = 0, l.test(e.Name || e.Host)
        }), a
    }, Dn);

    function Dn() {
        this.hasIabVendors = !1, this.hasGoogleVendors = !1, this.hasGenVendors = !1, this.iabAccInit = !1, this._displayNull = "display: '';", this.ARIA_LABEL_ATTRIBUTE = "aria-label", this.TECH_COOKIES_SELECTOR = "tech-cookies", this.FIRST_PARTY_COOKIES_GROUP_NAME = "first-party-cookies-group", this.googleSearchSelectors = {
            vendorAccBtn: "#ot-addtl-venlst #Adtl-IAB",
            name: "name",
            accId: ".ot-adtlv-acc",
            selectAllEvntHndlr: "#ot-selall-adtlven-handler",
            venListId: "#ot-addtl-venlst",
            ctgl: ".ot-ven-adtlctgl"
        }, this.genVendorSearchSelectors = {
            vendorAccBtn: "#ot-gn-venlst #Gn-",
            name: "Name",
            accId: ".ot-gv-acc",
            selectAllEvntHndlr: "#ot-selall-gnven-handler",
            venListId: "#ot-gn-venlst",
            ctgl: ".ot-ven-gvctgl"
        }
    }

    function Hn() {
        return "IAB2" !== Kt.IabType && Kt.PCTemplateUpgrade && Kt.PCCategoryStyle === le.Toggle ? ho.toggleEl.cloneNode(!0) : ho.chkboxEl.cloneNode(!0)
    }

    var Fn, Rn = (qn.prototype.setHtmlTemplate = function (e) {
        Fn.setInternalData(), Fn.rootHtml = e, Fn.cloneHtmlElements()
    }, qn.prototype.getVendorListEle = function (e) {
        var t = document.createDocumentFragment(), r = document.createElement("div");
        r.classList.add("ot-vs-list");
        var i = Kt.VendorServiceConfig.PCVSExpandGroup;
        return e.forEach(function (e, t) {
            var o = "ot-vs-lst-id-" + t, n = Fn.createVendor(e.groupRef, e, i, o);
            r.appendChild(n)
        }), t.appendChild(r), t
    }, qn.prototype.insertVendorServiceHtml = function (e, t) {
        if (!Fn.checkIfIsInvalid(e, t)) {
            var o = document.createDocumentFragment();
            if (Fn.setVendorContainer(o, e), Fn.setVendorList(o, e), e.SubGroups && 0 < e.SubGroups.length) {
                o.querySelector(this.MAIN_CONT_ELE).classList.add("ot-vnd-subgrp-cnt");
                var n = t.children[1];
                zt.pcName === gt && (n = t.children[2]), t.insertBefore(o, n)
            } else t.appendChild(o)
        }
    }, qn.prototype.toggleVendorService = function (e, t, o, n) {
        var r = yo.getGroupById(e), i = yo.getVSById(t);
        n = n || Fn.getVendorInputElement(i.CustomVendorServiceId), Fn.setVendorServiceState(n, i, o), o ? Fn.changeGroupState(r, o, Fn.isToggle) : Fn.checkGroupChildrenState(r) || Fn.changeGroupState(r, !1, Fn.isToggle)
    }, qn.prototype.setVendorStateByGroup = function (e, t) {
        var o = e.VendorServices;
        if (Jt.showVendorService && o) for (var n = 0, r = o; n < r.length; n++) {
            var i = r[n], s = Fn.getVendorInputElement(i.CustomVendorServiceId);
            Fn.setVendorServiceState(s, i, t)
        }
    }, qn.prototype.resetVendorUIState = function (e) {
        e.forEach(function (e, t) {
            var o = Fn.getVendorInputElement(t);
            Fn.changeVendorServiceUIState(o, e)
        })
    }, qn.prototype.setVendorServiceState = function (e, t, o) {
        Fn.changeVendorServiceState(t, o), Fn.changeVendorServiceUIState(e, o);
        var n = o ? kn : mn;
        Mo.triggerGoogleAnalyticsEvent(Wo, n, t.ServiceName + ": " + t.CustomVendorServiceId)
    }, qn.prototype.removeVSUITemplate = function (e) {
        var t = e.querySelector(this.MAIN_CONT_ELE);
        t && e.removeChild(t)
    }, qn.prototype.consentAll = function (o) {
        Jt.getVendorsInDomain().forEach(function (e) {
            var t = o;
            o || (t = yo.isAlwaysActiveGroup(e.groupRef)), Fn.toggleVendorService(e.groupRef.CustomGroupId, e.CustomVendorServiceId, t || o)
        })
    }, qn.prototype.cloneHtmlElements = function () {
        var e = Fn.rootHtml.querySelector(this.MAIN_CONT_ELE);
        if (e) {
            var t = e.querySelector(".ot-vnd-serv-hdr-cntr"), o = e.querySelector(".ot-vnd-lst-cont"),
                n = o.querySelector(".ot-vnd-item"), r = n.querySelector(".ot-vnd-info");
            Fn.vendorLabelContainerClone = t.cloneNode(!0), e.removeChild(t), Fn.vendorInfoClone = r.cloneNode(!0), n.querySelector(".ot-vnd-info-cntr").removeChild(r), Fn.vendorItemClone = n.cloneNode(!0), o.removeChild(n), Fn.vendorListContainerClone = o.cloneNode(!0), e.removeChild(o), Fn.vendorServMainContainerClone = e.cloneNode(!0), Fn.rootHtml.removeChild(e)
        }
    }, qn.prototype.setInternalData = function () {
        Fn.isToggle = Kt.PCCategoryStyle === le.Toggle;
        var e = Kt.VendorServiceConfig;
        Fn.stringTranslation = new Map, Fn.stringTranslation.set("ServiceName", e.PCVSNameText || "ServiceName"), Fn.stringTranslation.set("ParentCompany", e.PCVSParentCompanyText || "ParentCompany"), Fn.stringTranslation.set("Address", e.PCVSAddressText || "Address"), Fn.stringTranslation.set("DefaultCategoryName", e.PCVSDefaultCategoryText || "DefaultCategoryName"), Fn.stringTranslation.set("Description", e.PCVSDefaultDescriptionText || "Description"), Fn.stringTranslation.set("DPOEmail", e.PCVSDPOEmailText || "DPOEmail"), Fn.stringTranslation.set("DPOLink", e.PCVSDPOLinkText || "DPOLink"), Fn.stringTranslation.set("PrivacyPolicyLink", e.PCVSPrivacyPolicyLinkText || "PrivacyPolicyLink"), Fn.stringTranslation.set("CookiePolicyLink", e.PCVSCookiePolicyLinkText || "CookiePolicyLink"), Fn.stringTranslation.set("OptOutLink", e.PCVSOptOutLinkText || "OptOutLink"), Fn.stringTranslation.set("LegalBasis", e.PCVSLegalBasisText || "LegalBasis")
    }, qn.prototype.setVendorContainer = function (e, t) {
        var o = Fn.vendorServMainContainerClone.cloneNode(!0);
        o.setAttribute("data-group-id", t.CustomGroupId);
        var n = Fn.vendorLabelContainerClone.cloneNode(!0);
        n.querySelector(".ot-vnd-serv-hdr").innerHTML = Kt.VendorServiceConfig.PCVSListTitle, o.appendChild(n), e.appendChild(o)
    }, qn.prototype.setVendorList = function (e, t) {
        for (var o = 0, n = Fn.getVSFromGroupAndSubgroups(t), r = n.length, i = e.querySelector(this.MAIN_CONT_ELE), s = Fn.vendorListContainerClone.cloneNode(), a = Kt.VendorServiceConfig.PCVSExpandCategory; o < r; o++) {
            var l = Fn.createVendor(t, n[o], a);
            s.appendChild(l)
        }
        i.appendChild(s)
    }, qn.prototype.getVSFromGroupAndSubgroups = function (e, t) {
        var o, n, r;
        void 0 === t && (t = !1);
        var i = null != (o = e.VendorServices) ? o : [];
        if (t) for (var s = 0, a = null != (n = e.SubGroups) ? n : []; s < a.length; s++) {
            var l = null != (r = a[s].VendorServices) ? r : [];
            i.push.apply(i, l)
        }
        return i
    }, qn.prototype.createVendor = function (e, t, o, n) {
        var r = Fn.vendorItemClone.cloneNode(!0);
        if (r.setAttribute("data-vnd-id", t.CustomVendorServiceId), Kt.PCAccordionStyle === J.NoAccordion) {
            r.classList.remove("ot-accordion-layout");
            var i = r.querySelector("button");
            i && r.removeChild(i)
        } else Fn.setExpandVendorList(r, o);
        Fn.setVendorHeader(e, t, r, n);
        var s = r.querySelector(".ot-vnd-info-cntr");
        return Fn.setVendorInfo(s, t), r
    }, qn.prototype.setExpandVendorList = function (e, t) {
        e.querySelector("button").setAttribute("aria-expanded", "" + t)
    }, qn.prototype.setVendorHeader = function (e, t, o, n) {
        var r = Kt.PCShowAlwaysActiveToggle, i = "always active" === yo.getGrpStatus(e).toLowerCase(),
            s = o.querySelector(".ot-acc-hdr");
        i && s.classList.add("ot-always-active-group");
        var a = null;
        i && Kt.PCCategoryStyle === le.Toggle || (a = Fn.setHeaderInputStyle(e, t, i, n));
        var l = Fn.setHeaderText(t, s);
        s.appendChild(l);
        var c = Fn.getPositionForElement(Kt.PCAccordionStyle, Fn.isToggle), d = c.positionIcon, u = c.positionInput;
        if (a && s.insertAdjacentElement(u, a), i && r) {
            var p = Fn.getAlwaysActiveElement();
            s.insertAdjacentElement("beforeend", p)
        }
        if (Kt.PCAccordionStyle !== J.NoAccordion) {
            var h = Fn.setHeaderAccordionIcon();
            s.insertAdjacentElement(d, h)
        }
    }, qn.prototype.getPositionForElement = function (e, t) {
        var o = "beforeend", n = "beforeend";
        return t && e === J.PlusMinus && (o = "afterbegin"), t || (n = "afterbegin"), {
            positionIcon: o,
            positionInput: n
        }
    }, qn.prototype.setHeaderAccordionIcon = function () {
        return Kt.PCAccordionStyle === J.Caret ? ho.arrowEl.cloneNode(!0) : ho.plusMinusEl.cloneNode(!0)
    }, qn.prototype.setHeaderText = function (e, t) {
        var o = t.querySelector(".ot-cat-header"), n = o.cloneNode();
        return t.removeChild(o), n.innerText = e.ServiceName, n
    }, qn.prototype.setHeaderInputStyle = function (e, t, o, n) {
        if (!Kt.VendorServiceConfig.PCVSOptOut) return null;
        var r = yo.checkIsActiveByDefault(e), i = !1, s = Jt.vsConsent;
        i = s.has(t.CustomVendorServiceId) ? s.get(t.CustomVendorServiceId) : r;
        var a = Hn();
        a.querySelector("input").classList.add("category-switch-handler");
        var l = a.querySelector("input"), c = t.CustomVendorServiceId, d = null != n ? n : "ot-vendor-id-" + c,
            u = "ot-vendor-header-id-" + c;
        Qt(l).attr("id", d), Qt(l).attr("name", d), Qt(l).attr("aria-labelledby", u), Qt(l).data("ot-vs-id", c), Qt(l).data("optanongroupid", t.groupRef.CustomGroupId), l.disabled = o, Rt.setCheckedAttribute(null, l, i);
        var p = Fn.isToggle ? d : u;
        return Qt(a.querySelector("label")).attr("for", p), Qt(a.querySelector(".ot-label-txt")).html(t.ServiceName), a
    }, qn.prototype.getAlwaysActiveElement = function () {
        var e = document.createElement("div");
        return e.classList.add("ot-always-active"), e.innerText = Kt.AlwaysActiveText, e
    }, qn.prototype.setVendorInfo = function (e, t) {
        var o, n = ["DPOLink", "PrivacyPolicyLink", "CookiePolicyLink", "OptOutLink"];
        for (o in t) if (!Fn.skipVendorInfoKey(o, t)) {
            var r = t[o], i = Fn.vendorInfoClone.cloneNode(!0);
            i.dataset.vndInfoKey = o + "-" + t.CustomVendorServiceId;
            var s = i.querySelector(".ot-vnd-lbl"), a = i.querySelector(".ot-vnd-cnt");
            if (s.innerHTML = Fn.getLocalizedString(o), n.includes(o)) {
                a.remove();
                var l = document.createElement("a");
                Qt(l).attr("href", r), Qt(l).attr("target", "_blank"), Qt(l).attr("rel", "noopener"), Qt(l).attr("aria-label", r + " " + Kt.NewWinTxt), l.classList.add("ot-vnd-cnt"), l.innerText = r, s.insertAdjacentElement("afterend", l)
            } else a.innerHTML = r;
            e.appendChild(i)
        }
    }, qn.prototype.skipVendorInfoKey = function (e, t) {
        return "VendorServiceId" === e || "DefaultCategoryId" === e || "ServiceName" === e || "groupRef" === e || "CustomVendorServiceId" === e || "PurposeId" === e || !t[e]
    }, qn.prototype.getLocalizedString = function (e) {
        return Fn.stringTranslation.has(e) ? Fn.stringTranslation.get(e) : "DEFAULT"
    }, qn.prototype.checkGroupChildrenState = function (e) {
        for (var t, o, n = 0, r = null != (t = e.SubGroups) ? t : []; n < r.length; n++) {
            var i = r[n];
            if (Fn.checkGroupChildrenState(i)) return !0
        }
        for (var s = 0, a = null != (o = e.VendorServices) ? o : []; s < a.length; s++) {
            var l = a[s];
            if (Jt.vsConsent.get(l.CustomVendorServiceId)) return !0
        }
        return !1
    }, qn.prototype.changeVendorServiceState = function (e, t) {
        Jt.vsConsent.set(e.CustomVendorServiceId, t)
    }, qn.prototype.changeVendorServiceUIState = function (e, t) {
        e && (Rt.setCheckedAttribute(null, e, t), Fn.isToggle && e.parentElement.querySelector(".ot-switch-nob").setAttribute("aria-checked", "" + t))
    }, qn.prototype.changeGroupState = function (e, t, o) {
        var n = yo.getParentByGrp(e);
        if (En.toggleGrpStatus(e, t), Fn.updateGroupUIState(e.CustomGroupId, t, o, null !== n), n) {
            var r = Fn.checkGroupChildrenState(n);
            Fn.changeGroupState(n, r, o)
        }
    }, qn.prototype.updateGroupUIState = function (e, t, o, n) {
        void 0 === n && (n = !1);
        var r = n ? "#ot-sub-group-id-" : "#ot-group-id-", i = document.querySelector(r + e);
        i && (Rt.setCheckedAttribute(null, i, t), o && i.parentElement.querySelector(".ot-switch-nob").setAttribute("aria-checked", "" + t))
    }, qn.prototype.getVendorInputElement = function (e) {
        return document.getElementById("ot-vendor-id-" + e)
    }, qn.prototype.checkIfIsInvalid = function (e, t) {
        return !e || !e.VendorServices || !t || e.VendorServices.length <= 0
    }, qn);

    function qn() {
        this.MAIN_CONT_ELE = ".ot-vnd-serv"
    }

    var Mn, Un = "#onetrust-banner-sdk", jn = ".banner_logo", zn = "#onetrust-pc-sdk",
        Kn = (Wn.prototype.insertPcHtml = function () {
            Mn.jsonAddAboutCookies(Kt);
            var t = document.createDocumentFragment();
            if (zo.preferenceCenterGroup) {
                var e = document.createElement("div");
                Qt(e).html(zo.preferenceCenterGroup.html);
                var o = e.querySelector("#onetrust-pc-sdk");
                Mn.addClassesPerConfig(o), Qt(t).append(o);
                var n = function (e) {
                    return t.querySelector(e)
                }, r = function (e) {
                    return t.querySelectorAll(e)
                };
                Mn.manageCloseButtons(o, r, n), Kt.Language && Kt.Language.Culture && Qt(n("#onetrust-pc-sdk")).attr("lang", Kt.Language.Culture), Mn.addLogos(n, r), Qt(n(lo.P_Title)).html(Kt.MainText), Kt.PCCloseButtonType === pe.Link && Kt.PCTemplateUpgrade && zt.pcName === gt && Qt(n(lo.P_Title)).addClass("ot-pc-title-shrink"), Kt.PCTemplateUpgrade && Qt(n(zn + ' > div[role="alertdialog"]')).css("height: 100%;"), Qt(n(zn + ' > div[role="alertdialog"]')).attr(this._ariaLabel, Kt.MainText), Kt.PCRegionAriaLabel && (Qt(n("#onetrust-pc-sdk")).attr(this._ariaLabel, Kt.PCRegionAriaLabel), Qt(n("#onetrust-pc-sdk")).attr("role", "region")), zt.pcName === gt && (Qt(n(lo.P_Privacy_Txt)).html(Kt.AboutCookiesText), Qt(n(lo.P_Privacy_Hdr)).html(Kt.AboutCookiesText)), Qt(n(lo.P_Policy_Txt)).html(Kt.MainInfoText), Mn.configureLinkFields(n), Mn.configureSubjectDataFields(n), Mn.configureButtons(n, r), Mn.setManagePreferenceText(n), Mn.initializePreferenceCenterGroups(n, t), Mn.removeListsWhenAppropriate(n), Kt.PCTemplateUpgrade && Mn.setOptOutSignalNotification(n)
            }
            var i = document.createElement("iframe");
            i.setAttribute("class", "ot-text-resize"), i.setAttribute("title", "onetrust-text-resize"), Dt(i, "position: absolute; top: -50000px; width: 100em;"), i.setAttribute(this._ariaHidden, "true"), Qt(t.querySelector("#onetrust-pc-sdk")).append(i);
            var s = document.getElementById("onetrust-consent-sdk");
            Qt(s).append(t), zt.ignoreInjectingHtmlCss || Qt(document.body).append(s), (Kt.showCookieList || Jt.showGeneralVendors) && wn.InitializeHostList()
        }, Wn.prototype.addClassesPerConfig = function (e) {
            /Chrome|Safari/i.test(navigator.userAgent) && /Google Inc|Apple Computer/i.test(navigator.vendor) || Qt(e).addClass("ot-sdk-not-webkit"), Kt.useRTL && Qt(e).attr("dir", "rtl"), zt.legIntSettings.PAllowLI && "IAB2" === zt.iabType && (Qt(e).addClass("ot-leg-opt-out"), zt.legIntSettings.PShowLegIntBtn && Qt(e).addClass("ot-leg-btn")), Kt.BannerRelativeFontSizesToggle && Qt(e).addClass("otRelFont"), Kt.PCShowConsentLabels && Qt(e).addClass("ot-tgl-with-label"), (Kt.UseGoogleVendors || Jt.showGeneralVendors) && Qt(e).addClass("ot-addtl-vendors"), "right" === Kt.PreferenceCenterPosition && Qt(e).addClass(Kt.useRTL ? "right-rtl" : "right")
        }, Wn.prototype.manageCloseButtons = function (e, t, o) {
            var n = Qt(t(lo.P_Close_Btn)).el;
            if (Kt.ShowPreferenceCenterCloseButton) {
                Kt.CloseText || (Kt.CloseText = "Close Preference Center");
                for (var r = 0, i = n; r < i.length; r++) {
                    var s = i[r];
                    Kt.PCCloseButtonType === pe.Link && Kt.PCTemplateUpgrade ? (Qt(s).html(Kt.PCContinueText), Qt(e).addClass("ot-close-btn-link"), Qt(s).el.removeAttribute(this._ariaLabel)) : (Qt(s).el.setAttribute(this._ariaLabel, Kt.CloseText), io.setCloseIcon(o("#onetrust-pc-sdk .ot-close-icon")))
                }
            } else for (var a = 0; a < n.length; a++) Qt(n[a].parentElement).el.removeChild(n[a])
        }, Wn.prototype.addLogos = function (e, t) {
            var o = e(lo.P_Logo);
            if (o && Kt.optanonLogo) {
                var n = io.updateCorrectUrl(Kt.optanonLogo);
                io.checkMobileOfflineRequest(io.getBannerVersionUrl()) && (n = Rt.getRelativeURL(n, !0, !0));
                var r = document.createElement("img");
                r.setAttribute("alt", Kt.PCLogoAria), r.setAttribute("src", n), o.append(r), Kt.PCLogoAria && Qt(o).attr(this._ariaLabel, Kt.PCLogoAria)
            }
            io.insertFooterLogo(t(".ot-pc-footer-logo a"))
        }, Wn.prototype.configureLinkFields = function (e) {
            if (Kt.AboutText && Qt(e(lo.P_Policy_Txt)).html(Qt(e(lo.P_Policy_Txt)).html() + '\n            <br/><a href="' + Kt.AboutLink + '" class="privacy-notice-link" rel="noopener" target="_blank"\n                    aria-label="' + Kt.PCCookiePolicyLinkScreenReader + '">' + Kt.AboutText + "</a>"), Kt.PCenterImprintLinkText) {
                Kt.AboutText || e(lo.P_Policy_Txt).insertAdjacentHTML("beforeend", "<br/>");
                var t = document.createElement("a");
                t.classList.add("ot-link-btn", "ot-imprint-handler"), t.textContent = Kt.PCenterImprintLinkText, t.setAttribute(this._ariaLabel, Kt.PCenterImprintLinkScreenReader), t.setAttribute("href", Kt.PCenterImprintLinkUrl), e(lo.P_Policy_Txt).appendChild(t)
            }
            if (Kt.PCenterVendorListLinkText) {
                var o = !Kt.IsIabEnabled && Jt.showGeneralVendors ? "ot-gv-list-handler" : "onetrust-vendors-list-handler";
                e(lo.P_Policy_Txt).insertAdjacentHTML("beforeend", '<button class="ot-link-btn ' + o + '" aria-label="' + Kt.PCenterVendorListLinkAriaLabel + '">\n            ' + Kt.PCenterVendorListLinkText + "\n            </button>")
            }
        }, Wn.prototype.configureSubjectDataFields = function (e) {
            if (Kt.PCTemplateUpgrade && Kt.PCenterUserIdTitleText && Kt.IsConsentLoggingEnabled) {
                var t = Ft.readCookieParam(Fe.OPTANON_CONSENT, xe);
                if (e(lo.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-title"><span>' + Kt.PCenterUserIdTitleText + ": </span> " + t + "</div>"), Kt.PCenterUserIdDescriptionText && e(lo.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-desc">' + Kt.PCenterUserIdDescriptionText + "</div>"), Kt.PCenterUserIdTimestampTitleText) {
                    var o = Ft.getCookie(Fe.ALERT_BOX_CLOSED), n = o && io.getUTCFormattedDate(o),
                        r = n || Kt.PCenterUserIdNotYetConsentedText;
                    e(lo.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-timestamp"><span>' + Kt.PCenterUserIdTimestampTitleText + ": </span> " + r + "</div>")
                }
            }
        }, Wn.prototype.setManagePreferenceText = function (e) {
            var t = e(lo.P_Manage_Cookies_Txt), o = Qt(t);
            t && (o.html(Kt.ManagePreferenceText), Kt.ManagePreferenceText || o.attr(this._ariaHidden, !0))
        }, Wn.prototype.configureButtons = function (e, t) {
            Kt.ConfirmText.trim() ? Qt(e("#accept-recommended-btn-handler")).html(Kt.ConfirmText) : e("#accept-recommended-btn-handler").parentElement.removeChild(e("#accept-recommended-btn-handler"));
            for (var o = t(".save-preference-btn-handler"), n = 0; n < o.length; n++) Qt(o[n]).html(Kt.AllowAllText);
            var r = t(".ot-pc-refuse-all-handler");
            if (Kt.PCenterShowRejectAllButton && Kt.PCenterRejectAllButtonText.trim()) for (n = 0; n < r.length; n++) Qt(r[n]).html(Kt.PCenterRejectAllButtonText); else Rt.removeChild(r)
        }, Wn.prototype.removeListsWhenAppropriate = function (e) {
            if (!Kt.IsIabEnabled) {
                var t = e(lo.P_Vendor_Container);
                t && t.parentElement.removeChild(t)
            }
            if (!Kt.showCookieList && !Jt.showGeneralVendors) {
                var o = e(lo.P_Host_Cntr);
                o && o.parentElement.removeChild(o)
            }
        }, Wn.prototype.setParentGroupName = function (e, t, o, n) {
            var r = e.querySelector(".category-header,.ot-cat-header,.category-menu-switch-handler>h3");
            Qt(r).html(t), Qt(r).attr("id", o), zt.pcName === gt && (e.querySelector(lo.P_Category_Header).innerHTML = t, e.querySelector("" + lo.P_Desc_Container).setAttribute("id", n), e.querySelector(".category-menu-switch-handler").setAttribute("aria-controls", n))
        }, Wn.prototype.setLegIntButton = function (e, t, o, n) {
            void 0 === o && (o = !1);
            var r = !0;
            -1 < Jt.vendors.selectedLegInt.indexOf(t.IabGrpId + ":false") && (r = !1);
            var i = go.generateLegIntButtonElements(r, t.OptanonGroupId);
            o ? n.insertAdjacentHTML("afterend", i) : e.insertAdjacentHTML("beforeend", i);
            var s = e.querySelector(".ot-remove-objection-handler");
            s && Dt(s, s.getAttribute("data-style"))
        }, Wn.prototype.setParentGroupDescription = function (e, t, o, n, r) {
            var i = En.safeFormattedGroupDescription(t), s = e.querySelector("p:not(.ot-always-active)"),
                a = e.querySelector(lo.P_Acc_Grp_Desc), l = s || a;
            return -1 < Gt.indexOf(t.Type) && o.PCGrpDescType === _.Legal ? i = t.DescriptionLegal : l.classList.add("ot-category-desc"), zt.legIntSettings.PAllowLI && !zt.legIntSettings.PShowLegIntBtn && (t.SubGroups.some(function (e) {
                return e.HasLegIntOptOut
            }) || t.HasLegIntOptOut ? l.parentElement.classList.add("ot-leg-border-color") : Rt.removeChild(e.querySelector(lo.P_Li_Hdr))), zt.pcName !== gt && l.setAttribute("id", n), Qt(l).html(i), t.Type === Vt && Rt.removeChild(l), l
        }, Wn.prototype.cloneOtHtmlEls = function (e) {
            var t = /otPcPanel|otPcCenter/;
            ho.toggleEl = Qt(e(".ot-tgl")).el.cloneNode(!0), ho.arrowEl = Qt(e('#onetrust-pc-sdk [role="alertdialog"] > ' + lo.P_Arrw_Cntr)).el.cloneNode(!0), ho.subGrpEl = Qt(e(lo.P_Sub_Grp_Cntr)).el.cloneNode(!0), ho.vListEl = Qt(e(lo.P_Ven_Lst_Cntr)).el.cloneNode(!0), ho.cListEl = Qt(e(lo.P_Host_Lst_cntr)).el.cloneNode(!0), ho.chkboxEl = Qt(e(lo.P_CBx_Cntr)).el.cloneNode(!0), ho.accordionEl = Qt(e(".ot-acc-cntr")).el.cloneNode(!0), t.test(zt.pcName) && (ho.plusMinusEl = Qt(e(".ot-plus-minus")).el.cloneNode(!0)), Rt.removeChild(e(".ot-tgl")), Rt.removeChild(e('#onetrust-pc-sdk [role="alertdialog"] > ' + lo.P_Arrw_Cntr)), Rt.removeChild(e(lo.P_Sub_Grp_Cntr)), Rt.removeChild(e(lo.P_Ven_Lst_Cntr)), Rt.removeChild(e(lo.P_Host_Lst_cntr)), Rt.removeChild(e(lo.P_CBx_Cntr)), Rt.removeChild(e(".ot-acc-cntr")), t.test(zt.pcName) && Rt.removeChild(e(".ot-plus-minus"))
        }, Wn.prototype.insertSelectAllEls = function (e) {
            var t = e(lo.P_Select_Cntr + " .ot-sel-all-chkbox"),
                o = Jt.showVendorService ? Hn() : ho.chkboxEl.cloneNode(!0);
            o.id = lo.P_Sel_All_Host_El, o.querySelector("input").id = "select-all-hosts-groups-handler", o.querySelector("label").setAttribute("for", "select-all-hosts-groups-handler"), Qt(t).append(o);
            var n = Jt.showVendorService ? Hn() : ho.chkboxEl.cloneNode(!0);
            n.id = lo.P_Sel_All_Vendor_Consent_El, n.querySelector("input").id = "select-all-vendor-groups-handler", n.querySelector("label").setAttribute("for", "select-all-vendor-groups-handler"), Qt(t).append(n);
            var r = Jt.showVendorService ? Hn() : ho.chkboxEl.cloneNode(!0);
            r.id = lo.P_Sel_All_Vendor_Leg_El, r.querySelector("input").id = "select-all-vendor-leg-handler", r.querySelector("label").setAttribute("for", "select-all-vendor-leg-handler"), Qt(t).append(r)
        }, Wn.prototype.initializePreferenceCenterGroups = function (e, t) {
            var o = zt.pcName;
            if (Nt.isV2Template) {
                Mn.cloneOtHtmlEls(e);
                var n = ho.chkboxEl.cloneNode(!0);
                n.querySelector("input").classList.add("category-filter-handler"), Qt(e(lo.P_Fltr_Modal + " " + lo.P_Fltr_Option)).append(n), Mn.insertSelectAllEls(e)
            }
            var r = Qt(e("#onetrust-pc-sdk " + lo.P_Category_Grp));
            o === dt || o === pt || o === ut ? Kt.PCenterEnableAccordion ? Rt.removeChild(r.el.querySelector(lo.P_Category_Item + ":not(.ot-accordion-layout)")) : Rt.removeChild(r.el.querySelector(lo.P_Category_Item + ".ot-accordion-layout")) : o === gt && (Kt.PCenterEnableAccordion = !1);
            var i, s = e("#onetrust-pc-sdk " + lo.P_Category_Item),
                a = Nt.isV2Template ? ho.subGrpEl.cloneNode(!0) : Qt(e(lo.P_Sub_Grp_Cntr)),
                l = Nt.isV2Template ? null : Qt(e(lo.P_Acc_Container + " " + lo.P_Sub_Grp_Cntr));
            Kt.PCTemplateUpgrade && /otPcTab/.test(o) && (i = e(".ot-abt-tab").cloneNode(!0), Rt.removeChild(e(".ot-abt-tab"))), r.el.removeChild(s), Mn.setVendorListClass(e, s), Mn.setPCHeader(e, s), Mn.createHtmlForEachGroup({
                fm: e,
                fragment: t,
                categoryGroupTemplate: s,
                cookiePreferencesContainer: r,
                popupSubGrpContainer: l,
                subGrpContainer: a
            }), Mn.setPcTabLayout(e, t, i)
        }, Wn.prototype.createHtmlForEachGroup = function (e) {
            var t = e.fm, o = e.fragment, n = e.categoryGroupTemplate, r = e.cookiePreferencesContainer,
                i = e.popupSubGrpContainer, s = e.subGrpContainer, a = Kt.Groups.filter(function (e) {
                    return e.Order
                }), l = 0 === r.el.children.length;
            Kt.PCTemplateUpgrade && (Jt.showVendorService ? Fn.setHtmlTemplate(t('#onetrust-pc-sdk div[role="alertdialog"]')) : Fn.removeVSUITemplate(t('#onetrust-pc-sdk div[role="alertdialog"]')));
            for (var c = 0, d = a; c < d.length; c++) {
                var u = d[c], p = u.GroupName, h = u.CustomGroupId, g = n.cloneNode(!0), C = "ot-group-id-" + h,
                    y = "ot-header-id-" + h, f = "ot-desc-id-" + h;
                (g = Qt(g).el).setAttribute("data-optanongroupid", h);
                var v = g.querySelector("input,button");
                v && (v.setAttribute("aria-controls", f), v.setAttribute("aria-labelledby", y)), Mn.setParentGroupName(g, p, y, f), Mn.setPopupData(u, g);
                var k = Mn.setParentGroupDescription(g, u, Kt, f, C);
                Nt.isV2Template ? Mn.setToggle(g, k, u, C, y) : Mn.setToggleProps(g, k, u, C, y);
                var m = !!t("#onetrust-pc-sdk " + lo.P_Category_Grp).querySelector(lo.P_Category_Item),
                    b = r.el.querySelectorAll(lo.P_Category_Item + ":not(.ot-vnd-item)");
                b = b[b.length - 1], l ? r.append(g) : m ? Yt.insertAfter(g, b) : Yt.insertAfter(g, r.el.querySelector(lo.P_Li_Hdr) || r.el.querySelector("h3")), Mn.setSubGroupData(u, g, i, s);
                var S = Kt.PCGrpDescLinkPosition === V.Top;
                u.Type === Vt && S && (k = g.querySelector(lo.P_Sub_Grp_Cntr));
                var P = S ? k : null;
                Mn.setVendorListBtn(g, t, o, u, P, Kt), Mn.setHostListBtn(g, t, o, u), Mn.setVendorServiceData(u, g), Jt.dataGroupState.push(u)
            }
        }, Wn.prototype.setPopupData = function (e, t) {
            zt.pcName === ht && (e.ShowVendorList && "IAB2" === Kt.IabType ? (Rt.removeChild(t.querySelector("p:not(.ot-always-active)")), Rt.removeChild(t.querySelector(lo.P_Acc_Txt + ":not(" + lo.P_Acc_Container + ")")), e.SubGroups.length || Nt.isV2Template || Rt.removeChild(t.querySelector(lo.P_Sub_Grp_Cntr))) : Rt.removeChild(t.querySelector(lo.P_Acc_Container)))
        }, Wn.prototype.setVendorServiceData = function (e, t) {
            var o = zt.pcName;
            if (Jt.showVendorService && Kt.VendorServiceConfig.PCVSCategoryView) {
                var n = lo.P_Acc_Txt;
                o === gt && (n = lo.P_Desc_Container);
                var r = t.querySelector(n);
                Kt.PCAccordionStyle === J.NoAccordion && (r = t), Fn.insertVendorServiceHtml(e, r)
            }
        }, Wn.prototype.jsonAddAboutCookies = function (e) {
            var t = {};
            return t.GroupName = e.AboutCookiesText, t.GroupDescription = e.MainInfoText, t.ShowInPopup = !0, t.Order = 0, t.IsAboutGroup = !0, t
        }, Wn.prototype.setVendorListBtn = function (e, t, o, n, r, i) {
            var s = zt.pcName;
            if (n.ShowVendorList) {
                var a = void 0, l = void 0;
                if (Nt.isV2Template ? a = (l = ho.vListEl.cloneNode(!0)).querySelector(".category-vendors-list-handler") : l = (a = e.querySelector(".category-vendors-list-handler")).parentElement, a.innerHTML = i.VendorListText + "&#x200E;", a.setAttribute(this._ariaLabel, Kt.PCOpensVendorDetailsAlert), a.setAttribute("data-parent-id", n.CustomGroupId), i.PCGrpDescType === _.UserFriendly && (a.insertAdjacentHTML("afterend", "<span class='ot-ext-lnk'></span>"), a.insertAdjacentHTML("afterend", "<a href='" + Kt.IabLegalTextUrl + "?lang=" + Jt.consentLanguage + "' rel=\"noopener\" target='_blank'>&nbsp;|&nbsp;" + i.PCVendorFullLegalText + '&nbsp;<span class="ot-scrn-rdr">' + Kt.NewWinTxt + "</span></a>")), Nt.isV2Template) {
                    var c = e;
                    s === gt ? c = e.querySelector("" + lo.P_Desc_Container) : i.PCenterEnableAccordion && (c = e.querySelector(lo.P_Acc_Txt)), c.insertAdjacentElement("beforeend", l)
                }
                r && r.insertAdjacentElement("beforebegin", l)
            } else if (!Nt.isV2Template) {
                if (s !== pt && s !== dt || i.PCenterEnableAccordion) {
                    if (s === ht || s === pt || s === dt && i.PCenterEnableAccordion) {
                        var d = t("#vendor-list-container"), u = e.querySelector(lo.P_Acc_Txt);
                        d && o.querySelector("" + lo.P_Content).removeChild(d), Nt.isV2Template || Qt(u).el.removeChild(u.querySelector(lo.P_Ven_Lst_Cntr))
                    }
                } else Rt.removeChild(e.querySelector(lo.P_Ven_Lst_Cntr));
                if (s === gt || s === ut) {
                    var p = e.querySelector(lo.P_Ven_Lst_Cntr);
                    p && p.parentElement.removeChild(p)
                }
            }
        }, Wn.prototype.setHostListBtn = function (e, t, o, n) {
            var r = zt.pcName, i = !1;
            Kt.showCookieList && (i = -1 < Rt.findIndex(b(n.SubGroups, [n]), function (e) {
                return -1 === Bt.indexOf(e.Type) && e.FirstPartyCookies.length
            }));
            var s = Jt.showGeneralVendors && n.GeneralVendorsIds && n.GeneralVendorsIds.length;
            if (!Jt.showVendorService && (Kt.showCookieList || Jt.showGeneralVendors) && (n.ShowHostList || i || s)) {
                var a = void 0;
                if (Nt.isV2Template) {
                    var l = ho.cListEl.cloneNode(!0);
                    a = l.querySelector(".category-host-list-handler");
                    var c = e;
                    r === gt ? c = e.querySelector("" + lo.P_Desc_Container) : Kt.PCenterEnableAccordion && (c = e.querySelector(lo.P_Acc_Txt)), c.insertAdjacentElement("beforeend", l)
                } else a = e.querySelector(".category-host-list-handler");
                Mn.setcListHandler(a, n)
            } else Mn.setHostListVendorList(t, o, e)
        }, Wn.prototype.setcListHandler = function (e, t) {
            if (e) {
                var o = Mn.setcListHeaderTitleAndScreenReader(), n = o[0], r = o[1];
                e.innerHTML = n + "&#x200E;", e.setAttribute(this._ariaLabel, r), e.setAttribute("data-parent-id", t.CustomGroupId)
            }
        }, Wn.prototype.setcListHeaderTitleAndScreenReader = function () {
            var e, t;
            return e = Jt.showTrackingTech ? (t = Kt.AdditionalTechnologiesConfig.PCTechDetailsText, Kt.AdditionalTechnologiesConfig.PCTechDetailsAriaLabel) : Jt.showGeneralVendors ? (t = Kt.GroupGenVenListLabel, Kt.PCenterVendorListScreenReader) : (t = Kt.ThirdPartyCookieListText, Kt.PCOpensCookiesDetailsAlert), [t, e]
        }, Wn.prototype.setHostListVendorList = function (e, t, o) {
            if (zt.pcName === ht) {
                var n = e("#vendor-list-container"), r = o.querySelector(lo.P_Acc_Txt);
                n && t.querySelector("" + lo.P_Content).removeChild(n), r.querySelector(lo.P_Host_Lst_cntr) && Qt(r).el.removeChild(r.querySelector(lo.P_Host_Lst_cntr))
            } else {
                var i = o.querySelector(lo.P_Host_Lst_cntr);
                i && i.parentElement.removeChild(i)
            }
        }, Wn.prototype.setSubGroupData = function (e, t, o, n) {
            if (0 < e.SubGroups.length && e.ShowSubgroup) {
                var r = zt.pcName === ht && e.ShowVendorList && "IAB2" === Kt.IabType && !Kt.PCTemplateUpgrade;
                Mn.setSubGrps(e, r ? o : n, t, Kt)
            }
        }, Wn.prototype.setSubGrps = function (t, o, n, r) {
            if (zt.pcName === ht && t.ShowVendorList && "IAB2" === r.IabType && !Kt.PCTemplateUpgrade) {
                var e = n.querySelector(lo.P_Sub_Grp_Cntr);
                e.parentElement.removeChild(e)
            }
            t.SubGroups.forEach(function (e) {
                Mn.setSubGroups({group: t, subgroup: e, grpEl: n, subGrpEl: o, json: r})
            })
        }, Wn.prototype.setSubGroups = function (e) {
            var t, o = e.group, n = e.subgroup, r = e.grpEl, i = e.subGrpEl, s = e.json, a = zt.pcName;
            "IAB2" !== zt.iabType || n.Type !== It || n.HasConsentOptOut || (t = !0);
            var l, c, d = Nt.isV2Template ? i.cloneNode(!0) : i.el.cloneNode(!0), u = d.querySelector(lo.P_Subgp_ul),
                p = d.querySelector(lo.P_Subgrp_li).cloneNode(!0), h = n.CustomGroupId, g = "ot-sub-group-id-" + h,
                C = yo.getGrpStatus(n).toLowerCase(),
                y = p.querySelector(".cookie-subgroup>h4, .cookie-subgroup>h5, .cookie-subgroup>h6, .ot-subgrp>h4, .ot-subgrp>h5, .ot-subgrp>h6"),
                f = p.querySelector(lo.P_Tgl_Cntr);
            if (p.setAttribute("data-optanongroupid", h), Nt.isV2Template ? ((c = Mn.getInputEle()).querySelector("input").setAttribute("data-optanongroupid", h), c.querySelector("input").classList.add("cookie-subgroup-handler"), l = c.cloneNode(!0), f.insertAdjacentElement("beforeend", l)) : (l = p.querySelector(".ot-toggle")).querySelector("input").setAttribute("data-optanongroupid", h), Qt(d.querySelector(lo.P_Subgp_ul)).html(""), Qt(y).html(n.GroupName), Jt.showVendorService) {
                var v = document.createElement("div");
                v.classList.add("ot-acc-hdr"), y.classList.add("ot-cat-header"), v.appendChild(y);
                var k = "afterbegin";
                Kt.PCCategoryStyle === le.Toggle && (k = "beforeend"), v.insertAdjacentElement(k, l), p.removeChild(p.querySelector(lo.P_Subgrp_Tgl_Cntr)), p.insertAdjacentElement("afterbegin", v)
            }
            l.querySelector("input").setAttribute("id", g), l.querySelector("input").setAttribute(this._ariaLabel, n.GroupName), l.querySelector("label").setAttribute("for", g), Mn.setSubGroupDescription({
                json: s,
                group: o,
                subgroup: n,
                subGroupClone: p
            });
            var m = b(xt, wt);
            o.ShowSubgroupToggle && -1 < m.indexOf(n.Type) ? Mn.setSubGroupToggle({
                id: g,
                subGroupClone: p,
                group: o,
                subgroup: n,
                toggleGroup: f
            }) : C === ze && (o.ShowSubgroupToggle || -1 === Ot.indexOf(n.Type)) || (t = !0), Mn.setSubGroupsProperties({
                removeConsentToggle: t,
                subGroupToggle: l,
                subGroupClone: p,
                status: C,
                subgroup: n,
                grpEl: r,
                pcName: a,
                json: s,
                subGrpElClone: d,
                ulParentContainerEle: u
            })
        }, Wn.prototype.setSubGroupDescription = function (e) {
            var t = e.json, o = e.group, n = e.subgroup, r = e.subGroupClone, i = zt.pcName,
                s = t.PCGrpDescType === _.Legal, a = i === ht && o.ShowVendorList && "IAB2" === t.IabType,
                l = Qt(r.querySelector(lo.P_Subgrp_Desc));
            if (a) {
                var c = n.DescriptionLegal && s ? n.DescriptionLegal : n.GroupDescription;
                l.html(c)
            } else {
                c = En.safeFormattedGroupDescription(n);
                var d = !1;
                -1 < Gt.indexOf(n.Type) && s && (d = !0, c = n.DescriptionLegal), t.PCenterEnableAccordion && d || (l = Qt(r.querySelector("p"))), o.ShowSubGroupDescription ? l.html(c) : l.html("")
            }
        }, Wn.prototype.setSubGroupToggle = function (e) {
            var t = e.id, o = e.subGroupClone, n = e.group, r = e.subgroup, i = e.toggleGroup, s = En.isGroupActive(r);
            Mn.setSubGroupActive({group: n, subgroup: r, subGroupClone: o}, s);
            var a = i.querySelector(".ot-label-status");
            if (Kt.PCShowConsentLabels ? a.innerHTML = s ? Kt.PCActiveText : Kt.PCInactiveText : Rt.removeChild(a), zt.legIntSettings.PAllowLI && r.Type === It && r.HasLegIntOptOut) if (zt.legIntSettings.PShowLegIntBtn) Mn.setLegIntButton(o, r); else {
                var l = i.cloneNode(!0);
                i.insertAdjacentElement("afterend", l);
                var c = l.querySelector(".ot-label-status"), d = l.querySelector("input");
                d.setAttribute("id", t + "-leg-out"), l.querySelector("label").setAttribute("for", t + "-leg-out"), r.IsLegIntToggle = !0;
                var u = En.isGroupActive(r);
                Kt.PCShowConsentLabels ? c.innerHTML = u ? Kt.PCActiveText : Kt.PCInactiveText : Rt.removeChild(c), Rt.setCheckedAttribute(null, d, u), r.IsLegIntToggle = !1
            }
        }, Wn.prototype.setSubGroupActive = function (e, t) {
            if (t) {
                var o = e.group, n = e.subgroup, r = e.subGroupClone, i = yo.getGrpStatus(o).toLowerCase();
                r.querySelector("input").setAttribute("checked", ""), i === ze && -1 === Gt.indexOf(n.Type) && (r.querySelector("input").disabled = !0, r.querySelector("input").setAttribute("disabled", "true"))
            }
        }, Wn.prototype.setSubGroupsProperties = function (e) {
            var t = e.removeConsentToggle, o = e.subGroupToggle, n = e.subGroupClone, r = e.status, i = e.subgroup,
                s = e.grpEl, a = e.pcName, l = e.json, c = e.subGrpElClone, d = e.ulParentContainerEle;
            if (t && (o.classList.add("ot-hide-tgl"), o.querySelector("input").setAttribute(this._ariaHidden, "true")), r !== ze || t || (o && o.parentElement.removeChild(o), n.querySelector(lo.P_Tgl_Cntr).classList.add("ot-always-active-subgroup"), Mn.setAlwaysActive(n, !0)), "COOKIE" === i.Type && -1 !== i.Parent.indexOf("STACK") && Dt(c, "display: none;"), Qt(d).append(n), Nt.isV2Template) {
                var u = s;
                "otPcTab" === a ? u = s.querySelector("" + lo.P_Desc_Container) : l.PCenterEnableAccordion && (u = s.querySelector(lo.P_Acc_Txt)), u.insertAdjacentElement("beforeend", c)
            } else {
                var p = s.querySelector(lo.P_Category_Item + " " + lo.P_Ven_Lst_Cntr);
                p && p.insertAdjacentElement("beforebegin", c)
            }
            if (Jt.showVendorService && Kt.VendorServiceConfig.PCVSCategoryView) {
                var h = d;
                Fn.insertVendorServiceHtml(i, h)
            }
        }, Wn.prototype.getInputEleForCategory = function (e) {
            return Jt.showVendorService && Kt.PCCategoryStyle === le.Checkbox && e.classList.add("ot-checkbox-consent"), Mn.getInputEle()
        }, Wn.prototype.getInputEle = function () {
            return "IAB2" !== Kt.IabType && Kt.PCTemplateUpgrade ? Hn() : ho.toggleEl.cloneNode(!0)
        }, Wn.prototype.setToggle = function (e, t, o, n, r) {
            var i = Mn.getInputEleForCategory(e);
            i.querySelector("input").classList.add("category-switch-handler");
            var s = i.querySelector("input"), a = e.querySelector(lo.P_Category_Header), l = En.isGroupActive(o),
                c = yo.getGrpStatus(o).toLowerCase() === ze, d = o.OptanonGroupId.toString(), u = !0;
            if ("IAB2" !== zt.iabType || o.Type !== It && o.Type !== Vt || o.HasConsentOptOut || (u = !1), Qt(i.querySelector("label")).attr("for", n), Qt(i.querySelector(".ot-label-txt")).html(o.GroupName), zt.legIntSettings.PAllowLI && o.Type === It && o.HasLegIntOptOut) if (zt.legIntSettings.PShowLegIntBtn) Mn.setLegIntButton(e, o, !0, t); else {
                var p = i.cloneNode(!0);
                o.IsLegIntToggle = !0;
                var h = En.isGroupActive(o), g = p.querySelector(".ot-label-status");
                Kt.PCShowConsentLabels ? g.innerHTML = h ? Kt.PCActiveText : Kt.PCInactiveText : Rt.removeChild(g), o.IsLegIntToggle = !1, En.setInputID(p.querySelector("input"), n + "-leg-out", d, h, r), Qt(p.querySelector("label")).attr("for", n + "-leg-out"), a.insertAdjacentElement("afterend", p)
            }
            var C = i.querySelector(".ot-label-status");
            Kt.PCShowConsentLabels ? C.innerHTML = l ? Kt.PCActiveText : Kt.PCInactiveText : Rt.removeChild(C);
            var y = Kt.PCCategoryStyle === le.Toggle;
            this.hideToggleContainer(c, u, y, i), u && this.setAlwaysActiveOrToggleInput(o, e, i, s, n, r), Mn.setNoAccordionHeader(e, c)
        }, Wn.prototype.setNoAccordionHeader = function (e, t) {
            if ("IAB2" !== Kt.IabType && Kt.PCTemplateUpgrade) {
                var o = Kt.PCCategoryStyle === le.Checkbox;
                if (Kt.PCAccordionStyle === J.NoAccordion && o) {
                    var n = document.createElement("div");
                    n.classList.add("ot-acc-hdr");
                    var r = e.querySelector(".ot-chkbox"), i = e.querySelector(".ot-always-active"),
                        s = e.querySelector(lo.P_Category_Header);
                    r && n.appendChild(r), n.appendChild(s), t && n.appendChild(i), e.insertBefore(n, e.firstChild)
                }
            }
        }, Wn.prototype.hideToggleContainer = function (e, t, o, n) {
            !e && t || !o || (n.classList.add("ot-hide-tgl"), n.querySelector("input").setAttribute(this._ariaHidden, "true"))
        }, Wn.prototype.setAlwaysActiveOrToggleInput = function (e, t, o, n, r, i) {
            var s = "always active" === yo.getGrpStatus(e).toLowerCase(), a = Kt.PCCategoryStyle === le.Toggle,
                l = e.OptanonGroupId.toString(), c = En.isGroupActive(e), d = t.querySelector(lo.P_Category_Header);
            "IAB2" !== Kt.IabType && Kt.PCTemplateUpgrade ? (s && Kt.PCShowAlwaysActiveToggle && (Mn.setAlwaysActive(t), o.querySelector("input").setAttribute("disabled", "true")), s && a || Mn.insertAccordionInputHeader(d, o), En.setInputID(n, r, l, c, i), Mn.insertAccordionPointer(t, d)) : (Mn.insertAccordionPointer(t, d), s ? Kt.PCShowAlwaysActiveToggle && Mn.setAlwaysActive(t) : (Mn.insertAccordionInputHeader(d, o), En.setInputID(n, r, l, c, i)))
        }, Wn.prototype.setOptOutSignalVisibility = function (e) {
            var t = !0 === navigator.globalPrivacyControl && zt.gpcForAGrpEnabled,
                o = go.isAlertBoxClosedAndValid() && En.isAnyGroupOptedOut();
            Kt.PCShowOptOutSignal && (t || o || zt.previewMode) ? e.classList.remove("ot-hide") : e.classList.add("ot-hide")
        }, Wn.prototype.setOptOutSignalNotification = function (e) {
            var t = io.createOptOutSignalElement(e, !0);
            Mn.setOptOutSignalVisibility(t)
        }, Wn.prototype.insertAccordionInputHeader = function (e, t) {
            var o = Mn.getPositionForInputEle();
            e.insertAdjacentElement(o, t)
        }, Wn.prototype.getPositionForInputEle = function () {
            var e = "beforebegin";
            return "IAB2" !== Kt.IabType && Kt.PCTemplateUpgrade ? Kt.PCCategoryStyle === le.Toggle && (e = "afterend") : e = "afterend", e
        }, Wn.prototype.insertAccordionPointer = function (e, t) {
            if (e.classList.add("ot-vs-config"), Kt.PCenterEnableAccordion) if ("IAB2" !== Kt.IabType && Kt.PCTemplateUpgrade) {
                var o = e.querySelector(lo.P_Acc_Header), n = void 0, r = void 0;
                n = Kt.PCAccordionStyle === J.Caret ? (r = "beforeend", ho.arrowEl.cloneNode(!0)) : (r = Kt.PCCategoryStyle === le.Checkbox ? "beforeend" : "afterbegin", ho.plusMinusEl.cloneNode(!0)), o.insertAdjacentElement(r, n)
            } else Kt.PCAccordionStyle === J.Caret ? t.insertAdjacentElement("afterend", ho.arrowEl.cloneNode(!0)) : t.insertAdjacentElement("beforebegin", ho.plusMinusEl.cloneNode(!0))
        }, Wn.prototype.setToggleProps = function (e, t, o, n, r) {
            var i = e.querySelectorAll("input:not(.cookie-subgroup-handler)"), s = e.querySelectorAll("label"),
                a = En.isGroupActive(o), l = o.CustomGroupId, c = e.querySelector(".label-text");
            c && Qt(c).html(o.GroupName);
            for (var d = 0; d < i.length; d++) if (s[d] && Qt(s[d]).attr("for", n), 2 <= i.length && 0 === d) Qt(i[d]).attr("id", n + "-toggle"); else {
                var u = !0;
                if ("IAB2" !== zt.iabType || o.Type !== It && o.Type !== Vt || o.HasConsentOptOut || (u = !1), zt.legIntSettings.PAllowLI && o.Type === It && o.HasLegIntOptOut) if (zt.legIntSettings.PShowLegIntBtn) Mn.setLegIntButton(e, o, !0, t); else {
                    var p = e.querySelector(lo.P_Tgl_Cntr + ":not(" + lo.P_Subgrp_Tgl_Cntr + ")") || e.querySelector(".ot-toggle"),
                        h = p.cloneNode(!0);
                    p.insertAdjacentElement("afterend", h);
                    var g = h.querySelector("input");
                    o.IsLegIntToggle = !0;
                    var C = En.isGroupActive(o);
                    o.IsLegIntToggle = !1, En.setInputID(g, n + "-leg-out", l, C, r), Qt(h.querySelector("label")).attr("for", n + "-leg-out"), Rt.removeChild(h.querySelector(lo.P_Arrw_Cntr))
                }
                var y = yo.getGrpStatus(o).toLowerCase() === ze;
                if (y || !u) {
                    var f = i[d].closest(".ot-toggle");
                    f && (f.classList.add("ot-hide-tgl"), f.querySelector("input").setAttribute(this._ariaHidden, !0))
                }
                u && (y && Mn.setAlwaysActive(e), En.setInputID(i[d], n, l, a, r))
            }
        }, Wn.prototype.setAlwaysActive = function (e, t) {
            void 0 === t && (t = !1);
            var o = zt.pcName;
            if (o === ht || o === gt || t) e.querySelector(lo.P_Tgl_Cntr).insertAdjacentElement("afterbegin", Qt("<div class='ot-always-active'>" + Kt.AlwaysActiveText + "</div>", "ce").el); else {
                var n = e.querySelector(lo.P_Category_Header);
                !Nt.isV2Template && Kt.PCenterEnableAccordion && (n = e.querySelector(lo.P_Arrw_Cntr)), Qt(n).el.insertAdjacentElement("afterend", Qt("<div class='ot-always-active'>" + Kt.AlwaysActiveText + "</div>", "ce").el)
            }
            if (Kt.PCenterEnableAccordion) {
                var r = e.querySelector(lo.P_Acc_Header);
                r && r.classList.add("ot-always-active-group")
            } else {
                var i = e.querySelector("" + lo.P_Desc_Container);
                i && i.classList.add("ot-always-active-group"), e.classList.add("ot-always-active-group")
            }
        }, Wn.prototype.setPcTabLayout = function (e, t, o) {
            var n = e(".ot-tab-desc");
            if ("otPcTab" === zt.pcName) if (o && e("#onetrust-pc-sdk " + lo.P_Category_Grp).insertAdjacentElement("afterbegin", o), n && 640 < window.innerWidth && Qt(n).append(t.querySelectorAll("#onetrust-pc-sdk " + lo.P_Desc_Container)), Kt.IsIabEnabled) e(lo.P_Desc_Container + " .category-vendors-list-handler").innerHTML = Kt.VendorListText + "&#x200E;"; else {
                var r = e(lo.P_Desc_Container + " .category-vendors-list-handler");
                r && r.parentElement.removeChild(r)
            }
        }, Wn.prototype.setVendorListClass = function (e, t) {
            Nt.isV2Template ? Kt.PCAccordionStyle === J.Caret && (Qt(e("#onetrust-pc-sdk " + lo.P_Vendor_List)).addClass("ot-enbl-chr"), Kt.PCenterEnableAccordion && Qt(e("#onetrust-pc-sdk " + lo.P_Content)).addClass("ot-enbl-chr")) : Qt(t.querySelector(lo.P_Sub_Grp_Cntr)).remove()
        }, Wn.prototype.setPCHeader = function (e, t) {
            var o = zt.pcName, n = e(lo.P_Li_Hdr) || t.querySelector(lo.P_Li_Hdr);
            zt.legIntSettings.PAllowLI && zt.grpContainLegalOptOut && "IAB2" === Kt.IabType && !zt.legIntSettings.PShowLegIntBtn ? (n.querySelector("span:first-child").innerText = Kt.ConsentText, n.querySelector("span:last-child").innerText = Kt.LegitInterestText, Nt.isV2Template && (n.querySelector("span:first-child").innerText = Kt.PCenterConsentText, n.querySelector("span:last-child").innerText = Kt.PCenterLegIntColumnHeader), Kt.PCenterEnableAccordion && n ? n.classList.add("ot-leg-border-color") : "otPcList" === o && t.insertAdjacentElement("afterbegin", n)) : (Rt.removeChild(e("#onetrust-pc-sdk " + lo.P_Li_Hdr)), Rt.removeChild(t.querySelector(lo.P_Li_Hdr)))
        }, Wn);

    function Wn() {
        this._ariaHidden = "aria-hidden", this._ariaLabel = "aria-label"
    }

    var Jn, Yn = (Xn.prototype.updateGtmMacros = function (e) {
        void 0 === e && (e = !0);
        var n = [];
        Jt.groupsConsent.forEach(function (e) {
            var t = e.replace(":1", ""), o = yo.getGrpStatus(yo.getGroupById(t)).toLowerCase() === ze;
            Rt.endsWith(e, ":1") && (zo.canSoftOptInInsertForGroup(t) || o) && n.push(t)
        }), Jt.hostsConsent.forEach(function (e) {
            Rt.endsWith(e, ":1") && n.push(e.replace(":1", ""))
        }), Jt.showGeneralVendors && Kt.GenVenOptOut && Kt.GeneralVendors.forEach(function (e) {
            Jt.genVendorsConsent[e.VendorCustomId] && (Jt.softOptInGenVendors.includes(e.VendorCustomId) && Ho.isLandingPage() || n.push(e.VendorCustomId))
        }), Jt.vsIsActiveAndOptOut && Jt.getVendorsInDomain().forEach(function (e) {
            Jt.vsConsent.get(e.CustomVendorServiceId) && n.push(e.CustomVendorServiceId)
        });
        var t = "," + Rt.arrToStr(n) + ",";
        Kt.GoogleConsent.GCEnable && !zt.otDataLayer.ignore && this.updateGCMTags(n), window.OnetrustActiveGroups = t, window.OptanonActiveGroups = t, zt.gcmUpdateCallback && zt.gcmUpdateCallback(), zt.otDataLayer.ignore || void 0 === this._window[zt.otDataLayer.name] || this._window[zt.otDataLayer.name].constructor !== Array ? !zt.otDataLayer.ignore && zt.otDataLayer.name && (this._window[zt.otDataLayer.name] = [{
            event: "OneTrustLoaded",
            OnetrustActiveGroups: t
        }, {
            event: "OptanonLoaded",
            OptanonActiveGroups: t
        }]) : (this._window[zt.otDataLayer.name].push({
            event: "OneTrustLoaded",
            OnetrustActiveGroups: t
        }), this._window[zt.otDataLayer.name].push({
            event: "OptanonLoaded",
            OptanonActiveGroups: t
        })), this.dispatchEvents(e, n, t)
    }, Xn.prototype.dispatchEvents = function (e, t, o) {
        var n, r;
        !e && zt.gtmUpdatedinStub || (n = new CustomEvent("consent.onetrust", {detail: t}));
        var i = Ft.readCookieParam(Fe.OPTANON_CONSENT, "groups"),
            s = Jt.fireOnetrustGrp || !i || e || !zt.gtmUpdatedinStub;
        s && (Jt.fireOnetrustGrp = !1, !zt.otDataLayer.ignore && this._window[zt.otDataLayer.name] && this._window[zt.otDataLayer.name].constructor === Array && this._window[zt.otDataLayer.name].push({
            event: "OneTrustGroupsUpdated",
            OnetrustActiveGroups: o
        }), r = new CustomEvent("OneTrustGroupsUpdated", {detail: t})), setTimeout(function () {
            n && s && window.dispatchEvent(n), r && window.dispatchEvent(r)
        })
    }, Xn.prototype.updateGCMTags = function (e) {
        var t = {};
        if (this.canUpdateGCMCategories()) {
            if (Kt.GoogleConsent.GCAdStorage !== ft) {
                var o = e.includes(Kt.GoogleConsent.GCAdStorage) ? me.granted : me.denied;
                t[ve.ad_storage] = o
            }
            if (Kt.GoogleConsent.GCAnalyticsStorage !== ft) {
                var n = e.includes(Kt.GoogleConsent.GCAnalyticsStorage) ? me.granted : me.denied;
                t[ve.analytics_storage] = n
            }
            if (Kt.GoogleConsent.GCFunctionalityStorage !== ft) {
                var r = e.includes(Kt.GoogleConsent.GCFunctionalityStorage) ? me.granted : me.denied;
                t[ve.functionality_storage] = r
            }
            if (Kt.GoogleConsent.GCPersonalizationStorage !== ft) {
                var i = e.includes(Kt.GoogleConsent.GCPersonalizationStorage) ? me.granted : me.denied;
                t[ve.personalization_storage] = i
            }
            if (Kt.GoogleConsent.GCSecurityStorage !== ft) {
                var s = e.includes(Kt.GoogleConsent.GCSecurityStorage) ? me.granted : me.denied;
                t[ve.security_storage] = s
            }
        }
        var a = Ft.getCookie(Fe.ALERT_BOX_CLOSED), l = zt.getRegionRule().Global;
        if ("function" != typeof window.gtag) {
            var c = this._window;
            window.gtag = function (e, t, o) {
                zt.otDataLayer.ignore || (c[zt.otDataLayer.name] ? c[zt.otDataLayer.name].push(arguments) : c[zt.otDataLayer.name] = [arguments])
            }
        }
        "function" == typeof window.gtag && (zt.gcmDevIdSet || (window.gtag(ge.set, "developer_id.dYWJhMj", !0), zt.gcmDevIdSet = !0), a && (l || (t[ve.region] = zt.gcmCountries), 0 !== Object.keys(t).length && window.gtag(ge.consent, ye.update, t)))
    }, Xn.prototype.canUpdateGCMCategories = function () {
        return Kt.GoogleConsent.GCAdStorage !== ft || Kt.GoogleConsent.GCAnalyticsStorage !== ft || Kt.GoogleConsent.GCFunctionalityStorage !== ft || Kt.GoogleConsent.GCPersonalizationStorage !== ft || Kt.GoogleConsent.GCSecurityStorage !== ft
    }, Xn);

    function Xn() {
        this._window = window
    }

    var Qn, $n, Zn, er = "Banner", tr = "Preference Center", or = "API", nr = "Close", rr = "Allow All",
        ir = "Reject All", sr = "Confirm", ar = "Confirm", lr = "Continue without Accepting",
        cr = (dr.prototype.BannerPushDownHandler = function () {
            this.checkIsBrowserIE11OrBelow() || (Zn.pushPageDown(Un), Qt(window).on("resize", function () {
                "none" !== Qt(Un).css("display") && Zn.pushPageDown(Un)
            }))
        }, dr.prototype.checkIsBrowserIE11OrBelow = function () {
            var e = window.navigator.userAgent;
            return 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/")
        }, dr.prototype.addOTCssPropertiesToBody = function (e, t) {
            var o = Zn.getCssData(e, t);
            Jt.customerStyles.set(e, o), Zn.setStylesOnBody(t), e === Qn.PC && Zn.setStylesOnHtml(t)
        }, dr.prototype.removeAddedOTCssStyles = function (e) {
            void 0 === e && (e = Qn.Banner);
            var t = Jt.customerStyles.get(e);
            t ? (Zn.setStylesOnBody(t.customerBodyCSS), Zn.setStylesOnHtml(t.customerHtmlCSS), Jt.customerStyles.delete(e)) : 0 < Jt.customerStyles.size && Jt.customerStyles.forEach(function (e, t) {
                return Zn.removeAddedOTCssStyles(t)
            })
        }, dr.prototype.getCssData = function (e, t) {
            var o = Qt("body").el[0], n = Qt("html").el[0], r = {}, i = {}, s = Jt.customerStyles.get(e);
            if (s) {
                var a = s.scriptBodyCSS, l = s.customerBodyCSS, c = s.customerHtmlCSS;
                o.style.top !== a.top && (l.top = o.style.top), o.style.position !== a.position && (l.position = o.style.position), o.style.overflow !== a.overflow && (l.overflow = o.style.overflow), n.style.overflow !== a.overflow && (c.overflow = n.style.overflow), r = l, i = c
            } else r = {
                top: o.style.top,
                position: o.style.position,
                overflow: o.style.overflow
            }, i = {overflow: n.style.overflow};
            return {scriptBodyCSS: t, customerBodyCSS: r, customerHtmlCSS: i}
        }, dr.prototype.setStylesOnBody = function (e) {
            var t = Qt("body").el[0];
            Zn.setStylesOnHtmlElement(t, e)
        }, dr.prototype.setStylesOnHtml = function (e) {
            var t = Qt("html").el[0];
            Zn.setStylesOnHtmlElement(t, {overflow: e.overflow})
        }, dr.prototype.setStylesOnHtmlElement = function (e, t) {
            for (var o = "", n = 0, r = Object.entries(t); n < r.length; n++) {
                var i = r[n], s = i[0], a = i[1];
                a ? o += s + ": " + a + ";" : e.style.removeProperty(s)
            }
            o && Dt(e, o, !0)
        }, dr.prototype.pushPageDown = function (e) {
            var t = Qt(e).height() + "px";
            Qt(e).show().css("\n            bottom: auto;\n            position: absolute;\n            top: -" + t + ";\n        ");
            var o = Jt.isPCVisible ? Qn.PC : Qn.Banner, n = {position: "relative", top: t};
            Jt.isPCVisible && (n.overflow = "hidden"), Zn.addOTCssPropertiesToBody(o, n)
        }, dr);

    function dr() {
    }

    ($n = Qn = Qn || {}).Banner = "Banner", $n.PC = "PC";
    var ur, pr = (hr.prototype.showConsentNotice = function () {
        switch (!Kt.NoBanner || Kt.ForceConsent ? Qt(".onetrust-pc-dark-filter").removeClass("ot-hide") : Qt(".onetrust-pc-dark-filter").addClass("ot-hide"), Qt("#onetrust-pc-sdk").removeClass("ot-hide"), zt.pcName) {
            case pt:
                Qt("#onetrust-pc-sdk").el[0].classList.contains("ot-animated") || Qt("#onetrust-pc-sdk").addClass("ot-animated");
                var e = Kt.PreferenceCenterPosition, t = Kt.useRTL, o = t ? "right" : "left", n = t ? "left" : "right";
                Qt("#onetrust-pc-sdk").el[0].classList.contains("ot-slide-out-" + ("right" === e ? n : o)) && Qt("#onetrust-pc-sdk").removeClass("ot-slide-out-" + ("right" === e ? n : o)), Qt("#onetrust-pc-sdk").addClass("ot-slide-in-" + ("right" === e ? n : o))
        }
        En.setAllowAllButton(), Ln.setPCFocus(Ln.getPCElements()), Kt.NoBanner && Kt.ScrollCloseBanner || this.pcHasScroll()
    }, hr.prototype.hideConsentNoticeV2 = function () {
        if (0 !== Qt(this.ONETRUST_PC_SDK).length) {
            if (Nt.isV2Template && this.closePCText(), Kt.ForceConsent && !io.isCookiePolicyPage(Kt.AlertNoticeText) && !go.isAlertBoxClosedAndValid() && Kt.ShowAlertNotice ? Qt("" + this.ONETRUST_PC_DARK_FILTER).css("z-index: 2147483645;").show() : Qt("" + this.ONETRUST_PC_DARK_FILTER).fadeOut(Kt.PCLayout.Panel ? 500 : 400), Kt.PCLayout.Panel) {
                var e = Kt.PreferenceCenterPosition, t = Kt.useRTL, o = t ? "right" : "left", n = t ? "left" : "right";
                Qt("" + this.ONETRUST_PC_SDK).removeClass("ot-slide-in-" + ("right" === e ? n : o)), Qt("" + this.ONETRUST_PC_SDK).addClass("ot-slide-out-" + ("right" === e ? n : o))
            }
            Qt("" + this.ONETRUST_PC_SDK).fadeOut(Kt.PCLayout.Panel ? 500 : 400), Jt.isPCVisible = !1, Jt.pcLayer = w.Banner, this.setFocus()
        } else this.setFocusOnPage()
    }, hr.prototype.setFocus = function () {
        if (Jt.pcSource || go.isAlertBoxClosedAndValid()) Jt.pcSource ? (Jt.pcSource.focus(), Jt.pcSource = null) : Kt.BInitialFocus ? io.resetFocusToBody() : this.setFocusOnPage(); else {
            var e = Qt("#onetrust-banner-sdk #onetrust-pc-btn-handler").el[0];
            e && e.focus()
        }
    }, hr.prototype.setFocusOnPage = function () {
        var e = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
        Jt.isKeyboardUser && e.length && e[0].focus()
    }, hr.prototype.closePCText = function () {
        var e = document.querySelector("#onetrust-pc-sdk span[aria-live]"), t = Kt.AboutCookiesText;
        e.innerText = t + " " + Kt.pcDialogClose
    }, hr.prototype.pcHasScroll = function () {
        var e = Qt(lo.P_Grp_Container).el[0] || Qt("#onetrust-pc-sdk " + lo.P_Content).el[0];
        if (e.scrollHeight > e.clientHeight) {
            this.bodyStyleChanged = !0;
            var t = Qt("body");
            t && t.length && Zn.addOTCssPropertiesToBody(Qn.PC, {overflow: "hidden"})
        }
    }, hr.prototype.checkIfPcSdkContainerExist = function () {
        return !Qt("#onetrust-pc-sdk").length
    }, hr);

    function hr() {
        this.ONETRUST_PC_SDK = "#onetrust-pc-sdk", this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter", this.bodyStyleChanged = !1
    }

    var gr, Cr = (yr.prototype.init = function () {
        this.insertHtml(), this.insertCss(), this.showNty(), this.initHandler()
    }, yr.prototype.getContent = function () {
        return p(this, void 0, void 0, function () {
            return g(this, function (e) {
                return [2, oo.getSyncNtfyContent().then(function (e) {
                    Jt.syncNtfyGrp = {name: e.name, html: atob(e.html), css: e.css}
                })]
            })
        })
    }, yr.prototype.insertHtml = function () {
        function e(e) {
            return t.querySelector(e)
        }

        this.removeHtml();
        var t = document.createDocumentFragment(), o = document.createElement("div");
        Qt(o).html(Jt.syncNtfyGrp.html);
        var n = o.querySelector(this.El);
        Kt.BannerRelativeFontSizesToggle && Qt(n).addClass("otRelFont"), Kt.useRTL && Qt(n).attr("dir", "rtl"), Qt(t).append(n);
        var r = Kt.NtfyConfig;
        this.initHtml("Sync", r.Sync, e, t.querySelector(this.El)), r.ShowCS ? Qt(e(".ot-pc-handler")).html(r.CSTxt) : (Qt(n).addClass("ot-hide-csbtn"), e(".ot-sync-btncntr").parentElement.removeChild(e(".ot-sync-btncntr")));
        var i = document.createElement("div");
        Qt(i).append(t), Qt("#onetrust-consent-sdk").append(i.firstChild)
    }, yr.prototype.initHandler = function () {
        Qt(this.El + " .ot-sync-close-handler").on("click", function () {
            return gr.close()
        })
    }, yr.prototype.showNty = function () {
        var e = Qt(this.El);
        e.css("bottom: -300px;"), e.animate({bottom: "1em;"}, 1e3), setTimeout(function () {
            e.css("bottom: 1rem;")
        }, 1e3), e.focus()
    }, yr.prototype.changeState = function () {
        setTimeout(function () {
            gr.refreshState()
        }, 1500)
    }, yr.prototype.refreshState = function () {
        function e(e) {
            return t.querySelector(e)
        }

        var t = Qt(this.El).el[0];
        t.classList.add("ot-nty-complete"), t.classList.remove("ot-nty-sync");
        var o = Kt.NtfyConfig;
        this.initHtml("Complete", o.Complete, e, t), o.ShowCS && ("LINK" === o.CSType && Qt(e(".ot-pc-handler")).addClass("ot-pc-link"), Qt(".ot-sync-btncntr").show("inline-block"), this.alignContent(), Qt(window).on("resize", function () {
            return gr.resizeEvent
        })), setTimeout(function () {
            gr.close()
        }, 1e3 * Kt.NtfyConfig.NtfyDuration)
    }, yr.prototype.insertCss = function () {
        var e = document.getElementById("onetrust-style");
        e.innerHTML += Jt.syncNtfyGrp.css, e.innerHTML += this.addCustomStyles()
    }, yr.prototype.addCustomStyles = function () {
        var e = Kt.NtfyConfig, t = e.Sync, o = e.Complete, n = e.CSButton, r = e.CSLink;
        return "\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync {\n            background-color: " + t.BgColor + ";\n            border: 1px solid " + t.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-refresh>g {\n            fill: " + t.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync #ot-sync-title {\n            text-align: " + t.TitleAlign + ";\n            color: " + t.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync .ot-sync-desc  {\n            text-align: " + t.DescAlign + ";\n            color: " + t.DescColor + "; \n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete {\n            background-color: " + o.BgColor + ";\n            border: 1px solid " + o.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-check>g {\n            fill: " + o.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete #ot-sync-title {\n            text-align: " + o.TitleAlign + ";\n            color: " + o.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete .ot-sync-desc  {\n            text-align: " + o.DescAlign + ";\n            color: " + o.DescColor + "; \n        }\n        " + ("BUTTON" === e.CSType ? "\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler {\n            background-color: " + n.BgColor + ";\n            border: 1px solid " + n.BdrColor + ";\n            color: " + n.Color + ";\n            text-align: " + n.Align + ";\n        }" : " #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler.ot-pc-link {\n            color: " + r.Color + ";\n            text-align: " + r.Align + ";\n        }") + "\n        "
    }, yr.prototype.initHtml = function (e, t, o, n) {
        var r = "Sync" === e ? ".ot-sync-refresh" : ".ot-sync-check",
            i = "Complete" === e ? ".ot-sync-refresh" : ".ot-sync-check";
        t.ShowIcon ? (Qt(o(r)).show(), Qt(o(i)).hide(), Qt(o(".ot-sync-icon")).show("inline-block"), n.classList.remove("ot-hide-icon")) : (Qt(o(".ot-sync-icon")).hide(), n.classList.add("ot-hide-icon")), t.Title ? Qt(o("#ot-sync-title")).html(t.Title) : Qt(o("#ot-sync-title")).hide(), t.Desc ? Qt(o(".ot-sync-desc")).html(t.Desc) : Qt(o(".ot-sync-desc")).hide(), t.ShowClose ? (Qt(o(".ot-sync-close-handler")).show("inline-block"), Qt(o(".ot-close-icon")).attr("aria-label", t.CloseAria), n.classList.remove("ot-hide-close")) : (Qt(o(".ot-sync-close-handler")).hide(), n.classList.add("ot-hide-close"))
    }, yr.prototype.close = function () {
        this.hideSyncNtfy(), io.resetFocusToBody()
    }, yr.prototype.hideSyncNtfy = function () {
        Kt.NtfyConfig.ShowCS && window.removeEventListener("resize", gr.resizeEvent), Qt("#ot-sync-ntfy").fadeOut(400)
    }, yr.prototype.removeHtml = function () {
        var e = Qt(this.El).el;
        e && Rt.removeChild(e)
    }, yr.prototype.alignContent = function () {
        Qt(".ot-sync-btncntr").el[0].clientHeight > Qt(".ot-sync-titlecntr").el[0].clientHeight && (Qt(".ot-sync-titlecntr").addClass("ot-pos-abs"), Qt(".ot-sync-btncntr").addClass("ot-pos-rel"))
    }, yr.prototype.resizeEvent = function () {
        window.innerWidth <= 896 && gr.alignContent()
    }, yr);

    function yr() {
        this.El = "#ot-sync-ntfy"
    }

    var fr, vr = (kr.prototype.toggleVendorConsent = function (e, t) {
        void 0 === e && (e = []), void 0 === t && (t = null), e.length || (e = Jt.oneTrustIABConsent.vendors), e.forEach(function (e) {
            var t = e.split(":"), o = t[0], n = t[1],
                r = Qt(lo.P_Vendor_Container + " ." + lo.P_Ven_Ctgl + ' [vendorid="' + o + '"]').el[0];
            r && Rt.setCheckedAttribute("", r, "true" === n)
        });
        var o = Qt("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0];
        if (o) {
            var n = Rt.getActiveIdArray(Rt.distinctArray(e));
            null === t && (t = n.length === e.length), t || 0 === n.length ? o.parentElement.classList.remove(co.P_Line_Through) : o.parentElement.classList.add(co.P_Line_Through), Rt.setCheckedAttribute("", o, t)
        }
    }, kr.prototype.toggleVendorLi = function (e, t) {
        void 0 === e && (e = []), void 0 === t && (t = null), e.length || (e = Jt.oneTrustIABConsent.legIntVendors), e.forEach(function (e) {
            var t = e.split(":"), o = t[0], n = t[1],
                r = Qt(lo.P_Vendor_Container + " ." + lo.P_Ven_Ltgl + ' [leg-vendorid="' + o + '"]').el[0];
            r && Rt.setCheckedAttribute("", r, "true" === n)
        });
        var o = Qt("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0];
        if (o) {
            var n = Rt.getActiveIdArray(Rt.distinctArray(e));
            null === t && (t = n.length === e.length), t || 0 === n.length ? o.parentElement.classList.remove(co.P_Line_Through) : o.parentElement.classList.add(co.P_Line_Through), Rt.setCheckedAttribute("", o, t)
        }
    }, kr.prototype.updateVendorLegBtns = function (e) {
        void 0 === e && (e = []), e.length || (e = Jt.oneTrustIABConsent.legIntVendors), e.forEach(function (e) {
            var t = e.split(":"), o = t[0], n = t[1],
                r = Qt(lo.P_Vendor_Container + ' .ot-leg-btn-container[data-group-id="' + o + '"]').el[0];
            r && En.updateLegIntBtnElement(r, "true" === n)
        })
    }, kr);

    function kr() {
    }

    var mr, br = (Sr.prototype.setFilterList = function (t) {
        var o = this, n = Qt("#onetrust-pc-sdk " + lo.P_Fltr_Modal + " " + lo.P_Fltr_Option).el[0].cloneNode(!0);
        Qt("#onetrust-pc-sdk " + lo.P_Fltr_Modal + " " + lo.P_Fltr_Options).html(""), (Nt.isV2Template || Kt.PCLayout.Popup) && Qt("#onetrust-pc-sdk #filter-cancel-handler").html(Kt.PCenterCancelFiltersText || "Cancel"), !Nt.isV2Template && Kt.PCLayout.Popup || (Qt("#onetrust-pc-sdk " + lo.P_Clr_Fltr_Txt).html(Kt.PCenterClearFiltersText), Qt("#filter-btn-handler").el[0].setAttribute("aria-label", Kt.PCenterFilterText)), Qt("#onetrust-pc-sdk #filter-apply-handler").html(Kt.PCenterApplyFiltersText), t ? zt.consentableGrps.forEach(function (e) {
            (Jt.cookieListType === $.GenVen || Jt.cookieListType === $.HostAndGenVen ? e.Hosts.length || e.FirstPartyCookies.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length : e.Hosts.length || e.FirstPartyCookies.length) && o.filterGroupOptionSetter(n, e, t)
        }) : zt.iabGrps.forEach(function (e) {
            o.filterGroupOptionSetter(n, e, t)
        })
    }, Sr.prototype.setFilterListByGroup = function (e, t) {
        var o = this;
        if (!e || e.length <= 0) Qt("#onetrust-pc-sdk " + lo.P_Fltr_Modal + " " + lo.P_Fltr_Options).html(""); else {
            var n = Qt("#onetrust-pc-sdk " + lo.P_Fltr_Modal + " " + lo.P_Fltr_Option).el[0].cloneNode(!0);
            Qt("#onetrust-pc-sdk " + lo.P_Fltr_Modal + " " + lo.P_Fltr_Options).html(""), (Nt.isV2Template || Kt.PCLayout.Popup) && Qt("#onetrust-pc-sdk #filter-cancel-handler").html(Kt.PCenterCancelFiltersText || "Cancel"), !Nt.isV2Template && Kt.PCLayout.Popup || (Qt("#onetrust-pc-sdk " + lo.P_Clr_Fltr_Txt).html(Kt.PCenterClearFiltersText), Qt("#filter-btn-handler").el[0].setAttribute("aria-label", Kt.PCenterFilterText)), Qt("#onetrust-pc-sdk #filter-apply-handler").html(Kt.PCenterApplyFiltersText), e.forEach(function (e) {
                o.filterGroupOptionSetter(n, e, t)
            })
        }
    }, Sr.prototype.filterGroupOptionSetter = function (e, t, o) {
        var n = t.CustomGroupId, r = n + "-filter", i = e.cloneNode(!0);
        Qt(lo.P_Fltr_Modal + " " + lo.P_Fltr_Options).append(i), Qt(i.querySelector("input")).attr("id", r), Qt(i.querySelector("label")).attr("for", r), Nt.isV2Template ? Qt(i.querySelector(lo.P_Label_Txt)).html(t.GroupName) : Qt(i.querySelector("label span")).html(t.GroupName), Qt(i.querySelector("input")).attr(o ? "data-optanongroupid" : "data-purposeid", n)
    }, Sr);

    function Sr() {
        this.bodyScrollProp = "", this.htmlScrollProp = "", this.ONETRUST_PC_SDK = "#onetrust-pc-sdk", this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter"
    }

    var Pr, Tr = (Ar.prototype.initialiseCssReferences = function () {
        var e, t = "";
        document.getElementById("onetrust-style") ? e = document.getElementById("onetrust-style") : ((e = document.createElement("style")).id = "onetrust-style", Nt.moduleInitializer.CookieV2CSPEnabled && Jt.nonce && e.setAttribute("nonce", Jt.nonce)), zo.commonStyles && (t += zo.commonStyles), zo.bannerGroup && (t += zo.bannerGroup.css, Nt.fp.CookieV2SSR || (t += this.addCustomBannerCSS()), Kt.bannerCustomCSS && (t += Kt.bannerCustomCSS)), zo.preferenceCenterGroup && (t += zo.preferenceCenterGroup.css, t += this.addCustomPreferenceCenterCSS()), zo.cookieListGroup && !Nt.fp.CookieV2TrackingTechnologies && (t += zo.cookieListGroup.css, t += this.addCustomCookieListCSS()), Kt.cookiePersistentLogo && !Kt.cookiePersistentLogo.includes("ot_guard_logo.svg") && (t += ".ot-floating-button__front{background-image:url('" + io.updateCorrectUrl(Kt.cookiePersistentLogo) + "')}"), this.processedCSS = t, zt.ignoreInjectingHtmlCss || (e.textContent = t, Qt(document.head).append(e))
    }, Ar.prototype.setButonColor = function () {
        var e = Kt.pcButtonColor, t = Kt.pcButtonTextColor, o = Kt.pcLegIntButtonColor, n = Kt.pcLegIntButtonTextColor,
            r = "";
        if (e || t) {
            var i = t ? "color: " + t + ";" : "", s = e ? "background-color: " + e + ";border-color: " + e + ";" : "",
                a = zt.pcName === ut ? "#onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Category_Item + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk.ot-leg-opt-out " + lo.P_Li_Hdr + "{\n                    border-color: " + e + ";\n                }" : "",
                l = e ? "border-color: " + e + ";" : "", c = o ? "background-color: " + o + ";" : "",
                d = n ? "color: " + n + "; border-color: " + n + ";" : "";
            r = "#onetrust-consent-sdk #onetrust-pc-sdk\n            button:not(#clear-filters-handler):not(.ot-close-icon):not(#filter-btn-handler):not(.ot-remove-objection-handler):not(.ot-obj-leg-btn-handler):not([aria-expanded]):not(.ot-link-btn),\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-active-leg-btn {\n                " + s + "\n                " + i + "\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk ." + lo.P_Active_Menu + " {\n                " + l + "\n            }\n            " + a + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-remove-objection-handler{\n                background-color: transparent;\n                border: 1px solid transparent;\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn {\n                " + c + "\n                " + d + "\n            }"
        }
        return r
    }, Ar.prototype.setFocusBorderColor = function () {
        var e = "", t = Kt.PCFocusBorderColor;
        return t && (e += '\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-tgl input:focus + .ot-switch, .ot-switch .ot-switch-nob, .ot-switch .ot-switch-nob:before,\n            #onetrust-pc-sdk .ot-checkbox input[type="checkbox"]:focus + label::before,\n            #onetrust-pc-sdk .ot-chkbox input[type="checkbox"]:focus + label::before {\n                outline-color: ' + t + ";\n                outline-width: 1px;\n            }\n            #onetrust-pc-sdk .ot-host-item > button:focus, #onetrust-pc-sdk .ot-ven-item > button:focus {\n                border: 1px solid " + t + ";\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk *:focus,\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-vlst-cntr > a:focus {\n               outline: 1px solid " + t + ";\n            }"), e
    }, Ar.prototype.setCloseIconColor = function () {
        var e = "";
        return Kt.PCCloseButtonType === pe.Link && (e += "#onetrust-pc-sdk.ot-close-btn-link .ot-close-icon {color: " + Kt.PCContinueColor + "}"), e
    }, Ar.prototype.setTabLayoutStyles = function () {
        var e = "", t = Kt.pcMenuColor, o = Kt.pcMenuHighLightColor;
        return zt.pcName === gt && (t && (e += "#onetrust-consent-sdk #onetrust-pc-sdk .category-menu-switch-handler {\n                    background-color: " + t + "\n                }"), o && (e += "#onetrust-consent-sdk #onetrust-pc-sdk ." + lo.P_Active_Menu + " {\n                    background-color: " + o + "\n                }")), e
    }, Ar.prototype.setFocusIfTemplateUpgrade = function () {
        var e = "", t = Kt.PCFocusBorderColor;
        return !Kt.PCTemplateUpgrade && t && (e += '\n            #onetrust-pc-sdk input[type="checkbox"]:focus + .accordion-header,\n            #onetrust-pc-sdk .category-item .ot-switch.ot-toggle input:focus + .ot-switch-label,\n            #onetrust-pc-sdk .checkbox input:focus + label::after {\n                outline-color: ' + t + ";\n                outline-width: 1px;\n            }"), e
    }, Ar.prototype.setExtLnkUrl = function () {
        var e = "", t = io.updateCorrectUrl(Kt.OTExternalLinkLogo);
        return t && (e += "#onetrust-pc-sdk .ot-vlst-cntr .ot-ext-lnk {\n                    background-image: url('" + t + "');\n                }\n            "), e
    }, Ar.prototype.setCustomCss = function () {
        var e = "";
        return Kt.pcCustomCSS && (e += Kt.pcCustomCSS), e
    }, Ar);

    function Ar() {
        this.processedCSS = "", this.addCustomBannerCSS = function () {
            var e = Kt.backgroundColor, t = Kt.buttonColor, o = Kt.textColor, n = Kt.buttonTextColor,
                r = Kt.bannerMPButtonColor, i = Kt.bannerMPButtonTextColor, s = Kt.bannerAccordionBackgroundColor,
                a = Kt.BSaveBtnColor, l = Kt.BCategoryContainerColor, c = Kt.BLineBreakColor,
                d = Kt.BCategoryStyleColor, u = Kt.bannerLinksTextColor, p = Kt.BFocusBorderColor,
                h = "\n        " + (zt.bannerName === it ? e ? "#onetrust-consent-sdk #onetrust-banner-sdk .ot-sdk-container {\n                    background-color: " + e + ";}" : "" : e ? "#onetrust-consent-sdk #onetrust-banner-sdk {background-color: " + e + ";}" : "") + "\n            " + (o ? "#onetrust-consent-sdk #onetrust-policy-title,\n                    #onetrust-consent-sdk #onetrust-policy-text,\n                    #onetrust-consent-sdk .ot-b-addl-desc,\n                    #onetrust-consent-sdk .ot-dpd-desc,\n                    #onetrust-consent-sdk .ot-dpd-title,\n                    #onetrust-consent-sdk #onetrust-policy-text *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk .ot-dpd-desc *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk #onetrust-banner-sdk #banner-options *,\n                    #onetrust-banner-sdk .ot-cat-header,\n                    #onetrust-banner-sdk .ot-optout-signal\n                    {\n                        color: " + o + ";\n                    }" : "") + "\n            " + (s ? "#onetrust-consent-sdk #onetrust-banner-sdk .banner-option-details {\n                    background-color: " + s + ";}" : "") + "\n            " + (u ? " #onetrust-consent-sdk #onetrust-banner-sdk a[href],\n                    #onetrust-consent-sdk #onetrust-banner-sdk a[href] font,\n                    #onetrust-consent-sdk #onetrust-banner-sdk .ot-link-btn\n                        {\n                            color: " + u + ";\n                        }" : "");
            if ((t || n) && (h += "#onetrust-consent-sdk #onetrust-accept-btn-handler,\n                         #onetrust-banner-sdk #onetrust-reject-all-handler {\n                            " + (t ? "background-color: " + t + ";border-color: " + t + ";" : "") + "\n                " + (n ? "color: " + n + ";" : "") + "\n            }"), p && (h += "\n            #onetrust-consent-sdk #onetrust-banner-sdk *:focus,\n            #onetrust-consent-sdk #onetrust-banner-sdk:focus {\n               outline-color: " + p + ";\n               outline-width: 1px;\n            }"), (i || r) && (h += "\n            #onetrust-consent-sdk #onetrust-pc-btn-handler,\n            #onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link {\n                " + (i ? "color: " + i + "; border-color: " + i + ";" : "") + "\n                background-color:\n                " + (r && !Kt.BannerSettingsButtonDisplayLink ? r : e) + ";\n            }"), zt.bannerName === lt) {
                var g = void 0, C = void 0, y = void 0, f = void 0, v = void 0;
                a && (g = "color: " + n + ";border-color: " + n + ";background-color: " + a + ";"), l && (C = "background-color: " + l + ";"), c && (y = "border-color: " + c + ";"), d && (f = "background-color: " + d + ";", v = "border-color: " + d + ";"), p && (h += "\n                #onetrust-consent-sdk #onetrust-banner-sdk .ot-tgl input:focus+.ot-switch .ot-switch-nob,\n                #onetrust-consent-sdk #onetrust-banner-sdk .ot-chkbox input:focus + label::before {\n                    outline-color: " + p + ";\n                    outline-width: 1px;\n                }"), h += "#onetrust-banner-sdk .ot-bnr-save-handler {" + g + "}#onetrust-banner-sdk .ot-cat-lst {" + C + "}#onetrust-banner-sdk .ot-cat-bdr {" + y + "}#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob:before,#onetrust-banner-sdk .ot-chkbox input:checked~label::before {" + f + "}#onetrust-banner-sdk .ot-chkbox label::before,#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob {" + v + "}#onetrust-banner-sdk #onetrust-pc-btn-handler.cookie-setting-link {background: inherit}"
            }
            return Kt.BCloseButtonType === pe.Link && (h += "#onetrust-banner-sdk.ot-close-btn-link .banner-close-button {color: " + Kt.BContinueColor + "}"), h
        }, this.addCustomPreferenceCenterCSS = function () {
            var e = Kt.pcBackgroundColor, t = Kt.pcTextColor, o = Kt.pcLinksTextColor, n = Kt.PCenterEnableAccordion,
                r = Kt.pcAccordionBackgroundColor,
                i = "\n            " + (e ? (zt.pcName === ut ? "#onetrust-consent-sdk #onetrust-pc-sdk .group-parent-container,\n                        #onetrust-consent-sdk #onetrust-pc-sdk .manage-pc-container,\n                        #onetrust-pc-sdk " + lo.P_Vendor_List : "#onetrust-consent-sdk #onetrust-pc-sdk") + ",\n                #onetrust-consent-sdk " + lo.P_Search_Cntr + ",\n                " + (n && zt.pcName === ut ? "#onetrust-consent-sdk #onetrust-pc-sdk .ot-accordion-layout" + lo.P_Category_Item : "#onetrust-consent-sdk #onetrust-pc-sdk .ot-switch.ot-toggle") + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Tab_Grp_Hdr + " .checkbox,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Title + ":after\n                " + (Nt.isV2Template ? ",#onetrust-consent-sdk #onetrust-pc-sdk #ot-sel-blk,\n                        #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-cnt,\n                        #onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Triangle : "") + " {\n                    background-color: " + e + ";\n                }\n               " : "") + "\n            " + (t ? "#onetrust-consent-sdk #onetrust-pc-sdk h3,\n                #onetrust-consent-sdk #onetrust-pc-sdk h4,\n                #onetrust-consent-sdk #onetrust-pc-sdk h5,\n                #onetrust-consent-sdk #onetrust-pc-sdk h6,\n                #onetrust-consent-sdk #onetrust-pc-sdk p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Vendor_Container + " " + lo.P_Ven_Opts + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Policy_Txt + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Li_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Leg_Select_All + " span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Host_Cntr + " " + lo.P_Host_Info + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Fltr_Modal + " #modal-header,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-checkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Vendor_List + " " + lo.P_Select_Cntr + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Vendor_List + " " + lo.P_Vendor_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Vendor_List + " .back-btn-handler p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Vendor_List + " " + lo.P_Ven_Name + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Vendor_List + " " + lo.P_Vendor_Container + " .consent-category,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-label-status,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-chkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk #clear-filters-handler,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-optout-signal\n                {\n                    color: " + t + ";\n                }" : "") + "\n            " + (o ? " #onetrust-consent-sdk #onetrust-pc-sdk .privacy-notice-link,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler + a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-host-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Ven_Link + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Host_Cntr + " " + lo.P_Host_Title + " a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Host_Cntr + " " + lo.P_Acc_Header + " " + lo.P_Host_View_Cookies + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Host_Cntr + " " + lo.P_Host_Info + " a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Content + " " + lo.P_Policy_Txt + " .ot-link-btn,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info a\n                    {\n                        color: " + o + ";\n                    }" : "") + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler:hover { text-decoration: underline;}\n            " + (n && r ? "#onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Acc_Container + lo.P_Acc_Txt + ",\n            #onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Acc_Txt + " " + lo.P_Subgrp_Tgl_Cntr + " .ot-switch.ot-toggle\n             {\n                background-color: " + r + ";\n            }" : "") + "\n            " + (r ? " #onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Host_Cntr + " " + lo.P_Host_Info + ",\n                    " + (Nt.isV2Template ? "#onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Acc_Txt + " .ot-ven-dets" : "#onetrust-consent-sdk #onetrust-pc-sdk " + lo.P_Acc_Txt + " " + lo.P_Ven_Opts) + "\n                            {\n                                background-color: " + r + ";\n                            }" : "") + "\n        ";
            return i += Pr.setButonColor(), i += Pr.setFocusBorderColor(), i += Pr.setCloseIconColor(), i += Pr.setTabLayoutStyles(), i += Pr.setTabLayoutStyles(), i += Pr.setFocusIfTemplateUpgrade(), i += Pr.setExtLnkUrl(), i += Pr.setCustomCss()
        }, this.addCustomCookieListCSS = function () {
            var e = Kt.CookiesV2NewCookiePolicy ? "-v2.ot-sdk-cookie-policy" : "",
                t = "\n                " + (Kt.cookieListPrimaryColor ? "\n                    #ot-sdk-cookie-policy" + e + " h5,\n                    #ot-sdk-cookie-policy" + e + " h6,\n                    #ot-sdk-cookie-policy" + e + " li,\n                    #ot-sdk-cookie-policy" + e + " p,\n                    #ot-sdk-cookie-policy" + e + " a,\n                    #ot-sdk-cookie-policy" + e + " span,\n                    #ot-sdk-cookie-policy" + e + " td,\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-description {\n                        color: " + Kt.cookieListPrimaryColor + ";\n                    }" : "") + "\n                    " + (Kt.cookieListTableHeaderColor ? "#ot-sdk-cookie-policy" + e + " th {\n                        color: " + Kt.cookieListTableHeaderColor + ";\n                    }" : "") + "\n                    " + (Kt.cookieListGroupNameColor ? "#ot-sdk-cookie-policy" + e + " .ot-sdk-cookie-policy-group {\n                        color: " + Kt.cookieListGroupNameColor + ";\n                    }" : "") + "\n                    " + (Kt.cookieListTitleColor ? "\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-title {\n                            color: " + Kt.cookieListTitleColor + ";\n                        }\n                    " : "") + "\n            " + (e && Kt.CookieListTableHeaderBackgroundColor ? "\n                    #ot-sdk-cookie-policy" + e + " table th {\n                            background-color: " + Kt.CookieListTableHeaderBackgroundColor + ";\n                        }\n                    " : "") + "\n            ";
            return Kt.cookieListCustomCss && (t += Kt.cookieListCustomCss), t
        }
    }

    var Lr, Ir = (_r.prototype.showBanner = function () {
        var e = zt.bannerName, t = Qt(this.El);
        Jt.skipAddingHTML && "none" === getComputedStyle(t.el[0]).getPropertyValue("display") && e !== rt && e !== nt && e !== at ? t.css("display: block;") : Kt.BAnimation === de.SlideIn ? this.slideInAnimation(t, e) : Kt.BAnimation === de.FadeIn && t.addClass("ot-fade-in")
    }, _r.prototype.insertAlertHtml = function () {
        function e(e) {
            return t.querySelector(e)
        }

        var t = document.createDocumentFragment(), o = document.createElement("div");
        Qt(o).html(zo.bannerGroup.html);
        var n = o.querySelector("#onetrust-banner-sdk");
        this.setAriaModalForBanner(n), Nt.fp.CookieV2SSR ? (Qt(t).append(n), this._rejectBtn = e("#onetrust-reject-all-handler"), this._acceptBtn = e("#onetrust-accept-btn-handler")) : this.insertHtmlForNonSSRFlow(n, t, e, function (e) {
            return t.querySelectorAll(e)
        }), this.ssrAndNonSSRCommonHtml(t)
    }, _r.prototype.insertHtmlForNonSSRFlow = function (e, t, o, n) {
        var r = zt.bannerName;
        if (zo.bannerGroup) {
            Kt.BannerRelativeFontSizesToggle && Qt(e).addClass("otRelFont"), (Kt.BInitialFocus || Kt.BInitialFocusLinkAndButton) && (e.setAttribute("tabindex", "0"), e.setAttribute("role", "main")), Kt.useRTL && Qt(e).attr("dir", "rtl"), "IAB2" === zt.iabType && Kt.BannerDPDDescription.length && Qt(e).addClass("ot-iab-2");
            var i = Kt.BannerPosition;
            i && ("bottom-left" === i ? Qt(e).addClass("ot-bottom-left") : "bottom-right" === i ? Qt(e).addClass("ot-bottom-right") : Qt(e).addClass(i)), Qt(t).append(e), this.setBannerData(o);
            var s = this.setIAB2HtmlData(o);
            this.setAcceptAndRejectBtnHtml(o);
            var a = this.htmlForBannerButtons(e, o, n), l = Kt.showBannerCloseButton,
                c = Kt.BCloseButtonType === pe.Link;
            if (this.setWidthForFlatBanner(o, s, a), l && r === it && "IAB2" === zt.iabType && !c) {
                var d = o(".banner-close-btn-container");
                d.parentElement.removeChild(d), Qt(e).el.insertAdjacentElement("beforeEnd", d), Qt(o("#onetrust-banner-sdk .ot-sdk-container")).addClass("ot-top-cntr")
            }
            this.setBannerOptions(o, s), this.setBannerLogo(e, o)
        }
    }, _r.prototype.setBannerOptions = function (e, t) {
        var o = this, n = zt.bannerName, r = this.isCmpEnabled(), i = [{
            type: "purpose",
            titleKey: "BannerPurposeTitle",
            descriptionKey: "BannerPurposeDescription",
            identifier: "purpose-option"
        }, {
            type: "feature",
            titleKey: "BannerFeatureTitle",
            descriptionKey: "BannerFeatureDescription",
            identifier: "feature-option"
        }, {
            type: "information",
            titleKey: "BannerInformationTitle",
            descriptionKey: "BannerInformationDescription",
            identifier: "information-option"
        }], s = Qt(e(this._bannerOptionsSelector)).el;
        r ? (n === st ? this.setFloatingRoundedIconBannerCmpOptions(e, i) : (this.setCmpBannerOptions(e, i), n === lt && t.el.insertAdjacentElement("beforeend", s)), Qt(window).on("resize", function () {
            window.innerWidth <= 896 && o.setBannerOptionContent()
        })) : (zt.bannerName === it && (s = Qt(e(".banner-options-card")).el), Rt.removeChild(s))
    }, _r.prototype.setWidthForFlatBanner = function (e, t, o) {
        var n = zt.bannerName, r = Kt.showBannerCloseButton, i = this.hasNoActionButtons();
        n === nt && ("IAB2" === zt.iabType && (t.removeClass("ot-sdk-eight"), Kt.showBannerAcceptButton && o.insertAdjacentElement("afterbegin", this._acceptBtn), Kt.showBannerCookieSettings && o.insertAdjacentElement("beforeend", e("#onetrust-pc-btn-handler"))), r && !i && "IAB2" === zt.iabType ? t.addClass("ot-sdk-nine") : r && i ? t.addClass("ot-sdk-eleven") : !r && i ? t.addClass("ot-sdk-twelve") : r || i || "IAB2" !== zt.iabType || (t.addClass("ot-sdk-ten"), Qt(e(this._btnGrpParentSelector)).addClass("ot-sdk-two"), Qt(e(this._btnGrpParentSelector)).removeClass("ot-sdk-three")))
    }, _r.prototype.hasNoActionButtons = function () {
        return !Kt.showBannerAcceptButton && !Kt.showBannerCookieSettings && !Kt.BannerShowRejectAllButton
    }, _r.prototype.htmlForBannerButtons = function (e, t, o) {
        var n = zt.bannerName;
        this.hasNoActionButtons() && t(this._btnGrpParentSelector).parentElement.removeChild(t(this._btnGrpParentSelector));
        var r = Kt.showBannerCloseButton, i = Qt(o(".banner-close-button")).el, s = t("#onetrust-button-group"),
            a = Kt.BCloseButtonType === pe.Link;
        if (r) for (l = 0; l < i.length; l++) a ? (Qt(i[l]).html(Kt.BContinueText), Qt(e).addClass("ot-close-btn-link"), Qt(i[l]).addClass("ot-close-link"), Qt(i[l]).removeClass("onetrust-close-btn-ui"), Qt(i[l]).removeClass("ot-close-icon"), n !== it && n !== st || (s.insertAdjacentElement("afterbegin", t(".onetrust-close-btn-handler").parentElement), Qt(i[l]).attr("tabindex", "1"))) : (io.setCloseIcon(t("#onetrust-banner-sdk .ot-close-icon")), Qt(i[l]).el.setAttribute(St, Kt.BannerCloseButtonText || "Close Cookie Banner")); else {
            for (var l = 0; l < i.length; l++) Qt(i[l].parentElement).el.removeChild(i[l]);
            n !== nt && n !== st || Rt.removeChild(t("#onetrust-close-btn-container-mobile"))
        }
        return s
    }, _r.prototype.setAcceptAndRejectBtnHtml = function (e) {
        var t = zt.bannerName;
        Kt.showBannerAcceptButton ? (this._acceptBtn = e("#onetrust-accept-btn-handler"), Qt(this._acceptBtn).html(Kt.AlertAllowCookiesText), t !== at || Kt.showBannerCookieSettings || Kt.BannerShowRejectAllButton || Qt(this._acceptBtn.parentElement).addClass("accept-btn-only")) : Rt.removeChild(e("#onetrust-accept-btn-handler")), Kt.BannerShowRejectAllButton && Kt.BannerRejectAllButtonText.trim() ? (this._rejectBtn = e("#onetrust-reject-all-handler"), Qt(this._rejectBtn).html(Kt.BannerRejectAllButtonText), e(this._btnGrpParentSelector).classList.add("has-reject-all-button")) : (Rt.removeChild(e("#onetrust-reject-all-handler")), Rt.removeChild(e("#onetrust-reject-btn-container")));
        var o = Qt(e("#onetrust-pc-btn-handler"));
        Kt.showBannerCookieSettings ? (o.html(Kt.AlertMoreInfoText), Kt.BannerSettingsButtonDisplayLink && o.addClass("cookie-setting-link"), t !== at || Kt.showBannerAcceptButton || o.addClass("cookie-settings-btn-only")) : Rt.removeChild(o.el)
    }, _r.prototype.setIAB2HtmlData = function (e) {
        var t = zt.bannerName;
        "IAB2" === Kt.IabType && Kt.BannerDPDDescription.length && t !== lt ? (Qt(e(".ot-dpd-container .ot-dpd-title")).html(Kt.BannerDPDTitle), Qt(e(".ot-dpd-container .ot-dpd-desc")).html(Kt.BannerDPDDescription.join(",&nbsp;"))) : Rt.removeChild(e(".ot-dpd-container"));
        var o = Qt(e(this._otGrpContainerSelector));
        "IAB2" === zt.iabType && Kt.BannerAdditionalDescription.trim() && this.setAdditionalDesc(e);
        var n = "IAB2" === Kt.IabType && Kt.BannerDPDDescription.length ? t !== lt ? Qt(e(".ot-dpd-container .ot-dpd-desc")) : o : Qt(e("#onetrust-policy-text"));
        return Kt.IsIabEnabled && Kt.BannerIABPartnersLink && n.append('<button class="ot-link-btn onetrust-vendors-list-handler">\n        ' + Kt.BannerIABPartnersLink + "\n        </button>"), o
    }, _r.prototype.setBannerData = function (e) {
        if (Kt.BannerTitle ? (Qt(e("#onetrust-policy-title")).html(Kt.BannerTitle), Qt(e('[role="alertdialog"]')).attr(St, Kt.BannerTitle)) : (Rt.removeChild(e("#onetrust-policy-title")), Qt(e("#onetrust-banner-sdk")).addClass("ot-wo-title"), Qt(e('[role="alertdialog"]')).attr(St, Kt.AriaPrivacy)), !Kt.IsIabEnabled && Jt.showGeneralVendors && Kt.BannerNonIABVendorListText) {
            var t = document.createElement("div");
            t.setAttribute("id", "ot-gv-link-ctnr"), Qt(t).html('<button class="ot-link-btn ot-gv-list-handler">' + Kt.BannerNonIABVendorListText + "</button>"), Qt(e("#onetrust-policy")).el.appendChild(t)
        }
        Qt(e("#onetrust-policy-text")).html(Kt.AlertNoticeText), Kt.BShowPolicyLink && Kt.BShowImprintLink && Qt(e(this.cookiePolicyLinkSelector)).length ? (Qt(e("#onetrust-policy-text a:first-child")).attr(St, Kt.BCookiePolicyLinkScreenReader), Qt(e("#onetrust-policy-text a:last-child")).attr(St, Kt.BImprintLinkScreenReader)) : Kt.BShowPolicyLink && Qt(e(this.cookiePolicyLinkSelector)).length ? Qt(e(this.cookiePolicyLinkSelector)).attr(St, Kt.BCookiePolicyLinkScreenReader) : Kt.BShowImprintLink && Qt(e(this.cookiePolicyLinkSelector)).length && Qt(e(this.cookiePolicyLinkSelector)).attr(St, Kt.BImprintLinkScreenReader)
    }, _r.prototype.isCmpEnabled = function () {
        return Kt.BannerPurposeTitle || Kt.BannerPurposeDescription || Kt.BannerFeatureTitle || Kt.BannerFeatureDescription || Kt.BannerInformationTitle || Kt.BannerInformationDescription
    }, _r.prototype.ssrAndNonSSRCommonHtml = function (t) {
        function e(e) {
            return t.querySelector(e)
        }

        var o, n = this, r = this.isCmpEnabled();
        this.setOptOutSignalNotification(e), Kt.BRegionAriaLabel && (Qt(e("#onetrust-banner-sdk")).attr("role", "region"), Qt(e("#onetrust-banner-sdk")).attr(St, Kt.BRegionAriaLabel)), zt.bannerName === lt && Nt.moduleInitializer.IsSuppressPC && (Jt.dataGroupState = Kt.Groups.filter(function (e) {
            return e.Order
        })), zt.bannerName === lt && (this._fourBtns = Kt.BannerShowRejectAllButton && Kt.showBannerAcceptButton && Kt.showBannerCookieSettings && Kt.BShowSaveBtn, this._saveBtn = e(".ot-bnr-save-handler"), this._settingsBtn = e("#onetrust-pc-btn-handler"), this._btnsCntr = e(".banner-actions-container"), Kt.BShowSaveBtn ? Qt(this._saveBtn).html(Kt.BSaveBtnTxt) : (Rt.removeChild(this._saveBtn), this._saveBtn = null), io.insertFooterLogo((o = ".ot-bnr-footer-logo a", t.querySelectorAll(o))), this._descriptCntr = e(".ot-cat-lst"), this.setBannerBtn(), window.addEventListener("resize", function () {
            n.setBannerBtn()
        }), this._fourBtns && Qt(e("#onetrust-banner-sdk")).addClass("has-reject-all-button"), this.insertGrps(e));
        var i = document.createElement("div");
        Qt(i).append(t), zt.ignoreInjectingHtmlCss || (Qt("#onetrust-consent-sdk").append(i.firstChild), r && this.setBannerOptionContent()), this.setBnrBtnGrpAlignment()
    }, _r.prototype.setAriaModalForBanner = function (e) {
        Kt.ForceConsent && e.querySelector('[role="alertdialog"]').setAttribute("aria-modal", "true")
    }, _r.prototype.setBnrBtnGrpAlignment = function () {
        var e = Qt(this._otGrpContainerSelector).el, t = Qt(this._btnGrpParentSelector).el;
        (e.length && e[0].clientHeight) < (t.length && t[0].clientHeight) ? Qt("#onetrust-banner-sdk").removeClass("vertical-align-content") : Qt("#onetrust-banner-sdk").addClass("vertical-align-content");
        var o = document.querySelector("#onetrust-button-group-parent button:first-of-type"),
            n = document.querySelector("#onetrust-button-group-parent button:last-of-type");
        n && o && 1 < Math.abs(n.offsetTop - o.offsetTop) && Qt("#onetrust-banner-sdk").addClass("ot-buttons-fw")
    }, _r.prototype.slideInAnimation = function (e, t) {
        t === nt ? "bottom" === Kt.BannerPosition ? (e.css("bottom: -99px;"), e.animate({bottom: "0px"}, 1e3), Jt.bnrAnimationInProg = !0, setTimeout(function () {
            e.css("bottom: 0px;"), Jt.bnrAnimationInProg = !1
        }, 1e3)) : (e.css("top: -99px; bottom: auto;"), zt.pagePushedDown && !Zn.checkIsBrowserIE11OrBelow() ? Zn.BannerPushDownHandler() : (e.animate({top: "0"}, 1e3), Jt.bnrAnimationInProg = !0, setTimeout(function () {
            e.css("top: 0px; bottom: auto;"), Jt.bnrAnimationInProg = !1
        }, 1e3))) : t !== rt && t !== at || (e.css("bottom: -300px;"), e.animate({bottom: "1em"}, 2e3), Jt.bnrAnimationInProg = !0, setTimeout(function () {
            e.css("bottom: 1rem;"), Jt.bnrAnimationInProg = !1
        }, 2e3))
    }, _r.prototype.setBannerBtn = function () {
        window.innerWidth <= 600 ? (Rt.insertElement(this._btnsCntr, this._settingsBtn, "afterbegin"), Rt.insertElement(this._btnsCntr, this._saveBtn, "afterbegin"), Rt.insertElement(this._btnsCntr, this._acceptBtn, "afterbegin"), Rt.insertElement(this._btnsCntr, this._rejectBtn, "afterbegin")) : this._fourBtns ? (this._descriptCntr.insertAdjacentElement("beforeend", this._settingsBtn), this._acceptBtn.insertAdjacentElement("beforebegin", this._rejectBtn), this._btnsCntr.insertAdjacentElement("beforebegin", this._saveBtn)) : (Rt.insertElement(this._btnsCntr, this._settingsBtn, "beforebegin"), Rt.insertElement(this._btnsCntr, this._saveBtn, this._settingsBtn ? "afterbegin" : "beforebegin"), Rt.insertElement(this._btnsCntr, this._rejectBtn, "beforeend"), Rt.insertElement(this._btnsCntr, this._acceptBtn, "beforeend"))
    }, _r.prototype.setCmpBannerOptions = function (i, e) {
        var s = Qt(i("#banner-options .banner-option")).el.cloneNode(!0);
        Qt(i(this._bannerOptionsSelector)).html("");
        var a = 1;
        e.forEach(function (e) {
            var t = s.cloneNode(!0), o = Kt[e.titleKey], n = Kt[e.descriptionKey];
            if (o || n) {
                t.querySelector(".banner-option-header :first-child").innerHTML = o;
                var r = t.querySelector(".banner-option-details");
                n ? (r.setAttribute("id", "option-details-" + a++), r.innerHTML = n) : r.parentElement.removeChild(r), Qt(i("#banner-options")).el.appendChild(t)
            }
        })
    }, _r.prototype.setFloatingRoundedIconBannerCmpOptions = function (r, e) {
        var i = this, s = Qt(r("#banner-options button")).el.cloneNode(!0),
            n = Qt(r(".banner-option-details")).el.cloneNode(!0);
        Qt(r(this._bannerOptionsSelector)).html(""), e.forEach(function (e) {
            var t = s.cloneNode(!0), o = Kt[e.titleKey], n = Kt[e.descriptionKey];
            (o || n) && (t.setAttribute("id", e.identifier), t.querySelector(".banner-option-header :first-child").innerHTML = o, Qt(r(i._bannerOptionsSelector)).el.appendChild(t))
        }), e.forEach(function (e) {
            var t = Kt[e.descriptionKey];
            if (t) {
                var o = n.cloneNode(!0);
                o.innerHTML = t, o.classList.add(e.identifier), Qt(r(i._bannerOptionsSelector)).el.appendChild(o)
            }
        })
    }, _r.prototype.setBannerOptionContent = function () {
        var t = this;
        zt.bannerName !== nt && zt.bannerName !== st || setTimeout(function () {
            if (window.innerWidth < 769) {
                var e = Qt(t._bannerOptionsSelector).el[0];
                Qt(t._otGrpContainerSelector).el[0].appendChild(e)
            } else e = Qt(t._bannerOptionsSelector).el[0], zt.bannerName === st ? Qt(".banner-content").el[0].appendChild(e) : Qt("#onetrust-banner-sdk .ot-sdk-container").el[0].appendChild(e)
        })
    }, _r.prototype.setAdditionalDesc = function (e) {
        var t = Kt.BannerAdditionalDescPlacement, o = document.createElement("span");
        o.classList.add("ot-b-addl-desc"), o.innerHTML = Kt.BannerAdditionalDescription;
        var n = e("#onetrust-policy-text");
        if (t === N.AfterTitle) n.insertAdjacentElement("beforeBegin", o); else if (t === N.AfterDescription) n.insertAdjacentElement("afterEnd", o); else if (t === N.AfterDPD) {
            var r = e(".ot-dpd-container .ot-dpd-desc");
            Kt.ChoicesBanner && (r = e(this._otGrpContainerSelector)), r.insertAdjacentElement("beforeEnd", o)
        }
    }, _r.prototype.insertGrps = function (e) {
        var p = e(".ot-cat-item").cloneNode(!0);
        Rt.removeChild(e(".ot-cat-item")), Kt.BCategoryStyle === le.Checkbox ? Rt.removeChild(p.querySelector(".ot-tgl")) : (Rt.removeChild(p.querySelector(".ot-chkbox")), Qt(p).addClass("ot-cat-bdr"));
        var h = e(".ot-cat-lst ul");
        Kt.Groups.forEach(function (e) {
            var t = p.cloneNode(!0), o = t.querySelector(".ot-tgl,.ot-chkbox"), n = e.GroupName, r = e.CustomGroupId,
                i = "ot-bnr-grp-id-" + r, s = "ot-bnr-hdr-id-" + r, a = -1 !== Ot.indexOf(e.Type),
                l = yo.getGrpStatus(e).toLowerCase() === ze || a, c = En.isGroupActive(e) || a;
            Qt(o.querySelector("label")).attr("for", i), Qt(o.querySelector(".ot-label-txt")).html(e.GroupName);
            var d = o.querySelector("input");
            l && (Kt.BCategoryStyle === le.Toggle ? (Rt.removeChild(o), t.insertAdjacentElement("beforeend", Qt("<div class='ot-always-active'>" + Kt.AlwaysActiveText + "</div>", "ce").el)) : Qt(d).attr("disabled", !0)), d.classList.add("category-switch-handler"), En.setInputID(d, i, r, c, s);
            var u = t.querySelector("h4");
            Qt(u).html(n), Qt(u).attr("id", s), Qt(h).append(t)
        })
    }, _r.prototype.setBannerLogo = function (e, t) {
        if (Nt.fp.CookieV2BannerLogo && Kt.BnrLogo) {
            var o = t(jn), n = "afterend";
            zt.bannerName === st && (o = t("#onetrust-cookie-btn"), n = "beforeend");
            var r = io.updateCorrectUrl(Kt.BnrLogo);
            Qt(e).addClass("ot-bnr-w-logo"), Qt(o).el.innerHTML = "", o.insertAdjacentHTML(n, "<img class='ot-bnr-logo' src='" + r + "'\n            title='" + Kt.BnrLogoAria + "'\n            alt='" + Kt.BnrLogoAria + "'/>")
        }
    }, _r.prototype.setOptOutSignalNotification = function (e) {
        var t = !0 === navigator.globalPrivacyControl && zt.gpcForAGrpEnabled;
        Kt.BShowOptOutSignal && (t || zt.previewMode) && io.createOptOutSignalElement(e, !1)
    }, _r);

    function _r() {
        this.El = "#onetrust-banner-sdk", this._saveBtn = null, this._settingsBtn = null, this._acceptBtn = null, this._rejectBtn = null, this._descriptCntr = null, this._btnsCntr = null, this._fourBtns = !1, this._bannerOptionsSelector = "#banner-options", this._btnGrpParentSelector = "#onetrust-button-group-parent", this._otGrpContainerSelector = "#onetrust-group-container", this.cookiePolicyLinkSelector = "#onetrust-policy-text a"
    }

    var Er, Vr = (Br.prototype.setHeaderConfig = function () {
        Er.setHeader(), Er.setSearchInput(), Er.setHeaderUIConsent();
        var e = Er.getGroupsForFilter();
        mr.setFilterListByGroup(e, !1)
    }, Br.prototype.filterVendorByString = function (e) {
        Er.searchQuery = e, Er.filterVendorByGroupOrQuery()
    }, Br.prototype.filterVendorByGroup = function (e) {
        Er.filterGroups = e, Er.filterVendorByGroupOrQuery()
    }, Br.prototype.showVSList = function () {
        Er.removeListeners(), Er.showEmptyResults(!1, ""), Er.clearUIElementsInMain(), Er.addVSList(Jt.getVendorsInDomain())
    }, Br.prototype.showEmptyResults = function (e, t) {
        if (e) this.setNoResultsContent(t); else {
            Qt("#onetrust-pc-sdk " + lo.P_Vendor_Content).removeClass("no-results");
            var o = Qt("#onetrust-pc-sdk #no-results");
            o.length && o.remove()
        }
    }, Br.prototype.setNoResultsContent = function (e) {
        var t = Qt("#onetrust-pc-sdk #no-results").el[0];
        if (!t) {
            var o = document.createElement("div"), n = document.createElement("p"),
                r = document.createTextNode(" " + Kt.PCVendorNotFound + "."), i = document.createElement("span");
            return o.id = "no-results", i.id = "user-text", i.innerText = e, n.appendChild(i), n.appendChild(r), o.appendChild(n), Qt("#onetrust-pc-sdk " + lo.P_Vendor_Content).addClass("no-results"), Qt("#vendor-search-handler").el[0].setAttribute("aria-describedby", o.id), Qt("#onetrust-pc-sdk " + lo.P_Vendor_Content).append(o)
        }
        t.querySelector("span").innerText = e
    }, Br.prototype.getGroupsFilter = function () {
        for (var e = [], t = 0, o = Qt("#onetrust-pc-sdk .category-filter-handler").el; t < o.length; t++) {
            var n = o[t], r = n.getAttribute("data-purposeid");
            n.checked && e.push(r)
        }
        return e
    }, Br.prototype.cancelFilter = function () {
        for (var e = 0, t = Qt("#onetrust-pc-sdk .category-filter-handler").el; e < t.length; e++) {
            var o = t[e], n = o.getAttribute("data-optanongroupid"), r = 0 <= Jt.filterByCategories.indexOf(n);
            Rt.setCheckedAttribute(null, o, r)
        }
        var i = Er.getGroupsFilter();
        Er.filterVendorByGroup(i)
    }, Br.prototype.clearFilter = function () {
        Er.searchQuery = "", Er.filterGroups = []
    }, Br.prototype.toggleVendors = function (r) {
        Jt.getVendorsInDomain().forEach(function (e, t) {
            if (!yo.isAlwaysActiveGroup(e.groupRef)) {
                var o = document.getElementById("ot-vendor-id-" + t), n = document.getElementById("ot-vs-lst-id-" + t);
                Fn.toggleVendorService(e.groupRef.CustomGroupId, t, r, o), Fn.toggleVendorService(e.groupRef.CustomGroupId, t, r, n)
            }
        })
    }, Br.prototype.hideVendorList = function () {
        Er.removeListeners(), Er.clearUIElementsInMain()
    }, Br.prototype.addListeners = function () {
        Qt("#onetrust-pc-sdk " + lo.P_Vendor_Content + " .ot-vs-list .category-switch-handler").on("click", Er.toggleVendorHandler), Qt("#onetrust-pc-sdk").on("click", ".ot-vs-list", wr.onCategoryItemToggle.bind(this))
    }, Br.prototype.removeListeners = function () {
        document.querySelectorAll("#onetrust-pc-sdk .ot-vs-list .category-switch-handler").forEach(function (e) {
            return e.removeEventListener("click", wr.toggleGroupORVendorHandler)
        });
        var e = document.querySelector("#onetrust-pc-sdk .ot-vs-list");
        null != e && e.removeEventListener("click", wr.onCategoryItemToggle)
    }, Br.prototype.toggleVendorHandler = function (e) {
        wr.toggleVendorFromListHandler(e), Er.checkAllowAllCheckedValue()
    }, Br.prototype.filterVendorByGroupOrQuery = function () {
        var o = new Map;
        Jt.getVendorsInDomain().forEach(function (e, t) {
            Er.checkVendorConditions(e) && o.set(t, e)
        }), Er.showEmptyResults(o.size <= 0, Er.searchQuery), Er.removeListeners(), Er.clearUIElementsInMain(), Er.addVSList(o)
    }, Br.prototype.checkVendorConditions = function (e) {
        return !("" !== Er.searchQuery && e.ServiceName.toLowerCase().indexOf(Er.searchQuery.toLowerCase()) < 0 || 0 < Er.filterGroups.length && Er.filterGroups.indexOf(e.groupRef.CustomGroupId) < 0)
    }, Br.prototype.addVSList = function (e) {
        var t = Qt("#onetrust-pc-sdk " + lo.P_Vendor_Content + " .ot-sdk-column"), o = Fn.getVendorListEle(e);
        t.append(o), Er.addListeners()
    }, Br.prototype.getGroupsForFilter = function () {
        var t = new Map;
        return Jt.getVendorsInDomain().forEach(function (e) {
            t.has(e.groupRef.CustomGroupId) || t.set(e.groupRef.CustomGroupId, e.groupRef)
        }), Array.from(t.values())
    }, Br.prototype.clearUIElementsInMain = function () {
        Qt("#onetrust-pc-sdk " + lo.P_Vendor_Content + " ul" + lo.P_Host_Cntr).html(""), Qt("#onetrust-pc-sdk " + lo.P_Vendor_Content + " ul" + lo.P_Host_Cntr).hide(), Qt("#onetrust-pc-sdk " + lo.P_Vendor_Content + " ul" + lo.P_Vendor_Container).html(""), Qt("#onetrust-pc-sdk " + lo.P_Vendor_Content + " ul" + lo.P_Vendor_Container).hide();
        var e = Qt("#onetrust-pc-sdk " + lo.P_Vendor_Content + " .ot-vs-list");
        e && e.length && e.remove()
    }, Br.prototype.setHeader = function () {
        var e = Kt.VendorServiceConfig.PCVSListTitle,
            t = document.querySelector("#onetrust-pc-sdk " + lo.P_Vendor_Title);
        t && (t.innerText = e)
    }, Br.prototype.setSearchInput = function () {
        var e = Kt.PCenterCookieListSearch, t = Kt.PCenterCookieSearchAriaLabel,
            o = Qt("#onetrust-pc-sdk " + lo.P_Vendor_Search_Input);
        o.el[0].placeholder = e, o.attr("aria-label", t)
    }, Br.prototype.setHeaderUIConsent = function () {
        var e;
        if (Qt("#onetrust-pc-sdk " + lo.P_Select_Cntr).addClass("ot-vnd-list-cnt"), Qt("#onetrust-pc-sdk " + lo.P_Select_Cntr + " .ot-sel-all").addClass("ot-vs-selc-all"), Kt.PCCategoryStyle === le.Toggle && (Qt("#onetrust-pc-sdk " + lo.P_Select_Cntr + " .ot-sel-all").addClass("ot-toggle-conf"), Kt.PCAccordionStyle === J.Caret && Qt("#onetrust-pc-sdk " + lo.P_Select_Cntr + " .ot-sel-all").addClass("ot-caret-conf")), Qt("#onetrust-pc-sdk " + lo.P_Leg_Select_All).hide(), Qt("#onetrust-pc-sdk #" + lo.P_Sel_All_Host_El).hide(), Qt("#onetrust-pc-sdk " + lo.P_Host_Cntr).hide(), Qt(lo.P_Vendor_List + " #select-all-text-container").hide(), Qt("#onetrust-pc-sdk #" + lo.P_Sel_All_Vendor_Leg_El).hide(), Qt("#onetrust-pc-sdk " + lo.P_Vendor_Container).show(), Qt("#onetrust-pc-sdk " + lo.P_Select_Cntr).show(), Qt("#onetrust-pc-sdk #" + lo.P_Sel_All_Vendor_Consent_El).show("inline-block"), Qt("#onetrust-pc-sdk " + lo.P_Vendor_List).removeClass(lo.P_Host_UI), Qt("#onetrust-pc-sdk " + lo.P_Vendor_Content).removeClass(lo.P_Host_Cnt), !document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox .sel-all-hdr")) {
            var t = document.createElement("h4");
            t.className = "sel-all-hdr", t.textContent = (null === (e = Kt.VendorServiceConfig) || void 0 === e ? void 0 : e.PCVSAllowAllText) || "PCVSAllowAllText";
            var o = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"),
                n = Kt.PCCategoryStyle === le.Checkbox ? "beforeend" : "afterbegin";
            o.insertAdjacentElement(n, t)
        }
        Er.checkAllowAllCheckedValue()
    }, Br.prototype.checkAllowAllCheckedValue = function () {
        var t = !0;
        Jt.vsConsent.forEach(function (e) {
            e || (t = !1)
        });
        var e = document.getElementById("#select-all-vendor-groups-handler");
        Rt.setCheckedAttribute(null, e, t)
    }, Br);

    function Br() {
        this.searchQuery = "", this.filterGroups = []
    }

    var wr, xr = (Or.prototype.initCookieSettingHandlers = function () {
        Qt(document).on("click", ".optanon-show-settings, .optanon-toggle-display, .ot-sdk-show-settings, .ot-pc-handler", this.cookiesSettingsBoundListener)
    }, Or.prototype.initFlgtCkStgBtnEventHandlers = function () {
        Qt(".ot-floating-button__open").on("click", wr.floatingCookieSettingOpenBtnClicked), Qt(".ot-floating-button__close").on("click", wr.floatingCookieSettingCloseBtnClicked)
    }, Or.prototype.floatingCookieSettingOpenBtnClicked = function (e) {
        Qt(wr.fltgBtnSltr).addClass("ot-pc-open"), Kt.cookiePersistentLogo.includes("ot_guard_logo.svg") && Qt(wr.fltgBtnFSltr).attr(Pt, "true"), Qt(wr.fltgBtnBSltr).attr(Pt, ""), Qt(wr.fltgBtnFrontBtn).el[0].setAttribute(Pt, !0), Qt(wr.fltgBtnBackBtn).el[0].setAttribute(St, Kt.AriaClosePreferences), Qt(wr.fltgBtnBackBtn).el[0].setAttribute(Pt, !1), Mo.triggerGoogleAnalyticsEvent(Wo, rn), wr.showCookieSettingsHandler(e)
    }, Or.prototype.floatingCookieSettingCloseBtnClicked = function (e) {
        Qt(wr.fltgBtnFrontBtn).el[0].setAttribute(St, Kt.AriaOpenPreferences), Qt(wr.fltgBtnFrontBtn).el[0].setAttribute(Pt, !1), Qt(wr.fltgBtnBackBtn).el[0].setAttribute(Pt, !0), e && (Mo.triggerGoogleAnalyticsEvent(Wo, sn), wr.hideCookieSettingsHandler(e))
    }, Or.prototype.initialiseLegIntBtnHandlers = function () {
        Qt(document).on("click", ".ot-obj-leg-btn-handler", wr.onLegIntButtonClick), Qt(document).on("click", ".ot-remove-objection-handler", wr.onLegIntButtonClick)
    }, Or.prototype.initialiseAddtlVenHandler = function () {
        Qt("#onetrust-pc-sdk #ot-addtl-venlst").on("click", wr.selectVendorsGroupHandler), Qt("#onetrust-pc-sdk #ot-selall-adtlven-handler").on("click", wr.selAllAdtlVenHandler)
    }, Or.prototype.initializeGenVenHandlers = function () {
        Qt("#onetrust-pc-sdk #ot-gn-venlst .ot-gnven-chkbox-handler").on("click", wr.genVendorToggled), Qt("#onetrust-pc-sdk #ot-gn-venlst .ot-gv-venbox").on("click", wr.genVendorDetails), Qt("#onetrust-pc-sdk #ot-selall-gnven-handler").on("click", wr.selectAllGenVenHandler)
    }, Or.prototype.initialiseConsentNoticeHandlers = function () {
        var e = this, t = 37, o = 39;
        zt.pcName === gt && wr.categoryMenuSwitchHandler(), Qt("#onetrust-pc-sdk .onetrust-close-btn-handler").on("click", wr.bannerCloseButtonHandler), Qt("#onetrust-pc-sdk #accept-recommended-btn-handler").on("click", Gr.allowAllEventHandler.bind(this, !0)), Qt("#onetrust-pc-sdk .ot-pc-refuse-all-handler").on("click", Gr.rejectAllEventHandler.bind(this, !0)), Qt("#onetrust-pc-sdk #close-pc-btn-handler").on("click", wr.hideCookieSettingsHandler), wr.closePCWhenEscPressed(), Qt("#onetrust-pc-sdk #vendor-close-pc-btn-handler").on("click", wr.hideCookieSettingsHandler), Qt("#onetrust-pc-sdk .category-switch-handler").on("click", wr.toggleGroupORVendorHandler), Qt("#onetrust-pc-sdk .cookie-subgroup-handler").on("click", wr.toggleSubCategory), Qt("#onetrust-pc-sdk .category-menu-switch-handler").on("keydown", function (e) {
            zt.pcName === gt && (e.keyCode !== t && e.keyCode !== o || (Kt.PCTemplateUpgrade ? wr.changeSelectedTabV2(e) : wr.changeSelectedTab(e)))
        }), Qt("#onetrust-pc-sdk").on("click", lo.P_Category_Item + " > input:first-child," + lo.P_Category_Item + " > button:first-child", wr.onCategoryItemToggle.bind(this)), (Kt.showCookieList || Jt.showGeneralVendors) && (Qt("#onetrust-pc-sdk .category-host-list-handler").on("click", function (e) {
            Jt.showGeneralVendors && Kt.showCookieList ? Jt.cookieListType = $.HostAndGenVen : Jt.showGeneralVendors ? Jt.cookieListType = $.GenVen : Jt.cookieListType = $.Host, wr.pcLinkSource = e.target, wr.loadCookieList(e.target)
        }), io.isOptOutEnabled() ? (Qt("#onetrust-pc-sdk #select-all-hosts-groups-handler").on("click", wr.selectAllHostsGroupsHandler), Qt("#onetrust-pc-sdk " + lo.P_Host_Cntr).on("click", wr.selectHostsGroupHandler)) : Qt("#onetrust-pc-sdk " + lo.P_Host_Cntr).on("click", wr.toggleAccordionStatus)), wr.addListenerWhenIabEnabled(), wr.addEventListenerWhenIsHostOrVendorsAreEnabled(), wr.adddListenerWhenNoBanner(), Qt("#onetrust-pc-sdk .ot-gv-list-handler").on("click", function (t) {
            return p(e, void 0, void 0, function () {
                return g(this, function (e) {
                    return Jt.cookieListType = $.GenVen, wr.loadCookieList(t.target), [2]
                })
            })
        }), wr.addListenerWhenVendorServices()
    }, Or.prototype.closePCWhenEscPressed = function () {
        Qt(document).on("keydown", function (e) {
            var t = document.getElementById(wr.pcSDKSelector), o = "none" !== window.getComputedStyle(t).display;
            if (27 === e.keyCode && t && o) {
                var n = Qt("#onetrust-pc-sdk " + lo.P_Fltr_Modal).el[0];
                "block" === n.style.display || "0px" < n.style.width ? (wr.closeFilter(), Qt("#onetrust-pc-sdk #filter-btn-handler").focus()) : Kt.NoBanner && !Kt.ShowPreferenceCenterCloseButton || wr.hideCookieSettingsHandler(), wr.confirmPC()
            }
            (o && 32 === e.keyCode || "Space" === e.code || 13 === e.keyCode || "Enter" === e.code) && io.findUserType(e)
        })
    }, Or.prototype.addEventListenerWhenIsHostOrVendorsAreEnabled = function () {
        if (Kt.IsIabEnabled || Kt.showCookieList || Jt.showGeneralVendors || Jt.showVendorService) {
            Qt(document).on("click", ".back-btn-handler", wr.backBtnHandler), wr.addListenerSearchKeyEvent(), Qt("#onetrust-pc-sdk #filter-btn-handler").on("click", wr.toggleVendorFiltersHandler), Qt("#onetrust-pc-sdk #filter-apply-handler").on("click", wr.applyFilterHandler), Qt("#onetrust-pc-sdk " + lo.P_Fltr_Modal).on("click", wr.tglFltrOptionHandler), !Nt.isV2Template && zt.pcName !== ht || Qt("#onetrust-pc-sdk #filter-cancel-handler").on("click", wr.cancelFilterHandler), !Nt.isV2Template && zt.pcName === ht || Qt("#onetrust-pc-sdk #clear-filters-handler").on("click", wr.clearFiltersHandler), Nt.isV2Template ? Qt("#onetrust-pc-sdk #filter-cancel-handler").on("keydown", function (e) {
                9 !== e.keyCode && "tab" !== e.code || e.shiftKey || (e.preventDefault(), Qt("#onetrust-pc-sdk #clear-filters-handler").el[0].focus())
            }) : Qt("#onetrust-pc-sdk #filter-apply-handler").on("keydown", function (e) {
                9 !== e.keyCode && "tab" !== e.code || e.shiftKey || (e.preventDefault(), Qt("#onetrust-pc-sdk .category-filter-handler").el[0].focus())
            });
            var e = Qt("#onetrust-pc-sdk .category-filter-handler").el;
            Qt(e[0]).on("keydown", function (e) {
                9 !== e.keyCode && "tab" !== e.code || !e.shiftKey || (e.preventDefault(), Qt("#onetrust-pc-sdk #filter-apply-handler").el[0].focus())
            })
        }
    }, Or.prototype.addListenerSearchKeyEvent = function () {
        Qt(wr.VENDOR_SEARCH_SELECTOR).on("keyup", function (e) {
            var t = e.target.value.trim();
            wr.currentSearchInput !== t && (Jt.showVendorService ? Er.filterVendorByString(t) : wr.isCookieList ? (Gn.searchHostList(t), Jt.showTrackingTech && wr.addEventAdditionalTechnologies()) : (Gn.loadVendorList(t, []), Kt.UseGoogleVendors && Gn.searchVendors(Gn.googleSearchSelectors, Jt.addtlVendorsList, re.GoogleVendor, t), Jt.showGeneralVendors && Kt.GeneralVendors.length && Gn.searchVendors(Gn.genVendorSearchSelectors, Kt.GeneralVendors, re.GeneralVendor, t)), Gn.playSearchStatus(wr.isCookieList), wr.currentSearchInput = t)
        })
    }, Or.prototype.addListenerWhenIabEnabled = function () {
        Kt.IsIabEnabled && (Qt("#onetrust-pc-sdk .category-vendors-list-handler").on("click", function (e) {
            wr.pcLinkSource = e.target, wr.showVendorsList(e.target)
        }), Qt("#onetrust-pc-sdk " + lo.P_Vendor_Container).on("click", wr.selectVendorsGroupHandler), Kt.UseGoogleVendors || wr.bindSelAllHandlers(), wr.initialiseLegIntBtnHandlers())
    }, Or.prototype.adddListenerWhenNoBanner = function () {
        Kt.NoBanner && (Kt.OnClickCloseBanner && document.body.addEventListener("click", Gr.bodyClickEvent), Kt.ScrollCloseBanner && window.addEventListener("scroll", Gr.scrollCloseBanner))
    }, Or.prototype.addListenerWhenVendorServices = function () {
        Jt.showVendorService && (wr.bindSelAllHandlers(), Qt("#onetrust-pc-sdk .onetrust-vendors-list-handler").on("click", function () {
            return wr.showVendorsList(null, !0)
        }))
    }, Or.prototype.bindSelAllHandlers = function () {
        Qt("#onetrust-pc-sdk #select-all-vendor-leg-handler").on("click", wr.selectAllVendorsLegIntHandler), Qt("#onetrust-pc-sdk #select-all-vendor-groups-handler").on("click", wr.SelectAllVendorConsentHandler)
    }, Or.prototype.hideCookieSettingsHandler = function (e) {
        return void 0 === e && (e = window.event), Mo.triggerGoogleAnalyticsEvent(Wo, $o), Zn.removeAddedOTCssStyles(Qn.PC), ur.hideConsentNoticeV2(), wr.getResizeElement().removeEventListener("resize", wr.setCenterLayoutFooterHeight), window.removeEventListener("resize", wr.setCenterLayoutFooterHeight), !Nt.isV2Template && zt.pcName !== ht || wr.closeFilter(!1), zt.pcName === ut && Qt("#onetrust-pc-sdk " + lo.P_Content).removeClass("ot-hide"), Gr.hideVendorsList(), zo.csBtnGroup && (Qt(wr.fltgBtnSltr).removeClass("ot-pc-open"), wr.floatingCookieSettingCloseBtnClicked(null)), wr.confirmPC(e), Gr.resetConsent(), !1
    }, Or.prototype.selectAllHostsGroupsHandler = function (e) {
        var t = e.target.checked, o = Qt("#onetrust-pc-sdk #" + lo.P_Sel_All_Host_El).el[0],
            n = o.classList.contains("line-through"), r = Qt("#onetrust-pc-sdk .host-checkbox-handler").el;
        Rt.setCheckedAttribute("#select-all-hosts-groups-handler", null, t);
        for (var i = 0; i < r.length; i++) r[i].getAttribute("disabled") || Rt.setCheckedAttribute(null, r[i], t);
        Jt.optanonHostList.forEach(function (e) {
            Go.updateHostStatus(e, t)
        }), r.forEach(function (e) {
            wo.updateGenVendorStatus(e.getAttribute("hostId"), t)
        }), n && o.classList.remove("line-through")
    }, Or.prototype.selectHostsGroupHandler = function (e) {
        wr.toggleAccordionStatus(e);
        var t = e.target.getAttribute("hostId"), o = e.target.getAttribute("ckType"), n = e.target.checked;
        if (null !== t) {
            if (o === X.GenVendor) {
                var r = Kt.GeneralVendors.find(function (e) {
                    return e.VendorCustomId === t
                }).Name;
                Mo.triggerGoogleAnalyticsEvent(Wo, n ? cn : dn, r + ": VEN_" + t), wo.updateGenVendorStatus(t, n)
            } else {
                var i = Rt.findIndex(Jt.optanonHostList, function (e) {
                    return e.HostId === t
                }), s = Jt.optanonHostList[i];
                wr.toggleHostStatus(s, n)
            }
            Rt.setCheckedAttribute(null, e.target, n)
        }
    }, Or.prototype.onCategoryItemToggle = function (e) {
        e.stopPropagation();
        var t = e.target;
        "BUTTON" !== t.tagName && "INPUT" !== t.tagName || (zt.pcName === ut && this.setPcListContainerHeight(), wr.toggleAccordionStatus(e))
    }, Or.prototype.toggleAccordionStatus = function (e) {
        var t = e.target;
        if (t && t.getAttribute("aria-expanded")) {
            var o = "true" === t.getAttribute("aria-expanded") ? "false" : "true";
            t.setAttribute("aria-expanded", o)
        }
    }, Or.prototype.toggleHostStatus = function (e, t) {
        Mo.triggerGoogleAnalyticsEvent(Wo, t ? un : pn, e.HostName + ": H_" + e.HostId), Go.updateHostStatus(e, t)
    }, Or.prototype.toggleBannerOptions = function (e) {
        Qt(".banner-option-input").each(function (e) {
            Qt(e).el.setAttribute("aria-expanded", !1)
        }), wr.toggleAccordionStatus(e)
    }, Or.prototype.bannerCloseButtonHandler = function (e) {
        if (Qt(document).off("keydown", wr.shiftBannerFocus), e && e.target && e.target.className) {
            var t = e.target.className;
            if (-1 < t.indexOf("save-preference-btn-handler")) Jt.bannerCloseSource = v.ConfirmChoiceButton, Mo.triggerGoogleAnalyticsEvent(Wo, on); else if (-1 < t.indexOf("banner-close-button")) {
                Jt.bannerCloseSource = v.BannerCloseButton;
                var o = Yo;
                -1 < t.indexOf("ot-close-link") && (o = Xo, Jt.bannerCloseSource = v.ContinueWithoutAcceptingButton), Mo.triggerGoogleAnalyticsEvent(Wo, o)
            } else -1 < t.indexOf("ot-bnr-save-handler") && (Jt.bannerCloseSource = v.BannerSaveSettings, Mo.triggerGoogleAnalyticsEvent(Wo, Qo))
        }
        return Zn.removeAddedOTCssStyles(), Gr.hideVendorsList(), Gr.bannerCloseButtonHandler()
    }, Or.prototype.onLegIntButtonClick = function (e) {
        if (e) {
            var t = e.currentTarget, o = "true" === t.parentElement.getAttribute("is-vendor"),
                n = t.parentElement.getAttribute("data-group-id"), r = !t.classList.contains("ot-leg-int-enabled");
            if (o) wr.onVendorToggle(n, F.LI); else {
                var i = yo.getGroupById(n);
                i.Parent ? wr.updateSubGroupToggles(i, r, !0) : wr.updateGroupToggles(i, r, !0)
            }
            En.updateLegIntBtnElement(t.parentElement, r)
        }
    }, Or.prototype.updateGroupToggles = function (t, o, e) {
        Go.toggleGroupHosts(t, o), Jt.genVenOptOutEnabled && Go.toggleGroupGenVendors(t, o), t.IsLegIntToggle = e, En.toggleGrpStatus(t, o), t.SubGroups && t.SubGroups.length && (zt.bannerName === lt && Nt.moduleInitializer.IsSuppressPC && t.SubGroups.length ? t.SubGroups.forEach(function (e) {
            e.IsLegIntToggle = t.IsLegIntToggle, En.toggleGrpStatus(e, o), e.IsLegIntToggle = !1, Go.toggleGroupHosts(e, o), Jt.genVenOptOutEnabled && Go.toggleGroupGenVendors(e, o), Fn.setVendorStateByGroup(e, o)
        }) : En.toogleAllSubGrpElements(t, o), t.SubGroups.forEach(function (e) {
            return Fn.setVendorStateByGroup(e, o)
        })), Fn.setVendorStateByGroup(t, o), this.allowAllVisible(En.setAllowAllButton()), t.IsLegIntToggle = !1
    }, Or.prototype.updateSubGroupToggles = function (e, t, o) {
        Go.toggleGroupHosts(e, t), Jt.genVenOptOutEnabled && Go.toggleGroupGenVendors(e, t);
        var n = yo.getGroupById(e.Parent);
        e.IsLegIntToggle = o, n.IsLegIntToggle = e.IsLegIntToggle;
        var r = En.isGroupActive(n);
        t ? (En.toggleGrpStatus(e, !0), En.isAllSubgroupsEnabled(n) && !r && (En.toggleGrpStatus(n, !0), Go.toggleGroupHosts(n, t), Jt.genVenOptOutEnabled && Go.toggleGroupGenVendors(n, t), En.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !0))) : (En.toggleGrpStatus(e, !1), En.isAllSubgroupsDisabled(n) && r ? (En.toggleGrpStatus(n, !1), Go.toggleGroupHosts(n, t), Jt.genVenOptOutEnabled && Go.toggleGroupGenVendors(n, t), En.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), t)) : (En.toggleGrpStatus(n, !1), Go.toggleGroupHosts(n, !1), Jt.genVenOptOutEnabled && Go.toggleGroupGenVendors(n, t), En.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !1))), this.allowAllVisible(En.setAllowAllButton()), e.IsLegIntToggle = !1, n.IsLegIntToggle = e.IsLegIntToggle
    }, Or.prototype.hideCategoryContainer = function (e) {
        void 0 === e && (e = !1);
        var t = zt.pcName;
        this.isCookieList = e, Kt.PCTemplateUpgrade ? Qt("#onetrust-pc-sdk " + lo.P_Content).addClass("ot-hide") : Qt("#onetrust-pc-sdk .ot-main-content").hide(), Qt("#onetrust-pc-sdk " + lo.P_Vendor_List).removeClass("ot-hide"), t !== ht && t !== ut && Qt("#onetrust-pc-sdk #close-pc-btn-handler.main").hide(), t === ut && Dt(Qt("#onetrust-pc-sdk").el[0], 'height: "";', !0), Jt.showVendorService ? Er.setHeaderConfig() : (e ? wr.setCookieListTemplate() : wr.setVendorListTemplate(), mr.setFilterList(e))
    }, Or.prototype.setCookieListTemplate = function () {
        var e = Nt.isV2Template;
        Qt(lo.P_Vendor_List + " #select-all-text-container").show("inline-block"), Qt("#onetrust-pc-sdk " + lo.P_Host_Cntr).show(), io.isOptOutEnabled() ? Qt("#onetrust-pc-sdk #" + lo.P_Sel_All_Host_El).show("inline-block") : Qt("#onetrust-pc-sdk #" + lo.P_Sel_All_Host_El).hide(), Qt("#onetrust-pc-sdk #" + lo.P_Sel_All_Vendor_Leg_El).hide(), Qt("#onetrust-pc-sdk " + lo.P_Leg_Header).hide(), e || Qt("#onetrust-pc-sdk " + lo.P_Leg_Select_All).hide(), Qt("#onetrust-pc-sdk #" + lo.P_Sel_All_Vendor_Consent_El).hide(), Qt("#onetrust-pc-sdk  " + lo.P_Vendor_Container).hide(), (Kt.UseGoogleVendors || Jt.showGeneralVendors) && Qt("#onetrust-pc-sdk .ot-acc-cntr").hide(), Qt("#onetrust-pc-sdk " + lo.P_Vendor_List).addClass(lo.P_Host_UI), Qt("#onetrust-pc-sdk " + lo.P_Vendor_Content).addClass(lo.P_Host_Cnt)
    }, Or.prototype.setVendorListTemplate = function () {
        Qt("#onetrust-pc-sdk " + lo.P_Vendor_Container).show(), Qt("#onetrust-pc-sdk #" + lo.P_Sel_All_Vendor_Consent_El).show("inline-block"), Kt.UseGoogleVendors && Qt("#onetrust-pc-sdk .ot-acc-cntr").show(), zt.legIntSettings.PAllowLI && "IAB2" === zt.iabType ? (Qt("#onetrust-pc-sdk " + lo.P_Select_Cntr).show(Nt.isV2Template ? void 0 : "inline-block"), Qt("#onetrust-pc-sdk " + lo.P_Leg_Select_All).show("inline-block"), Qt("#onetrust-pc-sdk #" + lo.P_Sel_All_Vendor_Leg_El).show("inline-block"), Qt(lo.P_Vendor_List + " #select-all-text-container").hide(), zt.legIntSettings.PShowLegIntBtn ? (Qt("#onetrust-pc-sdk " + lo.P_Leg_Header).hide(), Qt("#onetrust-pc-sdk #" + lo.P_Sel_All_Vendor_Leg_El).hide()) : Qt("#onetrust-pc-sdk " + lo.P_Leg_Header).show()) : (Qt("#onetrust-pc-sdk " + lo.P_Select_Cntr).show(), Qt(lo.P_Vendor_List + " #select-all-text-container").show("inline-block"), Qt("#onetrust-pc-sdk " + lo.P_Leg_Select_All).hide(), Qt("#onetrust-pc-sdk #" + lo.P_Sel_All_Vendor_Leg_El).hide()), Qt("#onetrust-pc-sdk #" + lo.P_Sel_All_Host_El).hide(), Qt("#onetrust-pc-sdk " + lo.P_Host_Cntr).hide(), Qt("#onetrust-pc-sdk " + lo.P_Vendor_List).removeClass(lo.P_Host_UI), Qt("#onetrust-pc-sdk " + lo.P_Vendor_Content).removeClass(lo.P_Host_Cnt)
    }, Or.prototype.showAllVendors = function (t) {
        return p(this, void 0, void 0, function () {
            return g(this, function (e) {
                switch (e.label) {
                    case 0:
                        return [4, wr.fetchAndSetupPC()];
                    case 1:
                        return e.sent(), wr.showVendorsList(null, !0), Jt.isPCVisible ? [3, 3] : [4, wr.showCookieSettingsHandler(t)];
                    case 2:
                        e.sent(), e.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, Or.prototype.fetchAndSetupPC = function () {
        return p(this, void 0, void 0, function () {
            var t, o, n;
            return g(this, function (e) {
                switch (e.label) {
                    case 0:
                        return Nt.moduleInitializer.IsSuppressPC && 0 === Qt("#onetrust-pc-sdk").length ? [4, oo.getPcContent()] : [3, 2];
                    case 1:
                        t = e.sent(), zo.preferenceCenterGroup = {
                            name: t.name,
                            html: atob(t.html),
                            css: t.css
                        }, Nt.isV2Template = Kt.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(t.name), (o = document.getElementById("onetrust-style")).innerHTML += zo.preferenceCenterGroup.css, o.innerHTML += Pr.addCustomPreferenceCenterCSS(), Mn.insertPcHtml(), wr.initialiseConsentNoticeHandlers(), Kt.IsIabEnabled && Gn.InitializeVendorList(), e.label = 2;
                    case 2:
                        return 0 !== Qt("#onetrust-pc-sdk").length && Kt.PCTemplateUpgrade && (n = document.querySelector("#onetrust-pc-sdk .ot-optout-signal"), Mn.setOptOutSignalVisibility(n)), [2]
                }
            })
        })
    }, Or.prototype.setVendorContent = function () {
        Qt("#onetrust-pc-sdk #filter-count").text(Jt.filterByIABCategories.length.toString()), Gn.loadVendorList("", Jt.filterByIABCategories), Kt.UseGoogleVendors && (Jt.vendorDomInit ? Gn.resetAddtlVendors() : (Gn.initGoogleVendors(), Qt("#onetrust-pc-sdk").on("click", ".ot-acc-cntr > button", wr.toggleAccordionStatus.bind(this)))), Jt.vendorDomInit || (Jt.vendorDomInit = !0, wr.initialiseLegIntBtnHandlers(), Kt.UseGoogleVendors && (wr.initialiseAddtlVenHandler(), wr.bindSelAllHandlers())), Jt.showGeneralVendors && !Jt.genVendorDomInit && (Jt.genVendorDomInit = !0, Gn.initGenVendors(), wr.initializeGenVenHandlers(), Kt.UseGoogleVendors || (wr.bindSelAllHandlers(), Qt("#onetrust-pc-sdk").on("click", ".ot-acc-cntr > button", wr.toggleAccordionStatus.bind(this))))
    }, Or.prototype.addEventAdditionalTechnologies = function () {
        var e = document.querySelectorAll("#onetrust-pc-sdk .ot-acc-cntr.ot-add-tech > button");
        0 < e.length && (Qt(e).off("click", wr.toggleAccordionStatus), Qt(e).on("click", wr.toggleAccordionStatus))
    }, Or.prototype.showVendorsList = function (e, t) {
        if (void 0 === t && (t = !1), Jt.cookieListType = null, wr.hideCategoryContainer(!1), Zn.addOTCssPropertiesToBody(Qn.PC, {}), Jt.showVendorService) Er.showVSList(); else {
            if (!t) {
                var o = e.getAttribute("data-parent-id");
                if (o) {
                    var n = yo.getGroupById(o);
                    if (n) {
                        var r = b(n.SubGroups, [n]).reduce(function (e, t) {
                            return -1 < Bt.indexOf(t.Type) && e.push(t.CustomGroupId), e
                        }, []);
                        Jt.filterByIABCategories = b(Jt.filterByIABCategories, r)
                    }
                }
            }
            wr.setVendorContent(), wn.updateFilterSelection(!1)
        }
        return Jt.pcLayer = w.VendorList, e && Ln.setPCFocus(Ln.getPCElements()), this.setSearchInputFocus(), !1
    }, Or.prototype.loadCookieList = function (e) {
        Jt.filterByCategories = [], wr.hideCategoryContainer(!0);
        var t = e && e.getAttribute("data-parent-id");
        if (t) {
            var o = yo.getGroupById(t);
            Jt.filterByCategories.push(t), o.SubGroups.length && o.SubGroups.forEach(function (e) {
                if (-1 === Bt.indexOf(e.Type)) {
                    var t = e.CustomGroupId;
                    Jt.filterByCategories.indexOf(t) < 0 && Jt.filterByCategories.push(t)
                }
            })
        }
        return Gn.loadHostList("", Jt.filterByCategories), Jt.showTrackingTech && wr.addEventAdditionalTechnologies(), Qt("#onetrust-pc-sdk #filter-count").text(Jt.filterByCategories.length.toString()), wn.updateFilterSelection(!0), Jt.pcLayer = w.CookieList, Ln.setPCFocus(Ln.getPCElements()), this.setSearchInputFocus(), !1
    }, Or.prototype.selectAllVendorsLegIntHandler = function (e) {
        var t = Qt("#onetrust-pc-sdk #" + lo.P_Sel_All_Vendor_Leg_El).el[0], o = t.classList.contains("line-through"),
            n = Qt(lo.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-leg-checkbox-handler').el,
            r = e.target.checked, i = {};
        Jt.vendors.selectedLegIntVendors.map(function (e, t) {
            i[e.split(":")[0]] = t
        });
        for (var s = 0; s < n.length; s++) {
            Rt.setCheckedAttribute(null, n[s], r), Kt.PCShowConsentLabels && (n[s].parentElement.querySelector(".ot-label-status").innerHTML = r ? Kt.PCActiveText : Kt.PCInactiveText);
            var a = n[s].getAttribute("leg-vendorid"), l = i[a];
            void 0 === l && (l = a), Jt.vendors.selectedLegIntVendors[l] = a + ":" + r
        }
        o && t.classList.remove("line-through"), Rt.setCheckedAttribute(null, e.target, r)
    }, Or.prototype.selAllAdtlVenHandler = function (e) {
        for (var t = Qt("#onetrust-pc-sdk #ot-selall-adtlvencntr").el[0], o = t.classList.contains("line-through"), n = Qt("#onetrust-pc-sdk .ot-addtlven-chkbox-handler").el, r = e.target.checked, i = 0; i < n.length; i++) Rt.setCheckedAttribute(null, n[i], r), Kt.PCShowConsentLabels && (n[i].parentElement.querySelector(".ot-label-status").innerHTML = r ? Kt.PCActiveText : Kt.PCInactiveText);
        r ? Kt.UseGoogleVendors && Object.keys(Jt.addtlVendorsList).forEach(function (e) {
            Jt.addtlVendors.vendorSelected[e] = !0
        }) : Jt.addtlVendors.vendorSelected = {}, o && t.classList.remove("line-through")
    }, Or.prototype.selectAllGenVenHandler = function (e) {
        var t = e.target.checked;
        wr.selectAllHandler({
            selAllEl: "#onetrust-pc-sdk #ot-selall-gnvencntr",
            vendorBoxes: "#onetrust-pc-sdk .ot-gnven-chkbox-handler"
        }, "genven", t)
    }, Or.prototype.selectAllHandler = function (e, t, o) {
        for (var n = Qt(e.selAllEl).el[0], r = n.classList.contains("line-through"), i = Qt(e.vendorBoxes).el, s = 0; s < i.length; s++) "genven" === t && !o && Jt.alwaysActiveGenVendors.includes(i[s].getAttribute("gn-vid")) ? (Rt.setDisabledAttribute(null, i[s], !0), Rt.setCheckedAttribute(null, i[s], !0)) : Rt.setCheckedAttribute(null, i[s], o), Kt.PCShowConsentLabels && (i[s].parentElement.querySelector(".ot-label-status").innerHTML = o ? Kt.PCActiveText : Kt.PCInactiveText);
        o ? "googleven" === t && Kt.UseGoogleVendors ? Object.keys(Jt.addtlVendorsList).forEach(function (e) {
            Jt.addtlVendors.vendorSelected[e] = !0
        }) : "genven" === t && Jt.showGeneralVendors && Kt.GeneralVendors.forEach(function (e) {
            Jt.genVendorsConsent[e.VendorCustomId] = !0
        }) : "googleven" === t ? Jt.addtlVendors.vendorSelected = {} : (Jt.genVendorsConsent = {}, Jt.alwaysActiveGenVendors.forEach(function (e) {
            Jt.genVendorsConsent[e] = !0
        })), r && n.classList.remove("line-through")
    }, Or.prototype.SelectAllVendorConsentHandler = function (e) {
        var t = e.target.checked;
        if (Jt.showVendorService) Er.toggleVendors(t); else {
            var o = Qt("#onetrust-pc-sdk #" + lo.P_Sel_All_Vendor_Consent_El).el[0],
                n = o.classList.contains("line-through"),
                r = Qt(lo.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-checkbox-handler').el, i = {};
            Jt.vendors.selectedVendors.map(function (e, t) {
                i[e.split(":")[0]] = t
            });
            for (var s = 0; s < r.length; s++) {
                Rt.setCheckedAttribute(null, r[s], t), Kt.PCShowConsentLabels && (r[s].parentElement.querySelector(".ot-label-status").innerHTML = t ? Kt.PCActiveText : Kt.PCInactiveText);
                var a = r[s].getAttribute("vendorid"), l = i[a];
                void 0 === l && (l = a), Jt.vendors.selectedVendors[l] = a + ":" + t
            }
            n && o.classList.remove("line-through")
        }
        Rt.setCheckedAttribute(null, e.target, t)
    }, Or.prototype.onVendorToggle = function (n, e) {
        var t = Jt.vendors, o = Jt.addtlVendors,
            r = e === F.LI ? t.selectedLegIntVendors : e === F.AddtlConsent ? [] : t.selectedVendors, i = !1,
            s = Number(n);
        r.some(function (e, t) {
            var o = e.split(":");
            if (o[0] === n) return s = t, i = "true" === o[1], !0
        }), e === F.LI ? (Mo.triggerGoogleAnalyticsEvent(Wo, i ? fn : vn, t.list.find(function (e) {
            return e.vendorId === n
        }).vendorName + ": IABV2_" + n), t.selectedLegIntVendors[s] = n + ":" + !i, zt.legIntSettings.PShowLegIntBtn || Gn.vendorLegIntToggleEvent()) : e === F.AddtlConsent ? (o.vendorSelected[n] ? delete o.vendorSelected[n] : o.vendorSelected[n] = !0, Gn.venAdtlSelAllTglEvent()) : (Mo.triggerGoogleAnalyticsEvent(Wo, i ? yn : Cn, t.list.find(function (e) {
            return e.vendorId === n
        }).vendorName + ": IABV2_" + n), t.selectedVendors[s] = n + ":" + !i, Gn.vendorsListEvent())
    }, Or.prototype.onVendorDisclosure = function (n) {
        return p(this, void 0, void 0, function () {
            var t, o;
            return g(this, function (e) {
                switch (e.label) {
                    case 0:
                        return (t = Jt.discVendors)[n].isFetched ? [3, 2] : (t[n].isFetched = !0, [4, oo.getStorageDisclosure(t[n].disclosureUrl)]);
                    case 1:
                        o = e.sent(), Gn.updateVendorDisclosure(n, o), e.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, Or.prototype.tglFltrOptionHandler = function (e) {
        e && e.target.classList.contains("category-filter-handler") && Rt.setCheckedAttribute(null, e.target, e.target.checked)
    }, Or.prototype.selectVendorsGroupHandler = function (e) {
        wr.toggleAccordionStatus(e);
        var t = e.target.getAttribute("leg-vendorid"), o = e.target.getAttribute("vendorid"),
            n = e.target.getAttribute("addtl-vid"), r = e.target.getAttribute("disc-vid");
        t ? wr.onVendorToggle(t, F.LI) : o ? wr.onVendorToggle(o, F.Consent) : n && wr.onVendorToggle(n, F.AddtlConsent), r && wr.onVendorDisclosure(r), (t || o || n) && (Rt.setCheckedAttribute(null, e.target, e.target.checked), Kt.PCShowConsentLabels && (e.target.parentElement.querySelector(".ot-label-status").innerHTML = e.target.checked ? Kt.PCActiveText : Kt.PCInactiveText))
    }, Or.prototype.toggleVendorFiltersHandler = function () {
        var e = !1, t = Qt("#onetrust-pc-sdk " + lo.P_Fltr_Modal).el[0];
        switch (zt.pcName) {
            case pt:
            case dt:
            case ut:
            case gt:
                if (e = "block" === t.style.display) wr.closeFilter(); else {
                    var o = Qt("#onetrust-pc-sdk " + lo.P_Triangle).el[0];
                    Qt(o).attr("style", "display: block;"), Qt(t).attr("style", "display: block;");
                    var n = Array.prototype.slice.call(t.querySelectorAll("[href], input, button"));
                    Ln.setPCFocus(n)
                }
                break;
            case ht:
                896 < window.innerWidth || 896 < window.screen.height ? Dt(t, "width: 400px;", !0) : Dt(t, "height: 100%; width: 100%;"), t.querySelector(".ot-checkbox input").focus();
                break;
            default:
                return
        }
        Nt.isV2Template && !e && (Qt("#onetrust-pc-sdk").addClass("ot-shw-fltr"), Qt("#onetrust-pc-sdk .ot-fltr-scrlcnt").el[0].scrollTop = 0)
    }, Or.prototype.clearFiltersHandler = function () {
        wr.setAriaLabelforButtonInFilter(Kt.PCenterFilterClearedAria);
        for (var e = Qt("#onetrust-pc-sdk " + lo.P_Fltr_Modal + " input").el, t = 0; t < e.length; t++) Rt.setCheckedAttribute(null, e[t], !1);
        wr.isCookieList ? Jt.filterByCategories = [] : Jt.filterByIABCategories = []
    }, Or.prototype.cancelFilterHandler = function () {
        Jt.showVendorService ? Er.cancelFilter() : wr.isCookieList ? wn.cancelHostFilter() : Gn.cancelVendorFilter(), wr.closeFilter(), Qt("#onetrust-pc-sdk #filter-btn-handler").focus()
    }, Or.prototype.applyFilterHandler = function () {
        var e;
        wr.setAriaLabelforButtonInFilter(Kt.PCenterFilterAppliedAria), Jt.showVendorService ? (e = Er.getGroupsFilter(), Er.filterVendorByGroup(e)) : wr.isCookieList ? (e = wn.updateHostFilterList(), Gn.loadHostList("", e), Jt.showTrackingTech && wr.addEventAdditionalTechnologies()) : (e = Gn.updateVendorFilterList(), Gn.loadVendorList("", e)), Qt("#onetrust-pc-sdk #filter-count").text(String(e.length)), wr.closeFilter(), Qt("#onetrust-pc-sdk #filter-btn-handler").focus()
    }, Or.prototype.setAriaLabelforButtonInFilter = function (e) {
        var t = Jt.isPCVisible ? document.querySelector("#onetrust-pc-sdk span[aria-live]") : document.querySelector("#onetrust-banner-sdk span[aria-live]");
        if (!t) {
            (t = document.createElement("span")).classList.add("ot-scrn-rdr"), t.setAttribute("aria-atomic", "true");
            var o = void 0;
            if (Jt.isPCVisible ? o = document.getElementById(wr.pcSDKSelector) : document.getElementById(wr.bannerSelector) && (o = document.getElementById(wr.bannerSelector)), !o) return;
            o.appendChild(t)
        }
        t.setAttribute("aria-atomic", "true"), t.setAttribute("aria-relevant", "additions"), t.setAttribute("aria-live", "assertive"), t.setAttribute(St, e), wr.timeCallback && clearTimeout(wr.timeCallback), wr.timeCallback = setTimeout(function () {
            wr.timeCallback = null, t.setAttribute(St, "")
        }, 900)
    }, Or.prototype.setPcListContainerHeight = function () {
        Qt("#onetrust-pc-sdk " + lo.P_Content).el[0].classList.contains("ot-hide") ? Dt(Qt("#onetrust-pc-sdk").el[0], 'height: "";', !0) : setTimeout(function () {
            var e = window.innerHeight;
            768 <= window.innerWidth && 600 <= window.innerHeight && (e = .8 * window.innerHeight), !Qt("#onetrust-pc-sdk " + lo.P_Content).el[0].scrollHeight || Qt("#onetrust-pc-sdk " + lo.P_Content).el[0].scrollHeight >= e ? Dt(Qt("#onetrust-pc-sdk").el[0], "height: " + e + "px;", !0) : Dt(Qt("#onetrust-pc-sdk").el[0], "height: auto;", !0)
        })
    }, Or.prototype.changeSelectedTab = function (e) {
        var t, o = Qt("#onetrust-pc-sdk .category-menu-switch-handler"), n = 0, r = Qt(o.el[0]);
        o.each(function (e, t) {
            Qt(e).el.classList.contains(lo.P_Active_Menu) && (n = t, Qt(e).el.classList.remove(lo.P_Active_Menu), r = Qt(e))
        }), e.keyCode === O.RightArrow ? t = n + 1 >= o.el.length ? Qt(o.el[0]) : Qt(o.el[n + 1]) : e.keyCode === O.LeftArrow && (t = Qt(n - 1 < 0 ? o.el[o.el.length - 1] : o.el[n - 1])), this.tabMenuToggle(t, r)
    }, Or.prototype.changeSelectedTabV2 = function (e) {
        var t, o = e.target.parentElement;
        e.keyCode === O.RightArrow ? t = o.nextElementSibling || o.parentElement.firstChild : e.keyCode === O.LeftArrow && (t = o.previousElementSibling || o.parentElement.lastChild);
        var n = t.querySelector(".category-menu-switch-handler");
        n.focus(), this.groupTabClick(n)
    }, Or.prototype.categoryMenuSwitchHandler = function () {
        for (var t = this, e = Qt("#onetrust-pc-sdk .category-menu-switch-handler").el, o = 0; o < e.length; o++) e[o].addEventListener("click", this.groupTabClick), e[o].addEventListener("keydown", function (e) {
            if (32 === e.keyCode || "space" === e.code) return t.groupTabClick(e.currentTarget), e.preventDefault(), !1
        })
    }, Or.prototype.groupTabClick = function (e) {
        var t = Qt("#onetrust-pc-sdk " + lo.P_Grp_Container).el[0], o = t.querySelector("." + lo.P_Active_Menu),
            n = e.currentTarget || e, r = n.getAttribute("aria-controls");
        o.setAttribute("tabindex", -1), o.setAttribute("aria-selected", !1), o.classList.remove(lo.P_Active_Menu), t.querySelector(lo.P_Desc_Container + ":not(.ot-hide)").classList.add("ot-hide"), t.querySelector("#" + r).classList.remove("ot-hide"), n.setAttribute("tabindex", 0), n.setAttribute("aria-selected", !0), n.classList.add(lo.P_Active_Menu)
    }, Or.prototype.tabMenuToggle = function (e, t) {
        e.el.setAttribute("tabindex", 0), e.el.setAttribute("aria-selected", !0), t.el.setAttribute("tabindex", -1), t.el.setAttribute("aria-selected", !1), e.focus(), t.el.parentElement.parentElement.querySelector("" + lo.P_Desc_Container).classList.add("ot-hide"), e.el.parentElement.parentElement.querySelector("" + lo.P_Desc_Container).classList.remove("ot-hide"), e.el.classList.add(lo.P_Active_Menu)
    }, Or.prototype.closeFilter = function (e) {
        if (void 0 === e && (e = !0), !ur.checkIfPcSdkContainerExist()) {
            var t = Qt("#onetrust-pc-sdk " + lo.P_Fltr_Modal).el[0], o = Qt("#onetrust-pc-sdk " + lo.P_Triangle).el[0];
            zt.pcName === ht ? 896 < window.innerWidth || 896 < window.screen.height ? Dt(t, "width: 0;", !0) : Dt(t, "height: 0;") : Dt(t, "display: none;"), o && Qt(o).attr("style", "display: none;"), Nt.isV2Template && Qt("#onetrust-pc-sdk").removeClass("ot-shw-fltr"), e && Ln.setFirstAndLast(Ln.getPCElements())
        }
    }, Or.prototype.setBackButtonFocus = function () {
        Qt("#onetrust-pc-sdk .back-btn-handler").el[0].focus()
    }, Or.prototype.setSearchInputFocus = function () {
        Qt(wr.VENDOR_SEARCH_SELECTOR).el[0].focus()
    }, Or.prototype.setCenterLayoutFooterHeight = function () {
        var e = wr.pc;
        if (wr.setMainContentHeight(), zt.pcName === gt && e) {
            var t = e.querySelectorAll("" + lo.P_Desc_Container),
                o = e.querySelectorAll("li .category-menu-switch-handler");
            if (!e.querySelector(".category-menu-switch-handler + " + lo.P_Desc_Container) && window.innerWidth < 640) for (var n = 0; n < t.length; n++) o[n].insertAdjacentElement("afterend", t[n]); else e.querySelector(".category-menu-switch-handler + " + lo.P_Desc_Container) && 640 < window.innerWidth && Qt(e.querySelector(".ot-tab-desc")).append(t)
        }
    }, Or.prototype.setMainContentHeight = function () {
        var e = this.pc, t = e.querySelector(".ot-pc-footer"), o = e.querySelector(".ot-pc-header"),
            n = e.querySelectorAll(".ot-pc-footer button"), r = n[n.length - 1], i = Kt.PCLayout;
        if (e.classList.remove("ot-ftr-stacked"), n[0] && r && 1 < Math.abs(n[0].offsetTop - r.offsetTop) && e.classList.add("ot-ftr-stacked"), !Kt.PCTemplateUpgrade && !i.Center) {
            var s = e.clientHeight - t.clientHeight - o.clientHeight - 3;
            if (Kt.PCTemplateUpgrade && !i.Tab && Kt.PCenterVendorListDescText) {
                var a = Qt("#vdr-lst-dsc").el;
                s = s - (a.length && a[0].clientHeight) - 10
            }
            Dt(e.querySelector("" + lo.P_Vendor_List), "height: " + s + "px;", !0)
        }
        var l = e.querySelector("" + lo.P_Content);
        if (Kt.PCTemplateUpgrade && i.Center) {
            var c = 600 < window.innerWidth && 475 < window.innerHeight;
            if (!this.pcBodyHeight && c && (this.pcBodyHeight = l.scrollHeight), c) {
                var d = this.pcBodyHeight + t.clientHeight + o.clientHeight + 20;
                d > .8 * window.innerHeight || 0 === this.pcBodyHeight ? Dt(e, "height: " + .8 * window.innerHeight + "px;", !0) : Dt(e, "height: " + d + "px;", !0)
            } else Dt(e, "height: 100%;", !0)
        } else Dt(e.querySelector("" + lo.P_Content), "height: " + (e.clientHeight - t.clientHeight - o.clientHeight - 3) + "px;", !0)
    }, Or.prototype.allowAllVisible = function (e) {
        e !== this.allowVisible && Kt.PCLayout.Tab && Kt.PCTemplateUpgrade && (this.pc && this.setMainContentHeight(), this.allowVisible = e)
    }, Or.prototype.restorePc = function () {
        Jt.pcLayer === w.CookieList ? (wr.hideCategoryContainer(!0), Gn.loadHostList("", Jt.filterByCategories), Jt.showTrackingTech && wr.addEventAdditionalTechnologies(), Qt("#onetrust-pc-sdk #filter-count").text(Jt.filterByCategories.length.toString())) : Jt.pcLayer === w.VendorList && (wr.hideCategoryContainer(!1), wr.setVendorContent()), Jt.isPCVisible = !1, wr.toggleInfoDisplay(), Jt.pcLayer !== w.VendorList && Jt.pcLayer !== w.CookieList || (wn.updateFilterSelection(Jt.pcLayer === w.CookieList), wr.setBackButtonFocus(), Ln.setPCFocus(Ln.getPCElements()))
    }, Or.prototype.toggleInfoDisplay = function () {
        return p(this, void 0, void 0, function () {
            var t, o;
            return g(this, function (e) {
                switch (e.label) {
                    case 0:
                        return zo.csBtnGroup && (Qt(wr.fltgBtnSltr).addClass("ot-pc-open"), wr.otGuardLogoPromise.then(function () {
                            Kt.cookiePersistentLogo.includes("ot_guard_logo.svg") && Qt(wr.fltgBtnFSltr).attr(Pt, "true")
                        }), Qt(wr.fltgBtnBSltr).attr(Pt, "")), [4, wr.fetchAndSetupPC()];
                    case 1:
                        return e.sent(), zt.pcName === ut && this.setPcListContainerHeight(), void 0 !== Jt.pcLayer && Jt.pcLayer !== w.Banner || (Jt.pcLayer = w.PrefCenterHome), t = Qt("#onetrust-pc-sdk").el[0], Qt(".onetrust-pc-dark-filter").el[0].removeAttribute("style"), t.removeAttribute("style"), Jt.isPCVisible || (ur.showConsentNotice(), Jt.isPCVisible = !0, Kt.PCTemplateUpgrade && (this.pc = t, o = t.querySelector("#accept-recommended-btn-handler"), this.allowVisible = o && 0 < o.clientHeight, this.setCenterLayoutFooterHeight(), wr.getResizeElement().addEventListener("resize", wr.setCenterLayoutFooterHeight), window.addEventListener("resize", wr.setCenterLayoutFooterHeight))), window.dispatchEvent(new CustomEvent("OneTrustPCLoaded", {OneTrustPCLoaded: "yes"})), wr.captureInitialConsent(), [2]
                }
            })
        })
    }, Or.prototype.close = function (e) {
        Kt.BCloseButtonType === pe.Link ? Jt.bannerCloseSource = v.ContinueWithoutAcceptingButton : Jt.bannerCloseSource = v.BannerCloseButton, Gr.bannerCloseButtonHandler(e), wr.getResizeElement().removeEventListener("resize", wr.setCenterLayoutFooterHeight), window.removeEventListener("resize", wr.setCenterLayoutFooterHeight)
    }, Or.prototype.closePreferenceCenter = function (e) {
        e && e.preventDefault(), window.location.href = "http://otsdk//consentChanged"
    }, Or.prototype.initializeAlartHtmlAndHandler = function () {
        Jt.skipAddingHTML = 0 < Qt("#onetrust-banner-sdk").length, Jt.skipAddingHTML || Lr.insertAlertHtml(), this.initialiseAlertHandlers()
    }, Or.prototype.initialiseAlertHandlers = function () {
        var e = this;
        Lr.showBanner(), Kt.ForceConsent && !io.isCookiePolicyPage(Kt.AlertNoticeText) && Qt(".onetrust-pc-dark-filter").removeClass("ot-hide").css("z-index:2147483645;"), Kt.OnClickCloseBanner && document.body.addEventListener("click", Gr.bodyClickEvent), Kt.ScrollCloseBanner && (window.addEventListener("scroll", Gr.scrollCloseBanner), Qt(document).on("click", ".onetrust-close-btn-handler", Gr.rmScrollAndClickBodyEvents), Qt(document).on("click", "#onetrust-accept-btn-handler", Gr.rmScrollAndClickBodyEvents), Qt(document).on("click", "#accept-recommended-btn-handler", Gr.rmScrollAndClickBodyEvents)), (Kt.IsIabEnabled || Kt.UseGoogleVendors || Jt.showGeneralVendors) && !Jt.showVendorService && Qt(document).on("click", ".onetrust-vendors-list-handler", wr.showAllVendors), Kt.FloatingRoundedIcon && Qt("#onetrust-banner-sdk #onetrust-cookie-btn").on("click", function (e) {
            Jt.pcSource = e.currentTarget, wr.showCookieSettingsHandler(e)
        }), Qt("#onetrust-banner-sdk .onetrust-close-btn-handler, #onetrust-banner-sdk .ot-bnr-save-handler").on("click", wr.bannerCloseButtonHandler), Qt("#onetrust-banner-sdk #onetrust-pc-btn-handler").on("click", wr.showCookieSettingsHandler), Qt("#onetrust-banner-sdk #onetrust-accept-btn-handler").on("click", Gr.allowAllEventHandler.bind(this, !1)), Qt("#onetrust-banner-sdk #onetrust-reject-all-handler").on("click", Gr.rejectAllEventHandler.bind(this, !1)), Qt("#onetrust-banner-sdk .banner-option-input").on("click", zt.bannerName === st ? wr.toggleBannerOptions : wr.toggleAccordionStatus), Qt("#onetrust-banner-sdk .ot-gv-list-handler").on("click", function (t) {
            return p(e, void 0, void 0, function () {
                return g(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return Jt.cookieListType = $.GenVen, [4, wr.fetchAndSetupPC()];
                        case 1:
                            return e.sent(), wr.loadCookieList(t.target), wr.showCookieSettingsHandler(t), [2]
                    }
                })
            })
        }), Qt("#onetrust-banner-sdk .category-switch-handler").on("click", wr.toggleBannerCategory);
        var t = document.getElementById("onetrust-banner-sdk");
        Kt.ForceConsent && t && "none" !== window.getComputedStyle(t).display && Qt(document).on("keydown", wr.shiftBannerFocus), Qt("#onetrust-banner-sdk").on("keydown", function (e) {
            32 !== e.keyCode && "Space" !== e.code && 13 !== e.keyCode && "Enter" !== e.code || io.findUserType(e)
        })
    }, Or.prototype.getResizeElement = function () {
        var e = document.querySelector("#onetrust-pc-sdk .ot-text-resize");
        return e ? e.contentWindow || e : document
    }, Or.prototype.insertCookieSettingText = function (e) {
        var t, o;
        void 0 === e && (e = !1);
        for (var n = Kt.CookieSettingButtonText, r = Qt(".ot-sdk-show-settings").el, i = Qt(".optanon-toggle-display").el, s = 0; s < r.length; s++) Qt(r[s]).text(n), Qt(i[s]).text(n);
        e ? (null !== (t = document.querySelector(".ot-sdk-show-settings")) && void 0 !== t && t.addEventListener("click", this.cookiesSettingsBoundListener), null !== (o = document.querySelector(".optanon-toggle-display")) && void 0 !== o && o.addEventListener("click", this.cookiesSettingsBoundListener)) : wr.initCookieSettingHandlers()
    }, Or.prototype.genVendorToggled = function (e) {
        var t = e.target.getAttribute("gn-vid");
        wo.updateGenVendorStatus(t, e.target.checked);
        var o = Kt.GeneralVendors.find(function (e) {
            return e.VendorCustomId === t
        }).Name;
        Mo.triggerGoogleAnalyticsEvent(Wo, e.target.checked ? cn : dn, o + ": VEN_" + t), Gn.genVenSelectAllTglEvent()
    }, Or.prototype.genVendorDetails = function (e) {
        wr.toggleAccordionStatus(e)
    }, Or.prototype.confirmPC = function (e) {
        var t = go.isAlertBoxClosedAndValid();
        Kt.NoBanner && Kt.ShowPreferenceCenterCloseButton && !t && Gr.bannerCloseButtonHandler();
        var o = io.isBannerVisible();
        !Nt.moduleInitializer.MobileSDK || !t && o || wr.closePreferenceCenter(e)
    }, Or.prototype.captureInitialConsent = function () {
        Jt.initialGroupsConsent = JSON.parse(JSON.stringify(Jt.groupsConsent)), Jt.initialHostConsent = JSON.parse(JSON.stringify(Jt.hostsConsent)), Jt.showGeneralVendors && (Jt.initialGenVendorsConsent = JSON.parse(JSON.stringify(Jt.genVendorsConsent))), Kt.IsIabEnabled && (Jt.initialOneTrustIABConsent = JSON.parse(JSON.stringify(Jt.oneTrustIABConsent)), Jt.initialVendors = JSON.parse(JSON.stringify(Jt.vendors)), Jt.initialVendors.vendorTemplate = Jt.vendors.vendorTemplate), Kt.UseGoogleVendors && (Jt.initialAddtlVendorsList = JSON.parse(JSON.stringify(Jt.addtlVendorsList)), Jt.initialAddtlVendors = JSON.parse(JSON.stringify(Jt.addtlVendors))), Jt.vsIsActiveAndOptOut && (Jt.initialVendorsServiceConsent = new Map(Jt.vsConsent))
    }, Or);

    function Or() {
        var t = this;
        this.allowVisible = !1, this.fltgBtnBackBtn = ".ot-floating-button__back button", this.fltgBtnBSltr = ".ot-floating-button__back svg", this.fltgBtnFrontBtn = ".ot-floating-button__front button", this.fltgBtnFSltr = ".ot-floating-button__front svg", this.fltgBtnSltr = "#ot-sdk-btn-floating", this.VENDOR_SEARCH_SELECTOR = "#onetrust-pc-sdk #vendor-search-handler", this.isCookieList = !1, this.pc = null, this.currentSearchInput = "", this.pcLinkSource = null, this.pcSDKSelector = "onetrust-pc-sdk", this.bannerSelector = "onetrust-banner-sdk", this.otGuardLogoResolve = null, this.otGuardLogoPromise = new Promise(function (e) {
            t.otGuardLogoResolve = e
        }), this.showCookieSettingsHandler = function (s) {
            return p(t, void 0, void 0, function () {
                var t, o, n, r, i;
                return g(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return (t = document.getElementById(wr.pcSDKSelector), t && "none" !== window.getComputedStyle(t).getPropertyValue("display")) ? [2] : (s && s.stopPropagation(), s && s.target && (o = s.target.className, n = "onetrust-pc-btn-handler" === s.target.id, r = "ot-sdk-show-settings" === o, (n || r) && (i = n ? Zo : en, Mo.triggerGoogleAnalyticsEvent(Wo, i)), Jt.pcSource = s.target), [4, wr.toggleInfoDisplay()]);
                        case 1:
                            return e.sent(), [2, !1]
                    }
                })
            })
        }, this.cookiesSettingsBoundListener = this.showCookieSettingsHandler.bind(this), this.backBtnHandler = function () {
            return Jt.showVendorService && Er.hideVendorList(), Jt.showTrackingTech && (wr.currentSearchInput = ""), Gr.hideVendorsList(), zt.pcName === ut && (Qt("#onetrust-pc-sdk " + lo.P_Content).removeClass("ot-hide"), Qt("#onetrust-pc-sdk").el[0].removeAttribute("style"), t.setPcListContainerHeight()), Qt("#onetrust-pc-sdk #filter-count").text("0"), Qt(wr.VENDOR_SEARCH_SELECTOR).length && (Qt(wr.VENDOR_SEARCH_SELECTOR).el[0].value = ""), Jt.currentGlobalFilteredList = [], Jt.filterByCategories = [], Jt.filterByIABCategories = [], Jt.vendors.searchParam = "", wr.closeFilter(), Jt.pcLayer = w.PrefCenterHome, t.pcLinkSource ? (t.pcLinkSource.focus(), t.pcLinkSource = null) : Ln.setPCFocus(Ln.getPCElements()), !1
        }, this.bannerCloseBoundListener = this.bannerCloseButtonHandler.bind(this), this.toggleGroupORVendorHandler = function (e) {
            var t = e.currentTarget, o = t.dataset.otVsId;
            o ? wr.toggleVendorServiceHandler.bind(this)(e) : (o = t.dataset.optanongroupid) && wr.toggleV2Category.bind(this)()
        }, this.toggleVendorFromListHandler = function (e) {
            var t = e.currentTarget, o = t.checked, n = t.dataset.otVsId, r = t.dataset.optanongroupid,
                i = document.getElementById("ot-vendor-id-" + n);
            Fn.toggleVendorService(r, n, o, i)
        }, this.toggleVendorServiceHandler = function (e) {
            var t = e.currentTarget, o = t.checked, n = t.dataset.otVsId, r = t.dataset.optanongroupid;
            Fn.toggleVendorService(r, n, o, t);
            var i = yo.getVSById(n);
            wr.setAriaLabelforButtonInFilter(i.ServiceName)
        }, this.toggleV2Category = function (e, t, o, n) {
            if (!t) {
                var r = this.getAttribute("data-optanongroupid"), i = "function" == typeof this.getAttribute,
                    s = Rt.findIndex(Jt.dataGroupState, function (e) {
                        return i && e.CustomGroupId === r
                    });
                t = Jt.dataGroupState[s]
            }
            var a;
            if (void 0 === o && (o = Qt(this).is(":checked")), Kt.ChoicesBanner && Rt.setCheckedAttribute("#ot-bnr-grp-id-" + t.CustomGroupId, null, o), n) document.querySelector("#ot-group-id-" + n) && (Rt.setCheckedAttribute("#ot-group-id-" + n, null, o), a = document.querySelector("#ot-group-id-" + n)); else {
                a = this, Rt.setCheckedAttribute(null, this, o);
                var l = a.parentElement.querySelector(".ot-switch-nob");
                Nt.fp.CookieV2VendorServiceScript ? Kt.PCCategoryStyle === le.Toggle && l && l.setAttribute("aria-checked", o) : Kt.PCTemplateUpgrade && l && l.setAttribute("aria-checked", o)
            }
            Kt.PCShowConsentLabels && (a.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? Kt.PCActiveText : Kt.PCInactiveText);
            var c = this instanceof HTMLElement && -1 !== this.getAttribute("id").indexOf("-leg-out");
            wr.setAriaLabelforButtonInFilter(t.GroupName), wr.updateGroupToggles(t, o, c)
        }, this.toggleBannerCategory = function () {
            var t = this, e = Rt.findIndex(Jt.dataGroupState, function (e) {
                return "function" == typeof t.getAttribute && e.CustomGroupId === t.getAttribute("data-optanongroupid")
            }), o = Jt.dataGroupState[e], n = Qt(t).is(":checked");
            wr.toggleV2Category(null, o, n, o.CustomGroupId)
        }, this.shiftBannerFocus = function (e) {
            var t = document.getElementById(wr.pcSDKSelector), o = "none" !== window.getComputedStyle(t).display;
            "Tab" !== e.code || o || Ln.handleBannerFocus(e, e.shiftKey)
        }, this.toggleSubCategory = function (e, t, o, n) {
            t = t || this.getAttribute("data-optanongroupid");
            var r, i = yo.getGroupById(t);
            void 0 === o && (o = Qt(this).is(":checked")), n ? (Rt.setCheckedAttribute("#ot-sub-group-id-" + n, null, o), r = document.querySelector("#ot-sub-group-id-" + n)) : (r = this, Rt.setCheckedAttribute(null, this, o)), Kt.PCShowConsentLabels && (r.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? Kt.PCActiveText : Kt.PCInactiveText);
            var s = this instanceof HTMLElement && -1 !== this.getAttribute("id").indexOf("-leg-out");
            wr.setAriaLabelforButtonInFilter(i.GroupName), wr.updateSubGroupToggles(i, o, s), Fn.setVendorStateByGroup(i, o)
        }
    }

    var Gr, Nr = (Dr.prototype.updateDataSubjectTimestamp = function () {
        var e = go.alertBoxCloseDate(), t = e && io.getUTCFormattedDate(e);
        Qt(".ot-userid-timestamp").html(Kt.PCenterUserIdTimestampTitleText + ": " + t)
    }, Dr.prototype.closeBanner = function (e) {
        this.closeOptanonAlertBox(), e ? this.allowAll(!1) : this.close(!1)
    }, Dr.prototype.allowAll = function (e, t) {
        void 0 === t && (t = !1), Nt.moduleInitializer.MobileSDK ? window.OneTrust.AllowAll() : this.AllowAllV2(e, t)
    }, Dr.prototype.bannerActionsHandler = function (t, n, e) {
        var r = this;
        void 0 === e && (e = !1), Ho.setLandingPathParam(De), Jt.groupsConsent = [], Jt.hostsConsent = [], Jt.genVendorsConsent = {};
        var i = {};
        Kt.Groups.forEach(function (e) {
            if (e.IsAboutGroup) return !1;
            b(e.SubGroups, [e]).forEach(function (e) {
                var o = r.getGroupStatus(t, n, e);
                r.setGroupConsent(o, e), e.Hosts.length && io.isOptOutEnabled() && e.Hosts.forEach(function (e) {
                    if (i[e.HostId]) Go.updateHostStatus(e, o); else {
                        i[e.HostId] = !0;
                        var t = Go.isHostPartOfAlwaysActiveGroup(e.HostId) || o;
                        Jt.hostsConsent.push(e.HostId + ":" + (t ? "1" : "0"))
                    }
                }), Jt.genVenOptOutEnabled && e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function (e) {
                    wo.updateGenVendorStatus(e, o)
                })
            })
        }), Kt.IsIabEnabled && (t ? this.iab.allowAllhandler() : this.iab.rejectAllHandler(e)), Zn.removeAddedOTCssStyles(), ur.hideConsentNoticeV2(), Ao.writeGrpParam(Fe.OPTANON_CONSENT), Ao.writeHstParam(Fe.OPTANON_CONSENT), Jt.genVenOptOutEnabled && Ao.writeGenVenCookieParam(Fe.OPTANON_CONSENT), Jt.vsIsActiveAndOptOut && Ao.writeVSConsentCookieParam(Fe.OPTANON_CONSENT), wn.substitutePlainTextScriptTags(), Jn.updateGtmMacros(), this.executeOptanonWrapper()
    }, Dr.prototype.getGroupStatus = function (e, t, o) {
        return !!e || !!t && yo.isAlwaysActiveGroup(o)
    }, Dr.prototype.setGroupConsent = function (e, t) {
        -1 < wt.indexOf(t.Type) && Jt.groupsConsent.push(t.CustomGroupId + ":" + (e && t.HasConsentOptOut ? "1" : "0"))
    }, Dr.prototype.nextPageCloseBanner = function () {
        Ho.isLandingPage() || go.isAlertBoxClosedAndValid() || this.closeBanner(Kt.NextPageAcceptAllCookies)
    }, Dr.prototype.rmScrollAndClickBodyEvents = function () {
        Kt.ScrollCloseBanner && window.removeEventListener("scroll", this.scrollCloseBanner), Kt.OnClickCloseBanner && document.body.removeEventListener("click", this.bodyClickEvent)
    }, Dr.prototype.onClickCloseBanner = function (e) {
        go.isAlertBoxClosedAndValid() || (Mo.triggerGoogleAnalyticsEvent(Wo, Jo), this.closeBanner(Kt.OnClickAcceptAllCookies), e.stopPropagation()), Gr.rmScrollAndClickBodyEvents()
    }, Dr.prototype.scrollCloseBanner = function () {
        var e = Qt(document).height() - Qt(window).height();
        0 === e && (e = Qt(window).height());
        var t = 100 * Qt(window).scrollTop() / e;
        t <= 0 && (t = 100 * (document.scrollingElement && document.scrollingElement.scrollTop || document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop) / (document.scrollingElement && document.scrollingElement.scrollHeight || document.documentElement && document.documentElement.scrollHeight || document.body && document.body.scrollHeight)), 25 < t && !go.isAlertBoxClosedAndValid() && (!Jt.isPCVisible || Kt.NoBanner) ? (Mo.triggerGoogleAnalyticsEvent(Wo, Jo), Gr.closeBanner(Kt.ScrollAcceptAllCookies), Gr.rmScrollAndClickBodyEvents()) : go.isAlertBoxClosedAndValid() && Gr.rmScrollAndClickBodyEvents()
    }, Dr.prototype.AllowAllV2 = function (e, t) {
        void 0 === t && (t = !1);
        for (var o = this.groupsClass.getAllGroupElements(), n = 0; n < o.length; n++) {
            var r = yo.getGroupById(o[n].getAttribute("data-optanongroupid"));
            this.groupsClass.toggleGrpElements(o[n], r, !0), this.groupsClass.toogleSubGroupElement(o[n], !0, !1, !0), this.groupsClass.toogleSubGroupElement(o[n], !0, !0, !0)
        }
        Jt.showVendorService && Fn.consentAll(!0), this.bannerActionsHandler(!0, !1), this.consentTransactions(e, !0, t), Kt.IsIabEnabled && (this.iab.updateIabVariableReference(), this.iab.updateVendorsDOMToggleStatus(!0), this.updateVendorLegBtns(!0))
    }, Dr.prototype.rejectAll = function (e, t) {
        void 0 === t && (t = !1);
        var o, n, r = t ? z[5] : z[2], i = this.groupsClass.getAllGroupElements();
        n = Nt.fp.CookieV2RejectAll ? (o = this.initializeObjectToLIRejectAll(t), this.initializeAllowLIRejectAll(t)) : !(o = !0);
        for (var s = 0; s < i.length; s++) {
            var a = yo.getGroupById(i[s].getAttribute("data-optanongroupid"));
            "always active" !== yo.getGrpStatus(a).toLowerCase() && (En.toggleGrpElements(i[s], a, !1, n), this.groupsClass.toogleSubGroupElement(i[s], !1, !1, !0), (!Kt.IsIabEnabled || Kt.IsIabEnabled && o) && this.groupsClass.toogleSubGroupElement(i[s], !1, !0, !0))
        }
        Jt.showVendorService && Fn.consentAll(!1), this.bannerActionsHandler(!1, !0, n), r !== Jt.consentInteractionType && this.consentTransactions(e, !1, t), Kt.IsIabEnabled && (this.iab.updateIabVariableReference(), this.iab.updateVendorsDOMToggleStatus(!1, n), n || this.updateVendorLegBtns(!1))
    }, Dr.prototype.initializeObjectToLIRejectAll = function (e) {
        return !e && Kt.BannerShowRejectAllButton && Kt.BRejectConsentType === Te.OBJECT_TO_LI || e && Kt.PCenterShowRejectAllButton && Kt.BRejectConsentType === Te.OBJECT_TO_LI
    }, Dr.prototype.initializeAllowLIRejectAll = function (e) {
        return Kt.IsIabEnabled && (!e && Kt.BannerShowRejectAllButton && Kt.BRejectConsentType === Te.LI_ACTIVE_IF_LEGAL_BASIS || e && Kt.PCenterShowRejectAllButton && Kt.BRejectConsentType === Te.LI_ACTIVE_IF_LEGAL_BASIS)
    }, Dr.prototype.executeCustomScript = function () {
        Kt.CustomJs && new Function(Kt.CustomJs)()
    }, Dr.prototype.updateConsentData = function (e) {
        Ho.setLandingPathParam(De), Kt.IsIabEnabled && !e && this.iab.saveVendorStatus(), Ao.writeGrpParam(Fe.OPTANON_CONSENT), Ao.writeHstParam(Fe.OPTANON_CONSENT), Jt.showGeneralVendors && Kt.GenVenOptOut && Ao.writeGenVenCookieParam(Fe.OPTANON_CONSENT), Jt.vsIsActiveAndOptOut && Ao.writeVSConsentCookieParam(Fe.OPTANON_CONSENT), wn.substitutePlainTextScriptTags(), Jn.updateGtmMacros()
    }, Dr.prototype.close = function (e, t) {
        if (void 0 === t && (t = S.Banner), ur.hideConsentNoticeV2(), this.updateConsentData(e), Kt.IsConsentLoggingEnabled) {
            var o = t === S.PC ? sr : t === S.Banner ? nr : zt.apiSource,
                n = t === S.PC ? tr : t === S.Banner ? er : or;
            Jt.bannerCloseSource === v.ContinueWithoutAcceptingButton && (o = lr), Jt.bannerCloseSource === v.BannerSaveSettings && (o = ar), ko.createConsentTxn(!1, n + " - " + o, t === S.PC)
        } else go.dispatchConsentEvent();
        this.executeOptanonWrapper()
    }, Dr.prototype.executeOptanonWrapper = function () {
        try {
            if (this.executeCustomScript(), "function" == typeof window.OptanonWrapper && "undefined" !== window.OptanonWrapper) {
                window.OptanonWrapper();
                for (var e = 0, t = Jt.srcExecGrpsTemp; e < t.length; e++) {
                    var o = t[e];
                    -1 === Jt.srcExecGrps.indexOf(o) && Jt.srcExecGrps.push(o)
                }
                Jt.srcExecGrpsTemp = [];
                for (var n = 0, r = Jt.htmlExecGrpsTemp; n < r.length; n++) o = r[n], -1 === Jt.htmlExecGrps.indexOf(o) && Jt.htmlExecGrps.push(o);
                Jt.htmlExecGrpsTemp = []
            }
        } catch (e) {
            console.warn("Error in Optanon wrapper, please review your code. " + e)
        }
    }, Dr.prototype.updateVendorLegBtns = function (e) {
        if (zt.legIntSettings.PAllowLI && zt.legIntSettings.PShowLegIntBtn) for (var t = Qt(lo.P_Vendor_Container + " .ot-leg-btn-container").el, o = 0; o < t.length; o++) this.groupsClass.updateLegIntBtnElement(t[o], e)
    }, Dr.prototype.showFltgCkStgButton = function () {
        var e = Qt("#ot-sdk-btn-floating");
        e.removeClass("ot-hide"), e.removeClass("ot-pc-open"), Kt.cookiePersistentLogo.includes("ot_guard_logo.svg") && Qt(".ot-floating-button__front svg").attr("aria-hidden", ""), Qt(".ot-floating-button__back svg").attr("aria-hidden", "true")
    }, Dr.prototype.consentTransactions = function (e, t, o) {
        void 0 === o && (o = !1), ko && !e && Kt.IsConsentLoggingEnabled ? ko.createConsentTxn(!1, (o ? tr : er) + " - " + (t ? rr : ir), o) : go.dispatchConsentEvent()
    }, Dr.prototype.hideVendorsList = function () {
        ur.checkIfPcSdkContainerExist() || (Kt.PCTemplateUpgrade ? Qt("#onetrust-pc-sdk " + lo.P_Content).removeClass("ot-hide") : Qt("#onetrust-pc-sdk .ot-main-content").show(), Qt("#onetrust-pc-sdk #close-pc-btn-handler.main").show(), Qt("#onetrust-pc-sdk " + lo.P_Vendor_List).addClass("ot-hide"))
    }, Dr.prototype.resetConsent = function () {
        var e = this;
        Jt.groupsConsent = JSON.parse(JSON.stringify(Jt.initialGroupsConsent)), Jt.hostsConsent = JSON.parse(JSON.stringify(Jt.initialHostConsent)), Jt.showGeneralVendors && (Jt.genVendorsConsent = JSON.parse(JSON.stringify(Jt.initialGenVendorsConsent))), Jt.vsIsActiveAndOptOut && (Jt.vsConsent = new Map(Jt.initialVendorsServiceConsent)), Kt.IsIabEnabled && (Jt.oneTrustIABConsent = JSON.parse(JSON.stringify(Jt.initialOneTrustIABConsent)), Jt.vendors = JSON.parse(JSON.stringify(Jt.initialVendors)), Jt.vendors.vendorTemplate = Jt.initialVendors.vendorTemplate), Kt.UseGoogleVendors && (Jt.addtlVendors = JSON.parse(JSON.stringify(Jt.initialAddtlVendors)), Jt.addtlVendorsList = JSON.parse(JSON.stringify(Jt.initialAddtlVendorsList))), this.updateConsentData(!1), setTimeout(function () {
            e.resetConsentUI()
        }, 400)
    }, Dr.prototype.resetConsentUI = function () {
        En.getAllGroupElements().forEach(function (e) {
            var t = e.getAttribute("data-optanongroupid"), o = yo.getGroupById(t), n = Gr.isGroupActive(o, t);
            zt.pcName === gt && Kt.PCTemplateUpgrade && (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")));
            var r = e.querySelector(".ot-label-status");
            if (Kt.PCShowConsentLabels && r && (r.innerHTML = n ? Kt.PCActiveText : Kt.PCInactiveText), o.Type === Tt || o.Type === Vt) {
                var i = io.isBundleOrStackActive(o, Jt.initialGroupsConsent),
                    s = e.querySelector('input[class*="category-switch-handler"]');
                Rt.setCheckedAttribute(null, s, i);
                for (var a = e.querySelectorAll("li" + lo.P_Subgrp_li), l = 0; l < a.length; l++) {
                    var c = yo.getGroupById(a[l].getAttribute("data-optanongroupid")), d = c.OptanonGroupId,
                        u = Gr.isGroupActive(c, d), p = a[l].querySelector('input[class*="cookie-subgroup-handler"]'),
                        h = a[l].querySelector(".ot-label-status");
                    Kt.PCShowConsentLabels && h && (r.innerHTML = u ? Kt.PCActiveText : Kt.PCInactiveText), Rt.setCheckedAttribute(null, p, u), Gr.resetLegIntButton(c, a[l])
                }
            } else s = e.querySelector('input[class*="category-switch-handler"]'), Rt.setCheckedAttribute(null, s, n), Gr.resetLegIntButton(o, e)
        }), Kt.IsIabEnabled && fr.toggleVendorConsent();
        var e = Qt("#onetrust-pc-sdk .ot-gnven-chkbox-handler").el;
        if (Jt.showGeneralVendors && e && e.length) {
            for (var t = 0, o = e; t < o.length; t++) {
                var n = (l = o[t]).getAttribute("gn-vid"), r = Boolean(Jt.genVendorsConsent[n]);
                Rt.setCheckedAttribute("", l, r), wo.updateGenVendorStatus(n, r)
            }
            Gn.genVenSelectAllTglEvent()
        }
        var i = Qt("#onetrust-pc-sdk .ot-addtlven-chkbox-handler").el;
        if (Kt.UseGoogleVendors && i && i.length) for (var s = 0, a = i; s < a.length; s++) {
            var l;
            n = (l = a[s]).getAttribute("addtl-vid"), Jt.addtlVendorsList[n] && (r = Boolean(Jt.addtlVendors.vendorSelected[n]), Rt.setCheckedAttribute("", l, r))
        }
        Jt.vsIsActiveAndOptOut && Fn.resetVendorUIState(Jt.vsConsent)
    }, Dr.prototype.isGroupActive = function (e, t) {
        var o;
        if (e.IabGrpId) {
            var n = void 0;
            n = e.Type === _t ? Jt.initialVendors.selectedSpecialFeatures : e.IsLegIntToggle ? Jt.initialVendors.selectedLegInt : Jt.initialVendors.selectedPurpose, o = -1 !== Yt.inArray(e.IabGrpId + ":true", n)
        } else o = -1 !== Yt.inArray(t + ":1", Jt.initialGroupsConsent);
        return o
    }, Dr.prototype.resetLegIntButton = function (e, t) {
        if (zt.legIntSettings.PAllowLI && e.Type === It && e.HasLegIntOptOut && zt.legIntSettings.PShowLegIntBtn) {
            var o = !0;
            -1 < Jt.vendors.selectedLegInt.indexOf(e.IabGrpId + ":false") && (o = !1), En.updateLegIntBtnElement(t, o)
        }
    }, Dr.prototype.handleTogglesOnSingularConsentUpdate = function (e, t) {
        if (this.closeOptanonAlertBox(), e === vt) for (var o = function (e, t) {
            for (var o = yo.getGroupById(e), n = a.groupsClass.getAllGroupElements(), r = 0; r < n.length; r++) {
                var i = yo.getGroupById(n[r].getAttribute("data-optanongroupid"));
                if (i.OptanonGroupId === o.OptanonGroupId && !i.Parent) {
                    wr.toggleV2Category(null, i, t, i.CustomGroupId);
                    break
                }
                var s = i.SubGroups.find(function (e) {
                    return e.OptanonGroupId === o.OptanonGroupId
                });
                s && wr.toggleSubCategory(null, s.CustomGroupId, t, s.CustomGroupId)
            }
        }, a = this, n = 0, r = t; n < r.length; n++) {
            var i = r[n];
            o(d = i.id, u = i.isEnabled)
        } else if (e === bt) for (var s = 0, l = t; s < l.length; s++) {
            var c = l[s], d = c.id, u = c.isEnabled, p = yo.getGrpByVendorId(d);
            p && Fn.toggleVendorService(p.CustomGroupId, d, u)
        }
        this.close(!1, S.API)
    }, Dr);

    function Dr() {
        var o = this;
        this.iab = Gn, this.groupsClass = En, this.closeOptanonAlertBox = function () {
            if (io.hideBanner(), Kt.NtfyConfig.ShowNtfy && gr.hideSyncNtfy(), zt.isOptInMode || !zt.isOptInMode && !go.isAlertBoxClosedAndValid()) Mo.setAlertBoxClosed(!0), Kt.PCTemplateUpgrade && Kt.PCenterUserIdTitleText && Kt.IsConsentLoggingEnabled && o.updateDataSubjectTimestamp(); else if (go.isAlertBoxClosedAndValid()) {
                var e = Qt(".onetrust-pc-dark-filter").el[0];
                e && "none" !== getComputedStyle(e).getPropertyValue("display") && Qt(".onetrust-pc-dark-filter").fadeOut(400)
            }
            zo.csBtnGroup && o.showFltgCkStgButton()
        }, this.bodyClickEvent = function (e) {
            var t = e.target;
            t.closest("#onetrust-banner-sdk") || t.closest("#onetrust-pc-sdk") || t.closest(".onetrust-pc-dark-filter") || t.closest(".ot-sdk-show-settings") || t.closest(".optanon-show-settings") || t.closest(".optanon-toggle-display") || Gr.onClickCloseBanner(e)
        }, this.bannerCloseButtonHandler = function (e) {
            if (void 0 === e && (e = !1), Gr.closeOptanonAlertBox(), Nt.moduleInitializer.MobileSDK) window.OneTrust.Close(); else {
                var t = Jt.bannerCloseSource === v.ConfirmChoiceButton ? S.PC : S.Banner;
                Gr.close(e, t)
            }
            return !1
        }, this.allowAllEventHandler = function (e) {
            void 0 === e && (e = !1), Qt(document).off("keydown", wr.shiftBannerFocus);
            var t = e ? "Preferences Allow All" : "Banner Accept Cookies";
            Mo.triggerGoogleAnalyticsEvent(Wo, t), o.allowAllEvent(!1, e), o.hideVendorsList()
        }, this.allowAllEvent = function (e, t) {
            void 0 === e && (e = !1), void 0 === t && (t = !1), o.closeOptanonAlertBox(), Gr.allowAll(e, t)
        }, this.rejectAllEventHandler = function (e) {
            void 0 === e && (e = !1), Qt(document).off("keydown", wr.shiftBannerFocus);
            var t = e ? "Preferences Reject All" : "Banner Reject All";
            Mo.triggerGoogleAnalyticsEvent(Wo, t), Nt.moduleInitializer.MobileSDK ? window.OneTrust.RejectAll() : (o.rejectAllEvent(!1, e), o.hideVendorsList())
        }, this.rejectAllEvent = function (e, t) {
            void 0 === e && (e = !1), void 0 === t && (t = !1), o.closeOptanonAlertBox(), go.isIABCrossConsentEnabled() ? zt.thirdPartyiFrameLoaded ? o.rejectAll(e, t) : zt.thirdPartyiFramePromise.then(function () {
                o.rejectAll(e, t)
            }) : o.rejectAll(e, t)
        }
    }

    var Hr, Fr = (Rr.prototype.insertCookiePolicyHtml = function () {
        if (Qt(this.ONETRUST_COOKIE_POLICY).length) {
            var e, t = document.createDocumentFragment();
            if (zo.cookieListGroup) {
                var o = Kt.CookiesV2NewCookiePolicy ? ".ot-sdk-cookie-policy" : "#ot-sdk-cookie-policy-v2",
                    n = document.createElement("div");
                Qt(n).html(zo.cookieListGroup.html), n.removeChild(n.querySelector(o)), e = n.querySelector(".ot-sdk-cookie-policy"), Kt.useRTL && Qt(e).attr("dir", "rtl")
            }
            e.querySelector("#cookie-policy-title").innerHTML = Kt.CookieListTitle || "", e.querySelector("#cookie-policy-description").innerHTML = Kt.CookieListDescription || "";
            var r = e.querySelector("section"), i = e.querySelector("section tbody tr"), s = null, a = null;
            Kt.CookiesV2NewCookiePolicy || (s = e.querySelector("section.subgroup"), a = e.querySelector("section.subgroup tbody tr"), Qt(e).el.removeChild(e.querySelector("section.subgroup"))), Qt(e).el.removeChild(e.querySelector("section")), !Qt(this.COOKIE_POLICY_SELECTOR).length && Qt(this.OPTANON_POLICY_SELECTOR).length ? Qt(this.OPTANON_POLICY_SELECTOR).append('<div id="ot-sdk-cookie-policy"></div>') : (Qt(this.COOKIE_POLICY_SELECTOR).html(""), Qt(this.OPTANON_POLICY_SELECTOR).html(""));
            for (var l = 0, c = Kt.Groups; l < c.length; l++) {
                var d = c[l],
                    u = {json: Kt, group: d, sectionTemplate: r, tableRowTemplate: i, cookieList: e, fragment: t};
                if (Kt.CookiesV2NewCookiePolicy) this.insertGroupHTMLV2(u); else if (this.insertGroupHTML(u), d.ShowSubgroup) for (var p = 0, h = d.SubGroups; p < h.length; p++) {
                    var g = h[p],
                        C = {json: Kt, group: g, sectionTemplate: s, tableRowTemplate: a, cookieList: e, fragment: t};
                    this.insertGroupHTML(C)
                }
            }
        }
    }, Rr.prototype.insertGroupHTMLV2 = function (e) {
        function t(e) {
            return c.querySelector(e)
        }

        var o = this, n = e.json, r = e.group, i = e.sectionTemplate, s = e.tableRowTemplate, a = e.cookieList,
            l = e.fragment, c = i.cloneNode(!0), d = r.SubGroups;
        Qt(t("tbody")).html("");
        var u = r.Hosts.slice(), p = r.FirstPartyCookies.slice(), h = u.length || p.length ? r.GroupName : "";
        if (r.ShowSubgroup && d.length) {
            var g = c.querySelector("section.ot-sdk-subgroup ul li");
            d.forEach(function (e) {
                var t = g.cloneNode(!0);
                u = u.concat(e.Hosts), p = p.concat(e.FirstPartyCookies), (e.Hosts.length || e.FirstPartyCookies.length) && (h += "," + e.GroupName), Qt(t.querySelector(".ot-sdk-cookie-policy-group")).html(e.GroupName), Qt(t.querySelector(".ot-sdk-cookie-policy-group-desc")).html(o.groupsClass.safeFormattedGroupDescription(e)), Qt(g.parentElement).append(t)
            }), c.querySelector("section.ot-sdk-subgroup ul").removeChild(g)
        } else c.removeChild(c.querySelector("section.ot-sdk-subgroup"));
        Kt.TTLGroupByTech && (this.setCookieListHeaderOrder(c), this.setCookieListBodyOrder(s)), n.IsLifespanEnabled ? Qt(t("th.ot-life-span")).el.innerHTML = n.LifespanText : Qt(t("thead tr")).el.removeChild(Qt(t("th.ot-life-span")).el), Qt(t("th.ot-cookies")).el.innerHTML = n.CookiesText, Qt(t("th.ot-host")).el.innerHTML = n.CategoriesText, Qt(t("th.ot-cookies-type")).el.innerHTML = n.CookiesUsedText, Qt(t("th.ot-host-description")).el.innerHTML = n.CookiesDescText;
        var C = this.transformFirstPartyCookies(p, u, r), y = !1;
        (y = Kt.TTLGroupByTech ? Kt.TTLShowTechDesc : C.some(function (e) {
            return e.Description
        })) || Qt(t("thead tr")).el.removeChild(Qt(t("th.ot-host-description")).el), Qt(t(".ot-sdk-cookie-policy-group")).html(r.GroupName), Qt(t(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(r)), Kt.TTLGroupByTech ? this.insertCookieLineByLine({
            json: n,
            hosts: C,
            tableRowTemplate: s,
            showHostDescription: y,
            st: t
        }) : this.insertHostHtmlV2({
            json: n,
            hosts: C,
            tableRowTemplate: s,
            showHostDescription: y,
            st: t
        }), 0 === C.length ? c.removeChild(c.querySelector("table")) : Qt(t("caption")).el.innerHTML = h, Qt(a).append(c), Qt(l).append(a), Qt(this.COOKIE_POLICY_SELECTOR).append(l)
    }, Rr.prototype.insertHostHtmlV2 = function (e) {
        for (var c, d = e.json, t = e.hosts, u = e.tableRowTemplate, p = e.showHostDescription, h = e.st, o = function (e) {
            function t(e) {
                return o.querySelector(e)
            }

            var o = u.cloneNode(!0);
            g.clearCookieRowElement(t);
            for (var n = [], r = [], i = 0, s = e.Cookies; i < s.length; i++) {
                var a = s[i];
                (c = a).IsSession ? n.push(d.LifespanTypeText) : n.push(io.getDuration(c));
                var l = c.Name;
                e.Type && (l = '\n                    <a href="https://cookiepedia.co.uk/cookies/' + c.Name + '" \n                        rel="noopener" target="_blank" aria-label="' + c.Name + " " + Kt.NewWinTxt + '">\n                        ' + c.Name + "\n                    </a>"), r.push(l)
            }
            g.setDataLabelAttribute(t, d), g.createCookieRowHtmlElement({
                host: e,
                subGroupCookie: c,
                trt: t,
                json: d,
                lifespanText: n.join(", "),
                hostType: r.join(", ")
            }), g.removeLifeSpanOrHostDescription(d, p, o, t), Qt(h("tbody")).append(o)
        }, g = this, n = 0, r = t; n < r.length; n++) o(r[n])
    }, Rr.prototype.insertGroupHTML = function (e) {
        function t(e) {
            return c.querySelector(e)
        }

        var o, n = e.json, r = e.group, i = e.sectionTemplate, s = e.tableRowTemplate, a = e.cookieList, l = e.fragment,
            c = i.cloneNode(!0);
        Qt(t("caption")).el.innerHTML = r.GroupName, Qt(t("tbody")).html(""), Qt(t("thead tr")), n.IsLifespanEnabled ? Qt(t("th.life-span")).el.innerHTML = n.LifespanText : Qt(t("thead tr")).el.removeChild(Qt(t("th.life-span")).el), Qt(t("th.cookies")).el.innerHTML = n.CookiesText, Qt(t("th.host")).el.innerHTML = n.CategoriesText;
        var d = !1;
        if (r.Hosts.some(function (e) {
            return e.description
        }) ? d = !0 : Qt(t("thead tr")).el.removeChild(Qt(t("th.host-description")).el), Qt(t(".ot-sdk-cookie-policy-group")).html(r.GroupName), Qt(t(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(r)), 0 < r.FirstPartyCookies.length) {
            Qt(t(".cookies-used-header")).html(n.CookiesUsedText), Qt(t(".cookies-list")).html("");
            for (var u = 0; u < r.FirstPartyCookies.length; u++) o = r.FirstPartyCookies[u], Qt(t(".cookies-list")).append("<li> " + io.getCookieLabel(o, n.AddLinksToCookiepedia) + " <li>")
        } else c.removeChild(t(".cookies-used-header")), c.removeChild(t(".cookies-list"));
        this.insertHostHtmlV1({
            json: n,
            hosts: r.Hosts,
            tableRowTemplate: s,
            showHostDescription: d,
            st: t
        }), Qt(a).append(c), Qt(l).append(a), Qt(this.COOKIE_POLICY_SELECTOR).append(l)
    }, Rr.prototype.insertHostHtmlV1 = function (e) {
        for (var d = e.json, t = e.hosts, u = e.tableRowTemplate, p = e.showHostDescription, h = e.st, o = function (e) {
            function t(e) {
                return o.querySelector(e)
            }

            var o = u.cloneNode(!0);
            Qt(t(".cookies-td ul")).html(""), Qt(t(".life-span-td ul")).html(""), Qt(t(".host-td")).html(""), Qt(t(".host-description-td")).html('<span class="ot-mobile-border"></span><p>' + e.Description + "</p> ");
            for (var n = 0, r = 0, i = e.Cookies; r < i.length; r++) {
                var s = i[r], a = "";
                a = s.IsSession ? d.LifespanTypeText : 0 === s.Length ? "<1 " + d.LifespanDurationText || d.PCenterVendorListLifespanDays : s.Length + " " + d.LifespanDurationText || d.PCenterVendorListLifespanDays;
                var l = d.IsLifespanEnabled ? "&nbsp;(" + a + ")" : "";
                if (Qt(t(".cookies-td ul")).append("<li> " + s.Name + " " + l + " </li>"), d.IsLifespanEnabled) {
                    var c = s.Length ? s.Length + " days" : "N/A";
                    Qt(t(".life-span-td ul")).append("<li>" + c + "</li>")
                }
                0 === n && (Qt(t(".host-td")).append('<span class="ot-mobile-border"></span>'), Qt(t(".host-td")).append('<a href="https://cookiepedia.co.uk/host/' + s.Host + '" rel="noopener" target="_blank"\n                        aria-label="' + (e.DisplayName || e.HostName) + " " + Kt.NewWinTxt + '">' + (e.DisplayName || e.HostName) + "</a>")), n++
            }
            p || o.removeChild(t("td.host-description-td")), Qt(h("tbody")).append(o)
        }, n = 0, r = t; n < r.length; n++) o(r[n]);
        0 === t.length && Qt(h("table")).el.removeChild(Qt(h("thead")).el)
    }, Rr.prototype.transformFirstPartyCookies = function (e, t, o) {
        var n = this, r = t.slice();
        e.forEach(function (e) {
            n.populateHostGroup(e, r, Kt.firstPartyTxt)
        });
        var i = o.GeneralVendorsIds;
        this.populateGenVendor(i, o, r);
        var s = o.SubGroups || [];
        return s.length && s.forEach(function (e) {
            var t = e.GeneralVendorsIds;
            n.populateGenVendor(t, e, r)
        }), r
    }, Rr.prototype.populateGenVendor = function (e, o, n) {
        var r = this;
        e.length && e.forEach(function (t) {
            var e = Kt.GeneralVendors.find(function (e) {
                return e.VendorCustomId === t
            });
            e.Cookies.length && e.Cookies.forEach(function (e) {
                if (e.category === o.GroupName) {
                    var t = e.isThirdParty ? "" : Kt.firstPartyTxt;
                    r.populateHostGroup(e, n, t)
                }
            })
        })
    }, Rr.prototype.populateHostGroup = function (t, e, o) {
        e.some(function (e) {
            if (e.HostName === t.Host && e.Type === o) return e.Cookies.push(t), !0
        }) || e.unshift({HostName: t.Host, DisplayName: t.Host, HostId: "", Description: "", Type: o, Cookies: [t]})
    }, Rr.prototype.insertCookieLineByLine = function (e) {
        for (var t = e.json, o = e.hosts, n = e.tableRowTemplate, r = e.showHostDescription, i = e.st, s = 0, a = o; s < a.length; s++) for (var l = a[s], c = 0, d = l.Cookies; c < d.length; c++) {
            var u = d[c], p = u.IsSession ? t.LifespanTypeText : io.getDuration(u), h = u.Name;
            l.Type && (h = '<a href="https://cookiepedia.co.uk/cookies/' + h + '" \n                        rel="noopener" target="_blank" aria-label="' + h + " " + Kt.NewWinTxt + '">' + h + "\n                    </a>");
            var g = n.cloneNode(!0), C = this.queryToHtmlElement(g);
            this.clearCookieRowElement(C), this.createCookieRowHtmlElement({
                host: l,
                subGroupCookie: u,
                trt: C,
                json: t,
                lifespanText: p,
                hostType: h
            }), this.removeLifeSpanOrHostDescription(t, r, g, C), Qt(i("tbody")).append(g)
        }
    }, Rr.prototype.removeLifeSpanOrHostDescription = function (e, t, o, n) {
        e.IsLifespanEnabled || o.removeChild(n("td.ot-life-span-td")), t || o.removeChild(n("td.ot-host-description-td"))
    }, Rr.prototype.createCookieRowHtmlElement = function (e) {
        var t = e.host, o = e.subGroupCookie, n = e.trt, r = e.json, i = e.lifespanText, s = e.hostType,
            a = ".ot-host-td";
        this.setDataLabelAttribute(n, r), Qt(n(".ot-host-description-td")).html('<span class="ot-mobile-border"></span><p>' + o.description + "</p> "), Qt(n(a)).append('<span class="ot-mobile-border"></span>');
        var l = t.DisplayName || t.HostName;
        Qt(n(a)).append(t.Type ? l : '<a href="https://cookiepedia.co.uk/host/' + o.Host + '" rel="noopener" target="_blank" \n                        aria-label="' + l + " " + Kt.NewWinTxt + '">\n                        ' + l + "\n                        </a>"), n(".ot-cookies-td .ot-cookies-td-content").insertAdjacentHTML("beforeend", s), n(".ot-life-span-td .ot-life-span-td-content").innerText = i, n(".ot-cookies-type .ot-cookies-type-td-content").innerText = t.Type ? Kt.firstPartyTxt : Kt.thirdPartyTxt
    }, Rr.prototype.setDataLabelAttribute = function (e, t) {
        var o = "data-label";
        e(".ot-host-td").setAttribute(o, t.CategoriesText), e(".ot-cookies-td").setAttribute(o, t.CookiesText), e(".ot-cookies-type").setAttribute(o, t.CookiesUsedText), e(".ot-life-span-td").setAttribute(o, t.LifespanText)
    }, Rr.prototype.clearCookieRowElement = function (e) {
        Qt(e(".ot-cookies-td span")).text(""), Qt(e(".ot-life-span-td span")).text(""), Qt(e(".ot-cookies-type span")).text(""), Qt(e(".ot-cookies-td .ot-cookies-td-content")).html(""), Qt(e(".ot-host-td")).html("")
    }, Rr.prototype.setCookieListHeaderOrder = function (e) {
        var t = e.querySelector("section table thead tr"), o = t.querySelector("th.ot-host"),
            n = t.querySelector("th.ot-cookies"), r = t.querySelector("th.ot-life-span"),
            i = t.querySelector("th.ot-cookies-type"), s = t.querySelector("th.ot-host-description");
        t.innerHTML = "", t.appendChild(n.cloneNode(!0)), t.appendChild(o.cloneNode(!0)), t.appendChild(r.cloneNode(!0)), t.appendChild(i.cloneNode(!0)), t.appendChild(s.cloneNode(!0))
    }, Rr.prototype.setCookieListBodyOrder = function (e) {
        var t = e.querySelector("td.ot-host-td"), o = e.querySelector("td.ot-cookies-td"),
            n = e.querySelector("td.ot-life-span-td"), r = e.querySelector("td.ot-cookies-type"),
            i = e.querySelector("td.ot-host-description-td");
        e.innerHTML = "", e.appendChild(o.cloneNode(!0)), e.appendChild(t.cloneNode(!0)), e.appendChild(n.cloneNode(!0)), e.appendChild(r.cloneNode(!0)), e.appendChild(i.cloneNode(!0))
    }, Rr.prototype.queryToHtmlElement = function (t) {
        return function (e) {
            return t.querySelector(e)
        }
    }, Rr);

    function Rr() {
        this.groupsClass = En, this.COOKIE_POLICY_SELECTOR = "#ot-sdk-cookie-policy", this.OPTANON_POLICY_SELECTOR = "#optanon-cookie-policy", this.ONETRUST_COOKIE_POLICY = "#ot-sdk-cookie-policy, #optanon-cookie-policy"
    }

    var qr, Mr = (Ur.prototype.initBanner = function () {
        this.canImpliedConsentLandingPage(), Nt.moduleInitializer.CookieSPAEnabled ? Qt(window).on("otloadbanner", this.windowLoadBanner.bind(this)) : Qt(window).one("otloadbanner", this.windowLoadBanner.bind(this))
    }, Ur.prototype.insertCSBtnHtmlAndCss = function (e) {
        document.getElementById("onetrust-style").innerHTML += zo.csBtnGroup.css;
        var t = document.createElement("div");
        Qt(t).html(zo.csBtnGroup.html);
        var o = t.querySelector("#ot-sdk-btn-floating");
        e && o && Qt(o).removeClass("ot-hide"), Qt("#onetrust-consent-sdk").append(o), Kt.cookiePersistentLogo && (Kt.cookiePersistentLogo.includes("ot_guard_logo.svg") ? this.applyPersistentSvgOnDOM() : Qt(".ot-floating-button__front, .ot-floating-button__back").addClass("custom-persistent-icon"))
    }, Ur.prototype.applyPersistentSvgOnDOM = function () {
        return p(this, void 0, void 0, function () {
            var t;
            return g(this, function (e) {
                switch (e.label) {
                    case 0:
                        return [4, oo.getPersistentCookieSvg()];
                    case 1:
                        return t = e.sent(), Qt(this.FLOATING_COOKIE_FRONT_BTN).html(t), wr.otGuardLogoResolve(!0), [2]
                }
            })
        })
    }, Ur.prototype.canImpliedConsentLandingPage = function () {
        this.isImpliedConsent() && !Ho.isLandingPage() && "true" === Ft.readCookieParam(Fe.OPTANON_CONSENT, we) && this.checkForRefreshCloseImplied()
    }, Ur.prototype.isImpliedConsent = function () {
        return Kt.ConsentModel && "implied consent" === Kt.ConsentModel.Name.toLowerCase()
    }, Ur.prototype.checkForRefreshCloseImplied = function () {
        Gr.closeOptanonAlertBox(), Gr.close(!0)
    }, Ur.prototype.hideCustomHtml = function () {
        var e = document.getElementById("onetrust-banner-sdk");
        e && Dt(e, "display: none;")
    }, Ur.prototype.windowLoadBanner = function () {
        return p(this, void 0, void 0, function () {
            var t, o, n, r, i, s;
            return g(this, function (e) {
                switch (e.label) {
                    case 0:
                        return this.core.substitutePlainTextScriptTags(), t = Nt.moduleInitializer, Qt("#onetrust-consent-sdk").length ? n = document.getElementById("onetrust-consent-sdk") : (n = document.createElement("div"), Qt(n).attr("id", "onetrust-consent-sdk"), Qt(document.body).append(n)), Qt(".onetrust-pc-dark-filter").length || (o = document.createElement("div"), Qt(o).attr("class", "onetrust-pc-dark-filter"), Qt(o).attr("class", "ot-hide"), Qt(o).attr("class", "ot-fade-in"), n.firstChild ? n.insertBefore(o, n.firstChild) : Qt(n).append(o)), Kt.IsIabEnabled && this.iab.updateIabVariableReference(), r = go.isAlertBoxClosedAndValid(), i = Kt.ShowAlertNotice && !r && !Kt.NoBanner && !Jt.hideBanner, s = Kt.ShowAlertNotice && !r && Kt.NoBanner, Jt.ntfyRequired ? (this.hideCustomHtml(), gr.init(), gr.changeState()) : i ? wr.initializeAlartHtmlAndHandler() : this.hideCustomHtml(), t.IsSuppressPC || (Mn.insertPcHtml(), wr.initialiseConsentNoticeHandlers(), Kt.IsIabEnabled && this.iab.InitializeVendorList()), this.initializeHbbTvScript(), this.insertCSBtn(!i), s ? [4, wr.toggleInfoDisplay()] : [3, 2];
                    case 1:
                        e.sent(), e.label = 2;
                    case 2:
                        return wr.insertCookieSettingText(), this.initializeFloatingButtonOnBannerLoad(s), qr.insertTrackigTechOrCookiePolicy(), Gr.executeOptanonWrapper(), this.initializeCookieParamsOnBannerLoad(i), [2]
                }
            })
        })
    }, Ur.prototype.initializeFloatingButtonOnBannerLoad = function (e) {
        var t = Qt(this.FLOATING_COOKIE_BTN), o = Qt(this.FLOATING_COOKIE_FRONT_BTN),
            n = Qt(this.FLOATING_COOKIE_BACK_BTN);
        t.length && (t.attr("title", Kt.CookieSettingButtonText), o.el[0].setAttribute("aria-label", Kt.AriaOpenPreferences), n.el[0].setAttribute("aria-label", Kt.AriaClosePreferences), e ? o.el[0].setAttribute("aria-hidden", !0) : n.el[0].setAttribute("aria-hidden", !0))
    }, Ur.prototype.initializeCookieParamsOnBannerLoad = function (e) {
        Ft.readCookieParam(Fe.OPTANON_CONSENT, Lo) || Ao.writeGrpParam(Fe.OPTANON_CONSENT), Ft.readCookieParam(Fe.OPTANON_CONSENT, Io) || Ao.writeHstParam(Fe.OPTANON_CONSENT), Jt.showGeneralVendors && !Ft.readCookieParam(Fe.OPTANON_CONSENT, _o) && Ao.writeGenVenCookieParam(Fe.OPTANON_CONSENT), Jt.vsIsActiveAndOptOut && !Ft.readCookieParam(Fe.OPTANON_CONSENT, Eo) && Ao.writeVSConsentCookieParam(Fe.OPTANON_CONSENT), e && Ln.setBannerFocus()
    }, Ur.prototype.initializeHbbTvScript = function () {
        if (Nt.moduleInitializer.RemoteActionsEnabled) {
            var e = document.getElementById("hbbtv");
            e && e.remove();
            var t = document.createElement("script");
            t.id = "hbbtv", t.src = Jt.storageBaseURL + "/scripttemplates/" + Nt.moduleInitializer.Version + "/hbbtv.js", t.type = "text/javascript", Qt(document.body).append(t)
        }
    }, Ur.prototype.insertCSBtn = function (e) {
        zo.csBtnGroup && (this.insertCSBtnHtmlAndCss(e), wr.initFlgtCkStgBtnEventHandlers())
    }, Ur.prototype.insertTrackingTechnologies = function () {
        if (Qt("#ot-sdk-cookie-policy, #optanon-cookie-policy").length) if (window.OnetrustCookiePolicy && window.OnetrustCookiePolicy.InsertCookiePolicyHtml) window.OnetrustCookiePolicy.InsertCookiePolicyHtml(io, Kt, Qt); else {
            var e = document.createElement("script");
            e.id = "cookie-policy-script", e.onload = function () {
                return window.OnetrustCookiePolicy.InsertCookiePolicyHtml(io, Kt, Qt)
            }, e.type = "text/javascript", e.src = Jt.storageBaseURL + "/scripttemplates/" + Nt.moduleInitializer.Version + "/trackingTechnologies.js", document.head.appendChild(e)
        }
    }, Ur.prototype.insertTrackigTechOrCookiePolicy = function () {
        Nt.fp.CookieV2TrackingTechnologies ? qr.insertTrackingTechnologies() : Hr.insertCookiePolicyHtml()
    }, Ur);

    function Ur() {
        this.iab = Gn, this.core = wn, this.FLOATING_COOKIE_BTN = "#ot-sdk-btn-floating", this.FLOATING_COOKIE_FRONT_BTN = "#ot-sdk-btn-floating .ot-floating-button__front .ot-floating-button__open", this.FLOATING_COOKIE_BACK_BTN = "#ot-sdk-btn-floating .ot-floating-button__back .ot-floating-button__close"
    }

    var jr, zr = (Kr.prototype.initialiseLandingPath = function () {
        var e = go.needReconsent();
        if (Ho.isLandingPage()) Ho.setLandingPathParam(location.href); else {
            if (e && !go.awaitingReconsent()) return Ho.setLandingPathParam(location.href), void Ft.writeCookieParam(Fe.OPTANON_CONSENT, we, !0);
            e || Ft.writeCookieParam(Fe.OPTANON_CONSENT, we, !1), Ho.setLandingPathParam(De), zt.isSoftOptInMode && !Nt.moduleInitializer.MobileSDK && Mo.setAlertBoxClosed(!0), Kt.NextPageCloseBanner && Kt.ShowAlertNotice && Gr.nextPageCloseBanner()
        }
    }, Kr);

    function Kr() {
    }

    var Wr, Jr = (Yr.prototype.IsAlertBoxClosedAndValid = function () {
        return go.isAlertBoxClosedAndValid()
    }, Yr.prototype.LoadBanner = function () {
        Mo.loadBanner()
    }, Yr.prototype.Init = function (e) {
        void 0 === e && (e = !1), Be.insertViewPortTag(), zo.ensureHtmlGroupDataInitialised(), Jn.updateGtmMacros(!1), jr.initialiseLandingPath(), e || Pr.initialiseCssReferences()
    }, Yr.prototype.FetchAndDownloadPC = function () {
        wr.fetchAndSetupPC()
    }, Yr.prototype.ToggleInfoDisplay = function () {
        Mo.triggerGoogleAnalyticsEvent(Wo, tn), wr.toggleInfoDisplay()
    }, Yr.prototype.Close = function (e) {
        wr.close(e)
    }, Yr.prototype.AllowAll = function (e) {
        Gr.allowAllEvent(e)
    }, Yr.prototype.RejectAll = function (e) {
        Gr.rejectAllEvent(e)
    }, Yr.prototype.setDataSubjectIdV2 = function (e, t) {
        void 0 === t && (t = !1), e && e.trim() && (e = e.replace(/ /g, ""), Ft.writeCookieParam(Fe.OPTANON_CONSENT, xe, e, !0), Jt.dsParams.isAnonymous = t)
    }, Yr.prototype.getDataSubjectId = function () {
        return Ft.readCookieParam(Fe.OPTANON_CONSENT, xe, !0)
    }, Yr.prototype.synchroniseCookieWithPayload = function (i) {
        var e = Ft.readCookieParam(Fe.OPTANON_CONSENT, "groups"), t = Rt.strToArr(e), s = [];
        t.forEach(function (e) {
            var t = e.split(":"), o = yo.getGroupById(t[0]), n = Rt.findIndex(i, function (e) {
                return e.Id === o.PurposeId
            }), r = i[n];
            r ? r.TransactionType === Re ? (s.push(t[0] + ":1"), o.Parent ? wr.toggleSubCategory(null, o.CustomGroupId, !0, o.CustomGroupId) : wr.toggleV2Category(null, o, !0, o.CustomGroupId)) : (s.push(t[0] + ":0"), o.Parent ? wr.toggleSubCategory(null, o.CustomGroupId, !1, o.CustomGroupId) : wr.toggleV2Category(null, o, !1, o.CustomGroupId)) : s.push(t[0] + ":" + t[1])
        }), Ao.writeGrpParam(Fe.OPTANON_CONSENT, s)
    }, Yr.prototype.getGeolocationData = function () {
        return Jt.userLocation
    }, Yr.prototype.TriggerGoogleAnalyticsEvent = function (e, t, o, n) {
        Mo.triggerGoogleAnalyticsEvent(e, t, o, n)
    }, Yr.prototype.ReconsentGroups = function () {
        var r = !1, e = Ft.readCookieParam(Fe.OPTANON_CONSENT, "groups"), i = Rt.strToArr(e),
            s = Rt.strToArr(e.replace(/:0|:1/g, "")), a = !1, t = Ft.readCookieParam(Fe.OPTANON_CONSENT, "hosts"),
            l = Rt.strToArr(t), c = Rt.strToArr(t.replace(/:0|:1/g, "")),
            d = ["inactive", "inactive landingpage", "do not track"];
        e && (Kt.Groups.forEach(function (e) {
            b(e.SubGroups, [e]).forEach(function (e) {
                var t = e.CustomGroupId, o = Rt.indexOf(s, t);
                if (-1 !== o) {
                    var n = yo.getGrpStatus(e).toLowerCase();
                    -1 < d.indexOf(n) && (r = !0, i[o] = t + ("inactive landingpage" === n ? ":1" : ":0"))
                }
            })
        }), r && Ao.writeGrpParam(Fe.OPTANON_CONSENT, i)), t && (Kt.Groups.forEach(function (e) {
            b(e.SubGroups, [e]).forEach(function (n) {
                n.Hosts.forEach(function (e) {
                    var t = Rt.indexOf(c, e.HostId);
                    if (-1 !== t) {
                        var o = yo.getGrpStatus(n).toLowerCase();
                        -1 < d.indexOf(o) && (a = !0, l[t] = e.HostId + ("inactive landingpage" === o ? ":1" : ":0"))
                    }
                })
            })
        }), a && Ao.writeHstParam(Fe.OPTANON_CONSENT, l))
    }, Yr.prototype.SetAlertBoxClosed = function (e) {
        Mo.setAlertBoxClosed(e)
    }, Yr.prototype.GetDomainData = function () {
        return zt.pubDomainData
    }, Yr.prototype.setGeoLocation = function (e, t) {
        void 0 === t && (t = ""), Jt.userLocation = {country: e, state: t}
    }, Yr.prototype.changeLang = function (t) {
        if (t !== Jt.lang) {
            var o = Nt.moduleInitializer;
            oo.getLangJson(t).then(function (e) {
                e ? (zt.init(e), zo.fetchAssets(t).then(function () {
                    var e = document.getElementById("onetrust-style");
                    e && (e.textContent = ""), Pr.initialiseCssReferences(), o.IsSuppressPC && !Jt.isPCVisible || (Rt.removeChild(Qt("#onetrust-pc-sdk").el), Jt.vendorDomInit = !1, Jt.genVendorDomInit = !1, Mn.insertPcHtml(), wr.initialiseConsentNoticeHandlers(), Kt.IsIabEnabled && Gn.InitializeVendorList(), Jt.isPCVisible && wr.restorePc());
                    var t = !0;
                    go.isAlertBoxClosedAndValid() || o.IsSuppressBanner && (!o.IsSuppressBanner || Jt.skipAddingHTML) || Kt.NoBanner || (Rt.removeChild(Qt("#onetrust-banner-sdk").el), wr.initializeAlartHtmlAndHandler(), t = !1), Wr.initCookiePolicyAndSettings(), Rt.removeChild(Qt("#ot-sdk-btn-floating").el), qr.insertCSBtn(t), Wr.processedHtml = null
                })) : console.error("Language:" + t + " doesn't exist for the geo rule")
            })
        }
    }, Yr.prototype.initCookiePolicyAndSettings = function (e) {
        var t, o;
        void 0 === e && (e = !1), e && (null !== (t = document.querySelector(".ot-sdk-show-settings")) && void 0 !== t && t.removeEventListener("click", wr.cookiesSettingsBoundListener), null !== (o = document.querySelector(".optanon-toggle-display")) && void 0 !== o && o.removeEventListener("click", wr.cookiesSettingsBoundListener)), Nt.fp.CookieV2TrackingTechnologies ? qr.insertTrackingTechnologies() : Hr.insertCookiePolicyHtml(), wr.insertCookieSettingText(e)
    }, Yr.prototype.showVendorsList = function () {
        Jt.pcLayer !== w.VendorList && (wr.showAllVendors(), Mo.triggerGoogleAnalyticsEvent(Wo, nn))
    }, Yr.prototype.getTestLogData = function () {
        var e = Kt.Groups, t = zt.pubDomainData, o = Nt.moduleInitializer.Version;
        console.info("%cWelcome to OneTrust Log", "padding: 8px; background-color: #43c233; color: white; font-style: italic; border: 1px solid black; font-size: 1.5em;"), console.info("Script is for: %c" + (t.Domain ? t.Domain : Kt.optanonCookieDomain), "padding: 4px 6px; font-style: italic; border: 2px solid #43c233; font-size: 12px;"), console.info("Script Version Published: " + o), console.info("The consent model is: " + t.ConsentModel.Name);
        var n = null !== go.alertBoxCloseDate();
        console.info("Consent has " + (n ? "" : "not ") + "been given " + (n ? "👍" : "🛑"));
        var r = [];
        e.forEach(function (e) {
            var t = "";
            t = e.Status && "always active" === e.Status.toLowerCase() ? "Always Active" : En.isGroupActive(e) ? "Active" : "Inactive", r.push({
                CustomGroupId: e.CustomGroupId,
                GroupName: e.GroupName,
                Status: t
            })
        }), console.groupCollapsed("Current Category Status"), console.table(r), console.groupEnd();
        var i = [];
        t.GeneralVendors.forEach(function (e) {
            i.push({
                CustomGroupId: e.VendorCustomId,
                Name: e.Name,
                Status: Wr.isCategoryActive(e.VendorCustomId) ? "active" : "inactive"
            })
        }), console.groupCollapsed("General Vendor Ids"), console.table(i), console.groupEnd();
        var s = zt.getRegionRule(), a = Jt.userLocation, l = Nt.moduleInitializer.GeoRuleGroupName;
        zt.conditionalLogicEnabled ? console.groupCollapsed("Geolocation, Template & Condition") : console.groupCollapsed("Geolocation and Template"), Jt.userLocation.country && console.info("The Geolocation is " + a.country.toUpperCase()), console.info("The Geolocation rule is " + s.Name), console.info("The GeolocationRuleGroup is " + l), zt.canUseConditionalLogic ? (console.info("The Condition name is " + zt.Condition.Name), console.info("The TemplateName is " + zt.Condition.TemplateName)) : console.info("The TemplateName is " + s.TemplateName), console.groupEnd();
        var c = e.filter(function (e) {
            return En.isGroupActive(e) && "COOKIE" === e.Type
        });
        console.groupCollapsed("The cookies expected to be active if blocking has been implemented are"), c.forEach(function (e) {
            console.groupCollapsed(e.GroupName);
            var t = Wr.getAllFormatCookiesForAGroup(e);
            console.table(t, ["Name", "Host", "description"]), console.groupEnd()
        }), console.groupEnd()
    }, Yr.prototype.isCategoryActive = function (e) {
        return -1 !== window.OptanonActiveGroups.indexOf(e)
    }, Yr.prototype.getAllFormatCookiesForAGroup = function (e) {
        var t, o = [];
        return e.FirstPartyCookies.forEach(function (e) {
            return o.push({Name: e.Name, Host: e.Host, Description: e.description})
        }), (null === (t = e.Hosts) || void 0 === t ? void 0 : t.reduce(function (e, t) {
            return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
        }, [])).forEach(function (e) {
            return o.push({Name: e.Name, Host: e.Host, Description: e.description})
        }), o
    }, Yr.prototype.updateSingularConsent = function (d, u) {
        return p(this, void 0, void 0, function () {
            var t, o, n, r, i, s, a, l, c;
            return g(this, function (e) {
                switch (e.label) {
                    case 0:
                        return [4, wr.fetchAndSetupPC()];
                    case 1:
                        for (e.sent(), zt.apiSource = T.UpdateConsent, t = u.split(","), o = [], n = 0, r = t; n < r.length; n++) i = r[n], s = i.split(":"), a = s[0], l = s[1], c = Boolean(Number(l)), d === vt ? "always active" === yo.getGrpStatus(yo.getGroupById(a)) || (Wr.updateConsentArray(Jt.groupsConsent, a, l), o.push({
                            id: a,
                            isEnabled: c
                        })) : d === kt ? Wr.updateConsentArray(Jt.hostsConsent, a, l) : d === mt ? Jt.genVendorsConsent[a] = c : d === bt && o.push({
                            id: a,
                            isEnabled: c
                        });
                        return Gr.handleTogglesOnSingularConsentUpdate(d, o), [2]
                }
            })
        })
    }, Yr.prototype.vendorServiceEnabled = function () {
        return Jt.showVendorService
    }, Yr.prototype.updateGCM = function (e) {
        e || console.error("No callback passed to the UpdateGCM"), zt.gcmUpdateCallback = e
    }, Yr.prototype.updateConsentArray = function (e, t, o) {
        var n = e.findIndex(function (e) {
            return e.includes(t + ":0") || e.includes(t + ":1")
        });
        -1 < n ? e[n] = t + ":" + o : e.push(t + ":" + o)
    }, Yr);

    function Yr() {
        this.processedHtml = "", this.useGeoLocationService = !0, this.IsAlertBoxClosed = this.IsAlertBoxClosedAndValid, this.InitializeBanner = function () {
            return qr.initBanner()
        }, this.getHTML = function () {
            return document.getElementById("onetrust-banner-sdk") || (Mn.insertPcHtml(), Lr.insertAlertHtml()), Wr.processedHtml || (Wr.processedHtml = document.querySelector("#onetrust-consent-sdk").outerHTML), Wr.processedHtml
        }, this.getCSS = function () {
            return Pr.processedCSS
        }, this.setConsentProfile = function (e) {
            if (e.customPayload) {
                var t = e.customPayload;
                t.Interaction && Ft.writeCookieParam(Fe.OPTANON_CONSENT, Ge, t.Interaction)
            }
            Wr.setDataSubjectIdV2(e.identifier, e.isAnonymous), Wr.synchroniseCookieWithPayload(e.purposes), Gr.executeOptanonWrapper()
        }, this.InsertScript = function (e, t, o, n, r, i) {
            var s, a = null != n && void 0 !== n, l = a && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
            if (En.canInsertForGroup(r, l) && !Rt.contains(Jt.srcExecGrps, r)) {
                Jt.srcExecGrpsTemp.push(r), a && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && Rt.empty(t);
                var c = document.createElement("script");
                switch (null != o && void 0 !== o && (s = !1, c.onload = c.onreadystatechange = function () {
                    s || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (s = !0, o())
                }), c.type = "text/javascript", c.src = e, i && (c.async = i), t) {
                    case"head":
                        document.getElementsByTagName("head")[0].appendChild(c);
                        break;
                    case"body":
                        document.getElementsByTagName("body")[0].appendChild(c);
                        break;
                    default:
                        var d = document.getElementById(t);
                        d && (d.appendChild(c), a && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && Rt.show(t))
                }
                if (a && void 0 !== n.makeElementsVisible) for (var u = 0, p = n.makeElementsVisible; u < p.length; u++) {
                    var h = p[u];
                    Rt.show(h)
                }
                if (a && void 0 !== n.deleteElements) for (var g = 0, C = n.deleteElements; g < C.length; g++) {
                    h = C[g];
                    Rt.remove(h)
                }
            }
        }, this.InsertHtml = function (e, t, o, n, r) {
            var i = null != n && void 0 !== n, s = i && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
            if (En.canInsertForGroup(r, s) && !Rt.contains(Jt.htmlExecGrps, r)) {
                if (Jt.htmlExecGrpsTemp.push(r), i && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && Rt.empty(t), Rt.appendTo(t, e), i && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && Rt.show(t), i && void 0 !== n.makeElementsVisible) for (var a = 0, l = n.makeElementsVisible; a < l.length; a++) {
                    var c = l[a];
                    Rt.show(c)
                }
                if (i && void 0 !== n.deleteElements) for (var d = 0, u = n.deleteElements; d < u.length; d++) {
                    c = u[d];
                    Rt.remove(c)
                }
                null != o && void 0 !== o && o()
            }
        }, this.BlockGoogleAnalytics = function (e, t) {
            window["ga-disable-" + e] = !En.canInsertForGroup(t)
        }
    }

    var Xr, Qr, $r, Zr,
        ei = (o(Qr = oi, $r = Xr = Jr), Qr.prototype = null === $r ? Object.create($r) : (ti.prototype = $r.prototype, new ti), oi.prototype.Close = function (e) {
            Gr.closeBanner(!1), window.location.href = "http://otsdk//consentChanged"
        }, oi.prototype.RejectAll = function (e) {
            Gr.rejectAllEvent(), window.location.href = "http://otsdk//consentChanged"
        }, oi.prototype.AllowAll = function (e) {
            Gr.AllowAllV2(e), window.location.href = "http://otsdk//consentChanged"
        }, oi.prototype.ToggleInfoDisplay = function () {
            wr.toggleInfoDisplay()
        }, oi);

    function ti() {
        this.constructor = Qr
    }

    function oi() {
        var e = null !== Xr && Xr.apply(this, arguments) || this;
        return e.mobileOnlineURL = zt.mobileOnlineURL, e
    }

    var ni, ri = (ii.prototype.syncConsentProfile = function (e, t, o) {
        void 0 === o && (o = !1), e ? (Jt.dsParams.id = e.trim(), Wr.setDataSubjectIdV2(e)) : e = Jt.dsParams.id, o && (Jt.dsParams.isAnonymous = o), t = t || Jt.dsParams.token, e && t && oo.getConsentProfile(e, t).then(function (e) {
            return ni.consentProfileCallback(e)
        })
    }, ii.prototype.getConsentValue = function (e) {
        var t = null;
        switch (e) {
            case k[k.ACTIVE]:
            case k[k.ALWAYS_ACTIVE]:
                t = W.Active;
                break;
            case k[k.EXPIRED]:
            case k[k.OPT_OUT]:
            case k[k.PENDING]:
            case k[k.WITHDRAWN]:
                t = W.InActive
        }
        return t
    }, ii.prototype.isCookieGroup = function (e) {
        return !/IABV2|ISPV2|IFEV2|ISFV2/.test(e)
    }, ii.prototype.syncPreferences = function (e, t) {
        void 0 === t && (t = !1);
        var o = Ft.getCookie(Fe.ALERT_BOX_CLOSED), n = o, r = !1, i = !0, s = !1,
            a = Rt.strToArr(Ft.readCookieParam(Fe.OPTANON_CONSENT, "groups"));
        if (e && e.preferences.length) for (var l = 0, c = e.preferences; l < c.length; l++) {
            var d = c[l], u = d.status === k[k.NO_CONSENT], p = zt.domainGrps[d.id];
            if (p) if (-1 < Jt.grpsSynced.indexOf(p) && (Jt.syncedValidGrp = !0), u && a.length) {
                for (var h = -1, g = 0; g < a.length; g++) if (a[g].split(":")[0] === p) {
                    h = g;
                    break
                }
                -1 < h && (a.splice(h, 1), Jt.grpsSynced.push(p))
            } else if (!u && (!o || new Date(d.lastInteractionDate) > new Date(n))) {
                var C = this.getConsentValue(d.status);
                if (s = !0, o = d.lastInteractionDate, !t && this.isCookieGroup(p)) {
                    var y = p + ":" + C, f = -1;
                    for (g = 0; g < a.length; g++) {
                        var v = a[g].split(":");
                        if (v[0] === p) {
                            v[1] !== C && (a[g] = y, r = !0), f = g;
                            break
                        }
                    }
                    -1 === f && (a.push(y), r = !0)
                }
            }
        } else i = !1;
        return {alertBoxCookieVal: o, groupsConsent: a, profileFound: i, syncRequired: r, syncOnlyDate: s = s && !r}
    }, ii.prototype.hideBannerAndPc = function () {
        var e = io.isBannerVisible();
        e && io.hideBanner(), (e || Jt.isPCVisible) && (Zn.removeAddedOTCssStyles(), ur.hideConsentNoticeV2())
    }, ii.prototype.setOptanonConsentCookie = function (e, t) {
        if (e.syncRequired) {
            Ft.writeCookieParam(Fe.OPTANON_CONSENT, "groups", e.groupsConsent.toString());
            var o = Ft.getCookie(Fe.OPTANON_CONSENT);
            Ft.setCookie(Fe.OPTANON_CONSENT, o, t, !1, new Date(e.alertBoxCookieVal))
        }
    }, ii.prototype.setIabCookie = function (e, t, o) {
        o.syncGroups && o.syncGroups[Jt.syncGrpId] && o.syncGroups[Jt.syncGrpId].tcStringV2 ? Ft.getCookie(Fe.EU_PUB_CONSENT) !== o.syncGroups[Jt.syncGrpId].tcStringV2 && (e.syncRequired = !0, Ft.setCookie(Fe.EU_PUB_CONSENT, o.syncGroups[Jt.syncGrpId].tcStringV2, t, !1, new Date(e.alertBoxCookieVal))) : e.profileFound = !1
    }, ii.prototype.setAddtlVendorsCookie = function (e, t) {
        Kt.UseGoogleVendors && (Ft.getCookie(Fe.ADDITIONAL_CONSENT_STRING) || Ft.setCookie(Fe.ADDITIONAL_CONSENT_STRING, Jt.addtlConsentVersion, t, !1, new Date(e.alertBoxCookieVal)))
    }, ii.prototype.createTrans = function () {
        var e = Ft.readCookieParam(Fe.OPTANON_CONSENT, "iType");
        ko.createConsentTxn(!1, z[e], !1, !0)
    }, ii.prototype.updateGrpsDom = function () {
        for (var e = function (e) {
            var t = e.getAttribute("data-optanongroupid"), o = yo.getGroupById(t), n = !0,
                r = Rt.findIndex(Jt.groupsConsent, function (e) {
                    return e.split(":")[0] === t
                });
            -1 < r && Jt.groupsConsent[r].split(":")[1] === W.InActive && (n = !1), En.toggleGrpElements(e, o, n), En.toogleSubGroupElement(e, n, !1, !0), En.toogleSubGroupElement(e, n, !0, !0)
        }, t = 0, o = En.getAllGroupElements(); t < o.length; t++) e(o[t])
    }, ii.prototype.updateVendorsDom = function () {
        Kt.IsIabEnabled && (Gn.updateIabVariableReference(), fr.toggleVendorConsent(), zt.legIntSettings.PAllowLI && (zt.legIntSettings.PShowLegIntBtn ? fr.updateVendorLegBtns() : fr.toggleVendorLi()))
    }, ii.prototype.consentProfileCallback = function (r) {
        return p(this, void 0, void 0, function () {
            var t, o, n;
            return g(this, function (e) {
                switch (e.label) {
                    case 0:
                        return t = this.syncPreferences(r), o = Kt.ReconsentFrequencyDays, n = go.isIABCrossConsentEnabled(), this.setOptanonConsentCookie(t, o), Kt.IsIabEnabled && !n && this.setIabCookie(t, o, r), t.syncOnlyDate && (go.syncAlertBoxCookie(t.alertBoxCookieVal), go.syncCookieExpiry()), t.syncRequired && t.profileFound ? (Jt.syncRequired = t.syncRequired, go.syncAlertBoxCookie(t.alertBoxCookieVal), this.setAddtlVendorsCookie(t, o), this.hideBannerAndPc(), zo.initGrpsAndHosts(), !n && Kt.NtfyConfig.ShowNtfy && go.isAlertBoxClosedAndValid() ? [4, gr.getContent()] : [3, 2]) : [3, 3];
                    case 1:
                        e.sent(), gr.init(), gr.changeState(), e.label = 2;
                    case 2:
                        return Kt.IsIabEnabled && (go.setIABCookieData(), So.populateVendorAndPurposeFromCookieData()), this.updateGrpsDom(), this.updateVendorsDom(), Ho.setLandingPathParam(De), wn.substitutePlainTextScriptTags(), Jn.updateGtmMacros(!0), Gr.executeOptanonWrapper(), [3, 4];
                    case 3:
                        !t.profileFound && t.alertBoxCookieVal && this.createTrans(), e.label = 4;
                    case 4:
                        return [2]
                }
            })
        })
    }, ii);

    function ii() {
    }

    var si, ai = (li.prototype.removeCookies = function () {
        Ft.removePreview(), Ft.removeOptanon(), Ft.removeAlertBox(), Ft.removeIab2(), Ft.removeAddtlStr(), Ft.removeVariant(), Jt.isPreview && si.setPreviewCookie(), Jt.urlParams.get("otreset") && Jt.urlParams.set("otreset", "false");
        var e = window.location.pathname + "?" + Jt.urlParams.toString() + window.location.hash;
        si.replaceHistory(e)
    }, li.prototype.setPreviewCookie = function () {
        var e = new Date;
        e.setTime(e.getTime() + 864e5);
        var t = Jt.geoFromUrl ? "&geo=" + Jt.geoFromUrl : "", o = "expiry=" + e.toISOString() + t;
        Ft.setCookie(Fe.OT_PREVIEW, o, 1, !1)
    }, li.prototype.bindStopPreviewEvent = function () {
        (window.attachEvent || window.addEventListener)("message", function (e) {
            return si.onMessage(e)
        })
    }, li.prototype.replaceHistory = function (e) {
        history.pushState({}, "", e), location.reload()
    }, li.prototype.onMessage = function (e) {
        "string" == typeof e.data && e.data === si.CLEAR_COOKIES && (si.removeCookies(), e.source && e.source.postMessage && e.source.postMessage(si.CLEARED_COOKIES, e.origin))
    }, li);

    function li() {
        this.CLEAR_COOKIES = "CLEAR_OT_COOKIES", this.CLEARED_COOKIES = "CLEARED_OT_COOKIES"
    }

    function ci(e) {
        if (e) {
            var t = window.atob(e);
            return Function('"use strict"; return ' + t)()
        }
    }

    Be.initPolyfill(), Ft = new qt, io = new so, zt = new Ut, $t = new eo, si = new ai, function () {
        var e, t = window.otStubData;
        if (t) {
            Nt.moduleInitializer = t.domainData, Nt.fp = Nt.moduleInitializer.TenantFeatures, Jt.isAMP = t.isAmp, Jt.dataDomainId = t.domainId, Jt.isPreview = t.isPreview, Jt.urlParams = t.urlParams, Jt.isV2Stub = t.isV2Stub || !1, zt.gtmUpdatedinStub = t.gtmUpdated, t.isReset ? si.removeCookies() : t.isPreview && si.setPreviewCookie(), zt.setBannerScriptElement(t.stubElement), zt.setRegionRule(t.regionRule), Nt.fp.CookieV2TargetedTemplates && (zt.conditionalLogicEnabled = !(null === (e = zt.getRegionRule().Conditions) || void 0 === e || !e.length), zt.conditionalLogicEnabled && (function () {
                for (var e = zt.getRegionRule(), t = 0; t < e.Conditions.length; t++) try {
                    if (ci(e.Conditions[t].Expression)) return zt.Condition = e.Conditions[t]
                } catch (e) {
                    console.warn(e);
                    continue
                }
                zt.allConditionsFailed = !0
            }(), zt.canUseConditionalLogic = !zt.allConditionsFailed)), Jt.userLocation = t.userLocation, Jt.crossOrigin = t.crossOrigin, zt.bannerDataParentURL = t.bannerBaseDataURL, zt.mobileOnlineURL = b(zt.mobileOnlineURL, t.mobileOnlineURL);
            var o = zt.getRegionRule();
            zt.multiVariantTestingEnabled = Nt.moduleInitializer.MultiVariantTestingEnabled && 0 < o.Variants.length && io.isDateCurrent(o.TestEndTime), zt.otDataLayer = t.otDataLayer, Jt.grpsSynced = t.grpsSynced || [], Jt.isIabSynced = t.isIabSynced, Jt.isGacSynced = t.isGacSynced, Jt.syncRequired = t.isIabSynced || t.isGacSynced || t.grpsSynced && 0 < t.grpsSynced.length, Jt.consentPreferences = t.preferences, Jt.syncGrpId = t.syncGrpId, Jt.consentApi = t.consentApi, Jt.tenantId = t.tenantId, Jt.geoFromUrl = t.geoFromUrl, Jt.nonce = t.nonce, Jt.setAttributePolyfillIsActive = t.setAttributePolyfillIsActive, Jt.storageBaseURL = t.storageBaseURL, zt.previewMode = t.previewMode, $t.populateLangSwitcherPlhdr(), window.otStubData = {userLocation: Jt.userLocation}, window.OneTrustStub = null
        }
    }(), function () {
        p(this, void 0, void 0, function () {
            var t, o, n, r, i, s;
            return g(this, function (e) {
                switch (e.label) {
                    case 0:
                        return yo = new fo, En = new Vn, Pn = new Tn, Gn = new Nn, wn = new xn, Gr = new Nr, wr = new xr, Mn = new Kn, Lr = new Ir, qr = new Mr, Nt.fp.CookieV2TrackingTechnologies || (Hr = new Fr), Pr = new Tr, wo = new xo, zo = new bn, Jn = new Yn, jr = new zr, Mo = new Uo, ho = new Co, ni = new ri, fr = new vr, oo = new no, Ln = new In, ur = new pr, Fn = new Rn, Er = new Vr, Nt.moduleInitializer.MobileSDK ? Zr = new ei : Wr = new Jr, So = new Po, zt.setGCMcallback(), t = zt.getRegionRule(), o = zt.canUseConditionalLogic ? zt.Condition.UseGoogleVendors : t.UseGoogleVendors, "IAB2" !== zt.getRegionRuleType() ? [3, 2] : [4, Promise.all([oo.getLangJson(), oo.fetchGvlObj(), o ? oo.fetchGoogleVendors() : Promise.resolve(null), oo.loadCMP()])];
                    case 1:
                        return s = e.sent(), n = s[0], r = s[1], i = s[2], Jt.gvlObj = r, Jt.addtlVendorsList = i ? i.vendors : null, [3, 4];
                    case 2:
                        return [4, oo.getLangJson()];
                    case 3:
                        n = e.sent(), e.label = 4;
                    case 4:
                        return function (r) {
                            p(this, void 0, void 0, function () {
                                var t, o, n;
                                return g(this, function (e) {
                                    switch (e.label) {
                                        case 0:
                                            return window.OneTrust = window.Optanon = Object.assign({}, window.OneTrust, function (e) {
                                                var t, o = Nt.moduleInitializer.MobileSDK;
                                                t = o ? Zr : Wr;
                                                var n = {
                                                    AllowAll: t.AllowAll,
                                                    BlockGoogleAnalytics: t.BlockGoogleAnalytics,
                                                    Close: t.Close,
                                                    getCSS: t.getCSS,
                                                    GetDomainData: t.GetDomainData,
                                                    getGeolocationData: t.getGeolocationData,
                                                    getHTML: t.getHTML,
                                                    Init: t.Init,
                                                    InitializeBanner: t.InitializeBanner,
                                                    initializeCookiePolicyHtml: t.initCookiePolicyAndSettings,
                                                    InsertHtml: t.InsertHtml,
                                                    InsertScript: t.InsertScript,
                                                    IsAlertBoxClosed: t.IsAlertBoxClosed,
                                                    IsAlertBoxClosedAndValid: t.IsAlertBoxClosedAndValid,
                                                    LoadBanner: t.LoadBanner,
                                                    OnConsentChanged: Mo.OnConsentChanged,
                                                    ReconsentGroups: t.ReconsentGroups,
                                                    RejectAll: t.RejectAll,
                                                    SetAlertBoxClosed: t.SetAlertBoxClosed,
                                                    setGeoLocation: t.setGeoLocation,
                                                    ToggleInfoDisplay: t.ToggleInfoDisplay,
                                                    TriggerGoogleAnalyticsEvent: t.TriggerGoogleAnalyticsEvent,
                                                    useGeoLocationService: t.useGeoLocationService,
                                                    FetchAndDownloadPC: t.FetchAndDownloadPC,
                                                    changeLanguage: t.changeLang,
                                                    testLog: t.getTestLogData,
                                                    UpdateConsent: t.updateSingularConsent,
                                                    IsVendorServiceEnabled: t.vendorServiceEnabled,
                                                    UpdateGCM: t.updateGCM
                                                };
                                                e.IsConsentLoggingEnabled && (n.getDataSubjectId = t.getDataSubjectId, n.setConsentProfile = t.setConsentProfile, n.setDataSubjectId = t.setDataSubjectIdV2, Jt.isV2Stub && (n.syncConsentProfile = ni.syncConsentProfile));
                                                o && (n.mobileOnlineURL = t.mobileOnlineURL, n.otCookieData = Jt.otCookieData);
                                                e.IsIabEnabled && (n.updateConsentFromCookies = Mo.updateConsentFromCookie, n.getPingRequest = So.getPingRequestForTcf, n.getVendorConsentsRequestV2 = So.getVendorConsentsRequestV2, n.showVendorsList = t.showVendorsList);
                                                return n
                                            }(r.DomainData)), go.initializeBannerVariables(r), Ao = new Vo, Go = new No, ko = new mo, Zn = new cr, Ho = new Ro, mr = new br, gr = new Cr, function () {
                                                var o = window.OTExternalConsent;
                                                if (o && o.consentedDate && (o.groups || o.tcString || o.addtlString)) {
                                                    var n = [], e = o.groups.split(",");
                                                    e.forEach(function (e) {
                                                        var t = e.split(":");
                                                        n.push({
                                                            lastInteractionDate: o.consentedDate,
                                                            status: "1" === t[1] ? k[k.ACTIVE] : k[k.OPT_OUT],
                                                            id: t[0]
                                                        }), Jt.grpsSynced.push(t[0])
                                                    }), Jt.consentPreferences = {
                                                        preferences: n,
                                                        syncGroups: null
                                                    }, Jt.syncRequired = !0, Ao.updateGroupsInCookie(Fe.OPTANON_CONSENT, e), Ft.setCookie(Fe.ALERT_BOX_CLOSED, o.consentedDate, 365), o.tcString && (Jt.isIabSynced = !0, Ft.setCookie(Fe.EU_PUB_CONSENT, o.tcString, 365)), o.addtlString && (Jt.isGacSynced = !0, Ft.setCookie(Fe.ADDITIONAL_CONSENT_STRING, "" + o.addtlString, 365))
                                                }
                                            }(), Jt.isPreview && (go.syncOtPreviewCookie(), si.bindStopPreviewEvent()), t = ni.syncPreferences(Jt.consentPreferences, !0), (Jt.syncRequired || t.syncRequired) && go.syncAlertBoxCookie(t.alertBoxCookieVal), go.syncCookieExpiry(), o = window.OneTrust.dataSubjectParams || {}, (Jt.dsParams = o).id && Wr.setDataSubjectIdV2(o.id, o.isAnonymous), zt.multiVariantTestingEnabled && zt.selectedVariant && Ft.setCookie(Fe.SELECTED_VARIANT, zt.selectedVariant.Id, Kt.ReconsentFrequencyDays), [4, So.initializeIABModule()];
                                        case 1:
                                            return e.sent(), window.OneTrust.Init(!0), [4, zo.fetchAssets()];
                                        case 2:
                                            return (e.sent(), qr.initBanner(), Mo.assetResolve(!0), Pr.initialiseCssReferences(), n = go.isIABCrossConsentEnabled(), (Jt.syncedValidGrp || Jt.isIabSynced || Jt.isGacSynced) && !n && Kt.NtfyConfig.ShowNtfy && go.isAlertBoxClosedAndValid()) ? (Jt.ntfyRequired = !0, [4, gr.getContent()]) : [3, 4];
                                        case 3:
                                            e.sent(), e.label = 4;
                                        case 4:
                                            return n || window.OneTrust.LoadBanner(), [2]
                                    }
                                })
                            })
                        }(n), Nt.moduleInitializer.WebFormIntegrationEnabled && function () {
                            var e = window.otStubData, t = document.createElement("script");
                            t.type = "text/javascript", t.src = Nt.moduleInitializer.WebFormSrcUrl, t.setAttribute("dataId", Nt.moduleInitializer.TenantGuid), t.setAttribute("worker", Nt.moduleInitializer.WebFormWorkerUrl), e.charset && t.setAttribute("charset", e.charset);
                            e.crossOrigin && t.setAttribute("crossorigin", e.crossOrigin);
                            document.getElementsByTagName("head")[0].appendChild(t)
                        }(), [2]
                }
            })
        })
    }()
}();
