!function(e, t, n) {
    function r(t) {
        var r = e[t];
        return e[t] = n,
            r
    }
    function a(e, t) {
        return r("yandex_" + (t ? t + "_" : "") + e)
    }
    function o(e, t, n) {
        for (var r = 0; r < t.length; r++)
            e[t[r]] = a(t[r], n)
    }
    var c = e.Ya = e.Ya || {};
    if (c.loaderVer = 1173,
            c.codeVer = 1172,
            c.confirmVer = 1071,
            c.matchVer = 1103,
            !c.Context) {
        c.Context = {
            _callbacks: [],
            _asyncIdCounter: 0,
            _asyncModeOn: !1,
            initTime: Number(new Date),
            CONFIRM_BY_CLICK: Math.random() < .1,
            LOG_DIRECT: Math.random() <= .01
        },
            c.Direct = {
                insertInto: function(e, t, n, r) {
                    c.Context._asyncModeOn || (c.Context._asyncModeOn = !0),
                        c.Context.AdvManager ? c.Context.AdvManager.renderDirect(e, t, n, r) : c.Context._callbacks.push(function() {
                            c.Context.AdvManager.renderDirect(e, t, n, r)
                        })
                }
            }
    }
    for (var i = ["yandex_context_callbacks", "yandexContextAsyncCallbacks"], _ = 0; _ < i.length; _++) {
        var s = r(i[_]);
        if (s) {
            c.Context._asyncModeOn || (c.Context._asyncModeOn = !0);
            for (var l = 0; l < s.length; l++)
                c.Context._callbacks.push(s[l])
        }
    }
    if (e.yandexContextSyncCallbacks)
        for (var s = r("yandexContextSyncCallbacks"), _ = 0; _ < s.length; _++)
            c.Context._callbacks.push(s[_]);
    var d = ["ad_format", "site_bg_color", "font_size", "font_family", "stat_id", "no_sitelinks", "search_text", "search_page_number", "lang"]
        , x = ["type", "border_type", "bg_color", "border_radius", "border_color", "header_bg_color", "title_color", "text_color", "url_color", "hover_color", "sitelinks_color", "links_underline", "limit", "place", "favicon", "title_font_size", "grab", "c11n", "geo_lat", "geo_long", "width", "height"];
    if (e.yandex_ad_format) {
        var C = {};
        o(C, d),
            o(C, x, C.ad_format);
        var f = C.place;
        f && t.getElementById(f) || (f = "Ya_sync_" + c.Context._asyncIdCounter++,
            t.write('<div id="' + f + '"></div>'));
        var y = a("partner_id");
        c.Context._callbacks.push(function() {
            c.Context.AdvManager.renderDirect(y, f, C)
        })
    }
    if (c.Context._init)
        return void c.Context._init()
}(this, this.document);
!function(t) {
    function i(a) {
        if (e[a])
            return e[a].exports;
        var o = e[a] = {
            exports: {},
            id: a,
            loaded: !1
        };
        return t[a].call(o.exports, o, o.exports, i),
            o.loaded = !0,
            o.exports
    }
    var e = {};
    return i.m = t,
        i.c = e,
        i.p = "",
        i(0)
}([function(t, i, e) {
    document.createElement("YATAG");
    var a = (e(1),
        e(6))
        , o = e(24);
    !function(t, i, e) {
        Ya.Context.AdvManager || (!function() {
            var t = new o;
            Ya.Context.AdvManager = {
                render: a.protect("AdvManager.render", function() {
                    t.render.apply(t, arguments)
                }),
                renderDirect: a.protect("AdvManager.renderDirect", function() {
                    t.renderDirect.apply(t, arguments)
                })
            }
        }(),
            Ya.Context._init = a.protect("Ya.Context._callbacks", function() {
                for (var t = 0; t < Ya.Context._callbacks.length; t++)
                    Ya.Context._callbacks[t]();
                Ya.Context._callbacks = []
            }))
    }(this, this.document),
        Ya.Context._init()
}
    , function(t, i, e) {
        var a = e(2)
            , o = a.extend(a, {
            prettify: e(4),
            Queue: e(5),
            browser: e(10),
            post: e(8),
            RGB: e(13),
            base64: e(14),
            dom: e(15),
            domEvent: e(17),
            animate: e(18),
            warning: e(19),
            VisibilityChecker: e(20),
            HoverChecker: e(22),
            grab: e(23)
        });
        t.exports = o
    }
    , function(t, i, e) {
        var a = e(3)
            , o = a.extend({}, a);
        o.inArray = function(t, i, e) {
            (void 0 === i || null === i) && (i = "");
            for (var a = 0; a < t.length; a++)
                if (e && e(i, t[a]) || i === t[a])
                    return a;
            return -1
        }
            ,
            o.deepCopy = function(t, i) {
                if (i && "object" == typeof i)
                    for (var e in i)
                        i.hasOwnProperty(e) && ("object" != typeof i[e] || o.isArray(i[e]) ? t[e] = i[e] : ("object" != typeof t[e] && (t[e] = {}),
                            o.deepCopy(t[e], i[e])));
                return t
            }
            ,
            o.format = function(t, i) {
                var e = Array.prototype.slice.call(arguments, 1);
                return t.toString().replace(/(^|.|\r|\n)(\$\{(.*?)\})/g, function(t, a, o, n) {
                    return "\\" == a ? o : /^[0-9]+$/.test(n) ? a + [e[+n]].join("") : a + [i && i[n]].join("")
                })
            }
            ,
            o.downscale = function(t, i) {
                var e = Math.min(i.width / t.width, i.height / t.height, 1);
                return {
                    width: Math.round(t.width *= e),
                    height: Math.round(t.height *= e)
                }
            }
            ,
            o.capitalize = function(t) {
                return t.charAt(0).toUpperCase() + t.substring(1, t.length)
            }
            ,
            o.toQueryParams = function(t) {
                var i = [];
                return o.each(o.keys(t), function(e) {
                    void 0 != t[e] && "" !== t[e] && i.push(e + "=" + encodeURIComponent(t[e]))
                }),
                    i.join("&")
            }
            ,
            o.addQueryParams = function(t, i) {
                if (!t)
                    throw new Error("util.addQueryParams: \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043f\u0443\u0441\u0442\u043e\u0439 url");
                t = t.split("#");
                var e = -1 !== t[0].indexOf("?") ? "&" : "?";
                return [t[0], e, o.toQueryParams(i), t[1] ? "#" + t[1] : ""].join("")
            }
            ,
            o.camelizeKeys = function(t) {
                var i = {};
                return o.forOwn(t, function(t, e) {
                    i[o.camelize(e)] = t
                }),
                    i
            }
            ,
            o.addProtocol = function(t) {
                return 0 == t.indexOf("//") && (t = window.location.protocol + t),
                    t
            }
            ,
            o.addHyphenate = function(t, i) {
                function e(t, i, e) {
                    var n = []
                        , r = 0;
                    return o.each(i, function(i) {
                        var a = i - e;
                        a >= 0 && a < t.length && (n.push(t.slice(r, a)),
                            r = a)
                    }),
                        n.push(t.slice(r)),
                        n.join(a)
                }
                var a = "&shy;"
                    , n = "&#0;";
                if (i) {
                    i = i.replace(/^\[|\]$/g, "").split(" ");
                    var r = 0
                        , s = t.replace("/><", "/>" + n + "<").split(/(?:<.+?>|$)/)
                        , p = t.match(/(?:<.+?>|$)/g)
                        , l = [];
                    return o.each(s, function(t, a) {
                        t = t.replace(n, ""),
                            l.push(e(t, i, r), p[a]),
                            r += t.length
                    }),
                        l.join("")
                }
                return t
            }
            ,
            o.bemFormatter = function(t) {
                var i = /^([_-]\w+)/;
                return function() {
                    if (!arguments.length)
                        return t;
                    var e = [];
                    return o.each(arguments, function(a) {
                        var n = a.split(/\s+/);
                        e.push(o.map(n, function(e) {
                            return e.replace(i, function() {
                                return t + arguments[1]
                            })
                        }).join(" "))
                    }),
                        e.join(" ")
                }
            }
            ,
            t.exports = o
    }
    , function(t, i) {
        function e(t, i) {
            var e = i.constructor;
            i.hasOwnProperty("constructor") || (e = function() {
                    e.__parent.apply(this, arguments)
                }
            );
            var o = k(t.prototype);
            return o.constructor = e,
                e.__super = t.prototype,
                e.__parent = t,
                o.__self = e,
                e.prototype = a(o, i),
                e
        }
        function a(t) {
            for (var i, e = 1, a = arguments.length; a > e; e++)
                if (i = arguments[e])
                    for (var o in i)
                        i.hasOwnProperty(o) && (t[o] = i[o]);
            return t
        }
        function o(t, i, e) {
            for (var a = 0, o = t.length; o > a; ++a)
                i.call(e, t[a], a, t)
        }
        function n(t, i, e) {
            o(l(t), function(a) {
                i.call(e, t[a], a, t)
            })
        }
        function r(t, i, e) {
            return t.indexOf(i, e)
        }
        function s(t, i, e) {
            var a, o, n = new Array(t.length);
            for (a = 0,
                     o = t.length; o > a; a++)
                a in t && (n[a] = i.call(e, t[a], a, t));
            return n
        }
        function p(t, i, e) {
            for (var a = [], o = 0, n = t.length; n > o; o++) {
                var r = t[o];
                i.call(e, r, o, t) && a.push(r)
            }
            return a
        }
        function l(t) {
            var i = [];
            for (var e in t)
                t.hasOwnProperty(e) && i.push(e);
            return i
        }
        function d(t) {
            return "[object Array]" === v.call(t)
        }
        function u(t) {
            var i = typeof t;
            return !!t && ("object" === i || "function" === i)
        }
        function c(t) {
            return "[object Function]" === v.call(t)
        }
        function m(t) {
            return "[object String]" === v.call(t)
        }
        function _(t, i) {
            var e = t[i];
            if (!y(e)) {
                var a = e;
                try {
                    delete t[i],
                        e = t[i],
                        t[i] = a
                } catch (o) {}
            }
            return e
        }
        function y(t) {
            if (!t || !t.toString)
                return !1;
            var i = t.toString();
            return /\[native code\]/.test(i) || /\/\* source code not available \*\//.test(i)
        }
        function h() {
            return Math.abs(+new Date) + Math.round(1e4 * Math.random())
        }
        function g(t) {
            var i = /[-|_\:]([a-z])/g;
            return t.replace(i, function() {
                return arguments[1].toUpperCase()
            })
        }
        function f(t, i, e) {
            if ("number" != typeof t)
                throw new Error("util.isInRange: Number value is expected");
            return t >= i && e >= t
        }
        function b(t, i, e) {
            function a() {
                t.call(e)
            }
            var o, n = 0;
            return function() {
                var t = new Date
                    , e = t - n;
                return clearTimeout(o),
                    i > e ? void (o = setTimeout(a, i - e)) : (n = t,
                        void a())
            }
        }
        function x(t, i) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function() {
                for (var a = [], o = 0, n = arguments.length; n > o; o++)
                    a[o] = e[o] || arguments[o];
                return t.apply(i, a)
            }
        }
        var v = {}.toString
            , k = function() {
            return _(Object, "create") ? Object.create : function(t, i) {
                function e() {}
                if (e.prototype = t,
                        u(i))
                    for (var a in i)
                        i.hasOwnProperty(a) && (e[a] = i[a]);
                return new e
            }
        }();
        _([], "indexOf") || (r = function(t, i, e) {
                var a = t.length >>> 0
                    , o = Number(e) || 0;
                for (o = 0 > o ? Math.ceil(o) : Math.floor(o),
                     0 > o && (o += a); a > o; o++)
                    if (o in t && t[o] === i)
                        return o;
                return -1
            }
        ),
            t.exports = {
                objectCreate: k,
                augment: e,
                extend: a,
                isArray: d,
                isObject: u,
                isFunction: c,
                isString: m,
                getNativeMethod: _,
                checkNativeCode: y,
                each: o,
                forOwn: n,
                filter: p,
                map: s,
                keys: l,
                indexOf: r,
                genRnd: h,
                camelize: g,
                isInRange: f,
                throttle: b,
                bind: x
            }
    }
    , function(t, i, e) {
        function a(t) {
            return t.replace(/&quot;/g, '"').replace(/&laquo;/g, "\xab").replace(/&raquo;/g, "\xbb").replace(/&bdquo;/g, "\u201e").replace(/&ndash;/g, "\u2013")
        }
        function o(t) {
            return /[\u0404\u0406\u0407\u0454\u0456\u0457\u0490\u0491]/.test(t)
        }
        function n(t, i) {
            if (i = r.extend({
                    gluePrepositions: !0,
                    maxGluedLength: 1 / 0,
                    softBreakPunct: !1
                }, i || {}),
                    o(t))
                return t;
            t = a(t);
            var e = "\u0430-\u044f\u0410-\u042f\u0451\u0401"
                , n = "a-zA-Z" + e
                , s = "[\u0410\u0430]|[\u0411\u0431]\u0435\u0437|[\u0412\u0432](?:|\u044b|\u0430\u0441|\u0430\u043c|\u0441\u0435|\u0441\u0451)|[\u0413\u0433]\u0434\u0435|[\u0414\u0434](?:\u043e|\u043b\u044f)|[\u0417\u0437]\u0430|[\u0418\u0438](?:|\u0437)|[\u041a\u043a](?:|\u043e|\u0430\u043a)|[\u041c\u043c]\u044b|[\u041d\u043d](?:\u0430|\u0430\u043c|\u0430\u0441|\u0435|\u0438|\u043e)|[\u041e\u043e](?:|\u0431|\u0442)|[\u041f\u043f](?:\u043e|\u0440\u043e)|[\u0421\u0441](?:|\u043e)|[\u0422\u0442](?:\u043e|\u0443\u0442|\u044b)|[\u0423\u0443]|[\u0427\u0447]\u0442\u043e|[\u042d\u044d]\u0442\u043e"
                , p = "\xa0"
                , l = t.match(/"/g)
                , d = new RegExp('(^|\\s)"([.\\-\\s\\d' + n + ']{3,})"',"g")
                , u = t.match(d);
            return l && u && l.length % 2 == 0 && l.length / 2 == u.length && (t = t.replace(d, function(t, i, e) {
                return /^[\-\s]|[\-\s]$|^[\-\s\d]+$/.test(e) ? t : i + "\xab" + e + "\xbb"
            })),
            i.gluePrepositions && (t = t.replace(new RegExp("(^|\\(|\\s)(" + s + ')\\s([\xab"$\\d' + n + "]+)","g"), function(t, e, a, o) {
                return (a + o).length + 1 <= i.maxGluedLength ? e + a + p + o : t
            })),
            i.softBreakPunct && (t = t.replace(/([.,!?:;)+=]+|[^<]\/)([^ -])(?!$|[.,!?:;)+=\/ ])/g, "$1<wbr />$2")),
                t = t.replace(/([0-9]+) (?=[0-9]{3})/g, "$1" + p).replace(/([0-9\u00A0]+) (\u0440|\u0440\u0443\u0431|\u0442\u044b\u0441|\u043c\u043b\u043d|\u043a\u043c|\u043c|\u0441\u043c|\u043c\u043c)(?=[.,?!:;\s]|$)/g, function(t, e, a) {
                    return t.length <= i.maxGluedLength ? e + p + a : t
                }).replace(/ \-(\d\d?)%/g, " \u2212$1%").replace(/ !/, p + "!")
        }
        var r = e(2);
        t.exports = n
    }
    , function(t, i, e) {
        var a = e(6);
        t.exports = function() {
            var t = []
                , i = !1
                , e = function(t) {
                    a.protect("queue", t, void 0, o)()
                }
                , o = function() {
                    t.length ? e(function() {
                        t.shift()(o)
                    }) : i = !1
                }
                ;
            return {
                add: function(a) {
                    i ? t.push(a) : (i = !0,
                        e(function() {
                            a(o)
                        }))
                }
            }
        }
    }
    , function(t, i, e) {
        function a() {}
        function o(t) {
            return a
        }
        function n(t) {
            d-- > 0 && p(l.urls.jserrlog, {
                errmsg: "v:" + Ya.codeVer + "::" + t
            })
        }
        function r(t) {
            return s("isolate", t || a, this, function(t) {
                t.preventProtect = !0
            })
        }
        var s = e(7)
            , p = e(8)
            , l = e(9)
            , d = 3;
        s.log = n;
        var u = {
            log: o("log"),
            warn: o("warn"),
            error: o("error"),
            remoteLog: n,
            isolate: r,
            protect: s,
            setProtectedTimeout: s.setTimeout
        };
        t.exports = u
    }
    , function(t, i, e) {
        function a(t, i, e, n) {
            return function() {
                try {
                    return i.apply(e || this, arguments)
                } catch (r) {
                    if (o.isFunction(n) && n(r),
                        r.preventProtect === !0)
                        throw r;
                    a.log("Error::" + t + "::" + r.message)
                }
            }
        }
        var o = e(3);
        a.log = function(t) {
            console.log("LOG:" + t)
        }
            ,
            a.setTimeout = function(t, i, e, o) {
                return window.setTimeout(a("timeout", t, e, o), i)
            }
            ,
            t.exports = a
    }
    , function(t, i, e) {
        var a = e(2);
        t.exports = function(t, i) {
            var e = a.toQueryParams(i);
            try {
                var o = new (window.XDomainRequest || window.XMLHttpRequest);
                o.open("post", t, !0),
                o.setRequestHeader && o.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"),
                    o.send(e)
            } catch (n) {
                var r = 2078
                    , s = t + "?" + e;
                if (s.length > r) {
                    var p = s.lastIndexOf("%", r - 1);
                    0 > p && (p = r - 1),
                        s = s.substring(0, p)
                }
                (new Image).src = s
            }
        }
    }
    , function(t, i, e) {
        var a = {
            defaultReloadTimeout: 30,
            MAX_ADS_LIMIT: 9,
            VISIBILITY_TIME: 2e3
        };
        a.urls = {
            direct: "https://survarium.pro/api/v2/an/page/",
            directSettings: "https://survarium.pro/api/v2/an/blkset/",
            rtb: "https://survarium.pro/api/v2/an/meta/",
            favicon: "https://favicon.yandex.net/favicon/",
            jserrlog: "https://an.yandex.ru/jserr/1",
            adtune: "https://adtune.yandex.ru/render/?abuseInfo="
        },
            a.Products = {
                DIRECT: "direct",
                PREMIUM: "premium",
                STRIPE: "stripe",
                RTB: "rtb",
                INTERNAL: "internal"
            },
            a.BlockTypes = {
                VERTICAL: "vertical",
                HORIZONTAL: "horizontal",
                GRID: "grid",
                VK: "vk",
                ROW: "row",
                COMPACT: "compact",
                INTERNAL: "internal"
            },
            a.BorderTypes = {
                NONE: "none",
                BLOCK: "block",
                AD: "ad",
                COLLAPSE: "collapse"
            },
            a.Layouts = {
                WIDE: 0,
                MEDIUM: 1,
                NARROW: 2,
                COMPATIBLE: 3,
                WIDE_WIDTH: 300,
                MEDIUM_WIDTH: 240,
                COMPATIBLE_WIDTH: -1
            },
            a.RtbIframe = {
                TAG: '<iframe id="${id}" width="${width}" height="${height}" ${sandbox} scrolling="no" marginwidth="0" marginheight="0" frameborder="0" vspace="0" hspace="0"></iframe>',
                CONTENT: '<!DOCTYPE html><html><head><meta charset="utf-8"/>${head}</head><body>${body}<script type="text/javascript" nonce="\\${nonce}">document.close();</script>${afterAll}</body></html>'
            },
            t.exports = a
    }
    , function(t, i, e) {
        var a = e(11)
            , o = navigator
            , n = document.documentMode
            , r = "BackCompat" == document.compatMode
            , s = o.userAgent.toLowerCase()
            , p = s.indexOf("opera") > -1
            , l = s.indexOf("presto") > -1
            , d = s.indexOf("opera mini") > -1
            , u = !p && s.indexOf("msie 7") > -1 || 7 == n
            , c = !p && s.indexOf("msie 8") > -1 && 7 != n && 9 != n || 8 == n
            , m = !p && s.indexOf("msie 9") > -1 && 7 != n && 8 != n || 9 == n
            , _ = !p && s.indexOf("msie 1") > -1
            , y = !p && s.indexOf("trident/7") > -1
            , h = !p && s.indexOf("msie 6") > -1
            , g = !p && s.indexOf("msie") > -1 || h || u || c || m || _
            , f = g && (5 == n || !_ && r)
            , b = /edge\/\d+/.test(s)
            , x = function() {
            return y ? 11 : g ? Number(s.match(/msie\s(\d+)/)[1]) : void 0
        }()
            , v = function() {
            var t = window.devicePixelRatio || window.screen.deviceXDPI && window.screen.deviceXDPI / window.screen.logicalXDPI || 1;
            return t > 1
        }()
            , k = function(t, i) {
            i = i || ["", "-webkit-", "-ms-", "-moz-", "-o-"];
            var e = new Image;
            t.split(":")[1] || (t += ":none");
            for (var a = 0, o = i.length; o > a; a++)
                if (e.style.cssText = i[a] + t,
                        e.style.length)
                    return i[a];
            return null
        }
            , w = {
            support: {
                cssFlex: null !== k("flex", ["-webkit-"]),
                cssTransformPrefix: k("transform"),
                cssTransform: null !== k("transform"),
                cssTransition: null !== k("transition"),
                cssFilterBlur: null !== k("filter:blur(2px)"),
                touch: !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch || o.msMaxTouchPoints),
                postMessage: "function" == typeof window.postMessage && !(g || y || b || d),
                longUrls: !(g || y || d || l)
            },
            isIE: g,
            isIE6: h,
            isIE7: u,
            isIE8: c,
            isIE9: m,
            isIE10: _,
            isIE11: y,
            isIEQuirks: f,
            ieVersion: x,
            isQuirks: r,
            isPresto: l,
            isFirefox: /firefox/.test(s),
            isOperaMini: d,
            isHDPIScreen: v
        };
        w.support.video = function() {
            var t = document.createElement("video")
                , i = !1;
            try {
                i = Boolean(t.canPlayType && t.canPlayType("video/mp4").replace(/^no$/, "") && !m)
            } catch (e) {}
            return i
        }(),
            w.flashVer = function() {
                var t, i = o.plugins || {}, e = "object", a = "Shockwave Flash", n = "ShockwaveFlash.ShockwaveFlash", r = "application/x-shockwave-flash", s = [0, 0, 0];
                if (typeof i[a] == e) {
                    if (t = i[a].description,
                        t && (void 0 !== o.mimeTypes || !o.mimeTypes[r] || o.mimeTypes[r].enabledPlugin))
                        return t = t.replace(/^.*\s+(\S+\s+\S+$)/, "$1"),
                            s[0] = parseInt(t.replace(/^(.*)\..*$/, "$1"), 10),
                            s[1] = parseInt(t.replace(/^.*\.(.*)\s.*$/, "$1"), 10),
                            s[2] = /[a-zA-Z]/.test(t) ? parseInt(t.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0,
                            s
                } else if (void 0 !== window.ActiveXObject)
                    try {
                        var p = new ActiveXObject(n);
                        if (p && (t = p.GetVariable("$version")))
                            return t = t.split(" ")[1].split(","),
                                [parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10)]
                    } catch (l) {}
                return s
            }(),
            w.support.checkJSON = function() {
                var t = a();
                return t && "function" == typeof t.stringify && "function" == typeof t.parse ? !0 : !1
            }
            ,
            t.exports = w
    }
    , function(t, i, e) {
        function a() {
            if (window.JSON && o.checkNativeCode(JSON.stringify) && o.checkNativeCode(JSON.parse))
                return window.JSON;
            if (!r) {
                var t = n();
                r = t.contentWindow.JSON;
                var i = t.parentNode;
                i.parentNode.removeChild(i)
            }
            return r
        }
        var o = e(2)
            , n = e(12)
            , r = null ;
        t.exports = a
    }
    , function(t, i, e) {
        var a = e(2)
            , o = e(9);
        t.exports = function(t) {
            var i = document.createElement("yatag");
            a.dom.setImportantCssProperty(i, {
                overflow: "hidden",
                position: "absolute",
                left: "-9999px",
                top: "-9999px",
                width: "1px",
                height: "1px"
            }),
                document.body.appendChild(i),
                i.innerHTML = a.format(o.RtbIframe.TAG, {
                    id: "",
                    width: 1,
                    height: 1,
                    sandbox: 'sandbox="allow-same-origin allow-scripts"'
                });
            var e = i.getElementsByTagName("iframe")[0];
            return t && a.domEvent.on(e, "load", function() {
                i.parentNode.removeChild(i)
            }, this, {
                once: !0
            }),
                e
        }
    }
    , function(t, i, e) {
        function a(t, i, e) {
            if (arguments.length < 3) {
                var o = a.normalizeColorHash(t) || "#000000";
                t = parseInt(o.substr(1, 2), 16),
                    i = parseInt(o.substr(3, 2), 16),
                    e = parseInt(o.substr(5, 2), 16)
            }
            this[0] = t,
                this[1] = i,
                this[2] = e
        }
        var o = e(2);
        a.normalizeColorHash = function(t) {
            return t = (t + "").toUpperCase().replace(/^#?/, "#"),
                /^#[0-9A-F]{6}$/i.test(t) ? t : /^#[0-9A-F]{3}$/i.test(t) ? t.replace(/([0-9A-F])([0-9A-F])([0-9A-F])/i, "$1$1$2$2$3$3") : void 0
        }
            ,
            a.rgba = function(t, i) {
                var e = new a(t).getRGB();
                return e.push(i),
                    e
            }
            ,
            a.prototype = {
                _dec2hex: function(t) {
                    var i = "0123456789ABCDEF";
                    return i.charAt(t / 16 << 0) + i.charAt(t % 16)
                },
                toString: function() {
                    return "#" + this._dec2hex(this[0]) + this._dec2hex(this[1]) + this._dec2hex(this[2])
                },
                avg: function() {
                    return (this[0] + this[1] + this[2]) / 3
                },
                luma: function() {
                    return (299 * this[0] + 587 * this[1] + 114 * this[2]) / 1e3
                },
                isLight: function() {
                    return this.luma() > 127
                },
                toHexArray: function() {
                    return o.map([this[0], this[1], this[2]], function(t) {
                        return this._dec2hex(t)
                    }, this)
                },
                getRGB: function() {
                    return [this[0], this[1], this[2]]
                }
            },
            t.exports = a
    }
    , function(t, i) {
        function e(t, i) {
            i = i || 1e6;
            var e, o, n, s, p, l, d, u = "", c = 0;
            for (t = a(t, 3 * i / 4 | 0); c < t.length; )
                e = t.charCodeAt(c++),
                    o = t.charCodeAt(c++),
                    n = t.charCodeAt(c++),
                    s = e >> 2,
                    p = (3 & e) << 4 | o >> 4,
                    l = (15 & o) << 2 | n >> 6,
                    d = 63 & n,
                    isNaN(o) ? l = d = 64 : isNaN(n) && (d = 64),
                    u = u + r.charAt(s) + r.charAt(p) + r.charAt(l) + r.charAt(d);
            return u
        }
        function a(t, i) {
            t = t.replace(/\r\n/g, "\n");
            for (var e, a = "", o = 0; o < t.length; o++) {
                var n = t.charCodeAt(o);
                if (128 > n ? e = s(n) : n > 127 && 2048 > n ? (e = s(n >> 6 | 192),
                        e += s(63 & n | 128)) : (e = s(n >> 12 | 224),
                        e += s(n >> 6 & 63 | 128),
                        e += s(63 & n | 128)),
                    a.length + e.length > i)
                    break;
                a += e
            }
            return a
        }
        function o(t) {
            var i, e, a, o, s, p, l, d = "", u = 0;
            for (t = t.replace(/[^A-Za-z0-9\-\_\=]/g, ""); u < t.length; )
                o = r.indexOf(t.charAt(u++)),
                    s = r.indexOf(t.charAt(u++)),
                    p = r.indexOf(t.charAt(u++)),
                    l = r.indexOf(t.charAt(u++)),
                    i = o << 2 | s >> 4,
                    e = (15 & s) << 4 | p >> 2,
                    a = (3 & p) << 6 | l,
                    d += String.fromCharCode(i),
                64 != p && (d += String.fromCharCode(e)),
                64 != l && (d += String.fromCharCode(a));
            return n(d)
        }
        function n(t) {
            for (var i = "", e = 0, a = 0, o = 0; e < t.length; )
                if (a = t.charCodeAt(e),
                    128 > a)
                    i += String.fromCharCode(a),
                        e++;
                else if (a > 191 && 224 > a)
                    o = t.charCodeAt(e + 1),
                        i += String.fromCharCode((31 & a) << 6 | 63 & o),
                        e += 2;
                else {
                    o = t.charCodeAt(e + 1);
                    var n = t.charCodeAt(e + 2);
                    i += String.fromCharCode((15 & a) << 12 | (63 & o) << 6 | 63 & n),
                        e += 3
                }
            return i
        }
        var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_="
            , s = String.fromCharCode;
        t.exports = {
            encode: e,
            decode: o
        }
    }
    , function(t, i, e) {
        function a(t, i) {
            if ("string" != typeof t)
                return t;
            var e = t.slice(0, 1)
                , n = t.slice(1);
            switch (e) {
                case "#":
                    return document.getElementById(n);
                case ".":
                    return a.getElementsByClassName(n, i);
                default:
                    return o.map((i || document).getElementsByTagName(t), function(t) {
                        return t
                    })
            }
        }
        var o = e(2)
            , n = e(10)
            , r = e(16);
        o.extend(a, r),
            a.getElementsByClassName = function(t, i) {
                if (i = i || document,
                        o.checkNativeCode(i.getElementsByClassName))
                    return Array.prototype.slice.call(i.getElementsByClassName(t));
                var e = i.getElementsByTagName("*");
                return o.filter(e, function(i) {
                    return a.hasClass(i, t)
                })
            }
            ,
            a.getHead = function() {
                var t = document.getElementsByTagName("head")[0];
                return t || (t = document.createElement("head"),
                    document.documentElement.appendChild(t)),
                    t
            }
        ;
        var s = r.setStyle;
        a.setImportantCssProperty = r.setStyle = function(t, i, e) {
            o.isObject(i) ? s(t, i, !0) : s(t, i, e, !0)
        }
            ,
            a.getWindowSize = function() {
                var t = document.documentElement
                    , i = document.body;
                return {
                    width: window.innerWidth || t && t.clientWidth || i && i.clientWidth || 0,
                    height: window.innerHeight || t && t.clientHeight || i && i.clientHeight || 0
                }
            }
            ,
            a.remove = function(t) {
                var i = t.parentNode;
                i && i.removeChild(t)
            }
            ,
            a.appendStyle = function(t, i) {
                var e = document.createElement("style");
                return e.setAttribute("type", "text/css"),
                i && e.setAttribute("nonce", i),
                    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t)),
                    a.getHead().appendChild(e),
                    e
            }
            ,
            a.addScript = function(t, i, e) {
                if (i)
                    return void document.write('<script type="text/javascript" charset="utf-8" src="' + t + '"></script>');
                var o = document.createElement("script");
                return o.charset = "utf-8",
                    o.src = t,
                "function" == typeof e && (o.onload = e),
                    a.getHead().appendChild(o),
                    o
            }
            ,
            a.isOverlaid = function(t, i) {
                var e = a.getBoundingClientRect(t);
                if (!e || !document.elementFromPoint || n.isOperaMini || !t.contains)
                    return !1;
                var o = t.clientWidth / 2
                    , r = Math.round(t.clientHeight * i / 2) || 0
                    , s = Math.min(Math.max(e.left, 0) + o, e.right)
                    , p = Math.min(Math.max(e.top, 0) + r, e.bottom)
                    , l = document.elementFromPoint(s, p);
                return l ? t != l && !t.contains(l) : !1
            }
            ,
            a.isInViewport = function(t, i) {
                var e = a.getBoundingClientRect(t);
                if (!e || n.isOperaMini)
                    return t.offsetWidth > 0 && t.offsetHeight > 0;
                var o = e.right - e.left
                    , r = e.bottom - e.top
                    , s = 0;
                if (o > 0 && r > 0) {
                    var p = function(t, i, e) {
                        return Math.max(Math.min(i, e) - Math.max(t, 0), 0)
                    }
                        , l = a.getWindowSize()
                        , d = p(e.left, e.right, l.width)
                        , u = p(e.top, e.bottom, l.height);
                    s = d * u / (o * r)
                }
                return s >= (i || Number.MIN_VALUE)
            }
            ,
            a.setIframeHTML = function(t, i) {
                var e = n.isIE && n.ieVersion < 10 || n.isPresto;
                e ? (t.contentWindow.name = i,
                    t.contentWindow.location.replace("javascript:this.name")) : t.contentWindow.document.write(i)
            }
            ,
            a.getWindowScroll = function() {
                return {
                    left: void 0 === window.pageXOffset ? document.documentElement.scrollLeft : window.pageXOffset,
                    top: void 0 === window.pageYOffset ? document.documentElement.scrollTop : window.pageYOffset
                }
            }
            ,
            a.getOffset = function(t) {
                var i = document.documentElement
                    , e = a.getBoundingClientRect(t)
                    , o = a.getWindowScroll();
                return {
                    top: e ? e.top + o.top - (i.clientTop || 0) : 0,
                    left: e ? e.left + o.left - (i.clientLeft || 0) : 0
                }
            }
            ,
            a.getComputedFontSize = function(t) {
                try {
                    var i = window.getComputedStyle(t, null ).getPropertyValue("font-size");
                    return Math.round(parseFloat(i))
                } catch (e) {
                    return null
                }
            }
            ,
            a.getBoundingClientRect = function(t) {
                try {
                    var i = t.getBoundingClientRect();
                    return {
                        left: i.left,
                        right: i.right,
                        top: i.top,
                        bottom: i.bottom
                    }
                } catch (e) {
                    return null
                }
            }
            ,
            t.exports = a
    }
    , function(t, i, e) {
        function a(t, i) {
            if ("string" != typeof t.className)
                return !1;
            var e = t.className.split(" ");
            return p.indexOf(e, i) > -1
        }
        function o(t, i) {
            a(t, i) || (t.className += " " + i)
        }
        function n(t, i) {
            var e = t.className.split(" ")
                , a = p.filter(e, function(t) {
                return t != i
            });
            a.length < e.length && (t.className = a.join(" "))
        }
        function r(t, i, e, a) {
            if (p.isObject(i)) {
                a = e;
                for (var o in i)
                    s(t, o, i[o], a)
            } else
                s(t, i, e, a)
        }
        function s(t, i, e, a) {
            var o = a ? "important" : null ;
            e >>> 0 && (e += "px"),
                t.style.setProperty ? t.style.setProperty(i, e, o) : t.style.cssText += ";" + i + ":" + e + (o ? "!" + o : "")
        }
        var p = e(3);
        t.exports = {
            hasClass: a,
            addClass: o,
            removeClass: n,
            setStyle: r
        }
    }
    , function(t, i, e) {
        function a(t, i, e, a, n) {
            if (!t || !e)
                return null ;
            var l = r("handler:" + i, e, a)
                , d = {
                un: function() {
                    p(t, i, l)
                }
            };
            return n && n.once && (l = function(t) {
                return function(i) {
                    t(i),
                        o(d)
                }
            }(l)),
                s(t, i, l),
                d
        }
        function o(t) {
            t && t.un()
        }
        var n = e(3)
            , r = e(7)
            , s = function(t, i, e) {
                t.attachEvent("on" + i, e)
            }
            , p = function(t, i, e) {
                t.detachEvent("on" + i, e)
            }
            ;
        n.getNativeMethod(document, "addEventListener") && (s = function(t, i, e) {
                n.getNativeMethod(t, "addEventListener").call(t, i, e, !1)
            }
                ,
                p = function(t, i, e) {
                    n.getNativeMethod(t, "removeEventListener").call(t, i, e, !1)
                }
        ),
            t.exports = {
                on: a,
                un: o
            }
    }
    , function(t, i) {
        function e(t, i) {
            var e = new Date
                , a = function() {
                    t(new Date - e) ? o(a) : i && i()
                }
                ;
            a()
        }
        function a(t) {
            e(function(i) {
                var e = n[t.easing || "linear"]
                    , a = e(i, t.start, t.end - t.start, t.duration)
                    , o = i < t.duration;
                return t.onFrame(o ? a : t.end),
                    o
            }, t.onEnd)
        }
        var o = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
                    window.setTimeout(t, 1e3 / 60)
                }
        }()
            , n = {
            linear: function(t, i, e, a) {
                return e * t / a + i
            }
        };
        t.exports = a
    }
    , function(t, i, e) {
        function a(t) {
            for (var i = new n(t), e = i.avg(), a = 1; e < r[a]; )
                a++;
            var o = r[a]
                , p = r[a - 1]
                , l = s[a]
                , d = s[a - 1]
                , u = (l + 1 * (e - o) / (p - o) * (d - l)) / 255
                , c = 1 - u
                , m = 255 * u;
            return new n(i[0] * c + m,i[1] * c + m,i[2] * c + m).toString()
        }
        function o(t, i, e) {
            var a = new n(t)
                , o = new n(i);
            return e = isNaN(parseFloat(e)) ? p : e,
                new n(a[0] * e + o[0] * (1 - e),a[1] * e + o[1] * (1 - e),a[2] * e + o[2] * (1 - e)).toString()
        }
        var n = e(13)
            , r = [255, 247, 240, 231, 221, 210, 194, 174, 144, 112, 80, 35, 0]
            , s = [255, 222, 190, 165, 139, 118, 102, 86, 75, 70, 68, 66, 64]
            , p = .85;
        t.exports = {
            getBgColor: a,
            getBorderColor: o
        }
    }
    , function(t, i, e) {
        var a = e(2)
            , o = e(15)
            , n = e(21)
            , r = e(6);
        t.exports = a.augment(Object, {
            _checkDelay: 300,
            constructor: function(t, i) {
                this._confirmDelay = +t || 0,
                    this._visiblePortion = +i || Number.MIN_VALUE,
                    this._confirmDelay = Math.max(this._confirmDelay - this._checkDelay, 0)
            },
            onVisible: function(t) {
                return this._onVisible = t,
                    this
            },
            onConfirmed: function(t) {
                return this._onConfirmed = t,
                    this
            },
            listen: function(t) {
                if (!t)
                    throw new Error("VisibilityChecker#listen: No element");
                this._element = t,
                    this._isListening = !0;
                var i = r.protect("VisibilityChecker#check", function() {
                    this._isListening && (this._check(),
                        setTimeout(i, this._checkDelay))
                }, this);
                return setTimeout(i, 0),
                    n.on(this._element, "mouseover", function() {
                        this.confirm()
                    }, this, {
                        once: !0
                    }),
                Ya.Context.CONFIRM_BY_CLICK && n.on(this._element, "click", function() {
                    this.confirm(!0)
                }, this, {
                    once: !0
                }),
                    this
            },
            clear: function() {
                return this._isListening = !1,
                    this._clearConfirmTimer(),
                    this
            },
            _check: function() {
                return this._isConfirmed ? void 0 : this._element ? void (o.isInViewport(this._element, this._visiblePortion) && !o.isOverlaid(this._element, this._visiblePortion) ? (this._onVisible && this._onVisible(),
                    this._setConfirmTimer()) : this._clearConfirmTimer()) : (r.remoteLog("Warning::VisibilityChecker#check: no element"),
                    void this.clear())
            },
            _setConfirmTimer: function() {
                this._confirmTimer || (this._confirmTimer = r.setProtectedTimeout(this.confirm, this._confirmDelay, this))
            },
            _clearConfirmTimer: function() {
                this._confirmTimer && (clearTimeout(this._confirmTimer),
                    this._confirmTimer = null )
            },
            confirm: function(t) {
                return this._isConfirmed || (this._isConfirmed = !0,
                this._onConfirmed && this._onConfirmed(t),
                    this.clear()),
                    this
            }
        })
    }
    , function(t, i, e) {
        t.exports = e(17)
    }
    , function(t, i, e) {
        var a = e(2)
            , o = e(21)
            , n = e(6);
        t.exports = a.augment(Object, {
            constructor: function(t) {
                this.delay = t || 0
            },
            onConfirmed: function(t) {
                return this._onConfirmed = t,
                    this
            },
            listen: function(t) {
                return a.each(t, function(t) {
                    var i, e = o.on(t, "mouseover", function() {
                        i || (i = n.setProtectedTimeout(function() {
                            this._onConfirmed(t.getAttribute("data-id")),
                                o.un(e),
                                o.un(a)
                        }, this.delay, this))
                    }, this), a = o.on(t, "mouseleave", function() {
                        clearTimeout(i),
                            i = null
                    })
                }, this),
                    this
            }
        })
    }
    , function(t, i, e) {
        function a(t, i) {
            if (i) {
                var e, a = "yandex.ru yandex.com yandex.ua yandex.by yandex.kz yandex.com.tr".split(" "), n = document.location.host;
                for (e = 0; e < a.length; e++)
                    if (n.substr(n.length - a[e].length, n.length) == a[e])
                        return i
            }
            for (var s, p, l = ["t" + (document.title || "")], d = l[0].length, e = 1; 4 > e && t > d; ) {
                s = document.getElementsByTagName("h" + e);
                for (var u = 0; u < s.length; u++)
                    p = o(s[u]),
                        d += p.length,
                        l.push(e + "" + p);
                e++
            }
            var c = l.join("\n") + "\n";
            return r.encode(c, t)
        }
        function o(t) {
            return n(t, 0).replace(/\s+/, " ")
        }
        function n(t, i) {
            if (!t || i > s)
                return "";
            for (var e, a = "", o = t.childNodes, r = 0; r < o.length; ) {
                switch (e = o[r],
                    e.nodeType) {
                    case 1:
                    case 5:
                        a += n(e, i + 1);
                        break;
                    case 3:
                    case 2:
                    case 4:
                        a += e.nodeValue + " "
                }
                r++
            }
            return a
        }
        var r = e(14)
            , s = 5;
        t.exports = a
    }
    , function(t, i, e) {
        function a() {
            this.queue = new o.Queue,
                this._rtb = new p(this),
                this._direct = new l(this)
        }
        var o = e(1)
            , n = e(6)
            , r = e(9)
            , s = e(25)
            , p = e(26)
            , l = e(141)
            , d = e(142)
            , u = e(145)
            , c = e(146);
        a.prototype = {
            render: function(t, i) {
                t = o.extend({}, t),
                    t.onRender = n.isolate(t.onRender),
                    i = n.isolate(i);
                var e = this._parseBlockId(t.blockId);
                return e ? "I" === e.product ? void this._renderInternal(e, t, i) : "VI" === e.product ? void this._renderInpage(e, t, i) : (t.pageId = e.pageId,
                    t.blockImpId = e.impId,
                    t.statId = t.blockImpId,
                    t.geo = s.getValidGeo(t.geo),
                    t.disableHighlight = t.disableHighlight === !0,
                    "R" === e.product ? void this._rtb.render(t, i) : "D" === e.product || "P" === e.product || "S" === e.product ? (t.product = this._getProduct(e.product),
                        void this._direct.render(t, null , i)) : void this._logUnknown(t)) : void this._logUnknown(t)
            },
            _logUnknown: function(t) {},
            renderDirect: function(t, i, e, a) {
                a = n.isolate(a);
                var p;
                e.ad_format === r.Products.DIRECT && (p = e.geo_lat || e.geo_long ? {
                    lat: e.geo_lat,
                    "long": e.geo_long
                } : e.geo);
                var l = {
                    pageId: t,
                    renderTo: i,
                    data: e.data,
                    grab: e.grab,
                    searchText: e.search_text,
                    searchPageNumber: e.search_page_number,
                    lang: e.lang,
                    onRender: n.isolate(e.on_render),
                    onHide: n.isolate(e.on_hide),
                    product: e.ad_format,
                    geo: s.getValidGeo(p),
                    disableHighlight: e.disable_highlight === !0,
                    cspNonce: e.csp_nonce || void 0,
                    additionalBanners: e.additional_banners,
                    pageNumber: e.page_number,
                    extParams: e.ext_params,
                    bundle: e.bundle,
                    adfoxexp: e.adfoxexp
                };
                if (e.type === r.Products.STRIPE)
                    l.product = r.Products.STRIPE;
                else if (l.product !== r.Products.DIRECT && l.product !== r.Products.PREMIUM)
                    return void this._logUnknown(l);
                var d = parseInt(e.stat_id, 10);
                isNaN(d) || (l.statId = d % Math.pow(2, 24) + Math.pow(2, 30)),
                    e = o.camelizeKeys(e),
                    e.name = e.type,
                    this._direct.render(l, e, a)
            },
            _parseBlockId: function(t) {
                var i = /^(\w{1,2})\-(?:\w+\-)?(\d+)\-(\d+|\w+)$/.exec(t);
                return i ? {
                    product: i[1],
                    pageId: i[2],
                    impId: i[3]
                } : !1
            },
            _getProduct: function(t) {
                var i = {
                    D: r.Products.DIRECT,
                    P: r.Products.PREMIUM,
                    S: r.Products.STRIPE
                };
                return i[t]
            },
            _renderInternal: function(t, i, e) {
                i.pageId = t.pageId,
                    i.internalType = t.impId.toLowerCase(),
                    i.product = r.Products.INTERNAL,
                    e = e || function() {}
                    ,
                this._internal || (this._internal = new d(this.queue)),
                    this._internal.render(i, e)
            },
            _renderInpage: function(t, i, e) {
                this._inpage || (this._inpage = new u);
                var a = {
                    partnerId: t.pageId,
                    category: t.impId,
                    renderTo: i.renderTo
                };
                this._inpage.render(a, i.inpage, e)
            },
            checkStripe: function(t, i, e) {
                n.protect("AdvManager:checkStripe", function() {
                    var a = {};
                    e && (a = {
                        onRender: i.onRender,
                        onHide: i.onHide
                    }),
                    t.stripe && c(t, a)
                }, this)()
            }
        },
            t.exports = a
    }
    , function(t, i) {
        var e = {
            getValidGeo: function(t) {
                var i = {};
                return t && (t.lat = parseFloat(t.lat),
                    t["long"] = parseFloat(t["long"]),
                isNaN(t.lat) || (i.lat = t.lat.toFixed(this._GEO_FLOAT_PRECISION)),
                isNaN(t["long"]) || (i["long"] = t["long"].toFixed(this._GEO_FLOAT_PRECISION))),
                    i
            },
            _GEO_FLOAT_PRECISION: 6,
            INVALID_NUMBER: -(1 / 0),
            getValidNumber: function(t) {
                var i = parseInt(t, 10)
                    , e = isNaN(i) || !isFinite(i);
                return e && (i = this.INVALID_NUMBER),
                    i
            }
        };
        t.exports = e
    }
    , function(t, i, e) {
        function a(t) {
            this._advManager = t,
                this._adFilter = "",
                this._managers = {}
        }
        var o = e(1)
            , n = (e(6),
            e(27))
            , r = e(137)
            , s = e(139)
            , p = e(33)
            , l = e(140);
        a.prototype = {
            render: function(t, i) {
                var e = this._getManager(t.blockId, t.pageNumber);
                Ya.Context._asyncModeOn ? this._renderAsync(e, t, i) : this._renderSync(e, t, i),
                    l.hitOnce(t.pageId, t.bundle)
            },
            _getManager: function(t, i) {
                var e = t + "#" + (i ? i : "");
                return e in this._managers || (this._managers[e] = new n),
                    this._managers[e]
            },
            _renderAsync: function(t, i, e) {
                this._loadData(t, i, e || function() {}
                    , !1)
            },
            _renderSync: function(t, i, e) {
                window.yandex_rtb_is_displayed = !0,
                    this._loadData(t, i, function() {
                        window.yandex_rtb_is_displayed = !1,
                        e && e()
                    }, !0)
            },
            _loadData: function(t, i, e, a) {
                var n = this
                    , l = function(a) {
                        a.settings && (n._adFilter = a.settings[i.blockImpId].adFilter),
                            t.setData(a),
                            t.render(i, e)
                    }
                    ;
                if (i.data)
                    return void l(i.data);
                if (!t.dataCanReload())
                    return void t.render(i, e);
                var d = new s(o.dom("#" + i.renderTo));
                d.set("ad_no", p.getCapturedCount());
                var u = function(e) {
                        r.loadRtb({
                            pageId: i.pageId,
                            blockImpId: i.blockImpId,
                            grab: i.grab,
                            extParams: i.extParams,
                            extParam: i.extParam,
                            skipToken: n._getSkipToken(t),
                            lang: i.lang,
                            geo: i.geo,
                            disableHighlight: i.disableHighlight,
                            layoutConfig: d,
                            additionalBanners: i.additionalBanners
                        }, function(t) {
                            n._advManager.checkStripe(t, i),
                                l(t),
                            e && e()
                        })
                    }
                    ;
                a ? u() : this._advManager.queue.add(function(t) {
                    u(t)
                })
            },
            _getSkipToken: function(t) {
                var i = this._adFilter ? this._adFilter.split(":") : [];
                i = o.filter(i, function(t) {
                    return !/^yabs\./.test(t)
                });
                var e = p.getCapturedAdIds(t.getUsedIds());
                return e.length && i.push("yabs." + o.base64.encode(e.join("\n"))),
                    i.join(":")
            }
        },
            t.exports = a
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(28)
            , n = e(134)
            , r = e(35)
            , s = e(135)
            , p = e(136)
            , l = e(9)
            , d = e(32);
        t.exports = function() {
            function t(t) {
                var i = a.dom("#" + t.renderTo);
                if (!i)
                    return b = null ,
                        f = null ,
                        void (y && (y.destructor(),
                            y = null ));
                if ((i !== b || f !== m) && (b = i,
                        f = m,
                    y && y.destructor(),
                    h || (h = new n(c,c.settings[t.blockImpId]),
                        g = new r({
                            linkTail: h.getLinkTail(),
                            viewNotices: h.getViewNotices(),
                            winNotice: h.getWinNotice()
                        })),
                        y = new s(h,t.blockId,g,t.cspNonce,t.pageNumber),
                        y.render(i),
                        t.onRender)) {
                    var e = {
                        product: l.Products.RTB
                    };
                    y.dataSource.isApp() && (e.testTag = d.getRtb({
                        isApp: !0
                    })),
                        t.onRender(e)
                }
            }
            function i(t) {
                y && y.destructor();
                var i = {
                    pageId: t.pageId,
                    onRender: t.onRender,
                    blockId: t.blockId,
                    renderTo: t.renderTo,
                    product: l.Products.DIRECT,
                    directSettings: t.directSettings,
                    pageNumber: t.pageNumber,
                    adfoxexp: t.adfoxexp
                }
                    , e = c.settings[t.blockImpId];
                t.imagesFirst && (e.imagesFirst = !0),
                    x.render(i, e),
                    y = {
                        destructor: function() {
                            c.direct || x.render(i, e)
                        }
                    }
            }
            function e() {
                u() || p.isOpened() || p.open()
            }
            function u() {
                return "1" == c.common.isMobileSdk
            }
            var c, m, _, y, h, g, f = null , b = null , x = new o;
            this.setData = function(t) {
                c = t,
                    m = new Date,
                    h = null ,
                    g = null ,
                    x.setData(c),
                    _ = c.common.reloadTimeout ? Number(c.common.reloadTimeout) : l.defaultReloadTimeout
            }
                ,
                this.getUsedIds = function() {
                    return x.getUsedIds()
                }
                ,
                this.dataCanReload = function() {
                    return !m || new Date - m > 1e3 * _
                }
                ,
                this.render = function(a, o) {
                    c.rtb ? (t(a),
                        e()) : c.direct ? (i(a),
                        e()) : (y && (y.destructor(),
                        y = null ),
                    o && o())
                }
        }
    }
    , function(t, i, e) {
        function a(t) {
            this._isPlainDirect = t,
                this._blocks = {}
        }
        var o = e(6)
            , n = e(25)
            , r = e(9)
            , s = e(1)
            , p = e(29)
            , l = e(34)
            , d = e(37).parse
            , u = e(38)
            , c = e(70)
            , m = 37850170;
        a.prototype = {
            setData: function(t) {
                this._data = t,
                    this._visibilityManager = new l,
                    this._timestamp = new Date,
                    this._reloadTimeout = this._data.common.reloadTimeout ? Number(this._data.common.reloadTimeout) : r.defaultReloadTimeout
            },
            dataCanReload: function() {
                return !this._timestamp || new Date - this._timestamp > 1e3 * this._reloadTimeout
            },
            getRenderId: function(t) {
                return (t.blockId || t.renderTo) + "#" + (t.pageNumber || "")
            },
            render: function(t, i, e) {
                var a = this.getRenderId(t);
                if (this._blocks[a] && (this._blocks[a].destructor(),
                        this._blocks[a] = null ),
                    !this._data || !this._data[t.product])
                    return void (e && e());
                var n = this._blocks[a] = this._createBlock(t, i);
                if (n) {
                    if (n.render(),
                            t.onRender) {
                        var s = {
                            product: r.Products.DIRECT
                        };
                        n.dataSource.isApp() && (s.testTag = n.getTesttag()),
                            t.onRender(s)
                    }
                    if (Ya.Context.LOG_DIRECT && this._isPlainDirect) {
                        var s = {
                            error: "Maybe not rendered"
                        };
                        try {
                            var n = this._blocks[a]
                                , p = n.getMainCont();
                            n && p && (s = {
                                limit: n.settings.limit,
                                block: n.settings.format.name,
                                width: p.clientWidth || -1,
                                height: p.clientHeight || -1
                            })
                        } catch (l) {
                            s.error = l.message
                        }
                        c.getCounter(m, o.protect("metrika_direct", function(t) {
                            t.hit(window.location.href, {
                                params: s
                            })
                        }))
                    }
                }
            },
            getUsedIds: function(t) {
                var i = [];
                return t && this._blocks[t] ? s.each(this._blocks[t].advs, function(t) {
                    i.push(t.adId)
                }) : s.forOwn(this._blocks, function(t) {
                    t && t.advs && s.each(t.advs, function(t) {
                        i.push(t.adId)
                    })
                }),
                    i
            },
            _createBlock: function(t, i) {
                var e = u.build(i.name, {
                    width: n.getValidNumber(i.width),
                    height: n.getValidNumber(i.height)
                });
                if (e) {
                    var a = d(e.format, i, t.directSettings);
                    if (a) {
                        var o = new p({
                            product: t.product,
                            data: this._data,
                            statId: t.statId,
                            settings: a,
                            visibilityManager: this._visibilityManager,
                            blockId: t.blockId,
                            pageId: t.pageId,
                            pageNumber: t.pageNumber,
                            adfoxexp: t.adfoxexp
                        });
                        if (o.isEmpty())
                            return null ;
                        var r = t.blockId;
                        return r || (r = (t.renderTo + "-" + a.format.className).replace(/[^-\w]/g, "-")),
                            new e.constructor(o,a,t.renderTo,r,t.cspNonce,t.pageNumber)
                    }
                }
            }
        },
            t.exports = a
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(9)
            , n = e(30)
            , r = e(31)
            , s = e(32)
            , p = e(33)
            , l = {
            DELETE: 0,
            CONTROL: 1,
            MANUAL: 2,
            AUTOPLAY: 3
        }
            , d = a.augment(Object, {
            constructor: function(t) {
                this._product = t.product,
                    this._data = t.data,
                    this._statId = t.statId,
                    this._settings = t.settings,
                    this._visibilityManager = t.visibilityManager,
                    this._blockId = t.blockId,
                    this._pageId = t.pageId,
                    this._pageNumber = t.pageNumber,
                    this._adfoxexp = t.adfoxexp;
                var i = this._getFromData("ads") || [];
                a.each(i, function(t) {
                    t.geoDistanceRegular && parseInt(t.geoDistanceRegular, 10) > 2e3 && (t.geoDistanceRegular = "")
                }),
                    this._ads = this.filterAds(i)
            },
            filterAds: function(t) {
                var i = this._isPossibleInlineInstallation();
                return a.filter(t, function(t) {
                    return this._isAdExtDistrib(t) && !i ? !1 : !0
                }, this)
            },
            _isPossibleInlineInstallation: function() {
                try {
                    var t = window.parent;
                    return t.document && "function" == typeof t.chrome.webstore.install
                } catch (i) {
                    return !1
                }
            },
            _isAdExtDistrib: function(t) {
                return t.addInfo && "ext-distrib" === t.addInfo.type
            },
            _getFromData: function(t) {
                return this._data[this._product] && this._data[this._product][t]
            },
            prepareAd: function(t, i) {
                var e = a.extend({}, t)
                    , o = e.url;
                e.uniqId = a.genRnd(),
                    this._prepareHighlight(e),
                    this._prepareVideo(e, this._getVideoMode());
                var r = {
                    isHover: !1,
                    isGeo: !!e.geoDistance,
                    isGeoRegular: !!e.geoDistanceRegular,
                    layout: i.layout,
                    isTitleHighlighted: e.isTitleHighlighted,
                    isBodyHighlighted: e.isBodyHighlighted,
                    videoMode: e.setVideoTesttag ? this._getVideoMode() : null ,
                    confirmByClick: Ya.Context.CONFIRM_BY_CLICK
                }
                    , s = this._getAuxQueryParams(r);
                return e.video && (e.videoClickUrl = a.addQueryParams(o, this._getAuxQueryParams(a.extend({
                    videoClick: !0
                }, r)))),
                    e.url = a.addQueryParams(o, s),
                e.vcardUrl && (e.vcardUrl = a.addQueryParams(e.vcardUrl, s)),
                    e.skipPictures = i.format.skipPictures || Boolean(Number(e.skipPictures)),
                e.images && !e.skipPictures && (e.image = new n(e.images,a.browser.isHDPIScreen)),
                    e.domain = e.domain ? e.domain.replace(/^www\./, "") : "",
                    this._settings.noSitelinks || !e.sitelinks ? e.sitelinks = null : e.sitelinks = this._prepareSitelinks(e.sitelinks, s),
                this.isSearchPage() || (e.workingTime = null ,
                    e.telNum = null ,
                    e.metro = null ),
                "6" === this.getLanguage() && (delete e.address,
                    delete e.geoDistance,
                    delete e.geoDistanceRegular),
                    e.address && (e.geoDistance || e.geoDistanceRegular) ? e.address = this._getFormattedAddress(e.address) : e.address = null ,
                e.geoDistance && (e.geoDistance = a.prettify(e.geoDistance)),
                e.abuseInfo && !this.isApp() && (e.adtuneUrl = this.getAdtuneUrl(e)),
                e.addInfo && "mobile-app" === e.addInfo.type && this._prepareMobileApp(e, s),
                this._isAdExtDistrib(e) && this._prepareExtDistrib(e),
                e.image && !e.skipPictures && (e.clickImageUrl = a.addQueryParams(o, this._getAuxQueryParams(a.extend({
                    imageClick: !0
                }, r)))),
                this._settings.favicon && (e.favicon = this._getFavicon(e)),
                this.getUserGroup() > 5 && this.getUserGroup() < 11 && (this._settings.c11n.textClickable = !0),
                    e
            },
            _getVideoMode: function() {
                if (void 0 === Ya.Context.VIDEO_MODE) {
                    var t = Math.random();
                    .05 > t ? Ya.Context.VIDEO_MODE = l.CONTROL : .1 > t ? Ya.Context.VIDEO_MODE = l.MANUAL : .15 > t ? Ya.Context.VIDEO_MODE = l.AUTOPLAY : Ya.Context.VIDEO_MODE = l.DELETE
                }
                return Ya.Context.VIDEO_MODE
            },
            _prepareVideo: function(t, i) {
                return this._blockAlreadyHasVideo ? void 0 : (t.setVideoTesttag = !1,
                t.addInfo && "video-demo" === t.addInfo.type && this._settings.format.canVideo && a.browser.support.video && (i === l.DELETE || this._blockAlreadyHasVideo || (this._blockAlreadyHasVideo = !0,
                    t.setVideoTesttag = !0,
                i !== l.CONTROL && (t.video = new r(t.addInfo,i === l.AUTOPLAY)))),
                    t.setVideoTesttag)
            },
            _getFormattedAddress: function(t) {
                var i = [[/,\s\u043e\u0444\u0438\u0441\s.+$/g, ""], [/\u0434.\s\u0434.\s?/i, "\u0434. "], [/\u043a\u043e\u0440\u043f.\s\u043a\u043e\u0440\u043f.\s?/i, "\u043a\u043e\u0440\u043f. "], [/,{2,}/g, ","], [/\.{2,}/g, "."]];
                return a.each(i, function(i) {
                    t = t.replace(i[0], i[1])
                }),
                    t
            },
            _getAuxQueryParams: function(t) {
                return {
                    "test-tag": this.getTesttag(t),
                    "stat-id": this._statId
                }
            },
            getTesttag: function(t) {
                return t.format = this._settings.format.index,
                    t.userGroup = this.getUserGroup(),
                    t.isApp = this.isApp(),
                    t.adfoxexp = this._adfoxexp,
                    s.getDirect(t)
            },
            _prepareSitelinks: function(t, i) {
                var e = [];
                return a.each(t, function(t) {
                    t.title && t.url && e.push({
                        title: t.title,
                        url: a.addQueryParams(t.url, i)
                    })
                }),
                    e.length ? e : null
            },
            _prepareMobileApp: function(t, i) {
                if (t.addInfo = a.camelizeKeys(t.addInfo),
                        t.addInfo.callToActionUrl = a.addQueryParams(t.addInfo.callToActionUrl, i),
                    t.addInfo.price && t.addInfo.price > 0) {
                    var e = t.addInfo.price;
                    t.addInfo.price = Number(e) > parseInt(e, 10) ? Number(e).toFixed(2) : Number(e),
                    "RUB" === t.addInfo.priceCurrencyCode && (t.addInfo.priceCurrencySymbol = "\u0440.")
                } else
                    delete t.addInfo.price;
                if (t.addInfo.reviewCount = t.addInfo.reviewCount && t.addInfo.reviewCount > 0 ? t.addInfo.reviewCount : void 0,
                    t.addInfo.icon && t.addInfo.icon.length && !t.skipPictures) {
                    var o = new n(t.addInfo.icon,a.browser.isHDPIScreen);
                    t.image ? t.icon = o : (t.image = o,
                        t.clickImageUrl = t.url)
                }
                t.addInfo.rating = t.addInfo.rating && t.addInfo.rating > 0 ? t.addInfo.rating : void 0,
                    delete t.domain,
                    t.isAppAd = !0
            },
            _prepareExtDistrib: function(t) {
                delete t.domain,
                    t.addInfo = a.camelizeKeys(t.addInfo),
                    t.isExtDistrib = !0
            },
            _getFavicon: function(t) {
                if (t.isAppAd) {
                    if (t.skipPictures && t.addInfo.icon && t.addInfo.icon.length)
                        return new n(t.addInfo.icon,a.browser.isHDPIScreen).getFitting(16, 16).src
                } else if (t.punyDomain)
                    return o.urls.favicon + t.punyDomain
            },
            isEmpty: function() {
                return 0 === this._ads.length
            },
            getUserGroup: function() {
                var t = parseInt(this._data.common.userGroup, 10);
                return isNaN(t) ? 102 : -1 === t ? 101 : t + 1
            },
            isYandexPage: function() {
                return "1" == this._data.common.isYandexPage
            },
            isSearchPage: function() {
                return "1" == this._data.common.isSearchPage
            },
            isYandex: function() {
                return "1" == this._data.common.isYandex
            },
            isApp: function() {
                return "1" == this._data.common.isMobileSdk
            },
            isSSP: function() {
                var t = this._data.common.sspId;
                return null != t && 0 != t
            },
            doSortByImages: function() {
                return this.isYandexPage() && !!this._settings.imagesFirst
            },
            getLinkHead: function() {
                return this._data.common.linkHead
            },
            getTitle: function() {
                return this._getFromData(this._product + "Title")
            },
            getFreeAds: function() {
                var t = p.getCapturedAdIds([], this._pageNumber);
                return a.filter(this._ads, function(i) {
                    return -1 === a.inArray(t, i.adId) && !this._visibilityManager.isAbused(i.adId)
                }, this)
            },
            releaseAd: function(t) {
                p.release(t, this._pageNumber)
            },
            captureAd: function(t) {
                p.capture(t, this._pageNumber)
            },
            onHover: function(t, i) {
                this._sendConfirmVisibility({
                    linkTail: t.linkTail,
                    layout: i.layout,
                    isHover: !0,
                    isTitleHighlighted: t.isTitleHighlighted,
                    isBodyHighlighted: t.isBodyHighlighted
                })
            },
            getLanguage: function() {
                return this._data.common.pageLang || "1"
            },
            setAbused: function(t) {
                this._visibilityManager.abuse(t.adId)
            },
            getAdtuneUrl: function(t) {
                var i;
                return this.getUserGroup() < 6 ? i = "true" : this.getUserGroup() < 11 && (i = "false"),
                    a.addQueryParams(o.urls.adtune + encodeURIComponent(t.abuseInfo), {
                        ad: t.adId,
                        ver: Ya.codeVer,
                        blocktype: this._settings.format.name,
                        blockId: this._blockId,
                        pageId: this._pageId,
                        always: i
                    })
            },
            onConfirmVisibility: function(t, i) {
                this.isDirectInRtb() && this._visibilityManager.confirmRtb(this._settings, {
                    isApp: this.isApp(),
                    adfoxexp: this._adfoxexp
                });
                var e = a.filter(t, function(t) {
                    return this._visibilityManager.isntConfirmed(t.linkTail)
                }, this);
                if (e.length) {
                    var o = [{
                        value: "",
                        params: {}
                    }, {
                        condition: "geoDistance",
                        value: "",
                        params: {
                            isGeo: !0
                        }
                    }, {
                        condition: "geoDistanceRegular",
                        value: "",
                        params: {
                            isGeoRegular: !0
                        }
                    }, {
                        condition: "player",
                        value: "",
                        params: {
                            videoMode: this._getVideoMode()
                        }
                    }]
                        , n = {
                        layout: i.layout,
                        isTitleHighlighted: !1,
                        isBodyHighlighted: !1,
                        confirmByClick: i.confirmByClick
                    };
                    a.each(e, function(t) {
                        a.each(o, function(i) {
                            (!i.condition || i.condition && t[i.condition]) && (i.value += t.linkTail)
                        }),
                        t.isTitleHighlighted && (n.isTitleHighlighted = !0),
                        t.isBodyHighlighted && (n.isBodyHighlighted = !0)
                    }),
                        a.each(o, function(t) {
                            t.value && this._sendConfirmVisibility(a.extend({
                                linkTail: t.value
                            }, n, t.params))
                        }, this),
                        a.each(e, function(t) {
                            this._visibilityManager.confirm(t.linkTail)
                        }, this)
                }
            },
            _sendConfirmVisibility: function(t) {
                if (this.getLinkHead()) {
                    var i = this._getAuxQueryParams({
                        layout: t.layout,
                        isHover: t.isHover,
                        isGeo: t.isGeo,
                        isGeoRegular: t.isGeoRegular,
                        isTitleHighlighted: t.isTitleHighlighted,
                        isBodyHighlighted: t.isBodyHighlighted,
                        videoMode: t.videoMode,
                        confirmByClick: t.confirmByClick
                    });
                    i.wmode = "0",
                        (new Image).src = a.addQueryParams(this.getLinkHead() + t.linkTail, i)
                }
            },
            _prepareHighlight: function(t) {
                var i = /<(\/?)hl>/g
                    , e = /<\/?b>/g
                    , a = this._isNeedHighlight() ? "<$1b>" : "";
                t.title = this._prepareHighlightString(t.title).replace(i, a),
                    t.body = this._prepareHighlightString(t.body).replace(i, a),
                e.test(t.title) && (t.isTitleHighlighted = !0),
                e.test(t.body) && (t.isBodyHighlighted = !0)
            },
            _prepareHighlightString: function(t) {
                return t.replace(/<hl>(\d+)<\/hl>/g, "$1").replace(/<\/hl>(\s*)<hl>/g, "$1").replace(/<hl>([a-z\u0430-\u044f\u0451]{1,3})<\/hl>/g, "$1")
            },
            _isNeedHighlight: function() {
                return !/newVk|vk|mail/.test(this._settings.format.name)
            },
            notContainWarnings: function(t) {
                return !(t.warning || t.addInfo && "ext-distrib" === t.addInfo.type)
            },
            isDirectInRtb: function() {
                return Boolean(this._product === o.Products.DIRECT && this._settings.linkTail)
            }
        });
        t.exports = d
    }
    , function(t, i, e) {
        function a(t, i) {
            if (this._downscaleRatio = i ? 2 : 1,
                    !(t instanceof Array))
                throw new Error("Picture: \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u043c\u0430\u0441\u0441\u0438\u0432");
            if (!t.length)
                throw new Error("Picture: \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043f\u0443\u0441\u0442\u043e\u0439 \u043c\u0430\u0441\u0441\u0438\u0432");
            this._images = o.map(t, this._createDownscaled, this)
        }
        var o = e(2);
        a.prototype = {
            getFitting: function(t, i, e) {
                e = e || 0;
                var a;
                return o.each(this._images, function(o) {
                    var n = t;
                    o.width / o.height >= this.WIDE_RATIO && (n = t + t * e),
                        o = this._downscale(o, n, i, t),
                    (!a || this._isFittingBetter(o, a)) && (a = o)
                }, this),
                2 === this._downscaleRatio && this._upscale(a, t, i, this._downscaleRatio),
                    delete a.area,
                    a
            },
            WIDE_RATIO: 1.6,
            _createDownscaled: function(t) {
                return {
                    src: t[0],
                    width: Math.floor(Number(t[1]) / this._downscaleRatio),
                    height: Math.floor(Number(t[2]) / this._downscaleRatio)
                }
            },
            _isFittingBetter: function(t, i) {
                return t.area.visible > i.area.visible || t.area.visible === i.area.visible && t.area.original < i.area.original
            },
            _downscale: function(t, i, e, a) {
                return t = o.extend({
                    area: {
                        original: t.width * t.height
                    }
                }, t),
                    i = i || t.width,
                    e = e || t.height,
                    o.extend(t, o.downscale(t, {
                        width: i,
                        height: e
                    })),
                    t.area.visible = Math.min(a, t.width) * Math.min(e, t.height),
                    t
            },
            _upscale: function(t, i, e, a) {
                var o = Math.min(i / t.width, e / t.height, a);
                o > 1 && (t.width = Math.round(t.width * o),
                    t.height = Math.round(t.height * o))
            }
        },
            t.exports = a
    }
    , function(t, i, e) {
        function a(t, i) {
            this.src = t.src,
                this.width = t.width,
                this.height = t.height,
            t.thumbnails && t.thumbnails[0] && t.thumbnails[0][0] && (this.poster = t.thumbnails[0][0]),
                this.isAutoplay = i
        }
        var o = e(2);
        a.prototype = {
            getPlayer: function(t, i) {
                var e = {
                    width: this.width,
                    height: this.height
                }
                    , a = {
                    width: t,
                    height: i
                };
                return o.downscale(e, a)
            }
        },
            t.exports = a
    }
    , function(t, i) {
        var e = 36e5
            , a = {
            getDirect: function(t) {
                var i = [[4, this._getDirectMarker()], [3, Ya.codeVer % 8], [3, Ya.loaderVer % 8], [6, t.format], [1, this._isIframe], [1, t.isHover], [1, t.isGeo], [1, t.isGeoRegular], [2, t.layout], [7, t.userGroup], [1, t.isApp], [1, t.isTitleHighlighted], [1, t.isBodyHighlighted], [1, t.imageClick], [2, t.videoMode], [1, t.videoClick], [1, t.confirmByClick], [13, 0], [3, t.adfoxexp]];
                return this._joinBits(i)
            },
            getRtb: function(t) {
                var i = [[4, this._getRtbMarker()], [3, Ya.codeVer % 8], [3, Ya.loaderVer % 8], [1, this._isIframe], [1, t.isApp], [38, 0], [3, t.adfoxexp]];
                return this._joinBits(i)
            },
            _DIRECT_MARKER: 1,
            _RTB_MARKER: 2,
            _LONG_SESSION_MARKER: 15,
            _getDirectMarker: function() {
                return this._getIsValidStat() ? this._DIRECT_MARKER : this._LONG_SESSION_MARKER
            },
            _getRtbMarker: function() {
                return this._getIsValidStat() ? this._RTB_MARKER : this._LONG_SESSION_MARKER
            },
            _getIsValidStat: function() {
                return Number(new Date) - Ya.Context.initTime < e
            },
            _isIframe: window.top !== window.self,
            _joinBits: function(t) {
                for (var i, e = [], a = 0; a < t.length; a++)
                    i = this._cut(t[a][1], t[a][0]).toString(2),
                        i = this._appendZeros(t[a][0], i),
                        e.push(i);
                return this._toDecimal(e.reverse().join(""))
            },
            _cut: function(t, i) {
                return t & Math.pow(2, i) - 1
            },
            _appendZeros: function(t, i) {
                var e = t - i.length;
                return e > 0 && (i = new Array(e + 1).join("0") + i),
                    i
            },
            _toDecimal: function(t) {
                if (t.length > 53)
                    throw new Error("TestTag._toDecimal: \u0431\u043e\u043b\u044c\u0448\u0435 53 \u0431\u0438\u0442 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0438\u0437-\u0437\u0430 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u043e\u0439 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0438, \u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u0430 \u0441\u0442\u0440\u043e\u043a\u0430 \u0434\u043b\u0438\u043d\u043e\u0439 " + t.length + " \u0431\u0438\u0442.");
                return parseInt(t, 2)
            }
        };
        t.exports = a
    }
    , function(t, i, e) {
        function a(t, i) {
            p.push({
                id: t,
                pageNumber: i
            })
        }
        function o(t, i) {
            p = s.filter(p, function(e) {
                return !(e.id === t && e.pageNumber === i)
            })
        }
        function n() {
            return p.length
        }
        function r(t, i) {
            var e = i ? s.filter(p, function(t) {
                return t.pageNumber === i
            }) : p
                , a = [];
            t = t || [];
            for (var o = e.length - 1; o >= 0 && a.length < l; o--)
                -1 === s.inArray(a, p[o].id) && -1 === s.inArray(t, p[o].id) && a.push(p[o].id);
            return a
        }
        var s = e(1)
            , p = []
            , l = 1 / 0;
        t.exports = {
            capture: a,
            release: o,
            getCapturedCount: n,
            getCapturedAdIds: r
        }
    }
    , function(t, i, e) {
        function a() {
            this._confirmed = {},
                this._abused = {}
        }
        var o = e(35);
        a.prototype = {
            isntConfirmed: function(t) {
                return !this._confirmed[t]
            },
            confirm: function(t) {
                this._confirmed[t] = !0
            },
            confirmRtb: function(t, i) {
                this._rtbVisibilityManager || (this._rtbVisibilityManager = new o({
                    linkTail: t.linkTail
                }),
                    this._rtbVisibilityManager.confirm(i))
            },
            abuse: function(t) {
                this._abused[t] = !0
            },
            isAbused: function(t) {
                return Boolean(this._abused[t])
            }
        },
            t.exports = a
    }
    , function(t, i, e) {
        function a(t) {
            this._viewNotices = t.viewNotices,
                this._winNotice = t.winNotice,
                this._linkTail = t.linkTail
        }
        var o = e(1)
            , n = e(36)
            , r = e(32);
        a.prototype = {
            confirm: function(t) {
                if (!this._isConfirmSent) {
                    var i = new Image;
                    this._viewNotices && this._viewNotices.length && o.domEvent.on(i, "load", function() {
                        this._getExternalUrlManager().confirm(this._viewNotices)
                    }, this, {
                        once: !0
                    }),
                        i.src = o.addQueryParams(this._linkTail, {
                            "test-tag": r.getRtb({
                                isApp: t.isApp
                            }),
                            rnd: o.genRnd()
                        }),
                        this._isConfirmSent = !0
                }
            },
            sendWinNotice: function() {
                !this._isWinNoticeSent && this._winNotice && (this._getExternalUrlManager().confirm(this._winNotice),
                    this._isWinNoticeSent = !0)
            },
            _getExternalUrlManager: function() {
                return this._externalUrlManager || (this._externalUrlManager = n()),
                    this._externalUrlManager
            }
        },
            t.exports = a
    }
    , function(t, i, e) {
        function a() {
            var t = n.browser.support.postMessage && !n.browser.isPresto;
            t ? (this._list = [],
                this._initConfirmIframe()) : this._confirm = this._pullUrlFromIframe
        }
        function o() {
            return p || (p = new a),
                p
        }
        var n = e(1)
            , r = e(9)
            , s = e(12);
        a.prototype = {
            confirm: function(t) {
                t instanceof Array || (t = [t]),
                    n.each(t, this._confirm, this)
            },
            _CONFIRM_URL: n.format("https://st.yandexadexchange.net/confirm_r${ver}.html", {
                ver: Ya.confirmVer
            }),
            _CONFIRM_ORIGIN: "https://st.yandexadexchange.net",
            _CONFIRM_MARKER: "yaxconfirm",
            _confirm: function(t) {
                return this._isLoaded && this._iframe.contentWindow ? void this._iframe.contentWindow.postMessage(this._CONFIRM_MARKER + t, this._CONFIRM_ORIGIN) : (this._list.push(t),
                    void (this._iframe.contentWindow || this._reinitIframe()))
            },
            _reinitIframe: function() {
                n.dom.remove(this._iframe.parentNode),
                    this._isLoaded = !1,
                    this._initConfirmIframe()
            },
            _initConfirmIframe: function() {
                this._iframe = s(),
                    n.domEvent.on(this._iframe, "load", function() {
                        this._isLoaded = !0,
                            this.confirm(this._list)
                    }, this, {
                        once: !0
                    }),
                    this._iframe.src = this._CONFIRM_URL
            },
            _pullUrlFromIframe: function(t) {
                var i = s(!0)
                    , e = n.format(r.RtbIframe.CONTENT, {
                    body: '<img src="${url}" />'
                });
                n.dom.setIframeHTML(i, n.format(e, {
                    url: n.addProtocol(t)
                }))
            }
        };
        var p;
        t.exports = o
    }
    , function(t, i, e) {
        function a(t, i, e) {
            var a = {
                format: t
            };
            return e && p.extend(i, o(e)),
                r(i, a),
                a
        }
        function o(t) {
            var i = {};
            return p.forOwn(t, function(t, e) {
                p.inArray(u, e) > -1 && (i[e] = t)
            }),
                i
        }
        function n(t, i) {
            var e = t.limit;
            if (t.fixed && "adaptive" !== t.name)
                return e;
            var a = parseInt(i.limit, 10);
            return p.isInRange(a, 1, e) ? a : e
        }
        function r(t, i) {
            i.linkTail = t.linkTail,
                i.favicon = Boolean(t.favicon),
                i.noSitelinks = Boolean(t.noSitelinks),
                i.c11n = t.c11n || {},
                i.imagesFirst = Boolean(t.imagesFirst),
                i.limit = n(i.format, t),
                i.borderType = p.inArray(i.format.border, t.borderType) > -1 ? t.borderType : i.format.border[0],
                i.borderRadius = Boolean(t.borderRadius),
                i.linksUnderline = void 0 === t.linksUnderline ? !0 : Boolean(t.linksUnderline),
                p.each(u, function(e) {
                    var a = p.RGB.normalizeColorHash(t[e]);
                    null != a && (i[e] = a)
                }),
                s(t, i),
            "compact" == i.format.name && delete i.headerBgColor,
            (p.browser.isIEQuirks || p.browser.isIE7 || p.browser.isIE6) && i.borderType == d.BorderTypes.AD && (i.borderType = d.BorderTypes.COLLAPSE),
            p.browser.isPresto && i.borderRadius && i.bgColor && (i.borderRadius = !1),
            0 == i.format.name.indexOf("poster") && (i.headerBgColor = null ,
                i.borderRadius = !1,
                i.imagesFirst = !0),
            0 == i.format.name.indexOf("320x50") && (i.linksUnderline = !1),
            "adaptive" === i.format.name && (i.width = l.getValidNumber(t.width),
                i.height = l.getValidNumber(t.height)),
            "vk" === i.format.name && (i.titleColor = "#36638e",
                i.urlColor = "#36638e",
                i.hoverColor = "#36638e",
                i.bgColor = "",
                i.textColor = "#000000")
        }
        function s(t, i) {
            var e = t.fontSize
                , a = t.titleFontSize
                , o = t.fontFamily;
            i.format.fixed && (e = 1,
                a = 3,
                o = "Arial"),
            0 == i.format.name.indexOf("poster") && (e = 1),
            0 == i.format.name.indexOf("vk") && (e = null );
            var n = parseFloat(e);
            p.isInRange(n, .8, 1.2) || (n = 1),
                i.fontSize = n;
            var r = parseInt(a, 10);
            p.isInRange(r, 1, 3) || (r = 3),
                i.titleFontSize = r;
            for (var s = {
                1: [[0, 110], [1, 107]],
                2: [[0, 135], [.9, 130], [1, 126]],
                3: [[0, 144], [.9, 142], [1, 133]]
            }, l = s[r], d = 0; l[d] && l[d][0] < n; d++)
                i.titleFontSizePercent = l[d][1] + "%";
            var u = {
                arial: "sans-serif",
                "courier new": "monospace",
                tahoma: "sans-serif",
                "times new roman": "serif",
                verdana: "sans-serif"
            }
                , c = String(o || "").toLowerCase();
            c in u ? i.fontFamily = c + ", " + u[c] : i.fontFamily = null
        }
        var p = e(1)
            , l = e(25)
            , d = e(9)
            , u = ["siteBgColor", "bgColor", "borderColor", "headerBgColor", "titleColor", "textColor", "urlColor", "sitelinksColor", "hoverColor"];
        t.exports = {
            parse: a,
            getLimit: n
        }
    }
    , function(t, i, e) {
        var a = e(39)
            , o = e(40)
            , n = {
            Vertical: e(41),
            Horizontal: e(77),
            "160x600": e(78).Fixed160x600,
            "200x300": e(78).Fixed200x300,
            "250x250": e(78).Fixed250x250,
            "300x300": e(78).Fixed300x300,
            "1000x120": e(78).Fixed1000x120,
            "320x100": e(79),
            "320x50": e(80),
            "300x250": e(81),
            "336x280": e(82),
            "240x400": e(83),
            "400x240": e(86),
            "0x50": e(88),
            "320x480": e(90),
            "480x320": e(92),
            "728x90-design": e(93),
            AdapterBlockSingle: e(94),
            Compact: e(89),
            Row: e(121),
            PosterVertical: e(122).PosterVertical,
            PosterHorizontal: e(122).PosterHorizontal,
            Grid: e(126),
            Adaptive: e(127),
            Vk: e(128),
            NewVk: e(129),
            MailruVertical: e(130).MailruVertical,
            MailruHorizontal: e(130).MailruHorizontal,
            "970x250": e(131),
            "970x90": e(132)
        }
            , r = new a(n,o);
        r.register("interstitial", e(133)),
            t.exports = r
    }
    , function(t, i, e) {
        function a(t, i) {
            this._blocks = t,
                this._formatManager = i,
                this._methods = {}
        }
        var o = e(2);
        a.prototype = {
            getClass: function(t) {
                return this._blocks[o.capitalize(t)]
            },
            createFormatObject: function(t, i) {
                var e = this._formatManager.getFormatByName(t);
                return e ? {
                    constructor: i || this.getClass(e.className),
                    format: e
                } : null
            },
            build: function(t, i) {
                return this._methods[t] ? this._methods[t].call(this, i) : this.createFormatObject(t)
            },
            register: function(t, i) {
                this._methods[t] = i
            }
        },
            t.exports = a
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(9)
            , n = o.BlockTypes
            , r = o.BorderTypes
            , s = [{
            name: n.VERTICAL,
            fixed: !1,
            type: n.VERTICAL,
            border: [r.NONE, r.BLOCK, r.AD, r.COLLAPSE]
        }, {
            name: "flat",
            className: n.VERTICAL,
            fixed: !1,
            type: n.VERTICAL,
            limit: 4,
            border: [r.NONE, r.BLOCK, r.AD, r.COLLAPSE]
        }, {
            name: n.HORIZONTAL,
            fixed: !1,
            type: n.HORIZONTAL,
            limit: 4,
            border: [r.NONE, r.BLOCK, r.AD, r.COLLAPSE]
        }, {
            name: "160x600",
            fixed: !0,
            type: n.VERTICAL,
            limit: 5,
            border: [r.NONE, r.BLOCK, r.COLLAPSE]
        }, {
            name: "240x400",
            single: !0,
            fixed: !0,
            type: n.VERTICAL,
            canVideo: !0,
            limit: 2,
            border: [r.NONE, r.BLOCK, r.COLLAPSE]
        }, {
            name: "200x300",
            fixed: !0,
            type: n.VERTICAL,
            limit: 3,
            border: [r.NONE, r.BLOCK, r.COLLAPSE]
        }, {
            name: "300x300",
            fixed: !0,
            type: n.VERTICAL,
            limit: 4,
            border: [r.NONE, r.BLOCK, r.COLLAPSE]
        }, {
            name: "300x250",
            fixed: !0,
            type: n.VERTICAL,
            limit: 2,
            border: [r.NONE, r.BLOCK, r.COLLAPSE]
        }, {
            name: "250x250",
            fixed: !0,
            type: n.VERTICAL,
            limit: 3,
            border: [r.NONE, r.BLOCK, r.COLLAPSE]
        }, {
            name: "728x90",
            className: "728x90-design",
            single: !0,
            fixed: !0,
            type: n.HORIZONTAL,
            limit: 1,
            border: [r.NONE, r.BLOCK, r.COLLAPSE]
        }, {
            name: "1000x120",
            fixed: !0,
            type: n.HORIZONTAL,
            limit: 4,
            border: [r.NONE, r.BLOCK, r.COLLAPSE]
        }, {
            name: n.ROW,
            fixed: !1,
            type: n.ROW,
            limit: 1,
            skipWarnings: !0,
            skipPictures: !0,
            border: [r.NONE, r.BLOCK]
        }, {
            name: "mobile",
            className: n.VERTICAL,
            fixed: !1,
            type: n.VERTICAL,
            limit: 1,
            border: [r.NONE, r.BLOCK]
        }, {
            name: n.GRID,
            fixed: !1,
            type: n.GRID,
            limit: 4,
            border: [r.NONE, r.BLOCK, r.AD, r.COLLAPSE]
        }, {
            name: n.VK,
            fixed: !1,
            type: n.VK,
            border: [r.NONE]
        }, {
            name: "320x50",
            fixed: !0,
            type: n.HORIZONTAL,
            limit: 1,
            skipWarnings: !0,
            border: [r.NONE, r.BLOCK]
        }, {
            name: n.COMPACT,
            fixed: !1,
            type: n.COMPACT,
            limit: 1,
            skipWarnings: !0,
            skipPictures: !0,
            border: [r.NONE, r.BLOCK]
        }, {
            name: "posterVertical",
            type: n.VERTICAL,
            border: [r.AD],
            canVideo: !0
        }, {
            name: "mailruVertical",
            type: n.VERTICAL,
            border: [r.NONE]
        }, {
            name: "mailruHorizontal",
            type: n.HORIZONTAL,
            limit: 2,
            border: [r.NONE]
        }, {
            name: "posterHorizontal",
            type: n.HORIZONTAL,
            limit: 4,
            border: [r.AD],
            canVideo: !0
        }, {
            name: "320x100",
            fixed: !0,
            type: n.HORIZONTAL,
            limit: 1,
            border: [r.NONE, r.BLOCK]
        }, {
            name: "adaptive",
            fixed: !0,
            type: n.FIXED,
            border: [r.NONE, r.BLOCK, r.COLLAPSE]
        }, {
            name: "400x240",
            fixed: !0,
            type: n.FIXED,
            limit: 4,
            border: [r.NONE, r.BLOCK, r.COLLAPSE]
        }, {
            name: n.INTERNAL
        }, {
            name: "0x50",
            fixed: !0,
            type: n.COMPACT,
            limit: 1,
            skipWarnings: !0,
            border: [r.NONE, r.BLOCK]
        }, {
            name: "320x480",
            fixed: !0,
            type: n.VERTICAL,
            limit: 1,
            border: [r.NONE, r.BLOCK]
        }, {
            name: "480x320",
            fixed: !0,
            type: n.HORIZONTAL,
            limit: 1,
            border: [r.NONE, r.BLOCK]
        }, {
            name: "newVk",
            fixed: !1,
            type: n.VK,
            border: [r.NONE]
        }, {
            name: "336x280",
            fixed: !0,
            type: n.VERTICAL,
            limit: 2,
            border: [r.NONE, r.BLOCK, r.COLLAPSE]
        }, {
            name: "728x90-design",
            fixed: !0,
            type: n.HORIZONTAL,
            limit: 1,
            border: [r.NONE, r.BLOCK, r.COLLAPSE]
        }, {
            name: "300x600",
            className: "adapterBlockSingle",
            limit: 1,
            border: [r.NONE, r.BLOCK]
        }, {
            name: "300x500",
            className: "adapterBlockSingle",
            limit: 1,
            border: [r.NONE, r.BLOCK]
        }, {
            name: "970x250",
            fixed: !0,
            type: n.FIXED,
            limit: 4,
            border: [r.NONE, r.BLOCK, r.COLLAPSE]
        }, {
            name: "970x90",
            fixed: !0,
            type: n.FIXED,
            limit: 3,
            border: [r.NONE, r.BLOCK, r.COLLAPSE]
        }]
            , p = {};
        a.each(s, function(t, i) {
            t.index = i,
                t.className = t.className || t.name,
                t.limit = t.limit || o.MAX_ADS_LIMIT,
                p[t.name] = t
        }),
            t.exports = {
                getFormatByName: function(t) {
                    return p[t] || null
                }
            }
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(42)
            , n = a.augment(o, {
            classes: "yap-layout_block_vertical yap-type-vertical"
        });
        t.exports = n
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(6)
            , n = e(9)
            , r = e(43)
            , s = e(45)
            , p = e(47)
            , l = e(48)
            , d = e(75)
            , u = e(49);
        t.exports = a.augment(Object, {
            Layouts: ["wide", "medium", "narrow", "compatible"],
            _imageSizes: [{
                width: 90,
                height: 120
            }, {
                width: 80,
                height: 107
            }, {
                width: 1 / 0,
                height: 110
            }, {
                width: 90,
                height: 120
            }],
            iconSize: {
                width: 50,
                height: 50
            },
            template: e(76).layout,
            itemSelector: ".yap-layout__item",
            constructor: function(t, i, e, a, o, n) {
                this.blockId = a,
                    this.renderTo = e,
                    this._mainContId = "yap-" + this.blockId + (n ? "-" + n : ""),
                    this.dataSource = t,
                    this.settings = i,
                    this._visibilityChecker = null ,
                    this.advs = [],
                    this._innerComponents = [],
                    this._nonce = o
            },
            destructor: function() {
                this._clearInnerComponents(),
                    this.clearEvents(),
                    this.clearHTML(),
                this._styleElement && (a.dom.remove(this._styleElement),
                    this._styleElement = null ),
                this.advs.length && a.each(this.advs, function(t) {
                    this.dataSource.releaseAd(t.adId)
                }, this)
            },
            _clearInnerComponents: function() {
                a.each(this._innerComponents, function(t) {
                    t.destructor ? t.destructor() : t.destroy && t.destroy()
                }),
                    this._innerComponents = []
            },
            clearHTML: function() {
                var t = this.getMainCont();
                t && a.dom.remove(t)
            },
            clearEvents: function() {
                this._visibilityChecker && this._visibilityChecker.clear()
            },
            getMainCont: function() {
                return this._mainCont
            },
            _grabClasses: function() {
                var t = (this._grabPrototypeChain("classes").join(" ") + " " + (this.classes || "")).split(" ")
                    , i = {};
                return a.each(t, function(t) {
                    i[t] = 1
                }),
                    a.keys(i).reverse().join(" ")
            },
            _getHtml: function() {
                return this.prepareImages(this.templData),
                    this.sortByImages(this.templData),
                    this.prepareData(this.templData),
                    this.compiledHtml = this.template(this.templData),
                    this.compiledHtml
            },
            sortByImages: function(t) {
                this.dataSource.doSortByImages() && t.ads.sort(function(t, i) {
                    return !t.image - !i.image
                })
            },
            prepareData: function(t) {
                a.each(t.ads, function(t) {
                    t.title = a.prettify(t.title),
                        t.body = a.prettify(t.body, {
                            gluePrepositions: !t.images
                        }),
                    t.sitelinks && a.each(t.sitelinks, function(t) {
                        t.title = a.prettify(t.title)
                    }),
                        this._addHyphenate(t)
                }, this)
            },
            getImageSize: function() {
                var t = a.extend({}, this._imageSizes[this.layout]);
                return this.layout === n.Layouts.NARROW ? t.height = Math.max(t.height * this._getFontRatio(), t.height) : this._getShouldEnlargeImage() && this._tryToEnlarge(t),
                    t
            },
            _getShouldEnlargeImage: function() {
                return a.browser.isIE && a.browser.ieVersion < 9 ? !1 : (this.settings.format.name === n.BlockTypes.VERTICAL || "flat" === this.settings.format.name) && this.layout === n.Layouts.WIDE
            },
            _tryToEnlarge: function(t) {
                var i = Math.min(112, 150, t.width * this._getFontRatio(), Math.floor(this.getWidth() / 3));
                i > t.width && (t.height *= i / t.width,
                    t.width = i)
            },
            prepareAds: function(t, i) {
                return a.map(t, function(t) {
                    return this.dataSource.prepareAd(t, i)
                }, this)
            },
            _getFontRatio: function() {
                var t = 13
                    , i = a.dom.getComputedFontSize(a.dom("#" + this.renderTo));
                return i ? i * this._getFontSize() / t : 1
            },
            prepareImages: function(t) {
                var i = this.getImageSize();
                a.each(t.ads, function(t) {
                    t.image && (t.picture = t.image.getFitting(i.width, i.height, i.wideWidthLoss),
                        t.picture.placeholder = {
                            width: i.width === 1 / 0 ? "100%" : Math.min(i.width, t.picture.width) + "px",
                            height: Math.min(i.height, t.picture.height) + "px"
                        }),
                        this.prepareAppIcon(t)
                }, this)
            },
            prepareAppIcon: function(t) {
                t.icon && (t.iconPicture = t.icon.getFitting(this.iconSize.width, this.iconSize.height))
            },
            _getCss: function() {
                var t = ["reset", "direct", "adtune"]
                    , i = "";
                return a.each(t, function(t) {
                    i += p[t]({
                        block: this,
                        id: this._mainContId,
                        isYandexPage: this.dataSource.isYandexPage(),
                        settings: this.settings
                    })
                }, this),
                    i
            },
            appendBlock: function() {
                var t = this._getCss()
                    , i = this._getHtml();
                this.insertCSS(t),
                    this.insertHtml(i)
            },
            insertCSS: function(t) {
                this._styleElement = a.dom.appendStyle(t, this._nonce)
            },
            insertHtml: function(t) {
                var i = a.dom("#" + this.renderTo);
                i.innerHTML = t,
                    this._mainCont = a.dom("." + this._mainContId, i)[0]
            },
            _grabPrototypeChain: function(t, i) {
                for (var e = this.constructor.prototype.hasOwnProperty(t) ? [this.constructor.prototype[t]] : [], a = this.constructor.__super; a; )
                    a.hasOwnProperty(t) && (e.push(a[t]),
                    i && delete a[t]),
                        a = a.constructor.__super;
                return i && delete this.constructor.prototype[t],
                    e
            },
            createHoverListener: function() {
                new a.HoverChecker(300).onConfirmed(o.protect("AdvBlock: onHover", this._onHover, this)).listen(a.dom(this.itemSelector, this.getMainCont()))
            },
            createVisibilityChecker: function() {
                this._visibilityChecker = new a.VisibilityChecker(n.VISIBILITY_TIME).onConfirmed(o.protect("AdvBlock: onConfirmed", this._onConfirmVisibility, this)).listen(this.getMainCont())
            },
            _hideAbusedAd: function(t) {
                a.each(a.dom(this.itemSelector, this.getMainCont()), function(i) {
                    if (t == i.getAttribute("data-id")) {
                        var e = a.filter(this.advs, function(i) {
                            return i.adId == t
                        })[0];
                        this.dataSource.setAbused(e);
                        var o = this.settings.format.type == n.BlockTypes.HORIZONTAL || this.settings.format.type == n.BlockTypes.GRID;
                        if (o) {
                            var r = a.dom(".yap-adtune-message", i)[0];
                            a.dom.setImportantCssProperty(r, "min-height", i.clientHeight + "px")
                        }
                        a.dom.addClass(i, "yap-layout__item_abused")
                    }
                }, this)
            },
            createTemplObj: function(t) {
                var i = this.dataSource.getTitle();
                return {
                    ads: a.deepCopy(t),
                    block: this,
                    classes: this._grabClasses(),
                    id: this._mainContId,
                    yaUrl: i.url,
                    yaTitle: i.title,
                    settings: this.settings,
                    format: this.settings.format,
                    layout: this.Layouts[this.layout],
                    language: this.dataSource.getLanguage()
                }
            },
            getColumns: function() {
                return 1
            },
            getWidth: function() {
                var t = a.dom("#" + this.renderTo);
                return t.clientWidth || n.Layouts.COMPATIBLE_WIDTH
            },
            getLayout: function() {
                var t = this.getWidth();
                if (t == n.Layouts.COMPATIBLE_WIDTH)
                    return n.Layouts.COMPATIBLE;
                var i = t / this.getColumns() / this._getFontSize();
                return i < n.Layouts.MEDIUM_WIDTH ? n.Layouts.NARROW : i < n.Layouts.WIDE_WIDTH ? n.Layouts.MEDIUM : n.Layouts.WIDE
            },
            _getFontSize: function() {
                return this.settings.fontSize || 1
            },
            getAdsByLimit: function(t) {
                return t.slice(0, this.settings.limit)
            },
            render: function() {
                var t = this.dataSource.getFreeAds();
                this._isSkipWarnings() && (t = a.filter(t, this.dataSource.notContainWarnings)),
                t.length && a.dom("#" + this.renderTo) && (this.advs = this.getAdsByLimit(t),
                    this.layout = this.getLayout(),
                    this.advs = this.prepareAds(this.advs, {
                        layout: this.layout,
                        format: this.settings.format
                    }),
                    this.templData = this.createTemplObj(this.advs),
                    this.appendBlock(),
                    a.each(this.advs, function(t) {
                        this.dataSource.captureAd(t.adId)
                    }, this),
                    this.createVisibilityChecker(),
                    this.createHoverListener(),
                    this.afterRender(),
                    this.setAdtuneVisiblity())
            },
            afterRender: function() {
                this.initBannerComponents(),
                    this._removeBrokenFavicons()
            },
            initBannerComponents: function() {
                var t = this.getMainCont()
                    , i = a.dom(this.itemSelector, t);
                a.each(i, function(t) {
                    var i = t.getAttribute("data-uniq-id")
                        , e = this.getAdByUniqId(i)
                        , a = this.getBannerAdClass(e);
                    this._innerComponents.push(new a(t,e,this)),
                        this._initAdtune(t, e)
                }, this)
            },
            _initAdtune: function(t, i) {
                if (i.adtuneUrl && !this.dataSource.isApp()) {
                    var e = new d({
                        language: this.dataSource.getLanguage()
                    })
                        , o = new l({
                        language: this.dataSource.getLanguage(),
                        isOldIE: a.browser.isIEQuirks || a.browser.ieVersion < 9,
                        url: i.adtuneUrl,
                        isPlainLink: this.dataSource.isSSP(),
                        adId: i.adId
                    })
                        , n = a.dom(".yap-layout__adtune-message", t)[0];
                    n && u.renderToNode(n, e);
                    var r = a.dom(".yap-layout__adtune", t)[0];
                    r && u.renderToNode(r, o),
                        this._innerComponents.push(e),
                        this._innerComponents.push(o),
                        o.on("windowOpened", function() {
                            this.fireInnerComponents("openAdtuneWindow")
                        }, this),
                        o.on("adAbused", function() {
                            this._hideAbusedAd(i.adId)
                        }, this)
                }
            },
            getBannerAdClass: function(t) {
                return t.isExtDistrib ? s : r
            },
            _removeBrokenFavicons: function() {
                a.each(a.dom(".yap-favicon", this.getMainCont()), function(t) {
                    var i = new Image;
                    a.domEvent.on(i, "error", function() {
                        a.dom.remove(t)
                    }),
                        a.domEvent.on(i, "load", function() {
                            16 != i.width && 32 != i.width && a.dom.remove(t)
                        }),
                        i.src = t.src
                })
            },
            setAdtuneVisiblity: function() {
                var t = a.dom(".yap-layout", this.getMainCont())[0];
                t && (a.browser.support.touch || a.browser.isIEQuirks || a.browser.isIE7 || a.browser.isIE6 || !(this.advs.length > 1 && a.dom.hasClass(t, "yap-layout_block_vertical"))) && a.dom.addClass(t, "yap-layout_adtune-always-visible")
            },
            _onHover: function(t) {
                var i = a.filter(this.advs, function(i) {
                    return i.adId == t
                })[0];
                i && this.dataSource.onHover(i, {
                    layout: this.layout
                })
            },
            _onConfirmVisibility: function(t) {
                this.dataSource.onConfirmVisibility(this.advs, {
                    layout: this.layout,
                    confirmByClick: t
                })
            },
            _addHyphenate: function(t) {
                this.isNeedHyphenate() && (t.title = a.addHyphenate(t.title, t.titleHyph),
                    t.body = a.addHyphenate(t.body, t.bodyHyph))
            },
            isNeedHyphenate: function() {
                return void 0 === this._needHyphenate && (this._needHyphenate = this.getWidth() / this.getColumns() <= 200),
                    this._needHyphenate
            },
            getAdByUniqId: function(t) {
                return a.filter(this.advs, function(i) {
                    return i.uniqId == t
                })[0]
            },
            fireInnerComponents: function(t) {
                var i = a.camelize("on-" + t)
                    , e = Array.prototype.slice.call(arguments, 1);
                a.each(this._innerComponents, function(t) {
                    "function" == typeof t[i] && t[i].apply(t, e)
                })
            },
            _isSkipWarnings: function() {
                return this.settings.format.skipWarnings
            },
            getTesttag: function() {
                return this.dataSource.getTesttag({
                    layout: this.layout
                })
            }
        })
    }
    , function(t, i, e) {
        var a = e(6)
            , o = e(1)
            , n = e(9)
            , r = e(44);
        t.exports = o.augment(r, {
            init: function(t, i, e) {
                this._element = t,
                    this._ad = i,
                    this._parent = e,
                    this.initAdtuneSSPHandler()
            },
            initAdtuneSSPHandler: function() {
                this.on(o.dom(".yap-adtune__link", this._element), "click", this.onClickToAdtune)
            },
            onClickToAdtune: function(t) {
                t.stopPropagation(),
                    t.clickToAdtune = !0,
                o.browser.support.postMessage || a.setProtectedTimeout(function() {
                    this._parent._hideAbusedAd(this._ad.adId)
                }, n.adtuneWindow.fallbackDelay, this),
                    this._parent.fireInnerComponents("openAdtuneWindow")
            },
            go: function() {
                for (var t = 0; t < this._innerComponents.length; t++) {
                    var i = this._innerComponents[t]
                        , e = i.onGo;
                    if ("function" == typeof e) {
                        var a = e.apply(i, arguments);
                        if (a === !1)
                            return !1
                    }
                }
                return this.onGo.apply(this, arguments)
            },
            onGo: function() {
                return !0
            }
        })
    }
    , function(t, i, e) {
        function a() {
            this._events = [],
                this._innerComponents = [],
                this.init.apply(this, arguments)
        }
        var o = e(1);
        a.prototype = {
            init: function() {},
            destroy: function() {},
            destructor: function() {
                this._clearEvents(),
                    this._clearInnerComponents(),
                    this.destroy()
            },
            _clearInnerComponents: function() {
                o.each(this._innerComponents, function(t) {
                    t.destructor()
                }),
                    this._innerComponents = []
            },
            _clearEvents: function() {
                o.each(this._events, function(t) {
                    t.un()
                }),
                    this._events = []
            },
            addComponent: function(t) {
                this._innerComponents.push(t)
            },
            on: function(t, i, e) {
                o.isArray(t) ? o.each(t, function(t) {
                    this._events.push(o.domEvent.on(t, i, e, this))
                }, this) : this.on([t], i, e)
            }
        },
            t.exports = a
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(43)
            , n = e(46)
            , r = a.augment(o, {
            init: function(t, i, e) {
                r.__super.init.apply(this, arguments),
                    this.addComponent(new n(t,i,e)),
                    this.initListeners()
            },
            initListeners: function() {
                this._element.href ? this.on(this._element, "click", this._onClick) : this.on(a.dom("a", this._element), "click", this._onClick)
            },
            _onClick: function(t) {
                var i = t.currentTarget;
                i.href && (this.go(i.href) || t.preventDefault())
            }
        });
        t.exports = r
    }
    , function(t, i, e) {
        var a = e(6)
            , o = e(1)
            , n = e(44)
            , r = window.parent;
        t.exports = o.augment(n, {
            init: function(t, i, e) {
                this._element = t,
                    this._ad = i,
                    this._parent = e,
                    this._appendWebstoreLink(i.addInfo.extension.link),
                    this._initAnalytics(i.addInfo.analytics)
            },
            destroy: function() {
                o.dom.remove(this._frame),
                    o.dom.remove(this._chromeLink)
            },
            _appendWebstoreLink: function(t) {
                var i = document.createElement("link");
                i.href = t,
                    i.rel = "chrome-webstore-item",
                    r.document.head.appendChild(i),
                    this._chromeLink = i
            },
            onGo: function(t) {
                return this.isEqualLink(t, this._ad.url) || this.isEqualLink(t, this._ad.clickImageUrl) ? (this._parent.fireInnerComponents("go-block", this),
                    this._install(),
                    !1) : void 0
            },
            _install: function() {
                var t = this._ad.addInfo
                    , i = this;
                (new Image).src = this._ad.url,
                    r.chrome.webstore.install(t.extension.link, a.protect("ExtDistrib:success", function() {
                        this._goal(t.analytics.goals.install, function() {
                            i._redirect(t.successUrl)
                        })
                    }, this), a.protect("ExtDistrib:cancel", function(i, e) {
                        "userCancelled" === e ? this._goal(t.analytics.goals.cancel) : (a.remoteLog("Webstore installation error: " + i),
                            this._redirect(t.extension.link))
                    }, this))
            },
            _redirect: function(t) {
                t && window.open(t)
            },
            _initAnalytics: function(t) {
                this._appendFrame(t.url),
                    o.domEvent.on(this._frame, "load", function() {
                        this._sendToFrame({
                            counters: t.counters,
                            url: location.href,
                            referrer: document.referrer || ""
                        })
                    }, this, {
                        once: !0
                    })
            },
            _appendFrame: function(t) {
                var i = document.createElement("iframe");
                i.style.display = "none",
                    i.setAttribute("src", t),
                    document.body.appendChild(i),
                    this._frame = i
            },
            _sendToFrame: function(t) {
                this._frame.contentWindow.postMessage(JSON.stringify(t), "*")
            },
            _goal: function(t, i) {
                function e() {
                    n.un(),
                    "function" == typeof i && i()
                }
                function a(t) {
                    this.isEqualLink(this._frame.getAttribute("src"), t.origin) && e()
                }
                var n = o.domEvent.on(window, "message", a, this);
                this._sendToFrame({
                    goal: {
                        name: t
                    }
                }),
                    setTimeout(function() {
                        e()
                    }, 1e3)
            },
            isEqualLink: function(t, i) {
                return t.indexOf(i) > -1
            }
        })
    }
    , function(module, exports, __webpack_require__) {
        var util = __webpack_require__(1)
            , Const = __webpack_require__(9)
            , reset = (__webpack_require__(6),
                    function(obj) {
                        var p = [];
                        with (obj)
                            p.push(".", id, ",.", id, " yatag{display:block!important;box-sizing:content-box!important}.", id, ",.", id, " a,.", id, " b,.", id, " em,.", id, " img,.", id, " table,.", id, " tbody,.", id, " tr,.", id, " td{font-size:inherit!important;text-align:left!important;background:0 0!important;border:none!important;border-radius:0!important;border-spacing:0!important;border-collapse:collapse!important;box-sizing:content-box!important;clear:none!important;float:none!important;font-variant:normal!important;font-weight:400!important;height:auto!important;letter-spacing:normal!important;line-height:normal!important;margin:0!important;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;outline:none!important;padding:0!important;position:static!important;text-decoration:none!important;text-indent:0!important;text-transform:none!important;vertical-align:baseline!important;visibility:visible!important;word-spacing:normal!important;-webkit-border-radius:0!important;-moz-border-radius:0!important;-ms-border-radius:0!important;-o-border-radius:0!important}.", id, " table{display:table!important;empty-cells:hide!important;font-size:100%!important;table-layout:fixed!important}.", id, " td{display:table-cell!important;font-size:100%!important;vertical-align:middle!important}");
                        return p.join("")
                    }
            )
            , direct = function(obj) {
                var p = [];
                with (obj)
                    p.push("#", id, " .yap-layout_block_vertical .yap-title-block{display:block!important}#", id, " .yap-layout_block_poster .yap-title-block,#", id, " .yap-layout_block_mailru .yap-title-block{display:inline!important}#", id, " .yap-type-vertical .yap-logo{position:static!important}#", id, " .yap-layout_block_row .yap-logo{top:0!important}.", id, "{overflow:visible!important;white-space:normal!important;width:100%!important;font-size:", settings.fontSize ? 100 * settings.fontSize + "%" : "", "!important;color:", settings.textColor || "#000000", "!important;font-family:", settings.fontFamily || "inherit", "!important;position:relative!important;z-index:1!important}.", id, " .yap-layout{overflow:hidden!important;position:relative!important;z-index:1!important}.", id, " .yap-layout_block_0x50{font-size:13px!important}.", id, " .yap-layout__items{width:100%!important;border-collapse:", settings.borderType == Const.BorderTypes.AD ? "separate" : "collapse", "!important}.", id, " .yap-layout__outer{position:relative!important;z-index:1!important;zoom:1!important}.", id, " .yap-layout__inner{overflow:hidden!important;width:", util.browser.isIEQuirks ? "100%" : "auto", "!important;padding:.7em!important}.", id, " .yap-layout_type_medium .yap-layout__inner{padding:.6em .1em .6em .6em!important}.", id, " .yap-layout_type_medium .yap-layout__warning{margin-right:.4em!important}.", id, " .yap-layout__body{margin-top:", settings.linksUnderline ? "0.38em" : "0.23em", "!important}.", id, " .yap-layout__sitelinks,.", id, " .yap-layout__schedule,.", id, " .yap-layout__warning{margin-top:.23em!important}.", id, " .yap-layout__adtune{display:none!important;position:absolute!important;right:1px!important;top:1px!important;cursor:pointer!important;z-index:10!important}.", id, " .yap-layout_adtune-always-visible .yap-layout__adtune{display:block!important}.", id, " .yap-layout__item:hover .yap-layout__adtune{display:block!important}.", id, " .yap-layout__adtune-message{display:none!important}.", id, " .yap-layout__item_abused .yap-layout__inner,.", id, " .yap-layout__item_abused .yap-layout__inner *{visibility:hidden!important}.", id, " .yap-layout__item_abused .yap-layout__adtune-message{display:block!important}.", id, " .yap-layout__picture-rating{margin-top:.23em!important}.", id, " .yap-layout__app{margin-top:.6em!important}.", id, " .yap-layout_block_fixed .yap-layout__app{margin-top:.4em!important}.", id, " .yap-layout_block_fixed.yap-layout_block_single.yap-layout_block_horizontal .yap-layout__app{margin:2px 0 0!important}.", id, " .yap-layout_block_320x50 .yap-layout__app{margin-top:0!important;padding-bottom:.2em!important}.", id, " .yap-layout_hide_app .yap-layout__app{display:none!important}.", id, " .yap-layout_block_fixed.yap-layout_type_narrow .yap-layout__app{padding-right:", settings.borderType == Const.BorderTypes.NONE ? 5 : 4, "px!important;text-align:center!important}.", id, " .yap-layout_block_fixed.yap-layout_block_single.yap-layout_block_vertical .yap-layout__app{padding-right:0!important;margin:10px 0 0!important}.", id, " .yap-layout_block_0x50 .yap-layout__extra{margin-top:-1px!important}.", id, " .yap-layout_block_320x50 .yap-layout__item_adtune .yap-layout__title{margin-right:14px!important}.", id, " .yap-layout__wrapper{background:", settings.bgColor && settings.borderType != Const.BorderTypes.AD ? settings.bgColor : "transparent", "!important;border-width:", settings.borderType == Const.BorderTypes.BLOCK || settings.borderType == Const.BorderTypes.COLLAPSE ? "1px" : 0, "!important;border-color:", settings.borderColor || "#FEEBC8", "!important;border-style:solid!important;border-radius:", settings.borderRadius ? "4px" : 0, "!important;position:relative!important;z-index:1!important;-webkit-border-radius:", settings.borderRadius ? "4px" : 0, "!important;-moz-border-radius:", settings.borderRadius ? "4px" : 0, "!important;-ms-border-radius:", settings.borderRadius ? "4px" : 0, "!important;-o-border-radius:", settings.borderRadius ? "4px" : 0, "!important}.", id, " .yap-layout_block_horizontal .yap-layout__wrapper{margin-right:", settings.borderType == Const.BorderTypes.AD ? "-10px" : "", "!important}.", id, " .yap-layout_block_grid .yap-layout__wrapper{margin-right:", settings.borderType == Const.BorderTypes.AD ? "-10px" : "", "!important}.", id, " .yap-layout_block_fixed-vertical .yap-layout__wrapper{height:", block.height - (settings.borderType == Const.BorderTypes.NONE ? 0 : 2) - 16, "px!important}.", id, " .yap-layout_block_fixed-horizontal .yap-layout__wrapper{margin-left:17px!important;width:", block.width - (settings.borderType == Const.BorderTypes.NONE ? 0 : 2) - 17, "px!important;height:", block.height - (settings.borderType == Const.BorderTypes.NONE ? 0 : 2), "px!important}.", id, " .yap-layout_block_0x50 .yap-layout__wrapper{padding-left:17px!important;border:none!important;background:0 0!important}.", id, " .yap-layout__logo{display:inline-block!important;padding-left:.7em!important;box-sizing:border-box!important;background:", settings.headerBgColor || "transparent", "!important}.", id, " .yap-layout_type_medium .yap-layout__logo{padding-left:.6em!important}.", id, " .yap-layout_block_fixed-vertical .yap-layout__logo{padding-left:5px!important}.", id, " .yap-layout_block_fixed-horizontal .yap-layout__logo{overflow:hidden!important;position:absolute!important;left:0!important;top:0!important;width:17px!important;height:100%!important;padding:0!important}.", id, " .yap-layout_block_compact .yap-layout__logo{z-index:1!important;position:relative!important;float:left!important;margin-right:.5em!important;padding-left:.4em!important}.", id, " .yap-layout_block_0x50 .yap-layout__logo{overflow:hidden!important;position:absolute!important;left:0!important;top:0!important;width:17px!important;height:100%!important;padding:0!important;margin:0!important}.", id, " .yap-layout_block_compact .yap-layout__item_abused .yap-layout__logo,.", id, " .yap-layout_block_compact .yap-layout__item_abused .yap-layout__logo *{visibility:visible!important}.", id, " .yap-layout_block_row .yap-layout__logo{float:none!important;display:inline-block!important;vertical-align:", util.browser.isIE7 || util.browser.isIEQuirks ? "bottom" : "", "!important}.", id, " .yap-layout_block_mailru .yap-layout__logo{padding:.4em .8em!important;font-size:120%!important;color:#666!important;background:0 0!important}.", id, " .yap-layout__item{vertical-align:top!important;border-width:", settings.borderType == Const.BorderTypes.AD ? "1px" : 0, "!important;border-color:", settings.borderColor || "#FEEBC8", "!important;border-style:solid!important;border-radius:", settings.borderRadius && settings.borderType == Const.BorderTypes.AD ? "4px" : 0, "!important;background:", settings.bgColor && settings.borderType == Const.BorderTypes.AD ? settings.bgColor : "transparent", "!important;-webkit-border-radius:", settings.borderRadius && settings.borderType == Const.BorderTypes.AD ? "4px" : 0, "!important;-moz-border-radius:", settings.borderRadius && settings.borderType == Const.BorderTypes.AD ? "4px" : 0, "!important;-ms-border-radius:", settings.borderRadius && settings.borderType == Const.BorderTypes.AD ? "4px" : 0, "!important;-o-border-radius:", settings.borderRadius && settings.borderType == Const.BorderTypes.AD ? "4px" : 0, "!important}.", id, " .yap-layout__item_abused{background:#fff!important}.", id, " .yap-layout_block_vertical .yap-layout__item{border-bottom-width:", settings.borderType == Const.BorderTypes.COLLAPSE || settings.borderType == Const.BorderTypes.AD ? "1px" : "", "!important}.", id, " .yap-layout_block_vertical tr:last-child .yap-layout__item{border-bottom-width:", settings.borderType == Const.BorderTypes.COLLAPSE ? 0 : "", "!important}.", id, " .yap-layout_block_horizontal .yap-layout__item{width:", (100 / block.advs.length).toFixed(2), "%!important;border-right-width:", settings.borderType == Const.BorderTypes.COLLAPSE || settings.borderType == Const.BorderTypes.AD ? "1px" : 0, "!important}.", id, " .yap-layout_block_horizontal .yap-layout__item:last-child{border-right-width:", settings.borderType == Const.BorderTypes.COLLAPSE ? 0 : "", "!important}.", id, " .yap-layout_block_grid .yap-layout__item{width:", (200 / block.advs.length).toFixed(2), "%!important}.", id, " .yap-layout_block_grid .yap-layout__item_nth_1,.", id, " .yap-layout_block_grid .yap-layout__item_nth_2{border-bottom-width:", settings.borderType == Const.BorderTypes.COLLAPSE ? "1px" : "", "!important}.", id, " .yap-layout_block_grid .yap-layout__item_nth_1,.", id, " .yap-layout_block_grid .yap-layout__item_nth_3{border-right-width:", settings.borderType == Const.BorderTypes.COLLAPSE ? "1px" : "", "!important}.", id, " .yap-layout_block_fixed-vertical .yap-layout__item{vertical-align:middle!important}.", id, " .yap-layout_block_compact .yap-layout__item{overflow:hidden!important;padding:.1539em 15px .1539em .1539em!important}.", id, " .yap-layout_block_poster .yap-layout__item{tap-highlight-color:rgba(0,0,0,0)!important;outline:none!important;-webkit-tap-highlight-color:rgba(0,0,0,0)!important;-moz-tap-highlight-color:rgba(0,0,0,0)!important;-ms-tap-highlight-color:rgba(0,0,0,0)!important;-o-tap-highlight-color:rgba(0,0,0,0)!important}.", id, " .yap-layout_block_poster .yap-layout__item_picture_true{cursor:pointer!important}.", id, " .yap-layout_block_poster .yap-layout__item_picture_false{background-color:", settings.bgColor || "#fff", "!important}.", id, " .yap-layout_block_poster .yap-layout__item_abused{background:#fff!important}.", id, " .yap-layout_block_0x50 .yap-layout__item{height:", settings.borderType == Const.BorderTypes.NONE ? 50 : 48, "px!important;border-width:", settings.borderType == Const.BorderTypes.BLOCK || settings.borderType == Const.BorderTypes.COLLAPSE ? "1px" : 0, "!important;border-color:", settings.borderColor || "#FEEBC8", "!important;border-style:solid!important;border-radius:", settings.borderType !== Const.BorderTypes.NONE && settings.borderRadius ? "4px" : 0, "!important;background:", settings.bgColor && settings.borderType != Const.BorderTypes.AD ? settings.bgColor : "transparent", "!important;padding:0 15px 0 0!important;-webkit-border-radius:", settings.borderType !== Const.BorderTypes.NONE && settings.borderRadius ? "4px" : 0, "!important;-moz-border-radius:", settings.borderType !== Const.BorderTypes.NONE && settings.borderRadius ? "4px" : 0, "!important;-ms-border-radius:", settings.borderType !== Const.BorderTypes.NONE && settings.borderRadius ? "4px" : 0, "!important;-o-border-radius:", settings.borderType !== Const.BorderTypes.NONE && settings.borderRadius ? "4px" : 0, "!important}.", id, " .yap-layout_block_0x50 .yap-layout__item.yap-layout__item_picture_false{padding-left:5px!important}.", id, " .yap-layout_block_single240x400 .yap-contacts__item_domain{padding-right:0!important}.", id, " .yap-layout_type_wide .yap-layout__picture,.", id, " .yap-layout_type_medium .yap-layout__picture,.", id, " .yap-layout_type_compatible .yap-layout__picture{float:left!important;padding-right:.7em!important}.", id, " .yap-layout_type_medium .yap-layout__picture{padding-right:.6em!important}.", id, " .yap-layout_type_narrow .yap-layout__picture{padding-bottom:.7em!important;margin:0 auto!important}.", id, " .yap-layout_block_fixed.yap-layout_type_wide .yap-layout__picture,.", id, " .yap-layout_block_fixed.yap-layout_type_medium .yap-layout__picture,.", id, " .yap-layout_block_fixed.yap-layout_type_compatible .yap-layout__picture{padding-right:5px!important}.", id, " .yap-layout_block_fixed.yap-layout_block_adaptive .yap-layout__picture{padding-right:6px!important}.", id, " .yap-layout_block_fixed.yap-layout_type_narrow .yap-layout__picture{padding-bottom:5px!important;position:relative!important;left:-2px!important}.", id, " .yap-layout_block_fixed.yap-layout_block_adaptive.yap-layout_type_narrow .yap-layout__picture{padding:0 0 7px!important;left:0!important}.", id, " .yap-layout_block_fixed.yap-layout_block_320x50 .yap-layout__picture{padding:0!important;overflow:hidden!important;border-radius:", settings.borderRadius ? "3px 0 0 3px" : 0, "!important;-webkit-border-radius:", settings.borderRadius ? "3px 0 0 3px" : 0, "!important;-moz-border-radius:", settings.borderRadius ? "3px 0 0 3px" : 0, "!important;-ms-border-radius:", settings.borderRadius ? "3px 0 0 3px" : 0, "!important;-o-border-radius:", settings.borderRadius ? "3px 0 0 3px" : 0, "!important}.", id, " .yap-layout_type_narrow.yap-layout_block_single_vertical .yap-layout__picture{padding-bottom:12px!important;margin:0!important;text-align:center!important;width:auto!important;left:0!important}.", id, " .yap-layout_type_narrow.yap-layout_block_single_vertical.yap-layout_block_single_small .yap-layout__picture{padding-bottom:8px!important}.", id, " .yap-layout_block_poster .yap-layout__picture{float:none!important;display:block!important;padding:0!important;margin-bottom:0!important;margin-right:0!important;background-position:center center!important;background-repeat:no-repeat!important;background-size:contain!important;box-shadow:inset 0 0 0 1px rgba(0,0,0,.1)!important;border:", util.browser.isIEQuirks || util.browser.isIE6 || util.browser.isIE7 || util.browser.isIE7 ? "1px solid #ddd" : "none", "!important;position:absolute!important;z-index:2!important;left:50%!important;top:50%!important;-webkit-background-size:contain!important;-moz-background-size:contain!important;-ms-background-size:contain!important;-o-background-size:contain!important;-webkit-box-shadow:inset 0 0 0 1px rgba(0,0,0,.1)!important;-moz-box-shadow:inset 0 0 0 1px rgba(0,0,0,.1)!important;-ms-box-shadow:inset 0 0 0 1px rgba(0,0,0,.1)!important;-o-box-shadow:inset 0 0 0 1px rgba(0,0,0,.1)!important}.", id, " .yap-layout_block_poster .yap-layout__picture_plain{border:none!important;box-shadow:none!important;-webkit-box-shadow:none!important;-moz-box-shadow:none!important;-ms-box-shadow:none!important;-o-box-shadow:none!important}.", id, " .yap-layout_block_mailru .yap-layout__picture{padding-right:.6em!important}.", id, " .yap-layout_block_0x50 .yap-layout__picture{overflow:hidden!important;float:left!important;margin:-2px ", settings.borderType === Const.BorderTypes.NONE ? "6px" : "5px", " -2px 0!important;border-radius:", settings.borderType !== Const.BorderTypes.NONE && settings.borderRadius ? "3px 0 0 3px" : 0, "!important;-webkit-border-radius:", settings.borderType !== Const.BorderTypes.NONE && settings.borderRadius ? "3px 0 0 3px" : 0, "!important;-moz-border-radius:", settings.borderType !== Const.BorderTypes.NONE && settings.borderRadius ? "3px 0 0 3px" : 0, "!important;-ms-border-radius:", settings.borderType !== Const.BorderTypes.NONE && settings.borderRadius ? "3px 0 0 3px" : 0, "!important;-o-border-radius:", settings.borderType !== Const.BorderTypes.NONE && settings.borderRadius ? "3px 0 0 3px" : 0, "!important}.", id, " .yap-layout__icon{display:block!important}.", id, " .yap-layout__icon-img{display:block!important;width:100%!important;height:auto!important}.", id, " .yap-layout_block_320x480 .yap-layout__icon,.", id, " .yap-layout_block_single_vertical .yap-layout__icon{position:relative!important;width:60px!important;height:60px!important;margin:-55px auto 12px!important}.", id, " .yap-layout_block_320x480 .yap-layout__icon{width:82px!important;height:82px!important;margin:-75px auto 12px!important}.", id, " .yap-layout_block_single_vertical.yap-layout_shift_icon .yap-layout__icon{margin-top:-79px!important;padding:7px 7px 0!important}.", id, " .yap-layout_type_wide .yap-layout__content,.", id, " .yap-layout_type_medium .yap-layout__content{overflow:hidden!important}.", id, " .yap-layout__item_picture_false .yap-layout__content{overflow:visible!important}.", id, " .yap-layout_type_wide .yap-layout__item_age .yap-layout__content,.", id, " .yap-layout_type_medium .yap-layout__item_age .yap-layout__content{padding-bottom:1px!important}.", id, " .yap-layout_block_adaptive .yap-layout__content{zoom:1!important}.", id, " .yap-layout_block_320x50 .yap-layout__content{padding:2px 1px 1px 5px!important}#", id, " .yap-layout_block_single .yap-layout__content{font-size:15px!important}#", id, " .yap-layout_block_single.yap-layout_block_single_medium .yap-layout__content{font-size:14px!important}#", id, " .yap-layout_block_single.yap-layout_block_single_small .yap-layout__content{font-size:13px!important}.", id, " .yap-layout_type_narrow.yap-layout_block_single_vertical .yap-layout__content{text-align:center!important}#", id, " .yap-layout_block_compact .yap-layout__content{overflow:hidden!important}.", id, " .yap-layout_block_row .yap-layout__content{display:inline!important;margin-left:.6em!important;text-overflow:ellipsis!important;-webkit-text-overflow:ellipsis!important;-moz-text-overflow:ellipsis!important;-ms-text-overflow:ellipsis!important;-o-text-overflow:ellipsis!important}.", id, " .yap-layout_block_poster .yap-layout__content{position:relative!important;z-index:1!important;zoom:1!important}.", id, " .yap-layout_block_poster .yap-layout__item_video .yap-layout__content{margin-bottom:-1px!important;padding-bottom:1px!important}.", id, " .yap-layout_block_0x50 .yap-layout__content{padding:2px 2px 2px 0!important}.", id, " .yap-layout_block_320x50.yap-layout_block_fixed-small .yap-layout__content{line-height:11px!important}.", id, " .yap-layout__contacts{margin-top:.23em!important}.", id, " .yap-layout_hide_contacts.yap-layout_hide_domain .yap-layout__contacts{display:none!important}.", id, " .yap-layout_block_320x50 .yap-layout__contacts{margin-top:0!important}.", id, " .yap-layout_block_single .yap-layout__contacts,.", id, " .yap-layout_block_single_vertical .yap-layout__contacts{margin-top:5px!important}.", id, " .yap-layout_block_single.yap-layout_block_single_small .yap-layout__contacts{margin-top:4px!important}.", id, " .yap-layout_block_poster .yap-layout__contacts{margin-top:.63em!important}.", id, " .yap-layout_block_mailru .yap-layout__contacts{padding-top:.6em!important;margin-top:0!important;overflow:hidden!important}.", id, " .yap-layout_block_mailru-vertical .yap-layout__contacts{clear:both!important;zoom:1!important}.", id, " .yap-layout_block_0x50 .yap-layout__contacts{margin-top:0!important}.", id, " .yap-layout__rating{position:relative!important;top:.1em!important;display:inline-block!important;vertical-align:top!important;margin-left:.5em!important;font-size:.8em!important}.", id, " .yap-layout_hide-title-rating .yap-layout__rating{display:none!important}.", id, " .yap-layout_block_0x50 .yap-layout__rating{margin-left:1em!important}.", id, " .yap-layout__age{vertical-align:top!important;display:inline-block!important}.", id, " .yap-layout_block_compact .yap-layout__age{position:absolute!important;right:0!important;top:0!important;margin:0!important}.", id, " .yap-layout_block_row .yap-layout__age{display:inline!important;position:static!important;margin-left:.6em!important}.", id, " .yap-layout_block_0x50 .yap-layout__age{top:2px!important}.", id, " .yap-layout_block_poster .yap-layout__age{vertical-align:middle!important;margin-top:-2px!important}.", id, " .yap-layout__address{zoom:1!important;overflow:hidden!important;width:100%!important;margin-top:.23em!important}.", id, " .yap-layout_hide_address .yap-layout__address{display:none!important}.", id, " .yap-layout_block_mailru .yap-layout__address{width:auto!important}.", id, " .yap-layout_block_vertical .yap-layout__items{border-spacing:", settings.borderType == Const.BorderTypes.AD ? "0 5px" : "0 0", "!important;margin-top:", settings.borderType == Const.BorderTypes.AD ? "-5px" : 0, "!important;margin-bottom:", settings.borderType == Const.BorderTypes.AD ? "-5px" : 0, "!important}.", id, " .yap-layout_block_horizontal .yap-layout__items{border-spacing:", settings.borderType == Const.BorderTypes.AD ? "5px 0" : "", "!important;margin-left:", settings.borderType == Const.BorderTypes.AD ? "-5px" : "", "!important}.", id, " .yap-layout_block_grid .yap-layout__items{border-spacing:", settings.borderType == Const.BorderTypes.AD ? "5px 5px" : "", "!important;margin:", settings.borderType == Const.BorderTypes.AD ? "-5px" : "", "!important}.", id, "{width:", block.width ? block.width + "px" : "", "!important;height:", block.height ? block.height + "px" : "", "!important}.", id, " .yap-layout_block_fixed{font-size:13px!important;width:", block.width, "px!important;height:", block.height, "px!important}.", id, " .yap-layout_block_fixed.yap-layout_block_fixed-medium{font-size:11px!important}.", id, " .yap-layout_block_fixed.yap-layout_block_fixed-small{font-size:10px!important}.", id, " .yap-layout_block_fixed.yap-layout_invisible,.", id, " .yap-layout_block_fixed.yap-layout_invisible *{visibility:hidden!important}.", id, " .yap-layout_block_fixed .yap-layout__items{height:100%!important}.", id, " .yap-layout_block_fixed .yap-layout__inner{padding:5px 1px 5px 5px!important}.", id, " .yap-layout_block_fixed.yap-layout_block_adaptive .yap-layout__inner{padding:5px 6px!important}.", id, " .yap-layout_block_fixed .yap-layout__warning{margin-right:4px!important}.", id, " .yap-layout_block_fixed.yap-layout_block_fixed-small .yap-layout__warning{margin-top:0!important}.", id, " .yap-layout_hide_sitelinks .yap-layout__sitelinks,.", id, " .yap-layout_hide_schedule .yap-layout__schedule{display:none!important}.", id, " .yap-layout_block_fixed-horizontal.yap-layout_text-inline .yap-layout__title,.", id, " .yap-layout_block_fixed-horizontal.yap-layout_text-inline .yap-layout__body{display:inline!important}.", id, " .yap-layout_block_fixed-horizontal.yap-layout_text-inline .yap-layout__title{margin-right:5px!important}.", id, " .yap-layout_block_fixed-horizontal.yap-layout_text-inline .yap-layout__body{margin-top:0!important}.", id, " .yap-layout_block_320x100 .yap-layout__inner{padding:", settings.borderType == Const.BorderTypes.NONE ? 5 : 4, "px 1px ", settings.borderType == Const.BorderTypes.NONE ? 5 : 4, "px ", settings.borderType == Const.BorderTypes.NONE ? 5 : 4, "px!important}.", id, " .yap-layout_block_160x600 .yap-layout__inner{padding-right:0!important}.", id, " .yap-layout_block_320x50 .yap-layout__inner{padding:0!important}.", id, " .yap-layout_block_320x50 .yap-layout__body,.", id, " .yap-layout_block_320x50 .yap-layout__sitelinks,.", id, " .yap-layout_block_320x50 .yap-layout__schedule,.", id, " .yap-layout_block_320x50 .yap-layout__warning{margin-top:0!important}.", id, " .yap-layout_type_narrow.yap-layout_block_single_vertical .yap-layout__inner{padding:10px 25px!important}.", id, " .yap-layout_type_narrow.yap-layout_block_single240x400 .yap-layout__inner{padding:10px!important}.", id, " .yap-layout_block_single .yap-layout__warning,.", id, " .yap-layout_block_single .yap-layout__body{margin-top:5px!important}.", id, " .yap-layout_block_fixed.yap-layout_block_single.yap-layout_block_horizontal .yap-layout__item_app .yap-layout__body{margin-top:3px!important}.", id, " .yap-layout_block_single.yap-layout_block_single_small .yap-layout__warning,.", id, " .yap-layout_block_single.yap-layout_block_single_small .yap-layout__body{margin-top:4px!important}.", id, " .yap-layout_block_fixed.yap-layout_block_single .yap-layout__warning{margin-right:0!important}.", id, " .yap-layout_block_300x250 .yap-layout__wrapper{position:relative!important;margin:0!important;width:auto!important;height:", settings.borderType === Const.BorderTypes.NONE ? "250px" : "248px", "!important;overflow:hidden!important}.", id, " .yap-layout_block_300x250 .yap-layout__item{position:relative!important;min-height:100%!important;vertical-align:top!important}.", id, " .yap-layout_block_300x250 .yap-layout__outer{padding:14px 14px 17px!important}.", id, " .yap-layout_block_300x250 .yap-layout__inner{padding:0!important}#", id, " .yap-layout_block_300x250 .yap-layout__title{padding-bottom:", settings.linksUnderline ? "0.49em" : "0.38em", "!important;display:block!important;line-height:1.1!important;font-size:27px!important;box-sizing:border-box!important}#", id, " .yap-layout_block_300x250 .yap-layout__content{width:100%!important;overflow:hidden!important;font-size:15px!important;box-sizing:border-box!important}#", id, " .yap-layout_block_300x250 .yap-layout__warning{margin:0!important;padding-top:5px!important;clear:both!important}#", id, " .yap-layout_block_300x250 .yap-layout__picture{position:relative!important;float:right!important;margin-left:14px!important;margin-bottom:2px!important;padding:0 0 1px!important;overflow:hidden!important;text-align:right!important}#", id, " .yap-layout_block_300x250 .yap-layout__picture img{position:relative!important;height:100%!important}#", id, " .yap-layout_block_300x250 .yap-layout__body{margin-top:0!important;overflow:hidden!important;line-height:1.1!important;word-wrap:break-word!important}#", id, " .yap-layout_block_300x250 .yap-layout__age{margin-bottom:1px!important;font-size:14px!important;vertical-align:middle!important}#", id, " .yap-layout_block_300x250 .yap-layout__app{margin-top:11px!important;overflow:hidden!important}#", id, " .yap-layout_block_300x250.yap-layout_two-ads .yap-layout__item{min-height:auto!important;vertical-align:middle!important}#", id, " .yap-layout_block_300x250.yap-layout_two-ads .yap-layout__item_nth_2{padding-bottom:12px!important}#", id, " .yap-layout_block_300x250.yap-layout_two-ads .yap-layout__outer{padding:7px 14px!important}#", id, " .yap-layout_block_300x250.yap-layout_two-ads .yap-layout__title{padding-bottom:5px!important;font-size:22px!important}#", id, " .yap-layout_block_300x250.yap-layout_two-ads .yap-layout__content{font-size:14px!important}#", id, " .yap-layout_block_300x250.yap-layout_two-ads .yap-layout__warning{padding-top:3px!important}.", id, " .yap-layout_block_compact{min-width:290px!important;overflow:hidden!important}.", id, " .yap-layout_block_compact .yap-layout__inner{padding:0!important;position:relative!important;z-index:1!important}.", id, " .yap-layout_block_compact .yap-layout__inner,.", id, " .yap-layout_block_compact .yap-layout__title{overflow:hidden!important;text-overflow:ellipsis!important;-webkit-text-overflow:ellipsis!important;-moz-text-overflow:ellipsis!important;-ms-text-overflow:ellipsis!important;-o-text-overflow:ellipsis!important}.", id, " .yap-layout_block_compact .yap-layout__title{white-space:nowrap!important}.", id, " .yap-layout_block_compact .yap-layout__item_age_true .yap-layout__title{padding-right:3em!important}.", id, " .yap-layout_block_compact .yap-layout__title-domain{display:inline!important;padding-left:.4em!important}.", id, " .yap-layout_block_compact.yap-layout_hide-title-domain .yap-layout__title-domain{display:none!important}.", id, " .yap-layout_block_compact .yap-layout__body{margin-top:0!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;-webkit-text-overflow:ellipsis!important;-moz-text-overflow:ellipsis!important;-ms-text-overflow:ellipsis!important;-o-text-overflow:ellipsis!important}.", id, " .yap-layout_block_compact .yap-layout__adtune{position:absolute!important;right:2px!important;top:4px!important;z-index:1!important}.", id, " .yap-layout_block_row{min-width:500px!important;white-space:nowrap!important}.", id, " .yap-layout_block_row .yap-layout__title,.", id, " .yap-layout_block_row .yap-layout__body{display:inline!important}.", id, " .yap-layout_block_row .yap-layout__item_age_true .yap-layout__title{padding-right:0!important}.", id, " .yap-layout_block_row .yap-layout__title-domain{display:none!important}.", id, " .yap-layout_block_row .yap-layout__body,.", id, " .yap-layout_block_row .yap-layout__body-domain{margin-left:.4em!important}.", id, " .yap-layout_block_row .yap-layout__adtune{right:1px!important;top:50%!important;margin-top:-7px!important}.", id, " .yap-layout_block_row .yap-layout__inner{padding:", settings.c11n.itemPadding || "", "!important}.", id, " .yap-layout_block_poster{max-width:300px!important;min-width:200px!important;font-size:13px!important}.", id, " .yap-layout_block_poster .yap-layout__outer,.", id, " .yap-layout_block_poster .yap-layout__inner{overflow:hidden!important;position:relative!important;z-index:1!important;zoom:1!important}.", id, " .yap-layout_block_poster .yap-layout__inner{padding:0!important;margin:7px!important}.", id, " .yap-layout_block_poster .yap-layout__title,.", id, " .yap-layout_block_poster .yap-layout__slider,.", id, " .yap-layout_block_poster .yap-layout__warning{padding:9px!important;background:", settings.bgColor || "#fff", "!important;position:relative!important;z-index:3!important;margin:0!important}.", id, " .yap-layout_block_poster .yap-layout__title{padding-right:25px!important}.", id, " .yap-layout_block_poster .yap-layout__body{margin:0!important}.", id, " .yap-layout_block_poster .yap-layout__arrow{position:absolute!important;bottom:0!important;right:0!important;width:28px!important;height:28px!important;line-height:28px!important;text-align:center!important;transition:opacity 300ms ease-in-out,transform 300ms ease-in-out,bottom 300ms ease-in-out!important;opacity:.6!important;-webkit-transition:opacity 300ms ease-in-out,-webkit-transform 300ms ease-in-out,bottom 300ms ease-in-out!important;-moz-transition:opacity 300ms ease-in-out,-moz-transform 300ms ease-in-out,bottom 300ms ease-in-out!important;-ms-transition:opacity 300ms ease-in-out,-ms-transform 300ms ease-in-out,bottom 300ms ease-in-out!important;-o-transition:opacity 300ms ease-in-out,-o-transform 300ms ease-in-out,bottom 300ms ease-in-out!important}.", id, " .yap-layout_block_poster .yap-layout__item_short_true .yap-layout__arrow{bottom:-.3em!important}.", id, " .yap-layout_block_poster .yap-layout__arrow_roll-up{right:-28px!important;opacity:0!important;transform:translateY(-15px) rotateX(180deg)!important;transition:opacity 300ms ease-in-out,transform 300ms ease-in-out,right 0ms linear 300ms!important;-webkit-transform:translateY(-15px) rotateX(180deg)!important;-moz-transform:translateY(-15px) rotateX(180deg)!important;-ms-transform:translateY(-15px) rotateX(180deg)!important;-o-transform:translateY(-15px) rotateX(180deg)!important;-webkit-transition:opacity 300ms ease-in-out,-webkit-transform 300ms ease-in-out,right 0ms linear 300ms!important;-moz-transition:opacity 300ms ease-in-out,-moz-transform 300ms ease-in-out,right 0ms linear 300ms!important;-ms-transition:opacity 300ms ease-in-out,-ms-transform 300ms ease-in-out,right 0ms linear 300ms!important;-o-transition:opacity 300ms ease-in-out,-o-transform 300ms ease-in-out,right 0ms linear 300ms!important}.", id, " .yap-layout_block_poster .yap-layout__arrow path,.", id, " .yap-layout_block_poster .yap-layout__arrow path:hover{fill:", settings.textColor || "#000000", "!important}.", id, " .yap-layout_block_poster .yap-layout__adtune{z-index:4!important;display:block!important;position:absolute!important;right:7px!important;top:7px!important}.", id, " .yap-layout_block_poster .yap-layout__sitelinks{margin-top:.55em!important}.", id, " .yap-layout_block_poster .yap-layout__schedule,.", id, " .yap-layout_block_poster .yap-layout__app{margin-top:.63em!important}.", id, " .yap-layout_block_poster .yap-layout__title-domain,.", id, " .yap-layout_block_poster .yap-layout__title-rating{margin-top:.23em!important}.", id, " .yap-layout_block_poster .yap-layout__title-domain{font-size:", 1 == settings.titleFontSize ? "13px" : "15px", "!important}.", id, " .yap-layout_block_poster .yap-layout__bg{position:absolute!important;z-index:1!important;top:0!important;left:0!important;width:100%!important;height:100%!important;text-align:center!important}.", id, " .yap-layout_block_poster .yap-layout__bg_svg,.", id, " .yap-layout_block_poster .yap-layout__bg_old-ie{top:-30%!important;left:-50%!important;width:200%!important;height:", util.browser.isIE6 || util.browser.isIEQuirks ? "500px" : "200%", "!important}.", id, " .yap-layout_block_poster .yap-layout__bg-img{width:100%!important;height:100%!important;background-position:50% 50%!important;background-size:cover!important;background-repeat:no-repeat!important;background-color:", settings.bgColor || "#fff", "!important;opacity:.3!important;transform:scale(2)!important;transform-origin:center 30%!important;filter:blur(2px)!important;-webkit-background-size:cover!important;-moz-background-size:cover!important;-ms-background-size:cover!important;-o-background-size:cover!important;-webkit-transform:scale(2)!important;-moz-transform:scale(2)!important;-ms-transform:scale(2)!important;-o-transform:scale(2)!important;-webkit-transform-origin:center 30%!important;-moz-transform-origin:center 30%!important;-ms-transform-origin:center 30%!important;-o-transform-origin:center 30%!important;-webkit-filter:blur(2px)!important;-moz-filter:blur(2px)!important;-ms-filter:blur(2px)!important;-o-filter:blur(2px)!important}.", id, " .yap-layout_block_poster .yap-layout__bg_svg svg{position:absolute!important;top:0!important;left:0!important;width:100%!important;height:100%!important;opacity:.3!important}.", id, " .yap-layout_block_poster .yap-layout__bg_old-ie img{height:100%!important;display:inline-block!important;opacity:.3!important;filter:alpha(opacity=30)!important;-webkit-filter:alpha(opacity=30)!important;-moz-filter:alpha(opacity=30)!important;-ms-filter:alpha(opacity=30)!important;-o-filter:alpha(opacity=30)!important}.", id, " .yap-layout_block_poster .yap-layout__video{position:absolute!important;z-index:2!important;left:50%!important;top:50%!important;transition:visibility 0s linear 0s!important;-webkit-transition:visibility 0s linear 0s!important;-moz-transition:visibility 0s linear 0s!important;-ms-transition:visibility 0s linear 0s!important;-o-transition:visibility 0s linear 0s!important}.", id, " .yap-layout_block_poster .yap-layout__slider{z-index:2!important;box-sizing:border-box!important;padding-top:0!important;transition:transform 300ms ease-in-out,opacity 300ms ease-in-out!important;transform:translateY(-100%)!important;transform-origin:left top!important;opacity:0!important;-webkit-transition:-webkit-transform 300ms ease-in-out,opacity 300ms ease-in-out!important;-moz-transition:-moz-transform 300ms ease-in-out,opacity 300ms ease-in-out!important;-ms-transition:-ms-transform 300ms ease-in-out,opacity 300ms ease-in-out!important;-o-transition:-o-transform 300ms ease-in-out,opacity 300ms ease-in-out!important;-webkit-transform:translateY(-100%)!important;-moz-transform:translateY(-100%)!important;-ms-transform:translateY(-100%)!important;-o-transform:translateY(-100%)!important;-webkit-transform-origin:left top!important;-moz-transform-origin:left top!important;-ms-transform-origin:left top!important;-o-transform-origin:left top!important}.", id, " .yap-layout_block_poster .yap-layout__item_picture_false .yap-layout__slider,.", id, " .yap-layout_block_poster .yap-layout__item_hover .yap-layout__slider{transform:none!important;opacity:1!important;-webkit-transform:none!important;-moz-transform:none!important;-ms-transform:none!important;-o-transform:none!important}.", id, " .yap-layout_block_poster .yap-layout__item_hover .yap-layout__video{visibility:hidden!important;transition:visibility 0s linear .3s!important;-webkit-transition:visibility 0s linear .3s!important;-moz-transition:visibility 0s linear .3s!important;-ms-transition:visibility 0s linear .3s!important;-o-transition:visibility 0s linear .3s!important}.", id, " .yap-layout_block_poster .yap-layout__item_hover .yap-layout__arrow{transform:translateY(30px)!important;opacity:0!important;-webkit-transform:translateY(30px)!important;-moz-transform:translateY(30px)!important;-ms-transform:translateY(30px)!important;-o-transform:translateY(30px)!important}.", id, " .yap-layout_block_poster .yap-layout__item_hover .yap-layout__arrow_roll-up{right:0!important;display:block!important;opacity:.6!important;transform:rotateX(180deg)!important;transition:opacity 300ms ease-in-out,transform 300ms ease-in-out,right 0ms linear!important;-webkit-transform:rotateX(180deg)!important;-moz-transform:rotateX(180deg)!important;-ms-transform:rotateX(180deg)!important;-o-transform:rotateX(180deg)!important;-webkit-transition:opacity 300ms ease-in-out,-webkit-transform 300ms ease-in-out,right 0ms linear!important;-moz-transition:opacity 300ms ease-in-out,-moz-transform 300ms ease-in-out,right 0ms linear!important;-ms-transition:opacity 300ms ease-in-out,-ms-transform 300ms ease-in-out,right 0ms linear!important;-o-transition:opacity 300ms ease-in-out,-o-transform 300ms ease-in-out,right 0ms linear!important}.", id, " .yap-layout_block_poster .yap-layout__arrow svg{height:100%!important}.", id, " .yap-layout_block_poster .yap-layout__item_abused .yap-layout__bg{display:none!important}.", id, " .yap-layout_block_poster-horizontal{max-width:", 300 * block.advs.length, "px!important;min-width:", 200 * block.advs.length, "px!important}.", id, " .yap-layout_block_poster-horizontal .yap-layout__outer,.", id, " .yap-layout_block_poster-horizontal .yap-layout__slider-inner,.", id, " .yap-layout_block_poster-horizontal .yap-layout__title{box-sizing:border-box!important}.", id, " .yap-layout_block_mobile .yap-layout__outer{font-size:19px!important}.", id, " .yap-layout_block_320x480.yap-layout_wideimage_true .yap-layout__item{vertical-align:top!important}.", id, " .yap-layout_block_mobile .yap-layout__wrapper{height:100%!important;box-sizing:border-box!important}.", id, " .yap-layout_block_mobile .yap-layout__inner{padding:19px 19px 22px!important}.", id, " .yap-layout_block_mobile .yap-layout__content{margin-bottom:14px!important}.", id, " .yap-layout_block_fixed.yap-layout_block_mobile .yap-layout__picture{width:100%!important;margin-bottom:17px!important;padding:0!important;overflow:hidden!important}.", id, " .yap-layout_block_320x480.yap-layout_wideimage_true .yap-layout__picture{width:auto!important;margin:-19px -19px 17px!important;border-radius:", settings.borderRadius ? "4px 4px 0 0" : 0, "!important;-webkit-border-radius:", settings.borderRadius ? "4px 4px 0 0" : 0, "!important;-moz-border-radius:", settings.borderRadius ? "4px 4px 0 0" : 0, "!important;-ms-border-radius:", settings.borderRadius ? "4px 4px 0 0" : 0, "!important;-o-border-radius:", settings.borderRadius ? "4px 4px 0 0" : 0, "!important}.", id, " .yap-layout_block_mobile .yap-layout__warning{margin:0!important}.", id, " .yap-layout_block_mobile .yap-layout__title{margin:0 0 !important!important}.", id, " .yap-layout_block_mobile .yap-layout__body{font-size:inherit!important}.", id, " .yap-layout_block_mobile .yap-layout__app,.", id, " .yap-layout_block_mobile .yap-layout__contacts{margin-top:17px!important}.", id, " .yap-layout_block_320x480 .yap-layout__picture{float:none!important}.", id, " .yap-layout_block_320x480 .yap-layout__app{text-align:center!important}.", id, " .yap-layout_block_320x480.yap-layout_size_small .yap-layout__outer{font-size:17px!important}.", id, " .yap-layout_block_480x320 .yap-layout__item{vertical-align:middle!important}.", id, " .yap-layout_block_480x320 .yap-layout__picture{float:right!important;margin-left:11px!important}.", id, " .yap-layout_block_mobile .yap-layout__title-wrap{display:table!important;border-collapse:collapse!important;margin-bottom:", settings.linksUnderline ? "17px" : "14px", "!important}.", id, " .yap-layout_block_mobile .yap-layout__title-icon,.", id, " .yap-layout_block_mobile .yap-layout__title{display:table-cell!important;vertical-align:middle!important}.", id, " .yap-layout_block_mobile .yap-layout__title-icon{height:82px!important;padding-right:.5em!important}.", id, " .yap-layout_block_mobile .yap-layout__title-icon-link{display:block!important;height:82px!important}.", id, " .yap-layout_block_mobile.yap-layout_block_320x480 .yap-layout__title-icon{height:60px!important}.", id, " .yap-layout_block_mobile .yap-layout__title-icon-image{display:block!important;height:100%!important}.", id, " .yap-vk-main{display:block!important;font-family:Tahoma,Arial,Verdana,Lucida Sans,sans-serif!important;font-style:normal!important;font-weight:400!important;width:118px!important;padding:0!important;margin:0!important}.", id, " .yap-vk-main yatag{display:block!important}.", id, " .yap-vk-main img{border:0!important;display:inline-block!important}.", id, " .yap-vk-logo,.", id, " .yap-vk-logo *{color:#777!important;font-size:.91em!important;line-height:11px!important;font-weight:400!important;font-style:normal!important}.", id, " .yap-vk-logo{padding:3px 0 4px!important;text-align:center!important}.", id, " .yap-vk-main a.yap-vk-item,.", id, " .yap-vk-main a.yap-vk-item:hover,.", id, " .yap-vk-main a.yap-vk-item:visited{position:relative!important;display:block!important;padding:8px 3px 11px!important;text-decoration:none!important;color:#000!important;text-align:center!important;border-bottom:1px solid #dce3e9!important}.", id, " .yap-vk-main a.yap-vk-item.yap-vk-item-1{border-top:1px solid #dce3e9!important}.", id, " .yap-vk-title{color:", settings.titleColor, "!important;font-weight:700!important;word-wrap:break-word!important}.", id, " .yap-vk-domain{color:#777!important;font-size:.91em!important;padding-top:3px!important;word-wrap:break-word!important}.", id, " .yap-vk-image{padding-top:9px!important}.", id, " .yap-vk-body{padding-top:10px!important;word-wrap:break-word!important}.", id, " .yap-vk-warning,.", id, " .yap-vk-age{color:#777!important;font-size:.82em!important;line-height:130%!important;padding-top:10px!important}.", id, " .yap-vk-app{margin-top:9px!important}.", id, " .yap-vk-new-main{width:145px!important;font-size:12px!important}.", id, " .yap-vk-new-main *{font-size:inherit!important;line-height:inherit!important}.", id, " .yap-vk-new-logo,.", id, " .yap-vk-new-logo *{color:#939699!important;font-weight:400!important;font-style:normal!important}.", id, " .yap-vk-new-logo{padding:3px 0 4px!important}.", id, " .yap-vk-new-main a.yap-vk-new-item,.", id, " .yap-vk-new-main a.yap-vk-new-item:hover,.", id, " .yap-vk-new-main a.yap-vk-new-item:visited{position:relative!important;border-bottom:1px solid #e2e6ed!important;padding:15px 0 13px!important;display:block!important;text-align:left!important}.", id, " .yap-vk-new-picture{position:relative!important;margin:0 0 7px!important}.", id, " .yap-vk-new-picture-border{position:absolute!important;top:0!important;right:0!important;bottom:0!important;left:0!important;border:1px solid rgba(0,0,0,.04)!important;pointer-events:none!important}.", id, " .yap-vk-new-picture-border,.", id, " .yap-vk-new-image{border-radius:2px!important;-webkit-border-radius:2px!important;-moz-border-radius:2px!important;-ms-border-radius:2px!important;-o-border-radius:2px!important}.", id, " .yap-vk-new-image{display:block!important}.", id, " .yap-vk-new-title{color:", settings.titleColor, "!important;font-weight:700!important;font-size:12px!important;line-height:15px!important;-webkit-font-smoothing:antialiased!important}.", id, " .yap-vk-new-domain{padding-top:1px!important;color:#939699!important;word-wrap:break-word!important;font-size:12px!important;line-height:15px!important}.", id, " .yap-vk-new-body{padding-top:3px!important;color:", settings.textColor, "!important;font-size:12px!important;line-height:15px!important}.", id, " .yap-vk-new-warning{padding-top:3px!important;color:#939699!important;font-size:.82em!important;line-height:1.3em!important}.", id, " .yap-vk-new-main .yap-vk-new-age{position:absolute!important;bottom:6px!important;right:6px!important;padding:0!important;margin:0!important;width:24px!important;height:15px!important;border-radius:40px!important;background-color:", util.browser.ieVersion < 9 || util.browser.isIEQuirks ? "#000" : "rgba(0, 0, 0, 0.7)", "!important;color:#fff!important;text-align:center!important;line-height:15px!important;font-size:9px!important;-webkit-border-radius:40px!important;-moz-border-radius:40px!important;-ms-border-radius:40px!important;-o-border-radius:40px!important}.", id, " .yap-vk-new-app{margin-top:5px!important}.", id, " .yap-layout_block_mailru{font-size:10px!important}.", id, " .yap-layout_block_mailru .yap-layout__inner{padding:.4em .8em 1.2em!important;overflow:hidden!important}.", id, " .yap-layout_block_mailru .yap-layout__title{margin-bottom:.5em!important}.", id, " .yap-layout_block_mailru .yap-layout__body{margin-top:0!important;overflow:hidden!important}.", id, " .yap-layout_block_mailru .yap-layout__warning{padding-top:.6em!important;margin-top:0!important;overflow:hidden!important}.", id, " .yap-layout_block_mailru .yap-layout__warning{clear:both!important;zoom:1!important}.", id, " .yap-layout_block_mailru .yap-layout__adtune{right:3px!important}.", id, " .yap-layout_block_mailru .yap-layout__app{display:table-cell!important;margin:0!important;padding-top:.4em!important}.", id, " .yap-layout_block_mailru .yap-body-text,.", id, " .yap-layout_block_mailru .yap-layout__app{font-size:120%!important}.", id, " .yap-layout_block_mailru .yap-domain{font-size:110%!important}.", id, " .yap-layout_block_mailru .yap-warning{border-radius:0!important;font-size:100%!important;-webkit-border-radius:0!important;-moz-border-radius:0!important;-ms-border-radius:0!important;-o-border-radius:0!important}.", id, " .yap-layout_block_mailru .yap-domain:hover{color:", settings.urlColor || "#0000CC", "!important}.", id, " .yap-logo-block{position:relative!important;z-index:1!important}.", id, " .yap-layout_block_fixed .yap-logo-block{height:16px!important}.", id, " .yap-logo-block__text{font-family:Arial,sans-serif!important;font-size:87%!important;padding-right:4px!important;line-height:1.4!important;font-weight:400!important;color:", new util.RGB(settings.headerBgColor || settings.siteBgColor || "#ffffff").isLight() ? "#000" : "#fff", "!important;text-decoration:", settings.borderType != Const.BorderTypes.NONE || settings.headerBgColor ? "none" : "underline", "!important}.", id, " .yap-logo-block__text em{font-weight:400!important;font-style:normal!important;vertical-align:baseline!important}.", id, " .yap-logo-block__arrow{position:absolute!important;z-index:1!important;right:-9px!important;top:0!important;width:9px!important;height:100%!important;background-image:", settings.headerBgColor ? 'url("data:image/gif,GIF89a%C8%00)%00%80%01%00%' + new util.RGB(settings.headerBgColor).toHexArray().join("%") + "%FF%FF%FF!%F9%04%01%00%00%01%00%2C%00%00%00%00%C8%00)%00%00%02%AB%84%8F%A9%CB%ED%0F%A3%9C%B4%DA%1B%B2%DE%B7%FB%0F%86%E2%E8lf%40%A6%EA%CA%B6%D2%A9%B9%F2L%D7%14%9C%D9%FA%CE%CBx%0F%0C%0A-%BF%A1%F1%884%C0%92%CC%E6n%E9%8CJY%A7%A9%F5%0A%AAb%B7%DC%17%A7%0B%0E'L%E2%B2%F8kNc%D1%EA%B64%E6%8E%3B%E1%F2%3A2g%CF%0F%F1%FA~%0F%E5%17%A8%03(XhxhF%88%B8(%A2%C8%F8%88%E1%089%E9Ei%E9%25y%A9%89%40%B7%E9%A9%D4%F9%B9%C9%26zIV%3AJ%8A%0A%A9%B5J%D9%EA%FA%08%15%2B%0BK%7BXt%8B%98%AB%5B%88%93%D9%AB%F7%1B%EC%3BL%1C%F8%1BP%00%00%3B\")" : "none", "!important;background-position:center right!important;background-repeat:no-repeat!important;margin-top:", util.browser.isIEQuirks ? "-1px" : "", "!important}.", id, " .yap-logo-fallback{display:none!important}.", id, " .yap-logo-block.yap-logo-block_type_vertical{display:", util.browser.support.cssTransform ? "block" : "none", "!important;position:absolute!important;z-index:1!important;left:0!important;bottom:6px!important;width:0!important;height:0!important}.", id, " .yap-layout_block_0x50 .yap-logo-block{bottom:0!important}.", id, " .yap-logo-block_type_vertical .yap-logo-block__text{display:inline-block!important;transform:rotate(270deg)!important;transform-origin:left top!important;font-size:10px!important;line-height:17px!important;padding:0!important;-webkit-transform:rotate(270deg)!important;-moz-transform:rotate(270deg)!important;-ms-transform:rotate(270deg)!important;-o-transform:rotate(270deg)!important;-webkit-transform-origin:left top!important;-moz-transform-origin:left top!important;-ms-transform-origin:left top!important;-o-transform-origin:left top!important}.", id, " .yap-layout_block_0x50 .yap-logo-block_type_vertical .yap-logo-block__text{width:50px!important;text-align:center!important}.", id, " .yap-logo-block_type_vertical .yap-logo-block__arrow{display:none!important}.", id, " .yap-logo-fallback{display:block!important;width:100%!important;height:100%!important;position:absolute!important;z-index:1!important;bottom:6px!important;left:0!important;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAABFCAMAAABE4oc2AAAAeFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVyEiIAAAAJ3RSTlMAByQoEAMKZBIN39RsQR8Zp3otFelUm42AX006tTLyxL1YzK6UiJ9zbzQkAAABa0lEQVQoz3WRWZLDIAxExR4bY/AW79kmGd3/hgMiTuVn+sN+pWqpEQAAr+CQeHXee0KOUaVM2DYfg3fpo8lQeqj6gsr77dEwom4wOMyasDJ3U2VDYea1I9J2CkOp81y1QThRcCgCuxLChIhHonD1m6pYHXLtWoC3kjD5Ag3zOC0vNCYFm9nMMTqiOiXlNsQH9pLY0ags1lw5QV1uAS+Saq0QXKgIPKk+Y4j9pL7WwK1KrvMJvlGg3UbDf2RsEzVfG7w4caRU5+bIG4ujqExG3sLcEXXo4P6+nYrm5pN5xW32DojRQ9VZ6WKkPv14rlipPHS5cPg84bExS8rl3Y5mJZK9+217mdPU9kkTQZQ5baG0LFUoR40ck4aUIiYmddyY8Ou8PU5WQ5Z2eBvSf9/b3dUyGbaAv7GNxMLnKeSNsX+P7qfx1Yzjs4hZl+VeLsvCovMGbAOSuCpm35tZ3eL7Rp6Ia2fzQj6db5bwB7VAGypfQp1XAAAAAElFTkSuQmCC) !important;background-position:center bottom!important;background-repeat:no-repeat!important}.", id, " .yap-layout_block_fixed .yap-logo-block__text{font-size:11px!important}.", id, " .yap-layout_block_row .yap-logo__text{text-decoration:", settings.c11n.arrowTextUnderline ? settings.c11n.arrowTextUnderline[0] ? "underline" : "none" : "", "!important}.", id, " .yap-layout_block_row .yap-logo__text:hover{text-decoration:", settings.c11n.arrowTextUnderline ? settings.c11n.arrowTextUnderline[1] ? "underline" : "none" : "", "!important}.", id, " .yap-layout_block_300x250 .yap-logo-block__text{padding:0!important}.", id, " .yap-logo_stamp{position:absolute!important;bottom:0!important;right:0!important;z-index:3!important;overflow:hidden!important;opacity:.7!important;filter:alpha(opacity=50)!important;text-align:center!important;cursor:pointer!important;-webkit-filter:alpha(opacity=50)!important;-moz-filter:alpha(opacity=50)!important;-ms-filter:alpha(opacity=50)!important;-o-filter:alpha(opacity=50)!important}.", id, " .yap-logo_stamp__text{display:inline-block!important;line-height:1.2em!important;color:", settings.textColor || "#000", "!important;vertical-align:top!important;font-size:10px!important}.", id, " .yap-logo_stamp__text em{font-style:normal!important}.", id, " .yap-logo_stamp:hover{opacity:1!important;filter:alpha(opacity=100)!important;-webkit-filter:alpha(opacity=100)!important;-moz-filter:alpha(opacity=100)!important;-ms-filter:alpha(opacity=100)!important;-o-filter:alpha(opacity=100)!important}.", id, " .yap-logo_stamp:hover .yap-logo_stamp__text{text-decoration:underline!important}.", id, " .yap-layout_block_300x250 .yap-logo_stamp{right:14px!important}.", id, " .yap-layout_block_mobile .yap-logo_stamp{opacity:1!important;padding:0 3px!important}.", id, " .yap-layout_block_mobile .yap-logo_stamp{bottom:", settings.linksUnderline ? 5 : 3, "px!important;right:3px!important}.", id, " .yap-layout_block_mobile .yap-logo_stamp__text{font-size:11px!important;text-decoration:none!important;border-bottom-color:rgba(", util.RGB.rgba(settings.textColor || "#000", .3), ")!important;border-bottom-width:", settings.linksUnderline ? 1 : 0, "px!important;border-bottom-style:solid!important}.", id, " .yap-layout_block_mobile .yap-logo_stamp:hover .yap-logo_stamp__text{text-decoration:none!important}.", id, " .yap-picture-block{overflow:hidden!important}.", id, " .yap-layout_block_single_vertical .yap-picture-block{margin:0 auto!important}.", id, " .yap-picture-block__link,.", id, " .yap-picture-block__image{display:block!important}.", id, " .yap-picture-block__link{position:relative!important;left:50%!important}.", id, " .yap-layout_block_single240x400 .yap-picture-block__link{left:", util.browser.isIEQuirks ? "25%" : "50%", "!important}.", id, " .yap-favicon{position:relative!important;margin-top:", util.browser.isIEQuirks || util.browser.isIE7 ? "0" : "-0.2em", "!important;margin-right:.3em!important;width:1em!important;height:1em!important;min-width:8px!important;max-width:16px!important;min-height:8px!important;max-height:16px!important;display:inline-block!important;vertical-align:middle!important}.", id, " .yap-layout_block_row .yap-favicon,.", id, " .yap-layout_block_poster .yap-favicon,.", id, " .yap-layout_block_single .yap-favicon{width:16px!important;height:16px!important}.", id, " .yap-layout_block_row .yap-favicon{margin-top:0!important}.", id, " .yap-title-block{display:inline!important}.", id, " .yap-title-block__text{color:", settings.titleColor || "#0000CC", "!important;text-decoration:", settings.linksUnderline ? "underline" : "none", "!important;font-weight:", 1 == settings.titleFontSize ? "bold" : "normal", "!important}.", id, " .yap-title-block__text b{color:", settings.titleColor || "#0000CC", "!important;text-decoration:", settings.linksUnderline && (util.browser.ieVersion < 9 || util.browser.isQuirks) ? "underline" : "none", "!important;vertical-align:baseline!important;font-weight:700!important}.", id, " .yap-title-block__text:hover,.", id, " .yap-title-block__text:hover b{color:", settings.hoverColor || "#0088CC", "!important}.", id, " .yap-title-block__text{display:inline!important;line-height:1.1!important;vertical-align:baseline!important}#", id, " .yap-title-block__text{font-size:", settings.titleFontSizePercent || "", "!important}#", id, " .yap-layout_block_fixed .yap-title-block__text{font-size:", isYandexPage && 3 == settings.titleFontSize ? "17px" : "", "!important}#", id, " .yap-layout_block_fixed.yap-layout_block_fixed-medium .yap-title-block__text{font-size:16px!important}#", id, " .yap-layout_block_fixed.yap-layout_block_fixed-small .yap-title-block__text{font-size:13px!important}#", id, " .yap-layout_block_320x50.yap-layout_block_fixed.yap-layout_block_fixed-small .yap-title-block__text,#", id, " .yap-layout_block_adaptive.yap-layout_block_fixed.yap-layout_block_fixed-small .yap-title-block__text{font-size:12px!important;font-weight:700!important}#", id, " .yap-layout_block_compact .yap-title-block__text{font-size:100%!important}.", id, " .yap-layout_block_compact .yap-title-block__text{white-space:nowrap!important;font-weight:", 3 == settings.titleFontSize ? "bold" : "normal", "!important}#", id, " .yap-layout_block_mailru .yap-title-block__text{font-size:150%!important}#", id, " .yap-layout_block_single .yap-layout__content .yap-title-block__text{font-size:24px!important;line-height:26px!important}#", id, " .yap-layout_block_single.yap-layout_block_single_medium .yap-layout__content .yap-title-block__text{font-size:20px!important;line-height:22px!important}#", id, " .yap-layout_block_single.yap-layout_block_single_small .yap-layout__content .yap-title-block__text{font-size:18px!important;line-height:20px!important}#", id, " .yap-layout_block_0x50 .yap-title-block__text{font-weight:700!important}#", id, " .yap-layout_block_320x50.yap-layout_block_fixed-small .yap-title-block__text{line-height:11px!important}#", id, " .yap-layout_block_300x250 .yap-title-block__text{display:inline!important;font-size:100%!important;line-height:inherit!important}#", id, " .yap-layout_block_mobile .yap-title-block__text{font-size:28px!important;line-height:1.1!important;text-decoration:none!important;border-bottom-color:rgba(", util.RGB.rgba(settings.titleColor || "#0000CC", .3), ")!important;border-bottom-width:", settings.linksUnderline ? 1 : 0, "px!important;border-bottom-style:solid!important}#", id, " .yap-layout_block_mobile .yap-title-block__text b{text-decoration:none!important}#", id, " .yap-layout_block_mobile .yap-title-block__text:hover{border-bottom-color:rgba(", util.RGB.rgba(settings.hoverColor || "#0088CC", .3), ")!important}.", id, " .yap-body-text,.", id, " .yap-body-text b{display:inline!important;font-weight:400!important;line-height:1.2!important;text-decoration:none!important;color:", settings.textColor || "#000", "!important}.", id, " .yap-layout_block_compact .yap-body-text wbr{display:none!important}.", id, " .yap-body-text b{font-weight:700!important}.", id, " .yap-layout_block_300x250 .yap-body-text{line-height:1.1!important}.", id, " .yap-layout_block_320x50.yap-layout_block_fixed-small .yap-body-text{line-height:11px!important}.", id, " .yap-contacts__item{display:inline-block!important;vertical-align:baseline!important;padding-right:1em!important;font-size:100%!important;line-height:1.1!important}.", id, " .yap-contacts__item:last-child{padding-right:0!important}#", id, " .yap-layout_hide_contacts .yap-contacts__item{display:none!important}#", id, " .yap-layout_hide_contacts .yap-contacts__item_domain{display:inline-block!important}#", id, " .yap-layout_hide_domain .yap-contacts__item_domain{display:none!important}.", id, " .yap-contacts__phone{white-space:nowrap!important}.", id, " .yap-contacts__item-link,.", id, " .yap-contacts__item-text{display:inline!important;text-decoration:none!important;color:", settings.urlColor || "#0000CC", "!important}.", id, " .yap-contacts__item-link:hover{text-decoration:", settings.linksUnderline ? "underline" : "none", "!important;color:", settings.hoverColor || "#0088CC", "!important}.", id, " .yap-contacts__info-icon{margin:0!important;border:1px solid!important;padding:1px!important;width:1em!important;line-height:1.2!important;display:inline-block!important;font-size:70%!important;text-align:center!important;vertical-align:top!important;border-radius:3px!important;color:", util.warning.getBorderColor(settings.bgColor || "#FFF", settings.urlColor || "#0000CC", .1), "!important;border-color:", util.warning.getBorderColor(settings.bgColor || "#FFF", settings.urlColor || "#0000CC", .7), "!important;-webkit-border-radius:3px!important;-moz-border-radius:3px!important;-ms-border-radius:3px!important;-o-border-radius:3px!important}.", id, " .yap-layout_block_poster .yap-contacts__domain{display:none!important}.", id, " .yap-layout_block_mailru .yap-contacts__item-link,.", id, " .yap-layout_block_mailru .yap-contacts__item-text{font-size:110%!important}.", id, " .yap-layout_block_mailru .yap-contacts__item-link:hover{color:", settings.urlColor || "#0000CC", "!important}.", id, " .yap-layout_block_0x50 .yap-contacts{overflow:hidden!important;text-overflow:ellipsis!important;-webkit-text-overflow:ellipsis!important;-moz-text-overflow:ellipsis!important;-ms-text-overflow:ellipsis!important;-o-text-overflow:ellipsis!important}.", id, " .yap-layout_block_0x50 .yap-contacts__item{display:inline!important}.", id, " .yap-layout_block_0x50 .yap-contacts__info-icon{font-size:60%!important}.", id, " .yap-contacts__item_go{margin-top:-3px!important;padding-right:0!important;display:inline-block!important;vertical-align:middle!important}.", id, " .yap-layout_hide_go .yap-contacts__item_go{display:none!important}.", id, " .yap-layout_block_300x250 .yap-contacts{margin-top:7px!important}.", id, " .yap-layout_block_300x250 .yap-contacts__item{margin-bottom:3px!important;line-height:1!important;vertical-align:middle!important}.", id, " .yap-layout_block_300x250 .yap-contacts__item_domain{display:inline-block!important;overflow:hidden!important;word-wrap:break-word!important}.", id, " .yap-layout_block_300x250 .yap-item-has-picture .yap-contacts__item{padding-right:0!important;display:block!important;overflow:hidden!important;word-wrap:break-word!important}.", id, " .yap-layout_block_300x250.yap-layout_hide_domain.yap-layout_hide_contacts .yap-contacts{display:none!important}.", id, " .yap-layout_block_mobile .yap-contacts{margin-top:", settings.linksUnderline ? "8px" : "10px", "!important;font-size:inherit!important;line-height:", settings.linksUnderline ? "1.4" : "1", "!important}.", id, " .yap-layout_block_mobile .yap-contacts__item{vertical-align:middle!important}.", id, " .yap-layout_block_mobile.yap-layout_hide_domain.yap-layout_hide_contacts .yap-contacts{display:none!important}.", id, " .yap-layout_block_mobile .yap-contacts__item-text{color:", settings.textColor ? settings.textColor : "#000", "!important}.", id, " .yap-layout_block_mobile .yap-contacts__item-link,.", id, " .yap-layout_block_mobile .yap-contacts__item-link:hover{text-decoration:none!important;border-bottom-color:rgba(", util.RGB.rgba(settings.urlColor || "#0000CC", .3), ")!important;border-bottom-width:", settings.linksUnderline ? 1 : 0, "px!important;border-bottom-style:solid!important}.", id, " .yap-layout_block_mobile .yap-contacts__item-link:hover{border-bottom-color:rgba(", util.RGB.rgba(settings.hoverColor || "#0088CC", .3), ")!important}.", id, " .yap-address{float:left!important;width:", util.browser.isFirefox ? "100%" : "auto", "!important;max-width:100%!important}.", id, " .yap-address__text{overflow:hidden!important}.", id, " .yap-address__text-wrap{overflow:hidden!important;white-space:nowrap!important;text-overflow:ellipsis!important;color:", settings.urlColor || "#0000CC", "!important;-webkit-text-overflow:ellipsis!important;-moz-text-overflow:ellipsis!important;-ms-text-overflow:ellipsis!important;-o-text-overflow:ellipsis!important}.", id, " .yap-address__geo{float:right!important;text-align:right!important;padding:0 1px 0 1em!important}.", id, " .yap-address__geo .yap-contacts__item-text{margin-right:.4em!important}.", id, " .yap-layout_type_narrow .yap-address__geo,.", id, " .yap-layout_type_medium .yap-address__geo,.", id, " .yap-layout_type_compatible .yap-address__geo{float:none!important;padding:0!important;text-align:left!important}.", id, " .yap-layout_block_fixed.yap-layout_type_wide .yap-address__geo{padding-right:5px!important}.", id, " .yap-layout_block_single240x400 .yap-address{margin-top:5px!important;float:none!important;font-size:.8em!important;text-align:center!important}.", id, " .yap-layout_block_single240x400 .yap-address__geo{display:inline-block!important;padding-right:0!important}.", id, " .yap-layout_block_single240x400 .yap-address__geo .yap-contacts__item-text{color:", settings.textColor || "#000", "!important}.", id, " .yap-layout_block_single240x400 .yap-contacts__info-icon{color:", util.warning.getBorderColor(settings.bgColor || "#FFF", settings.textColor || "#000", .1), "!important;border-color:", util.warning.getBorderColor(settings.bgColor || "#FFF", settings.textColor || "#000", .7), "!important}.", id, " .yap-layout_block_0x50 .yap-address{float:none!important}.", id, " .yap-layout_block_0x50 .yap-address__geo{float:none!important;padding-left:0!important;display:inline!important}.", id, " .yap-layout_block_mobile .yap-address{float:none!important}.", id, " .yap-layout_block_mobile .yap-address__geo{float:none!important;padding-left:0!important;display:inline-block!important;color:", settings.textColor || "#000", "!important}.", id, " .yap-layout_block_mobile .yap-contacts__info-icon{color:", util.warning.getBorderColor(settings.bgColor || "#FFF", settings.textColor || "#000", .1), "!important;border-color:", util.warning.getBorderColor(settings.bgColor || "#FFF", settings.textColor || "#000", .7), "!important}.", id, " .yap-layout_hide-geo .yap-address__geo{display:none!important}.", id, " .yap-button{position:relative!important;margin:0!important;padding:0!important;display:inline-block!important;border:0!important;border-radius:3px!important;outline:0!important;text-align:center!important;font-size:1em!important;line-height:1.9em!important;background:", util.warning.getBorderColor(settings.bgColor || "#FFF", new util.RGB(settings.bgColor || "#FFF").isLight() ? "#000" : "#fff", .8), "!important;user-select:none!important;-webkit-tap-highlight-color:rgba(0,0,0,0)!important;-webkit-border-radius:3px!important;-moz-border-radius:3px!important;-ms-border-radius:3px!important;-o-border-radius:3px!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;-o-user-select:none!important}.", id, " .yap-button_mobile{overflow:hidden!important;font-size:inherit!important;height:1.7em!important;line-height:1.7em!important}.", id, " .yap-button_mobile.yap-button_icon_true{position:relative!important;padding-left:2em!important;height:2em!important;line-height:2em!important}.", id, ' .yap-button:before{position:absolute!important;top:1px!important;right:1px!important;bottom:1px!important;left:1px!important;content:""!important;border-radius:2px!important;background:', settings.bgColor || "#FFF", "!important;-webkit-border-radius:2px!important;-moz-border-radius:2px!important;-ms-border-radius:2px!important;-o-border-radius:2px!important}.", id, " .yap-button:hover{background:", settings.hoverColor || "#0088CC", "!important}.", id, " .yap-button:hover:before{background:", settings.hoverColor || "#0088CC", "!important}.", id, " .yap-button_mobile.yap-button_icon_true:hover{color:", settings.hoverColor || "#0088CC", "!important;background:", settings.hoverColor || "#0088CC", "!important}.", id, " .yap-button.yap-button_icon_true:hover:before{background:", settings.bgColor || "#FFF", "!important}.", id, " .yap-button__text{position:relative!important;margin:0 1em!important;display:inline-block!important;zoom:1!important;vertical-align:top!important;color:", new util.RGB(settings.bgColor || "#FFF").isLight() ? "#000" : "#fff", "!important}.", id, " .yap-button:hover .yap-button__text{color:", new util.RGB(settings.hoverColor || "#0088CC").isLight() ? "#000" : "#fff", "!important;text-decoration:none!important}.", id, " .yap-button_mobile.yap-button_icon_true .yap-button__text{margin-left:.3em!important;margin-right:1em!important}.", id, " .yap-button__text_extra,.", id, " .yap-button_mobile.yap-button_icon_true .yap-button__text_extra{margin:0!important}.", id, " .yap-button_mobile .yap-button__icon{position:absolute!important;left:0!important;top:0!important;padding:2px!important;height:100%!important;box-sizing:border-box!important}.", id, " .yap-button_mobile .yap-button__icon-image{width:auto!important;height:100%!important}.", id, " .yap-button_size_s{font-size:1.1em!important}.", id, " .yap-button_size_m{font-size:1.2em!important}.", id, " .yap-layout_block_single240x400 .yap-ext-distrib .yap-button__text{margin:0 20px!important}.", id, " .yap-layout_block_mobile .yap-layout__content{margin-bottom:13px!important;padding-bottom:1px!important}.", id, " .yap-domain{display:inline!important;color:", settings.urlColor || "#0000CC", "!important}.", id, " .yap-domain:hover{text-decoration:", settings.linksUnderline ? "underline" : "none", "!important;color:", settings.hoverColor || "#0088CC", "!important}.", id, " .yap-domain__text{display:inline!important}.", id, " .yap-layout_block_compact .yap-domain:hover{text-decoration:none!important}.", id, " .yap-layout_block_0x50 .yap-domain:hover{text-decoration:", settings.linksUnderline ? "underline" : "none", "!important}.", id, " .yap-layout_block_mobile .yap-domain,.", id, " .yap-layout_block_mobile .yap-domain:hover{text-decoration:none!important}.", id, " .yap-layout_block_mobile .yap-domain__text,.", id, " .yap-layout_block_mobile .yap-domain__text:hover{text-decoration:none!important;border-bottom-color:rgba(", util.RGB.rgba(settings.urlColor || "#0000CC", .3), ")!important;border-bottom-width:", settings.linksUnderline ? 1 : 0, "px!important;border-bottom-style:solid!important}.", id, " .yap-layout_block_mobile .yap-domain__text:hover{border-bottom-color:rgba(", util.RGB.rgba(settings.hoverColor || "#0088CC", .3), ")!important}.", id, " .yap-age{display:inline-block!important;vertical-align:top!important;font-size:70%!important;border:1px solid #dddcda!important;border-radius:4px!important;padding:.1em .2em .05em!important;text-align:center!important;line-height:1.4!important;border-color:", util.warning.getBorderColor(settings.bgColor || settings.siteBgColor || "#FFFFFF", settings.textColor), "!important;background-color:", util.warning.getBgColor(settings.bgColor || settings.siteBgColor || "#FFFFFF"), "!important;-webkit-border-radius:4px!important;-moz-border-radius:4px!important;-ms-border-radius:4px!important;-o-border-radius:4px!important}.", id, " .yap-layout_block_poster .yap-age{border-radius:0!important;padding:0 .2em!important;-webkit-border-radius:0!important;-moz-border-radius:0!important;-ms-border-radius:0!important;-o-border-radius:0!important}.", id, " .yap-layout_block_row .yap-age{line-height:1.4!important}.", id, " .yap-layout_block_320x50 .yap-age,.", id, " .yap-layout_block_320x100 .yap-age{line-height:1.2!important}.", id, " .yap-layout_block_mailru .yap-age{margin:0!important;padding:0 .2em!important;line-height:1.4!important;font-size:105%!important;border-radius:0!important;-webkit-border-radius:0!important;-moz-border-radius:0!important;-ms-border-radius:0!important;-o-border-radius:0!important}.", id, " .yap-warning{overflow:hidden!important;padding:.15em .3em!important;border:1px solid #dddcda!important;font-size:70%!important;line-height:1.1!important;border-radius:4px!important;border-color:", util.warning.getBorderColor(settings.bgColor || settings.siteBgColor || "#FFFFFF", settings.textColor), "!important;background-color:", util.warning.getBgColor(settings.bgColor || settings.siteBgColor || "#FFFFFF"), "!important;-webkit-border-radius:4px!important;-moz-border-radius:4px!important;-ms-border-radius:4px!important;-o-border-radius:4px!important}.", id, " .yap-layout_block_poster .yap-warning{border-radius:0!important;-webkit-border-radius:0!important;-moz-border-radius:0!important;-ms-border-radius:0!important;-o-border-radius:0!important}.", id, " .yap-layout_block_poster .yap-layout__item_picture_true .yap-warning{background-color:", settings.bgColor || "#FFFFFF", "!important;border-color:", settings.bgColor || "#FFFFFF", "!important;transition:border-color 200ms 100ms linear,background-color 200ms 100ms linear!important;-webkit-transition:border-color 200ms 100ms linear,background-color 200ms 100ms linear!important;-moz-transition:border-color 200ms 100ms linear,background-color 200ms 100ms linear!important;-ms-transition:border-color 200ms 100ms linear,background-color 200ms 100ms linear!important;-o-transition:border-color 200ms 100ms linear,background-color 200ms 100ms linear!important}.", id, " .yap-layout_block_poster .yap-layout_touch_false.yap-layout__item_picture_true:hover .yap-warning,.", id, " .yap-layout_block_poster .yap-layout__item_picture_true.yap-layout__item_hover .yap-warning{border-color:", util.warning.getBorderColor(settings.bgColor || settings.siteBgColor || "#FFFFFF", settings.textColor), "!important;background-color:", util.warning.getBgColor(settings.bgColor || settings.siteBgColor || "#FFFFFF"), "!important}.", id, " .yap-warning__link{display:inline!important;text-decoration:", settings.linksUnderline ? "underline" : "none", "!important;color:", settings.urlColor || "#0000CC", "!important}.", id, " .yap-warning__link:hover{text-decoration:none!important;color:", settings.hoverColor || "#0088CC", "!important}.", id, " .yap-layout_block_300x250 .yap-warning{padding:4px 6px 3px!important;border-radius:0!important;-webkit-border-radius:0!important;-moz-border-radius:0!important;-ms-border-radius:0!important;-o-border-radius:0!important}.", id, " .yap-layout_block_mobile .yap-warning{padding:3px 6px 4px!important;font-size:11px!important}.", id, " .yap-sitelinks__link{vertical-align:middle!important;display:inline-block!important;margin-right:1em!important;font-weight:400!important;color:", settings.sitelinksColor || settings.titleColor || "#0000CC", "!important;text-decoration:", settings.linksUnderline ? "underline" : "none", "!important}.", id, " .yap-sitelinks__link:hover{color:", settings.hoverColor || "#0088CC", "!important}.", id, " .yap-sitelinks__link:last-child{margin-right:0!important}.", id, " .yap-mobile-app_inline{display:inline!important;margin-left:.8em!important}.", id, " .yap-layout_block_0x50 .yap-mobile-app_inline,.", id, " .yap-layout_block_320x50 .yap-mobile-app_inline{margin-left:0!important}.", id, " .yap-mobile-app__button{display:inline-block!important;margin-right:.8em!important}.", id, " .yap-layout_type_narrow .yap-mobile-app__button,.", id, " .yap-vk-main .yap-mobile-app__button{margin-right:0!important}.", id, " .yap-mobile-app__link{color:", settings.urlColor || "#0000CC", "!important;text-decoration:", settings.linksUnderline ? "underline" : "none", "!important}.", id, " .yap-mobile-app__link:hover{color:", settings.hoverColor || "#0088CC", "!important}.", id, " .yap-layout_hide_rating .yap-mobile-app__rating{display:none!important}.", id, " .yap-mobile-app__rating{display:inline-block!important;vertical-align:top!important;cursor:help!important}.", id, " .yap-mobile-app__rating_width_full{display:block!important;margin-top:1px!important}.", id, " .yap-mobile-app__rating_content_centered{text-align:center!important}.", id, " .yap-mobile-app__rating-votes{display:inline-block!important;vertical-align:middle!important;margin:.2em 0 0 .5em!important;font-size:.8em!important;color:", settings.textColor || "#000", "!important;opacity:.8!important}.", id, " .yap-mobile-app__rating .yap-mobile-app__rating-stars{overflow:hidden!important;position:relative!important;display:inline-block!important;vertical-align:middle!important;height:1em!important;width:5em!important;white-space:nowrap!important}.", id, " .yap-mobile-app__rating-stars-scale_filled{position:absolute!important;left:0!important;top:0!important;overflow:hidden!important}.", id, " .yap-mobile-app__rating .yap-mobile-app__rating-star{display:inline-block!important;vertical-align:top!important;fill:", settings.textColor || "#000", "!important;opacity:.4!important}.", id, " .yap-mobile-app__rating-stars-scale_filled .yap-mobile-app__rating-star{opacity:1!important;fill:#fc0!important}.", id, " .yap-mobile-app__rating-star .yap-mobile-app__star-svg{display:block!important;height:1em!important;width:1em!important}.", id, " .yap-ext-distrib{padding-top:.57em!important;padding-bottom:.35em!important}.", id, " .yap-ext-distrib_full-width_true{text-align:center!important;width:100%!important}.", id, " .yap-layout_hide_ext-distrib .yap-ext-distrib{display:none!important}.", id, " .yap-layout_block_single240x400 .yap-ext-distrib{padding-top:5px!important;padding-bottom:0!important}.", id, " .yap-layout_block_1000x120 .yap-ext-distrib{padding-top:.15em!important;padding-bottom:0!important}.", id, " .yap-layout_block_320x480 .yap-ext-distrib{padding-bottom:0!important}.", id, " .yap-layout_block_320x480 .yap-ext-distrib .yap-button__text{margin:0 25px!important}.", id, " .yap-video-player{position:relative!important;overflow:hidden!important}.", id, " .yap-video-player__video{position:relative!important;z-index:1!important;height:100%!important}.", id, " .yap-video-player__video video{background-color:#000!important}.", id, " .yap-video-player .yaAdSdkGui .mute,.", id, " .yap-video-player .yaAdSdkGui .unMute,.", id, " .yap-video-player .yaAdSdkGui .pause{top:0!important;width:20px!important;height:20px!important;background-size:19px!important;-webkit-background-size:19px!important;-moz-background-size:19px!important;-ms-background-size:19px!important;-o-background-size:19px!important}.", id, " .yap-video-player .yaAdSdkGui .topRightBlock{right:3px!important;bottom:3px!important;width:20px!important;height:20px!important}.", id, " .yap-video-player .yaAdSdkGui .pause{top:auto!important;left:3px!important;bottom:3px!important;margin:0!important}.", id, " .yap-layout_block_single240x400 .yap-video-player{margin-bottom:12px!important}.", id, " .yap-layout_block_728x90-design{-webkit-text-size-adjust:none!important}.", id, " .yap-layout_block_728x90-design .yap-layout__wrapper{width:", block.width - (settings.borderType == Const.BorderTypes.NONE ? 0 : 2), "px!important;height:", block.height - (settings.borderType == Const.BorderTypes.NONE ? 0 : 2), "px!important;overflow:hidden!important}.", id, " .yap-layout_block_728x90-design .yap-layout__inner{margin:0!important;border:none!important;padding:0!important;width:100%!important;height:100%!important}.", id, " .yap-layout_block_728x90-design .yap-layout__main{width:100%!important;min-height:", block.height - (settings.borderType == Const.BorderTypes.NONE ? 0 : 2), "px!important}.", id, " .yap-layout_block_728x90-design .yap-layout__row-section{position:relative!important;overflow:hidden!important;zoom:1!important}.", id, " .yap-layout_block_728x90-design .yap-layout__row-button{float:right!important;padding-right:15px!important;margin-bottom:-20px!important}.", id, " .yap-layout_block_728x90-design .yap-layout__row-content{overflow:hidden!important}.", id, " .yap-layout_block_728x90-design .yap-layout__picture{position:relative!important;float:left!important;padding:0!important;overflow:hidden!important}.", id, " .yap-layout_block_728x90-design .yap-layout__dummy{width:0!important;height:", block.height - (settings.borderType == Const.BorderTypes.NONE ? 0 : 2), "px!important;display:inline-block!important;vertical-align:middle!important}.", id, " .yap-layout_block_728x90-design .yap-layout__button{display:inline-block!important;vertical-align:middle!important}.", id, " .yap-layout_block_728x90-design .yap-layout__content{padding:5px 15px 5px 20px!important;display:inline-block!important;overflow:hidden!important;vertical-align:middle!important;font-size:15px!important;box-sizing:border-box!important}.", id, " .yap-layout_block_728x90-design .yap-layout__title{margin-bottom:3px!important;display:block!important}.", id, " .yap-layout_block_728x90-design .yap-layout__body{padding-right:16px!important;display:inline!important;line-height:1.3em!important}.", id, " .yap-layout_block_728x90-design .yap-layout__picture .yap-layout__picture-age{position:absolute!important;bottom:3px!important;right:3px!important;padding:0 .3em!important;margin:0!important;border-radius:2px!important;background-color:", util.browser.ieVersion < 9 || util.browser.isIEQuirks ? "#000" : "rgba(0, 0, 0, 0.7)", "!important;color:#fff!important;text-align:center!important;line-height:15px!important;font-size:11px!important;-webkit-border-radius:2px!important;-moz-border-radius:2px!important;-ms-border-radius:2px!important;-o-border-radius:2px!important}.", id, " .yap-layout_block_728x90-design .yap-layout__title .yap-layout__age{position:relative!important;top:-1px!important;color:rgba(", util.RGB.rgba(new util.RGB(settings.bgColor || settings.siteBgColor || "#FFFFFF").isLight() ? "#000" : "#FFF", .3), ")!important;font-size:14px!important;font-weight:700!important;text-transform:uppercase!important;vertical-align:baseline!important}.", id, " .yap-layout_block_728x90-design .yap-layout__domain{display:inline-block!important;white-space:pre!important}.", id, " .yap-layout_block_728x90-design .yap-layout__app{margin:0!important;display:inline-block!important}.", id, " .yap-layout_block_728x90-design .yap-layout__app-price{display:inline-block!important}.", id, " .yap-layout_block_728x90-design .yap-layout__app-price b{font-weight:700!important}.", id, " .yap-layout_block_728x90-design .yap-layout__warning-dummy{margin:0!important;visibility:hidden!important}.", id, " .yap-layout_block_728x90-design .yap-layout__warning{position:absolute!important;bottom:5px!important;right:0!important;left:0!important;margin:0!important;padding:0 90px 0 0!important}.", id, " .yap-layout_block_728x90-design .yap-layout__content,.", id, " .yap-layout_block_728x90-design .yap-layout__warning{padding-left:15px!important}#", id, " .yap-layout_block_728x90-design .yap-title-block__text{font-size:21px!important;font-weight:700!important}.", id, " .yap-layout_block_728x90-design .yap-button{display:inline-block!important;width:100%!important;height:40px!important;line-height:40px!important;font-size:17px!important;color:", new util.RGB(settings.titleColor || "#0000CC").isLight() ? "#000" : "#fff", "!important;background:", settings.titleColor || "#0000CC", "!important}.", id, " .yap-layout_block_728x90-design .yap-button:before{content:none!important}.", id, " .yap-layout_block_728x90-design .yap-button__text{margin:0!important;padding:0 1.3em!important;color:", new util.RGB(settings.titleColor || "#0000CC").isLight() ? "#000" : "#fff", "!important}.", id, " .yap-layout_block_728x90-design .yap-button:hover{background:", settings.hoverColor || "#0088CC", "!important}.", id, " .yap-layout_block_728x90-design .yap-button:hover .yap-button__text{color:", new util.RGB(settings.hoverColor || "#0088CC").isLight() ? "#000" : "#fff", "!important}.", id, " .yap-layout_block_728x90-design .yap-favicon{margin-right:.6em!important}.", id, " .yap-layout_block_728x90-design .yap-logo_stamp{right:5px!important;bottom:2px!important;opacity:.3!important}.", id, " .yap-layout_block_728x90-design .yap-logo_stamp:hover{opacity:1!important}.", id, " .yap-layout_block_728x90-design .yap-logo_stamp__text{font-size:11px!important}.", id, " .yap-layout_block_728x90-design .yap-warning{padding:0!important;color:rgba(", util.RGB.rgba(new util.RGB(settings.bgColor || settings.siteBgColor || "#FFFFFF").isLight() ? "#000" : "#FFF", .3), ")!important;background:0 0!important;white-space:nowrap!important;text-overflow:ellipsis!important;-webkit-text-overflow:ellipsis!important;-moz-text-overflow:ellipsis!important;-ms-text-overflow:ellipsis!important;-o-text-overflow:ellipsis!important}.", id, " .yap-layout_block_728x90-design .yap-warning,.", id, " .yap-layout_block_728x90-design .yap-warning__link{border:none!important;font-size:11px!important;font-weight:700!important;text-transform:uppercase!important}.", id, " .yap-layout_block_728x90-design .yap-warning_font-size_small,.", id, " .yap-layout_block_728x90-design .yap-warning_font-size_small .yap-warning__link{font-size:10px!important}.", id, " .yap-layout_block_728x90-design .yap-mobile-app__rating-stars{margin-right:3px!important;width:90px!important;font-size:17px!important}.", id, " .yap-layout_block_728x90-design .yap-mobile-app__rating-star{margin-right:1px!important;fill:", settings.textColor || "#000", "!important;opacity:.17!important}.", id, " .yap-layout_block_728x90-design .yap-mobile-app__rating-stars-scale_filled .yap-mobile-app__rating-star{fill:#ffca00!important;opacity:1!important}.", id, " .yap-layout_block_728x90-design .yap-mobile-app__rating-stars{top:-1px!important}.", id, " .yap-layout_block_728x90-design .yap-mobile-app__rating-votes{margin:0!important;opacity:.5!important;font-size:13px!important}.", id, " .yap-layout_block_728x90-design .yap-layout__item_picture_false .yap-layout__content{padding:5px 10px!important}.", id, " .yap-layout_block_728x90-design .yap-layout__item_picture_false .yap-layout__warning{padding-left:10px!important}#", id, " .yap-layout_block_728x90-design.yap-layout_scale_1 .yap-title-block__text{font-size:19px!important}.", id, " .yap-layout_block_728x90-design.yap-layout_scale_1 .yap-layout__title{margin-bottom:0!important}.", id, " .yap-layout_block_728x90-design.yap-layout_scale_2 .yap-layout__content{font-size:14px!important}.", id, " .yap-layout_block_728x90-design.yap-layout_scale_3 .yap-layout__content{padding:3px 10px!important}.", id, " .yap-layout_block_728x90-design.yap-layout_scale_3 .yap-layout__warning{padding-left:10px!important}.", id, " .yap-layout_block_728x90-design.yap-layout_hide_domain .yap-layout__domain,.", id, " .yap-layout_block_728x90-design.yap-layout_hide_go .yap-layout__row-button{display:none!important}");
                return p.join("")
            }
            , adtune = function(obj) {
                var p = [];
                with (obj)
                    p.push(".", id, " .yap-adtune__button{width:14px!important;height:14px!important}.", id, " .yap-adtune_big_true .yap-adtune__button{overflow:hidden!important;width:18px!important;height:18px!important}.", id, " .yap-adtune__image{width:8px!important;height:8px!important;margin:3px!important;opacity:.6!important}.", id, " .yap-adtune_big_true .yap-adtune__image{opacity:1!important}.", id, " .yap-adtune_big_true .yap-adtune__image{width:12px!important;height:12px!important}.", id, " .yap-adtune__image svg{display:block!important}.", id, " .yap-adtune__image polygon{fill:", settings.textColor || "#000", "!important}.", id, " .yap-adtune .yap-adtune__text{font:15px/15px Arial,sans-serif!important;color:#000!important}.", id, " .yap-adtune_big_true .yap-adtune__text{font-size:25px!important;line-height:18px!important;text-align:center!important}.", id, " .yap-layout_block_compact .yap-adtune__text{position:relative!important;top:-2px!important}.", id, " .yap-adtune__tooltip{display:none!important;position:absolute!important;right:18px!important;top:-2px!important;max-width:120px!important;padding:1px 4px 2px!important;font:11px/14.7px Arial,sans-serif!important;color:#fff!important;white-space:nowrap!important;background:#333!important}.", id, " .yap-adtune_big_true .yap-adtune__tooltip{right:28px!important;top:2px!important;font-size:13px!important;line-height:16.7px!important}.", id, " .yap-adtune__button:hover .yap-adtune__tooltip{display:block!important}.", id, " .yap-adtune_touch_true .yap-adtune__button:hover .yap-adtune__tooltip{display:none!important}.", id, " .yap-layout_block_compact .yap-adtune__tooltip{top:0!important;padding:0 4px 1px!important}.", id, " .yap-adtune__tooltip:before,.", id, ' .yap-layout_block_compact .yap-adtune__tooltip:before{position:absolute!important;right:-4px!important;top:50%!important;margin-top:-4px!important;width:8px!important;height:8px!important;background:#333!important;transform:rotate(45deg)!important;transform-origin:center!important;content:""!important;-webkit-transform:rotate(45deg)!important;-moz-transform:rotate(45deg)!important;-ms-transform:rotate(45deg)!important;-o-transform:rotate(45deg)!important;-webkit-transform-origin:center!important;-moz-transform-origin:center!important;-ms-transform-origin:center!important;-o-transform-origin:center!important}.', id, ' .yap-adtune_oldie_true .yap-adtune__tooltip:before{overflow:hidden!important;width:5px!important;height:11px!important;margin-top:-7px!important;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAALCAYAAAC3ZUeVAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABMSURBVBjTYzA2Ni5hQAdAwX9GRkaJ6IL/gfgPEAegC4LwNyC2QRcE4Q9Ao/TQBf8DBY+iC74xNDTUQjHTxMTEGtnMX0ABL4LuxPARAEB/MGK8nMgKAAAAAElFTkSuQmCC") right center no-repeat!important}.', id, " .yap-adtune__tooltip-text{position:relative!important;color:#fff!important}.", id, " .yap-layout_block_compact .yap-layout__item_abused .yap-layout__adtune{display:none!important}.", id, " .yap-layout_block_compact .yap-layout__adtune-message{position:absolute!important;z-index:1!important;left:100px!important;right:0!important;top:0!important;height:100%!important;width:", util.browser.isIEQuirks || util.browser.isIE6 || util.browser.isIE7 ? "100%" : "", "!important}.", id, " .yap-layout_block_compact .yap-layout__adtune-message{left:17px!important}.", id, " .yap-adtune-message{position:absolute!important;left:0!important;top:0!important;z-index:6!important}.", id, " .yap-adtune-message,.", id, " .yap-adtune-message__table,.", id, " .yap-adtune-message__text{width:100%!important;height:100%!important}.", id, " .yap-adtune-message__text{vertical-align:middle!important;text-align:center!important;font-size:13px!important}.", id, " .yap-adtune-message_big_true .yap-adtune-message__text{font-size:15px!important}");
                return p.join("")
            }
            , internal = function(obj) {
                var p = [];
                with (obj)
                    p.push(".", id, " .yap-internal{overflow:hidden!important}");
                return p.join("")
            }
            ;
        module.exports = {
            reset: reset,
            internal: internal,
            direct: direct,
            adtune: adtune
        }
    }
    , function(t, i, e) {
        function a(t) {
            t && t.preventDefault ? t.preventDefault() : window.event && (window.event.returnValue = !1)
        }
        function o(t) {
            t && t.stopPropagation ? t.stopPropagation() : window.event && (window.event.cancelBubble = !0)
        }
        function n(t) {
            var i = window.screen && screen.width ? (screen.width - b) / 2 : 0
                , e = window.screen && screen.height ? (screen.height - x) / 2 : 0
                , a = "dialog,width=" + b + ",height=" + x + ",left=" + i + ",top=" + e;
            window.open(t, "_blank", a)
        }
        var r = e(49)
            , s = e(64)
            , p = e(67)
            , l = e(63)
            , d = e(69)
            , u = e(10)
            , c = e(6)
            , m = e(2)
            , _ = e(70)
            , y = e(71)
            , h = e(72)
            , g = e(73)
            , f = e(47).adtune
            , b = 780
            , x = 540
            , v = 150
            , k = u.support.postMessage
            , w = 22596877;
        t.exports = r.createComponent([s, p], {
            getClasses: function() {
                return ["yap-adtune", "yap-adtune_touch_" + u.support.touch, "yap-adtune_oldie_" + this.props.isOldIE, "yap-adtune_big_" + this.props.isBig].join(" ")
            },
            onDestroy: function() {
                g.off("abused", this.filterAbuseMessage)
            },
            render: function() {
                return r.create("yatag", {
                    "class": this.getClasses()
                }, r.create("yatag", {
                    "class": "yap-adtune__button",
                    resourceId: "button"
                }, r.create(y, {
                    url: this.props.url,
                    isPlainLink: this.props.isPlainLink
                }, r.create(h, {
                    fallback: this.props.isOldIE,
                    isBig: this.props.isBig
                })), r.create("yatag", {
                    "class": "yap-adtune__tooltip"
                }, r.create("yatag", {
                    "class": "yap-adtune__tooltip-text"
                }, r.create(l, {
                    text: d.getString("HIDE_AD", this.props.language)
                })))))
            },
            afterRender: function() {
                this.pushStyles(f, {
                    util: m
                }),
                k && g.on("abused", c.protect("", this.filterAbuseMessage, this)),
                    this.getResourceById("button").bind("click", this.click, this)
            },
            click: function(t) {
                o(t),
                this.props.isPlainLink || (a(t),
                    this.openWindow()),
                k || c.setProtectedTimeout(this.sendAbusedMessage, v, this),
                    _.getCounter(w, c.protect("metrika_adtune", this._logClickToMetrika, this))
            },
            openWindow: function() {
                n(this.props.url),
                    this.trigger("windowOpened")
            },
            filterAbuseMessage: function(t) {
                t === this.props.adId && this.sendAbusedMessage()
            },
            sendAbusedMessage: function() {
                this.trigger("adAbused")
            },
            _logClickToMetrika: function(t) {
                t.hit(window.location.href)
            }
        })
    }
    , function(t, i, e) {
        t.exports = e(50)
    }
    , function(t, i, e) {
        function a(t) {
            return t.callRendering()
        }
        function o(t, i) {
            return t.appendChild(a(i))
        }
        var n = e(51)
            , r = e(59)
            , s = e(61)
            , p = {
            render: a,
            renderToNode: o,
            createComponent: n,
            create: r,
            components: s
        };
        t.exports = p
    }
    , function(t, i, e) {
        function a() {
            var t = arguments
                , i = n.isArray(t[0]) || n.isFunction(t[0]);
            return i || (t = [r, t[0], t[1]]),
                o.apply(this, t)
        }
        var o = e(52)
            , n = e(3)
            , r = e(54);
        t.exports = a
    }
    , function(t, i, e) {
        t.exports = e(53)
    }
    , function(t, i, e) {
        var a;
        !function(o) {
            function n(t) {
                var i = m(t);
                if (b)
                    for (var e, a = 0; e = k[a++]; )
                        t.hasOwnProperty(e) && i.push(e);
                return i
            }
            function r(t, i, e) {
                for (var a, o, r = n(e), s = 0, p = r.length; p > s; )
                    "__self" !== (a = r[s++]) && (o = e[a],
                        g(o) && (!l || o.toString().indexOf(".__base") > -1) ? i[a] = function(e, a) {
                            var o = t[e] ? t[e] : "__constructor" === e ? i.__self.__parent : f
                                , n = function() {
                                    var t = this.__base;
                                    this.__base = n.__base;
                                    var i = a.apply(this, arguments);
                                    return this.__base = t,
                                        i
                                }
                                ;
                            return n.__base = o,
                                n
                        }(a, o) : i[a] = o)
            }
            function s(t, i) {
                for (var e, a = 1; e = t[a++]; )
                    i ? g(e) ? p.self(i, e.prototype, e) : p.self(i, e) : i = g(e) ? p(t[0], e.prototype, e) : p(t[0], e);
                return i || t[0]
            }
            function p() {
                var t = arguments
                    , i = h(t[0])
                    , e = i || g(t[0])
                    , a = e ? i ? s(t[0]) : t[0] : d
                    , o = t[e ? 1 : 0] || {}
                    , n = t[e ? 2 : 1]
                    , p = o.__constructor || e && a.prototype.__constructor ? function() {
                        return this.__constructor.apply(this, arguments)
                    }
                        : e ? function() {
                        return a.apply(this, arguments)
                    }
                        : function() {}
                    ;
                if (!e)
                    return p.prototype = o,
                        p.prototype.__self = p.prototype.constructor = p,
                        _(p, n);
                _(p, a),
                    p.__parent = a;
                var l = a.prototype
                    , u = p.prototype = c(l);
                return u.__self = u.constructor = p,
                o && r(l, u, o),
                n && r(a, p, n),
                    p
            }
            var l = function() {
                    "_"
                }
                    .toString().indexOf("_") > -1
                , d = function() {}
                , u = Object.prototype.hasOwnProperty
                , c = Object.create || function(t) {
                    var i = function() {}
                        ;
                    return i.prototype = t,
                        new i
                }
                , m = Object.keys || function(t) {
                    var i = [];
                    for (var e in t)
                        u.call(t, e) && i.push(e);
                    return i
                }
                , _ = function(t, i) {
                for (var e in i)
                    u.call(i, e) && (t[e] = i[e]);
                return t
            }
                , y = Object.prototype.toString
                , h = Array.isArray || function(t) {
                    return "[object Array]" === y.call(t)
                }
                , g = function(t) {
                return "[object Function]" === y.call(t)
            }
                , f = function() {}
                , b = !0
                , x = {
                toString: ""
            };
            for (var v in x)
                x.hasOwnProperty(v) && (b = !1);
            var k = b ? ["toString", "valueOf"] : null ;
            p.self = function() {
                var t = arguments
                    , i = h(t[0])
                    , e = i ? s(t[0], t[0][0]) : t[0]
                    , a = t[1]
                    , o = t[2]
                    , n = e.prototype;
                return a && r(n, n, a),
                o && r(e, e, o),
                    e
            }
            ;
            var w = !0;
            t.exports = p,
                w = !1,
            "object" == typeof modules && "function" == typeof modules.define && (modules.define("inherit", function(t) {
                t(p)
            }),
                w = !1),
                a = function(t, i, e) {
                    e.exports = p
                }
                    .call(i, e, i, t),
                !(void 0 !== a && (t.exports = a)),
                w = !1,
            w && (o.inherit = p)
        }(this)
    }
    , function(t, i, e) {
        function a(t, i) {
            if (i) {
                var e = s.indexOf(i, t);
                -1 !== e && (i[e] = null )
            }
        }
        function o(t) {
            s.each(t, function(t) {
                if (t instanceof n)
                    t.destroy();
                else if (s.isObject(t))
                    throw console.error(t),
                        new Error("\u041d\u0435 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442")
            })
        }
        var n = e(55)
            , r = e(56)
            , s = e(3)
            , p = e(58)
            , l = s.augment(n, {
            constructor: function(t, i, e) {
                this.__state = p.INITIAL,
                    t = t || {},
                t.hasOwnProperty("resourceId") && (this.__resourceId = t.resourceId,
                    delete t.resourceId),
                    this.__embeddedResources = [],
                    this.__children = s.isArray(i) ? i : [],
                    this.__contextComponent = e,
                e && e.addToEmbeddedResources(this),
                    this.props = this.initProps(t),
                    this.onInit()
            },
            destroy: function() {
                this.clearEmbeddedResources(),
                    this.clearExternalResources();
                var t = this.getContextComponent();
                t && t.removeFromEmbeddedResources(this);
                var i = this.__parentComponent;
                i && i.removeFromExternalResources(this),
                    this.onDestroy(),
                    this.__state = p.DESTROYED
            },
            onInit: function() {},
            onDestroy: function() {},
            initProps: function(t) {
                return t
            },
            removeFromExternalResources: function(t) {
                a(t, this.__children)
            },
            clearExternalResources: function() {
                o(this.__children)
            },
            addToEmbeddedResources: function(t) {
                this.__embeddedResources.push(t)
            },
            removeFromEmbeddedResources: function(t) {
                a(t, this.__embeddedResources)
            },
            clearEmbeddedResources: function() {
                o(this.__embeddedResources),
                    this.__embeddedResources = []
            },
            findEmbeddedResources: function(t) {
                var i = [];
                if (!s.isFunction(t)) {
                    var e = t;
                    t = function(t) {
                        return t.__resourceId === e
                    }
                }
                return s.each(this.__embeddedResources, function(e) {
                    e && t(e) && i.push(e)
                }),
                    i
            },
            getResourceById: function(t) {
                for (var i = this.__embeddedResources, e = i.length, a = 0; e > a; a++) {
                    var o = i[a];
                    if (o && o.__resourceId === t)
                        return o
                }
                return null
            },
            getParentComponent: function() {
                return this.__parentComponent
            },
            getContextComponent: function() {
                return this.__contextComponent
            },
            getChildren: function() {
                return this.__children
            },
            render: function() {
                return this.getChildren()
            },
            shouldRender: function() {
                return !0
            },
            callRendering: function() {
                this.__state === p.RENDERED && this.cleanupResources(),
                    this.__parentComponent = r.getCurrentComponent();
                var t = r.renderComponent(this);
                return this.__state = p.RENDERED,
                    t
            },
            update: function() {
                return this.cleanupResources(),
                    r.renderComponent(this)
            },
            cleanupResources: function() {
                this.clearEmbeddedResources()
            }
        });
        t.exports = l
    }
    , function(t, i) {
        function e() {}
        var a = function() {}
            ;
        e.prototype = {
            callRendering: a,
            shouldRender: a,
            beforeRender: a,
            render: a,
            afterRender: a
        },
            t.exports = e
    }
    , function(t, i, e) {
        function a(t) {
            var i = !1;
            m === !1 && (i = !0,
                m = !0,
                _ = document.createDocumentFragment(),
                s = _),
                o(t);
            var e = s;
            return i === !0 && (m = !1,
                _ = null ,
                u.callAll()),
                e
        }
        function o(t) {
            var i = l
                , e = p;
            if (l = t,
                    p = t,
                    t.shouldRender()) {
                t.beforeRender(y);
                var a = t.render(y);
                n(a),
                    t.afterRender(y)
            }
            p = e,
                l = i
        }
        function n(t) {
            var i = s;
            if (c.isArray(t))
                for (var e = 0, a = t.length; a > e; e++)
                    r(t[e]);
            else
                r(t);
            if (i !== s)
                throw new Error("element __" + s + "__ is not closed")
        }
        function r(t) {
            null != t && (t instanceof d ? t.callRendering() : y.writeText(t.toString()))
        }
        var s, p, l, d = e(55), u = e(57), c = e(3), m = !1, _ = null , y = {
            write: function(t) {
                var i = document.createElement(t);
                return s.insertBefore(i, null ),
                    s = i,
                    i
            },
            end: function() {
                s = s.parentNode
            },
            writeText: function(t) {
                var i = document.createTextNode(null != t ? t.toString() : "");
                return s.insertBefore(i, null ),
                    i
            },
            getCurrentElement: function() {
                return s
            },
            getCurrentContextComponent: function() {
                return p
            },
            getCurrentComponent: function() {
                return l
            },
            renderIsRunning: function() {
                return m
            },
            renderComponent: function(t) {
                return a(t)
            }
        };
        t.exports = y
    }
    , function(t, i, e) {
        function a(t, i, e) {
            l.isFunction(i) && t.push(d("stackCallbackSupport", i, e))
        }
        function o(t) {
            for (var i = 0, e = t.length; e > i; i++)
                t[i]()
        }
        function n(t, i) {
            a(c, t, i)
        }
        function r(t, i, e) {
            switch (t) {
                case "H":
                    a(u, i, e);
                    break;
                case "M":
                    a(c, i, e);
                    break;
                case "L":
                    a(m, i, e);
                    break;
                default:
                    throw new Error("unknown stack")
            }
        }
        function s(t) {
            switch (t) {
                case "H":
                    o(u),
                        u = [];
                    break;
                case "M":
                    o(c),
                        c = [];
                    break;
                case "L":
                    o(m),
                        m = [];
                    break;
                default:
                    throw new Error("unknown stack")
            }
        }
        function p() {
            _ !== !1 && (_ = !1,
                setTimeout(function() {
                    u.length && s("H"),
                    c.length && s("M"),
                    m.length && s("L"),
                        _ = !0
                }, 0))
        }
        var l = e(3)
            , d = e(7)
            , u = []
            , c = []
            , m = []
            , _ = !0;
        t.exports = {
            push: n,
            pushToStack: r,
            callAll: p
        }
    }
    , function(t, i) {
        t.exports = {
            INITIAL: "INITIAL",
            RENDERED: "RENDERED",
            DESTROYED: "DESTROYED"
        }
    }
    , function(t, i, e) {
        function a(t, i) {
            "string" == typeof t && (i || (i = {}),
                i.tag = t,
                t = r);
            var e = o(arguments, 2);
            return new t(i,e,s.getCurrentContextComponent())
        }
        function o(t, i) {
            for (var e = [], a = i || 0, o = t.length; o > a; a++) {
                var r = t[a];
                n(r, e)
            }
            return e
        }
        function n(t, i) {
            if (p.isArray(t))
                for (var e = 0, a = t.length; a > e; e++)
                    n(t[e], i);
            else
                i.push(t)
        }
        var r = e(60)
            , s = e(56)
            , p = e(3);
        t.exports = a
    }
    , function(t, i, e) {
        var a = e(54)
            , o = e(57)
            , n = e(3)
            , r = e(17)
            , s = e(16)
            , p = /^on(.+)/
            , l = n.augment(a, {
            constructor: function() {
                return a.apply(this, arguments)
            },
            onDestroy: function() {
                this.unbindAll();
                var t = this._element;
                t.parentNode && t.parentNode.removeChild(t)
            },
            initProps: function(t) {
                return this.tag = t.tag || "div",
                t && delete t.tag,
                    t
            },
            beforeRender: function(t) {
                this._element = t.write(this.tag),
                    this._applyProps()
            },
            afterRender: function(t) {
                t.end()
            },
            cleanupResources: function() {
                this.unbindAll()
            },
            getElement: function() {
                return this._element
            },
            hasClass: function(t) {
                return s.hasClass(this._element, t)
            },
            addClass: function(t) {
                return s.addClass(this._element, t)
            },
            removeClass: function(t) {
                return s.removeClass(this._element, t)
            },
            setStyle: function(t, i) {
                s.setStyle(this._element, t, i)
            },
            setAttr: function(t, i) {
                "class" === t ? this._element.className = i : this._element.setAttribute(t, i)
            },
            getAttr: function(t) {
                this._element.getAttribute(t)
            },
            _applyProps: function() {
                var t;
                n.forOwn(this.props, function(i, e) {
                    if (p.test(e)) {
                        var a = e.match(p);
                        if (a) {
                            void 0 === t && (t = {});
                            var o = a[1].toLowerCase();
                            t[o] = i
                        }
                    } else
                        "style" === e && n.isObject(i) ? this.setStyle(i) : null != i && this.setAttr(e, i)
                }, this),
                t && o.push(function() {
                    this._initHandlers(t)
                }, this)
            },
            _initHandlers: function(t) {
                var i = this.getContextComponent();
                n.forOwn(t, function(t, e) {
                    this.bind(e, t, i)
                }, this)
            },
            bind: function(t, i, e) {
                var a = this.getElement();
                this._domEvents || (this._domEvents = []),
                    this._domEvents.push(r.on(a, t, i, e || this))
            },
            unbindAll: function() {
                this._domEvents && (n.each(this._domEvents, function(t) {
                    t.un()
                }),
                    this._domEvents = [])
            }
        });
        t.exports = l
    }
    , function(t, i, e) {
        var a = {
            element: e(60),
            container: e(62),
            html: e(63)
        };
        t.exports = a
    }
    , function(t, i, e) {
        var a = e(54)
            , o = e(3)
            , n = o.augment(a, {
            constructor: function() {
                return a.apply(this, arguments)
            }
        });
        t.exports = n
    }
    , function(t, i, e) {
        var a = e(54)
            , o = e(3)
            , n = o.augment(a, {
            constructor: function() {
                return a.apply(this, arguments)
            },
            beforeRender: function(t) {
                var i = document.createElement("div");
                i.innerHTML = this.props.text.toString() || "";
                var e = t.getCurrentElement()
                    , a = o.map(i.childNodes, function(t) {
                    return t
                });
                return o.each(a, function(t) {
                    e.appendChild(t)
                }),
                    !1
            }
        });
        t.exports = n
    }
    , function(t, i, e) {
        var a = e(49)
            , o = e(65)
            , n = e(57)
            , r = e(66)
            , s = e(1)
            , p = a.createComponent({
            onInit: function() {
                this.b_ = o(this.name)
            },
            pushStyles: function(t, i, e) {
                r.push(t, i, e)
            },
            render: function() {
                var t = this.onDOMReady;
                t && s.isFunction(t) && n.push(t, this);
                var i = this._render(this.b_, this.props, this.__self);
                return this.rootComponent = i,
                    i
            },
            _render: function() {
                return this.getChildren()
            }
        }, {
            HTML: a.components.html,
            Container: a.components.container,
            Element: a.components.element
        });
        t.exports = p
    }
    , function(t, i, e) {
        var a = e(3)
            , o = /^([_-]\w+)/;
        t.exports = function(t) {
            return function() {
                if (!arguments.length)
                    return t;
                var i = [];
                return a.each(arguments, function(e) {
                    if (a.isString(e)) {
                        var n = e.split(/\s+/);
                        i.push(a.map(n, function(i) {
                            return i.replace(o, function() {
                                return t + arguments[1]
                            })
                        }).join(" "))
                    }
                }),
                    i.join(" ")
            }
        }
    }
    , function(t, i, e) {
        function a(t, i, e) {
            p.isFunction(t) && !o(t) && l.push([t, i, e])
        }
        function o(t) {
            return p.inArray(l, t, function(t, i) {
                    return i[0] === t
                }) > -1
        }
        function n(t) {
            return p.map(l, function(i) {
                var e = p.extend({}, t, i[1]);
                return i[0].call(i[2], e)
            }).join("")
        }
        function r() {
            l = []
        }
        function s(t) {
            var i = n(t);
            return r(),
                p.dom.appendStyle(i)
        }
        var p = e(1)
            , l = [];
        t.exports = {
            insertCSS: s,
            contain: o,
            clear: r,
            push: a,
            getCSS: n
        }
    }
    , function(t, i, e) {
        var a = e(68)
            , o = e(3)
            , n = Array.prototype.slice
            , r = {
            destroy: function() {
                this.stopListening(),
                    this.__base()
            },
            triggerMethod: function(t) {
                var i, e = "on" + o.camelize(t), a = this[e];
                return o.isFunction(a) && (i = a.apply(this, n.call(arguments, 1))),
                i !== !1 && this.trigger.apply(this, arguments),
                    !1
            },
            fireEvent: function(t) {
                var i = this.getContextComponent();
                if (i && this.__resourceId) {
                    var e = n.call(arguments);
                    e[0] = t + ":from:" + this.__resourceId,
                        i.triggerMethod.apply(i, e)
                }
            }
        };
        o.extend(r, a),
            t.exports = r
    }
    , function(t, i, e) {
        var a = e(3)
            , o = {
            on: function(t, i, e) {
                if (!s(this, "on", t, [i, e]) || !i)
                    return this;
                this._events || (this._events = {});
                var a = this._events[t] || (this._events[t] = []);
                return a.push({
                    callback: i,
                    context: e,
                    ctx: e || this
                }),
                    this
            },
            once: function(t, i, e) {
                if (!s(this, "once", t, [i, e]) || !i)
                    return this;
                var o = this
                    , n = a.once(function() {
                    o.off(t, n),
                        i.apply(this, arguments)
                });
                return n._callback = i,
                    this.on(t, n, e)
            },
            off: function(t, i, e) {
                var o, n, r, p, l, d, u, c;
                if (!this._events || !s(this, "off", t, [i, e]))
                    return this;
                if (!t && !i && !e)
                    return this._events = {},
                        this;
                for (p = t ? [t] : a.keys(this._events),
                         l = 0,
                         d = p.length; d > l; l++)
                    if (t = p[l],
                            r = this._events[t]) {
                        if (this._events[t] = o = [],
                            i || e)
                            for (u = 0,
                                     c = r.length; c > u; u++)
                                n = r[u],
                                (i && i !== n.callback && i !== n.callback._callback || e && e !== n.context) && o.push(n);
                        o.length || delete this._events[t]
                    }
                return this
            },
            trigger: function(t) {
                if (!this._events)
                    return this;
                var i = n.call(arguments, 1);
                if (!s(this, "trigger", t, i))
                    return this;
                var e = this._events[t]
                    , a = this._events.all;
                return e && p(e, i),
                a && p(a, arguments),
                    this
            },
            stopListening: function(t, i, e) {
                var a = this._listeners;
                if (!a)
                    return this;
                var o = !i && !e;
                "object" == typeof i && (e = this),
                t && ((a = {})[t._listenerId] = t);
                for (var n in a)
                    a[n].off(i, e, this),
                    o && delete this._listeners[n];
                return this
            }
        }
            , n = Array.prototype.slice
            , r = /\s+/
            , s = function(t, i, e, a) {
            if (!e)
                return !0;
            if ("object" == typeof e) {
                for (var o in e)
                    t[i].apply(t, [o, e[o]].concat(a));
                return !1
            }
            if (r.test(e)) {
                for (var n = e.split(r), s = 0, p = n.length; p > s; s++)
                    t[i].apply(t, [n[s]].concat(a));
                return !1
            }
            return !0
        }
            , p = function(t, i) {
            var e, a = -1, o = t.length, n = i[0], r = i[1], s = i[2];
            switch (i.length) {
                case 0:
                    for (; ++a < o; )
                        (e = t[a]).callback.call(e.ctx);
                    return;
                case 1:
                    for (; ++a < o; )
                        (e = t[a]).callback.call(e.ctx, n);
                    return;
                case 2:
                    for (; ++a < o; )
                        (e = t[a]).callback.call(e.ctx, n, r);
                    return;
                case 3:
                    for (; ++a < o; )
                        (e = t[a]).callback.call(e.ctx, n, r, s);
                    return;
                default:
                    for (; ++a < o; )
                        (e = t[a]).callback.apply(e.ctx, i)
            }
        }
            , l = {
            listenTo: "on",
            listenToOnce: "once"
        };
        a.forOwn(l, function(t, i) {
            o[i] = function(i, e, o) {
                var n = this._listeners || (this._listeners = {})
                    , r = i._listenerId || (i._listenerId = a.genRnd("l"));
                return n[r] = i,
                "object" == typeof e && (o = this),
                    i[t](e, o, this),
                    this
            }
        }),
            t.exports = o
    }
    , function(t, i, e) {
        var a = e(2);
        t.exports = {
            getString: function(t, i) {
                if (i && (i = Number(i),
                    -1 === a.inArray(this._SUPPORTED_LANGS, i) && (i = 1)),
                    !i || !this._STRINGS[t] || !this._STRINGS[t][i])
                    throw new Error("I18n: \u043d\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0438 \u0441 \u043a\u043b\u044e\u0447\u043e\u043c " + t + " \u043d\u0430 \u044f\u0437\u044b\u043a\u0435 " + i);
                return this._STRINGS[t][i]
            },
            _SUPPORTED_LANGS: [1, 6],
            _STRINGS: {
                THANKS_AD_HIDDEN: {
                    1: "\u0421\u043f\u0430\u0441\u0438\u0431\u043e. \u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043a\u0440\u044b\u0442\u043e.",
                    6: "Te\u015fekk\xfcrler, reklam\u0131 kapat\u0131ld\u0131"
                },
                HIDE_AD: {
                    1: "\u0421\u043a\u0440\u044b\u0442\u044c&nbsp;\u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435",
                    6: "Reklam\u0131&nbsp;kapamak"
                },
                ADDRESS_AND_PHONE: {
                    1: "\u0410\u0434\u0440\u0435\u0441&nbsp;\u0438&nbsp;\u0442\u0435\u043b\u0435\u0444\u043e\u043d",
                    6: "Adres ve telefon"
                },
                GEO_FROM: {
                    1: "\u041e\u0442&nbsp;\u0432\u0430\u0441"
                },
                METRO: {
                    1: "\u043c.",
                    6: "m."
                },
                GO: {
                    1: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438",
                    6: "Ge\xe7mek"
                }
            }
        }
    }
    , function(t, i, e) {
        function a(t, i, e) {
            m ? i(o(t, e)) : (r(),
                p(function() {
                    i(o(t, e))
                }))
        }
        function o(t, i) {
            var e = "yaCounter" + t;
            return window[e] || (window[e] = n(t, i)),
                window[e]
        }
        function n(t, i) {
            try {
                return new window.Ya.Metrika({
                    id: t,
                    type: i ? c : void 0,
                    defer: !0
                })
            } catch (e) {
                throw new Error("metrika counter creation error: " + e.message)
            }
        }
        function r() {
            _ || (l(d, !1, s),
                _ = !0)
        }
        function s() {
            m = !0
        }
        function p(t) {
            window[u] || (window[u] = []),
                window[u].push(t)
        }
        var l = (e(1),
            e(15).addScript)
            , d = "https://mc.yandex.ru/metrika/watch.js"
            , u = "yandex_metrika_callbacks"
            , c = 1
            , m = window.Ya && window.Ya.Metrika
            , _ = !1;
        t.exports = {
            getCounter: a
        }
    }
    , function(t, i, e) {
        var a = e(49);
        t.exports = a.createComponent({
            _renderLink: function() {
                return a.create("a", {
                    href: this.props.url,
                    "class": "yap-adtune__link",
                    target: "_blank"
                }, this._render())
            },
            _render: function() {
                return this.getChildren()
            },
            render: function() {
                return this.props.isPlainLink ? this._renderLink() : this._render()
            }
        })
    }
    , function(t, i, e) {
        var a = e(49)
            , o = e(63);
        t.exports = a.createComponent({
            SVG_TPL: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{SIZE}" height="{SIZE}" viewBox="0 0 14 14"><polygon points="14,0.7 13.3,0 7,6.299 0.7,0 0,0.7 6.3,7 0,13.299 0.7,14 7,7.7 13.3,14 14,13.299 7.7,7"></polygon></svg>',
            BIG: "12px",
            NORMAL: "8px",
            _renderFallback: function() {
                return a.create("yatag", {
                    "class": "yap-adtune__text"
                }, "\xd7")
            },
            _renderSvg: function() {
                return a.create("yatag", {
                    "class": "yap-adtune__image"
                }, a.create(o, {
                    text: this._getSvgString()
                }))
            },
            _getSvgString: function() {
                return this.SVG_TPL.replace(/\{SIZE\}/g, this.props.isBig ? this.BIG : this.NORMAL)
            },
            render: function() {
                return this.props.fallback ? this._renderFallback() : this._renderSvg()
            }
        })
    }
    , function(t, i, e) {
        function a(t) {
            return "string" == typeof t.data && "string" == typeof t.origin && l.test(t.origin)
        }
        function o(t) {
            var i = t.match(p);
            return i ? i[1] : null
        }
        var n = e(74)
            , r = e(21)
            , s = new n
            , p = /^adAbused\s(\d+)/
            , l = new RegExp("^https://adtune.yandex.ru");
        r.on(window, "message", function(t) {
            if (a(t)) {
                var i = o(t.data);
                i && s.emit("abused", i)
            }
        }),
            t.exports = s
    }
    , function(t, i) {
        function e() {
            this._events = {}
        }
        e.prototype = {
            on: function(t, i) {
                this._events[t] || (this._events[t] = []),
                    this._events[t].push(i)
            },
            once: function(t, i) {
                var e = this
                    , a = function() {
                        i.apply(void 0, arguments),
                            e.off(t, a)
                    }
                    ;
                this.on(t, a)
            },
            off: function(t, i) {
                this._forEachListener(t, function(e, a) {
                    e === i && (this._events[t][a] = void 0)
                })
            },
            emit: function(t) {
                var i = Array.prototype.slice.call(arguments, 1);
                this._forEachListener(t, function(t) {
                    "function" == typeof t && t.apply(void 0, i)
                })
            },
            _forEachListener: function(t, i) {
                if (this._events[t])
                    for (var e = 0, a = this._events[t].length; a > e; e++)
                        i.call(this, this._events[t][e], e)
            }
        },
            t.exports = e
    }
    , function(t, i, e) {
        var a = e(49)
            , o = e(64)
            , n = e(63)
            , r = e(69);
        e(2);
        t.exports = a.createComponent([o], {
            getClasses: function() {
                return ["yap-adtune-message", "yap-adtune-message_big_" + this.props.isBig].join(" ")
            },
            render: function() {
                return a.create("yatag", {
                    "class": this.getClasses()
                }, a.create("table", {
                    "class": "yap-adtune-message__table"
                }, a.create("tbody", null , a.create("tr", null , a.create("td", {
                    "class": "yap-adtune-message__text"
                }, a.create(n, {
                    text: r.getString("THANKS_AD_HIDDEN", this.props.language)
                }))))))
            }
        })
    }
    , function(module, exports, __webpack_require__) {
        var util = __webpack_require__(1)
            , Const = __webpack_require__(9)
            , I18n = (__webpack_require__(6),
            __webpack_require__(69))
            , templates = {
            layout: function(obj) {
                var p = [];
                with (obj)
                    p.push('<yatag class="', id, ' yap-reset" id="', id, '"><yatag class="yap-layout yap-main yap-font-size yap-layout_type_', layout, " ", classes, '"><yatag class="yap-layout__logo yap-logo yap-logo-bg-color">', templates.logo({
                        title: yaTitle,
                        url: yaUrl,
                        isVertical: format.type === Const.BlockTypes.HORIZONTAL && format.fixed
                    }), '</yatag><yatag class="yap-layout__wrapper yap-list-wrapper yap-font-family yap-border-color"><table class="yap-layout__items yap-list"><tr>'),
                        util.each(ads, function(t, i) {
                            if (p.push('<td data-id="', t.adId, '"data-uniq-id="', t.uniqId, '"class="yap-layout__item yap-item yap-border-color yap-layout__item_nth_', i + 1, " yap-layout__item_picture_", !!t.picture, " "),
                                t.picture && p.push("yap-item-has-picture"),
                                    p.push(" "),
                                t.isAppAd && p.push("yap-layout__item_app"),
                                    p.push(" "),
                                t.age && p.push("yap-layout__item_age"),
                                    p.push(" "),
                                t.adtuneUrl && p.push("yap-layout__item_adtune"),
                                    p.push('"><yatag class="yap-layout__outer"><yatag class="yap-layout__inner yap-item-inner">'),
                                    t.player)
                                p.push("", templates.videoPlayer({
                                    ad: t
                                }), "");
                            else if (t.picture) {
                                p.push('<yatag class="yap-layout__picture" style="width: ', t.picture.placeholder.width, '">', templates.picture({
                                    ad: t
                                }), "");
                                var e = t.isAppAd && t.addInfo.rating && "medium" === layout;
                                p.push(""),
                                e && p.push('<yatag class="yap-layout__picture-rating">', templates.mobileApp__rating({
                                    ad: t,
                                    centered: !0
                                }), "</yatag>"),
                                    p.push("</yatag>")
                            }
                            p.push("");
                            var a = t.iconPicture && "240x400" === format.name;
                            p.push(""),
                            a && p.push('<a href="', t.url, '" class="yap-layout__icon" target="_blank"><img class="yap-layout__icon-img" src="', t.iconPicture.src, '" alt=""></a>'),
                                p.push('<yatag class="yap-layout__content"><yatag class="yap-layout__title">', templates.title({
                                    ad: t,
                                    noFavicon: format.single
                                }), '</yatag><yatag class="yap-layout__body yap-text">', templates.body({
                                    ad: t,
                                    clickable: settings.c11n.textClickable
                                }), ""),
                            t.age && p.push('&nbsp;<yatag class="yap-layout__age">', templates.age({
                                ad: t
                            }), "</yatag>"),
                                p.push("</yatag>"),
                            t.debug && p.push('<yatag class="yap-layout__debug">', t.debug, "</yatag>"),
                                p.push(""),
                                t.isAppAd ? (p.push(""),
                                    p.push('<yatag class="yap-layout__app">', templates.mobileApp({
                                        ad: t,
                                        hideRating: e || "320x50" === format.name,
                                        ratingFullWidth: "narrow" === layout,
                                        plainLink: "320x50" === format.name,
                                        iconAlreadyShown: a
                                    }), "</yatag>")) : t.isExtDistrib ? p.push('<yatag class="yap-layout__ext-distrib">', templates.extDistrib({
                                    ad: t,
                                    bigButton: format.type === Const.BlockTypes.VERTICAL && format.single,
                                    fullWidth: "narrow" === layout,
                                    isInline: "320x50" === format.name
                                }), "</yatag>") : (p.push(""),
                                t.sitelinks && p.push('<yatag class="yap-layout__sitelinks">', templates.sitelinks({
                                    ad: t
                                }), "</yatag>"),
                                    p.push(""),
                                (t.workingTime || t.telNum) && p.push('<yatag class="yap-layout__schedule">', templates.schedule({
                                    ad: t
                                }), "</yatag>"),
                                    p.push(""),
                                (t.domain || t.vcardUrl || t.region || t.metro || t.geoDistance) && p.push("", templates.contacts({
                                    ad: t,
                                    showFavicon: format.single,
                                    showGo: /^(728x90|0x90)$/.test(format.name),
                                    format: format,
                                    language: language
                                }), ""),
                                    p.push("")),
                                p.push(""),
                            (t.warning || t.isExtDistrib) && p.push('<yatag class="yap-layout__warning">', templates.warning({
                                ad: t
                            }), "</yatag>"),
                                p.push('</yatag><yatag class="yap-layout__adtune"></yatag></yatag><yatag class="yap-layout__adtune-message"></yatag></yatag></td>'),
                            (i < ads.length - 1 && format.type == Const.BlockTypes.VERTICAL || format.type == Const.BlockTypes.GRID && 1 == i) && p.push("</tr><tr>"),
                                p.push("")
                        }),
                        p.push("</tr></table></yatag></yatag></yatag>");
                return p.join("")
            },
            logo: function(obj) {
                var p = [];
                with (obj)
                    p.push('<yatag class="yap-logo-block'),
                    obj.isVertical && p.push(" yap-logo-block_type_vertical"),
                        p.push('"><yatag class="yap-logo-block__position yap-logo-position"><a class="yap-logo-block__text yap-logo-text yap-logo-color yap-logo-bg-color" target="_blank" href="', url, '">', title, '</a></yatag><yatag class="yap-logo-block__arrow yap-logo-arrow"></yatag></yatag>'),
                    !util.browser.support.cssTransform && obj.isVertical && p.push('<yatag class="yap-logo-fallback"></yatag>'),
                        p.push("");
                return p.join("")
            },
            logo_stamp: function(obj) {
                var p = [];
                with (obj)
                    p.push('<yatag class="yap-logo_stamp"><a class="yap-logo_stamp__text" target="_blank" href="', url, '">', title, "</a></yatag>");
                return p.join("")
            },
            favicon: function(obj) {
                var p = [];
                with (obj)
                    p.push('<img class="yap-favicon"src="', obj.src, '"alt="" />');
                return p.join("")
            },
            title: function(obj) {
                var p = [];
                with (obj)
                    p.push('<yatag class="yap-title-block yap-title '),
                    ad.isTitleHighlighted && p.push("yap-title-block_highlighted"),
                        p.push('"><a href="', ad.url, '" target="_blank" class="yap-title-block__text yap-title-text yap-title-font-size yap-title-color yap-title-hover-color">'),
                    obj.noFavicon || !ad.favicon || ad.picture && !obj.forceFavicon || p.push("", templates.favicon({
                        src: ad.favicon
                    }), ""),
                        p.push("", ad.title, "</a></yatag>");
                return p.join("")
            },
            warning: function(obj) {
                var p = [];
                with (obj)
                    p.push('<yatag class="yap-warning">'),
                        ad.isExtDistrib ? p.push("", ad.addInfo.legal.text, '&nbsp;<a class="yap-warning__link" href="', ad.addInfo.legal.link, '" target="_blank">', ad.addInfo.legal.linkText, "</a>") : p.push("", ad.warning, ""),
                        p.push("</yatag>");
                return p.join("")
            },
            age: function(obj) {
                var p = [];
                with (obj)
                    p.push('<yatag class="yap-age">', ad.age, "</yatag>");
                return p.join("")
            },
            sitelinks: function(obj) {
                var p = [];
                with (obj)
                    p.push('<yatag class="yap-sitelinks">'),
                        util.each(ad.sitelinks, function(t) {
                            p.push('<a class="yap-sitelinks__link yap-sitelink-text" target="_blank" href="', t.url, '">', t.title, "</a>")
                        }),
                        p.push("</yatag>");
                return p.join("")
            },
            schedule: function(obj) {
                var p = [];
                with (obj)
                    p.push(""),
                        p.push('<yatag class="yap-contacts">'),
                    ad.telNum && p.push('<yatag class="yap-contacts__item yap-contacts__phone"><yatag class="yap-contacts__item-text yap-domain-text">', ad.telNum, "</yatag></yatag>"),
                        p.push(""),
                    ad.workingTime && p.push('<yatag class="yap-contacts__item"><yatag class="yap-contacts__item-text yap-domain-text">', ad.workingTime, "</yatag></yatag>"),
                        p.push("</yatag>");
                return p.join("")
            },
            contacts: function(obj) {
                var p = [];
                with (obj) {
                    p.push(""),
                        p.push("");
                    var format = obj.format || {};
                    p.push("");
                    var is240x400 = "240x400" === format.name;
                    p.push("");
                    var isInline = /^(0x50|0x90|728x90)$/.test(format.name);
                    p.push(""),
                    ad.geoDistance && is240x400 && p.push('<yatag class="yap-layout__address yap-address">', templates.contacts__geo({
                        geoDistance: ad.geoDistance,
                        language: language
                    }), "</yatag>"),
                        p.push('<yatag class="yap-layout__contacts"><yatag class="yap-contacts">'),
                    ad.domain && !obj.hideDomain && p.push('<yatag class="yap-contacts__item yap-contacts__item_domain">', templates.domain({
                        ad: ad,
                        showFavicon: obj.showFavicon
                    }), "</yatag>"),
                        p.push(""),
                    !ad.address && ad.vcardUrl && p.push('<yatag class="yap-contacts__item"><a class="yap-contacts__item-link" target="_blank" href="', ad.vcardUrl, '">', I18n.getString("ADDRESS_AND_PHONE", obj.language), "</a></yatag>"),
                        p.push(""),
                    (ad.region || ad.metro) && p.push('<yatag class="yap-contacts__item"><yatag class="yap-contacts__item-text yap-domain-text">', ad.metro ? I18n.getString("METRO", obj.language) + "&nbsp;" + ad.metro : ad.region, "</yatag></yatag>"),
                        p.push(""),
                    ad.geoDistance && isInline && p.push('<yatag class="yap-contacts__item">', templates.contacts__geo({
                        geoDistance: ad.geoDistance,
                        language: language
                    }), "</yatag>"),
                        p.push(""),
                    obj.showGo && (!util.browser.isIE || util.browser.ieVersion >= 8) && p.push('<yatag class="yap-contacts__item yap-contacts__item_go">', templates.button({
                        link: ad.url,
                        text: I18n.getString("GO", obj.language)
                    }), "</yatag>"),
                        p.push("</yatag></yatag>"),
                    !ad.address || format.single || isInline || (p.push('<yatag class="yap-layout__address"><yatag class="yap-address">'),
                    ad.geoDistance && p.push("", templates.contacts__geo({
                        geoDistance: ad.geoDistance,
                        language: language
                    }), ""),
                        p.push('<yatag class="yap-address__text"><yatag class="yap-address__text-wrap" title="', ad.address, '">'),
                        ad.vcardUrl ? p.push('<a class="yap-contacts__item-link" target="_blank" href="', ad.vcardUrl, '">', ad.address, "</a>") : p.push("", ad.address, ""),
                        p.push("</yatag></yatag></yatag></yatag>")),
                        p.push("")
                }
                return p.join("")
            },
            contacts__geo: function(obj) {
                var p = [];
                with (obj)
                    p.push('<yatag class="yap-address__geo"><yatag class="yap-contacts__item-text yap-domain-text">', I18n.getString("GEO_FROM", obj.language), " ~&nbsp;", obj.geoDistance, '</yatag><a class="yap-contacts__info-icon" target="_blank"href="https://yandex.ru/support/direct-tooltips/calculate-distance.xml">?</a></yatag>');
                return p.join("")
            },
            button: function(obj) {
                var p = [];
                with (obj)
                    p.push('<a class="yap-button ', obj.size ? "yap-button_size_" + obj.size : "", '" href="', obj.link, '" target="_blank"><yatag class="yap-button__text">', obj.text, "</yatag></a>");
                return p.join("")
            },
            buttonMobile: function(obj) {
                var p = [];
                with (obj)
                    p.push(""),
                        obj.link ? p.push('<a class="yap-button yap-button_mobile ', obj.icon ? "yap-button_icon_true" : "", '" href="', obj.link, '" target="_blank">') : p.push('<span class="yap-button yap-button_mobile ', obj.icon ? "yap-button_icon_true" : "", '">'),
                        p.push(""),
                    obj.icon && p.push('<yatag class="yap-button__icon"><img class="yap-button__icon-image" src="', obj.icon.src, '"alt=""></yatag>'),
                        p.push('<yatag class="yap-button__text">', obj.text, ""),
                    obj.extraText && p.push('<yatag class="yap-button__text yap-button__text_extra">', obj.extraText, "</yatag>"),
                        p.push("</yatag>"),
                        obj.link ? p.push("</a>") : p.push("</span>"),
                        p.push("");
                return p.join("")
            },
            domain: function(obj) {
                var p = [];
                with (obj)
                    p.push('<a class="yap-domain yap-domain-text" target="_blank" href="', ad.url, '">'),
                    ad.favicon && obj.showFavicon && p.push("", templates.favicon({
                        src: ad.favicon
                    }), ""),
                        p.push('<yatag class="yap-domain__text">', ad.domain, "</yatag></a>");
                return p.join("")
            },
            body: function(obj) {
                var p = [];
                with (obj)
                    p.push(""),
                        obj.clickable ? p.push('<a class="yap-body-text yap-text-color" target="_blank" href="', ad.url, '"><wbr />', ad.body, "</a>") : p.push('<yatag class="yap-body-text yap-text-color"><wbr />', ad.body, "</yatag>"),
                        p.push("");
                return p.join("")
            },
            picture: function(obj) {
                var p = [];
                with (obj)
                    p.push('<yatag class="yap-picture-block" style="width: ', ad.picture.placeholder.width, "; height: ", ad.picture.placeholder.height, ';"><a target="_blank" href="', ad.clickImageUrl, '" class="yap-picture-block__link"style="width: ', ad.picture.width, "px !important;height: ", ad.picture.height, "px !important;margin-left: -", ad.picture.width / 2, 'px !important;"><img class="yap-picture-block__image yap-image" src="', ad.picture.src, '" alt=""style="width: ', ad.picture.width, "px !important;max-width: ", ad.picture.width, "px !important;height: ", ad.picture.height, 'px !important;" /></a></yatag>');
                return p.join("")
            },
            videoPlayer: function(obj) {
                var p = [];
                with (obj)
                    p.push('<yatag class="yap-video-player"style="width: ', ad.player.width, "px !important;height: ", ad.player.height, 'px !important;"><yatag id="', ad.uniqId, '__video" class="yap-video-player__video"></yatag></yatag>');
                return p.join("")
            },
            extDistrib: function(obj) {
                var p = [];
                with (obj) {
                    p.push("");
                    obj.format || {};
                    p.push("");
                    var fullWidth = !!obj.fullWidth;
                    p.push("");
                    var buttonSize = obj.bigButton ? "m" : "s";
                    p.push('<yatag class="yap-ext-distrib yap-ext-distrib_full-width_', fullWidth, '">'),
                        obj.isInline ? p.push('<a class="yap-contacts__item-link" target="_blank" href="', ad.url, '">', ad.addInfo.callToAction, "</a>") : p.push("", templates.button({
                            link: ad.url,
                            text: ad.addInfo.callToAction,
                            size: buttonSize
                        }), ""),
                        p.push("</yatag>")
                }
                return p.join("")
            },
            compact: function(obj) {
                var p = [];
                with (obj) {
                    p.push("");
                    var is0x50 = "0x50" === format.name;
                    p.push(""),
                        function() {
                            var t = ads[0];
                            p.push('<yatag class="', id, '" id="', id, '"><yatag class="yap-layout yap-main yap-font-size ', classes, '"><yatag class="yap-layout__wrapper yap-list-wrapper yap-font-family yap-border-color">'),
                            is0x50 && p.push('<yatag class="yap-layout__logo yap-logo yap-logo-bg-color">', templates.logo({
                                title: yaTitle,
                                url: yaUrl,
                                isVertical: !0
                            }), "</yatag>"),
                                p.push('<yatag data-id="', t.adId, '"data-uniq-id="', t.uniqId, '"class="yap-layout__item yap-item yap-border-color yap-layout__item_age_', !!t.age, " yap-layout__item_picture_", !!t.picture, '"><yatag class="yap-layout__inner yap-item-inner">'),
                            is0x50 || p.push('<yatag class="yap-layout__logo yap-logo yap-logo-bg-color">', templates.logo({
                                title: yaTitle,
                                url: yaUrl
                            }), "</yatag>"),
                                p.push(""),
                            t.age && p.push('<yatag class="yap-layout__age">', templates.age({
                                ad: t
                            }), "</yatag>"),
                                p.push('<yatag class="yap-layout__content">'),
                            t.picture && p.push('<yatag class="yap-layout__picture" style="', t.picture.placeholder.width, "px; height: ", t.picture.placeholder.height, ';">', templates.picture({
                                ad: t
                            }), "</yatag>"),
                                p.push('<yatag class="yap-layout__title">', templates.title({
                                    ad: t
                                }), ""),
                            is0x50 || (p.push(""),
                                t.isAppAd && t.addInfo.rating && format.type === Const.BlockTypes.COMPACT ? p.push('<yatag class="yap-layout__rating">', templates.mobileApp__rating({
                                    ad: t
                                }), "</yatag>") : (p.push(""),
                                t.domain && p.push('<yatag class="yap-layout__title-domain">', templates.domain({
                                    ad: t
                                }), "</yatag>"),
                                    p.push("")),
                                p.push("")),
                                p.push('</yatag><yatag class="yap-layout__body yap-text">', templates.body({
                                    ad: t,
                                    clickable: !0
                                }), ""),
                            is0x50 && p.push('<yatag class="yap-layout__extra">'),
                                p.push(""),
                                t.isAppAd ? (p.push("", templates.mobileApp({
                                    ad: t,
                                    hideRating: !0,
                                    plainLink: !0
                                }), ""),
                                t.addInfo.rating && is0x50 && p.push('<yatag class="yap-layout__rating">', templates.mobileApp__rating({
                                    ad: t
                                }), "</yatag>"),
                                    p.push("")) : (p.push(""),
                                is0x50 && (p.push(""),
                                (t.domain || t.vcardUrl || t.region || t.metro || t.geoDistance) && p.push("", templates.contacts({
                                    ad: t,
                                    showFavicon: !1,
                                    format: format,
                                    language: language
                                }), ""),
                                    p.push("")),
                                    p.push("")),
                                p.push(""),
                            is0x50 && p.push("</yatag>"),
                                p.push('</yatag></yatag></yatag><yatag class="yap-layout__adtune"></yatag><yatag class="yap-layout__adtune-message"></yatag></yatag></yatag></yatag></yatag>')
                        }(),
                        p.push("")
                }
                return p.join("")
            },
            vk: function(obj) {
                var p = [];
                with (obj) {
                    p.push("");
                    var b_ = util.bemFormatter(block.blockName);
                    p.push("");
                    var isNewVk = block.isNewVk;
                    p.push('<yatag class="ya-partner_ads ', id, '" id="', id, '"><yatag class="', b_("-main", util.browser.isIE6 || util.browser.isIE7 || util.browser.isIE8 ? "-main-ie" : ""), '"><yatag class="', b_("-list"), '">'),
                        util.each(ads, function(t, i) {
                            p.push('<a data-id="', t.adId, '"data-uniq-id="', t.uniqId, '"class="', b_("-item -item-" + (i + 1), t.picture ? "-item-has-picture" : ""), '"target="_blank" href="', t.url, '">'),
                            t.picture && block.isNewVk && (p.push('<yatag class="', b_("-picture"), '"style="width: ', t.picture.width, "px !important;height: ", t.picture.height, 'px !important;" ><img class="', b_("-image"), '" alt="..."src="', t.picture.src, '"style="width: ', t.picture.width, "px !important;height: ", t.picture.height, 'px !important;" />'),
                            t.age && p.push('<yatag class="', b_("-age"), '">', t.age, "</yatag>"),
                                p.push('<yatag class="', b_("-picture-border"), '"></yatag></yatag>')),
                                p.push('<yatag class="', b_("-title"), '">', t.title, "</yatag>"),
                            t.domain && p.push('<yatag class="', b_("-domain"), '">', t.domain, "</yatag>"),
                                p.push(""),
                            t.picture && !isNewVk && p.push('<img class="', b_("-image"), '" alt="..."src="', t.picture.src, '"style="width: ', t.picture.width, "px !important;height: ", t.picture.height, 'px !important;" />'),
                                p.push('<yatag class="', b_("-body"), '">', t.body, "</yatag>", t.debug, ""),
                            t.isAppAd && p.push('<yatag class="', b_("-app"), '">', templates.mobileApp({
                                ad: t,
                                noLink: !0,
                                buttonFullWidth: !0,
                                ratingFullWidth: !0,
                                ratingCentered: !isNewVk
                            }), "</yatag>"),
                                p.push(""),
                            t.age && !isNewVk && p.push('<yatag class="', b_("-age"), '">', t.age, "</yatag>"),
                                p.push(""),
                            t.warning && p.push('<yatag class="', b_("-warning"), '">', t.warning, "</yatag>"),
                                p.push("</a>")
                        }),
                        p.push('</yatag><yatag class="', b_("-logo"), '">', yaTitle, "</yatag></yatag></yatag>")
                }
                return p.join("")
            },
            mailru: function(obj) {
                var p = [];
                with (obj)
                    p.push('<yatag class="', id, ' yap-reset" id="', id, '"><yatag class="yap-layout yap-main yap-font-size yap-layout_type_', layout, " ", classes, '"><yatag class="yap-layout__wrapper yap-list-wrapper yap-font-family yap-border-color"><table class="yap-layout__items yap-list"><tr>'),
                        util.each(ads, function(t, i) {
                            p.push('<td data-id="', t.adId, '"data-uniq-id="', t.uniqId, '"class="yap-layout__item yap-item yap-border-color yap-layout__item_nth_', i + 1, " yap-layout__item_picture_", !!t.picture, '"><yatag class="yap-layout__outer"><yatag class="yap-layout__inner yap-item-inner"><yatag class="yap-layout__title">', templates.title({
                                ad: t
                            }), ""),
                            t.age && p.push('&nbsp;<yatag class="yap-layout__age">', templates.age({
                                ad: t
                            }), "</yatag>"),
                                p.push("</yatag>"),
                            t.picture && p.push('<yatag class="yap-layout__picture" style="width: ', t.picture.placeholder.width, '">', templates.picture({
                                ad: t
                            }), "</yatag>"),
                                p.push('<yatag class="yap-layout__content"><yatag class="yap-layout__body yap-text">', templates.body({
                                    ad: t,
                                    clickable: settings.c11n.textClickable
                                }), "</yatag>"),
                            t.debug && p.push('<yatag class="yap-layout__debug">', t.debug, "</yatag>"),
                                p.push("</yatag>"),
                                t.isAppAd ? p.push('<yatag class="yap-layout__app">', templates.mobileApp({
                                    ad: t,
                                    ratingFullWidth: !0
                                }), "</yatag>") : (p.push(""),
                                (t.domain || t.vcardUrl || t.region || t.metro || t.geoDistance) && p.push("", templates.contacts({
                                    ad: t,
                                    language: language
                                }), ""),
                                    p.push("")),
                                p.push(""),
                            (t.warning || t.isExtDistrib) && p.push('<yatag class="yap-layout__warning">', templates.warning({
                                ad: t
                            }), "</yatag>"),
                                p.push('<yatag class="yap-layout__adtune"></yatag></yatag><yatag class="yap-layout__adtune-message"></yatag></yatag></td>'),
                            i < ads.length - 1 && format.type == Const.BlockTypes.VERTICAL && p.push("</tr><tr>"),
                                p.push("")
                        }),
                        p.push('</tr></table></yatag><yatag class="yap-layout__logo yap-logo yap-logo-bg-color">', yaTitle, "</yatag></yatag></yatag>");
                return p.join("")
            },
            poster: function(obj) {
                var p = [];
                with (obj) {
                    p.push("");
                    var imagePadding = 7;
                    p.push('<yatag class="', id, '" id="', id, '"><yatag class="yap-layout yap-main yap-font-size yap-layout_type_', layout, " ", classes, '"><yatag class="yap-layout__logo yap-logo yap-logo-bg-color">', templates.logo({
                        title: yaTitle,
                        url: yaUrl
                    }), '</yatag><yatag class="yap-layout__wrapper yap-list-wrapper yap-font-family yap-border-color"><table class="yap-layout__items yap-list"><tr>'),
                        util.each(ads, function(t, i) {
                            p.push("");
                            var e = t.isAppAd && t.addInfo && !t.addInfo.rating || t.isExtDistrib;
                            p.push('<td data-id="', t.adId, '"data-uniq-id="', t.uniqId, '"class="yap-layout__item yap-item yap-border-color yap-layout__item_nth_', i + 1, " yap-layout__item_picture_", !!t.picture, " yap-layout__item_sticky-arrow_", t.isAppAd && t.addInfo && !t.addInfo.rating, " yap-layout__item_short_", e, '"><yatag class="yap-layout__outer">'),
                            t.picture && p.push("", templates.poster__bg({
                                ad: t
                            }), ""),
                                p.push('<yatag class="yap-layout__inner yap-item-inner"><yatag class="yap-layout__title">', templates.title({
                                    ad: t,
                                    noFavicon: !0
                                }), ""),
                            t.age && p.push('&nbsp;<yatag class="yap-layout__age">', templates.age({
                                ad: t
                            }), "</yatag>"),
                                p.push(""),
                                t.isAppAd ? (p.push(""),
                                t.addInfo.rating && p.push('<yatag class="yap-layout__title-rating">', templates.mobileApp__rating({
                                    ad: t
                                }), "</yatag>"),
                                    p.push("")) : (p.push(""),
                                t.domain && p.push('<yatag class="yap-layout__title-domain">', templates.domain({
                                    ad: t,
                                    showFavicon: !0
                                }), "</yatag>"),
                                    p.push("")),
                                p.push(""),
                            t.picture && p.push('<yatag class="yap-layout__arrow">', templates.arrow({}), '</yatag><yatag class="yap-layout__arrow yap-layout__arrow_roll-up">', templates.arrow({}), "</yatag>"),
                                p.push('</yatag><yatag class="yap-layout__content">'),
                                t.player ? p.push('<yatag class="yap-layout__video ', t.isAppAd ? " yap-layout__picture_plain" : "", '"style="margin-left: -', t.player.width / 2, "px !important;margin-top: -", t.player.height / 2 - (t.warning ? 0 : imagePadding / 2), "px !important;width: ", t.player.width, "px !important;height: ", t.player.height, 'px; !important">', templates.videoPlayer({
                                    ad: t
                                }), "</yatag>") : t.picture && p.push('<yatag class="yap-layout__picture ', t.isAppAd ? " yap-layout__picture_plain" : "", '"style="background-image: url(', t.picture.src, ") !important;margin-left: -", t.picture.width / 2, "px !important;margin-top: -", t.picture.height / 2 - (t.warning ? 0 : imagePadding / 2), "px !important;width: ", t.picture.width, "px !important;height: ", t.picture.height, 'px; !important"></yatag>'),
                                p.push('<yatag class="yap-layout__slider"style="min-height: ', t.picture ? t.picture.height + 2 * imagePadding : 0, "px;"),
                            (util.browser.isIE6 || util.browser.isIEQuirks) && p.push("height: ", t.picture ? t.picture.height + 7 * imagePadding : 0, "px;"),
                                p.push('"><yatag class="yap-layout__slider-inner"><yatag class="yap-layout__body yap-text">', templates.body({
                                    ad: t,
                                    clickable: settings.c11n.textClickable
                                }), "</yatag>"),
                            t.debug && p.push('<yatag class="yap-layout__debug">', t.debug, "</yatag>"),
                                p.push(""),
                                t.isAppAd ? p.push('<yatag class="yap-layout__app">', templates.mobileApp({
                                    ad: t,
                                    hideRating: !0
                                }), "</yatag>") : t.isExtDistrib ? p.push('<yatag class="yap-layout__ext-distrib">', templates.extDistrib({
                                    ad: t,
                                    bigButton: !0
                                }), "</yatag>") : (p.push(""),
                                t.sitelinks && p.push('<yatag class="yap-layout__sitelinks">', templates.sitelinks({
                                    ad: t
                                }), "</yatag>"),
                                    p.push(""),
                                (t.workingTime || t.telNum) && p.push('<yatag class="yap-layout__schedule">', templates.schedule({
                                    ad: t
                                }), "</yatag>"),
                                    p.push(""),
                                (t.vcardUrl || t.region || t.metro || t.geoDistance) && p.push("", templates.contacts({
                                    ad: t,
                                    hideDomain: !0,
                                    language: language
                                }), ""),
                                    p.push("")),
                                p.push("</yatag></yatag></yatag>"),
                            (t.warning || t.isExtDistrib) && p.push('<yatag class="yap-layout__warning">', templates.warning({
                                ad: t
                            }), "</yatag>"),
                                p.push('<yatag class="yap-layout__adtune"></yatag></yatag><yatag class="yap-layout__adtune-message"></yatag></yatag></td>'),
                            i < ads.length - 1 && format.type == Const.BlockTypes.VERTICAL && p.push("</tr><tr>"),
                                p.push("")
                        }),
                        p.push("</table></yatag></yatag></yatag>")
                }
                return p.join("")
            },
            poster__bg: function(obj) {
                var p = [];
                with (obj) {
                    p.push("");
                    var canUseBg = util.browser.support.cssFilterBlur && util.browser.support.cssTransform;
                    p.push("");
                    var oldIE = util.browser.isIEQuirks || util.browser.isIE6 || util.browser.isIE7 || util.browser.isIE8;
                    p.push('<yatag class="yap-layout__bg ', canUseBg ? "" : "yap-layout__bg_" + (oldIE ? "old-ie" : "svg"), '">'),
                        canUseBg ? p.push('<yatag class="yap-layout__bg-img" style="background-image: url(', ad.picture.src, ')"></yatag>') : oldIE ? p.push('<img src="', ad.picture.src, '" alt="" />') : p.push('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><filter id="blur', ad.adId, '" x="0" y="0"><feGaussianBlur stdDeviation="4"></feGaussianBlur></filter></defs><image xlink:href="', ad.picture.src, '" width="100%" height="100%" filter="url(#blur', ad.adId, ')"></image></svg>'),
                        p.push("</yatag>")
                }
                return p.join("")
            },
            layuot_mobile: function(obj) {
                var p = [];
                with (obj)
                    p.push('<yatag class="', id, ' yap-reset" id="', id, '"><yatag class="yap-layout yap-main yap-font-size yap-layout_type_', layout, " ", classes, '"><yatag class="yap-layout__wrapper yap-list-wrapper yap-font-family yap-border-color">', templates.logo_stamp({
                        title: yaTitle,
                        url: yaUrl
                    }), '<table class="yap-layout__items yap-list"><tr>'),
                        util.each(ads, function(t, i) {
                            p.push('<td data-id="', t.adId, '"data-uniq-id="', t.uniqId, '"class="yap-layout__item yap-item yap-border-color yap-layout__item_nth_', i + 1, " yap-layout__item_picture_", !!t.picture, " "),
                            t.picture && p.push("yap-item-has-picture"),
                                p.push(" "),
                            t.isAppAd && p.push("yap-layout__item_app"),
                                p.push('"><yatag class="yap-layout__outer"><yatag class="yap-layout__inner yap-item-inner">');
                            var e = t.iconPicture && "320x480" === format.name;
                            p.push(""),
                            settings.format.type === Const.BlockTypes.HORIZONTAL && p.push("", templates.titleWithIcon({
                                ad: t,
                                iconAlreadyShown: e
                            }), ""),
                                p.push(""),
                            t.picture && (p.push('<yatag class="yap-layout__picture" style="width: ', "480x320" === format.name ? t.picture.placeholder.width : "", " !important;height: ", t.picture.placeholder.height, ' !important;"><a target="_blank" href="', t.clickImageUrl, '" class="yap-picture-block__link" style="width: ', t.picture.width, "px !important;height: ", t.picture.height, "px !important;margin-left: -", t.picture.width / 2, 'px !important;"><img src="', t.picture.src, '" alt="" style="width: 100% !important;"/></a></yatag>'),
                            e && p.push('<a href="', t.url, '" class="yap-layout__icon" target="_blank"><img class="yap-layout__icon-img" src="', t.iconPicture.src, '" alt=""></a>'),
                                p.push("")),
                                p.push('<yatag class="yap-layout__content">'),
                            settings.format.type === Const.BlockTypes.VERTICAL && p.push("", templates.titleWithIcon({
                                ad: t,
                                iconAlreadyShown: e
                            }), ""),
                                p.push('<yatag class="yap-layout__body yap-text">', templates.body({
                                    ad: t,
                                    clickable: settings.c11n.textClickable
                                }), ""),
                            t.age && p.push('&nbsp;<yatag class="yap-layout__age">', templates.age({
                                ad: t
                            }), "</yatag>"),
                                p.push("</yatag>"),
                                t.isAppAd ? (p.push(""),
                                    p.push('<yatag class="yap-layout__app">', templates.mobileApp({
                                        ad: t,
                                        iconAlreadyShown: !0
                                    }), "</yatag>")) : t.isExtDistrib ? p.push('<yatag class="yap-layout__ext-distrib">', templates.extDistrib({
                                    ad: t,
                                    bigButton: !0,
                                    fullWidth: settings.format.type === Const.BlockTypes.VERTICAL
                                }), "</yatag>") : (p.push('<yatag class="yap-layout__contacts yap-contacts">'),
                                t.domain && !obj.hideDomain && p.push('<yatag class="yap-contacts__item yap-contacts__item_domain">', templates.domain({
                                    ad: t,
                                    showFavicon: !t.picture
                                }), "</yatag>"),
                                    p.push(""),
                                t.vcardUrl && p.push('<yatag class="yap-contacts__item"><a class="yap-contacts__item-link" target="_blank" href="', t.vcardUrl, '">', I18n.getString("ADDRESS_AND_PHONE", obj.language), "</a></yatag>"),
                                    p.push(""),
                                (t.region || t.metro) && p.push('<yatag class="yap-contacts__item"><yatag class="yap-contacts__item-text yap-domain-text">', t.metro ? I18n.getString("METRO", obj.language) + "&nbsp;" + t.metro : t.region, "</yatag></yatag>"),
                                    p.push(""),
                                t.geoDistance && p.push('<yatag class="yap-contacts__item yap-address">', templates.contacts__geo({
                                    geoDistance: t.geoDistance,
                                    language: language
                                }), "</yatag>"),
                                    p.push("</yatag>")),
                                p.push(""),
                            t.debug && p.push('<yatag class="yap-layout__debug">', t.debug, "</yatag>"),
                                p.push("</yatag>"),
                            (t.warning || t.isExtDistrib) && p.push('<yatag class="yap-layout__warning">', templates.warning({
                                ad: t
                            }), "</yatag>"),
                                p.push("</yatag></yatag></td>"),
                            i < ads.length - 1 && format.type == Const.BlockTypes.VERTICAL && p.push("</tr><tr>"),
                                p.push("")
                        }),
                        p.push("</tr></table></yatag></yatag></yatag>");
                return p.join("")
            },
            titleWithIcon: function(obj) {
                var p = [];
                with (obj)
                    p.push('<yatag class="yap-layout__title-wrap">'),
                    !obj.iconAlreadyShown && ad.iconPicture && p.push('<yatag class="yap-layout__title-icon"><a class="yap-layout__title-icon-link" href="', ad.url, '" target="_blank"><img src="', ad.iconPicture.src, '" alt="" class="yap-layout__title-icon-image"></a></yatag>'),
                        p.push('<yatag class="yap-layout__title">', templates.title({
                            ad: ad,
                            noFavicon: !0
                        }), "</yatag></yatag>");
                return p.join("")
            },
            arrow: function(obj) {
                var p = [];
                with (obj)
                    p.push('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="11px" height="7px" viewBox="0 0 12 7"><path d="M11,1.4L5.5,7L0,1.4L0.5,0.875L5.5,6L10.5,0.875L11,1.4z"></path></svg>');
                return p.join("")
            },
            "300x250": function(obj) {
                var p = [];
                with (obj)
                    p.push('<yatag class="', id, ' yap-reset" id="', id, '"><yatag class="yap-layout yap-main yap-font-size yap-layout_type_', layout, " ", classes, '"><yatag class="yap-layout__wrapper yap-list-wrapper yap-font-family yap-border-color">', templates.logo_stamp({
                        title: yaTitle,
                        url: yaUrl
                    }), '<table class="yap-layout__items yap-list"><tr>'),
                        util.each(ads, function(t, i) {
                            if (p.push('<td data-id="', t.adId, '"data-uniq-id="', t.uniqId, '"class="yap-layout__item yap-item yap-border-color yap-layout__item_nth_', i + 1, " yap-layout__item_picture_", !!t.picture, " "),
                                t.picture && p.push("yap-item-has-picture"),
                                    p.push(" "),
                                t.isAppAd && p.push("yap-layout__item_app"),
                                    p.push(" "),
                                t.age && p.push("yap-layout__item_age"),
                                    p.push('"><yatag class="yap-layout__adtune"></yatag><yatag class="yap-layout__outer"><yatag class="yap-layout__inner yap-item-inner"><yatag class="yap-layout__title">', templates.title({
                                        ad: t,
                                        noFavicon: !0
                                    }), '</yatag><yatag class="yap-layout__content">'),
                                t.picture && p.push('<yatag class="yap-layout__picture" style="width: ', t.picture.placeholder.width, " !important;height: ", t.picture.placeholder.height, ' !important;"><a target="_blank" href="', t.clickImageUrl, '" class="yap-picture-block__link" style="width: ', t.picture.width, "px !important;height: ", t.picture.height, 'px !important;"><img src="', t.picture.src, '" alt="" style="margin-left: -', t.picture.width / 2, 'px !important;width: 100% !important;"/></a></yatag>'),
                                    p.push('<yatag class="yap-layout__body yap-text">', templates.body({
                                        ad: t,
                                        clickable: settings.c11n.textClickable
                                    }), ""),
                                t.age && p.push('&nbsp;<yatag class="yap-layout__age">', templates.age({
                                    ad: t
                                }), "</yatag>"),
                                    p.push("</yatag>"),
                                    t.isAppAd) {
                                p.push(""),
                                    p.push('<yatag class="yap-layout__app">');
                                t.iconPicture;
                                p.push("", templates.mobileApp({
                                    ad: t,
                                    iconAlreadyShown: !1
                                }), "</yatag>")
                            } else
                                t.isExtDistrib ? p.push('<yatag class="yap-layout__ext-distrib">', templates.extDistrib({
                                    ad: t
                                }), "</yatag>") : (p.push('<yatag class="yap-contacts">'),
                                t.picture || !t.domain || obj.hideDomain || p.push('<yatag class="yap-contacts__item yap-contacts__item_domain">', templates.domain({
                                    ad: t,
                                    showFavicon: !t.picture
                                }), "</yatag>"),
                                    p.push(""),
                                t.vcardUrl && p.push('<yatag class="yap-contacts__item"><a class="yap-contacts__item-link" target="_blank" href="', t.vcardUrl, '">', I18n.getString("ADDRESS_AND_PHONE", obj.language), "</a></yatag>"),
                                    p.push(""),
                                (t.region || t.metro) && p.push('<yatag class="yap-contacts__item"><yatag class="yap-contacts__item-text yap-domain-text">', t.metro ? I18n.getString("METRO", obj.language) + "&nbsp;" + t.metro : t.region, "</yatag></yatag>"),
                                    p.push(""),
                                t.picture && t.domain && !obj.hideDomain && p.push('<yatag class="yap-contacts__item yap-contacts__item_domain">', templates.domain({
                                    ad: t,
                                    showFavicon: !t.picture
                                }), "</yatag>"),
                                    p.push("</yatag>"));
                            p.push(""),
                            t.debug && p.push('<yatag class="yap-layout__debug">', t.debug, "</yatag>"),
                                p.push("</yatag>"),
                            (t.warning || t.isExtDistrib) && p.push('<yatag class="yap-layout__warning">', templates.warning({
                                ad: t
                            }), "</yatag>"),
                                p.push('</yatag><yatag class="yap-layout__adtune-message"></yatag></yatag></td>'),
                            (i < ads.length - 1 && format.type == Const.BlockTypes.VERTICAL || format.type == Const.BlockTypes.GRID && 1 == i) && p.push("</tr><tr>"),
                                p.push("")
                        }),
                        p.push("</tr></table></yatag></yatag></yatag>");
                return p.join("")
            },
            "728x90-design": function(obj) {
                var p = [];
                with (obj) {
                    p.push('<yatag class="', id, ' yap-reset" id="', id, '"><yatag class="yap-layout yap-main yap-font-size ', classes, '"><yatag class="yap-layout__wrapper yap-list-wrapper yap-font-family yap-border-color">', templates.logo_stamp({
                        title: yaTitle,
                        url: yaUrl
                    }), '<table class="yap-layout__items yap-list"><tr>');
                    var ad = ads[0];
                    p.push('<td class="yap-layout__item yap-item yap-border-color yap-layout__item_picture_', !!ad.picture, " "),
                    ad.picture && p.push("yap-item-has-picture"),
                        p.push('"data-id="', ad.adId, '"data-uniq-id="', ad.uniqId, '"><yatag class="yap-layout__outer"><yatag class="yap-layout__inner yap-item-inner"><yatag class="yap-layout__adtune"></yatag><yatag class="yap-layout__main">'),
                    ad.picture && (p.push('<yatag class="yap-layout__picture" style="width: ', ad.picture.placeholder.width, ' !important;">', templates.picture({
                        ad: ad
                    }), ""),
                    ad.age && p.push('<yatag class="yap-layout__picture-age">', ad.age, "</yatag>"),
                        p.push("</yatag>")),
                        p.push('<yatag class="yap-layout__row-section"><yatag class="yap-layout__row-button"><yatag class="yap-layout__button">', templates.button({
                            link: ad.isAppAd ? ad.addInfo.callToActionUrl : ad.url,
                            text: ad.isAppAd || ad.isExtDistrib ? ad.addInfo.callToAction : I18n.getString("GO", obj.language),
                            size: "m"
                        }), '</yatag><yatag class="yap-layout__dummy"></yatag></yatag><yatag class="yap-layout__row-content"><yatag class="yap-layout__content"><yatag class="yap-layout__title">', templates.title({
                            ad: ad,
                            noFavicon: !0
                        }), ""),
                    !ad.picture && ad.age && p.push('&nbsp;<yatag class="yap-layout__age">', ad.age, "</yatag>"),
                        p.push('</yatag><yatag class="yap-layout__body yap-text">', templates.body({
                            ad: ad,
                            clickable: settings.c11n.textClickable
                        }), ""),
                    ad.isAppAd && (p.push(""),
                    ad.addInfo.price && p.push('<yatag class="yap-layout__app-price">&nbsp;&ndash;&nbsp;<b>', ad.addInfo.price, "</b>&nbsp;", ad.addInfo.priceCurrencySymbol, "</yatag>"),
                        p.push(""),
                    ad.isAppAd && ad.addInfo.rating && p.push('&nbsp;<yatag class="yap-layout__app">', templates.mobileApp__rating({
                        ad: ad,
                        disableParentheses: !0
                    }), "</yatag>"),
                        p.push("")),
                        p.push("</yatag>"),
                    !ad.isAppAd && ad.domain && p.push('<yatag class="yap-layout__domain">', templates.domain({
                        ad: ad,
                        showFavicon: !0
                    }), "</yatag>"),
                        p.push(""),
                    ad.debug && p.push('<yatag class="yap-layout__debug">', ad.debug, "</yatag>"),
                        p.push(""),
                    (ad.warning || ad.isExtDistrib) && p.push('<yatag class="yap-layout__warning-dummy">&nbsp;</yatag>'),
                        p.push('</yatag><yatag class="yap-layout__dummy"></yatag></yatag>'),
                    (ad.warning || ad.isExtDistrib) && p.push('<yatag class="yap-layout__warning">', templates.warning({
                        ad: ad
                    }), "</yatag>"),
                        p.push('</yatag></yatag></yatag><yatag class="yap-layout__adtune-message"></yatag></yatag></td></tr></table></yatag></yatag></yatag>')
                }
                return p.join("")
            },
            stripe: function(obj) {
                var p = [];
                with (obj)
                    p.push('<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head><body><style>html,body {border: none;margin: 0;padding: 0;background: transparent;overflow: hidden;font: normal 12px Arial, sans-serif;}.stripe {overflow: hidden;position: absolute;top: 0;right: 0;width: 100%;min-width: 320px;height: ', height, "px;background: ", backgroundColor, ' 0 0 repeat url("', backgroundColorFile, '");background-size: auto 100%;}.stripe__wrapper {position: relative;height: 100%;margin: 0 1em;}a.stripe__link {z-index: 4;position: absolute;left: ', text1Left || ageRestriction ? "2em" : 0, ";right: ", closeText ? "7em" : "2em", ";top: 0;height: 100%;/* \u041f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u0430\u044f \u0433\u0438\u0444\u043a\u0430 \u043d\u0443\u0436\u043d\u0430, \u0447\u0442\u043e\u0431\u044b \u0432 IE \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0447\u0435\u043c-\u0442\u043e \u0441\u0441\u044b\u043b\u043a\u0443 */background: url(data:image/gif;base64,R0lGODlhAQABAAAAACw=);}/* \u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c \u0442\u0435\u043a\u0441\u0442\u0430 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0443\u0437\u043a\u043e\u0439 \u043f\u043e\u043b\u043e\u0441\u043a\u0435 */.stripe__text-ext {display: none;}/* \u0421\u0441\u044b\u043b\u043a\u0430-\u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 */.stripe_hover_true .stripe__agreement {display: inline;}.stripe__agreement {display: ", util.browser.support.touch ? "inline" : "none", ";color: ", text2Color, ";margin-left: 20px;font-size: ", text2FontSize, "px;}.stripe__agreement-link {color: ", text2Color, ";text-decoration: underline;}.stripe__agreement-link:hover {color: ", text2HoverColor, ";}.stripe__background {z-index: 3;position: absolute;top: 0;height: 100%;left: ", backgroundImagePosLeft, ";}/* \u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 + \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u043f\u043e \u0445\u043e\u0432\u0435\u0440\u0443 */.stripe__background-image {z-index: 1;position: absolute;left: 0;top: 0;max-height: 100%;height: ", util.browser.isIEQuirks ? "100%" : "auto", ";border: none;}.stripe__background-image_hover {z-index: 2;display: none;}.stripe_bghover_true .stripe__background-image_hover {display: block;}.stripe__layout {width: 100%;height: 100%;border-collapse: collapse;white-space: nowrap;table-layout: fixed;}.stripe__col_age {width: ", ageWidth, ";}.stripe__age {color: ", text1Color, ";font-size: ", text1FontSize, "px;}.stripe__col_text1 {width: ", text1Width, ";}.stripe__col_close {width: ", closeText ? "5em" : "2em", ";text-align: right;}.stripe__col-wrap {display: block;width: 100%;padding-right: 1em;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;overflow: hidden;text-overflow: ellipsis;}/* stripe texts are over main link */.stripe__text1,.stripe__text2,.stripe__agreement {z-index: 5;position: relative;}/* colors */.stripe__text1 {padding-left: ", text1Position, "px;text-decoration: ", text1Decoration, ";font-size: ", text1FontSize, "px;}.stripe__text1,.stripe__col_text1 .stripe__col-wrap {color: ", text1Color, ";}.stripe__text1:hover {color: ", text1HoverColor, ";}.stripe__text2 {display: inline-block;padding-left: ", text2Position, "px;text-decoration: ", text2Decoration, ";font-size: ", text2FontSize, "px;}.stripe__text2,.stripe__col_text2 .stripe__col-wrap {color: ", text2Color, ";}.stripe__text2:hover {color: ", text2HoverColor, ";}/* \u041a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u044f */.stripe__close {z-index: 5;position: relative;padding: 3px 0 3px 3px;cursor: pointer;color: ", closeColor, ";text-decoration: none;line-height: 1em;}.stripe__close:hover {color: ", closeHoverColor, ";}.stripe__close span {vertical-align: middle;}.stripe__close-text {display: inline-block;margin-right: .5em;border-color: ", closeColor, ";border-style: dotted;border-width: 0;border-bottom-width: ", closeBorder, ";font-size: ", text1FontSize, "px;}.stripe__close:hover .stripe__close-text {border-color: ", closeHoverColor, ";}.stripe__close .stripe__close-x {font-size: ", xFontSize, "px;}/* \u041b\u043e\u0433\u0438\u043a\u0430 \u0441\u043a\u0440\u044b\u0442\u0438\u044f \u043f\u043e\u043b\u0435\u0439 \u043d\u0430 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u043e\u043c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0438 */@media screen and (max-width: 830px) {.stripe_narrow_no-bg .stripe__col_text1,.stripe_narrow_bg-text2 .stripe__col_text1 {display: none;}.stripe_narrow_bg-text1 .stripe__col_text1 {width: auto;}.stripe_narrow_bg-text1 .stripe__col_text2 {display: none;}.stripe_narrow_bg-text2 .stripe__background {left: ", backgroundImageNarrowPosLeft, ";}/* \u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u0443\u044e \u0447\u0430\u0441\u0442\u044c \u0442\u0435\u043a\u0441\u0442\u0430 \u0432 \u0441\u0436\u0430\u0442\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043f\u043e\u043b\u043e\u0441\u043a\u0438 */.stripe__text-ext {display: inline;}.stripe_narrow_bg-random .stripe__col_text1,.stripe_narrow_bg-random .stripe__background {display: none;}.stripe__close .stripe__close-text {display: none;}}/* \u041d\u0430 \u043f\u0435\u0447\u0430\u0442\u0438 \u043f\u0440\u044f\u0447\u0435\u043c \u043f\u043e\u043b\u043e\u0441\u043a\u0443 */@media print {.stripe {display: none;}}</style><!--[if lt IE 9]><style>.stripe__text1 {padding-left: ", text1Position + 8, "px;}.stripe__text2 {padding-left: ", text2Position + 8, "px;}.stripe_narrow_no-bg .stripe__col_text1,.stripe_narrow_bg-text2 .stripe__col_text1 {display: none;}.stripe_narrow_bg-text1 .stripe__col_text1 {width: auto;}.stripe_narrow_bg-text1 .stripe__col_text2 {display: none;}.stripe_narrow_bg-text2 .stripe__background {left: ", backgroundImageNarrowPosLeft, ';}.stripe__text-ext {display: inline;}.stripe_narrow_bg-random .stripe__col_text1,.stripe_narrow_bg-random .stripe__background {display: none;}.stripe__close .stripe__close-text {display: none;}</style><![endif]--><div class="stripe stripe_narrow_', narrowMode, '" id="container"><div class="stripe__wrapper">'),
                    backgroundImage && (p.push('<div class="stripe__background"><img class="stripe__background-image" src="', backgroundImage, '" />'),
                    backgroundColorFile2 && p.push('<img class="stripe__background-image stripe__background-image_hover" src="', backgroundColorFile2, '" />'),
                        p.push("</div>")),
                        p.push('<table class="stripe__layout"><tr>'),
                    (text1Left || ageRestriction) && (p.push('<td class="stripe__col stripe__col_age" id="col-age">'),
                    ageRestriction && p.push('<div class="stripe__age" id="age">', ageRestriction, "</div>"),
                        p.push("</td>")),
                        p.push('<td class="stripe__col stripe__col_text1"><div class="stripe__col-wrap"><a class="stripe__text1" id="text1" href="', text1Url, '" target="', text1Target, '">', text1[0], '<span class="stripe__text-ext">', text1[1], "</span>", text1[2], '</a></div></td><td class="stripe__col stripe__col_text2"><div class="stripe__col-wrap"><a class="stripe__text2" id="text2" href="', text2Url, '" target="', text2Target, '">', text2[0], '<span class="stripe__text-ext">', text2[1], "</span>", text2[2], "</a>"),
                    agreementUrl && p.push('<span class="stripe__agreement" id="agreement">', agreementText[0], '<a class="stripe__agreement-link" href="', agreementUrl, '" target="_blank">', agreementText[1], "</a>", agreementText[2], "</span>"),
                        p.push('</div></td><td class="stripe__col stripe__col_close" id="col-close"><a class="stripe__close" id="close">'),
                    closeText && p.push('<span class="stripe__close-text">', closeText, "</span>"),
                        p.push('<span class="stripe__close-x">&times;</span></a></td></tr></table><a href="', voidUrl, '" target="', voidTarget, '" class="stripe__link" id="mainlink"></a></div></div></body></html>');
                return p.join("")
            },
            mobileApp: function(obj) {
                var p = [];
                with (obj) {
                    p.push('<yatag class="yap-mobile-app ', obj.plainLink ? "yap-mobile-app_inline" : "", '">');
                    var price = ad.addInfo.price ? "&nbsp;&ndash; " + ad.addInfo.price + "&nbsp;" + ad.addInfo.priceCurrencySymbol : null ;
                    p.push(""),
                        obj.plainLink ? p.push('<a class="yap-mobile-app__link" href="', ad.addInfo.callToActionUrl, '" target="_blank">', ad.addInfo.callToAction + (price ? price : ""), "</a>") : p.push('<yatag class="yap-mobile-app__button">', templates.buttonMobile({
                            text: ad.addInfo.callToAction,
                            extraText: price,
                            link: obj.noLink ? null : ad.addInfo.callToActionUrl,
                            icon: obj.iconAlreadyShown ? null : ad.iconPicture
                        }), "</yatag>"),
                        p.push(""),
                    ad.addInfo.rating && !obj.hideRating && p.push("", templates.mobileApp__rating({
                        ad: ad,
                        centered: obj.ratingCentered,
                        fullWidth: obj.ratingFullWidth
                    }), ""),
                        p.push("</yatag>")
                }
                return p.join("")
            },
            mobileApp__rating: function(obj) {
                var p = [];
                with (obj) {
                    p.push("");
                    var ratingClasses = "";
                    p.push(""),
                        ratingClasses += ad.addInfo.reviewCount ? "" : " yap-mobile-app__rating_no-votes",
                        p.push(""),
                        ratingClasses += obj.centered ? " yap-mobile-app__rating_content_centered" : "",
                        p.push(""),
                        ratingClasses += obj.fullWidth ? " yap-mobile-app__rating_width_full" : "",
                        p.push("");
                    var reviewCountString = util.format(obj.disableParentheses ? "${c}" : "(${c})", {
                        c: ad.addInfo.reviewCount
                    });
                    p.push('<yatag class="yap-mobile-app__rating ', ratingClasses, '" title="', "\u0420\u0435\u0439\u0442\u0438\u043d\u0433 " + ad.addInfo.rating + " / 5", '"><yatag class="yap-mobile-app__rating-stars"><yatag class="yap-mobile-app__rating-stars-scale">');
                    for (var i = 0; 5 > i; i++)
                        p.push('<yatag class="yap-mobile-app__rating-star">', templates.mobileApp__star({}), "</yatag>");
                    p.push('</yatag><yatag class="yap-mobile-app__rating-stars-scale yap-mobile-app__rating-stars-scale_filled" style="width: ', ad.addInfo.rating / 5 * 100, '%">');
                    for (var i = 0; 5 > i; i++)
                        p.push('<yatag class="yap-mobile-app__rating-star">', templates.mobileApp__star({
                            active: !0
                        }), "</yatag>");
                    p.push("</yatag></yatag>"),
                    ad.addInfo.reviewCount && p.push('<yatag class="yap-mobile-app__rating-votes">', reviewCountString, "</yatag>"),
                        p.push("</yatag>")
                }
                return p.join("")
            },
            mobileApp__star: function(obj) {
                var p = [];
                with (obj)
                    p.push('<svg class="yap-mobile-app__star-svg" height="12px" version="1.1" viewBox="0 0 32 32" width="12px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="22.137,19.625 32,12 20,12 16,0 12,12 0,12 9.875,19.594 6,32 16.016,24.32 26.008,32"/></svg>');
                return p.join("")
            },
            internal: function(obj) {
                var p = [];
                with (obj)
                    p.push('<yatag class="', id, ' yap-reset" id="', id, '"><yatag class="yap-internal yap-internal_type_', type, '">', html, "</yatag></yatag>");
                return p.join("")
            }
        };
        module.exports = templates
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(42)
            , n = a.augment(o, {
            classes: "yap-layout_block_horizontal",
            getColumns: function() {
                return this.advs.length
            }
        });
        t.exports = n
    }
    , function(t, i, e) {
        function a(t, i) {
            var e = i.split("x", 2);
            return r.augment(t, {
                classes: "yap-layout_block_" + i,
                width: Number(e[0]),
                height: Number(e[1])
            })
        }
        function o(t) {
            return a(c, t)
        }
        function n(t) {
            return a(m, t)
        }
        var r = e(1)
            , s = e(9)
            , p = e(41)
            , l = e(77)
            , d = ["yap-layout_hide_ext-distrib", "yap-layout_hide_domain", "yap-layout_hide_address", "yap-layout_hide_contacts", "yap-layout_hide_sitelinks", "yap-layout_hide_schedule", "yap-layout_hide_rating"]
            , u = {
            classes: ["yap-fixed", "yap-layout_block_fixed", "yap-layout_invisible"].concat(d).join(" "),
            MAX_SCROLL: 1,
            getRemoveOverflowClasses: function() {
                return d
            },
            sortByImages: function() {},
            removeAds: function() {
                for (var t = r.dom(this.itemSelector, this.getMainCont()); t.length > 1 && this.hasScroll(); ) {
                    var i = t.pop()
                        , e = t.length;
                    this.settings.format.type == s.BlockTypes.HORIZONTAL ? (this._setNewWidth(t, Math.floor(100 / e) + "%"),
                        r.dom.remove(i)) : r.dom.remove(i.parentNode),
                        this.dataSource.releaseAd(this.advs.pop().adId)
                }
            },
            _setNewWidth: function(t, i) {
                r.each(t, function(t) {
                    r.dom.setImportantCssProperty(t, "width", i)
                })
            },
            showMisc: function(t) {
                var i = function(i) {
                        this.tryToShow(t, i)
                    }
                    ;
                r.each(this.getRemoveOverflowClasses(), i, this)
            },
            tryToShow: function(t, i) {
                this.hasScroll() || (r.dom.removeClass(t, i),
                this.hasScroll() && r.dom.addClass(t, i))
            },
            removeOverflow: function() {
                var t = r.dom(".yap-layout", this.getMainCont())[0];
                this.removeAds(),
                    this.adjustFontSize(t),
                    this.showMisc(t),
                    this.sortByImagesAfterRender(),
                    r.dom.removeClass(t, "yap-layout_invisible")
            },
            hasScroll: function() {
                var t = r.dom(".yap-layout", this.getMainCont())[0]
                    , i = r.dom(".yap-layout__items", this.getMainCont())[0];
                return t.scrollHeight - this.height > this.MAX_SCROLL || i.offsetHeight - i.parentNode.clientHeight > this.MAX_SCROLL || this.appAdsHaveHorizontalScroll()
            },
            appAdsHaveHorizontalScroll: function() {
                for (var t, i = r.dom(".yap-layout__item_app", this.getMainCont()), e = 0; e < i.length; e++)
                    if (t = r.dom(".yap-layout__app", i[e]),
                        t[0].scrollWidth - t[0].clientWidth > this.MAX_SCROLL)
                        return !0;
                return !1
            },
            adjustFontSize: function() {},
            getWidth: function() {
                return this.width
            },
            sortByImagesAfterRender: function() {
                var t = function(t, i) {
                        r.each(t, function(t, e) {
                            i(t, "yap-layout__item_nth_" + (e + 1))
                        })
                    }
                    ;
                if (this.dataSource.doSortByImages()) {
                    var i = r.dom(this.itemSelector, this.getMainCont())
                        , e = r.dom(".yap-layout__item_picture_false", this.getMainCont());
                    e.length && e.length < i.length && (t(i, r.dom.removeClass),
                        r.each(e, function(t) {
                            t.previousSibling || t.nextSibling || (t = t.parentNode),
                                t.parentNode.appendChild(t)
                        }),
                        t(r.dom(this.itemSelector, this.getMainCont()), r.dom.addClass))
                }
            }
        }
            , c = r.augment(r.augment(p, u), {
            classes: "yap-layout_block_fixed-vertical",
            prepareData: function(t) {
                r.each(t.ads, function(t) {
                    r.each(["title", "body", "warning"], function(i) {
                        t[i] && (t[i] = r.prettify(t[i], {
                            maxGluedLength: 12,
                            softBreakPunct: !0
                        }))
                    }),
                    t.sitelinks && r.each(t.sitelinks, function(t) {
                        t.title = r.prettify(t.title)
                    }),
                        this._addHyphenate(t)
                }, this)
            },
            afterRender: function() {
                c.__super.afterRender.call(this),
                    this.removeOverflow()
            }
        })
            , m = r.augment(r.augment(l, u), {
            classes: "yap-layout_block_fixed-horizontal",
            PADDING: 10,
            getImageSize: function() {
                return {
                    width: this.height > 90 ? 90 : 120,
                    height: this.settings.borderType !== s.BorderTypes.NONE ? this.height - this.PADDING - 2 : this.height - this.PADDING,
                    wideWidthLoss: .2
                }
            },
            getLayout: function() {
                return s.Layouts.WIDE
            },
            afterRender: function() {
                m.__super.afterRender.call(this),
                    this.removeOverflow()
            }
        })
            , _ = r.augment(m, {
            classes: "yap-layout_text-inline",
            getRemoveOverflowClasses: function() {
                return _.__super.getRemoveOverflowClasses.call(this).concat(["yap-layout_text-inline"])
            }
        });
        t.exports = {
            FixedProto: u,
            FixedVertical: c,
            FixedHorizontal: m,
            FixedHorizontalInlineText: _,
            Fixed160x600: o("160x600"),
            Fixed200x300: o("200x300"),
            Fixed250x250: o("250x250"),
            Fixed300x300: o("300x300"),
            Fixed1000x120: n("1000x120")
        }
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(78).FixedHorizontalInlineText
            , n = a.augment(o, {
            classes: "yap-layout_block_320x100 yap-layout_block_fixed-small yap-layout_block_fixed-medium yap-layout_inline-app yap-layout_hide_app",
            width: 320,
            height: 100,
            getRemoveOverflowClasses: function() {
                return ["yap-layout_hide_app", "yap-layout_inline-app", "yap-layout_block_fixed-small", "yap-layout_block_fixed-medium"].concat(n.__super.getRemoveOverflowClasses.call(this))
            },
            createTemplObj: function() {
                var t = n.__super.createTemplObj.apply(this, arguments);
                return this.height < 100 && t.yaTitle.length > 9 && (t.yaTitle = "\u0414\u0438\u0440\u0435\u043a\u0442"),
                    t
            },
            _isSkipWarnings: function() {
                return this.height * this.width < 28e3
            },
            getImageSize: function() {
                var t = this.height - this.PADDING
                    , i = t * (4 / 3);
                return {
                    width: i,
                    height: t,
                    wideWidthLoss: .2
                }
            }
        });
        t.exports = n
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(9)
            , n = e(78).FixedHorizontalInlineText
            , r = a.augment(n, {
            classes: "yap-layout_block_320x50 yap-layout_block_fixed-small yap-layout_block_fixed-medium yap-layout_hide_app",
            width: 320,
            height: 50,
            getRemoveOverflowClasses: function() {
                return ["yap-layout_hide_app", "yap-layout_block_fixed-small", "yap-layout_block_fixed-medium"].concat(r.__super.getRemoveOverflowClasses.call(this))
            },
            getImageSize: function() {
                var t = this.settings.borderType !== o.BorderTypes.NONE ? 2 : 0
                    , i = this.height - t
                    , e = i * (4 / 3);
                return {
                    width: e,
                    height: i,
                    wideWidthLoss: .45
                }
            },
            prepareData: function(t) {
                r.__super.prepareData.call(this, t),
                this.dataSource.isSSP() || a.each(t.ads, function(t) {
                    t.adtuneUrl = ""
                })
            },
            createTemplObj: function() {
                var t = r.__super.createTemplObj.apply(this, arguments);
                return t.yaTitle.length > 9 && (t.yaTitle = "\u0414\u0438\u0440\u0435\u043a\u0442"),
                    t
            }
        });
        t.exports = r
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(78).FixedVertical
            , n = a.augment(o, {
            classes: "yap-layout_block_300x250 yap-layout_hide_contacts yap-layout_hide_domain yap-layout_two-ads",
            width: 300,
            height: 250,
            template: e(76)["300x250"],
            MIN_FONT_SIZE: 21,
            MAX_FONT_SIZE: 27,
            getRemoveOverflowClasses: function() {
                return ["yap-layout_hide_ext-distrib", "yap-layout_hide_domain", "yap-layout_hide_rating", "yap-layout_hide_contacts"]
            },
            isNeedHyphenate: function() {
                return !0
            },
            getImageSize: function() {
                return {
                    width: 120,
                    height: 150,
                    wideWidthLoss: .3
                }
            },
            prepareImages: function(t) {
                var i = this.getImageSize();
                a.each(t.ads, function(t) {
                    !t.image || t.isAppAd && t.skipPictures || (this._hasPicture = !0,
                        t.picture = this._createPicture(t.image, i.width, i.height, i.wideWidthLoss),
                        this.prepareAppIcon(t))
                }, this)
            },
            _createPicture: function(t, i, e, a) {
                var o = t.getFitting(i, e, a);
                return o.placeholder = {
                    width: Math.min(i, o.width) + "px",
                    height: Math.min(e, o.height) + "px"
                },
                    o
            },
            afterRender: function() {
                var t = a.dom(".yap-layout", this.getMainCont())[0];
                this.removeAds(t),
                    this.initBannerComponents(),
                this.advs.length < 2 && (a.dom.removeClass(t, "yap-layout_two-ads"),
                this._hasPicture && (this._fitSizeTitle(t),
                    this._fitSizeImage(t))),
                    this.showMisc(t),
                    this.sortByImagesAfterRender(),
                    this._removeBrokenFavicons(),
                    a.dom.removeClass(t, "yap-layout_invisible")
            },
            _fitSizeTitle: function(t) {
                for (var i, e = a.dom(".yap-title-block__text", t)[0], o = a.dom(".yap-layout__title", t)[0], n = this.MAX_FONT_SIZE; n > this.MIN_FONT_SIZE; ) {
                    var r = e.offsetHeight;
                    if (!i && o.clientHeight / n < 3 && (i = n),
                            !(r >= 3 * n || r >= 2 * n && o.offsetWidth / e.offsetWidth > 1.25))
                        break;
                    a.dom.setImportantCssProperty(o, "font-size", --n + "px")
                }
                n === this.MIN_FONT_SIZE && i && a.dom.setImportantCssProperty(o, "font-size", i + "px")
            },
            _fitSizeImage: function(t) {
                var i = a.dom(".yap-layout__wrapper", t)[0]
                    , e = i.scrollHeight - i.clientHeight;
                if (e > 0) {
                    var o = this.getImageSize()
                        , n = this.templData.ads[0].image
                        , r = this.templData.ads[0].picture;
                    r = this._createPicture(n, o.width, Math.min(r.height - e, o.height), o.wideWidthLoss);
                    var s = a.dom(".yap-layout__picture", t)[0]
                        , p = a.dom(".yap-picture-block__link", t)[0]
                        , l = a.dom("img", p)[0];
                    a.dom.setImportantCssProperty(s, {
                        width: r.placeholder.width,
                        height: r.placeholder.height
                    }),
                        a.dom.setImportantCssProperty(p, {
                            width: r.width + "px",
                            height: r.height + "px"
                        }),
                        a.dom.setImportantCssProperty(l, {
                            "margin-left": -r.width / 2 + "px"
                        })
                }
            },
            getAdsByLimit: function(t) {
                var i = [t.shift()]
                    , e = this.settings.limit - 1;
                if (!i[0].images)
                    for (var a = 0; a < t.length && e; a++)
                        t[a].images || (i.push(t[a]),
                            e--);
                return i
            }
        });
        t.exports = n
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(81)
            , n = a.augment(o, {
            classes: "yap-layout_block_336x280",
            width: 336,
            height: 280,
            getImageSize: function() {
                return {
                    width: 150,
                    height: 170,
                    wideWidthLoss: .3
                }
            }
        });
        t.exports = n
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(9)
            , n = e(78)
            , r = e(43)
            , s = e(45)
            , p = e(84)
            , l = a.augment(n.FixedVertical, {
            classes: "yap-layout_block_single yap-layout_block_single_vertical yap-layout_block_single240x400 yap-layout_block_single_medium yap-layout_shift_icon",
            width: 240,
            height: 400,
            iconSize: {
                width: 60,
                height: 60
            },
            getLayout: function() {
                return o.Layouts.NARROW
            },
            getImageSize: function() {
                return {
                    width: this.settings.borderType !== o.BorderTypes.NONE ? 218 : 220,
                    height: 180,
                    wideWidthLoss: .3
                }
            },
            getRemoveOverflowClasses: function() {
                return ["yap-layout_hide_ext-distrib", "yap-layout_block_single_medium", "yap-layout_shift_icon", "yap-layout_hide_domain", "yap-layout_hide_rating", "yap-layout_hide_address"]
            },
            getAdsByLimit: function(t) {
                var i = [t.shift()]
                    , e = this.settings.limit - 1;
                if (!i[0].images)
                    for (var a = 0; a < t.length && e; a++)
                        t[a].images || (i.push(t[a]),
                            e--);
                return i
            },
            prepareImages: function(t) {
                l.__super.prepareImages.call(this, t);
                var i = this.getImageSize();
                a.each(t.ads, function(t) {
                    t.video && (t.player = t.video.getPlayer(i.width, i.height))
                }, this)
            },
            afterRender: function() {
                l.__super.afterRender.call(this);
                var t = this.settings.borderType
                    , i = t === o.BorderTypes.COLLAPSE || (t === o.BorderTypes.BLOCK || this.settings.bgColor) && 1 === this.advs.length;
                if (i) {
                    var e = a.dom(".yap-layout__outer", this.getMainCont());
                    a.each(e, function(t) {
                        var i = a.dom(".yap-layout__adtune", t)[0];
                        if (i) {
                            var e = a.dom.getOffset(t).top
                                , o = a.dom.getOffset(t.parentNode).top;
                            a.dom.setImportantCssProperty(i, "top", -(e - o) + 2 + "px")
                        }
                    })
                }
            },
            isNeedHyphenate: function() {
                return !0
            },
            getBannerAdClass: function(t) {
                return t.video ? p : t.isExtDistrib ? s : r
            }
        });
        t.exports = l
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(43)
            , n = e(85)
            , r = a.augment(o, {
            init: function(t, i, e) {
                r.__super.init.apply(this, arguments),
                    this._videoPlayer = new n(t,i,e),
                    this.addComponent(this._videoPlayer),
                    this._initListeners()
            },
            _initListeners: function() {
                this.on(a.dom("a", this._element), "click", this.onClick)
            },
            onClick: function(t) {
                var i = t.currentTarget;
                i.href && this.go()
            },
            onGoBlock: function() {
                this._videoPlayer.stop()
            },
            onOpenAdtuneWindow: function() {
                this._videoPlayer.stop()
            }
        });
        t.exports = r
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(6)
            , n = e(44)
            , r = !1
            , s = a.augment(n, {
            FIRST_DELAY: 0,
            CHECK_INTERVAL: 300,
            NEED_INTERVAL: 1e3,
            SDK_URL: "https://yastatic.net/awaps-ad-sdk-js/1_0/v-x/banner_ad.min.js",
            init: function(t, i, e) {
                this._ad = i,
                    this._element = a.dom(".yap-video-player__video", t)[0],
                    this._elementContainer = t,
                    this._isAutoplay = i.video.isAutoplay && e.dataSource.isDirectInRtb(),
                    this._initSDK()
            },
            destroy: function() {},
            _initSDK: function() {
                var t = this._loader = a.dom.addScript(this.SDK_URL);
                a.domEvent.on(t, "load", this._initVideo, this, {
                    once: !0
                })
            },
            _initVideo: function() {
                var t = this;
                a.dom.remove(this._loader),
                    ya.mediaAd.bannerAd.initVideo(this._element, this.getVideoOptions(), function(i, e) {
                        i instanceof Error ? t.onError(i) : t._startController(e)
                    })
            },
            getVideoOptions: function() {
                var t = this._ad;
                return {
                    video: t.video.src,
                    link: t.adId ? t.videoClickUrl : null ,
                    poster: t.video.poster,
                    autostartoff: !0,
                    pauseAllowed: !0,
                    soundOnStart: !1,
                    visitSiteShow: !1,
                    keepVideoOnEnd: !0
                }
            },
            _startController: function(t) {
                this._bannerAdController = t,
                    t.onPlayStateChanged = o.protect("Video#onPlayStateChanged", this.onPlayStateChanged, this),
                    t.onComplete = o.protect("Video#onComplete", this.onComplete, this),
                this._isAutoplay && this._startCheckVisibility()
            },
            _startCheckVisibility: function() {
                var t = o.protect("Video#_checkVisibility", function() {
                    if (this._checkVisibilityTimer) {
                        var i = this._isVisible();
                        i !== this._currentVisibilityState && (this._currentVisibilityState = i,
                            this.onChangeVisibility(i)),
                            this._checkVisibilityTimer = o.setProtectedTimeout(t, this.CHECK_INTERVAL)
                    }
                }, this);
                this._checkVisibilityTimer = o.setProtectedTimeout(t, this.FIRST_DELAY)
            },
            _stopCheckVisibility: function() {
                clearTimeout(this._checkVisibilityTimer),
                    this._checkVisibilityTimer = !1
            },
            _isVisible: function() {
                return a.dom.isInViewport(this._element, .3) && !a.dom.isOverlaid(this._elementContainer, .3)
            },
            _playVideo: function() {
                this._needPlay() ? this._play() : this._triggeredByVisibilityCheckerInAutoplayMod = !1
            },
            _needPlay: function() {
                return r ? !1 : (r = !0,
                    !0)
            },
            _play: function() {
                this._bannerAdController.play(!0)
            },
            _pause: function() {
                this._bannerAdController.pause()
            },
            onChangeVisibility: function(t) {
                this._triggeredByVisibilityCheckerInAutoplayMod = this._isAutoplay,
                    t ? this._playVideo() : (r = !1,
                        this._pause())
            },
            onPlayStateChanged: function(t) {
                return this._triggeredByVisibilityCheckerInAutoplayMod ? void (this._triggeredByVisibilityCheckerInAutoplayMod = !1) : (this._isAutoplay = !1,
                    void (t ? this._startCheckVisibility() : this._stopCheckVisibility()))
            },
            onComplete: function() {
                this._stopCheckVisibility()
            },
            onError: function(t) {
                o.remoteLog(t.id + ":" + t.message)
            },
            onGo: function() {
                this.stop()
            },
            stop: function() {
                this._bannerAdController && this._pause()
            }
        });
        t.exports = s
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(87)
            , n = a.augment(o, {
            width: 400,
            height: 240
        });
        t.exports = n
    }
    , function(t, i, e) {
        var a = e(1)
            , o = (e(6),
            e(9))
            , n = e(42)
            , r = e(78).FixedProto
            , s = e(78).FixedVertical
            , p = a.augment(a.augment(n, r), {
            HORIZONTAL_RATIO: 4,
            HORIZONTAL_HEIGHT: 100,
            MIN_WIDTH: 160,
            MIN_HEIGHT: 90,
            MIN_RENDER_AREA: 6e4,
            MAX_WIDTH: 728,
            MAX_HEIGHT: 600,
            MAX_RENDER_AREA: 15e4,
            classes: "yap-layout_block_adaptive",
            overflowClasses: [],
            BORDER: 2,
            PADDING: 10,
            LOGO_HEIGHT: 16,
            render: function() {
                this._doesntFit() || (this._setTypeAndClasses(),
                    p.__super.render.apply(this, arguments))
            },
            _doesntFit: function() {
                return this.width < this.MIN_WIDTH || this.height < this.MIN_HEIGHT || this.width > this.settings.limit * this.MAX_WIDTH || this.height > this.settings.limit * this.MAX_HEIGHT || this.width * this.height < this.MIN_RENDER_AREA || this.width * this.height > this.settings.limit * this.MAX_RENDER_AREA
            },
            _setTypeAndClasses: function() {
                var t = this.width / this.height >= this.HORIZONTAL_RATIO
                    , i = this.height <= this.HORIZONTAL_HEIGHT;
                t || i ? (this.classes += " yap-layout_block_fixed-horizontal yap-layout_block_horizontal",
                    this.settings.format.type = o.BlockTypes.HORIZONTAL,
                i && (this.classes += " yap-layout_text-inline",
                    this.overflowClasses.push("yap-layout_text-inline"))) : (this.settings.format.type = o.BlockTypes.VERTICAL,
                    this.classes += " yap-layout_block_fixed-vertical yap-layout_block_vertical")
            },
            getImageSize: function() {
                var t = this.settings.format.type === o.BlockTypes.VERTICAL;
                if (t && this.layout === o.Layouts.NARROW)
                    return this._imageSizes[this.layout];
                var i = this.settings.format.type === o.BlockTypes.HORIZONTAL;
                return {
                    width: i ? 120 : 90,
                    height: i ? this._getMaxImageHeight() : 120
                }
            },
            _getMaxImageHeight: function() {
                var t = this.height - this.PADDING;
                return this.settings.borderType !== o.BorderTypes.NONE && (t -= this.BORDER),
                this.settings.format.type === o.BlockTypes.VERTICAL && 1 === this.settings.limit && (t -= this.LOGO_HEIGHT),
                    t
            },
            getLayout: function() {
                return this.settings.format.type === o.BlockTypes.VERTICAL && this.width < o.Layouts.MEDIUM_WIDTH ? o.Layouts.NARROW : o.Layouts.WIDE
            },
            getRemoveOverflowClasses: function() {
                var t = p.__super.getRemoveOverflowClasses.call(this);
                return this.overflowClasses.concat(t)
            },
            prepareData: function(t) {
                this.settings.format.type === o.BlockTypes.VERTICAL && s.__super.prepareData.call(this, t)
            },
            afterRender: function() {
                p.__super.afterRender.call(this),
                    this.removeOverflow()
            },
            hasScroll: function() {
                if (p.__super.hasScroll.call(this))
                    return !0;
                if (this.settings.format.type === o.BlockTypes.HORIZONTAL)
                    for (var t = a.dom(".yap-layout__content", this.getMainCont()), i = 0; i < t.length; i++)
                        if (t[i].scrollWidth - t[i].clientWidth > this.MAX_SCROLL)
                            return !0;
                return !1
            }
        });
        t.exports = p
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(9)
            , n = e(89)
            , r = a.augment(n, {
            classes: "yap-layout_block_0x50",
            getImageSize: function() {
                return {
                    width: this.settings.borderType !== o.BorderTypes.NONE ? 76 : 78,
                    height: this.settings.borderType !== o.BorderTypes.NONE ? 48 : 50,
                    wideWidthLoss: .3
                }
            },
            prepareImages: function(t) {
                n.__super.prepareImages.call(this, t)
            },
            createTemplObj: function() {
                var t = r.__super.createTemplObj.apply(this, arguments);
                return t.yaTitle.length > 9 && (t.yaTitle = "\u0414\u0438\u0440\u0435\u043a\u0442"),
                    t
            },
            afterRender: function() {
                n.__super.afterRender.call(this);
                var t = a.dom(".yap-contacts", this.getMainCont())[0];
                if (t && t.scrollWidth > t.offsetWidth) {
                    var i = a.dom(".yap-layout", this.getMainCont())[0];
                    a.dom.addClass(i, "yap-layout_hide-geo")
                }
            }
        });
        t.exports = r
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(42)
            , n = a.augment(o, {
            classes: "yap-layout_block_compact",
            template: e(76).compact,
            prepareImages: function() {},
            afterRender: function() {
                n.__super.afterRender.call(this);
                var t = a.dom(".yap-layout__title", this.getMainCont())[0];
                if (t.scrollWidth > t.offsetWidth) {
                    var i = a.dom(".yap-layout", this.getMainCont())[0];
                    a.dom.addClass(i, "yap-layout_hide-title-domain"),
                        a.dom.addClass(i, "yap-layout_hide-title-rating")
                }
            }
        });
        t.exports = n
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(91)
            , n = e(78).FixedVertical
            , r = a.augment(a.augment(n, o), {
            classes: "yap-layout_block_320x480 yap-layout_size_small yap-layout_hide_app",
            width: 320,
            height: 480,
            getRemoveOverflowClasses: function() {
                return ["yap-layout_size_small", "yap-layout_hide_app", "yap-layout_hide_domain", "yap-layout_hide_rating", "yap-layout_hide_contacts", "yap-layout_hide_address"]
            },
            hasWideImage: function() {
                var t = this.advs[0].picture;
                return t && t.width / t.height > 1.6 ? !0 : !1
            },
            widenImage: function() {
                this.hasWideImage() && a.dom.addClass(a.dom(".yap-layout", this.getMainCont())[0], "yap-layout_wideimage_true")
            },
            getImageSize: function() {
                return {
                    width: 1 / 0,
                    height: 210
                }
            }
        });
        t.exports = r
    }
    , function(t, i, e) {
        var a = e(1)
            , o = {
            classes: "yap-layout_block_mobile yap-layout_hide_contacts yap-layout_hide_domain",
            iconSize: {
                width: 100,
                height: 100
            },
            template: e(76).layuot_mobile,
            getRemoveOverflowClasses: function() {
                return ["yap-layout_size_small", "yap-layout_hide_ext-distrib", "yap-layout_hide_domain", "yap-layout_hide_rating", "yap-layout_hide_contacts", "yap-layout_hide_address"]
            },
            isNeedHyphenate: function() {
                return !0
            },
            widenImage: function() {},
            afterRender: function() {
                var t = a.dom(".yap-layout", this.getMainCont())[0];
                this.showMisc(t),
                    this._removeBrokenFavicons(),
                    this.widenImage(),
                    this.initBannerComponents(),
                    a.dom.removeClass(t, "yap-layout_invisible")
            }
        };
        t.exports = o
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(91)
            , n = e(78).FixedHorizontal
            , r = a.augment(a.augment(n, o), {
            classes: "yap-layout_block_480x320",
            width: 480,
            height: 320,
            getImageSize: function() {
                return {
                    width: 180,
                    height: 180,
                    wideWidthLoss: .3
                }
            }
        });
        t.exports = r
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(9)
            , n = e(78)
            , r = a.augment(n.FixedHorizontalInlineText, {
            width: 728,
            height: 90,
            template: e(76)["728x90-design"],
            classes: "yap-layout_block_fixed yap-layout_block_728x90-design",
            getRemoveOverflowClasses: function() {
                return ["yap-layout_hide_go", "yap-layout_hide_domain", "yap-layout_hide_rating", "yap-layout_scale_3", "yap-layout_scale_2", "yap-layout_scale_1"]
            },
            _grabClasses: function() {
                var t = [this.classes]
                    , i = this.getRemoveOverflowClasses();
                return t.concat(i).join(" ")
            },
            getImageSize: function() {
                var t = this.settings.borderType !== o.BorderTypes.NONE ? 2 : 0;
                return {
                    width: 160 - t,
                    height: 90 - t,
                    wideWidthLoss: .3
                }
            },
            isNeedHyphenate: function() {
                return !0
            },
            removeOverflow: function() {
                r.__super.removeOverflow.call(this);
                var t = a.dom(".yap-warning", this.getMainCont())[0];
                t && t.clientWidth - t.scrollWidth < 0 && a.dom.addClass(t, "yap-warning_font-size_small")
            }
        });
        t.exports = r
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(95)
            , n = e(49)
            , r = {
            "300x500": {
                width: 300,
                height: 500
            },
            "300x600": {
                width: 300,
                height: 600
            },
            "240x400": {
                width: 240,
                height: 400
            }
        }
            , s = a.augment(Object, {
            constructor: function(t, i, e, a) {
                this.renderTo = e,
                    i = this.extendSettings(i),
                    this.settings = i,
                    this.dataSource = t,
                    this.block = new o({
                        blockId: a,
                        dataSource: t,
                        settings: i
                    })
            },
            extendSettings: function(t) {
                var i = t.format.name;
                return a.extend(t, r[i])
            },
            destructor: function() {
                this.block.destroy()
            },
            render: function() {
                var t = a.dom("#" + this.renderTo);
                t && n.renderToNode(t, this.block)
            },
            getMainCont: function() {
                return a.dom("#" + this.renderTo)
            }
        });
        t.exports = s
    }
    , function(t, i, e) {
        var a = e(49)
            , o = e(96)
            , n = e(9)
            , r = a.createComponent(o, {
            visibilityPortion: .3,
            getBody: function(t, i, e) {
                var o = this.advList[0];
                return this.dataSource.captureAd(o.adId),
                    a.create(e.AdvComponent, {
                        adv: o,
                        width: this.width,
                        height: this.height
                    })
            },
            hasBorder: function() {
                return this.props.settings.borderType === n.BorderTypes.BLOCK
            }
        }, {
            AdvComponent: e(100)
        });
        t.exports = r
    }
    , function(module, exports, __webpack_require__) {
        var PlaneTree = __webpack_require__(49)
            , BlockAbstract = __webpack_require__(97)
            , styles = function(obj) {
            var p = [];
            with (obj)
                p.push(".", id, " .yap-block{width:", width, "px!important;height:", height, "px!important;font-family:arial,sans-serif!important}.", id, " .yap-block_invisible,.", id, " .yap-block_invisible *{visibility:hidden!important}.", id, " .yap-block__layout{position:relative!important;z-index:1!important;width:", width - (settings.borderType == Const.BorderTypes.BLOCK ? 2 : 0), "px!important;height:", height - (settings.borderType == Const.BorderTypes.BLOCK ? 2 : 0), "px!important;overflow:hidden!important;border-width:", settings.borderType == Const.BorderTypes.BLOCK ? "1px" : 0, "!important;border-color:", settings.borderColor || "#FEEBC8", "!important;border-style:solid!important;border-radius:", settings.borderRadius ? "4px" : 0, "!important;background:", settings.bgColor && settings.borderType != Const.BorderTypes.AD ? settings.bgColor : "transparent", "!important;-webkit-border-radius:", settings.borderRadius ? "4px" : 0, "!important;-moz-border-radius:", settings.borderRadius ? "4px" : 0, "!important;-ms-border-radius:", settings.borderRadius ? "4px" : 0, "!important;-o-border-radius:", settings.borderRadius ? "4px" : 0, "!important}.", id, " .yap-block__logo{right:5px!important;bottom:5px!important;background:", settings.bgColor || settings.siteBgColor || "transparent", "!important;background:rgba(", (new utils.RGB.rgba(settings.bgColor || settings.siteBgColor || "#FFF"),
                    .2), ")!important}");
            return p.join("")
        }
            , BlockFixed = PlaneTree.createComponent(BlockAbstract, {
            initProps: function(t) {
                var i = t.settings;
                return this.width = this.width || i.width,
                    this.height = this.height || i.height,
                    this.__base(t)
            },
            onDOMReady: function() {
                this.toggleBlockVisibility(!0)
            },
            afterRender: function() {
                this.toggleBlockVisibility(!1),
                    this.pushStyles(styles, {
                        width: this.width,
                        height: this.height
                    }),
                    this.__base()
            },
            toggleBlockVisibility: function(t) {
                var i = this.b_("_invisible")
                    , e = this.getResourceById("main");
                t ? e.removeClass(i) : e.addClass(i)
            }
        });
        module.exports = BlockFixed
    }
    , function(module, exports, __webpack_require__) {
        var PlaneTree = __webpack_require__(49)
            , BemComponent = __webpack_require__(64)
            , stackStyles = __webpack_require__(66)
            , utils = __webpack_require__(1)
            , env = __webpack_require__(6)
            , Const = __webpack_require__(9)
            , styles = function(obj) {
            var p = [];
            with (obj)
                p.push(".", id, " .yap-block{position:relative!important;z-index:1!important;-webkit-font-smoothing:antialiased!important}");
            return p.join("")
        }
            , AbstractBlock = PlaneTree.createComponent(BemComponent, {
            name: "yap-block",
            layout: Const.Layouts.WIDE,
            visibilityPortion: 0,
            initProps: function(t) {
                return this.dataSource = t.dataSource,
                    this.settings = t.settings,
                    this.blockId = t.blockId,
                    t
            },
            onInit: function() {
                this.__base(),
                    this.id = this._getBlockId(),
                    this.advList = this._createAdvList()
            },
            onDestroy: function() {
                this._visibilityChecker && this._visibilityChecker.clear(),
                this._styleElement && (utils.dom.remove(this._styleElement),
                    this._styleElement = null ),
                    utils.each(this.advList, function(t) {
                        this.dataSource.releaseAd(t)
                    }, this)
            },
            _getBlockId: function() {
                return "yap-" + this.blockId
            },
            _createAdvList: function() {
                var t = this.dataSource.getFreeAds();
                return t = t.slice(0, this.settings.limit),
                    utils.map(t, function(t) {
                        return this.dataSource.prepareAd(t, {
                            layout: this.layout,
                            format: this.settings.format
                        })
                    }, this)
            },
            shouldRender: function() {
                return this.advList.length
            },
            afterRender: function() {
                this.pushStyles(styles),
                    this._styleElement = stackStyles.insertCSS({
                        id: this.id,
                        block: this,
                        settings: this.settings,
                        utils: utils,
                        Const: Const
                    }),
                    this.initVisibilityChecker()
            },
            getRootElement: function() {
                return this.rootComponent.getElement()
            },
            initVisibilityChecker: function() {
                this._visibilityChecker = new utils.VisibilityChecker(Const.VISIBILITY_TIME,this.visibilityPortion).onConfirmed(env.protect("AdvBlock: onConfirmed", this.confirmVisibility, this)).listen(this.getRootElement())
            },
            confirmVisibility: function(t) {
                this.dataSource.onConfirmVisibility(this.advList, {
                    layout: this.layout,
                    confirmByClick: t
                })
            },
            getBody: function() {
                return this.getChildren()
            },
            _render: function(t, i, e) {
                var a = this.id;
                return PlaneTree.create("yatag", {
                    "class": t(a, "yap-reset"),
                    id: a
                }, PlaneTree.create("yatag", {
                    "class": t(t(), "yap-main"),
                    resourceId: "main"
                }, PlaneTree.create(e.Layout, {
                    "class": t("__layout")
                }, this.getBody(t, i, e)), PlaneTree.create(e.Logo, {
                    "class": t("__logo"),
                    title: this.dataSource.getTitle()
                })))
            }
        }, {
            Layout: __webpack_require__(98),
            Logo: __webpack_require__(99)
        });
        module.exports = AbstractBlock
    }
    , function(module, exports, __webpack_require__) {
        var PlaneTree = __webpack_require__(49)
            , BemComponent = __webpack_require__(64)
            , stylesReset = __webpack_require__(47).reset
            , styles = function(obj) {
                var p = [];
                with (obj)
                    p.push(".", id, " .yap-link,.", id, " .yap-link b{text-decoration:", settings.linksUnderline ? "underline" : "none", "!important;color:", settings.urlColor || "#0000CC", "!important}.", id, " .yap-link:hover,.", id, " .yap-link:hover b{color:", settings.hoverColor || "#0088CC", "!important}");
                return p.join("")
            }
            ;
        module.exports = PlaneTree.createComponent(BemComponent, {
            name: "yap-layout",
            beforeRender: function() {
                this.pushStyles(stylesReset),
                    this.pushStyles(styles)
            },
            _render: function(t, i) {
                return PlaneTree.create("yatag", {
                    "class": t(i["class"], t())
                }, this.getChildren())
            }
        })
    }
    , function(module, exports, __webpack_require__) {
        var PlaneTree = __webpack_require__(49)
            , BemComponent = __webpack_require__(64)
            , styles = function(obj) {
                var p = [];
                with (obj)
                    p.push(".", id, " .yap-logo{position:absolute!important;z-index:3!important;padding:0 7px!important;height:16px!important;overflow:hidden!important;text-align:center!important;font-size:11px!important;border-radius:8px!important;opacity:.7!important;filter:alpha(opacity=70)!important;cursor:pointer!important;-webkit-border-radius:8px!important;-moz-border-radius:8px!important;-ms-border-radius:8px!important;-o-border-radius:8px!important;-webkit-filter:alpha(opacity=70)!important;-moz-filter:alpha(opacity=70)!important;-ms-filter:alpha(opacity=70)!important;-o-filter:alpha(opacity=70)!important}.", id, " .yap-logo__text{display:inline-block!important;line-height:16px!important;color:", settings.textColor || "#000", "!important;vertical-align:top!important}.", id, " .yap-logo__text em{font-style:normal!important}.", id, " .yap-logo:hover{opacity:1!important;filter:alpha(opacity=100)!important;-webkit-filter:alpha(opacity=100)!important;-moz-filter:alpha(opacity=100)!important;-ms-filter:alpha(opacity=100)!important;-o-filter:alpha(opacity=100)!important}.", id, " .yap-logo:hover .yap-logo__text{text-decoration:underline!important}");
                return p.join("")
            }
            ;
        module.exports = PlaneTree.createComponent(BemComponent, {
            name: "yap-logo",
            initProps: function(t) {
                var i = t.title;
                return this.url = i.url,
                    this.text = i.title,
                    t
            },
            afterRender: function() {
                this.pushStyles(styles)
            },
            _render: function(t, i, e) {
                return PlaneTree.create("yatag", {
                    "class": t(i["class"], t())
                }, PlaneTree.create("a", {
                    "class": t("__text"),
                    href: this.url,
                    target: "_blank"
                }, PlaneTree.create(e.HTML, {
                    text: this.text
                })))
            }
        })
    }
    , function(module, exports, __webpack_require__) {
        var PlaneTree = __webpack_require__(49)
            , AdvAbstract = __webpack_require__(101)
            , removeOverflow = __webpack_require__(116)
            , browser = __webpack_require__(10)
            , styles = function(obj) {
            var p = [];
            with (obj)
                p.push(".", id, " .yap-adv{width:100%!important;height:100%!important;font-size:15px!important;line-height:1.2!important;align-items:stretch!important;align-content:stretch!important;-webkit-align-items:stretch!important;-moz-align-items:stretch!important;-ms-align-items:stretch!important;-o-align-items:stretch!important;-webkit-align-content:stretch!important;-moz-align-content:stretch!important;-ms-align-content:stretch!important;-o-align-content:stretch!important}.", id, " .yap-adv,.", id, " .yap-adv__row-title{position:relative!important;display:flex!important;overflow:hidden!important;flex-direction:column!important;display:-webkit-flex!important;-webkit-flex-direction:column!important;-moz-flex-direction:column!important;-ms-flex-direction:column!important;-o-flex-direction:column!important}.", id, " .yap-adv__row-title{padding:16px 0!important;min-height:120px!important;background:", settings.titleColor || "#0000CC", "!important;flex-grow:1!important;justify-content:flex-end!important;vertical-align:bottom!important;-webkit-justify-content:flex-end!important;-webkit-flex-grow:1!important;-moz-flex-grow:1!important;-ms-flex-grow:1!important;-o-flex-grow:1!important;-webkit-justify-content:-webkit-flex-end!important;-moz-justify-content:-moz-flex-end!important;-ms-justify-content:-ms-flex-end!important;-o-justify-content:-o-flex-end!important}.", id, " .yap-adv__row-title-shadow{position:absolute!important;right:-5px!important;bottom:-5px!important;left:-5px!important;height:5px!important;box-shadow:0 -5px 6px 0 rgba(0,0,0,.21)!important;-webkit-box-shadow:0 -5px 6px 0 rgba(0,0,0,.21)!important;-moz-box-shadow:0 -5px 6px 0 rgba(0,0,0,.21)!important;-ms-box-shadow:0 -5px 6px 0 rgba(0,0,0,.21)!important;-o-box-shadow:0 -5px 6px 0 rgba(0,0,0,.21)!important}.", id, " .yap-adv__row-title-dummy{display:none!important;height:100%!important;width:0!important;vertical-align:middle!important}.", id, " .yap-adv__row-title .yap-adv__title{display:inline-block!important;vertical-align:bottom!important}.", id, " .yap-adv__row-title .yap-link,.", id, " .yap-adv__row-title .yap-link b,.", id, " .yap-adv__row-title .yap-link:hover,.", id, " .yap-adv__row-title .yap-link:hover b{border-bottom:none!important;color:", new utils.RGB(settings.titleColor || "#0000CC").isLight() ? "#000" : "#fff", "!important;text-decoration:none!important}.", id, " .yap-adv__row-title .yap-title__link{display:inline!important}.", id, " .yap-adv__row-picture{position:relative!important;margin-bottom:20px!important;padding:0!important;overflow:hidden!important;text-align:center!important;flex-grow:0!important;flex-shrink:0!important;align-items:flex-end!important;-webkit-align-items:flex-end!important;zoom:0!important;-webkit-flex-grow:0!important;-moz-flex-grow:0!important;-ms-flex-grow:0!important;-o-flex-grow:0!important;-webkit-flex-shrink:0!important;-moz-flex-shrink:0!important;-ms-flex-shrink:0!important;-o-flex-shrink:0!important;-webkit-align-items:-webkit-flex-end!important;-moz-align-items:-moz-flex-end!important;-ms-align-items:-ms-flex-end!important;-o-align-items:-o-flex-end!important}.", id, " .yap-adv__row-picture_full-width{padding:0!important}.", id, " .yap-adv__row-content{padding-bottom:2px!important;overflow:hidden!important;color:", settings.textColor || "#000", "!important;flex-grow:2!important;-webkit-flex-grow:2!important;-moz-flex-grow:2!important;-ms-flex-grow:2!important;-o-flex-grow:2!important}.", id, " .yap-adv__row-content,.", id, " .yap-adv__row-button{display:flex!important;flex-shrink:1!important;flex-direction:column!important;display:-webkit-flex!important;-webkit-flex-shrink:1!important;-moz-flex-shrink:1!important;-ms-flex-shrink:1!important;-o-flex-shrink:1!important;-webkit-flex-direction:column!important;-moz-flex-direction:column!important;-ms-flex-direction:column!important;-o-flex-direction:column!important}.", id, " .yap-adv__row-button{margin:16px 0 0!important;min-height:0!important;text-align:center!important;flex-grow:1!important;align-items:center!important;align-content:center!important;justify-content:center!important;-webkit-flex-grow:1!important;-moz-flex-grow:1!important;-ms-flex-grow:1!important;-o-flex-grow:1!important;-webkit-align-items:center!important;-moz-align-items:center!important;-ms-align-items:center!important;-o-align-items:center!important;-webkit-align-content:center!important;-moz-align-content:center!important;-ms-align-content:center!important;-o-align-content:center!important;-webkit-justify-content:center!important;-moz-justify-content:center!important;-ms-justify-content:center!important;-o-justify-content:center!important}.", id, " .yap-adv__row-warning{margin:16px 20px 0!important;text-align:center!important}.", id, " .yap-adv__row-empty{height:24px!important;flex-shrink:0!important;-webkit-flex-shrink:0!important;-moz-flex-shrink:0!important;-ms-flex-shrink:0!important;-o-flex-shrink:0!important}.", id, " .yap-adv__title,.", id, " .yap-adv__body,.", id, " .yap-adv__sitelinks,.", id, " .yap-adv__contacts{margin:16px 20px 0!important;flex-shrink:0!important;-webkit-flex-shrink:0!important;-moz-flex-shrink:0!important;-ms-flex-shrink:0!important;-o-flex-shrink:0!important}.", id, " .yap-adv__title{margin-top:0!important}.", id, ' .yap-adv__title:after{content:"\xa0"!important}.', id, " .yap-adv__age{position:absolute!important;z-index:2!important;bottom:8px!important;right:8px!important;font-size:.9em!important}.", id, " .yap-adv__body b{font-weight:700!important}.", id, " .yap-adv__button{flex-shrink:0!important;-webkit-flex-shrink:0!important;-moz-flex-shrink:0!important;-ms-flex-shrink:0!important;-o-flex-shrink:0!important}.", id, " .yap-adv__raiting{margin-top:5px!important;font-size:1.2em!important;display:block!important}.", id, " .yap-title__link,.", id, " .yap-title__link b{line-height:1.1!important;font-size:24px!important;font-weight:700!important;letter-spacing:.01em!important}.", id, " .yap-button{padding:9px!important;min-width:100px!important;font-size:18px!important;letter-spacing:.03em!important;border-radius:5px!important;color:", new utils.RGB(settings.bgColor || "#f3f2ee").isLight() ? "#000" : "#fff", "!important;background:", new utils.RGB(settings.bgColor || "#FFF").isLight() ? "rgba(0, 0, 0, 0.07)" : "rgba(255, 255, 255, 0.37)", "!important;background:", utils.warning.getBorderColor(settings.bgColor || "#FFF", "#000", .93), "!important;box-shadow:inset 0 -2px 0 0 rgba(0,0,0,.1)!important;-webkit-border-radius:5px!important;-moz-border-radius:5px!important;-ms-border-radius:5px!important;-o-border-radius:5px!important;-webkit-box-shadow:inset 0 -2px 0 0 rgba(0,0,0,.1)!important;-moz-box-shadow:inset 0 -2px 0 0 rgba(0,0,0,.1)!important;-ms-box-shadow:inset 0 -2px 0 0 rgba(0,0,0,.1)!important;-o-box-shadow:inset 0 -2px 0 0 rgba(0,0,0,.1)!important}.", id, " .yap-button:hover{color:", new utils.RGB(settings.hoverColor || "#0088FF").isLight() ? "#000" : "#fff", "!important;background:", settings.hoverColor || "#0088FF", "!important}.", id, " .yap-sitelinks__sitelink,.", id, " .yap-contacts__item{margin-bottom:2px!important}.", id, " .yap-geo,.", id, " .yap-region{display:inline-block!important}.", id, " .yap-geo{text-transform:lowercase!important}.", id, " .old-browser.yap-adv,.", id, " .old-browser .yap-adv__row-title,.", id, " .old-browser .yap-adv__row-picture,.", id, " .old-browser .yap-adv__row-content,.", id, " .old-browser .yap-adv__row-button{display:block!important}.", id, " .old-browser .yap-adv__row-title{display:block!important;height:150px!important}.", id, " .old-browser .yap-adv__row-title-dummy{display:inline-block!important}.", id, " .old-browser .yap-adv__raiting{display:", browser.ieVersion < 9 ? "none" : "block", "!important}.", id, " .yap-adv_button_hidden .yap-adv__row-button,.", id, " .yap-adv_raiting_hidden .yap-raiting,.", id, " .yap-adv_sitelinks_hidden .yap-sitelinks,.", id, " .yap-adv_region_hidden .yap-region,.", id, " .yap-adv_address_hidden .yap-address,.", id, " .yap-adv_contacts_hidden .yap-contacts{display:none!important}.", id, " .yap-adv__adtune{z-index:4!important;position:absolute!important;right:10px!important;top:10px!important;padding:3px!important;border-radius:12px!important;background:", settings.bgColor && settings.borderType != Const.BorderTypes.AD ? settings.bgColor : "white", "!important;box-shadow:0 1px 0 0 rgba(0,0,0,.2)!important;cursor:pointer!important;-webkit-border-radius:12px!important;-moz-border-radius:12px!important;-ms-border-radius:12px!important;-o-border-radius:12px!important;-webkit-box-shadow:0 1px 0 0 rgba(0,0,0,.2)!important;-moz-box-shadow:0 1px 0 0 rgba(0,0,0,.2)!important;-ms-box-shadow:0 1px 0 0 rgba(0,0,0,.2)!important;-o-box-shadow:0 1px 0 0 rgba(0,0,0,.2)!important}.", id, " .yap-adv_abused_true .yap-adv__row,.", id, " .old-browser .yap-adv_abused_true .yap-adv__row,.", id, " .yap-adv_abused_true .yap-adv__adtune,.", id, " .yap-adv__adtune-message{display:none!important}.", id, " .yap-adv_abused_true .yap-adv__adtune-message{display:block!important}");
            return p.join("")
        }
            , stylesSizeS = function(obj) {
            var p = [];
            with (obj)
                p.push(".", id, " .yap-adv{font-size:15px!important}.", id, " .yap-adv__row-title{padding:10px 0!important;margin-bottom:3px!important;min-height:100px!important}.", id, " .yap-adv__row-picture{margin-bottom:15px!important}.", id, " .yap-adv__row-button{margin:12px 0 0!important}.", id, " .yap-adv__row-warning{margin:7px 15px 0!important}.", id, " .yap-adv__row-empty{min-height:24px!important}.", id, " .yap-adv__title,.", id, " .yap-adv__body,.", id, " .yap-adv__sitelinks,.", id, " .yap-adv__contacts{margin:10px 15px 0!important}.", id, " .yap-adv__title{margin-top:0!important}.", id, " .yap-adv__raiting{font-size:1em!important}.", id, " .yap-title__link,.", id, " .yap-title__link b{font-size:24px!important}.", id, " .yap-button{padding:5px!important;font-size:16px!important}");
            return p.join("")
        }
            , AdvSingle = PlaneTree.createComponent(AdvAbstract, {
            getAdvBlock: function() {
                return this.getContextComponent()
            },
            getDataSource: function() {
                return this.getAdvBlock().dataSource
            },
            afterRender: function() {
                this.pushStyles(styles);
                var t = this.props;
                t.width * t.height < 15e4 && this.pushStyles(stylesSizeS),
                    this.getResourceById("adtune").on("adAbused", this.switchToAbused, this),
                    this.__base()
            },
            switchToAbused: function() {
                this.getDataSource().setAbused(this.props.adv),
                    this.rootComponent.addClass(this.b_("_abused_true"))
            },
            onDOMReady: function() {
                this.removeOverflow()
            },
            isOldBrowser: function() {
                return !browser.support.cssFlex
            },
            removeOverflow: function() {
                var t = this.isOldBrowser() || browser.isPresto ? this.rootComponent : this.getResourceById("row-content")
                    , i = this.b_;
                removeOverflow(t, [i("_contacts_hidden"), i("_sitelinks_hidden"), i("_address_hidden"), i("_region_hidden"), i("_button_hidden"), i("_raiting_hidden")])
            },
            getImageSize: function() {
                var t = this.getAdvBlock()
                    , i = t.hasBorder()
                    , e = i ? 2 : 0;
                return {
                    width: t.width - e,
                    height: t.height / 2 - e,
                    wLoss: .3
                }
            },
            renderPicture: function(t, i, e) {
                return i.image ? PlaneTree.create(e.Picture, {
                    "class": t("__picture"),
                    image: i.image,
                    href: i.clickImageUrl,
                    size: this.getImageSize()
                }) : null
            },
            _render: function(t, i, e) {
                var a = i.adv
                    , o = this.getDataSource().getLanguage()
                    , n = this.renderPicture(t, a, e)
                    , r = PlaneTree.create(e.Title, {
                    "class": t("__title"),
                    mod: n ? "_link" : "_box",
                    adv: a
                })
                    , s = PlaneTree.create(e.Age, {
                    "class": t("__age"),
                    age: a.age
                })
                    , p = n ? PlaneTree.create("yatag", {
                    "class": t("__row-picture __row", t(n.fullWidth() ? "__row-picture_full-width" : ""))
                }, n, s) : PlaneTree.create("yatag", {
                    "class": t("__row-title __row")
                }, PlaneTree.create("yatag", {
                    "class": t("__row-title-shadow")
                }), s, r, PlaneTree.create("yatag", {
                    "class": t("__row-title-dummy")
                }));
                return PlaneTree.create("yatag", {
                    "class": t(t(), this.isOldBrowser() ? "old-browser" : null ),
                    "data-id": a.adId
                }, p, PlaneTree.create("yatag", {
                    "class": t("__row-content __row"),
                    resourceId: "row-content"
                }, n ? r : null , PlaneTree.create(e.Body, {
                    "class": t("__body"),
                    adv: a
                }), PlaneTree.create(e.Sitelinks, {
                    "class": t("__sitelinks"),
                    sitelinks: a.sitelinks
                }), PlaneTree.create(e.Contacts, {
                    "class": t("__contacts"),
                    adv: a
                }), PlaneTree.create("yatag", {
                    "class": t("__row-button __row")
                }, a.isAppAd ? PlaneTree.create(e.Container, null , PlaneTree.create(e.MobileApps, {
                    "class": t("__mobile-apps"),
                    adv: a
                }), PlaneTree.create(e.Raiting, {
                    "class": t("__raiting"),
                    adv: a
                })) : PlaneTree.create(e.Button, {
                    "class": t("__button"),
                    href: a.url
                }, "\u041f\u0435\u0440\u0435\u0439\u0442\u0438"))), PlaneTree.create(e.Warning, {
                    "class": t("__row-warning __row"),
                    adv: a
                }), PlaneTree.create("yatag", {
                    "class": t("__row-empty __row")
                }), PlaneTree.create("yatag", {
                    "class": t("__adtune")
                }, PlaneTree.create(e.Adtune, {
                    resourceId: "adtune",
                    isBig: !0,
                    language: o,
                    isOldIE: browser.isIEQuirks || browser.ieVersion < 9,
                    url: a.adtuneUrl,
                    adId: a.adId,
                    isPlainLink: this.getDataSource().isSSP()
                })), PlaneTree.create("yatag", {
                    "class": t("__adtune-message")
                }, PlaneTree.create(e.AdtuneMessage, {
                    isBig: !0,
                    language: o
                })))
            }
        }, {
            Picture: __webpack_require__(120),
            Adtune: __webpack_require__(48),
            AdtuneMessage: __webpack_require__(75)
        });
        module.exports = AdvSingle
    }
    , function(t, i, e) {
        var a = e(49)
            , o = e(64)
            , n = e(6)
            , r = a.createComponent(o, {
            name: "yap-adv",
            HOVER_CONFIRM_DELAY: 300,
            getAdvBlock: function() {
                return this.getContextComponent()
            },
            afterRender: function() {
                this.initHoverChecker()
            },
            initHoverChecker: function() {
                function t() {
                    e || (e = n.setProtectedTimeout(function() {
                        this._confirmedHover || (this._confirmedHover = !0,
                            this.confirmHover())
                    }, this.HOVER_CONFIRM_DELAY, this))
                }
                function i() {
                    clearTimeout(e),
                        e = null
                }
                var e;
                this.rootComponent.bind("mouseover", t, this),
                    this.rootComponent.bind("mouseleave", i, this)
            },
            confirmHover: function() {
                var t = this.getAdvBlock()
                    , i = this.props.adv;
                t.dataSource.onHover(i, {
                    layout: t.layout
                })
            }
        }, {
            Age: e(102),
            Picture: e(103),
            Title: e(104),
            Body: e(105),
            Sitelinks: e(106),
            Contacts: e(107),
            AppIcon: e(114),
            MobileApps: e(115),
            Raiting: e(118),
            Button: e(117),
            Warning: e(119)
        });
        t.exports = r
    }
    , function(module, exports, __webpack_require__) {
        var PlaneTree = __webpack_require__(49)
            , BemComponent = __webpack_require__(64)
            , style = function(obj) {
                var p = [];
                with (obj)
                    p.push(".", id, " .yap-age{padding:2px 5px!important;margin:0!important;border-radius:2px!important;background-color:", utils.browser.ieVersion < 9 || utils.browser.isIEQuirks ? "#000" : "rgba(0, 0, 0, 0.7)", "!important;color:#fff!important;text-align:center!important;line-height:1.3em!important;-webkit-border-radius:2px!important;-moz-border-radius:2px!important;-ms-border-radius:2px!important;-o-border-radius:2px!important}");
                return p.join("")
            }
            ;
        module.exports = PlaneTree.createComponent(BemComponent, {
            name: "yap-age",
            shouldRender: function() {
                return this.props.age
            },
            afterRender: function() {
                this.pushStyles(style)
            },
            _render: function(t, i) {
                return PlaneTree.create("yatag", {
                    "class": t(i["class"], t(), i.mod)
                }, i.age)
            }
        })
    }
    , function(module, exports, __webpack_require__) {
        var PlaneTree = __webpack_require__(49)
            , BemComponent = __webpack_require__(64)
            , utils = __webpack_require__(1)
            , styles = function(obj) {
                var p = [];
                with (obj)
                    p.push(".", id, " .yap-picture{position:relative!important;display:block!important;overflow:hidden!important}.", id, " .yap-picture__container{position:absolute!important;left:50%!important}.", id, " .yap-picture__img{display:block!important}");
                return p.join("")
            }
            ;
        module.exports = PlaneTree.createComponent(BemComponent, {
            name: "yap-picture",
            initProps: function(t) {
                return this.picture = this.initPicture(t.image, t.size),
                    this.size = t.size,
                    t
            },
            initPicture: function(t, i) {
                return t.getFitting(i.width, i.height, i.wLoss)
            },
            calcContainerSize: function(t) {
                var i = this.size;
                return {
                    width: i.width === 1 / 0 ? "100%" : Math.min(i.width, t.width),
                    height: Math.min(i.height, t.height)
                }
            },
            fullWidth: function() {
                return this.picture.width >= this.size.width
            },
            afterRender: function() {
                this.pushStyles(styles)
            },
            _render: function(t, i, e) {
                var a = this.picture
                    , o = a.width
                    , n = a.height
                    , r = Boolean(i.href)
                    , s = {
                    "class": t("__container", r ? "__link" : ""),
                    tag: r ? "a" : "yatag",
                    href: r ? i.href : null ,
                    target: r ? "_blank" : null ,
                    style: {
                        width: o,
                        height: n,
                        "margin-left": -o / 2
                    }
                };
                return PlaneTree.create("yatag", {
                    "class": t(i["class"], t(), this.fullWidth() && t("_full-width")),
                    style: utils.extend({}, i.style, this.calcContainerSize(a))
                }, PlaneTree.create(e.Element, s, PlaneTree.create("img", {
                    "class": t("__img"),
                    alt: "",
                    src: a.src,
                    style: {
                        width: o,
                        height: n,
                        "max-width": o
                    }
                })))
            }
        })
    }
    , function(module, exports, __webpack_require__) {
        var PlaneTree = __webpack_require__(49)
            , BemComponent = __webpack_require__(64)
            , utils = __webpack_require__(1)
            , styles = function(obj) {
            var p = [];
            with (obj)
                p.push(".", id, " .yap-title__link,.", id, " .yap-title__link b{color:", settings.titleColor || "#0000CC", "!important}");
            return p.join("")
        }
            , Title = PlaneTree.createComponent(BemComponent, {
            name: "yap-title",
            initProps: function(t) {
                var i = t.adv
                    , e = i.title;
                return t.disableHyphenate !== !1 && (e = utils.addHyphenate(e, i.titleHyph)),
                    t.text = utils.prettify(e),
                    t
            },
            afterRender: function() {
                this.pushStyles(styles)
            },
            _render: function(t, i, e) {
                return PlaneTree.create("yatag", {
                    "class": t(i["class"], t(), i.mod)
                }, PlaneTree.create("a", {
                    "class": t("__link yap-link"),
                    href: i.adv.url,
                    target: "_blank"
                }, PlaneTree.create(e.HTML, {
                    text: i.text
                })))
            }
        });
        module.exports = Title
    }
    , function(t, i, e) {
        var a = e(49)
            , o = e(64)
            , n = e(1)
            , r = a.createComponent(o, {
            name: "yap-body",
            initProps: function(t) {
                var i = t.adv
                    , e = i.body;
                return t.disableHyphenate !== !1 && (e = n.addHyphenate(e, i.bodyHyph)),
                    t.text = n.prettify(e),
                    t
            },
            _render: function(t, i, e) {
                return a.create("yatag", {
                    "class": t(i["class"], t())
                }, a.create(e.HTML, {
                    text: i.text
                }))
            }
        });
        t.exports = r
    }
    , function(module, exports, __webpack_require__) {
        var PlaneTree = __webpack_require__(49)
            , BemComponent = __webpack_require__(64)
            , utils = __webpack_require__(1)
            , styles = function(obj) {
                var p = [];
                with (obj)
                    p.push(".", id, " .yap-sitelinks__link{color:", settings.sitelinksColor || settings.titleColor || "#0000CC", "!important}");
                return p.join("")
            }
            ;
        module.exports = PlaneTree.createComponent(BemComponent, {
            name: "yap-sitelinks",
            shouldRender: function() {
                return this.props.sitelinks && this.props.sitelinks.length
            },
            afterRender: function() {
                this.pushStyles(styles)
            },
            renderSitelinks: function(t, i) {
                return utils.map(i, function(i) {
                    return PlaneTree.create("yatag", {
                        "class": t("__sitelink")
                    }, PlaneTree.create("a", {
                        "class": t("__link yap-link"),
                        target: "_blank",
                        href: i.url
                    }, utils.prettify(i.title)))
                })
            },
            _render: function(t, i) {
                return PlaneTree.create("yatag", {
                    "class": t(i["class"], t())
                }, this.renderSitelinks(t, i.sitelinks))
            }
        })
    }
    , function(t, i, e) {
        var a = e(49)
            , o = e(64);
        t.exports = a.createComponent(o, {
            name: "yap-contacts",
            shouldRender: function() {
                var t = this.props.adv;
                return t.domain || t.vcardUrl || t.region || t.metro || t.geoDistance
            },
            _render: function(t, i, e) {
                var o = i.adv;
                return a.create("yatag", {
                    "class": t(i["class"], t(), i.mod)
                }, a.create(e.Domain, {
                    "class": t("__item"),
                    adv: o,
                    nofavicon: !0
                }), a.create(e.Address, {
                    "class": t("__item"),
                    adv: o
                }), a.create(e.Region, {
                    "class": t("__item"),
                    adv: o
                }))
            }
        }, {
            Domain: e(108),
            Address: e(110),
            Region: e(111)
        })
    }
    , function(t, i, e) {
        var a = e(49)
            , o = e(64);
        t.exports = a.createComponent(o, {
            name: "yap-domain",
            shouldRender: function() {
                return this.props.adv.domain
            },
            _render: function(t, i, e) {
                return a.create("yatag", {
                    "class": t(i["class"], t())
                }, i.nofavicon !== !0 ? a.create(e.Favicon, {
                    src: i.adv.favicon
                }) : null , a.create("a", {
                    "class": t("__link yap-link"),
                    target: "_blank",
                    href: i.adv.url
                }, i.adv.domain))
            }
        }, {
            Favicon: e(109)
        })
    }
    , function(module, exports, __webpack_require__) {
        var PlaneTree = __webpack_require__(49)
            , BemComponent = __webpack_require__(64)
            , utils = __webpack_require__(1)
            , styles = function(obj) {
            var p = [];
            with (obj)
                p.push(".", id, " .yap-favicon{position:relative!important;margin-top:", utils.browser.isIEQuirks || utils.browser.isIE7 ? "0" : "-0.2em", "!important;margin-right:.3em!important;width:1em!important;height:1em!important;min-width:8px!important;max-width:16px!important;min-height:8px!important;max-height:16px!important;display:inline-block!important;vertical-align:middle!important}");
            return p.join("")
        }
            , AppIcon = PlaneTree.createComponent(BemComponent, {
            name: "yap-favicon",
            afterRender: function() {
                return this.props.src ? (this.pushStyles(styles),
                    void this.checkBrokenFavicon()) : !1
            },
            checkBrokenFavicon: function() {
                var t = new Image;
                utils.domEvent.on(t, "error", function() {
                    this.destroy()
                }, this),
                    utils.domEvent.on(t, "load", function() {
                        16 !== t.width && 32 !== t.width && this.destroy()
                    }, this),
                    t.src = this.props.src
            },
            _render: function(t, i) {
                return PlaneTree.create("img", {
                    "class": t(i["class"], t(), i.mod),
                    src: i.src,
                    alt: ""
                })
            }
        });
        module.exports = AppIcon
    }
    , function(t, i, e) {
        var a = e(49)
            , o = e(64)
            , n = e(69);
        t.exports = a.createComponent(o, {
            name: "yap-address",
            shouldRender: function() {
                return this.props.adv.vcardUrl
            },
            _render: function(t, i, e) {
                return a.create("yatag", {
                    "class": t(i["class"], t(), i.mod)
                }, a.create("a", {
                    "class": t("__link yap-link"),
                    target: "_blank",
                    href: i.adv.vcardUrl
                }, a.create(e.HTML, {
                    text: n.getString("ADDRESS_AND_PHONE", 1)
                })))
            }
        })
    }
    , function(t, i, e) {
        var a = e(49)
            , o = e(64)
            , n = e(69);
        t.exports = a.createComponent(o, {
            name: "yap-region",
            shouldRender: function() {
                var t = this.props.adv;
                return t.region || t.metro || t.geoDistance
            },
            _render: function(t, i, e) {
                var o = i.adv
                    , r = [];
                return o.metro ? r.push(a.create(e.Container, null , a.create(e.HTML, {
                    text: n.getString("METRO", 1)
                }), "\xa0", o.metro)) : o.region && r.push(o.region),
                o.geoDistance && r.push(a.create(e.Geo, {
                    adv: o
                })),
                    r.length ? a.create("yatag", {
                        "class": t(i["class"], t(), i.mod)
                    }, a.create(e.Separate, {
                        separator: ", "
                    }, r)) : null
            }
        }, {
            Separate: e(112),
            Geo: e(113)
        })
    }
    , function(t, i, e) {
        var a = e(49)
            , o = e(1);
        t.exports = a.createComponent({
            render: function() {
                var t = this.props.separator
                    , i = this.getChildren()
                    , e = i.length - 1
                    , a = [];
                return o.each(i, function(i, o) {
                    a.push(i),
                    e > o && a.push(t)
                }),
                    a
            }
        })
    }
    , function(module, exports, __webpack_require__) {
        var PlaneTree = __webpack_require__(49)
            , BemComponent = __webpack_require__(64)
            , i18n = __webpack_require__(69)
            , styles = function(obj) {
                var p = [];
                with (obj)
                    p.push(".", id, " .yap-geo__text{margin-right:3px!important;display:inline-block!important}.", id, " .yap-geo__info{position:relative!important;margin:0!important;border:1px solid!important;padding:1px!important;width:1em!important;line-height:1.2!important;display:inline-block!important;font-size:70%!important;text-align:center!important;vertical-align:top!important;border-radius:3px!important;color:", utils.warning.getBorderColor(settings.bgColor || "#FFF", settings.textColor || "#000", .1), "!important;border-color:", utils.warning.getBorderColor(settings.bgColor || "#FFF", settings.textColor || "#000", .7), "!important;-webkit-border-radius:3px!important;-moz-border-radius:3px!important;-ms-border-radius:3px!important;-o-border-radius:3px!important}");
                return p.join("")
            }
            ;
        module.exports = PlaneTree.createComponent(BemComponent, {
            name: "yap-geo",
            shouldRender: function() {
                return this.props.adv.geoDistance
            },
            afterRender: function() {
                this.pushStyles(styles)
            },
            _render: function(t, i, e) {
                return PlaneTree.create("yatag", {
                    "class": t(i["class"], t(), i.mod)
                }, PlaneTree.create("yatag", {
                    "class": t("__text")
                }, PlaneTree.create(e.HTML, {
                    text: i18n.getString("GEO_FROM", 1)
                }), "\xa0~\xa0", PlaneTree.create(e.HTML, {
                    text: i.adv.geoDistance
                })), PlaneTree.create("a", {
                    "class": t("__info"),
                    target: "_blank",
                    href: "https://yandex.ru/support/direct-tooltips/calculate-distance.xml"
                }, "?"))
            }
        })
    }
    , function(module, exports, __webpack_require__) {
        var PlaneTree = __webpack_require__(49)
            , Picture = __webpack_require__(103)
            , styles = function(obj) {
            var p = [];
            with (obj)
                p.push(".", id, " .yap-app-icon{display:inline-block!important;overflow:hidden!important;border-radius:3px!important;-webkit-border-radius:3px!important;-moz-border-radius:3px!important;-ms-border-radius:3px!important;-o-border-radius:3px!important}");
            return p.join("")
        }
            , AppIcon = PlaneTree.createComponent(Picture, {
            name: "yap-app-icon",
            afterRender: function() {
                this.pushStyles(styles)
            },
            _render: function(t, i) {
                var e = this.picture
                    , a = e.width
                    , o = e.height;
                return PlaneTree.create("img", {
                    "class": t(i["class"], t(), i.mod),
                    alt: "",
                    src: e.src,
                    style: {
                        width: a,
                        height: o,
                        "max-width": a
                    }
                })
            }
        });
        module.exports = AppIcon
    }
    , function(module, exports, __webpack_require__) {
        var PlaneTree = __webpack_require__(49)
            , BemComponent = __webpack_require__(64)
            , removeOverflow = __webpack_require__(116)
            , styles = function(obj) {
            var p = [];
            with (obj)
                p.push(".", id, " .yap-mobile-apps{max-width:100%!important}.", id, " .yap-mobile-apps__button{max-width:100%!important;box-sizing:border-box!important;white-space:nowrap!important}.", id, " .yap-mobile-apps__price{display:inline-block!important}.", id, " .yap-mobile-apps_icon_hidden .yap-button__icon,.", id, " .yap-mobile-apps_price_hidden .yap-mobile-apps__price{display:none!important}.", id, " .yap-mobile-apps_with-icon .yap-mobile-apps__button .yap-button__text{padding:0!important;margin:0 .6em!important}");
            return p.join("")
        }
            , Warning = PlaneTree.createComponent(BemComponent, {
            name: "yap-mobile-apps",
            afterRender: function() {
                this.pushStyles(styles)
            },
            onDOMReady: function() {
                var t = this.b_;
                removeOverflow(this.rootComponent, [t("_price_hidden"), t("__icon_hidden")])
            },
            _render: function(t, i, e) {
                var a = i.adv
                    , o = a.addInfo
                    , n = o.callToAction
                    , r = o.price ? "&nbsp;&ndash; " + o.price + "&nbsp;" + (o.priceCurrencySymbol || "") : null ;
                return PlaneTree.create("yatag", {
                    "class": t(i["class"], t(), a.icon ? "_with-icon" : null , i.mod)
                }, PlaneTree.create(e.Button, {
                    "class": t("__button"),
                    href: o.callToActionUrl || a.url,
                    icon: a.icon,
                    size: "L"
                }, PlaneTree.create(e.HTML, {
                    text: n
                }), r ? PlaneTree.create("yatag", {
                    "class": t("__price")
                }, PlaneTree.create(e.HTML, {
                    text: r
                })) : null ))
            }
        }, {
            Button: __webpack_require__(117)
        });
        module.exports = Warning
    }
    , function(t, i, e) {
        function a(t, i) {
            r.each(i, function(i) {
                t.addClass(i)
            }),
                r.each(i, function(i) {
                    o(t, i)
                })
        }
        function o(t, i) {
            var e = t.getElement();
            n(e) || (t.removeClass(i),
            n(e) && t.addClass(i))
        }
        function n(t) {
            return t.scrollHeight - t.clientHeight > s || t.scrollWidth - t.clientWidth > s
        }
        var r = e(1)
            , s = 1;
        t.exports = a
    }
    , function(module, exports, __webpack_require__) {
        var PlaneTree = __webpack_require__(49)
            , BemComponent = __webpack_require__(64)
            , styles = function(obj) {
            var p = [];
            with (obj)
                p.push(".", id, " .yap-button{position:relative!important;z-index:0!important;margin:0!important;padding:0!important;display:inline-block!important;border:0!important;text-align:center!important;font-size:1em!important;line-height:1.9em!important;background:", settings.bgColor || "#FFF", "!important;user-select:none!important;-webkit-tap-highlight-color:rgba(0,0,0,0)!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;-o-user-select:none!important}.", id, " .yap-button__text{position:relative!important;z-index:2!important;top:-1px!important;margin:0 auto!important;padding:0 1em!important;display:inline-block!important;vertical-align:middle!important;color:", new utils.RGB(settings.bgColor || "#FFF").isLight() ? "#000" : "#fff", "!important;font-weight:400!important;zoom:0!important}.", id, " .yap-button__icon{vertical-align:middle!important}.", id, " .yap-button:hover .yap-button__text{color:", new utils.RGB(settings.hoverColor || "#0088CC").isLight() ? "#000" : "#fff", "!important;text-decoration:none!important}");
            return p.join("")
        }
            , Button = PlaneTree.createComponent(BemComponent, {
            name: "yap-button",
            afterRender: function() {
                this.pushStyles(styles)
            },
            getIconSize: function() {
                var t = {
                    S: [16, 16],
                    M: [32, 32],
                    L: [36, 36],
                    XL: [48, 48]
                }
                    , i = t[this.props.size] || t.M;
                return {
                    width: i[0],
                    height: i[1]
                }
            },
            _render: function(t, i, e) {
                return PlaneTree.create("a", {
                    "class": t(i["class"], t(), i.mod),
                    target: "_blank",
                    href: i.href
                }, i.icon ? PlaneTree.create(e.AppIcon, {
                    "class": t("__icon"),
                    image: i.icon,
                    size: this.getIconSize()
                }) : null , PlaneTree.create("yatag", {
                    "class": t("__text")
                }, this.getChildren()))
            }
        }, {
            AppIcon: __webpack_require__(114)
        });
        module.exports = Button
    }
    , function(module, exports, __webpack_require__) {
        var PlaneTree = __webpack_require__(49)
            , BemComponent = __webpack_require__(64)
            , TemplatesMap = __webpack_require__(76)
            , styles = function(obj) {
            var p = [];
            with (obj)
                p.push(".", id, " .yap-mobile-app__rating{display:inline-block!important;vertical-align:top!important;cursor:help!important}.", id, " .yap-mobile-app__rating_width_full{display:block!important;margin-top:1px!important}.", id, " .yap-mobile-app__rating_content_centered{text-align:center!important}.", id, " .yap-mobile-app__rating-votes{display:inline-block!important;vertical-align:middle!important;margin:.2em 0 0 .5em!important;font-size:.8em!important;color:", settings.textColor || "#000", "!important;opacity:.8!important}.", id, " .yap-mobile-app__rating .yap-mobile-app__rating-stars{overflow:hidden!important;position:relative!important;display:inline-block!important;vertical-align:middle!important;height:1em!important;width:5em!important;white-space:nowrap!important}.", id, " .yap-mobile-app__rating-stars-scale_filled{position:absolute!important;left:0!important;top:0!important;overflow:hidden!important}.", id, " .yap-mobile-app__rating .yap-mobile-app__rating-star{display:inline-block!important;vertical-align:top!important;fill:", settings.textColor || "#000", "!important;opacity:.4!important}.", id, " .yap-mobile-app__rating-stars-scale_filled .yap-mobile-app__rating-star{opacity:1!important;fill:#fc0!important}.", id, " .yap-mobile-app__rating-star .yap-mobile-app__star-svg{display:block!important;height:1em!important;width:1em!important}");
            return p.join("")
        }
            , Warning = PlaneTree.createComponent(BemComponent, {
            name: "yap-raiting",
            htmlTemplate: TemplatesMap.mobileApp__rating,
            shouldRender: function() {
                var t = this.props.adv;
                return t.isAppAd && t.addInfo.rating
            },
            afterRender: function() {
                this.pushStyles(styles)
            },
            _getHTML: function() {
                return this.htmlTemplate(this._getTemplateData())
            },
            _getTemplateData: function() {
                return {
                    ad: this.props.adv
                }
            },
            _render: function(t, i, e) {
                return PlaneTree.create("yatag", {
                    "class": t(i["class"], t(), i.mod)
                }, PlaneTree.create(e.HTML, {
                    text: this._getHTML()
                }))
            }
        });
        module.exports = Warning
    }
    , function(module, exports, __webpack_require__) {
        var PlaneTree = __webpack_require__(49)
            , BemComponent = __webpack_require__(64)
            , styles = function(obj) {
            var p = [];
            with (obj)
                p.push(".", id, " .yap-warning{border:none!important;overflow:hidden!important;font-size:.8em!important;line-height:1.1!important;color:rgba(", utils.RGB.rgba(new utils.RGB(settings.bgColor || settings.siteBgColor || "#FFFFFF").isLight() ? "#000" : "#FFF", .3), ")!important;background:0 0!important}.", id, " .yap-warning,.", id, " .yap-warning,.", id, " .yap-warning__link{font-weight:700!important;text-transform:uppercase!important}.", id, " .yap-warning__link{white-space:pre!important}");
            return p.join("")
        }
            , Warning = PlaneTree.createComponent(BemComponent, {
            name: "yap-warning",
            shouldRender: function() {
                var t = this.props.adv;
                return t.warning || t.isExtDistrib
            },
            afterRender: function() {
                this.pushStyles(styles)
            },
            renderLegal: function(t, i, e) {
                var a = i.adv.addInfo;
                return PlaneTree.create(e.Container, null , PlaneTree.create(e.HTML, {
                    text: a.legal.text + " "
                }), PlaneTree.create("a", {
                    "class": t("__link yap-link"),
                    href: a.legal.link,
                    target: "_blank"
                }, PlaneTree.create(e.HTML, {
                    text: a.legal.linkText
                })))
            },
            renderWarning: function(t, i, e) {
                return PlaneTree.create(e.HTML, {
                    text: i.adv.warning
                })
            },
            _render: function(t, i, e) {
                return PlaneTree.create("yatag", {
                    "class": t(i["class"], t(), i.mod)
                }, i.adv.isExtDistrib ? this.renderLegal(t, i, e) : this.renderWarning(t, i, e))
            }
        });
        module.exports = Warning
    }
    , function(module, exports, __webpack_require__) {
        var PlaneTree = __webpack_require__(49)
            , Picture = __webpack_require__(103)
            , utils = __webpack_require__(1)
            , browser = __webpack_require__(10)
            , styles = function(obj) {
            var p = [];
            with (obj)
                p.push(".", id, " .yap-picture-bg{position:relative!important;z-index:1!important;top:0!important;left:0!important;margin:0 auto!important;display:block!important;width:100%!important;overflow:hidden!important;text-align:center!important;font-size:0!important}.", id, " .yap-picture-bg__bg{position:absolute!important;top:0!important;left:0!important;z-index:2!important;width:100%!important;height:100%!important;background-position:50% 50%!important;background-size:cover!important;background-repeat:no-repeat!important;background-color:", settings.bgColor || "#fff", "!important;opacity:.3!important;transform:scale(2)!important;transform-origin:center 30%!important;filter:blur(2px)!important;-webkit-background-size:cover!important;-moz-background-size:cover!important;-ms-background-size:cover!important;-o-background-size:cover!important;-webkit-transform:scale(2)!important;-moz-transform:scale(2)!important;-ms-transform:scale(2)!important;-o-transform:scale(2)!important;-webkit-transform-origin:center 30%!important;-moz-transform-origin:center 30%!important;-ms-transform-origin:center 30%!important;-o-transform-origin:center 30%!important;-webkit-filter:blur(2px)!important;-moz-filter:blur(2px)!important;-ms-filter:blur(2px)!important;-o-filter:blur(2px)!important}.", id, " .yap-picture-bg__ie-bg-container{position:absolute!important;top:-30%!important;left:-50%!important;width:200%!important;height:", utils.browser.isIE6 || utils.browser.isIEQuirks ? "500px" : "200%", "!important}.", id, " .yap-picture-bg__ie-bg-container,.", id, " .yap-picture-bg__ie-bg{opacity:.3!important;filter:alpha(opacity=30)!important;-webkit-filter:alpha(opacity=30)!important;-moz-filter:alpha(opacity=30)!important;-ms-filter:alpha(opacity=30)!important;-o-filter:alpha(opacity=30)!important}.", id, " .yap-picture-bg__ie-bg{height:100%!important;display:inline-block!important}.", id, " .yap-picture-bg__picture{position:relative!important;z-index:3!important;margin:0 auto!important;display:block!important;box-shadow:0 0 3px rgba(0,0,0,.1)!important;-webkit-box-shadow:0 0 3px rgba(0,0,0,.1)!important;-moz-box-shadow:0 0 3px rgba(0,0,0,.1)!important;-ms-box-shadow:0 0 3px rgba(0,0,0,.1)!important;-o-box-shadow:0 0 3px rgba(0,0,0,.1)!important}.", id, " .yap-picture-bg__picture_full-width_false{display:inline-block!important}.", id, " .yap-picture-bg__link{position:absolute!important;z-index:3!important;top:0!important;left:0!important;width:200px!important;height:200px!important;overflow:hidden!important;text-indent:-4000px!important}");
            return p.join("")
        }
            , PictureBg = PlaneTree.createComponent(Picture, {
            name: "yap-picture-bg",
            afterRender: function() {
                this.pushStyles(styles)
            },
            getAdditionalStyles: function() {
                var t = Math.min((this.size.width - this.picture.width) / 2, (this.size.height - this.picture.height) / 2, .2 * this.size.width / 2);
                return utils.isInRange(t, 1, 100) ? {
                    "margin-top": t,
                    "margin-bottom": t
                } : null
            },
            isOldIE: function() {
                return browser.isIEQuirks || browser.isIE6 || browser.isIE7 || browser.isIE8
            },
            _render: function(t, i, e) {
                var a = this.fullWidth()
                    , o = this.picture
                    , n = this.isOldIE()
                    , r = PlaneTree.create(e.Picture, {
                    "class": t("__picture", "_full-width_" + Boolean(a)),
                    href: a || n ? i.href : null ,
                    image: i.image,
                    style: this.getAdditionalStyles(),
                    size: i.size
                });
                return a ? r : PlaneTree.create("a", {
                    "class": t(),
                    href: i.href,
                    target: "_blank"
                }, r, n ? PlaneTree.create("yatag", {
                    "class": t("__ie-bg-container")
                }, PlaneTree.create("img", {
                    "class": t("__ie-bg"),
                    src: o.src,
                    alt: ""
                })) : PlaneTree.create("yatag", {
                    "class": t("__bg"),
                    style: {
                        "background-image": "url(" + o.src + ")"
                    }
                }))
            }
        }, {
            Picture: __webpack_require__(103)
        });
        module.exports = PictureBg
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(89)
            , n = a.augment(o, {
            classes: "yap-layout_block_row"
        });
        t.exports = n
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(9)
            , n = e(41)
            , r = e(77)
            , s = e(123)
            , p = e(125)
            , l = e(124)
            , d = {
            classes: "yap-layout_block_poster",
            hoverClass: "yap-layout__item_hover",
            template: e(76).poster,
            getImageSize: function() {
                return {
                    width: 1 / 0,
                    height: 150
                }
            },
            getLayout: function() {
                return o.Layouts.MEDIUM
            },
            sortByImages: function(t) {
                t.ads.sort(function(t, i) {
                    return !t.image - !i.image
                })
            },
            prepareData: function(t) {
                var i = this.getImageSize();
                a.each(t.ads, function(t) {
                    a.each(["title", "body", "domain", "warning"], function(i) {
                        t[i] && (t[i] = a.prettify(t[i], {
                            gluePrepositions: !0,
                            maxGluedLength: 12,
                            softBreakPunct: !0
                        }))
                    }),
                        this._addHyphenate(t),
                    t.video && (t.player = t.video.getPlayer(i.width, i.height))
                }, this)
            },
            getBannerAdClass: function(t) {
                return t.player ? s : t.isExtDistrib ? p : l
            }
        }
            , u = a.augment(a.augment(n, d), {
            classes: "yap-layout_block_poster-vertical"
        })
            , c = a.augment(a.augment(r, d), {
            classes: "yap-layout_block_poster-horizontal",
            afterRender: function() {
                c.__super.afterRender.call(this),
                    this._setHeights();
                var t = a.browser.isIE && (a.browser.isQuirks || a.browser.ieVersion < 9);
                t || (this.resizeEvent = a.domEvent.on(window, "resize", a.throttle(this._setHeights, 250, this), this))
            },
            destructor: function() {
                c.__super.destructor.call(this),
                this._resizeEvent && (this._resizeEvent.un(),
                    this._resizeEvent = null )
            },
            _setHeights: function() {
                var t = this.getMainCont()
                    , i = a.dom(".yap-layout__item_picture_true", t)
                    , e = function(e, o, n) {
                        n = n || function() {
                                var i = a.dom(o || e, t);
                                return Math.max.apply(Math, a.map(i, function(t) {
                                    return t.clientHeight
                                }))
                            }
                            ,
                            a.each(i, function(t) {
                                var i = a.dom(e, t)[0];
                                a.dom.setImportantCssProperty(i, "height", "")
                            });
                        var r = n();
                        r && a.each(i, function(t) {
                            var i = a.dom(e, t)[0];
                            a.dom.setImportantCssProperty(i, "height", r + "px")
                        })
                    }
                    , o = function() {
                        return Math.max.apply(Math, a.map(i, function(t) {
                            return a.dom(".yap-layout__title", t)[0].clientHeight
                        }))
                    }
                    ;
                i.length && (e(".yap-layout__title", null , o),
                    e(".yap-layout__slider-inner"),
                    e(".yap-layout__outer", ".yap-layout__item"))
            }
        });
        t.exports = {
            PosterVertical: u,
            PosterHorizontal: c
        }
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(124)
            , n = e(85)
            , r = a.augment(o, {
            init: function(t, i, e) {
                r.__super.init.apply(this, arguments),
                    this.resizePlayer(),
                    this._videoPlayer = new n(t,i,e),
                    this.addComponent(this._videoPlayer),
                    a.dom.addClass(t, "yap-layout__item_video"),
                    a.dom.removeClass(t, "yap-layout_touch_false"),
                    this.on(a.dom(".yap-video-player", t), "click", this.stopPropagation)
            },
            initHoverListeners: function() {
                this.on(a.dom(".yap-layout__title", this._element), "mouseenter", this._expand),
                    this.on(this._element, "mouseleave", this._collapse)
            },
            resizePlayer: function() {
                var t = this._parent
                    , i = t.getImageSize()
                    , e = this._element
                    , o = a.dom(".yap-layout__content", e)[0]
                    , n = this._ad.video.getPlayer(o.clientWidth, Math.min(o.clientHeight, i.height))
                    , r = a.dom(".yap-layout__video", e)[0]
                    , s = a.dom(".yap-video-player", e)[0];
                a.dom.setImportantCssProperty(r, {
                    "margin-left": Math.round(-n.width / 2) + "px",
                    "margin-top": Math.round(-n.height / 2 + (this._ad.warning ? 0 : 3.5)) + "px",
                    width: n.width + "px",
                    height: n.height + "px"
                }),
                    a.dom.setImportantCssProperty(s, {
                        width: n.width + "px",
                        height: n.height + "px"
                    })
            },
            stopPropagation: function(t) {
                this.preventClick(t),
                    t.stopPropagation()
            },
            onGoBlock: function() {
                this._videoPlayer.stop()
            },
            onOpenAdtuneWindow: function() {
                this._videoPlayer.stop()
            }
        });
        t.exports = r
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(43)
            , n = a.augment(o, {
            OPEN_CLASS: "yap-layout__item_hover",
            init: function(t, i, e) {
                n.__super.init.apply(this, arguments),
                    this._elementContainer = e.getMainCont(),
                    this.initListeners()
            },
            initListeners: function() {
                if (this._hasPicture())
                    this.on(this._element, "touchstart", this._onTouchStart),
                        this.on(a.dom(".yap-layout__arrow_roll-up", this._element), "click", this.rollUp),
                        this.initHoverListeners(),
                    a.browser.support.cssTransition || this._initAnimationFallback(),
                        this.on(this._element, "click", this.onClick);
                else {
                    var t = a.filter(a.dom("a", this._element), function(t) {
                        return !a.dom.hasClass(t, "yap-adtune__link")
                    });
                    this.on(t, "click", this.onClick)
                }
            },
            initHoverListeners: function() {
                this.on(this._element, "mouseenter", this._expand),
                    this.on(this._element, "mouseleave", this._collapse)
            },
            _onTouchStart: function() {
                this._firstTap = !this._isExpanded()
            },
            _expand: function() {
                this._firstTap || (this._closeOpenAds(),
                    a.dom.addClass(this._element, this.OPEN_CLASS),
                this._animationFallback && this._animate(1, 0))
            },
            _isExpanded: function() {
                return a.dom.hasClass(this._element, this.OPEN_CLASS)
            },
            _closeOpenAds: function() {
                var t = a.dom(".yap-layout__item", this._elementContainer);
                a.each(t, function(t) {
                    a.dom.removeClass(t, this.OPEN_CLASS)
                }, this)
            },
            _collapse: function() {
                a.dom.removeClass(this._element, this.OPEN_CLASS),
                this._animationFallback && this._animate(0, 1)
            },
            onClick: function(t) {
                return a.dom.hasClass(this._element, "yap-layout__item_abused") ? void 0 : !this._hasPicture() || !this._firstTap && this._isExpanded() ? void this._go(t) : (this._firstTap = !1,
                    this._expand(),
                    void this.preventClick(t))
            },
            _go: function(t) {
                var i = this._ad
                    , e = t.target || t.srcElement;
                i.adId && ("a" === e.tagName.toLowerCase() && e.href ? this.go(e.href) : this.go(i.url)),
                    this.preventClick(t)
            },
            onGo: function(t) {
                this._parent.fireInnerComponents("go-block", this),
                    window.open(t)
            },
            rollUp: function(t) {
                this._collapse(),
                    t.stopPropagation()
            },
            preventClick: function(t) {
                t = t || window.event,
                t.preventDefault && t.preventDefault(),
                    t.returnValue = !1
            },
            _initAnimationFallback: function() {
                this._animationFallback = !0,
                    this.el_text = a.dom(".yap-layout__slider", this._element)[0],
                    this.el_text.style.top = -this.el_text.clientHeight + "px"
            },
            _animate: function(t, i) {
                var e = this.el_text
                    , o = -e.clientHeight;
                a.animate({
                    duration: 300,
                    start: t,
                    end: i,
                    onFrame: function(t) {
                        e.style.top = o * t + "px",
                            e.style.opacity = 1 - t
                    }
                })
            },
            _hasPicture: function() {
                return this._ad.picture
            }
        });
        t.exports = n
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(124)
            , n = e(46)
            , r = a.augment(o, {
            init: function(t, i, e) {
                r.__super.init.apply(this, arguments),
                    this.addComponent(new n(t,i,e))
            }
        });
        t.exports = r
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(41)
            , n = a.augment(o, {
            classes: "yap-layout_block_grid",
            constructor: function() {
                n.__parent.apply(this, arguments),
                    this.settings.limit = this.settings.format.limit
            },
            getColumns: function() {
                return 2
            }
        });
        t.exports = n
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(40)
            , n = {
            "320x100": e(79),
            "320x50": e(80),
            adaptive: e(87)
        }
            , r = a.augment(Object, {
            constructor: function(t, i, e, o) {
                this.renderTo = e,
                    this.settings = i;
                var r = this._guessSize()
                    , s = this._getSuitableBlock(r);
                a.extend(i, this._overrideSettings(i, s));
                var p = n[s]
                    , l = new p(t,i,e,o);
                return l.width = r.width,
                    l.height = r.height,
                    l
            },
            _guessSize: function() {
                var t = this._getSizeFromDOM();
                return t.width && t.height || (t.width = this.settings.width,
                    t.height = this.settings.height),
                    t
            },
            _getSizeFromDOM: function() {
                var t = {
                    width: 0,
                    height: 0
                };
                if (a.browser.isQuirks)
                    return t;
                var i = document.createElement("yatag");
                a.dom.setImportantCssProperty(i, {
                    display: "block",
                    height: "100%",
                    width: "100%",
                    padding: "0",
                    "font-size": "0",
                    "line-height": "0",
                    zoom: "1"
                });
                var e = a.dom("#" + this.renderTo);
                return e.appendChild(i),
                    t.width = i.clientWidth,
                    t.height = i.clientHeight,
                    e.removeChild(i),
                    t
            },
            _getSuitableBlock: function(t) {
                var i = t.width
                    , e = t.height
                    , o = i * e;
                return a.isInRange(i, 320, 600) && a.isInRange(e, 50, 79) ? "320x50" : a.isInRange(i, 300, 600) && a.isInRange(e, 80, 100) && 6e4 > o ? "320x100" : "adaptive"
            },
            _overrideSettings: function(t, i) {
                var e = o.getFormatByName(i)
                    , n = e.limit
                    , r = a.isInRange(t.limit, 1, n) ? t.limit : n;
                return {
                    format: e,
                    limit: r
                }
            }
        });
        t.exports = r
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(42)
            , n = a.augment(o, {
            template: e(76).vk,
            blockName: "yap-vk",
            itemSelector: ".yap-vk-item",
            getImageSize: function() {
                return {
                    width: 90,
                    height: 120
                }
            },
            prepareData: function(t) {
                a.each(t.ads, function(t) {
                    a.each(["title", "body", "domain"], function(i) {
                        t[i] && (t[i] = a.prettify(t[i], {
                            gluePrepositions: !0,
                            maxGluedLength: 12,
                            softBreakPunct: !0
                        }))
                    })
                })
            },
            setAdtuneVisiblity: function() {}
        });
        t.exports = n
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(128)
            , n = a.augment(o, {
            blockName: "yap-vk-new",
            itemSelector: ".yap-vk-new-item",
            isNewVk: !0,
            constructor: function() {
                n.__parent.apply(this, arguments),
                    a.extend(this.settings, this.getDefaultSettings())
            },
            getDefaultSettings: function() {
                return {
                    titleColor: "#42648b",
                    urlColor: "#42648b",
                    hoverColor: "#42648b",
                    bgColor: "#f0f2f5",
                    textColor: "#000000"
                }
            },
            getImageSize: function() {
                return {
                    width: 145,
                    height: 165
                }
            }
        });
        t.exports = n
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(9)
            , n = e(41)
            , r = e(77)
            , s = {
            template: e(76).mailru,
            getImageSize: function() {
                return {
                    width: 90,
                    height: 120
                }
            },
            getLayout: function() {
                return o.Layouts.WIDE
            }
        }
            , p = a.augment(n, a.extend(s, {
            classes: "yap-layout_block_mailru yap-layout_block_mailru-vertical"
        }))
            , l = a.augment(r, a.extend(s, {
            classes: "yap-layout_block_mailru yap-layout_block_mailru-horizontal"
        }));
        t.exports = {
            MailruVertical: p,
            MailruHorizontal: l
        }
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(87);
        t.exports = a.augment(o, {
            width: 970,
            height: 250
        })
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(87);
        t.exports = a.augment(o, {
            width: 970,
            height: 90
        })
    }
    , function(t, i) {
        function e(t) {
            var i = t.width + "x" + t.height;
            return this.createFormatObject(a[i] || i)
        }
        var a = {
            "1024x768": "480x320",
            "768x1024": "320x480"
        };
        t.exports = e
    }
    , function(t, i, e) {
        function a(t, i) {
            var e;
            this.getSettings = function() {
                return i
            }
                ,
                this.getSize = function() {
                    return [0 == t.rtb.width ? "100%" : t.rtb.width, t.rtb.height]
                }
                ,
                this.getUrl = function() {
                    return t.rtb.url
                }
                ,
                this.getHtml = function() {
                    return e || (e = o.base64.decode(t.rtb.html)),
                        e
                }
                ,
                this.isApp = function() {
                    return "1" == t.common.isMobileSdk
                }
                ,
                this.getLinkTail = function() {
                    return this.getSettings().linkTail
                }
                ,
                this.getViewNotices = function() {
                    var t = []
                        , i = this.getSettings();
                    return i.viewNotices && i.viewNotices.length ? t = t.concat(i.viewNotices) : i.viewNotice && (t = [i.viewNotice]),
                        t
                }
                ,
                this.getWinNotice = function() {
                    return this.getSettings().winNotice
                }
        }
        var o = e(1);
        t.exports = a
    }
    , function(t, i, e) {
        function a(t, i, e, a, o) {
            this.dataSource = t,
                this.blockId = i,
                this._visibilityManager = e,
                this._nonce = a,
                this._mainContId = "ya_partner_" + this.blockId + (o ? "-" + o : "")
        }
        var o = e(1)
            , n = e(6)
            , r = e(9)
            , s = 242500
            , p = .5
            , l = .3;
        a.prototype = {
            render: function(t) {
                var i = this.dataSource.getSize()
                    , e = o.format(r.RtbIframe.TAG, {
                    id: this._mainContId,
                    sandbox: "",
                    width: i[0],
                    height: i[1]
                });
                t.innerHTML = e,
                    this._container = t,
                    this.dataSource.getSettings().displayDelayed ? this._renderOnVisible(t) : this._render(t)
            },
            destructor: function() {
                this._containerChecker && this._containerChecker.clear(),
                this._visibilityChecker && this._visibilityChecker.clear(),
                this._container && (this._container.innerHTML = "")
            },
            _IFRAME_REDIRECT_TPL: o.format(r.RtbIframe.CONTENT, {
                head: o.browser.isFirefox ? "" : '<meta http-equiv="refresh" content="0;url=${url}">',
                afterAll: "<script nonce=\"${nonce}\">window.location = '${url}';</script>"
            }),
            _IFRAME_HTML_TPL: o.format(r.RtbIframe.CONTENT, {
                head: '<base href="${baseURL}" target="_blank"/>',
                body: "${html}"
            }),
            _render: function(t) {
                var i, e, a = this.dataSource.getUrl();
                a ? (i = this._IFRAME_REDIRECT_TPL,
                    e = {
                        url: o.addProtocol(a),
                        nonce: this._nonce || ""
                    }) : (i = this._IFRAME_HTML_TPL,
                    e = {
                        baseURL: "https://" + window.location.host,
                        html: this.dataSource.getHtml()
                    });
                var n = t.getElementsByTagName("iframe")[0];
                o.dom.setIframeHTML(n, o.format(i, e)),
                    this._createVisibilityChecker(n),
                    this._visibilityManager.sendWinNotice()
            },
            _renderOnVisible: function(t) {
                this._containerChecker = new o.VisibilityChecker(0).onVisible(n.protect("RTB container visible", function() {
                    this._render(t)
                }, this)).listen(t)
            },
            _createVisibilityChecker: function(t) {
                this._visibilityChecker = new o.VisibilityChecker(r.VISIBILITY_TIME,this.getVisiblePortion(t)).onConfirmed(n.protect("confirmVisibility: rtb", function() {
                    this._visibilityManager.confirm({
                        isApp: this.dataSource.isApp()
                    })
                }, this)).listen(t)
            },
            getVisiblePortion: function(t) {
                var i = t && t.clientWidth || 0
                    , e = t && t.clientHeight || 0
                    , a = i * e;
                return a >= s ? l : p
            }
        },
            t.exports = a
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(12)
            , n = a.format("https://st.yandexadexchange.net/match_r${ver}.html", {
            ver: Ya.matchVer
        })
            , r = /(^|\.)(vk.com|mail.ru|ok.ru)$/;
        t.exports = {
            isOpened: function() {
                return this._iframe
            },
            open: function() {
                this._isSupportedBrowsers() && this._canOpenIframe() && this._createIframe()
            },
            _isSupportedBrowsers: function() {
                return !(a.browser.isOperaMini && a.browser.ieVersion < 8)
            },
            _canOpenIframe: function() {
                var t = window.location.host;
                return !r.test(t)
            },
            _createIframe: function() {
                var t = o();
                this._iframe = t,
                    t.src = n
            }
        }
    }
    , function(t, i, e) {
        function a(t, i) {
            _(r(t), i)
        }
        function o(t, i) {
            _(s(t), i)
        }
        function n(t, i) {
            _(l(t), i)
        }
        function r(t) {
            var i = m.urls.rtb + t.pageId + "?"
                , e = d(t);
            return e["flash-ver"] = c.browser.flashVer[0],
            t.skipToken && (e["skip-token"] = t.skipToken),
            t.extParam && (e["ext-param"] = t.extParam),
                i += c.toQueryParams(e),
                i += t.extParams || "",
                i = p(i, t)
        }
        function s(t) {
            var i = m.urls.direct + t.pageId + "?"
                , e = d(t);
            return t.statId && (e["stat-id"] = t.statId,
                e["partner-stat-id"] = t.statId),
            t.skipBanner && (e["skip-banner"] = t.skipBanner),
            t.searchText && (e.text = t.searchText,
                e["page-no"] = t.searchPageNumber),
                i += c.toQueryParams(e),
                i += t.extParams || "",
                i = p(i, t)
        }
        function p(t, i) {
            if (t += "&grab=" + c.grab(Math.min(g, h - t.length), i.grab),
                i.layoutConfig && c.browser.support.longUrls) {
                i.layoutConfig.set("req_no", u());
                var e = i.layoutConfig.toString();
                e && (t += "&layout-config=" + encodeURIComponent(e))
            }
            return t
        }
        function l(t) {
            var i = m.urls.directSettings + t.pageId + "?"
                , e = d(t);
            return i += c.toQueryParams(e)
        }
        function d(t) {
            var i, e;
            try {
                i = window.top.document.referrer,
                    e = window.top.document.location.href,
                c.browser.isIE6 && e === i && (i = "")
            } catch (a) {
                e = document.referrer || window.location.href,
                    i = ""
            }
            var o = {
                "target-ref": e.substr(0, 512),
                "page-ref": i.substr(0, 512),
                charset: "utf-8"
            };
            return t.blockImpId && (o["imp-id"] = t.blockImpId),
            t.lang && (o.lang = t.lang),
            t.geo && (o["partner-geo-lat"] = t.geo.lat,
                o["partner-geo-long"] = t.geo["long"]),
            t.disableHighlight || (o["enable-flat-highlight"] = 1),
            t.additionalBanners && /.*\.yandex\.(ru|net)/.test(y) && (o["additional-banners"] = t.additionalBanners.replace(",", "\n")),
                o
        }
        function u() {
            return f++
        }
        var c = e(1)
            , m = e(9)
            , _ = e(138)
            , y = window.location.hostname
            , h = c.browser.support.longUrls ? 3e3 : 2040
            , g = 2048
            , f = 0;
        t.exports = {
            loadRtb: a,
            loadDirect: o,
            loadDirectSettings: n
        }
    }
    , function(t, i, e) {
        function a(t, i) {
            var e, a, r = o.genRnd(), s = n.protect("JSONP onLoadError", function() {
                Ya[r] && (Ya[r]("{}"),
                        Ya[r] = function() {}
                )
            }), p = n.setProtectedTimeout(s, 15e3);
            Ya[r] = function(t) {
                a = !0,
                    window.clearTimeout(p);
                var s = {
                    common: {}
                };
                try {
                    delete Ya[r],
                        o.extend(s, new Function("return " + t)())
                } catch (l) {
                    n.remoteLog("JSONP parse::" + l.message + "::" + t)
                }
                n.protect("JSONP callback", function() {
                    i(s),
                    e && o.dom.remove(e)
                })()
            }
                ,
                e = o.dom.addScript(t + "&callback=Ya[" + r + "]", !Ya.Context._asyncModeOn),
            e && (e.onerror = s,
                    e.onload = function() {
                        a || (window.clearTimeout(p),
                            p = n.setProtectedTimeout(s, 1e3))
                    }
            )
        }
        var o = e(1)
            , n = e(6);
        t.exports = a
    }
    , function(t, i, e) {
        function a(t) {
            this._config = {},
                this._element = t,
                this._winSize = o.dom.getWindowSize(),
                this.set("win_width", this._winSize.width),
                this.set("win_height", this._winSize.height),
                this._size = o.dom.getBoundingClientRect(this._element),
            this._size && (this._setLayout(),
                this._setVisible())
        }
        var o = e(2)
            , n = e(11);
        a.prototype = {
            set: function(t, i) {
                this._config[t] = i
            },
            setTitle: function(t) {
                var i = o.dom.getComputedFontSize(this._element);
                if (i) {
                    var e = t.font * parseInt(t.titlePercent, 10) / 100;
                    this.set("title_size", Math.round(e * i)),
                        this.set("title_bold", t.titleBold ? 1 : 0)
                }
            },
            toString: function() {
                var t;
                return o.browser.support.checkJSON() && (t = n().stringify(this._config)),
                    t
            },
            _setLayout: function() {
                var t = o.dom.getWindowScroll();
                this.set("width", this._size.right - this._size.left),
                    this.set("height", this._size.bottom - this._size.top),
                    this.set("left", this._size.left + t.left),
                    this.set("top", this._size.top + t.top)
            },
            _MIN_VISIBLE_AREA: .5,
            _setVisible: function() {
                var t = 1
                    , i = this._size.right - this._size.left
                    , e = Math.max(Math.min(this._size.right, this._winSize.width) - Math.max(this._size.left, 0), 0)
                    , a = this._size.bottom - this._size.top
                    , o = Math.max(Math.min(this._size.bottom, this._winSize.height) - Math.max(this._size.top, 0), 0);
                i ? t *= e / i : (this._size.left < 0 || this._size.right > this._winSize.width) && (t = 0),
                    a ? t *= o / a : (this._size.top < 0 || this._size.bottom > this._winSize.height) && (t = 0),
                    this.set("visible", t >= this._MIN_VISIBLE_AREA ? 1 : 0)
            }
        },
            t.exports = a
    }
    , function(t, i, e) {
        function a(t, i) {
            if ("ssp" !== i && "mobsdk" !== i && !r.counterId) {
                var e = n("metrika_yan", function(t) {
                    t.hit(window.location.href, {
                        referer: document.referrer
                    })
                });
                o.getCounter(t, e, !0),
                    r.counterId = !0
            }
        }
        var o = e(70)
            , n = e(7)
            , r = {};
        t.exports = {
            hitOnce: a
        }
    }
    , function(t, i, e) {
        function a(t) {
            this._advManager = t,
                this._managers = {},
                this._settingsCache = {}
        }
        var o = (e(6),
            e(9))
            , n = e(137)
            , r = e(28)
            , s = e(40)
            , p = e(139)
            , l = e(37)
            , d = e(1)
            , u = e(33)
            , c = e(140);
        a.prototype = {
            render: function(t, i, e) {
                var a = [t.searchPageNumber || "", t.searchText || ""].join("#")
                    , o = this._getManager("common#" + a, t.pageNumber);
                Ya.Context._asyncModeOn ? this._renderAsync(o, t, i, e) : this._renderSync(o, t, i, e),
                    c.hitOnce(t.pageId, t.bundle)
            },
            _getManager: function(t, i) {
                var e = t + "#" + (i ? i : "");
                return e in this._managers || (this._managers[e] = new r(!0)),
                    this._managers[e]
            },
            _renderAsync: function(t, i, e, a) {
                var o = this;
                this._advManager.queue.add(function(n) {
                    o._loadData(t, i, e, a || function() {}
                        , n)
                })
            },
            _renderSync: function(t, i, e, a) {
                window.yandex_ad_is_displayed = !0,
                    this._loadData(t, i, e, function() {
                        window.yandex_ad_is_displayed = !1,
                        a && a()
                    }, function() {})
            },
            _loadData: function(t, i, e, a, o) {
                if (i.data)
                    return void this._parseData(i.data, t, i, e, a, o);
                if (!t.dataCanReload() && "stripe" !== i.product)
                    return void this._render(t, i, e, a, o);
                var r = this
                    , s = t.getRenderId(i);
                n.loadDirect({
                    pageId: i.pageId,
                    blockImpId: i.blockImpId,
                    skipBanner: u.getCapturedAdIds(t.getUsedIds(s)).join("\n"),
                    statId: i.statId,
                    grab: i.grab,
                    searchText: i.searchText,
                    searchPageNumber: i.searchPageNumber || 1,
                    lang: i.lang,
                    geo: i.geo,
                    disableHighlight: i.disableHighlight,
                    extParams: i.extParams,
                    layoutConfig: this._getLayoutConfig(i.renderTo, e),
                    additionalBanners: i.additionalBanners
                }, function(n) {
                    r._parseData(n, t, i, e, a, o)
                })
            },
            _parseData: function(t, i, e, a, o, n) {
                var r = "stripe" === e.product;
                return this._advManager.checkStripe(t, e, r),
                    r ? void n() : (i.setData(t),
                    a || (a = t.settings && t.settings[e.blockImpId] ? t.settings[e.blockImpId] : {},
                        this._settingsCache[e.blockId] = a),
                        void this._render(i, e, a, o, n))
            },
            _render: function(t, i, e, a, o) {
                this._getSettings(i, e, function(e) {
                    t.render(i, e, a),
                        o()
                })
            },
            _getSettings: function(t, i, e) {
                if (i)
                    e(i);
                else if (this._settingsCache[t.blockId])
                    e(this._settingsCache[t.blockId]);
                else {
                    var a = this;
                    n.loadDirectSettings({
                        pageId: t.pageId,
                        blockImpId: t.blockImpId
                    }, function(i) {
                        var o = i[t.blockImpId];
                        a._settingsCache[t.blockId] = o,
                            e(o)
                    })
                }
            },
            _getLayoutConfig: function(t, i) {
                var e = new p(d.dom("#" + t));
                if (e.set("ad_no", u.getCapturedCount()),
                        i) {
                    var a = s.getFormatByName(i.name);
                    if (a) {
                        e.set("limit", l.getLimit(a, i)),
                            e.set("block", a.index);
                        var n = -1 !== d.inArray([o.BlockTypes.HORIZONTAL, o.BlockTypes.VERTICAL, o.BlockTypes.GRID], a.type);
                        if (!a.fixed && n) {
                            var r = l.parse(a, d.extend(i));
                            e.setTitle({
                                font: r.fontSize,
                                titlePercent: r.titleFontSizePercent,
                                titleBold: 1 === r.titleFontSize
                            })
                        }
                    }
                }
                return e
            }
        },
            t.exports = a
    }
    , function(t, i, e) {
        function a(t) {
            this._queue = t
        }
        var o = e(6)
            , n = e(137)
            , r = e(143)
            , s = e(144)
            , p = e(140);
        a.prototype = {
            _blocks: {},
            render: function(t, i) {
                var e = o.protect("Internal._loadData", function(e) {
                    this._render(t, i, e)
                }, this);
                Ya.Context._asyncModeOn ? this._loadByQueue(t, e) : this._loadData(t, e),
                    p.hitOnce(t.pageId, t.bundle)
            },
            _loadData: function(t, i) {
                n.loadDirect({
                    pageId: t.pageId,
                    grab: t.grab,
                    lang: t.lang,
                    geo: t.geo
                }, i)
            },
            _loadByQueue: function(t, i) {
                var e = this;
                this._queue.add(function(a) {
                    var o = function(t) {
                            i(t),
                                a()
                        }
                        ;
                    e._loadData(t, o)
                })
            },
            _render: function(t, i, e) {
                return this._blocks[t.renderTo] && (this._blocks[t.renderTo].destructor(),
                    this._blocks[t.renderTo] = null ),
                    e && e[t.internalType] ? (this._blocks[t.renderTo] = this._createBlock(t, e),
                        void (this._blocks[t.renderTo] && (this._blocks[t.renderTo].render(),
                        "function" == typeof t.onRender && t.onRender({
                            product: t.product,
                            blockType: t.internalType
                        })))) : void i()
            },
            _createBlock: function(t, i) {
                var e = new s({
                    data: i,
                    type: t.internalType
                });
                return new r(e,t.renderTo,t.blockId,t.internalType)
            }
        },
            t.exports = a
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(42)
            , n = e(47);
        t.exports = a.augment(o, {
            template: e(76).internal,
            advs: [],
            constructor: function(t, i, e, o) {
                this.blockId = e,
                    this.renderTo = a.dom("#" + i),
                    this._mainContId = "yap-" + this.blockId,
                    this.dataSource = t,
                    this._type = o
            },
            render: function() {
                this.renderTo && (this.insertCSS(this._getCss()),
                    this.renderTo.innerHTML = this.template({
                        id: this._mainContId,
                        type: this._type,
                        html: this.dataSource.getHtml()
                    }),
                    this._runScripts(),
                    this.dataSource.onConfirmVisibility())
            },
            _runScripts: function() {
                var t = a.dom("script", this.renderTo);
                a.each(t, function(t) {
                    var i = t.parentNode
                        , e = document.createElement("script");
                    e.text = t.text,
                        i.removeChild(t),
                        i.appendChild(e)
                }, this)
            },
            _getCss: function() {
                var t = {
                    id: this._mainContId
                };
                return n.reset(t) + n.internal(t)
            }
        })
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(40)
            , n = e(9)
            , r = e(29)
            , s = e(32);
        t.exports = a.augment(r, {
            constructor: function(t) {
                this._data = t.data,
                    this._type = t.type,
                    this._banner = this._data[this._type]
            },
            getHtml: function() {
                return this._banner.html
            },
            onConfirmVisibility: function() {
                (new Image).src = a.addQueryParams(this.getLinkHead() + this._banner.linkTail, {
                    "test-tag": s.getDirect({
                        format: o.getFormatByName(n.BlockTypes.INTERNAL).index
                    }),
                    wmode: 0
                })
            }
        })
    }
    , function(t, i, e) {
        function a() {
            this._reset()
        }
        var o = e(1);
        a.prototype = {
            _LOADER_URL: "yastatic.net/awaps-ad-sdk-js/1_0/inpage.js?rand=",
            render: function(t, i, e) {
                var a = this._prepareConfig(t, i, e);
                this._isReady ? this._render(a) : (this._loader || (this._isBeta = i.beta,
                    this._init()),
                    this._queue.push(a))
            },
            _prepareConfig: function(t, i, e) {
                return i.partnerId = t.partnerId,
                    i.category = t.category,
                {
                    renderTo: t.renderTo,
                    userProps: i,
                    callback: e
                }
            },
            _reset: function() {
                this._queue = [],
                    this._onLoadDescriptor = null ,
                    this._onErrorDescriptor = null
            },
            _init: function() {
                this._loader = o.dom.addScript(this._getLoaderUrl()),
                    this._onLoadDescriptor = o.domEvent.on(this._loader, "load", this._renderQueue, this, {
                        once: !0
                    }),
                    this._onErrorDescriptor = o.domEvent.on(this._loader, "error", this._reportError, this, {
                        once: !0
                    })
            },
            _getLoaderUrl: function() {
                var t = "https://" + (this._isBeta ? "betastatic." : "") + this._LOADER_URL;
                return t + o.genRnd()
            },
            _renderQueue: function() {
                this._isReady = !0,
                    o.each(this._queue, this._render, this),
                    this._onErrorDescriptor.un(),
                    this._reset()
            },
            _render: function(t) {
                window.ya.mediaAd.inPage.addInPageVideo(t.renderTo, t.userProps, t.callback)
            },
            _reportError: function(t) {
                o.each(this._queue, function(i) {
                    "function" == typeof i.callback && i.callback(t)
                }, this),
                    this._onLoadDescriptor.un(),
                    this._reset(),
                    this._removeLoader()
            },
            _removeLoader: function() {
                o.dom.remove(this._loader),
                    delete this._loader
            }
        },
            t.exports = a
    }
    , function(t, i, e) {
        var a = e(1)
            , o = e(6)
            , n = e(9)
            , r = function() {
            var t = function(t, i) {
                    return this.isIframe() || a.browser.ieVersion < 8 || a.browser.ieVersion < 10 && a.browser.isIEQuirks ? null : (this.prefs = this.getPrefs(t),
                        this.prefs ? (this.cfg = i,
                            void this.render()) : null )
                }
                ;
            t.Position = {
                ABSOLUTE: "1",
                RELATIVE: "2",
                BOTTOM: "3",
                TOP: "4"
            },
                t.template = e(76).stripe,
                t.ANIMATION_TIME = 500,
                t.prototype.isIframe = function() {
                    return window != window.top
                }
                ,
                t.prototype.getPrefs = function(i) {
                    var e = a.camelizeKeys(i.stripe)
                        , o = 12;
                    e.animation = !!parseInt(i.common.stripeAnimation, 10),
                        e.autoClose = parseInt(e.autoClose, 10) || 0,
                        e.height = parseInt(e.height, 10) || 0,
                        e.closeColor = e.closeColor || "#fff",
                        e.closeDecoration = e.closeDecoration || "none",
                        e.closeHoverColor = e.closeHoverColor || "#fff",
                        e.closeLeft = parseInt(e.closeLeft, 10) || 0,
                        e.closeCounter = e.closeCounter || "",
                        e.ageRestriction = e.ageRestriction || "",
                        e.text1FontSize = parseInt(e.text1FontSize, 10) || o,
                        e.text1Color = e.text1Color || "#fff",
                        e.text1HoverColor = e.text1HoverColor || e.text1Color,
                        e.text1Decoration = e.text1Decoration || "none",
                        e.text1Left = parseInt(e.text1Left, 10) || 0,
                        e.text1Position = parseInt(e.text1Position, 10) || 0,
                        e.text1Target = e.text1Target || "_blank",
                    "_self" == e.text1Target && (e.text1Target = "_top"),
                        e.text1Url = e.text1Url || "",
                        e.text2FontSize = parseInt(e.text2FontSize, 10) || o,
                        e.text2Color = e.text2Color || "#fff",
                        e.text2HoverColor = e.text2HoverColor || e.text2Color,
                        e.text2Decoration = e.text2Decoration || "none",
                        e.text2Left = parseInt(e.text2Left, 10) || 0,
                        e.text2Position = parseInt(e.text2Position, 10) || 0,
                        e.text2Target = e.text2Target || "_blank",
                    "_self" == e.text2Target && (e.text2Target = "_top"),
                        e.text2Url = e.text2Url || "",
                        e.agreementText = e.agreementText || "",
                        e.agreementUrl = e.agreementUrl || "",
                        e.backgroundColor = e.backgroundColor || "transparent",
                        e.backgroundColorFile = e.backgroundColorFile || "",
                        e.backgroundColorFile2 = e.backgroundColorFile2 || "",
                        e.backgroundImage = e.backgroundImage || "",
                        e.backgroundImageLeft = parseInt(e.backgroundImageLeft, 10) || 0,
                        e.voidUrl = e.voidUrl || "",
                        e.voidTarget = e.voidTarget || "_blank",
                    "_self" == e.voidTarget && (e.voidTarget = "_top"),
                        e.xFontSize = parseInt(e.xFontSize, 10) || 12,
                        e.stripeType = i.common.stripeType || t.Position.ABSOLUTE,
                        e.confirmVisibilityLink = e.linkNext ? i.common.linkHead + e.linkNext : "",
                    e.stripeType == t.Position.RELATIVE && (e.animation = !1);
                    var n = a.browser;
                    return (n.isIE6 || n.isIE7 || n.isIE8) && (e.animation = !1),
                    n.isIE9 && e.animation && (this.toggleView = this.timedToggleView),
                        e.stripeType != t.Position.BOTTOM && e.stripeType != t.Position.TOP || !n.isIE6 && !n.isIEQuirks ? e : null
                }
                ,
                t.prototype.render = function() {
                    this.iframe = document.createElement("iframe"),
                        this.iframe.frameBorder = 0,
                        this.iframe.scrolling = "no",
                        this.iframe.seamless = !0,
                        a.forOwn(this.getCss(), function(t, i) {
                            this.iframe.style[i] = t
                        }, this);
                    var i = document.body || document.documentElement;
                    i.insertBefore(this.iframe, i.firstChild);
                    var e = a.format(t.template(this.getTmplData()));
                    this.iframe.contentWindow.name = e,
                        this.iframe.contentWindow.location.replace("javascript:name"),
                        a.domEvent.on(this.iframe, "load", this.afterRender, this, {
                            once: !0
                        })
                }
                ,
                t.prototype.getCss = function() {
                    var i = {
                        display: "block",
                        margin: 0,
                        padding: 0,
                        zIndex: 2e4,
                        border: "none",
                        width: "100%",
                        position: "absolute",
                        left: 0,
                        height: this.prefs.height + "px"
                    };
                    return this.prefs.stripeType == t.Position.RELATIVE && (i.position = "relative"),
                    this.prefs.stripeType == t.Position.TOP && (i.position = "fixed"),
                        this.prefs.stripeType == t.Position.BOTTOM ? (i.position = "fixed",
                            i.bottom = -this.prefs.height + "px") : i.top = -this.prefs.height + "px",
                    this.prefs.animation && (i.transition = i.WebkitTransition = i.MozTransition = i.OTransition = "all " + t.ANIMATION_TIME + "ms"),
                        i
                }
                ,
                t.prototype.getTmplData = function() {
                    var t = 100 / 13
                        , i = function(t) {
                        if (!t)
                            return !1;
                        var i = t.match(/(.*?)\[([^\]]+)\](.*)/);
                        return i && a.map(i.slice(1), e)
                    }
                        , e = function(t) {
                        return t ? t.replace(/\S/gi, function(t) {
                            var i = t.charCodeAt(0);
                            return i > 255 ? "&#" + i : t
                        }) : t
                    }
                        , o = this.prefs.backgroundImage ? this.prefs.backgroundImageLeft == this.prefs.text1Left ? "bg-text1" : this.prefs.backgroundImageLeft == this.prefs.text2Left ? "bg-text2" : "bg-random" : "no-bg";
                    return this.prefs.ageRestriction && !this.prefs.text1Left && (this.prefs.text1Left = 1),
                        a.extend({}, this.prefs, {
                            ageWidth: this.prefs.text1Left * t - 2 + "%",
                            text1Width: (this.prefs.text2Left - this.prefs.text1Left) * t + "%",
                            legacyBgPosition: [0, 2, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82, 90, 98, 100][this.prefs.backgroundImageLeft],
                            backgroundImagePosLeft: this.prefs.backgroundImageLeft * t - (this.prefs.text1Left ? 2 : 0) + "%",
                            backgroundImageNarrowPosLeft: this.prefs.text1Left ? this.prefs.text1Left * t - (this.prefs.text1Left ? 2 : 0) + "%" : 0,
                            narrowMode: o,
                            closeBorder: "underline" == this.prefs.closeDecoration ? "1px" : "0",
                            text1: i(this.prefs.text1) || [e(this.prefs.text1), "", ""],
                            text2: i(this.prefs.text2) || [e(this.prefs.text2), "", ""],
                            agreementText: i(this.prefs.agreementText) || ["", e(this.prefs.agreementText), ""],
                            closeText: e(this.prefs.close)
                        })
                }
                ,
                t.prototype.afterRender = function() {
                    this.toggleView(!0),
                    this.prefs.autoClose && (this.autoCloseTimer = o.setProtectedTimeout(this.close, 1e3 * this.prefs.autoClose, this));
                    var t = function() {
                            o.setProtectedTimeout(this.close, 10, this)
                        }
                        ;
                    this.addEvent("text1", "click", t, !0),
                        this.addEvent("mainlink", "click", t, !0),
                        this.addEvent("text2", "click", t, !0),
                        this.addEvent("background", "click", t, !0),
                        this.addEvent("close", "click", function() {
                            this.onManualClose(),
                                this.close()
                        }, !0);
                    var i = this.iframe.contentWindow.document.getElementById("container");
                    if (this.prefs.backgroundColorFile2 && (this.addEvent("text2", "mouseover", function() {
                            a.dom.addClass(i, "stripe_bghover_true")
                        }),
                            this.addEvent("text2", "mouseleave", function() {
                                a.dom.removeClass(i, "stripe_bghover_true")
                            })),
                            !a.browser.support.touch) {
                        var e = function() {
                                a.dom.addClass(i, "stripe_hover_true")
                            }
                            , n = function() {
                                a.dom.removeClass(i, "stripe_hover_true")
                            }
                            ;
                        this.addEvent("text1", "mouseover", e),
                            this.addEvent("text2", "mouseover", e),
                            this.addEvent("mainlink", "mouseover", e),
                            this.addEvent("agreement", "mouseover", e),
                            this.addEvent("text1", "mouseleave", n),
                            this.addEvent("text2", "mouseleave", n),
                            this.addEvent("mainlink", "mouseleave", n),
                            this.addEvent("agreement", "mouseleave", n)
                    }
                    this.launchVisibilityChecker(),
                    this.cfg.onRender && this.cfg.onRender({
                        product: "stripe",
                        height: this.prefs.height
                    })
                }
                ,
                t.prototype.addEvent = function(t, i, e, o) {
                    var n = this.iframe.contentWindow.document.getElementById(t);
                    n && a.domEvent.on(n, i, e, this, {
                        once: o
                    })
                }
                ,
                t.prototype.toggleView = function(i, e) {
                    var a = "top";
                    this.prefs.stripeType == t.Position.BOTTOM && (a = "bottom"),
                        this.iframe.style[a] = (i ? 0 : -this.prefs.height) + "px",
                    e && (this.prefs.animation ? this.addTransitionEndEvent(e) : e())
                }
                ,
                t.prototype.addTransitionEndEvent = function(t) {
                    a.each(["transitionend", "webkittransitionend", "moztransitionend", "otransitionend"], function(i) {
                        a.domEvent.on(this.iframe, i, t, this, {
                            once: !0
                        })
                    }, this)
                }
                ,
                t.prototype.close = function() {
                    this.closed || (this.closed = !0,
                    this.autoCloseTimer && (clearTimeout(this.autoCloseTimer),
                        this.autoCloseTimer = null ),
                        this.visibilityChecker.clear(),
                        this.toggleView(!1, o.protect("Stripe closed", this.destroy, this)),
                    this.cfg.onHide && this.cfg.onHide({
                        product: "stripe"
                    }))
                }
                ,
                t.prototype.destroy = function() {
                    a.dom.remove(this.iframe),
                        this.iframe = null
                }
                ,
                t.prototype.onManualClose = function() {
                    this.prefs.closeCounter && ((new Image).src = this.prefs.closeCounter)
                }
                ,
                t.prototype.launchVisibilityChecker = function() {
                    this.visibilityChecker = new a.VisibilityChecker(n.VISIBILITY_TIME).onConfirmed(o.protect("Stripe: onConfirmed", this.onConfirmVisibility, this)),
                    this.prefs.confirmVisibilityLink && (this.prefs.animation ? o.setProtectedTimeout(function() {
                        this.visibilityChecker.listen(this.iframe)
                    }, t.ANIMATION_TIME, this) : this.visibilityChecker.listen(this.iframe))
                }
                ,
                t.prototype.onConfirmVisibility = function() {
                    (new Image).src = this.prefs.confirmVisibilityLink
                }
                ,
                t.prototype.timedToggleView = function(i, e) {
                    function a(t, i, e, a) {
                        return e * t / a + i
                    }
                    function n(t, i) {
                        var e = new Date
                            , a = function() {
                                t(new Date - e) ? setTimeout(a, 17) : i && i()
                            }
                            ;
                        a()
                    }
                    function r(t) {
                        n(function(i) {
                            var e = t.easing(i, t.start, t.end - t.start, t.duration)
                                , a = i < t.duration;
                            return t.onFrame(a ? e : t.end),
                                a
                        }, t.onEnd)
                    }
                    r({
                        duration: t.ANIMATION_TIME,
                        easing: a,
                        start: i ? -this.prefs.height : 0,
                        end: i ? 0 : -this.prefs.height,
                        onEnd: e && o.protect("Stripe animation end callback", e),
                        onFrame: o.protect("Stripe animation frame", function(i) {
                            var e = this.prefs.stripeType == t.Position.BOTTOM ? "bottom" : "top";
                            this.iframe.style[e] = Math.round(i) + "px"
                        }, this)
                    })
                }
            ;
            var i;
            return function(e, a) {
                i || (i = new t(e,a))
            }
        }();
        t.exports = r
    }
]);
