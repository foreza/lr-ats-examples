window.atsdetectionmodule = function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    return n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                n.d(r, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 112)
}([function(e, t, n) {
    (function(t) {
        var n = function(e) {
            return e && e.Math == Math && e
        };
        e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || function() {
            return this
        }() || Function("return this")()
    }
    ).call(this, n(23))
}
, function(e, t, n) {
    var r = n(26)
      , o = r.all;
    e.exports = r.IS_HTMLDDA ? function(e) {
        return "function" == typeof e || e === o
    }
    : function(e) {
        return "function" == typeof e
    }
}
, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}
, function(e, t, n) {
    var r = n(7)
      , o = Function.prototype
      , i = o.call
      , s = r && o.bind.bind(i, i);
    e.exports = r ? s : function(e) {
        return function() {
            return i.apply(e, arguments)
        }
    }
}
, function(e, t, n) {
    var r = n(3)
      , o = n(13)
      , i = r({}.hasOwnProperty);
    e.exports = Object.hasOwn || function(e, t) {
        return i(o(e), t)
    }
}
, function(e, t, n) {
    var r = n(2);
    e.exports = !r((function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    }
    ))
}
, function(e, t, n) {
    var r = n(1)
      , o = n(26)
      , i = o.all;
    e.exports = o.IS_HTMLDDA ? function(e) {
        return "object" == typeof e ? null !== e : r(e) || e === i
    }
    : function(e) {
        return "object" == typeof e ? null !== e : r(e)
    }
}
, function(e, t, n) {
    var r = n(2);
    e.exports = !r((function() {
        var e = function() {}
        .bind();
        return "function" != typeof e || e.hasOwnProperty("prototype")
    }
    ))
}
, function(e, t, n) {
    var r = n(5)
      , o = n(30)
      , i = n(58)
      , s = n(9)
      , u = n(32)
      , c = TypeError
      , a = Object.defineProperty
      , d = Object.getOwnPropertyDescriptor;
    t.f = r ? i ? function(e, t, n) {
        if (s(e),
        t = u(t),
        s(n),
        "function" == typeof e && "prototype" === t && "value"in n && "writable"in n && !n.writable) {
            var r = d(e, t);
            r && r.writable && (e[t] = n.value,
            n = {
                configurable: "configurable"in n ? n.configurable : r.configurable,
                enumerable: "enumerable"in n ? n.enumerable : r.enumerable,
                writable: !1
            })
        }
        return a(e, t, n)
    }
    : a : function(e, t, n) {
        if (s(e),
        t = u(t),
        s(n),
        o)
            try {
                return a(e, t, n)
            } catch (e) {}
        if ("get"in n || "set"in n)
            throw c("Accessors not supported");
        return "value"in n && (e[t] = n.value),
        e
    }
}
, function(e, t, n) {
    var r = n(6)
      , o = String
      , i = TypeError;
    e.exports = function(e) {
        if (r(e))
            return e;
        throw i(o(e) + " is not an object")
    }
}
, function(e, t, n) {
    var r = n(7)
      , o = Function.prototype.call;
    e.exports = r ? o.bind(o) : function() {
        return o.apply(o, arguments)
    }
}
, function(e, t, n) {
    var r = n(0)
      , o = n(38)
      , i = n(4)
      , s = n(20)
      , u = n(36)
      , c = n(35)
      , a = r.Symbol
      , d = o("wks")
      , l = c ? a.for || a : a && a.withoutSetter || s;
    e.exports = function(e) {
        return i(d, e) || (d[e] = u && i(a, e) ? a[e] : l("Symbol." + e)),
        d[e]
    }
}
, function(e, t, n) {
    var r = n(3)
      , o = r({}.toString)
      , i = r("".slice);
    e.exports = function(e) {
        return i(o(e), 8, -1)
    }
}
, function(e, t, n) {
    var r = n(27)
      , o = Object;
    e.exports = function(e) {
        return o(r(e))
    }
}
, function(e, t, n) {
    var r = n(0)
      , o = n(15)
      , i = r["__core-js_shared__"] || o("__core-js_shared__", {});
    e.exports = i
}
, function(e, t, n) {
    var r = n(0)
      , o = Object.defineProperty;
    e.exports = function(e, t) {
        try {
            o(r, e, {
                value: t,
                configurable: !0,
                writable: !0
            })
        } catch (n) {
            r[e] = t
        }
        return t
    }
}
, function(e, t, n) {
    var r = n(5)
      , o = n(8)
      , i = n(39);
    e.exports = r ? function(e, t, n) {
        return o.f(e, t, i(1, n))
    }
    : function(e, t, n) {
        return e[t] = n,
        e
    }
}
, function(e, t, n) {
    var r = n(0)
      , o = n(1)
      , i = function(e) {
        return o(e) ? e : void 0
    };
    e.exports = function(e, t) {
        return arguments.length < 2 ? i(r[e]) : r[e] && r[e][t]
    }
}
, function(e, t) {
    e.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
}
, function(e, t, n) {
    var r = n(1)
      , o = n(37)
      , i = TypeError;
    e.exports = function(e) {
        if (r(e))
            return e;
        throw i(o(e) + " is not a function")
    }
}
, function(e, t, n) {
    var r = n(3)
      , o = 0
      , i = Math.random()
      , s = r(1..toString);
    e.exports = function(e) {
        return "Symbol(" + (void 0 === e ? "" : e) + ")_" + s(++o + i, 36)
    }
}
, function(e, t, n) {
    var r = n(76);
    e.exports = function(e) {
        var t = +e;
        return t != t || 0 === t ? 0 : r(t)
    }
}
, function(e, t, n) {
    var r = n(82)
      , o = n(27);
    e.exports = function(e) {
        return r(o(e))
    }
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t, n) {
    var r = n(25)
      , o = n(8);
    e.exports = function(e, t, n) {
        return n.get && r(n.get, t, {
            getter: !0
        }),
        n.set && r(n.set, t, {
            setter: !0
        }),
        o.f(e, t, n)
    }
}
, function(e, t, n) {
    var r = n(3)
      , o = n(2)
      , i = n(1)
      , s = n(4)
      , u = n(5)
      , c = n(55).CONFIGURABLE
      , a = n(56)
      , d = n(29)
      , l = d.enforce
      , f = d.get
      , p = String
      , g = Object.defineProperty
      , h = r("".slice)
      , m = r("".replace)
      , b = r([].join)
      , v = u && !o((function() {
        return 8 !== g((function() {}
        ), "length", {
            value: 8
        }).length
    }
    ))
      , y = String(String).split("String")
      , w = e.exports = function(e, t, n) {
        "Symbol(" === h(p(t), 0, 7) && (t = "[" + m(p(t), /^Symbol\(([^)]*)\)/, "$1") + "]"),
        n && n.getter && (t = "get " + t),
        n && n.setter && (t = "set " + t),
        (!s(e, "name") || c && e.name !== t) && (u ? g(e, "name", {
            value: t,
            configurable: !0
        }) : e.name = t),
        v && n && s(n, "arity") && e.length !== n.arity && g(e, "length", {
            value: n.arity
        });
        try {
            n && s(n, "constructor") && n.constructor ? u && g(e, "prototype", {
                writable: !1
            }) : e.prototype && (e.prototype = void 0)
        } catch (e) {}
        var r = l(e);
        return s(r, "source") || (r.source = b(y, "string" == typeof t ? t : "")),
        e
    }
    ;
    Function.prototype.toString = w((function() {
        return i(this) && f(this).source || a(this)
    }
    ), "toString")
}
, function(e, t) {
    var n = "object" == typeof document && document.all
      , r = void 0 === n && void 0 !== n;
    e.exports = {
        all: n,
        IS_HTMLDDA: r
    }
}
, function(e, t, n) {
    var r = n(28)
      , o = TypeError;
    e.exports = function(e) {
        if (r(e))
            throw o("Can't call method on " + e);
        return e
    }
}
, function(e, t) {
    e.exports = function(e) {
        return null == e
    }
}
, function(e, t, n) {
    var r, o, i, s = n(57), u = n(0), c = n(6), a = n(16), d = n(4), l = n(14), f = n(40), p = n(41), g = u.TypeError, h = u.WeakMap;
    if (s || l.state) {
        var m = l.state || (l.state = new h);
        m.get = m.get,
        m.has = m.has,
        m.set = m.set,
        r = function(e, t) {
            if (m.has(e))
                throw g("Object already initialized");
            return t.facade = e,
            m.set(e, t),
            t
        }
        ,
        o = function(e) {
            return m.get(e) || {}
        }
        ,
        i = function(e) {
            return m.has(e)
        }
    } else {
        var b = f("state");
        p[b] = !0,
        r = function(e, t) {
            if (d(e, b))
                throw g("Object already initialized");
            return t.facade = e,
            a(e, b, t),
            t
        }
        ,
        o = function(e) {
            return d(e, b) ? e[b] : {}
        }
        ,
        i = function(e) {
            return d(e, b)
        }
    }
    e.exports = {
        set: r,
        get: o,
        has: i,
        enforce: function(e) {
            return i(e) ? o(e) : r(e, {})
        },
        getterFor: function(e) {
            return function(t) {
                var n;
                if (!c(t) || (n = o(t)).type !== e)
                    throw g("Incompatible receiver, " + e + " required");
                return n
            }
        }
    }
}
, function(e, t, n) {
    var r = n(5)
      , o = n(2)
      , i = n(31);
    e.exports = !r && !o((function() {
        return 7 != Object.defineProperty(i("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }
    ))
}
, function(e, t, n) {
    var r = n(0)
      , o = n(6)
      , i = r.document
      , s = o(i) && o(i.createElement);
    e.exports = function(e) {
        return s ? i.createElement(e) : {}
    }
}
, function(e, t, n) {
    var r = n(59)
      , o = n(33);
    e.exports = function(e) {
        var t = r(e, "string");
        return o(t) ? t : t + ""
    }
}
, function(e, t, n) {
    var r = n(17)
      , o = n(1)
      , i = n(34)
      , s = n(35)
      , u = Object;
    e.exports = s ? function(e) {
        return "symbol" == typeof e
    }
    : function(e) {
        var t = r("Symbol");
        return o(t) && i(t.prototype, u(e))
    }
}
, function(e, t, n) {
    var r = n(3);
    e.exports = r({}.isPrototypeOf)
}
, function(e, t, n) {
    var r = n(36);
    e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
}
, function(e, t, n) {
    var r = n(60)
      , o = n(2);
    e.exports = !!Object.getOwnPropertySymbols && !o((function() {
        var e = Symbol();
        return !String(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && r && r < 41
    }
    ))
}
, function(e, t) {
    var n = String;
    e.exports = function(e) {
        try {
            return n(e)
        } catch (e) {
            return "Object"
        }
    }
}
, function(e, t, n) {
    var r = n(63)
      , o = n(14);
    (e.exports = function(e, t) {
        return o[e] || (o[e] = void 0 !== t ? t : {})
    }
    )("versions", []).push({
        version: "3.30.1",
        mode: r ? "pure" : "global",
        copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE",
        source: "https://github.com/zloirock/core-js"
    })
}
, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}
, function(e, t, n) {
    var r = n(38)
      , o = n(20)
      , i = r("keys");
    e.exports = function(e) {
        return i[e] || (i[e] = o(e))
    }
}
, function(e, t) {
    e.exports = {}
}
, function(e, t, n) {
    var r = n(1)
      , o = n(8)
      , i = n(25)
      , s = n(15);
    e.exports = function(e, t, n, u) {
        u || (u = {});
        var c = u.enumerable
          , a = void 0 !== u.name ? u.name : t;
        if (r(n) && i(n, a, u),
        u.global)
            c ? e[t] = n : s(t, n);
        else {
            try {
                u.unsafe ? e[t] && (c = !0) : delete e[t]
            } catch (e) {}
            c ? e[t] = n : o.f(e, t, {
                value: n,
                enumerable: !1,
                configurable: !u.nonConfigurable,
                writable: !u.nonWritable
            })
        }
        return e
    }
}
, function(e, t, n) {
    var r = n(75);
    e.exports = function(e) {
        return r(e.length)
    }
}
, function(e, t, n) {
    var r = n(0)
      , o = n(45).f
      , i = n(16)
      , s = n(42)
      , u = n(15)
      , c = n(83)
      , a = n(91);
    e.exports = function(e, t) {
        var n, d, l, f, p, g = e.target, h = e.global, m = e.stat;
        if (n = h ? r : m ? r[g] || u(g, {}) : (r[g] || {}).prototype)
            for (d in t) {
                if (f = t[d],
                l = e.dontCallGetSet ? (p = o(n, d)) && p.value : n[d],
                !a(h ? d : g + (m ? "." : "#") + d, e.forced) && void 0 !== l) {
                    if (typeof f == typeof l)
                        continue;
                    c(f, l)
                }
                (e.sham || l && l.sham) && i(f, "sham", !0),
                s(n, d, f, e)
            }
    }
}
, function(e, t, n) {
    var r = n(5)
      , o = n(10)
      , i = n(81)
      , s = n(39)
      , u = n(22)
      , c = n(32)
      , a = n(4)
      , d = n(30)
      , l = Object.getOwnPropertyDescriptor;
    t.f = r ? l : function(e, t) {
        if (e = u(e),
        t = c(t),
        d)
            try {
                return l(e, t)
            } catch (e) {}
        if (a(e, t))
            return s(!o(i.f, e, t), e[t])
    }
}
, function(e, t, n) {
    var r, o, i, s, u = n(0), c = n(47), a = n(92), d = n(1), l = n(4), f = n(2), p = n(94), g = n(48), h = n(31), m = n(49), b = n(95), v = n(96), y = u.setImmediate, w = u.clearImmediate, x = u.process, S = u.Dispatch, T = u.Function, C = u.MessageChannel, A = u.String, O = 0, E = {};
    f((function() {
        r = u.location
    }
    ));
    var I = function(e) {
        if (l(E, e)) {
            var t = E[e];
            delete E[e],
            t()
        }
    }
      , P = function(e) {
        return function() {
            I(e)
        }
    }
      , _ = function(e) {
        I(e.data)
    }
      , j = function(e) {
        u.postMessage(A(e), r.protocol + "//" + r.host)
    };
    y && w || (y = function(e) {
        m(arguments.length, 1);
        var t = d(e) ? e : T(e)
          , n = g(arguments, 1);
        return E[++O] = function() {
            c(t, void 0, n)
        }
        ,
        o(O),
        O
    }
    ,
    w = function(e) {
        delete E[e]
    }
    ,
    v ? o = function(e) {
        x.nextTick(P(e))
    }
    : S && S.now ? o = function(e) {
        S.now(P(e))
    }
    : C && !b ? (s = (i = new C).port2,
    i.port1.onmessage = _,
    o = a(s.postMessage, s)) : u.addEventListener && d(u.postMessage) && !u.importScripts && r && "file:" !== r.protocol && !f(j) ? (o = j,
    u.addEventListener("message", _, !1)) : o = "onreadystatechange"in h("script") ? function(e) {
        p.appendChild(h("script")).onreadystatechange = function() {
            p.removeChild(this),
            I(e)
        }
    }
    : function(e) {
        setTimeout(P(e), 0)
    }
    ),
    e.exports = {
        set: y,
        clear: w
    }
}
, function(e, t, n) {
    var r = n(7)
      , o = Function.prototype
      , i = o.apply
      , s = o.call;
    e.exports = "object" == typeof Reflect && Reflect.apply || (r ? s.bind(i) : function() {
        return s.apply(i, arguments)
    }
    )
}
, function(e, t, n) {
    var r = n(3);
    e.exports = r([].slice)
}
, function(e, t) {
    var n = TypeError;
    e.exports = function(e, t) {
        if (e < t)
            throw n("Not enough arguments");
        return e
    }
}
, function(e, t) {
    function n(t) {
        return e.exports = n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports,
        n(t)
    }
    e.exports = n,
    e.exports.__esModule = !0,
    e.exports.default = e.exports
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0", n = "", r = 0; r < e; r += 1)
            n += t;
        return n
    }
    e.exports = {
        padLeft: function(e, t) {
            return r(Math.max(0, t)) + e
        },
        padRight: function(e, t) {
            return e + r(Math.max(0, t))
        },
        getMaxListElement: function(e) {
            var t = 0;
            return (e || []).forEach((function(e) {
                e > t && (t = e)
            }
            )),
            t
        }
    }
}
, function(e, t, n) {
    var r = n(101);
    e.exports = function(e, t, n) {
        return (t = r(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    ,
    e.exports.__esModule = !0,
    e.exports.default = e.exports
}
, function(e, t, n) {
    "use strict";
    var r = n(104).TCStringV2;
    e.exports = {
        TCStringV2: r
    }
}
, function(e, t, n) {
    var r = n(0)
      , o = n(5)
      , i = n(24)
      , s = n(64)
      , u = n(2)
      , c = r.RegExp
      , a = c.prototype;
    o && u((function() {
        var e = !0;
        try {
            c(".", "d")
        } catch (t) {
            e = !1
        }
        var t = {}
          , n = ""
          , r = e ? "dgimsy" : "gimsy"
          , o = function(e, r) {
            Object.defineProperty(t, e, {
                get: function() {
                    return n += r,
                    !0
                }
            })
        }
          , i = {
            dotAll: "s",
            global: "g",
            ignoreCase: "i",
            multiline: "m",
            sticky: "y"
        };
        for (var s in e && (i.hasIndices = "d"),
        i)
            o(s, i[s]);
        return Object.getOwnPropertyDescriptor(a, "flags").get.call(t) !== r || n !== r
    }
    )) && i(a, "flags", {
        configurable: !0,
        get: s
    })
}
, function(e, t, n) {
    var r = n(5)
      , o = n(4)
      , i = Function.prototype
      , s = r && Object.getOwnPropertyDescriptor
      , u = o(i, "name")
      , c = u && "something" === function() {}
    .name
      , a = u && (!r || r && s(i, "name").configurable);
    e.exports = {
        EXISTS: u,
        PROPER: c,
        CONFIGURABLE: a
    }
}
, function(e, t, n) {
    var r = n(3)
      , o = n(1)
      , i = n(14)
      , s = r(Function.toString);
    o(i.inspectSource) || (i.inspectSource = function(e) {
        return s(e)
    }
    ),
    e.exports = i.inspectSource
}
, function(e, t, n) {
    var r = n(0)
      , o = n(1)
      , i = r.WeakMap;
    e.exports = o(i) && /native code/.test(String(i))
}
, function(e, t, n) {
    var r = n(5)
      , o = n(2);
    e.exports = r && o((function() {
        return 42 != Object.defineProperty((function() {}
        ), "prototype", {
            value: 42,
            writable: !1
        }).prototype
    }
    ))
}
, function(e, t, n) {
    var r = n(10)
      , o = n(6)
      , i = n(33)
      , s = n(61)
      , u = n(62)
      , c = n(11)
      , a = TypeError
      , d = c("toPrimitive");
    e.exports = function(e, t) {
        if (!o(e) || i(e))
            return e;
        var n, c = s(e, d);
        if (c) {
            if (void 0 === t && (t = "default"),
            n = r(c, e, t),
            !o(n) || i(n))
                return n;
            throw a("Can't convert object to primitive value")
        }
        return void 0 === t && (t = "number"),
        u(e, t)
    }
}
, function(e, t, n) {
    var r, o, i = n(0), s = n(18), u = i.process, c = i.Deno, a = u && u.versions || c && c.version, d = a && a.v8;
    d && (o = (r = d.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
    !o && s && (!(r = s.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = s.match(/Chrome\/(\d+)/)) && (o = +r[1]),
    e.exports = o
}
, function(e, t, n) {
    var r = n(19)
      , o = n(28);
    e.exports = function(e, t) {
        var n = e[t];
        return o(n) ? void 0 : r(n)
    }
}
, function(e, t, n) {
    var r = n(10)
      , o = n(1)
      , i = n(6)
      , s = TypeError;
    e.exports = function(e, t) {
        var n, u;
        if ("string" === t && o(n = e.toString) && !i(u = r(n, e)))
            return u;
        if (o(n = e.valueOf) && !i(u = r(n, e)))
            return u;
        if ("string" !== t && o(n = e.toString) && !i(u = r(n, e)))
            return u;
        throw s("Can't convert object to primitive value")
    }
}
, function(e, t) {
    e.exports = !1
}
, function(e, t, n) {
    "use strict";
    var r = n(9);
    e.exports = function() {
        var e = r(this)
          , t = "";
        return e.hasIndices && (t += "d"),
        e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.dotAll && (t += "s"),
        e.unicode && (t += "u"),
        e.unicodeSets && (t += "v"),
        e.sticky && (t += "y"),
        t
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(10)
      , i = n(66)
      , s = n(43)
      , u = n(77)
      , c = n(13)
      , a = n(2)
      , d = r.RangeError
      , l = r.Int8Array
      , f = l && l.prototype
      , p = f && f.set
      , g = i.aTypedArray
      , h = i.exportTypedArrayMethod
      , m = !a((function() {
        var e = new Uint8ClampedArray(2);
        return o(p, e, {
            length: 1,
            0: 3
        }, 1),
        3 !== e[1]
    }
    ))
      , b = m && i.NATIVE_ARRAY_BUFFER_VIEWS && a((function() {
        var e = new l(2);
        return e.set(1),
        e.set("2", 1),
        0 !== e[0] || 2 !== e[1]
    }
    ));
    h("set", (function(e) {
        g(this);
        var t = u(arguments.length > 1 ? arguments[1] : void 0, 1)
          , n = c(e);
        if (m)
            return o(p, this, n, t);
        var r = this.length
          , i = s(n)
          , a = 0;
        if (i + t > r)
            throw d("Wrong length");
        for (; a < i; )
            this[t + a] = n[a++]
    }
    ), !m || b)
}
, function(e, t, n) {
    "use strict";
    var r, o, i, s = n(67), u = n(5), c = n(0), a = n(1), d = n(6), l = n(4), f = n(68), p = n(37), g = n(16), h = n(42), m = n(24), b = n(34), v = n(70), y = n(72), w = n(11), x = n(20), S = n(29), T = S.enforce, C = S.get, A = c.Int8Array, O = A && A.prototype, E = c.Uint8ClampedArray, I = E && E.prototype, P = A && v(A), _ = O && v(O), j = Object.prototype, k = c.TypeError, D = w("toStringTag"), B = x("TYPED_ARRAY_TAG"), R = s && !!y && "Opera" !== f(c.opera), L = !1, V = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8
    }, N = {
        BigInt64Array: 8,
        BigUint64Array: 8
    }, M = function(e) {
        var t = v(e);
        if (d(t)) {
            var n = C(t);
            return n && l(n, "TypedArrayConstructor") ? n.TypedArrayConstructor : M(t)
        }
    }, U = function(e) {
        if (!d(e))
            return !1;
        var t = f(e);
        return l(V, t) || l(N, t)
    };
    for (r in V)
        (i = (o = c[r]) && o.prototype) ? T(i).TypedArrayConstructor = o : R = !1;
    for (r in N)
        (i = (o = c[r]) && o.prototype) && (T(i).TypedArrayConstructor = o);
    if ((!R || !a(P) || P === Function.prototype) && (P = function() {
        throw k("Incorrect invocation")
    }
    ,
    R))
        for (r in V)
            c[r] && y(c[r], P);
    if ((!R || !_ || _ === j) && (_ = P.prototype,
    R))
        for (r in V)
            c[r] && y(c[r].prototype, _);
    if (R && v(I) !== _ && y(I, _),
    u && !l(_, D))
        for (r in L = !0,
        m(_, D, {
            configurable: !0,
            get: function() {
                return d(this) ? this[B] : void 0
            }
        }),
        V)
            c[r] && g(c[r], B, r);
    e.exports = {
        NATIVE_ARRAY_BUFFER_VIEWS: R,
        TYPED_ARRAY_TAG: L && B,
        aTypedArray: function(e) {
            if (U(e))
                return e;
            throw k("Target is not a typed array")
        },
        aTypedArrayConstructor: function(e) {
            if (a(e) && (!y || b(P, e)))
                return e;
            throw k(p(e) + " is not a typed array constructor")
        },
        exportTypedArrayMethod: function(e, t, n, r) {
            if (u) {
                if (n)
                    for (var o in V) {
                        var i = c[o];
                        if (i && l(i.prototype, e))
                            try {
                                delete i.prototype[e]
                            } catch (n) {
                                try {
                                    i.prototype[e] = t
                                } catch (e) {}
                            }
                    }
                _[e] && !n || h(_, e, n ? t : R && O[e] || t, r)
            }
        },
        exportTypedArrayStaticMethod: function(e, t, n) {
            var r, o;
            if (u) {
                if (y) {
                    if (n)
                        for (r in V)
                            if ((o = c[r]) && l(o, e))
                                try {
                                    delete o[e]
                                } catch (e) {}
                    if (P[e] && !n)
                        return;
                    try {
                        return h(P, e, n ? t : R && P[e] || t)
                    } catch (e) {}
                }
                for (r in V)
                    !(o = c[r]) || o[e] && !n || h(o, e, t)
            }
        },
        getTypedArrayConstructor: M,
        isView: function(e) {
            if (!d(e))
                return !1;
            var t = f(e);
            return "DataView" === t || l(V, t) || l(N, t)
        },
        isTypedArray: U,
        TypedArray: P,
        TypedArrayPrototype: _
    }
}
, function(e, t) {
    e.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
}
, function(e, t, n) {
    var r = n(69)
      , o = n(1)
      , i = n(12)
      , s = n(11)("toStringTag")
      , u = Object
      , c = "Arguments" == i(function() {
        return arguments
    }());
    e.exports = r ? i : function(e) {
        var t, n, r;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = u(e), s)) ? n : c ? i(t) : "Object" == (r = i(t)) && o(t.callee) ? "Arguments" : r
    }
}
, function(e, t, n) {
    var r = {};
    r[n(11)("toStringTag")] = "z",
    e.exports = "[object z]" === String(r)
}
, function(e, t, n) {
    var r = n(4)
      , o = n(1)
      , i = n(13)
      , s = n(40)
      , u = n(71)
      , c = s("IE_PROTO")
      , a = Object
      , d = a.prototype;
    e.exports = u ? a.getPrototypeOf : function(e) {
        var t = i(e);
        if (r(t, c))
            return t[c];
        var n = t.constructor;
        return o(n) && t instanceof n ? n.prototype : t instanceof a ? d : null
    }
}
, function(e, t, n) {
    var r = n(2);
    e.exports = !r((function() {
        function e() {}
        return e.prototype.constructor = null,
        Object.getPrototypeOf(new e) !== e.prototype
    }
    ))
}
, function(e, t, n) {
    var r = n(73)
      , o = n(9)
      , i = n(74);
    e.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
        var e, t = !1, n = {};
        try {
            (e = r(Object.prototype, "__proto__", "set"))(n, []),
            t = n instanceof Array
        } catch (e) {}
        return function(n, r) {
            return o(n),
            i(r),
            t ? e(n, r) : n.__proto__ = r,
            n
        }
    }() : void 0)
}
, function(e, t, n) {
    var r = n(3)
      , o = n(19);
    e.exports = function(e, t, n) {
        try {
            return r(o(Object.getOwnPropertyDescriptor(e, t)[n]))
        } catch (e) {}
    }
}
, function(e, t, n) {
    var r = n(1)
      , o = String
      , i = TypeError;
    e.exports = function(e) {
        if ("object" == typeof e || r(e))
            return e;
        throw i("Can't set " + o(e) + " as a prototype")
    }
}
, function(e, t, n) {
    var r = n(21)
      , o = Math.min;
    e.exports = function(e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0
    }
}
, function(e, t) {
    var n = Math.ceil
      , r = Math.floor;
    e.exports = Math.trunc || function(e) {
        var t = +e;
        return (t > 0 ? r : n)(t)
    }
}
, function(e, t, n) {
    var r = n(78)
      , o = RangeError;
    e.exports = function(e, t) {
        var n = r(e);
        if (n % t)
            throw o("Wrong offset");
        return n
    }
}
, function(e, t, n) {
    var r = n(21)
      , o = RangeError;
    e.exports = function(e) {
        var t = r(e);
        if (t < 0)
            throw o("The argument can't be less than 0");
        return t
    }
}
, function(e, t, n) {
    n(80),
    n(98)
}
, function(e, t, n) {
    var r = n(44)
      , o = n(0)
      , i = n(46).clear;
    r({
        global: !0,
        bind: !0,
        enumerable: !0,
        forced: o.clearImmediate !== i
    }, {
        clearImmediate: i
    })
}
, function(e, t, n) {
    "use strict";
    var r = {}.propertyIsEnumerable
      , o = Object.getOwnPropertyDescriptor
      , i = o && !r.call({
        1: 2
    }, 1);
    t.f = i ? function(e) {
        var t = o(this, e);
        return !!t && t.enumerable
    }
    : r
}
, function(e, t, n) {
    var r = n(3)
      , o = n(2)
      , i = n(12)
      , s = Object
      , u = r("".split);
    e.exports = o((function() {
        return !s("z").propertyIsEnumerable(0)
    }
    )) ? function(e) {
        return "String" == i(e) ? u(e, "") : s(e)
    }
    : s
}
, function(e, t, n) {
    var r = n(4)
      , o = n(84)
      , i = n(45)
      , s = n(8);
    e.exports = function(e, t, n) {
        for (var u = o(t), c = s.f, a = i.f, d = 0; d < u.length; d++) {
            var l = u[d];
            r(e, l) || n && r(n, l) || c(e, l, a(t, l))
        }
    }
}
, function(e, t, n) {
    var r = n(17)
      , o = n(3)
      , i = n(85)
      , s = n(90)
      , u = n(9)
      , c = o([].concat);
    e.exports = r("Reflect", "ownKeys") || function(e) {
        var t = i.f(u(e))
          , n = s.f;
        return n ? c(t, n(e)) : t
    }
}
, function(e, t, n) {
    var r = n(86)
      , o = n(89).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) {
        return r(e, o)
    }
}
, function(e, t, n) {
    var r = n(3)
      , o = n(4)
      , i = n(22)
      , s = n(87).indexOf
      , u = n(41)
      , c = r([].push);
    e.exports = function(e, t) {
        var n, r = i(e), a = 0, d = [];
        for (n in r)
            !o(u, n) && o(r, n) && c(d, n);
        for (; t.length > a; )
            o(r, n = t[a++]) && (~s(d, n) || c(d, n));
        return d
    }
}
, function(e, t, n) {
    var r = n(22)
      , o = n(88)
      , i = n(43)
      , s = function(e) {
        return function(t, n, s) {
            var u, c = r(t), a = i(c), d = o(s, a);
            if (e && n != n) {
                for (; a > d; )
                    if ((u = c[d++]) != u)
                        return !0
            } else
                for (; a > d; d++)
                    if ((e || d in c) && c[d] === n)
                        return e || d || 0;
            return !e && -1
        }
    };
    e.exports = {
        includes: s(!0),
        indexOf: s(!1)
    }
}
, function(e, t, n) {
    var r = n(21)
      , o = Math.max
      , i = Math.min;
    e.exports = function(e, t) {
        var n = r(e);
        return n < 0 ? o(n + t, 0) : i(n, t)
    }
}
, function(e, t) {
    e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}
, function(e, t) {
    t.f = Object.getOwnPropertySymbols
}
, function(e, t, n) {
    var r = n(2)
      , o = n(1)
      , i = /#|\.prototype\./
      , s = function(e, t) {
        var n = c[u(e)];
        return n == d || n != a && (o(t) ? r(t) : !!t)
    }
      , u = s.normalize = function(e) {
        return String(e).replace(i, ".").toLowerCase()
    }
      , c = s.data = {}
      , a = s.NATIVE = "N"
      , d = s.POLYFILL = "P";
    e.exports = s
}
, function(e, t, n) {
    var r = n(93)
      , o = n(19)
      , i = n(7)
      , s = r(r.bind);
    e.exports = function(e, t) {
        return o(e),
        void 0 === t ? e : i ? s(e, t) : function() {
            return e.apply(t, arguments)
        }
    }
}
, function(e, t, n) {
    var r = n(12)
      , o = n(3);
    e.exports = function(e) {
        if ("Function" === r(e))
            return o(e)
    }
}
, function(e, t, n) {
    var r = n(17);
    e.exports = r("document", "documentElement")
}
, function(e, t, n) {
    var r = n(18);
    e.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(r)
}
, function(e, t, n) {
    (function(t) {
        var r = n(12);
        e.exports = void 0 !== t && "process" == r(t)
    }
    ).call(this, n(97))
}
, function(e, t) {
    var n, r, o = e.exports = {};
    function i() {
        throw new Error("setTimeout has not been defined")
    }
    function s() {
        throw new Error("clearTimeout has not been defined")
    }
    function u(e) {
        if (n === setTimeout)
            return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout)
            return n = setTimeout,
            setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }
    !function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (e) {
            r = s
        }
    }();
    var c, a = [], d = !1, l = -1;
    function f() {
        d && c && (d = !1,
        c.length ? a = c.concat(a) : l = -1,
        a.length && p())
    }
    function p() {
        if (!d) {
            var e = u(f);
            d = !0;
            for (var t = a.length; t; ) {
                for (c = a,
                a = []; ++l < t; )
                    c && c[l].run();
                l = -1,
                t = a.length
            }
            c = null,
            d = !1,
            function(e) {
                if (r === clearTimeout)
                    return clearTimeout(e);
                if ((r === s || !r) && clearTimeout)
                    return r = clearTimeout,
                    clearTimeout(e);
                try {
                    r(e)
                } catch (t) {
                    try {
                        return r.call(null, e)
                    } catch (t) {
                        return r.call(this, e)
                    }
                }
            }(e)
        }
    }
    function g(e, t) {
        this.fun = e,
        this.array = t
    }
    function h() {}
    o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        a.push(new g(e,t)),
        1 !== a.length || d || u(p)
    }
    ,
    g.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    o.title = "browser",
    o.browser = !0,
    o.env = {},
    o.argv = [],
    o.version = "",
    o.versions = {},
    o.on = h,
    o.addListener = h,
    o.once = h,
    o.off = h,
    o.removeListener = h,
    o.removeAllListeners = h,
    o.emit = h,
    o.prependListener = h,
    o.prependOnceListener = h,
    o.listeners = function(e) {
        return []
    }
    ,
    o.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    o.cwd = function() {
        return "/"
    }
    ,
    o.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    o.umask = function() {
        return 0
    }
}
, function(e, t, n) {
    var r = n(44)
      , o = n(0)
      , i = n(46).set
      , s = n(99)
      , u = o.setImmediate ? s(i, !1) : i;
    r({
        global: !0,
        bind: !0,
        enumerable: !0,
        forced: o.setImmediate !== u
    }, {
        setImmediate: u
    })
}
, function(e, t, n) {
    "use strict";
    var r, o = n(0), i = n(47), s = n(1), u = n(100), c = n(18), a = n(48), d = n(49), l = o.Function, f = /MSIE .\./.test(c) || u && ((r = o.Bun.version.split(".")).length < 3 || 0 == r[0] && (r[1] < 3 || 3 == r[1] && 0 == r[2]));
    e.exports = function(e, t) {
        var n = t ? 2 : 1;
        return f ? function(r, o) {
            var u = d(arguments.length, 1) > n
              , c = s(r) ? r : l(r)
              , f = u ? a(arguments, n) : []
              , p = u ? function() {
                i(c, this, f)
            }
            : c;
            return t ? e(p, o) : e(p)
        }
        : e
    }
}
, function(e, t) {
    e.exports = "function" == typeof Bun && Bun && "string" == typeof Bun.version
}
, function(e, t, n) {
    var r = n(50).default
      , o = n(102);
    e.exports = function(e) {
        var t = o(e, "string");
        return "symbol" === r(t) ? t : String(t)
    }
    ,
    e.exports.__esModule = !0,
    e.exports.default = e.exports
}
, function(e, t, n) {
    var r = n(50).default;
    e.exports = function(e, t) {
        if ("object" !== r(e) || null === e)
            return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var o = n.call(e, t || "default");
            if ("object" !== r(o))
                return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
    }
    ,
    e.exports.__esModule = !0,
    e.exports.default = e.exports
}
, function(e, t, n) {
    var r;
    !function(o, i) {
        "use strict";
        var s = "model"
          , u = "name"
          , c = "type"
          , a = "vendor"
          , d = "version"
          , l = "mobile"
          , f = "tablet"
          , p = "smarttv"
          , g = {
            extend: function(e, t) {
                var n = {};
                for (var r in e)
                    t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
                return n
            },
            has: function(e, t) {
                return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
            },
            lowerize: function(e) {
                return e.toLowerCase()
            },
            major: function(e) {
                return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0
            },
            trim: function(e) {
                return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
        }
          , h = {
            rgx: function(e, t) {
                for (var n, r, o, i, s, u, c = 0; c < t.length && !s; ) {
                    var a = t[c]
                      , d = t[c + 1];
                    for (n = r = 0; n < a.length && !s; )
                        if (s = a[n++].exec(e))
                            for (o = 0; o < d.length; o++)
                                u = s[++r],
                                "object" == typeof (i = d[o]) && i.length > 0 ? 2 == i.length ? "function" == typeof i[1] ? this[i[0]] = i[1].call(this, u) : this[i[0]] = i[1] : 3 == i.length ? "function" != typeof i[1] || i[1].exec && i[1].test ? this[i[0]] = u ? u.replace(i[1], i[2]) : void 0 : this[i[0]] = u ? i[1].call(this, u, i[2]) : void 0 : 4 == i.length && (this[i[0]] = u ? i[3].call(this, u.replace(i[1], i[2])) : void 0) : this[i] = u || void 0;
                    c += 2
                }
            },
            str: function(e, t) {
                for (var n in t)
                    if ("object" == typeof t[n] && t[n].length > 0) {
                        for (var r = 0; r < t[n].length; r++)
                            if (g.has(t[n][r], e))
                                return "?" === n ? void 0 : n
                    } else if (g.has(t[n], e))
                        return "?" === n ? void 0 : n;
                return e
            }
        }
          , m = {
            browser: {
                oldsafari: {
                    version: {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }
                }
            },
            device: {
                amazon: {
                    model: {
                        "Fire Phone": ["SD", "KF"]
                    }
                },
                sprint: {
                    model: {
                        "Evo Shift 4G": "7373KT"
                    },
                    vendor: {
                        HTC: "APA",
                        Sprint: "Sprint"
                    }
                }
            },
            os: {
                windows: {
                    version: {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    }
                }
            }
        }
          , b = {
            browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [u, d], [/(opios)[\/\s]+([\w\.]+)/i], [[u, "Opera Mini"], d], [/\s(opr)\/([\w\.]+)/i], [[u, "Opera"], d], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i], [u, d], [/(konqueror)\/([\w\.]+)/i], [[u, "Konqueror"], d], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[u, "IE"], d], [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i], [[u, "Edge"], d], [/(yabrowser)\/([\w\.]+)/i], [[u, "Yandex"], d], [/(Avast)\/([\w\.]+)/i], [[u, "Avast Secure Browser"], d], [/(AVG)\/([\w\.]+)/i], [[u, "AVG Secure Browser"], d], [/(puffin)\/([\w\.]+)/i], [[u, "Puffin"], d], [/(focus)\/([\w\.]+)/i], [[u, "Firefox Focus"], d], [/(opt)\/([\w\.]+)/i], [[u, "Opera Touch"], d], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[u, "UCBrowser"], d], [/(comodo_dragon)\/([\w\.]+)/i], [[u, /_/g, " "], d], [/(windowswechat qbcore)\/([\w\.]+)/i], [[u, "WeChat(Win) Desktop"], d], [/(micromessenger)\/([\w\.]+)/i], [[u, "WeChat"], d], [/(brave)\/([\w\.]+)/i], [[u, "Brave"], d], [/(qqbrowserlite)\/([\w\.]+)/i], [u, d], [/(QQ)\/([\d\.]+)/i], [u, d], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [u, d], [/(baiduboxapp)[\/\s]?([\w\.]+)/i], [u, d], [/(2345Explorer)[\/\s]?([\w\.]+)/i], [u, d], [/(MetaSr)[\/\s]?([\w\.]+)/i], [u], [/(LBBROWSER)/i], [u], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [d, [u, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [d, [u, "Facebook"]], [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i], [u, d], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [d, [u, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[u, /(.+)/, "$1 WebView"], d], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[u, /(.+(?:g|us))(.+)/, "$1 $2"], d], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [d, [u, "Android Browser"]], [/(sailfishbrowser)\/([\w\.]+)/i], [[u, "Sailfish Browser"], d], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [u, d], [/(dolfin)\/([\w\.]+)/i], [[u, "Dolphin"], d], [/(qihu|qhbrowser|qihoobrowser|360browser)/i], [[u, "360 Browser"]], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[u, "Chrome"], d], [/(coast)\/([\w\.]+)/i], [[u, "Opera Coast"], d], [/fxios\/([\w\.-]+)/i], [d, [u, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [d, [u, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [d, u], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [[u, "GSA"], d], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [u, [d, h.str, m.browser.oldsafari.version]], [/(webkit|khtml)\/([\w\.]+)/i], [u, d], [/(navigator|netscape)\/([\w\.-]+)/i], [[u, "Netscape"], d], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [u, d]],
            cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", g.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [["architecture", /ower/, "", g.lowerize]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [["architecture", g.lowerize]]],
            device: [[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i], [s, a, [c, f]], [/applecoremedia\/[\w\.]+ \((ipad)/], [s, [a, "Apple"], [c, f]], [/(apple\s{0,1}tv)/i], [[s, "Apple TV"], [a, "Apple"], [c, p]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [a, s, [c, f]], [/(kf[A-z]+)\sbuild\/.+silk\//i], [s, [a, "Amazon"], [c, f]], [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i], [[s, h.str, m.device.amazon.model], [a, "Amazon"], [c, l]], [/android.+aft([bms])\sbuild/i], [s, [a, "Amazon"], [c, p]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [s, a, [c, l]], [/\((ip[honed|\s\w*]+);/i], [s, [a, "Apple"], [c, l]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [a, s, [c, l]], [/\(bb10;\s(\w+)/i], [s, [a, "BlackBerry"], [c, l]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i], [s, [a, "Asus"], [c, f]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[a, "Sony"], [s, "Xperia Tablet"], [c, f]], [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [s, [a, "Sony"], [c, l]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [a, s, [c, "console"]], [/android.+;\s(shield)\sbuild/i], [s, [a, "Nvidia"], [c, "console"]], [/(playstation\s[34portablevi]+)/i], [s, [a, "Sony"], [c, "console"]], [/(sprint\s(\w+))/i], [[a, h.str, m.device.sprint.vendor], [s, h.str, m.device.sprint.model], [c, l]], [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [a, [s, /_/g, " "], [c, l]], [/(nexus\s9)/i], [s, [a, "HTC"], [c, f]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i], [s, [a, "Huawei"], [c, l]], [/android.+(bah2?-a?[lw]\d{2})/i], [s, [a, "Huawei"], [c, f]], [/(microsoft);\s(lumia[\s\w]+)/i], [a, s, [c, l]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [s, [a, "Microsoft"], [c, "console"]], [/(kin\.[onetw]{3})/i], [[s, /\./g, " "], [a, "Microsoft"], [c, l]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [s, [a, "Motorola"], [c, l]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [s, [a, "Motorola"], [c, f]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[a, g.trim], [s, g.trim], [c, p]], [/hbbtv.+maple;(\d+)/i], [[s, /^/, "SmartTV"], [a, "Samsung"], [c, p]], [/\(dtv[\);].+(aquos)/i], [s, [a, "Sharp"], [c, p]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[a, "Samsung"], s, [c, f]], [/smart-tv.+(samsung)/i], [a, [c, p], s], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [[a, "Samsung"], s, [c, l]], [/sie-(\w*)/i], [s, [a, "Siemens"], [c, l]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [[a, "Nokia"], s, [c, l]], [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i], [s, [a, "Acer"], [c, f]], [/android.+([vl]k\-?\d{3})\s+build/i], [s, [a, "LG"], [c, f]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[a, "LG"], s, [c, f]], [/(lg) netcast\.tv/i], [a, s, [c, p]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], [s, [a, "LG"], [c, l]], [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i], [a, s, [c, f]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [s, [a, "Lenovo"], [c, f]], [/(lenovo)[_\s-]?([\w-]+)/i], [a, s, [c, l]], [/linux;.+((jolla));/i], [a, s, [c, l]], [/((pebble))app\/[\d\.]+\s/i], [a, s, [c, "wearable"]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [a, s, [c, l]], [/crkey/i], [[s, "Chromecast"], [a, "Google"], [c, p]], [/android.+;\s(glass)\s\d/i], [s, [a, "Google"], [c, "wearable"]], [/android.+;\s(pixel c)[\s)]/i], [s, [a, "Google"], [c, f]], [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i], [s, [a, "Google"], [c, l]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i], [[s, /_/g, " "], [a, "Xiaomi"], [c, l]], [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i], [[s, /_/g, " "], [a, "Xiaomi"], [c, f]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [s, [a, "Meizu"], [c, l]], [/(mz)-([\w-]{2,})/i], [[a, "Meizu"], s, [c, l]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i], [s, [a, "OnePlus"], [c, l]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [s, [a, "RCA"], [c, f]], [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i], [s, [a, "Dell"], [c, f]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [s, [a, "Verizon"], [c, f]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[a, "Barnes & Noble"], s, [c, f]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [s, [a, "NuVision"], [c, f]], [/android.+;\s(k88)\sbuild/i], [s, [a, "ZTE"], [c, f]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [s, [a, "Swiss"], [c, l]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [s, [a, "Swiss"], [c, f]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [s, [a, "Zeki"], [c, f]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [[a, "Dragon Touch"], s, [c, f]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], [s, [a, "Insignia"], [c, f]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], [s, [a, "NextBook"], [c, f]], [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[a, "Voice"], s, [c, l]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [[a, "LvTel"], s, [c, l]], [/android.+;\s(PH-1)\s/i], [s, [a, "Essential"], [c, l]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [s, [a, "Envizen"], [c, f]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], [a, s, [c, f]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], [s, [a, "MachSpeed"], [c, f]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [a, s, [c, f]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [s, [a, "Rotor"], [c, f]], [/android.+(KS(.+))\s+build/i], [s, [a, "Amazon"], [c, f]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], [a, s, [c, f]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[c, g.lowerize], a, s], [/[\s\/\(](smart-?tv)[;\)]/i], [[c, p]], [/(android[\w\.\s\-]{0,9});.+build/i], [s, [a, "Generic"]]],
            engine: [[/windows.+\sedge\/([\w\.]+)/i], [d, [u, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [d, [u, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [u, d], [/rv\:([\w\.]{1,9}).+(gecko)/i], [d, u]],
            os: [[/microsoft\s(windows)\s(vista|xp)/i], [u, d], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [u, [d, h.str, m.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[u, "Windows"], [d, h.str, m.os.windows.version]], [/\((bb)(10);/i], [[u, "BlackBerry"], d], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i], [u, d], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [[u, "Symbian"], d], [/\((series40);/i], [u], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[u, "Firefox OS"], d], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i], [u, d], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[u, "Chromium OS"], d], [/(sunos)\s?([\w\.\d]*)/i], [[u, "Solaris"], d], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], [u, d], [/(haiku)\s(\w+)/i], [u, d], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[d, /_/g, "."], [u, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [[u, "Mac OS"], [d, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i], [u, d]]
        }
          , v = function(e, t) {
            if ("object" == typeof e && (t = e,
            e = void 0),
            !(this instanceof v))
                return new v(e,t).getResult();
            var n = e || (o && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : "")
              , r = t ? g.extend(b, t) : b;
            return this.getBrowser = function() {
                var e = {
                    name: void 0,
                    version: void 0
                };
                return h.rgx.call(e, n, r.browser),
                e.major = g.major(e.version),
                e
            }
            ,
            this.getCPU = function() {
                var e = {
                    architecture: void 0
                };
                return h.rgx.call(e, n, r.cpu),
                e
            }
            ,
            this.getDevice = function() {
                var e = {
                    vendor: void 0,
                    model: void 0,
                    type: void 0
                };
                return h.rgx.call(e, n, r.device),
                e
            }
            ,
            this.getEngine = function() {
                var e = {
                    name: void 0,
                    version: void 0
                };
                return h.rgx.call(e, n, r.engine),
                e
            }
            ,
            this.getOS = function() {
                var e = {
                    name: void 0,
                    version: void 0
                };
                return h.rgx.call(e, n, r.os),
                e
            }
            ,
            this.getResult = function() {
                return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                }
            }
            ,
            this.getUA = function() {
                return n
            }
            ,
            this.setUA = function(e) {
                return n = e,
                this
            }
            ,
            this
        };
        v.VERSION = "0.7.21",
        v.BROWSER = {
            NAME: u,
            MAJOR: "major",
            VERSION: d
        },
        v.CPU = {
            ARCHITECTURE: "architecture"
        },
        v.DEVICE = {
            MODEL: s,
            VENDOR: a,
            TYPE: c,
            CONSOLE: "console",
            MOBILE: l,
            SMARTTV: p,
            TABLET: f,
            WEARABLE: "wearable",
            EMBEDDED: "embedded"
        },
        v.ENGINE = {
            NAME: u,
            VERSION: d
        },
        v.OS = {
            NAME: u,
            VERSION: d
        },
        void 0 !== t ? (void 0 !== e && e.exports && (t = e.exports = v),
        t.UAParser = v) : void 0 === (r = function() {
            return v
        }
        .call(t, n, t, e)) || (e.exports = r);
        var y = o && (o.jQuery || o.Zepto);
        if (y && !y.ua) {
            var w = new v;
            y.ua = w.getResult(),
            y.ua.get = function() {
                return w.getUA()
            }
            ,
            y.ua.set = function(e) {
                w.setUA(e);
                var t = w.getResult();
                for (var n in t)
                    y.ua[n] = t[n]
            }
        }
    }("object" == typeof window ? window : this)
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function o(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? r(Object(n), !0).forEach((function(t) {
                i(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function s(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    var c = n(105)
      , a = c.encodeToBase64
      , d = c.decodeFromBase64
      , l = c.decodePublisherTCFromBase64
      , f = c.getSegmentType
      , p = n(110).consentStringDefinition
      , g = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            s(this, e),
            this.setConsentString(t)
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "getCoreSegmentData",
            value: function() {
                return this.core ? o({}, this.core) : null
            }
        }, {
            key: "setCoreSegmentData",
            value: function(e) {
                this.core = o({}, e)
            }
        }, {
            key: "getCoreSegmentString",
            value: function() {
                return this.core ? a(this.core, p.core) : null
            }
        }, {
            key: "setCoreSegmentString",
            value: function(e) {
                this.core = d(e, p.core)
            }
        }, {
            key: "getDisclosedVendorsData",
            value: function() {
                return this.disclosedVendors ? o({}, this.disclosedVendors) : null
            }
        }, {
            key: "setDisclosedVendorsData",
            value: function(e) {
                this.disclosedVendors = o({}, e)
            }
        }, {
            key: "getDisclosedVendorsString",
            value: function() {
                return this.disclosedVendors ? a(this.disclosedVendors, p.disclosedVendors) : null
            }
        }, {
            key: "setDisclosedVendorsString",
            value: function(e) {
                this.disclosedVendors = d(e, p.disclosedVendors)
            }
        }, {
            key: "getAllowedVendorsData",
            value: function() {
                return this.allowedVendors ? o({}, this.allowedVendors) : null
            }
        }, {
            key: "setAllowedVendorsData",
            value: function(e) {
                this.allowedVendors = o({}, e)
            }
        }, {
            key: "getAllowedVendorsString",
            value: function() {
                return this.allowedVendors ? a(this.allowedVendors, p.allowedVendors) : null
            }
        }, {
            key: "setAllowedVendorsString",
            value: function(e) {
                this.allowedVendors = d(e, p.allowedVendors)
            }
        }, {
            key: "getPublisherTCData",
            value: function() {
                return this.publisherTC ? o({}, this.publisherTC) : null
            }
        }, {
            key: "setPublisherTCData",
            value: function(e) {
                this.publisherTC = o({}, e)
            }
        }, {
            key: "getPublisherTCString",
            value: function() {
                return this.publisherTC ? a(this.publisherTC, p.publisherTC) : null
            }
        }, {
            key: "setPublisherTCString",
            value: function(e) {
                this.publisherTC = l(e)
            }
        }, {
            key: "setConsentString",
            value: function(e) {
                if (this.core = null,
                this.disclosedVendors = null,
                this.allowedVendors = null,
                this.publisherTC = null,
                e) {
                    var t = e.split(".");
                    t.length > 0 && this.setCoreSegmentString(t[0]);
                    for (var n = 1; n < t.length; n += 1)
                        switch (f(t[n])) {
                        case 1:
                            this.setAllowedVendorsString(t[n]);
                            break;
                        case 2:
                            this.setDisclosedVendorsString(t[n]);
                            break;
                        case 3:
                            this.setPublisherTCString(t[n]);
                            break;
                        default:
                            throw new Error("Unknown segment type in consent string")
                        }
                }
            }
        }, {
            key: "getConsentString",
            value: function() {
                var e = [];
                return this.core ? (e.push(this.getCoreSegmentString()),
                this.disclosedVendors && e.push(this.getDisclosedVendorsString()),
                this.allowedVendors && e.push(this.getAllowedVendorsString()),
                this.publisherTC && e.push(this.getPublisherTCString()),
                e.join(".")) : null
            }
        }]) && u(t.prototype, n),
        r && u(t, r),
        e
    }();
    e.exports = {
        TCStringV2: g
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(106)
      , o = n(51)
      , i = o.padLeft
      , s = o.padRight
      , u = n(108).encodeFields
      , c = n(109)
      , a = c.decodeFields
      , d = c.decodePublisherTC;
    function l(e) {
        for (var t = e; t.length % 4 != 0; )
            t += "=";
        t = t.replace(/-/g, "+").replace(/_/g, "/");
        for (var n = r.decode(t), o = "", s = 0; s < n.length; s += 1) {
            var u = n.charCodeAt(s).toString(2);
            o += i(u, 8 - u.length)
        }
        return o
    }
    e.exports = {
        encodeToBase64: function(e, t) {
            return function(e) {
                if (e) {
                    for (var t = s(e, 7 - (e.length + 7) % 8), n = "", o = 0; o < t.length; o += 8)
                        n += String.fromCharCode(parseInt(t.substr(o, 8), 2));
                    return r.encode(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                }
                return null
            }(u(e, t))
        },
        decodeFromBase64: function(e, t) {
            var n = l(e);
            return a(n, t).decodedObject
        },
        decodePublisherTCFromBase64: function(e) {
            var t = l(e);
            return d(t)
        },
        getSegmentType: function(e) {
            var t = l(e);
            return parseInt(t.substr(0, 3), 2)
        }
    }
}
, function(e, t, n) {
    (function(e, r) {
        var o;
        !function(i) {
            var s = t
              , u = (e && e.exports,
            "object" == typeof r && r);
            u.global !== u && u.window;
            var c = function(e) {
                this.message = e
            };
            (c.prototype = new Error).name = "InvalidCharacterError";
            var a = function(e) {
                throw new c(e)
            }
              , d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
              , l = /[\t\n\f\r ]/g
              , f = {
                encode: function(e) {
                    e = String(e),
                    /[^\0-\xFF]/.test(e) && a("The string to be encoded contains characters outside of the Latin1 range.");
                    for (var t, n, r, o, i = e.length % 3, s = "", u = -1, c = e.length - i; ++u < c; )
                        t = e.charCodeAt(u) << 16,
                        n = e.charCodeAt(++u) << 8,
                        r = e.charCodeAt(++u),
                        s += d.charAt((o = t + n + r) >> 18 & 63) + d.charAt(o >> 12 & 63) + d.charAt(o >> 6 & 63) + d.charAt(63 & o);
                    return 2 == i ? (t = e.charCodeAt(u) << 8,
                    n = e.charCodeAt(++u),
                    s += d.charAt((o = t + n) >> 10) + d.charAt(o >> 4 & 63) + d.charAt(o << 2 & 63) + "=") : 1 == i && (o = e.charCodeAt(u),
                    s += d.charAt(o >> 2) + d.charAt(o << 4 & 63) + "=="),
                    s
                },
                decode: function(e) {
                    var t = (e = String(e).replace(l, "")).length;
                    t % 4 == 0 && (t = (e = e.replace(/==?$/, "")).length),
                    (t % 4 == 1 || /[^+a-zA-Z0-9/]/.test(e)) && a("Invalid character: the string to be decoded is not correctly encoded.");
                    for (var n, r, o = 0, i = "", s = -1; ++s < t; )
                        r = d.indexOf(e.charAt(s)),
                        n = o % 4 ? 64 * n + r : r,
                        o++ % 4 && (i += String.fromCharCode(255 & n >> (-2 * o & 6)));
                    return i
                },
                version: "0.1.0"
            };
            void 0 === (o = function() {
                return f
            }
            .call(t, n, t, e)) || (e.exports = o)
        }()
    }
    ).call(this, n(107)(e), n(23))
}
, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}
        ,
        e.paths = [],
        e.children || (e.children = []),
        Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }),
        Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }),
        e.webpackPolyfill = 1),
        e
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(51)
      , o = r.padLeft
      , i = r.getMaxListElement;
    function s(e, t) {
        var n = "";
        return "number" != typeof e || Number.isNaN(e) || (n = parseInt(e, 10).toString(2)),
        t >= n.length && (n = o(n, t - n.length)),
        n.length > t && (n = n.substring(0, t)),
        n
    }
    function u(e) {
        return s(!0 === e ? 1 : 0, 1)
    }
    function c(e, t) {
        return e instanceof Date ? s(e.getTime() / 100, t) : s(e, t)
    }
    function a(e, t) {
        return s(e.toUpperCase().charCodeAt(0) - 65, t)
    }
    function d(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12;
        return a(e.slice(0, 1), t / 2) + a(e.slice(1), t / 2)
    }
    function l(e, t) {
        for (var n = "", r = 1; r <= t; r += 1)
            n += -1 !== e.indexOf(r) ? "1" : "0";
        return n
    }
    function f(e) {
        return s(e.length, 12) + e.reduce((function(e, t) {
            return e + function(e) {
                return u(e.isRange) + s(e.startId, 16) + (e.isRange ? s(e.endId, 16) : "")
            }(t)
        }
        ), "")
    }
    function p(e) {
        return f(function(e) {
            for (var t = i(e), n = [], r = [], o = 1; o <= t; o += 1) {
                var s = o;
                if (-1 !== e.indexOf(s) && n.push(s),
                (-1 === e.indexOf(s) || -1 === e.indexOf(s + 1)) && n.length) {
                    var u = n.shift()
                      , c = n.pop();
                    n = [],
                    r.push({
                        isRange: "number" == typeof c,
                        startId: u,
                        endId: c
                    })
                }
            }
            return r
        }(e))
    }
    function g(e, t) {
        var n = p(e)
          , r = l(e, i(e));
        return s(i(e), t) + u(n.length < r.length) + (n.length < r.length ? n : r)
    }
    function h(e, t, n) {
        var r = e || [];
        return s(r.length, t) + r.reduce((function(e, t) {
            return e + m(t, n)
        }
        ), "")
    }
    function m(e, t) {
        var n = "";
        return t.segmentId && (n = s(t.segmentId, 3)),
        t.fields.reduce((function(t, n) {
            return t + function(e, t) {
                var n = t.name
                  , r = t.type
                  , o = t.numBits
                  , i = e[n]
                  , a = null == i ? "" : i
                  , f = "function" == typeof o ? o(e) : o;
                switch (r) {
                case "int":
                    return s(a, f);
                case "bool":
                    return u(a);
                case "date":
                    return c(a, f);
                case "list":
                    return l(a, f);
                case "textcode":
                    return d(a, f);
                case "range":
                    return p(a);
                case "minlist":
                    return g(a, f);
                case "array":
                    return h(a, f, t);
                default:
                    throw new Error("TCStringV2 - Unknown field type ".concat(r, " for encoding"))
                }
            }(e, n)
        }
        ), n)
    }
    e.exports = {
        encodeBoolToBits: u,
        encodeIntToBits: s,
        encodeDateToBits: c,
        encodeLetterToBits: a,
        encodeTextCodeToBits: d,
        encodeListToBits: l,
        encodeListToRangeBits: p,
        encodeMinListToBits: g,
        encodeArrayToBits: h,
        encodeFields: m
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t, n) {
        if (void 0 !== n && e.length < t + n)
            throw new Error("Invalid decoding input")
    }
    function o(e, t, n) {
        return r(e, t, n),
        parseInt(e.substr(t, n), 2)
    }
    function i(e, t, n) {
        return r(e, t, n),
        new Date(100 * o(e, t, n))
    }
    function s(e, t) {
        return 1 === parseInt(e.substr(t, 1), 2)
    }
    function u(e) {
        var t = o(e);
        return String.fromCharCode(t + 65).toLowerCase()
    }
    function c(e, t, n) {
        r(e, t, n);
        var o = e.substr(t, n);
        return u(o.slice(0, n / 2)) + u(o.slice(n / 2))
    }
    function a(e, t, n, r) {
        var i = t
          , s = []
          , u = o(e, i, n);
        i += n;
        for (var c = 0; c < u; c += 1) {
            var a = g(e, r, i)
              , d = a.decodedObject;
            i = a.newPosition,
            s.push(d)
        }
        return {
            fieldValue: s,
            newPosition: i
        }
    }
    function d(e, t) {
        var n = t
          , r = []
          , i = o(e, n, 12);
        n += 12;
        for (var u = 0; u < i; ) {
            var c = s(e, n);
            if (n += 1,
            c) {
                var a = o(e, n, 16)
                  , d = o(e, n += 16, 16);
                n += 16;
                for (var l = a; l <= d; l += 1)
                    r.push(l)
            } else {
                var f = o(e, n, 16);
                n += 16,
                r.push(f)
            }
            u += 1
        }
        return {
            fieldValue: r,
            newPosition: n
        }
    }
    function l(e, t, n) {
        r(e, t, n);
        for (var o = [], i = e.substr(t, n), s = 0; s < i.length; s += 1)
            "0" !== i[s] && o.push(s + 1);
        return o
    }
    function f(e, t, n) {
        var r = t
          , i = o(e, t, n)
          , u = s(e, r += n);
        return r += 1,
        u ? d(e, r) : {
            fieldValue: l(e.substr(r, i)),
            newPosition: r += i
        }
    }
    function p(e, t, n, r) {
        var u = r.type
          , p = r.numBits
          , g = "function" == typeof p ? p(t) : p;
        switch (u) {
        case "int":
            return {
                fieldValue: o(e, n, g)
            };
        case "bool":
            return {
                fieldValue: s(e, n)
            };
        case "date":
            return {
                fieldValue: i(e, n, g)
            };
        case "list":
            return {
                fieldValue: l(e, n, g)
            };
        case "textcode":
            return {
                fieldValue: c(e, n, g)
            };
        case "range":
            return d(e, n);
        case "minlist":
            return f(e, n, g);
        case "array":
            return a(e, n, g, r);
        default:
            throw new Error("TCStringV2 - Unknown field type ".concat(u, " for decoding"))
        }
    }
    function g(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
          , r = n;
        t.segmentId && (r += 3);
        var o = t.fields.reduce((function(t, n) {
            var o = n.name
              , i = n.numBits
              , s = p(e, t, r, n)
              , u = s.fieldValue
              , c = s.newPosition;
            return void 0 !== u && (t[o] = u),
            void 0 !== c ? r = c : "number" == typeof i && (r += i),
            t
        }
        ), {});
        return {
            decodedObject: o,
            newPosition: r
        }
    }
    e.exports = {
        decodeBitsToInt: o,
        decodeBitsToBool: s,
        decodeBitsToDate: i,
        decodeBitsToLetter: u,
        decodeBitsToTextCode: c,
        decodeBitsToRange: d,
        decodeBitsToMinList: f,
        decodeBitsToArray: a,
        decodeFields: g,
        decodePublisherTC: function(e) {
            var t = 0
              , n = o(e, t, 3);
            if (t += 3,
            3 !== n)
                throw new Error("Invalid consent string");
            var r = l(e, t, 24)
              , i = l(e, t += 24, 24)
              , s = o(e, t += 24, 6);
            return {
                pubPurposesConsent: r,
                pubPurposesLITransparency: i,
                numCustomPurposes: s,
                customPurposesConsent: l(e, t += 6, s),
                customPurposesLITransparency: l(e, t += s, s)
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = {
        consentStringDefinition: {
            core: {
                fields: [{
                    name: "version",
                    type: "int",
                    numBits: 6
                }, {
                    name: "created",
                    type: "date",
                    numBits: 36
                }, {
                    name: "lastUpdated",
                    type: "date",
                    numBits: 36
                }, {
                    name: "cmpId",
                    type: "int",
                    numBits: 12
                }, {
                    name: "cmpVersion",
                    type: "int",
                    numBits: 12
                }, {
                    name: "consentScreen",
                    type: "int",
                    numBits: 6
                }, {
                    name: "consentLanguage",
                    type: "textcode",
                    numBits: 12
                }, {
                    name: "vendorListVersion",
                    type: "int",
                    numBits: 12
                }, {
                    name: "tcfPolicyVersion",
                    type: "int",
                    numBits: 6
                }, {
                    name: "isServiceSpecific",
                    type: "bool",
                    numBits: 1
                }, {
                    name: "useNonStandardStacks",
                    type: "bool",
                    numBits: 1
                }, {
                    name: "specialFeatureOptIns",
                    type: "list",
                    numBits: 12
                }, {
                    name: "purposesConsent",
                    type: "list",
                    numBits: 24
                }, {
                    name: "purposeLITransparency",
                    type: "list",
                    numBits: 24
                }, {
                    name: "purposeOneTreatment",
                    type: "bool",
                    numBits: 1
                }, {
                    name: "publisherCC",
                    type: "textcode",
                    numBits: 12
                }, {
                    name: "vendorsConsent",
                    type: "minlist",
                    numBits: 16
                }, {
                    name: "vendorsLegitimateInterest",
                    type: "minlist",
                    numBits: 16
                }, {
                    name: "publisherRestrictions",
                    type: "array",
                    numBits: 12,
                    fields: [{
                        name: "purposeId",
                        type: "int",
                        numBits: 6
                    }, {
                        name: "restrictionType",
                        type: "int",
                        numBits: 2
                    }, {
                        name: "restrictedVendors",
                        type: "range"
                    }]
                }]
            },
            disclosedVendors: {
                segmentId: 1,
                fields: [{
                    name: "disclosedVendors",
                    type: "minlist",
                    numBits: 16
                }]
            },
            allowedVendors: {
                segmentId: 2,
                fields: [{
                    name: "allowedVendors",
                    type: "minlist",
                    numBits: 16
                }]
            },
            publisherTC: {
                segmentId: 3,
                fields: [{
                    name: "pubPurposesConsent",
                    type: "list",
                    numBits: 24
                }, {
                    name: "pubPurposesLITransparency",
                    type: "list",
                    numBits: 24
                }, {
                    name: "numCustomPurposes",
                    type: "int",
                    numBits: 6
                }, {
                    name: "customPurposesConsent",
                    type: "list",
                    numBits: function(e) {
                        return e.numCustomPurposes
                    }
                }, {
                    name: "customPurposesLITransparency",
                    type: "list",
                    numBits: function(e) {
                        return e.numCustomPurposes
                    }
                }]
            }
        }
    }
}
, function(e) {
    e.exports = JSON.parse('{"name":"atsdetectionmodule","version":"1.1.4","description":"ats detection module","main":"src/index.js","scripts":{"test":"jest","clean":"rimraf coverage build","build:dev:only":"webpack --mode=development","build:dev":"run-s clean build:dev:only","build:prod:only":"webpack --mode=production","build:prod":"run-s clean build:prod:only","start":"webpack-dev-server --https","lint":"eslint \\"src/\\" --ext .js -c ../../.eslintrc","lint:fix":"eslint \\"src/\\" --ext .js --fix -c ../../.eslintrc","format":"prettier --write \\"**/*.js\\"","format:staged":"pretty-quick --staged"},"author":"","license":"ISC"}')
}
, function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "start", (function() {
        return _e
    }
    )),
    n.d(t, "triggerDetection", (function() {
        return je
    }
    )),
    n.d(t, "outputCurrentConfiguration", (function() {
        return ke
    }
    ));
    n(54),
    n(65),
    n(79);
    var r = n(52)
      , o = n.n(r);
    const i = {
        logging: void 0,
        browsers: void 0,
        detectionType: "scrape",
        urlRegex: void 0,
        detectDynamicNodes: void 0,
        urlParameter: [],
        urlHashType: "email",
        cssSelectors: ["input[type=email]", "input[type=text]"],
        detectionSubject: ["email"],
        accountID: void 0,
        customerIDRegex: void 0,
        detectionEventType: "onblur",
        triggerElements: void 0,
        consentIsPassed: !1,
        pubOptout: !1
    };
    var s = new class {
        constructor() {
            o()(this, "update", e=>{
                if (e) {
                    const t = function(e, t) {
                        const n = {
                            ...e
                        };
                        return Object.keys(t).forEach(e=>{
                            n[e] = t[e]
                        }
                        ),
                        n
                    }(this, e);
                    Object.assign(this, t)
                }
            }
            ),
            this.update(i)
        }
    }
    ;
    const u = ["debug", "info", "warn", "error"];
    var c = u.reduce((e,t,n)=>(e[t] = function() {
        const e = "debug" === t ? "log" : t
          , r = s.logging;
        if (r && console && "function" == typeof console[e]) {
            const s = u.indexOf(r.toString().toLocaleLowerCase());
            if (!0 === r || s > -1 && n >= s) {
                for (var o = arguments.length, i = new Array(o), c = 0; c < o; c++)
                    i[c] = arguments[c];
                const [n,...r] = [...i];
                console[e](`${t.toUpperCase()} - (ATS-DETECTION-MODULE) ${n}`, ...r)
            }
        }
    }
    ,
    e), {});
    const a = new (n(103));
    function d() {
        return void 0 === s.browsers || !!(s.browsers.indexOf("chrome") > -1 && "Chrome" === a.getBrowser().name || s.browsers.indexOf("edge") > -1 && "Edge" === a.getBrowser().name || s.browsers.indexOf("firefox") > -1 && "undefined" != typeof InstallTrigger || s.browsers.indexOf("safari") > -1 && navigator.vendor.includes("Apple") || s.browsers.indexOf("ie") > -1 && document.documentMode)
    }
    function l() {
        return window.location.href
    }
    function f(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 31536e3
          , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "/"
          , o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0
          , i = new Date;
        i.setTime(i.getTime() + 1e3 * n);
        let s = ";expires=" + i.toUTCString()
          , u = ";max-age=" + n
          , c = ";path=" + r
          , a = o ? ";domain=" + o : ""
          , d = e + "=" + encodeURIComponent(t);
        document.cookie = d + u + s + a + c
    }
    function p(e) {
        const t = e + "="
          , n = document.cookie.split(";");
        for (let e = 0; e < n.length; e++) {
            const r = n[e].trim();
            if (0 === r.indexOf(t))
                return decodeURIComponent(r.substring(t.length, r.length))
        }
        return ""
    }
    const g = /((([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,}))/i;
    function h(e) {
        if (window.TextEncoder)
            return new TextEncoder("utf-8").encode(e);
        const t = unescape(encodeURIComponent(e))
          , n = new Uint8Array(t.length);
        for (let e = 0; e < t.length; e++)
            n[e] = t.charCodeAt(e);
        return n
    }
    async function m(e) {
        const t = h(e);
        try {
            return w(await crypto.subtle.digest("SHA-256", t))
        } catch (e) {
            return console.error("SHA-256 encryption failed: " + e),
            ""
        }
    }
    async function b(e) {
        const t = h(e);
        try {
            return w(await crypto.subtle.digest("SHA-1", t))
        } catch (e) {
            return console.error("SHA-1 encryption failed: " + e),
            ""
        }
    }
    function v(e) {
        const t = (e = e.toLowerCase().trim()).split("@");
        let n = t[0];
        const r = t[1];
        let o = n.indexOf("+");
        return -1 === o && (o = n.indexOf(" ")),
        -1 === o && (o = n.indexOf("%2b")),
        -1 !== o && (n = n.slice(0, o)),
        "gmail.com" === r && (n = n.replace(/\./g, "")),
        n + "@" + r
    }
    function y(e) {
        return g.test(e)
    }
    function w(e) {
        const t = []
          , n = new DataView(e);
        for (let e = 0; e < n.byteLength; e += 4) {
            const r = "00000000"
              , o = (r + n.getUint32(e).toString(16)).slice(-r.length);
            t.push(o)
        }
        return t.join("")
    }
    Object.freeze({
        LIVERAMP: "LIVERAMP",
        FACEBOOK: "FACEBOOK",
        PAIR_ID: "PAIR_ID"
    }),
    Object.freeze({
        LIVERAMP: "_lr_env",
        FACEBOOK: "_lr_fb_env",
        PAIR_ID: "_lr_pairId"
    }),
    Object.freeze({
        LIVERAMP: 19,
        FACEBOOK: 24,
        PAIR_ID: 25
    });
    const x = {
        method: "GET",
        mode: "cors"
    }
      , S = /(\+1)|[.]|[(]|[)]|[-]|[ ]/gi;
    async function T(e) {
        try {
            const t = await fetch(e, x);
            if (t && 200 === t.status && null !== t.body)
                return t.json()
        } catch (e) {
            console.error("There has been a problem with your fetch operation: ", e)
        }
    }
    async function C() {
        let e = p("_lr_geo_location");
        if ("" === e) {
            const t = await async function() {
                const e = await T("https://geo.privacymanager.io/");
                if (e)
                    return e;
                console.error("Geo location is undefined or empty")
            }();
            e = t.country,
            f("_lr_geo_location_state", t.region, 86400),
            e && "" !== e || (e = "US"),
            f("_lr_geo_location", e, 86400)
        }
        return e
    }
    async function A(e, t, n) {
        if (n)
            if ("email" === t) {
                f("_lr_hashed_pid", await m(v(e)), 1296e3)
            } else if ("phoneNumber" === t) {
                f("_lr_hashed_pid", await b((r = e,
                r.replace(S, ""))), 1296e3)
            } else if ("customerID" === t) {
                f("_lr_hashed_pid", await m(e.customerId), 1296e3)
            } else if ("emailHashes" === t)
                if (e instanceof Array) {
                    let t = function(e) {
                        for (let t in e)
                            if (64 === e[t].length)
                                return e[t].length;
                        for (let t in e)
                            if (40 === e[t].length)
                                return e[t].length
                    }(e);
                    t && f("_lr_hashed_pid", t, 1296e3)
                } else
                    f("_lr_hashed_pid", e, 1296e3);
        var r
    }
    let O, E;
    function I(e) {
        if (e)
            try {
                return null !== new RegExp(e)
            } catch (e) {
                c.error("Regex is invalid: ", e)
            }
        return !1
    }
    function P(e) {
        if (!s.urlParameter || s.urlParameter.length < 1)
            return [];
        let t = [];
        try {
            for (let e of s.urlParameter) {
                const n = new URL(l()).searchParams.get(e);
                n && t.push(n)
            }
        } catch (e) {
            c.debug("Creating URL object failed: " + e),
            t = function(e) {
                const t = [];
                let n = null;
                const r = window.location.search.substring(1)
                  , o = /([^&=]+)=([^&]*)/g;
                for (; n = o.exec(r); )
                    e.include(decodeURIComponent(n[1])) && t.push(decodeURIComponent(n[2]));
                return t
            }(s.urlParameter)
        }
        return !t || t.length < 1 ? (c.debug("There is no such url parameter. \n Tried to fetch: " + e),
        []) : t
    }
    function _(e, t) {
        O = e,
        E = t,
        async function() {
            if (!1 === we)
                return void c.debug("User removed consent, identifier won't be dispatched.");
            if (O && E) {
                const e = new CustomEvent("detected-identifier",{
                    detail: {
                        identifier: O,
                        type: E
                    }
                });
                await A(O, E, s.pubOptout),
                c.info("Dispatched event with identifier: ", O, " and type: ", E),
                window.dispatchEvent(e)
            } else
                c.info("Identifier and/or Identifier Type are empty.")
        }()
    }
    const j = /(^((\+1)?)([\s.-]?)?[(]?[2-9][0-9][0-9][)]?[(\s)?.-]?[2-9][0-9][0-9][\s.-]?\d{4}$)/
      , k = /(\+1)|[.]|[(]|[)]|[-]|[ ]/gi;
    async function D(e) {
        let t = e;
        "string" != typeof e && (t += ""),
        R(t) ? (c.debug("We detected phone number: " + t),
        _(t, "phoneNumber")) : c.debug("Phone number is invalid")
    }
    function B(e) {
        return e.replace(k, "")
    }
    function R(e) {
        return j.test(e.trim(e))
    }
    function L(e) {
        return !!s.customerIDRegex && new RegExp(s.customerIDRegex).test(e)
    }
    const V = /(^[a-fA-F0-9]{64}$)/
      , N = /(^[a-fA-F0-9]{40}$)/
      , M = /(^[a-fA-F0-9]{32}$)/;
    function U(e) {
        return V.test(e) ? {
            type: "SHA256Hash",
            hash: e
        } : N.test(e) ? {
            type: "SHA1Hash",
            hash: e
        } : M.test(e) ? {
            type: "MD5Hash",
            hash: e
        } : void 0
    }
    const F = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
    let z, H, G = [], q = [], W = [], $ = !1;
    async function Y() {
        c.info("Detection started! Library is configured to detect: ", s.detectionSubject),
        c.info("Detection event type is ", s.detectionEventType),
        Ie(!0);
        let e = [];
        if (await Z(e),
        "onblur" === s.detectionEventType) {
            if (await function() {
                for (let e = 0; e < s.cssSelectors.length; e++)
                    if (Q())
                        return !0;
                return X()
            }())
                return;
            !function(e) {
                for (const t of e)
                    for (const e of t)
                        "object" == typeof e && W.push(e.onblur)
            }(e),
            K(e)
        } else
            "onsubmit" === s.detectionEventType || "onclick" === s.detectionEventType ? ae(e) : c.debug("Detection type not supported!")
    }
    function K(e) {
        for (const t of e)
            for (const n of t)
                if ("object" == typeof n) {
                    const t = n.onblur;
                    n.classList.contains("js-bound") || (n.classList += " js-bound",
                    n.onblur = ()=>{
                        if (!1 === we)
                            return c.debug("Consent was not given. Pid won't be detected(OnBlur)."),
                            "function" == typeof t && t(),
                            void te(e);
                        ne(n.value.trim(), e),
                        "function" == typeof t && t()
                    }
                    )
                }
    }
    function Z(e) {
        for (let t of s.cssSelectors)
            "string" == typeof t && t.includes("input") && t.length > 0 && e.push(document.querySelectorAll(t));
        let t = window.location.hostname
          , n = document.getElementsByTagName("iframe");
        for (let r = 0; r < n.length; r++)
            if (pe(t, n[r]) && n[r].contentDocument)
                for (let t of s.cssSelectors)
                    "string" == typeof t && t.includes("input") && t.length > 0 && e.push(n[r].contentDocument.querySelectorAll(t));
        return e
    }
    function X() {
        let e = window.location.hostname
          , t = document.getElementsByTagName("iframe");
        for (let n = 0; n < t.length; n++)
            if (pe(e, t[n]) && t[n].contentDocument)
                for (let e of s.cssSelectors)
                    if ("string" == typeof e && e.length > 0)
                        if (e.includes("input")) {
                            if (J(t[n].contentDocument.querySelectorAll(e)))
                                return !0
                        } else if (ee(t[n].contentDocument.querySelectorAll(e)))
                            return !0;
        return !1
    }
    function Q() {
        for (const e of s.cssSelectors)
            if ("string" == typeof e && e.length > 0)
                if (e.includes("input")) {
                    if (J(document.querySelectorAll(e)))
                        return !0
                } else if (ee(document.querySelectorAll(e)))
                    return !0;
        return X()
    }
    function J(e) {
        for (const t of e)
            if ("object" == typeof t) {
                const e = t.value.trim();
                return re(e) || oe(e) || ie(e)
            }
        return !1
    }
    function ee(e) {
        for (let t of e)
            if (void 0 !== t.innerText && (oe(t.innerText.trim()) || ie(t.innerText.trim())))
                return !0;
        return !1
    }
    function te(e) {
        let t = 0;
        for (const n of e)
            for (const e of n)
                "object" == typeof e && (e.onblur = W[t++])
    }
    function ne(e, t) {
        (oe(e) || ie(e) || re(e)) && te(t)
    }
    function re(e) {
        if (ue() && L(e)) {
            const t = function(e) {
                return e.trim()
            }(e);
            c.debug("We detected customer ID: ", t),
            fe();
            return _({
                customerId: t,
                accountId: s.accountID
            }, "customerID"),
            !0
        }
        return !1
    }
    function oe(e) {
        if (s.detectionSubject.includes("email") && y(e)) {
            const t = v(e.match(g)[0]);
            return c.debug("We detected email: " + t),
            fe(),
            _(t, "email"),
            !0
        }
        return !1
    }
    function ie(e) {
        if (s.detectionSubject.includes("phoneNumber") && R(e)) {
            return D(B(e)),
            fe(),
            !0
        }
        return !1
    }
    function se() {
        return s.detectionSubject.includes("email") || s.detectionSubject.includes("phoneNumber") || s.detectionSubject.includes("envelope") || s.detectionSubject.includes("pidHashes") || ue() ? function() {
            if (s.detectionSubject.includes("email")) {
                let e = P("email");
                if (e && e.length > 0)
                    for (let t of e) {
                        if (y(t))
                            return t = v(t),
                            c.debug("We detected email: " + t),
                            _(t, "email"),
                            !0;
                        c.debug("Email found in URL did not pass regex test.")
                    }
            }
            return !1
        }() || function() {
            if (s.detectionSubject.includes("phoneNumber")) {
                let e = P("phoneNumber");
                if (e && e.length > 0)
                    for (let t of e) {
                        if (R(t))
                            return c.debug("We detected phone number: " + t),
                            t = B(t),
                            D(t),
                            !0;
                        c.debug("Phone number found in URL did not pass regex test.")
                    }
            }
            return !1
        }() || function() {
            if (s.detectionSubject.includes("pidHashes")) {
                let e = P("hashedPid");
                if (e && e.length > 0)
                    for (let t of e) {
                        if (t = U(t),
                        t)
                            return c.debug("We detected hash: " + t.hash + " with type: " + t.type),
                            "SHA1Hash" !== t.type && "phoneNumber" === s.urlHashType ? (c.error("We support only SHA1 encryption for phone numbers."),
                            !1) : (_(t.hash, t.type),
                            !0);
                        c.debug("Hash did not pass regex test")
                    }
            }
            return !1
        }() || function() {
            if (ue()) {
                const e = P("customerID");
                if (e && e.length > 0)
                    for (let t of e) {
                        if (L(t)) {
                            c.debug("We detected customerID: " + t);
                            return _({
                                customerId: t,
                                accountId: s.accountID
                            }, "customerID"),
                            !0
                        }
                        c.debug("customerID found in url did not pass regex test")
                    }
            }
            return !1
        }() || function() {
            if (s.detectionSubject.includes("envelope")) {
                let e = P("envelope");
                if (e && e.length > 0)
                    for (let t of e)
                        try {
                            if (F.test(t) && t.length > 8)
                                try {
                                    return t = atob(t),
                                    c.debug("We detected envelope: " + t),
                                    _(t, "envelope"),
                                    !0
                                } catch (e) {
                                    c.error("Envelope could not be base64 decoded: " + e)
                                }
                            else
                                c.debug("Envelope found in url did not pass regex test")
                        } catch (e) {
                            c.error("Cannot decode base64 on envelope: " + e)
                        }
            }
            return !1
        }() : (c.debug("Library is not configured to start any url detection!"),
        !1)
    }
    function ue() {
        return s.accountID && I(s.customerIDRegex) && s.detectionSubject.includes("customerIdentifier")
    }
    function ce() {
        new MutationObserver((function(e, t) {
            H = t,
            c.debug("Detected dynamically added nodes."),
            $ && (t.disconnect(),
            c.debug("Checking for dynamically added elements is turned off.")),
            "onblur" === s.detectionEventType ? (K(Z([])),
            Q()) : "onclick" !== s.detectionEventType && "onsubmit" !== s.detectionEventType || ae(Z([]))
        }
        )).observe(document.querySelector("body"), {
            childList: !0,
            subtree: !0
        })
    }
    function ae(e) {
        !function() {
            for (let e of s.triggerElements)
                if (e.length > 0) {
                    document.querySelectorAll(e).forEach(e=>{
                        G.includes(e) || G.push(e)
                    }
                    )
                }
            let e = window.location.hostname
              , t = document.getElementsByTagName("iframe");
            for (let n = 0; n < t.length; n++)
                if (pe(e, t[n]) && t[n].contentDocument)
                    for (let e of s.triggerElements)
                        if (e.length > 0) {
                            t[n].contentDocument.querySelectorAll(e).forEach(e=>{
                                G.push(e)
                            }
                            )
                        }
        }(),
        G.forEach(e=>{
            q.push(e[s.detectionEventType])
        }
        );
        let t = [];
        for (let n of e)
            for (let e of n)
                e && e.tagName && "INPUT" === e.tagName && t.push(e);
        for (let e = 0; e < G.length; e++)
            G[e][s.detectionEventType] = async function() {
                for (let e of t)
                    if (!1 !== we) {
                        let t = e.value.trim();
                        if (await le(t)) {
                            c.debug("We detected: ", t),
                            de(),
                            s.detectDynamicNodes && H && H.disconnect();
                            break
                        }
                    }
                if (q[e] && (z = G[e][s.detectionEventType],
                G[e][s.detectionEventType] = q[e],
                G[e][s.detectionEventType](...arguments),
                G[e][s.detectionEventType] = z),
                !1 === we)
                    return c.debug("Consent was not given. Pid won't be detected.(Submit and OnClick)"),
                    void de()
            }
    }
    function de() {
        for (let e = 0; e < G.length; e++)
            G[e][s.detectionEventType] = q[e]
    }
    async function le(e) {
        return oe(e) || ie(e) || re(e)
    }
    function fe() {
        $ = !0,
        s.detectDynamicNodes && H && (c.debug("Checking for dynamically added elements is turned off."),
        H.disconnect())
    }
    function pe(e, t) {
        if (!t.src)
            return !1;
        try {
            const n = e === new URL(t.src).hostname;
            return n && c.debug("Iframe " + t.src + " can be accessed"),
            n
        } catch (e) {
            return c.debug("error: ", e),
            !1
        }
    }
    function ge() {
        if (Oe(!0),
        Ee(!0),
        function() {
            if (s.urlRegex)
                try {
                    return new RegExp(s.urlRegex).test(l())
                } catch (e) {
                    c.error("Regex is invalid: ", e)
                }
            return !0
        }(s.urlRegex)) {
            if (s.detectionSubject.includes("customerIdentifier")) {
                if (!s.customerIDRegex)
                    return void c.error("customerIDRegex is missing!");
                if (!I(s.customerIDRegex))
                    return void c.error("customerIDRegex is invalid!");
                if (!s.accountID)
                    return void c.error("accountID is missing!")
            }
            "url" === s.detectionType ? (c.debug("Url-based detection started"),
            se()) : "scrape" === s.detectionType ? (Y(),
            s.detectDynamicNodes && ce()) : "scrapeAndUrl" === s.detectionType && (c.debug("Started urlAndScrape detection!"),
            se() || Y(),
            s.detectDynamicNodes && ce())
        } else
            c.debug("Page url is not configured to trigger detection");
        !async function(e) {
            const t = new CustomEvent(e);
            window.dispatchEvent(t)
        }("detectionModuleReady")
    }
    var he = n(53);
    const me = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB"]
      , be = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    function ve(e) {
        if (!e)
            return;
        const t = function(e) {
            try {
                return new he.TCStringV2(e)
            } catch (e) {
                console.error("Failed to decode consent string: " + e)
            }
        }(e);
        return void 0 !== t ? function(e) {
            if (!e.core || -1 === e.core.vendorsConsent.indexOf(97))
                return !1;
            for (let t = 0; t < be.length; t++)
                if (-1 === e.core.purposesConsent.indexOf(be[t]))
                    return !1;
            return !0
        }(t) : void 0
    }
    function ye(e) {
        "US" === e ? (s.gdprConsentString = void 0,
        c.debug("User is in the US"),
        window.__uspapi ? (c.debug("CCPA library is present"),
        __uspapi("getUSPData", 1, (e,t)=>{
            if (null === e.uspString)
                return c.debug("User did not interact with consent manager."),
                ge();
            t ? function(e, t, n, r) {
                if (4 !== e.length)
                    return r("CCPA consent string is not 4 characters long!"),
                    !1;
                const o = e.split("")[2];
                return "Y" === o ? (n("User didn't give consent. Library will shut down."),
                t.ccpaConsentString = void 0,
                !1) : ("N" === o ? (n("User gave consent"),
                t.ccpaConsentString = e) : "-" === o && (n("CCPA doesnt apply to this user"),
                t.ccpaConsentString = void 0),
                !0)
            }(e.uspString, s, c.debug, c.error) && ge() : c.debug("User didn't give consent. Library will shut down.")
        }
        )) : ge()) : !function(e) {
            return me.includes(e)
        }(e) ? (c.info("Location of the user is NOT in country that has GDPR or CCPA regulation!"),
        s.ccpaConsentString = void 0,
        s.gdprConsentString = void 0,
        ge()) : (s.ccpaConsentString = void 0,
        c.info("Location of the user is in country that has GDPR regulation!"),
        window.__tcfapi ? __tcfapi("getTCData", null, (e,t)=>{
            if (t) {
                const t = ve(e.tcString);
                void 0 === t ? (c.debug("ATS is loaded before user interacted with CMP. Library will shutdown!"),
                Oe(!1)) : !1 === t ? (c.debug("Consent was rejected. Library will shutdown!"),
                Oe(!1)) : !0 === t && (c.debug("Consent has been given, library will start!"),
                s.gdprConsentString = e.tcString,
                Oe(!0),
                ge())
            } else
                c.debug("Failed to get consent data. Library will shutdown!"),
                Oe(!1)
        }
        ) : (c.debug("CMP is not present. Library will shutdown."),
        Oe(!1)))
    }
    let we, xe = !1, Se = !1;
    async function Te(e) {
        if (s.update(e),
        s.gdprConsentString = void 0,
        s.ccpaConsentString = void 0,
        s.testMode && (c.debug("Test mode enabled."),
        s.logging = "debug"),
        function() {
            let e;
            try {
                e = new URL(window.location.href).searchParams.get("ats_debug")
            } catch (e) {
                c.debug("Creating URL object failed: " + e)
            }
            "true" === e ? (s.logging = "debug",
            c.debug("Debug mode enabled.")) : "false" === e && (s.logging = void 0,
            console.log("Debug mode disabled."))
        }(),
        window.navigator.globalPrivacyControl)
            return void c.debug("GPC is enabled. Detection module will shutdown.");
        if (function() {
            const e = window.doNotTrack || window.navigator.doNotTrack || window.navigator.msDoNotTrack;
            return !!e && ("1" === e.charAt(0) || "yes" === e)
        }())
            return void c.debug("Do Not Track is enabled. Detection module will shutdown.");
        if (window.__tcfapi && __tcfapi("addEventListener", 2, Ae),
        !d())
            return void c.debug("Browser blocked by configuration.");
        ye(await C())
    }
    function Ce() {
        xe && !1 !== we && (c.debug("Event-driven detection started!"),
        Q())
    }
    const Ae = (e,t)=>{
        if (t && "useractioncomplete" === e.eventStatus) {
            c.debug("User changed consent data!");
            const t = ve(e.tcString);
            void 0 === t ? (c.debug("ATS is loaded before user interacted with CMP. Library will shutdown!"),
            we = !1) : !1 === t ? (c.debug("Consent was rejected. Library will shutdown!"),
            we = !1) : !0 === t && (c.debug("Consent has been given, library will start!"),
            we = !0,
            s.gdprConsentString = e.tcString,
            Se || setTimeout(()=>{
                ge()
            }
            , 200))
        }
    }
      , Oe = e=>{
        we = e
    }
      , Ee = e=>{
        xe = e
    }
      , Ie = e=>{
        Se = e
    }
      , Pe = n(111);
    function _e(e) {
        Te(e)
    }
    function je() {
        Ce()
    }
    function ke(e) {
        const t = {
            DETECTION_MODULE_VERSION: Pe.version,
            DETECTION_MODULE_CONFIG: JSON.parse(JSON.stringify(s))
        };
        if (!e)
            return t;
        e(t)
    }
}
]);
setTimeout(function() {
    window.atsdetectionmodule.start({
        "logging": "debug",
        "detectionType": "scrape",
        "urlParameter": [],
        "urlHashType": "email",
        "cssSelectors": ["input[type=email]", "input[type=text]"],
        "detectionSubject": ["email"],
        "accountID": "-1",
        "detectionEventType": "onsubmit",
        "triggerElements": ["#form"],
        "pubOptout": false
    });
}, 350);
window.atsenvelopemodule = function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    return n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                n.d(r, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 112)
}([function(e, t, n) {
    (function(t) {
        var n = function(e) {
            return e && e.Math == Math && e
        };
        e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || function() {
            return this
        }() || Function("return this")()
    }
    ).call(this, n(23))
}
, function(e, t, n) {
    var r = n(26)
      , o = r.all;
    e.exports = r.IS_HTMLDDA ? function(e) {
        return "function" == typeof e || e === o
    }
    : function(e) {
        return "function" == typeof e
    }
}
, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}
, function(e, t, n) {
    var r = n(7)
      , o = Function.prototype
      , i = o.call
      , a = r && o.bind.bind(i, i);
    e.exports = r ? a : function(e) {
        return function() {
            return i.apply(e, arguments)
        }
    }
}
, function(e, t, n) {
    var r = n(3)
      , o = n(13)
      , i = r({}.hasOwnProperty);
    e.exports = Object.hasOwn || function(e, t) {
        return i(o(e), t)
    }
}
, function(e, t, n) {
    var r = n(2);
    e.exports = !r((function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    }
    ))
}
, function(e, t, n) {
    var r = n(1)
      , o = n(26)
      , i = o.all;
    e.exports = o.IS_HTMLDDA ? function(e) {
        return "object" == typeof e ? null !== e : r(e) || e === i
    }
    : function(e) {
        return "object" == typeof e ? null !== e : r(e)
    }
}
, function(e, t, n) {
    var r = n(2);
    e.exports = !r((function() {
        var e = function() {}
        .bind();
        return "function" != typeof e || e.hasOwnProperty("prototype")
    }
    ))
}
, function(e, t, n) {
    var r = n(5)
      , o = n(30)
      , i = n(58)
      , a = n(9)
      , s = n(32)
      , c = TypeError
      , u = Object.defineProperty
      , f = Object.getOwnPropertyDescriptor;
    t.f = r ? i ? function(e, t, n) {
        if (a(e),
        t = s(t),
        a(n),
        "function" == typeof e && "prototype" === t && "value"in n && "writable"in n && !n.writable) {
            var r = f(e, t);
            r && r.writable && (e[t] = n.value,
            n = {
                configurable: "configurable"in n ? n.configurable : r.configurable,
                enumerable: "enumerable"in n ? n.enumerable : r.enumerable,
                writable: !1
            })
        }
        return u(e, t, n)
    }
    : u : function(e, t, n) {
        if (a(e),
        t = s(t),
        a(n),
        o)
            try {
                return u(e, t, n)
            } catch (e) {}
        if ("get"in n || "set"in n)
            throw c("Accessors not supported");
        return "value"in n && (e[t] = n.value),
        e
    }
}
, function(e, t, n) {
    var r = n(6)
      , o = String
      , i = TypeError;
    e.exports = function(e) {
        if (r(e))
            return e;
        throw i(o(e) + " is not an object")
    }
}
, function(e, t, n) {
    var r = n(7)
      , o = Function.prototype.call;
    e.exports = r ? o.bind(o) : function() {
        return o.apply(o, arguments)
    }
}
, function(e, t, n) {
    var r = n(0)
      , o = n(38)
      , i = n(4)
      , a = n(20)
      , s = n(36)
      , c = n(35)
      , u = r.Symbol
      , f = o("wks")
      , d = c ? u.for || u : u && u.withoutSetter || a;
    e.exports = function(e) {
        return i(f, e) || (f[e] = s && i(u, e) ? u[e] : d("Symbol." + e)),
        f[e]
    }
}
, function(e, t, n) {
    var r = n(3)
      , o = r({}.toString)
      , i = r("".slice);
    e.exports = function(e) {
        return i(o(e), 8, -1)
    }
}
, function(e, t, n) {
    var r = n(27)
      , o = Object;
    e.exports = function(e) {
        return o(r(e))
    }
}
, function(e, t, n) {
    var r = n(0)
      , o = n(15)
      , i = r["__core-js_shared__"] || o("__core-js_shared__", {});
    e.exports = i
}
, function(e, t, n) {
    var r = n(0)
      , o = Object.defineProperty;
    e.exports = function(e, t) {
        try {
            o(r, e, {
                value: t,
                configurable: !0,
                writable: !0
            })
        } catch (n) {
            r[e] = t
        }
        return t
    }
}
, function(e, t, n) {
    var r = n(5)
      , o = n(8)
      , i = n(39);
    e.exports = r ? function(e, t, n) {
        return o.f(e, t, i(1, n))
    }
    : function(e, t, n) {
        return e[t] = n,
        e
    }
}
, function(e, t, n) {
    var r = n(0)
      , o = n(1)
      , i = function(e) {
        return o(e) ? e : void 0
    };
    e.exports = function(e, t) {
        return arguments.length < 2 ? i(r[e]) : r[e] && r[e][t]
    }
}
, function(e, t) {
    e.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
}
, function(e, t, n) {
    var r = n(1)
      , o = n(37)
      , i = TypeError;
    e.exports = function(e) {
        if (r(e))
            return e;
        throw i(o(e) + " is not a function")
    }
}
, function(e, t, n) {
    var r = n(3)
      , o = 0
      , i = Math.random()
      , a = r(1..toString);
    e.exports = function(e) {
        return "Symbol(" + (void 0 === e ? "" : e) + ")_" + a(++o + i, 36)
    }
}
, function(e, t, n) {
    var r = n(76);
    e.exports = function(e) {
        var t = +e;
        return t != t || 0 === t ? 0 : r(t)
    }
}
, function(e, t, n) {
    var r = n(82)
      , o = n(27);
    e.exports = function(e) {
        return r(o(e))
    }
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t, n) {
    var r = n(25)
      , o = n(8);
    e.exports = function(e, t, n) {
        return n.get && r(n.get, t, {
            getter: !0
        }),
        n.set && r(n.set, t, {
            setter: !0
        }),
        o.f(e, t, n)
    }
}
, function(e, t, n) {
    var r = n(3)
      , o = n(2)
      , i = n(1)
      , a = n(4)
      , s = n(5)
      , c = n(55).CONFIGURABLE
      , u = n(56)
      , f = n(29)
      , d = f.enforce
      , l = f.get
      , p = String
      , b = Object.defineProperty
      , h = r("".slice)
      , y = r("".replace)
      , g = r([].join)
      , m = s && !o((function() {
        return 8 !== b((function() {}
        ), "length", {
            value: 8
        }).length
    }
    ))
      , v = String(String).split("String")
      , w = e.exports = function(e, t, n) {
        "Symbol(" === h(p(t), 0, 7) && (t = "[" + y(p(t), /^Symbol\(([^)]*)\)/, "$1") + "]"),
        n && n.getter && (t = "get " + t),
        n && n.setter && (t = "set " + t),
        (!a(e, "name") || c && e.name !== t) && (s ? b(e, "name", {
            value: t,
            configurable: !0
        }) : e.name = t),
        m && n && a(n, "arity") && e.length !== n.arity && b(e, "length", {
            value: n.arity
        });
        try {
            n && a(n, "constructor") && n.constructor ? s && b(e, "prototype", {
                writable: !1
            }) : e.prototype && (e.prototype = void 0)
        } catch (e) {}
        var r = d(e);
        return a(r, "source") || (r.source = g(v, "string" == typeof t ? t : "")),
        e
    }
    ;
    Function.prototype.toString = w((function() {
        return i(this) && l(this).source || u(this)
    }
    ), "toString")
}
, function(e, t) {
    var n = "object" == typeof document && document.all
      , r = void 0 === n && void 0 !== n;
    e.exports = {
        all: n,
        IS_HTMLDDA: r
    }
}
, function(e, t, n) {
    var r = n(28)
      , o = TypeError;
    e.exports = function(e) {
        if (r(e))
            throw o("Can't call method on " + e);
        return e
    }
}
, function(e, t) {
    e.exports = function(e) {
        return null == e
    }
}
, function(e, t, n) {
    var r, o, i, a = n(57), s = n(0), c = n(6), u = n(16), f = n(4), d = n(14), l = n(40), p = n(41), b = s.TypeError, h = s.WeakMap;
    if (a || d.state) {
        var y = d.state || (d.state = new h);
        y.get = y.get,
        y.has = y.has,
        y.set = y.set,
        r = function(e, t) {
            if (y.has(e))
                throw b("Object already initialized");
            return t.facade = e,
            y.set(e, t),
            t
        }
        ,
        o = function(e) {
            return y.get(e) || {}
        }
        ,
        i = function(e) {
            return y.has(e)
        }
    } else {
        var g = l("state");
        p[g] = !0,
        r = function(e, t) {
            if (f(e, g))
                throw b("Object already initialized");
            return t.facade = e,
            u(e, g, t),
            t
        }
        ,
        o = function(e) {
            return f(e, g) ? e[g] : {}
        }
        ,
        i = function(e) {
            return f(e, g)
        }
    }
    e.exports = {
        set: r,
        get: o,
        has: i,
        enforce: function(e) {
            return i(e) ? o(e) : r(e, {})
        },
        getterFor: function(e) {
            return function(t) {
                var n;
                if (!c(t) || (n = o(t)).type !== e)
                    throw b("Incompatible receiver, " + e + " required");
                return n
            }
        }
    }
}
, function(e, t, n) {
    var r = n(5)
      , o = n(2)
      , i = n(31);
    e.exports = !r && !o((function() {
        return 7 != Object.defineProperty(i("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }
    ))
}
, function(e, t, n) {
    var r = n(0)
      , o = n(6)
      , i = r.document
      , a = o(i) && o(i.createElement);
    e.exports = function(e) {
        return a ? i.createElement(e) : {}
    }
}
, function(e, t, n) {
    var r = n(59)
      , o = n(33);
    e.exports = function(e) {
        var t = r(e, "string");
        return o(t) ? t : t + ""
    }
}
, function(e, t, n) {
    var r = n(17)
      , o = n(1)
      , i = n(34)
      , a = n(35)
      , s = Object;
    e.exports = a ? function(e) {
        return "symbol" == typeof e
    }
    : function(e) {
        var t = r("Symbol");
        return o(t) && i(t.prototype, s(e))
    }
}
, function(e, t, n) {
    var r = n(3);
    e.exports = r({}.isPrototypeOf)
}
, function(e, t, n) {
    var r = n(36);
    e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
}
, function(e, t, n) {
    var r = n(60)
      , o = n(2);
    e.exports = !!Object.getOwnPropertySymbols && !o((function() {
        var e = Symbol();
        return !String(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && r && r < 41
    }
    ))
}
, function(e, t) {
    var n = String;
    e.exports = function(e) {
        try {
            return n(e)
        } catch (e) {
            return "Object"
        }
    }
}
, function(e, t, n) {
    var r = n(63)
      , o = n(14);
    (e.exports = function(e, t) {
        return o[e] || (o[e] = void 0 !== t ? t : {})
    }
    )("versions", []).push({
        version: "3.30.1",
        mode: r ? "pure" : "global",
        copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE",
        source: "https://github.com/zloirock/core-js"
    })
}
, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}
, function(e, t, n) {
    var r = n(38)
      , o = n(20)
      , i = r("keys");
    e.exports = function(e) {
        return i[e] || (i[e] = o(e))
    }
}
, function(e, t) {
    e.exports = {}
}
, function(e, t, n) {
    var r = n(1)
      , o = n(8)
      , i = n(25)
      , a = n(15);
    e.exports = function(e, t, n, s) {
        s || (s = {});
        var c = s.enumerable
          , u = void 0 !== s.name ? s.name : t;
        if (r(n) && i(n, u, s),
        s.global)
            c ? e[t] = n : a(t, n);
        else {
            try {
                s.unsafe ? e[t] && (c = !0) : delete e[t]
            } catch (e) {}
            c ? e[t] = n : o.f(e, t, {
                value: n,
                enumerable: !1,
                configurable: !s.nonConfigurable,
                writable: !s.nonWritable
            })
        }
        return e
    }
}
, function(e, t, n) {
    var r = n(75);
    e.exports = function(e) {
        return r(e.length)
    }
}
, function(e, t, n) {
    var r = n(0)
      , o = n(45).f
      , i = n(16)
      , a = n(42)
      , s = n(15)
      , c = n(83)
      , u = n(91);
    e.exports = function(e, t) {
        var n, f, d, l, p, b = e.target, h = e.global, y = e.stat;
        if (n = h ? r : y ? r[b] || s(b, {}) : (r[b] || {}).prototype)
            for (f in t) {
                if (l = t[f],
                d = e.dontCallGetSet ? (p = o(n, f)) && p.value : n[f],
                !u(h ? f : b + (y ? "." : "#") + f, e.forced) && void 0 !== d) {
                    if (typeof l == typeof d)
                        continue;
                    c(l, d)
                }
                (e.sham || d && d.sham) && i(l, "sham", !0),
                a(n, f, l, e)
            }
    }
}
, function(e, t, n) {
    var r = n(5)
      , o = n(10)
      , i = n(81)
      , a = n(39)
      , s = n(22)
      , c = n(32)
      , u = n(4)
      , f = n(30)
      , d = Object.getOwnPropertyDescriptor;
    t.f = r ? d : function(e, t) {
        if (e = s(e),
        t = c(t),
        f)
            try {
                return d(e, t)
            } catch (e) {}
        if (u(e, t))
            return a(!o(i.f, e, t), e[t])
    }
}
, function(e, t, n) {
    var r, o, i, a, s = n(0), c = n(47), u = n(92), f = n(1), d = n(4), l = n(2), p = n(94), b = n(48), h = n(31), y = n(49), g = n(95), m = n(96), v = s.setImmediate, w = s.clearImmediate, A = s.process, S = s.Dispatch, E = s.Function, C = s.MessageChannel, x = s.String, O = 0, T = {};
    l((function() {
        r = s.location
    }
    ));
    var _ = function(e) {
        if (d(T, e)) {
            var t = T[e];
            delete T[e],
            t()
        }
    }
      , P = function(e) {
        return function() {
            _(e)
        }
    }
      , I = function(e) {
        _(e.data)
    }
      , R = function(e) {
        s.postMessage(x(e), r.protocol + "//" + r.host)
    };
    v && w || (v = function(e) {
        y(arguments.length, 1);
        var t = f(e) ? e : E(e)
          , n = b(arguments, 1);
        return T[++O] = function() {
            c(t, void 0, n)
        }
        ,
        o(O),
        O
    }
    ,
    w = function(e) {
        delete T[e]
    }
    ,
    m ? o = function(e) {
        A.nextTick(P(e))
    }
    : S && S.now ? o = function(e) {
        S.now(P(e))
    }
    : C && !g ? (a = (i = new C).port2,
    i.port1.onmessage = I,
    o = u(a.postMessage, a)) : s.addEventListener && f(s.postMessage) && !s.importScripts && r && "file:" !== r.protocol && !l(R) ? (o = R,
    s.addEventListener("message", I, !1)) : o = "onreadystatechange"in h("script") ? function(e) {
        p.appendChild(h("script")).onreadystatechange = function() {
            p.removeChild(this),
            _(e)
        }
    }
    : function(e) {
        setTimeout(P(e), 0)
    }
    ),
    e.exports = {
        set: v,
        clear: w
    }
}
, function(e, t, n) {
    var r = n(7)
      , o = Function.prototype
      , i = o.apply
      , a = o.call;
    e.exports = "object" == typeof Reflect && Reflect.apply || (r ? a.bind(i) : function() {
        return a.apply(i, arguments)
    }
    )
}
, function(e, t, n) {
    var r = n(3);
    e.exports = r([].slice)
}
, function(e, t) {
    var n = TypeError;
    e.exports = function(e, t) {
        if (e < t)
            throw n("Not enough arguments");
        return e
    }
}
, function(e, t) {
    function n(t) {
        return e.exports = n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports,
        n(t)
    }
    e.exports = n,
    e.exports.__esModule = !0,
    e.exports.default = e.exports
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0", n = "", r = 0; r < e; r += 1)
            n += t;
        return n
    }
    e.exports = {
        padLeft: function(e, t) {
            return r(Math.max(0, t)) + e
        },
        padRight: function(e, t) {
            return e + r(Math.max(0, t))
        },
        getMaxListElement: function(e) {
            var t = 0;
            return (e || []).forEach((function(e) {
                e > t && (t = e)
            }
            )),
            t
        }
    }
}
, function(e, t, n) {
    var r = n(102);
    e.exports = function(e, t, n) {
        return (t = r(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    ,
    e.exports.__esModule = !0,
    e.exports.default = e.exports
}
, function(e, t, n) {
    "use strict";
    var r = n(104).TCStringV2;
    e.exports = {
        TCStringV2: r
    }
}
, function(e, t, n) {
    var r = n(0)
      , o = n(5)
      , i = n(24)
      , a = n(64)
      , s = n(2)
      , c = r.RegExp
      , u = c.prototype;
    o && s((function() {
        var e = !0;
        try {
            c(".", "d")
        } catch (t) {
            e = !1
        }
        var t = {}
          , n = ""
          , r = e ? "dgimsy" : "gimsy"
          , o = function(e, r) {
            Object.defineProperty(t, e, {
                get: function() {
                    return n += r,
                    !0
                }
            })
        }
          , i = {
            dotAll: "s",
            global: "g",
            ignoreCase: "i",
            multiline: "m",
            sticky: "y"
        };
        for (var a in e && (i.hasIndices = "d"),
        i)
            o(a, i[a]);
        return Object.getOwnPropertyDescriptor(u, "flags").get.call(t) !== r || n !== r
    }
    )) && i(u, "flags", {
        configurable: !0,
        get: a
    })
}
, function(e, t, n) {
    var r = n(5)
      , o = n(4)
      , i = Function.prototype
      , a = r && Object.getOwnPropertyDescriptor
      , s = o(i, "name")
      , c = s && "something" === function() {}
    .name
      , u = s && (!r || r && a(i, "name").configurable);
    e.exports = {
        EXISTS: s,
        PROPER: c,
        CONFIGURABLE: u
    }
}
, function(e, t, n) {
    var r = n(3)
      , o = n(1)
      , i = n(14)
      , a = r(Function.toString);
    o(i.inspectSource) || (i.inspectSource = function(e) {
        return a(e)
    }
    ),
    e.exports = i.inspectSource
}
, function(e, t, n) {
    var r = n(0)
      , o = n(1)
      , i = r.WeakMap;
    e.exports = o(i) && /native code/.test(String(i))
}
, function(e, t, n) {
    var r = n(5)
      , o = n(2);
    e.exports = r && o((function() {
        return 42 != Object.defineProperty((function() {}
        ), "prototype", {
            value: 42,
            writable: !1
        }).prototype
    }
    ))
}
, function(e, t, n) {
    var r = n(10)
      , o = n(6)
      , i = n(33)
      , a = n(61)
      , s = n(62)
      , c = n(11)
      , u = TypeError
      , f = c("toPrimitive");
    e.exports = function(e, t) {
        if (!o(e) || i(e))
            return e;
        var n, c = a(e, f);
        if (c) {
            if (void 0 === t && (t = "default"),
            n = r(c, e, t),
            !o(n) || i(n))
                return n;
            throw u("Can't convert object to primitive value")
        }
        return void 0 === t && (t = "number"),
        s(e, t)
    }
}
, function(e, t, n) {
    var r, o, i = n(0), a = n(18), s = i.process, c = i.Deno, u = s && s.versions || c && c.version, f = u && u.v8;
    f && (o = (r = f.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
    !o && a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (o = +r[1]),
    e.exports = o
}
, function(e, t, n) {
    var r = n(19)
      , o = n(28);
    e.exports = function(e, t) {
        var n = e[t];
        return o(n) ? void 0 : r(n)
    }
}
, function(e, t, n) {
    var r = n(10)
      , o = n(1)
      , i = n(6)
      , a = TypeError;
    e.exports = function(e, t) {
        var n, s;
        if ("string" === t && o(n = e.toString) && !i(s = r(n, e)))
            return s;
        if (o(n = e.valueOf) && !i(s = r(n, e)))
            return s;
        if ("string" !== t && o(n = e.toString) && !i(s = r(n, e)))
            return s;
        throw a("Can't convert object to primitive value")
    }
}
, function(e, t) {
    e.exports = !1
}
, function(e, t, n) {
    "use strict";
    var r = n(9);
    e.exports = function() {
        var e = r(this)
          , t = "";
        return e.hasIndices && (t += "d"),
        e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.dotAll && (t += "s"),
        e.unicode && (t += "u"),
        e.unicodeSets && (t += "v"),
        e.sticky && (t += "y"),
        t
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(10)
      , i = n(66)
      , a = n(43)
      , s = n(77)
      , c = n(13)
      , u = n(2)
      , f = r.RangeError
      , d = r.Int8Array
      , l = d && d.prototype
      , p = l && l.set
      , b = i.aTypedArray
      , h = i.exportTypedArrayMethod
      , y = !u((function() {
        var e = new Uint8ClampedArray(2);
        return o(p, e, {
            length: 1,
            0: 3
        }, 1),
        3 !== e[1]
    }
    ))
      , g = y && i.NATIVE_ARRAY_BUFFER_VIEWS && u((function() {
        var e = new d(2);
        return e.set(1),
        e.set("2", 1),
        0 !== e[0] || 2 !== e[1]
    }
    ));
    h("set", (function(e) {
        b(this);
        var t = s(arguments.length > 1 ? arguments[1] : void 0, 1)
          , n = c(e);
        if (y)
            return o(p, this, n, t);
        var r = this.length
          , i = a(n)
          , u = 0;
        if (i + t > r)
            throw f("Wrong length");
        for (; u < i; )
            this[t + u] = n[u++]
    }
    ), !y || g)
}
, function(e, t, n) {
    "use strict";
    var r, o, i, a = n(67), s = n(5), c = n(0), u = n(1), f = n(6), d = n(4), l = n(68), p = n(37), b = n(16), h = n(42), y = n(24), g = n(34), m = n(70), v = n(72), w = n(11), A = n(20), S = n(29), E = S.enforce, C = S.get, x = c.Int8Array, O = x && x.prototype, T = c.Uint8ClampedArray, _ = T && T.prototype, P = x && m(x), I = O && m(O), R = Object.prototype, D = c.TypeError, j = w("toStringTag"), B = A("TYPED_ARRAY_TAG"), k = a && !!v && "Opera" !== l(c.opera), L = !1, U = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8
    }, M = {
        BigInt64Array: 8,
        BigUint64Array: 8
    }, V = function(e) {
        var t = m(e);
        if (f(t)) {
            var n = C(t);
            return n && d(n, "TypedArrayConstructor") ? n.TypedArrayConstructor : V(t)
        }
    }, H = function(e) {
        if (!f(e))
            return !1;
        var t = l(e);
        return d(U, t) || d(M, t)
    };
    for (r in U)
        (i = (o = c[r]) && o.prototype) ? E(i).TypedArrayConstructor = o : k = !1;
    for (r in M)
        (i = (o = c[r]) && o.prototype) && (E(i).TypedArrayConstructor = o);
    if ((!k || !u(P) || P === Function.prototype) && (P = function() {
        throw D("Incorrect invocation")
    }
    ,
    k))
        for (r in U)
            c[r] && v(c[r], P);
    if ((!k || !I || I === R) && (I = P.prototype,
    k))
        for (r in U)
            c[r] && v(c[r].prototype, I);
    if (k && m(_) !== I && v(_, I),
    s && !d(I, j))
        for (r in L = !0,
        y(I, j, {
            configurable: !0,
            get: function() {
                return f(this) ? this[B] : void 0
            }
        }),
        U)
            c[r] && b(c[r], B, r);
    e.exports = {
        NATIVE_ARRAY_BUFFER_VIEWS: k,
        TYPED_ARRAY_TAG: L && B,
        aTypedArray: function(e) {
            if (H(e))
                return e;
            throw D("Target is not a typed array")
        },
        aTypedArrayConstructor: function(e) {
            if (u(e) && (!v || g(P, e)))
                return e;
            throw D(p(e) + " is not a typed array constructor")
        },
        exportTypedArrayMethod: function(e, t, n, r) {
            if (s) {
                if (n)
                    for (var o in U) {
                        var i = c[o];
                        if (i && d(i.prototype, e))
                            try {
                                delete i.prototype[e]
                            } catch (n) {
                                try {
                                    i.prototype[e] = t
                                } catch (e) {}
                            }
                    }
                I[e] && !n || h(I, e, n ? t : k && O[e] || t, r)
            }
        },
        exportTypedArrayStaticMethod: function(e, t, n) {
            var r, o;
            if (s) {
                if (v) {
                    if (n)
                        for (r in U)
                            if ((o = c[r]) && d(o, e))
                                try {
                                    delete o[e]
                                } catch (e) {}
                    if (P[e] && !n)
                        return;
                    try {
                        return h(P, e, n ? t : k && P[e] || t)
                    } catch (e) {}
                }
                for (r in U)
                    !(o = c[r]) || o[e] && !n || h(o, e, t)
            }
        },
        getTypedArrayConstructor: V,
        isView: function(e) {
            if (!f(e))
                return !1;
            var t = l(e);
            return "DataView" === t || d(U, t) || d(M, t)
        },
        isTypedArray: H,
        TypedArray: P,
        TypedArrayPrototype: I
    }
}
, function(e, t) {
    e.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
}
, function(e, t, n) {
    var r = n(69)
      , o = n(1)
      , i = n(12)
      , a = n(11)("toStringTag")
      , s = Object
      , c = "Arguments" == i(function() {
        return arguments
    }());
    e.exports = r ? i : function(e) {
        var t, n, r;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = s(e), a)) ? n : c ? i(t) : "Object" == (r = i(t)) && o(t.callee) ? "Arguments" : r
    }
}
, function(e, t, n) {
    var r = {};
    r[n(11)("toStringTag")] = "z",
    e.exports = "[object z]" === String(r)
}
, function(e, t, n) {
    var r = n(4)
      , o = n(1)
      , i = n(13)
      , a = n(40)
      , s = n(71)
      , c = a("IE_PROTO")
      , u = Object
      , f = u.prototype;
    e.exports = s ? u.getPrototypeOf : function(e) {
        var t = i(e);
        if (r(t, c))
            return t[c];
        var n = t.constructor;
        return o(n) && t instanceof n ? n.prototype : t instanceof u ? f : null
    }
}
, function(e, t, n) {
    var r = n(2);
    e.exports = !r((function() {
        function e() {}
        return e.prototype.constructor = null,
        Object.getPrototypeOf(new e) !== e.prototype
    }
    ))
}
, function(e, t, n) {
    var r = n(73)
      , o = n(9)
      , i = n(74);
    e.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
        var e, t = !1, n = {};
        try {
            (e = r(Object.prototype, "__proto__", "set"))(n, []),
            t = n instanceof Array
        } catch (e) {}
        return function(n, r) {
            return o(n),
            i(r),
            t ? e(n, r) : n.__proto__ = r,
            n
        }
    }() : void 0)
}
, function(e, t, n) {
    var r = n(3)
      , o = n(19);
    e.exports = function(e, t, n) {
        try {
            return r(o(Object.getOwnPropertyDescriptor(e, t)[n]))
        } catch (e) {}
    }
}
, function(e, t, n) {
    var r = n(1)
      , o = String
      , i = TypeError;
    e.exports = function(e) {
        if ("object" == typeof e || r(e))
            return e;
        throw i("Can't set " + o(e) + " as a prototype")
    }
}
, function(e, t, n) {
    var r = n(21)
      , o = Math.min;
    e.exports = function(e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0
    }
}
, function(e, t) {
    var n = Math.ceil
      , r = Math.floor;
    e.exports = Math.trunc || function(e) {
        var t = +e;
        return (t > 0 ? r : n)(t)
    }
}
, function(e, t, n) {
    var r = n(78)
      , o = RangeError;
    e.exports = function(e, t) {
        var n = r(e);
        if (n % t)
            throw o("Wrong offset");
        return n
    }
}
, function(e, t, n) {
    var r = n(21)
      , o = RangeError;
    e.exports = function(e) {
        var t = r(e);
        if (t < 0)
            throw o("The argument can't be less than 0");
        return t
    }
}
, function(e, t, n) {
    n(80),
    n(98)
}
, function(e, t, n) {
    var r = n(44)
      , o = n(0)
      , i = n(46).clear;
    r({
        global: !0,
        bind: !0,
        enumerable: !0,
        forced: o.clearImmediate !== i
    }, {
        clearImmediate: i
    })
}
, function(e, t, n) {
    "use strict";
    var r = {}.propertyIsEnumerable
      , o = Object.getOwnPropertyDescriptor
      , i = o && !r.call({
        1: 2
    }, 1);
    t.f = i ? function(e) {
        var t = o(this, e);
        return !!t && t.enumerable
    }
    : r
}
, function(e, t, n) {
    var r = n(3)
      , o = n(2)
      , i = n(12)
      , a = Object
      , s = r("".split);
    e.exports = o((function() {
        return !a("z").propertyIsEnumerable(0)
    }
    )) ? function(e) {
        return "String" == i(e) ? s(e, "") : a(e)
    }
    : a
}
, function(e, t, n) {
    var r = n(4)
      , o = n(84)
      , i = n(45)
      , a = n(8);
    e.exports = function(e, t, n) {
        for (var s = o(t), c = a.f, u = i.f, f = 0; f < s.length; f++) {
            var d = s[f];
            r(e, d) || n && r(n, d) || c(e, d, u(t, d))
        }
    }
}
, function(e, t, n) {
    var r = n(17)
      , o = n(3)
      , i = n(85)
      , a = n(90)
      , s = n(9)
      , c = o([].concat);
    e.exports = r("Reflect", "ownKeys") || function(e) {
        var t = i.f(s(e))
          , n = a.f;
        return n ? c(t, n(e)) : t
    }
}
, function(e, t, n) {
    var r = n(86)
      , o = n(89).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) {
        return r(e, o)
    }
}
, function(e, t, n) {
    var r = n(3)
      , o = n(4)
      , i = n(22)
      , a = n(87).indexOf
      , s = n(41)
      , c = r([].push);
    e.exports = function(e, t) {
        var n, r = i(e), u = 0, f = [];
        for (n in r)
            !o(s, n) && o(r, n) && c(f, n);
        for (; t.length > u; )
            o(r, n = t[u++]) && (~a(f, n) || c(f, n));
        return f
    }
}
, function(e, t, n) {
    var r = n(22)
      , o = n(88)
      , i = n(43)
      , a = function(e) {
        return function(t, n, a) {
            var s, c = r(t), u = i(c), f = o(a, u);
            if (e && n != n) {
                for (; u > f; )
                    if ((s = c[f++]) != s)
                        return !0
            } else
                for (; u > f; f++)
                    if ((e || f in c) && c[f] === n)
                        return e || f || 0;
            return !e && -1
        }
    };
    e.exports = {
        includes: a(!0),
        indexOf: a(!1)
    }
}
, function(e, t, n) {
    var r = n(21)
      , o = Math.max
      , i = Math.min;
    e.exports = function(e, t) {
        var n = r(e);
        return n < 0 ? o(n + t, 0) : i(n, t)
    }
}
, function(e, t) {
    e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}
, function(e, t) {
    t.f = Object.getOwnPropertySymbols
}
, function(e, t, n) {
    var r = n(2)
      , o = n(1)
      , i = /#|\.prototype\./
      , a = function(e, t) {
        var n = c[s(e)];
        return n == f || n != u && (o(t) ? r(t) : !!t)
    }
      , s = a.normalize = function(e) {
        return String(e).replace(i, ".").toLowerCase()
    }
      , c = a.data = {}
      , u = a.NATIVE = "N"
      , f = a.POLYFILL = "P";
    e.exports = a
}
, function(e, t, n) {
    var r = n(93)
      , o = n(19)
      , i = n(7)
      , a = r(r.bind);
    e.exports = function(e, t) {
        return o(e),
        void 0 === t ? e : i ? a(e, t) : function() {
            return e.apply(t, arguments)
        }
    }
}
, function(e, t, n) {
    var r = n(12)
      , o = n(3);
    e.exports = function(e) {
        if ("Function" === r(e))
            return o(e)
    }
}
, function(e, t, n) {
    var r = n(17);
    e.exports = r("document", "documentElement")
}
, function(e, t, n) {
    var r = n(18);
    e.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(r)
}
, function(e, t, n) {
    (function(t) {
        var r = n(12);
        e.exports = void 0 !== t && "process" == r(t)
    }
    ).call(this, n(97))
}
, function(e, t) {
    var n, r, o = e.exports = {};
    function i() {
        throw new Error("setTimeout has not been defined")
    }
    function a() {
        throw new Error("clearTimeout has not been defined")
    }
    function s(e) {
        if (n === setTimeout)
            return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout)
            return n = setTimeout,
            setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }
    !function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var c, u = [], f = !1, d = -1;
    function l() {
        f && c && (f = !1,
        c.length ? u = c.concat(u) : d = -1,
        u.length && p())
    }
    function p() {
        if (!f) {
            var e = s(l);
            f = !0;
            for (var t = u.length; t; ) {
                for (c = u,
                u = []; ++d < t; )
                    c && c[d].run();
                d = -1,
                t = u.length
            }
            c = null,
            f = !1,
            function(e) {
                if (r === clearTimeout)
                    return clearTimeout(e);
                if ((r === a || !r) && clearTimeout)
                    return r = clearTimeout,
                    clearTimeout(e);
                try {
                    r(e)
                } catch (t) {
                    try {
                        return r.call(null, e)
                    } catch (t) {
                        return r.call(this, e)
                    }
                }
            }(e)
        }
    }
    function b(e, t) {
        this.fun = e,
        this.array = t
    }
    function h() {}
    o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        u.push(new b(e,t)),
        1 !== u.length || f || s(p)
    }
    ,
    b.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    o.title = "browser",
    o.browser = !0,
    o.env = {},
    o.argv = [],
    o.version = "",
    o.versions = {},
    o.on = h,
    o.addListener = h,
    o.once = h,
    o.off = h,
    o.removeListener = h,
    o.removeAllListeners = h,
    o.emit = h,
    o.prependListener = h,
    o.prependOnceListener = h,
    o.listeners = function(e) {
        return []
    }
    ,
    o.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    o.cwd = function() {
        return "/"
    }
    ,
    o.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    o.umask = function() {
        return 0
    }
}
, function(e, t, n) {
    var r = n(44)
      , o = n(0)
      , i = n(46).set
      , a = n(99)
      , s = o.setImmediate ? a(i, !1) : i;
    r({
        global: !0,
        bind: !0,
        enumerable: !0,
        forced: o.setImmediate !== s
    }, {
        setImmediate: s
    })
}
, function(e, t, n) {
    "use strict";
    var r, o = n(0), i = n(47), a = n(1), s = n(100), c = n(18), u = n(48), f = n(49), d = o.Function, l = /MSIE .\./.test(c) || s && ((r = o.Bun.version.split(".")).length < 3 || 0 == r[0] && (r[1] < 3 || 3 == r[1] && 0 == r[2]));
    e.exports = function(e, t) {
        var n = t ? 2 : 1;
        return l ? function(r, o) {
            var s = f(arguments.length, 1) > n
              , c = a(r) ? r : d(r)
              , l = s ? u(arguments, n) : []
              , p = s ? function() {
                i(c, this, l)
            }
            : c;
            return t ? e(p, o) : e(p)
        }
        : e
    }
}
, function(e, t) {
    e.exports = "function" == typeof Bun && Bun && "string" == typeof Bun.version
}
, function(e, t, n) {
    var r, o;
    o = "undefined" != typeof self ? self : this,
    void 0 === (r = function() {
        return function(e) {
            "use strict";
            if ("function" != typeof Promise)
                throw "Promise support required";
            var t = e.crypto || e.msCrypto;
            if (t) {
                var n = t.subtle || t.webkitSubtle;
                if (n) {
                    var r = e.Crypto || t.constructor || Object
                      , o = e.SubtleCrypto || n.constructor || Object
                      , i = (e.CryptoKey || e.Key,
                    e.navigator.userAgent.indexOf("Edge/") > -1)
                      , a = !!e.msCrypto && !i
                      , s = !t.subtle && !!t.webkitSubtle;
                    if (a || s) {
                        var c = {
                            KoZIhvcNAQEB: "1.2.840.113549.1.1.1"
                        }
                          , u = {
                            "1.2.840.113549.1.1.1": "KoZIhvcNAQEB"
                        };
                        if (["generateKey", "importKey", "unwrapKey"].forEach((function(e) {
                            var r = n[e];
                            n[e] = function(o, i, c) {
                                var u, f, d, b, w = [].slice.call(arguments);
                                switch (e) {
                                case "generateKey":
                                    u = h(o),
                                    f = i,
                                    d = c;
                                    break;
                                case "importKey":
                                    u = h(c),
                                    f = w[3],
                                    d = w[4],
                                    "jwk" === o && ((i = g(i)).alg || (i.alg = y(u)),
                                    i.key_ops || (i.key_ops = "oct" !== i.kty ? "d"in i ? d.filter(x) : d.filter(C) : d.slice()),
                                    w[1] = m(i));
                                    break;
                                case "unwrapKey":
                                    u = w[4],
                                    f = w[5],
                                    d = w[6],
                                    w[2] = c._key
                                }
                                if ("generateKey" === e && "HMAC" === u.name && u.hash)
                                    return u.length = u.length || {
                                        "SHA-1": 512,
                                        "SHA-256": 512,
                                        "SHA-384": 1024,
                                        "SHA-512": 1024
                                    }[u.hash.name],
                                    n.importKey("raw", t.getRandomValues(new Uint8Array(u.length + 7 >> 3)), u, f, d);
                                if (s && "generateKey" === e && "RSASSA-PKCS1-v1_5" === u.name && (!u.modulusLength || u.modulusLength >= 2048))
                                    return (o = h(o)).name = "RSAES-PKCS1-v1_5",
                                    delete o.hash,
                                    n.generateKey(o, !0, ["encrypt", "decrypt"]).then((function(e) {
                                        return Promise.all([n.exportKey("jwk", e.publicKey), n.exportKey("jwk", e.privateKey)])
                                    }
                                    )).then((function(e) {
                                        return e[0].alg = e[1].alg = y(u),
                                        e[0].key_ops = d.filter(C),
                                        e[1].key_ops = d.filter(x),
                                        Promise.all([n.importKey("jwk", e[0], u, !0, e[0].key_ops), n.importKey("jwk", e[1], u, f, e[1].key_ops)])
                                    }
                                    )).then((function(e) {
                                        return {
                                            publicKey: e[0],
                                            privateKey: e[1]
                                        }
                                    }
                                    ));
                                if ((s || a && "SHA-1" === (u.hash || {}).name) && "importKey" === e && "jwk" === o && "HMAC" === u.name && "oct" === i.kty)
                                    return n.importKey("raw", p(l(i.k)), c, w[3], w[4]);
                                if (s && "importKey" === e && ("spki" === o || "pkcs8" === o))
                                    return n.importKey("jwk", v(i), c, w[3], w[4]);
                                if (a && "unwrapKey" === e)
                                    return n.decrypt(w[3], c, i).then((function(e) {
                                        return n.importKey(o, e, w[4], w[5], w[6])
                                    }
                                    ));
                                try {
                                    b = r.apply(n, w)
                                } catch (e) {
                                    return Promise.reject(e)
                                }
                                return a && (b = new Promise((function(e, t) {
                                    b.onabort = b.onerror = function(e) {
                                        t(e)
                                    }
                                    ,
                                    b.oncomplete = function(t) {
                                        e(t.target.result)
                                    }
                                }
                                ))),
                                b = b.then((function(e) {
                                    return "HMAC" === u.name && (u.length || (u.length = 8 * e.algorithm.length)),
                                    0 == u.name.search("RSA") && (u.modulusLength || (u.modulusLength = (e.publicKey || e).algorithm.modulusLength),
                                    u.publicExponent || (u.publicExponent = (e.publicKey || e).algorithm.publicExponent)),
                                    e = e.publicKey && e.privateKey ? {
                                        publicKey: new E(e.publicKey,u,f,d.filter(C)),
                                        privateKey: new E(e.privateKey,u,f,d.filter(x))
                                    } : new E(e,u,f,d)
                                }
                                ))
                            }
                        }
                        )),
                        ["exportKey", "wrapKey"].forEach((function(e) {
                            var t = n[e];
                            n[e] = function(r, o, i) {
                                var c, u = [].slice.call(arguments);
                                switch (e) {
                                case "exportKey":
                                    u[1] = o._key;
                                    break;
                                case "wrapKey":
                                    u[1] = o._key,
                                    u[2] = i._key
                                }
                                if ((s || a && "SHA-1" === (o.algorithm.hash || {}).name) && "exportKey" === e && "jwk" === r && "HMAC" === o.algorithm.name && (u[0] = "raw"),
                                !s || "exportKey" !== e || "spki" !== r && "pkcs8" !== r || (u[0] = "jwk"),
                                a && "wrapKey" === e)
                                    return n.exportKey(r, o).then((function(e) {
                                        return "jwk" === r && (e = p(unescape(encodeURIComponent(JSON.stringify(g(e)))))),
                                        n.encrypt(u[3], i, e)
                                    }
                                    ));
                                try {
                                    c = t.apply(n, u)
                                } catch (e) {
                                    return Promise.reject(e)
                                }
                                return a && (c = new Promise((function(e, t) {
                                    c.onabort = c.onerror = function(e) {
                                        t(e)
                                    }
                                    ,
                                    c.oncomplete = function(t) {
                                        e(t.target.result)
                                    }
                                }
                                ))),
                                "exportKey" === e && "jwk" === r && (c = c.then((function(e) {
                                    return (s || a && "SHA-1" === (o.algorithm.hash || {}).name) && "HMAC" === o.algorithm.name ? {
                                        kty: "oct",
                                        alg: y(o.algorithm),
                                        key_ops: o.usages.slice(),
                                        ext: !0,
                                        k: d(b(e))
                                    } : ((e = g(e)).alg || (e.alg = y(o.algorithm)),
                                    e.key_ops || (e.key_ops = "public" === o.type ? o.usages.filter(C) : "private" === o.type ? o.usages.filter(x) : o.usages.slice()),
                                    e)
                                }
                                ))),
                                !s || "exportKey" !== e || "spki" !== r && "pkcs8" !== r || (c = c.then((function(e) {
                                    return e = w(g(e))
                                }
                                ))),
                                c
                            }
                        }
                        )),
                        ["encrypt", "decrypt", "sign", "verify"].forEach((function(e) {
                            var t = n[e];
                            n[e] = function(r, o, i, s) {
                                if (a && (!i.byteLength || s && !s.byteLength))
                                    throw new Error("Empty input is not allowed");
                                var c, u = [].slice.call(arguments), f = h(r);
                                if (!a || "sign" !== e && "verify" !== e || "RSASSA-PKCS1-v1_5" !== r && "HMAC" !== r || (u[0] = {
                                    name: r
                                }),
                                a && o.algorithm.hash && (u[0].hash = u[0].hash || o.algorithm.hash),
                                a && "decrypt" === e && "AES-GCM" === f.name) {
                                    var d = r.tagLength >> 3;
                                    u[2] = (i.buffer || i).slice(0, i.byteLength - d),
                                    r.tag = (i.buffer || i).slice(i.byteLength - d)
                                }
                                a && "AES-GCM" === f.name && void 0 === u[0].tagLength && (u[0].tagLength = 128),
                                u[1] = o._key;
                                try {
                                    c = t.apply(n, u)
                                } catch (e) {
                                    return Promise.reject(e)
                                }
                                return a && (c = new Promise((function(t, n) {
                                    c.onabort = c.onerror = function(e) {
                                        n(e)
                                    }
                                    ,
                                    c.oncomplete = function(n) {
                                        if (n = n.target.result,
                                        "encrypt" === e && n instanceof AesGcmEncryptResult) {
                                            var r = n.ciphertext
                                              , o = n.tag;
                                            (n = new Uint8Array(r.byteLength + o.byteLength)).set(new Uint8Array(r), 0),
                                            n.set(new Uint8Array(o), r.byteLength),
                                            n = n.buffer
                                        }
                                        t(n)
                                    }
                                }
                                ))),
                                c
                            }
                        }
                        )),
                        a) {
                            var f = n.digest;
                            n.digest = function(e, t) {
                                if (!t.byteLength)
                                    throw new Error("Empty input is not allowed");
                                var r;
                                try {
                                    r = f.call(n, e, t)
                                } catch (e) {
                                    return Promise.reject(e)
                                }
                                return r = new Promise((function(e, t) {
                                    r.onabort = r.onerror = function(e) {
                                        t(e)
                                    }
                                    ,
                                    r.oncomplete = function(t) {
                                        e(t.target.result)
                                    }
                                }
                                ))
                            }
                            ,
                            e.crypto = Object.create(t, {
                                getRandomValues: {
                                    value: function(e) {
                                        return t.getRandomValues(e)
                                    }
                                },
                                subtle: {
                                    value: n
                                }
                            }),
                            e.CryptoKey = E
                        }
                        s && (t.subtle = n,
                        e.Crypto = r,
                        e.SubtleCrypto = o,
                        e.CryptoKey = E)
                    }
                }
            }
            function d(e) {
                return btoa(e).replace(/\=+$/, "").replace(/\+/g, "-").replace(/\//g, "_")
            }
            function l(e) {
                return e = (e += "===").slice(0, -e.length % 4),
                atob(e.replace(/-/g, "+").replace(/_/g, "/"))
            }
            function p(e) {
                for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++)
                    t[n] = e.charCodeAt(n);
                return t
            }
            function b(e) {
                return e instanceof ArrayBuffer && (e = new Uint8Array(e)),
                String.fromCharCode.apply(String, e)
            }
            function h(e) {
                var t = {
                    name: (e.name || e || "").toUpperCase().replace("V", "v")
                };
                switch (t.name) {
                case "SHA-1":
                case "SHA-256":
                case "SHA-384":
                case "SHA-512":
                    break;
                case "AES-CBC":
                case "AES-GCM":
                case "AES-KW":
                    e.length && (t.length = e.length);
                    break;
                case "HMAC":
                    e.hash && (t.hash = h(e.hash)),
                    e.length && (t.length = e.length);
                    break;
                case "RSAES-PKCS1-v1_5":
                    e.publicExponent && (t.publicExponent = new Uint8Array(e.publicExponent)),
                    e.modulusLength && (t.modulusLength = e.modulusLength);
                    break;
                case "RSASSA-PKCS1-v1_5":
                case "RSA-OAEP":
                    e.hash && (t.hash = h(e.hash)),
                    e.publicExponent && (t.publicExponent = new Uint8Array(e.publicExponent)),
                    e.modulusLength && (t.modulusLength = e.modulusLength);
                    break;
                default:
                    throw new SyntaxError("Bad algorithm name")
                }
                return t
            }
            function y(e) {
                return {
                    HMAC: {
                        "SHA-1": "HS1",
                        "SHA-256": "HS256",
                        "SHA-384": "HS384",
                        "SHA-512": "HS512"
                    },
                    "RSASSA-PKCS1-v1_5": {
                        "SHA-1": "RS1",
                        "SHA-256": "RS256",
                        "SHA-384": "RS384",
                        "SHA-512": "RS512"
                    },
                    "RSAES-PKCS1-v1_5": {
                        "": "RSA1_5"
                    },
                    "RSA-OAEP": {
                        "SHA-1": "RSA-OAEP",
                        "SHA-256": "RSA-OAEP-256"
                    },
                    "AES-KW": {
                        128: "A128KW",
                        192: "A192KW",
                        256: "A256KW"
                    },
                    "AES-GCM": {
                        128: "A128GCM",
                        192: "A192GCM",
                        256: "A256GCM"
                    },
                    "AES-CBC": {
                        128: "A128CBC",
                        192: "A192CBC",
                        256: "A256CBC"
                    }
                }[e.name][(e.hash || {}).name || e.length || ""]
            }
            function g(e) {
                (e instanceof ArrayBuffer || e instanceof Uint8Array) && (e = JSON.parse(decodeURIComponent(escape(b(e)))));
                var t = {
                    kty: e.kty,
                    alg: e.alg,
                    ext: e.ext || e.extractable
                };
                switch (t.kty) {
                case "oct":
                    t.k = e.k;
                case "RSA":
                    ["n", "e", "d", "p", "q", "dp", "dq", "qi", "oth"].forEach((function(n) {
                        n in e && (t[n] = e[n])
                    }
                    ));
                    break;
                default:
                    throw new TypeError("Unsupported key type")
                }
                return t
            }
            function m(e) {
                var t = g(e);
                return a && (t.extractable = t.ext,
                delete t.ext),
                p(unescape(encodeURIComponent(JSON.stringify(t)))).buffer
            }
            function v(e) {
                var t = A(e)
                  , n = !1;
                t.length > 2 && (n = !0,
                t.shift());
                var r = {
                    ext: !0
                };
                switch (t[0][0]) {
                case "1.2.840.113549.1.1.1":
                    var o = ["n", "e", "d", "p", "q", "dp", "dq", "qi"]
                      , i = A(t[1]);
                    n && i.shift();
                    for (var a = 0; a < i.length; a++)
                        i[a][0] || (i[a] = i[a].subarray(1)),
                        r[o[a]] = d(b(i[a]));
                    r.kty = "RSA";
                    break;
                default:
                    throw new TypeError("Unsupported key type")
                }
                return r
            }
            function w(e) {
                var t, n = [["", null]], r = !1;
                switch (e.kty) {
                case "RSA":
                    for (var o = ["n", "e", "d", "p", "q", "dp", "dq", "qi"], i = [], a = 0; a < o.length && o[a]in e; a++) {
                        var s = i[a] = p(l(e[o[a]]));
                        128 & s[0] && (i[a] = new Uint8Array(s.length + 1),
                        i[a].set(s, 1))
                    }
                    i.length > 2 && (r = !0,
                    i.unshift(new Uint8Array([0]))),
                    n[0][0] = "1.2.840.113549.1.1.1",
                    t = i;
                    break;
                default:
                    throw new TypeError("Unsupported key type")
                }
                return n.push(new Uint8Array(S(t)).buffer),
                r ? n.unshift(new Uint8Array([0])) : n[1] = {
                    tag: 3,
                    value: n[1]
                },
                new Uint8Array(S(n)).buffer
            }
            function A(e, t) {
                if (e instanceof ArrayBuffer && (e = new Uint8Array(e)),
                t || (t = {
                    pos: 0,
                    end: e.length
                }),
                t.end - t.pos < 2 || t.end > e.length)
                    throw new RangeError("Malformed DER");
                var n, r = e[t.pos++], o = e[t.pos++];
                if (o >= 128) {
                    if (o &= 127,
                    t.end - t.pos < o)
                        throw new RangeError("Malformed DER");
                    for (var i = 0; o--; )
                        i <<= 8,
                        i |= e[t.pos++];
                    o = i
                }
                if (t.end - t.pos < o)
                    throw new RangeError("Malformed DER");
                switch (r) {
                case 2:
                    n = e.subarray(t.pos, t.pos += o);
                    break;
                case 3:
                    if (e[t.pos++])
                        throw new Error("Unsupported bit string");
                    o--;
                case 4:
                    n = new Uint8Array(e.subarray(t.pos, t.pos += o)).buffer;
                    break;
                case 5:
                    n = null;
                    break;
                case 6:
                    var a = btoa(b(e.subarray(t.pos, t.pos += o)));
                    if (!(a in c))
                        throw new Error("Unsupported OBJECT ID " + a);
                    n = c[a];
                    break;
                case 48:
                    n = [];
                    for (var s = t.pos + o; t.pos < s; )
                        n.push(A(e, t));
                    break;
                default:
                    throw new Error("Unsupported DER tag 0x" + r.toString(16))
                }
                return n
            }
            function S(e, t) {
                t || (t = []);
                var n = 0
                  , r = 0
                  , o = t.length + 2;
                if (t.push(0, 0),
                e instanceof Uint8Array) {
                    n = 2,
                    r = e.length;
                    for (var i = 0; i < r; i++)
                        t.push(e[i])
                } else if (e instanceof ArrayBuffer)
                    for (n = 4,
                    r = e.byteLength,
                    e = new Uint8Array(e),
                    i = 0; i < r; i++)
                        t.push(e[i]);
                else if (null === e)
                    n = 5,
                    r = 0;
                else if ("string" == typeof e && e in u) {
                    var a = p(atob(u[e]));
                    for (n = 6,
                    r = a.length,
                    i = 0; i < r; i++)
                        t.push(a[i])
                } else if (e instanceof Array) {
                    for (i = 0; i < e.length; i++)
                        S(e[i], t);
                    n = 48,
                    r = t.length - o
                } else {
                    if (!("object" == typeof e && 3 === e.tag && e.value instanceof ArrayBuffer))
                        throw new Error("Unsupported DER value " + e);
                    for (n = 3,
                    r = (e = new Uint8Array(e.value)).byteLength,
                    t.push(0),
                    i = 0; i < r; i++)
                        t.push(e[i]);
                    r++
                }
                if (r >= 128) {
                    var s = r;
                    for (r = 4,
                    t.splice(o, 0, s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s); r > 1 && !(s >> 24); )
                        s <<= 8,
                        r--;
                    r < 4 && t.splice(o, 4 - r),
                    r |= 128
                }
                return t.splice(o - 2, 2, n, r),
                t
            }
            function E(e, t, n, r) {
                Object.defineProperties(this, {
                    _key: {
                        value: e
                    },
                    type: {
                        value: e.type,
                        enumerable: !0
                    },
                    extractable: {
                        value: void 0 === n ? e.extractable : n,
                        enumerable: !0
                    },
                    algorithm: {
                        value: void 0 === t ? e.algorithm : t,
                        enumerable: !0
                    },
                    usages: {
                        value: void 0 === r ? e.usages : r,
                        enumerable: !0
                    }
                })
            }
            function C(e) {
                return "verify" === e || "encrypt" === e || "wrapKey" === e
            }
            function x(e) {
                return "sign" === e || "decrypt" === e || "unwrapKey" === e
            }
        }(o)
    }
    .apply(t, [])) || (e.exports = r)
}
, function(e, t, n) {
    var r = n(50).default
      , o = n(103);
    e.exports = function(e) {
        var t = o(e, "string");
        return "symbol" === r(t) ? t : String(t)
    }
    ,
    e.exports.__esModule = !0,
    e.exports.default = e.exports
}
, function(e, t, n) {
    var r = n(50).default;
    e.exports = function(e, t) {
        if ("object" !== r(e) || null === e)
            return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var o = n.call(e, t || "default");
            if ("object" !== r(o))
                return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
    }
    ,
    e.exports.__esModule = !0,
    e.exports.default = e.exports
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function o(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? r(Object(n), !0).forEach((function(t) {
                i(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function a(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    var c = n(105)
      , u = c.encodeToBase64
      , f = c.decodeFromBase64
      , d = c.decodePublisherTCFromBase64
      , l = c.getSegmentType
      , p = n(110).consentStringDefinition
      , b = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            a(this, e),
            this.setConsentString(t)
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "getCoreSegmentData",
            value: function() {
                return this.core ? o({}, this.core) : null
            }
        }, {
            key: "setCoreSegmentData",
            value: function(e) {
                this.core = o({}, e)
            }
        }, {
            key: "getCoreSegmentString",
            value: function() {
                return this.core ? u(this.core, p.core) : null
            }
        }, {
            key: "setCoreSegmentString",
            value: function(e) {
                this.core = f(e, p.core)
            }
        }, {
            key: "getDisclosedVendorsData",
            value: function() {
                return this.disclosedVendors ? o({}, this.disclosedVendors) : null
            }
        }, {
            key: "setDisclosedVendorsData",
            value: function(e) {
                this.disclosedVendors = o({}, e)
            }
        }, {
            key: "getDisclosedVendorsString",
            value: function() {
                return this.disclosedVendors ? u(this.disclosedVendors, p.disclosedVendors) : null
            }
        }, {
            key: "setDisclosedVendorsString",
            value: function(e) {
                this.disclosedVendors = f(e, p.disclosedVendors)
            }
        }, {
            key: "getAllowedVendorsData",
            value: function() {
                return this.allowedVendors ? o({}, this.allowedVendors) : null
            }
        }, {
            key: "setAllowedVendorsData",
            value: function(e) {
                this.allowedVendors = o({}, e)
            }
        }, {
            key: "getAllowedVendorsString",
            value: function() {
                return this.allowedVendors ? u(this.allowedVendors, p.allowedVendors) : null
            }
        }, {
            key: "setAllowedVendorsString",
            value: function(e) {
                this.allowedVendors = f(e, p.allowedVendors)
            }
        }, {
            key: "getPublisherTCData",
            value: function() {
                return this.publisherTC ? o({}, this.publisherTC) : null
            }
        }, {
            key: "setPublisherTCData",
            value: function(e) {
                this.publisherTC = o({}, e)
            }
        }, {
            key: "getPublisherTCString",
            value: function() {
                return this.publisherTC ? u(this.publisherTC, p.publisherTC) : null
            }
        }, {
            key: "setPublisherTCString",
            value: function(e) {
                this.publisherTC = d(e)
            }
        }, {
            key: "setConsentString",
            value: function(e) {
                if (this.core = null,
                this.disclosedVendors = null,
                this.allowedVendors = null,
                this.publisherTC = null,
                e) {
                    var t = e.split(".");
                    t.length > 0 && this.setCoreSegmentString(t[0]);
                    for (var n = 1; n < t.length; n += 1)
                        switch (l(t[n])) {
                        case 1:
                            this.setAllowedVendorsString(t[n]);
                            break;
                        case 2:
                            this.setDisclosedVendorsString(t[n]);
                            break;
                        case 3:
                            this.setPublisherTCString(t[n]);
                            break;
                        default:
                            throw new Error("Unknown segment type in consent string")
                        }
                }
            }
        }, {
            key: "getConsentString",
            value: function() {
                var e = [];
                return this.core ? (e.push(this.getCoreSegmentString()),
                this.disclosedVendors && e.push(this.getDisclosedVendorsString()),
                this.allowedVendors && e.push(this.getAllowedVendorsString()),
                this.publisherTC && e.push(this.getPublisherTCString()),
                e.join(".")) : null
            }
        }]) && s(t.prototype, n),
        r && s(t, r),
        e
    }();
    e.exports = {
        TCStringV2: b
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(106)
      , o = n(51)
      , i = o.padLeft
      , a = o.padRight
      , s = n(108).encodeFields
      , c = n(109)
      , u = c.decodeFields
      , f = c.decodePublisherTC;
    function d(e) {
        for (var t = e; t.length % 4 != 0; )
            t += "=";
        t = t.replace(/-/g, "+").replace(/_/g, "/");
        for (var n = r.decode(t), o = "", a = 0; a < n.length; a += 1) {
            var s = n.charCodeAt(a).toString(2);
            o += i(s, 8 - s.length)
        }
        return o
    }
    e.exports = {
        encodeToBase64: function(e, t) {
            return function(e) {
                if (e) {
                    for (var t = a(e, 7 - (e.length + 7) % 8), n = "", o = 0; o < t.length; o += 8)
                        n += String.fromCharCode(parseInt(t.substr(o, 8), 2));
                    return r.encode(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                }
                return null
            }(s(e, t))
        },
        decodeFromBase64: function(e, t) {
            var n = d(e);
            return u(n, t).decodedObject
        },
        decodePublisherTCFromBase64: function(e) {
            var t = d(e);
            return f(t)
        },
        getSegmentType: function(e) {
            var t = d(e);
            return parseInt(t.substr(0, 3), 2)
        }
    }
}
, function(e, t, n) {
    (function(e, r) {
        var o;
        !function(i) {
            var a = t
              , s = (e && e.exports,
            "object" == typeof r && r);
            s.global !== s && s.window;
            var c = function(e) {
                this.message = e
            };
            (c.prototype = new Error).name = "InvalidCharacterError";
            var u = function(e) {
                throw new c(e)
            }
              , f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
              , d = /[\t\n\f\r ]/g
              , l = {
                encode: function(e) {
                    e = String(e),
                    /[^\0-\xFF]/.test(e) && u("The string to be encoded contains characters outside of the Latin1 range.");
                    for (var t, n, r, o, i = e.length % 3, a = "", s = -1, c = e.length - i; ++s < c; )
                        t = e.charCodeAt(s) << 16,
                        n = e.charCodeAt(++s) << 8,
                        r = e.charCodeAt(++s),
                        a += f.charAt((o = t + n + r) >> 18 & 63) + f.charAt(o >> 12 & 63) + f.charAt(o >> 6 & 63) + f.charAt(63 & o);
                    return 2 == i ? (t = e.charCodeAt(s) << 8,
                    n = e.charCodeAt(++s),
                    a += f.charAt((o = t + n) >> 10) + f.charAt(o >> 4 & 63) + f.charAt(o << 2 & 63) + "=") : 1 == i && (o = e.charCodeAt(s),
                    a += f.charAt(o >> 2) + f.charAt(o << 4 & 63) + "=="),
                    a
                },
                decode: function(e) {
                    var t = (e = String(e).replace(d, "")).length;
                    t % 4 == 0 && (t = (e = e.replace(/==?$/, "")).length),
                    (t % 4 == 1 || /[^+a-zA-Z0-9/]/.test(e)) && u("Invalid character: the string to be decoded is not correctly encoded.");
                    for (var n, r, o = 0, i = "", a = -1; ++a < t; )
                        r = f.indexOf(e.charAt(a)),
                        n = o % 4 ? 64 * n + r : r,
                        o++ % 4 && (i += String.fromCharCode(255 & n >> (-2 * o & 6)));
                    return i
                },
                version: "0.1.0"
            };
            void 0 === (o = function() {
                return l
            }
            .call(t, n, t, e)) || (e.exports = o)
        }()
    }
    ).call(this, n(107)(e), n(23))
}
, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}
        ,
        e.paths = [],
        e.children || (e.children = []),
        Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }),
        Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }),
        e.webpackPolyfill = 1),
        e
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(51)
      , o = r.padLeft
      , i = r.getMaxListElement;
    function a(e, t) {
        var n = "";
        return "number" != typeof e || Number.isNaN(e) || (n = parseInt(e, 10).toString(2)),
        t >= n.length && (n = o(n, t - n.length)),
        n.length > t && (n = n.substring(0, t)),
        n
    }
    function s(e) {
        return a(!0 === e ? 1 : 0, 1)
    }
    function c(e, t) {
        return e instanceof Date ? a(e.getTime() / 100, t) : a(e, t)
    }
    function u(e, t) {
        return a(e.toUpperCase().charCodeAt(0) - 65, t)
    }
    function f(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12;
        return u(e.slice(0, 1), t / 2) + u(e.slice(1), t / 2)
    }
    function d(e, t) {
        for (var n = "", r = 1; r <= t; r += 1)
            n += -1 !== e.indexOf(r) ? "1" : "0";
        return n
    }
    function l(e) {
        return a(e.length, 12) + e.reduce((function(e, t) {
            return e + function(e) {
                return s(e.isRange) + a(e.startId, 16) + (e.isRange ? a(e.endId, 16) : "")
            }(t)
        }
        ), "")
    }
    function p(e) {
        return l(function(e) {
            for (var t = i(e), n = [], r = [], o = 1; o <= t; o += 1) {
                var a = o;
                if (-1 !== e.indexOf(a) && n.push(a),
                (-1 === e.indexOf(a) || -1 === e.indexOf(a + 1)) && n.length) {
                    var s = n.shift()
                      , c = n.pop();
                    n = [],
                    r.push({
                        isRange: "number" == typeof c,
                        startId: s,
                        endId: c
                    })
                }
            }
            return r
        }(e))
    }
    function b(e, t) {
        var n = p(e)
          , r = d(e, i(e));
        return a(i(e), t) + s(n.length < r.length) + (n.length < r.length ? n : r)
    }
    function h(e, t, n) {
        var r = e || [];
        return a(r.length, t) + r.reduce((function(e, t) {
            return e + y(t, n)
        }
        ), "")
    }
    function y(e, t) {
        var n = "";
        return t.segmentId && (n = a(t.segmentId, 3)),
        t.fields.reduce((function(t, n) {
            return t + function(e, t) {
                var n = t.name
                  , r = t.type
                  , o = t.numBits
                  , i = e[n]
                  , u = null == i ? "" : i
                  , l = "function" == typeof o ? o(e) : o;
                switch (r) {
                case "int":
                    return a(u, l);
                case "bool":
                    return s(u);
                case "date":
                    return c(u, l);
                case "list":
                    return d(u, l);
                case "textcode":
                    return f(u, l);
                case "range":
                    return p(u);
                case "minlist":
                    return b(u, l);
                case "array":
                    return h(u, l, t);
                default:
                    throw new Error("TCStringV2 - Unknown field type ".concat(r, " for encoding"))
                }
            }(e, n)
        }
        ), n)
    }
    e.exports = {
        encodeBoolToBits: s,
        encodeIntToBits: a,
        encodeDateToBits: c,
        encodeLetterToBits: u,
        encodeTextCodeToBits: f,
        encodeListToBits: d,
        encodeListToRangeBits: p,
        encodeMinListToBits: b,
        encodeArrayToBits: h,
        encodeFields: y
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t, n) {
        if (void 0 !== n && e.length < t + n)
            throw new Error("Invalid decoding input")
    }
    function o(e, t, n) {
        return r(e, t, n),
        parseInt(e.substr(t, n), 2)
    }
    function i(e, t, n) {
        return r(e, t, n),
        new Date(100 * o(e, t, n))
    }
    function a(e, t) {
        return 1 === parseInt(e.substr(t, 1), 2)
    }
    function s(e) {
        var t = o(e);
        return String.fromCharCode(t + 65).toLowerCase()
    }
    function c(e, t, n) {
        r(e, t, n);
        var o = e.substr(t, n);
        return s(o.slice(0, n / 2)) + s(o.slice(n / 2))
    }
    function u(e, t, n, r) {
        var i = t
          , a = []
          , s = o(e, i, n);
        i += n;
        for (var c = 0; c < s; c += 1) {
            var u = b(e, r, i)
              , f = u.decodedObject;
            i = u.newPosition,
            a.push(f)
        }
        return {
            fieldValue: a,
            newPosition: i
        }
    }
    function f(e, t) {
        var n = t
          , r = []
          , i = o(e, n, 12);
        n += 12;
        for (var s = 0; s < i; ) {
            var c = a(e, n);
            if (n += 1,
            c) {
                var u = o(e, n, 16)
                  , f = o(e, n += 16, 16);
                n += 16;
                for (var d = u; d <= f; d += 1)
                    r.push(d)
            } else {
                var l = o(e, n, 16);
                n += 16,
                r.push(l)
            }
            s += 1
        }
        return {
            fieldValue: r,
            newPosition: n
        }
    }
    function d(e, t, n) {
        r(e, t, n);
        for (var o = [], i = e.substr(t, n), a = 0; a < i.length; a += 1)
            "0" !== i[a] && o.push(a + 1);
        return o
    }
    function l(e, t, n) {
        var r = t
          , i = o(e, t, n)
          , s = a(e, r += n);
        return r += 1,
        s ? f(e, r) : {
            fieldValue: d(e.substr(r, i)),
            newPosition: r += i
        }
    }
    function p(e, t, n, r) {
        var s = r.type
          , p = r.numBits
          , b = "function" == typeof p ? p(t) : p;
        switch (s) {
        case "int":
            return {
                fieldValue: o(e, n, b)
            };
        case "bool":
            return {
                fieldValue: a(e, n)
            };
        case "date":
            return {
                fieldValue: i(e, n, b)
            };
        case "list":
            return {
                fieldValue: d(e, n, b)
            };
        case "textcode":
            return {
                fieldValue: c(e, n, b)
            };
        case "range":
            return f(e, n);
        case "minlist":
            return l(e, n, b);
        case "array":
            return u(e, n, b, r);
        default:
            throw new Error("TCStringV2 - Unknown field type ".concat(s, " for decoding"))
        }
    }
    function b(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
          , r = n;
        t.segmentId && (r += 3);
        var o = t.fields.reduce((function(t, n) {
            var o = n.name
              , i = n.numBits
              , a = p(e, t, r, n)
              , s = a.fieldValue
              , c = a.newPosition;
            return void 0 !== s && (t[o] = s),
            void 0 !== c ? r = c : "number" == typeof i && (r += i),
            t
        }
        ), {});
        return {
            decodedObject: o,
            newPosition: r
        }
    }
    e.exports = {
        decodeBitsToInt: o,
        decodeBitsToBool: a,
        decodeBitsToDate: i,
        decodeBitsToLetter: s,
        decodeBitsToTextCode: c,
        decodeBitsToRange: f,
        decodeBitsToMinList: l,
        decodeBitsToArray: u,
        decodeFields: b,
        decodePublisherTC: function(e) {
            var t = 0
              , n = o(e, t, 3);
            if (t += 3,
            3 !== n)
                throw new Error("Invalid consent string");
            var r = d(e, t, 24)
              , i = d(e, t += 24, 24)
              , a = o(e, t += 24, 6);
            return {
                pubPurposesConsent: r,
                pubPurposesLITransparency: i,
                numCustomPurposes: a,
                customPurposesConsent: d(e, t += 6, a),
                customPurposesLITransparency: d(e, t += a, a)
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = {
        consentStringDefinition: {
            core: {
                fields: [{
                    name: "version",
                    type: "int",
                    numBits: 6
                }, {
                    name: "created",
                    type: "date",
                    numBits: 36
                }, {
                    name: "lastUpdated",
                    type: "date",
                    numBits: 36
                }, {
                    name: "cmpId",
                    type: "int",
                    numBits: 12
                }, {
                    name: "cmpVersion",
                    type: "int",
                    numBits: 12
                }, {
                    name: "consentScreen",
                    type: "int",
                    numBits: 6
                }, {
                    name: "consentLanguage",
                    type: "textcode",
                    numBits: 12
                }, {
                    name: "vendorListVersion",
                    type: "int",
                    numBits: 12
                }, {
                    name: "tcfPolicyVersion",
                    type: "int",
                    numBits: 6
                }, {
                    name: "isServiceSpecific",
                    type: "bool",
                    numBits: 1
                }, {
                    name: "useNonStandardStacks",
                    type: "bool",
                    numBits: 1
                }, {
                    name: "specialFeatureOptIns",
                    type: "list",
                    numBits: 12
                }, {
                    name: "purposesConsent",
                    type: "list",
                    numBits: 24
                }, {
                    name: "purposeLITransparency",
                    type: "list",
                    numBits: 24
                }, {
                    name: "purposeOneTreatment",
                    type: "bool",
                    numBits: 1
                }, {
                    name: "publisherCC",
                    type: "textcode",
                    numBits: 12
                }, {
                    name: "vendorsConsent",
                    type: "minlist",
                    numBits: 16
                }, {
                    name: "vendorsLegitimateInterest",
                    type: "minlist",
                    numBits: 16
                }, {
                    name: "publisherRestrictions",
                    type: "array",
                    numBits: 12,
                    fields: [{
                        name: "purposeId",
                        type: "int",
                        numBits: 6
                    }, {
                        name: "restrictionType",
                        type: "int",
                        numBits: 2
                    }, {
                        name: "restrictedVendors",
                        type: "range"
                    }]
                }]
            },
            disclosedVendors: {
                segmentId: 1,
                fields: [{
                    name: "disclosedVendors",
                    type: "minlist",
                    numBits: 16
                }]
            },
            allowedVendors: {
                segmentId: 2,
                fields: [{
                    name: "allowedVendors",
                    type: "minlist",
                    numBits: 16
                }]
            },
            publisherTC: {
                segmentId: 3,
                fields: [{
                    name: "pubPurposesConsent",
                    type: "list",
                    numBits: 24
                }, {
                    name: "pubPurposesLITransparency",
                    type: "list",
                    numBits: 24
                }, {
                    name: "numCustomPurposes",
                    type: "int",
                    numBits: 6
                }, {
                    name: "customPurposesConsent",
                    type: "list",
                    numBits: function(e) {
                        return e.numCustomPurposes
                    }
                }, {
                    name: "customPurposesLITransparency",
                    type: "list",
                    numBits: function(e) {
                        return e.numCustomPurposes
                    }
                }]
            }
        }
    }
}
, function(e) {
    e.exports = JSON.parse('{"name":"atsenvelopemodule","version":"1.1.5","description":"ats-envelope-module","main":"src/index.js","scripts":{"test":"jest","clean":"rimraf coverage build","build:dev:only":"webpack --mode=development","build:dev":"run-s clean build:dev:only","build:prod:only":"webpack --mode=production","build:prod":"run-s clean build:prod:only","start":"webpack-dev-server --https","lint":"eslint \\"src/\\" --ext .js -c ../../.eslintrc","lint:fix":"eslint \\"src/\\" --ext .js --fix -c ../../.eslintrc","format":"prettier --write \\"**/*.js\\"","format:staged":"pretty-quick --staged"},"author":"","license":"ISC"}')
}
, function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "start", (function() {
        return tt
    }
    )),
    n.d(t, "setAdditionalData", (function() {
        return nt
    }
    )),
    n.d(t, "retrieveEnvelope", (function() {
        return rt
    }
    )),
    n.d(t, "outputCurrentConfiguration", (function() {
        return ot
    }
    )),
    n.d(t, "invalidateEnvelope", (function() {
        return it
    }
    )),
    n.d(t, "setOptOut", (function() {
        return at
    }
    )),
    n.d(t, "setOptOutStateBasedOnStoredIdentifier", (function() {
        return st
    }
    ));
    n(54),
    n(65),
    n(79);
    var r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== r && r
      , o = "URLSearchParams"in r
      , i = "Symbol"in r && "iterator"in Symbol
      , a = "FileReader"in r && "Blob"in r && function() {
        try {
            return new Blob,
            !0
        } catch (e) {
            return !1
        }
    }()
      , s = "FormData"in r
      , c = "ArrayBuffer"in r;
    if (c)
        var u = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
          , f = ArrayBuffer.isView || function(e) {
            return e && u.indexOf(Object.prototype.toString.call(e)) > -1
        }
        ;
    function d(e) {
        if ("string" != typeof e && (e = String(e)),
        /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)
            throw new TypeError('Invalid character in header field name: "' + e + '"');
        return e.toLowerCase()
    }
    function l(e) {
        return "string" != typeof e && (e = String(e)),
        e
    }
    function p(e) {
        var t = {
            next: function() {
                var t = e.shift();
                return {
                    done: void 0 === t,
                    value: t
                }
            }
        };
        return i && (t[Symbol.iterator] = function() {
            return t
        }
        ),
        t
    }
    function b(e) {
        this.map = {},
        e instanceof b ? e.forEach((function(e, t) {
            this.append(t, e)
        }
        ), this) : Array.isArray(e) ? e.forEach((function(e) {
            this.append(e[0], e[1])
        }
        ), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
            this.append(t, e[t])
        }
        ), this)
    }
    function h(e) {
        if (e.bodyUsed)
            return Promise.reject(new TypeError("Already read"));
        e.bodyUsed = !0
    }
    function y(e) {
        return new Promise((function(t, n) {
            e.onload = function() {
                t(e.result)
            }
            ,
            e.onerror = function() {
                n(e.error)
            }
        }
        ))
    }
    function g(e) {
        var t = new FileReader
          , n = y(t);
        return t.readAsArrayBuffer(e),
        n
    }
    function m(e) {
        if (e.slice)
            return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)),
        t.buffer
    }
    function v() {
        return this.bodyUsed = !1,
        this._initBody = function(e) {
            var t;
            this.bodyUsed = this.bodyUsed,
            this._bodyInit = e,
            e ? "string" == typeof e ? this._bodyText = e : a && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : s && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : o && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : c && a && ((t = e) && DataView.prototype.isPrototypeOf(t)) ? (this._bodyArrayBuffer = m(e.buffer),
            this._bodyInit = new Blob([this._bodyArrayBuffer])) : c && (ArrayBuffer.prototype.isPrototypeOf(e) || f(e)) ? this._bodyArrayBuffer = m(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "",
            this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : o && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }
        ,
        a && (this.blob = function() {
            var e = h(this);
            if (e)
                return e;
            if (this._bodyBlob)
                return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }
        ,
        this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
                var e = h(this);
                return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
            }
            return this.blob().then(g)
        }
        ),
        this.text = function() {
            var e, t, n, r = h(this);
            if (r)
                return r;
            if (this._bodyBlob)
                return e = this._bodyBlob,
                t = new FileReader,
                n = y(t),
                t.readAsText(e),
                n;
            if (this._bodyArrayBuffer)
                return Promise.resolve(function(e) {
                    for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++)
                        n[r] = String.fromCharCode(t[r]);
                    return n.join("")
                }(this._bodyArrayBuffer));
            if (this._bodyFormData)
                throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }
        ,
        s && (this.formData = function() {
            return this.text().then(S)
        }
        ),
        this.json = function() {
            return this.text().then(JSON.parse)
        }
        ,
        this
    }
    b.prototype.append = function(e, t) {
        e = d(e),
        t = l(t);
        var n = this.map[e];
        this.map[e] = n ? n + ", " + t : t
    }
    ,
    b.prototype.delete = function(e) {
        delete this.map[d(e)]
    }
    ,
    b.prototype.get = function(e) {
        return e = d(e),
        this.has(e) ? this.map[e] : null
    }
    ,
    b.prototype.has = function(e) {
        return this.map.hasOwnProperty(d(e))
    }
    ,
    b.prototype.set = function(e, t) {
        this.map[d(e)] = l(t)
    }
    ,
    b.prototype.forEach = function(e, t) {
        for (var n in this.map)
            this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
    }
    ,
    b.prototype.keys = function() {
        var e = [];
        return this.forEach((function(t, n) {
            e.push(n)
        }
        )),
        p(e)
    }
    ,
    b.prototype.values = function() {
        var e = [];
        return this.forEach((function(t) {
            e.push(t)
        }
        )),
        p(e)
    }
    ,
    b.prototype.entries = function() {
        var e = [];
        return this.forEach((function(t, n) {
            e.push([n, t])
        }
        )),
        p(e)
    }
    ,
    i && (b.prototype[Symbol.iterator] = b.prototype.entries);
    var w = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
    function A(e, t) {
        if (!(this instanceof A))
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        var n, r, o = (t = t || {}).body;
        if (e instanceof A) {
            if (e.bodyUsed)
                throw new TypeError("Already read");
            this.url = e.url,
            this.credentials = e.credentials,
            t.headers || (this.headers = new b(e.headers)),
            this.method = e.method,
            this.mode = e.mode,
            this.signal = e.signal,
            o || null == e._bodyInit || (o = e._bodyInit,
            e.bodyUsed = !0)
        } else
            this.url = String(e);
        if (this.credentials = t.credentials || this.credentials || "same-origin",
        !t.headers && this.headers || (this.headers = new b(t.headers)),
        this.method = (n = t.method || this.method || "GET",
        r = n.toUpperCase(),
        w.indexOf(r) > -1 ? r : n),
        this.mode = t.mode || this.mode || null,
        this.signal = t.signal || this.signal,
        this.referrer = null,
        ("GET" === this.method || "HEAD" === this.method) && o)
            throw new TypeError("Body not allowed for GET or HEAD requests");
        if (this._initBody(o),
        !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== t.cache && "no-cache" !== t.cache)) {
            var i = /([?&])_=[^&]*/;
            if (i.test(this.url))
                this.url = this.url.replace(i, "$1_=" + (new Date).getTime());
            else {
                this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
            }
        }
    }
    function S(e) {
        var t = new FormData;
        return e.trim().split("&").forEach((function(e) {
            if (e) {
                var n = e.split("=")
                  , r = n.shift().replace(/\+/g, " ")
                  , o = n.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(r), decodeURIComponent(o))
            }
        }
        )),
        t
    }
    function E(e, t) {
        if (!(this instanceof E))
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        t || (t = {}),
        this.type = "default",
        this.status = void 0 === t.status ? 200 : t.status,
        this.ok = this.status >= 200 && this.status < 300,
        this.statusText = void 0 === t.statusText ? "" : "" + t.statusText,
        this.headers = new b(t.headers),
        this.url = t.url || "",
        this._initBody(e)
    }
    A.prototype.clone = function() {
        return new A(this,{
            body: this._bodyInit
        })
    }
    ,
    v.call(A.prototype),
    v.call(E.prototype),
    E.prototype.clone = function() {
        return new E(this._bodyInit,{
            status: this.status,
            statusText: this.statusText,
            headers: new b(this.headers),
            url: this.url
        })
    }
    ,
    E.error = function() {
        var e = new E(null,{
            status: 0,
            statusText: ""
        });
        return e.type = "error",
        e
    }
    ;
    var C = [301, 302, 303, 307, 308];
    E.redirect = function(e, t) {
        if (-1 === C.indexOf(t))
            throw new RangeError("Invalid status code");
        return new E(null,{
            status: t,
            headers: {
                location: e
            }
        })
    }
    ;
    var x = r.DOMException;
    try {
        new x
    } catch (e) {
        (x = function(e, t) {
            this.message = e,
            this.name = t;
            var n = Error(e);
            this.stack = n.stack
        }
        ).prototype = Object.create(Error.prototype),
        x.prototype.constructor = x
    }
    function O(e, t) {
        return new Promise((function(n, o) {
            var i = new A(e,t);
            if (i.signal && i.signal.aborted)
                return o(new x("Aborted","AbortError"));
            var s = new XMLHttpRequest;
            function u() {
                s.abort()
            }
            s.onload = function() {
                var e, t, r = {
                    status: s.status,
                    statusText: s.statusText,
                    headers: (e = s.getAllResponseHeaders() || "",
                    t = new b,
                    e.replace(/\r?\n[\t ]+/g, " ").split("\r").map((function(e) {
                        return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e
                    }
                    )).forEach((function(e) {
                        var n = e.split(":")
                          , r = n.shift().trim();
                        if (r) {
                            var o = n.join(":").trim();
                            t.append(r, o)
                        }
                    }
                    )),
                    t)
                };
                r.url = "responseURL"in s ? s.responseURL : r.headers.get("X-Request-URL");
                var o = "response"in s ? s.response : s.responseText;
                setTimeout((function() {
                    n(new E(o,r))
                }
                ), 0)
            }
            ,
            s.onerror = function() {
                setTimeout((function() {
                    o(new TypeError("Network request failed"))
                }
                ), 0)
            }
            ,
            s.ontimeout = function() {
                setTimeout((function() {
                    o(new TypeError("Network request failed"))
                }
                ), 0)
            }
            ,
            s.onabort = function() {
                setTimeout((function() {
                    o(new x("Aborted","AbortError"))
                }
                ), 0)
            }
            ,
            s.open(i.method, function(e) {
                try {
                    return "" === e && r.location.href ? r.location.href : e
                } catch (t) {
                    return e
                }
            }(i.url), !0),
            "include" === i.credentials ? s.withCredentials = !0 : "omit" === i.credentials && (s.withCredentials = !1),
            "responseType"in s && (a ? s.responseType = "blob" : c && i.headers.get("Content-Type") && -1 !== i.headers.get("Content-Type").indexOf("application/octet-stream") && (s.responseType = "arraybuffer")),
            !t || "object" != typeof t.headers || t.headers instanceof b ? i.headers.forEach((function(e, t) {
                s.setRequestHeader(t, e)
            }
            )) : Object.getOwnPropertyNames(t.headers).forEach((function(e) {
                s.setRequestHeader(e, l(t.headers[e]))
            }
            )),
            i.signal && (i.signal.addEventListener("abort", u),
            s.onreadystatechange = function() {
                4 === s.readyState && i.signal.removeEventListener("abort", u)
            }
            ),
            s.send(void 0 === i._bodyInit ? null : i._bodyInit)
        }
        ))
    }
    O.polyfill = !0,
    r.fetch || (r.fetch = O,
    r.Headers = b,
    r.Request = A,
    r.Response = E);
    n(101);
    var T = n(52)
      , _ = n.n(T);
    const P = ["debug", "info", "warn", "error"];
    var I = P.reduce((e,t,n)=>(e[t] = function() {
        const e = "debug" === t ? "log" : t
          , r = D.logging;
        if (r && console && "function" == typeof console[e]) {
            const s = P.indexOf(r.toString().toLocaleLowerCase());
            if (!0 === r || s > -1 && n >= s) {
                for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
                    i[a] = arguments[a];
                const [n,...r] = [...i];
                console[e](`${t.toUpperCase()} - (ATS-ENVELOPE-MODULE) ${n}`, ...r)
            }
        }
    }
    ,
    e), {});
    const R = {
        placementID: -1,
        storageType: "cookie",
        expirationTime: 1296e6,
        expirationRefreshTime: 18e5,
        logging: void 0,
        email: void 0,
        emailHashes: void 0,
        urlHashType: void 0,
        phoneNumber: void 0,
        customerID: void 0,
        accountID: void 0,
        customerIDRegex: void 0,
        catchIdentifier: !0,
        ccpaConsentString: void 0,
        gdprConsentString: void 0,
        startWithExternalId: !1,
        rootDomain: void 0,
        testMode: !1,
        useESP: !1,
        placementCountries: [],
        configUrlList: [],
        pubOptout: !1,
        usePAIR: !1
    };
    var D = new class {
        constructor() {
            _()(this, "update", e=>{
                if (e) {
                    const t = function(e, t) {
                        const n = {
                            ...e
                        };
                        for (const e in t)
                            "placementID" === e ? Number.isInteger(+t.placementID) ? n.placementID = +t.placementID : I.error("placementID is not a number!") : "expirationTime" === e ? Number.isInteger(+t.expirationTime) ? n.expirationTime = +t.expirationTime : I.error("expirationTime is not a number!") : n[e] = t[e];
                        return n
                    }(this, e);
                    Object.assign(this, t)
                }
            }
            ),
            this.update(R)
        }
    }
    ;
    function j(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 31536e3
          , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "/"
          , o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0
          , i = new Date;
        i.setTime(i.getTime() + 1e3 * n);
        let a = ";expires=" + i.toUTCString()
          , s = ";max-age=" + n
          , c = ";path=" + r
          , u = o ? ";domain=" + o : ""
          , f = e + "=" + encodeURIComponent(t);
        document.cookie = f + s + a + u + c
    }
    function B(e) {
        const t = e + "="
          , n = document.cookie.split(";");
        for (let e = 0; e < n.length; e++) {
            const r = n[e].trim();
            if (0 === r.indexOf(t))
                return decodeURIComponent(r.substring(t.length, r.length))
        }
        return ""
    }
    function k(e) {
        const t = new Date;
        t.setTime(t.getTime() - 864e5);
        const n = "expires=" + t.toUTCString();
        document.cookie = `${e}=;path=/;${n}`
    }
    function L(e, t) {
        t && localStorage.setItem(e, t)
    }
    function U(e) {
        if (null !== localStorage.getItem(e))
            return localStorage.getItem(e)
    }
    function M(e) {
        null !== localStorage.getItem(e) && localStorage.removeItem(e)
    }
    function V(e) {
        return function(e) {
            for (var t, n = "0123456789ABCDEF", r = "", o = 0; o < e.length; o++)
                t = e.charCodeAt(o),
                r += n.charAt(t >>> 4 & 15) + n.charAt(15 & t);
            return r
        }(function(e) {
            for (var t = "", n = 0; n < 32 * e.length; n += 8)
                t += String.fromCharCode(e[n >> 5] >>> n % 32 & 255);
            return t
        }(function(e, t) {
            e[t >> 5] |= 128 << t % 32,
            e[14 + (t + 64 >>> 9 << 4)] = t;
            for (var n = 1732584193, r = -271733879, o = -1732584194, i = 271733878, a = 0; a < e.length; a += 16) {
                const t = n
                  , s = r
                  , c = o
                  , u = i;
                r = G(r = G(r = G(r = G(r = F(r = F(r = F(r = F(r = K(r = K(r = K(r = K(r = N(r = N(r = N(r = N(r, o = N(o, i = N(i, n = N(n, r, o, i, e[a], 7, -680876936), r, o, e[a + 1], 12, -389564586), n, r, e[a + 2], 17, 606105819), i, n, e[a + 3], 22, -1044525330), o = N(o, i = N(i, n = N(n, r, o, i, e[a + 4], 7, -176418897), r, o, e[a + 5], 12, 1200080426), n, r, e[a + 6], 17, -1473231341), i, n, e[a + 7], 22, -45705983), o = N(o, i = N(i, n = N(n, r, o, i, e[a + 8], 7, 1770035416), r, o, e[a + 9], 12, -1958414417), n, r, e[a + 10], 17, -42063), i, n, e[a + 11], 22, -1990404162), o = N(o, i = N(i, n = N(n, r, o, i, e[a + 12], 7, 1804603682), r, o, e[a + 13], 12, -40341101), n, r, e[a + 14], 17, -1502002290), i, n, e[a + 15], 22, 1236535329), o = K(o, i = K(i, n = K(n, r, o, i, e[a + 1], 5, -165796510), r, o, e[a + 6], 9, -1069501632), n, r, e[a + 11], 14, 643717713), i, n, e[a], 20, -373897302), o = K(o, i = K(i, n = K(n, r, o, i, e[a + 5], 5, -701558691), r, o, e[a + 10], 9, 38016083), n, r, e[a + 15], 14, -660478335), i, n, e[a + 4], 20, -405537848), o = K(o, i = K(i, n = K(n, r, o, i, e[a + 9], 5, 568446438), r, o, e[a + 14], 9, -1019803690), n, r, e[a + 3], 14, -187363961), i, n, e[a + 8], 20, 1163531501), o = K(o, i = K(i, n = K(n, r, o, i, e[a + 13], 5, -1444681467), r, o, e[a + 2], 9, -51403784), n, r, e[a + 7], 14, 1735328473), i, n, e[a + 12], 20, -1926607734), o = F(o, i = F(i, n = F(n, r, o, i, e[a + 5], 4, -378558), r, o, e[a + 8], 11, -2022574463), n, r, e[a + 11], 16, 1839030562), i, n, e[a + 14], 23, -35309556), o = F(o, i = F(i, n = F(n, r, o, i, e[a + 1], 4, -1530992060), r, o, e[a + 4], 11, 1272893353), n, r, e[a + 7], 16, -155497632), i, n, e[a + 10], 23, -1094730640), o = F(o, i = F(i, n = F(n, r, o, i, e[a + 13], 4, 681279174), r, o, e[a], 11, -358537222), n, r, e[a + 3], 16, -722521979), i, n, e[a + 6], 23, 76029189), o = F(o, i = F(i, n = F(n, r, o, i, e[a + 9], 4, -640364487), r, o, e[a + 12], 11, -421815835), n, r, e[a + 15], 16, 530742520), i, n, e[a + 2], 23, -995338651), o = G(o, i = G(i, n = G(n, r, o, i, e[a], 6, -198630844), r, o, e[a + 7], 10, 1126891415), n, r, e[a + 14], 15, -1416354905), i, n, e[a + 5], 21, -57434055), o = G(o, i = G(i, n = G(n, r, o, i, e[a + 12], 6, 1700485571), r, o, e[a + 3], 10, -1894986606), n, r, e[a + 10], 15, -1051523), i, n, e[a + 1], 21, -2054922799), o = G(o, i = G(i, n = G(n, r, o, i, e[a + 8], 6, 1873313359), r, o, e[a + 15], 10, -30611744), n, r, e[a + 6], 15, -1560198380), i, n, e[a + 13], 21, 1309151649), o = G(o, i = G(i, n = G(n, r, o, i, e[a + 4], 6, -145523070), r, o, e[a + 11], 10, -1120210379), n, r, e[a + 2], 15, 718787259), i, n, e[a + 9], 21, -343485551),
                n = q(n, t),
                r = q(r, s),
                o = q(o, c),
                i = q(i, u)
            }
            return Array(n, r, o, i)
        }(function(e) {
            for (var t = Array(e.length >> 2), n = 0; n < t.length; n++)
                t[n] = 0;
            for (n = 0; n < 8 * e.length; n += 8)
                t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
            return t
        }(e), 8 * e.length))).toLowerCase()
    }
    function H(e, t, n, r, o, i) {
        return q(function(e, t) {
            return e << t | e >>> 32 - t
        }(q(q(t, e), q(r, i)), o), n)
    }
    function N(e, t, n, r, o, i, a) {
        return H(t & n | ~t & r, e, t, o, i, a)
    }
    function K(e, t, n, r, o, i, a) {
        return H(t & r | n & ~r, e, t, o, i, a)
    }
    function F(e, t, n, r, o, i, a) {
        return H(t ^ n ^ r, e, t, o, i, a)
    }
    function G(e, t, n, r, o, i, a) {
        return H(n ^ (t | ~r), e, t, o, i, a)
    }
    function q(e, t) {
        const n = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
    }
    const J = /((([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,}))/i;
    function W(e) {
        if (window.TextEncoder)
            return new TextEncoder("utf-8").encode(e);
        const t = unescape(encodeURIComponent(e))
          , n = new Uint8Array(t.length);
        for (let e = 0; e < t.length; e++)
            n[e] = t.charCodeAt(e);
        return n
    }
    async function z(e) {
        return V(e)
    }
    async function $(e) {
        const t = W(e);
        try {
            return Q(await crypto.subtle.digest("SHA-256", t))
        } catch (e) {
            return console.error("SHA-256 encryption failed: " + e),
            ""
        }
    }
    async function Y(e) {
        const t = W(e);
        try {
            return Q(await crypto.subtle.digest("SHA-1", t))
        } catch (e) {
            return console.error("SHA-1 encryption failed: " + e),
            ""
        }
    }
    function Z(e) {
        const t = (e = e.toLowerCase().trim()).split("@");
        let n = t[0];
        const r = t[1];
        let o = n.indexOf("+");
        return -1 === o && (o = n.indexOf(" ")),
        -1 === o && (o = n.indexOf("%2b")),
        -1 !== o && (n = n.slice(0, o)),
        "gmail.com" === r && (n = n.replace(/\./g, "")),
        n + "@" + r
    }
    function X(e) {
        return J.test(e)
    }
    function Q(e) {
        const t = []
          , n = new DataView(e);
        for (let e = 0; e < n.byteLength; e += 4) {
            const r = "00000000"
              , o = (r + n.getUint32(e).toString(16)).slice(-r.length);
            t.push(o)
        }
        return t.join("")
    }
    const ee = Object.freeze({
        LIVERAMP: "LIVERAMP",
        FACEBOOK: "FACEBOOK",
        PAIR_ID: "PAIR_ID"
    })
      , te = Object.freeze({
        LIVERAMP: "_lr_env",
        FACEBOOK: "_lr_fb_env",
        PAIR_ID: "_lr_pairId"
    })
      , ne = Object.freeze({
        LIVERAMP: 19,
        FACEBOOK: 24,
        PAIR_ID: 25
    })
      , re = {
        method: "GET",
        mode: "cors"
    }
      , oe = /(\+1)|[.]|[(]|[)]|[-]|[ ]/gi;
    async function ie(e) {
        try {
            const t = await fetch(e, re);
            if (t && 200 === t.status && null !== t.body)
                return t.json()
        } catch (e) {
            console.error("There has been a problem with your fetch operation: ", e)
        }
    }
    async function ae() {
        let e = B("_lr_geo_location");
        if ("" === e) {
            const t = await async function() {
                const e = await ie("https://geo.privacymanager.io/");
                if (e)
                    return e;
                console.error("Geo location is undefined or empty")
            }();
            e = t.country,
            j("_lr_geo_location_state", t.region, 86400),
            e && "" !== e || (e = "US"),
            j("_lr_geo_location", e, 86400)
        }
        return e
    }
    function se(e) {
        const t = new CustomEvent(e);
        window.dispatchEvent(t)
    }
    function ce(e, t) {
        let n = new Date;
        return n.setMonth(n.getMonth() - e),
        +n > 1e3 * t
    }
    async function ue(e, t) {
        const n = {
            method: "POST",
            headers: new Headers({
                "content-type": "application/json",
                Accept: "application/json"
            })
        };
        n.body = JSON.stringify(t);
        try {
            const t = await fetch(e, n);
            if (t && 200 === t.status)
                return t.json();
            throw new Error("Status code is not 200 ",t)
        } catch (e) {
            console.error("There has been a problem with HTTP POST method: ", e)
        }
    }
    function fe() {
        M(te.LIVERAMP),
        k(te.LIVERAMP),
        M(te.FACEBOOK),
        k(te.FACEBOOK),
        M(te.PAIR_ID),
        k(te.PAIR_ID),
        M("_lr_cached_events"),
        k("_lr_hashed_pid")
    }
    async function de(e, t, n) {
        if (n)
            if ("email" === t) {
                j("_lr_hashed_pid", await $(Z(e)), 1296e3)
            } else if ("phoneNumber" === t) {
                j("_lr_hashed_pid", await Y((r = e,
                r.replace(oe, ""))), 1296e3)
            } else if ("customerID" === t) {
                j("_lr_hashed_pid", await $(e.customerId), 1296e3)
            } else if ("emailHashes" === t)
                if (e instanceof Array) {
                    let t = function(e) {
                        for (let t in e)
                            if (64 === e[t].length)
                                return e[t].length;
                        for (let t in e)
                            if (40 === e[t].length)
                                return e[t].length
                    }(e);
                    t && j("_lr_hashed_pid", t, 1296e3)
                } else
                    j("_lr_hashed_pid", e, 1296e3);
        var r
    }
    let le, pe = [{
        countryCode: "AR",
        optOutRegion: "EU"
    }, {
        countryCode: "AU",
        optOutRegion: "AP"
    }, {
        countryCode: "BE",
        optOutRegion: "EU"
    }, {
        countryCode: "BR",
        optOutRegion: "EU"
    }, {
        countryCode: "CA",
        optOutRegion: "US"
    }, {
        countryCode: "FR",
        optOutRegion: "EU"
    }, {
        countryCode: "DE",
        optOutRegion: "EU"
    }, {
        countryCode: "GB",
        optOutRegion: "EU"
    }, {
        countryCode: "IT",
        optOutRegion: "EU"
    }, {
        countryCode: "JP",
        optOutRegion: "AP"
    }, {
        countryCode: "MX",
        optOutRegion: "US"
    }, {
        countryCode: "NL",
        optOutRegion: "EU"
    }, {
        countryCode: "NZ",
        optOutRegion: "AP"
    }, {
        countryCode: "PL",
        optOutRegion: "EU"
    }, {
        countryCode: "RO",
        optOutRegion: "EU"
    }, {
        countryCode: "SG",
        optOutRegion: "AP"
    }, {
        countryCode: "ES",
        optOutRegion: "EU"
    }, {
        countryCode: "TW",
        optOutRegion: "AP"
    }, {
        countryCode: "US",
        optOutRegion: "US"
    }, {
        countryCode: "IN",
        optOutRegion: "AP"
    }, {
        countryCode: "HK",
        optOutRegion: "AP"
    }];
    async function be(e, t) {
        const n = B("_lr_optout");
        if ("" === n) {
            if (le) {
                let t = "https://" + le + "/publisher/opt-outs";
                const n = await async function(e, t) {
                    const n = await ie(e + "/" + t);
                    return console.log(n),
                    n
                }(t, e);
                return n && n.timestamp ? (j("_lr_optout", n.timestamp, 1296e3),
                fe(),
                ce(13, n.timestamp) && se("lr-optInEvent"),
                !0) : !(!n || !n.message) && (j("_lr_optout", "/", 1296e3),
                !1)
            }
            return !1
        }
        return "/" !== n && (ce(13, n) && se("lr-optInEvent"),
        !0)
    }
    function he(e) {
        e && e.metadata && e.metadata.timestamp && (j("_lr_optout", e.metadata.timestamp, 1296e3),
        fe())
    }
    const ye = /(^[a-f0-9]{32}$)|(^[a-f0-9]{40}$)|(^[a-f0-9]{64}$)/
      , ge = ["cfcd208495d565ef66e7dff9f98764da", "2f43b42fd833d1e77420a8dae7419000", "7215ee9c7d9dc229d2921a40e899ec5f", "3d407cbd539c1f1f4b436169c9f5e1a3", "07e541ee7ffe448eae004c08a59dd91b", "852438d026c018c4307b916406f98c62", "4da8b7eb2c3f2007cf8238334401ef51", "334c4a4c42fdb79d7ebc3e73b517e6f8", "6adf97f83acf6453d4a6a4b1070f3754", "bbb93ef26e3c101ff11cdd21cab08a94", "37a6259cc0c1dae299a7866489dff0bd", "8589033c2cd15744c3ce30d1bddeb087", "93942e96f5acd83e2e047ad8fe03114d", "55502f40dc8b7c769880b10874abc9d0", "1aedb8d9dc4751e229a335e371db8058", "8d89c3087cc6cb98793ab7c0f5658c56", "97dfebf4098c0f5c16bca61e2b76c373", "476869598e748d958e819c180af31982", "ef8ca1c0ff7d2e34dc0953d4222655b8", "eca74378f20815070e1bec3ee81bfabc", "88e478531ab3bc303f1b5da82c2e9bbb", "8c3fe1ad25e6d5f47512ea7365419966", "9ad574806427070b94735f216e9abdc1", "ad16f2226a41423949f2c6d400bbc5d7", "3d751a0c27cbe4cd47f1fe09352c24fb", "799dd2047247877f2da2158fd61e25b6", "348bec5913e8550419c565d84ef92e52", "5beba8117bb43bde25beb24b58412183", "348bec5913e8550419c565d84ef92e52", "5beba8117bb43bde25beb24b58412183", "a18bf786efb76a3d56ee69a3b343952a", "86b5735c643e34006dfc421030e5d211", "5e543256c480ac577d30f76f9120eb74", "ec0fc0100c4fc1ce4eea230c3dc10360", "b58996c504c5638798eb6b511e6f49af", "946003f97ccc52d5d3b54ac0ec31bbfc", "b6589fc6ab0dc82cf12099d1c2d40ab994e8410c", "6eae3a5b062c6d0d79f070c26e6d62486b40cb46", "b858cb282617fb0956d960215c8e84d1ccf909c6", "4cefae8c39427da6c5d65b35f34211656e091b97", "27386f29c24918f7635a238a804215ae154a9d0b", "b5366a2d2ac98dae978423083f8b09e5cddc705d", "c916da70cd4a32512ca71d70e5cc765d00357df4", "71f8e7976e4cbc4561c9d62fb283e7f788202acb", "6eef6648406c333a4035cd5e60d0bf2ecf2606d7", "109085beaaa80ac89858b283a64f7c75d7e5bb12", "2be88ca4242c76e8253ac62474851065032d6833", "7e05143b040cbe5768da6abe82229f08c0f977d5", "f7a36129f691baa1201d963b8537eb69caa28863", "567159d622ffbb50b11b0efd307be358624a26ee", "ea97b75619f5cb2b9df9d184c4541aafe3b87484", "22d002c0a1d1f181dcbd75573e18de5af0eab43d", "52e17b67fd82b0545bb4fbdc5748ed23104133c7", "624ddbfecf6c492001bd3660870958cb84120ff9", "4ad6658bbc6700c113fe12acaa77ebf4d00f7cf5", "1245282959d9e21d2c2033fff63b765b6805b483", "49eb577150e21ee3180224a011edfc310acc3779", "ca7fe1db6188a235dabc9c1457d82e636b11a543", "b9f87d81ccb9795c4a8b82055610334e3881ca80", "dcf608cc7daaf155d54aad5b16f10f102bc2cab7", "0a75e7e26ee11630e8090f43a7a36ab283e7bd79", "2ebc7ba1d181ae807a36734904d5506dae4599d1", "7ee99aec60d570c612b86f417c579ce6c0d28799", "849f789f32f74696f4e5a2e3ca999db468d11cc4", "79cc65d586f548f71229672ca3455a754c13e44d", "e62f22de243201afe4303ebd42984f10f77eb983", "d5d4cd07616a542891b7ec2d0257b3a24b69856e", "0646f4afd90c8fdb87bbcb57b63ee1911f5a9a46", "63a710569261a24b3766275b7000ce8d7b32e2f7", "0ed2d7b5cdb77627bc46c6fac5026ec27b694d42", "5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9", "ab5df625bc76dbd4e163bed2dd888df828f90159bb93556525c31821b6541d46", "36a9e7f1c95b82ffb99743e0c5c4ce95d83c9a430aac59f84ef3cbfab6145068", "c6f62b06b3cd95ac3cc5b6aba2b157283273febc7d62fd3785d9f14737128166", "e40ff7f3a562b8757869d839b578d56390dd68e1cc28bf9b6d5362bc717e1c90", "5da3a4c7f117944275b4c8629c4916403625d5a4a6573a01ecb03f0e9d2edbe6", "e118b5c29cb4b975251601a6cc3209a4ea3eb0b429b205b679a8645da47da654", "140bedbf9c3f6d56a9846d2ba7088798683f4da0c248231336e6a05679e4fdfe", "dc937b59892604f5a86ac96936cd7ff09e25f18ae6b758e8014a24c7fa039e91", "fa1d2db62d4d952e2031452e1bc1ddcad0b192c2e29a706f11ce426ae5acddea", "74234e98afe7498fb5daf1f36ac2d78acc339464f950703b8c019892f982b90b", "f320794388bf29dabc846c54fe7ff28f78fc3bc3c13748783335a9bf33440d55", "73062d872926c2a556f17b36f50e328ddf9bff9d403939bd14b6c3b7f5a33fc2", "973dfe463ec85785f5f95af5ba3906eedb2d931c24e69824a89ea65dba4e813b", "87924606b4131a8aceeeae8868531fbb9712aaa07a5d3a756b26ce0f5d6ca674", "f080ca14e0e21e303b60a69e20be89fb3a682f8721b922823fcffcb108bb1363", "f0e2a21bcf499cbc713c47d8f034d66e90a99f9ffcfe96466c9971dfdc5c9816", "f303cf025f54905caca8788d2c7070d47fb49eb6515b7d886d3305a4f10396f9", "1f9e575ad4234c30a81d30c70affd4bba7b0d57d8e8607ad255496863d72c8bb", "587d4c12fef06af41f2fdfa19a3e68443bf8a7923b47cb75022481f8d77552ad", "e85bbf307aedebc91b078f5bc1ebd50d72e7494ffd85f32184688bfd032c3271", "66067ef9e155e39767ab7da916d84ee8ff70efe1459b4c0808fc776d52d85848", "944653ca1e1968fc3f9a0137faad3df546ac6065e1bd95e896ad69200dbe449c", "fe83e987766f25a7132fb9f45bc9620374568405a6a2b9d275d88f5042a8dc9b", "920c46ed756bcc1ea8f70cc90a59584efa6b2b6b5d394ca323dafd5ffce25a4c", "65c85ffcc43d86169bc4cc7c49a71fa505ddf863ba4a2af6cfaf1adbc0fd5d47", "bb8db4111f03c65c52df77d8d6963b7aee7b28bd8fd4eae61ead6e824770490e", "109fe15ff056d9cf6b5f4fa2be71da6db3308190149ae6d5eee2f5905a88fde9", "dae9c7c55697ba170d6b494c458649bd469af525520280d0dcfc98d74d13b17e", "b1bc5cb7473bd88caf80e991de2067f4b00dd25b0923f6c2eb57d18d79391399", "eb045d78d273107348b0300c01d29b7552d622abbc6faf81b3ec55359aa9950c", "f02dfb7da82a40b055700e27ce61e0b3ad10985137f721e7a2c62b3dc3fbaf31", "b4c9a289323b21a01c3e940f150eb9b8c542587f1abfd8f0e1cc1ffc5e475514", "4e523a5ae5b4636c75901b79fafbd3912e41dc7987414e688b09d4b436ff22b3"];
    function me(e) {
        return ye.test(e) && -1 === ge.indexOf(e)
    }
    function ve(e, t) {
        32 === t.length ? e.md5Email = t : 40 === t.length ? "phoneNumber" === D.urlHashType ? e.phoneNumber = t : e.sha1Email = t : 64 === t.length && (e.sha256Email = t)
    }
    function we() {
        return navigator.vendor.includes("Apple")
    }
    async function Ae(e) {
        const t = new CustomEvent(e);
        window.dispatchEvent(t)
    }
    const Se = /(^((\+1)?)([\s.-]?)?[(]?[2-9][0-9][0-9][)]?[(\s)?.-]?[2-9][0-9][0-9][\s.-]?\d{4}$)/
      , Ee = /(\+1)|[.]|[(]|[)]|[-]|[ ]/gi;
    async function Ce(e) {
        if ("string" != typeof e && (e += ""),
        function(e) {
            return Se.test(e.trim(e))
        }(e)) {
            if (I.debug("We detected phone number: " + e),
            e = function(e) {
                return e.replace(Ee, "")
            }(e),
            e = await Y(e),
            D.pubOptout) {
                if (await be(e, D.countryCode))
                    return I.debug("User has enabled optout. Envelope will be deleted and library will stop."),
                    fe(),
                    "opted_out"
            }
            if (await Me())
                return;
            const t = {
                phoneNumber: e
            };
            I.debug("New Envelope will be acquired."),
            Te(t, D.placementID)
        } else
            I.debug("Phone number is invalid")
    }
    const xe = "https://api.rlcdn.com/api/identity/v2/envelope";
    let Oe = !1;
    async function Te(e, t) {
        const n = D.customerID && D.accountID ? "&it=15&iv=" + D.accountID + ":" + D.customerID : (e.sha256Email ? "&it=4&iv=" + e.sha256Email : "") + (e.sha1Email ? "&it=4&iv=" + e.sha1Email : "") + (e.md5Email ? "&it=4&iv=" + e.md5Email : "") + (e.phoneNumber ? "&it=11&iv=" + e.phoneNumber : "")
          , r = (D.ccpaConsentString ? "&ct=3&cv=" + encodeURIComponent(D.ccpaConsentString) : "") + (D.gdprConsentString ? "&ct=4&cv=" + D.gdprConsentString : "")
          , o = xe + "?pid=" + t + n + r;
        await _e(o)
    }
    async function _e(e, t) {
        if (D.testMode) {
            const e = "MOCKED_ENVELOPE";
            I.debug("New mocked envelope: ", e);
            Ie(Pe(e))
        } else
            try {
                const n = await ie(e);
                n && n.envelopes && n.envelopes.length > 0 ? n.envelopes.filter(e=>e).forEach(e=>{
                    if (e.type !== ne.LIVERAMP || void 0 !== t && t !== ee.LIVERAMP)
                        if (e.type !== ne.FACEBOOK || void 0 !== t && t !== ee.FACEBOOK) {
                            if (e.type === ne.PAIR_ID && (void 0 === t || t === ee.PAIR_ID) && D.usePAIR) {
                                const t = Pe(JSON.parse(atob(e.value)));
                                I.debug("Encoded PAIR ID envelope: ", JSON.stringify(t)),
                                Ie(t, ee.PAIR_ID)
                            }
                        } else if (e.err)
                            I.error("Facebook envelope error: ", e.err);
                        else if (e.value && "" !== e.value) {
                            const t = Pe(e.value);
                            I.debug("Encoded facebook envelope: ", JSON.stringify(t)),
                            Ie(t, ee.FACEBOOK)
                        } else
                            I.error("Envelope retrieved from API is undefined or empty");
                    else if (e.err)
                        I.error("Liveramp envelope error: ", e.err);
                    else if (e.value && "" !== e.value) {
                        const t = Pe(e.value);
                        I.debug("Encoded liveramp envelope: ", JSON.stringify(t)),
                        Ie(t)
                    } else
                        I.error("Envelope retrieved from API is undefined or empty")
                }
                ) : I.error("Envelope retrieved from API is undefined or empty")
            } catch (e) {
                I.error("Error from envelope API: ", e)
            }
    }
    function Pe(e) {
        const t = {
            timestamp: +new Date,
            version: "1.1.5",
            envelope: e
        };
        return btoa(JSON.stringify(t))
    }
    function Ie(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee.LIVERAMP;
        "cookie" === D.storageType ? Oe ? j(te[t], e, 31536e3, "/", D.rootDomain) : j(te[t], e) : L(te[t], e),
        t === ee.LIVERAMP ? Ae("lrEnvelopePresent") : Ae("fbEnvelopePresent")
    }
    async function Re() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ee.LIVERAMP
          , t = void 0;
        const n = Be(e);
        if (void 0 === n || "" === n)
            I.debug("There is no envelope in storage.");
        else
            try {
                JSON.parse(atob(n)).timestamp + 2592e6 < +new Date ? ke() : t = atob(n)
            } catch (e) {
                I.error("Envelope is invalid: " + e),
                ke()
            }
        return t
    }
    async function De(e) {
        let t, n, r;
        if (e ? t = await async function(e) {
            if (X(e = Z(e))) {
                const t = {
                    sha256Email: await $(e),
                    sha1Email: await Y(e),
                    md5Email: await z(e)
                };
                return "" === t.sha1Email && delete t.sha1Email,
                "" === t.sha256Email && delete t.sha256Email,
                t
            }
        }(e) : D.emailHashes && (n = function() {
            const e = {};
            if (!D.email && D.emailHashes)
                return D.emailHashes[0] && (me(D.emailHashes[0]) ? ve(e, D.emailHashes[0]) : I.debug(D.emailHashes[0] + " is invalid hash")),
                D.emailHashes[1] && (me(D.emailHashes[1]) ? ve(e, D.emailHashes[1]) : I.debug(D.emailHashes[1] + " is invalid hash")),
                D.emailHashes[2] && (me(D.emailHashes[2]) ? ve(e, D.emailHashes[2]) : I.debug(D.emailHashes[2] + " is invalid hash")),
                JSON.stringify(e) !== JSON.stringify({}) ? (I.debug("At least one hash is valid."),
                e) : void I.debug("All passed hashes are invalid.")
        }(),
        n && (t = n)),
        !t && !D.customerID)
            return void I.debug("Encrypted Emails are missing!");
        if (-1 === D.placementID && !D.testMode)
            return void I.debug("PlacementID is set to -1, ATS API wont be called!");
        if (r = D.customerID ? await $(D.customerID) : t.sha256Email,
        D.pubOptout) {
            if (await be(r, D.countryCode))
                return I.debug("User has enabled optout. Envelope will be deleted and library will stop."),
                void fe()
        }
        await Me() || Te(t, D.placementID)
    }
    async function je() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ee.LIVERAMP
          , t = Be(e);
        if (void 0 === t || "" === t)
            return I.debug(e + " envelope not found in storage! New envelope will be acquired."),
            "new_envelope";
        try {
            return t = JSON.parse(atob(t)),
            D.testMode || "MOCKED_ENVELOPE" !== t.envelope ? t.timestamp + D.expirationTime < +new Date ? "new_envelope" : t.timestamp + 2592e6 < +new Date || t.timestamp + D.expirationRefreshTime < +new Date ? "expired" : "not_expired" : (I.debug("Deleting mocked envelope"),
            ke(),
            "new_envelope")
        } catch (t) {
            return I.error(e + " envelope is invalid: " + t),
            ke(),
            "new_envelope"
        }
    }
    function Be() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ee.LIVERAMP;
        if ("cookie" === D.storageType) {
            const t = B(te[e]);
            return we() && (Oe ? j(te[e], t, 31536e3, "/", D.rootDomain) : j(te[e], t)),
            t
        }
        return U(te[e])
    }
    async function ke() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ee.LIVERAMP;
        k(te[e]),
        M(te[e]),
        k("_lr_hashed_pid")
    }
    async function Le() {
        if (D.pubOptout) {
            const e = B("_lr_hashed_pid");
            if ("" === e)
                I.debug("There is no saved encrypted identifier.");
            else {
                I.debug("Encrypted identifier found.");
                if (await be(e, D.countryCode))
                    return I.debug("User has enabled optout. Envelope will be deleted and library will stop."),
                    void fe();
                if (await Me())
                    return
            }
        } else {
            if (await Me())
                return
        }
        var e;
        We || !D.startWithExternalId || D.catchIdentifier || D.regManagerMode ? !We && D.regManagerMode && D.startWithExternalId ? I.debug("Envelope module is in registration manager mode. Stoping the flow until identifier is passed.") : (Xe(!0),
        I.info("Envelope-module is configured."),
        D.customerID && D.accountID ? (I.debug("Customer id: ", D.customerID),
        I.debug("Account id: ", D.accountID),
        e = D.customerID,
        D.customerIDRegex && new RegExp(D.customerIDRegex).test(e) ? De() : I.error("CustomerID is not valid!")) : D.email ? (I.debug("Config email: ", D.email),
        X(D.email) ? De(D.email) : I.error("Config email is not valid!")) : D.phoneNumber ? (I.debug("Config phone number: ", D.phoneNumber),
        Ce(D.phoneNumber)) : D.emailHashes ? (I.debug("Config hashes: " + D.emailHashes),
        De()) : D.catchIdentifier && (I.info("Catching identifier configured."),
        window.addEventListener("detected-identifier", Ue, !1))) : I.debug("Envelope module is in direct mode. Stoping the flow until identifier is passed.")
    }
    function Ue(e) {
        if (!1 !== qe)
            if (I.debug("Identifier caught from detection:  - ", e.detail.identifier),
            "email" === e.detail.type)
                De(e.detail.identifier);
            else if ("phoneNumber" === e.detail.type)
                Ce(e.detail.identifier);
            else if ("customerID" === e.detail.type)
                D.accountID = e.detail.identifier.accountId,
                D.customerID = e.detail.identifier.customerId,
                De();
            else if ("envelope" === e.detail.type) {
                let t;
                try {
                    t = JSON.parse(e.detail.identifier).envelope
                } catch (n) {
                    t = e.detail.identifier
                }
                Ie(Pe(t))
            } else
                "SHA256Hash" !== e.detail.type && "SHA1Hash" !== e.detail.type && "MD5Hash" !== e.detail.type || (D.emailHashes = [e.detail.identifier],
                De());
        else
            I.debug("No consent has been given, library will shutdown!")
    }
    async function Me() {
        const e = [je(ee.LIVERAMP), window.fbcapimodule ? je(ee.FACEBOOK) : null]
          , t = await Promise.all(e);
        let n = !1;
        if (!t.includes("new_envelope")) {
            n = !0;
            let e = "";
            t[0] && "expired" === t[0] && (I.debug("LR envelope has expired!"),
            e = Ve(e, ee.LIVERAMP)),
            t[0] && "not_expired" === t[0] && (I.debug("LR envelope did not expire!"),
            Ae("lrEnvelopePresent")),
            t[1] && "expired" === t[1] && (I.debug("FB envelope has expired!"),
            e = Ve(e, ee.FACEBOOK)),
            t[1] && "not_expired" === t[1] && (I.debug("FB envelope did not expire!"),
            Ae("fbEnvelopePresent")),
            e && (e += (D.ccpaConsentString ? "&ct=3&cv=" + encodeURIComponent(D.ccpaConsentString) : "") + (D.gdprConsentString ? "&ct=4&cv=" + D.gdprConsentString : ""),
            await _e(e))
        }
        return n
    }
    function Ve(e, t) {
        let n = Be(t);
        return n = JSON.parse(atob(n)).envelope,
        0 === e.length ? e = xe + "/refresh?pid=" + D.placementID + "&it=" + ne[t] + "&iv=" + n : e += "&it=" + ne[t] + "&iv=" + n,
        e
    }
    var He = n(53);
    const Ne = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB"]
      , Ke = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    function Fe(e) {
        if (!e)
            return;
        const t = function(e) {
            try {
                return new He.TCStringV2(e)
            } catch (e) {
                console.error("Failed to decode consent string: " + e)
            }
        }(e);
        return void 0 !== t ? function(e) {
            if (!e.core || -1 === e.core.vendorsConsent.indexOf(97))
                return !1;
            for (let t = 0; t < Ke.length; t++)
                if (-1 === e.core.purposesConsent.indexOf(Ke[t]))
                    return !1;
            return !0
        }(t) : void 0
    }
    function Ge(e) {
        if (D.expirationTime = 2592e6,
        "US" === e) {
            "CA" === B("_lr_geo_location_state") && (D.expirationTime = 1296e6),
            D.gdprConsentString = void 0,
            I.debug("User is in the US"),
            window.__uspapi ? (I.debug("CCPA library is present"),
            __uspapi("getUSPData", 1, (e,t)=>{
                if (null === e.uspString)
                    return I.debug("User did not interact with consent manager."),
                    Le();
                t && function(e, t, n, r) {
                    if (4 !== e.length)
                        return r("CCPA consent string is not 4 characters long!"),
                        !1;
                    const o = e.split("")[2];
                    return "Y" === o ? (n("User didn't give consent. Library will shut down."),
                    t.ccpaConsentString = void 0,
                    !1) : ("N" === o ? (n("User gave consent"),
                    t.ccpaConsentString = e) : "-" === o && (n("CCPA doesnt apply to this user"),
                    t.ccpaConsentString = void 0),
                    !0)
                }(e.uspString, D, I.debug, I.error) ? Le() : (I.debug("No consent has been given, envelope will be removed and library will shutdown!"),
                fe())
            }
            )) : Le()
        } else
            !function(e) {
                return Ne.includes(e)
            }(e) ? (I.info("Location of the user is NOT in country that has GDPR or CCPA regulation!"),
            D.ccpaConsentString = void 0,
            D.gdprConsentString = void 0,
            Le()) : (window.__tcfapi && __tcfapi("addEventListener", 2, Ze),
            D.ccpaConsentString = void 0,
            I.info("Location of the user is in country that has GDPR regulation!"),
            window.__tcfapi ? __tcfapi("getTCData", null, (e,t)=>{
                if (t) {
                    const t = Fe(e.tcString);
                    void 0 === t ? I.debug("ATS is loaded before user interacted with CMP. Library will shutdown!") : !1 === t ? (I.debug("Consent was rejected. Envelope will be removed and library will shutdown!"),
                    fe()) : !0 === t && (D.gdprConsentString = e.tcString,
                    I.debug("Consent has been given, library will start!"),
                    Le())
                } else
                    I.debug("Failed to get consent data. Library will shutdown!")
            }
            ) : I.debug("CMP is not present. Library will shutdown."))
    }
    let qe, Je = !1, We = !1;
    async function ze(e) {
        return D.update(e),
        D.gdprConsentString = void 0,
        D.ccpaConsentString = void 0,
        D.testMode && (I.debug("Test mode enabled."),
        D.logging = "debug"),
        function() {
            let e;
            try {
                e = new URL(window.location.href).searchParams.get("ats_debug")
            } catch (e) {
                I.debug("Creating URL object failed: " + e)
            }
            "true" === e ? (D.logging = "debug",
            I.debug("Debug mode enabled.")) : "false" === e && (D.logging = void 0,
            I.debug("Debug mode disabled."))
        }(),
        window.navigator.globalPrivacyControl ? (I.debug("GPC is enabled. Envelope will be deleted and envelope module will shutdown."),
        void fe()) : function() {
            const e = window.doNotTrack || window.navigator.doNotTrack || window.navigator.msDoNotTrack;
            return !!e && ("1" === e.charAt(0) || "yes" === e)
        }() ? (I.debug("Do Not Track is enabled. Envelope will be deleted and envelope module will shutdown."),
        void fe()) : (D.rootDomain && function(e, t) {
            let n = e.split(".")
              , r = t.split(".");
            for (let e = n.length - 1, t = r.length - 1; e > -1; e--,
            t--)
                if (n[e] !== r[t])
                    return void I.error("Passed root domain is invalid!");
            Oe = !0
        }(D.rootDomain, window.location.hostname),
        window.addEventListener("message", Ye, !1),
        window.addEventListener("message", Qe, !1),
        I.debug("ats-set-additional-data event set up."),
        D.useESP && async function() {
            let e = await Re();
            e && (e = JSON.parse(e),
            e.envelope && (I.debug("Inserting secure signal provides script."),
            window.googletag = window.googletag || {
                cmd: []
            },
            window.googletag.secureSignalProviders = window.googletag.secureSignalProviders || [],
            window.googletag.secureSignalProviders.push({
                id: "liveramp.com",
                collectorFunction: ()=>Promise.resolve(e.envelope)
            })))
        }(),
        Ae("envelopeModuleReady"),
        void $e())
    }
    async function $e() {
        const e = await ae();
        D.countryCode = e,
        function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pe
              , n = arguments.length > 2 ? arguments[2] : void 0;
            for (let r in t)
                t[r].countryCode === e && (le = n.find(e=>e.includes(t[r].optOutRegion.toLowerCase())))
        }(e, D.placementCountries, D.configUrlList),
        Ge(e)
    }
    async function Ye(e) {
        if (e && e.source && e.data && "ats-modules-liveramp-envelope-request" === e.data) {
            let t = await Re();
            t ? (e.source.postMessage({
                message: "ats-modules-liveramp-envelope-result",
                result: t
            }, "*"),
            I.debug("ats-modules-liveramp-envelope-result postMessage dispatched!")) : (e.source.postMessage({
                message: "ats-modules-liveramp-envelope-result",
                result: void 0
            }, "*"),
            I.debug("There is no envelope!"))
        }
    }
    const Ze = (e,t)=>{
        if (t && "useractioncomplete" === e.eventStatus) {
            I.debug("User changed consent data!");
            const t = Fe(e.tcString);
            void 0 === t ? (I.debug("ATS is loaded before user interacted with CMP. Library will shutdown!"),
            qe = !1) : !1 === t ? (I.debug("Consent was rejected. Envelope will be removed and library will shutdown!"),
            qe = !1,
            fe()) : !0 === t && (qe = !0,
            D.gdprConsentString = e.tcString,
            I.debug("Consent has been given, library will start!"),
            Je || Le())
        }
    }
      , Xe = e=>{
        Je = e
    }
    ;
    async function Qe(e) {
        e && e.type && "message" === e.type && e.data && e.data["ats-set-additional-data"] && e.data["ats-set-additional-data"].detail && "set-additional-data" === e.data["ats-set-additional-data"].detail.eventName && e.data["ats-set-additional-data"].detail.identifier && (I.debug("setAdditionalDataEvent received data."),
        D.email = e.data["ats-set-additional-data"].detail.identifier,
        await de(D.email, "email", D.pubOptout),
        We = !0,
        $e())
    }
    const et = n(111);
    function tt(e) {
        ze(e)
    }
    function nt(e) {
        !async function(e) {
            if (e && e.id && e.type)
                if (!1 !== qe) {
                    if (e.type && e.id) {
                        if (!D.startWithExternalId)
                            return void I.error("The startWithExternalId flag is set to false");
                        switch (e.type) {
                        case "email":
                            D.email = e.id,
                            await de(e.id, e.type, D.pubOptout);
                            break;
                        case "phoneNumber":
                            D.phoneNumber = e.id,
                            await de(e.id, e.type, D.pubOptout);
                            break;
                        case "emailHashes":
                            D.emailHashes = e.id,
                            await de(e.id, e.type, D.pubOptout);
                            break;
                        case "customerID":
                            D.customerID = e.id,
                            await de(e.id, e.type, D.pubOptout);
                            break;
                        default:
                            return void I.error(`The "${e.type}" value of type parameter is not in right format. Has to be one of: email, phoneNumber, emailHashes or customerID`)
                        }
                    }
                    We = !0,
                    $e()
                } else
                    I.debug("Consent was not given. Passing identifier will not be allowed.");
            else
                I.error("Data object is empty")
        }(e)
    }
    async function rt(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee.LIVERAMP
          , n = Object.values(te).indexOf(t);
        -1 !== n && (t = Object.keys(ee)[n]);
        const r = await Re(t);
        return e ? e(r) : r
    }
    function ot(e) {
        const t = {
            ENVELOPE_MODULE_VERSION: et.version,
            ENVELOPE_MODULE_CONFIG: JSON.parse(JSON.stringify(D))
        };
        if (!e)
            return t;
        e(t)
    }
    function it() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ee.LIVERAMP;
        ke(e)
    }
    function at(e, t) {
        !async function(e, t, n) {
            let r = "";
            if (!n.pubOptout)
                return void console.error("ATS: Pub opt out disabled");
            if (!le)
                return void console.error("ATS: Missing opt-out url!");
            let o = "https://" + le + "/publisher/opt-outs";
            switch (t) {
            case "email":
                return r = await ue(o, {
                    opt_out_id: await $(e)
                }),
                void he(r);
            case "phoneNumber":
                return r = await ue(o, {
                    opt_out_id: await Y(e)
                }),
                void he(r);
            case "customerID":
                return r = await ue(o, {
                    opt_out_id: await $(e)
                }),
                void he(r);
            case "hash":
                r = await ue(o, {
                    opt_out_id: e
                }),
                he(r)
            }
        }(e, t, D)
    }
    function st() {
        !async function(e) {
            if (!e.pubOptout)
                return void console.error("ATS: Pub opt out disabled");
            let t = "https://" + le + "/publisher/opt-outs"
              , n = B("_lr_hashed_pid");
            n ? he(await ue(t, {
                opt_out_id: n
            })) : console.info("ATS: Missing identifier in storage!")
        }(D)
    }
}
]);
window.atsenvelopemodule.start({
    "placementID": "13669",
    "storageType": "cookie",
    "logging": "debug",
    "regManagerMode": false,
    "accountID": "-1",
    "catchIdentifier": true,
    "startWithExternalId": true,
    "testMode": false,
    "useESP": false,
    "usePAIR": false,
    "placementCountries": [{
        "checked": false,
        "countryName": "USA",
        "optOutRegion": "US",
        "countryCode": "US"
    }, {
        "checked": false,
        "countryName": "Italy",
        "optOutRegion": "EU",
        "countryCode": "IT"
    }, {
        "checked": false,
        "countryName": "Brazil",
        "optOutRegion": "EU",
        "countryCode": "BR"
    }, {
        "checked": false,
        "countryName": "Indonesia",
        "optOutRegion": "AP",
        "countryCode": "IN"
    }, {
        "checked": false,
        "countryName": "Great Britain",
        "optOutRegion": "EU",
        "countryCode": "GB"
    }, {
        "checked": false,
        "countryName": "Japan",
        "optOutRegion": "AP",
        "countryCode": "JP"
    }, {
        "checked": false,
        "countryName": "Mexico",
        "optOutRegion": "US",
        "countryCode": "MX"
    }, {
        "checked": false,
        "countryName": "Argentina",
        "optOutRegion": "EU",
        "countryCode": "AR"
    }, {
        "checked": false,
        "countryName": "Belgium",
        "optOutRegion": "EU",
        "countryCode": "BE"
    }, {
        "checked": false,
        "countryName": "Australia",
        "optOutRegion": "AP",
        "countryCode": "AU"
    }, {
        "checked": false,
        "countryName": "Romania",
        "optOutRegion": "EU",
        "countryCode": "RO"
    }, {
        "checked": false,
        "countryName": "Netherlands",
        "optOutRegion": "EU",
        "countryCode": "NL"
    }, {
        "checked": false,
        "countryName": "Germany",
        "optOutRegion": "EU",
        "countryCode": "DE"
    }, {
        "checked": false,
        "countryName": "Singapore",
        "optOutRegion": "AP",
        "countryCode": "SG"
    }, {
        "checked": false,
        "countryName": "Hong Kong",
        "optOutRegion": "AP",
        "countryCode": "HK"
    }, {
        "checked": false,
        "countryName": "Taiwan",
        "optOutRegion": "AP",
        "countryCode": "TW"
    }, {
        "checked": false,
        "countryName": "France",
        "optOutRegion": "EU",
        "countryCode": "FR"
    }, {
        "checked": false,
        "countryName": "Spain",
        "optOutRegion": "EU",
        "countryCode": "ES"
    }, {
        "checked": false,
        "countryName": "Poland",
        "optOutRegion": "EU",
        "countryCode": "PL"
    }, {
        "checked": false,
        "countryName": "Canada",
        "optOutRegion": "US",
        "countryCode": "CA"
    }, {
        "checked": false,
        "countryName": "New Zealand",
        "optOutRegion": "AP",
        "countryCode": "NZ"
    }],
    "pubOptout": false
});
window.fbcapimodule = function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    return n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                n.d(r, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 112)
}([function(e, t, n) {
    (function(t) {
        var n = function(e) {
            return e && e.Math == Math && e
        };
        e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || function() {
            return this
        }() || Function("return this")()
    }
    ).call(this, n(23))
}
, function(e, t, n) {
    var r = n(26)
      , o = r.all;
    e.exports = r.IS_HTMLDDA ? function(e) {
        return "function" == typeof e || e === o
    }
    : function(e) {
        return "function" == typeof e
    }
}
, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}
, function(e, t, n) {
    var r = n(7)
      , o = Function.prototype
      , i = o.call
      , a = r && o.bind.bind(i, i);
    e.exports = r ? a : function(e) {
        return function() {
            return i.apply(e, arguments)
        }
    }
}
, function(e, t, n) {
    var r = n(3)
      , o = n(13)
      , i = r({}.hasOwnProperty);
    e.exports = Object.hasOwn || function(e, t) {
        return i(o(e), t)
    }
}
, function(e, t, n) {
    var r = n(2);
    e.exports = !r((function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    }
    ))
}
, function(e, t, n) {
    var r = n(1)
      , o = n(26)
      , i = o.all;
    e.exports = o.IS_HTMLDDA ? function(e) {
        return "object" == typeof e ? null !== e : r(e) || e === i
    }
    : function(e) {
        return "object" == typeof e ? null !== e : r(e)
    }
}
, function(e, t, n) {
    var r = n(2);
    e.exports = !r((function() {
        var e = function() {}
        .bind();
        return "function" != typeof e || e.hasOwnProperty("prototype")
    }
    ))
}
, function(e, t, n) {
    var r = n(5)
      , o = n(30)
      , i = n(58)
      , a = n(9)
      , s = n(32)
      , u = TypeError
      , c = Object.defineProperty
      , f = Object.getOwnPropertyDescriptor;
    t.f = r ? i ? function(e, t, n) {
        if (a(e),
        t = s(t),
        a(n),
        "function" == typeof e && "prototype" === t && "value"in n && "writable"in n && !n.writable) {
            var r = f(e, t);
            r && r.writable && (e[t] = n.value,
            n = {
                configurable: "configurable"in n ? n.configurable : r.configurable,
                enumerable: "enumerable"in n ? n.enumerable : r.enumerable,
                writable: !1
            })
        }
        return c(e, t, n)
    }
    : c : function(e, t, n) {
        if (a(e),
        t = s(t),
        a(n),
        o)
            try {
                return c(e, t, n)
            } catch (e) {}
        if ("get"in n || "set"in n)
            throw u("Accessors not supported");
        return "value"in n && (e[t] = n.value),
        e
    }
}
, function(e, t, n) {
    var r = n(6)
      , o = String
      , i = TypeError;
    e.exports = function(e) {
        if (r(e))
            return e;
        throw i(o(e) + " is not an object")
    }
}
, function(e, t, n) {
    var r = n(7)
      , o = Function.prototype.call;
    e.exports = r ? o.bind(o) : function() {
        return o.apply(o, arguments)
    }
}
, function(e, t, n) {
    var r = n(0)
      , o = n(38)
      , i = n(4)
      , a = n(20)
      , s = n(36)
      , u = n(35)
      , c = r.Symbol
      , f = o("wks")
      , l = u ? c.for || c : c && c.withoutSetter || a;
    e.exports = function(e) {
        return i(f, e) || (f[e] = s && i(c, e) ? c[e] : l("Symbol." + e)),
        f[e]
    }
}
, function(e, t, n) {
    var r = n(3)
      , o = r({}.toString)
      , i = r("".slice);
    e.exports = function(e) {
        return i(o(e), 8, -1)
    }
}
, function(e, t, n) {
    var r = n(27)
      , o = Object;
    e.exports = function(e) {
        return o(r(e))
    }
}
, function(e, t, n) {
    var r = n(0)
      , o = n(15)
      , i = r["__core-js_shared__"] || o("__core-js_shared__", {});
    e.exports = i
}
, function(e, t, n) {
    var r = n(0)
      , o = Object.defineProperty;
    e.exports = function(e, t) {
        try {
            o(r, e, {
                value: t,
                configurable: !0,
                writable: !0
            })
        } catch (n) {
            r[e] = t
        }
        return t
    }
}
, function(e, t, n) {
    var r = n(5)
      , o = n(8)
      , i = n(39);
    e.exports = r ? function(e, t, n) {
        return o.f(e, t, i(1, n))
    }
    : function(e, t, n) {
        return e[t] = n,
        e
    }
}
, function(e, t, n) {
    var r = n(0)
      , o = n(1)
      , i = function(e) {
        return o(e) ? e : void 0
    };
    e.exports = function(e, t) {
        return arguments.length < 2 ? i(r[e]) : r[e] && r[e][t]
    }
}
, function(e, t) {
    e.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
}
, function(e, t, n) {
    var r = n(1)
      , o = n(37)
      , i = TypeError;
    e.exports = function(e) {
        if (r(e))
            return e;
        throw i(o(e) + " is not a function")
    }
}
, function(e, t, n) {
    var r = n(3)
      , o = 0
      , i = Math.random()
      , a = r(1..toString);
    e.exports = function(e) {
        return "Symbol(" + (void 0 === e ? "" : e) + ")_" + a(++o + i, 36)
    }
}
, function(e, t, n) {
    var r = n(76);
    e.exports = function(e) {
        var t = +e;
        return t != t || 0 === t ? 0 : r(t)
    }
}
, function(e, t, n) {
    var r = n(82)
      , o = n(27);
    e.exports = function(e) {
        return r(o(e))
    }
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t, n) {
    var r = n(25)
      , o = n(8);
    e.exports = function(e, t, n) {
        return n.get && r(n.get, t, {
            getter: !0
        }),
        n.set && r(n.set, t, {
            setter: !0
        }),
        o.f(e, t, n)
    }
}
, function(e, t, n) {
    var r = n(3)
      , o = n(2)
      , i = n(1)
      , a = n(4)
      , s = n(5)
      , u = n(55).CONFIGURABLE
      , c = n(56)
      , f = n(29)
      , l = f.enforce
      , p = f.get
      , d = String
      , h = Object.defineProperty
      , y = r("".slice)
      , g = r("".replace)
      , v = r([].join)
      , b = s && !o((function() {
        return 8 !== h((function() {}
        ), "length", {
            value: 8
        }).length
    }
    ))
      , m = String(String).split("String")
      , w = e.exports = function(e, t, n) {
        "Symbol(" === y(d(t), 0, 7) && (t = "[" + g(d(t), /^Symbol\(([^)]*)\)/, "$1") + "]"),
        n && n.getter && (t = "get " + t),
        n && n.setter && (t = "set " + t),
        (!a(e, "name") || u && e.name !== t) && (s ? h(e, "name", {
            value: t,
            configurable: !0
        }) : e.name = t),
        b && n && a(n, "arity") && e.length !== n.arity && h(e, "length", {
            value: n.arity
        });
        try {
            n && a(n, "constructor") && n.constructor ? s && h(e, "prototype", {
                writable: !1
            }) : e.prototype && (e.prototype = void 0)
        } catch (e) {}
        var r = l(e);
        return a(r, "source") || (r.source = v(m, "string" == typeof t ? t : "")),
        e
    }
    ;
    Function.prototype.toString = w((function() {
        return i(this) && p(this).source || c(this)
    }
    ), "toString")
}
, function(e, t) {
    var n = "object" == typeof document && document.all
      , r = void 0 === n && void 0 !== n;
    e.exports = {
        all: n,
        IS_HTMLDDA: r
    }
}
, function(e, t, n) {
    var r = n(28)
      , o = TypeError;
    e.exports = function(e) {
        if (r(e))
            throw o("Can't call method on " + e);
        return e
    }
}
, function(e, t) {
    e.exports = function(e) {
        return null == e
    }
}
, function(e, t, n) {
    var r, o, i, a = n(57), s = n(0), u = n(6), c = n(16), f = n(4), l = n(14), p = n(40), d = n(41), h = s.TypeError, y = s.WeakMap;
    if (a || l.state) {
        var g = l.state || (l.state = new y);
        g.get = g.get,
        g.has = g.has,
        g.set = g.set,
        r = function(e, t) {
            if (g.has(e))
                throw h("Object already initialized");
            return t.facade = e,
            g.set(e, t),
            t
        }
        ,
        o = function(e) {
            return g.get(e) || {}
        }
        ,
        i = function(e) {
            return g.has(e)
        }
    } else {
        var v = p("state");
        d[v] = !0,
        r = function(e, t) {
            if (f(e, v))
                throw h("Object already initialized");
            return t.facade = e,
            c(e, v, t),
            t
        }
        ,
        o = function(e) {
            return f(e, v) ? e[v] : {}
        }
        ,
        i = function(e) {
            return f(e, v)
        }
    }
    e.exports = {
        set: r,
        get: o,
        has: i,
        enforce: function(e) {
            return i(e) ? o(e) : r(e, {})
        },
        getterFor: function(e) {
            return function(t) {
                var n;
                if (!u(t) || (n = o(t)).type !== e)
                    throw h("Incompatible receiver, " + e + " required");
                return n
            }
        }
    }
}
, function(e, t, n) {
    var r = n(5)
      , o = n(2)
      , i = n(31);
    e.exports = !r && !o((function() {
        return 7 != Object.defineProperty(i("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }
    ))
}
, function(e, t, n) {
    var r = n(0)
      , o = n(6)
      , i = r.document
      , a = o(i) && o(i.createElement);
    e.exports = function(e) {
        return a ? i.createElement(e) : {}
    }
}
, function(e, t, n) {
    var r = n(59)
      , o = n(33);
    e.exports = function(e) {
        var t = r(e, "string");
        return o(t) ? t : t + ""
    }
}
, function(e, t, n) {
    var r = n(17)
      , o = n(1)
      , i = n(34)
      , a = n(35)
      , s = Object;
    e.exports = a ? function(e) {
        return "symbol" == typeof e
    }
    : function(e) {
        var t = r("Symbol");
        return o(t) && i(t.prototype, s(e))
    }
}
, function(e, t, n) {
    var r = n(3);
    e.exports = r({}.isPrototypeOf)
}
, function(e, t, n) {
    var r = n(36);
    e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
}
, function(e, t, n) {
    var r = n(60)
      , o = n(2);
    e.exports = !!Object.getOwnPropertySymbols && !o((function() {
        var e = Symbol();
        return !String(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && r && r < 41
    }
    ))
}
, function(e, t) {
    var n = String;
    e.exports = function(e) {
        try {
            return n(e)
        } catch (e) {
            return "Object"
        }
    }
}
, function(e, t, n) {
    var r = n(63)
      , o = n(14);
    (e.exports = function(e, t) {
        return o[e] || (o[e] = void 0 !== t ? t : {})
    }
    )("versions", []).push({
        version: "3.30.1",
        mode: r ? "pure" : "global",
        copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE",
        source: "https://github.com/zloirock/core-js"
    })
}
, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}
, function(e, t, n) {
    var r = n(38)
      , o = n(20)
      , i = r("keys");
    e.exports = function(e) {
        return i[e] || (i[e] = o(e))
    }
}
, function(e, t) {
    e.exports = {}
}
, function(e, t, n) {
    var r = n(1)
      , o = n(8)
      , i = n(25)
      , a = n(15);
    e.exports = function(e, t, n, s) {
        s || (s = {});
        var u = s.enumerable
          , c = void 0 !== s.name ? s.name : t;
        if (r(n) && i(n, c, s),
        s.global)
            u ? e[t] = n : a(t, n);
        else {
            try {
                s.unsafe ? e[t] && (u = !0) : delete e[t]
            } catch (e) {}
            u ? e[t] = n : o.f(e, t, {
                value: n,
                enumerable: !1,
                configurable: !s.nonConfigurable,
                writable: !s.nonWritable
            })
        }
        return e
    }
}
, function(e, t, n) {
    var r = n(75);
    e.exports = function(e) {
        return r(e.length)
    }
}
, function(e, t, n) {
    var r = n(0)
      , o = n(45).f
      , i = n(16)
      , a = n(42)
      , s = n(15)
      , u = n(83)
      , c = n(91);
    e.exports = function(e, t) {
        var n, f, l, p, d, h = e.target, y = e.global, g = e.stat;
        if (n = y ? r : g ? r[h] || s(h, {}) : (r[h] || {}).prototype)
            for (f in t) {
                if (p = t[f],
                l = e.dontCallGetSet ? (d = o(n, f)) && d.value : n[f],
                !c(y ? f : h + (g ? "." : "#") + f, e.forced) && void 0 !== l) {
                    if (typeof p == typeof l)
                        continue;
                    u(p, l)
                }
                (e.sham || l && l.sham) && i(p, "sham", !0),
                a(n, f, p, e)
            }
    }
}
, function(e, t, n) {
    var r = n(5)
      , o = n(10)
      , i = n(81)
      , a = n(39)
      , s = n(22)
      , u = n(32)
      , c = n(4)
      , f = n(30)
      , l = Object.getOwnPropertyDescriptor;
    t.f = r ? l : function(e, t) {
        if (e = s(e),
        t = u(t),
        f)
            try {
                return l(e, t)
            } catch (e) {}
        if (c(e, t))
            return a(!o(i.f, e, t), e[t])
    }
}
, function(e, t, n) {
    var r, o, i, a, s = n(0), u = n(47), c = n(92), f = n(1), l = n(4), p = n(2), d = n(94), h = n(48), y = n(31), g = n(49), v = n(95), b = n(96), m = s.setImmediate, w = s.clearImmediate, A = s.process, S = s.Dispatch, x = s.Function, T = s.MessageChannel, C = s.String, E = 0, _ = {};
    p((function() {
        r = s.location
    }
    ));
    var O = function(e) {
        if (l(_, e)) {
            var t = _[e];
            delete _[e],
            t()
        }
    }
      , P = function(e) {
        return function() {
            O(e)
        }
    }
      , j = function(e) {
        O(e.data)
    }
      , B = function(e) {
        s.postMessage(C(e), r.protocol + "//" + r.host)
    };
    m && w || (m = function(e) {
        g(arguments.length, 1);
        var t = f(e) ? e : x(e)
          , n = h(arguments, 1);
        return _[++E] = function() {
            u(t, void 0, n)
        }
        ,
        o(E),
        E
    }
    ,
    w = function(e) {
        delete _[e]
    }
    ,
    b ? o = function(e) {
        A.nextTick(P(e))
    }
    : S && S.now ? o = function(e) {
        S.now(P(e))
    }
    : T && !v ? (a = (i = new T).port2,
    i.port1.onmessage = j,
    o = c(a.postMessage, a)) : s.addEventListener && f(s.postMessage) && !s.importScripts && r && "file:" !== r.protocol && !p(B) ? (o = B,
    s.addEventListener("message", j, !1)) : o = "onreadystatechange"in y("script") ? function(e) {
        d.appendChild(y("script")).onreadystatechange = function() {
            d.removeChild(this),
            O(e)
        }
    }
    : function(e) {
        setTimeout(P(e), 0)
    }
    ),
    e.exports = {
        set: m,
        clear: w
    }
}
, function(e, t, n) {
    var r = n(7)
      , o = Function.prototype
      , i = o.apply
      , a = o.call;
    e.exports = "object" == typeof Reflect && Reflect.apply || (r ? a.bind(i) : function() {
        return a.apply(i, arguments)
    }
    )
}
, function(e, t, n) {
    var r = n(3);
    e.exports = r([].slice)
}
, function(e, t) {
    var n = TypeError;
    e.exports = function(e, t) {
        if (e < t)
            throw n("Not enough arguments");
        return e
    }
}
, function(e, t) {
    function n(t) {
        return e.exports = n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports,
        n(t)
    }
    e.exports = n,
    e.exports.__esModule = !0,
    e.exports.default = e.exports
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0", n = "", r = 0; r < e; r += 1)
            n += t;
        return n
    }
    e.exports = {
        padLeft: function(e, t) {
            return r(Math.max(0, t)) + e
        },
        padRight: function(e, t) {
            return e + r(Math.max(0, t))
        },
        getMaxListElement: function(e) {
            var t = 0;
            return (e || []).forEach((function(e) {
                e > t && (t = e)
            }
            )),
            t
        }
    }
}
, function(e, t, n) {
    var r = n(102);
    e.exports = function(e, t, n) {
        return (t = r(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    ,
    e.exports.__esModule = !0,
    e.exports.default = e.exports
}
, function(e, t, n) {
    "use strict";
    var r = n(104).TCStringV2;
    e.exports = {
        TCStringV2: r
    }
}
, function(e, t, n) {
    var r = n(0)
      , o = n(5)
      , i = n(24)
      , a = n(64)
      , s = n(2)
      , u = r.RegExp
      , c = u.prototype;
    o && s((function() {
        var e = !0;
        try {
            u(".", "d")
        } catch (t) {
            e = !1
        }
        var t = {}
          , n = ""
          , r = e ? "dgimsy" : "gimsy"
          , o = function(e, r) {
            Object.defineProperty(t, e, {
                get: function() {
                    return n += r,
                    !0
                }
            })
        }
          , i = {
            dotAll: "s",
            global: "g",
            ignoreCase: "i",
            multiline: "m",
            sticky: "y"
        };
        for (var a in e && (i.hasIndices = "d"),
        i)
            o(a, i[a]);
        return Object.getOwnPropertyDescriptor(c, "flags").get.call(t) !== r || n !== r
    }
    )) && i(c, "flags", {
        configurable: !0,
        get: a
    })
}
, function(e, t, n) {
    var r = n(5)
      , o = n(4)
      , i = Function.prototype
      , a = r && Object.getOwnPropertyDescriptor
      , s = o(i, "name")
      , u = s && "something" === function() {}
    .name
      , c = s && (!r || r && a(i, "name").configurable);
    e.exports = {
        EXISTS: s,
        PROPER: u,
        CONFIGURABLE: c
    }
}
, function(e, t, n) {
    var r = n(3)
      , o = n(1)
      , i = n(14)
      , a = r(Function.toString);
    o(i.inspectSource) || (i.inspectSource = function(e) {
        return a(e)
    }
    ),
    e.exports = i.inspectSource
}
, function(e, t, n) {
    var r = n(0)
      , o = n(1)
      , i = r.WeakMap;
    e.exports = o(i) && /native code/.test(String(i))
}
, function(e, t, n) {
    var r = n(5)
      , o = n(2);
    e.exports = r && o((function() {
        return 42 != Object.defineProperty((function() {}
        ), "prototype", {
            value: 42,
            writable: !1
        }).prototype
    }
    ))
}
, function(e, t, n) {
    var r = n(10)
      , o = n(6)
      , i = n(33)
      , a = n(61)
      , s = n(62)
      , u = n(11)
      , c = TypeError
      , f = u("toPrimitive");
    e.exports = function(e, t) {
        if (!o(e) || i(e))
            return e;
        var n, u = a(e, f);
        if (u) {
            if (void 0 === t && (t = "default"),
            n = r(u, e, t),
            !o(n) || i(n))
                return n;
            throw c("Can't convert object to primitive value")
        }
        return void 0 === t && (t = "number"),
        s(e, t)
    }
}
, function(e, t, n) {
    var r, o, i = n(0), a = n(18), s = i.process, u = i.Deno, c = s && s.versions || u && u.version, f = c && c.v8;
    f && (o = (r = f.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
    !o && a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (o = +r[1]),
    e.exports = o
}
, function(e, t, n) {
    var r = n(19)
      , o = n(28);
    e.exports = function(e, t) {
        var n = e[t];
        return o(n) ? void 0 : r(n)
    }
}
, function(e, t, n) {
    var r = n(10)
      , o = n(1)
      , i = n(6)
      , a = TypeError;
    e.exports = function(e, t) {
        var n, s;
        if ("string" === t && o(n = e.toString) && !i(s = r(n, e)))
            return s;
        if (o(n = e.valueOf) && !i(s = r(n, e)))
            return s;
        if ("string" !== t && o(n = e.toString) && !i(s = r(n, e)))
            return s;
        throw a("Can't convert object to primitive value")
    }
}
, function(e, t) {
    e.exports = !1
}
, function(e, t, n) {
    "use strict";
    var r = n(9);
    e.exports = function() {
        var e = r(this)
          , t = "";
        return e.hasIndices && (t += "d"),
        e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.dotAll && (t += "s"),
        e.unicode && (t += "u"),
        e.unicodeSets && (t += "v"),
        e.sticky && (t += "y"),
        t
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(10)
      , i = n(66)
      , a = n(43)
      , s = n(77)
      , u = n(13)
      , c = n(2)
      , f = r.RangeError
      , l = r.Int8Array
      , p = l && l.prototype
      , d = p && p.set
      , h = i.aTypedArray
      , y = i.exportTypedArrayMethod
      , g = !c((function() {
        var e = new Uint8ClampedArray(2);
        return o(d, e, {
            length: 1,
            0: 3
        }, 1),
        3 !== e[1]
    }
    ))
      , v = g && i.NATIVE_ARRAY_BUFFER_VIEWS && c((function() {
        var e = new l(2);
        return e.set(1),
        e.set("2", 1),
        0 !== e[0] || 2 !== e[1]
    }
    ));
    y("set", (function(e) {
        h(this);
        var t = s(arguments.length > 1 ? arguments[1] : void 0, 1)
          , n = u(e);
        if (g)
            return o(d, this, n, t);
        var r = this.length
          , i = a(n)
          , c = 0;
        if (i + t > r)
            throw f("Wrong length");
        for (; c < i; )
            this[t + c] = n[c++]
    }
    ), !g || v)
}
, function(e, t, n) {
    "use strict";
    var r, o, i, a = n(67), s = n(5), u = n(0), c = n(1), f = n(6), l = n(4), p = n(68), d = n(37), h = n(16), y = n(42), g = n(24), v = n(34), b = n(70), m = n(72), w = n(11), A = n(20), S = n(29), x = S.enforce, T = S.get, C = u.Int8Array, E = C && C.prototype, _ = u.Uint8ClampedArray, O = _ && _.prototype, P = C && b(C), j = E && b(E), B = Object.prototype, k = u.TypeError, I = w("toStringTag"), R = A("TYPED_ARRAY_TAG"), U = a && !!m && "Opera" !== p(u.opera), L = !1, D = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8
    }, V = {
        BigInt64Array: 8,
        BigUint64Array: 8
    }, K = function(e) {
        var t = b(e);
        if (f(t)) {
            var n = T(t);
            return n && l(n, "TypedArrayConstructor") ? n.TypedArrayConstructor : K(t)
        }
    }, M = function(e) {
        if (!f(e))
            return !1;
        var t = p(e);
        return l(D, t) || l(V, t)
    };
    for (r in D)
        (i = (o = u[r]) && o.prototype) ? x(i).TypedArrayConstructor = o : U = !1;
    for (r in V)
        (i = (o = u[r]) && o.prototype) && (x(i).TypedArrayConstructor = o);
    if ((!U || !c(P) || P === Function.prototype) && (P = function() {
        throw k("Incorrect invocation")
    }
    ,
    U))
        for (r in D)
            u[r] && m(u[r], P);
    if ((!U || !j || j === B) && (j = P.prototype,
    U))
        for (r in D)
            u[r] && m(u[r].prototype, j);
    if (U && b(O) !== j && m(O, j),
    s && !l(j, I))
        for (r in L = !0,
        g(j, I, {
            configurable: !0,
            get: function() {
                return f(this) ? this[R] : void 0
            }
        }),
        D)
            u[r] && h(u[r], R, r);
    e.exports = {
        NATIVE_ARRAY_BUFFER_VIEWS: U,
        TYPED_ARRAY_TAG: L && R,
        aTypedArray: function(e) {
            if (M(e))
                return e;
            throw k("Target is not a typed array")
        },
        aTypedArrayConstructor: function(e) {
            if (c(e) && (!m || v(P, e)))
                return e;
            throw k(d(e) + " is not a typed array constructor")
        },
        exportTypedArrayMethod: function(e, t, n, r) {
            if (s) {
                if (n)
                    for (var o in D) {
                        var i = u[o];
                        if (i && l(i.prototype, e))
                            try {
                                delete i.prototype[e]
                            } catch (n) {
                                try {
                                    i.prototype[e] = t
                                } catch (e) {}
                            }
                    }
                j[e] && !n || y(j, e, n ? t : U && E[e] || t, r)
            }
        },
        exportTypedArrayStaticMethod: function(e, t, n) {
            var r, o;
            if (s) {
                if (m) {
                    if (n)
                        for (r in D)
                            if ((o = u[r]) && l(o, e))
                                try {
                                    delete o[e]
                                } catch (e) {}
                    if (P[e] && !n)
                        return;
                    try {
                        return y(P, e, n ? t : U && P[e] || t)
                    } catch (e) {}
                }
                for (r in D)
                    !(o = u[r]) || o[e] && !n || y(o, e, t)
            }
        },
        getTypedArrayConstructor: K,
        isView: function(e) {
            if (!f(e))
                return !1;
            var t = p(e);
            return "DataView" === t || l(D, t) || l(V, t)
        },
        isTypedArray: M,
        TypedArray: P,
        TypedArrayPrototype: j
    }
}
, function(e, t) {
    e.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
}
, function(e, t, n) {
    var r = n(69)
      , o = n(1)
      , i = n(12)
      , a = n(11)("toStringTag")
      , s = Object
      , u = "Arguments" == i(function() {
        return arguments
    }());
    e.exports = r ? i : function(e) {
        var t, n, r;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = s(e), a)) ? n : u ? i(t) : "Object" == (r = i(t)) && o(t.callee) ? "Arguments" : r
    }
}
, function(e, t, n) {
    var r = {};
    r[n(11)("toStringTag")] = "z",
    e.exports = "[object z]" === String(r)
}
, function(e, t, n) {
    var r = n(4)
      , o = n(1)
      , i = n(13)
      , a = n(40)
      , s = n(71)
      , u = a("IE_PROTO")
      , c = Object
      , f = c.prototype;
    e.exports = s ? c.getPrototypeOf : function(e) {
        var t = i(e);
        if (r(t, u))
            return t[u];
        var n = t.constructor;
        return o(n) && t instanceof n ? n.prototype : t instanceof c ? f : null
    }
}
, function(e, t, n) {
    var r = n(2);
    e.exports = !r((function() {
        function e() {}
        return e.prototype.constructor = null,
        Object.getPrototypeOf(new e) !== e.prototype
    }
    ))
}
, function(e, t, n) {
    var r = n(73)
      , o = n(9)
      , i = n(74);
    e.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
        var e, t = !1, n = {};
        try {
            (e = r(Object.prototype, "__proto__", "set"))(n, []),
            t = n instanceof Array
        } catch (e) {}
        return function(n, r) {
            return o(n),
            i(r),
            t ? e(n, r) : n.__proto__ = r,
            n
        }
    }() : void 0)
}
, function(e, t, n) {
    var r = n(3)
      , o = n(19);
    e.exports = function(e, t, n) {
        try {
            return r(o(Object.getOwnPropertyDescriptor(e, t)[n]))
        } catch (e) {}
    }
}
, function(e, t, n) {
    var r = n(1)
      , o = String
      , i = TypeError;
    e.exports = function(e) {
        if ("object" == typeof e || r(e))
            return e;
        throw i("Can't set " + o(e) + " as a prototype")
    }
}
, function(e, t, n) {
    var r = n(21)
      , o = Math.min;
    e.exports = function(e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0
    }
}
, function(e, t) {
    var n = Math.ceil
      , r = Math.floor;
    e.exports = Math.trunc || function(e) {
        var t = +e;
        return (t > 0 ? r : n)(t)
    }
}
, function(e, t, n) {
    var r = n(78)
      , o = RangeError;
    e.exports = function(e, t) {
        var n = r(e);
        if (n % t)
            throw o("Wrong offset");
        return n
    }
}
, function(e, t, n) {
    var r = n(21)
      , o = RangeError;
    e.exports = function(e) {
        var t = r(e);
        if (t < 0)
            throw o("The argument can't be less than 0");
        return t
    }
}
, function(e, t, n) {
    n(80),
    n(98)
}
, function(e, t, n) {
    var r = n(44)
      , o = n(0)
      , i = n(46).clear;
    r({
        global: !0,
        bind: !0,
        enumerable: !0,
        forced: o.clearImmediate !== i
    }, {
        clearImmediate: i
    })
}
, function(e, t, n) {
    "use strict";
    var r = {}.propertyIsEnumerable
      , o = Object.getOwnPropertyDescriptor
      , i = o && !r.call({
        1: 2
    }, 1);
    t.f = i ? function(e) {
        var t = o(this, e);
        return !!t && t.enumerable
    }
    : r
}
, function(e, t, n) {
    var r = n(3)
      , o = n(2)
      , i = n(12)
      , a = Object
      , s = r("".split);
    e.exports = o((function() {
        return !a("z").propertyIsEnumerable(0)
    }
    )) ? function(e) {
        return "String" == i(e) ? s(e, "") : a(e)
    }
    : a
}
, function(e, t, n) {
    var r = n(4)
      , o = n(84)
      , i = n(45)
      , a = n(8);
    e.exports = function(e, t, n) {
        for (var s = o(t), u = a.f, c = i.f, f = 0; f < s.length; f++) {
            var l = s[f];
            r(e, l) || n && r(n, l) || u(e, l, c(t, l))
        }
    }
}
, function(e, t, n) {
    var r = n(17)
      , o = n(3)
      , i = n(85)
      , a = n(90)
      , s = n(9)
      , u = o([].concat);
    e.exports = r("Reflect", "ownKeys") || function(e) {
        var t = i.f(s(e))
          , n = a.f;
        return n ? u(t, n(e)) : t
    }
}
, function(e, t, n) {
    var r = n(86)
      , o = n(89).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) {
        return r(e, o)
    }
}
, function(e, t, n) {
    var r = n(3)
      , o = n(4)
      , i = n(22)
      , a = n(87).indexOf
      , s = n(41)
      , u = r([].push);
    e.exports = function(e, t) {
        var n, r = i(e), c = 0, f = [];
        for (n in r)
            !o(s, n) && o(r, n) && u(f, n);
        for (; t.length > c; )
            o(r, n = t[c++]) && (~a(f, n) || u(f, n));
        return f
    }
}
, function(e, t, n) {
    var r = n(22)
      , o = n(88)
      , i = n(43)
      , a = function(e) {
        return function(t, n, a) {
            var s, u = r(t), c = i(u), f = o(a, c);
            if (e && n != n) {
                for (; c > f; )
                    if ((s = u[f++]) != s)
                        return !0
            } else
                for (; c > f; f++)
                    if ((e || f in u) && u[f] === n)
                        return e || f || 0;
            return !e && -1
        }
    };
    e.exports = {
        includes: a(!0),
        indexOf: a(!1)
    }
}
, function(e, t, n) {
    var r = n(21)
      , o = Math.max
      , i = Math.min;
    e.exports = function(e, t) {
        var n = r(e);
        return n < 0 ? o(n + t, 0) : i(n, t)
    }
}
, function(e, t) {
    e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}
, function(e, t) {
    t.f = Object.getOwnPropertySymbols
}
, function(e, t, n) {
    var r = n(2)
      , o = n(1)
      , i = /#|\.prototype\./
      , a = function(e, t) {
        var n = u[s(e)];
        return n == f || n != c && (o(t) ? r(t) : !!t)
    }
      , s = a.normalize = function(e) {
        return String(e).replace(i, ".").toLowerCase()
    }
      , u = a.data = {}
      , c = a.NATIVE = "N"
      , f = a.POLYFILL = "P";
    e.exports = a
}
, function(e, t, n) {
    var r = n(93)
      , o = n(19)
      , i = n(7)
      , a = r(r.bind);
    e.exports = function(e, t) {
        return o(e),
        void 0 === t ? e : i ? a(e, t) : function() {
            return e.apply(t, arguments)
        }
    }
}
, function(e, t, n) {
    var r = n(12)
      , o = n(3);
    e.exports = function(e) {
        if ("Function" === r(e))
            return o(e)
    }
}
, function(e, t, n) {
    var r = n(17);
    e.exports = r("document", "documentElement")
}
, function(e, t, n) {
    var r = n(18);
    e.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(r)
}
, function(e, t, n) {
    (function(t) {
        var r = n(12);
        e.exports = void 0 !== t && "process" == r(t)
    }
    ).call(this, n(97))
}
, function(e, t) {
    var n, r, o = e.exports = {};
    function i() {
        throw new Error("setTimeout has not been defined")
    }
    function a() {
        throw new Error("clearTimeout has not been defined")
    }
    function s(e) {
        if (n === setTimeout)
            return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout)
            return n = setTimeout,
            setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }
    !function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var u, c = [], f = !1, l = -1;
    function p() {
        f && u && (f = !1,
        u.length ? c = u.concat(c) : l = -1,
        c.length && d())
    }
    function d() {
        if (!f) {
            var e = s(p);
            f = !0;
            for (var t = c.length; t; ) {
                for (u = c,
                c = []; ++l < t; )
                    u && u[l].run();
                l = -1,
                t = c.length
            }
            u = null,
            f = !1,
            function(e) {
                if (r === clearTimeout)
                    return clearTimeout(e);
                if ((r === a || !r) && clearTimeout)
                    return r = clearTimeout,
                    clearTimeout(e);
                try {
                    r(e)
                } catch (t) {
                    try {
                        return r.call(null, e)
                    } catch (t) {
                        return r.call(this, e)
                    }
                }
            }(e)
        }
    }
    function h(e, t) {
        this.fun = e,
        this.array = t
    }
    function y() {}
    o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        c.push(new h(e,t)),
        1 !== c.length || f || s(d)
    }
    ,
    h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    o.title = "browser",
    o.browser = !0,
    o.env = {},
    o.argv = [],
    o.version = "",
    o.versions = {},
    o.on = y,
    o.addListener = y,
    o.once = y,
    o.off = y,
    o.removeListener = y,
    o.removeAllListeners = y,
    o.emit = y,
    o.prependListener = y,
    o.prependOnceListener = y,
    o.listeners = function(e) {
        return []
    }
    ,
    o.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    o.cwd = function() {
        return "/"
    }
    ,
    o.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    o.umask = function() {
        return 0
    }
}
, function(e, t, n) {
    var r = n(44)
      , o = n(0)
      , i = n(46).set
      , a = n(99)
      , s = o.setImmediate ? a(i, !1) : i;
    r({
        global: !0,
        bind: !0,
        enumerable: !0,
        forced: o.setImmediate !== s
    }, {
        setImmediate: s
    })
}
, function(e, t, n) {
    "use strict";
    var r, o = n(0), i = n(47), a = n(1), s = n(100), u = n(18), c = n(48), f = n(49), l = o.Function, p = /MSIE .\./.test(u) || s && ((r = o.Bun.version.split(".")).length < 3 || 0 == r[0] && (r[1] < 3 || 3 == r[1] && 0 == r[2]));
    e.exports = function(e, t) {
        var n = t ? 2 : 1;
        return p ? function(r, o) {
            var s = f(arguments.length, 1) > n
              , u = a(r) ? r : l(r)
              , p = s ? c(arguments, n) : []
              , d = s ? function() {
                i(u, this, p)
            }
            : u;
            return t ? e(d, o) : e(d)
        }
        : e
    }
}
, function(e, t) {
    e.exports = "function" == typeof Bun && Bun && "string" == typeof Bun.version
}
, function(e, t, n) {
    var r, o;
    o = "undefined" != typeof self ? self : this,
    void 0 === (r = function() {
        return function(e) {
            "use strict";
            if ("function" != typeof Promise)
                throw "Promise support required";
            var t = e.crypto || e.msCrypto;
            if (t) {
                var n = t.subtle || t.webkitSubtle;
                if (n) {
                    var r = e.Crypto || t.constructor || Object
                      , o = e.SubtleCrypto || n.constructor || Object
                      , i = (e.CryptoKey || e.Key,
                    e.navigator.userAgent.indexOf("Edge/") > -1)
                      , a = !!e.msCrypto && !i
                      , s = !t.subtle && !!t.webkitSubtle;
                    if (a || s) {
                        var u = {
                            KoZIhvcNAQEB: "1.2.840.113549.1.1.1"
                        }
                          , c = {
                            "1.2.840.113549.1.1.1": "KoZIhvcNAQEB"
                        };
                        if (["generateKey", "importKey", "unwrapKey"].forEach((function(e) {
                            var r = n[e];
                            n[e] = function(o, i, u) {
                                var c, f, l, h, w = [].slice.call(arguments);
                                switch (e) {
                                case "generateKey":
                                    c = y(o),
                                    f = i,
                                    l = u;
                                    break;
                                case "importKey":
                                    c = y(u),
                                    f = w[3],
                                    l = w[4],
                                    "jwk" === o && ((i = v(i)).alg || (i.alg = g(c)),
                                    i.key_ops || (i.key_ops = "oct" !== i.kty ? "d"in i ? l.filter(C) : l.filter(T) : l.slice()),
                                    w[1] = b(i));
                                    break;
                                case "unwrapKey":
                                    c = w[4],
                                    f = w[5],
                                    l = w[6],
                                    w[2] = u._key
                                }
                                if ("generateKey" === e && "HMAC" === c.name && c.hash)
                                    return c.length = c.length || {
                                        "SHA-1": 512,
                                        "SHA-256": 512,
                                        "SHA-384": 1024,
                                        "SHA-512": 1024
                                    }[c.hash.name],
                                    n.importKey("raw", t.getRandomValues(new Uint8Array(c.length + 7 >> 3)), c, f, l);
                                if (s && "generateKey" === e && "RSASSA-PKCS1-v1_5" === c.name && (!c.modulusLength || c.modulusLength >= 2048))
                                    return (o = y(o)).name = "RSAES-PKCS1-v1_5",
                                    delete o.hash,
                                    n.generateKey(o, !0, ["encrypt", "decrypt"]).then((function(e) {
                                        return Promise.all([n.exportKey("jwk", e.publicKey), n.exportKey("jwk", e.privateKey)])
                                    }
                                    )).then((function(e) {
                                        return e[0].alg = e[1].alg = g(c),
                                        e[0].key_ops = l.filter(T),
                                        e[1].key_ops = l.filter(C),
                                        Promise.all([n.importKey("jwk", e[0], c, !0, e[0].key_ops), n.importKey("jwk", e[1], c, f, e[1].key_ops)])
                                    }
                                    )).then((function(e) {
                                        return {
                                            publicKey: e[0],
                                            privateKey: e[1]
                                        }
                                    }
                                    ));
                                if ((s || a && "SHA-1" === (c.hash || {}).name) && "importKey" === e && "jwk" === o && "HMAC" === c.name && "oct" === i.kty)
                                    return n.importKey("raw", d(p(i.k)), u, w[3], w[4]);
                                if (s && "importKey" === e && ("spki" === o || "pkcs8" === o))
                                    return n.importKey("jwk", m(i), u, w[3], w[4]);
                                if (a && "unwrapKey" === e)
                                    return n.decrypt(w[3], u, i).then((function(e) {
                                        return n.importKey(o, e, w[4], w[5], w[6])
                                    }
                                    ));
                                try {
                                    h = r.apply(n, w)
                                } catch (e) {
                                    return Promise.reject(e)
                                }
                                return a && (h = new Promise((function(e, t) {
                                    h.onabort = h.onerror = function(e) {
                                        t(e)
                                    }
                                    ,
                                    h.oncomplete = function(t) {
                                        e(t.target.result)
                                    }
                                }
                                ))),
                                h = h.then((function(e) {
                                    return "HMAC" === c.name && (c.length || (c.length = 8 * e.algorithm.length)),
                                    0 == c.name.search("RSA") && (c.modulusLength || (c.modulusLength = (e.publicKey || e).algorithm.modulusLength),
                                    c.publicExponent || (c.publicExponent = (e.publicKey || e).algorithm.publicExponent)),
                                    e = e.publicKey && e.privateKey ? {
                                        publicKey: new x(e.publicKey,c,f,l.filter(T)),
                                        privateKey: new x(e.privateKey,c,f,l.filter(C))
                                    } : new x(e,c,f,l)
                                }
                                ))
                            }
                        }
                        )),
                        ["exportKey", "wrapKey"].forEach((function(e) {
                            var t = n[e];
                            n[e] = function(r, o, i) {
                                var u, c = [].slice.call(arguments);
                                switch (e) {
                                case "exportKey":
                                    c[1] = o._key;
                                    break;
                                case "wrapKey":
                                    c[1] = o._key,
                                    c[2] = i._key
                                }
                                if ((s || a && "SHA-1" === (o.algorithm.hash || {}).name) && "exportKey" === e && "jwk" === r && "HMAC" === o.algorithm.name && (c[0] = "raw"),
                                !s || "exportKey" !== e || "spki" !== r && "pkcs8" !== r || (c[0] = "jwk"),
                                a && "wrapKey" === e)
                                    return n.exportKey(r, o).then((function(e) {
                                        return "jwk" === r && (e = d(unescape(encodeURIComponent(JSON.stringify(v(e)))))),
                                        n.encrypt(c[3], i, e)
                                    }
                                    ));
                                try {
                                    u = t.apply(n, c)
                                } catch (e) {
                                    return Promise.reject(e)
                                }
                                return a && (u = new Promise((function(e, t) {
                                    u.onabort = u.onerror = function(e) {
                                        t(e)
                                    }
                                    ,
                                    u.oncomplete = function(t) {
                                        e(t.target.result)
                                    }
                                }
                                ))),
                                "exportKey" === e && "jwk" === r && (u = u.then((function(e) {
                                    return (s || a && "SHA-1" === (o.algorithm.hash || {}).name) && "HMAC" === o.algorithm.name ? {
                                        kty: "oct",
                                        alg: g(o.algorithm),
                                        key_ops: o.usages.slice(),
                                        ext: !0,
                                        k: l(h(e))
                                    } : ((e = v(e)).alg || (e.alg = g(o.algorithm)),
                                    e.key_ops || (e.key_ops = "public" === o.type ? o.usages.filter(T) : "private" === o.type ? o.usages.filter(C) : o.usages.slice()),
                                    e)
                                }
                                ))),
                                !s || "exportKey" !== e || "spki" !== r && "pkcs8" !== r || (u = u.then((function(e) {
                                    return e = w(v(e))
                                }
                                ))),
                                u
                            }
                        }
                        )),
                        ["encrypt", "decrypt", "sign", "verify"].forEach((function(e) {
                            var t = n[e];
                            n[e] = function(r, o, i, s) {
                                if (a && (!i.byteLength || s && !s.byteLength))
                                    throw new Error("Empty input is not allowed");
                                var u, c = [].slice.call(arguments), f = y(r);
                                if (!a || "sign" !== e && "verify" !== e || "RSASSA-PKCS1-v1_5" !== r && "HMAC" !== r || (c[0] = {
                                    name: r
                                }),
                                a && o.algorithm.hash && (c[0].hash = c[0].hash || o.algorithm.hash),
                                a && "decrypt" === e && "AES-GCM" === f.name) {
                                    var l = r.tagLength >> 3;
                                    c[2] = (i.buffer || i).slice(0, i.byteLength - l),
                                    r.tag = (i.buffer || i).slice(i.byteLength - l)
                                }
                                a && "AES-GCM" === f.name && void 0 === c[0].tagLength && (c[0].tagLength = 128),
                                c[1] = o._key;
                                try {
                                    u = t.apply(n, c)
                                } catch (e) {
                                    return Promise.reject(e)
                                }
                                return a && (u = new Promise((function(t, n) {
                                    u.onabort = u.onerror = function(e) {
                                        n(e)
                                    }
                                    ,
                                    u.oncomplete = function(n) {
                                        if (n = n.target.result,
                                        "encrypt" === e && n instanceof AesGcmEncryptResult) {
                                            var r = n.ciphertext
                                              , o = n.tag;
                                            (n = new Uint8Array(r.byteLength + o.byteLength)).set(new Uint8Array(r), 0),
                                            n.set(new Uint8Array(o), r.byteLength),
                                            n = n.buffer
                                        }
                                        t(n)
                                    }
                                }
                                ))),
                                u
                            }
                        }
                        )),
                        a) {
                            var f = n.digest;
                            n.digest = function(e, t) {
                                if (!t.byteLength)
                                    throw new Error("Empty input is not allowed");
                                var r;
                                try {
                                    r = f.call(n, e, t)
                                } catch (e) {
                                    return Promise.reject(e)
                                }
                                return r = new Promise((function(e, t) {
                                    r.onabort = r.onerror = function(e) {
                                        t(e)
                                    }
                                    ,
                                    r.oncomplete = function(t) {
                                        e(t.target.result)
                                    }
                                }
                                ))
                            }
                            ,
                            e.crypto = Object.create(t, {
                                getRandomValues: {
                                    value: function(e) {
                                        return t.getRandomValues(e)
                                    }
                                },
                                subtle: {
                                    value: n
                                }
                            }),
                            e.CryptoKey = x
                        }
                        s && (t.subtle = n,
                        e.Crypto = r,
                        e.SubtleCrypto = o,
                        e.CryptoKey = x)
                    }
                }
            }
            function l(e) {
                return btoa(e).replace(/\=+$/, "").replace(/\+/g, "-").replace(/\//g, "_")
            }
            function p(e) {
                return e = (e += "===").slice(0, -e.length % 4),
                atob(e.replace(/-/g, "+").replace(/_/g, "/"))
            }
            function d(e) {
                for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++)
                    t[n] = e.charCodeAt(n);
                return t
            }
            function h(e) {
                return e instanceof ArrayBuffer && (e = new Uint8Array(e)),
                String.fromCharCode.apply(String, e)
            }
            function y(e) {
                var t = {
                    name: (e.name || e || "").toUpperCase().replace("V", "v")
                };
                switch (t.name) {
                case "SHA-1":
                case "SHA-256":
                case "SHA-384":
                case "SHA-512":
                    break;
                case "AES-CBC":
                case "AES-GCM":
                case "AES-KW":
                    e.length && (t.length = e.length);
                    break;
                case "HMAC":
                    e.hash && (t.hash = y(e.hash)),
                    e.length && (t.length = e.length);
                    break;
                case "RSAES-PKCS1-v1_5":
                    e.publicExponent && (t.publicExponent = new Uint8Array(e.publicExponent)),
                    e.modulusLength && (t.modulusLength = e.modulusLength);
                    break;
                case "RSASSA-PKCS1-v1_5":
                case "RSA-OAEP":
                    e.hash && (t.hash = y(e.hash)),
                    e.publicExponent && (t.publicExponent = new Uint8Array(e.publicExponent)),
                    e.modulusLength && (t.modulusLength = e.modulusLength);
                    break;
                default:
                    throw new SyntaxError("Bad algorithm name")
                }
                return t
            }
            function g(e) {
                return {
                    HMAC: {
                        "SHA-1": "HS1",
                        "SHA-256": "HS256",
                        "SHA-384": "HS384",
                        "SHA-512": "HS512"
                    },
                    "RSASSA-PKCS1-v1_5": {
                        "SHA-1": "RS1",
                        "SHA-256": "RS256",
                        "SHA-384": "RS384",
                        "SHA-512": "RS512"
                    },
                    "RSAES-PKCS1-v1_5": {
                        "": "RSA1_5"
                    },
                    "RSA-OAEP": {
                        "SHA-1": "RSA-OAEP",
                        "SHA-256": "RSA-OAEP-256"
                    },
                    "AES-KW": {
                        128: "A128KW",
                        192: "A192KW",
                        256: "A256KW"
                    },
                    "AES-GCM": {
                        128: "A128GCM",
                        192: "A192GCM",
                        256: "A256GCM"
                    },
                    "AES-CBC": {
                        128: "A128CBC",
                        192: "A192CBC",
                        256: "A256CBC"
                    }
                }[e.name][(e.hash || {}).name || e.length || ""]
            }
            function v(e) {
                (e instanceof ArrayBuffer || e instanceof Uint8Array) && (e = JSON.parse(decodeURIComponent(escape(h(e)))));
                var t = {
                    kty: e.kty,
                    alg: e.alg,
                    ext: e.ext || e.extractable
                };
                switch (t.kty) {
                case "oct":
                    t.k = e.k;
                case "RSA":
                    ["n", "e", "d", "p", "q", "dp", "dq", "qi", "oth"].forEach((function(n) {
                        n in e && (t[n] = e[n])
                    }
                    ));
                    break;
                default:
                    throw new TypeError("Unsupported key type")
                }
                return t
            }
            function b(e) {
                var t = v(e);
                return a && (t.extractable = t.ext,
                delete t.ext),
                d(unescape(encodeURIComponent(JSON.stringify(t)))).buffer
            }
            function m(e) {
                var t = A(e)
                  , n = !1;
                t.length > 2 && (n = !0,
                t.shift());
                var r = {
                    ext: !0
                };
                switch (t[0][0]) {
                case "1.2.840.113549.1.1.1":
                    var o = ["n", "e", "d", "p", "q", "dp", "dq", "qi"]
                      , i = A(t[1]);
                    n && i.shift();
                    for (var a = 0; a < i.length; a++)
                        i[a][0] || (i[a] = i[a].subarray(1)),
                        r[o[a]] = l(h(i[a]));
                    r.kty = "RSA";
                    break;
                default:
                    throw new TypeError("Unsupported key type")
                }
                return r
            }
            function w(e) {
                var t, n = [["", null]], r = !1;
                switch (e.kty) {
                case "RSA":
                    for (var o = ["n", "e", "d", "p", "q", "dp", "dq", "qi"], i = [], a = 0; a < o.length && o[a]in e; a++) {
                        var s = i[a] = d(p(e[o[a]]));
                        128 & s[0] && (i[a] = new Uint8Array(s.length + 1),
                        i[a].set(s, 1))
                    }
                    i.length > 2 && (r = !0,
                    i.unshift(new Uint8Array([0]))),
                    n[0][0] = "1.2.840.113549.1.1.1",
                    t = i;
                    break;
                default:
                    throw new TypeError("Unsupported key type")
                }
                return n.push(new Uint8Array(S(t)).buffer),
                r ? n.unshift(new Uint8Array([0])) : n[1] = {
                    tag: 3,
                    value: n[1]
                },
                new Uint8Array(S(n)).buffer
            }
            function A(e, t) {
                if (e instanceof ArrayBuffer && (e = new Uint8Array(e)),
                t || (t = {
                    pos: 0,
                    end: e.length
                }),
                t.end - t.pos < 2 || t.end > e.length)
                    throw new RangeError("Malformed DER");
                var n, r = e[t.pos++], o = e[t.pos++];
                if (o >= 128) {
                    if (o &= 127,
                    t.end - t.pos < o)
                        throw new RangeError("Malformed DER");
                    for (var i = 0; o--; )
                        i <<= 8,
                        i |= e[t.pos++];
                    o = i
                }
                if (t.end - t.pos < o)
                    throw new RangeError("Malformed DER");
                switch (r) {
                case 2:
                    n = e.subarray(t.pos, t.pos += o);
                    break;
                case 3:
                    if (e[t.pos++])
                        throw new Error("Unsupported bit string");
                    o--;
                case 4:
                    n = new Uint8Array(e.subarray(t.pos, t.pos += o)).buffer;
                    break;
                case 5:
                    n = null;
                    break;
                case 6:
                    var a = btoa(h(e.subarray(t.pos, t.pos += o)));
                    if (!(a in u))
                        throw new Error("Unsupported OBJECT ID " + a);
                    n = u[a];
                    break;
                case 48:
                    n = [];
                    for (var s = t.pos + o; t.pos < s; )
                        n.push(A(e, t));
                    break;
                default:
                    throw new Error("Unsupported DER tag 0x" + r.toString(16))
                }
                return n
            }
            function S(e, t) {
                t || (t = []);
                var n = 0
                  , r = 0
                  , o = t.length + 2;
                if (t.push(0, 0),
                e instanceof Uint8Array) {
                    n = 2,
                    r = e.length;
                    for (var i = 0; i < r; i++)
                        t.push(e[i])
                } else if (e instanceof ArrayBuffer)
                    for (n = 4,
                    r = e.byteLength,
                    e = new Uint8Array(e),
                    i = 0; i < r; i++)
                        t.push(e[i]);
                else if (null === e)
                    n = 5,
                    r = 0;
                else if ("string" == typeof e && e in c) {
                    var a = d(atob(c[e]));
                    for (n = 6,
                    r = a.length,
                    i = 0; i < r; i++)
                        t.push(a[i])
                } else if (e instanceof Array) {
                    for (i = 0; i < e.length; i++)
                        S(e[i], t);
                    n = 48,
                    r = t.length - o
                } else {
                    if (!("object" == typeof e && 3 === e.tag && e.value instanceof ArrayBuffer))
                        throw new Error("Unsupported DER value " + e);
                    for (n = 3,
                    r = (e = new Uint8Array(e.value)).byteLength,
                    t.push(0),
                    i = 0; i < r; i++)
                        t.push(e[i]);
                    r++
                }
                if (r >= 128) {
                    var s = r;
                    for (r = 4,
                    t.splice(o, 0, s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s); r > 1 && !(s >> 24); )
                        s <<= 8,
                        r--;
                    r < 4 && t.splice(o, 4 - r),
                    r |= 128
                }
                return t.splice(o - 2, 2, n, r),
                t
            }
            function x(e, t, n, r) {
                Object.defineProperties(this, {
                    _key: {
                        value: e
                    },
                    type: {
                        value: e.type,
                        enumerable: !0
                    },
                    extractable: {
                        value: void 0 === n ? e.extractable : n,
                        enumerable: !0
                    },
                    algorithm: {
                        value: void 0 === t ? e.algorithm : t,
                        enumerable: !0
                    },
                    usages: {
                        value: void 0 === r ? e.usages : r,
                        enumerable: !0
                    }
                })
            }
            function T(e) {
                return "verify" === e || "encrypt" === e || "wrapKey" === e
            }
            function C(e) {
                return "sign" === e || "decrypt" === e || "unwrapKey" === e
            }
        }(o)
    }
    .apply(t, [])) || (e.exports = r)
}
, function(e, t, n) {
    var r = n(50).default
      , o = n(103);
    e.exports = function(e) {
        var t = o(e, "string");
        return "symbol" === r(t) ? t : String(t)
    }
    ,
    e.exports.__esModule = !0,
    e.exports.default = e.exports
}
, function(e, t, n) {
    var r = n(50).default;
    e.exports = function(e, t) {
        if ("object" !== r(e) || null === e)
            return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var o = n.call(e, t || "default");
            if ("object" !== r(o))
                return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
    }
    ,
    e.exports.__esModule = !0,
    e.exports.default = e.exports
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function o(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? r(Object(n), !0).forEach((function(t) {
                i(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function a(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    var u = n(105)
      , c = u.encodeToBase64
      , f = u.decodeFromBase64
      , l = u.decodePublisherTCFromBase64
      , p = u.getSegmentType
      , d = n(110).consentStringDefinition
      , h = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            a(this, e),
            this.setConsentString(t)
        }
        var t, n, r;
        return t = e,
        (n = [{
            key: "getCoreSegmentData",
            value: function() {
                return this.core ? o({}, this.core) : null
            }
        }, {
            key: "setCoreSegmentData",
            value: function(e) {
                this.core = o({}, e)
            }
        }, {
            key: "getCoreSegmentString",
            value: function() {
                return this.core ? c(this.core, d.core) : null
            }
        }, {
            key: "setCoreSegmentString",
            value: function(e) {
                this.core = f(e, d.core)
            }
        }, {
            key: "getDisclosedVendorsData",
            value: function() {
                return this.disclosedVendors ? o({}, this.disclosedVendors) : null
            }
        }, {
            key: "setDisclosedVendorsData",
            value: function(e) {
                this.disclosedVendors = o({}, e)
            }
        }, {
            key: "getDisclosedVendorsString",
            value: function() {
                return this.disclosedVendors ? c(this.disclosedVendors, d.disclosedVendors) : null
            }
        }, {
            key: "setDisclosedVendorsString",
            value: function(e) {
                this.disclosedVendors = f(e, d.disclosedVendors)
            }
        }, {
            key: "getAllowedVendorsData",
            value: function() {
                return this.allowedVendors ? o({}, this.allowedVendors) : null
            }
        }, {
            key: "setAllowedVendorsData",
            value: function(e) {
                this.allowedVendors = o({}, e)
            }
        }, {
            key: "getAllowedVendorsString",
            value: function() {
                return this.allowedVendors ? c(this.allowedVendors, d.allowedVendors) : null
            }
        }, {
            key: "setAllowedVendorsString",
            value: function(e) {
                this.allowedVendors = f(e, d.allowedVendors)
            }
        }, {
            key: "getPublisherTCData",
            value: function() {
                return this.publisherTC ? o({}, this.publisherTC) : null
            }
        }, {
            key: "setPublisherTCData",
            value: function(e) {
                this.publisherTC = o({}, e)
            }
        }, {
            key: "getPublisherTCString",
            value: function() {
                return this.publisherTC ? c(this.publisherTC, d.publisherTC) : null
            }
        }, {
            key: "setPublisherTCString",
            value: function(e) {
                this.publisherTC = l(e)
            }
        }, {
            key: "setConsentString",
            value: function(e) {
                if (this.core = null,
                this.disclosedVendors = null,
                this.allowedVendors = null,
                this.publisherTC = null,
                e) {
                    var t = e.split(".");
                    t.length > 0 && this.setCoreSegmentString(t[0]);
                    for (var n = 1; n < t.length; n += 1)
                        switch (p(t[n])) {
                        case 1:
                            this.setAllowedVendorsString(t[n]);
                            break;
                        case 2:
                            this.setDisclosedVendorsString(t[n]);
                            break;
                        case 3:
                            this.setPublisherTCString(t[n]);
                            break;
                        default:
                            throw new Error("Unknown segment type in consent string")
                        }
                }
            }
        }, {
            key: "getConsentString",
            value: function() {
                var e = [];
                return this.core ? (e.push(this.getCoreSegmentString()),
                this.disclosedVendors && e.push(this.getDisclosedVendorsString()),
                this.allowedVendors && e.push(this.getAllowedVendorsString()),
                this.publisherTC && e.push(this.getPublisherTCString()),
                e.join(".")) : null
            }
        }]) && s(t.prototype, n),
        r && s(t, r),
        e
    }();
    e.exports = {
        TCStringV2: h
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(106)
      , o = n(51)
      , i = o.padLeft
      , a = o.padRight
      , s = n(108).encodeFields
      , u = n(109)
      , c = u.decodeFields
      , f = u.decodePublisherTC;
    function l(e) {
        for (var t = e; t.length % 4 != 0; )
            t += "=";
        t = t.replace(/-/g, "+").replace(/_/g, "/");
        for (var n = r.decode(t), o = "", a = 0; a < n.length; a += 1) {
            var s = n.charCodeAt(a).toString(2);
            o += i(s, 8 - s.length)
        }
        return o
    }
    e.exports = {
        encodeToBase64: function(e, t) {
            return function(e) {
                if (e) {
                    for (var t = a(e, 7 - (e.length + 7) % 8), n = "", o = 0; o < t.length; o += 8)
                        n += String.fromCharCode(parseInt(t.substr(o, 8), 2));
                    return r.encode(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                }
                return null
            }(s(e, t))
        },
        decodeFromBase64: function(e, t) {
            var n = l(e);
            return c(n, t).decodedObject
        },
        decodePublisherTCFromBase64: function(e) {
            var t = l(e);
            return f(t)
        },
        getSegmentType: function(e) {
            var t = l(e);
            return parseInt(t.substr(0, 3), 2)
        }
    }
}
, function(e, t, n) {
    (function(e, r) {
        var o;
        !function(i) {
            var a = t
              , s = (e && e.exports,
            "object" == typeof r && r);
            s.global !== s && s.window;
            var u = function(e) {
                this.message = e
            };
            (u.prototype = new Error).name = "InvalidCharacterError";
            var c = function(e) {
                throw new u(e)
            }
              , f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
              , l = /[\t\n\f\r ]/g
              , p = {
                encode: function(e) {
                    e = String(e),
                    /[^\0-\xFF]/.test(e) && c("The string to be encoded contains characters outside of the Latin1 range.");
                    for (var t, n, r, o, i = e.length % 3, a = "", s = -1, u = e.length - i; ++s < u; )
                        t = e.charCodeAt(s) << 16,
                        n = e.charCodeAt(++s) << 8,
                        r = e.charCodeAt(++s),
                        a += f.charAt((o = t + n + r) >> 18 & 63) + f.charAt(o >> 12 & 63) + f.charAt(o >> 6 & 63) + f.charAt(63 & o);
                    return 2 == i ? (t = e.charCodeAt(s) << 8,
                    n = e.charCodeAt(++s),
                    a += f.charAt((o = t + n) >> 10) + f.charAt(o >> 4 & 63) + f.charAt(o << 2 & 63) + "=") : 1 == i && (o = e.charCodeAt(s),
                    a += f.charAt(o >> 2) + f.charAt(o << 4 & 63) + "=="),
                    a
                },
                decode: function(e) {
                    var t = (e = String(e).replace(l, "")).length;
                    t % 4 == 0 && (t = (e = e.replace(/==?$/, "")).length),
                    (t % 4 == 1 || /[^+a-zA-Z0-9/]/.test(e)) && c("Invalid character: the string to be decoded is not correctly encoded.");
                    for (var n, r, o = 0, i = "", a = -1; ++a < t; )
                        r = f.indexOf(e.charAt(a)),
                        n = o % 4 ? 64 * n + r : r,
                        o++ % 4 && (i += String.fromCharCode(255 & n >> (-2 * o & 6)));
                    return i
                },
                version: "0.1.0"
            };
            void 0 === (o = function() {
                return p
            }
            .call(t, n, t, e)) || (e.exports = o)
        }()
    }
    ).call(this, n(107)(e), n(23))
}
, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}
        ,
        e.paths = [],
        e.children || (e.children = []),
        Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }),
        Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }),
        e.webpackPolyfill = 1),
        e
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(51)
      , o = r.padLeft
      , i = r.getMaxListElement;
    function a(e, t) {
        var n = "";
        return "number" != typeof e || Number.isNaN(e) || (n = parseInt(e, 10).toString(2)),
        t >= n.length && (n = o(n, t - n.length)),
        n.length > t && (n = n.substring(0, t)),
        n
    }
    function s(e) {
        return a(!0 === e ? 1 : 0, 1)
    }
    function u(e, t) {
        return e instanceof Date ? a(e.getTime() / 100, t) : a(e, t)
    }
    function c(e, t) {
        return a(e.toUpperCase().charCodeAt(0) - 65, t)
    }
    function f(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12;
        return c(e.slice(0, 1), t / 2) + c(e.slice(1), t / 2)
    }
    function l(e, t) {
        for (var n = "", r = 1; r <= t; r += 1)
            n += -1 !== e.indexOf(r) ? "1" : "0";
        return n
    }
    function p(e) {
        return a(e.length, 12) + e.reduce((function(e, t) {
            return e + function(e) {
                return s(e.isRange) + a(e.startId, 16) + (e.isRange ? a(e.endId, 16) : "")
            }(t)
        }
        ), "")
    }
    function d(e) {
        return p(function(e) {
            for (var t = i(e), n = [], r = [], o = 1; o <= t; o += 1) {
                var a = o;
                if (-1 !== e.indexOf(a) && n.push(a),
                (-1 === e.indexOf(a) || -1 === e.indexOf(a + 1)) && n.length) {
                    var s = n.shift()
                      , u = n.pop();
                    n = [],
                    r.push({
                        isRange: "number" == typeof u,
                        startId: s,
                        endId: u
                    })
                }
            }
            return r
        }(e))
    }
    function h(e, t) {
        var n = d(e)
          , r = l(e, i(e));
        return a(i(e), t) + s(n.length < r.length) + (n.length < r.length ? n : r)
    }
    function y(e, t, n) {
        var r = e || [];
        return a(r.length, t) + r.reduce((function(e, t) {
            return e + g(t, n)
        }
        ), "")
    }
    function g(e, t) {
        var n = "";
        return t.segmentId && (n = a(t.segmentId, 3)),
        t.fields.reduce((function(t, n) {
            return t + function(e, t) {
                var n = t.name
                  , r = t.type
                  , o = t.numBits
                  , i = e[n]
                  , c = null == i ? "" : i
                  , p = "function" == typeof o ? o(e) : o;
                switch (r) {
                case "int":
                    return a(c, p);
                case "bool":
                    return s(c);
                case "date":
                    return u(c, p);
                case "list":
                    return l(c, p);
                case "textcode":
                    return f(c, p);
                case "range":
                    return d(c);
                case "minlist":
                    return h(c, p);
                case "array":
                    return y(c, p, t);
                default:
                    throw new Error("TCStringV2 - Unknown field type ".concat(r, " for encoding"))
                }
            }(e, n)
        }
        ), n)
    }
    e.exports = {
        encodeBoolToBits: s,
        encodeIntToBits: a,
        encodeDateToBits: u,
        encodeLetterToBits: c,
        encodeTextCodeToBits: f,
        encodeListToBits: l,
        encodeListToRangeBits: d,
        encodeMinListToBits: h,
        encodeArrayToBits: y,
        encodeFields: g
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t, n) {
        if (void 0 !== n && e.length < t + n)
            throw new Error("Invalid decoding input")
    }
    function o(e, t, n) {
        return r(e, t, n),
        parseInt(e.substr(t, n), 2)
    }
    function i(e, t, n) {
        return r(e, t, n),
        new Date(100 * o(e, t, n))
    }
    function a(e, t) {
        return 1 === parseInt(e.substr(t, 1), 2)
    }
    function s(e) {
        var t = o(e);
        return String.fromCharCode(t + 65).toLowerCase()
    }
    function u(e, t, n) {
        r(e, t, n);
        var o = e.substr(t, n);
        return s(o.slice(0, n / 2)) + s(o.slice(n / 2))
    }
    function c(e, t, n, r) {
        var i = t
          , a = []
          , s = o(e, i, n);
        i += n;
        for (var u = 0; u < s; u += 1) {
            var c = h(e, r, i)
              , f = c.decodedObject;
            i = c.newPosition,
            a.push(f)
        }
        return {
            fieldValue: a,
            newPosition: i
        }
    }
    function f(e, t) {
        var n = t
          , r = []
          , i = o(e, n, 12);
        n += 12;
        for (var s = 0; s < i; ) {
            var u = a(e, n);
            if (n += 1,
            u) {
                var c = o(e, n, 16)
                  , f = o(e, n += 16, 16);
                n += 16;
                for (var l = c; l <= f; l += 1)
                    r.push(l)
            } else {
                var p = o(e, n, 16);
                n += 16,
                r.push(p)
            }
            s += 1
        }
        return {
            fieldValue: r,
            newPosition: n
        }
    }
    function l(e, t, n) {
        r(e, t, n);
        for (var o = [], i = e.substr(t, n), a = 0; a < i.length; a += 1)
            "0" !== i[a] && o.push(a + 1);
        return o
    }
    function p(e, t, n) {
        var r = t
          , i = o(e, t, n)
          , s = a(e, r += n);
        return r += 1,
        s ? f(e, r) : {
            fieldValue: l(e.substr(r, i)),
            newPosition: r += i
        }
    }
    function d(e, t, n, r) {
        var s = r.type
          , d = r.numBits
          , h = "function" == typeof d ? d(t) : d;
        switch (s) {
        case "int":
            return {
                fieldValue: o(e, n, h)
            };
        case "bool":
            return {
                fieldValue: a(e, n)
            };
        case "date":
            return {
                fieldValue: i(e, n, h)
            };
        case "list":
            return {
                fieldValue: l(e, n, h)
            };
        case "textcode":
            return {
                fieldValue: u(e, n, h)
            };
        case "range":
            return f(e, n);
        case "minlist":
            return p(e, n, h);
        case "array":
            return c(e, n, h, r);
        default:
            throw new Error("TCStringV2 - Unknown field type ".concat(s, " for decoding"))
        }
    }
    function h(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
          , r = n;
        t.segmentId && (r += 3);
        var o = t.fields.reduce((function(t, n) {
            var o = n.name
              , i = n.numBits
              , a = d(e, t, r, n)
              , s = a.fieldValue
              , u = a.newPosition;
            return void 0 !== s && (t[o] = s),
            void 0 !== u ? r = u : "number" == typeof i && (r += i),
            t
        }
        ), {});
        return {
            decodedObject: o,
            newPosition: r
        }
    }
    e.exports = {
        decodeBitsToInt: o,
        decodeBitsToBool: a,
        decodeBitsToDate: i,
        decodeBitsToLetter: s,
        decodeBitsToTextCode: u,
        decodeBitsToRange: f,
        decodeBitsToMinList: p,
        decodeBitsToArray: c,
        decodeFields: h,
        decodePublisherTC: function(e) {
            var t = 0
              , n = o(e, t, 3);
            if (t += 3,
            3 !== n)
                throw new Error("Invalid consent string");
            var r = l(e, t, 24)
              , i = l(e, t += 24, 24)
              , a = o(e, t += 24, 6);
            return {
                pubPurposesConsent: r,
                pubPurposesLITransparency: i,
                numCustomPurposes: a,
                customPurposesConsent: l(e, t += 6, a),
                customPurposesLITransparency: l(e, t += a, a)
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = {
        consentStringDefinition: {
            core: {
                fields: [{
                    name: "version",
                    type: "int",
                    numBits: 6
                }, {
                    name: "created",
                    type: "date",
                    numBits: 36
                }, {
                    name: "lastUpdated",
                    type: "date",
                    numBits: 36
                }, {
                    name: "cmpId",
                    type: "int",
                    numBits: 12
                }, {
                    name: "cmpVersion",
                    type: "int",
                    numBits: 12
                }, {
                    name: "consentScreen",
                    type: "int",
                    numBits: 6
                }, {
                    name: "consentLanguage",
                    type: "textcode",
                    numBits: 12
                }, {
                    name: "vendorListVersion",
                    type: "int",
                    numBits: 12
                }, {
                    name: "tcfPolicyVersion",
                    type: "int",
                    numBits: 6
                }, {
                    name: "isServiceSpecific",
                    type: "bool",
                    numBits: 1
                }, {
                    name: "useNonStandardStacks",
                    type: "bool",
                    numBits: 1
                }, {
                    name: "specialFeatureOptIns",
                    type: "list",
                    numBits: 12
                }, {
                    name: "purposesConsent",
                    type: "list",
                    numBits: 24
                }, {
                    name: "purposeLITransparency",
                    type: "list",
                    numBits: 24
                }, {
                    name: "purposeOneTreatment",
                    type: "bool",
                    numBits: 1
                }, {
                    name: "publisherCC",
                    type: "textcode",
                    numBits: 12
                }, {
                    name: "vendorsConsent",
                    type: "minlist",
                    numBits: 16
                }, {
                    name: "vendorsLegitimateInterest",
                    type: "minlist",
                    numBits: 16
                }, {
                    name: "publisherRestrictions",
                    type: "array",
                    numBits: 12,
                    fields: [{
                        name: "purposeId",
                        type: "int",
                        numBits: 6
                    }, {
                        name: "restrictionType",
                        type: "int",
                        numBits: 2
                    }, {
                        name: "restrictedVendors",
                        type: "range"
                    }]
                }]
            },
            disclosedVendors: {
                segmentId: 1,
                fields: [{
                    name: "disclosedVendors",
                    type: "minlist",
                    numBits: 16
                }]
            },
            allowedVendors: {
                segmentId: 2,
                fields: [{
                    name: "allowedVendors",
                    type: "minlist",
                    numBits: 16
                }]
            },
            publisherTC: {
                segmentId: 3,
                fields: [{
                    name: "pubPurposesConsent",
                    type: "list",
                    numBits: 24
                }, {
                    name: "pubPurposesLITransparency",
                    type: "list",
                    numBits: 24
                }, {
                    name: "numCustomPurposes",
                    type: "int",
                    numBits: 6
                }, {
                    name: "customPurposesConsent",
                    type: "list",
                    numBits: function(e) {
                        return e.numCustomPurposes
                    }
                }, {
                    name: "customPurposesLITransparency",
                    type: "list",
                    numBits: function(e) {
                        return e.numCustomPurposes
                    }
                }]
            }
        }
    }
}
, function(e) {
    e.exports = JSON.parse('{"name":"fbcapimodule","version":"1.0.0","description":"fb-capi-module","main":"src/index.js","scripts":{"test":"jest","clean":"rimraf coverage build","build:dev:only":"NODE_ENV=${STAGE} webpack --mode=development","build:dev":"run-s clean build:dev:only","build:prod:only":"NODE_ENV=${STAGE} webpack --mode=production","build:prod":"run-s clean build:prod:only","start":"webpack-dev-server --https","lint":"eslint \\"src/\\" --ext .js -c ../../.eslintrc","lint:fix":"eslint \\"src/\\" --ext .js --fix -c ../../.eslintrc","format":"prettier --write \\"**/*.js\\"","format:staged":"pretty-quick --staged"},"author":"","license":"ISC"}')
}
, function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "start", (function() {
        return fe
    }
    )),
    n.d(t, "sendFbEvents", (function() {
        return le
    }
    )),
    n.d(t, "outputCurrentConfiguration", (function() {
        return pe
    }
    ));
    n(54),
    n(65),
    n(79);
    var r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== r && r
      , o = "URLSearchParams"in r
      , i = "Symbol"in r && "iterator"in Symbol
      , a = "FileReader"in r && "Blob"in r && function() {
        try {
            return new Blob,
            !0
        } catch (e) {
            return !1
        }
    }()
      , s = "FormData"in r
      , u = "ArrayBuffer"in r;
    if (u)
        var c = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
          , f = ArrayBuffer.isView || function(e) {
            return e && c.indexOf(Object.prototype.toString.call(e)) > -1
        }
        ;
    function l(e) {
        if ("string" != typeof e && (e = String(e)),
        /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)
            throw new TypeError('Invalid character in header field name: "' + e + '"');
        return e.toLowerCase()
    }
    function p(e) {
        return "string" != typeof e && (e = String(e)),
        e
    }
    function d(e) {
        var t = {
            next: function() {
                var t = e.shift();
                return {
                    done: void 0 === t,
                    value: t
                }
            }
        };
        return i && (t[Symbol.iterator] = function() {
            return t
        }
        ),
        t
    }
    function h(e) {
        this.map = {},
        e instanceof h ? e.forEach((function(e, t) {
            this.append(t, e)
        }
        ), this) : Array.isArray(e) ? e.forEach((function(e) {
            this.append(e[0], e[1])
        }
        ), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
            this.append(t, e[t])
        }
        ), this)
    }
    function y(e) {
        if (e.bodyUsed)
            return Promise.reject(new TypeError("Already read"));
        e.bodyUsed = !0
    }
    function g(e) {
        return new Promise((function(t, n) {
            e.onload = function() {
                t(e.result)
            }
            ,
            e.onerror = function() {
                n(e.error)
            }
        }
        ))
    }
    function v(e) {
        var t = new FileReader
          , n = g(t);
        return t.readAsArrayBuffer(e),
        n
    }
    function b(e) {
        if (e.slice)
            return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)),
        t.buffer
    }
    function m() {
        return this.bodyUsed = !1,
        this._initBody = function(e) {
            var t;
            this.bodyUsed = this.bodyUsed,
            this._bodyInit = e,
            e ? "string" == typeof e ? this._bodyText = e : a && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : s && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : o && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : u && a && ((t = e) && DataView.prototype.isPrototypeOf(t)) ? (this._bodyArrayBuffer = b(e.buffer),
            this._bodyInit = new Blob([this._bodyArrayBuffer])) : u && (ArrayBuffer.prototype.isPrototypeOf(e) || f(e)) ? this._bodyArrayBuffer = b(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "",
            this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : o && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }
        ,
        a && (this.blob = function() {
            var e = y(this);
            if (e)
                return e;
            if (this._bodyBlob)
                return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }
        ,
        this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
                var e = y(this);
                return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
            }
            return this.blob().then(v)
        }
        ),
        this.text = function() {
            var e, t, n, r = y(this);
            if (r)
                return r;
            if (this._bodyBlob)
                return e = this._bodyBlob,
                t = new FileReader,
                n = g(t),
                t.readAsText(e),
                n;
            if (this._bodyArrayBuffer)
                return Promise.resolve(function(e) {
                    for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++)
                        n[r] = String.fromCharCode(t[r]);
                    return n.join("")
                }(this._bodyArrayBuffer));
            if (this._bodyFormData)
                throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }
        ,
        s && (this.formData = function() {
            return this.text().then(S)
        }
        ),
        this.json = function() {
            return this.text().then(JSON.parse)
        }
        ,
        this
    }
    h.prototype.append = function(e, t) {
        e = l(e),
        t = p(t);
        var n = this.map[e];
        this.map[e] = n ? n + ", " + t : t
    }
    ,
    h.prototype.delete = function(e) {
        delete this.map[l(e)]
    }
    ,
    h.prototype.get = function(e) {
        return e = l(e),
        this.has(e) ? this.map[e] : null
    }
    ,
    h.prototype.has = function(e) {
        return this.map.hasOwnProperty(l(e))
    }
    ,
    h.prototype.set = function(e, t) {
        this.map[l(e)] = p(t)
    }
    ,
    h.prototype.forEach = function(e, t) {
        for (var n in this.map)
            this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
    }
    ,
    h.prototype.keys = function() {
        var e = [];
        return this.forEach((function(t, n) {
            e.push(n)
        }
        )),
        d(e)
    }
    ,
    h.prototype.values = function() {
        var e = [];
        return this.forEach((function(t) {
            e.push(t)
        }
        )),
        d(e)
    }
    ,
    h.prototype.entries = function() {
        var e = [];
        return this.forEach((function(t, n) {
            e.push([n, t])
        }
        )),
        d(e)
    }
    ,
    i && (h.prototype[Symbol.iterator] = h.prototype.entries);
    var w = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
    function A(e, t) {
        if (!(this instanceof A))
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        var n, r, o = (t = t || {}).body;
        if (e instanceof A) {
            if (e.bodyUsed)
                throw new TypeError("Already read");
            this.url = e.url,
            this.credentials = e.credentials,
            t.headers || (this.headers = new h(e.headers)),
            this.method = e.method,
            this.mode = e.mode,
            this.signal = e.signal,
            o || null == e._bodyInit || (o = e._bodyInit,
            e.bodyUsed = !0)
        } else
            this.url = String(e);
        if (this.credentials = t.credentials || this.credentials || "same-origin",
        !t.headers && this.headers || (this.headers = new h(t.headers)),
        this.method = (n = t.method || this.method || "GET",
        r = n.toUpperCase(),
        w.indexOf(r) > -1 ? r : n),
        this.mode = t.mode || this.mode || null,
        this.signal = t.signal || this.signal,
        this.referrer = null,
        ("GET" === this.method || "HEAD" === this.method) && o)
            throw new TypeError("Body not allowed for GET or HEAD requests");
        if (this._initBody(o),
        !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== t.cache && "no-cache" !== t.cache)) {
            var i = /([?&])_=[^&]*/;
            if (i.test(this.url))
                this.url = this.url.replace(i, "$1_=" + (new Date).getTime());
            else {
                this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
            }
        }
    }
    function S(e) {
        var t = new FormData;
        return e.trim().split("&").forEach((function(e) {
            if (e) {
                var n = e.split("=")
                  , r = n.shift().replace(/\+/g, " ")
                  , o = n.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(r), decodeURIComponent(o))
            }
        }
        )),
        t
    }
    function x(e, t) {
        if (!(this instanceof x))
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        t || (t = {}),
        this.type = "default",
        this.status = void 0 === t.status ? 200 : t.status,
        this.ok = this.status >= 200 && this.status < 300,
        this.statusText = void 0 === t.statusText ? "" : "" + t.statusText,
        this.headers = new h(t.headers),
        this.url = t.url || "",
        this._initBody(e)
    }
    A.prototype.clone = function() {
        return new A(this,{
            body: this._bodyInit
        })
    }
    ,
    m.call(A.prototype),
    m.call(x.prototype),
    x.prototype.clone = function() {
        return new x(this._bodyInit,{
            status: this.status,
            statusText: this.statusText,
            headers: new h(this.headers),
            url: this.url
        })
    }
    ,
    x.error = function() {
        var e = new x(null,{
            status: 0,
            statusText: ""
        });
        return e.type = "error",
        e
    }
    ;
    var T = [301, 302, 303, 307, 308];
    x.redirect = function(e, t) {
        if (-1 === T.indexOf(t))
            throw new RangeError("Invalid status code");
        return new x(null,{
            status: t,
            headers: {
                location: e
            }
        })
    }
    ;
    var C = r.DOMException;
    try {
        new C
    } catch (e) {
        (C = function(e, t) {
            this.message = e,
            this.name = t;
            var n = Error(e);
            this.stack = n.stack
        }
        ).prototype = Object.create(Error.prototype),
        C.prototype.constructor = C
    }
    function E(e, t) {
        return new Promise((function(n, o) {
            var i = new A(e,t);
            if (i.signal && i.signal.aborted)
                return o(new C("Aborted","AbortError"));
            var s = new XMLHttpRequest;
            function c() {
                s.abort()
            }
            s.onload = function() {
                var e, t, r = {
                    status: s.status,
                    statusText: s.statusText,
                    headers: (e = s.getAllResponseHeaders() || "",
                    t = new h,
                    e.replace(/\r?\n[\t ]+/g, " ").split("\r").map((function(e) {
                        return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e
                    }
                    )).forEach((function(e) {
                        var n = e.split(":")
                          , r = n.shift().trim();
                        if (r) {
                            var o = n.join(":").trim();
                            t.append(r, o)
                        }
                    }
                    )),
                    t)
                };
                r.url = "responseURL"in s ? s.responseURL : r.headers.get("X-Request-URL");
                var o = "response"in s ? s.response : s.responseText;
                setTimeout((function() {
                    n(new x(o,r))
                }
                ), 0)
            }
            ,
            s.onerror = function() {
                setTimeout((function() {
                    o(new TypeError("Network request failed"))
                }
                ), 0)
            }
            ,
            s.ontimeout = function() {
                setTimeout((function() {
                    o(new TypeError("Network request failed"))
                }
                ), 0)
            }
            ,
            s.onabort = function() {
                setTimeout((function() {
                    o(new C("Aborted","AbortError"))
                }
                ), 0)
            }
            ,
            s.open(i.method, function(e) {
                try {
                    return "" === e && r.location.href ? r.location.href : e
                } catch (t) {
                    return e
                }
            }(i.url), !0),
            "include" === i.credentials ? s.withCredentials = !0 : "omit" === i.credentials && (s.withCredentials = !1),
            "responseType"in s && (a ? s.responseType = "blob" : u && i.headers.get("Content-Type") && -1 !== i.headers.get("Content-Type").indexOf("application/octet-stream") && (s.responseType = "arraybuffer")),
            !t || "object" != typeof t.headers || t.headers instanceof h ? i.headers.forEach((function(e, t) {
                s.setRequestHeader(t, e)
            }
            )) : Object.getOwnPropertyNames(t.headers).forEach((function(e) {
                s.setRequestHeader(e, p(t.headers[e]))
            }
            )),
            i.signal && (i.signal.addEventListener("abort", c),
            s.onreadystatechange = function() {
                4 === s.readyState && i.signal.removeEventListener("abort", c)
            }
            ),
            s.send(void 0 === i._bodyInit ? null : i._bodyInit)
        }
        ))
    }
    E.polyfill = !0,
    r.fetch || (r.fetch = E,
    r.Headers = h,
    r.Request = A,
    r.Response = x);
    n(101);
    var _ = n(52)
      , O = n.n(_);
    const P = {
        logging: void 0,
        consentString: void 0,
        atsConfigID: void 0,
        iabUSConsent: void 0,
        events: [],
        testEventCode: void 0
    };
    var j = new class {
        constructor() {
            O()(this, "update", e=>{
                if (e) {
                    const t = function(e, t) {
                        const n = {
                            ...e
                        };
                        for (const e in t)
                            n[e] = t[e];
                        return n
                    }(this, e);
                    Object.assign(this, t)
                }
            }
            ),
            this.update(P)
        }
    }
    ;
    const B = ["debug", "info", "warn", "error"];
    var k = B.reduce((e,t,n)=>(e[t] = function() {
        const e = "debug" === t ? "log" : t
          , r = j.logging;
        if (r && console && "function" == typeof console[e]) {
            const s = B.indexOf(r.toString().toLocaleLowerCase());
            if (!0 === r || s > -1 && n >= s) {
                for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
                    i[a] = arguments[a];
                const [n,...r] = [...i];
                console[e](`${t.toUpperCase()} - (FB-CAPI-MODULE) ${n}`, ...r)
            }
        }
    }
    ,
    e), {});
    function I(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 31536e3
          , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "/"
          , o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0
          , i = new Date;
        i.setTime(i.getTime() + 1e3 * n);
        let a = ";expires=" + i.toUTCString()
          , s = ";max-age=" + n
          , u = ";path=" + r
          , c = o ? ";domain=" + o : ""
          , f = e + "=" + encodeURIComponent(t);
        document.cookie = f + s + a + c + u
    }
    function R(e) {
        const t = e + "="
          , n = document.cookie.split(";");
        for (let e = 0; e < n.length; e++) {
            const r = n[e].trim();
            if (0 === r.indexOf(t))
                return decodeURIComponent(r.substring(t.length, r.length))
        }
        return ""
    }
    async function U(e) {
        return window.ats && window.ats.retrieveEnvelope ? await window.ats.retrieveEnvelope(null, e) : null
    }
    function L(e) {
        return !!function(e, t) {
            if (e)
                try {
                    return new RegExp(e).test(t)
                } catch (e) {
                    return k.error("Regex is invalid: ", e),
                    !1
                }
            return !0
        }(e, window.location.href) || (k.debug("Regex didn't pass for: ", e),
        !1)
    }
    function D() {
        let e = R("_fbc");
        return "" === e && (k.debug("There is no fbc value in the cookie!"),
        e = function(e) {
            try {
                let t = new URL(window.location.href).searchParams.get(e);
                return null === t ? (k.debug("There is no such url parameter. \n Tried to fetch: ", e),
                null) : t
            } catch (e) {
                k.error("Creating URL object failed: ", e)
            }
        }("fbclid"),
        null === e) ? (k.debug("There is no fbc value in the url!"),
        null) : e
    }
    n(53);
    async function V() {
        k.debug("User is in the US"),
        window.__uspapi ? (k.debug("CCPA library is present"),
        __uspapi("getUSPData", 1, (e,t)=>{
            if (null === e.uspString)
                return k.debug("User did not interact with consent manager."),
                ae();
            if (t) {
                if (function(e, t, n, r) {
                    if (4 !== e.length)
                        return r("CCPA consent string is not 4 characters long!"),
                        !1;
                    const o = e.split("")[2];
                    return "Y" === o ? (n("User didn't give consent. Library will shut down."),
                    t.ccpaConsentString = void 0,
                    !1) : ("N" === o ? (n("User gave consent"),
                    t.ccpaConsentString = e) : "-" === o && (n("CCPA doesnt apply to this user"),
                    t.ccpaConsentString = void 0),
                    !0)
                }(e.uspString, j, k.debug, k.error))
                    return ae()
            } else
                k.debug("User didn't give consent. Library will shut down.")
        }
        )) : (k.debug("Library __uspapi is not present."),
        k.debug("CCPA consent is required. Library will shutdown."))
    }
    const K = [];
    function M(e, t, n, r) {
        let o = {
            event_name: e.eventType,
            eventName: e.eventName,
            event_time: Math.round(+new Date / 1e3),
            event_source_url: window.location.href,
            user_data: {
                client_user_agent: j.clientUserAgent
            },
            trigger: e.triggerEvent
        };
        r && (o.event_id = r),
        (null == t ? void 0 : t.length) > 0 && (o.custom_data = t),
        (null == n ? void 0 : n.length) > 0 && (o.customer_information = n);
        const i = function() {
            let e = R("_fbp");
            return "" === e ? (k.debug("There is no fbp value in the cookie!"),
            null) : e
        }()
          , a = D();
        null !== i && (o.user_data.fbp = i),
        null !== a && (o.user_data.fbc = a),
        k.debug("Event is generated."),
        K.push(o)
    }
    function F(e) {
        for (let t = K.length - 1; t >= 0; t--)
            if (K[t].eventName === e)
                return K[t];
        return null
    }
    function N() {
        for (let e = 0; e < K.length; e++)
            "automatically" === K[e].trigger && K.splice(e, 1)
    }
    const H = Object.freeze({
        LIVERAMP: "LIVERAMP",
        FACEBOOK: "FACEBOOK",
        PAIR_ID: "PAIR_ID"
    });
    Object.freeze({
        LIVERAMP: "_lr_env",
        FACEBOOK: "_lr_fb_env",
        PAIR_ID: "_lr_pairId"
    }),
    Object.freeze({
        LIVERAMP: 19,
        FACEBOOK: 24,
        PAIR_ID: 25
    });
    let q, G = function() {
        try {
            return "https://fb-capi-acc.acc.launch.liveramp.com/send-events"
        } catch (e) {
            k.error(e)
        }
    }();
    async function J() {
        const e = [];
        for (const t of K)
            "automatically" === t.trigger && e.push({
                ...t
            });
        e.length > 0 && (!async function(e) {
            let t = JSON.parse(localStorage.getItem("_lr_cached_events")) || [];
            e.constructor === Array ? t.push(...e) : t.push(e);
            t.length > 59 && t.splice(0, t.length - 59);
            try {
                localStorage.setItem("_lr_cached_events", JSON.stringify(t))
            } catch (e) {
                k.debug("Caching failed, all events will be sent"),
                $(t)
            }
        }(e),
        N())
    }
    async function z(e) {
        let t = {
            events: e
        };
        j.testEventCode && (t = {
            events: e,
            test_event_code: j.testEventCode
        }),
        await async function(e, t) {
            try {
                if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
                    const n = {
                        method: "POST",
                        headers: new Headers({
                            "content-type": "application/json",
                            Accept: "application/json"
                        }),
                        keepalive: !0
                    };
                    n.body = JSON.stringify(t);
                    const r = await fetch(e, n);
                    if (!r || 200 !== r.status)
                        throw new Error("Status code is not 200 ",r)
                } else
                    navigator.sendBeacon(e, JSON.stringify(t))
            } catch (e) {
                k.error("There has been a problem with HTTP POST method: ", e)
            }
        }(G + "/" + j.atsConfigID, t)
    }
    function W(e) {
        delete e.trigger,
        delete e.eventName,
        e.user_data.external_id = j.envelope
    }
    async function $(e) {
        const t = e || JSON.parse(localStorage.getItem("_lr_cached_events"));
        if (!t)
            return k.debug("No cached events found");
        if (!j.envelope) {
            let e = await U(H.FACEBOOK);
            if (!e || "" === e)
                return k.debug("FB envelope is not present. Data won't be send.");
            e = JSON.parse(e),
            j.envelope = e.envelope
        }
        for (const e of t)
            W(e);
        k.debug("Started sending cached events");
        try {
            await z(t)
        } catch (e) {
            k.debug(e)
        }
        localStorage.removeItem("_lr_cached_events"),
        N()
    }
    function Y(e, t) {
        let n = void 0;
        if (e)
            if ("cssSelector" === t) {
                const t = document.querySelectorAll(e);
                void 0 !== t[0] && void 0 !== t[0].innerText && t[0].innerText.length > 0 && (n = t[0].innerText,
                k.debug("EventId scan found: ", n))
            } else
                "url" === t && (n = ee(e, window.location.href),
                k.debug("URL eventId found: ", n));
        return n
    }
    function X(e) {
        if (!e || 0 === (null == e ? void 0 : e.length))
            return [];
        const t = [];
        for (const n of e)
            "dom" === n.detection ? Z(n.name, n.source, t) : "url" === n.detection && Q(n.name, n.source, t);
        return t
    }
    function Z(e, t, n) {
        const r = document.querySelectorAll(t);
        if (void 0 !== r[0] && void 0 !== r[0].innerText && r[0].innerText.length > 0) {
            let t = {
                key: e,
                value: r[0].innerText
            };
            k.debug("DOM scan found: ", t),
            n.push(t)
        }
    }
    function Q(e, t, n) {
        let r = ee(t, window.location.href);
        if (null !== r) {
            let t = {
                key: e,
                value: r
            };
            k.debug("URL parameter found: ", t),
            n.push(t)
        }
    }
    function ee(e, t) {
        let n = null;
        try {
            n = new URL(t).searchParams.get(e)
        } catch (e) {
            k.debug("Creating URL object failed: ", e)
        }
        return null === n ? (k.debug("There is no such url parameter. \n Tried to fetch: ", n),
        null) : n
    }
    const te = {
        method: "GET",
        mode: "cors"
    };
    async function ne(e) {
        try {
            const t = await fetch(e, te);
            if (t && 200 === t.status && null !== t.body)
                return t.json()
        } catch (e) {
            console.error("There has been a problem with your fetch operation: ", e)
        }
    }
    async function re() {
        let e = R("_lr_geo_location");
        if ("" === e) {
            const t = await async function() {
                const e = await ne("https://geo.privacymanager.io/");
                if (e)
                    return e;
                console.error("Geo location is undefined or empty")
            }();
            e = t.country,
            I("_lr_geo_location_state", t.region, 86400),
            e && "" !== e || (e = "US"),
            I("_lr_geo_location", e, 86400)
        }
        return e
    }
    let oe;
    async function ie(e) {
        j.update(e),
        await async function() {
            if (k.debug("Config: ", j),
            oe = await re(),
            "US" !== oe)
                return void k.debug("Country code is: ", oe, " Stopping library flow");
            j.testEventCode && (j.logging = "debug",
            k.debug("Test mode activated."));
            let e = await U(H.FACEBOOK);
            if (e && e.length > 0) {
                var t;
                e = JSON.parse(e),
                null !== (t = e) && void 0 !== t && t.envelope && (k.debug("FB envelope is present"),
                j.envelope = e.envelope)
            }
            j.clientUserAgent = window.navigator.userAgent,
            $(),
            q || (q = setInterval($, 36e5)),
            document.addEventListener("visibilitychange", e=>{
                "hidden" === document.visibilityState && $()
            }
            ),
            ue(),
            function() {
                let e = location.href;
                try {
                    new MutationObserver(()=>{
                        const t = location.href;
                        t !== e && (e = t,
                        ue())
                    }
                    ).observe(document, {
                        subtree: !0,
                        childList: !0
                    })
                } catch (e) {
                    k.error(e)
                }
            }()
        }()
    }
    async function ae() {
        !function(e) {
            k.debug("Starting detection.");
            for (const t of e)
                if (L(t.urlRegexIdentifiers)) {
                    const e = X(t.customDataParameters);
                    if (k.debug("eventCustomData: ", e),
                    "Purchase" === t.eventType && 2 !== e.filter(e=>"currency" === e.key || "value" === e.key).length)
                        continue;
                    const n = X(t.customerInformation)
                      , r = Y(t.eventIdSelector, t.eventIdDetectionType);
                    k.debug("eventCustomerInformation: ", n),
                    M(t, e, n, r)
                }
            J()
        }(j.events)
    }
    function se(e) {
        k.debug("Send events: ", e),
        async function(e) {
            if (e.constructor === Array) {
                k.debug("Sending multiple events.");
                const t = [];
                for (const n of e) {
                    const e = F(n);
                    null !== e ? "api" === e.trigger ? t.push({
                        ...e
                    }) : k.debug("Event (" + e.eventName + ") isn't configured to be sent by API call.") : k.error("Event (" + n + ") not found.")
                }
                if (t.length > 0) {
                    for (const e of t)
                        W(e);
                    await z(t)
                }
            } else {
                k.debug("Sending a single event.");
                const t = F(e);
                if (null === t)
                    return void k.error("Event (" + e + ") not found.");
                if ("api" === t.trigger) {
                    const e = {
                        ...t
                    };
                    W(e),
                    await z([e])
                } else
                    k.debug("Event (" + e + ") isn't configured to be sent by API call.")
            }
        }(e)
    }
    function ue() {
        j.iabUSConsent ? (k.debug("Consent is required. Checking consent."),
        V()) : (k.debug("Consent is not required. Pixel custom data will start."),
        ae())
    }
    const ce = n(111);
    function fe(e) {
        ie(e)
    }
    function le(e) {
        se(e)
    }
    function pe(e) {
        const t = {
            FBCAPI_MODULE_VERSION: ce.version,
            FBCAPI_MODULE_CONFIG: JSON.parse(JSON.stringify(j))
        };
        if (!e)
            return t;
        e(t)
    }
}
]);
window.fbcapimodule.start({
    "logging": "debug",
    "atsConfigID": "a15dfeef-211e-4025-a6b8-ee545a81e707",
    "events": [{
        "urlRegexIdentifiers": [],
        "useUrlRegexValue": false,
        "customDataParameters": [{
            "detection": "dom",
            "source": "s",
            "name": "currency"
        }, {
            "detection": "dom",
            "source": "a",
            "name": "value"
        }],
        "created": "Wed Mar 22 2023 13:37:12 GMT+0100 (Central European Standard Time)",
        "eventName": "test",
        "triggerEvent": "automatically",
        "eventType": "Purchase",
        "lastModified": "Wed Mar 22 2023 13:37:12 GMT+0100 (Central European Standard Time)"
    }],
    "actionSource": "chat"
});
window.ats = {},
window.ats.LIB_GENERATED_TIMESTAMP = +new Date,
window.ats.setAdditionalData = function(e) {
    window.atsdropmatchpixelmodule && window.atsdropmatchpixelmodule.setAdditionalData(e),
    window.atsenvelopemodule && window.atsenvelopemodule.setAdditionalData(e)
}
,
window.ats.retrieveEnvelope = function(e, t="_lr_env") {
    if (window.atsenvelopemodule)
        return window.atsenvelopemodule.retrieveEnvelope(e, t)
}
,
window.ats.setOptOut = function(e, t) {
    return window.atsenvelopemodule ? window.atsenvelopemodule.setOptOut(e, t) : window.atsdropmatchpixelmodule ? window.atsdropmatchpixelmodule.setOptOut(e, t) : void 0
}
,
window.ats.setOptOutStateBasedOnStoredIdentifier = function() {
    return window.atsenvelopemodule ? window.atsenvelopemodule.setOptOutStateBasedOnStoredIdentifier() : window.atsdropmatchpixelmodule ? window.atsdropmatchpixelmodule.setOptOutStateBasedOnStoredIdentifier() : void 0
}
,
window.ats.outputCurrentConfiguration = function(e) {
    var t = {};
    return window.atsdropmatchpixelmodule && (t.DROP_MATCH_PIXEL_MODULE_INFO = window.atsdropmatchpixelmodule.outputCurrentConfiguration()),
    window.atsenvelopemodule && (t.ENVELOPE_MODULE_INFO = window.atsenvelopemodule.outputCurrentConfiguration()),
    window.atsdetectionmodule && (t.DETECTION_MODULE_INFO = window.atsdetectionmodule.outputCurrentConfiguration()),
    window.fbcapimodule && (t.FBCAPI_MODULE_INFO = window.fbcapimodule.outputCurrentConfiguration()),
    window.atsdirectmodule && (t.DIRECT_MODULE_INFO = window.atsdirectmodule.outputCurrentConfiguration()),
    t.LIB_GENERATED_TIMESTAMP = window.ats.LIB_GENERATED_TIMESTAMP,
    e ? e(t) : t
}
,
window.ats.triggerDetection = function() {
    window.atsdetectionmodule && window.atsdetectionmodule.triggerDetection()
}
,
window.ats.invalidateEnvelope = function() {
    window.atsenvelopemodule && window.atsenvelopemodule.invalidateEnvelope()
}
,
window.ats.sendFbEvents = function(e) {
    window.fbcapimodule && window.fbcapimodule.sendFbEvents(e)
}
,
window.ats.getSegmentsData = async function() {
    if (window.atsdirectmodule)
        return window.atsdirectmodule.getSegmentsData()
}
,
window.ats.invalidateCachedSegments = function() {
    if (window.atsdirectmodule)
        return window.atsdirectmodule.invalidateCachedSegments()
}
;
