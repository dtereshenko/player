(function (root, getVstb) {root.vstb = getVstb();}(this, function () {

var requirejs, require, define;

!function(a) {
    function b(a, b) {
        return r.call(a, b);
    }
    function c(a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n = b && b.split("/"), o = p.map, q = o && o["g"] || {};
        if (a && "." === a.charAt(0)) if (b) {
            for (a = a.split("/"), g = a.length - 1, p.nodeIdCompat && t.test(a[g]) && (a[g] = a[g].replace(t, "")), 
            a = n.slice(0, n.length - 1).concat(a), k = 0; k < a.length; k += 1) if (m = a[k], 
            "." === m) a.splice(k, 1), k -= 1; else if (".." === m) {
                if (1 === k && (".." === a[2] || ".." === a[0])) break;
                k > 0 && (a.splice(k - 1, 2), k -= 2);
            }
            a = a.join("/");
        } else 0 === a.indexOf("./") && (a = a.substring(2));
        if ((n || q) && o) {
            for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                if (d = c.slice(0, k).join("/"), n) for (l = n.length; l > 0; l -= 1) if (e = o[n.slice(0, l).join("/")], 
                e && (e = e[d])) {
                    f = e, h = k;
                    break;
                }
                if (f) break;
                !i && q && q[d] && (i = q[d], j = k);
            }
            !f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"));
        }
        return a;
    }
    function d(b, c) {
        return function() {
            var d = s.call(arguments, 0);
            return "string" != typeof d[0] && 1 === d.length && d.push(null), k.apply(a, d.concat([ b, c ]));
        };
    }
    function e(a) {
        return function(b) {
            return c(b, a);
        };
    }
    function f(a) {
        return function(b) {
            n[a] = b;
        };
    }
    function g(c) {
        if (b(o, c)) {
            var d = o[c];
            delete o[c], q[c] = !0, j.apply(a, d);
        }
        if (!b(n, c) && !b(q, c)) throw new Error("No " + c);
        return n[c];
    }
    function h(a) {
        var b, c = a ? a.indexOf("!") : -1;
        return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [ b, a ];
    }
    function i(a) {
        return function() {
            return p && p.h && p.h[a] || {};
        };
    }
    var j, k, l, m, n = {}, o = {}, p = {}, q = {}, r = Object.prototype.hasOwnProperty, s = [].slice, t = /\.js$/;
    l = function(a, b) {
        var d, f = h(a), i = f[0];
        return a = f[1], i && (i = c(i, b), d = g(i)), i ? a = d && d.normalize ? d.normalize(a, e(b)) : c(a, b) : (a = c(a, b), 
        f = h(a), i = f[0], a = f[1], i && (d = g(i))), {
            f: i ? i + "!" + a : a,
            n: a,
            i: i,
            j: d
        };
    }, m = {
        k: function(a) {
            return d(a);
        },
        l: function(a) {
            var b = n[a];
            return "undefined" != typeof b ? b : n[a] = {};
        },
        m: function(a) {
            return {
                id: a,
                uri: "",
                l: n[a],
                h: i(a)
            };
        }
    }, j = function(c, e, h, i) {
        var j, k, p, r, s, t, u = [], v = typeof h;
        if (i = i || c, "undefined" === v || "function" === v) {
            for (e = !e.length && h.length ? [ "require", "exports", "module" ] : e, s = 0; s < e.length; s += 1) if (r = l(e[s], i), 
            k = r.f, "require" === k) u[s] = m.k(c); else if ("exports" === k) u[s] = m.l(c), 
            t = !0; else if ("module" === k) j = u[s] = m.m(c); else if (b(n, k) || b(o, k) || b(q, k)) u[s] = g(k); else {
                if (!r.j) throw new Error(c + " missing " + k);
                r.j.load(r.n, d(i, !0), f(k), {}), u[s] = n[k];
            }
            p = h ? h.apply(n[c], u) : void 0, c && (j && j.l !== a && j.l !== n[c] ? n[c] = j.l : p === a && t || (n[c] = p));
        } else c && (n[c] = h);
    }, requirejs = require = k = function(b, c, d, e, f) {
        if ("string" == typeof b) return m[b] ? m[b](c) : g(l(b, c).f);
        if (!b.splice) {
            if (p = b, p.deps && k(p.deps, p.o), !c) return;
            c.splice ? (b = c, c = d, d = null) : b = a;
        }
        return c = c || function() {}, "function" == typeof d && (d = e, e = f), e ? j(a, b, c, d) : setTimeout(function() {
            j(a, b, c, d);
        }, 4), k;
    }, k.h = function(a) {
        return k(a);
    }, requirejs.p = n, define = function(a, c, d) {
        if ("string" != typeof a) throw new Error("See almond README: incorrect module build, no module name");
        c.splice || (d = c, c = []), b(n, a) || b(o, a) || (o[a] = [ a, c, d ]);
    }, define.q = {
        s: !0
    };
}(), define("../node_modules/almond/almond", function() {}), define("utils/commonUtils.js", [ "exports" ], function(a) {
    "use strict";
    a.t = function() {
        function b(a) {
            if (null == a || r(a)) return !1;
            var b = a.length;
            return 1 === a.nodeType && b ? !0 : l(a) || o(a) || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
        }
        function c(a, d, e) {
            var f;
            if (a) if (p(a)) for (f in a) "prototype" === f || "length" === f || "name" === f || a.hasOwnProperty && !a.hasOwnProperty(f) || d.call(e, a[f], f); else if (a.forEach && a.forEach !== c) a.forEach(d, e); else if (b(a)) for (f = 0; f < a.length; f++) d.call(e, a[f], f); else for (f in a) a.hasOwnProperty(f) && d.call(e, a[f], f);
            return a;
        }
        function d(a, b) {
            b ? a.u = b : delete a.u;
        }
        function e(a) {
            var b = a.u;
            return c(arguments, function(b) {
                b !== a && c(b, function(b, c) {
                    a[c] = b;
                });
            }), d(a, b), a;
        }
        function f(a) {
            return c(arguments, function(b) {
                b !== a && c(b, function(c, d) {
                    Object.defineProperty(a, d, {
                        value: c,
                        writable: Object.getOwnPropertyDescriptor(b, d).writable,
                        enumerable: Object.getOwnPropertyDescriptor(b, d).enumerable,
                        v: Object.getOwnPropertyDescriptor(b, d).v
                    });
                });
            }), a;
        }
        function g() {}
        function h(a) {
            return function() {
                return a;
            };
        }
        function i(a) {
            var b;
            try {
                b = a();
            } catch (c) {
                b = null;
            } finally {
                return b;
            }
        }
        function j(a) {
            return "undefined" != typeof a;
        }
        function k(a) {
            return null != a && "object" == typeof a;
        }
        function l(a) {
            return "string" == typeof a;
        }
        function m(a) {
            return "number" == typeof a;
        }
        function n(a) {
            return "[object Date]" === D.call(a);
        }
        function o(a) {
            return "[object Array]" === D.call(a);
        }
        function p(a) {
            return "function" == typeof a;
        }
        function q(a) {
            return "[object RegExp]" === D.call(a);
        }
        function r(a) {
            return a && a.document && a.location && a.alert && a.setInterval;
        }
        function s(a) {
            return "[object ArrayBuffer]" === D.call(a);
        }
        function t(a) {
            return "boolean" == typeof a;
        }
        function u(a) {
            return j(a) && l(a) && 0 === a.trim().length;
        }
        function v(a) {
            return a && a.$evalAsync && a.$watch;
        }
        function w(a, b) {
            if (!r(a) && !v(a)) {
                if (b) if (o(a)) {
                    b.length = 0;
                    for (var e = 0; e < a.length; e++) b.push(w(a[e]));
                } else {
                    var f = b.u;
                    c(b, function(a, c) {
                        delete b[c];
                    });
                    for (var g in a) b[g] = w(a[g]);
                    d(b, f);
                } else b = a, a && (o(a) ? b = w(a, []) : n(a) ? b = new Date(a.getTime()) : q(a) ? b = new RegExp(a.source) : k(a) && (b = w(a, {})));
                return b;
            }
        }
        function x(a, b) {
            return "undefined" != typeof a ? JSON.stringify(a, y, b ? "  " : null) : void 0;
        }
        function y(a, b) {
            var c = b;
            return "string" == typeof a && "$" === a.charAt(0) ? c = void 0 : r(b) ? c = "$WINDOW" : b && document === b ? c = "$DOCUMENT" : v(b) && (c = "$SCOPE"), 
            c;
        }
        function z(a, b) {
            var c = a.substr(a.lastIndexOf("/"));
            return c.lastIndexOf(".") > -1 && (c = c.substr(0, c.lastIndexOf("."))), c += "." + b, 
            a.substr(0, a.lastIndexOf("/")) + c;
        }
        function A(a, b) {
            for (var c in b) a.style[c] = b[c];
        }
        function B(a) {
            e(a, {
                version: version
            });
        }
        var C = a;
        var D = Object.prototype.toString;
        var E = function(a) {
            return l(a) ? a.toLowerCase() : a;
        };
        C.A = E;
        var F = function(a) {
            return l(a) ? a.toUpperCase() : a;
        };
        return C.B = F, C.C = b, C.forEach = c, C.extend = e, C.D = f, C.F = g, g.G = [], 
        C.H = h, C.I = i, C.J = j, C.K = k, C.L = l, C.M = m, C.N = n, C.isArray = o, C.O = p, 
        C.P = q, C.R = r, C.S = s, C.T = t, C.U = u, C.V = v, C.W = w, C.X = x, C.Y = y, 
        C.Z = z, C.$ = A, C._ = {
            aa: 0
        }, C.ba = B, C;
    }();
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
}), define("configuration.js", [ "exports", "module" ], function(a, b) {
    "use strict";
    var _prototypeProperties = function(a, b, c) {
        b && Object.defineProperties(a, b), c && Object.defineProperties(a.prototype, c);
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var c = null;
    var d = function() {
        function a(b) {
            if (_classCallCheck(this, a), c) return c;
            c = this;
            var d = this, e = b.ca();
            d.da = null, d.ea = null, d.fa = null, d.locale = "en_CA", d.ga = e.getDeviceId(), 
            d.ha = null, d.ia = !1, d.network = "wifi", d.ja = null, d.mak = null, d.quickplayId = null, 
            d.ka = "webClient", d.la = "5", d.ma = "4", d.heartbeatFrequencyInMs = null, d.na = null, 
            d.heartbeatUrl = null, d.delivery = "5", d.oa = null, d.pa = "1.0", d.qa = "5.4.3.29", 
            d.ra = null, d.sa = null, d.ta = null, d.ua = null, d.va = null, d.wa = !0, d.xa = "6:2.0,0:", 
            d.ya = null;
        }
        return _prototypeProperties(a, {
            za: {
                value: function(b) {
                    return null === c && (c = new a(b)), c;
                },
                writable: !0,
                v: !0
            }
        }), a;
    }();
    b.l = d;
}), define("pubSub.js", [ "exports", "module" ], function(a, b) {
    "use strict";
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var c = function d() {
        _classCallCheck(this, d);
        var a = {};
        var b = a.hasOwnProperty;
        this.subscribe = function(c, d) {
            b.call(a, c) || (a[c] = []);
            var e = a[c].push(d) - 1;
            return {
                unsubscribe: function() {
                    delete a[c][e];
                }
            };
        }, this.Aa = function(c, d) {
            if (b.call(a, c)) {
                var e = Array.prototype.slice.call(arguments, 1);
                a[c].forEach(function(a) {
                    a.apply(null, e);
                });
            }
        };
    };
    b.l = c;
}), define("utils/dateUtils.js", [ "exports", "module" ], function(a, b) {
    "use strict";
    var c = function() {
        function a(a, b) {
            for (;a.toString().length < b; ) a = "0" + a;
            return a.toString();
        }
        return {
            Ba: function(b) {
                var c = b.getFullYear(), d = b.getMonth() + 1, e = b.getDate(), f = b.getHours(), g = b.getMinutes(), h = b.getSeconds(), i = b.getMilliseconds();
                return d = a(d, 2), e = a(e, 2), f = a(f, 2), g = a(g, 2), h = a(h, 2), i = a(i, 3), 
                "" + c + "-" + d + "-" + e + " " + f + ":" + g + ":" + h + "." + i;
            },
            Ca: function(a) {
                return a.toISOString().replace(/([A-Z])+/gi, " ").trim();
            }
        };
    }();
    b.l = c;
}), define("utils/userAgentUtils.js", [ "exports", "module" ], function(a, b) {
    "use strict";
    var c = function() {
        function a(a) {
            for (var b = 0; b < a.length; b++) {
                var d = a[b].Da;
                var e = a[b].Ea;
                if (c = a[b].Fa || a[b].identity, d) {
                    if (-1 !== d.indexOf(a[b].Ga)) return a[b].identity;
                } else if (e) return a[b].identity;
            }
        }
        function b(a) {
            var b = a.indexOf(c);
            if (-1 !== b) return parseFloat(a.substring(b + c.length + 1));
        }
        var c;
        var d = [ {
            Da: window.navigator.userAgent,
            Ga: "Chrome",
            identity: "Chrome"
        }, {
            Da: window.navigator.userAgent,
            Ga: "OmniWeb",
            Fa: "OmniWeb/",
            identity: "OmniWeb"
        }, {
            Da: window.navigator.vendor,
            Ga: "Apple",
            identity: "Safari",
            Fa: "Version"
        }, {
            Ea: window.opera,
            identity: "Opera"
        }, {
            Da: window.navigator.vendor,
            Ga: "iCab",
            identity: "iCab"
        }, {
            Da: window.navigator.vendor,
            Ga: "KDE",
            identity: "Konqueror"
        }, {
            Da: window.navigator.userAgent,
            Ga: "Firefox",
            identity: "Firefox"
        }, {
            Da: window.navigator.vendor,
            Ga: "Camino",
            identity: "Camino"
        }, {
            Da: window.navigator.userAgent,
            Ga: "Netscape",
            identity: "Netscape"
        }, {
            Da: window.navigator.userAgent,
            Ga: "MSIE",
            identity: "Explorer",
            Fa: "MSIE"
        }, {
            Da: window.navigator.userAgent,
            Ga: "Gecko",
            identity: "Mozilla",
            Fa: "rv"
        }, {
            Da: window.navigator.userAgent,
            Ga: "Mozilla",
            identity: "Netscape",
            Fa: "Mozilla"
        } ];
        var e = [ {
            Da: window.navigator.platform,
            Ga: "Win",
            identity: "Windows"
        }, {
            Da: window.navigator.platform,
            Ga: "Mac",
            identity: "Mac"
        }, {
            Da: window.navigator.userAgent,
            Ga: "iPhone",
            identity: "iPhone/iPod"
        }, {
            Da: window.navigator.userAgent,
            Ga: "iPad",
            identity: "iPad"
        }, {
            Da: window.navigator.platform,
            Ga: "Linux",
            identity: "Linux"
        } ];
        return {
            Ha: function() {
                return a(d), b(window.navigator.userAgent) || b(window.navigator.appVersion) || "unknown";
            },
            Ia: function() {
                return a(d) || "unknown";
            },
            Ja: function() {
                switch (a(e)) {
                  case "Mac":
                    return "macDesktop";

                  case "Windows":
                    return "windowsDesktop";

                  case "iPad":
                  case "iPhone/iPod":
                    return "ios";

                  default:
                    return "unknown";
                }
            }
        };
    }();
    b.l = c;
}), function(a) {
    "use strict";
    function b() {
        var b = a.crypto || a.msCrypto;
        if (!h && b && b.getRandomValues) try {
            var c = new Uint8Array(16);
            k = h = function() {
                return b.getRandomValues(c), c;
            }, h();
        } catch (d) {}
        if (!h) {
            var e = new Array(16);
            i = h = function() {
                for (var a, b = 0; 16 > b; b++) 0 === (3 & b) && (a = 4294967296 * Math.random()), 
                e[b] = a >>> ((3 & b) << 3) & 255;
                return e;
            }, "undefined" != typeof console && console.warn && console.warn("[SECURITY] node-uuid: crypto not usable, falling back to insecure Math.random()");
        }
    }
    function c() {
        if ("function" == typeof require) try {
            var a = require("crypto").randomBytes;
            j = h = a && function() {
                return a(16);
            }, h();
        } catch (b) {}
    }
    function d(a, b, c) {
        var d = b && c || 0, e = 0;
        for (b = b || [], a.toLowerCase().replace(/[0-9a-f]{2}/g, function(a) {
            16 > e && (b[d + e++] = o[a]);
        }); 16 > e; ) b[d + e++] = 0;
        return b;
    }
    function e(a, b) {
        var c = b || 0, d = n;
        return d[a[c++]] + d[a[c++]] + d[a[c++]] + d[a[c++]] + "-" + d[a[c++]] + d[a[c++]] + "-" + d[a[c++]] + d[a[c++]] + "-" + d[a[c++]] + d[a[c++]] + "-" + d[a[c++]] + d[a[c++]] + d[a[c++]] + d[a[c++]] + d[a[c++]] + d[a[c++]];
    }
    function f(a, b, c) {
        var d = b && c || 0;
        var f = b || [];
        a = a || {};
        var g = null != a.clockseq ? a.clockseq : s;
        var h = null != a.msecs ? a.msecs : new Date().getTime();
        var i = null != a.nsecs ? a.nsecs : u + 1;
        var j = h - t + (i - u) / 1e4;
        if (0 > j && null == a.clockseq && (g = g + 1 & 16383), (0 > j || h > t) && null == a.nsecs && (i = 0), 
        i >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        t = h, u = i, s = g, h += 122192928e5;
        var k = (1e4 * (268435455 & h) + i) % 4294967296;
        f[d++] = k >>> 24 & 255, f[d++] = k >>> 16 & 255, f[d++] = k >>> 8 & 255, f[d++] = 255 & k;
        var l = h / 4294967296 * 1e4 & 268435455;
        f[d++] = l >>> 8 & 255, f[d++] = 255 & l, f[d++] = l >>> 24 & 15 | 16, f[d++] = l >>> 16 & 255, 
        f[d++] = g >>> 8 | 128, f[d++] = 255 & g;
        var m = a.node || r;
        for (var n = 0; 6 > n; n++) f[d + n] = m[n];
        return b ? b : e(f);
    }
    function g(a, b, c) {
        var d = b && c || 0;
        "string" == typeof a && (b = "binary" === a ? new m(16) : null, a = null), a = a || {};
        var f = a.random || (a.rng || h)();
        if (f[6] = 15 & f[6] | 64, f[8] = 63 & f[8] | 128, b) for (var g = 0; 16 > g; g++) b[d + g] = f[g];
        return b || e(f);
    }
    var h, i, j, k, l;
    a ? b() : c();
    var m = "function" == typeof Buffer ? Buffer : Array;
    var n = [];
    var o = {};
    for (var p = 0; 256 > p; p++) n[p] = (p + 256).toString(16).substr(1), o[n[p]] = p;
    var q = h();
    var r = [ 1 | q[0], q[1], q[2], q[3], q[4], q[5] ];
    var s = 16383 & (q[6] << 8 | q[7]);
    var t = 0, u = 0;
    var v = g;
    v.Ka = f, v.La = g, v.parse = d, v.Ma = e, v.Na = m, v.Oa = h, v.Pa = i, v.Qa = j, 
    v.Ra = k, "undefined" != typeof module && module.l ? module.l = v : "function" == typeof define && define.q ? define("modules/../../node_modules/node-uuid/uuid.js", [], function() {
        return v;
    }) : (l = a.Sa, v.Ta = function() {
        return a.Sa = l, v;
    }, a.Sa = v);
}("undefined" != typeof window ? window : null), define("modules/eventReporting/event.js", [ "exports", "module", "../../utils/commonUtils.js", "../../utils/dateUtils.js", "../../utils/userAgentUtils.js", "../../../node_modules/node-uuid/uuid.js" ], function(a, b, c, d, e, f) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _prototypeProperties = function(a, b, c) {
        b && Object.defineProperties(a, b), c && Object.defineProperties(a.prototype, c);
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var g = c.t;
    var h = _interopRequire(d);
    var i = _interopRequire(e);
    var j = _interopRequire(f);
    var k = function() {
        function a(b, c, d, e, f) {
            function g() {
                var a = c.Ua(k) || {
                    installationID: j.La(),
                    sequenceNumber: 0
                };
                return a.sequenceNumber++, c.Va(k, a), a;
            }
            _classCallCheck(this, a);
            var k = "VSTB_EVENT";
            var l = this;
            var m = new Date();
            var n = h.Ca(m);
            var o = h.Ba(m);
            var p = b.Wa();
            var q = g();
            l.set("testMode", p.wa), l.set("eventName", d), l.set("eventID", e), l.set("eventUID", j.La()), 
            l.set("uniqueDeviceID", p.ga), l.set("schemaVersion", 2), l.set("routing", "ASYNC"), 
            l.set("appID", parseInt(p.ea)), l.set("deviceSegment.deviceName", p.ka), l.set("deviceSegment.manufacturer", "desktop"), 
            l.set("deviceSegment.deviceType", "desktop"), l.set("deviceSegment.osPlatform", i.Ja()), 
            l.set("deviceSegment.osVersion", f.osVersion || "0.0"), l.set("eventUTCDate", n), 
            l.set("eventLocalDate", o), l.set("eventServerUTCDate", n), l.set("eventServerLocalDate", o), 
            l.set("selectedMetadataLocale", f.selectedMetadataLocale), l.set("billingPackage", f.billingPackage), 
            l.set("location.country", p.ra ? p.ra.toUpperCase() : "WO"), p.sa && l.set("location.city", p.sa), 
            p.ta && l.set("location.territory", p.ta), l.set("vstbLibraryVersion", p.qa), l.set("vstbApiRevision", p.ma), 
            l.set("vstbApiVersion", p.la), l.set("applicationVersion", p.pa), l.set("isp", p.ua), 
            l.set("deliveryNetwork", p.network), l.set("user.accountID", f.Xa), l.set("user.subAccountID", f.subAccountID), 
            l.set("user.accountType", f.accountType), l.set("qpID", p.quickplayId || "0000"), 
            l.set("externalSessionID", f.va), l.set("installationID", q.installationID), l.set("sequenceNumber", q.sequenceNumber);
        }
        return _prototypeProperties(a, null, {
            set: {
                value: function(a, b) {
                    var c = this;
                    if (null != b && null != a && g.J(b) && !g.U(a)) {
                        var d = a.split(".");
                        var e = d.splice(-1, 1)[0];
                        for (var f = 0; f < d.length; f++) {
                            var h = d[f];
                            c.hasOwnProperty(h) || Object.defineProperty(c, h, {
                                value: {},
                                writable: !1,
                                enumerable: !0
                            }), c = c[h];
                        }
                        c[e] || Object.defineProperty(c, e, {
                            value: b,
                            writable: !1,
                            enumerable: !0
                        });
                    }
                },
                writable: !0,
                v: !0
            },
            Ya: {
                value: function() {
                    return JSON.stringify(this);
                },
                writable: !0,
                v: !0
            }
        }), a;
    }();
    b.l = k;
}), define("modules/eventReporting/playbackSessionReporter.js", [ "exports", "module", "../../utils/commonUtils.js", "../../../node_modules/node-uuid/uuid.js" ], function(a, b, c, d) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    c.t;
    var e = c.D;
    c.I;
    var f = _interopRequire(d);
    var g = function h(a, b, c, d) {
        function g() {
            s.Za = !1, s.$a = null, s._a = f.La();
        }
        function i() {
            s.ab += 100, setTimeout(i, 100);
        }
        function j(b, d, e) {
            var f = a.createEvent(b, d, e, c);
            t.log(f);
        }
        function k() {
            var a = {
                bb: c.getUserInfo().externalSessionId || null,
                Xa: c.getUserInfo().reportingId
            };
            j("VSTB_LIB_START", 25, a);
        }
        function l() {
            g(), s.$a = c.getCurrentContentRequest().contentId;
            var a = {
                cb: null,
                _a: s._a,
                eb: s.$a,
                previousPage: v,
                fb: w
            };
            j("PLAYBACK_PREPARE", 29, a);
        }
        function m() {
            var a = {
                eb: s.$a
            };
            j("DRM_VALIDATION", 14, a);
        }
        function n(a) {
            var b = {
                cb: s.cb,
                _a: s._a,
                eb: s.$a,
                previousPage: v,
                fb: w,
                gb: x,
                contentType: y,
                hb: {
                    ib: a.publicErrorCode,
                    errorCode: a.publicErrorCode
                },
                jb: {
                    ib: a.serverErrorMessage,
                    errorCode: a.serverErrorCode
                },
                kb: 1
            };
            j("ERROR", 23, b);
        }
        function o() {
            if (s.Za) {
                var a = {
                    cb: s.cb,
                    _a: s._a,
                    eb: s.$a,
                    contentType: y,
                    previousPage: v,
                    fb: w,
                    duration: s.ab
                };
                j("PLAYBACK_TIME", 22, a);
            }
        }
        function p() {
            s.Za = !0, s.ab = 0, s.cb = new Date(), y = c.getCurrentContentRequest().contentType;
            var a = {
                cb: s.cb,
                _a: s._a,
                eb: s.$a,
                previousPage: v,
                fb: w
            };
            j("PLAYBACK_START", 5, a);
        }
        function q() {
            var a = {
                cb: s.cb,
                _a: s._a,
                eb: s.$a
            };
            j("PLAYBACK_RESUME", 8, a);
        }
        function r() {
            var a = {
                cb: s.cb,
                _a: s._a,
                eb: s.$a
            };
            j("PLAYBACK_PAUSE", 7, a);
        }
        _classCallCheck(this, h);
        var s = this;
        var t = a.lb();
        var u = a.mb(b, c);
        a.nb(b, u, s, c);
        var v = document.referrer;
        var w = window.location.href;
        var x;
        var y;
        s.ab = 0, s.$a = null, s.cb = null, s._a = null, s.Za = !1, e(s, a.ob()), c.subscribe("libraryStarted", k), 
        c.subscribe("contentChanged", l), c.subscribe("licenseAcquired", m), c.subscribe("error", n), 
        d.subscribe("beforeUnload", o), window.addEventListener("beforeunload", o), u.subscribe("playbackresume", q), 
        u.subscribe("playbackstart", p), u.subscribe("playbackpause", r), i();
    };
    b.l = g;
}), define("modules/eventReporting/progressReporter.js", [ "exports", "module" ], function(a, b) {
    "use strict";
    var c = function(a, b) {
        if (Array.isArray(a)) return a;
        if (Symbol.iterator in Object(a)) {
            var c = [];
            for (var d, e = a[Symbol.iterator](); !(d = e.next()).done && (c.push(d.value), 
            !b || c.length !== b); ) ;
            return c;
        }
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var d = function e(a, b, d, f, g) {
        function h(b, c, d) {
            var e = a.createEvent(b, c, d, g);
            q.log(e);
        }
        function i() {
            return Math.round(b.currentTime / b.duration * 100);
        }
        function j() {
            var a = g.getCurrentContentRequest();
            var b = a.contentType;
            return 4 === b;
        }
        function k() {
            u && (u(), u = null, t = 0);
        }
        function l() {
            u = d.subscribe("playbackprogress", j() ? o : n).unsubscribe;
        }
        function m() {
            f.Za && p();
        }
        function n() {
            if (!f.Za) return void p();
            var a = i();
            var b = {
                cb: f.cb,
                _a: f._a,
                eb: f.$a,
                pb: "Shaka-player-HTMLMediaElement",
                duration: f.ab / 1e3,
                qb: a
            };
            for (var d, e = r[Symbol.iterator](); !(d = e.next()).done; ) {
                var g = c(d.value, 2);
                var j = g[0];
                var k = g[1];
                !k && a >= j && (b.qb = j, h("PLAYBACK_PROGRESS", 6, b), r.set(j, !0));
            }
        }
        function o() {
            if (t <= f.ab) {
                t += s;
                var a = {
                    cb: f.cb,
                    _a: f._a,
                    eb: f.$a,
                    pb: "Shaka-player-HTMLMediaElement",
                    duration: f.ab / 1e3,
                    qb: 0
                };
                h("PLAYBACK_PROGRESS", 6, a);
            }
        }
        function p() {
            var a = i();
            for (var b, d = r[Symbol.iterator](); !(b = d.next()).done; ) {
                var e = c(b.value, 2);
                var f = e[0];
                e[1];
                r.set(f, a > f);
            }
        }
        _classCallCheck(this, e);
        var q = a.lb();
        var r = new Map([ [ 0, !1 ], [ 25, !1 ], [ 50, !1 ], [ 75, !1 ], [ 95, !1 ] ]);
        var s = 3e5;
        var t = s;
        var u = null;
        d.subscribe("playbackseeking", m), g.subscribe("unloaded", k), g.subscribe("contentChanged", l);
    };
    b.l = d;
}), define("modules/eventReporting/eventOpt.js", [ "exports", "module", "../../utils/commonUtils.js", "../../utils/dateUtils.js", "../../utils/userAgentUtils.js" ], function(a, b, c, d, e) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    c.t;
    var f = c.I;
    _interopRequire(d);
    var g = _interopRequire(e);
    var h = void 0;
    var i = function j(a, b, c) {
        function d(a) {
            var b = null;
            try {
                switch (a()) {
                  case 0:
                    return "none";

                  case 2:
                    return "qpDrm";

                  case 3:
                    return "aes";

                  case 4:
                    return "playReady";

                  case 5:
                    return "verimatrix";

                  case 6:
                    return "widevine";

                  default:
                    return "unknown";
                }
            } catch (c) {
                return b;
            }
            return b;
        }
        _classCallCheck(this, j);
        var e = b;
        return h = a.Wa(), e.set("browserSessionID", h.va), e.set("deviceSegment.browserName", g.Ia()), 
        e.set("deviceSegment.browserVersion", g.Ha().toString()), e.set("deviceSegment.screenHeight", window.screen.height.toString()), 
        e.set("deviceSegment.screenWidth", window.screen.width.toString()), e.set("deviceSegment.screenColorBits", window.screen.colorDepth.toString()), 
        e.set("deviceSegment.uaString", window.navigator.userAgent), e.set("loginLogoutTrigger", c.loginLogoutTrigger), 
        e.set("loginResult", c.loginResult), null != h.oa && (b.set("drmData.drmName", d(function() {
            return h.oa.drmId;
        })), b.set("drmData.drmVersion", f(function() {
            return h.oa.drmVersion;
        }))), e;
    };
    b.l = i;
}), define("contentTypes.js", [ "exports", "module" ], function(a, b) {
    "use strict";
    var c = {
        rb: 3,
        sb: 4
    };
    b.l = c;
}), define("modules/eventReporting/playbackEvent.js", [ "exports", "module", "../../utils/commonUtils.js", "../../utils/dateUtils.js", "./eventOpt.js", "../../contentTypes.js" ], function(a, b, c, d, e, f) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var g = c.t;
    var h = _interopRequire(d);
    var i = _interopRequire(e);
    _interopRequire(f);
    var j = function k(a, b, c, d) {
        _classCallCheck(this, k);
        var e = a.Wa();
        var f = d.getManifest().getCurrentTextTrack();
        var j = d.getManifest().getCurrentAudioTrack();
        var l = d.getCurrentContentRequest();
        if (b.set("playbackUID", c._a), b.set("playerName", "Shaka-player, Html5MediaElement"), 
        b.set("content.deliveryProtocol", "dash"), b.set("content.deliveryMethod", "streaming"), 
        b.set("content.closedCaptioningEnabled", !1), b.set("content.categoryContextPath", c.categoryContextPath), 
        (c.contentType || l) && b.set("content.contentType", c.contentType || l.contentType), 
        c.cb && (b.set("playbackStartLocalDate", h.Ba(c.cb)), b.set("playbackStartUTCDate", h.Ca(c.cb))), 
        c.eb ? b.set("content.contentID", c.eb.toString()) : b.set("content.contentID", "0"), 
        e.oa && b.set("content.encoding", e.oa.encodingId.toString()), null != l && (l.categoryID && b.set("content.categoryID", l.categoryID), 
        l.categoryName && b.set("content.categoryName", l.categoryName)), f && f.displaying ? (b.set("content.subtitleLanguage", f.language), 
        b.set("content.subtitleType", "ttml"), b.set("content.subtitleEnabled", !0)) : b.set("content.subtitleEnabled", !1), 
        j && "unknown" !== j.language) var m = j.language; else var m = "00";
        b.set("content.selectedAudioLanguage", m), g.D(this, new i(a, b, c));
    };
    b.l = j;
}), define("modules/eventReporting/licenseAcquiredEvent.js", [ "exports", "module", "../../utils/commonUtils.js", "./playbackEvent.js" ], function(a, b, c, d) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _get = function h(a, b, c) {
        var d = Object.getOwnPropertyDescriptor(a, b);
        if (void 0 === d) {
            var e = Object.getPrototypeOf(a);
            return null === e ? void 0 : h(e, b, c);
        }
        if ("value" in d && d.writable) return d.value;
        var f = d.get;
        if (void 0 !== f) return f.call(c);
    };
    var _inherits = function(a, b) {
        if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                v: !0
            }
        }), b && (a.__proto__ = b);
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var e = c.t;
    var f = _interopRequire(d);
    var g = function(a) {
        function b(a, c, d, f) {
            _classCallCheck(this, b), _get(Object.getPrototypeOf(b.prototype), "constructor", this).call(this, a, c, d, f), 
            e.D(this, c);
        }
        return _inherits(b, a), b;
    }(f);
    b.l = g;
}), define("modules/eventReporting/playbackPrepareEvent.js", [ "exports", "module", "../../utils/commonUtils.js", "./playbackEvent.js" ], function(a, b, c, d) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _get = function h(a, b, c) {
        var d = Object.getOwnPropertyDescriptor(a, b);
        if (void 0 === d) {
            var e = Object.getPrototypeOf(a);
            return null === e ? void 0 : h(e, b, c);
        }
        if ("value" in d && d.writable) return d.value;
        var f = d.get;
        if (void 0 !== f) return f.call(c);
    };
    var _inherits = function(a, b) {
        if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                v: !0
            }
        }), b && (a.__proto__ = b);
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var e = c.t;
    var f = _interopRequire(d);
    var g = function(a) {
        function b(a, c, d, f) {
            _classCallCheck(this, b), _get(Object.getPrototypeOf(b.prototype), "constructor", this).call(this, a, c, d, f), 
            e.D(this, c);
        }
        return _inherits(b, a), b;
    }(f);
    b.l = g;
}), define("modules/eventReporting/vstbStartEvent.js", [ "exports", "module", "../../utils/commonUtils.js" ], function(a, b, c) {
    "use strict";
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var d = c.t;
    var e = function f(a, b, c) {
        _classCallCheck(this, f), d.D(this, b);
    };
    b.l = e;
}), define("modules/eventReporting/playbackStartEvent.js", [ "exports", "module", "../../utils/commonUtils.js", "./playbackEvent.js" ], function(a, b, c, d) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _get = function h(a, b, c) {
        var d = Object.getOwnPropertyDescriptor(a, b);
        if (void 0 === d) {
            var e = Object.getPrototypeOf(a);
            return null === e ? void 0 : h(e, b, c);
        }
        if ("value" in d && d.writable) return d.value;
        var f = d.get;
        if (void 0 !== f) return f.call(c);
    };
    var _inherits = function(a, b) {
        if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                v: !0
            }
        }), b && (a.__proto__ = b);
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var e = c.t;
    var f = _interopRequire(d);
    var g = function(a) {
        function b(a, c, d, f) {
            _classCallCheck(this, b), _get(Object.getPrototypeOf(b.prototype), "constructor", this).call(this, a, c, d, f), 
            e.D(this, c);
        }
        return _inherits(b, a), b;
    }(f);
    b.l = g;
}), define("modules/eventReporting/playbackProgressEvent.js", [ "exports", "module", "../../utils/commonUtils.js", "./playbackEvent.js" ], function(a, b, c, d) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _get = function h(a, b, c) {
        var d = Object.getOwnPropertyDescriptor(a, b);
        if (void 0 === d) {
            var e = Object.getPrototypeOf(a);
            return null === e ? void 0 : h(e, b, c);
        }
        if ("value" in d && d.writable) return d.value;
        var f = d.get;
        if (void 0 !== f) return f.call(c);
    };
    var _inherits = function(a, b) {
        if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                v: !0
            }
        }), b && (a.__proto__ = b);
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var e = c.t;
    var f = _interopRequire(d);
    var g = function(a) {
        function b(a, c, d, f) {
            _classCallCheck(this, b), _get(Object.getPrototypeOf(b.prototype), "constructor", this).call(this, a, c, d, f), 
            c.set("playbackDuration", Math.round(1e3 * d.duration)), c.set("progressPercent", d.qb), 
            e.D(this, c);
        }
        return _inherits(b, a), b;
    }(f);
    b.l = g;
}), define("modules/eventReporting/playbackPauseEvent.js", [ "exports", "module", "../../utils/commonUtils.js", "./playbackEvent.js" ], function(a, b, c, d) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _get = function h(a, b, c) {
        var d = Object.getOwnPropertyDescriptor(a, b);
        if (void 0 === d) {
            var e = Object.getPrototypeOf(a);
            return null === e ? void 0 : h(e, b, c);
        }
        if ("value" in d && d.writable) return d.value;
        var f = d.get;
        if (void 0 !== f) return f.call(c);
    };
    var _inherits = function(a, b) {
        if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                v: !0
            }
        }), b && (a.__proto__ = b);
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var e = c.t;
    var f = _interopRequire(d);
    var g = function(a) {
        function b(a, c, d, f) {
            _classCallCheck(this, b), _get(Object.getPrototypeOf(b.prototype), "constructor", this).call(this, a, c, d, f), 
            e.D(this, c);
        }
        return _inherits(b, a), b;
    }(f);
    b.l = g;
}), define("modules/eventReporting/playbackResumeEvent.js", [ "exports", "module", "../../utils/commonUtils.js", "./playbackEvent.js" ], function(a, b, c, d) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _get = function h(a, b, c) {
        var d = Object.getOwnPropertyDescriptor(a, b);
        if (void 0 === d) {
            var e = Object.getPrototypeOf(a);
            return null === e ? void 0 : h(e, b, c);
        }
        if ("value" in d && d.writable) return d.value;
        var f = d.get;
        if (void 0 !== f) return f.call(c);
    };
    var _inherits = function(a, b) {
        if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                v: !0
            }
        }), b && (a.__proto__ = b);
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var e = c.t;
    var f = _interopRequire(d);
    var g = function(a) {
        function b(a, c, d, f) {
            _classCallCheck(this, b), _get(Object.getPrototypeOf(b.prototype), "constructor", this).call(this, a, c, d, f), 
            e.D(this, c);
        }
        return _inherits(b, a), b;
    }(f);
    b.l = g;
}), define("modules/eventReporting/playbackTimeEvent.js", [ "exports", "module", "../../utils/commonUtils.js", "./playbackEvent.js" ], function(a, b, c, d) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _get = function h(a, b, c) {
        var d = Object.getOwnPropertyDescriptor(a, b);
        if (void 0 === d) {
            var e = Object.getPrototypeOf(a);
            return null === e ? void 0 : h(e, b, c);
        }
        if ("value" in d && d.writable) return d.value;
        var f = d.get;
        if (void 0 !== f) return f.call(c);
    };
    var _inherits = function(a, b) {
        if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                v: !0
            }
        }), b && (a.__proto__ = b);
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var e = c.t;
    var f = _interopRequire(d);
    var g = function(a) {
        function b(a, c, d, f) {
            _classCallCheck(this, b), _get(Object.getPrototypeOf(b.prototype), "constructor", this).call(this, a, c, d, f), 
            c.set("playbackDuration", Math.round(d.duration)), e.D(this, c);
        }
        return _inherits(b, a), b;
    }(f);
    b.l = g;
}), define("modules/eventReporting/errorEvent.js", [ "exports", "module", "../../utils/commonUtils.js", "./playbackEvent.js" ], function(a, b, c, d) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _get = function h(a, b, c) {
        var d = Object.getOwnPropertyDescriptor(a, b);
        if (void 0 === d) {
            var e = Object.getPrototypeOf(a);
            return null === e ? void 0 : h(e, b, c);
        }
        if ("value" in d && d.writable) return d.value;
        var f = d.get;
        if (void 0 !== f) return f.call(c);
    };
    var _inherits = function(a, b) {
        if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                v: !0
            }
        }), b && (a.__proto__ = b);
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var e = c.t;
    var f = _interopRequire(d);
    var g = function(a) {
        function b(a, c, d, f) {
            _classCallCheck(this, b), _get(Object.getPrototypeOf(b.prototype), "constructor", this).call(this, a, c, d, f), 
            c.set("page", d.page), c.set("previousPage", document.referrer || null), c.set("pageURL", d.fb), 
            c.set("error.clientErrorMessage", d.hb.ib), c.set("error.errorCode", d.hb.errorCode ? d.hb.errorCode.toString() : "unknown"), 
            c.set("error.backendErrorMessage", d.jb.ib), c.set("error.backendErrorCode", d.jb.errorCode ? d.jb.errorCode.toString() : "unknown"), 
            c.set("error.source", d.kb), c.set("searchTerm", d.searchTerm), c.set("advertising.adID", d.adID), 
            c.set("advertising.adProvider", d.adProvider), c.set("trafficsource.referringURL", d.referringURL), 
            c.set("trafficsource.searchKeyword", d.searchKeyword), c.set("trafficsource.campaignName", d.compaignName), 
            c.set("clientPrice", d.clientPrice), c.set("contentPriceCurrency", d.contentPriceCurrency), 
            c.set("transactionID", d.transactionID), e.D(this, c);
        }
        return _inherits(b, a), b;
    }(f);
    b.l = g;
}), define("modules/eventReporting/customEvent.js", [ "exports", "module", "../../utils/commonUtils.js", "./eventOpt.js" ], function(a, b, c, d) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var e = c.t;
    var f = _interopRequire(d);
    var g = function h(a, b, c) {
        _classCallCheck(this, h), b.set("customData", c.customData), e.D(this, new f(a, b, c));
    };
    b.l = g;
}), define("networking/loginAction.js", [ "exports", "module", "../utils/commonUtils.js" ], function(a, b, c) {
    "use strict";
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var d = c.D;
    var e = function f(a, b) {
        function c() {
            200 === h.tb() && "" !== h.ub() && (g.response = JSON.parse(h.ub())), g.Aa("finished", g);
        }
        function e() {
            h.vb("appId", b.ea), h.vb("apiVersion", b.la), h.vb("apiRevision", b.ma), h.vb("carrierId", b.fa), 
            h.vb("deviceName", b.ka), h.vb("locale", b.locale), h.vb("render", "json"), h.vb("uniqueId", b.ga), 
            h.vb("roamingCheck", "false"), h.vb("network", b.network), h.vb("UAT", b.ha), h.vb("action", "1");
        }
        _classCallCheck(this, f);
        var g = this;
        var h = a.wb("POST", b.da);
        d(this, a.ob()), h.subscribe("finished", c), g.response = null, g.xb = function() {
            e(), h.xb();
        };
    };
    b.l = e;
}), define("networking/rightsAction.js", [ "exports", "module", "../utils/commonUtils.js" ], function(a, b, c) {
    "use strict";
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var d = c.D;
    var e = function f(a, b, c) {
        function e() {
            200 === i.tb() && "" !== i.ub() && (h.response = JSON.parse(i.ub())), h.Aa("finished", h);
        }
        function g() {
            i.vb("appId", b.ea), i.vb("apiVersion", b.la), i.vb("apiRevision", b.ma), i.vb("carrierId", b.fa), 
            i.vb("deviceName", b.ka), i.vb("locale", b.locale), i.vb("render", "json"), i.vb("uniqueId", b.ga), 
            i.vb("roamingCheck", "false"), i.vb("network", b.network), i.vb("UAT", b.ha), i.vb("action", "101"), 
            i.vb("drmToken", b.ja), i.vb("mak", b.mak), i.vb("subscriberId", b.quickplayId), 
            i.vb("roamingCheck", b.ia), i.vb("contentTypeId", c.contentType), i.vb("delivery", b.delivery), 
            i.vb("contentId", c.contentId), i.vb("preferredMediaPkgs", "DASH"), i.vb("preferredDRM", b.xa);
        }
        _classCallCheck(this, f);
        var h = this;
        var i = a.wb("POST", b.da);
        d(h, a.ob()), i.subscribe("finished", e), h.response = null, h.xb = function() {
            g(), i.xb();
        };
    };
    b.l = e;
}), define("networking/whereAmIAction.js", [ "exports", "module", "../utils/commonUtils.js" ], function(a, b, c) {
    "use strict";
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var d = c.D;
    var e = function f(a, b) {
        function c() {
            200 === h.tb() && "" !== h.ub() && (g.response = JSON.parse(h.ub())), g.Aa("finished", g);
        }
        function e() {
            h.vb("appId", b.ea), h.vb("apiVersion", b.la), h.vb("apiRevision", b.ma), h.vb("carrierId", b.fa), 
            h.vb("deviceName", b.ka), h.vb("render", "json"), h.vb("action", "668");
        }
        _classCallCheck(this, f);
        var g = this;
        var h = a.wb("POST", b.da);
        h.subscribe("finished", c), d(this, a.ob()), g.xb = function() {
            e(), h.xb();
        };
    };
    b.l = e;
}), define("networking/reportAction.js", [ "exports", "module", "../utils/commonUtils.js" ], function(a, b, c) {
    "use strict";
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var d = c.D;
    var e = function f(a, b, c) {
        function e() {
            200 === h.tb() && "" !== h.ub() && (g.response = JSON.parse(h.ub())), g.Aa("finished", g);
        }
        _classCallCheck(this, f);
        var g = this;
        var h = a.wb("POST", b.yb.da);
        d(this, a.ob()), h.subscribe("finished", e), h.setRequestHeader("appID", b.yb.ea), 
        h.setRequestHeader("auth_token_base64", b.yb.zb), h.setRequestHeader("content-type", "application/json"), 
        h.setRequestHeader("client_type", "browser"), g.xb = function() {
            h.xb(c);
        };
    };
    b.l = e;
}), define("logger.js", [ "exports", "module", "./utils/commonUtils.js", "./utils/dateUtils.js" ], function(a, b, c, d) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var e = c.t;
    var f = _interopRequire(d);
    var g = function h(a, b) {
        function c() {
            return "[" + b + "]";
        }
        function d(a) {
            return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), 
            a;
        }
        function g(a) {
            var b = k.console;
            var g = b[a] || b.log || e.F;
            var h = c();
            return function() {
                var a = f.Ba(new Date());
                var c = [ a, h ];
                return e.forEach(arguments, function(a) {
                    c.push(d(a));
                }), g.apply(b, c);
            };
        }
        _classCallCheck(this, h);
        var i = this;
        var j = !0;
        var k = a.Ab();
        i.log = function() {
            var a = arguments[0];
            var b = arguments;
            var c = "";
            var d = g("log");
            e.L(a) ? (c = a.replace(/\{\d+\}/g, function(a) {
                var c, d = +a.slice(1, -1);
                return d + 1 < b.length ? (c = b[d + 1], "function" == typeof c ? c.toString().replace(/ ?\{[\s\S]*$/, "") : "undefined" == typeof c ? "undefined" : "string" != typeof c ? e.X(c) : c) : a;
            }), d.call(i, c)) : d.apply(i, arguments);
        }, i.info = g("info"), i.warn = g("warn"), i.error = g("error"), i.debug = function() {
            var a = g("debug");
            j && a.apply(i, arguments);
        };
    };
    b.l = g;
}), define("vstbErrorCodes.js", [ "exports", "module" ], function(a, b) {
    "use strict";
    var c = {
        Bb: 1,
        Cb: 100,
        Db: 101,
        Eb: 102,
        Fb: 103,
        Gb: 104,
        Hb: 105,
        Ib: 106,
        Jb: 107,
        Kb: 108,
        Lb: 109,
        Mb: 110,
        Nb: 111
    };
    b.l = c;
}), define("vstbStatuses.js", [ "exports", "module" ], function(a, b) {
    "use strict";
    var c = {
        Ob: 1,
        Pb: 301
    };
    b.l = c;
}), define("modules/eventReporting/eventLogger.js", [ "exports", "module", "../../vstbErrorCodes.js", "../../vstbStatuses.js" ], function(a, b, c, d) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _prototypeProperties = function(a, b, c) {
        b && Object.defineProperties(a, b), c && Object.defineProperties(a.prototype, c);
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    _interopRequire(c);
    var e = _interopRequire(d);
    var f = null;
    var g = function() {
        function a(b, c) {
            function d() {
                var a = b.Qb();
                a.subscribe("finished", g), a.xb();
            }
            function g(a) {
                var b = a.response;
                var c = b && b.status;
                c === e.Ob ? h(b) : i(b);
            }
            function h(a) {
                c.ta = a.userRegion, c.ra = a.userCountry, c.sa = a.userCity, c.yb = {
                    ea: c.ea,
                    da: a.repServerUrl,
                    zb: btoa(a.repServerToken)
                }, l = b.Rb(k);
            }
            function i(a) {
                return m.error("Failed to get WhereAmI data. Retrying ..."), o++ >= 3 ? !1 : void setTimeout(d, n);
            }
            _classCallCheck(this, a);
            var j = this;
            var k = b.Sb();
            var l;
            var m = b.Tb("EventLogger");
            var n = 1e4;
            var o = 0;
            d(), j.Ub = function() {
                f = null;
            }, j.log = function(a) {
                k.Vb(a);
            };
        }
        return _prototypeProperties(a, {
            za: {
                value: function(b, c) {
                    return f || (f = new a(b, c)), f;
                },
                writable: !0,
                v: !0
            }
        }), a;
    }();
    b.l = g;
}), define("modules/eventReporting/eventStorage.js", [ "exports", "module" ], function(a, b) {
    "use strict";
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var c = function d(a, b) {
        function c() {
            m = a.Ua(i) || [];
        }
        function e() {
            a.Va(i, m);
        }
        function f() {
            m.length === j && (l.log("Maximum persisted events reached. Reducing number of persisted events from " + m.length + " to " + (m.length - 1)), 
            m.shift());
        }
        function g(a) {
            m.push(a), e();
        }
        function h(a) {
            var b = !0;
            try {
                for (var c = 0; c < m.length; c++) if (m[c].eventUID === a.eventUID) return m.splice(c, 1), 
                b;
            } catch (d) {
                b = !1;
            }
            return b;
        }
        _classCallCheck(this, d);
        var i = "qpEventStore";
        var j = 600;
        var k = this;
        var l = b.Tb("EventStorage");
        var m = [];
        c(), k.count = function() {
            return m.length;
        }, k.Wb = function(a) {
            for (var b = 0; b < a.length; ) h(a[b]) ? a.splice(b, 1) : b++;
            e();
        }, k.Vb = function(a) {
            l.log("Persisting event:"), l.log(a), f(), g(a);
        }, k.fetch = function(a) {
            return a = a || m.length, m.slice(0, a);
        };
    };
    b.l = c;
}), define("modules/eventReporting/reportStatusCodes.js", [ "exports", "module" ], function(a, b) {
    "use strict";
    var c = {
        Xb: 0,
        Yb: 1,
        Zb: 2,
        $b: 4,
        _b: 5,
        ac: 6,
        bc: 7,
        cc: 8,
        dc: 9,
        ec: 10,
        fc: 11,
        gc: 99
    };
    b.l = c;
}), define("modules/eventReporting/eventDispatcher.js", [ "exports", "module", "./reportStatusCodes.js", "../../utils/commonUtils.js" ], function(a, b, c, d) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var e = _interopRequire(c);
    d.t;
    d.D;
    var f = d.I;
    var g = function h(a, b, c) {
        function d() {
            var a = 60 * p.hc() * 1e3;
            return setInterval(g, a);
        }
        function g() {
            try {
                if (!f(function() {
                    return c.yb.da;
                })) throw new Error("Can't send events. Reporting server URL is not available.");
                if (0 === b.count()) throw new Error("There are no events to be sent right now.");
                if (null !== r) throw new Error("Can't send events because another request is in progress.");
                if (!p.ic()) throw new Error("Maximum failures were reached. Event can't be sent in current state.");
                n.jc = b.fetch(q), o.log("Sending {0} events...", n.jc.length), i(m(n.jc));
            } catch (a) {
                o.log(a.message);
            }
        }
        function i(b) {
            r = a.kc(b), r.subscribe("finished", j), r.xb();
        }
        function j(a) {
            var b = a.response;
            var c = b && b.status;
            c === e.Xb ? k(b) : l(b);
        }
        function k(a) {
            b.Wb(n.jc), r = null;
        }
        function l(a) {
            p.lc(), r = null;
        }
        function m(a) {
            var b = {
                appID: parseInt(c.ea),
                events: a
            };
            return JSON.stringify(b);
        }
        _classCallCheck(this, h);
        var n = this;
        var o = a.Tb("EventDispatcher");
        var p = a.mc();
        var q = p.nc();
        var r = null;
        d();
        g();
    };
    b.l = g;
}), define("utils/cryptoJs.js", [ "exports", "module" ], function(a, b) {
    "use strict";
    var c = function(a, b) {
        var c = {};
        var d = c.oc = {};
        var e = d.pc = function() {
            function a() {}
            return {
                extend: function(b) {
                    a.prototype = this;
                    var c = new a();
                    return b && c.qc(b), c.hasOwnProperty("init") || (c.init = function() {
                        c.rc.init.apply(this, arguments);
                    }), c.init.prototype = c, c.rc = this, c;
                },
                create: function() {
                    var a = this.extend();
                    return a.init.apply(a, arguments), a;
                },
                init: function() {},
                qc: function(a) {
                    for (var b in a) a.hasOwnProperty(b) && (this[b] = a[b]);
                    a.hasOwnProperty("toString") && (this.toString = a.toString);
                },
                clone: function() {
                    return this.init.prototype.extend(this);
                }
            };
        }();
        var f = d.sc = e.extend({
            init: function(a, c) {
                a = this.tc = a || [], c != b ? this.uc = c : this.uc = 4 * a.length;
            },
            toString: function(a) {
                return (a || h).stringify(this);
            },
            concat: function(a) {
                var b = this.tc;
                var c = a.tc;
                var d = this.uc;
                var e = a.uc;
                if (this.vc(), d % 4) for (var f = 0; e > f; f++) {
                    var g = c[f >>> 2] >>> 24 - f % 4 * 8 & 255;
                    b[d + f >>> 2] |= g << 24 - (d + f) % 4 * 8;
                } else if (c.length > 65535) for (var f = 0; e > f; f += 4) b[d + f >>> 2] = c[f >>> 2]; else b.push.apply(b, c);
                return this.uc += e, this;
            },
            vc: function() {
                var b = this.tc;
                var c = this.uc;
                b[c >>> 2] &= 4294967295 << 32 - c % 4 * 8, b.length = a.ceil(c / 4);
            },
            clone: function() {
                var a = e.clone.call(this);
                return a.tc = this.tc.slice(0), a;
            },
            random: function(b) {
                var c = [];
                for (var d = 0; b > d; d += 4) c.push(4294967296 * a.random() | 0);
                return new f.init(c, b);
            }
        });
        var g = c.wc = {};
        var h = g.xc = {
            stringify: function(a) {
                var b = a.tc;
                var c = a.uc;
                var d = [];
                for (var e = 0; c > e; e++) {
                    var f = b[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                    d.push((f >>> 4).toString(16)), d.push((15 & f).toString(16));
                }
                return d.join("");
            },
            parse: function(a) {
                var b = a.length;
                var c = [];
                for (var d = 0; b > d; d += 2) c[d >>> 3] |= parseInt(a.substr(d, 2), 16) << 24 - d % 8 * 4;
                return new f.init(c, b / 2);
            }
        };
        var i = g.yc = {
            stringify: function(a) {
                var b = a.tc;
                var c = a.uc;
                var d = [];
                for (var e = 0; c > e; e++) {
                    var f = b[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                    d.push(String.fromCharCode(f));
                }
                return d.join("");
            },
            parse: function(a) {
                var b = a.length;
                var c = [];
                for (var d = 0; b > d; d++) c[d >>> 2] |= (255 & a.charCodeAt(d)) << 24 - d % 4 * 8;
                return new f.init(c, b);
            }
        };
        var j = g.zc = {
            stringify: function(a) {
                try {
                    return decodeURIComponent(escape(i.stringify(a)));
                } catch (b) {
                    throw new Error("Malformed UTF-8 data");
                }
            },
            parse: function(a) {
                return i.parse(unescape(encodeURIComponent(a)));
            }
        };
        var k = d.Ac = e.extend({
            reset: function() {
                this.Bc = new f.init(), this.Cc = 0;
            },
            Dc: function(a) {
                "string" == typeof a && (a = j.parse(a)), this.Bc.concat(a), this.Cc += a.uc;
            },
            Ec: function(b) {
                var c = this.Bc;
                var d = c.tc;
                var e = c.uc;
                var g = this.Fc;
                var h = 4 * g;
                var i = e / h;
                i = b ? a.ceil(i) : a.max((0 | i) - this.Gc, 0);
                var j = i * g;
                var k = a.min(4 * j, e);
                if (j) {
                    for (var l = 0; j > l; l += g) this.Hc(d, l);
                    var m = d.splice(0, j);
                    c.uc -= k;
                }
                return new f.init(m, k);
            },
            clone: function() {
                var a = e.clone.call(this);
                return a.Bc = this.Bc.clone(), a;
            },
            Gc: 0
        });
        d.Ic = k.extend({
            Jc: e.extend(),
            init: function(a) {
                this.Jc = this.Jc.extend(a), this.reset();
            },
            reset: function() {
                k.reset.call(this), this.Kc();
            },
            update: function(a) {
                return this.Dc(a), this.Ec(), this;
            },
            Lc: function(a) {
                a && this.Dc(a);
                var b = this.Mc();
                return b;
            },
            Fc: 16,
            Nc: function(a) {
                return function(b, c) {
                    return new a.init(c).Lc(b);
                };
            },
            Oc: function(a) {
                return function(b, c) {
                    return new l.Pc.init(a, c).Lc(b);
                };
            }
        });
        var l = c.Qc = {};
        return c;
    }(Math);
    !function(a) {
        var b = c;
        var d = b.oc;
        var e = d.sc;
        var f = d.Ic;
        var g = b.Qc;
        var h = [];
        var i = [];
        !function() {
            function b(b) {
                var c = a.sqrt(b);
                for (var d = 2; c >= d; d++) if (!(b % d)) return !1;
                return !0;
            }
            function c(a) {
                return 4294967296 * (a - (0 | a)) | 0;
            }
            var d = 2;
            var e = 0;
            for (;64 > e; ) b(d) && (8 > e && (h[e] = c(a.pow(d, .5))), i[e] = c(a.pow(d, 1 / 3)), 
            e++), d++;
        }();
        var j = [];
        var k = g.Rc = f.extend({
            Kc: function() {
                this.Sc = new e.init(h.slice(0));
            },
            Hc: function(a, b) {
                var c = this.Sc.tc;
                var d = c[0];
                var e = c[1];
                var f = c[2];
                var g = c[3];
                var h = c[4];
                var k = c[5];
                var l = c[6];
                var m = c[7];
                for (var n = 0; 64 > n; n++) {
                    if (16 > n) j[n] = 0 | a[b + n]; else {
                        var o = j[n - 15];
                        var p = (o << 25 | o >>> 7) ^ (o << 14 | o >>> 18) ^ o >>> 3;
                        var q = j[n - 2];
                        var r = (q << 15 | q >>> 17) ^ (q << 13 | q >>> 19) ^ q >>> 10;
                        j[n] = p + j[n - 7] + r + j[n - 16];
                    }
                    var s = h & k ^ ~h & l;
                    var t = d & e ^ d & f ^ e & f;
                    var u = (d << 30 | d >>> 2) ^ (d << 19 | d >>> 13) ^ (d << 10 | d >>> 22);
                    var v = (h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25);
                    var w = m + v + s + i[n] + j[n];
                    var x = u + t;
                    m = l, l = k, k = h, h = g + w | 0, g = f, f = e, e = d, d = w + x | 0;
                }
                c[0] = c[0] + d | 0, c[1] = c[1] + e | 0, c[2] = c[2] + f | 0, c[3] = c[3] + g | 0, 
                c[4] = c[4] + h | 0, c[5] = c[5] + k | 0, c[6] = c[6] + l | 0, c[7] = c[7] + m | 0;
            },
            Mc: function() {
                var b = this.Bc;
                var c = b.tc;
                var d = 8 * this.Cc;
                var e = 8 * b.uc;
                return c[e >>> 5] |= 128 << 24 - e % 32, c[(e + 64 >>> 9 << 4) + 14] = a.floor(d / 4294967296), 
                c[(e + 64 >>> 9 << 4) + 15] = d, b.uc = 4 * c.length, this.Ec(), this.Sc;
            },
            clone: function() {
                var a = f.clone.call(this);
                return a.Sc = this.Sc.clone(), a;
            }
        });
        b.Rc = f.Nc(k), b.Tc = f.Oc(k);
    }(Math), function() {
        var a = c;
        var b = a.oc;
        var d = b.pc;
        var e = a.wc;
        var f = e.zc;
        var g = a.Qc;
        g.Pc = d.extend({
            init: function(a, b) {
                a = this.Uc = new a.init(), "string" == typeof b && (b = f.parse(b));
                var c = a.Fc;
                var d = 4 * c;
                b.uc > d && (b = a.Lc(b)), b.vc();
                var e = this.Vc = b.clone();
                var g = this.Wc = b.clone();
                var h = e.tc;
                var i = g.tc;
                for (var j = 0; c > j; j++) h[j] ^= 1549556828, i[j] ^= 909522486;
                e.uc = g.uc = d, this.reset();
            },
            reset: function() {
                var a = this.Uc;
                a.reset(), a.update(this.Wc);
            },
            update: function(a) {
                return this.Uc.update(a), this;
            },
            Lc: function(a) {
                var b = this.Uc;
                var c = b.Lc(a);
                b.reset();
                var d = b.Lc(this.Vc.clone().concat(c));
                return d;
            }
        });
    }(), function() {
        var a = c;
        var b = a.oc;
        var d = b.sc;
        var e = a.wc;
        e.Xc = {
            stringify: function(a) {
                var b = a.tc;
                var c = a.uc;
                var d = this.Yc;
                a.vc();
                var e = [];
                for (var f = 0; c > f; f += 3) {
                    var g = b[f >>> 2] >>> 24 - f % 4 * 8 & 255;
                    var h = b[f + 1 >>> 2] >>> 24 - (f + 1) % 4 * 8 & 255;
                    var i = b[f + 2 >>> 2] >>> 24 - (f + 2) % 4 * 8 & 255;
                    var j = g << 16 | h << 8 | i;
                    for (var k = 0; 4 > k && c > f + .75 * k; k++) e.push(d.charAt(j >>> 6 * (3 - k) & 63));
                }
                var l = d.charAt(64);
                if (l) for (;e.length % 4; ) e.push(l);
                return e.join("");
            },
            parse: function(a) {
                var b = a.length;
                var c = this.Yc;
                var e = c.charAt(64);
                if (e) {
                    var f = a.indexOf(e);
                    -1 != f && (b = f);
                }
                var g = [];
                var h = 0;
                for (var i = 0; b > i; i++) if (i % 4) {
                    var j = c.indexOf(a.charAt(i - 1)) << i % 4 * 2;
                    var k = c.indexOf(a.charAt(i)) >>> 6 - i % 4 * 2;
                    g[h >>> 2] |= (j | k) << 24 - h % 4 * 8, h++;
                }
                return d.create(g, h);
            },
            Yc: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
    }(), function(a) {
        function b(a, b, c, d, e, f, g) {
            var h = a + (b & c | ~b & d) + e + g;
            return (h << f | h >>> 32 - f) + b;
        }
        function d(a, b, c, d, e, f, g) {
            var h = a + (b & d | c & ~d) + e + g;
            return (h << f | h >>> 32 - f) + b;
        }
        function e(a, b, c, d, e, f, g) {
            var h = a + (b ^ c ^ d) + e + g;
            return (h << f | h >>> 32 - f) + b;
        }
        function f(a, b, c, d, e, f, g) {
            var h = a + (c ^ (b | ~d)) + e + g;
            return (h << f | h >>> 32 - f) + b;
        }
        var g = c;
        var h = g.oc;
        var i = h.sc;
        var j = h.Ic;
        var k = g.Qc;
        var l = [];
        !function() {
            for (var b = 0; 64 > b; b++) l[b] = 4294967296 * a.abs(a.sin(b + 1)) | 0;
        }();
        var m = k.Zc = j.extend({
            Kc: function() {
                this.Sc = new i.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
            },
            Hc: function(a, c) {
                for (var g = 0; 16 > g; g++) {
                    var h = c + g;
                    var i = a[h];
                    a[h] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                }
                var j = this.Sc.tc;
                var k = a[c + 0];
                var m = a[c + 1];
                var n = a[c + 2];
                var o = a[c + 3];
                var p = a[c + 4];
                var q = a[c + 5];
                var r = a[c + 6];
                var s = a[c + 7];
                var t = a[c + 8];
                var u = a[c + 9];
                var v = a[c + 10];
                var w = a[c + 11];
                var x = a[c + 12];
                var y = a[c + 13];
                var z = a[c + 14];
                var A = a[c + 15];
                var B = j[0];
                var C = j[1];
                var D = j[2];
                var E = j[3];
                B = b(B, C, D, E, k, 7, l[0]), E = b(E, B, C, D, m, 12, l[1]), D = b(D, E, B, C, n, 17, l[2]), 
                C = b(C, D, E, B, o, 22, l[3]), B = b(B, C, D, E, p, 7, l[4]), E = b(E, B, C, D, q, 12, l[5]), 
                D = b(D, E, B, C, r, 17, l[6]), C = b(C, D, E, B, s, 22, l[7]), B = b(B, C, D, E, t, 7, l[8]), 
                E = b(E, B, C, D, u, 12, l[9]), D = b(D, E, B, C, v, 17, l[10]), C = b(C, D, E, B, w, 22, l[11]), 
                B = b(B, C, D, E, x, 7, l[12]), E = b(E, B, C, D, y, 12, l[13]), D = b(D, E, B, C, z, 17, l[14]), 
                C = b(C, D, E, B, A, 22, l[15]), B = d(B, C, D, E, m, 5, l[16]), E = d(E, B, C, D, r, 9, l[17]), 
                D = d(D, E, B, C, w, 14, l[18]), C = d(C, D, E, B, k, 20, l[19]), B = d(B, C, D, E, q, 5, l[20]), 
                E = d(E, B, C, D, v, 9, l[21]), D = d(D, E, B, C, A, 14, l[22]), C = d(C, D, E, B, p, 20, l[23]), 
                B = d(B, C, D, E, u, 5, l[24]), E = d(E, B, C, D, z, 9, l[25]), D = d(D, E, B, C, o, 14, l[26]), 
                C = d(C, D, E, B, t, 20, l[27]), B = d(B, C, D, E, y, 5, l[28]), E = d(E, B, C, D, n, 9, l[29]), 
                D = d(D, E, B, C, s, 14, l[30]), C = d(C, D, E, B, x, 20, l[31]), B = e(B, C, D, E, q, 4, l[32]), 
                E = e(E, B, C, D, t, 11, l[33]), D = e(D, E, B, C, w, 16, l[34]), C = e(C, D, E, B, z, 23, l[35]), 
                B = e(B, C, D, E, m, 4, l[36]), E = e(E, B, C, D, p, 11, l[37]), D = e(D, E, B, C, s, 16, l[38]), 
                C = e(C, D, E, B, v, 23, l[39]), B = e(B, C, D, E, y, 4, l[40]), E = e(E, B, C, D, k, 11, l[41]), 
                D = e(D, E, B, C, o, 16, l[42]), C = e(C, D, E, B, r, 23, l[43]), B = e(B, C, D, E, u, 4, l[44]), 
                E = e(E, B, C, D, x, 11, l[45]), D = e(D, E, B, C, A, 16, l[46]), C = e(C, D, E, B, n, 23, l[47]), 
                B = f(B, C, D, E, k, 6, l[48]), E = f(E, B, C, D, s, 10, l[49]), D = f(D, E, B, C, z, 15, l[50]), 
                C = f(C, D, E, B, q, 21, l[51]), B = f(B, C, D, E, x, 6, l[52]), E = f(E, B, C, D, o, 10, l[53]), 
                D = f(D, E, B, C, v, 15, l[54]), C = f(C, D, E, B, m, 21, l[55]), B = f(B, C, D, E, t, 6, l[56]), 
                E = f(E, B, C, D, A, 10, l[57]), D = f(D, E, B, C, r, 15, l[58]), C = f(C, D, E, B, y, 21, l[59]), 
                B = f(B, C, D, E, p, 6, l[60]), E = f(E, B, C, D, w, 10, l[61]), D = f(D, E, B, C, n, 15, l[62]), 
                C = f(C, D, E, B, u, 21, l[63]), j[0] = j[0] + B | 0, j[1] = j[1] + C | 0, j[2] = j[2] + D | 0, 
                j[3] = j[3] + E | 0;
            },
            Mc: function() {
                var b = this.Bc;
                var c = b.tc;
                var d = 8 * this.Cc;
                var e = 8 * b.uc;
                c[e >>> 5] |= 128 << 24 - e % 32;
                var f = a.floor(d / 4294967296);
                var g = d;
                c[(e + 64 >>> 9 << 4) + 15] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8), 
                c[(e + 64 >>> 9 << 4) + 14] = 16711935 & (g << 8 | g >>> 24) | 4278255360 & (g << 24 | g >>> 8), 
                b.uc = 4 * (c.length + 1), this.Ec();
                var h = this.Sc;
                var i = h.tc;
                for (var j = 0; 4 > j; j++) {
                    var k = i[j];
                    i[j] = 16711935 & (k << 8 | k >>> 24) | 4278255360 & (k << 24 | k >>> 8);
                }
                return h;
            },
            clone: function() {
                var a = j.clone.call(this);
                return a.Sc = this.Sc.clone(), a;
            }
        });
        g.Zc = j.Nc(m), g.$c = j.Oc(m);
    }(Math), function() {
        var a = c;
        var b = a.oc;
        var d = b.pc;
        var e = b.sc;
        var f = a.Qc;
        var g = f.Zc;
        var h = f._c = d.extend({
            Jc: d.extend({
                ad: 4,
                bd: g,
                dd: 1
            }),
            init: function(a) {
                this.Jc = this.Jc.extend(a);
            },
            ed: function(a, b) {
                var c = this.Jc;
                var d = c.bd.create();
                var f = e.create();
                var g = f.tc;
                var h = c.ad;
                var i = c.dd;
                for (;g.length < h; ) {
                    j && d.update(j);
                    var j = d.update(a).Lc(b);
                    d.reset();
                    for (var k = 1; i > k; k++) j = d.Lc(j), d.reset();
                    f.concat(j);
                }
                return f.uc = 4 * h, f;
            }
        });
        a._c = function(a, b, c) {
            return h.create(c).ed(a, b);
        };
    }(), c.oc.fd || function(a) {
        var b = c;
        var d = b.oc;
        var e = d.pc;
        var f = d.sc;
        var g = d.Ac;
        var h = b.wc;
        h.zc;
        var i = h.Xc;
        var j = b.Qc;
        var k = j._c;
        var l = d.fd = g.extend({
            Jc: e.extend(),
            gd: function(a, b) {
                return this.create(this.hd, a, b);
            },
            jd: function(a, b) {
                return this.create(this.kd, a, b);
            },
            init: function(a, b, c) {
                this.Jc = this.Jc.extend(c), this.ld = a, this.md = b, this.reset();
            },
            reset: function() {
                g.reset.call(this), this.Kc();
            },
            process: function(a) {
                return this.Dc(a), this.Ec();
            },
            Lc: function(a) {
                a && this.Dc(a);
                var b = this.Mc();
                return b;
            },
            ad: 4,
            nd: 4,
            hd: 1,
            kd: 2,
            Nc: function() {
                function a(a) {
                    return "string" == typeof a ? x : u;
                }
                return function(b) {
                    return {
                        encrypt: function(c, d, e) {
                            return a(d).encrypt(b, c, d, e);
                        },
                        decrypt: function(c, d, e) {
                            return a(d).decrypt(b, c, d, e);
                        }
                    };
                };
            }()
        });
        d.od = l.extend({
            Mc: function() {
                var a = this.Ec(!0);
                return a;
            },
            Fc: 1
        });
        var m = b.mode = {};
        var n = d.pd = e.extend({
            gd: function(a, b) {
                return this.qd.create(a, b);
            },
            jd: function(a, b) {
                return this.rd.create(a, b);
            },
            init: function(a, b) {
                this.sd = a, this.td = b;
            }
        });
        var o = m.ud = function() {
            function b(b, c, d) {
                var e = this.td;
                if (e) {
                    var f = e;
                    this.td = a;
                } else var f = this.vd;
                for (var g = 0; d > g; g++) b[c + g] ^= f[g];
            }
            var c = n.extend();
            return c.qd = c.extend({
                wd: function(a, c) {
                    var d = this.sd;
                    var e = d.Fc;
                    b.call(this, a, c, e), d.xd(a, c), this.vd = a.slice(c, c + e);
                }
            }), c.rd = c.extend({
                wd: function(a, c) {
                    var d = this.sd;
                    var e = d.Fc;
                    var f = a.slice(c, c + e);
                    d.yd(a, c), b.call(this, a, c, e), this.vd = f;
                }
            }), c;
        }();
        var p = b.pad = {};
        var q = p.zd = {
            pad: function(a, b) {
                var c = 4 * b;
                var d = c - a.uc % c;
                var e = d << 24 | d << 16 | d << 8 | d;
                var g = [];
                for (var h = 0; d > h; h += 4) g.push(e);
                var i = f.create(g, d);
                a.concat(i);
            },
            Ad: function(a) {
                var b = 255 & a.tc[a.uc - 1 >>> 2];
                a.uc -= b;
            }
        };
        d.Bd = l.extend({
            Jc: l.Jc.extend({
                mode: o,
                padding: q
            }),
            reset: function() {
                l.reset.call(this);
                var a = this.Jc;
                var b = a.iv;
                var c = a.mode;
                if (this.ld == this.hd) var d = c.gd; else {
                    var d = c.jd;
                    this.Gc = 1;
                }
                this.Cd = d.call(c, this, b && b.tc);
            },
            Hc: function(a, b) {
                this.Cd.wd(a, b);
            },
            Mc: function() {
                var a = this.Jc.padding;
                if (this.ld == this.hd) {
                    a.pad(this.Bc, this.Fc);
                    var b = this.Ec(!0);
                } else {
                    var b = this.Ec(!0);
                    a.Ad(b);
                }
                return b;
            },
            Fc: 4
        });
        var r = d.Dd = e.extend({
            init: function(a) {
                this.qc(a);
            },
            toString: function(a) {
                return (a || this.Ed).stringify(this);
            }
        });
        var s = b.format = {};
        var t = s.Fd = {
            stringify: function(a) {
                var b = a.ciphertext;
                var c = a.Gd;
                if (c) var d = f.create([ 1398893684, 1701076831 ]).concat(c).concat(b); else var d = b;
                return d.toString(i);
            },
            parse: function(a) {
                var b = i.parse(a);
                var c = b.tc;
                if (1398893684 == c[0] && 1701076831 == c[1]) {
                    var d = f.create(c.slice(2, 4));
                    c.splice(0, 4), b.uc -= 16;
                }
                return r.create({
                    ciphertext: b,
                    Gd: d
                });
            }
        };
        var u = d.Hd = e.extend({
            Jc: e.extend({
                format: t
            }),
            encrypt: function(a, b, c, d) {
                d = this.Jc.extend(d);
                var e = a.gd(c, d);
                var f = e.Lc(b);
                var g = e.Jc;
                return r.create({
                    ciphertext: f,
                    key: c,
                    iv: g.iv,
                    algorithm: a,
                    mode: g.mode,
                    padding: g.padding,
                    Fc: a.Fc,
                    Ed: d.format
                });
            },
            decrypt: function(a, b, c, d) {
                d = this.Jc.extend(d), b = this.Id(b, d.format);
                var e = a.jd(c, d).Lc(b.ciphertext);
                return e;
            },
            Id: function(a, b) {
                return "string" == typeof a ? b.parse(a, this) : a;
            }
        });
        var v = b.Jd = {};
        var w = v.Fd = {
            xb: function(a, b, c, d) {
                d || (d = f.random(8));
                var e = k.create({
                    ad: b + c
                }).ed(a, d);
                var g = f.create(e.tc.slice(b), 4 * c);
                return e.uc = 4 * b, r.create({
                    key: e,
                    iv: g,
                    Gd: d
                });
            }
        };
        var x = d.Kd = u.extend({
            Jc: u.Jc.extend({
                Jd: w
            }),
            encrypt: function(a, b, c, d) {
                d = this.Jc.extend(d);
                var e = d.Jd.xb(c, a.ad, a.nd);
                d.iv = e.iv;
                var f = u.encrypt.call(this, a, b, e.key, d);
                return f.qc(e), f;
            },
            decrypt: function(a, b, c, d) {
                d = this.Jc.extend(d), b = this.Id(b, d.format);
                var e = d.Jd.xb(c, a.ad, a.nd, b.Gd);
                d.iv = e.iv;
                var f = u.decrypt.call(this, a, b, e.key, d);
                return f;
            }
        });
    }(), c.oc.fd || function(a) {
        var b = c;
        var d = b.oc;
        var e = d.pc;
        var f = d.sc;
        var g = d.Ac;
        var h = b.wc;
        h.zc;
        var i = h.Xc;
        var j = b.Qc;
        var k = j._c;
        var l = d.fd = g.extend({
            Jc: e.extend(),
            gd: function(a, b) {
                return this.create(this.hd, a, b);
            },
            jd: function(a, b) {
                return this.create(this.kd, a, b);
            },
            init: function(a, b, c) {
                this.Jc = this.Jc.extend(c), this.ld = a, this.md = b, this.reset();
            },
            reset: function() {
                g.reset.call(this), this.Kc();
            },
            process: function(a) {
                return this.Dc(a), this.Ec();
            },
            Lc: function(a) {
                a && this.Dc(a);
                var b = this.Mc();
                return b;
            },
            ad: 4,
            nd: 4,
            hd: 1,
            kd: 2,
            Nc: function() {
                function a(a) {
                    return "string" == typeof a ? x : u;
                }
                return function(b) {
                    return {
                        encrypt: function(c, d, e) {
                            return a(d).encrypt(b, c, d, e);
                        },
                        decrypt: function(c, d, e) {
                            return a(d).decrypt(b, c, d, e);
                        }
                    };
                };
            }()
        });
        d.od = l.extend({
            Mc: function() {
                var a = this.Ec(!0);
                return a;
            },
            Fc: 1
        });
        var m = b.mode = {};
        var n = d.pd = e.extend({
            gd: function(a, b) {
                return this.qd.create(a, b);
            },
            jd: function(a, b) {
                return this.rd.create(a, b);
            },
            init: function(a, b) {
                this.sd = a, this.td = b;
            }
        });
        var o = m.ud = function() {
            function b(b, c, d) {
                var e = this.td;
                if (e) {
                    var f = e;
                    this.td = a;
                } else var f = this.vd;
                for (var g = 0; d > g; g++) b[c + g] ^= f[g];
            }
            var c = n.extend();
            return c.qd = c.extend({
                wd: function(a, c) {
                    var d = this.sd;
                    var e = d.Fc;
                    b.call(this, a, c, e), d.xd(a, c), this.vd = a.slice(c, c + e);
                }
            }), c.rd = c.extend({
                wd: function(a, c) {
                    var d = this.sd;
                    var e = d.Fc;
                    var f = a.slice(c, c + e);
                    d.yd(a, c), b.call(this, a, c, e), this.vd = f;
                }
            }), c;
        }();
        var p = b.pad = {};
        var q = p.zd = {
            pad: function(a, b) {
                var c = 4 * b;
                var d = c - a.uc % c;
                var e = d << 24 | d << 16 | d << 8 | d;
                var g = [];
                for (var h = 0; d > h; h += 4) g.push(e);
                var i = f.create(g, d);
                a.concat(i);
            },
            Ad: function(a) {
                var b = 255 & a.tc[a.uc - 1 >>> 2];
                a.uc -= b;
            }
        };
        d.Bd = l.extend({
            Jc: l.Jc.extend({
                mode: o,
                padding: q
            }),
            reset: function() {
                l.reset.call(this);
                var a = this.Jc;
                var b = a.iv;
                var c = a.mode;
                if (this.ld == this.hd) var d = c.gd; else {
                    var d = c.jd;
                    this.Gc = 1;
                }
                this.Cd = d.call(c, this, b && b.tc);
            },
            Hc: function(a, b) {
                this.Cd.wd(a, b);
            },
            Mc: function() {
                var a = this.Jc.padding;
                if (this.ld == this.hd) {
                    a.pad(this.Bc, this.Fc);
                    var b = this.Ec(!0);
                } else {
                    var b = this.Ec(!0);
                    a.Ad(b);
                }
                return b;
            },
            Fc: 4
        });
        var r = d.Dd = e.extend({
            init: function(a) {
                this.qc(a);
            },
            toString: function(a) {
                return (a || this.Ed).stringify(this);
            }
        });
        var s = b.format = {};
        var t = s.Fd = {
            stringify: function(a) {
                var b = a.ciphertext;
                var c = a.Gd;
                if (c) var d = f.create([ 1398893684, 1701076831 ]).concat(c).concat(b); else var d = b;
                return d.toString(i);
            },
            parse: function(a) {
                var b = i.parse(a);
                var c = b.tc;
                if (1398893684 == c[0] && 1701076831 == c[1]) {
                    var d = f.create(c.slice(2, 4));
                    c.splice(0, 4), b.uc -= 16;
                }
                return r.create({
                    ciphertext: b,
                    Gd: d
                });
            }
        };
        var u = d.Hd = e.extend({
            Jc: e.extend({
                format: t
            }),
            encrypt: function(a, b, c, d) {
                d = this.Jc.extend(d);
                var e = a.gd(c, d);
                var f = e.Lc(b);
                var g = e.Jc;
                return r.create({
                    ciphertext: f,
                    key: c,
                    iv: g.iv,
                    algorithm: a,
                    mode: g.mode,
                    padding: g.padding,
                    Fc: a.Fc,
                    Ed: d.format
                });
            },
            decrypt: function(a, b, c, d) {
                d = this.Jc.extend(d), b = this.Id(b, d.format);
                var e = a.jd(c, d).Lc(b.ciphertext);
                return e;
            },
            Id: function(a, b) {
                return "string" == typeof a ? b.parse(a, this) : a;
            }
        });
        var v = b.Jd = {};
        var w = v.Fd = {
            xb: function(a, b, c, d) {
                d || (d = f.random(8));
                var e = k.create({
                    ad: b + c
                }).ed(a, d);
                var g = f.create(e.tc.slice(b), 4 * c);
                return e.uc = 4 * b, r.create({
                    key: e,
                    iv: g,
                    Gd: d
                });
            }
        };
        var x = d.Kd = u.extend({
            Jc: u.Jc.extend({
                Jd: w
            }),
            encrypt: function(a, b, c, d) {
                d = this.Jc.extend(d);
                var e = d.Jd.xb(c, a.ad, a.nd);
                d.iv = e.iv;
                var f = u.encrypt.call(this, a, b, e.key, d);
                return f.qc(e), f;
            },
            decrypt: function(a, b, c, d) {
                d = this.Jc.extend(d), b = this.Id(b, d.format);
                var e = d.Jd.xb(c, a.ad, a.nd, b.Gd);
                d.iv = e.iv;
                var f = u.decrypt.call(this, a, b, e.key, d);
                return f;
            }
        });
    }(), function() {
        var a = c;
        var b = a.oc;
        var d = b.Bd;
        var e = a.Qc;
        var f = [];
        var g = [];
        var h = [];
        var i = [];
        var j = [];
        var k = [];
        var l = [];
        var m = [];
        var n = [];
        var o = [];
        !function() {
            var a = [];
            for (var b = 0; 256 > b; b++) 128 > b ? a[b] = b << 1 : a[b] = b << 1 ^ 283;
            var c = 0;
            var d = 0;
            for (var b = 0; 256 > b; b++) {
                var e = d ^ d << 1 ^ d << 2 ^ d << 3 ^ d << 4;
                e = e >>> 8 ^ 255 & e ^ 99, f[c] = e, g[e] = c;
                var p = a[c];
                var q = a[p];
                var r = a[q];
                var s = 257 * a[e] ^ 16843008 * e;
                h[c] = s << 24 | s >>> 8, i[c] = s << 16 | s >>> 16, j[c] = s << 8 | s >>> 24, k[c] = s;
                var s = 16843009 * r ^ 65537 * q ^ 257 * p ^ 16843008 * c;
                l[e] = s << 24 | s >>> 8, m[e] = s << 16 | s >>> 16, n[e] = s << 8 | s >>> 24, o[e] = s, 
                c ? (c = p ^ a[a[a[r ^ p]]], d ^= a[a[d]]) : c = d = 1;
            }
        }();
        var p = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ];
        var q = e.Ld = d.extend({
            Kc: function() {
                var a = this.md;
                var b = a.tc;
                var c = a.uc / 4;
                var d = this.Md = c + 6;
                var e = 4 * (d + 1);
                var g = this.Nd = [];
                for (var h = 0; e > h; h++) if (c > h) g[h] = b[h]; else {
                    var i = g[h - 1];
                    h % c ? c > 6 && h % c == 4 && (i = f[i >>> 24] << 24 | f[i >>> 16 & 255] << 16 | f[i >>> 8 & 255] << 8 | f[255 & i]) : (i = i << 8 | i >>> 24, 
                    i = f[i >>> 24] << 24 | f[i >>> 16 & 255] << 16 | f[i >>> 8 & 255] << 8 | f[255 & i], 
                    i ^= p[h / c | 0] << 24), g[h] = g[h - c] ^ i;
                }
                var j = this.Od = [];
                for (var k = 0; e > k; k++) {
                    var h = e - k;
                    if (k % 4) var i = g[h]; else var i = g[h - 4];
                    4 > k || 4 >= h ? j[k] = i : j[k] = l[f[i >>> 24]] ^ m[f[i >>> 16 & 255]] ^ n[f[i >>> 8 & 255]] ^ o[f[255 & i]];
                }
            },
            xd: function(a, b) {
                this.Pd(a, b, this.Nd, h, i, j, k, f);
            },
            yd: function(a, b) {
                var c = a[b + 1];
                a[b + 1] = a[b + 3], a[b + 3] = c, this.Pd(a, b, this.Od, l, m, n, o, g);
                var c = a[b + 1];
                a[b + 1] = a[b + 3], a[b + 3] = c;
            },
            Pd: function(a, b, c, d, e, f, g, h) {
                var i = this.Md;
                var j = a[b] ^ c[0];
                var k = a[b + 1] ^ c[1];
                var l = a[b + 2] ^ c[2];
                var m = a[b + 3] ^ c[3];
                var n = 4;
                for (var o = 1; i > o; o++) {
                    var p = d[j >>> 24] ^ e[k >>> 16 & 255] ^ f[l >>> 8 & 255] ^ g[255 & m] ^ c[n++];
                    var q = d[k >>> 24] ^ e[l >>> 16 & 255] ^ f[m >>> 8 & 255] ^ g[255 & j] ^ c[n++];
                    var r = d[l >>> 24] ^ e[m >>> 16 & 255] ^ f[j >>> 8 & 255] ^ g[255 & k] ^ c[n++];
                    var s = d[m >>> 24] ^ e[j >>> 16 & 255] ^ f[k >>> 8 & 255] ^ g[255 & l] ^ c[n++];
                    j = p, k = q, l = r, m = s;
                }
                var p = (h[j >>> 24] << 24 | h[k >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[255 & m]) ^ c[n++];
                var q = (h[k >>> 24] << 24 | h[l >>> 16 & 255] << 16 | h[m >>> 8 & 255] << 8 | h[255 & j]) ^ c[n++];
                var r = (h[l >>> 24] << 24 | h[m >>> 16 & 255] << 16 | h[j >>> 8 & 255] << 8 | h[255 & k]) ^ c[n++];
                var s = (h[m >>> 24] << 24 | h[j >>> 16 & 255] << 16 | h[k >>> 8 & 255] << 8 | h[255 & l]) ^ c[n++];
                a[b] = p, a[b + 1] = q, a[b + 2] = r, a[b + 3] = s;
            },
            ad: 8
        });
        a.Ld = d.Nc(q);
    }(), function() {
        var a = c;
        var b = a.oc;
        var d = b.Bd;
        var e = a.Qc;
        var f = [];
        var g = [];
        var h = [];
        var i = [];
        var j = [];
        var k = [];
        var l = [];
        var m = [];
        var n = [];
        var o = [];
        !function() {
            var a = [];
            for (var b = 0; 256 > b; b++) 128 > b ? a[b] = b << 1 : a[b] = b << 1 ^ 283;
            var c = 0;
            var d = 0;
            for (var b = 0; 256 > b; b++) {
                var e = d ^ d << 1 ^ d << 2 ^ d << 3 ^ d << 4;
                e = e >>> 8 ^ 255 & e ^ 99, f[c] = e, g[e] = c;
                var p = a[c];
                var q = a[p];
                var r = a[q];
                var s = 257 * a[e] ^ 16843008 * e;
                h[c] = s << 24 | s >>> 8, i[c] = s << 16 | s >>> 16, j[c] = s << 8 | s >>> 24, k[c] = s;
                var s = 16843009 * r ^ 65537 * q ^ 257 * p ^ 16843008 * c;
                l[e] = s << 24 | s >>> 8, m[e] = s << 16 | s >>> 16, n[e] = s << 8 | s >>> 24, o[e] = s, 
                c ? (c = p ^ a[a[a[r ^ p]]], d ^= a[a[d]]) : c = d = 1;
            }
        }();
        var p = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ];
        var q = e.Ld = d.extend({
            Kc: function() {
                var a = this.md;
                var b = a.tc;
                var c = a.uc / 4;
                var d = this.Md = c + 6;
                var e = 4 * (d + 1);
                var g = this.Nd = [];
                for (var h = 0; e > h; h++) if (c > h) g[h] = b[h]; else {
                    var i = g[h - 1];
                    h % c ? c > 6 && h % c == 4 && (i = f[i >>> 24] << 24 | f[i >>> 16 & 255] << 16 | f[i >>> 8 & 255] << 8 | f[255 & i]) : (i = i << 8 | i >>> 24, 
                    i = f[i >>> 24] << 24 | f[i >>> 16 & 255] << 16 | f[i >>> 8 & 255] << 8 | f[255 & i], 
                    i ^= p[h / c | 0] << 24), g[h] = g[h - c] ^ i;
                }
                var j = this.Od = [];
                for (var k = 0; e > k; k++) {
                    var h = e - k;
                    if (k % 4) var i = g[h]; else var i = g[h - 4];
                    4 > k || 4 >= h ? j[k] = i : j[k] = l[f[i >>> 24]] ^ m[f[i >>> 16 & 255]] ^ n[f[i >>> 8 & 255]] ^ o[f[255 & i]];
                }
            },
            xd: function(a, b) {
                this.Pd(a, b, this.Nd, h, i, j, k, f);
            },
            yd: function(a, b) {
                var c = a[b + 1];
                a[b + 1] = a[b + 3], a[b + 3] = c, this.Pd(a, b, this.Od, l, m, n, o, g);
                var c = a[b + 1];
                a[b + 1] = a[b + 3], a[b + 3] = c;
            },
            Pd: function(a, b, c, d, e, f, g, h) {
                var i = this.Md;
                var j = a[b] ^ c[0];
                var k = a[b + 1] ^ c[1];
                var l = a[b + 2] ^ c[2];
                var m = a[b + 3] ^ c[3];
                var n = 4;
                for (var o = 1; i > o; o++) {
                    var p = d[j >>> 24] ^ e[k >>> 16 & 255] ^ f[l >>> 8 & 255] ^ g[255 & m] ^ c[n++];
                    var q = d[k >>> 24] ^ e[l >>> 16 & 255] ^ f[m >>> 8 & 255] ^ g[255 & j] ^ c[n++];
                    var r = d[l >>> 24] ^ e[m >>> 16 & 255] ^ f[j >>> 8 & 255] ^ g[255 & k] ^ c[n++];
                    var s = d[m >>> 24] ^ e[j >>> 16 & 255] ^ f[k >>> 8 & 255] ^ g[255 & l] ^ c[n++];
                    j = p, k = q, l = r, m = s;
                }
                var p = (h[j >>> 24] << 24 | h[k >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[255 & m]) ^ c[n++];
                var q = (h[k >>> 24] << 24 | h[l >>> 16 & 255] << 16 | h[m >>> 8 & 255] << 8 | h[255 & j]) ^ c[n++];
                var r = (h[l >>> 24] << 24 | h[m >>> 16 & 255] << 16 | h[j >>> 8 & 255] << 8 | h[255 & k]) ^ c[n++];
                var s = (h[m >>> 24] << 24 | h[j >>> 16 & 255] << 16 | h[k >>> 8 & 255] << 8 | h[255 & l]) ^ c[n++];
                a[b] = p, a[b + 1] = q, a[b + 2] = r, a[b + 3] = s;
            },
            ad: 8
        });
        a.Ld = d.Nc(q);
    }(), function() {
        if ("function" == typeof ArrayBuffer) {
            var a = c;
            var b = a.oc;
            var d = b.sc;
            var e = d.init;
            var f = d.init = function(a) {
                if (a instanceof ArrayBuffer && (a = new Uint8Array(a)), (a instanceof Int8Array || a instanceof Uint8ClampedArray || a instanceof Int16Array || a instanceof Uint16Array || a instanceof Int32Array || a instanceof Uint32Array || a instanceof Float32Array || a instanceof Float64Array) && (a = new Uint8Array(a.buffer, a.byteOffset, a.byteLength)), 
                a instanceof Uint8Array) {
                    var b = a.byteLength;
                    var c = [];
                    for (var d = 0; b > d; d++) c[d >>> 2] |= a[d] << 24 - d % 4 * 8;
                    e.call(this, c, b);
                } else e.apply(this, arguments);
            };
            f.prototype = d;
        }
    }(), b.l = c;
}), define("utils/securityUtils.js", [ "exports", "../utils/commonUtils.js", "./cryptoJs.js" ], function(a, b, c) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var d = b.t;
    var e = _interopRequire(c);
    a.Qd = function() {
        function b(a, b, d) {
            var f = btoa(String.fromCharCode.apply(null, a));
            var g = e.wc.xc.parse(b);
            d = e.wc.xc.parse(d);
            var h = e.Ld.decrypt({
                ciphertext: e.wc.Xc.parse(f),
                Gd: ""
            }, g, {
                iv: d
            });
            return c(h.toString());
        }
        function c(a) {
            var b = "";
            for (var c = 0; c < a.length; c += 2) b += String.fromCharCode(parseInt(a.substr(c, 2), 16));
            return b;
        }
        function f(a) {
            if (!a) return null;
            a = new Uint8Array(a);
            var b = [];
            for (var c = 0; c < a.length; ++c) {
                var d = a[c].toString(16);
                d.length < 2 && (d = "0" + d), b.push(d);
            }
            return b.join("");
        }
        function g(a) {
            return String.fromCharCode.apply(null, new Uint8Array(a));
        }
        function h(a) {
            if (a.length % 2 !== 0) throw "Invalid hexString";
            var b = new Uint8Array(a.length / 2);
            for (var c = 0; c < a.length; c += 2) {
                var d = parseInt(a.substr(c, 2), 16);
                if (NaN === d) throw "Invalid hexString";
                b[c / 2] = d;
            }
            return b;
        }
        function i(a) {
            var b = [];
            for (var c = 0; c < a.length; ++c) b.push(a.charCodeAt(c));
            return new Uint8Array(b);
        }
        function j(a, b) {
            var c = e.Tc(a, b);
            return c.toString();
        }
        function k(a, b, c) {
            var d = e.Tc(a, c);
            return b.toString() === d.toString();
        }
        function l(a) {
            var b = "";
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                var e = 126 ^ d;
                b += String.fromCharCode(e);
            }
            return b;
        }
        var m = {
            stringify: function(a) {
                var b = btoa(String.fromCharCode.apply(0, a));
                return b.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
            },
            parse: function(a) {
                return a = a.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, ""), new Uint8Array(Array.prototype.map.call(atob(a), function(a) {
                    return a.charCodeAt(0);
                }));
            }
        };
        return d.extend(a, {
            Rd: m,
            Sd: f,
            Td: g,
            Ud: h,
            Vd: i,
            Wd: b,
            sign: j,
            verify: k,
            Xd: l
        });
    }();
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
}), define("utils/ioProvider.js", [ "exports", "module", "./securityUtils.js" ], function(a, b, c) {
    "use strict";
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var d = c.Qd;
    var e = function f(a) {
        function b(a) {
            return i + a;
        }
        function c(a, c, d) {
            var e = {
                value: d,
                signature: a
            };
            h.setItem(b(c), JSON.stringify(e));
        }
        _classCallCheck(this, f);
        var e = this;
        var g = a.Tb("IOProvider");
        var h = window.localStorage;
        var i = "vstb_internal_";
        var j = [ 28, 23, 18, 18, 48, 7, 27, 42, 22, 27, 45, 29, 23, 27, 16, 29, 27, 57, 11, 7 ];
        e.Ua = function(a) {
            var c = h.getItem(b(a));
            try {
                var e = JSON.parse(c);
            } catch (f) {
                return g.error(f), null;
            }
            if (!e || !e.signature) return null;
            var i = e.signature;
            var k = a + JSON.stringify(e.value);
            return d.verify(d.Xd(j), i, k) ? (g.log("Signature verified. Stored value retrieved successfully."), 
            e.value) : (g.log("Signature validation failed. Stored value thrown away."), null);
        }, e.Va = function(a, b) {
            var e = a + JSON.stringify(b);
            var f = d.sign(d.Xd(j), e);
            g.log("Storing record ... KEY=" + a), c(f, a, b);
        };
    };
    b.l = e;
}), define("modules/eventReporting/eventDispatcherState.js", [ "exports", "module" ], function(a, b) {
    "use strict";
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var c = function d(a) {
        function b() {
            return j >= f.Yd;
        }
        function c() {
            return i === f.Zd * f.$d;
        }
        function e() {
            return h <= f._d;
        }
        _classCallCheck(this, d);
        var f = this;
        Object.defineProperties(f, {
            Yd: {
                value: 5
            },
            Zd: {
                value: 5
            },
            ae: {
                value: 100
            },
            _d: {
                value: 10
            },
            be: {
                value: 10
            },
            $d: {
                value: 3
            }
        });
        var g = a.Tb("EventDispatcherState");
        var h = f.ae;
        var i = f.Zd;
        var j = 0;
        f.nc = function() {
            return h;
        }, f.ce = function() {
            return j;
        }, f.hc = function() {
            return i;
        }, f.ic = function() {
            return !(b() && c() || e());
        }, f.de = function() {
            h > f._d && (h -= f.be);
        }, f.lc = function() {
            return j < f.Yd ? (j++, void g.log("sendFailuresCount incremented to " + j)) : void (i < f.Zd * f.$d && (i += f.Zd, 
            g.log("submitIntervalInMinutes incremented to " + i)));
        }, f.reset = function() {
            g.log("Resetting Event Dispatcher State."), h = f.ae, i = f.Zd;
        };
    };
    b.l = c;
}), define("player/manifest.js", [ "exports", "module", "../utils/commonUtils.js" ], function(a, b, c) {
    "use strict";
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    c.t;
    var d = function e(a, b) {
        function c(a, b) {
            var c = [];
            var d = null;
            return c = a.map(function(a) {
                var c = {
                    id: a.id,
                    trackType: b,
                    bandwidth: a.bandwidth
                };
                return a.height && (c.height = a.height), a.width && (c.width = a.width), a.lang && (c.language = a.lang), 
                a.hasOwnProperty("enabled") && (c.displaying = a.enabled), a.active && (d = c), 
                c;
            }), {
                ee: c,
                fe: d
            };
        }
        function d(a, c) {
            var d = b.getConfiguration().restrictions;
            d[a] = c, b.configure({
                restrictions: d
            });
        }
        _classCallCheck(this, e);
        var f = this;
        var g = a.Tb("Manifest");
        b.configure({
            enableAdaptation: !0
        }), f.subscribe = function(a, c) {
            return b.addEventListener(a, c), function() {
                b.removeEventListener(a, c, !1);
            };
        }, f.getAllAvailableTracks = function() {
            return {
                video: c(b.getVideoTracks(), "video").ee,
                audio: c(b.getAudioTracks(), "audio").ee,
                text: c(b.getTextTracks(), "text").ee
            };
        }, f.getAllSelectedTracks = function() {
            return {
                video: c(b.getVideoTracks(), "video").fe,
                audio: c(b.getAudioTracks(), "audio").fe,
                text: c(b.getTextTracks(), "text").fe
            };
        }, f.getAvailableAudioTracks = function() {
            return c(b.getAudioTracks(), "audio").ee;
        }, f.getAvailableVideoTracks = function() {
            return c(b.getVideoTracks(), "video").ee;
        }, f.getAvailableTextTracks = function() {
            return c(b.getTextTracks(), "text").ee;
        }, f.getCurrentAudioTrack = function() {
            return c(b.getAudioTracks(), "audio").fe;
        }, f.getCurrentVideoTrack = function() {
            return c(b.getVideoTracks(), "video").fe;
        }, f.getCurrentTextTrack = function() {
            return c(b.getTextTracks(), "text").fe;
        }, f.selectAudioTrack = function(a) {
            b.selectAudioTrack(a.id || a);
        }, f.selectTextTrack = function(a) {
            b.selectTextTrack(a.id || a);
        }, f.setMaxBandwidth = function(a) {
            g.log("Updating max bandwidth to: " + a), d("maxBandwidth", a);
        }, f.setMinBandwidth = function(a) {
            g.log("Updating min bandwidth to: " + a), d("minBandwidth", a);
        }, f.getCurrentRestrictions = function() {
            return b.getConfiguration().restrictions;
        };
    };
    b.l = d;
}), define("player/licenseAcquirer.js", [ "exports", "module", "../utils/commonUtils.js" ], function(a, b, c) {
    "use strict";
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var d = c.D;
    var e = function f(a, b) {
        function c() {
            var a = b.oa;
            var c = a.drmAttributes.widevineLicenseProxyAddr;
            var d = a.drmAttributes.widevineLicenseQParams;
            var e = c + d;
            return e !== j && (h.log("New LAURL generated: " + e), j = e), e;
        }
        function e(a) {
            return h.log("License Acquired."), g.Aa("licenseAcquired"), a;
        }
        _classCallCheck(this, f);
        var g = this;
        var h = a.Tb("LicenseAcquirer");
        var shaka = a.ge();
        var i = "com.widevine.alpha";
        var j = null;
        d(g, a.ob()), g.he = function() {
            return j;
        }, g.ie = function(a) {
            if ("urn:uuid:EDEF8BA9-79D6-4ACE-A3C8-27DCD51D21ED" === a.schemeIdUri) {
                var b = c();
                return new shaka.player.DrmSchemeInfo(i, b, !1, null, e);
            }
            return null;
        };
    };
    b.l = e;
}), define("utils/rightsDecryptor.js", [ "exports", "module", "./securityUtils.js", "./cryptoJs.js" ], function(a, b, c, d) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var e = c.Qd;
    _interopRequire(d);
    var f = function() {
        function a(a) {
            var b = new Uint8Array(a.length / 2);
            for (var c = 0; c < a.length; ++c) {
                var d = a.substr(2 * c, 2);
                var e = parseInt(d, 16);
                b[c] = e;
            }
            return b;
        }
        function b(b, g) {
            var h = c(g);
            return h = d(h), e.Wd(a(b), e.Xd(f), h);
        }
        function c(a) {
            var b = a.substr(0, 16);
            return e.Vd(b);
        }
        function d(a) {
            var b = "";
            for (var c = 0; c < a.length; c++) b += a[c].toString(16);
            return b;
        }
        var f = [ 74, 26, 79, 76, 79, 76, 72, 73, 76, 76, 74, 76, 77, 77, 77, 79, 74, 26, 76, 70, 75, 76, 74, 24, 72, 71, 78, 76, 74, 77, 74, 28 ];
        return {
            decrypt: b
        };
    }();
    b.l = f;
}), define("libraryException.js", [ "exports", "module" ], function(a, b) {
    "use strict";
    var _inherits = function(a, b) {
        if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                v: !0
            }
        }), b && (a.__proto__ = b);
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var c = function(a) {
        function b(c, d, e, f, g) {
            _classCallCheck(this, b);
            var h = this;
            a.captureStackTrace(this, b), h.mainErrorCode = String(c), h.serverErrorCode = String(d || 0), 
            h.internalErrorCode = String(e || 0), h.serverErrorMessage = f || null, h.internalErrorMessage = g || null, 
            h.publicErrorCode = "E" + h.mainErrorCode + "-" + h.internalErrorCode + "-" + h.serverErrorCode;
        }
        return _inherits(b, a), b;
    }(Error);
    b.l = c;
}), define("rightsAcquirer.js", [ "exports", "module", "./utils/commonUtils.js", "./utils/securityUtils.js", "./vstbStatuses.js", "./vstbErrorCodes.js", "./libraryException.js" ], function(a, b, c, d, e, f, g) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var h = c.D;
    d.Td;
    var i = _interopRequire(e);
    var j = _interopRequire(f);
    var k = _interopRequire(g);
    var l = function m(a, b) {
        function c(a) {
            var b = a.response;
            var c = b && b.status;
            var d = b && b.rightsObject;
            c === i.Ob ? l(d) : c === i.Pb ? n(d) : o(b);
        }
        function d(a) {
            c(a), g();
        }
        function e() {
            return s;
        }
        function f() {
            var b = a.je(s);
            b.subscribe("finished", d), b.xb();
        }
        function g() {
            !e() && t && (s = t, t = null, f());
        }
        function l(a) {
            q.log("Acquired new rights object.");
            try {
                var c = r(a, b.ja);
                var d = JSON.parse(c);
            } catch (e) {
                q.error("There was a problem decrypting the rights object.", e);
                var f = new k(j.Eb);
                return void p.Aa("failed", s, f);
            }
            q.debug("Rights object successfully decrypted:", d), b.ja = d.token, b.oa = d, s = null, 
            p.Aa("success", d), g();
        }
        function n(a) {
            q.log("Acquired new rights token.");
            try {
                b.ja = r(a, b.ja);
            } catch (c) {
                q.error("There was a problem decrypting the rights token", c);
                var d = new k(j.Eb);
                return void p.Aa("failed", s, d);
            }
            q.log("Rights token successfully decrypted. Executing new request."), f();
        }
        function o(a) {
            q.error("Rights Acquirer failed.");
            var b = a && a.status;
            var c = a && a.msg;
            var d = new k(j.Eb, b, null, c);
            p.Aa("failed", s, d), s = null, g();
        }
        _classCallCheck(this, m);
        var p = this;
        var q = a.Tb("RightsAcquirer");
        var r = a.ke().decrypt;
        var s = null;
        var t = null;
        h(this, a.ob()), p.xb = function(a) {
            t = a, e() || g();
        };
    };
    b.l = l;
}), define("loginProcess.js", [ "exports", "module", "./utils/commonUtils.js", "./vstbStatuses.js", "./vstbErrorCodes.js", "./libraryException.js" ], function(a, b, c, d, e, f) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var g = c.D;
    var h = _interopRequire(d);
    var i = _interopRequire(e);
    var j = _interopRequire(f);
    var k = function l(a, b) {
        function c(a) {
            k.error("Login process failed.");
            var b = a && a.status;
            var c = a && a.msg;
            var d = new j(i.Db, b, null, c);
            f.Aa("failed", d);
        }
        function d(a) {
            k.log("Login process successful."), b.quickplayId = a.quickplayId, b.mak = a.mak, 
            b.ja = a.mak, a.heartbeatFrequencyInMs && (b.heartbeatFrequencyInMs = a.heartbeatFrequencyInMs), 
            a.heartbeatUrl && (b.heartbeatUrl = a.heartbeatUrl), f.Aa("success", {
                le: !0
            });
        }
        function e(a) {
            m = null;
            var b = a.response;
            var e = b && b.status;
            e === h.Ob ? d(b) : c(b);
        }
        _classCallCheck(this, l);
        var f = this;
        var k = a.Tb("LoginProcess");
        var m = null;
        g(f, a.ob()), f.xb = function() {
            return k.log("Executing Library login process ..."), m ? void k.log("Another login request already in progress. Skipping ...") : b.quickplayId ? (k.log("Login was already performed successfully."), 
            void f.Aa("success", {
                le: !1
            })) : (k.log("Logging in ... Executing Login Action"), m = a.me(), m.subscribe("finished", e), 
            void m.xb());
        };
    };
    b.l = k;
}), define("player/playerWrapper.js", [ "exports", "module", "../utils/commonUtils.js", "../libraryException.js", "../vstbErrorCodes.js" ], function(a, b, c, d, e) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var f = c.D;
    var g = _interopRequire(d);
    var h = _interopRequire(e);
    var i = function j(a, b, c) {
        function d(a, b) {
            var c = new shaka.util.EWMABandwidthEstimator();
            var d = new shaka.media.SimpleAbrManager();
            var e = new shaka.player.DashVideoSource(a, r.ie, c, d);
            m(e, b), p.configure(s), p.load(e)["catch"](function() {});
        }
        function e(a) {
            o.error("Something went wrong with Shaka.", a);
            var b = i(a);
            var c = new g(h.Fb, null, null, null, b);
            n.Aa("failed", c);
        }
        function i(a) {
            return a.message || a.detail && a.detail.message;
        }
        function k() {
            n.Aa("licenseAcquired");
        }
        function l() {
            r.subscribe("licenseAcquired", k), p.addEventListener("error", e);
        }
        function m(a, b) {
            if (b && b.length > 0) for (var c = 0; c < b.length; c++) a.addExternalCaptions(b[c].url, b[c].lang);
        }
        _classCallCheck(this, j);
        var n = this;
        var shaka = a.ge();
        var o = a.Tb("PlayerWrapper");
        var p = new shaka.player.Player(b);
        var q = a.ne(p, c);
        var r = a.oe();
        var s = {
            pe: 15
        };
        o.log("Using shaka player version: " + shaka.player.Player.version), shaka.polyfill.Fullscreen.install(), 
        shaka.polyfill.MediaKeys.install(), shaka.polyfill.VideoPlaybackQuality.install(), 
        f(n, a.ob()), l(), n.selectVideoTrack = function(a) {
            p.enableAdaptation(!1), p.selectVideoTrack(a.id || a);
        }, n.setPlaybackStartTime = function(a) {
            p.setPlaybackStartTime(a);
        }, n.prepare = function(a, b) {
            o.log("Attempting to load media from " + a), d(a, b);
        }, n.isLive = function() {
            return p.isLive();
        }, n.enableTextTrack = function(a) {
            p.enableTextTrack(a);
        }, n.onBufferingStart = function(a) {
            return p.addEventListener("bufferingStart", a), function() {
                p.removeEventListener("bufferingStart", a, !1);
            };
        }, n.onBufferingEnd = function(a) {
            return p.addEventListener("bufferingEnd", a), function() {
                p.removeEventListener("bufferingEnd", a, !1);
            };
        }, n.setPlaybackRate = function(a) {
            p.setPlaybackRate(a);
        }, n.setMaxBufferSize = function(a) {
            s.streamBufferSize = a, p.configure(s);
        }, n.getMaxBufferSize = function() {
            return p.getConfiguration().streamBufferSize;
        }, n.unload = function() {
            return n.Aa("beforeUnload"), o.log("Unloading media source from player."), p.unload();
        }, n.getManifest = function() {
            return q;
        }, n.getPlaybackRate = function() {
            return p.getPlaybackRate();
        }, n.qe = function() {
            return p.getConfiguration().enableAdaptation;
        }, n.getStats = function() {
            return p.getStats();
        }, n.he = function() {
            return r.he();
        };
    };
    b.l = i;
}), define("internalPlayer.js", [ "exports", "module", "./utils/commonUtils.js", "./libraryException.js", "./vstbErrorCodes.js" ], function(a, b, c, d, e) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var f = c.D;
    var g = c.W;
    var h = _interopRequire(d);
    var i = _interopRequire(e);
    var j = function k(a, b, c, d, e, j) {
        function l() {
            if ("VIDEO" !== c.tagName) throw u.log("HTMLVideoElement was not provided. Value = ", c), 
            new h(i.Nb);
            if (!d) throw u.log("serverUrl was not provided. Value = " + d), new h(i.Nb);
            if (!e) throw u.log("carrierId was not provided. Value = " + e), new h(i.Nb);
            if (!j) throw u.log("appId was not provided. Value = " + j), new h(i.Nb);
        }
        function m() {
            u.log("Initializing library modules:"), u.log("Initializing EventReporting module ... "), 
            B.re = a.se(c, v, w), u.log("Initializing Runtime information module ... "), B.runtimeInfo = a.te(v, c, w), 
            u.log("Initializing Shortcuts monitor module ... "), B.ue = a.ve(c, w, B.runtimeInfo), 
            u.log("Initializing Bookmarks module ... "), B.bookmarks = a.we(c, v, w), u.log("Initializing Network module ... "), 
            B.network = a.xe(), u.log("Done initializing modules ...");
        }
        function n(a) {
            u.log("Something went wrong. Unloading player.");
            var b = v.getCurrentContentRequest();
            var c = !0;
            v.unload(c), v.Aa("error", a), v.Aa("unloaded", b);
        }
        function o() {
            v.Aa("licenseAcquired");
        }
        function p() {
            v.Aa("libraryStarted");
        }
        function q() {
            b.da = d, b.fa = e, b.ea = j;
        }
        function r() {
            w.subscribe("failed", n), w.subscribe("licenseAcquired", o), y.subscribe("loginSuccess", p), 
            y.subscribe("success", function(a) {
                w.prepare(a.contentUrl, D.ye(a));
            }), y.subscribe("failed", n);
        }
        function s() {
            u.log("APP_LOCK was retrieved successfully!");
            try {
                A.contentUrl ? (u.log("Content url provided. Attempting to load: " + A.contentUrl), 
                w.prepare(A.contentUrl)) : (u.log("Content ID provided. Attempting to prepare content: " + A.contentId), 
                y.prepare(A));
            } catch (a) {
                n(a);
            }
        }
        function t() {
            u.log("APP_LOCK retrieval failed!"), n(new h(i.Gb));
        }
        _classCallCheck(this, k);
        var u = a.Tb("InternalPlayer");
        f(this, a.ob()), l(), u.log("Initializing VSTB HTML5 library. Version=" + b.qa), 
        u.log("ServerUrl = " + d + ", CarrierId = " + e + ", AppId = " + j);
        var v = this;
        var w = a.ze(c, v);
        var x = a.Ae();
        var y = a.Be();
        var z;
        var A;
        var B = {};
        var C = a.Ce();
        var D = a.De();
        q(), m(), r(), v.getCurrentContentRequest = function() {
            return g(A);
        }, v.getUserInfo = function() {
            return g(z);
        }, v.getDeviceId = function() {
            return b.ga;
        }, v.getLibraryVersion = function() {
            return b.qa;
        }, v.getModules = function() {
            return B;
        }, v.getManifest = function() {
            return w.getManifest();
        }, v.isLive = function() {
            return w.isLive();
        }, v.getServerUrl = function() {
            return b.da;
        }, v.getCarrierId = function() {
            return b.fa;
        }, v.getDisableControls = function() {
            return b.oa.disablePlaybackControls;
        }, v.setUserAccessToken = function(a) {
            b.ha = a;
        }, v.getUserAccessToken = function() {
            return b.ha;
        }, v.getAppId = function() {
            return b.ea;
        }, v.prepare = function(a, d) {
            var e = void 0 === arguments[2] ? !0 : arguments[2];
            c.autoplay = e, v.unload(), x.Ee(a, d, b.ha), A = a, z = d, v.Aa("contentChanged", A), 
            C.Fe().then(s)["catch"](t);
        }, v.onBufferingStart = function(a) {
            return w.onBufferingStart(a);
        }, v.onBufferingEnd = function(a) {
            return w.onBufferingEnd(a);
        }, v.setPlaybackRate = function(a) {
            w.setPlaybackRate(a);
        }, v.setMaxBufferSize = function(a) {
            return "number" != typeof a ? void u.log('Provided buffer size is not of type "number". Value = ' + a + " type = " + typeof a) : void w.setMaxBufferSize(a);
        }, v.getMaxBufferSize = function() {
            return w.getMaxBufferSize();
        }, v.getPlaybackRate = function() {
            return w.getPlaybackRate();
        }, v.enableTextTrack = function(a) {
            w.enableTextTrack(a);
        }, v.unload = function() {
            var a = void 0 === arguments[0] ? !1 : arguments[0];
            if (null == A) return Promise.resolve();
            u.log("Unloading current playback session.");
            var b = v.getCurrentContentRequest();
            A = null, z = null, w.unload(), a || v.Aa("unloaded", b);
        };
    };
    b.l = j;
}), define("modules/runtimeInfo/htmlNetworkStates.js", [ "exports", "module" ], function(a, b) {
    "use strict";
    var c = {
        0: "NETWORK_EMPTY",
        1: "NETWORK_IDLE",
        2: "NETWORK_LOADING",
        3: "NETWORK_NO_SOURCE"
    };
    b.l = c;
}), define("modules/runtimeInfo/htmlReadyStates.js", [ "exports", "module" ], function(a, b) {
    "use strict";
    var c = {
        0: "HAVE_NOTHING",
        1: "HAVE_METADATA",
        2: "HAVE_CURRENT_DATA",
        3: "HAVE_FUTURE_DATA",
        4: "HAVE_ENOUGH_DATA"
    };
    b.l = c;
}), define("modules/runtimeInfo/runtimeInfo.js", [ "exports", "module", "./htmlNetworkStates.js", "./htmlReadyStates.js", "../../utils/commonUtils.js" ], function(a, b, c, d, e) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var f = _interopRequire(c);
    var g = _interopRequire(d);
    e.t;
    var h = function i(a, b, c, d, e) {
        function h() {
            j(), w.isOpen() && !z, t();
        }
        function j() {
            l("Version", function() {
                return b.qa + " [debug]";
            }), l("Content ID", function() {
                return c.getCurrentContentRequest().contentId || "n/a";
            }), l("Dropped Frames", function() {
                return d.webkitDroppedFrameCount;
            }), l("Decoded Frames", function() {
                return d.webkitDecodedFrameCount;
            }), l("Video Decoded Byte Count", function() {
                return d.webkitVideoDecodedByteCount;
            }), l("Audio Decoded Byte Count", function() {
                return d.webkitAudioDecodedByteCount;
            }), l("Playback Rate", function() {
                return e.getPlaybackRate();
            }), l("Adaptation Enabled", function() {
                return e.qe();
            }), l("ReadyState", function() {
                return g[d.readyState];
            }), l("NetworkState", function() {
                return f[d.networkState];
            }), l("Estimated Bandwidth", function() {
                return e.getStats().estimatedBandwidth;
            }), l("Video Tracks", function() {
                return n("video", q);
            }), l("Audio Tracks", function() {
                return n("audio", p);
            }), l("Text Tracks", function() {
                return n("text", r);
            }), l("LAURL", function() {
                return e.he();
            }), k();
        }
        function k() {
            for (var a in x) x[a].Ge = x[a].He(), w.Ie(a, x[a].Ge);
        }
        function l(a, b) {
            x[a] = {
                Ge: null,
                He: b
            };
        }
        function m() {
            for (var a in x) {
                var b = x[a].Ge;
                var c = x[a].He();
                if (c instanceof Array) {
                    for (var d = 0; d < c.length; d++) if (!b[d] || c[d].value !== b[d].value) {
                        w.Je(a, c), x[a].Ge = c;
                        break;
                    }
                } else c !== b && (x[a].Ge = c, w.Je(a, c));
            }
        }
        function n(a, b) {
            var c = y.getAllAvailableTracks()[a];
            var d = y.getAllSelectedTracks()[a];
            var e = [];
            for (var f = 0; f < c.length; f++) {
                var g = {};
                g.value = b(c[f]), c[f] && d && c[f].id === d.id && (g.value = "---> " + g.value + " <---"), 
                g["Ke"] = o(a, c[f].id), e.push(g);
            }
            return e;
        }
        function o(a, b) {
            return function() {
                "video" === a ? e.selectVideoTrack(b) : "audio" === a ? y.selectAudioTrack(b) : y.selectTextTrack(b);
            };
        }
        function p(a) {
            return "  " + a.bandwidth + ", language=" + a.language;
        }
        function q(a) {
            return " " + a.width + "x" + a.height + ", " + a.bandwidth;
        }
        function r(a) {
            return " " + a.lang;
        }
        function s() {
            0 === d.offsetHeight && w.isOpen() && v.toggle();
        }
        function t() {
            c.getCurrentContentRequest() && (z || (z = setInterval(function() {
                m(), s();
            }, 300)));
        }
        function u() {
            clearInterval(z), z = null;
        }
        _classCallCheck(this, i);
        var v = this;
        var w = a.Le(d);
        var x = {};
        var y = e.getManifest();
        var z = null;
        c.subscribe("contentChanged", h), c.subscribe("unloaded", u), v.toggle = function() {
            w.toggle(), w.isOpen() ? t() : u();
        };
    };
    b.l = h;
}), define("contentPreparationProcess.js", [ "exports", "module", "./utils/commonUtils.js" ], function(a, b, c) {
    "use strict";
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var d = c.D;
    var e = function f(a, b) {
        function c(a) {
            a.le && i.Aa("loginSuccess"), k.xb(m);
        }
        function e(a) {
            i.Aa("failed", a);
        }
        function g(a) {
            return String(m.contentId) !== String(a.contentId) ? void j.log("Rights object doesnt match current content. " + m.contentId + "!= " + a.contentId) : void i.Aa("success", a);
        }
        function h(a, b) {
            a.contentId === m.contentId && i.Aa("failed", b);
        }
        _classCallCheck(this, f);
        var i = this;
        var j = a.Tb("ContentPreparationProcess");
        var k = a.Me();
        var l = a.Ne();
        var m = null;
        d(i, a.ob()), l.subscribe("success", c), l.subscribe("failed", e), k.subscribe("success", g), 
        k.subscribe("failed", h), i.prepare = function(a) {
            m = a, l.xb();
        };
    };
    b.l = e;
}), define("modules/deviceId.js", [ "exports", "module", "../../node_modules/node-uuid/uuid.js" ], function(a, b, c) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var d = _interopRequire(c);
    var e = function f(a, b) {
        _classCallCheck(this, f);
        var c = this;
        var e = a.Tb("DeviceId");
        c.getDeviceId = function() {
            var a = b.Ua("deviceId");
            return a ? (e.log("DeviceId found in storage."), a) : (e.log("No deviceId found. Generating a new deviceId."), 
            a = d.La(), b.Va("deviceId", a), a);
        };
    };
    b.l = e;
}), function(a, b, c) {
    function d(a, b, c) {
        return a.addEventListener ? void a.addEventListener(b, c, !1) : void a.attachEvent("on" + b, c);
    }
    function e(a) {
        if ("keypress" == a.type) {
            var b = String.fromCharCode(a.which);
            return a.shiftKey || (b = b.toLowerCase()), b;
        }
        return q[a.which] ? q[a.which] : r[a.which] ? r[a.which] : String.fromCharCode(a.which).toLowerCase();
    }
    function f(a, b) {
        return a.sort().join(",") === b.sort().join(",");
    }
    function g(a) {
        var b = [];
        return a.shiftKey && b.push("shift"), a.altKey && b.push("alt"), a.ctrlKey && b.push("ctrl"), 
        a.metaKey && b.push("meta"), b;
    }
    function h(a) {
        return a.preventDefault ? void a.preventDefault() : void (a.returnValue = !1);
    }
    function i(a) {
        return a.stopPropagation ? void a.stopPropagation() : void (a.cancelBubble = !0);
    }
    function j(a) {
        return "shift" == a || "ctrl" == a || "alt" == a || "meta" == a;
    }
    function k() {
        if (!u) {
            u = {};
            for (var a in q) a > 95 && 112 > a || q.hasOwnProperty(a) && (u[q[a]] = a);
        }
        return u;
    }
    function l(a, b, c) {
        return c || (c = k()[a] ? "keydown" : "keypress"), "keypress" == c && b.length && (c = "keydown"), 
        c;
    }
    function m(a) {
        return "+" === a ? [ "+" ] : (a = a.replace(/\+{2}/g, "+plus"), a.split("+"));
    }
    function n(a, b) {
        var c;
        var d;
        var e;
        var f = [];
        for (c = m(a), e = 0; e < c.length; ++e) d = c[e], t[d] && (d = t[d]), b && "keypress" != b && s[d] && (d = s[d], 
        f.push("shift")), j(d) && f.push(d);
        return b = l(d, f, b), {
            key: d,
            Oe: f,
            action: b
        };
    }
    function o(a, c) {
        return null === a || a === b ? !1 : a === c ? !0 : o(a.parentNode, c);
    }
    function p(a) {
        function c(a) {
            a = a || {};
            var b, c = !1;
            for (b in t) a[b] ? c = !0 : t[b] = 0;
            c || (x = !1);
        }
        function k(a, b, c, d, e, g) {
            var h;
            var i;
            var k = [];
            var l = c.type;
            if (!s.Pe[a]) return [];
            for ("keyup" == l && j(a) && (b = [ a ]), h = 0; h < s.Pe[a].length; ++h) if (i = s.Pe[a][h], 
            (d || !i.Qe || t[i.Qe] == i.level) && l == i.action && ("keypress" == l && !c.metaKey && !c.ctrlKey || f(b, i.Oe))) {
                var m = !d && i.Re == e;
                var n = d && i.Qe == d && i.level == g;
                (m || n) && s.Pe[a].splice(h, 1), k.push(i);
            }
            return k;
        }
        function l(a, b, c, d) {
            s.Se(b, b.target || b.srcElement, c, d) || a(b, c) === !1 && (h(b), i(b));
        }
        function m(a) {
            "number" != typeof a.which && (a.which = a.keyCode);
            var b = e(a);
            if (b) return "keyup" == a.type && v === b ? void (v = !1) : void s.Te(b, g(a), a);
        }
        function o() {
            clearTimeout(u), u = setTimeout(c, 1e3);
        }
        function q(a, b, d, f) {
            function g(b) {
                return function() {
                    x = b, ++t[a], o();
                };
            }
            function h(b) {
                l(d, b, a), "keyup" !== f && (v = e(b)), setTimeout(c, 10);
            }
            t[a] = 0;
            for (var i = 0; i < b.length; ++i) {
                var j = i + 1 === b.length;
                var k = j ? h : g(f || n(b[i + 1]).action);
                r(b[i], k, f, a, i);
            }
        }
        function r(a, b, c, d, e) {
            s.Ue[a + ":" + c] = b, a = a.replace(/\s+/g, " ");
            var f = a.split(" ");
            var g;
            return f.length > 1 ? void q(a, f, b, c) : (g = n(a, c), s.Pe[g.key] = s.Pe[g.key] || [], 
            k(g.key, g.Oe, {
                type: g.action
            }, d, a, e), void s.Pe[g.key][d ? "unshift" : "push"]({
                o: b,
                Oe: g.Oe,
                action: g.action,
                Qe: d,
                level: e,
                Re: a
            }));
        }
        var s = this;
        if (a = a || b, !(s instanceof p)) return new p(a);
        s.target = a, s.Pe = {}, s.Ue = {};
        var t = {};
        var u;
        var v = !1;
        var w = !1;
        var x = !1;
        s.Ve = function(a, b, d) {
            var e = k(a, b, d);
            var f;
            var g = {};
            var h = 0;
            var i = !1;
            for (f = 0; f < e.length; ++f) e[f].Qe && (h = Math.max(h, e[f].level));
            for (f = 0; f < e.length; ++f) if (e[f].Qe) {
                if (e[f].level != h) continue;
                i = !0, g[e[f].Qe] = 1, l(e[f].o, d, e[f].Re, e[f].Qe);
            } else i || l(e[f].o, d, e[f].Re);
            var m = "keypress" == d.type && w;
            d.type != x || j(a) || m || c(g), w = i && "keydown" == d.type;
        }, s.We = function(a, b, c) {
            for (var d = 0; d < a.length; ++d) r(a[d], b, c);
        }, d(a, "keypress", m), d(a, "keydown", m), d(a, "keyup", m);
    }
    var q = {
        8: "backspace",
        9: "tab",
        13: "enter",
        16: "shift",
        17: "ctrl",
        18: "alt",
        20: "capslock",
        27: "esc",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        45: "ins",
        46: "del",
        91: "meta",
        93: "meta",
        224: "meta"
    };
    var r = {
        106: "*",
        107: "+",
        109: "-",
        110: ".",
        111: "/",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'"
    };
    var s = {
        Xe: "`",
        Ye: "1",
        Ze: "2",
        $e: "3",
        _e: "4",
        af: "5",
        bf: "6",
        cf: "7",
        g: "8",
        df: "9",
        ef: "0",
        ff: "-",
        gf: "=",
        hf: ";",
        "if": "'",
        jf: ",",
        kf: ".",
        lf: "/",
        mf: "\\"
    };
    var t = {
        nf: "alt",
        command: "meta",
        pf: "enter",
        escape: "esc",
        qf: "+",
        rf: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
    };
    var u;
    for (var v = 1; 20 > v; ++v) q[111 + v] = "f" + v;
    for (v = 0; 9 >= v; ++v) q[v + 96] = v;
    p.prototype.bind = function(a, b, c) {
        var d = this;
        return a = a instanceof Array ? a : [ a ], d.We.call(d, a, b, c), d;
    }, p.prototype.sf = function(a, b) {
        var c = this;
        return c.bind.call(c, a, function() {}, b);
    }, p.prototype.tf = function(a, b) {
        var c = this;
        return c.Ue[a + ":" + b] && c.Ue[a + ":" + b]({}, a), c;
    }, p.prototype.reset = function() {
        var a = this;
        return a.Pe = {}, a.Ue = {}, a;
    }, p.prototype.Se = function(a, b) {
        var c = this;
        return (" " + b.className + " ").indexOf(" mousetrap ") > -1 ? !1 : o(b, c.target) ? !1 : "INPUT" == b.tagName || "SELECT" == b.tagName || "TEXTAREA" == b.tagName || b.isContentEditable;
    }, p.prototype.Te = function() {
        var a = this;
        return a.Ve.apply(a, arguments);
    }, p.init = function() {
        var a = p(b);
        for (var c in a) "_" !== c.charAt(0) && (p[c] = function(b) {
            return function() {
                return a[b].apply(a, arguments);
            };
        }(c));
    }, p.init(), a.uf = p, "undefined" != typeof module && module.l && (module.l = p), 
    "function" == typeof define && define.q && define("modules/../../node_modules/mousetrap/mousetrap.js", [], function() {
        return p;
    });
}(window, document), define("modules/shortcuts/shortcuts.js", [ "exports", "module", "../../../node_modules/mousetrap/mousetrap.js" ], function(a, b, c) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var d = _interopRequire(c);
    var e = function f(a, b, c) {
        function e() {
            a.requestFullscreen();
        }
        function g() {
            var b = document.activeElement;
            return b === a;
        }
        function h() {
            g() && (a.paused ? a.play() : a.pause());
        }
        function i() {
            a.muted = !a.muted;
        }
        function j() {
            b.getPlaybackRate() !== s && (a.paused && (a.play(), q = !0), b.setPlaybackRate(s));
        }
        function k() {
            q && (a.pause(), q = !1), b.setPlaybackRate(1);
        }
        function l() {
            b.getPlaybackRate() !== r && (b.setPlaybackRate(r), a.paused && (a.play(), q = !0));
        }
        function m() {
            if (g()) {
                var b = Number(a.volume.toFixed(2)) + .1;
                a.volume = Math.min(1, b);
            }
        }
        function n() {
            if (g()) {
                var b = Number(a.volume.toFixed(2)) - .1;
                a.volume = Math.max(0, b);
            }
        }
        function o() {
            a.currentTime += 30;
        }
        function p() {
            a.currentTime -= 30;
        }
        _classCallCheck(this, f);
        var q = !1;
        var r = -2;
        var s = 5;
        a.addEventListener("playing", a.focus), a.addEventListener("pause", a.focus), a.addEventListener("dblclick", e), 
        d.bind("space", h, "keydown"), d.bind("f", e, "keyup"), d.bind("m", i, "keyup"), 
        d.bind("up", m, "keyup"), d.bind("down", n, "keyup"), d.bind("right", j, "keydown"), 
        d.bind("right", k, "keyup"), d.bind("left", l, "keydown"), d.bind("left", k, "keyup"), 
        d.bind("shift+right", o, "keyup"), d.bind("shift+left", p, "keyup"), d.bind("ctrl+shift+x", c.toggle, "keyup"), 
        window.onkeydown = function(a) {
            return g() ? 32 !== a.keyCode && 38 !== a.keyCode && 40 !== a.keyCode ? !0 : (a.preventDefault(), 
            !1) : void 0;
        };
    };
    b.l = e;
}), define("modules/bookmarks/bookmarks.js", [ "exports", "module" ], function(a, b) {
    "use strict";
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var c = function d(a, b, c, e, f) {
        function g() {
            u = e.getCurrentContentRequest() && e.getCurrentContentRequest().contentId, u && (w = r.getAllBookmarks() || {}, 
            h(), c.addEventListener("playing", i), c.addEventListener("pause", l), c.addEventListener("emptied", l));
        }
        function h() {
            var a = e.getUserInfo().id;
            if (w[u]) for (var b = 0; b < w[u].length; b++) {
                var c = w[u][b];
                if (c.userId === a) return v.log("Bookmark found for content=" + u + ", userId=" + c.userId), 
                t = c, v.log("Restoring playback time from bookmark."), void f.setPlaybackStartTime(t.time);
            } else w[u] = [];
            t = {
                userId: a,
                time: null
            }, f.setPlaybackStartTime(t.time), w[u].push(t);
        }
        function i() {
            s || (v.log("Start bookmarking"), s = setInterval(j, p));
        }
        function j() {
            k() ? o() : m(), n();
        }
        function k() {
            return c.currentTime >= c.duration * q;
        }
        function l(a) {
            v.log("Stop bookmarking because video sent event: " + a.type), clearInterval(s), 
            s = null;
        }
        function m() {
            t.time = c.currentTime;
        }
        function n() {
            b.Va("bookmarks", w);
        }
        function o() {
            v.log("Resetting bookmark."), t.time = 0;
        }
        _classCallCheck(this, d);
        var p = 7e3;
        var q = .95;
        var r = this;
        var s;
        var t;
        var u;
        var v = a.Tb("Bookmarks");
        var w = {};
        e.subscribe("contentChanged", g), r.vf = function() {
            return t;
        }, r.getAllBookmarks = function() {
            return v.log("Fetching all bookmarks..."), b.Ua("bookmarks");
        };
    };
    b.l = c;
}), define("prePlaybackValidator.js", [ "exports", "module", "./libraryException.js", "./vstbErrorCodes.js", "./contentTypes.js" ], function(a, b, c, d, e) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var f = _interopRequire(c);
    var g = _interopRequire(d);
    var h = _interopRequire(e);
    var i = function j(a) {
        function b() {
            throw new f(g.Nb);
        }
        function c(a) {
            a && !a.userId && (k.log("User info was provided without a user ID."), b());
        }
        function d(a) {
            a || (k.error("Content request is empty. Value is: " + a), b()), a.contentUrl || a.contentId || (k.error("No contentUrl and no contentId provided. Either a contentUrl or a contentId must be povided."), 
            b()), (!a.contentType || a.contentType !== h.rb && a.contentType !== h.sb) && (k.error("The contentType provided in invalid. Value is: " + a.contentType), 
            b());
        }
        function e(a, c) {
            a.contentId && !c && (k.error("User Access Token is not set."), b());
        }
        _classCallCheck(this, j);
        var i = this;
        var k = a.Tb("PrePlaybackValidator");
        i.Ee = function(a, b, f) {
            d(a), c(b), e(a, f);
        };
    };
    b.l = i;
}), define("player.js", [ "exports", "module", "./libraryException.js", "./vstbErrorCodes.js" ], function(a, b, c, d) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    _interopRequire(c);
    _interopRequire(d);
    var e = function f(a, b, c, d, e, g) {
        _classCallCheck(this, f);
        var h = this;
        var i = a.wf(b, c, d, e);
        g && i.setUserAccessToken(g), h.setUserAccessToken = function(a) {
            i.setUserAccessToken(a);
        }, h.getCurrentContentRequest = function() {
            return i.getCurrentContentRequest();
        }, h.getUserInfo = function() {
            return i.getUserInfo();
        }, h.getServerUrl = function() {
            return i.getServerUrl();
        }, h.getManifest = function() {
            return i.getManifest();
        }, h.getCarrierId = function() {
            return i.getCarrierId();
        }, h.getAppId = function() {
            return i.getAppId();
        }, h.getModules = function() {
            return i.getModules();
        }, h.getUserAccessToken = function() {
            return i.getUserAccessToken();
        }, h.getLibraryVersion = function() {
            return i.getLibraryVersion();
        }, h.getDeviceId = function() {
            return i.getDeviceId();
        }, h.getDisableControls = function() {
            return i.getDisableControls();
        }, h.isLive = function() {
            return i.isLive();
        }, h.subscribe = function(a, b) {
            return "bufferingStart" === a ? i.onBufferingStart(b) : "bufferingEnd" === a ? i.onBufferingEnd(b) : i.subscribe(a, b).unsubscribe;
        }, h.setPlaybackRate = function(a) {
            i.setPlaybackRate(a);
        }, h.setMaxBufferSize = function(a) {
            i.setMaxBufferSize(a);
        }, h.getMaxBufferSize = function() {
            return i.getMaxBufferSize();
        }, h.prepare = function(a, b, c) {
            i.prepare(a, b, c);
        }, h.enableTextTrack = function(a) {
            i.enableTextTrack(a);
        }, h.unload = function() {
            return i.unload();
        };
    };
    b.l = e;
}), define("networking/networkRequest.js", [ "exports", "module", "../utils/commonUtils.js" ], function(a, b, c) {
    "use strict";
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var d = c.D;
    var e = function f(a, b, c) {
        function e() {
            l.xf = new XMLHttpRequest(), l.xf.timeout = 1e4, l.xf.ontimeout = h, l.xf.onload = g, 
            l.xf.onerror = h;
        }
        function g() {
            m.log("Finished request URL=" + j() + ", with status=" + l.xf.status), m.log("Response data=" + l.xf.responseText), 
            l.Aa("finished", l);
        }
        function h() {
            m.log("Failed to execute request URL=" + j()), l.Aa("finished", l);
        }
        function i() {
            for (var a in l.yf) l.xf.setRequestHeader(a, l.yf[a]);
        }
        function j() {
            var a = c;
            var b = 0;
            for (var d in l.zf) a += 0 === b ? "?" : "&", a += d + "=" + encodeURIComponent(l.zf[d]), 
            b++;
            return a;
        }
        function k(a) {
            m.log("Executing request URL=" + j()), l.xf.open(b, j(), !0), i(), l.xf.send(a);
        }
        _classCallCheck(this, f);
        var l = this;
        var m = a.Tb("NetworkRequest");
        l.zf = {}, l.yf = {}, l.url = c, l.Af = !1, d(l, a.ob()), e(), l.xb = function() {
            var a = void 0 === arguments[0] ? null : arguments[0];
            return l.Af ? void m.log("Cant execute request more than once! URL=" + j()) : (l.Af = !0, 
            void k(a));
        }, l.setRequestHeader = function(a, b) {
            l.yf[a] = b;
        }, l.vb = function(a, b) {
            l.zf[a] = b;
        }, l.Bf = function() {
            return j();
        }, l.Cf = function() {
            return l.zf;
        }, l.Df = function() {
            return l.yf;
        }, l.Ef = function() {
            return l.xf.response;
        }, l.ub = function() {
            return l.xf.responseText;
        }, l.tb = function() {
            return l.xf.status;
        };
    };
    b.l = e;
}), define("networking/networkRequestProxy.js", [ "exports", "module", "../utils/commonUtils.js" ], function(a, b, c) {
    "use strict";
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var d = c.D;
    var e = c.W;
    var f = function g(a, b, c) {
        function f() {
            a.ya && a.ya.handlePostExecution && (l.log("Found handlePostExecution handler. Executing ..."), 
            a.ya.handlePostExecution(c.Bf(), c.tb(), c.Ef(), c.ub()), l.log("Done executing handlePostExecution handler"));
        }
        function h(a) {
            f(), k.Aa("finished", k);
        }
        function i() {
            if (a.ya && a.ya.handlePreExecution) {
                l.log("Found handlePreExecution handler. Executing ...");
                var b = e(c.Cf());
                a.ya.handlePreExecution(c.Bf(), c.Cf(), c.Df()), l.log("Done executing handlePreExecution handler"), 
                j(b, c.Cf());
            }
        }
        function j(a, b) {
            for (var c in a) a[c] !== b[c] && (l.info("An http parameter changed inside the networkRequest preExecutionHandler."), 
            l.info("The original httpParam, " + c + " = " + a[c]), l.info("The new httpParam, " + c + " = " + b[c]));
        }
        _classCallCheck(this, g), d(this, b.ob());
        var k = this;
        var l = b.Tb("NetworkRequestProxy");
        c.subscribe("finished", h), k.xb = function() {
            var a = void 0 === arguments[0] ? null : arguments[0];
            i(), c.xb(a);
        }, k.setRequestHeader = function(a, b) {
            c.setRequestHeader(a, b);
        }, k.vb = function(a, b) {
            c.vb(a, b);
        }, k.Bf = function() {
            return k.url;
        }, k.Cf = function() {
            return c.Cf();
        }, k.Df = function() {
            return c.Df();
        }, k.Ef = function() {
            return c.Ef();
        }, k.ub = function() {
            return c.ub();
        }, k.tb = function() {
            return c.tb();
        };
    };
    b.l = f;
}), define("modules/network/networkModule.js", [ "exports", "module" ], function(a, b) {
    "use strict";
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var c = function d(a) {
        _classCallCheck(this, d);
        var b = this;
        b.setNetworkHandler = function(b) {
            a.ya = b;
        };
    };
    b.l = c;
}), define("utils/appLock.js", [ "exports", "module" ], function(a, b) {
    "use strict";
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var c = function d(a, b) {
        function c() {
            n.log("Creating new LOCK record ..."), j = window.URL.createObjectURL(new Blob([ 1 ])), 
            b.Va(m, j), n.log("Created LOCK_URL=" + j);
            var a = b.Ua(m) === j;
            return a ? (n.log("Lock was successfully obtained!"), l = !0, a) : (n.log("Failed to verify written value! Failed to acquire lock!"), 
            a);
        }
        function e(a, b) {
            var d = k.tb();
            k = null, 200 === d ? (n.log("Response status is 200, URL is in use! Failed to acquire lock"), 
            b()) : c() ? a() : b();
        }
        function f(b, c) {
            k = a.wb("GET", j), k.subscribe("finished", function() {
                e(b, c);
            }), k.xb();
        }
        function g() {
            return null != k;
        }
        function h(a, d) {
            j = b.Ua(m), n.log("LOCK_URL=" + j), j ? f(a, d) : c() ? a() : d();
        }
        _classCallCheck(this, d);
        var i = this;
        var j = null;
        var k = null;
        var l = !1;
        var m = "vstb__lock";
        var n = a.Tb("AppLock");
        i.Fe = function() {
            return new Promise(function(a, b) {
                g() ? (n.log("Another network request is in progress. Skipping ..."), b()) : l ? (n.log("Lock is already acquired!"), 
                a()) : h(a, b);
            });
        };
    };
    b.l = c;
}), define("utils/mediaElementEventsProxy.js", [ "exports", "module", "./commonUtils.js" ], function(a, b, c) {
    "use strict";
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var d = c.D;
    var e = function f(a, b, c) {
        function e() {
            j() || (m ? (k.Aa("playbackstart"), m = !1) : k.Aa("playbackresume"), b.removeEventListener("playing", e));
        }
        function g() {
            j() || (k.Aa("playbackpause"), b.addEventListener("playing", e));
        }
        function h() {
            k.Aa("playbackseeking");
        }
        function i() {
            c.getPlaybackRate() < 0 || b.seeking || k.Aa("playbackprogress");
        }
        function j() {
            return 1 !== c.getPlaybackRate() ? (l = !0, !0) : l ? (l = !1, !0) : !1;
        }
        _classCallCheck(this, f);
        var k = this;
        var l = !1;
        var m = !0;
        d(k, a.ob()), b.addEventListener("playing", e), b.addEventListener("pause", g), 
        b.addEventListener("seeking", h), b.addEventListener("timeupdate", i), c.subscribe("unloaded", function() {
            m = !0, b.addEventListener("playing", e);
        });
    };
    b.l = e;
}), define("webVttAdaptor.js", [ "exports", "module", "./utils/commonUtils.js" ], function(a, b, c) {
    "use strict";
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var d = c.t;
    var e = function f(a) {
        _classCallCheck(this, f);
        var b = this;
        var c = a.Tb("WebVttAdaptor");
        b.ye = function(a) {
            var b = [];
            var e = [];
            a.closedCaptioning && a.closedCaptioning.webvtt && (b = a.closedCaptioning.webvtt.subtitles.tracks), 
            c.log("Found " + b.length + " webvtt tracks");
            for (var f = 0; f < b.length; f++) e.push({
                url: d.Z(b[f].uri, "vtt"),
                lang: b[f].lang
            });
            return c.debug("WebVTT Tracks: ", e), e;
        };
    };
    b.l = e;
}), define("modules/runtimeInfo/debugWindow.js", [ "exports", "module", "../../utils/commonUtils.js" ], function(a, b, c) {
    "use strict";
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var d = c.t;
    var e = function f(a) {
        function b() {
            window.addEventListener("resize", i), document.addEventListener("scroll", i);
        }
        function c() {
            var a = {
                position: "absolute",
                background: "black",
                color: "white",
                fontSize: "12px",
                textAlign: "left",
                lineHeight: "1.5",
                fontWeight: "300",
                fontFamily: "sans-serif",
                textTransform: "none",
                padding: "5px",
                zIndex: "2147483647",
                display: "none",
                opacity: .5,
                overflow: "scroll",
                boxSizing: "border-box",
                width: "250px"
            };
            p = document.createElement("div"), d.$(p, a), o.appendChild(p);
        }
        function e() {
            var a = {
                height: "auto",
                paddingTop: "2px",
                paddingBottom: "0px",
                wordWrap: "break-word"
            };
            var b = document.createElement("div");
            return d.$(b, a), b;
        }
        function g() {
            var a = document.createElement("span");
            return a;
        }
        function h(a, b) {
            return b && b.appendChild ? a.appendChild(b) : a.innerHTML = b, a;
        }
        function i() {
            var b = a.getBoundingClientRect();
            var c = {
                top: b.top + window.scrollY + "px",
                left: b.left + window.scrollX + "px",
                height: a.clientHeight + "px"
            };
            d.$(p, c);
        }
        function j() {
            i(), p.style.display = "block";
        }
        function k() {
            p.style.display = "none";
        }
        function l(a, b) {
            b["Ke"] && (a.addEventListener("click", b["Ke"]), a.style.cursor = "pointer");
        }
        function m(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = h(e(), b[c].value);
                d.style.textAlign = "center", l(d, b[c]), a.appendChild(d);
            }
        }
        _classCallCheck(this, f);
        var n = this;
        var o = document.getElementsByTagName("body")[0];
        var p;
        var q = {};
        b(), c(), n.Je = function(a, b) {
            var c = q[a];
            c.innerHTML = "";
            var d = h(g(), a + " - ");
            c.appendChild(d), b instanceof Array ? m(c, b) : c.appendChild(h(g(), b));
        }, n.Ie = function(a, b) {
            q[a] || (q[a] = e(), p.appendChild(q[a])), n.Je(a, b);
        }, n.isOpen = function() {
            return "block" === p.style.display;
        }, n.toggle = function() {
            n.isOpen() ? k() : j();
        };
    };
    b.l = e;
}), define("factory.js", [ "exports", "module", "./utils/commonUtils.js", "./configuration.js", "./pubSub.js", "./modules/eventReporting/event.js", "./modules/eventReporting/playbackSessionReporter.js", "./modules/eventReporting/progressReporter.js", "./modules/eventReporting/licenseAcquiredEvent.js", "./modules/eventReporting/playbackPrepareEvent.js", "./modules/eventReporting/vstbStartEvent.js", "./modules/eventReporting/playbackStartEvent.js", "./modules/eventReporting/playbackProgressEvent.js", "./modules/eventReporting/playbackPauseEvent.js", "./modules/eventReporting/playbackResumeEvent.js", "./modules/eventReporting/playbackTimeEvent.js", "./modules/eventReporting/errorEvent.js", "./modules/eventReporting/customEvent.js", "./networking/loginAction.js", "./networking/rightsAction.js", "./networking/whereAmIAction.js", "./networking/reportAction.js", "./logger.js", "./modules/eventReporting/eventLogger.js", "./modules/eventReporting/eventStorage.js", "./modules/eventReporting/eventDispatcher.js", "./utils/ioProvider.js", "./modules/eventReporting/eventDispatcherState.js", "./player/manifest.js", "./player/licenseAcquirer.js", "./utils/rightsDecryptor.js", "./rightsAcquirer.js", "./loginProcess.js", "./player/playerWrapper.js", "./internalPlayer.js", "./modules/runtimeInfo/runtimeInfo.js", "./contentPreparationProcess.js", "./modules/deviceId.js", "./modules/shortcuts/shortcuts.js", "./modules/bookmarks/bookmarks.js", "./prePlaybackValidator.js", "./player.js", "../lib/temp-shaka-player/shaka-player.compiled.js", "./networking/networkRequest.js", "./networking/networkRequestProxy.js", "./modules/network/networkModule.js", "./utils/appLock.js", "./utils/mediaElementEventsProxy.js", "./webVttAdaptor.js", "./modules/runtimeInfo/debugWindow.js" ], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var _prototypeProperties = function(a, b, c) {
        b && Object.defineProperties(a, b), c && Object.defineProperties(a.prototype, c);
    };
    var _classCallCheck = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    };
    var Y = c.H;
    var Z = _interopRequire(d);
    var $ = _interopRequire(e);
    var _ = _interopRequire(f);
    var aa = _interopRequire(g);
    var ba = _interopRequire(h);
    var ca = _interopRequire(i);
    var da = _interopRequire(j);
    var ea = _interopRequire(k);
    var fa = _interopRequire(l);
    var ga = _interopRequire(m);
    var ha = _interopRequire(n);
    var ia = _interopRequire(o);
    var ja = _interopRequire(p);
    var ka = _interopRequire(q);
    var la = _interopRequire(r);
    var ma = _interopRequire(s);
    var na = _interopRequire(t);
    var oa = _interopRequire(u);
    var pa = _interopRequire(v);
    var qa = _interopRequire(w);
    var ra = _interopRequire(x);
    var sa = _interopRequire(y);
    var ta = _interopRequire(z);
    var ua = _interopRequire(A);
    var va = _interopRequire(B);
    var wa = _interopRequire(C);
    var xa = _interopRequire(D);
    var ya = _interopRequire(E);
    var za = _interopRequire(F);
    var Aa = _interopRequire(G);
    var Ba = _interopRequire(H);
    var Ca = _interopRequire(I);
    var Da = _interopRequire(J);
    var Ea = _interopRequire(K);
    var Fa = _interopRequire(L);
    var Ga = _interopRequire(M);
    var Ha = _interopRequire(N);
    var Ia = _interopRequire(O);
    var Ja = _interopRequire(P);
    var shaka = _interopRequire(Q);
    var Ka = _interopRequire(R);
    var La = _interopRequire(S);
    var Ma = _interopRequire(T);
    var Na = _interopRequire(U);
    var Oa = _interopRequire(V);
    var Pa = _interopRequire(W);
    var Qa = _interopRequire(X);
    var Ra = function() {
        function a() {
            _classCallCheck(this, a);
        }
        return _prototypeProperties(a, {
            Ff: {
                get: function() {
                    return new a();
                },
                v: !0
            }
        }, {
            ob: {
                value: function() {
                    return new $(this);
                },
                writable: !0,
                v: !0
            },
            ge: {
                value: function() {
                    return shaka;
                },
                writable: !0,
                v: !0
            },
            createEvent: {
                value: function(a, b, c, d) {
                    var e = new _(this, this.Gf(), a, b, c);
                    var f;
                    switch (b) {
                      case 25:
                        f = new ea(this, e, c);
                        break;

                      case 14:
                        f = new ca(this, e, c, d);
                        break;

                      case 29:
                        f = new da(this, e, c, d);
                        break;

                      case 5:
                        f = new fa(this, e, c, d);
                        break;

                      case 6:
                        f = new ga(this, e, c, d);
                        break;

                      case 7:
                        f = new ha(this, e, c, d);
                        break;

                      case 8:
                        f = new ia(this, e, c, d);
                        break;

                      case 22:
                        f = new ja(this, e, c, d);
                        break;

                      case 23:
                        f = new ka(this, e, c, d);
                        break;

                      default:
                        f = new la(this, e, c);
                    }
                    return f;
                },
                writable: !0,
                v: !0
            },
            Tb: {
                value: function(a) {
                    return new qa(this, a);
                },
                writable: !0,
                v: !0
            },
            Gf: {
                value: function() {
                    return new ua(this);
                },
                writable: !0,
                v: !0
            },
            Sb: {
                value: function() {
                    return new sa(this.Gf(), this);
                },
                writable: !0,
                v: !0
            },
            Rb: {
                value: function(a) {
                    return new ta(this, a, this.Wa());
                },
                writable: !0,
                v: !0
            },
            mc: {
                value: function() {
                    return new va(this);
                },
                writable: !0,
                v: !0
            },
            lb: {
                value: function() {
                    return ra.za(this, this.Wa());
                },
                writable: !0,
                v: !0
            },
            se: {
                value: function(a, b, c) {
                    return new aa(this, a, b, c);
                },
                writable: !0,
                v: !0
            },
            nb: {
                value: function(a, b, c, d) {
                    return new ba(this, a, b, c, d);
                },
                writable: !0,
                v: !0
            },
            ze: {
                value: function(a, b) {
                    return new Ba(this, a, b);
                },
                writable: !0,
                v: !0
            },
            ve: {
                value: function(a, b, c) {
                    return new Ga(a, b, c);
                },
                writable: !0,
                v: !0
            },
            we: {
                value: function(a, b, c) {
                    return new Ha(this, this.Gf(), a, b, c);
                },
                writable: !0,
                v: !0
            },
            ne: {
                value: function(a, b) {
                    return new wa(this, a, b);
                },
                writable: !0,
                v: !0
            },
            Ae: {
                value: function() {
                    return new Ia(this);
                },
                writable: !0,
                v: !0
            },
            oe: {
                value: function() {
                    return new xa(this, this.Wa());
                },
                writable: !0,
                v: !0
            },
            me: {
                value: function() {
                    return new ma(this, this.Wa());
                },
                writable: !0,
                v: !0
            },
            je: {
                value: function(a) {
                    return new na(this, this.Wa(), a);
                },
                writable: !0,
                v: !0
            },
            Qb: {
                value: function() {
                    return new oa(this, this.Wa());
                },
                writable: !0,
                v: !0
            },
            kc: {
                value: function(a) {
                    return new pa(this, this.Wa(), a);
                },
                writable: !0,
                v: !0
            },
            Me: {
                value: function() {
                    return new za(this, this.Wa());
                },
                writable: !0,
                v: !0
            },
            Ne: {
                value: function() {
                    return new Aa(this, this.Wa());
                },
                writable: !0,
                v: !0
            },
            ke: {
                value: function() {
                    return ya;
                },
                writable: !0,
                v: !0
            },
            wf: {
                value: function(a, b, c, d) {
                    return new Ca(this, this.Wa(), a, b, c, d);
                },
                writable: !0,
                v: !0
            },
            te: {
                value: function(a, b, c) {
                    return new Da(this, this.Wa(), a, b, c);
                },
                writable: !0,
                v: !0
            },
            Be: {
                value: function() {
                    return new Ea(this, this.Wa());
                },
                writable: !0,
                v: !0
            },
            ca: {
                value: function() {
                    return new Fa(this, this.Gf());
                },
                writable: !0,
                v: !0
            },
            Ab: {
                value: function(a) {
                    return Y(window)();
                },
                writable: !0,
                v: !0
            },
            createPlayer: {
                value: function(a, b, c, d, e) {
                    return new Ja(this, a, b, c, d, e);
                },
                writable: !0,
                v: !0
            },
            mb: {
                value: function(a, b) {
                    return new Oa(this, a, b);
                },
                writable: !0,
                v: !0
            },
            wb: {
                value: function(a, b) {
                    return new La(this.Wa(), this, new Ka(this, a, b));
                },
                writable: !0,
                v: !0
            },
            xe: {
                value: function() {
                    return new Ma(this.Wa());
                },
                writable: !0,
                v: !0
            },
            De: {
                value: function() {
                    return new Pa(this);
                },
                writable: !0,
                v: !0
            },
            Le: {
                value: function(a) {
                    return new Qa(a);
                },
                writable: !0,
                v: !0
            },
            Wa: {
                value: function() {
                    return Z.za(this);
                },
                writable: !0,
                v: !0
            },
            Ce: {
                value: function() {
                    return new Na(this, this.Gf());
                },
                writable: !0,
                v: !0
            }
        }), a;
    }();
    b.l = Ra;
}), define("vstb", [ "exports", "module", "./factory.js", "./player.js" ], function(a, b, c, d) {
    "use strict";
    var _interopRequire = function(a) {
        return a && a.__esModule ? a["default"] : a;
    };
    var e = _interopRequire(c);
    var f = _interopRequire(d);
    var g = {};
    g.createPlayer = function(a, b, c, d, g) {
        var h = e.Ff;
        return new f(h, a, b, c, d, g);
    }, b.l = g;
});
(function(){var g={};
(function(window){var l,aa=this;function n(a,b){var c=a.split("."),d=aa;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}function q(a,b){function c(){}c.prototype=b.prototype;a.Ob=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Mb=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};/*

 Copyright 2015 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function ba(a,b){this.id=a;this.lang=b||"unknown";this.enabled=this.active=!1}n("shaka.player.TextTrack.compare",function(a,b){return a.lang<b.lang?-1:a.lang>b.lang?1:0});function ca(){this.minBandwidth=this.maxBandwidth=this.maxWidth=this.maxHeight=null}ca.prototype.clone=function(){var a=new ca;a.maxHeight=this.maxHeight;a.maxWidth=this.maxWidth;a.maxBandwidth=this.maxBandwidth;a.minBandwidth=this.minBandwidth;return a};function da(a,b,c,d){this.id=a;this.bandwidth=b||0;this.width=c||0;this.height=d||0;this.active=!1}function ea(a,b){var c=a.width*a.height,d=b.width*b.height;return c<d?-1:c>d?1:a.bandwidth<b.bandwidth?-1:a.bandwidth>b.bandwidth?1:0}n("shaka.player.VideoTrack.compare",ea);function fa(a,b,c){this.id=a;this.bandwidth=b||0;this.lang=c||"unknown";this.active=!1}n("shaka.player.AudioTrack.compare",function(a,b){return a.lang<b.lang?-1:a.lang>b.lang?1:a.bandwidth<b.bandwidth?-1:a.bandwidth>b.bandwidth?1:0});function r(){var a,b,c=new Promise(function(c,e){a=c;b=e});c.resolve=a;c.reject=b;c.destroy=r.prototype.destroy;return c}r.prototype.destroy=function(){this.catch(function(){});var a=Error("Destroyed!");a.type="destroy";this.reject(a)};function w(a,b){return b.bind(a)};function ga(a){return Object.keys(a).map(function(b){return a[b]})}function ha(a,b){var c=ia(a,b,"number");if(null==c)return null;if(isNaN(c)||c==Number.NEGATIVE_INFINITY||c==Number.POSITIVE_INFINITY)throw new RangeError("'"+b+"' must be finite.");if(0>c)throw new RangeError("'"+b+"' must be >= 0");return c}function ja(a,b){return ia(a,b,"string")}function ia(a,b,c){a=a[b];if(null==a)return null;if(typeof a!=c)throw new TypeError("'"+b+"' must be a "+c+".");return a}
function ka(a,b,c){a=a[b];if(null==a)return null;if(!(a instanceof c))throw new TypeError("'"+b+"' must be an instance of "+c.name+".");return a};function la(a){return a.split("").reduce(function(a,c,d){return a+(d&&0==d%4?" "+c:c)})};function na(a,b){for(var c={},d=0;d<a.length;++d){var e=b?b(a[d]):a[d].toString();c[e]=a[d]}var d=[],f;for(f in c)d.push(c[f]);return d};var oa={"output-restricted":"The required output protection is not available.","output-not-allowed":"The required output protection is not available.",expired:"The decryption key has expired.","internal-error":"The key system has encountered an unspecified error."};function pa(a){return String.fromCharCode.apply(null,a)}n("shaka.util.Uint8ArrayUtils.toString",pa);function qa(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;++c)b[c]=a.charCodeAt(c);return b}n("shaka.util.Uint8ArrayUtils.fromString",qa);function ra(a,b){var c=void 0==b?!0:b,d=window.btoa(pa(a)).replace(/\+/g,"-").replace(/\//g,"_");return c?d:d.replace(/=*$/,"")}n("shaka.util.Uint8ArrayUtils.toBase64",ra);function sa(a){return qa(window.atob(a.replace(/-/g,"+").replace(/_/g,"/")))}
n("shaka.util.Uint8ArrayUtils.fromBase64",sa);n("shaka.util.Uint8ArrayUtils.fromHex",function(a){for(var b=new Uint8Array(a.length/2),c=0;c<a.length;c+=2)b[c/2]=window.parseInt(a.substr(c,2),16);return b});function ta(a){for(var b="",c=0;c<a.length;++c){var d=a[c].toString(16);1==d.length&&(d="0"+d);b+=d}return b}n("shaka.util.Uint8ArrayUtils.toHex",ta);function ua(a,b){if(!a&&!b)return!0;if(!a||!b||a.length!=b.length)return!1;for(var c=0;c<a.length;++c)if(a[c]!=b[c])return!1;return!0};function va(a){this.b=a;this.a=new wa(a);xa||(xa=[new Uint8Array([255]),new Uint8Array([127,255]),new Uint8Array([63,255,255]),new Uint8Array([31,255,255,255]),new Uint8Array([15,255,255,255,255]),new Uint8Array([7,255,255,255,255,255]),new Uint8Array([3,255,255,255,255,255,255]),new Uint8Array([1,255,255,255,255,255,255,255])])}var xa;
function x(a){var b;b=ya(a);if(7<b.length)throw new RangeError("EbmlParser: EBML ID must be at most 7 bytes.");for(var c=0,d=0;d<b.length;d++)c=256*c+b[d];b=c;c=ya(a);a:{for(d=0;d<xa.length;d++)if(ua(c,xa[d])){d=!0;break a}d=!1}if(d)throw new RangeError("EbmlParser: Element cannot contain dynamically sized data.");if(8==c.length&&c[1]&224)throw new RangeError("EbmlParser: Variable sized integer value must be at most 53 bits.");for(var d=c[0]&(1<<8-c.length)-1,e=1;e<c.length;e++)d=256*d+c[e];c=d;c=
a.a.a+c<=a.b.byteLength?c:a.b.byteLength-a.a.a;d=new DataView(a.b.buffer,a.b.byteOffset+a.a.a,c);z(a.a,c);return new za(b,d)}function ya(a){var b=Aa(a.a),c;for(c=1;8>=c&&!(b&1<<8-c);c++);if(8<c)throw new RangeError("EbmlParser: Variable sized integer must fit within 8 bytes.");var d=new Uint8Array(c);d[0]=b;for(b=1;b<c;b++)d[b]=Aa(a.a);return d}function za(a,b){this.id=a;this.a=b}
function Ba(a){if(8<a.a.byteLength)throw new RangeError("EbmlElement: Unsigned integer has too many bytes.");if(8==a.a.byteLength&&a.a.getUint8(0)&224)throw new RangeError("EbmlParser: Unsigned integer must be at most 53 bits.");for(var b=0,c=0;c<a.a.byteLength;c++)var d=a.a.getUint8(c),b=256*b+d;return b};function A(){this.a={}}A.prototype.push=function(a,b){this.a.hasOwnProperty(a)?this.a[a].push(b):this.a[a]=[b]};A.prototype.get=function(a){return(a=this.a[a])?a.slice():null};function Ca(a){var b=[],c;for(c in a.a)b.push.apply(b,a.a[c]);return b}function Da(a,b,c){if(a=a.a[b])for(b=0;b<a.length;++b)a[b]==c&&(a.splice(b,1),--b)}function Ea(a){var b=[],c;for(c in a.a)b.push(c);return b};function Ga(){return Date.now()+Ha}var Ha=0;function Ia(){};function Ja(){this.j=this.a="";this.l=!1;this.i=this.h=null;this.o=this.g=!1;this.v=this.f="";this.c=null;this.b=[]}
function Ka(a){var b=new Ja;if(!a)return b;var c=ja(a,"keySystem");if(null!=c)b.a=c;else throw Error("'keySystem' cannot be null.");var d=ja(a,"licenseServerUrl");if(null!=d)b.j=d;else if(c)throw Error("For encrypted streaming content, 'licenseServerUrl' cannot be null or empty.");c=ia(a,"withCredentials","boolean");null!=c&&(b.l=c);c=ka(a,"licensePostProcessor",Function);null!=c&&(b.h=c);c=ka(a,"licensePreProcessor",Function);null!=c&&(b.i=c);c=ia(a,"distinctiveIdentifierRequired","boolean");null!=
c&&(b.g=c);c=ia(a,"persistentStateRequired","boolean");null!=c&&(b.o=c);c=ja(a,"audioRobustness");null!=c&&(b.f=c);c=ja(a,"videoRobustness");null!=c&&(b.v=c);c=ka(a,"serverCertificate",Uint8Array);null!=c&&(b.c=c);if(c=ka(a,"initData",Object)){a=ka(c,"initData",Uint8Array);if(null==a)throw Error("'initData.initData' cannot be null.");c=ja(c,"initDataType");if(null==c)throw Error("'initData.initDataType' cannot be null.");b.b.push({initData:new Uint8Array(a.buffer),initDataType:c})}return b}
function La(a,b){var c=a.b.concat(b.map(function(a){return{initData:new Uint8Array(a.initData.buffer),initDataType:a.initDataType}}));a.b=na(c,function(a){return Array.prototype.join.apply(a.initData)+","+a.initDataType})};function Ma(a,b,c,d,e,f,g,h,k,m,p){this.g=a;this.j=b;this.o=c;this.a=[];this.h=e||null;this.i=f||null;this.f=g==Na;this.v=h==Oa;this.c=k||"";this.l=m||"";this.b=p||null;d&&this.a.push(d)}n("shaka.player.DrmSchemeInfo",Ma);var Na=1;Ma.DistinctiveIdentifier={OPTIONAL:0,REQUIRED:Na};var Oa=1;Ma.PersistentState={OPTIONAL:0,REQUIRED:Oa};Ma.createUnencrypted=function(){return new Ma("","",!1,null)};function Pa(a){this.c=Math.exp(Math.log(.5)/a);this.a=this.b=0}Pa.prototype.sample=function(a,b){var c=Math.pow(this.c,a);this.b=b*(1-c)+c*this.b;this.a+=a};function Qa(a){return a.b/(1-Math.pow(a.c,a.a))};function B(a){var b=new CustomEvent(a.type,{detail:a.detail,bubbles:!!a.bubbles}),c;for(c in a)c in b||(b[c]=a[c]);return b}function C(a){return new CustomEvent("error",{detail:a,bubbles:!0})};function Ra(a,b,c){Sa(b);Sa(c);return c==b||a>=Ta&&c==b.split("-")[0]||a>=Ua&&c.split("-")[0]==b.split("-")[0]?!0:!1}var Ta=1,Ua=2;function Sa(a){a=a.toLowerCase().split("-");var b=Va[a[0]];b&&(a[0]=b);return a.join("-")}
var Va={aar:"aa",abk:"ab",afr:"af",aka:"ak",alb:"sq",amh:"am",ara:"ar",arg:"an",arm:"hy",asm:"as",ava:"av",ave:"ae",aym:"ay",aze:"az",bak:"ba",bam:"bm",baq:"eu",bel:"be",ben:"bn",bih:"bh",bis:"bi",bod:"bo",bos:"bs",bre:"br",bul:"bg",bur:"my",cat:"ca",ces:"cs",cha:"ch",che:"ce",chi:"zh",chu:"cu",chv:"cv",cor:"kw",cos:"co",cre:"cr",cym:"cy",cze:"cs",dan:"da",deu:"de",div:"dv",dut:"nl",dzo:"dz",ell:"el",eng:"en",epo:"eo",est:"et",eus:"eu",ewe:"ee",fao:"fo",fas:"fa",fij:"fj",fin:"fi",fra:"fr",fre:"fr",
fry:"fy",ful:"ff",geo:"ka",ger:"de",gla:"gd",gle:"ga",glg:"gl",glv:"gv",gre:"el",grn:"gn",guj:"gu",hat:"ht",hau:"ha",heb:"he",her:"hz",hin:"hi",hmo:"ho",hrv:"hr",hun:"hu",hye:"hy",ibo:"ig",ice:"is",ido:"io",iii:"ii",iku:"iu",ile:"ie",ina:"ia",ind:"id",ipk:"ik",isl:"is",ita:"it",jav:"jv",jpn:"ja",kal:"kl",kan:"kn",kas:"ks",kat:"ka",kau:"kr",kaz:"kk",khm:"km",kik:"ki",kin:"rw",kir:"ky",kom:"kv",kon:"kg",kor:"ko",kua:"kj",kur:"ku",lao:"lo",lat:"la",lav:"lv",lim:"li",lin:"ln",lit:"lt",ltz:"lb",lub:"lu",
lug:"lg",mac:"mk",mah:"mh",mal:"ml",mao:"mi",mar:"mr",may:"ms",mkd:"mk",mlg:"mg",mlt:"mt",mon:"mn",mri:"mi",msa:"ms",mya:"my",nau:"na",nav:"nv",nbl:"nr",nde:"nd",ndo:"ng",nep:"ne",nld:"nl",nno:"nn",nob:"nb",nor:"no",nya:"ny",oci:"oc",oji:"oj",ori:"or",orm:"om",oss:"os",pan:"pa",per:"fa",pli:"pi",pol:"pl",por:"pt",pus:"ps",que:"qu",roh:"rm",ron:"ro",rum:"ro",run:"rn",rus:"ru",sag:"sg",san:"sa",sin:"si",slk:"sk",slo:"sk",slv:"sl",sme:"se",smo:"sm",sna:"sn",snd:"sd",som:"so",sot:"st",spa:"es",sqi:"sq",
srd:"sc",srp:"sr",ssw:"ss",sun:"su",swa:"sw",swe:"sv",tah:"ty",tam:"ta",tat:"tt",tel:"te",tgk:"tg",tgl:"tl",tha:"th",tib:"bo",tir:"ti",ton:"to",tsn:"tn",tso:"ts",tuk:"tk",tur:"tr",twi:"tw",uig:"ug",ukr:"uk",urd:"ur",uzb:"uz",ven:"ve",vie:"vi",vol:"vo",wel:"cy",wln:"wa",wol:"wo",xho:"xh",yid:"yi",yor:"yo",zha:"za",zho:"zh",zul:"zu"};function D(a){this.xa=new A;this.v=a}n("shaka.util.FakeEventTarget",D);D.prototype.addEventListener=function(a,b,c){c||this.xa.push(a,b)};D.prototype.removeEventListener=function(a,b,c){c||Da(this.xa,a,b)};D.prototype.dispatchEvent=function(a){delete a.srcElement;delete a.target;delete a.currentTarget;Object.defineProperties(a,{srcElement:{value:null,writable:!0},target:{value:this,writable:!0},currentTarget:{value:null,writable:!0}});return Wa(this,a)};
function Wa(a,b){b.currentTarget=a;for(var c=a.xa.get(b.type)||[],d=0;d<c.length;++d){var e=c[d];try{e.handleEvent?e.handleEvent(b):e.call(a,b)}catch(f){}}a.v&&b.bubbles&&Wa(a.v,b);return b.defaultPrevented};function Xa(){D.call(this,null);this.a=new Pa(3);this.c=new Pa(10);this.b=0}q(Xa,D);n("shaka.util.EWMABandwidthEstimator",Xa);Xa.prototype.sample=function(a,b){if(!(65536>b)){a=Math.max(a,50);var c=8E3*b/a,d=a/1E3;this.a.sample(d,c);this.c.sample(d,c);this.dispatchEvent(B({type:"bandwidth"}));this.b=Date.now()}};Xa.prototype.getBandwidth=function(){return.5>this.a.a?5E5:Math.min(Qa(this.a),Qa(this.c))};Xa.prototype.getDataAge=function(){return(Date.now()-this.b)/1E3};
Xa.prototype.supportsCaching=function(){return!1};function wa(a){var b=Ya;this.b=a;this.c=b==Za;this.a=0}var Ya=0,Za=1;function $a(a){return a.a<a.b.byteLength}function Aa(a){var b=a.b.getUint8(a.a);a.a+=1;return b}function E(a){var b=a.b.getUint32(a.a,a.c);a.a+=4;return b}function ab(a){var b,c;a.c?(b=a.b.getUint32(a.a,!0),c=a.b.getUint32(a.a+4,!0)):(c=a.b.getUint32(a.a,!1),b=a.b.getUint32(a.a+4,!1));if(2097151<c)throw new RangeError("DataViewReader: Overflow reading 64-bit value.");a.a+=8;return c*Math.pow(2,32)+b}
function bb(a){if(a.a+16>a.b.byteLength)throw new RangeError("DataViewReader: Read past end of DataView.");var b=new Uint8Array(a.b.buffer,a.a,16);a.a+=16;return b}function z(a,b){if(a.a+b>a.b.byteLength)throw new RangeError("DataViewReader: Skip past end of DataView.");a.a+=b};function cb(){this.g=new r;this.f=!1;this.a=null;this.b=[];this.c=null}function db(a,b){if(a.f)throw Error("Cannot append to a running task!");a.b.push(b)}cb.prototype.start=function(){if(this.f)throw Error("Task already started!");this.f=!0;this.b.unshift(function(){});eb(this,void 0)};cb.prototype.end=function(){this.b.splice(1)};
function eb(a,b){var c=a.b[0](b),d;c?(d=c[0],a.c=c[1]):(d=Promise.resolve(),a.c=null);d.then(w(a,function(a){this.a?(this.b=[],this.c=null,fb(this)):(this.b.shift(),this.b.length?eb(this,a):(this.g.resolve(a),this.c=null))})).catch(w(a,function(a){this.b=[];this.c=null;this.a?fb(this):this.g.reject(a)}))}function fb(a){var b=Error("Task aborted.");b.type="aborted";a.g.reject(b);window.setTimeout(function(){this.a.resolve();this.a=null}.bind(a),5)};function gb(){this.a=new A}gb.prototype.destroy=function(){hb(this);this.a=null};function F(a,b,c,d){b=new ib(b,c,d);a.a.push(c,b)}gb.prototype.sa=function(a,b){for(var c=this.a.get(b)||[],d=0;d<c.length;++d){var e=c[d];e.target==a&&(e.sa(),Da(this.a,b,e))}};function hb(a){for(var b=Ca(a.a),c=0;c<b.length;++c)b[c].sa();a.a.a={}}function ib(a,b,c){this.target=a;this.type=b;this.a=c;this.target.addEventListener(b,c,!1)}
ib.prototype.sa=function(){this.target&&(this.target.removeEventListener(this.type,this.a,!1),this.a=this.target=null)};function jb(a,b,c){MediaSource.isTypeSupported(b);b=a.addSourceBuffer(b);this.j=a;this.c=b;this.v=c;this.h=new gb;this.b=[];this.o=0;this.f=this.a=null;this.l=0;F(this.h,this.c,"updateend",this.w.bind(this))}var kb=1/60;jb.prototype.destroy=function(){lb(this).catch(function(){});this.f&&this.f.destroy();this.b=this.a=this.f=null;this.h.destroy();this.j=this.c=this.h=null};
function mb(a,b){for(var c=a.c.buffered,d=0;d<c.length;++d){var e=c.start(d)-kb,f=c.end(d)+kb;if(b>=e&&b<=f)return c.end(d)-b}return 0}
function nb(a,b,c,d){if(a.a)return a=Error("Cannot fetch ("+a.i+"): previous operation not complete."),a.type="stream",Promise.reject(a);a.a=new cb;c!=a.c.timestampOffset&&(a.c.timestampOffset=c);d&&db(a.a,function(){return[ob(this,d),this.g.bind(this)]}.bind(a));db(a.a,function(){var a=b.a?b.a-b.b:1,c=new pb;c.a=3;c.h=1E3*a;c.c=1E3*this.l;return[qb(b.url,c,this.v),G.prototype.g.bind(b.url)]}.bind(a));db(a.a,w(a,function(a){this.v.getBandwidth();return[ob(this,a),this.g.bind(this)]}));var e=0==a.c.buffered.length&&
0==a.b.length,f=null;db(a.a,function(){if(0==this.c.buffered.length){var a=Error("Failed to buffer segment ("+this.i+").");a.type="stream";return[Promise.reject(a)]}e&&(a=b.b,f=this.c.buffered.start(0)-a);a=rb(this.b,b.b);0<=a?this.b.splice(a+1,0,b):this.b.push(b)}.bind(a));return sb(a).then(function(){return Promise.resolve(f)}.bind(a))}
function tb(a){if(a.a)return a=Error("Cannot clear ("+a.i+"): previous operation not complete."),a.type="stream",Promise.reject(a);a.a=new cb;db(a.a,function(){var a;a:if(0==this.c.buffered.length)a=Promise.resolve();else{try{this.c.remove(0,Number.POSITIVE_INFINITY)}catch(c){a=Promise.reject(c);break a}this.b=[];a=this.f=new r}return[a,this.g.bind(this)]}.bind(a));return sb(a)}
function ub(a,b){if(a.a){var c=Error("Cannot clearAfter ("+a.i+"): previous operation not complete.");c.type="stream";return Promise.reject(c)}a.a=new cb;db(a.a,function(){return[vb(this,b),this.g.bind(this)]}.bind(a));return sb(a)}function lb(a){a.a?(a=a.a,a.a?a=a.a:a.f?(a.c&&a.c(),a.a=new r,a=a.a):(a.f=!0,a=Promise.resolve())):a=Promise.resolve();return a}function sb(a){a.a.start();return a.a.g.then(w(a,function(){this.a=null})).catch(w(a,function(a){this.a=null;return Promise.reject(a)}))}
function ob(a,b){try{a.c.appendBuffer(b)}catch(c){return Promise.reject(c)}a.f=new r;return a.f}function vb(a,b){if(0==a.c.buffered.length)return Promise.resolve();var c=rb(a.b,b);if(-1==c||c==a.b.length-1)return Promise.resolve();try{a.c.remove(a.b[c+1].b,Number.POSITIVE_INFINITY)}catch(d){return Promise.reject(d)}a.b=a.b.slice(0,c+1);a.f=new r;return a.f}jb.prototype.g=function(){"open"==this.j.readyState&&this.c.abort()};jb.prototype.w=function(){this.f.resolve();this.f=null};function wb(a,b){D.call(this,b);this.a=null;this.h=a}q(wb,D);
function xb(a){if(!window.indexedDB)return a=Error("Persistant storage requires IndexedDB support."),a.type="storage",Promise.reject(a);if(a.a)return a=Error("A database connection is already open."),a.type="storage",Promise.reject(a);var b=new r,c=window.indexedDB.open("content_database",1);c.onupgradeneeded=w(a,function(a){this.a=a.target.result;yb(this,"group_store",{keyPath:"group_id"});yb(this,"stream_index_store",{keyPath:"stream_id"});a=yb(this,"content_store",{autoIncrement:"true"});a.createIndex("segment",
["stream_id","segment_id"],{unique:!0});a.createIndex("stream","stream_id",{unique:!1})});c.onsuccess=w(a,function(a){this.a=a.target.result;b.resolve()});c.onerror=function(){b.reject(c.error)};return b}function H(a){a.a&&(a.a.close(),a.a=null)}function yb(a,b,c){a.a.objectStoreNames.contains(b)&&a.a.deleteObjectStore(b);return a.a.createObjectStore(b,c)}function zb(a){return Bb(a,"content_store")}function Cb(a){return Bb(a,"stream_index_store")}function Db(a){return Bb(a,"group_store")}
function Bb(a,b){return a.a.transaction([b],a.h).objectStore(b)}function Eb(a,b){var c=new r,d=a.get(b);d.onerror=function(){c.reject(d.error)};d.onsuccess=function(){if(d.result)c.resolve(d.result);else{var a=Error("Item not found.");a.type="storage";c.reject(a)}};return c};function Fb(){wb.call(this,"readonly",null)}q(Fb,wb);function Gb(a){var b=new r,c=[],d=Db(a).openCursor();d.onerror=function(){b.reject(d.error)};d.onsuccess=function(a){(a=a.target.result)?(c.push(a.key),a.continue()):b.resolve(c)};return b}
function Hb(a,b){return Eb(Db(a),b).then(w(a,function(a){a.session_ids=na(a.session_ids);return a.hasOwnProperty("duration")||a.hasOwnProperty("key_system")?Promise.resolve(a):Ib(this,a.stream_ids[0]).then(function(b){a.duration=b.duration;a.key_system=b.key_system;a.license_server=b.license_server;a.with_credentials=b.with_credentials;a.distinctive_identifier=b.distinctive_identifier;a.audio_robustness=b.audio_robustness;a.video_robustness=b.video_robustness;return Promise.resolve(a)})}))}
function Ib(a,b){return Eb(Cb(a),b)}function Jb(a,b,c){return Eb(zb(a).index("segment"),[b,c]).then(function(a){return Promise.resolve(a.content)})};function Kb(a){var b=console[a];b?b.bind||(console[a]=function(){b.apply(console,arguments)}):console[a]=function(){}}Kb("error");Kb("warn");Kb("info");Kb("log");Kb("debug");function I(){this.fontSize="100%";this.fontColor=Lb;this.fontOpacity=Mb;this.backgroundColor=Nb;this.backgroundOpacity=Mb;this.fontEdge=Ob}n("shaka.player.TextStyle",I);I.prototype.a=function(){var a=window.localStorage.getItem("ShakaPlayerTextStyle");if(a){var b;try{b=JSON.parse(a)}catch(c){return}if(b&&"object"==typeof b){var a=b,d;for(d in a)d in this&&(this[d]=a[d])}}};I.prototype.load=I.prototype.a;I.prototype.b=function(){window.localStorage.setItem("ShakaPlayerTextStyle",JSON.stringify(this))};
I.prototype.store=I.prototype.b;function Pb(a){var b=[];b.push("font-size: "+a.fontSize);b.push("color: "+Qb(a.fontColor,a.fontOpacity));b.push("background-color: "+Qb(a.backgroundColor,a.backgroundOpacity));for(var c=[],d=0;d<a.fontEdge.length;++d){var e=a.fontEdge[d].slice(3,6);c.push(Qb(a.fontEdge[d].slice(0,3),a.fontOpacity)+" "+e.join("px ")+"px")}b.push("text-shadow: "+c.join(","));return b.join("; ")}function Qb(a,b){return"rgba("+a.concat(b).join(",")+")"}var Lb=[255,255,255],Nb=[0,0,0];
I.StandardColors={WHITE:Lb,BLACK:Nb,RED:[255,0,0],GREEN:[0,255,0],BLUE:[0,0,255],YELLOW:[255,255,0],MAGENTA:[255,0,255],CYAN:[0,255,255]};var Mb=1;I.StandardOpacities={OPAQUE:Mb,SEMI_HIGH:.75,SEMI_LOW:.25,TRANSPARENT:0};var Ob=[];
I.EdgeStyles={NONE:Ob,RAISED:[[34,34,34,1,1,0],[34,34,34,2,2,0],[34,34,34,3,3,0]],DEPRESSED:[[204,204,204,1,1,0],[204,204,204,0,1,0],[34,34,34,-1,-1,0],[34,34,34,0,-1,0]],UNIFORM:[[34,34,34,0,0,4],[34,34,34,0,0,4],[34,34,34,0,0,4],[34,34,34,0,0,4]],DROP:[[34,34,34,2,2,3],[34,34,34,2,2,4],[34,34,34,2,2,5]]};function Rb(a){this.systemIds=[];this.cencKeyIds=[];a=new wa(new DataView(a.buffer));try{for(;$a(a);){var b=a.a,c=E(a),d=E(a);1==c?c=ab(a):0==c&&(c=a.b.byteLength-b);if(1886614376!=d)z(a,c-(a.a-b));else{var e=Aa(a);if(1<e)z(a,c-(a.a-b));else{z(a,3);var f=ta(bb(a)),g=[];if(0<e)for(var h=E(a),k=0;k<h;++k){var m=ta(bb(a));g.push(m)}var p=E(a);z(a,p);this.cencKeyIds.push.apply(this.cencKeyIds,g);this.systemIds.push(f);a.a!=b+c&&z(a,c-(a.a-b))}}}}catch(t){}};function Sb(a){Tb[a]={na:Ub(),end:NaN}}function Vb(a){if(a=Tb[a])a.end=Ub()}function Wb(a){return(a=Tb[a])&&a.end?a.end-a.na:NaN}var Ub=window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now,Tb={};function Xb(){var a="CustomEvent"in window;if(a)try{new CustomEvent("")}catch(b){a=!1}a||(window.CustomEvent=Yb)}n("shaka.polyfill.CustomEvent.install",Xb);function Yb(a,b){var c=document.createEvent("CustomEvent"),d=b||{bubbles:!1,cancelable:!1,detail:null};c.initCustomEvent(a,!!d.bubbles,!!d.cancelable,d.detail);return c};function Zb(){var a=HTMLVideoElement.prototype;!a.getVideoPlaybackQuality&&"webkitDroppedFrameCount"in a&&(a.getVideoPlaybackQuality=$b)}n("shaka.polyfill.VideoPlaybackQuality.install",Zb);function $b(){return{droppedVideoFrames:this.webkitDroppedFrameCount,totalVideoFrames:this.webkitDecodedFrameCount,corruptedVideoFrames:0,creationTime:NaN,totalFrameDelay:0}};function ac(){var a=Element.prototype;a.requestFullscreen=a.requestFullscreen||a.mozRequestFullScreen||a.msRequestFullscreen||a.webkitRequestFullscreen;a=Document.prototype;a.exitFullscreen=a.exitFullscreen||a.mozCancelFullScreen||a.msExitFullscreen||a.webkitExitFullscreen;"fullscreenElement"in document||Object.defineProperty(document,"fullscreenElement",{get:function(){return document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement}});document.addEventListener("webkitfullscreenchange",
bc);document.addEventListener("webkitfullscreenerror",bc);document.addEventListener("mozfullscreenchange",bc);document.addEventListener("mozfullscreenerror",bc);document.addEventListener("MSFullscreenChange",bc);document.addEventListener("MSFullscreenError",bc)}n("shaka.polyfill.Fullscreen.install",ac);function bc(a){var b=a.type.replace(/^(webkit|moz|MS)/,"").toLowerCase(),b=new Event(b,a);a.target.dispatchEvent(b)};function cc(){return Promise.reject(Error("The key system specified is not supported."))}function dc(a){return null==a?Promise.resolve():Promise.reject(Error("MediaKeys not supported."))}function ec(){throw new TypeError("Illegal constructor.");}ec.prototype.createSession=function(){};ec.prototype.setServerCertificate=function(){};function fc(){throw new TypeError("Illegal constructor.");}fc.prototype.getConfiguration=function(){};fc.prototype.createMediaKeys=function(){};function gc(a,b){try{var c=new hc(a,b);return Promise.resolve(c)}catch(d){return Promise.reject(d)}}function jc(a){var b=this.mediaKeys;b&&b!=a&&kc(b,null);delete this.mediaKeys;(this.mediaKeys=a)&&kc(a,this);return Promise.resolve()}
function hc(a,b){this.a=this.keySystem=a;var c=!0;"org.w3.clearkey"==a&&(this.a="webkit-org.w3.clearkey",c=!1);var d=!1,e;e=document.getElementsByTagName("video");e=e.length?e[0]:document.createElement("video");for(var f=0;f<b.length;++f){var g=b[f],h={audioCapabilities:[],videoCapabilities:[],persistentState:"optional",distinctiveIdentifier:"optional",initDataTypes:g.initDataTypes,sessionTypes:["temporary"]},k=!1;if(g.audioCapabilities)for(var m=0;m<g.audioCapabilities.length;++m){var p=g.audioCapabilities[m];
p.contentType&&(k=!0,e.canPlayType(p.contentType.split(";")[0],this.a)&&(h.audioCapabilities.push(p),d=!0))}if(g.videoCapabilities)for(m=0;m<g.videoCapabilities.length;++m)p=g.videoCapabilities[m],p.contentType&&(k=!0,e.canPlayType(p.contentType,this.a)&&(h.videoCapabilities.push(p),d=!0));k||(d=e.canPlayType("video/mp4",this.a)||e.canPlayType("video/webm",this.a));"required"==g.persistentState&&(c?(h.persistentState="required",h.sessionTypes=["persistent-license"]):d=!1);if(d){this.b=h;return}}throw Error("None of the requested configurations were supported.");
}hc.prototype.createMediaKeys=function(){var a=new lc(this.a);return Promise.resolve(a)};hc.prototype.getConfiguration=function(){return this.b};function lc(a){this.g=a;this.b=null;this.a=new gb;this.c=[];this.f={}}function kc(a,b){a.b=b;hb(a.a);b&&(F(a.a,b,"webkitneedkey",a.Bb.bind(a)),F(a.a,b,"webkitkeymessage",a.Ab.bind(a)),F(a.a,b,"webkitkeyadded",a.yb.bind(a)),F(a.a,b,"webkitkeyerror",a.zb.bind(a)))}l=lc.prototype;
l.createSession=function(a){var b=a||"temporary";if("temporary"!=b&&"persistent-license"!=b)throw new TypeError("Session type "+a+" is unsupported on this platform.");a=this.b||document.createElement("video");a.src||(a.src="about:blank");b=new mc(a,this.g,b);this.c.push(b);return b};l.setServerCertificate=function(){return Promise.reject(Error("setServerCertificate not supported on this platform."))};l.Bb=function(a){a=B({type:"encrypted",initDataType:"webm",initData:a.initData});this.b.dispatchEvent(a)};
l.Ab=function(a){var b=nc(this,a.sessionId);b&&(a=B({type:"message",messageType:void 0==b.keyStatuses.a?"licenserequest":"licenserenewal",message:a.message}),b.b&&(b.b.resolve(),b.b=null),b.dispatchEvent(a))};l.yb=function(a){if(a=nc(this,a.sessionId))oc(a,"usable"),a.a&&a.a.resolve(),a.a=null};
l.zb=function(a){var b=nc(this,a.sessionId);if(b){var c=Error("EME v0.1b key error");c.errorCode=a.errorCode;c.errorCode.systemCode=a.systemCode;!a.sessionId&&b.b?(c.method="generateRequest",45==a.systemCode&&(c.message="Unsupported session type."),b.b.reject(c),b.b=null):a.sessionId&&b.a?(c.method="update",b.a.reject(c),b.a=null):(c=a.systemCode,a.errorCode.code==MediaKeyError.MEDIA_KEYERR_OUTPUT?oc(b,"output-restricted"):1==c?oc(b,"expired"):oc(b,"internal-error"))}};
function nc(a,b){var c=a.f[b];return c?c:(c=a.c.shift())?(c.sessionId=b,a.f[b]=c):null}function mc(a,b,c){D.call(this,null);this.f=a;this.h=!1;this.a=this.b=null;this.c=b;this.g=c;this.sessionId="";this.expiration=NaN;this.closed=new r;this.keyStatuses=new pc}q(mc,D);
function qc(a,b,c){if(a.h)return Promise.reject(Error("The session is already initialized."));a.h=!0;var d;try{if("persistent-license"==a.g)if(c)d=qa("LOAD_SESSION|"+c);else{var e=new Uint8Array(b);d=qa("PERSISTENT|"+pa(e))}else d=new Uint8Array(b)}catch(f){return Promise.reject(f)}a.b=new r;try{a.f.webkitGenerateKeyRequest(a.c,d)}catch(g){if("InvalidStateError"!=g.name)return a.b=null,Promise.reject(g);setTimeout(function(){try{this.f.webkitGenerateKeyRequest(this.c,d)}catch(a){this.b.reject(a),
this.b=null}}.bind(a),10)}return a.b}l=mc.prototype;l.Ja=function(a,b){if(this.a)this.a.then(this.Ja.bind(this,a,b)).catch(this.Ja.bind(this,a,b));else{this.a=a;var c,d;"webkit-org.w3.clearkey"==this.c?(c=pa(new Uint8Array(b)),d=JSON.parse(c),"oct"!=d.keys[0].kty&&(this.a.reject(Error("Response is not a valid JSON Web Key Set.")),this.a=null),c=sa(d.keys[0].k),d=sa(d.keys[0].kid)):(c=new Uint8Array(b),d=null);try{this.f.webkitAddKey(this.c,c,d,this.sessionId)}catch(e){this.a.reject(e),this.a=null}}};
function oc(a,b){var c=a.keyStatuses;c.size=void 0==b?0:1;c.a=b;c=B({type:"keystatuseschange"});a.dispatchEvent(c)}l.generateRequest=function(a,b){return qc(this,b,null)};l.load=function(a){return"persistent-license"==this.g?qc(this,null,a):Promise.reject(Error("Not a persistent session."))};l.update=function(a){var b=new r;this.Ja(b,a);return b};
l.close=function(){if("persistent-license"!=this.g){if(!this.sessionId)return this.closed.reject(Error("The session is not callable.")),this.closed;this.f.webkitCancelKeyRequest(this.c,this.sessionId)}this.closed.resolve();return this.closed};l.remove=function(){return"persistent-license"!=this.g?Promise.reject(Error("Not a persistent session.")):this.close()};function rc(a){this.b=a;this.a=0}
rc.prototype.next=function(){return this.a>=this.b.length?{value:void 0,done:!0}:{value:this.b[this.a++],done:!1}};function pc(){this.size=0;this.a=void 0}var sc;l=pc.prototype;l.entries=function(){var a=sc,b=[];this.a&&b.push([a,this.a]);return new rc(b)};l.forEach=function(a){this.a&&a(this.a)};l.get=function(a){if(this.has(a))return this.a};l.has=function(a){var b=sc;return this.a&&ua(new Uint8Array(a),b)?!0:!1};l.keys=function(){var a=sc,b=[];this.a&&b.push(a);return new rc(b)};
l.values=function(){var a=[];this.a&&a.push(this.a);return new rc(a)};function tc(){Navigator.prototype.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration||(HTMLMediaElement.prototype.webkitGenerateKeyRequest?(sc=new Uint8Array([0]),Navigator.prototype.requestMediaKeySystemAccess=gc,delete HTMLMediaElement.prototype.mediaKeys,HTMLMediaElement.prototype.mediaKeys=null,HTMLMediaElement.prototype.setMediaKeys=jc,window.MediaKeys=lc,window.MediaKeySystemAccess=hc):(Navigator.prototype.requestMediaKeySystemAccess=cc,delete HTMLMediaElement.prototype.mediaKeys,
HTMLMediaElement.prototype.mediaKeys=null,HTMLMediaElement.prototype.setMediaKeys=dc,window.MediaKeys=ec,window.MediaKeySystemAccess=fc))}n("shaka.polyfill.MediaKeys.install",tc);n("shaka.polyfill.installAll",function(){Xb();ac();tc();Zb()});var uc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function J(a){var b;a instanceof J?(vc(this,a.R),this.aa=a.aa,this.P=a.P,wc(this,a.fa),this.N=a.N,xc(this,a.a.clone()),this.$=a.$):a&&(b=String(a).match(uc))?(vc(this,b[1]||"",!0),this.aa=yc(b[2]||""),this.P=yc(b[3]||"",!0),wc(this,b[4]),this.N=yc(b[5]||"",!0),xc(this,b[6]||"",!0),this.$=yc(b[7]||"")):this.a=new zc(null)}l=J.prototype;l.R="";l.aa="";l.P="";l.fa=null;l.N="";l.$="";
l.toString=function(){var a=[],b=this.R;b&&a.push(Ac(b,Bc,!0),":");if(b=this.P){a.push("//");var c=this.aa;c&&a.push(Ac(c,Bc,!0),"@");a.push(encodeURIComponent(b).replace(/%25([0-9a-fA-F]{2})/g,"%$1"));b=this.fa;null!=b&&a.push(":",String(b))}if(b=this.N)this.P&&"/"!=b.charAt(0)&&a.push("/"),a.push(Ac(b,"/"==b.charAt(0)?Cc:Dc,!0));(b=this.a.toString())&&a.push("?",b);(b=this.$)&&a.push("#",Ac(b,Ec));return a.join("")};
l.resolve=function(a){var b=this.clone();"data"===b.R&&(b=new J);var c=!!a.R;c?vc(b,a.R):c=!!a.aa;c?b.aa=a.aa:c=!!a.P;c?b.P=a.P:c=null!=a.fa;var d=a.N;if(c)wc(b,a.fa);else if(c=!!a.N){if("/"!=d.charAt(0))if(this.P&&!this.N)d="/"+d;else{var e=b.N.lastIndexOf("/");-1!=e&&(d=b.N.substr(0,e+1)+d)}if(".."==d||"."==d)d="";else if(-1!=d.indexOf("./")||-1!=d.indexOf("/.")){for(var e=0==d.lastIndexOf("/",0),d=d.split("/"),f=[],g=0;g<d.length;){var h=d[g++];"."==h?e&&g==d.length&&f.push(""):".."==h?((1<f.length||
1==f.length&&""!=f[0])&&f.pop(),e&&g==d.length&&f.push("")):(f.push(h),e=!0)}d=f.join("/")}}c?b.N=d:c=""!==a.a.toString();c?xc(b,a.a.clone()):c=!!a.$;c&&(b.$=a.$);return b};l.clone=function(){return new J(this)};function vc(a,b,c){a.R=c?yc(b,!0):b;a.R&&(a.R=a.R.replace(/:$/,""))}function wc(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.fa=b}else a.fa=null}function xc(a,b,c){b instanceof zc?a.a=b:(c||(b=Ac(b,Fc)),a.a=new zc(b))}
function yc(a,b){return a?b?decodeURI(a):decodeURIComponent(a):""}function Ac(a,b,c){return"string"==typeof a?(a=encodeURI(a).replace(b,Gc),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Gc(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Bc=/[#\/\?@]/g,Dc=/[\#\?:]/g,Cc=/[\#\?]/g,Fc=/[\#\?@]/g,Ec=/#/g;function zc(a){this.b=a||null}zc.prototype.a=null;zc.prototype.c=null;
function Hc(a,b,c){if(!a.a&&(a.a={},a.c=0,a.b))for(var d=a.b.split("&"),e=0;e<d.length;e++){var f=d[e].indexOf("="),g=null,h=null;0<=f?(g=d[e].substring(0,f),h=d[e].substring(f+1)):g=d[e];g=decodeURIComponent(g.replace(/\+/g," "));h=h||"";Hc(a,g,decodeURIComponent(h.replace(/\+/g," ")))}a.b=null;(d=a.a.hasOwnProperty(b)&&a.a[b])||(a.a[b]=d=[]);d.push(c);a.c++}
zc.prototype.toString=function(){if(this.b)return this.b;if(!this.a)return"";var a=[],b;for(b in this.a)for(var c=encodeURIComponent(b),d=this.a[b],e=0;e<d.length;e++){var f=c;""!==d[e]&&(f+="="+encodeURIComponent(d[e]));a.push(f)}return this.b=a.join("&")};zc.prototype.clone=function(){var a=new zc;a.b=this.b;if(this.a){var b={},c;for(c in this.a)b[c]=this.a[c].concat();a.a=b;a.c=this.c}return a};function Ic(a,b){this.url=a;this.b=b||new pb;this.g=this.i=this.h=0;this.a=null;this.c=new r;this.f=null}function pb(){this.body=null;this.a=1;this.h=1E3;this.c=0;this.method="GET";this.f="arraybuffer";this.b={};this.g=this.i=!1}function Jc(a){Kc(a);a.b.body=null;a.c.destroy();a.c=null;a.f=null}function Kc(a){a.a&&(a.a.onload=null,a.a.onreadystatechange=null,a.a.onerror=null,a.a.ontimeout=null);a.a=null}l=Ic.prototype;
l.bb=function(){if(this.a)return this.c;if(0==this.url.lastIndexOf("data:",0)){var a=this.url.split(":")[1].split(";").pop().split(","),b=a.pop(),b="base64"==a.pop()?window.atob(b.replace(/-/g,"+").replace(/_/g,"/")):window.decodeURIComponent(b);"arraybuffer"==this.b.f&&(b=qa(b).buffer);a=JSON.parse(JSON.stringify(new XMLHttpRequest));a.response=b;a.responseText=b.toString();b=this.c;b.resolve(a);Jc(this);return b}if(0==this.url.lastIndexOf("idb:",0))return Lc(this);this.h++;this.i=Date.now();this.g||
(this.g=this.b.h);this.a=new XMLHttpRequest;a=this.url;if(this.f&&!this.f.supportsCaching()||this.b.g)a=new J(a),Hc(a.a,"_",Date.now()),a=a.toString();this.a.open(this.b.method,a,!0);this.a.responseType=this.b.f;this.a.timeout=this.b.c;this.a.withCredentials=this.b.i;this.a.onload=this.lb.bind(this);this.b.g&&(this.a.onreadystatechange=this.pb.bind(this));this.a.onerror=this.Hb.bind(this);this.a.ontimeout=this.ub.bind(this);for(b in this.b.b)this.a.setRequestHeader(b,this.b.b[b]);this.a.send(this.b.body);
return this.c};function Lc(a){var b=a.url.split("/"),c=parseInt(b[2],10),d=parseInt(b[3],10),e=new Fb;return xb(e).then(function(){return Jb(e,c,d)}).then(w(a,function(a){var b=JSON.parse(JSON.stringify(new XMLHttpRequest));b.response=a;a=this.c;a.resolve(b);H(e);Jc(this);return a})).catch(w(a,function(a){H(e);Jc(this);return Promise.reject(a)}))}function Mc(a,b,c){b=Error(b);b.type=c;b.status=a.a.status;b.url=a.url;b.method=a.b.method;b.body=a.b.body;b.Lb=a.a;return b}
l.lb=function(a){this.f&&this.f.sample(Date.now()-this.i,a.loaded);200<=this.a.status&&299>=this.a.status?(this.c.resolve(this.a),Jc(this)):this.h<this.b.a?Nc(this):(a=Mc(this,"HTTP error.","net"),this.c.reject(a),Jc(this))};l.pb=function(){if(this.a.readyState==XMLHttpRequest.HEADERS_RECEIVED){var a=Date.parse(this.a.getResponseHeader("Date"));a&&(Ha=a-Date.now())}};l.Hb=function(){var a=Mc(this,"Network failure.","net");this.c.reject(a);Jc(this)};
l.ub=function(){if(this.h<this.b.a)Nc(this);else{var a=Mc(this,"Request timed out.","net");this.c.reject(a);Jc(this)}};function Nc(a){Kc(a);window.setTimeout(a.bb.bind(a),a.g*(1+.5*(2*Math.random()-1)));a.g*=2};function G(a,b,c,d){this.c=b;this.f=c||0;this.h=null!=d?d:null;this.b=this.a=null;this.i=a}function Oc(a,b){return a&&0!==a.length?a.map(function(a){return a.resolve(b)}):[b]}function qb(a,b,c){if(a.a)return a.a;b=b||new pb;if(a.f||a.h)b.b.Range="bytes="+(a.f+"-"+(null!=a.h?a.h:""));a.a=Pc(a,0,b,c);return a.a}G.prototype.g=function(){if(this.b){this.a=null;var a=this.b;if(a.a&&a.a.readyState!=XMLHttpRequest.DONE){a.a.abort();var b=Mc(a,"Request aborted.","aborted");a.c.reject(b);Jc(a)}this.b=null}};
function Pc(a,b,c,d){var e=a.c[b].toString();a.i&&(e=a.i(e,c.b)||e);a.b=new Ic(e,c);d&&(a.b.f=d);e=a.b.bb().then(w(a,function(a){this.b=this.a=null;return Promise.resolve(a.response)}));return e=e.catch(w(a,function(a){if(this.a&&b+1<this.c.length)return this.a=Pc(this,b+1,c,d);this.a=this.b=null;return Promise.reject(a)}))}G.prototype.clone=function(){return new G(this.i,this.c.map(function(a){return a.clone()}),this.f,this.h)};G.prototype.toString=function(){return this.c[0].toString()};function Qc(a){this.a=a}Qc.prototype.destroy=function(){this.a&&(this.a.g(),this.a=null)};Qc.prototype.create=function(){return this.a?qb(this.a):Promise.resolve(null)};function Rc(a,b,c){this.b=a;this.a=b;this.url=c}function Sc(a,b,c){return new Rc(b,c,a.url)}function rb(a,b){for(var c=a.length-1;0<=c;--c){var d=a[c];if(b>=d.b&&(null==d.a||b<d.a))return c}return-1}function Tc(a,b){return a.map(function(a){return Sc(a,a.b+b,null!=a.a?a.a+b:null)})};function Uc(){}
Uc.prototype.parse=function(a,b,c,d){var e=null;try{a:{var f=[],g=new wa(a),h=E(g);if(1936286840!=E(g))e=null;else{1==h&&(h=ab(g));var k=Aa(g);z(g,3);z(g,4);var m=E(g);if(0==m)e=null;else{var p,t;0==k?(p=E(g),t=E(g)):(p=ab(g),t=ab(g));z(g,2);var y=g.b.getUint16(g.a,g.c);g.a+=2;a=p;b=b+h+t;for(h=0;h<y;h++){var u=E(g);t=(u&2147483648)>>>31;var k=u&2147483647,v=E(g);E(g);if(1==t){e=null;break a}var ma=new G(d,c,b,b+k-1);f.push(new Rc(a/m,(a+v)/m,ma));a+=v;b+=k}e=f}}}}catch(Ab){if(!(Ab instanceof RangeError))throw Ab;
}return e};function Vc(){}
Vc.prototype.parse=function(a,b,c,d){var e=null;try{var f;var g=new va(b);if(440786851!=x(g).id)f=null;else{var h=x(g);if(408125543!=h.id)f=null;else{var k=h.a.byteOffset,m;var p=new va(h.a);for(b=null;$a(p.a);){var t=x(p);if(357149030==t.id){b=t;break}}if(b){for(var y=new va(b.a),p=1E6;$a(y.a);){var u=x(y);if(2807729==u.id){p=Ba(u);break}}m=p/1E9}else m=null;f=m?{Db:k,Ib:m}:null}}if(f){var v=x(new va(a));if(475249515!=v.id)e=null;else{var ma=f.Db,Ab=f.Ib;a=[];var Jd=new va(v.a);for(f=v=-1;$a(Jd.a);){var Kd=
x(Jd);if(187==Kd.id){var Fa;var Ld=new va(Kd.a),Md=x(Ld);if(179!=Md.id)Fa=null;else{var Ye=Ba(Md),Nd=x(Ld);if(183!=Nd.id)Fa=null;else{for(var Od=new va(Nd.a),k=0;$a(Od.a);){var Pd=x(Od);if(241==Pd.id){k=Ba(Pd);break}}Fa={Kb:Ye,Cb:k}}}if(Fa){var Qd=Ab*Fa.Kb,Rd=ma+Fa.Cb;if(0<=v){var ic=new G(d,c,f,Rd-1);a.push(new Rc(v,Qd,ic))}v=Qd;f=Rd}}}0<=v&&(ic=new G(d,c,f,null),a.push(new Rc(v,null,ic)));e=a}}else e=null}catch(Sd){if(!(Sd instanceof RangeError))throw Sd;}return e};function K(a){this.u=a;this.g=0}K.prototype.destroy=function(){this.u=null};l=K.prototype;l.length=function(){return this.u.length};function L(a){if(0==a.u.length)throw new RangeError("SegmentIndex: There is no first SegmentReference.");return a.u[0]}function M(a){if(0==a.u.length)throw new RangeError("SegmentIndex: There is no last SegmentReference.");return a.u[a.u.length-1]}l.get=function(a){if(0>a||a>=this.u.length)throw new RangeError("SegmentIndex: The specified index is out of range.");return this.u[a]};
l.ia=function(a){a=rb(this.u,a);return 0<=a?this.u[a]:null};l.Ca=function(a){Wc(this,a);return!0};
function Wc(a,b){a.g!=b.g&&(b=new K(Tc(b.u,a.g-b.g)));if(0==a.length())a.u=b.u.slice(0);else if(0!=b.length()&&null!=M(a).a&&!(null!=M(b).a&&M(b).a<M(a).a)){if(M(a).a<=L(b).b)var c=Sc(M(a),M(a).b,L(b).b),c=a.u.slice(0,-1).concat([c]);else{var d;for(d=0;d<a.u.length&&!(a.u[d].a>=L(b).b);++d);a.u[d].b<L(b).b?(c=Sc(a.u[d],a.u[d].b,L(b).b),c=a.u.slice(0,d).concat([c])):(L(a).b>L(b).b||L(b),c=a.u.slice(0,d))}a.u=c.concat(b.u)}}
l.ha=function(a){var b=a-this.g;if(0==b)return 0;this.u=Tc(this.u,b);this.g=a;return b};l.Ba=function(){return 0<this.length()?{start:L(this).b,end:M(this).a}:{start:0,end:0}};function Xc(a){this.b=a;this.a=null}Xc.prototype.destroy=function(){this.a&&(this.a.destroy(),this.a=null)};Xc.prototype.create=function(){if(this.a)return Promise.resolve(this.a);var a=new Rc(0,null,this.b);this.a=new K([a]);return Promise.resolve(this.a)};function Yc(a){this.b=a;this.a=null}Yc.prototype.destroy=function(){this.b=null;this.a&&(this.a.destroy(),this.a=null)};Yc.prototype.create=function(){if(this.a)return Promise.resolve(this.a);for(var a=[],b=0;b<this.b.length;++b){var c=this.b[b];a.push(new Rc(c.start_time,c.end_time,new G(null,[new J(c.url)],c.start_byte,null)))}this.b=null;this.a=new K(a);return Promise.resolve(this.a)};function Zc(){this.A=$c++;this.id=this.C=this.F=null;this.c=0;this.height=this.width=this.bandwidth=null;this.b=this.a="";this.f=[];this.L=!1;this.J=!0}var $c=0;Zc.prototype.destroy=function(){this.F&&(this.F.destroy(),this.F=null);this.C&&(this.C.destroy(),this.C=null)};function ad(a){var b=a.a||"";a.b&&(b+='; codecs="'+a.b+'"');return b}function bd(){this.A=cd++;this.id=null;this.contentType=this.lang="";this.b=!1;this.m=[];this.a=[]}var cd=0;
bd.prototype.destroy=function(){for(var a=0;a<this.m.length;++a)this.m[a].destroy();this.a=this.m=null};function dd(a){for(var b=[],c=0;c<a.a.length;++c){var d=new ed;d.id=a.A;d.a=a.a[c];d.contentType=a.contentType;d.b=a.m.length?ad(a.m[0]):"";b.push(d)}return b}function fd(){this.id=null;this.start=0;this.b=null;this.a=[]}fd.prototype.destroy=function(){for(var a=0;a<this.a.length;++a)this.a[a].destroy();this.a=null};function gd(){this.b=!1;this.g=this.f=null;this.c=0;this.a=[]}
gd.prototype.destroy=function(){for(var a=0;a<this.a.length;++a)this.a[a].destroy();this.a=null};function ed(){this.id=0;this.a=null;this.b=this.contentType=""};function hd(a,b){D.call(this,a);this.b=b;this.h=!0;this.g=this.f=null;this.c=new r;this.a=null}q(hd,D);hd.prototype.H=function(){};hd.prototype.destroy=function(){this.a&&this.b.removeChild(this.a);this.c.destroy();this.v=this.b=this.f=this.g=this.a=this.c=null};l=hd.prototype;l.oa=function(){return this.f};l.Pa=function(){return this.g};l.cb=function(){return this.c};l.Qa=function(){return!0};
l.ra=function(a){a.F.create().then(w(this,function(b){if(this.b){if(0==b.length())return Promise.reject(Error("No subtitles URL available."));var c=this.f;this.f=a;this.g=b;b=L(b).url.c[0].toString();var d=this.Aa();this.a&&(this.wa(!1),this.b.removeChild(this.a));this.a=document.createElement("track");this.b.appendChild(this.a);this.a.src=b;this.wa(d);b=B({type:"adaptation",bubbles:!0,contentType:"text",size:null,bandwidth:a.bandwidth});this.dispatchEvent(b);c||this.c.resolve(0)}}))};l.Va=function(){};
l.wa=function(a){this.h=a;this.a&&(this.a.track.mode=a?"showing":"disabled")};l.Aa=function(){return this.h};l.Fa=function(){return 0};function id(a,b,c,d,e){D.call(this,a);this.c=b;this.a=new jb(c,d,e);this.B=this.D=this.b=null;this.I=!1;this.g=null;this.l=!1;this.i=null;this.o=!1;this.h=new r;this.j=this.f=!1;this.K=0;this.w=15;this.G=!1}q(id,D);id.prototype.H=function(a){null!=a.initialStreamBufferSize&&(this.K=Number(a.initialStreamBufferSize));null!=a.streamBufferSize&&(this.w=Number(a.streamBufferSize));null!=a.segmentRequestTimeout&&(this.a.l=Number(a.segmentRequestTimeout))};
id.prototype.destroy=function(){jd(this);this.h.destroy();this.b=this.h=null;this.a.destroy();this.v=this.c=this.a=null};l=id.prototype;l.oa=function(){return this.b};l.Pa=function(){return this.D};l.cb=function(a){this.f||a.then(function(){this.f=!0;this.g||kd(this,0)}.bind(this)).catch(function(){});return this.h};l.Qa=function(){return this.j};
l.ra=function(a,b,c){if(a!=this.b){var d=[a.F.create(),a.C.create()];Promise.all(d).then(w(this,function(d){if(this.c){var f=this.b;this.b=a;this.D=d[0];this.B=d[1];this.I=!0;this.l||(f?b&&ld(this,!0,c):kd(this,0))}})).catch(w(this,function(a){"aborted"!=a.type&&(this.f?(a=C(a),this.dispatchEvent(a)):this.h.reject(a))}))}};l.Va=function(){return ld(this,!1)};
function ld(a,b,c){a.b&&!a.l&&(a.l=!0,jd(a),lb(a.a).then(w(a,function(){var a=this.c.currentTime;if(!b&&0<mb(this.a,a)&&0<=rb(this.a.b,a))return Promise.resolve();if(c)return ub(this.a,this.c.currentTime+c);this.G=!0;return tb(this.a)})).then(w(a,function(){this.l=!1;kd(this,0)})).catch(w(a,function(a){this.l=!1;this.f?(a=C(a),this.dispatchEvent(a)):this.h.reject(a)})))}l.wa=function(){};l.Aa=function(){return!0};l.Fa=function(){return this.o?this.w:Math.min(this.K,this.w)};
l.xb=function(){if(this.o&&!this.f)this.g=null;else{var a;if(a=this.f&&!this.j)a=1<this.a.c.buffered.length?!0:!1;if(a)ld(this,!0);else{this.g=null;a=this.b;var b=this.D,c=this.c.currentTime;mb(this.a,this.o?c:c+(this.i||0))>=this.Fa()?(md(this),kd(this,1E3/(Math.abs(this.c.playbackRate)||1))):(b=nd(this,c,b))?(b=nb(this.a,b,a.c,this.B),this.B=null,this.I&&(this.I=!1,od(this,a)),this.j=!1,b.then(w(this,function(a){null==this.i&&(this.i=a);this.G&&0<mb(this.a,c)&&(this.G=!1,this.c.currentTime+=.001);
kd(this,0)})).catch(w(this,function(a){if("aborted"!=a.type){var b=[0,404,410];"net"==a.type&&-1!=b.indexOf(a.Lb.status)&&this.b&&kd(this,5E3);a=C(a);this.dispatchEvent(a)}}))):(md(this),this.f&&!this.j&&(this.j=!0,pd(this)),kd(this,1E3))}}};function nd(a,b,c){a=a.a;var d=a.b.length;a=0<d?a.b[d-1]:null;return null!=a?null!=a.a?c.ia(a.a):null:c.ia(b)||(c.length()?M(c):null)}function md(a){if(!a.o&&null!=a.i){a.o=!0;var b=a.a,c=a.i,d=c-b.o;0!=d&&(b.b=Tc(b.b,d),b.o=c);a.h.resolve(a.i)}}
function od(a,b){var c;c=b.a.split("/")[0];c=B({type:"adaptation",bubbles:!0,contentType:c,size:"video"!=c?null:{width:b.width,height:b.height},bandwidth:b.bandwidth});a.dispatchEvent(c)}function pd(a){var b=B({type:"ended"});a.dispatchEvent(b)}function kd(a,b){a.g=window.setTimeout(a.xb.bind(a),b)}function jd(a){null!=a.g&&(window.clearTimeout(a.g),a.g=null)};function qd(){this.streamStats=null;this.droppedFrames=this.decodedFrames=NaN;this.bufferingTime=this.playTime=this.estimatedBandwidth=0;this.playbackLatency=NaN;this.bufferingHistory=[];this.bandwidthHistory=[];this.streamHistory=[]}function rd(a,b){var c=new sd(b);a.streamHistory.push(new td(c));if(c.videoHeight||!a.streamStats)a.streamStats=c}function sd(a){this.videoWidth=a.width;this.videoHeight=a.height;this.videoMimeType=a.a;this.videoBandwidth=a.bandwidth}
function td(a){this.timestamp=Ga()/1E3;this.value=a};function ud(a,b,c,d,e,f){this.b=new G(null,[new J(a)]);this.a=new pb;this.a.body=b;this.a.method=c;this.a.a=3;this.a.i=d;this.a.c=1E3*(null!=f?f:0);a=e||{};for(var g in a)this.a.b[g]=a[g]}function vd(a){return qb(a.b,a.a).then(function(a){return Promise.resolve(new Uint8Array(a))})};function wd(a,b,c){D.call(this,a);this.g=b;this.b=c;this.a=this.h=null;this.l=new gb;this.j={};this.f=[];this.o=0;this.c=new r;this.i=null;this.w=0}q(wd,D);wd.prototype.destroy=function(){this.v=null;for(var a=0;a<this.f.length;++a)this.f[a].close().catch(function(){});this.f=[];this.j=this.a=this.h=null;this.c.destroy();this.c=null;this.l.destroy();this.l=null;this.i&&(window.clearTimeout(this.i),this.i=null);this.g=this.b=null};
wd.prototype.initialize=function(){for(var a=new A,b=this.b.Oa(),c=0;c<b.length;++c){var d=b[c];d.a.a||d.b&&!xd(d.b)||a.push(d.contentType,d)}for(var c={},d=!1,e=0;e<b.length;++e){var f=b[e];if(f.a.a&&!a.a.hasOwnProperty(f.contentType)){var g=f.a.a,h=c[g];h||(h=f.a,h={audioCapabilities:void 0,videoCapabilities:void 0,initDataTypes:void 0,distinctiveIdentifier:h.g?"required":"optional",persistentState:h.o||this.b.ea()?"required":"optional",sessionTypes:[this.b.ea()?"persistent-license":"temporary"]},
c[g]=h);if(f.b&&(g=f.contentType+"Capabilities",g in h)){d=!0;h[g]||(h[g]=[]);var k;"audio"==f.contentType?k=f.a.f:"video"==f.contentType&&(k=f.a.v);h[g].push({contentType:f.b,robustness:k})}}}if(!d)if(b.length)this.a=b[0].a;else throw a=Error("No DrmInfo exists!"),a.type="drm",a;if(0==Object.keys(c).length)return this.b.Ea(a),this.c.resolve(),Promise.resolve();k=new r;c=yd(this,c,k);c=c.then(this.hb.bind(this,b,a));c=c.then(this.Eb.bind(this));k.reject(null);return c};
function zd(a,b){null==a.i&&(a.i=window.setTimeout(function(){var a=Error("Timeout waiting for sessions.");a.type="storage";this.c.reject(a)}.bind(a),b));return a.c}function Ad(a){return Promise.all(a.f.map(function(a){return a.remove()}))}
function yd(a,b,c){for(var d in b)c=c.catch(function(a,b){return navigator.requestMediaKeySystemAccess(a,[b])}.bind(null,d,b[d]));a.b.ea()&&(c=c.catch(function(){throw Error("Either none of the requested key systems are supported or none of the requested key systems support persistent state.");}));return c}l=wd.prototype;
l.hb=function(a,b,c){if(!this.g)return Bd();for(var d=c.keySystem,e=c.getConfiguration(),f=["audio","video"],g=0;g<f.length;++g){var h=f[g];if(!b.a.hasOwnProperty(h)){var k=e[h+"Capabilities"];if(k&&k.length){for(var k=k[0],m=[],p={},t=0;t<a.length;++t){var y=a[t];if(y.a.a==d&&y.b==k.contentType&&!(y.id in p)){m.push(y);p[y.id]=!0;var u;if(this.a){u=this.a;var y=y.a,v=new Ja;v.a=u.a;v.j=u.j;v.l=u.l;v.h=u.h;v.i=u.i;v.g=u.g;v.o=u.o;v.f=u.f;v.v=u.v;v.c=u.c?new Uint8Array(u.c.buffer):null;La(v,u.b);La(v,
y.b);u=v}else u=y.a;this.a=u}}b.a[h]=m}}}this.b.Ea(b);return c.createMediaKeys()};
l.Eb=function(a){if(!this.g)return Bd();this.h=a;return this.g.setMediaKeys(this.h).then(w(this,function(){return this.g?this.a.c?this.h.setServerCertificate(this.a.c):Promise.resolve():Bd()})).then(w(this,function(){if(!this.g)return Bd();if(0<this.b.va().length)Cd(this);else{for(var a=0;a<this.a.b.length;++a){var c=this.a.b[a];this.Ra({type:"encrypted",initDataType:c.initDataType,initData:c.initData})}0==this.a.b.length&&F(this.l,this.g,"encrypted",this.Ra.bind(this))}}))};
function Bd(){var a=Error("EmeManager destroyed");a.type="destroy";return Promise.reject(a)}l.Ra=function(a){var b=new Uint8Array(a.initData),c=Array.prototype.join.apply(b);if(!this.j[c]){try{var d=Dd(this)}catch(e){d=C(e);this.dispatchEvent(d);this.c.reject(e);return}a=d.generateRequest(a.initDataType,a.initData);this.j[c]=!0;a.catch(w(this,function(a){if(this.j){this.j[c]=!1;var b=C(a);this.dispatchEvent(b);this.c.reject(a)}}));this.f.push(d)}};
function Cd(a){for(var b=a.b.va(),c=0;c<b.length;++c){var d=Dd(a),e=d.load(b[c]);a.f.push(d);e.then(w(a,function(){this.o++;this.o>=this.f.length&&this.c.resolve()})).catch(w(a,function(a){a=C(a);this.dispatchEvent(a)}))}}
function Dd(a){var b=null;if(a.b.ea())try{b=a.h.createSession("persistent-license")}catch(c){throw Error("Persistent licenses are not supported by this key system or platform.");}else b=a.h.createSession();F(a.l,b,"message",a.sb.bind(a));F(a.l,b,"keystatuseschange",a.kb.bind(a));return b}l.sb=function(a){Ed(this,a.target,this.a,a.message)};l.kb=function(a){a=a.target.keyStatuses;for(var b={},c=a.keys(),d=c.next();!d.done;d=c.next()){var e=ta(new Uint8Array(d.value)),d=a.get(d.value);b[e]=d}this.b.Sa(b)};
function Ed(a,b,c,d){d=Fd(c,d);vd(new ud(d.url,d.body,d.method,c.l,d.headers,a.w)).then(w(a,function(a){c.h&&(a=c.h(a));return b.update(a)})).then(w(a,function(){var a=B({type:"sessionReady",detail:b});this.dispatchEvent(a);this.o++;this.o>=this.f.length&&this.c.resolve()})).catch(w(a,function(a){a.Nb=b;a=C(a);this.dispatchEvent(a)}))}
function Fd(a,b){var c={url:a.j,body:b.slice(0),method:"POST",headers:{}};if(!a.i)return c;a.i(c);c.url=ja(c,"url");if(null==c.url)throw Error("'url' cannot be null.");if(!(c.body instanceof ArrayBuffer||"string"==typeof c.body||null==c.body))throw new TypeError("'body' must be an ArrayBuffer, a string, or null.");c.method=ja(c,"method");if("GET"!=c.method&&"POST"!=c.method)throw Error("'method' must be either 'GET' or 'POST'.");c.headers=ka(c,"headers",Object);if(null==c.headers)throw Error("'headers' cannot be null.");
return c};function N(a){D.call(this,null);this.a=a;this.b=null;this.f=new gb;this.j=this.l=null;this.H=0;this.B=null;this.i=!1;this.g=new qd;this.c={enableAdaptation:!0,streamBufferSize:15,licenseRequestTimeout:0,mpdRequestTimeout:0,segmentRequestTimeout:0,preferredLanguage:"en",restrictions:new ca};this.o=1;this.D=null}q(N,D);n("shaka.player.Player",N);N.version="v1.5.1";
N.isBrowserSupported=function(){return!!window.MediaSource&&!!window.MediaKeys&&!!window.navigator&&!!window.navigator.requestMediaKeySystemAccess&&!!window.MediaKeySystemAccess&&!!window.MediaKeySystemAccess.prototype.getConfiguration&&!!window.Promise&&!!Element.prototype.requestFullscreen&&!!document.exitFullscreen&&"fullscreenElement"in document&&!!window.Uint8Array};function xd(a){return"text/vtt"==a?!!window.VTTCue:MediaSource.isTypeSupported(a)}N.isTypeSupported=xd;
N.setTextStyle=function(a){var b=document.getElementById("ShakaPlayerTextStyle");b||(b=document.createElement("style"),b.id="ShakaPlayerTextStyle",document.head.appendChild(b));for(b=b.sheet;b.cssRules.length;)b.deleteRule(0);b.insertRule("::cue { "+Pb(a)+" }",0)};N.prototype.destroy=function(){return this.w().then(w(this,function(){this.f.destroy();this.a=this.f=null})).catch(function(){})};N.prototype.destroy=N.prototype.destroy;
N.prototype.w=function(){if(!this.b)return Promise.resolve();this.i&&Gd(this);this.a.pause();hb(this.f);Hd(this);Id(this);this.l&&(this.l.destroy(),this.l=null);this.a.src="";var a=this.a.setMediaKeys(null);this.b&&(this.b.destroy(),this.b=null);this.i=!1;this.g=new qd;return a};N.prototype.unload=N.prototype.w;
N.prototype.ma=function(a){var b=this.w();this.a.autoplay&&(Sb("load"),F(this.f,this.a,"timeupdate",this.jb.bind(this)));a.I(this.c);a.$a(this.D);this.D=null;b=b.then(w(this,function(){return a.U()}));b.catch(w(this,function(b){a.destroy();return Promise.reject(b)}));return b.then(w(this,function(){if(!this.a)return Td();this.b=a;F(this.f,this.b,"seekrangechanged",this.qb.bind(this));this.l=new wd(this,this.a,this.b);return this.l.initialize()})).then(w(this,function(){if(!this.a)return Td();F(this.f,
this.a,"error",this.Fb.bind(this));F(this.f,this.a,"playing",this.ob.bind(this));F(this.f,this.a,"pause",this.nb.bind(this));return this.b.Ka(this,this.a)})).then(w(this,function(){if(!this.a)return Td();Ud(this)})).catch(w(this,function(a){if(!this.a)return Td();if("destroy"!=a.type){var b=C(a);this.dispatchEvent(b)}return this.w().then(function(){return Promise.reject(a)})}))};N.prototype.load=N.prototype.ma;
function Td(){var a=Error("Player destroyed");a.type="destroy";return Promise.reject(a)}l=N.prototype;l.jb=function(){Vb("load");this.g.playbackLatency=Wb("load")/1E3;this.f.sa(this.a,"timeupdate")};l.Fb=function(){if(this.a.error){var a=this.a.error.code;a!=MediaError.MEDIA_ERR_ABORTED&&(a=Error(Vd[a]||"Unknown playback error."),a.type="playback",a=C(a),this.dispatchEvent(a))}};
l.ob=function(){Sb("playing");!this.j&&0>this.o&&(this.a.playbackRate=0,this.G(this.a.currentTime,Date.now(),this.o));this.i&&Gd(this)};l.nb=function(){Vb("playing");var a=Wb("playing");if(!isNaN(a)){var b=this.g;b.playTime+=a/1E3}Id(this)};l.qb=function(a){this.H=a.start};
l.ab=function(){if(!this.a.paused){Vb("playing");var a=Wb("playing");if(!isNaN(a)){var b=this.g;b.playTime+=a/1E3;Sb("playing")}}a=this.g;b=this.a;b.getVideoPlaybackQuality&&(b=b.getVideoPlaybackQuality(),a.decodedFrames=b.totalVideoFrames,a.droppedFrames=b.droppedVideoFrames);return this.g};N.prototype.getStats=N.prototype.ab;N.prototype.la=function(){return this.b?this.b.ja():[]};N.prototype.getVideoTracks=N.prototype.la;N.prototype.ta=function(){return this.b?this.b.pa():[]};
N.prototype.getAudioTracks=N.prototype.ta;N.prototype.ka=function(){return this.b?this.b.Ha():[]};N.prototype.getTextTracks=N.prototype.ka;N.prototype.selectVideoTrack=function(a,b){return this.b?this.b.selectVideoTrack(a,void 0==b?!0:b):!1};N.prototype.selectVideoTrack=N.prototype.selectVideoTrack;N.prototype.ya=function(a,b){return this.b?this.b.Ya(a,void 0==b?!0:b):!1};N.prototype.selectAudioTrack=N.prototype.ya;N.prototype.fb=function(a){return this.b?this.b.Za(a,!1):!1};
N.prototype.selectTextTrack=N.prototype.fb;N.prototype.T=function(a){this.b&&this.b.Ga(a)};N.prototype.enableTextTrack=N.prototype.T;N.prototype.K=function(a){this.h({enableAdaptation:a})};N.prototype.enableAdaptation=N.prototype.K;N.prototype.S=function(){return this.c.enableAdaptation};N.prototype.getAdaptationEnabled=N.prototype.S;N.prototype.da=function(a){this.h({streamBufferSize:a})};N.prototype.setStreamBufferSize=N.prototype.da;N.prototype.X=function(){return Number(this.c.streamBufferSize)};
N.prototype.getStreamBufferSize=N.prototype.X;N.prototype.gb=function(a){this.h({licenseRequestTimeout:a/1E3})};N.prototype.setLicenseRequestTimeout=N.prototype.gb;N.prototype.Z=function(a){this.h({mpdRequestTimeout:a/1E3})};N.prototype.setMpdRequestTimeout=N.prototype.Z;N.prototype.M=function(a){this.h({segmentRequestTimeout:a/1E3})};N.prototype.setRangeRequestTimeout=N.prototype.M;N.prototype.ca=function(a){this.h({preferredLanguage:a})};N.prototype.setPreferredLanguage=N.prototype.ca;
N.prototype.ba=function(a){Id(this);0<=a?this.a.playbackRate=a:this.a.paused||(this.a.playbackRate=0,this.G(this.a.currentTime,Date.now(),a));this.o=a};N.prototype.setPlaybackRate=N.prototype.ba;N.prototype.V=function(){return this.o};N.prototype.getPlaybackRate=N.prototype.V;N.prototype.O=function(a){this.h({restrictions:a})};N.prototype.setRestrictions=N.prototype.O;N.prototype.W=function(){return this.c.restrictions.clone()};N.prototype.getRestrictions=N.prototype.W;
N.prototype.eb=function(a){this.D=a};N.prototype.setPlaybackStartTime=N.prototype.eb;N.prototype.I=function(){return this.b?this.b.Xa():!1};N.prototype.isLive=N.prototype.I;
N.prototype.h=function(a){if(a){var b=ia(a,"enableAdaptation","boolean");null!=b&&(this.c.enableAdaptation=b);b=ha(a,"streamBufferSize");null!=b&&(this.c.streamBufferSize=b);b=ha(a,"licenseRequestTimeout");null!=b&&(this.c.licenseRequestTimeout=b);b=ha(a,"mpdRequestTimeout");null!=b&&(this.c.mpdRequestTimeout=b);b=ha(a,"segmentRequestTimeout");null!=b&&(this.c.segmentRequestTimeout=b);b=ja(a,"preferredLanguage");null!=b&&(this.c.preferredLanguage=b);a=ka(a,"restrictions",ca);null!=a&&(this.c.restrictions=
a.clone());this.b&&this.b.I(this.c)}};N.prototype.configure=N.prototype.h;N.prototype.ua=function(){return this.c};N.prototype.getConfiguration=N.prototype.ua;function Id(a){a.j&&(window.clearTimeout(a.j),a.j=null)}function Ud(a){Hd(a);a.B=window.setTimeout(a.Y.bind(a),100)}function Hd(a){a.B&&(window.clearTimeout(a.B),a.B=null)}
N.prototype.G=function(a,b,c){this.j=null;var d=(Date.now()-b)/1E3*c;this.a.currentTime<this.H+(this.I()?1:.05)?this.a.pause():(d=Math.max(this.H,a+d),this.a.currentTime=d,this.j=window.setTimeout(this.G.bind(this,a,b,c),250))};function Gd(a){Vb("buffering");var b=a.g;b.bufferingTime+=Wb("buffering")/1E3;a.i=!1;a.dispatchEvent(B({type:"bufferingEnd"}))}
N.prototype.Y=function(){Ud(this);if(!this.a.ended&&!this.a.seeking){var a=this.a.buffered,b=a.length?a.end(a.length-1):0,a=Math.max(b-this.a.currentTime,0);if(this.i)b=this.b.Wa(),a>b&&(Gd(this),this.a.play());else{var c=this.a.duration,c=isNaN(c)?0:Math.max(c-.05,0),b=b>=c||this.a.currentTime>=c;!this.a.paused&&!b&&.2>a&&(this.i=!0,this.a.pause(),this.g.bufferingHistory.push(Ga()/1E3),Sb("buffering"),this.dispatchEvent(B({type:"bufferingStart"})))}}};
var Vd={2:"A network failure occured while loading media content.",3:"The browser failed to decode the media content.",4:"The browser does not support the media content."};function Wd(a){for(var b=0;b<a.length;++b)for(var c=a[b],d=0;d<c.a.length;++d){for(var e=c.a[d],f=e,g=0;g<f.m.length;++g)xd(ad(f.m[g]))||(f.m.splice(g,1),--g);0==e.m.length&&(c.a.splice(d,1),--d)}}function Xd(a){for(var b=0;b<a.length;++b)for(var c=a[b],d=0;d<c.a.length;++d)c.a[d].m.sort(Yd)}function Yd(a,b){var c=a.bandwidth||Number.MAX_VALUE,d=b.bandwidth||Number.MAX_VALUE;return c<d?-1:c>d?1:0};function Zd(a){this.a=a}Zd.prototype.destroy=function(){this.a.destroy();this.a=null};function $d(a,b){var c=ae(b),d=ae(a.a);return Promise.all([c,d]).then(w(a,function(a){var c=a[0];a=a[1];var d=this.a.a;Wd(d);Xd(d);b.f=this.a.f;b.g=this.a.g?this.a.g.clone():null;b.c=this.a.c;d=[];be(b,this.a,c,a,d);c=b.a;Wd(c);Xd(c);return Promise.resolve(d)}))}
function ae(a){function b(a,b){return a.concat(b)}var c=a.a.map(function(a){return a.a}).reduce(b,[]).map(function(a){return a.m}).reduce(b,[]);a=c.map(function(a){return a.F.create()});return Promise.all(a).then(function(a){for(var b={},f=0;f<c.length;++f)b[c[f].A]=a[f];return Promise.resolve(b)})}
function be(a,b,c,d,e){var f=new A;a.a.forEach(function(a,b){f.push(a.id||""+b,a)});var g=new A;b.a.forEach(function(a,b){g.push(a.id||""+b,a)});a=Ea(f);for(b=0;b<a.length;++b){var h=a[b],k=f.get(h);1<k.length||(h=g.get(h))&&0!=h.length&&1==h.length&&(ce(k[0],h[0],c,d,e),k[0].b=h[0].b)}}
function ce(a,b,c,d,e){var f=new A;a.a.forEach(function(a,b){f.push(a.id||""+b,a)});var g=new A;b.a.forEach(function(a,b){g.push(a.id||""+b,a)});a=Ea(f);for(b=0;b<a.length;++b){var h=a[b],k=f.get(h);1<k.length||(h=g.get(h))&&0!=h.length&&1==h.length&&de(k[0],h[0],c,d,e)}}
function de(a,b,c,d,e){var f=new A;a.m.forEach(function(a,b){f.push(a.id||""+b,a)});var g=new A;b.m.forEach(function(a,b){g.push(a.id||""+b,a)});b={};for(var h=Ea(f),k=0;k<h.length;++k){var m=h[k];b[m]=m;var p=f.get(m);1<p.length||((m=g.get(m))&&0!=m.length?1==m.length&&(ee(p[0],m[0],c,d),p[0].C=m[0].C,m[0].C=null,p[0].c=m[0].c):(e.push(p[0]),a.m.splice(a.m.indexOf(p[0]),1)))}h=Ea(g);for(k=0;k<h.length;++k)m=h[k],b[m]||(b[m]=m,m=g.get(m),a.m.push(m[0]))}
function ee(a,b,c,d){a=c[a.A];b=d[b.A];a.length();a.Ca(b)&&a.length()};function O(){this.a=this.b=null;this.f=new gb;this.c=Number.POSITIVE_INFINITY;this.i=!0;this.g=!1}n("shaka.media.SimpleAbrManager",O);O.prototype.destroy=function(){this.f.destroy();this.a=this.b=this.f=null};O.prototype.initialize=function(a,b){this.b||this.a||(this.b=a,this.a=b)};
O.prototype.start=function(){this.b&&this.a&&!this.g&&(this.c=Date.now()+4E3,F(this.f,this.b,"bandwidth",this.v.bind(this)),F(this.f,this.a,"adaptation",this.j.bind(this)),F(this.f,this.a,"trackschanged",this.h.bind(this)),this.g=!0)};O.prototype.enable=function(a){this.i=a};O.prototype.getInitialVideoTrackId=function(){if(!this.b||!this.a)return null;var a=fe(this);return a?a.id:null};O.prototype.selectVideoTrack=function(a,b,c){this.g&&this.a.selectVideoTrack(a.id,b,c)};
O.prototype.v=function(){Date.now()<this.c||this.h()};O.prototype.h=function(){if(this.i){var a=fe(this);if(a){if(a.active){this.c=Date.now()+3E3;return}this.selectVideoTrack(a,!1)}this.c=Number.POSITIVE_INFINITY}};O.prototype.j=function(){this.c==Number.POSITIVE_INFINITY&&(this.c=Date.now()+3E4)};
function fe(a){var b=a.a.ja();if(0==b.length)return null;b.sort(ea);var c;a:{c=a.a.pa();for(var d=0;d<c.length;++d)if(c[d].active){c=c[d];break a}c=null}c=c?c.bandwidth:0;a=a.b.getBandwidth();for(var d=b[0],e=0;e<b.length;++e){var f=b[e],g=e+1<b.length?b[e+1]:{bandwidth:Number.POSITIVE_INFINITY};if(f.bandwidth&&(g=(g.bandwidth+c)/.85,a>=(f.bandwidth+c)/.95&&a<=g&&(d=f,d.active)))break}return d};function ge(a,b,c){D.call(this,null);this.f=a;this.c=b;this.b=Ka(c);this.a=null}q(ge,D);n("shaka.player.HttpVideoSource",ge);ge.prototype.I=function(){};ge.prototype.destroy=function(){this.a&&(this.a.parentElement.removeChild(this.a),this.a=null);this.v=this.b=null};l=ge.prototype;l.Ka=function(a,b){this.v=a;var c=b.mediaKeys;b.src=this.f;c=b.setMediaKeys(c);this.c&&(this.a=document.createElement("track"),this.a.src=this.c,b.appendChild(this.a),this.a.track.mode="showing");return c};l.U=function(){return Promise.resolve()};
l.ja=function(){return[]};l.pa=function(){return[]};l.Ha=function(){return[]};l.Wa=function(){return 5};l.Oa=function(){var a=new ed;a.a=this.b;return[a]};l.Ea=function(){};ge.prototype.selectVideoTrack=function(){return!1};l=ge.prototype;l.Ya=function(){return!1};l.Za=function(){return!1};l.Ga=function(a){this.a&&(this.a.track.mode=a?"showing":"disabled")};l.$a=function(){};l.va=function(){return[]};l.ea=function(){return!1};l.Xa=function(){return!1};
l.Sa=function(a){for(var b in a){var c=a[b],d=oa[c]||null;if(d){var e=la(b),d=Error("Key "+e+" is not usable. "+d);d.type="drm";d.code=c;c=C(d);this.dispatchEvent(c)}}};function P(a,b,c){D.call(this,null);this.a=a;this.X=b;this.i=new gb;this.g=new MediaSource;this.f=null;this.ba=0;this.b=new A;this.G=c;this.G.initialize(b,this);this.D=!1;this.H="en";this.da=!1;this.K=null;this.w=new r;this.h=new ca;this.B=null;this.ua=1;this.c={};this.ca=new r;this.V=0;this.ta=!1;this.o={};this.Y=this.W=this.Z=null;this.S={}}q(P,D);n("shaka.player.StreamVideoSource",P);
P.prototype.I=function(a){null!=a.streamBufferSize&&(this.S.streamBufferSize=a.streamBufferSize);null!=a.segmentRequestTimeout&&(this.S.segmentRequestTimeout=a.segmentRequestTimeout);he(this);null!=a.enableAdaptation&&this.G.enable(Boolean(a.enableAdaptation));null!=a.mpdRequestTimeout&&(this.ba=Number(a.mpdRequestTimeout));null!=a.preferredLanguage&&(this.H=Sa(String(a.preferredLanguage)));null!=a.restrictions&&(this.h=a.restrictions,this.D&&ie(this))};
P.prototype.destroy=function(){this.w.destroy();this.ca.destroy();this.ca=this.w=null;this.W&&(window.clearTimeout(this.W),this.W=null);this.Z&&(window.clearTimeout(this.Z),this.Z=null);this.o=null;this.i.destroy();this.i=null;ga(this.c).forEach(function(a){a.destroy()});this.b=this.c=null;this.a&&(this.a.destroy(),this.a=null);this.G.destroy();this.v=this.h=this.K=this.f=this.g=this.X=this.G=null};l=P.prototype;
l.Ka=function(a,b){if(!this.D){var c=Error("Cannot call attach() right now.");c.type="app";return Promise.reject(c)}this.v=a;this.f=b;this.K=a.ab();F(this.i,this.g,"sourceopen",this.mb.bind(this));F(this.i,this.X,"bandwidth",this.Gb.bind(this));c=this.f.mediaKeys;this.f.src=window.URL.createObjectURL(this.g);c=this.f.setMediaKeys(c);return Promise.all([this.w,c])};
l.U=function(){if(this.D){var a=Error("Cannot call load() right now.");a.type="app";return Promise.reject(a)}if(!this.a||0==this.a.a.length)return a=Error("The manifest does not specify any content."),a.type="stream",Promise.reject(a);a=this.a.a;Wd(a);Xd(a);if(0==this.a.a.length||0==this.a.a[0].a.length)return a=Error("The manifest specifies content that cannot be displayed on this browser/platform."),a.type="stream",Promise.reject(a);this.D=!0;this.S.initialStreamBufferSize=this.a.c;he(this);ie(this);
return Promise.resolve()};l.vb=function(){var a=Date.now(),b=this.Z=null;this.Ta(this.a.g).then(w(this,function(a){b=new Zd(a);return $d(b,this.a)})).then(w(this,function(c){b.destroy();b=null;for(var d=0;d<c.length;++d)je(this,c[d]);this.S.initialStreamBufferSize=this.a.c;he(this);ie(this);0==Object.keys(this.c).length?ke(this):le(this,(Date.now()-a)/1E3)})).catch(w(this,function(a){b&&(b.destroy(),b=null);"aborted"!=a.type&&(a=C(a),this.dispatchEvent(a),this.a&&le(this,0))}))};l.Ta=function(){return Promise.reject("Cannot update manifest with this VideoSource implementation.")};
function je(a,b){var c=b.a.split("/")[0],d=a.c[c];if(d&&d.oa()==b){var e=a.b.get(b.a.split("/")[0]),f=e.map(function(a){return a.m}).reduce(function(a,b){return a.concat(b)},[]).filter(function(a){return a.L&&a.J});if(0==f.length){e.push(b);return}a.o[c].Ia==b&&delete a.o[c];d.ra(f[0],!0);b.destroy()}b.destroy()}
l.ja=function(){if(!this.b.a.hasOwnProperty("video"))return[];for(var a=this.c.video,a=(a=a?a.oa():null)?a.A:0,b=[],c=this.b.get("video"),d=0;d<c.length;++d)for(var e=c[d],f=0;f<e.m.length;++f){var g=e.m[f];if(g.L&&g.J){var h=g.A,g=new da(h,g.bandwidth,g.width,g.height);h==a&&(g.active=!0);b.push(g)}}return b};P.prototype.getVideoTracks=P.prototype.ja;
P.prototype.pa=function(){if(!this.b.a.hasOwnProperty("audio"))return[];for(var a=this.c.audio,a=(a=a?a.oa():null)?a.A:0,b=[],c=this.b.get("audio"),d=0;d<c.length;++d)for(var e=c[d],f=e.lang,g=0;g<e.m.length;++g){var h=e.m[g];if(h.L&&h.J){var k=h.A,h=new fa(k,h.bandwidth,f);k==a&&(h.active=!0);b.push(h)}}return b};P.prototype.getAudioTracks=P.prototype.pa;
P.prototype.Ha=function(){if(!this.b.a.hasOwnProperty("text"))return[];for(var a=this.c.text,b=a?a.oa():null,b=b?b.A:0,c=[],d=this.b.get("text"),e=0;e<d.length;++e)for(var f=d[e],g=f.lang,h=0;h<f.m.length;++h){var k=f.m[h].A,m=new ba(k,g);k==b&&(m.active=!0,m.enabled=a.Aa());c.push(m)}return c};P.prototype.getTextTracks=P.prototype.Ha;P.prototype.Wa=function(){var a=null,b;for(b in this.c){var c=this.c[b].Fa();0<c&&(a=null!=a?Math.min(a,c):c)}return a||0};
P.prototype.Oa=function(){var a;if(this.D){a=this.a.a[0];for(var b=[],c=0;c<a.a.length;++c)b.push.apply(b,dd(a.a[c]));a=b}else a=[];return a};
P.prototype.Ea=function(a){if(this.D){for(var b={},c=this.a.a[0],d=0;d<c.a.length;++d){var e=c.a[d];b[e.A]=e}this.b.a={};c=Ea(a);for(d=0;d<c.length;++d){var e=c[d],f=a.get(e);if("video"==e){var g=f[0].id;this.b.push(e,b[g])}else if("audio"==e)for(var g=f[0].b.split(";")[0],h=0;h<f.length;++h){var k=f[h];k.b.split(";")[0]==g&&this.b.push(e,b[k.id])}else for(h=0;h<f.length;++h)g=f[h].id,this.b.push(e,b[g])}this.da=!0;if(a=this.b.get("audio"))me(this,a),this.b.a.audio=a,a=a[0].lang||this.H,Ra(2,this.H,
a)&&(this.da=!1);if(a=this.b.get("text"))me(this,a),this.b.a.text=a,a=a[0].lang||this.H,Ra(2,this.H,a)||(this.da=!1)}};P.prototype.selectVideoTrack=function(a,b,c){return ne(this,"video",a,b,c)};l=P.prototype;l.Ya=function(a,b){return ne(this,"audio",a,b)};l.Za=function(a,b){return ne(this,"text",a,b)};l.Ga=function(a){var b=this.c.text;b&&b.wa(a)};l.$a=function(a){this.Y=a};
function ie(a){if(a.h){for(var b=!1,c=0;c<a.a.a.length;++c)for(var d=a.a.a[c],e=0;e<d.a.length;++e){var f=d.a[e];if("video"==f.contentType)for(var g=0;g<f.m.length;++g){var h=f.m[g],k=h.J;h.J=!0;a.h.maxWidth&&h.width>a.h.maxWidth&&(h.J=!1);a.h.maxHeight&&h.height>a.h.maxHeight&&(h.J=!1);a.h.maxBandwidth&&h.bandwidth>a.h.maxBandwidth&&(h.J=!1);a.h.minBandwidth&&h.bandwidth<a.h.minBandwidth&&(h.J=!1);k!=h.J&&(b=!0)}}0!=Ca(a.b).length&&b&&(oe(a),0<a.ja().length||(b=Error("The application has restricted all video tracks!"),
b.type="app",b=C(b),a.dispatchEvent(b)))}}l.va=function(){return[]};l.ea=function(){return!1};l.Xa=function(){return this.a?this.a.b:!1};
l.Sa=function(a){for(var b,c=!1,d=new A,e=Ca(this.b),f=0;f<e.length;++f)for(var g=e[f],h=0;h<g.m.length;++h){var k=g.m[h];k.f.forEach(function(a){d.push(a,k)})}for(b in a)if(e=oa[a[b]]||null,g=d.get(b))for(f=0;f<g.length;++f)k=g[f],h=k.L,k.L=!e,h!=k.L&&(c=!0);else la(b);c&&(oe(this),b=this.pa(),a=this.ja(),b=this.b.a.hasOwnProperty("audio")&&0==b.length,a=this.b.a.hasOwnProperty("video")&&0==a.length,b||a)&&(a=Error("The key system has restricted all "+(b&&a?"audio and video tracks.":b?"audio tracks.":
"video tracks.")),a.type="drm",a=C(a),this.dispatchEvent(a))};function oe(a){var b=B({type:"trackschanged",bubbles:!0});a.dispatchEvent(b)}function ne(a,b,c,d,e){if(!a.b.a.hasOwnProperty(b)||!a.c[b])return!1;for(var f=a.b.get(b),g=0;g<f.length;++g)for(var h=f[g],k=0;k<h.m.length;++k){var m=h.m[k];if(m.A==c){if(!m.L||!m.J)return!1;if("text"!=b&&!a.ta)return c=a.o[b],a.o[b]={Ia:m,La:null!=c&&c.La||d,Ma:null!=c&&c.Ma||e},!0;rd(a.K,m);a.c[b].ra(m,d,e);return!0}}return!1}
function me(a,b){for(var c=0;2>=c;++c)for(var d=0;d<b.length;++d){var e=b[d];if(Ra(c,a.H,e.lang)){b.splice(d,1);b.splice(0,0,e);return}}for(d=0;d<b.length;++d)if(e=b[d],e.b){b.splice(d,1);b.splice(0,0,e);break}}l.mb=function(){this.i.sa(this.g,"sourceopen");ke(this).then(w(this,function(){this.w&&this.w.resolve()})).catch(w(this,function(a){this.w&&this.w.reject(a)}))};
function ke(a){for(var b=[],c=["audio","video","text"],d=0;d<c.length;++d){var e=c[d];a.b.a.hasOwnProperty(e)&&b.push(a.b.get(e)[0])}for(var f=pe(a,b),d=0;d<c.length;++d)if(e=c[d],a.b.a.hasOwnProperty(e)&&!f[e])return a=Error("Unable to select an initial "+e+" stream: all "+e+" streams have been restricted (by the application or by the key system)."),a.type="stream",Promise.reject(a);b=ga(f).map(function(a){return a.F.create()});return Promise.all(b).then(w(a,function(a){if(!a.every(function(a){return a.length()}))return a=
Error("Some streams are not available."),a.type="stream",Promise.reject(a);a=qe(this,a);if(!a)return a=Error("Some streams are not available."),a.type="stream",Promise.reject(a);if(!re(this,f))return a=Error("Failed to create Stream objects."),a.type="stream",Promise.reject(a);this.G.start();se(this,f,a);return Promise.resolve()})).catch(w(a,function(a){if("aborted"!=a.type)return Object.keys(this.c),this.a.b?(le(this,0),Promise.resolve()):Promise.reject(a)}))}
function pe(a,b){for(var c={},d=0;d<b.length;++d){var e=b[d],f=null;if("video"==e.contentType){var g=a.G.getInitialVideoTrackId();if(null==g)continue;f=e.m.filter(function(a){return a.A==g});if(0==f.length)continue;f=f[0]}else if("audio"==e.contentType){f=e.m.filter(function(a){return a.L&&a.J});if(0==f.length)continue;f=e.m[Math.floor(f.length/2)]}else 0<e.m.length&&(f=e.m[0]);c[e.contentType]=f}return c}
function re(a,b){var c={},d;for(d in b){var e=b[d],e="text"==d?new hd(a,a.f):te(a,e);if(!e)return ga(c).forEach(function(a){a.destroy()}),!1;c[d]=e}a.c=c;return!0}function te(a,b){var c=new id(a,a.f,a.g,ad(b),a.X);c.H(a.S);return c}
function se(a,b,c){a.ua=a.f.playbackRate;a.f.playbackRate=0;ue(a,c);var d;d=a.a.b?c.end:a.Y&&a.Y<=c.end&&a.Y>=c.start?a.Y:c.start;F(a.i,a.f,"seeking",a.rb.bind(a));a.f.currentTime!=d&&(a.f.currentTime=d,a.B=d);ve(a,c.start,c.end);c=[];for(var e in a.c){d=a.c[e];c.push(d.cb(a.ca));F(a.i,d,"ended",a.tb.bind(a));var f=b[e];rd(a.K,f);d.ra(f,!1)}Promise.all(c).then(a.ib.bind(a)).catch(w(a,function(a){"destroy"!=a.type&&(a=C(a),this.dispatchEvent(a))}));a.Ga(a.da)}
l.ib=function(a){Ia(a&&a.length==Object.keys(this.c).length);for(var b=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,d=0;d<a.length;++d)var e=a[d],b=Math.min(b,e),c=Math.max(c,e);a=we(this);for(d=0;d<a.length;++d)a[d].ha(c);xe(this,a,c);d=Ca(this.b).map(function(a){return a.m}).reduce(function(a,b){return a.concat(b)},[]).map(function(a){var b=[a.F.create()];a.C&&b.push(a.C.create());return Promise.all(b)});Promise.all(d).then(w(this,function(a){for(var b=0;b<a.length;++b)a[b][0].ha(c);this.ta=
!0;for(var d in this.o)a=this.o[d],b=this.c[d],rd(this.K,a.Ia),b.ra(a.Ia,a.La,a.Ma);this.o={}})).catch(w(this,function(a){"aborted"!=a.type&&(a=C(a),this.dispatchEvent(a))}))};function xe(a,b,c){if(b=qe(a,b))ue(a,b),ve(a,b.start,b.end);0!=c?(c=a.f.currentTime+c,a.f.currentTime=c,a.B=c):c=a.f.currentTime;a.a.b&&b&&(a.V=b.end-c,a.V=Math.max(a.V,0));a.f.playbackRate=a.ua;a.a.b&&null!=a.a.f&&le(a,a.V);ye(a);a.ca.resolve()}
function ue(a,b){if(a.a.b)isNaN(a.g.duration)&&(a.g.duration=b.end+2592E3);else if(isNaN(a.g.duration)||b.end>a.g.duration){a.g.duration=b.end;for(var c=0;c<a.g.sourceBuffers.length;++c)a.g.sourceBuffers[c].appendWindowEnd=b.end}}l.wb=function(){this.W=null;ye(this);var a=qe(this,we(this));a&&(ve(this,a.start,a.end),this.f.paused||ze(this,this.f.currentTime,a.start,a.end))};function ve(a,b,c){b=B({type:"seekrangechanged",bubbles:!0,start:b,end:c});a.dispatchEvent(b)}
l.rb=function(){var a=this.f.currentTime;if(null!=this.B){if(a>=this.B-.01&&a<=this.B+.01){this.B=null;return}this.B=null}var b=qe(this,we(this));if(b){var c=b.end;(b=ze(this,a,b.start,c))||(a<=c+.01?b=!1:(this.f.currentTime=c,b=!0));if(!b)for(var d in this.c)this.c[d].Va()}};function ze(a,b,c,d){if(b>=c-.01)return!1;a.f.currentTime=Math.min(c+(a.a.b?a.a.c:0),d);return!0}l.tb=function(){if(!this.a.b){for(var a in this.c)if(!this.c[a].Qa())return;this.g.endOfStream()}};
l.Gb=function(){var a=this.K,b=this.X.getBandwidth();a.estimatedBandwidth=b;a.bandwidthHistory.push(new td(b))};function we(a){return ga(a.c).map(function(a){return a.Pa()}).filter(function(a){return null!=a})}
function qe(a,b){for(var c=0,d=Number.POSITIVE_INFINITY,e=0;e<b.length;++e){var f=b[e].Ba(),c=Math.max(c,f.start);null!=f.end&&(d=Math.min(d,f.end))}if(d==Number.POSITIVE_INFINITY)if(d=a.a.a[0],d.b)d=(d.start||0)+d.b;else return null;a.a.b&&(d=Math.max(d-(a.a.c+a.V),c));return c>d?null:{start:c,end:d}}function le(a,b){if(null!=a.a.f){var c=Math.max(a.a.f,3),c=Math.max(c-b,0);a.Z=window.setTimeout(a.vb.bind(a),1E3*c)}}function ye(a){a.a.b&&(a.W=window.setTimeout(a.wb.bind(a),1E3))}
function he(a){for(var b in a.c)a.c[b].H(a.S)};function Ae(a,b){wb.call(this,"readwrite",b);this.j=a;this.b=0}q(Ae,wb);
function Be(a,b,c,d,e){for(var f=[],g=[],h=0,k=0,m=[],p=b.map(function(a){return a.F.create()}),p=Promise.all(p),t=b.map(function(a){return a.C.create()}),t=Promise.all(t),p=Promise.all([p,t]).then(function(a){f=a[0];g=a[1];h=f.reduce(function(a,b){return a+b.length()},0)}),t=0;t<b.length;++t)p=p.then(function(a){return Ce(this,b[a],f[a],g[a],h,k)}.bind(a,t)),p=p.then(function(a,b){k+=f[a].length();m.push(b)}.bind(a,t));return p.then(w(a,function(){return De(Db(this))})).then(w(a,function(a){var b=
new r;c=na(c);var f={group_id:a,stream_ids:m,session_ids:c,duration:d,key_system:e.a,license_server:e.j,with_credentials:e.l,distinctive_identifier:e.g,audio_robustness:e.f,video_robustness:e.v},g=Db(this).put(f);g.onsuccess=function(){b.resolve(a)};g.onerror=function(){b.reject(g.error)};return b}))}function Ee(a,b){return Eb(Db(a),b).then(w(a,function(a){var d=[],e;for(e in a.stream_ids)d.push(Fe(this,a.stream_ids[e]));a=Db(this);d.push(a.delete(b));return Promise.all(d)}))}
function Ce(a,b,c,d,e,f){var g=[De(Cb(a)),De(zb(a).index("stream"))],g=Promise.all(g).then(w(a,function(a){return{qa:Math.max(a[0],a[1]),ga:new ArrayBuffer(0),Da:0,u:[],za:null,Jb:e,Ua:f}})),g=g.then(a.f.bind(a,c));return g=g.then(a.g.bind(a,b,d))}function De(a){var b=new r,c=a.openCursor(null,"prev");c.onsuccess=function(a){a.target.result?b.resolve(a.target.result.key+1):b.resolve(0)};c.onerror=function(){b.reject(c.error)};return b}
Ae.prototype.g=function(a,b,c){var d=new r;a={stream_id:c.qa,mime_type:a.a,codecs:a.b,init_segment:b,references:c.u};var e=Cb(this).put(a);e.onsuccess=function(){d.resolve(c.qa)};e.onerror=function(){d.reject(e.error)};return d};Ae.prototype.f=function(a,b){for(var c=Promise.resolve(),d=0;d<a.length();++d)var e=a.get(d),f=d==a.length()-1,f=this.c.bind(this,e,b,f),c=c.then(this.i.bind(this,e)),c=c.then(f);return c.then(function(){return Promise.resolve(b)}).catch(w(this,function(a){Fe(this,b.qa);return Promise.reject(a)}))};
Ae.prototype.c=function(a,b,c,d){var e=new r;0==b.ga.byteLength&&(b.za=a);b.ga=Ge(b.ga,d);b.Ua++;var f=B({type:"progress",detail:b.Ua/b.Jb*100,bubbles:!0});if(1048576<=b.ga.byteLength||c){c={stream_id:b.qa,segment_id:b.Da,content:b.ga};var g=zb(this).put(c);b.u.push({start_time:b.za.b,start_byte:b.za.url.f,end_time:a.a,url:"idb://"+b.qa+"/"+b.Da});b.Da++;b.ga=new ArrayBuffer(0);g.onerror=function(){e.reject(g.error)};g.onsuccess=w(this,function(){this.dispatchEvent(f);e.resolve()})}else this.dispatchEvent(f),
e.resolve();return e};function Ge(a,b){var c=new Uint8Array(a.byteLength+b.byteLength);c.set(new Uint8Array(a),0);c.set(new Uint8Array(b),a.byteLength);return c.buffer}Ae.prototype.i=function(a){var b=new pb;b.c=1E3*this.b;return qb(a.url,b,this.j)};
function Fe(a,b){var c=new r,d=Cb(a).delete(b);d.onerror=function(){c.reject(d.error)};var e=zb(a);e.index("stream").openKeyCursor(IDBKeyRange.only(b)).onsuccess=function(a){if(a=a.target.result)e.delete(a.primaryKey),a.continue()};e.transaction.oncomplete=function(){c.resolve()};return c};function Q(a,b,c,d){K.call(this,a);this.f=b;this.o=c;this.v=d;this.c=this.j=this.a=null;He(this)}q(Q,K);Q.prototype.destroy=function(){this.o=this.f=null;K.prototype.destroy.call(this)};Q.prototype.ia=function(a){Ie(this,Ga()/1E3);return K.prototype.ia.call(this,a)};Q.prototype.Ca=function(a){Wc(this,a);null==this.a&&He(this);return!0};
function He(a){if(0!=a.length()){a.length();var b=null!=M(a).a?M(a).a:M(a).b;if(a.f.b>a.v)a.a=b;else{var c=a.v-(a.f.b+a.o.start);0>c?a.a=b:c<Math.max(M(a).b,M(a).a||0)?(M(a),a.a=b):a.a=c}a.j=M(a).b;a.c=L(a).b}}Q.prototype.ha=function(a){a=K.prototype.ha.call(this,a);null!=this.a&&(this.j+=a,this.c+=a,this.j>this.a&&(this.a+=a));return a};Q.prototype.Ba=function(){return Je(this,Ga()/1E3)};
function Je(a,b){Ie(a,b);if(null==a.a||null==a.j||null==a.c)return{start:0,end:0};var c=b-a.v,d=a.a+c;null!=a.f.f&&(d=d-a.c-a.f.f,0<d&&(a.c+=d));c=a.j+c;c=0<a.length()?null!=M(a).a?Math.min(c,M(a).a):c:a.c;c=Math.max(c,a.c);return{start:a.c,end:c}}function Ie(a,b){if(null!=a.f.f)if(null==a.a)a.length();else{for(var c=a.a+(b-a.v),d=0,e=0;e<a.u.length;++e){var f=null;e<a.u.length-1?f=a.u[e+1].a:(f=a.u[e],f=null!=f.a?f.a+(f.a-f.b):null);if(null!=f&&f<c-a.f.f)++d;else break}0<d&&a.u.splice(0,d)}};function Ke(a,b,c,d,e,f,g){this.g=a;this.j=b;this.f=c;this.a=d;this.c=e;this.v=f;this.i=this.b=null;this.h=g}Ke.prototype.destroy=function(){this.h=this.j=this.g=null;this.a.g();this.a=null;this.c&&(this.c.g(),this.c=null);this.i&&(this.i.destroy(),this.i=null);this.b=null};
Ke.prototype.create=function(){if(this.b)return this.b;var a=[qb(this.a)];"webm"==this.f&&a.push(qb(this.c));return this.b=Promise.all(a).then(w(this,function(a){var c=a[0];a=a[1]||null;var d=null;"mp4"==this.f?(d=new Uc,d=d.parse(new DataView(c),this.a.f,this.a.c,this.h)):"webm"==this.f&&(d=new Vc,d=d.parse(new DataView(c),new DataView(a),this.a.c,this.h));if(!d)return c=Error("Failed to parse SegmentReferences from "+this.a.toString()+" (or one of its fallbacks)."),c.type="stream",Promise.reject(c);
var e;"dynamic"==this.g.type?e=new Q(d,this.g,this.j,this.v):e=new K(d);return Promise.resolve(e)}))};function Le(a,b,c,d,e){this.b=a;this.c=b;this.f=c;this.h=d;this.a=null;this.g=e}Le.prototype.destroy=function(){this.g=this.f=this.c=this.b=null;this.a&&(this.a.destroy(),this.a=null)};
Le.prototype.create=function(){if(this.a)return Promise.resolve(this.a);for(var a=this.f.a,b=Me(a.c,a.b||1,this.c.a||0),c=[],d=0;d<b.length;++d){var e=b[d].start,f=e/a.b,g=b[d].end/a.b,e=Ne(this.g,this.f,d+a.j,e);if(!e)return a=Error("Failed to generate media URL."),a.type="dash",Promise.reject(a);var h=(a.i||0)/a.b;c.push(new Rc(f-h,g-h,e))}"dynamic"==this.b.type?this.a=new Q(c,this.b,this.c,this.h):this.a=new K(c);return Promise.resolve(this.a)};function Oe(){this.id=this.url=null;this.type="static";this.c=this.j=this.s=null;this.h=5;this.f=this.b=this.g=null;this.i=1;this.a=[]}function Pe(){this.g=this.f=this.c=this.s=this.a=this.start=this.id=null;this.b=[]}function Qe(){this.i=this.b=this.height=this.width=this.contentType=this.lang=this.group=this.id=null;this.c=!1;this.h=this.g=this.f=this.s=null;this.j=[];this.a=[]}function Re(){this.value=null}function Se(){this.contentType=this.lang=this.id=null}
function Te(){this.a=this.b=this.g=this.s=this.h=this.f=this.height=this.width=this.bandwidth=this.lang=this.id=null;this.c=[]}function Ue(){this.value=this.schemeIdUri=this.b=null;this.children=[];this.a=this.pssh=null}function Ve(){this.parsedPssh=this.psshBox=null}function We(){this.url=null}function Xe(){this.url=null}function Ze(){this.s=null;this.g=1;this.c=this.b=this.a=this.f=null}
Ze.prototype.clone=function(){var a=new Ze;a.s=$e(this.s);a.g=this.g;a.f=this.f;a.a=R(this.a);a.b=R(this.b);a.c=R(this.c);return a};function af(){this.a=this.url=null}af.prototype.clone=function(){var a=new af;a.url=$e(this.url);a.a=R(this.a);return a};function bf(){this.a=this.url=null}bf.prototype.clone=function(){var a=new bf;a.url=$e(this.url);a.a=R(this.a);return a};function cf(){this.s=null;this.f=1;this.b=this.g=null;this.i=1;this.h=null;this.a=[];this.c=null}
cf.prototype.clone=function(){var a=new cf;a.s=$e(this.s);a.f=this.f;a.g=this.g;a.b=this.b;a.i=this.i;a.h=R(this.h);a.a=$e(this.a)||[];a.c=R(this.c);return a};function df(){this.a=this.b=null}df.prototype.clone=function(){var a=new df;a.b=$e(this.b);a.a=R(this.a);return a};function ef(){this.b=1;this.a=this.i=null;this.j=1;this.c=this.g=this.f=this.h=null}ef.prototype.clone=function(){var a=new ef;a.b=this.b;a.i=this.i;a.a=this.a;a.j=this.j;a.h=this.h;a.f=this.f;a.g=this.g;a.c=R(this.c);return a};
function ff(){this.a=[]}ff.prototype.clone=function(){var a=new ff;a.a=$e(this.a)||[];return a};function gf(){this.c=this.a=this.b=null}gf.prototype.clone=function(){var a=new gf;a.b=this.b;a.a=this.a;a.c=this.c;return a};function hf(a,b){this.na=a;this.end=b}hf.prototype.clone=function(){return new hf(this.na,this.end)};Oe.TAG_NAME="MPD";Pe.TAG_NAME="Period";Qe.TAG_NAME="AdaptationSet";Re.TAG_NAME="Role";Se.TAG_NAME="ContentComponent";Te.TAG_NAME="Representation";Ue.TAG_NAME="ContentProtection";
Ve.TAG_NAME="cenc:pssh";We.TAG_NAME="BaseURL";Xe.TAG_NAME="Location";Ze.TAG_NAME="SegmentBase";af.TAG_NAME="RepresentationIndex";bf.TAG_NAME="Initialization";cf.TAG_NAME="SegmentList";df.TAG_NAME="SegmentURL";ef.TAG_NAME="SegmentTemplate";ff.TAG_NAME="SegmentTimeline";gf.TAG_NAME="S";
Oe.prototype.parse=function(a,b){this.url=a.s;this.id=S(b,"id",T);this.type=S(b,"type",T)||"static";this.c=S(b,"mediaPresentationDuration",jf);this.h=S(b,"minBufferTime",jf,this.h);this.g=S(b,"minimumUpdatePeriod",jf,this.g);this.b=S(b,"availabilityStartTime",kf,this.b);this.f=S(b,"timeShiftBufferDepth",jf,this.f);this.i=S(b,"suggestedPresentationDelay",jf,this.i);var c=a.s,d=U(this,b,We);this.s=lf(c,d);if(d=V(this,b,Xe))this.j=mf(c,d.url);this.a=U(this,b,Pe)};
Pe.prototype.parse=function(a,b){this.id=S(b,"id",T);this.start=S(b,"start",jf);this.a=S(b,"duration",jf);var c=U(this,b,We);this.s=lf(a.s,c);this.c=V(this,b,Ze);this.f=V(this,b,cf);this.g=V(this,b,ef);this.b=U(this,b,Qe);nf(this)};function nf(a){for(var b=[],c=0;c<a.b.length;++c){var d=a.b[c];null!=d.group&&(b[d.group]=!0)}for(c=0;c<a.b.length;++c)if(d=a.b[c],null==d.group){for(var e=1;1==b[e];)++e;b[e]=!0;d.group=e}}
Qe.prototype.parse=function(a,b){var c=V(this,b,Se)||{},d=V(this,b,Re);this.id=S(b,"id",T);this.group=S(b,"group",W);this.lang=S(b,"lang",T,c.lang);this.contentType=S(b,"contentType",T,c.contentType);this.width=S(b,"width",X);this.height=S(b,"height",X);this.b=S(b,"mimeType",T);this.i=S(b,"codecs",T);this.c=d&&"main"==d.value;this.lang&&(this.lang=Sa(this.lang));c=U(this,b,We);this.s=lf(a.s,c);this.j=U(this,b,Ue);!this.contentType&&this.b&&(this.contentType=this.b.split("/")[0]);this.f=a.c?of(this,
b,a.c):V(this,b,Ze);this.g=a.f?of(this,b,a.f):V(this,b,cf);this.h=a.g?of(this,b,a.g):V(this,b,ef);this.a=U(this,b,Te);!this.b&&this.a.length&&(this.b=this.a[0].f,!this.contentType&&this.b&&(this.contentType=this.b.split("/")[0]))};Re.prototype.parse=function(a,b){this.value=S(b,"value",T)};Se.prototype.parse=function(a,b){this.id=S(b,"id",T);this.lang=S(b,"lang",T);this.contentType=S(b,"contentType",T);this.lang&&(this.lang=Sa(this.lang))};
Te.prototype.parse=function(a,b){this.id=S(b,"id",T);this.bandwidth=S(b,"bandwidth",X);this.width=S(b,"width",X,a.width);this.height=S(b,"height",X,a.height);this.f=S(b,"mimeType",T,a.b);this.h=S(b,"codecs",T,a.i);this.lang=a.lang;var c=U(this,b,We);this.s=lf(a.s,c);this.c=U(this,b,Ue);this.g=a.f?of(this,b,a.f):V(this,b,Ze);this.b=a.g?of(this,b,a.g):V(this,b,cf);this.a=a.h?of(this,b,a.h):V(this,b,ef);0==this.c.length&&(this.c=a.j)};
Ue.prototype.parse=function(a,b){this.b=b;this.schemeIdUri=S(b,"schemeIdUri",T);this.value=S(b,"value",T);var c=S(b,"cenc:default_KID",T);c&&(this.a=c.replace(/[-]/g,""));this.pssh=V(this,b,Ve);this.children=Array.prototype.slice.call(b.childNodes)};Ve.prototype.parse=function(a,b){var c=pf(b);if(c){this.psshBox=sa(c);try{this.parsedPssh=new Rb(this.psshBox)}catch(d){if(!(d instanceof RangeError))throw d;}}};We.prototype.parse=function(a,b){this.url=pf(b)};
Xe.prototype.parse=function(a,b){this.url=pf(b)};Ze.prototype.parse=function(a,b){this.s=a.s||this.s;this.g=S(b,"timescale",X,this.g);this.f=S(b,"presentationTimeOffset",W,this.f);this.a=S(b,"indexRange",qf,this.a);this.b=V(this,b,af)||this.b;this.c=V(this,b,bf)||this.c};af.prototype.parse=function(a,b){var c=S(b,"sourceURL",T);this.url=mf(a.s,c);this.a=S(b,"range",qf,R(a.a))};bf.prototype.parse=function(a,b){var c=S(b,"sourceURL",T);this.url=mf(a.s,c);this.a=S(b,"range",qf)};
cf.prototype.parse=function(a,b){this.s=a.s||this.s;this.f=S(b,"timescale",X,this.f);this.g=S(b,"presentationTimeOffset",W,this.g);this.b=S(b,"duration",X,this.b);this.i=S(b,"startNumber",W,this.i);this.h=V(this,b,bf)||this.h;var c=U(this,b,df);this.a=c&&0<c.length?c:this.a;this.c=V(this,b,ff)||this.c};df.prototype.parse=function(a,b){var c=S(b,"media",T);this.b=mf(a.s,c);this.a=S(b,"mediaRange",qf)};
ef.prototype.parse=function(a,b){this.b=S(b,"timescale",X,this.b);this.i=S(b,"presentationTimeOffset",W,this.i);this.a=S(b,"duration",X,this.a);this.j=S(b,"startNumber",W,this.j);this.h=S(b,"media",T,this.h);this.f=S(b,"index",T,this.f);this.g=S(b,"initialization",T,this.g);this.c=V(this,b,ff)||this.c};ff.prototype.parse=function(a,b){this.a=U(this,b,gf)};gf.prototype.parse=function(a,b){this.b=S(b,"t",W);this.a=S(b,"d",W);this.c=S(b,"r",rf)};
function lf(a,b){if(!b||0===b.length)return a;for(var c=[],d=0;d<b.length;d++){var e=b[d].url;null==a||0===a.length?c.push(new J(e)):(e=mf(a.slice(0,1),e),c.push(e[0]))}return c}function mf(a,b){if(!b)return a;var c=new J(b);return a?a.map(function(a){return a.resolve(c)}):[c]}function of(a,b,c){var d=R(c);(b=sf(b,c.constructor.TAG_NAME))&&d.parse(a,b);return d}function V(a,b,c){var d=null;if(b=sf(b,c.TAG_NAME))d=new c,d.parse(a,b);return d}
function sf(a,b){for(var c=null,d=0;d<a.childNodes.length;d++)if(a.childNodes[d].tagName==b){if(c)return null;c=a.childNodes[d]}return c}function U(a,b,c){for(var d=[],e=0;e<b.childNodes.length;e++)if(b.childNodes[e].tagName==c.TAG_NAME){var f=new c;f.parse.call(f,a,b.childNodes[e]);d.push(f)}return d}function pf(a){a=a.firstChild;return a.nodeType!=Node.TEXT_NODE?null:a.nodeValue}function $e(a){return a?a.map(function(a){return a.clone()}):null}function R(a){return a?a.clone():null}
function S(a,b,c,d){a=c(a.getAttribute(b));return null!=a?a:void 0!==d?d:null}function kf(a){if(!a)return null;a=Date.parse(a);return isNaN(a)?null:Math.floor(a/1E3)}
function jf(a){if(!a)return null;var b=/^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(a);if(!b)return null;a=0;var c=W(b[1]);c&&(a+=31536E3*c);(c=W(b[2]))&&(a+=2592E3*c);(c=W(b[3]))&&(a+=86400*c);(c=W(b[4]))&&(a+=3600*c);(c=W(b[5]))&&(a+=60*c);b=window.parseFloat(b[6]);(b=isNaN(b)?null:b)&&(a+=b);return a}
function qf(a){var b=/([0-9]+)-([0-9]+)/.exec(a);if(!b)return null;a=W(b[1]);if(null==a)return null;b=W(b[2]);return null==b?null:new hf(a,b)}function rf(a){a=window.parseInt(a,10);return isNaN(a)?null:a}function X(a){a=window.parseInt(a,10);return 0<a?a:null}function W(a){a=window.parseInt(a,10);return 0<=a?a:null}function T(a){return a};function tf(a,b,c,d){for(var e=b.a,f=[],g=0;g<d;++g){var h=g+c,k=(h-1)*e.a,m=k/e.b,k=(k+e.a)/e.b,h=Ne(a,b,h-1+e.j,(h-1)*e.a);if(!h)return null;f.push(new Rc(m,k,h))}return f}function Ne(a,b,c,d){if(!b.a)return null;var e=b.a.h;if(!e)return b.s?new G(a,b.s,0,null):null;c=uf(e,b.id,c,b.bandwidth,d);if(!c)return null;b=Oc(b.s,c);return new G(a,b,0,null)}
function uf(a,b,c,d,e){var f={RepresentationID:b,Number:c,Bandwidth:d,Time:e};a=a.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)d)?\$/g,function(a,b,c){if("$$"==a)return"$";var d=f[b];if(null==d)return a;"RepresentationID"==b&&c&&(c=void 0);a=d.toString();c=window.parseInt(c,10)||1;c=Math.max(0,c-a.length);return Array(c+1).join("0")+a});try{return new J(a)}catch(g){if(g instanceof URIError)return null;throw g;}}
function Me(a,b,c){var d=0;b*=c;a=a.a;c=[];for(var e=0;e<a.length&&a[e].a;++e){var f=a[e].b,f=null!=f?f:d,g=a[e].c||0;0>g&&(g=a[e].a,g=e+1===a.length?Math.ceil((a[0].b+b-f)/g)-1:Math.ceil((a[e+1].b-f)/g)-1);0<c.length&&f!=d&&(c[c.length-1].end=f);for(var h=0;h<=g;++h)d=f+a[e].a,c.push({start:f,end:d}),f=d}return c};function vf(a,b){this.a=new pb;this.a.f="text";this.a.a=3;this.a.c=1E3*(null!=b?b:0);this.a.g=!0;this.b=a}function wf(a){var b=a.b;return qb(b,a.a).then(function(a){var d;d=b.c;d=(a=(new DOMParser).parseFromString(a,"text/xml"))?V({s:d},a,Oe):null;if(d)return Promise.resolve(d);d=Error("MPD parse failure.");d.type="dash";return Promise.reject(d)})};function xf(a,b,c,d,e){this.c=a;this.b=b;this.g=c;this.a=null;this.h=d;this.f=e}xf.prototype.destroy=function(){this.f=this.g=this.b=this.c=null;this.a&&(this.a.destroy(),this.a=null)};
xf.prototype.create=function(){if(this.a)return Promise.resolve(this.a);var a=this.g.b,b=[];a.c&&(b=Me(a.c,a.f||1,this.b.a||0));var c=0;a.b&&a.i?c=a.b*a.i:0<b.length&&(c=b[0].start-(a.g||0));var d=a.a.length;0<b.length&&b.length!=a.a.length&&(d=Math.min(b.length,a.a.length));for(var e=[],f=0;f<d;++f){var g=a.a[f],h=c/a.f,k=null,m=null;a.b?(k=c+a.b,m=k/a.f):0<b.length?(k=b[f].end-(a.g||0),m=k/a.f):(m=h+this.b.a,k=m*a.f);var c=k,k=0,p=null;g.a&&(k=g.a.na,p=g.a.end);e.push(new Rc(h,m,new G(this.f,g.b,
k,p)))}"dynamic"==this.c.type?this.a=new Q(e,this.c,this.b,this.h):this.a=new K(e);return Promise.resolve(this.a)};function yf(a,b,c,d,e){var f=1,g=0,h;if(a.b>d)h=null;else{var k=a.i||0,m=a.f||0;h=c.a;h=h.a/h.b;var p=d-(a.b+b.start);0>p?h=null:(m=p-2*h-m,0>m&&(m=0),m=Math.ceil(m/h)*h,p-=h,0>p?h=null:(k=Math.floor(p/h)*h-k,0>k&&(k=0),k=Math.floor(k/h)*h,h={Na:m/h+1,current:(k>=m?k:m)/h+1}))}h&&(f=h.Na,g=h.current-h.Na+1);f=tf(e,c,f,g);if(null==f)throw a=Error("Failed to generate SegmentReferences."),a.type="stream",a;Q.call(this,f,a,b,d);this.l=c;this.i=this.b=0<this.length()?a.b+b.start+M(this).a:null;this.h=
h?h.current+1:null;this.w=e}q(yf,Q);yf.prototype.destroy=function(){this.w=this.l=null;Q.prototype.destroy.call(this)};yf.prototype.ia=function(a){var b=Ga()/1E3;zf(this,b);Ie(this,b);return K.prototype.ia.call(this,a)};yf.prototype.Ca=function(a){if(null!=this.b||!(a instanceof yf)||null==a.b)return!1;this.b=a.b;this.i=a.i;this.h=a.h;Wc(this,a);zf(this,Ga()/1E3);He(this);return!0};yf.prototype.ha=function(a){a=Q.prototype.ha.call(this,a);null!=this.b&&(this.b+=a,this.i+=a);return a};
yf.prototype.Ba=function(){var a=Ga()/1E3;zf(this,a);return Je(this,a)};function zf(a,b){if(null!=a.b&&null!=a.i&&null!=a.h){var c=a.l.a,c=c.a/c.b,d=Math.floor((a.i+(b-a.v)-a.b)/c);if(0!=d){var e=tf(a.w,a.l,a.h,d);Array.prototype.push.apply(a.u,Tc(e,a.g));a.b+=d*c;a.h+=d}}};function Af(a,b,c,d,e){this.f=a;this.b=b;this.c=c;this.h=d;this.a=null;this.g=e}Af.prototype.destroy=function(){this.g=this.c=this.b=this.f=null;this.a&&(this.a.destroy(),this.a=null)};
Af.prototype.create=function(){if(this.a)return Promise.resolve(this.a);if("dynamic"==this.f.type)try{this.a=new yf(this.f,this.b,this.c,this.h,this.g)}catch(a){return Promise.reject(a)}else{var b;b=this.c.a;if(b=tf(this.g,this.c,1,Math.ceil(this.b.a/(b.a/b.b)))){if(0<b.length){var c=b[b.length-1];b[b.length-1]=Sc(c,c.b,this.b.a)}b=new K(b)}else b=null;this.a=b;if(!this.a)return b=Error("Failed to generate SegmentReferences"),b.type="stream",Promise.reject(b)}return Promise.resolve(this.a)};function Bf(a){this.a=a}
function Cf(a,b,c){for(var d=Ga()/1E3,e=0;e<b.a.length;++e)for(var f=b.a[e],g=0;g<f.b.length;++g){var h=f.b[g];if("text"!=h.contentType)for(var k=0;k<h.a.length;++k){var m=h.a[k],p=0,p=p+(m.g?1:0),p=p+(m.b?1:0),p=p+(m.a?1:0);0==p?(h.a.splice(k,1),--k):1!=p&&(m.g?(m.b=null,m.a=null):m.b&&(m.a=null))}}Df(b);for(e=0;e<b.a.length;++e)for(f=b.a[e],g=0;g<f.b.length;++g){k=h=f.b[g];m=null;for(p=0;p<k.a.length;++p){var t=k.a[p].f||"";m?t!=m&&(k.a.splice(p,1),--p):m=t}0==h.a.length&&(f.b.splice(g,1),--g)}"dynamic"==
b.type&&null==b.b&&(b.b=d);e=new gd;"dynamic"==b.type&&(e.b=!0,e.f=b.g,e.g=new G(c,b.j||b.url));e.c=b.h||5;for(f=0;f<b.a.length;++f){g=b.a[f];if(null==g.start)break;g=Ef(a,b,g,d,c);e.a.push(g)}return e}
function Df(a){if(a.a.length){null==a.a[0].start&&(a.a[0].start=0);var b=function(a){return 0==a||!!a};"dynamic"==a.type&&(a.c=null);b(a.c)&&1==a.a.length&&!b(a.a[0].a)&&(a.a[0].a=a.c);for(var c=0,d=!0,e=0;e<a.a.length;++e){var f=a.a[e-1],g=a.a[e],h=a.a[e+1]||{start:a.c};!b(g.start)&&f&&b(f.start)&&b(f.a)&&(g.start=f.start+f.a);!b(g.a)&&b(h.start)&&(g.a=h.start-g.start);null!=g.start&&null!=g.a?c+=g.a:d=!1}b(a.c)||(e=a.a[a.a.length-1],d?a.c=c:b(e.start)&&b(e.a)?a.c=e.start+e.a:"dynamic"!=a.type&&
(a.c=c))}}function Ef(a,b,c,d,e){var f=new fd;f.id=c.id;f.start=c.start;f.b=c.a;var g=new A;c.b.forEach(function(a){g.push(a.contentType||"",a)});for(var h=Ea(g),k=0;k<h.length;++k){var m=new A;g.get(h[k]).forEach(function(a){m.push(a.group,a)});for(var p=Ea(m),t=0;t<p.length;++t){var y=new A;m.get(p[t]).forEach(function(a){y.push(a.lang,a)});for(var u=Ea(y),v=0;v<u.length;++v){var ma=y.get(u[v]),ma=Ff(a,b,c,ma,d,e);f.a.push(ma)}}}return f}
function Ff(a,b,c,d,e,f){Ia(d.every(function(a){return a.group==d[0].group&&(a.lang||"")==(d[0].lang||"")&&(a.contentType||"")==(d[0].contentType||"")}));var g=new bd,h=d.filter(function(a){return null!=a.id});h.length==d.length&&(g.id=h.map(function(a){return a.id}).sort().reduce(function(a,b){return a+","+b}));g.lang=d[0].lang||"";g.contentType=d[0].contentType||"";g.b=d.some(function(a){return a.c});for(var h={},k=0;k<d.length;++k)for(var m=d[k],p=0;p<m.a.length;++p){var t=m.a[p],y=Gf(a,t),u=g.a.slice(0);
Hf(y,u);0==u.length&&0<g.a.length||!(t=If(b,c,t,e,f))||(g.m.push(t),g.a=u,h[t.A]=m)}if(g.a.some(function(a){return""==a.a}))return g.m.forEach(function(a){a.L=!0}),g;a=Jf(d);for(k=0;k<g.m.length;++k)t=g.m[k],m=h[t.A],m==a&&(t.L=!0);return g}function Jf(a){for(var b=null,c=null,d=0;d<a.length;++d)for(var e=a[d],f=0;f<e.a.length;++f){var g=e.a[f],g=(g.width||1)*(g.height||1)*(g.bandwidth||1);if(null==b||g<b)b=g,c=e}return c}
function Hf(a,b){if(0==b.length)Array.prototype.push.apply(b,a);else for(var c=0;c<b.length;++c){for(var d=!1,e=0;e<a.length;++e){var f=b[c],g=a[e];if(f.a==g.a&&f.j==g.j&&f.l==g.l&&f.h==g.h&&f.i==g.i&&f.g==g.g&&f.o==g.o&&f.f==g.f&&f.v==g.v&&ua(f.c,g.c)){d=!0;break}}d||(b.splice(c,1),--c)}}function Gf(a,b){var c=[];if(0==b.c.length)c.push(new Ja);else if(a.a)for(var d=0;d<b.c.length;++d)c.push.apply(c,Kf(a,b.c[d]));return c}
function Kf(a,b){var c=[];if(2==a.a.length){var d=a.a(b.schemeIdUri,b.b);if(!(d&&d instanceof Array))return[];for(var e=0;e<d.length;++e){var f=Ka(d[e]);0==f.b.length&&b.pssh&&b.pssh.psshBox&&La(f,[{initData:b.pssh.psshBox,initDataType:"cenc"}]);c.push(f)}}else{d=a.a(b);if(!(d&&d instanceof Ma))return[];e=new Ja;e.a=d.g;e.j=d.j;e.l=d.o;e.h=d.h;e.i=d.i;e.g=d.f;e.o=d.v;e.f=d.c;e.v=d.l;e.c=d.b?new Uint8Array(d.b.buffer):null;La(e,d.a);c.push(e)}return c}
function If(a,b,c,d,e){if(!c.s||0===c.s.length)return null;var f=null,g=1,h=0;if(c.g)f=c.f.split("/")[1],"mp4"!=f&&"webm"!=f?f=null:(g=c.g,"webm"!=f||g.c?g.a||g.b&&g.b.a?(h=g.b,h||(h=new af,h.url=c.s,h.a=g.a?g.a.clone():null),h=Lf(h,e),g=g.c?Lf(g.c,e):null,a=new Ke(a,b,f,h,g,d,e),b=new Qc(g),d=new Zc,d.F=a,d.C=b,f=d):f=null:f=null),g=c.g.g,h=c.g.f;else if(c.b)f=c.b,!f.b&&!f.c&&1<f.a.length?f=null:f.b||b.a||f.c||1!=f.a.length?f.c&&0===f.c.a.length?f=null:(f=f.h?Lf(f.h,e):null,a=new xf(a,b,c,d,e),b=
new Qc(f),d=new Zc,d.F=a,d.C=b,f=d):f=null,g=c.b.f,h=c.b.g;else if(c.a){a:if(f=c.a,g=0+(f.f?1:0),g+=f.c?1:0,g+=f.a?1:0,0==g?g=!1:(1!=g&&(f.f?(f.c=null,f.a=null):f.c&&(f.a=null)),g=!0),g){g=null;if(f.g&&(g=(f=c.a.g)?Mf(c,f,bf):null,!g)){f=null;break a}f=g?Lf(g,e):null;g=c.a;g.f?(g=c.f.split("/")[1],"mp4"!=g&&"webm"!=g?a=null:"webm"!=g||f?Ne(e,c,1,0)?(h=(h=c.a.f)?Mf(c,h,af):null)?(h=Lf(h,e),a=new Ke(a,b,g,h,f,d,e)):a=null:a=null:a=null):a=g.h?g.c?new Le(a,b,c,d,e):g.a?"dynamic"!=a.type&&null==b.a?null:
new Af(a,b,c,d,e):null:null;a?(b=new Qc(f),d=new Zc,d.F=a,d.C=b,f=d):f=null}else f=null;g=c.a.b;h=c.a.i}else"text"==c.f.split("/")[0]&&(f=new Zc,f.F=new Xc(new G(e,c.s)));if(!f)return null;f.id=c.id;h&&(f.c=-1*h/g);f.bandwidth=c.bandwidth;f.width=c.width;f.height=c.height;f.a=c.f||"";f.b=c.h||"";for(a=0;a<c.c.length;++a)b=c.c[a],b.a&&f.f.push(b.a);return f}function Mf(a,b,c){b=uf(b,a.id,null,a.bandwidth,null);if(!b)return null;c=new c;c.url=Oc(a.s,b);return c}
function Lf(a,b){var c=a.url,d=0,e=null;a.a&&(d=a.a.na,e=a.a.end);return new G(b,c,d,e)};function Y(a,b,c){b||(b=new Xa);c||(c=new O);P.call(this,null,b,c);this.T=a;this.M=[];this.timeoutMs=3E4;this.l={};this.j=this.O=null}q(Y,P);n("shaka.player.OfflineVideoSource",Y);Y.prototype.I=function(a){null!=a.licenseRequestTimeout&&(this.l.licenseRequestTimeout=a.licenseRequestTimeout);null!=a.segmentRequestTimeout&&(this.l.segmentRequestTimeout=a.segmentRequestTimeout);P.prototype.I.call(this,a)};
n("shaka.player.OfflineVideoSource.retrieveGroupIds",function(){var a=new Fb,b=xb(a).then(function(){return Gb(a)});b.then(function(){H(a)}).catch(function(){H(a)});return b});
Y.prototype.ya=function(a,b,c,d){var e,f=null,g={},h=[];a=new G(this.O,[new J(a)]);return wf(new vf(a,this.ba)).then(w(this,function(a){this.a=Cf(new Bf(c),a,this.O);if(this.a.b)return a=Error("Unable to store live streams offline."),a.type="app",Promise.reject(a);this.I({preferredLanguage:b});return P.prototype.U.call(this)})).then(w(this,function(){var a=document.createElement("video");a.src=window.URL.createObjectURL(this.g);e=new wd(null,a,this);null!=this.l.licenseRequestTimeout&&(e.w=Number(this.l.licenseRequestTimeout));
F(this.i,e,"sessionReady",this.ka.bind(this));F(this.i,e,"error",function(a){f=a});return e.initialize()})).then(w(this,function(){for(var a=Ca(this.b),b=0;b<a.length;++b)for(var c=a[b],e=0;e<c.m.length;++e){var f=c.m[e];g[f.A]=f}return d()})).then(w(this,function(a){for(var b=0;b<a.length;++b){var c=a[b],d=g[c];if(d)h.push(d);else return Promise.reject(Error("Invalid stream ID chosen: "+c))}var e=["audio","video"];h=h.filter(function(a){return 0>e.indexOf(a.a.split("/")[0])?!1:!0});a=h.map(function(a){return a.C.create()});
return Promise.all(a)})).then(w(this,function(a){for(var b=h,c=[],d=0;d<b.length;++d)try{c[d]=this.g.addSourceBuffer(ad(b[d]))}catch(e){}if(b.length!=c.length)a=Error("Error initializing streams."),a.type="storage",a=Promise.reject(a);else{for(d=0;d<a.length;++d)(b=a[d])&&c[d].appendBuffer(b);a=Promise.resolve()}return a})).then(w(this,function(){return zd(e,this.timeoutMs)})).then(w(this,function(){return f?Promise.reject(f):Nf(this,h,e.a,this.a.a[0].b)})).then(w(this,function(a){this.T=a;return f?
(Of(this),Promise.reject(f)):Promise.resolve(a)}))};n("shaka.player.OfflineVideoSource.prototype.store",Y.prototype.ya);Y.prototype.ma=function(a){this.O=a};Y.prototype.setNetworkCallback=Y.prototype.ma;Y.prototype.ka=function(a){this.M.push(a.detail.sessionId)};
function Nf(a,b,c,d){var e=new Ae(a.X,a);null!=a.l.segmentRequestTimeout&&(e.b=Number(a.l.segmentRequestTimeout));return xb(e).then(w(a,function(){return Be(e,b,this.M,d,c)})).then(function(a){H(e);return Promise.resolve(a)}).catch(function(a){H(e);return Promise.reject(a)})}
Y.prototype.U=function(){var a=new Fb,b,c;return xb(a).then(w(this,function(){return Hb(a,this.T)})).then(w(this,function(d){var e=[];this.M=d.session_ids;b=d.duration;c={keySystem:d.key_system,distinctiveIdentifierRequired:d.distinctive_identifier,persistentStorageRequired:!0,audioRobustness:d.audio_robustness,videoRobustness:d.video_robustness,withCredentials:d.with_credentials,licenseServerUrl:d.license_server};for(var f=0;f<d.stream_ids.length;++f)e.push(Ib(a,d.stream_ids[f]));return Promise.all(e)})).then(w(this,
function(a){var e=b,f=c,g=new gd;g.c=5;for(var h=new fd,k=0;k<a.length;++k){var m=a[k],p=new Zc,t=new Yc(m.references),y=new Uint8Array(m.init_segment),y=new J("data:application/octet-stream;base64,"+ra(y)),y=new Qc(new G(this.O,[y],0,null));p.F=t;p.C=y;p.a=m.mime_type;p.b=m.codecs;p.L=!0;this.j&&(null!=this.j.licenseServerUrl&&(f.licenseServerUrl=this.j.licenseServerUrl),null!=this.j.withCredentials&&(f.withCredentials=this.j.withCredentials),f.licensePostProcessor=this.j.licensePostProcessor,f.licensePreProcessor=
this.j.licensePreProcessor,f.serverCertificate=this.j.serverCertificate);m=Ka(f);t=new bd;t.m.push(p);t.a.push(m);t.contentType=p.a.split("/")[0];h.a.push(t);h.b=e}g.a.push(h);this.a=g;return P.prototype.U.call(this)})).then(function(){H(a);return Promise.resolve()}).catch(function(b){H(a);return Promise.reject(b)})};
Y.prototype.la=function(a,b){a&&(this.j={licenseServerUrl:a.licenseServerUrl,withCredentials:a.withCredentials,serverCertificate:a.serverCertificate,licensePreProcessor:a.licensePreProcessor,licensePostProcessor:a.licensePostProcessor});var c=null;return Pf(this).catch(function(a){return b?(c=a,Promise.resolve()):Promise.reject(a)}).then(w(this,function(){return Of(this)})).then(function(){return Promise.resolve(c)})};Y.prototype.deleteGroup=Y.prototype.la;Y.prototype.va=function(){return this.M};
Y.prototype.ea=function(){return!0};function Of(a){var b=new Ae(null,null);return xb(b).then(w(a,function(){return Ee(b,this.T)})).then(function(){H(b);return Promise.resolve()}).catch(function(a){H(b);return Promise.reject(a)})}
function Pf(a){var b=document.createElement("video");b.src=window.URL.createObjectURL(a.g);var c=new wd(null,b,a);null!=a.l.licenseRequestTimeout&&(c.w=Number(a.l.licenseRequestTimeout));return a.U().then(function(){return c.initialize()}).then(w(a,function(){return zd(c,this.timeoutMs)})).then(function(){return Ad(c)}).then(w(a,function(){c.destroy();this.destroy();return Promise.resolve()})).catch(w(a,function(a){c.destroy();this.destroy();return Promise.reject(a)}))};function Z(a,b,c,d){c||(c=new Xa);d||(d=new O);P.call(this,null,c,d);this.ka=a;this.M=b;this.l=[];this.O=[];this.T=[];this.j=null}q(Z,P);n("shaka.player.DashVideoSource",Z);Z.prototype.la=function(a,b,c){this.l.push(a);this.O.push(b||"");this.T.push(c||"")};Z.prototype.addExternalCaptions=Z.prototype.la;Z.prototype.ma=function(a){this.j=a};Z.prototype.setNetworkCallback=Z.prototype.ma;Z.prototype.destroy=function(){this.j=this.M=null;P.prototype.destroy.call(this)};
Z.prototype.U=function(){var a=new G(this.j,[new J(this.ka)]);return wf(new vf(a,this.ba)).then(w(this,function(a){for(var c=0;c<this.l.length;c++){var d=a,e=this.l[c],f=this.O[c],g=this.T[c];if(0!==d.a.length){var h=new Qe;h.contentType="text";h.lang=f||"en";h.c=!0;f=new Te;f.bandwidth=0;f.f=g||"text/vtt";f.s=[new J(e)];h.a.push(f);d.a[0].b.push(h);nf(d.a[0])}}this.a=Cf(new Bf(this.M),a,this.j);return P.prototype.U.call(this)}))};
Z.prototype.Ta=function(a){return wf(new vf(a,this.ba)).then(w(this,function(a){a=Cf(new Bf(this.M),a,this.j);return Promise.resolve(a)}))};}.bind(g,this))();
if (typeof(module)!="undefined"&&module.exports)module.exports=g.shaka;
else if (typeof(define)!="undefined" )define("../lib/temp-shaka-player/shaka-player.compiled.js", [], function(){return g.shaka});
else this.shaka=g.shaka;
})();


return require('vstb');}));