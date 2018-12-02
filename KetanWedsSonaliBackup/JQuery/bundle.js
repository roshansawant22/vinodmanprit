!function e(t, n, r) {
    function a(i, l) {
        if (!n[i]) {
            if (!t[i]) {
                var s = "function" == typeof require && require;
                if (!l && s) return s(i, !0);
                if (o) return o(i, !0);
                var u = new Error("Cannot find module '" + i + "'");
                throw u.code = "MODULE_NOT_FOUND", u;
            }
            var c = n[i] = {
                exports: {}
            };
            t[i][0].call(c.exports, function(e) {
                var n = t[i][1][e];
                return a(n ? n : e);
            }, c, c.exports, e, t, n, r);
        }
        return n[i].exports;
    }
    for (var o = "function" == typeof require && require, i = 0; i < r.length; i++) a(r[i]);
    return a;
}({
    1: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/array/from"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/array/from": 28
    } ],
    2: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/get-iterator"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/get-iterator": 29
    } ],
    3: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/is-iterable"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/is-iterable": 30
    } ],
    4: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/json/stringify"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/json/stringify": 31
    } ],
    5: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/map"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/map": 32
    } ],
    6: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/object/assign"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/object/assign": 33
    } ],
    7: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/object/create"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/object/create": 34
    } ],
    8: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/object/define-property"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/object/define-property": 35
    } ],
    9: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/object/get-prototype-of"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/object/get-prototype-of": 36
    } ],
    10: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/object/keys"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/object/keys": 37
    } ],
    11: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/object/set-prototype-of"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/object/set-prototype-of": 38
    } ],
    12: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/object/values"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/object/values": 39
    } ],
    13: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/promise"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/promise": 40
    } ],
    14: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/symbol"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/symbol": 41
    } ],
    15: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/symbol/iterator"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/symbol/iterator": 42
    } ],
    16: [ function(e, t, n) {
        t.exports = {
            "default": e("core-js/library/fn/weak-map"),
            __esModule: !0
        };
    }, {
        "core-js/library/fn/weak-map": 43
    } ],
    17: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var a = e("../core-js/promise"), o = r(a);
        n["default"] = function(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new o["default"](function(e, n) {
                    function r(a, i) {
                        try {
                            var l = t[a](i), s = l.value;
                        } catch (u) {
                            return void n(u);
                        }
                        l.done ? e(s) : o["default"].resolve(s).then(function(e) {
                            r("next", e);
                        }, function(e) {
                            r("throw", e);
                        });
                    }
                    r("next");
                });
            };
        };
    }, {
        "../core-js/promise": 13
    } ],
    18: [ function(e, t, n) {
        "use strict";
        n.__esModule = !0, n["default"] = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        };
    }, {} ],
    19: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var a = e("../core-js/object/define-property"), o = r(a);
        n["default"] = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    o["default"](e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }();
    }, {
        "../core-js/object/define-property": 8
    } ],
    20: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var a = e("../core-js/object/define-property"), o = r(a);
        n["default"] = function(e, t, n) {
            return t in e ? o["default"](e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        };
    }, {
        "../core-js/object/define-property": 8
    } ],
    21: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var a = e("../core-js/object/assign"), o = r(a);
        n["default"] = o["default"] || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        };
    }, {
        "../core-js/object/assign": 6
    } ],
    22: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var a = e("../core-js/object/set-prototype-of"), o = r(a), i = e("../core-js/object/create"), l = r(i), s = e("../helpers/typeof"), u = r(s);
        n["default"] = function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : u["default"](t)));
            e.prototype = l["default"](t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (o["default"] ? o["default"](e, t) : e.__proto__ = t);
        };
    }, {
        "../core-js/object/create": 7,
        "../core-js/object/set-prototype-of": 11,
        "../helpers/typeof": 27
    } ],
    23: [ function(e, t, n) {
        "use strict";
        n.__esModule = !0, n["default"] = function(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n;
        };
    }, {} ],
    24: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var a = e("../helpers/typeof"), o = r(a);
        n["default"] = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" == typeof t ? "undefined" : o["default"](t)) && "function" != typeof t ? e : t;
        };
    }, {
        "../helpers/typeof": 27
    } ],
    25: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var a = e("../core-js/is-iterable"), o = r(a), i = e("../core-js/get-iterator"), l = r(i);
        n["default"] = function() {
            function e(e, t) {
                var n = [], r = !0, a = !1, o = void 0;
                try {
                    for (var i, s = l["default"](e); !(r = (i = s.next()).done) && (n.push(i.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (u) {
                    a = !0, o = u;
                } finally {
                    try {
                        !r && s["return"] && s["return"]();
                    } finally {
                        if (a) throw o;
                    }
                }
                return n;
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (o["default"](Object(t))) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
    }, {
        "../core-js/get-iterator": 2,
        "../core-js/is-iterable": 3
    } ],
    26: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        n.__esModule = !0;
        var a = e("../core-js/array/from"), o = r(a);
        n["default"] = function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n;
            }
            return o["default"](e);
        };
    }, {
        "../core-js/array/from": 1
    } ],
    27: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        var a = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof _Symbol && e.constructor === _Symbol ? "symbol" : typeof e;
        };
        n.__esModule = !0;
        var o = e("../core-js/symbol/iterator"), i = r(o), l = e("../core-js/symbol"), s = r(l);
        n["default"] = "function" == typeof s["default"] && "symbol" === a(i["default"]) ? function(e) {
            return "undefined" == typeof e ? "undefined" : a(e);
        } : function(e) {
            return e && "function" == typeof s["default"] && e.constructor === s["default"] ? "symbol" : "undefined" == typeof e ? "undefined" : a(e);
        };
    }, {
        "../core-js/symbol": 14,
        "../core-js/symbol/iterator": 15
    } ],
    28: [ function(e, t, n) {
        e("../../modules/es6.string.iterator"), e("../../modules/es6.array.from"), t.exports = e("../../modules/$.core").Array.from;
    }, {
        "../../modules/$.core": 55,
        "../../modules/es6.array.from": 108,
        "../../modules/es6.string.iterator": 117
    } ],
    29: [ function(e, t, n) {
        e("../modules/web.dom.iterable"), e("../modules/es6.string.iterator"), t.exports = e("../modules/core.get-iterator");
    }, {
        "../modules/core.get-iterator": 106,
        "../modules/es6.string.iterator": 117,
        "../modules/web.dom.iterable": 122
    } ],
    30: [ function(e, t, n) {
        e("../modules/web.dom.iterable"), e("../modules/es6.string.iterator"), t.exports = e("../modules/core.is-iterable");
    }, {
        "../modules/core.is-iterable": 107,
        "../modules/es6.string.iterator": 117,
        "../modules/web.dom.iterable": 122
    } ],
    31: [ function(e, t, n) {
        var r = e("../../modules/$.core");
        t.exports = function(e) {
            return (r.JSON && r.JSON.stringify || JSON.stringify).apply(JSON, arguments);
        };
    }, {
        "../../modules/$.core": 55
    } ],
    32: [ function(e, t, n) {
        e("../modules/es6.object.to-string"), e("../modules/es6.string.iterator"), e("../modules/web.dom.iterable"), 
        e("../modules/es6.map"), e("../modules/es7.map.to-json"), t.exports = e("../modules/$.core").Map;
    }, {
        "../modules/$.core": 55,
        "../modules/es6.map": 110,
        "../modules/es6.object.to-string": 115,
        "../modules/es6.string.iterator": 117,
        "../modules/es7.map.to-json": 120,
        "../modules/web.dom.iterable": 122
    } ],
    33: [ function(e, t, n) {
        e("../../modules/es6.object.assign"), t.exports = e("../../modules/$.core").Object.assign;
    }, {
        "../../modules/$.core": 55,
        "../../modules/es6.object.assign": 111
    } ],
    34: [ function(e, t, n) {
        var r = e("../../modules/$");
        t.exports = function(e, t) {
            return r.create(e, t);
        };
    }, {
        "../../modules/$": 80
    } ],
    35: [ function(e, t, n) {
        var r = e("../../modules/$");
        t.exports = function(e, t, n) {
            return r.setDesc(e, t, n);
        };
    }, {
        "../../modules/$": 80
    } ],
    36: [ function(e, t, n) {
        e("../../modules/es6.object.get-prototype-of"), t.exports = e("../../modules/$.core").Object.getPrototypeOf;
    }, {
        "../../modules/$.core": 55,
        "../../modules/es6.object.get-prototype-of": 112
    } ],
    37: [ function(e, t, n) {
        e("../../modules/es6.object.keys"), t.exports = e("../../modules/$.core").Object.keys;
    }, {
        "../../modules/$.core": 55,
        "../../modules/es6.object.keys": 113
    } ],
    38: [ function(e, t, n) {
        e("../../modules/es6.object.set-prototype-of"), t.exports = e("../../modules/$.core").Object.setPrototypeOf;
    }, {
        "../../modules/$.core": 55,
        "../../modules/es6.object.set-prototype-of": 114
    } ],
    39: [ function(e, t, n) {
        e("../../modules/es7.object.values"), t.exports = e("../../modules/$.core").Object.values;
    }, {
        "../../modules/$.core": 55,
        "../../modules/es7.object.values": 121
    } ],
    40: [ function(e, t, n) {
        e("../modules/es6.object.to-string"), e("../modules/es6.string.iterator"), e("../modules/web.dom.iterable"), 
        e("../modules/es6.promise"), t.exports = e("../modules/$.core").Promise;
    }, {
        "../modules/$.core": 55,
        "../modules/es6.object.to-string": 115,
        "../modules/es6.promise": 116,
        "../modules/es6.string.iterator": 117,
        "../modules/web.dom.iterable": 122
    } ],
    41: [ function(e, t, n) {
        e("../../modules/es6.symbol"), e("../../modules/es6.object.to-string"), t.exports = e("../../modules/$.core").Symbol;
    }, {
        "../../modules/$.core": 55,
        "../../modules/es6.object.to-string": 115,
        "../../modules/es6.symbol": 118
    } ],
    42: [ function(e, t, n) {
        e("../../modules/es6.string.iterator"), e("../../modules/web.dom.iterable"), t.exports = e("../../modules/$.wks")("iterator");
    }, {
        "../../modules/$.wks": 104,
        "../../modules/es6.string.iterator": 117,
        "../../modules/web.dom.iterable": 122
    } ],
    43: [ function(e, t, n) {
        e("../modules/es6.object.to-string"), e("../modules/web.dom.iterable"), e("../modules/es6.weak-map"), 
        t.exports = e("../modules/$.core").WeakMap;
    }, {
        "../modules/$.core": 55,
        "../modules/es6.object.to-string": 115,
        "../modules/es6.weak-map": 119,
        "../modules/web.dom.iterable": 122
    } ],
    44: [ function(e, t, n) {
        t.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e;
        };
    }, {} ],
    45: [ function(e, t, n) {
        t.exports = function() {};
    }, {} ],
    46: [ function(e, t, n) {
        var r = e("./$.is-object");
        t.exports = function(e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e;
        };
    }, {
        "./$.is-object": 73
    } ],
    47: [ function(e, t, n) {
        var r = e("./$.ctx"), a = e("./$.iobject"), o = e("./$.to-object"), i = e("./$.to-length"), l = e("./$.array-species-create");
        t.exports = function(e) {
            var t = 1 == e, n = 2 == e, s = 3 == e, u = 4 == e, c = 6 == e, d = 5 == e || c;
            return function(f, m, p) {
                for (var g, b, h = o(f), v = a(h), _ = r(m, p, 3), y = i(v.length), w = 0, x = t ? l(f, y) : n ? l(f, 0) : void 0; y > w; w++) if ((d || w in v) && (g = v[w], 
                b = _(g, w, h), e)) if (t) x[w] = b; else if (b) switch (e) {
                  case 3:
                    return !0;

                  case 5:
                    return g;

                  case 6:
                    return w;

                  case 2:
                    x.push(g);
                } else if (u) return !1;
                return c ? -1 : s || u ? u : x;
            };
        };
    }, {
        "./$.array-species-create": 48,
        "./$.ctx": 56,
        "./$.iobject": 70,
        "./$.to-length": 101,
        "./$.to-object": 102
    } ],
    48: [ function(e, t, n) {
        var r = e("./$.is-object"), a = e("./$.is-array"), o = e("./$.wks")("species");
        t.exports = function(e, t) {
            var n;
            return a(e) && (n = e.constructor, "function" != typeof n || n !== Array && !a(n.prototype) || (n = void 0), 
            r(n) && (n = n[o], null === n && (n = void 0))), new (void 0 === n ? Array : n)(t);
        };
    }, {
        "./$.is-array": 72,
        "./$.is-object": 73,
        "./$.wks": 104
    } ],
    49: [ function(e, t, n) {
        var r = e("./$.cof"), a = e("./$.wks")("toStringTag"), o = "Arguments" == r(function() {
            return arguments;
        }());
        t.exports = function(e) {
            var t, n, i;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = (t = Object(e))[a]) ? n : o ? r(t) : "Object" == (i = r(t)) && "function" == typeof t.callee ? "Arguments" : i;
        };
    }, {
        "./$.cof": 50,
        "./$.wks": 104
    } ],
    50: [ function(e, t, n) {
        var r = {}.toString;
        t.exports = function(e) {
            return r.call(e).slice(8, -1);
        };
    }, {} ],
    51: [ function(e, t, n) {
        "use strict";
        var r = e("./$"), a = e("./$.hide"), o = e("./$.redefine-all"), i = e("./$.ctx"), l = e("./$.strict-new"), s = e("./$.defined"), u = e("./$.for-of"), c = e("./$.iter-define"), d = e("./$.iter-step"), f = e("./$.uid")("id"), m = e("./$.has"), p = e("./$.is-object"), g = e("./$.set-species"), b = e("./$.descriptors"), h = Object.isExtensible || p, v = b ? "_s" : "size", _ = 0, y = function(e, t) {
            if (!p(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!m(e, f)) {
                if (!h(e)) return "F";
                if (!t) return "E";
                a(e, f, ++_);
            }
            return "O" + e[f];
        }, w = function(e, t) {
            var n, r = y(t);
            if ("F" !== r) return e._i[r];
            for (n = e._f; n; n = n.n) if (n.k == t) return n;
        };
        t.exports = {
            getConstructor: function(e, t, n, a) {
                var c = e(function(e, o) {
                    l(e, c, t), e._i = r.create(null), e._f = void 0, e._l = void 0, e[v] = 0, void 0 != o && u(o, n, e[a], e);
                });
                return o(c.prototype, {
                    clear: function() {
                        for (var e = this, t = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), 
                        delete t[n.i];
                        e._f = e._l = void 0, e[v] = 0;
                    },
                    "delete": function(e) {
                        var t = this, n = w(t, e);
                        if (n) {
                            var r = n.n, a = n.p;
                            delete t._i[n.i], n.r = !0, a && (a.n = r), r && (r.p = a), t._f == n && (t._f = r), 
                            t._l == n && (t._l = a), t[v]--;
                        }
                        return !!n;
                    },
                    forEach: function(e) {
                        for (var t, n = i(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.n : this._f; ) for (n(t.v, t.k, this); t && t.r; ) t = t.p;
                    },
                    has: function(e) {
                        return !!w(this, e);
                    }
                }), b && r.setDesc(c.prototype, "size", {
                    get: function() {
                        return s(this[v]);
                    }
                }), c;
            },
            def: function(e, t, n) {
                var r, a, o = w(e, t);
                return o ? o.v = n : (e._l = o = {
                    i: a = y(t, !0),
                    k: t,
                    v: n,
                    p: r = e._l,
                    n: void 0,
                    r: !1
                }, e._f || (e._f = o), r && (r.n = o), e[v]++, "F" !== a && (e._i[a] = o)), e;
            },
            getEntry: w,
            setStrong: function(e, t, n) {
                c(e, t, function(e, t) {
                    this._t = e, this._k = t, this._l = void 0;
                }, function() {
                    for (var e = this, t = e._k, n = e._l; n && n.r; ) n = n.p;
                    return e._t && (e._l = n = n ? n.n : e._t._f) ? "keys" == t ? d(0, n.k) : "values" == t ? d(0, n.v) : d(0, [ n.k, n.v ]) : (e._t = void 0, 
                    d(1));
                }, n ? "entries" : "values", !n, !0), g(t);
            }
        };
    }, {
        "./$": 80,
        "./$.ctx": 56,
        "./$.defined": 57,
        "./$.descriptors": 58,
        "./$.for-of": 63,
        "./$.has": 66,
        "./$.hide": 67,
        "./$.is-object": 73,
        "./$.iter-define": 76,
        "./$.iter-step": 78,
        "./$.redefine-all": 88,
        "./$.set-species": 92,
        "./$.strict-new": 96,
        "./$.uid": 103
    } ],
    52: [ function(e, t, n) {
        var r = e("./$.for-of"), a = e("./$.classof");
        t.exports = function(e) {
            return function() {
                if (a(this) != e) throw TypeError(e + "#toJSON isn't generic");
                var t = [];
                return r(this, !1, t.push, t), t;
            };
        };
    }, {
        "./$.classof": 49,
        "./$.for-of": 63
    } ],
    53: [ function(e, t, n) {
        "use strict";
        var r = e("./$.hide"), a = e("./$.redefine-all"), o = e("./$.an-object"), i = e("./$.is-object"), l = e("./$.strict-new"), s = e("./$.for-of"), u = e("./$.array-methods"), c = e("./$.has"), d = e("./$.uid")("weak"), f = Object.isExtensible || i, m = u(5), p = u(6), g = 0, b = function(e) {
            return e._l || (e._l = new h());
        }, h = function() {
            this.a = [];
        }, v = function(e, t) {
            return m(e.a, function(e) {
                return e[0] === t;
            });
        };
        h.prototype = {
            get: function(e) {
                var t = v(this, e);
                return t ? t[1] : void 0;
            },
            has: function(e) {
                return !!v(this, e);
            },
            set: function(e, t) {
                var n = v(this, e);
                n ? n[1] = t : this.a.push([ e, t ]);
            },
            "delete": function(e) {
                var t = p(this.a, function(t) {
                    return t[0] === e;
                });
                return ~t && this.a.splice(t, 1), !!~t;
            }
        }, t.exports = {
            getConstructor: function(e, t, n, r) {
                var o = e(function(e, a) {
                    l(e, o, t), e._i = g++, e._l = void 0, void 0 != a && s(a, n, e[r], e);
                });
                return a(o.prototype, {
                    "delete": function(e) {
                        return i(e) ? f(e) ? c(e, d) && c(e[d], this._i) && delete e[d][this._i] : b(this)["delete"](e) : !1;
                    },
                    has: function(e) {
                        return i(e) ? f(e) ? c(e, d) && c(e[d], this._i) : b(this).has(e) : !1;
                    }
                }), o;
            },
            def: function(e, t, n) {
                return f(o(t)) ? (c(t, d) || r(t, d, {}), t[d][e._i] = n) : b(e).set(t, n), e;
            },
            frozenStore: b,
            WEAK: d
        };
    }, {
        "./$.an-object": 46,
        "./$.array-methods": 47,
        "./$.for-of": 63,
        "./$.has": 66,
        "./$.hide": 67,
        "./$.is-object": 73,
        "./$.redefine-all": 88,
        "./$.strict-new": 96,
        "./$.uid": 103
    } ],
    54: [ function(e, t, n) {
        "use strict";
        var r = e("./$"), a = e("./$.global"), o = e("./$.export"), i = e("./$.fails"), l = e("./$.hide"), s = e("./$.redefine-all"), u = e("./$.for-of"), c = e("./$.strict-new"), d = e("./$.is-object"), f = e("./$.set-to-string-tag"), m = e("./$.descriptors");
        t.exports = function(e, t, n, p, g, b) {
            var h = a[e], v = h, _ = g ? "set" : "add", y = v && v.prototype, w = {};
            return m && "function" == typeof v && (b || y.forEach && !i(function() {
                new v().entries().next();
            })) ? (v = t(function(t, n) {
                c(t, v, e), t._c = new h(), void 0 != n && u(n, g, t[_], t);
            }), r.each.call("add,clear,delete,forEach,get,has,set,keys,values,entries".split(","), function(e) {
                var t = "add" == e || "set" == e;
                e in y && (!b || "clear" != e) && l(v.prototype, e, function(n, r) {
                    if (!t && b && !d(n)) return "get" == e ? void 0 : !1;
                    var a = this._c[e](0 === n ? 0 : n, r);
                    return t ? this : a;
                });
            }), "size" in y && r.setDesc(v.prototype, "size", {
                get: function() {
                    return this._c.size;
                }
            })) : (v = p.getConstructor(t, e, g, _), s(v.prototype, n)), f(v, e), w[e] = v, 
            o(o.G + o.W + o.F, w), b || p.setStrong(v, e, g), v;
        };
    }, {
        "./$": 80,
        "./$.descriptors": 58,
        "./$.export": 61,
        "./$.fails": 62,
        "./$.for-of": 63,
        "./$.global": 65,
        "./$.hide": 67,
        "./$.is-object": 73,
        "./$.redefine-all": 88,
        "./$.set-to-string-tag": 93,
        "./$.strict-new": 96
    } ],
    55: [ function(e, t, n) {
        var r = t.exports = {
            version: "1.2.6"
        };
        "number" == typeof __e && (__e = r);
    }, {} ],
    56: [ function(e, t, n) {
        var r = e("./$.a-function");
        t.exports = function(e, t, n) {
            if (r(e), void 0 === t) return e;
            switch (n) {
              case 1:
                return function(n) {
                    return e.call(t, n);
                };

              case 2:
                return function(n, r) {
                    return e.call(t, n, r);
                };

              case 3:
                return function(n, r, a) {
                    return e.call(t, n, r, a);
                };
            }
            return function() {
                return e.apply(t, arguments);
            };
        };
    }, {
        "./$.a-function": 44
    } ],
    57: [ function(e, t, n) {
        t.exports = function(e) {
            if (void 0 == e) throw TypeError("Can't call method on  " + e);
            return e;
        };
    }, {} ],
    58: [ function(e, t, n) {
        t.exports = !e("./$.fails")(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    }, {
        "./$.fails": 62
    } ],
    59: [ function(e, t, n) {
        var r = e("./$.is-object"), a = e("./$.global").document, o = r(a) && r(a.createElement);
        t.exports = function(e) {
            return o ? a.createElement(e) : {};
        };
    }, {
        "./$.global": 65,
        "./$.is-object": 73
    } ],
    60: [ function(e, t, n) {
        var r = e("./$");
        t.exports = function(e) {
            var t = r.getKeys(e), n = r.getSymbols;
            if (n) for (var a, o = n(e), i = r.isEnum, l = 0; o.length > l; ) i.call(e, a = o[l++]) && t.push(a);
            return t;
        };
    }, {
        "./$": 80
    } ],
    61: [ function(e, t, n) {
        var r = e("./$.global"), a = e("./$.core"), o = e("./$.ctx"), i = "prototype", l = function(e, t, n) {
            var s, u, c, d = e & l.F, f = e & l.G, m = e & l.S, p = e & l.P, g = e & l.B, b = e & l.W, h = f ? a : a[t] || (a[t] = {}), v = f ? r : m ? r[t] : (r[t] || {})[i];
            f && (n = t);
            for (s in n) u = !d && v && s in v, u && s in h || (c = u ? v[s] : n[s], h[s] = f && "function" != typeof v[s] ? n[s] : g && u ? o(c, r) : b && v[s] == c ? function(e) {
                var t = function(t) {
                    return this instanceof e ? new e(t) : e(t);
                };
                return t[i] = e[i], t;
            }(c) : p && "function" == typeof c ? o(Function.call, c) : c, p && ((h[i] || (h[i] = {}))[s] = c));
        };
        l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, t.exports = l;
    }, {
        "./$.core": 55,
        "./$.ctx": 56,
        "./$.global": 65
    } ],
    62: [ function(e, t, n) {
        t.exports = function(e) {
            try {
                return !!e();
            } catch (t) {
                return !0;
            }
        };
    }, {} ],
    63: [ function(e, t, n) {
        var r = e("./$.ctx"), a = e("./$.iter-call"), o = e("./$.is-array-iter"), i = e("./$.an-object"), l = e("./$.to-length"), s = e("./core.get-iterator-method");
        t.exports = function(e, t, n, u) {
            var c, d, f, m = s(e), p = r(n, u, t ? 2 : 1), g = 0;
            if ("function" != typeof m) throw TypeError(e + " is not iterable!");
            if (o(m)) for (c = l(e.length); c > g; g++) t ? p(i(d = e[g])[0], d[1]) : p(e[g]); else for (f = m.call(e); !(d = f.next()).done; ) a(f, p, d.value, t);
        };
    }, {
        "./$.an-object": 46,
        "./$.ctx": 56,
        "./$.is-array-iter": 71,
        "./$.iter-call": 74,
        "./$.to-length": 101,
        "./core.get-iterator-method": 105
    } ],
    64: [ function(e, t, n) {
        var r = e("./$.to-iobject"), a = e("./$").getNames, o = {}.toString, i = "object" == typeof window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], l = function(e) {
            try {
                return a(e);
            } catch (t) {
                return i.slice();
            }
        };
        t.exports.get = function(e) {
            return i && "[object Window]" == o.call(e) ? l(e) : a(r(e));
        };
    }, {
        "./$": 80,
        "./$.to-iobject": 100
    } ],
    65: [ function(e, t, n) {
        var r = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = r);
    }, {} ],
    66: [ function(e, t, n) {
        var r = {}.hasOwnProperty;
        t.exports = function(e, t) {
            return r.call(e, t);
        };
    }, {} ],
    67: [ function(e, t, n) {
        var r = e("./$"), a = e("./$.property-desc");
        t.exports = e("./$.descriptors") ? function(e, t, n) {
            return r.setDesc(e, t, a(1, n));
        } : function(e, t, n) {
            return e[t] = n, e;
        };
    }, {
        "./$": 80,
        "./$.descriptors": 58,
        "./$.property-desc": 87
    } ],
    68: [ function(e, t, n) {
        t.exports = e("./$.global").document && document.documentElement;
    }, {
        "./$.global": 65
    } ],
    69: [ function(e, t, n) {
        t.exports = function(e, t, n) {
            var r = void 0 === n;
            switch (t.length) {
              case 0:
                return r ? e() : e.call(n);

              case 1:
                return r ? e(t[0]) : e.call(n, t[0]);

              case 2:
                return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);

              case 3:
                return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);

              case 4:
                return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]);
            }
            return e.apply(n, t);
        };
    }, {} ],
    70: [ function(e, t, n) {
        var r = e("./$.cof");
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e);
        };
    }, {
        "./$.cof": 50
    } ],
    71: [ function(e, t, n) {
        var r = e("./$.iterators"), a = e("./$.wks")("iterator"), o = Array.prototype;
        t.exports = function(e) {
            return void 0 !== e && (r.Array === e || o[a] === e);
        };
    }, {
        "./$.iterators": 79,
        "./$.wks": 104
    } ],
    72: [ function(e, t, n) {
        var r = e("./$.cof");
        t.exports = Array.isArray || function(e) {
            return "Array" == r(e);
        };
    }, {
        "./$.cof": 50
    } ],
    73: [ function(e, t, n) {
        t.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
        };
    }, {} ],
    74: [ function(e, t, n) {
        var r = e("./$.an-object");
        t.exports = function(e, t, n, a) {
            try {
                return a ? t(r(n)[0], n[1]) : t(n);
            } catch (o) {
                var i = e["return"];
                throw void 0 !== i && r(i.call(e)), o;
            }
        };
    }, {
        "./$.an-object": 46
    } ],
    75: [ function(e, t, n) {
        "use strict";
        var r = e("./$"), a = e("./$.property-desc"), o = e("./$.set-to-string-tag"), i = {};
        e("./$.hide")(i, e("./$.wks")("iterator"), function() {
            return this;
        }), t.exports = function(e, t, n) {
            e.prototype = r.create(i, {
                next: a(1, n)
            }), o(e, t + " Iterator");
        };
    }, {
        "./$": 80,
        "./$.hide": 67,
        "./$.property-desc": 87,
        "./$.set-to-string-tag": 93,
        "./$.wks": 104
    } ],
    76: [ function(e, t, n) {
        "use strict";
        var r = e("./$.library"), a = e("./$.export"), o = e("./$.redefine"), i = e("./$.hide"), l = e("./$.has"), s = e("./$.iterators"), u = e("./$.iter-create"), c = e("./$.set-to-string-tag"), d = e("./$").getProto, f = e("./$.wks")("iterator"), m = !([].keys && "next" in [].keys()), p = "@@iterator", g = "keys", b = "values", h = function() {
            return this;
        };
        t.exports = function(e, t, n, v, _, y, w) {
            u(n, t, v);
            var x, k, E = function(e) {
                if (!m && e in S) return S[e];
                switch (e) {
                  case g:
                    return function() {
                        return new n(this, e);
                    };

                  case b:
                    return function() {
                        return new n(this, e);
                    };
                }
                return function() {
                    return new n(this, e);
                };
            }, C = t + " Iterator", T = _ == b, j = !1, S = e.prototype, N = S[f] || S[p] || _ && S[_], A = N || E(_);
            if (N) {
                var M = d(A.call(new e()));
                c(M, C, !0), !r && l(S, p) && i(M, f, h), T && N.name !== b && (j = !0, A = function() {
                    return N.call(this);
                });
            }
            if (r && !w || !m && !j && S[f] || i(S, f, A), s[t] = A, s[C] = h, _) if (x = {
                values: T ? A : E(b),
                keys: y ? A : E(g),
                entries: T ? E("entries") : A
            }, w) for (k in x) k in S || o(S, k, x[k]); else a(a.P + a.F * (m || j), t, x);
            return x;
        };
    }, {
        "./$": 80,
        "./$.export": 61,
        "./$.has": 66,
        "./$.hide": 67,
        "./$.iter-create": 75,
        "./$.iterators": 79,
        "./$.library": 82,
        "./$.redefine": 89,
        "./$.set-to-string-tag": 93,
        "./$.wks": 104
    } ],
    77: [ function(e, t, n) {
        var r = e("./$.wks")("iterator"), a = !1;
        try {
            var o = [ 7 ][r]();
            o["return"] = function() {
                a = !0;
            }, Array.from(o, function() {
                throw 2;
            });
        } catch (i) {}
        t.exports = function(e, t) {
            if (!t && !a) return !1;
            var n = !1;
            try {
                var o = [ 7 ], i = o[r]();
                i.next = function() {
                    n = !0;
                }, o[r] = function() {
                    return i;
                }, e(o);
            } catch (l) {}
            return n;
        };
    }, {
        "./$.wks": 104
    } ],
    78: [ function(e, t, n) {
        t.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            };
        };
    }, {} ],
    79: [ function(e, t, n) {
        t.exports = {};
    }, {} ],
    80: [ function(e, t, n) {
        var r = Object;
        t.exports = {
            create: r.create,
            getProto: r.getPrototypeOf,
            isEnum: {}.propertyIsEnumerable,
            getDesc: r.getOwnPropertyDescriptor,
            setDesc: r.defineProperty,
            setDescs: r.defineProperties,
            getKeys: r.keys,
            getNames: r.getOwnPropertyNames,
            getSymbols: r.getOwnPropertySymbols,
            each: [].forEach
        };
    }, {} ],
    81: [ function(e, t, n) {
        var r = e("./$"), a = e("./$.to-iobject");
        t.exports = function(e, t) {
            for (var n, o = a(e), i = r.getKeys(o), l = i.length, s = 0; l > s; ) if (o[n = i[s++]] === t) return n;
        };
    }, {
        "./$": 80,
        "./$.to-iobject": 100
    } ],
    82: [ function(e, t, n) {
        t.exports = !0;
    }, {} ],
    83: [ function(e, t, n) {
        var r, a, o, i = e("./$.global"), l = e("./$.task").set, s = i.MutationObserver || i.WebKitMutationObserver, u = i.process, c = i.Promise, d = "process" == e("./$.cof")(u), f = function() {
            var e, t, n;
            for (d && (e = u.domain) && (u.domain = null, e.exit()); r; ) t = r.domain, n = r.fn, 
            t && t.enter(), n(), t && t.exit(), r = r.next;
            a = void 0, e && e.enter();
        };
        if (d) o = function() {
            u.nextTick(f);
        }; else if (s) {
            var m = 1, p = document.createTextNode("");
            new s(f).observe(p, {
                characterData: !0
            }), o = function() {
                p.data = m = -m;
            };
        } else o = c && c.resolve ? function() {
            c.resolve().then(f);
        } : function() {
            l.call(i, f);
        };
        t.exports = function(e) {
            var t = {
                fn: e,
                next: void 0,
                domain: d && u.domain
            };
            a && (a.next = t), r || (r = t, o()), a = t;
        };
    }, {
        "./$.cof": 50,
        "./$.global": 65,
        "./$.task": 98
    } ],
    84: [ function(e, t, n) {
        var r = e("./$"), a = e("./$.to-object"), o = e("./$.iobject");
        t.exports = e("./$.fails")(function() {
            var e = Object.assign, t = {}, n = {}, r = Symbol(), a = "abcdefghijklmnopqrst";
            return t[r] = 7, a.split("").forEach(function(e) {
                n[e] = e;
            }), 7 != e({}, t)[r] || Object.keys(e({}, n)).join("") != a;
        }) ? function(e, t) {
            for (var n = a(e), i = arguments, l = i.length, s = 1, u = r.getKeys, c = r.getSymbols, d = r.isEnum; l > s; ) for (var f, m = o(i[s++]), p = c ? u(m).concat(c(m)) : u(m), g = p.length, b = 0; g > b; ) d.call(m, f = p[b++]) && (n[f] = m[f]);
            return n;
        } : Object.assign;
    }, {
        "./$": 80,
        "./$.fails": 62,
        "./$.iobject": 70,
        "./$.to-object": 102
    } ],
    85: [ function(e, t, n) {
        var r = e("./$.export"), a = e("./$.core"), o = e("./$.fails");
        t.exports = function(e, t) {
            var n = (a.Object || {})[e] || Object[e], i = {};
            i[e] = t(n), r(r.S + r.F * o(function() {
                n(1);
            }), "Object", i);
        };
    }, {
        "./$.core": 55,
        "./$.export": 61,
        "./$.fails": 62
    } ],
    86: [ function(e, t, n) {
        var r = e("./$"), a = e("./$.to-iobject"), o = r.isEnum;
        t.exports = function(e) {
            return function(t) {
                for (var n, i = a(t), l = r.getKeys(i), s = l.length, u = 0, c = []; s > u; ) o.call(i, n = l[u++]) && c.push(e ? [ n, i[n] ] : i[n]);
                return c;
            };
        };
    }, {
        "./$": 80,
        "./$.to-iobject": 100
    } ],
    87: [ function(e, t, n) {
        t.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            };
        };
    }, {} ],
    88: [ function(e, t, n) {
        var r = e("./$.redefine");
        t.exports = function(e, t) {
            for (var n in t) r(e, n, t[n]);
            return e;
        };
    }, {
        "./$.redefine": 89
    } ],
    89: [ function(e, t, n) {
        t.exports = e("./$.hide");
    }, {
        "./$.hide": 67
    } ],
    90: [ function(e, t, n) {
        t.exports = Object.is || function(e, t) {
            return e === t ? 0 !== e || 1 / e === 1 / t : e != e && t != t;
        };
    }, {} ],
    91: [ function(e, t, n) {
        var r = e("./$").getDesc, a = e("./$.is-object"), o = e("./$.an-object"), i = function(e, t) {
            if (o(e), !a(t) && null !== t) throw TypeError(t + ": can't set as prototype!");
        };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, n, a) {
                try {
                    a = e("./$.ctx")(Function.call, r(Object.prototype, "__proto__").set, 2), a(t, []), 
                    n = !(t instanceof Array);
                } catch (o) {
                    n = !0;
                }
                return function(e, t) {
                    return i(e, t), n ? e.__proto__ = t : a(e, t), e;
                };
            }({}, !1) : void 0),
            check: i
        };
    }, {
        "./$": 80,
        "./$.an-object": 46,
        "./$.ctx": 56,
        "./$.is-object": 73
    } ],
    92: [ function(e, t, n) {
        "use strict";
        var r = e("./$.core"), a = e("./$"), o = e("./$.descriptors"), i = e("./$.wks")("species");
        t.exports = function(e) {
            var t = r[e];
            o && t && !t[i] && a.setDesc(t, i, {
                configurable: !0,
                get: function() {
                    return this;
                }
            });
        };
    }, {
        "./$": 80,
        "./$.core": 55,
        "./$.descriptors": 58,
        "./$.wks": 104
    } ],
    93: [ function(e, t, n) {
        var r = e("./$").setDesc, a = e("./$.has"), o = e("./$.wks")("toStringTag");
        t.exports = function(e, t, n) {
            e && !a(e = n ? e : e.prototype, o) && r(e, o, {
                configurable: !0,
                value: t
            });
        };
    }, {
        "./$": 80,
        "./$.has": 66,
        "./$.wks": 104
    } ],
    94: [ function(e, t, n) {
        var r = e("./$.global"), a = "__core-js_shared__", o = r[a] || (r[a] = {});
        t.exports = function(e) {
            return o[e] || (o[e] = {});
        };
    }, {
        "./$.global": 65
    } ],
    95: [ function(e, t, n) {
        var r = e("./$.an-object"), a = e("./$.a-function"), o = e("./$.wks")("species");
        t.exports = function(e, t) {
            var n, i = r(e).constructor;
            return void 0 === i || void 0 == (n = r(i)[o]) ? t : a(n);
        };
    }, {
        "./$.a-function": 44,
        "./$.an-object": 46,
        "./$.wks": 104
    } ],
    96: [ function(e, t, n) {
        t.exports = function(e, t, n) {
            if (!(e instanceof t)) throw TypeError(n + ": use the 'new' operator!");
            return e;
        };
    }, {} ],
    97: [ function(e, t, n) {
        var r = e("./$.to-integer"), a = e("./$.defined");
        t.exports = function(e) {
            return function(t, n) {
                var o, i, l = String(a(t)), s = r(n), u = l.length;
                return 0 > s || s >= u ? e ? "" : void 0 : (o = l.charCodeAt(s), 55296 > o || o > 56319 || s + 1 === u || (i = l.charCodeAt(s + 1)) < 56320 || i > 57343 ? e ? l.charAt(s) : o : e ? l.slice(s, s + 2) : (o - 55296 << 10) + (i - 56320) + 65536);
            };
        };
    }, {
        "./$.defined": 57,
        "./$.to-integer": 99
    } ],
    98: [ function(e, t, n) {
        var r, a, o, i = e("./$.ctx"), l = e("./$.invoke"), s = e("./$.html"), u = e("./$.dom-create"), c = e("./$.global"), d = c.process, f = c.setImmediate, m = c.clearImmediate, p = c.MessageChannel, g = 0, b = {}, h = "onreadystatechange", v = function() {
            var e = +this;
            if (b.hasOwnProperty(e)) {
                var t = b[e];
                delete b[e], t();
            }
        }, _ = function(e) {
            v.call(e.data);
        };
        f && m || (f = function(e) {
            for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
            return b[++g] = function() {
                l("function" == typeof e ? e : Function(e), t);
            }, r(g), g;
        }, m = function(e) {
            delete b[e];
        }, "process" == e("./$.cof")(d) ? r = function(e) {
            d.nextTick(i(v, e, 1));
        } : p ? (a = new p(), o = a.port2, a.port1.onmessage = _, r = i(o.postMessage, o, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (r = function(e) {
            c.postMessage(e + "", "*");
        }, c.addEventListener("message", _, !1)) : r = h in u("script") ? function(e) {
            s.appendChild(u("script"))[h] = function() {
                s.removeChild(this), v.call(e);
            };
        } : function(e) {
            setTimeout(i(v, e, 1), 0);
        }), t.exports = {
            set: f,
            clear: m
        };
    }, {
        "./$.cof": 50,
        "./$.ctx": 56,
        "./$.dom-create": 59,
        "./$.global": 65,
        "./$.html": 68,
        "./$.invoke": 69
    } ],
    99: [ function(e, t, n) {
        var r = Math.ceil, a = Math.floor;
        t.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? a : r)(e);
        };
    }, {} ],
    100: [ function(e, t, n) {
        var r = e("./$.iobject"), a = e("./$.defined");
        t.exports = function(e) {
            return r(a(e));
        };
    }, {
        "./$.defined": 57,
        "./$.iobject": 70
    } ],
    101: [ function(e, t, n) {
        var r = e("./$.to-integer"), a = Math.min;
        t.exports = function(e) {
            return e > 0 ? a(r(e), 9007199254740991) : 0;
        };
    }, {
        "./$.to-integer": 99
    } ],
    102: [ function(e, t, n) {
        var r = e("./$.defined");
        t.exports = function(e) {
            return Object(r(e));
        };
    }, {
        "./$.defined": 57
    } ],
    103: [ function(e, t, n) {
        var r = 0, a = Math.random();
        t.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++r + a).toString(36));
        };
    }, {} ],
    104: [ function(e, t, n) {
        var r = e("./$.shared")("wks"), a = e("./$.uid"), o = e("./$.global").Symbol;
        t.exports = function(e) {
            return r[e] || (r[e] = o && o[e] || (o || a)("Symbol." + e));
        };
    }, {
        "./$.global": 65,
        "./$.shared": 94,
        "./$.uid": 103
    } ],
    105: [ function(e, t, n) {
        var r = e("./$.classof"), a = e("./$.wks")("iterator"), o = e("./$.iterators");
        t.exports = e("./$.core").getIteratorMethod = function(e) {
            return void 0 != e ? e[a] || e["@@iterator"] || o[r(e)] : void 0;
        };
    }, {
        "./$.classof": 49,
        "./$.core": 55,
        "./$.iterators": 79,
        "./$.wks": 104
    } ],
    106: [ function(e, t, n) {
        var r = e("./$.an-object"), a = e("./core.get-iterator-method");
        t.exports = e("./$.core").getIterator = function(e) {
            var t = a(e);
            if ("function" != typeof t) throw TypeError(e + " is not iterable!");
            return r(t.call(e));
        };
    }, {
        "./$.an-object": 46,
        "./$.core": 55,
        "./core.get-iterator-method": 105
    } ],
    107: [ function(e, t, n) {
        var r = e("./$.classof"), a = e("./$.wks")("iterator"), o = e("./$.iterators");
        t.exports = e("./$.core").isIterable = function(e) {
            var t = Object(e);
            return void 0 !== t[a] || "@@iterator" in t || o.hasOwnProperty(r(t));
        };
    }, {
        "./$.classof": 49,
        "./$.core": 55,
        "./$.iterators": 79,
        "./$.wks": 104
    } ],
    108: [ function(e, t, n) {
        "use strict";
        var r = e("./$.ctx"), a = e("./$.export"), o = e("./$.to-object"), i = e("./$.iter-call"), l = e("./$.is-array-iter"), s = e("./$.to-length"), u = e("./core.get-iterator-method");
        a(a.S + a.F * !e("./$.iter-detect")(function(e) {
            Array.from(e);
        }), "Array", {
            from: function(e) {
                var t, n, a, c, d = o(e), f = "function" == typeof this ? this : Array, m = arguments, p = m.length, g = p > 1 ? m[1] : void 0, b = void 0 !== g, h = 0, v = u(d);
                if (b && (g = r(g, p > 2 ? m[2] : void 0, 2)), void 0 == v || f == Array && l(v)) for (t = s(d.length), 
                n = new f(t); t > h; h++) n[h] = b ? g(d[h], h) : d[h]; else for (c = v.call(d), 
                n = new f(); !(a = c.next()).done; h++) n[h] = b ? i(c, g, [ a.value, h ], !0) : a.value;
                return n.length = h, n;
            }
        });
    }, {
        "./$.ctx": 56,
        "./$.export": 61,
        "./$.is-array-iter": 71,
        "./$.iter-call": 74,
        "./$.iter-detect": 77,
        "./$.to-length": 101,
        "./$.to-object": 102,
        "./core.get-iterator-method": 105
    } ],
    109: [ function(e, t, n) {
        "use strict";
        var r = e("./$.add-to-unscopables"), a = e("./$.iter-step"), o = e("./$.iterators"), i = e("./$.to-iobject");
        t.exports = e("./$.iter-define")(Array, "Array", function(e, t) {
            this._t = i(e), this._i = 0, this._k = t;
        }, function() {
            var e = this._t, t = this._k, n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, a(1)) : "keys" == t ? a(0, n) : "values" == t ? a(0, e[n]) : a(0, [ n, e[n] ]);
        }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries");
    }, {
        "./$.add-to-unscopables": 45,
        "./$.iter-define": 76,
        "./$.iter-step": 78,
        "./$.iterators": 79,
        "./$.to-iobject": 100
    } ],
    110: [ function(e, t, n) {
        "use strict";
        var r = e("./$.collection-strong");
        e("./$.collection")("Map", function(e) {
            return function() {
                return e(this, arguments.length > 0 ? arguments[0] : void 0);
            };
        }, {
            get: function(e) {
                var t = r.getEntry(this, e);
                return t && t.v;
            },
            set: function(e, t) {
                return r.def(this, 0 === e ? 0 : e, t);
            }
        }, r, !0);
    }, {
        "./$.collection": 54,
        "./$.collection-strong": 51
    } ],
    111: [ function(e, t, n) {
        var r = e("./$.export");
        r(r.S + r.F, "Object", {
            assign: e("./$.object-assign")
        });
    }, {
        "./$.export": 61,
        "./$.object-assign": 84
    } ],
    112: [ function(e, t, n) {
        var r = e("./$.to-object");
        e("./$.object-sap")("getPrototypeOf", function(e) {
            return function(t) {
                return e(r(t));
            };
        });
    }, {
        "./$.object-sap": 85,
        "./$.to-object": 102
    } ],
    113: [ function(e, t, n) {
        var r = e("./$.to-object");
        e("./$.object-sap")("keys", function(e) {
            return function(t) {
                return e(r(t));
            };
        });
    }, {
        "./$.object-sap": 85,
        "./$.to-object": 102
    } ],
    114: [ function(e, t, n) {
        var r = e("./$.export");
        r(r.S, "Object", {
            setPrototypeOf: e("./$.set-proto").set
        });
    }, {
        "./$.export": 61,
        "./$.set-proto": 91
    } ],
    115: [ function(e, t, n) {}, {} ],
    116: [ function(e, t, n) {
        "use strict";
        var r, a = e("./$"), o = e("./$.library"), i = e("./$.global"), l = e("./$.ctx"), s = e("./$.classof"), u = e("./$.export"), c = e("./$.is-object"), d = e("./$.an-object"), f = e("./$.a-function"), m = e("./$.strict-new"), p = e("./$.for-of"), g = e("./$.set-proto").set, b = e("./$.same-value"), h = e("./$.wks")("species"), v = e("./$.species-constructor"), _ = e("./$.microtask"), y = "Promise", w = i.process, x = "process" == s(w), k = i[y], E = function(e) {
            var t = new k(function() {});
            return e && (t.constructor = Object), k.resolve(t) === t;
        }, C = function() {
            function t(e) {
                var n = new k(e);
                return g(n, t.prototype), n;
            }
            var n = !1;
            try {
                if (n = k && k.resolve && E(), g(t, k), t.prototype = a.create(k.prototype, {
                    constructor: {
                        value: t
                    }
                }), t.resolve(5).then(function() {}) instanceof t || (n = !1), n && e("./$.descriptors")) {
                    var r = !1;
                    k.resolve(a.setDesc({}, "then", {
                        get: function() {
                            r = !0;
                        }
                    })), n = r;
                }
            } catch (o) {
                n = !1;
            }
            return n;
        }(), T = function(e, t) {
            return o && e === k && t === r ? !0 : b(e, t);
        }, j = function(e) {
            var t = d(e)[h];
            return void 0 != t ? t : e;
        }, S = function(e) {
            var t;
            return c(e) && "function" == typeof (t = e.then) ? t : !1;
        }, N = function(e) {
            var t, n;
            this.promise = new e(function(e, r) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = r;
            }), this.resolve = f(t), this.reject = f(n);
        }, A = function(e) {
            try {
                e();
            } catch (t) {
                return {
                    error: t
                };
            }
        }, M = function(e, t) {
            if (!e.n) {
                e.n = !0;
                var n = e.c;
                _(function() {
                    for (var r = e.v, a = 1 == e.s, o = 0, l = function(t) {
                        var n, o, i = a ? t.ok : t.fail, l = t.resolve, s = t.reject;
                        try {
                            i ? (a || (e.h = !0), n = i === !0 ? r : i(r), n === t.promise ? s(TypeError("Promise-chain cycle")) : (o = S(n)) ? o.call(n, l, s) : l(n)) : s(r);
                        } catch (u) {
                            s(u);
                        }
                    }; n.length > o; ) l(n[o++]);
                    n.length = 0, e.n = !1, t && setTimeout(function() {
                        var t, n, a = e.p;
                        P(a) && (x ? w.emit("unhandledRejection", r, a) : (t = i.onunhandledrejection) ? t({
                            promise: a,
                            reason: r
                        }) : (n = i.console) && n.error && n.error("Unhandled promise rejection", r)), e.a = void 0;
                    }, 1);
                });
            }
        }, P = function(e) {
            var t, n = e._d, r = n.a || n.c, a = 0;
            if (n.h) return !1;
            for (;r.length > a; ) if (t = r[a++], t.fail || !P(t.promise)) return !1;
            return !0;
        }, $ = function(e) {
            var t = this;
            t.d || (t.d = !0, t = t.r || t, t.v = e, t.s = 2, t.a = t.c.slice(), M(t, !0));
        }, O = function(e) {
            var t, n = this;
            if (!n.d) {
                n.d = !0, n = n.r || n;
                try {
                    if (n.p === e) throw TypeError("Promise can't be resolved itself");
                    (t = S(e)) ? _(function() {
                        var r = {
                            r: n,
                            d: !1
                        };
                        try {
                            t.call(e, l(O, r, 1), l($, r, 1));
                        } catch (a) {
                            $.call(r, a);
                        }
                    }) : (n.v = e, n.s = 1, M(n, !1));
                } catch (r) {
                    $.call({
                        r: n,
                        d: !1
                    }, r);
                }
            }
        };
        C || (k = function(e) {
            f(e);
            var t = this._d = {
                p: m(this, k, y),
                c: [],
                a: void 0,
                s: 0,
                d: !1,
                v: void 0,
                h: !1,
                n: !1
            };
            try {
                e(l(O, t, 1), l($, t, 1));
            } catch (n) {
                $.call(t, n);
            }
        }, e("./$.redefine-all")(k.prototype, {
            then: function(e, t) {
                var n = new N(v(this, k)), r = n.promise, a = this._d;
                return n.ok = "function" == typeof e ? e : !0, n.fail = "function" == typeof t && t, 
                a.c.push(n), a.a && a.a.push(n), a.s && M(a, !1), r;
            },
            "catch": function(e) {
                return this.then(void 0, e);
            }
        })), u(u.G + u.W + u.F * !C, {
            Promise: k
        }), e("./$.set-to-string-tag")(k, y), e("./$.set-species")(y), r = e("./$.core")[y], 
        u(u.S + u.F * !C, y, {
            reject: function(e) {
                var t = new N(this), n = t.reject;
                return n(e), t.promise;
            }
        }), u(u.S + u.F * (!C || E(!0)), y, {
            resolve: function(e) {
                if (e instanceof k && T(e.constructor, this)) return e;
                var t = new N(this), n = t.resolve;
                return n(e), t.promise;
            }
        }), u(u.S + u.F * !(C && e("./$.iter-detect")(function(e) {
            k.all(e)["catch"](function() {});
        })), y, {
            all: function(e) {
                var t = j(this), n = new N(t), r = n.resolve, o = n.reject, i = [], l = A(function() {
                    p(e, !1, i.push, i);
                    var n = i.length, l = Array(n);
                    n ? a.each.call(i, function(e, a) {
                        var i = !1;
                        t.resolve(e).then(function(e) {
                            i || (i = !0, l[a] = e, --n || r(l));
                        }, o);
                    }) : r(l);
                });
                return l && o(l.error), n.promise;
            },
            race: function(e) {
                var t = j(this), n = new N(t), r = n.reject, a = A(function() {
                    p(e, !1, function(e) {
                        t.resolve(e).then(n.resolve, r);
                    });
                });
                return a && r(a.error), n.promise;
            }
        });
    }, {
        "./$": 80,
        "./$.a-function": 44,
        "./$.an-object": 46,
        "./$.classof": 49,
        "./$.core": 55,
        "./$.ctx": 56,
        "./$.descriptors": 58,
        "./$.export": 61,
        "./$.for-of": 63,
        "./$.global": 65,
        "./$.is-object": 73,
        "./$.iter-detect": 77,
        "./$.library": 82,
        "./$.microtask": 83,
        "./$.redefine-all": 88,
        "./$.same-value": 90,
        "./$.set-proto": 91,
        "./$.set-species": 92,
        "./$.set-to-string-tag": 93,
        "./$.species-constructor": 95,
        "./$.strict-new": 96,
        "./$.wks": 104
    } ],
    117: [ function(e, t, n) {
        "use strict";
        var r = e("./$.string-at")(!0);
        e("./$.iter-define")(String, "String", function(e) {
            this._t = String(e), this._i = 0;
        }, function() {
            var e, t = this._t, n = this._i;
            return n >= t.length ? {
                value: void 0,
                done: !0
            } : (e = r(t, n), this._i += e.length, {
                value: e,
                done: !1
            });
        });
    }, {
        "./$.iter-define": 76,
        "./$.string-at": 97
    } ],
    118: [ function(e, t, n) {
        "use strict";
        var r = e("./$"), a = e("./$.global"), o = e("./$.has"), i = e("./$.descriptors"), l = e("./$.export"), s = e("./$.redefine"), u = e("./$.fails"), c = e("./$.shared"), d = e("./$.set-to-string-tag"), f = e("./$.uid"), m = e("./$.wks"), p = e("./$.keyof"), g = e("./$.get-names"), b = e("./$.enum-keys"), h = e("./$.is-array"), v = e("./$.an-object"), _ = e("./$.to-iobject"), y = e("./$.property-desc"), w = r.getDesc, x = r.setDesc, k = r.create, E = g.get, C = a.Symbol, T = a.JSON, j = T && T.stringify, S = !1, N = m("_hidden"), A = r.isEnum, M = c("symbol-registry"), P = c("symbols"), $ = "function" == typeof C, O = Object.prototype, D = i && u(function() {
            return 7 != k(x({}, "a", {
                get: function() {
                    return x(this, "a", {
                        value: 7
                    }).a;
                }
            })).a;
        }) ? function(e, t, n) {
            var r = w(O, t);
            r && delete O[t], x(e, t, n), r && e !== O && x(O, t, r);
        } : x, I = function(e) {
            var t = P[e] = k(C.prototype);
            return t._k = e, i && S && D(O, e, {
                configurable: !0,
                set: function(t) {
                    o(this, N) && o(this[N], e) && (this[N][e] = !1), D(this, e, y(1, t));
                }
            }), t;
        }, R = function(e) {
            return "symbol" == typeof e;
        }, L = function(e, t, n) {
            return n && o(P, t) ? (n.enumerable ? (o(e, N) && e[N][t] && (e[N][t] = !1), n = k(n, {
                enumerable: y(0, !1)
            })) : (o(e, N) || x(e, N, y(1, {})), e[N][t] = !0), D(e, t, n)) : x(e, t, n);
        }, F = function(e, t) {
            v(e);
            for (var n, r = b(t = _(t)), a = 0, o = r.length; o > a; ) L(e, n = r[a++], t[n]);
            return e;
        }, G = function(e, t) {
            return void 0 === t ? k(e) : F(k(e), t);
        }, U = function(e) {
            var t = A.call(this, e);
            return t || !o(this, e) || !o(P, e) || o(this, N) && this[N][e] ? t : !0;
        }, B = function(e, t) {
            var n = w(e = _(e), t);
            return !n || !o(P, t) || o(e, N) && e[N][t] || (n.enumerable = !0), n;
        }, V = function(e) {
            for (var t, n = E(_(e)), r = [], a = 0; n.length > a; ) o(P, t = n[a++]) || t == N || r.push(t);
            return r;
        }, H = function(e) {
            for (var t, n = E(_(e)), r = [], a = 0; n.length > a; ) o(P, t = n[a++]) && r.push(P[t]);
            return r;
        }, W = function(e) {
            if (void 0 !== e && !R(e)) {
                for (var t, n, r = [ e ], a = 1, o = arguments; o.length > a; ) r.push(o[a++]);
                return t = r[1], "function" == typeof t && (n = t), (n || !h(t)) && (t = function(e, t) {
                    return n && (t = n.call(this, e, t)), R(t) ? void 0 : t;
                }), r[1] = t, j.apply(T, r);
            }
        }, z = u(function() {
            var e = C();
            return "[null]" != j([ e ]) || "{}" != j({
                a: e
            }) || "{}" != j(Object(e));
        });
        $ || (C = function() {
            if (R(this)) throw TypeError("Symbol is not a constructor");
            return I(f(arguments.length > 0 ? arguments[0] : void 0));
        }, s(C.prototype, "toString", function() {
            return this._k;
        }), R = function(e) {
            return e instanceof C;
        }, r.create = G, r.isEnum = U, r.getDesc = B, r.setDesc = L, r.setDescs = F, r.getNames = g.get = V, 
        r.getSymbols = H, i && !e("./$.library") && s(O, "propertyIsEnumerable", U, !0));
        var q = {
            "for": function(e) {
                return o(M, e += "") ? M[e] : M[e] = C(e);
            },
            keyFor: function(e) {
                return p(M, e);
            },
            useSetter: function() {
                S = !0;
            },
            useSimple: function() {
                S = !1;
            }
        };
        r.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), function(e) {
            var t = m(e);
            q[e] = $ ? t : I(t);
        }), S = !0, l(l.G + l.W, {
            Symbol: C
        }), l(l.S, "Symbol", q), l(l.S + l.F * !$, "Object", {
            create: G,
            defineProperty: L,
            defineProperties: F,
            getOwnPropertyDescriptor: B,
            getOwnPropertyNames: V,
            getOwnPropertySymbols: H
        }), T && l(l.S + l.F * (!$ || z), "JSON", {
            stringify: W
        }), d(C, "Symbol"), d(Math, "Math", !0), d(a.JSON, "JSON", !0);
    }, {
        "./$": 80,
        "./$.an-object": 46,
        "./$.descriptors": 58,
        "./$.enum-keys": 60,
        "./$.export": 61,
        "./$.fails": 62,
        "./$.get-names": 64,
        "./$.global": 65,
        "./$.has": 66,
        "./$.is-array": 72,
        "./$.keyof": 81,
        "./$.library": 82,
        "./$.property-desc": 87,
        "./$.redefine": 89,
        "./$.set-to-string-tag": 93,
        "./$.shared": 94,
        "./$.to-iobject": 100,
        "./$.uid": 103,
        "./$.wks": 104
    } ],
    119: [ function(e, t, n) {
        "use strict";
        var r = e("./$"), a = e("./$.redefine"), o = e("./$.collection-weak"), i = e("./$.is-object"), l = e("./$.has"), s = o.frozenStore, u = o.WEAK, c = Object.isExtensible || i, d = {}, f = e("./$.collection")("WeakMap", function(e) {
            return function() {
                return e(this, arguments.length > 0 ? arguments[0] : void 0);
            };
        }, {
            get: function(e) {
                if (i(e)) {
                    if (!c(e)) return s(this).get(e);
                    if (l(e, u)) return e[u][this._i];
                }
            },
            set: function(e, t) {
                return o.def(this, e, t);
            }
        }, o, !0, !0);
        7 != new f().set((Object.freeze || Object)(d), 7).get(d) && r.each.call([ "delete", "has", "get", "set" ], function(e) {
            var t = f.prototype, n = t[e];
            a(t, e, function(t, r) {
                if (i(t) && !c(t)) {
                    var a = s(this)[e](t, r);
                    return "set" == e ? this : a;
                }
                return n.call(this, t, r);
            });
        });
    }, {
        "./$": 80,
        "./$.collection": 54,
        "./$.collection-weak": 53,
        "./$.has": 66,
        "./$.is-object": 73,
        "./$.redefine": 89
    } ],
    120: [ function(e, t, n) {
        var r = e("./$.export");
        r(r.P, "Map", {
            toJSON: e("./$.collection-to-json")("Map")
        });
    }, {
        "./$.collection-to-json": 52,
        "./$.export": 61
    } ],
    121: [ function(e, t, n) {
        var r = e("./$.export"), a = e("./$.object-to-array")(!1);
        r(r.S, "Object", {
            values: function(e) {
                return a(e);
            }
        });
    }, {
        "./$.export": 61,
        "./$.object-to-array": 86
    } ],
    122: [ function(e, t, n) {
        e("./es6.array.iterator");
        var r = e("./$.iterators");
        r.NodeList = r.HTMLCollection = r.Array;
    }, {
        "./$.iterators": 79,
        "./es6.array.iterator": 109
    } ],
    123: [ function(e, t, n) {
        (function(n) {
            var r = "object" == typeof n ? n : "object" == typeof window ? window : "object" == typeof self ? self : this, a = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0, o = a && r.regeneratorRuntime;
            if (r.regeneratorRuntime = void 0, t.exports = e("./runtime"), a) r.regeneratorRuntime = o; else try {
                delete r.regeneratorRuntime;
            } catch (i) {
                r.regeneratorRuntime = void 0;
            }
            t.exports = {
                "default": t.exports,
                __esModule: !0
            };
        }).call(this, "undefined" != typeof window ? window : {});
    }, {
        "./runtime": 124
    } ],
    124: [ function(e, t, n) {
        (function(n, r) {
            "use strict";
            function a(e) {
                return e && e.__esModule ? e : {
                    "default": e
                };
            }
            var o = e("../core-js/promise"), i = a(o), l = e("../core-js/object/set-prototype-of"), s = a(l), u = e("../core-js/object/create"), c = a(u), d = e("../helpers/typeof"), f = a(d), m = e("../core-js/symbol/iterator"), p = a(m), g = e("../core-js/symbol"), b = a(g);
            !function(e) {
                function r(e, t, n, r) {
                    var a = c["default"]((t || o).prototype), i = new y(r || []);
                    return a._invoke = h(e, n, i), a;
                }
                function a(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        };
                    } catch (r) {
                        return {
                            type: "throw",
                            arg: r
                        };
                    }
                }
                function o() {}
                function l() {}
                function u() {}
                function d(e) {
                    [ "next", "throw", "return" ].forEach(function(t) {
                        e[t] = function(e) {
                            return this._invoke(t, e);
                        };
                    });
                }
                function m(e) {
                    this.arg = e;
                }
                function g(e) {
                    function t(t, n) {
                        var r = e[t](n), a = r.value;
                        return a instanceof m ? i["default"].resolve(a.arg).then(o, l) : i["default"].resolve(a).then(function(e) {
                            return r.value = e, r;
                        });
                    }
                    function r(e, n) {
                        function r() {
                            return t(e, n);
                        }
                        return a = a ? a.then(r, r) : new i["default"](function(e) {
                            e(r());
                        });
                    }
                    "object" === ("undefined" == typeof n ? "undefined" : f["default"](n)) && n.domain && (t = n.domain.bind(t));
                    var a, o = t.bind(e, "next"), l = t.bind(e, "throw");
                    t.bind(e, "return");
                    this._invoke = r;
                }
                function h(e, t, n) {
                    var r = S;
                    return function(o, i) {
                        if (r === A) throw new Error("Generator is already running");
                        if (r === M) {
                            if ("throw" === o) throw i;
                            return x();
                        }
                        for (;;) {
                            var l = n.delegate;
                            if (l) {
                                if ("return" === o || "throw" === o && l.iterator[o] === k) {
                                    n.delegate = null;
                                    var s = l.iterator["return"];
                                    if (s) {
                                        var u = a(s, l.iterator, i);
                                        if ("throw" === u.type) {
                                            o = "throw", i = u.arg;
                                            continue;
                                        }
                                    }
                                    if ("return" === o) continue;
                                }
                                var u = a(l.iterator[o], l.iterator, i);
                                if ("throw" === u.type) {
                                    n.delegate = null, o = "throw", i = u.arg;
                                    continue;
                                }
                                o = "next", i = k;
                                var c = u.arg;
                                if (!c.done) return r = N, c;
                                n[l.resultName] = c.value, n.next = l.nextLoc, n.delegate = null;
                            }
                            if ("next" === o) n._sent = i, r === N ? n.sent = i : n.sent = k; else if ("throw" === o) {
                                if (r === S) throw r = M, i;
                                n.dispatchException(i) && (o = "next", i = k);
                            } else "return" === o && n.abrupt("return", i);
                            r = A;
                            var u = a(e, t, n);
                            if ("normal" === u.type) {
                                r = n.done ? M : N;
                                var c = {
                                    value: u.arg,
                                    done: n.done
                                };
                                if (u.arg !== P) return c;
                                n.delegate && "next" === o && (i = k);
                            } else "throw" === u.type && (r = M, o = "throw", i = u.arg);
                        }
                    };
                }
                function v(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
                    this.tryEntries.push(t);
                }
                function _(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t;
                }
                function y(e) {
                    this.tryEntries = [ {
                        tryLoc: "root"
                    } ], e.forEach(v, this), this.reset(!0);
                }
                function w(e) {
                    if (e) {
                        var t = e[C];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1, r = function a() {
                                for (;++n < e.length; ) if (E.call(e, n)) return a.value = e[n], a.done = !1, a;
                                return a.value = k, a.done = !0, a;
                            };
                            return r.next = r;
                        }
                    }
                    return {
                        next: x
                    };
                }
                function x() {
                    return {
                        value: k,
                        done: !0
                    };
                }
                var k, E = Object.prototype.hasOwnProperty, C = "function" == typeof b["default"] && p["default"] || "@@iterator", T = "object" === ("undefined" == typeof t ? "undefined" : f["default"](t)), j = e.regeneratorRuntime;
                if (j) return void (T && (t.exports = j));
                j = e.regeneratorRuntime = T ? t.exports : {}, j.wrap = r;
                var S = "suspendedStart", N = "suspendedYield", A = "executing", M = "completed", P = {}, $ = u.prototype = o.prototype;
                l.prototype = $.constructor = u, u.constructor = l, l.displayName = "GeneratorFunction", 
                j.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return t ? t === l || "GeneratorFunction" === (t.displayName || t.name) : !1;
                }, j.mark = function(e) {
                    return s["default"] ? s["default"](e, u) : e.__proto__ = u, e.prototype = c["default"]($), 
                    e;
                }, j.awrap = function(e) {
                    return new m(e);
                }, d(g.prototype), j.async = function(e, t, n, a) {
                    var o = new g(r(e, t, n, a));
                    return j.isGeneratorFunction(t) ? o : o.next().then(function(e) {
                        return e.done ? e.value : o.next();
                    });
                }, d($), $[C] = function() {
                    return this;
                }, $.toString = function() {
                    return "[object Generator]";
                }, j.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(), function r() {
                        for (;t.length; ) {
                            var n = t.pop();
                            if (n in e) return r.value = n, r.done = !1, r;
                        }
                        return r.done = !0, r;
                    };
                }, j.values = w, y.prototype = {
                    constructor: y,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = k, this.done = !1, this.delegate = null, 
                        this.tryEntries.forEach(_), !e) for (var t in this) "t" === t.charAt(0) && E.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = k);
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0], t = e.completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval;
                    },
                    dispatchException: function(e) {
                        function t(t, r) {
                            return o.type = "throw", o.arg = e, n.next = t, !!r;
                        }
                        if (this.done) throw e;
                        for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                            var a = this.tryEntries[r], o = a.completion;
                            if ("root" === a.tryLoc) return t("end");
                            if (a.tryLoc <= this.prev) {
                                var i = E.call(a, "catchLoc"), l = E.call(a, "finallyLoc");
                                if (i && l) {
                                    if (this.prev < a.catchLoc) return t(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return t(a.finallyLoc);
                                } else if (i) {
                                    if (this.prev < a.catchLoc) return t(a.catchLoc, !0);
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return t(a.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && E.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var a = r;
                                break;
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var o = a ? a.completion : {};
                        return o.type = e, o.arg = t, a ? this.next = a.finallyLoc : this.complete(o), P;
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = e.arg, 
                        this.next = "end") : "normal" === e.type && t && (this.next = t);
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), P;
                        }
                    },
                    "catch": function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var a = r.arg;
                                    _(n);
                                }
                                return a;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: w(e),
                            resultName: t,
                            nextLoc: n
                        }, P;
                    }
                };
            }("object" === ("undefined" == typeof r ? "undefined" : f["default"](r)) ? r : "object" === ("undefined" == typeof window ? "undefined" : f["default"](window)) ? window : "object" === ("undefined" == typeof self ? "undefined" : f["default"](self)) ? self : void 0);
        }).call(this, e("_process"), "undefined" != typeof window ? window : {});
    }, {
        "../core-js/object/create": 7,
        "../core-js/object/set-prototype-of": 11,
        "../core-js/promise": 13,
        "../core-js/symbol": 14,
        "../core-js/symbol/iterator": 15,
        "../helpers/typeof": 27,
        _process: 125
    } ],
    125: [ function(e, t, n) {
        function r() {
            c = !1, l.length ? u = l.concat(u) : d = -1, u.length && a();
        }
        function a() {
            if (!c) {
                var e = setTimeout(r);
                c = !0;
                for (var t = u.length; t; ) {
                    for (l = u, u = []; ++d < t; ) l && l[d].run();
                    d = -1, t = u.length;
                }
                l = null, c = !1, clearTimeout(e);
            }
        }
        function o(e, t) {
            this.fun = e, this.array = t;
        }
        function i() {}
        var l, s = t.exports = {}, u = [], c = !1, d = -1;
        s.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            u.push(new o(e, t)), 1 !== u.length || c || setTimeout(a, 0);
        }, o.prototype.run = function() {
            this.fun.apply(null, this.array);
        }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", 
        s.versions = {}, s.on = i, s.addListener = i, s.once = i, s.off = i, s.removeListener = i, 
        s.removeAllListeners = i, s.emit = i, s.binding = function(e) {
            throw new Error("process.binding is not supported");
        }, s.cwd = function() {
            return "/";
        }, s.chdir = function(e) {
            throw new Error("process.chdir is not supported");
        }, s.umask = function() {
            return 0;
        };
    }, {} ],
    126: [ function(e, t, n) {
        t.exports = e("./lib/effects");
    }, {
        "./lib/effects": 127
    } ],
    127: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.select = n.cancel = n.join = n.fork = n.cps = n.apply = n.call = n.race = n.put = n.take = void 0;
        var r = e("./internal/io");
        n.take = r.take, n.put = r.put, n.race = r.race, n.call = r.call, n.apply = r.apply, 
        n.cps = r.cps, n.fork = r.fork, n.join = r.join, n.cancel = r.cancel, n.select = r.select;
    }, {
        "./internal/io": 128
    } ],
    128: [ function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function a(e) {
            return ("*" === e ? O.wildcard : h.is.array(e) ? O.array : h.is.func(e) ? O.predicate : O["default"])(e);
        }
        function o(e) {
            if (arguments.length > 0 && h.is.undef(e)) throw new Error(w);
            return $(E, h.is.undef(e) ? "*" : e);
        }
        function i(e) {
            return $(C, e);
        }
        function l(e) {
            return $(T, e);
        }
        function s(e, t) {
            h.check(e, h.is.notUndef, v);
            var n = null;
            if (h.is.array(e)) {
                var r = e, a = b(r, 2);
                n = a[0], e = a[1];
            } else if (e.fn) {
                var o = e;
                n = o.context, e = o.fn;
            }
            return h.check(e, h.is.func, v), {
                context: n,
                fn: e,
                args: t
            };
        }
        function u(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
            return $(j, s(e, n));
        }
        function c(e, t) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? [] : arguments[2];
            return $(j, s({
                context: e,
                fn: t
            }, n));
        }
        function d(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
            return $(S, s(e, n));
        }
        function f(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
            return $(N, s(e, n));
        }
        function m(e) {
            if (!D(e)) throw new Error(_);
            return $(A, e);
        }
        function p(e) {
            if (!D(e)) throw new Error(y);
            return $(M, e);
        }
        function g(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
            return 0 === arguments.length ? e = h.ident : h.check(e, h.is.func, x), $(P, {
                selector: e,
                args: n
            });
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.asEffect = n.SELECT_ARG_ERROR = n.INVALID_PATTERN = n.CANCEL_ARG_ERROR = n.JOIN_ARG_ERROR = n.FORK_ARG_ERROR = n.CALL_FUNCTION_ARG_ERROR = void 0;
        var b = function() {
            function e(e, t) {
                var n = [], r = !0, a = !1, o = void 0;
                try {
                    for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (s) {
                    a = !0, o = s;
                } finally {
                    try {
                        !r && l["return"] && l["return"]();
                    } finally {
                        if (a) throw o;
                    }
                }
                return n;
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
        n.matcher = a, n.take = o, n.put = i, n.race = l, n.call = u, n.apply = c, n.cps = d, 
        n.fork = f, n.join = m, n.cancel = p, n.select = g;
        var h = e("./utils"), v = n.CALL_FUNCTION_ARG_ERROR = "call/cps/fork first argument must be a function, an array [context, function] or an object {context, fn}", _ = (n.FORK_ARG_ERROR = "fork first argument must be a generator function or an iterator", 
        n.JOIN_ARG_ERROR = "join argument must be a valid task (a result of a fork)"), y = n.CANCEL_ARG_ERROR = "cancel argument must be a valid task (a result of a fork)", w = n.INVALID_PATTERN = "Invalid pattern passed to `take` (HINT: check if you didn't mispell a constant)", x = n.SELECT_ARG_ERROR = "select first argument must be a function", k = h.sym("IO"), E = "TAKE", C = "PUT", T = "RACE", j = "CALL", S = "CPS", N = "FORK", A = "JOIN", M = "CANCEL", P = "SELECT", $ = function(e, t) {
            var n;
            return n = {}, r(n, k, !0), r(n, e, t), n;
        }, O = {
            wildcard: function() {
                return h.kTrue;
            },
            "default": function(e) {
                return function(t) {
                    return t.type === e;
                };
            },
            array: function(e) {
                return function(t) {
                    return e.some(function(e) {
                        return e === t.type;
                    });
                };
            },
            predicate: function(e) {
                return function(t) {
                    return e(t);
                };
            }
        }, D = function(e) {
            return e[h.TASK];
        };
        n.asEffect = {
            take: function(e) {
                return e && e[k] && e[E];
            },
            put: function(e) {
                return e && e[k] && e[C];
            },
            race: function(e) {
                return e && e[k] && e[T];
            },
            call: function(e) {
                return e && e[k] && e[j];
            },
            cps: function(e) {
                return e && e[k] && e[S];
            },
            fork: function(e) {
                return e && e[k] && e[N];
            },
            join: function(e) {
                return e && e[k] && e[A];
            },
            cancel: function(e) {
                return e && e[k] && e[M];
            },
            select: function(e) {
                return e && e[k] && e[P];
            }
        };
    }, {
        "./utils": 129
    } ],
    129: [ function(e, t, n) {
        (function(e) {
            "use strict";
            function t(e) {
                return e;
            }
            function r(e, t, n) {
                if (!t(e)) throw new Error(n);
            }
            function a(e, t) {
                var n = e.indexOf(t);
                n >= 0 && e.splice(n, 1);
            }
            function o() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], t = c({}, e), n = new Promise(function(e, n) {
                    t.resolve = e, t.reject = n;
                });
                return t.promise = n, t;
            }
            function i(e) {
                for (var t = [], n = 0; e > n; n++) t.push(o());
                return t;
            }
            function l() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
                return function() {
                    return ++e;
                };
            }
            function s(e) {
                return Promise.resolve(1).then(function() {
                    return e();
                });
            }
            function u(e) {
                m && console.warn("DEPRECATION WARNING", e);
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var c = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            };
            n.ident = t, n.check = r, n.remove = a, n.deferred = o, n.arrayOfDeffered = i, n.autoInc = l, 
            n.asap = s, n.warnDeprecated = u;
            var d = n.sym = function(e) {
                return "@@redux-saga/" + e;
            }, f = n.TASK = d("TASK"), m = (n.kTrue = function() {
                return !0;
            }, n.noop = function() {}, n.isDev = "undefined" != typeof e && e.env && "development" === e.env.NODE_ENV), p = n.is = {
                undef: function(e) {
                    return null === e || void 0 === e;
                },
                notUndef: function(e) {
                    return null !== e && void 0 !== e;
                },
                func: function(e) {
                    return "function" == typeof e;
                },
                array: Array.isArray,
                promise: function(e) {
                    return e && p.func(e.then);
                },
                iterator: function(e) {
                    return e && p.func(e.next) && p.func(e["throw"]);
                },
                task: function(e) {
                    return e && e[f];
                }
            };
        }).call(this, e("_process"));
    }, {
        _process: 125
    } ],
    130: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a() {
            return "about:" == document.location.protocol ? i["default"].success("index_load") : (document.body.dataset.grCSLoaded = !0, 
            i["default"].startAppLoadTimer(), void e("./lib/app"));
        }
        var o = e("./lib/failover"), i = r(o), l = e("./lib/ghost/html-ghost-locator"), s = e("./lib/client-script"), u = r(s), c = l.getClientScriptFunction();
        if (c) {
            u["default"].addScript(document, c);
            var d = l.getGhostListener();
            d && d();
        }
        i["default"].startPageLoadTimer(), "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", a, !1) : a();
    }, {
        "./lib/app": 131,
        "./lib/client-script": 174,
        "./lib/failover": 207,
        "./lib/ghost/html-ghost-locator": 212
    } ],
    131: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a() {
            var e = {
                connection: {
                    networkOffline: !window.navigator.onLine,
                    online: !1,
                    bgNotConnected: !0,
                    cookiesDisabled: 0 == navigator.cookieEnabled
                },
                user: {
                    anonymous: !0,
                    premium: !1,
                    settings: {}
                },
                page: {
                    enabled: !0,
                    enabledDefs: !1,
                    domain: F
                }
            };
            o(e);
        }
        function o(e) {
            if (e.page.domain != F) return void N.call("felog.warn", "state_invariant", {
                locationHash: b["default"].hash(F)
            });
            var t = 0 == navigator.cookieEnabled;
            e.connection.cookiesDisabled != t && z.updateConnection({
                cookiesDisabled: t
            });
            var n = O["default"].stop(L);
            n && !e.connection.bgNotConnected && (N.call("felog.warn", "restored_bg_connection", {
                active_time: n
            }), N.call("statsc.ui.timing", "stability:restored_bg_connection", n)), H && (clearTimeout(H), 
            H = null), !V && l(e.page.domain, e.connection), e.page.enabled ? i(e) : f(), !V && S["default"].success("app_load"), 
            V = !0;
        }
        function i(e) {
            return c(e.page), U ? U.updateState(e) : void (U = x["default"](p["default"]({}, e, {
                app: G,
                doc: I,
                actions: z
            })));
        }
        function l(e, t) {
            var n = t.bgNotConnected;
            s(e), y.isSafari() && d();
            var r = E["default"](I);
            r.customizeElements(), r.addDomainClass(), S["default"].success("index_load"), n && (O["default"].start(L), 
            N.call("felog.warn", "init_without_bg_connection"), N.call("statsc.ui.increment", "stability:init_without_bg_connection"));
        }
        function s(e) {
            e.includes(D.GRAMMARLY_DOMAIN) && T["default"]();
        }
        function u() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0];
            v["default"](e);
        }
        function c(e) {
            var t = e.enabledDefs, n = e.cardInspection;
            t && !B ? B = P["default"]({
                doc: I,
                cardInspection: n
            }) : (B && B.clear(), B = null);
        }
        function d() {
            function e() {
                var n = window.getComputedStyle(t), r = n.getPropertyValue("opacity");
                "0.5" != r ? f() : setTimeout(e, 200);
            }
            var t = I.createElement("div");
            I.body.appendChild(t), t.classList.add("grammarly-disable-indicator"), setTimeout(e, 1e3);
        }
        function f() {
            U && (console.log("cleanup page from extension"), U.clear(), U = null);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var m = e("babel-runtime/helpers/extends"), p = r(m);
        n.update = o;
        var g = e("spark-md5"), b = r(g), h = e("./console"), v = r(h), _ = e("./state"), y = e("./util"), w = e("./buttons"), x = r(w), k = e("./sites"), E = r(k), C = e("./external"), T = r(C), j = e("./failover"), S = r(j), N = e("./tracking"), A = e("./location"), M = e("./dictionary"), P = r(M), $ = e("./timers"), O = r($), D = e("lib/config"), I = document, R = 3e4, L = "init_without_bg_connection", F = A.getDomain(), G = {}, U = void 0, B = void 0, V = void 0, H = setTimeout(a, R), W = _.createAndObserve(o), z = W.actions;
        u();
    }, {
        "./buttons": 162,
        "./console": 176,
        "./dictionary": 178,
        "./external": 206,
        "./failover": 207,
        "./location": 216,
        "./sites": 232,
        "./state": 238,
        "./test-api": 242,
        "./timers": 243,
        "./tracking": 247,
        "./util": 251,
        "babel-runtime/helpers/extends": 21,
        "lib/config": 175,
        "spark-md5": "spark-md5"
    } ],
    132: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/core-js/weak-map");
        r(a);
        n["default"] = function(e) {
            return;
        };
        e("./dom");
        t.exports = n["default"];
    }, {
        "./dom": 179,
        "babel-runtime/core-js/weak-map": 16
    } ],
    133: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a() {
            return u.isChrome() ? new i["default"](function(e, t) {
                try {
                    window.chrome.cookies.getAll({
                        domain: c.GRAMMARLY_DOMAIN,
                        path: d
                    }, function(t) {
                        return e(Array.isArray(t) ? t : []);
                    });
                } catch (n) {
                    t(n);
                }
            }) : [];
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.setCookie = n.watchToken = n.getToken = n.watch = n.getCookie = void 0;
        var o = e("babel-runtime/core-js/promise"), i = r(o);
        n.getAllGrammarlyCookies = a;
        var l = e("lib/forge"), s = r(l), u = e("lib/util"), c = e("lib/config"), d = "/", f = n.getCookie = function(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? c.GRAMMARLY_DOMAIN : arguments[1];
            return new i["default"](function(n, r) {
                return s["default"].cookies.get(t, d, e, n, r);
            });
        }, m = n.watch = function(e, t) {
            arguments.length <= 2 || void 0 === arguments[2] ? c.GRAMMARLY_DOMAIN : arguments[2];
            if (!e) throw new Error("cookies.watch: callback required");
            s["default"].cookies.watch(c.GRAMMARLY_DOMAIN, d, t, e);
        };
        n.getToken = function() {
            return f("grauth");
        }, n.watchToken = function(e) {
            return m(e, "grauth");
        }, n.setCookie = function(e) {
            return new i["default"](function(t, n) {
                return s["default"].cookies.set(e, t, n);
            });
        };
    }, {
        "babel-runtime/core-js/promise": 13,
        "lib/config": 175,
        "lib/forge": 208,
        "lib/util": 251
    } ],
    134: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return {
                type: o.UPDATE_CONNECTION,
                data: e
            };
        }
        function a(e) {
            return {
                type: o.ONLINE_STATE,
                online: e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.updateConnection = r, n.onlineConnection = a;
        var o = n.t = {
            UPDATE_CONNECTION: "connection/UPDATE_CONNECTION",
            ONLINE_STATE: "connection/ONLINE_STATE"
        };
    }, {} ],
    135: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.isIncognito = void 0;
        var a = e("babel-runtime/regenerator"), o = r(a), i = e("babel-runtime/core-js/promise"), l = r(i), s = e("babel-runtime/helpers/asyncToGenerator"), u = r(s), c = e("lib/util");
        n.isIncognito = function() {
            var e = u["default"](o["default"].mark(function t() {
                return o["default"].wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", c.isChrome() && new l["default"](function(e) {
                            return chrome.extension.isAllowedIncognitoAccess(e);
                        }));

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, t, void 0);
            }));
            return function() {
                return e.apply(this, arguments);
            };
        }();
    }, {
        "babel-runtime/core-js/promise": 13,
        "babel-runtime/helpers/asyncToGenerator": 17,
        "babel-runtime/regenerator": 123,
        "lib/util": 251
    } ],
    136: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./reducer"), o = r(a), i = e("./sagas"), l = e("./selectors"), s = e("./actions");
        n["default"] = {
            reducer: o["default"],
            types: s.t,
            sagas: {
                start: i.start,
                monitorCookiesDisable: i.monitorCookiesDisable,
                monitorIsIncognito: i.monitorIsIncognito
            },
            selectors: {
                current: l.current
            },
            actions: {
                updateConnection: s.updateConnection,
                onlineConnection: s.onlineConnection
            }
        }, t.exports = n["default"];
    }, {
        "./actions": 134,
        "./reducer": 137,
        "./sagas": 138,
        "./selectors": 139
    } ],
    137: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? s : arguments[0], t = arguments[1], n = t.type, r = t.data, a = t.online;
            switch (n) {
              case l.t.ONLINE_STATE:
                return i["default"]({}, e, {
                    online: a
                });

              case l.t.UPDATE_CONNECTION:
                return i["default"]({}, e, r);

              default:
                return e;
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.defaultConnection = void 0;
        var o = e("babel-runtime/helpers/extends"), i = r(o);
        n["default"] = a;
        var l = e("./actions"), s = n.defaultConnection = {
            networkOffline: !window.navigator.onLine,
            cookiesDisabled: 0 == navigator.cookieEnabled,
            online: !0
        };
    }, {
        "./actions": 134,
        "babel-runtime/helpers/extends": 21
    } ],
    138: [ function(e, t, n) {
        "use strict";
        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t;
        }
        function a(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o() {
            return m["default"].wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.delegateYield(g.takeLatest(C.t.UPDATE_CONNECTION, i), "t0", 1);

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, N[0], this);
        }
        function i() {
            var e, t, n, r;
            return m["default"].wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    return a.prev = 0, a.next = 3, b.select(S.current);

                  case 3:
                    if (e = a.sent, t = e.online, n = p.omit(e, "online", "authDegradation", "cookiesDisabled"), 
                    !e.cookiesDisabled) {
                        a.next = 9;
                        break;
                    }
                    return a.next = 9, b.fork(u);

                  case 9:
                    if (r = d["default"](n).every(function(e) {
                        return !e;
                    }), t != r) {
                        a.next = 12;
                        break;
                    }
                    return a.abrupt("return");

                  case 12:
                    return a.next = 14, b.put(C.onlineConnection(r));

                  case 14:
                    if (!r) {
                        a.next = 18;
                        break;
                    }
                    return console.log("ONLINE SERVICE| reseting capi connections after offline"), a.next = 18, 
                    b.call(y["default"].emitTabs, "reset");

                  case 18:
                    a.next = 26;
                    break;

                  case 20:
                    if (a.prev = 20, a.t0 = a["catch"](0), !g.isCancelError(a.t0)) {
                        a.next = 24;
                        break;
                    }
                    return a.abrupt("return");

                  case 24:
                    return a.next = 26, b.call(x["default"].call, "felog.warn", "check_online_exception", {
                        error: a.t0.message
                    });

                  case 26:
                  case "end":
                    return a.stop();
                }
            }, N[1], this, [ [ 0, 20 ] ]);
        }
        function l(e, t, n) {
            var r, a;
            return m["default"].wrap(function(o) {
                for (;;) switch (o.prev = o.next) {
                  case 0:
                    return o.next = 2, b.call(v["default"].get, n);

                  case 2:
                    if (r = o.sent, r && !(r < Date.now())) {
                        o.next = 11;
                        break;
                    }
                    return o.next = 6, b.call(e, t, n);

                  case 6:
                    return o.next = 8, b.call(k.getNextPingDate);

                  case 8:
                    return a = o.sent, o.next = 11, b.call(v["default"].set, n, a);

                  case 11:
                  case "end":
                    return o.stop();
                }
            }, N[2], this);
        }
        function s() {
            var e;
            return m["default"].wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, b.call(T.isIncognito);

                  case 2:
                    if (e = t.sent, !e) {
                        t.next = 6;
                        break;
                    }
                    return t.next = 6, b.call(l, x["default"].call, "felog.warn", "daily_incognito_enabled");

                  case 6:
                  case "end":
                    return t.stop();
                }
            }, N[3], this);
        }
        function u() {
            return m["default"].wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, b.call(l, x["default"].call, "felog.warn", "daily_cookies_disabled");

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, N[4], this);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = e("babel-runtime/core-js/object/values"), d = a(c), f = e("babel-runtime/regenerator"), m = a(f);
        n.start = o, n.checkOnline = i, n.callDaily = l, n.monitorIsIncognito = s, n.monitorCookiesDisable = u;
        var p = e("lodash"), g = e("redux-saga"), b = e("redux-saga/effects"), h = e("lib/bg/prefs"), v = a(h), _ = e("lib/message"), y = a(_), w = e("lib/tracking"), x = a(w), k = e("lib/util"), E = e("./actions"), C = r(E), T = e("./helpers"), j = e("./selectors"), S = r(j), N = [ o, i, l, s, u ].map(m["default"].mark);
    }, {
        "./actions": 134,
        "./helpers": 135,
        "./selectors": 139,
        "babel-runtime/core-js/object/values": 12,
        "babel-runtime/regenerator": 123,
        "lib/bg/prefs": 160,
        "lib/message": 217,
        "lib/tracking": 247,
        "lib/util": 251,
        lodash: "lodash",
        "redux-saga": "redux-saga",
        "redux-saga/effects": 126
    } ],
    139: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.current = function(e) {
            return e.connection;
        };
    }, {} ],
    140: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.reducer = n.actions = n.sendStateToTabs = n.startup = n.auth = n.servicesMiddleware = void 0;
        var a = e("babel-runtime/core-js/object/assign"), o = r(a), i = e("redux"), l = e("redux-saga"), s = r(l), u = e("lib/config"), c = e("./user"), d = r(c), f = e("./tabs"), m = r(f), p = e("./settings"), g = r(p), b = e("./connection"), h = r(b), v = e("./startup"), _ = r(v), y = n.servicesMiddleware = s["default"](d["default"].sagas.start, g["default"].sagas.start, h["default"].sagas.start);
        n.auth = {
            refreshUser: function() {
                for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
                return y.run.apply(y, [ d["default"].sagas.externalUpdateUser ].concat(t)).done;
            },
            signin: function(e) {
                return y.run(d["default"].sagas.authRequest, u.URLS.authSignin, e, "app_signin_success").done;
            },
            signup: function(e) {
                return y.run(d["default"].sagas.authRequest, u.URLS.authSignup, e, "app_signup_success").done;
            }
        }, n.startup = function() {
            return y.run(_["default"]).done;
        }, n.sendStateToTabs = function() {
            return y.run(m["default"].sagas.sendStateToTabs);
        }, n.actions = o["default"]({}, d["default"].actions, h["default"].actions, g["default"].actions), 
        n.reducer = i.combineReducers({
            user: d["default"].reducer,
            tabs: m["default"].reducer,
            settings: g["default"].reducer,
            connection: h["default"].reducer
        });
    }, {
        "./connection": 136,
        "./settings": 143,
        "./startup": 147,
        "./tabs": 150,
        "./user": 156,
        "babel-runtime/core-js/object/assign": 6,
        "lib/config": 175,
        redux: "redux",
        "redux-saga": "redux-saga"
    } ],
    141: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return {
                type: m.SET_WEAK_DIALECT,
                data: e
            };
        }
        function a(e) {
            return {
                type: m.CHANGE_WEAK_DIALECT,
                data: e
            };
        }
        function o(e) {
            return {
                type: m.SETTINGS_INITIAL,
                data: e
            };
        }
        function i(e) {
            return {
                type: m.TOGGLE_DEFS,
                enabledDefs: e
            };
        }
        function l(e, t) {
            return {
                type: m.TOGGLE_SITE,
                domain: t,
                enabled: e
            };
        }
        function s(e, t) {
            return {
                type: m.TOGGLE_FIELD,
                domain: t,
                data: e
            };
        }
        function u() {
            return {
                type: m.SEEN_NEWS
            };
        }
        function c(e) {
            return {
                type: m.SHOW_NEWS,
                showNews: e
            };
        }
        function d() {
            return {
                type: m.SEEN_REFERRALS
            };
        }
        function f() {
            return {
                type: m.CLICK_REFERRALS
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.setWeakDialect = r, n.changeWeakDialect = a, n.initialSettings = o, n.toggleDefs = i, 
        n.toggleSite = l, n.toggleField = s, n.seenNews = u, n.showNews = c, n.seenReferrals = d, 
        n.clickReferrals = f;
        var m = n.t = {
            SETTINGS_INITIAL: "settings/SETTINGS_INITIAL",
            TOGGLE_DEFS: "settings/TOGGLE_DEFS",
            TOGGLE_SITE: "settings/TOGGLE_SITE",
            TOGGLE_FIELD: "settings/TOGGLE_FIELD",
            SHOW_NEWS: "settings/SHOW_NEWS",
            SEEN_NEWS: "settings/SEEN_NEWS",
            SEEN_REFERRALS: "settings/SEEN_REFERRALS",
            CLICK_REFERRALS: "settings/CLICK_REFERRALS",
            SET_WEAK_DIALECT: "settings/SET_WEAK_DIALECT",
            CHANGE_WEAK_DIALECT: "settings/CHANGE_WEAK_DIALECT"
        };
        n.DAPI_ACTIONS = [ m.CHANGE_WEAK_DIALECT ], n.CACHED_ACTIONS = [ m.TOGGLE_DEFS, m.TOGGLE_SITE, m.TOGGLE_FIELD, m.SEEN_NEWS, m.SEEN_REFERRALS, m.CLICK_REFERRALS ];
    }, {} ],
    142: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e, t) {
            var n = p.URLS.dapiProps + "/" + e + "/" + t;
            return m.fetch(n, {
                method: "put",
                isText: !0
            });
        }
        function o(e) {
            var t = p.URLS.dapiProps + "/" + e;
            return m.fetch(t);
        }
        function i(e) {
            var t = e.enabled_db, n = e.enabledDefs, r = e.disabledFields, a = e.seenNewsVersion, o = e.referralNewsBadge, i = {};
            try {
                var l = JSON.parse(t);
                delete l.lastChange, l && (i = l);
            } catch (u) {
                console.warn("error in parse enabled_db", u);
            }
            if (i.common = {
                enabledDefs: Boolean(n),
                referralNewsBadge: Boolean(o),
                seenNewsVersion: a || p.newsId
            }, !r) return i;
            var d = c["default"](r);
            if (!d.length) return i;
            var m = d.filter(function(e) {
                return r[e];
            }).reduce(function(e, t) {
                var n = t.indexOf(":"), r = t.substr(0, n), a = t.substr(n + 1), o = e[r] || {
                    enabled: !0
                };
                return o.disabledFields = s["default"]({}, o.disabledFields || {}, f["default"]({}, a, !0)), 
                e[r] = o, e;
            }, i);
            return m;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.dapiPropsMap = n.oldSettingsFields = void 0;
        var l = e("babel-runtime/helpers/extends"), s = r(l), u = e("babel-runtime/core-js/object/keys"), c = r(u), d = e("babel-runtime/helpers/defineProperty"), f = r(d);
        n.setDapiProp = a, n.getDapiProp = o, n.migrateSettings = i;
        var m = e("lib/request"), p = e("lib/config"), g = e("./actions");
        n.oldSettingsFields = [ "enabled_db", "enabledDefs", "disabledFields", "seenNewsVersion", "referralNewsBadge" ], 
        n.dapiPropsMap = f["default"]({}, g.t.CHANGE_WEAK_DIALECT, "dialectWeak");
    }, {
        "./actions": 141,
        "babel-runtime/core-js/object/keys": 10,
        "babel-runtime/helpers/defineProperty": 20,
        "babel-runtime/helpers/extends": 21,
        "lib/config": 175,
        "lib/request": 229
    } ],
    143: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./reducer"), o = r(a), i = e("./sagas"), l = e("./selectors"), s = e("./actions");
        n["default"] = {
            reducer: o["default"],
            types: s.t,
            sagas: {
                start: i.start,
                setInitialSettings: i.setInitialSettings,
                initializeWeakDialect: i.initializeWeakDialect
            },
            selectors: {
                current: l.current,
                getDapiProp: l.getDapiProp
            },
            actions: {
                initialSettings: s.initialSettings,
                toggleDefs: s.toggleDefs,
                toggleSite: s.toggleSite,
                toggleField: s.toggleField,
                seenNews: s.seenNews,
                seenReferrals: s.seenReferrals,
                clickReferrals: s.clickReferrals,
                incFixed: s.incFixed,
                changeWeakDialect: s.changeWeakDialect,
                showNews: s.showNews
            }
        }, t.exports = n["default"];
    }, {
        "./actions": 141,
        "./reducer": 144,
        "./sagas": 145,
        "./selectors": 146
    } ],
    144: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], t = arguments[1], n = t.type, r = t.data, a = void 0 === r ? {} : r, o = t.domain, l = t.enabledDefs, d = t.enabled, f = t.showNews, m = e[o] || {};
            switch (n) {
              case c.t.SETTINGS_INITIAL:
                return s["default"]({}, e, a);

              case c.t.TOGGLE_DEFS:
                return s["default"]({}, e, {
                    common: s["default"]({}, e.common, {
                        enabledDefs: l
                    })
                });

              case c.t.TOGGLE_SITE:
                return s["default"]({}, e, i["default"]({}, o, s["default"]({}, m, {
                    enabled: d
                })));

              case c.t.TOGGLE_FIELD:
                return s["default"]({}, e, i["default"]({}, o, s["default"]({}, e[o], {
                    disabledFields: s["default"]({}, m.disabledFields, a)
                })));

              case c.t.SHOW_NEWS:
                return s["default"]({}, e, {
                    common: s["default"]({}, e.common, {
                        showNews: f
                    })
                });

              case c.t.SEEN_NEWS:
                return s["default"]({}, e, {
                    common: s["default"]({}, e.common, {
                        seenNewsVersion: u.newsId
                    })
                });

              case c.t.SEEN_REFERRALS:
                return s["default"]({}, e, {
                    common: s["default"]({}, e.common, {
                        referralNewsBadge: !0
                    })
                });

              case c.t.CLICK_REFERRALS:
                return s["default"]({}, e, {
                    common: s["default"]({}, e.common, {
                        referralWasClicked: !0
                    })
                });

              case c.t.SET_WEAK_DIALECT:
                return s["default"]({}, e, {
                    common: s["default"]({}, e.common, {
                        dialectWeak: a
                    })
                });

              default:
                return e;
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/helpers/defineProperty"), i = r(o), l = e("babel-runtime/helpers/extends"), s = r(l);
        n["default"] = a;
        var u = e("lib/config"), c = e("./actions");
        t.exports = n["default"];
    }, {
        "./actions": 141,
        "babel-runtime/helpers/defineProperty": 20,
        "babel-runtime/helpers/extends": 21,
        "lib/config": 175
    } ],
    145: [ function(e, t, n) {
        "use strict";
        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t;
        }
        function a(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o() {
            return h["default"].wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, [ v.takeEvery(k.DAPI_ACTIONS, l), v.takeEvery(k.CACHED_ACTIONS, c) ];

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, A[0], this);
        }
        function i() {
            var e, t, n, r;
            return h["default"].wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    return e = E.dapiPropsMap[k.t.CHANGE_WEAK_DIALECT], a.next = 3, _.call(d);

                  case 3:
                    return t = a.sent, a.next = 6, _.call(w["default"].get, t);

                  case 6:
                    if (n = a.sent, !n || !n[e]) {
                        a.next = 12;
                        break;
                    }
                    return a.next = 10, _.put(k.setWeakDialect(n[e]));

                  case 10:
                    a.next = 22;
                    break;

                  case 12:
                    return a.next = 14, _.call(N["default"].call, "felog.info", "initialize_weak_dialect_from_dapi");

                  case 14:
                    return a.next = 16, _.call(s, e);

                  case 16:
                    if (r = a.sent, !r || !r[e]) {
                        a.next = 22;
                        break;
                    }
                    return a.next = 20, _.put(k.setWeakDialect(r[e]));

                  case 20:
                    return a.next = 22, _.call(w["default"].set, g["default"]({}, t, g["default"]({}, e, r[e])));

                  case 22:
                  case "end":
                    return a.stop();
                }
            }, A[1], this);
        }
        function l(e) {
            var t, n, r, a = e.type, o = e.data;
            return h["default"].wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, _.select(T.getDapiProp, a);

                  case 2:
                    if (t = e.sent, t != o) {
                        e.next = 5;
                        break;
                    }
                    return e.abrupt("return");

                  case 5:
                    return n = E.dapiPropsMap[a], e.next = 8, _.call(d);

                  case 8:
                    return r = e.sent, e.prev = 9, e.next = 12, _.call(E.setDapiProp, n, o);

                  case 12:
                    return e.next = 14, _.call(w["default"].set, g["default"]({}, r, g["default"]({}, n, o)));

                  case 14:
                    return e.next = 16, _.put(k.setWeakDialect(o));

                  case 16:
                    return e.next = 18, _.call(N["default"].fire, "set-weak-dialect", o);

                  case 18:
                    e.next = 25;
                    break;

                  case 20:
                    return e.prev = 20, e.t0 = e["catch"](9), console.log("Error by setting to dapi", e.t0), 
                    e.next = 25, _.call(N["default"].fire, "set-dapi-prop-error", a, e.t0);

                  case 25:
                  case "end":
                    return e.stop();
                }
            }, A[2], this, [ [ 9, 20 ] ]);
        }
        function s(e) {
            return h["default"].wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, t.next = 3, _.call(E.getDapiProp, e);

                  case 3:
                    return t.abrupt("return", t.sent);

                  case 6:
                    return t.prev = 6, t.t0 = t["catch"](0), console.log("Error by getting props from dapi", t.t0), 
                    t.next = 11, _.call(N["default"].fire, "get-dapi-prop-error", e, t.t0);

                  case 11:
                    return t.abrupt("return", {});

                  case 12:
                  case "end":
                    return t.stop();
                }
            }, A[3], this, [ [ 0, 6 ] ]);
        }
        function u() {
            var e;
            return h["default"].wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, _.call(m);

                  case 2:
                    return e = t.sent, t.next = 5, _.put(k.initialSettings(e));

                  case 5:
                    return t.next = 7, _.call(f);

                  case 7:
                  case "end":
                    return t.stop();
                }
            }, A[4], this);
        }
        function c() {
            var e;
            return h["default"].wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, _.select(T.current);

                  case 2:
                    return e = t.sent, t.next = 5, _.call(w["default"].set, {
                        extensionSettings: e
                    });

                  case 5:
                  case "end":
                    return t.stop();
                }
            }, A[5], this);
        }
        function d() {
            var e;
            return h["default"].wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, _.select(T.getUserId);

                  case 2:
                    return e = t.sent, t.abrupt("return", "dapiProps_" + e);

                  case 4:
                  case "end":
                    return t.stop();
                }
            }, A[6], this);
        }
        function f() {
            var e, t, n;
            return h["default"].wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return r.next = 2, _.select(T.current);

                  case 2:
                    return e = r.sent, t = e.common, n = j.newsId && j.newsId !== t.seenNewsVersion, 
                    r.next = 7, _.put(k.showNews(n));

                  case 7:
                  case "end":
                    return r.stop();
                }
            }, A[7], this);
        }
        function m() {
            var e, t, n;
            return h["default"].wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return r.next = 2, _.call(w["default"].get, "extensionSettings");

                  case 2:
                    if (e = r.sent, !e) {
                        r.next = 5;
                        break;
                    }
                    return r.abrupt("return", e);

                  case 5:
                    return r.next = 7, _.call(w["default"].get, E.oldSettingsFields);

                  case 7:
                    return t = r.sent, r.next = 10, _.call(E.migrateSettings, t);

                  case 10:
                    return n = r.sent, r.next = 13, _.call(w["default"].set, {
                        extensionSettings: n
                    });

                  case 13:
                    return r.abrupt("return", n);

                  case 14:
                  case "end":
                    return r.stop();
                }
            }, A[8], this);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var p = e("babel-runtime/helpers/defineProperty"), g = a(p), b = e("babel-runtime/regenerator"), h = a(b);
        n.start = o, n.initializeWeakDialect = i, n.saveToDapi = l, n.getFromDapi = s, n.setInitialSettings = u, 
        n.cacheSettings = c, n.getDapiPropsPrefsKey = d, n.setShowNews = f, n.getSettings = m;
        var v = e("redux-saga"), _ = e("redux-saga/effects"), y = e("lib/bg/prefs"), w = a(y), x = e("./actions"), k = r(x), E = e("./helpers"), C = e("./selectors"), T = r(C), j = e("lib/config"), S = e("lib/tracking"), N = a(S), A = [ o, i, l, s, u, c, d, f, m ].map(h["default"].mark);
    }, {
        "./actions": 141,
        "./helpers": 142,
        "./selectors": 146,
        "babel-runtime/helpers/defineProperty": 20,
        "babel-runtime/regenerator": 123,
        "lib/bg/prefs": 160,
        "lib/config": 175,
        "lib/tracking": 247,
        "redux-saga": "redux-saga",
        "redux-saga/effects": 126
    } ],
    146: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.current = function(e) {
            return e.settings;
        }, n.getUserId = function(e) {
            return e.user.id;
        }, n.getDapiProp = function(e, t) {
            return e.settings.common[t];
        };
    }, {} ],
    147: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a() {
            return i["default"].wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, [ l.call(m["default"].sagas.setInitialSettings), l.call([ u["default"], u["default"].init ]), l.call(g["default"].sagas.updateUser, {
                        failoverFromCache: !0
                    }) ];

                  case 2:
                    return e.next = 4, l.fork(d["default"].sagas.monitorIsIncognito);

                  case 4:
                    return e.next = 6, l.call(h["default"].sagas.start);

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, v[0], this);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/regenerator"), i = r(o);
        n["default"] = a;
        var l = e("redux-saga/effects"), s = e("lib/page-config"), u = r(s), c = e("./connection"), d = r(c), f = e("./settings"), m = r(f), p = e("./user"), g = r(p), b = e("./tabs"), h = r(b), v = [ a ].map(i["default"].mark);
        t.exports = n["default"];
    }, {
        "./connection": 136,
        "./settings": 143,
        "./tabs": 150,
        "./user": 156,
        "babel-runtime/regenerator": 123,
        "lib/page-config": 222,
        "redux-saga/effects": 126
    } ],
    148: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return {
                type: a.SET_ACTIVE_TAB,
                data: e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.setActiveTab = r;
        var a = n.t = {
            SET_ACTIVE_TAB: "tabs/SET_ACTIVE_TAB"
        };
    }, {} ],
    149: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a() {
            var e = h.createChannel();
            return p["default"].on("tab-connected", function(t) {
                var n = t.tab, r = t.url;
                return e.put({
                    tab: n,
                    url: r
                });
            }), e;
        }
        function o() {
            var e = h.createChannel({
                buffered: !1
            });
            return d["default"].tabs.onActiveTabChange(function(t) {
                var n = t.url, r = t.favIconUrl, a = t.windowId;
                return e.put({
                    url: n,
                    favIconUrl: r,
                    windowId: a
                });
            }), e;
        }
        function i(e) {
            !h.isSafari() && d["default"].button.setBadge(""), d["default"].button.setIconByName(e);
        }
        function l(e) {
            h.isSafari() || (d["default"].button.setBadgeBackgroundColor({
                color: v
            }), d["default"].button.setIconByName("")), d["default"].button.setBadge(e);
        }
        function s(e) {
            var t = e.user.referral, n = e.settings, r = n.seenNewsVersion, a = n.referralNewsBadge, o = n.enabled;
            return r != f.newsId || t && !a ? "NEW" : o ? "" : "off";
        }
        function u(e) {
            if (h.isChrome()) {
                var t = e ? f.URLS.uninstall + "?domain=" + encodeURI(e) : f.URLS.uninstall;
                window.chrome.runtime.setUninstallURL(t);
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.DEFAULT_BADGE_COLOR = n.invalidatePageConfig = void 0, n.createNewTabsChannel = a, 
        n.createActiveTabsChannel = o, n.setBadgeIcon = i, n.setBadgeText = l, n.getBadgeText = s, 
        n.setUninstallURL = u;
        var c = e("lib/forge"), d = r(c), f = e("lib/config"), m = e("lib/message"), p = r(m), g = e("lib/page-config"), b = r(g), h = e("lib/util"), v = (n.invalidatePageConfig = h.memoize(b["default"].invalidate, null, 1e4), 
        n.DEFAULT_BADGE_COLOR = "#e75146");
    }, {
        "lib/config": 175,
        "lib/forge": 208,
        "lib/message": 217,
        "lib/page-config": 222,
        "lib/util": 251
    } ],
    150: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./reducer"), o = r(a), i = e("./sagas"), l = e("./selectors");
        n["default"] = {
            reducer: o["default"],
            sagas: {
                start: i.start,
                sendStateToTabs: i.sendStateToTabs
            },
            selectors: {
                getAll: l.getAll,
                stateByUrl: l.stateByUrl,
                stateForTab: l.stateForTab,
                getActiveTab: l.getActiveTab
            }
        }, t.exports = n["default"];
    }, {
        "./reducer": 151,
        "./sagas": 152,
        "./selectors": 153
    } ],
    151: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], t = arguments[1], n = t.type, r = t.data;
            switch (n) {
              case l.t.SET_ACTIVE_TAB:
                return i["default"]({}, e, {
                    active: r
                });

              default:
                return e;
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/helpers/extends"), i = r(o);
        n["default"] = a;
        var l = e("./actions");
        t.exports = n["default"];
    }, {
        "./actions": 148,
        "babel-runtime/helpers/extends": 21
    } ],
    152: [ function(e, t, n) {
        "use strict";
        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t;
        }
        function a(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o() {
            var e;
            return d["default"].wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, f.fork(s);

                  case 2:
                    return t.next = 4, f.select(_.getActiveTab);

                  case 4:
                    if (e = t.sent) {
                        t.next = 8;
                        break;
                    }
                    return t.next = 8, f.take(v.t.SET_ACTIVE_TAB);

                  case 8:
                    return t.next = 10, f.fork(i);

                  case 10:
                  case "end":
                    return t.stop();
                }
            }, k[0], this);
        }
        function i() {
            var e, t, n, r, a, o;
            return d["default"].wrap(function(i) {
                for (;;) switch (i.prev = i.next) {
                  case 0:
                    return i.next = 2, f.call(y.createNewTabsChannel);

                  case 2:
                    e = i.sent;

                  case 3:
                    return i.next = 6, f.call(e.take);

                  case 6:
                    return t = i.sent, n = t.tab, r = t.url, i.next = 11, f.call(y.invalidatePageConfig);

                  case 11:
                    return i.next = 13, f.select(_.stateByUrl, r);

                  case 13:
                    if (a = i.sent, !a.connection.cookiesDisabled && 0 != navigator.cookieEnabled) {
                        i.next = 17;
                        break;
                    }
                    return i.next = 17, f.fork(x["default"].sagas.monitorCookiesDisable);

                  case 17:
                    if ("popup" != n) {
                        i.next = 22;
                        break;
                    }
                    return i.next = 20, f.call(p["default"].emitTo, "popup", "state", a);

                  case 20:
                    i.next = 27;
                    break;

                  case 22:
                    return i.next = 24, f.call(g.fire, "tab-connected", a.user.id, a.config, a.connection);

                  case 24:
                    return o = _.stateForTab(a), i.next = 27, f.call(p["default"].emitTo, n, "state", o);

                  case 27:
                    i.next = 3;
                    break;

                  case 29:
                  case "end":
                    return i.stop();
                }
            }, k[1], this);
        }
        function l() {
            var e;
            return d["default"].wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, f.select(_.stateByActiveTab);

                  case 2:
                    return e = t.sent, t.next = 5, f.call(u, e);

                  case 5:
                    return t.next = 7, f.call(p["default"].emitTo, "popup", "state", e);

                  case 7:
                    return t.next = 9, f.call(p["default"].emitFocusedTab, "state", _.stateForTab(e));

                  case 9:
                  case "end":
                    return t.stop();
                }
            }, k[2], this);
        }
        function s() {
            var e, t, n, r;
            return d["default"].wrap(function(a) {
                for (;;) switch (a.prev = a.next) {
                  case 0:
                    return a.next = 2, f.call(y.createActiveTabsChannel);

                  case 2:
                    e = a.sent;

                  case 3:
                    return a.next = 6, f.call(e.take);

                  case 6:
                    return t = a.sent, a.next = 9, f.select(_.getActiveTab);

                  case 9:
                    if (n = a.sent, r = b.domainFromUrl(t.url), n && b.domainFromUrl(n.url) == r) {
                        a.next = 16;
                        break;
                    }
                    return a.next = 14, f.put(v.setActiveTab(t));

                  case 14:
                    return a.next = 16, f.call(y.setUninstallURL, r);

                  case 16:
                    a.next = 3;
                    break;

                  case 18:
                  case "end":
                    return a.stop();
                }
            }, k[3], this);
        }
        function u(e) {
            var t, n = e.user, r = e.config, a = e.settings;
            return d["default"].wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!n.anonymous && !r.grammarlyEditor) {
                        e.next = 5;
                        break;
                    }
                    return e.next = 3, f.call(y.setBadgeText, "");

                  case 3:
                    e.next = 15;
                    break;

                  case 5:
                    if (r.enabled || r.servicePage) {
                        e.next = 10;
                        break;
                    }
                    return e.next = 8, f.call(y.setBadgeIcon, "bang");

                  case 8:
                    e.next = 15;
                    break;

                  case 10:
                    return e.next = 12, f.call(y.getBadgeText, {
                        user: n,
                        settings: a
                    });

                  case 12:
                    return t = e.sent, e.next = 15, f.call(y.setBadgeText, t);

                  case 15:
                  case "end":
                    return e.stop();
                }
            }, k[4], this);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = e("babel-runtime/regenerator"), d = a(c);
        n.start = o, n.listenNewTabsConnections = i, n.sendStateToTabs = l, n.listenActiveTabChange = s, 
        n.renderBadge = u;
        var f = e("redux-saga/effects"), m = e("lib/message"), p = a(m), g = e("lib/tracking"), b = e("lib/location"), h = e("./actions"), v = r(h), _ = e("./selectors"), y = e("./helpers"), w = e("../connection"), x = a(w), k = [ o, i, l, s, u ].map(d["default"].mark);
    }, {
        "../connection": 136,
        "./actions": 148,
        "./helpers": 149,
        "./selectors": 153,
        "babel-runtime/regenerator": 123,
        "lib/location": 216,
        "lib/message": 217,
        "lib/tracking": 247,
        "redux-saga/effects": 126
    } ],
    153: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e, t) {
            var n = d.domainFromUrl(t), r = c["default"].get(n, t), a = i(e.settings, n);
            return s["default"]({}, e, {
                config: s["default"]({}, r, {
                    domain: n
                }),
                settings: a,
                activeTab: e.tabs && e.tabs.active
            });
        }
        function o(e) {
            return a(e, e.tabs.active.url);
        }
        function i(e, t) {
            var n = e[t] && void 0 !== e[t].enabled ? e[t].enabled : !0, r = e[t];
            return s["default"]({}, e.common, r, {
                enabled: n
            });
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.getAll = n.getActiveTab = n.stateForTab = void 0;
        var l = e("babel-runtime/helpers/extends"), s = r(l);
        n.stateByUrl = a, n.stateByActiveTab = o, n.getDomainSettings = i;
        var u = e("lib/page-config"), c = r(u), d = e("lib/location");
        n.stateForTab = function(e) {
            var t = e.user, n = e.connection, r = e.config, a = e.settings;
            return {
                user: t,
                connection: n,
                page: s["default"]({}, a, r, {
                    enabled: a.enabled && r.enabled
                })
            };
        }, n.getActiveTab = function(e) {
            var t = e.tabs;
            return t.active;
        }, n.getAll = function(e) {
            return e;
        };
    }, {
        "babel-runtime/helpers/extends": 21,
        "lib/location": 216,
        "lib/page-config": 222
    } ],
    154: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return {
                type: l.SET_USER,
                data: e
            };
        }
        function a(e) {
            return {
                type: l.UPDATE_SETTINGS,
                data: e
            };
        }
        function o(e) {
            return {
                type: l.SET_SETTINGS,
                data: e
            };
        }
        function i(e) {
            return {
                type: l.SESSION_INVALIDATE,
                reason: e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.setUser = r, n.updateSettings = a, n.setSettings = o, n.sessionInvalidate = i;
        var l = n.t = {
            SET_USER: "user/SET_USER",
            SET_SETTINGS: "user/SET_SETTINGS",
            UPDATE_SETTINGS: "user/UPDATE_SETTINGS",
            SESSION_INVALIDATE: "user/SESSION_INVALIDATE",
            INC_FIXED: "user/INC_FIXED"
        };
    }, {} ],
    155: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            var t = {
                method: "post",
                query: !0,
                data: {
                    field: [ "mixpanel.distinct_id", "stat_feedback_ACCEPT" ],
                    app: _.getBrowser() + "Ext",
                    containerId: e
                }
            };
            return h.fetch(v.URLS.userOrAnonymous, t);
        }
        function o(e) {
            return !e || new Date() - new Date(e) > w;
        }
        function i(e) {
            var t = {
                data: {
                    containerId: e
                }
            };
            return h.fetch(v.URLS.dapiMimic, t);
        }
        function l() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], n = arguments[2];
            n = n || "empty";
            var r = t.groups || [], a = t.settings || {};
            e.token = e.grauth, e.premium = "Premium" == e.type, e.referral = s(e);
            var o = parseInt(e.customFields && e.customFields.stat_feedback_ACCEPT);
            return e.fixed_errors = isNaN(o) ? 0 : o, v.userFields.reduce(function(t, n) {
                var r = e[n];
                return "undefined" != typeof r && b["default"](t, p["default"]({}, n, r)), t;
            }, {
                mimic: r,
                settings: a,
                grauth: n
            });
        }
        function s(e) {
            var t = e.premium, n = e.anonymous, r = e.subscriptionFree, a = e.registrationDate, o = !t && !n || r, i = _.pastDays(a) > 7;
            return Boolean(o && i);
        }
        function u(e, t) {
            return h.fetch(e, {
                body: h.paramStr(t),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                method: "post"
            });
        }
        function c() {
            var e = _.createChannel({
                buffer: !1
            });
            return y.watchToken(e.put), e;
        }
        function d(e) {
            return h.fetch(v.URLS.authSettings, {
                data: e,
                method: "post"
            });
        }
        function f(e) {
            return window.socketServer && window.socketServer.wsReconnect(e);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.MAX_COOKIE_HEADER_LENGTH = n.LOGIN_BY_COOKIE_CHANGE_TIMEOUT = void 0;
        var m = e("babel-runtime/helpers/defineProperty"), p = r(m), g = e("babel-runtime/core-js/object/assign"), b = r(g);
        n.fetchUser = a, n.isItTimeToRefresh = o, n.fetchMimic = i, n.prepareUser = l, n.isReferral = s, 
        n.authRequestHelper = u, n.createCookieChannel = c, n.fetchSettings = d, n.resetCapiSessions = f;
        var h = e("lib/request"), v = e("lib/config"), _ = e("lib/util"), y = e("lib/bg/cookie"), w = 30 * _.MINUTE;
        n.LOGIN_BY_COOKIE_CHANGE_TIMEOUT = 20 * _.SECOND, n.MAX_COOKIE_HEADER_LENGTH = 7168;
    }, {
        "babel-runtime/core-js/object/assign": 6,
        "babel-runtime/helpers/defineProperty": 20,
        "lib/bg/cookie": 133,
        "lib/config": 175,
        "lib/request": 229,
        "lib/util": 251
    } ],
    156: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./reducer"), o = r(a), i = e("./sagas"), l = e("./selectors"), s = e("./actions");
        n["default"] = {
            reducer: o["default"],
            types: s.t,
            sagas: {
                start: i.start,
                updateUser: i.updateUser,
                externalUpdateUser: i.externalUpdateUser,
                authRequest: i.authRequest
            },
            selectors: {
                current: l.current
            },
            actions: {
                setUser: s.setUser,
                sessionInvalidate: s.sessionInvalidate,
                updateSettings: s.updateSettings
            }
        }, t.exports = n["default"];
    }, {
        "./actions": 154,
        "./reducer": 157,
        "./sagas": 158,
        "./selectors": 159
    } ],
    157: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? s : arguments[0], t = arguments[1], n = t.type, r = t.data, a = void 0 === r ? {} : r;
            switch (n) {
              case l.t.SET_USER:
                return a;

              case l.t.SET_SETTINGS:
                return i["default"]({}, e, {
                    settings: a
                });

              case l.t.INC_FIXED:
                var o = e.fixed_errors + 1;
                return i["default"]({}, e, {
                    fixed_errors: o
                });

              default:
                return e;
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.defaultUser = void 0;
        var o = e("babel-runtime/helpers/extends"), i = r(o);
        n["default"] = a;
        var l = e("./actions"), s = n.defaultUser = {
            anonymous: !0,
            premium: !1
        };
    }, {
        "./actions": 154,
        "babel-runtime/helpers/extends": 21
    } ],
    158: [ function(e, t, n) {
        "use strict";
        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t;
        }
        function a(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o() {
            return x["default"].wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, [ k.fork(f), E.takeLatest(F.t.SESSION_INVALIDATE, i), E.takeEvery(F.t.UPDATE_SETTINGS, p) ];

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, H[0], this);
        }
        function i() {
            var e, t, n, r, a, o, i, c, d, f, m, p, g = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], b = g.lazy, h = g.failoverFromCache, v = g.reason;
            return x["default"].wrap(function(g) {
                for (;;) switch (g.prev = g.next) {
                  case 0:
                    if ($["default"].start("updateUser"), g.prev = 1, !b) {
                        g.next = 10;
                        break;
                    }
                    return g.next = 5, k.call(T["default"].get, "loginDate");

                  case 5:
                    if (e = g.sent, V.isItTimeToRefresh(e)) {
                        g.next = 10;
                        break;
                    }
                    return console.info("AUTH SERVICE| user session still fresh"), $["default"].stop("updateUser"), 
                    g.abrupt("return");

                  case 10:
                    return g.next = 12, k.fork(u);

                  case 12:
                    return g.next = 14, k.call(M.getContainerId);

                  case 14:
                    return t = g.sent, g.next = 17, k.call(V.fetchUser, t);

                  case 17:
                    return n = g.sent, g.next = 20, k.call(l, t);

                  case 20:
                    return r = g.sent, g.next = 23, k.call(s);

                  case 23:
                    return a = g.sent, g.next = 26, k.call(V.prepareUser, n, r, a);

                  case 26:
                    return o = g.sent, g.next = 29, k.select(B.current);

                  case 29:
                    return i = g.sent, g.next = 32, k.put(F.setUser(o));

                  case 32:
                    return g.next = 34, k.select(R["default"].selectors.getDapiProp, "dialectWeak");

                  case 34:
                    if (c = g.sent, c && o.id == i.id) {
                        g.next = 38;
                        break;
                    }
                    return g.next = 38, k.call(R["default"].sagas.initializeWeakDialect);

                  case 38:
                    if (o.id == i.id && o.type == i.type && o.settings.dialectStrong == i.settings.dialectStrong) {
                        g.next = 42;
                        break;
                    }
                    return g.next = 41, k.call(V.resetCapiSessions, {
                        dialect: o.settings.dialectStrong
                    });

                  case 41:
                    console.warn("AUTH SERVICE| user changed, reseting capi session");

                  case 42:
                    return g.next = 44, k.call(T["default"].set, {
                        user: o,
                        loginDate: new Date()
                    });

                  case 44:
                    return g.next = 46, k.select(D["default"].selectors.current);

                  case 46:
                    return d = g.sent, f = d.authDegradation, m = d.cookiesDisabled, g.next = 51, k.call(A["default"].fire, "session-invalidate", o, i, v, m);

                  case 51:
                    if (!f) {
                        g.next = 54;
                        break;
                    }
                    return g.next = 54, k.put(D["default"].actions.updateConnection({
                        authDegradation: !1
                    }));

                  case 54:
                    g.next = 74;
                    break;

                  case 56:
                    if (g.prev = 56, g.t0 = g["catch"](1), !E.isCancelError(g.t0)) {
                        g.next = 61;
                        break;
                    }
                    return $["default"].stop("updateUser"), g.abrupt("return");

                  case 61:
                    return g.next = 63, k.call(T["default"].set, {
                        loginDate: 0
                    });

                  case 63:
                    return g.next = 65, k.put(D["default"].actions.updateConnection({
                        authDegradation: !0
                    }));

                  case 65:
                    return g.next = 67, k.call(A["default"].call, "felog.warn", "fetch_user_fail", {
                        error: g.t0,
                        reason: v
                    });

                  case 67:
                    if (console.warn("AUTH SERVICE| auth request fail. Message: ", g.t0), !h) {
                        g.next = 74;
                        break;
                    }
                    return g.next = 71, k.call(T["default"].get, "user");

                  case 71:
                    return p = g.sent, g.next = 74, k.put(F.setUser(p || G.defaultUser));

                  case 74:
                    $["default"].stop("updateUser");

                  case 75:
                  case "end":
                    return g.stop();
                }
            }, H[1], this, [ [ 1, 56 ] ]);
        }
        function l(e) {
            return x["default"].wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, t.next = 3, k.call(V.fetchMimic, e);

                  case 3:
                    return t.abrupt("return", t.sent);

                  case 6:
                    return t.prev = 6, t.t0 = t["catch"](0), console.warn("AUTH SERVICE| fetch mimic fail. Message: ", t.t0.message), 
                    t.next = 11, k.call(A["default"].call, "felog.warn", "fetch_mimic_fail", {
                        error: t.t0
                    });

                  case 11:
                    return t.abrupt("return", {});

                  case 12:
                  case "end":
                    return t.stop();
                }
            }, H[2], this, [ [ 0, 6 ] ]);
        }
        function s() {
            return x["default"].wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, k.call(j.getToken);

                  case 3:
                    return e.abrupt("return", e.sent);

                  case 6:
                    return e.prev = 6, e.t0 = e["catch"](0), console.warn("AUTH SERVICE| fetch cookie fail. Message: ", e.t0.message), 
                    e.next = 11, k.call(A["default"].call, "felog.warn", "fetch_cookie_fail", {
                        error: e.t0
                    });

                  case 11:
                    return e.abrupt("return", "bad_cookie");

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, H[3], this, [ [ 0, 6 ] ]);
        }
        function u() {
            var e, t, n, r, a;
            return x["default"].wrap(function(o) {
                for (;;) switch (o.prev = o.next) {
                  case 0:
                    return o.prev = 0, o.next = 3, k.call(j.getAllGrammarlyCookies);

                  case 3:
                    if (e = o.sent, t = e.reduce(function(e, t) {
                        var n = t.value;
                        return e + n.length;
                    }, 0), !(t > V.MAX_COOKIE_HEADER_LENGTH)) {
                        o.next = 11;
                        break;
                    }
                    return n = e.reduce(function(e, t) {
                        return e.value.length > t.value.length ? e : t;
                    }, {
                        value: ""
                    }), r = n.name, a = n.value.length, o.next = 11, k.call(A["default"].fire, "cookie-overflow", t, {
                        name: r,
                        length: a
                    });

                  case 11:
                    o.next = 18;
                    break;

                  case 13:
                    return o.prev = 13, o.t0 = o["catch"](0), console.warn("AUTH SERVICE| fetch grammarly cookies fail. Message: ", o.t0.message), 
                    o.next = 18, k.call(A["default"].call, "felog.warn", "fetch_all_cookies_fail", {
                        error: o.t0
                    });

                  case 18:
                  case "end":
                    return o.stop();
                }
            }, H[4], this, [ [ 0, 13 ] ]);
        }
        function c(e, t, n) {
            return x["default"].wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, k.call(i, {
                        lazy: t,
                        reason: n
                    });

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, H[5], this);
        }
        function d(e, t, n, r) {
            var a, o, l, s;
            return x["default"].wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, k.call(V.authRequestHelper, t, n);

                  case 3:
                    return a = e.sent, o = r.split("_"), l = y["default"](o, 2), s = l[1], e.next = 9, 
                    k.call(i, {
                        reason: s
                    });

                  case 9:
                    return e.next = 11, k.call(A["default"].fire, r);

                  case 11:
                    return e.abrupt("return", a);

                  case 14:
                    return e.prev = 14, e.t0 = e["catch"](0), console.warn("auth error", e.t0), e.abrupt("return", {
                        error: e.t0.message
                    });

                  case 18:
                  case "end":
                    return e.stop();
                }
            }, H[6], this, [ [ 0, 14 ] ]);
        }
        function f() {
            var e, t;
            return x["default"].wrap(function(n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    return n.next = 2, k.call(V.createCookieChannel);

                  case 2:
                    e = n.sent, t = void 0;

                  case 4:
                    return n.next = 7, k.call(e.take);

                  case 7:
                    if (!t) {
                        n.next = 10;
                        break;
                    }
                    return n.next = 10, k.cancel(t);

                  case 10:
                    return n.next = 12, k.fork(m);

                  case 12:
                    t = n.sent, n.next = 4;
                    break;

                  case 15:
                  case "end":
                    return n.stop();
                }
            }, H[7], this);
        }
        function m() {
            var e, t, n;
            return x["default"].wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    return r.prev = 0, r.next = 3, k.call(S.delay, V.LOGIN_BY_COOKIE_CHANGE_TIMEOUT);

                  case 3:
                    return r.next = 5, k.call(s);

                  case 5:
                    return e = r.sent, r.next = 8, k.select(B.current);

                  case 8:
                    if (t = r.sent, n = t.grauth, e == n) {
                        r.next = 16;
                        break;
                    }
                    if (!n || "undefined" != typeof e) {
                        r.next = 14;
                        break;
                    }
                    return r.next = 14, k.call(A["default"].call, "felog.warn", "cookie_remove_detected");

                  case 14:
                    return r.next = 16, k.put(F.sessionInvalidate("cookieChange"));

                  case 16:
                    r.next = 22;
                    break;

                  case 18:
                    return r.prev = 18, r.t0 = r["catch"](0), r.next = 22, k.call(A["default"].call, "felog.warn", "too_frequent_cookie_changes", {
                        canceled: E.isCancelError(r.t0)
                    });

                  case 22:
                  case "end":
                    return r.stop();
                }
            }, H[8], this, [ [ 0, 18 ] ]);
        }
        function p() {
            var e, t, n, r = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], a = r.data;
            return x["default"].wrap(function(r) {
                for (;;) switch (r.prev = r.next) {
                  case 0:
                    if ("object" == ("undefined" == typeof a ? "undefined" : v["default"](a))) {
                        r.next = 2;
                        break;
                    }
                    return r.abrupt("return");

                  case 2:
                    return r.next = 4, k.select(B.current);

                  case 4:
                    if (e = r.sent, t = e.settings, n = b["default"]({}, t, a), t.dialectStrong == n.dialectStrong) {
                        r.next = 11;
                        break;
                    }
                    return r.next = 10, k.call(V.resetCapiSessions, {
                        dialect: n.dialectStrong
                    });

                  case 10:
                    console.info("AUTH SERVICE| dialect changed, reseting capi session");

                  case 11:
                    return r.next = 13, k.put(F.setSettings(n));

                  case 13:
                    return r.prev = 13, r.next = 16, k.call(V.fetchSettings, n);

                  case 16:
                    r.next = 22;
                    break;

                  case 18:
                    return r.prev = 18, r.t0 = r["catch"](13), r.next = 22, k.call(A["default"].call, "felog.warn", "fetch_settings_fail", {
                        error: r.t0
                    });

                  case 22:
                  case "end":
                    return r.stop();
                }
            }, H[9], this, [ [ 13, 18 ] ]);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var g = e("babel-runtime/helpers/extends"), b = a(g), h = e("babel-runtime/helpers/typeof"), v = a(h), _ = e("babel-runtime/helpers/slicedToArray"), y = a(_), w = e("babel-runtime/regenerator"), x = a(w);
        n.start = o, n.updateUser = i, n.getMimic = l, n.getGrauthFromCookie = s, n.trackCookieHeaderSize = u, 
        n.externalUpdateUser = c, n.authRequest = d, n.listenCookieChanges = f, n.cookieChange = m, 
        n.updateUserSettings = p;
        var k = e("redux-saga/effects"), E = e("redux-saga"), C = e("lib/bg/prefs"), T = a(C), j = e("lib/bg/cookie"), S = e("lib/util"), N = e("lib/tracking"), A = a(N), M = e("lib/tracking/bgonly"), P = e("lib/profiler"), $ = a(P), O = e("../connection"), D = a(O), I = e("../settings"), R = a(I), L = e("./actions"), F = r(L), G = e("./reducer"), U = e("./selectors"), B = r(U), V = e("./helpers"), H = [ o, i, l, s, u, c, d, f, m, p ].map(x["default"].mark);
    }, {
        "../connection": 136,
        "../settings": 143,
        "./actions": 154,
        "./helpers": 155,
        "./reducer": 157,
        "./selectors": 159,
        "babel-runtime/helpers/extends": 21,
        "babel-runtime/helpers/slicedToArray": 25,
        "babel-runtime/helpers/typeof": 27,
        "babel-runtime/regenerator": 123,
        "lib/bg/cookie": 133,
        "lib/bg/prefs": 160,
        "lib/profiler": 228,
        "lib/tracking": 247,
        "lib/tracking/bgonly": 244,
        "lib/util": 251,
        "redux-saga": "redux-saga",
        "redux-saga/effects": 126
    } ],
    159: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.current = function(e) {
            return e.user;
        };
    }, {} ],
    160: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/core-js/object/keys"), o = r(a), i = e("babel-runtime/helpers/typeof"), l = r(i), s = e("babel-runtime/regenerator"), u = r(s), c = e("babel-runtime/helpers/defineProperty"), d = r(c), f = e("babel-runtime/core-js/object/assign"), m = r(f), p = e("babel-runtime/helpers/asyncToGenerator"), g = r(p), b = e("babel-runtime/core-js/promise"), h = r(b), v = e("emitter"), _ = r(v), y = e("lib/forge"), w = r(y), x = function(e) {
            return new h["default"](function(t, n) {
                try {
                    w["default"].prefs.get(e, t, function(t) {
                        return t && t.message && t.message.includes("SyntaxError") ? (w["default"].prefs.clear(e), 
                        n("Prop:" + e + " has corrupted value, cleanup")) : void n(t);
                    });
                } catch (r) {
                    n(r);
                }
            });
        }, k = _["default"]({
            get: function() {
                var e = g["default"](u["default"].mark(function t(e) {
                    var n, r;
                    return u["default"].wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (n = Array.isArray(e), r = void 0, t.prev = 2, !n) {
                                t.next = 7;
                                break;
                            }
                            return t.delegateYield(u["default"].mark(function a() {
                                var t;
                                return u["default"].wrap(function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                      case 0:
                                        return n.next = 2, h["default"].all(e.map(x));

                                      case 2:
                                        t = n.sent, r = e.reduce(function(e, n, r) {
                                            return m["default"](e, d["default"]({}, n, t[r]));
                                        }, {});

                                      case 4:
                                      case "end":
                                        return n.stop();
                                    }
                                }, a, void 0);
                            })(), "t0", 5);

                          case 5:
                            t.next = 10;
                            break;

                          case 7:
                            return t.next = 9, x(e);

                          case 9:
                            r = t.sent;

                          case 10:
                            t.next = 16;
                            break;

                          case 12:
                            t.prev = 12, t.t1 = t["catch"](2), n && (r = {}), console.warn("prefs get error:", t.t1);

                          case 16:
                            return t.abrupt("return", r);

                          case 17:
                          case "end":
                            return t.stop();
                        }
                    }, t, void 0, [ [ 2, 12 ] ]);
                }));
                return function(t) {
                    return e.apply(this, arguments);
                };
            }(),
            set: function() {
                var e = g["default"](u["default"].mark(function t(e, n) {
                    return u["default"].wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (null === e || "object" !== ("undefined" == typeof e ? "undefined" : l["default"](e))) {
                                t.next = 2;
                                break;
                            }
                            return t.abrupt("return", o["default"](e).forEach(function(t) {
                                return k.set(t, e[t]);
                            }));

                          case 2:
                            try {
                                w["default"].prefs.set(e, n);
                            } catch (r) {
                                console.warn("prefs set error", r);
                            }

                          case 3:
                          case "end":
                            return t.stop();
                        }
                    }, t, void 0);
                }));
                return function(t, n) {
                    return e.apply(this, arguments);
                };
            }(),
            all: function() {
                return new h["default"](function(e, t) {
                    try {
                        w["default"].prefs.all(e, t);
                    } catch (n) {
                        t(n);
                    }
                });
            },
            clearAll: function() {
                try {
                    w["default"].prefs.clearAll();
                } catch (e) {
                    console.warn("prefs clearAll error", e);
                }
            }
        });
        n["default"] = k, t.exports = n["default"];
    }, {
        "babel-runtime/core-js/object/assign": 6,
        "babel-runtime/core-js/object/keys": 10,
        "babel-runtime/core-js/promise": 13,
        "babel-runtime/helpers/asyncToGenerator": 17,
        "babel-runtime/helpers/defineProperty": 20,
        "babel-runtime/helpers/typeof": 27,
        "babel-runtime/regenerator": 123,
        emitter: "emitter",
        "lib/forge": 208
    } ],
    161: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e, t) {
            function n() {
                ne = ce.createElement("grammarly-btn"), re = h["default"].findDOMNode(T()), r(), 
                ae = new A["default"]({
                    btnEl: re,
                    fieldEl: Q,
                    custom: he,
                    sourceEl: Oe,
                    isTextarea: "textarea" == ee,
                    initCondition: ve
                }), ae.on("update", b), ae.on("change-state", _), Pe = P["default"]({
                    editorEl: Q,
                    btnEl: re,
                    padding: 15
                }), oe = O["default"]({
                    el: re,
                    editor: ie,
                    posSourceEl: de && Q,
                    enabled: ve,
                    referral: Se,
                    referralWasClicked: Ne,
                    onReferralClick: te.clickReferrals,
                    mimic: Ae,
                    btn: He,
                    app: Y
                }), le = j["default"]({
                    el: re,
                    doc: ce,
                    win: window
                }), oe.bind(), oe.on("change-state", function(e) {
                    _e = e, E();
                }), v.listen(re, "click", f), t.on("hover", N), v.listen(fe, "focus", a), v.listen(fe, "blur", p), 
                v.isFocused(fe) && (N({
                    target: fe
                }), a()), Ie.fieldParentCustomStyle && (Le = v.setCustomCss(Q.parentNode, Ie.fieldParentCustomStyle(Q))), 
                !Z.online && He.offline();
            }
            function r() {
                var e = {
                    "z-index": (parseInt(v.css(Q, "z-index")) || 1) + 1
                }, t = Ie.btnCustomContainer && Ie.btnCustomContainer(Q);
                if (t) {
                    he = !0, Oe = t;
                    var n = Ie.btnCustomStyles && Ie.btnCustomStyles(!0, Q);
                    n && u["default"](e, n);
                }
                v.insertAfter(ne, Oe), b(e);
            }
            function a() {
                if (Ce = !0, ge = !0, we = !0, t.off("hover", N), !ve) return void z();
                if (!Ee) {
                    Ee = !0;
                    try {
                        ie = x["default"]({
                            app: Y,
                            doc: ce,
                            connection: Z,
                            page: J,
                            user: X,
                            type: ee,
                            field: Q,
                            actions: te
                        }), se = C["default"](ie.reset, He.offline), s("on"), ie.run(), oe.updateEditor(ie), 
                        ae.set("minimize", !pe), ae.set("editor", ie);
                    } catch (e) {
                        console.error(e), He.offline();
                    }
                    z();
                }
            }
            function s() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? "on" : arguments[0];
                ie[e]("finish", c), ie[e]("rendered", z), ie[e]("sending", R), ie[e]("show-dialog", U);
            }
            function c() {
                U(), z();
            }
            function f() {
                ie && ie.isOffline() && le.fastShow();
            }
            function p(e) {
                ye && v.isFocused(fe) && N(e);
            }
            function b(e) {
                u["default"](ue, e), E();
            }
            function _() {
                xe = !q(), ke = !0, k.fire("button-change-state", xe), oe && oe.hide();
            }
            function w(e) {
                pe || (fe.focus(), v.hasClass(e.target, G["default"].status) && oe.show(!0));
            }
            function E() {
                ne || n(), T();
            }
            function T() {
                return h["default"].render(g["default"].createElement(L["default"], {
                    state: K(),
                    inlineStyle: ue,
                    onViewClick: w
                }), ne);
            }
            function N(e) {
                if (!v.isFocused(fe) && ge) {
                    if (Pe.within(e)) return void $();
                    ge = !1;
                }
                if (e.target != fe) return D();
                if (o(e.target, re, fe)) ge = !0, $(); else {
                    if (i(e.target)) return;
                    D();
                }
            }
            function M() {
                ye = !0, we = !0, 0 == re.style.opacity && (re.style.opacity = 1), z(), Fe();
            }
            function $() {
                ye || (ve ? M() : $e = setTimeout(M, 150));
            }
            function D() {
                if (ye) {
                    if (clearTimeout($e), oe.isOpened()) return void (re.style.opacity = 0);
                    ye = !1, we = !1, z();
                }
            }
            function R() {
                pe || (clearTimeout(Me), F());
            }
            function F() {
                clearTimeout(Me), ie && !ie.getText().trim() || me || (me = !0, se && se.start(), 
                !ye && N({
                    target: fe
                }), z());
            }
            function U() {
                clearTimeout(Me), se && se.finish(), Me = setTimeout(B, 200);
            }
            function B() {
                me = !1, z();
            }
            function V() {
                ie && (se && se.finish(), Ee = !1, ie.remove(), s("off"));
            }
            function H() {
                De && k.fire("session-end", De), V(), ae && ae.remove(), oe && oe.remove(), oe && oe.unbind(), 
                v.unlisten(re, "click", f), t.off("hover", N), v.unlisten(fe, "focus", a), v.unlisten(fe, "blur", p), 
                le.remove(), Le && Le(), ne.parentNode && ne.parentNode.removeChild(ne);
            }
            function W(e) {
                var t = e.user, n = e.connection, r = e.page;
                Te = t.anonymous, je = t.premium, Se = t.referral, Ne = r.referralWasClicked, Ae = t.mimic, 
                Ge(n.online), ie && ie.updateState({
                    user: t,
                    connection: n,
                    page: r
                }), z();
            }
            function z() {
                var e = ie && ie.errorData() || {};
                e.enabled = ve, e.checking = me, e.anonymous = Te, e.premium = je, e.referral = Se, 
                e.referralWasClicked = Ne, e.mimic = Ae, e.fieldWasFocused = Ce, oe && oe.update(e), 
                ae && ae.set("show", we), E();
            }
            function q() {
                return ae.max;
            }
            function K() {
                var e = ie && ie.errorData() || {};
                return e.critical < 1 && !me && e.plus > 0 && De++, {
                    offline: pe,
                    checking: me,
                    enabled: ve,
                    anonymous: Te,
                    premium: je,
                    show: we,
                    visible: ye,
                    wasMinimized: ke,
                    minimized: xe,
                    hovered: _e,
                    isFieldEmpty: be,
                    isFieldHovered: ge,
                    fieldWasFocused: Ce,
                    isEditorInited: Ee,
                    referralWasClicked: Ne,
                    errors: e
                };
            }
            var Y = e.app, X = e.user, J = e.page, Z = e.connection, Q = e.field, ee = e.type, te = e.actions, ne = (e.disableIntersectionCheck, 
            void 0), re = void 0, ae = void 0, oe = void 0, ie = void 0, le = void 0, se = void 0, ue = {
                visibility: "hidden"
            }, ce = Q.ownerDocument, de = "iframe" == ee, fe = de ? l(Q) : Q, me = !1, pe = !Z.online, ge = void 0, be = 0 == (Q.value || Q.textContent || "").trim().length, he = !1, ve = !0, _e = !1, ye = !1, we = !1, xe = !1, ke = !1, Ee = !1, Ce = !1, Te = X.anonymous, je = X.premium, Se = X.referral, Ne = J.referralWasClicked, Ae = X.mimic, Me = void 0, Pe = void 0, $e = void 0, Oe = Q, De = 0, Ie = y["default"](ce).getFixesForCurrentDomain(), Re = I["default"](J.disabledFields, te.toggleField), Le = void 0, Fe = m["default"].throttle(function() {
                var e, t = (e = {
                    "true": "freemium"
                }, d["default"](e, Te, "anonymous"), d["default"](e, je, "premium"), e), n = t["true"];
                k.call("gnar.send", S.getBrowser() + "Ext/gButtonShown"), k.call("statsc.ui.increment", "stability:g_button_shown_to." + n);
            }, 2e3), Ge = function(e) {
                pe != !e && (pe = !e, ae && ae.set("minimize", e), z(), ie && ie[pe ? "offline" : "online"](), 
                ve && le[pe ? "enable" : "disable"]());
            }, Ue = function(e) {
                if (ve != e) {
                    var t = e && !ve, n = S.isSafari() && t;
                    ve = e, Re.changeFieldState(Q, Oe, !e), ae && ae.set("maximize", e), e ? (oe.hide(), 
                    a()) : V(), z(), n && (re.style.display = "none", S.asyncCall(function() {
                        return re.style.display = "";
                    }));
                }
            }, Be = function() {
                ve = !Re.isFieldDisabled(Q), xe = !ve, !ve && Ue(!1), E();
            }, Ve = function() {
                return re;
            }, He = {
                online: function() {
                    return Ge(!0);
                },
                offline: function() {
                    return Ge(!1);
                },
                enable: function() {
                    return Ue(!0);
                },
                disable: function() {
                    return Ue(!1);
                },
                remove: H,
                getEl: Ve,
                getState: K,
                updateState: W,
                getPosState: q,
                onViewClick: w,
                onChangeState: _,
                show: $,
                hide: D,
                checking: R,
                cancelChecking: U
            };
            return Be(), He;
        }
        function o(e, t, n) {
            return v.isFocused(n) || e == n || v.isParent(e, n) || e == t || v.isParent(e, t);
        }
        function i(e) {
            return 0 == e.className.indexOf("gr-") || v.resolveEl(e, G["default"].textarea_btn) || v.resolveEl(e, "gr__tooltip");
        }
        function l(e) {
            var t = S.guid(), n = e;
            v.setGRAttributes(n, t), n.setAttribute("gramm-ifr", !0);
            var r = n.contentDocument;
            return v.addIframeCss(r), v.setGRAttributes(r.body, t), n.style.height = n.style.height || getComputedStyle(n).height, 
            r.body;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = e("babel-runtime/core-js/object/assign"), u = r(s), c = e("babel-runtime/helpers/defineProperty"), d = r(c), f = e("lodash"), m = r(f), p = e("react"), g = r(p), b = e("react-dom"), h = r(b), v = e("../dom"), _ = e("../sites"), y = r(_), w = e("../editor"), x = r(w), k = e("../tracking"), E = e("../infinity-checker"), C = r(E), T = e("../elements/error-tooltip"), j = r(T), S = e("../util"), N = e("./pos"), A = r(N), M = e("./path"), P = r(M), $ = e("./menu"), O = r($), D = e("./state"), I = r(D), R = e("./view"), L = r(R), F = {
            textarea_btn: "_9b5ef6-textarea_btn",
            status: "_9b5ef6-status",
            field_hovered: "_9b5ef6-field_hovered",
            btn_text: "_9b5ef6-btn_text",
            not_focused: "_9b5ef6-not_focused",
            errors_100: "_9b5ef6-errors_100",
            anonymous: "_9b5ef6-anonymous",
            show: "_9b5ef6-show",
            errors: "_9b5ef6-errors",
            checking: "_9b5ef6-checking",
            has_errors: "_9b5ef6-has_errors",
            disabled: "_9b5ef6-disabled",
            transform_wrap: "_9b5ef6-transform_wrap",
            offline: "_9b5ef6-offline",
            plus_only: "_9b5ef6-plus_only",
            minimized: "_9b5ef6-minimized",
            hovered: "_9b5ef6-hovered",
            minimize_transition: "_9b5ef6-minimize_transition"
        }, G = r(F);
        n["default"] = a, t.exports = n["default"];
    }, {
        "../dom": 179,
        "../editor": 181,
        "../elements/error-tooltip": 187,
        "../infinity-checker": 215,
        "../sites": 232,
        "../tracking": 247,
        "../util": 251,
        "./menu": 164,
        "./path": 167,
        "./pos": 169,
        "./state": 172,
        "./view": 173,
        "babel-runtime/core-js/object/assign": 6,
        "babel-runtime/helpers/defineProperty": 20,
        lodash: "lodash",
        react: "react",
        "react-dom": "react-dom"
    } ],
    162: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            function t(e) {
                function t(e, t) {
                    l.call("statsc.ui.increment", "activity:" + t + ".button_created"), w.set(e, m["default"]({
                        field: e,
                        app: f,
                        user: h,
                        page: v,
                        connection: b,
                        type: t,
                        actions: _
                    }, y));
                }
                c(e), e.textareas.forEach(function(e) {
                    return t(e, "textarea");
                }), e.contenteditables.forEach(function(e) {
                    return t(e, "contenteditable");
                }), e.iframes.forEach(function(e) {
                    return t(e, "iframe");
                }), e.htmlghosts.forEach(function(e) {
                    return t(e, "htmlghost");
                });
            }
            function n(e) {
                console.log("remove", e), w.get(e) && w.get(e).remove(), w["delete"](e);
            }
            function r() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? "on" : arguments[0];
                y[e]("add", t), y[e]("remove", n);
            }
            function a(e) {
                o(e.connection.bgNotConnected), f.elements && f.elements.updateState(e), w.forEach(function(t) {
                    return t.updateState(e);
                });
            }
            function o(e) {
                if (e && x) u["default"].start(p), l.call("statsc.ui.increment", "stability:lost_connection_to_bg_page"), 
                l.call("felog.error", "lost_connection_to_bg_page"); else if (!e && !x) {
                    var t = u["default"].stop(p);
                    l.call("statsc.ui.timing", "stability:restore_connection_to_bg_page", t), l.call("felog.info", "restore_connection_to_bg_page", {
                        active_time: t
                    });
                }
                x = !e;
            }
            function s() {
                r("off"), w.forEach(function(e) {
                    return e.remove();
                }), w.clear(), w = null, f.elements && f.elements.clear(), f.elements = null, y.reset(), 
                y.stop(), y = null;
            }
            function c(e) {
                try {
                    console.log("add", e);
                } catch (t) {
                    console.log("fields added");
                }
            }
            var f = e.app, g = e.doc, b = e.connection, h = e.user, v = e.page, _ = e.actions, y = d["default"]({
                doc: g,
                page: v
            }), w = new i["default"](), x = !0;
            return o(b.bgNotConnected), r("on"), t(y.get()), {
                add: t,
                updateState: a,
                remove: n,
                clear: s
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/core-js/map"), i = r(o), l = e("../tracking"), s = e("../timers"), u = r(s), c = e("../page-fields"), d = r(c), f = e("./button"), m = r(f), p = "life_without_bg_connection";
        n["default"] = a, t.exports = n["default"];
    }, {
        "../page-fields": 226,
        "../timers": 243,
        "../tracking": 247,
        "./button": 161,
        "babel-runtime/core-js/map": 5
    } ],
    163: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/helpers/defineProperty"), o = r(a), i = e("babel-runtime/core-js/object/get-prototype-of"), l = r(i), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), g = r(p), b = e("react"), h = r(b), v = e("react-dom"), _ = r(v), y = e("../../dom"), w = {
            hoverMenu: "_44eb54-hoverMenu",
            opened: "_44eb54-opened",
            btn: "_44eb54-btn",
            line: "_44eb54-line",
            panel: "_44eb54-panel",
            premium: "_44eb54-premium",
            btn_premium: "_44eb54-btn_premium",
            btn_grammarly: "_44eb54-btn_grammarly",
            anonymous: "_44eb54-anonymous",
            panelText: "_44eb54-panelText",
            critical: "_44eb54-critical",
            disabled: "_44eb54-disabled",
            referralArea: "_44eb54-referralArea",
            btn_referralControl: "_44eb54-btn_referralControl",
            btn_referralVersion1: "_44eb54-btn_referralVersion1",
            btn_referralVersion1PostClick: "_44eb54-btn_referralVersion1PostClick",
            btn_referralVersion2: "_44eb54-btn_referralVersion2",
            btn_referralVersion3: "_44eb54-btn_referralVersion3",
            btn_disable: "_44eb54-btn_disable",
            initial: "_44eb54-initial",
            checking: "_44eb54-checking",
            counter: "_44eb54-counter",
            counter100: "_44eb54-counter100",
            buttonArea: "_44eb54-buttonArea",
            referralText: "_44eb54-referralText",
            tooltip: "_44eb54-tooltip",
            tooltip_grammarly: "_44eb54-tooltip_grammarly",
            tooltip_premium: "_44eb54-tooltip_premium",
            tooltip_disable: "_44eb54-tooltip_disable",
            plus: "_44eb54-plus",
            tooltip_referral: "_44eb54-tooltip_referral",
            referral: "_44eb54-referral",
            tooltip_visible: "_44eb54-tooltip_visible",
            tooltip_hidden: "_44eb54-tooltip_hidden"
        }, x = r(w), k = function(e) {
            function t() {
                u["default"](this, t);
                var e = m["default"](this, l["default"](t).call(this));
                return e.onMouseEnterHandler = e.onMouseEnterHandler.bind(e), e.onMouseLeaveHandler = e.onMouseLeaveHandler.bind(e), 
                e.onMouseClick = e.onMouseClick.bind(e), e;
            }
            return g["default"](t, e), d["default"](t, [ {
                key: "onMouseEnterHandler",
                value: function() {
                    var e = this, t = this.props.data.type.includes("referral"), n = t ? 150 : 1350;
                    this.tooltipTimeout = setTimeout(function() {
                        e.props.data.onTooltip({
                            active: !0,
                            el: _["default"].findDOMNode(e),
                            text: e.props.data.text,
                            cls: t ? "referral" : e.props.data.type
                        });
                    }, n);
                }
            }, {
                key: "onMouseLeaveHandler",
                value: function() {
                    clearTimeout(this.tooltipTimeout), this.props.data.onTooltip({
                        active: !1,
                        text: this.props.data.text,
                        cls: this.props.data.type
                    });
                }
            }, {
                key: "onMouseClick",
                value: function(e) {
                    this.props.data.click && this.props.data.click(e), "disable" == this.props.data.type && this.onMouseLeaveHandler();
                }
            }, {
                key: "isShowInviteFriends",
                value: function(e) {
                    return !e.referralWasClicked && ("referralVersion2" == e.type || "referralVersion3" == e.type);
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.props.data, n = y.cs((e = {}, o["default"](e, x["default"].btn, !0), 
                    o["default"](e, x["default"]["btn_" + t.type], !0), o["default"](e, x["default"].counter, t.count > 0), 
                    o["default"](e, x["default"].counter100, t.count > 99), e));
                    return h["default"].createElement("div", {
                        className: x["default"].buttonArea
                    }, t.type.includes("referral") ? h["default"].createElement("div", {
                        className: x["default"].referralArea,
                        onClick: this.onMouseClick,
                        onMouseEnter: this.onMouseEnterHandler,
                        onMouseLeave: this.onMouseLeaveHandler,
                        "data-action": t.actionType,
                        tabIndex: "-1"
                    }, h["default"].createElement("div", {
                        className: n
                    }), this.isShowInviteFriends(t) && h["default"].createElement("span", {
                        className: x["default"].referralText
                    }, "Invite Friends")) : h["default"].createElement("div", {
                        className: n,
                        onClick: this.onMouseClick,
                        onMouseEnter: this.onMouseEnterHandler,
                        onMouseLeave: this.onMouseLeaveHandler,
                        "data-action": t.actionType,
                        tabIndex: "-1"
                    }, t.count > 0 ? t.count : null));
                }
            } ]), t;
        }(h["default"].Component);
        n["default"] = k, t.exports = n["default"];
    }, {
        "../../dom": 179,
        "babel-runtime/core-js/object/get-prototype-of": 9,
        "babel-runtime/helpers/classCallCheck": 18,
        "babel-runtime/helpers/createClass": 19,
        "babel-runtime/helpers/defineProperty": 20,
        "babel-runtime/helpers/inherits": 22,
        "babel-runtime/helpers/possibleConstructorReturn": 24,
        react: "react",
        "react-dom": "react-dom"
    } ],
    164: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            function t(e) {
                function t() {
                    D.showDialog({
                        caller: "button_hover"
                    }), S.fire("correct-btn-clicked"), k["default"].start("open_editor");
                }
                function n() {
                    return F.mimic.includes("001_premium_popup") ? (S.fire("premium-popup-show"), void new j["default"]({
                        doc: G,
                        plus: F.plus,
                        editor: D
                    })) : r();
                }
                function r() {
                    var e = b["default"].getUpgradeUrlFromMatches({
                        baseUrl: _.URLS.upgrade,
                        returnUrl: "",
                        appType: "popup",
                        matches: D.getMatches()
                    });
                    S.fire("upgrade", "button_hover"), w["default"].emitBackground("open-url", e);
                }
                if (!D.isOffline()) {
                    var a = e.target;
                    h.hasClass(a, P["default"].btn_premium) ? F.premium ? t() : n() : h.hasClass(a, P["default"].btn_grammarly) && t(), 
                    setTimeout(N, 200);
                }
            }
            function n() {
                R(), S.fire("referral-clicked", "gButton"), w["default"].emitBackground("open-url", _.URLS.referral), 
                N();
            }
            function r() {
                S.fire("referral-shown", "gButton");
            }
            function a() {
                var e = void 0;
                return F.mimic.includes("referral_icon_control") ? e = "referralControl" : F.mimic.includes("referral_icon_gift") ? e = F.referralWasClicked ? "referralVersion1PostClick" : "referralVersion1" : F.mimic.includes("referral_icon_gift_text") ? e = "referralVersion2" : F.mimic.includes("referral_icon_heart_text") && (e = "referralVersion3"), 
                e || "referralControl";
            }
            function o() {
                F.enabled ? (F.enabled = !1, I.disable(), N()) : (I.enable(), F.enabled = !0), S.fire("btn-disable-in-field", F.enabled), 
                m();
            }
            function l(e) {
                F = e, m();
            }
            function u(e) {
                D = e;
            }
            function d(e) {
                var t = v.getAbsRect($), n = {}, r = !I.getPosState() && F.enabled, a = t.top, o = t.left;
                return e && (o -= e.clientWidth, a -= e.clientHeight / 2), a += r ? J : Y, o -= r ? X : K, 
                !r && L.menuPosLeft && (o = L.menuPosLeft(D, o, F)), s["default"](n, i["default"]({}, V, "translate(" + o + "px, " + a + "px)")), 
                n;
            }
            function m() {
                var e = g(F, d(), B);
                return q = f["default"].findDOMNode(e), g(F, d(q), U);
            }
            function g(e, r, i) {
                return f["default"].render(c["default"].createElement(C["default"], {
                    style: r,
                    click: t,
                    disableClick: o,
                    referralClick: n,
                    state: e,
                    opened: W,
                    getReferralVersion: a
                }), i);
            }
            function y() {
                h.listen(G.documentElement, "mousemove", E), D && D.on("iframe-mousemove", E);
            }
            function x(e) {
                (!W || e) && (h.unlisten(G.documentElement, "mousemove", E), D && D.off("iframe-mousemove", E));
            }
            function E(e) {
                var t = h.resolveEl(e.target, O["default"].textarea_btn);
                if (t && t != $) return N();
                if (h.hasClass($, O["default"].offline)) return N();
                var n = h.resolveEl(e.target, P["default"].hoverMenu);
                return t || n == H ? e.target.classList.contains(O["default"].btn_text) ? N() : void T() : N();
            }
            function T(e) {
                (z && !F.offline && F.fieldWasFocused || e) && (W || (W = !0, Z.emit("change-state", !0), 
                m(), F.referral && r()));
            }
            function N() {
                W && (W = !1, Z.emit("change-state", !1), m());
            }
            function M() {
                x(), U.parentNode && U.parentNode.removeChild(U), B.parentNode && B.parentNode.removeChild(B);
            }
            var $ = e.el, D = e.editor, I = e.btn, R = e.onReferralClick, L = A["default"](G).getFixesForCurrentDomain(), F = {
                critical: 0,
                plus: 0,
                mimic: e.mimic,
                offline: !1,
                referral: e.referral,
                referralWasClicked: e.referralWasClicked,
                enabled: e.enabled,
                initial: e.initial,
                checking: e.checking,
                fieldWasFocused: e.fieldWasFocused
            }, G = $.ownerDocument, U = G.createElement("div"), B = G.createElement("div"), V = h.transformProp(G), H = f["default"].findDOMNode(m()), W = !1, z = !0, q = void 0, K = -26, Y = 11, X = -13, J = 2;
            h.addClass(U, "gr-top-z-index"), h.addClass(U, "gr-top-zero"), U.setAttribute("tabindex", -1), 
            B.style.cssText = "visibility: hidden;top: -9999px;position: absolute;opacity: 0", 
            G.documentElement.insertBefore(U, G.body), G.documentElement.insertBefore(B, G.body);
            var Z = p["default"]({
                show: T,
                hide: N,
                bind: y,
                unbind: x,
                remove: M,
                render: m,
                menuEl: H,
                update: l,
                onclick: t,
                updateEditor: u,
                isOpened: function() {
                    return W;
                },
                isEnabled: function() {
                    return z;
                },
                disable: function() {
                    return z = !1;
                },
                enable: function() {
                    return z = !0;
                },
                getState: function() {
                    return F;
                }
            });
            return Z;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/helpers/defineProperty"), i = r(o), l = e("babel-runtime/core-js/object/assign"), s = r(l), u = e("react"), c = r(u), d = e("react-dom"), f = r(d), m = e("emitter"), p = r(m), g = e("grammarly-editor"), b = r(g), h = e("../../dom"), v = e("../../position"), _ = e("../../config"), y = e("../../message"), w = r(y), x = e("../../timers"), k = r(x), E = e("./view"), C = r(E), T = e("../../elements/premium-dialog"), j = r(T), S = e("../../tracking"), N = e("../../sites"), A = r(N), M = {
            hoverMenu: "_44eb54-hoverMenu",
            opened: "_44eb54-opened",
            btn: "_44eb54-btn",
            line: "_44eb54-line",
            panel: "_44eb54-panel",
            premium: "_44eb54-premium",
            btn_premium: "_44eb54-btn_premium",
            btn_grammarly: "_44eb54-btn_grammarly",
            anonymous: "_44eb54-anonymous",
            panelText: "_44eb54-panelText",
            critical: "_44eb54-critical",
            disabled: "_44eb54-disabled",
            referralArea: "_44eb54-referralArea",
            btn_referralControl: "_44eb54-btn_referralControl",
            btn_referralVersion1: "_44eb54-btn_referralVersion1",
            btn_referralVersion1PostClick: "_44eb54-btn_referralVersion1PostClick",
            btn_referralVersion2: "_44eb54-btn_referralVersion2",
            btn_referralVersion3: "_44eb54-btn_referralVersion3",
            btn_disable: "_44eb54-btn_disable",
            initial: "_44eb54-initial",
            checking: "_44eb54-checking",
            counter: "_44eb54-counter",
            counter100: "_44eb54-counter100",
            buttonArea: "_44eb54-buttonArea",
            referralText: "_44eb54-referralText",
            tooltip: "_44eb54-tooltip",
            tooltip_grammarly: "_44eb54-tooltip_grammarly",
            tooltip_premium: "_44eb54-tooltip_premium",
            tooltip_disable: "_44eb54-tooltip_disable",
            plus: "_44eb54-plus",
            tooltip_referral: "_44eb54-tooltip_referral",
            referral: "_44eb54-referral",
            tooltip_visible: "_44eb54-tooltip_visible",
            tooltip_hidden: "_44eb54-tooltip_hidden"
        }, P = r(M), $ = {
            textarea_btn: "_9b5ef6-textarea_btn",
            status: "_9b5ef6-status",
            field_hovered: "_9b5ef6-field_hovered",
            btn_text: "_9b5ef6-btn_text",
            not_focused: "_9b5ef6-not_focused",
            errors_100: "_9b5ef6-errors_100",
            anonymous: "_9b5ef6-anonymous",
            show: "_9b5ef6-show",
            errors: "_9b5ef6-errors",
            checking: "_9b5ef6-checking",
            has_errors: "_9b5ef6-has_errors",
            disabled: "_9b5ef6-disabled",
            transform_wrap: "_9b5ef6-transform_wrap",
            offline: "_9b5ef6-offline",
            plus_only: "_9b5ef6-plus_only",
            minimized: "_9b5ef6-minimized",
            hovered: "_9b5ef6-hovered",
            minimize_transition: "_9b5ef6-minimize_transition"
        }, O = r($);
        n["default"] = a, t.exports = n["default"];
    }, {
        "../../config": 175,
        "../../dom": 179,
        "../../elements/premium-dialog": 193,
        "../../message": 217,
        "../../position": 227,
        "../../sites": 232,
        "../../timers": 243,
        "../../tracking": 247,
        "./view": 166,
        "babel-runtime/core-js/object/assign": 6,
        "babel-runtime/helpers/defineProperty": 20,
        emitter: "emitter",
        "grammarly-editor": "grammarly-editor",
        react: "react",
        "react-dom": "react-dom"
    } ],
    165: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/helpers/defineProperty"), o = r(a), i = e("babel-runtime/core-js/object/get-prototype-of"), l = r(i), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), g = r(p), b = e("react"), h = r(b), v = e("../../dom"), _ = {
            hoverMenu: "_44eb54-hoverMenu",
            opened: "_44eb54-opened",
            btn: "_44eb54-btn",
            line: "_44eb54-line",
            panel: "_44eb54-panel",
            premium: "_44eb54-premium",
            btn_premium: "_44eb54-btn_premium",
            btn_grammarly: "_44eb54-btn_grammarly",
            anonymous: "_44eb54-anonymous",
            panelText: "_44eb54-panelText",
            critical: "_44eb54-critical",
            disabled: "_44eb54-disabled",
            referralArea: "_44eb54-referralArea",
            btn_referralControl: "_44eb54-btn_referralControl",
            btn_referralVersion1: "_44eb54-btn_referralVersion1",
            btn_referralVersion1PostClick: "_44eb54-btn_referralVersion1PostClick",
            btn_referralVersion2: "_44eb54-btn_referralVersion2",
            btn_referralVersion3: "_44eb54-btn_referralVersion3",
            btn_disable: "_44eb54-btn_disable",
            initial: "_44eb54-initial",
            checking: "_44eb54-checking",
            counter: "_44eb54-counter",
            counter100: "_44eb54-counter100",
            buttonArea: "_44eb54-buttonArea",
            referralText: "_44eb54-referralText",
            tooltip: "_44eb54-tooltip",
            tooltip_grammarly: "_44eb54-tooltip_grammarly",
            tooltip_premium: "_44eb54-tooltip_premium",
            tooltip_disable: "_44eb54-tooltip_disable",
            plus: "_44eb54-plus",
            tooltip_referral: "_44eb54-tooltip_referral",
            referral: "_44eb54-referral",
            tooltip_visible: "_44eb54-tooltip_visible",
            tooltip_hidden: "_44eb54-tooltip_hidden"
        }, y = r(_), w = function(e) {
            function t() {
                return u["default"](this, t), m["default"](this, l["default"](t).apply(this, arguments));
            }
            return g["default"](t, e), d["default"](t, [ {
                key: "render",
                value: function() {
                    var e, t = this.props.data || {}, n = this.props.measure, r = v.cs((e = {}, o["default"](e, y["default"].tooltip, !0), 
                    o["default"](e, y["default"].tooltip_visible, t.active && !n), o["default"](e, y["default"].tooltip_hidden, !t.active && !n), 
                    o["default"](e, y["default"]["tooltip_" + t.cls], !0), e)), a = void 0;
                    return t.active && !n && (a = {
                        right: 0
                    }), h["default"].createElement("div", {
                        style: a,
                        className: r,
                        refs: "tooltip",
                        dangerouslySetInnerHTML: {
                            __html: t.text
                        }
                    });
                }
            } ]), t;
        }(h["default"].Component);
        n["default"] = w, t.exports = n["default"];
    }, {
        "../../dom": 179,
        "babel-runtime/core-js/object/get-prototype-of": 9,
        "babel-runtime/helpers/classCallCheck": 18,
        "babel-runtime/helpers/createClass": 19,
        "babel-runtime/helpers/defineProperty": 20,
        "babel-runtime/helpers/inherits": 22,
        "babel-runtime/helpers/possibleConstructorReturn": 24,
        react: "react"
    } ],
    166: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/helpers/defineProperty"), o = r(a), i = e("babel-runtime/core-js/object/get-prototype-of"), l = r(i), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), g = r(p), b = e("react"), h = r(b), v = e("react-dom"), _ = r(v), y = e("./action"), w = r(y), x = e("./tooltip"), k = r(x), E = e("../../dom"), C = {
            hoverMenu: "_44eb54-hoverMenu",
            opened: "_44eb54-opened",
            btn: "_44eb54-btn",
            line: "_44eb54-line",
            panel: "_44eb54-panel",
            premium: "_44eb54-premium",
            btn_premium: "_44eb54-btn_premium",
            btn_grammarly: "_44eb54-btn_grammarly",
            anonymous: "_44eb54-anonymous",
            panelText: "_44eb54-panelText",
            critical: "_44eb54-critical",
            disabled: "_44eb54-disabled",
            referralArea: "_44eb54-referralArea",
            btn_referralControl: "_44eb54-btn_referralControl",
            btn_referralVersion1: "_44eb54-btn_referralVersion1",
            btn_referralVersion1PostClick: "_44eb54-btn_referralVersion1PostClick",
            btn_referralVersion2: "_44eb54-btn_referralVersion2",
            btn_referralVersion3: "_44eb54-btn_referralVersion3",
            btn_disable: "_44eb54-btn_disable",
            initial: "_44eb54-initial",
            checking: "_44eb54-checking",
            counter: "_44eb54-counter",
            counter100: "_44eb54-counter100",
            buttonArea: "_44eb54-buttonArea",
            referralText: "_44eb54-referralText",
            tooltip: "_44eb54-tooltip",
            tooltip_grammarly: "_44eb54-tooltip_grammarly",
            tooltip_premium: "_44eb54-tooltip_premium",
            tooltip_disable: "_44eb54-tooltip_disable",
            plus: "_44eb54-plus",
            tooltip_referral: "_44eb54-tooltip_referral",
            referral: "_44eb54-referral",
            tooltip_visible: "_44eb54-tooltip_visible",
            tooltip_hidden: "_44eb54-tooltip_hidden"
        }, T = r(C), j = function(e) {
            function t() {
                var e, n, r, a;
                u["default"](this, t);
                for (var o = arguments.length, i = Array(o), s = 0; o > s; s++) i[s] = arguments[s];
                return n = r = m["default"](this, (e = l["default"](t)).call.apply(e, [ this ].concat(i))), 
                r.state = {
                    tooltip: {
                        active: !1,
                        text: "",
                        cls: ""
                    }
                }, r.onTooltip = function(e) {
                    var t = _["default"].render(h["default"].createElement(k["default"], {
                        data: e,
                        measure: !0
                    }), r.tooltipMeasure);
                    setTimeout(function() {
                        e.width = _["default"].findDOMNode(t).clientWidth, r.setState({
                            tooltip: e
                        });
                    }, 10);
                }, a = n, m["default"](r, a);
            }
            return g["default"](t, e), d["default"](t, [ {
                key: "componentDidMount",
                value: function() {
                    this.tooltipMeasure = document.createElement("div"), this.tooltipMeasure.style.cssText = "visibility: hidden;top: -9999px;position: absolute;opacity: 0", 
                    document.documentElement.appendChild(this.tooltipMeasure);
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    document.documentElement.removeChild(this.tooltipMeasure);
                }
            }, {
                key: "getTooltipText",
                value: function(e) {
                    return e.enabled ? "Disable in this text field" : "Enable Grammarly here";
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.props, n = t.state, r = n.critical, a = n.plus, i = E.cs((e = {}, 
                    o["default"](e, T["default"].hoverMenu, !0), o["default"](e, T["default"].initial, n.initial), 
                    o["default"](e, T["default"].premium, n.premium), o["default"](e, T["default"].anonymous, n.anonymous), 
                    o["default"](e, T["default"].checking, n.checking), o["default"](e, T["default"].disabled, 0 == n.enabled), 
                    o["default"](e, T["default"].critical, r), o["default"](e, T["default"].plus, a), 
                    o["default"](e, T["default"].opened, t.opened), o["default"](e, T["default"].referral, n.referral), 
                    e)), l = n.anonymous ? "Log in to enable personalized<br/>checks and other features" : "Edit in Grammarly", s = n.premium ? "See advanced corrections" : "Upgrade to make advanced corrections", u = this.getTooltipText(n), c = "Invite friends. Get Premium for free.";
                    return h["default"].createElement("div", {
                        className: i,
                        style: t.style
                    }, h["default"].createElement("div", {
                        className: T["default"].panel
                    }, h["default"].createElement(k["default"], {
                        data: this.state.tooltip
                    }), h["default"].createElement(w["default"], {
                        data: {
                            type: "disable",
                            size: "small",
                            text: u,
                            click: t.disableClick,
                            onTooltip: this.onTooltip
                        }
                    }), n.referral && h["default"].createElement(w["default"], {
                        data: {
                            type: t.getReferralVersion(),
                            size: "small",
                            text: c,
                            click: t.referralClick,
                            onTooltip: this.onTooltip,
                            referralWasClicked: n.referralWasClicked
                        }
                    }), h["default"].createElement("div", {
                        className: T["default"].line
                    }), a ? h["default"].createElement(w["default"], {
                        data: {
                            type: "premium",
                            size: "small",
                            text: s,
                            count: a,
                            click: t.click,
                            onTooltip: this.onTooltip
                        }
                    }) : null, h["default"].createElement(w["default"], {
                        data: {
                            type: "grammarly",
                            actionType: "editor",
                            size: "small",
                            text: l,
                            click: t.click,
                            count: r,
                            onTooltip: this.onTooltip
                        }
                    })));
                }
            } ]), t;
        }(h["default"].Component);
        n["default"] = j, t.exports = n["default"];
    }, {
        "../../dom": 179,
        "./action": 163,
        "./tooltip": 165,
        "babel-runtime/core-js/object/get-prototype-of": 9,
        "babel-runtime/helpers/classCallCheck": 18,
        "babel-runtime/helpers/createClass": 19,
        "babel-runtime/helpers/defineProperty": 20,
        "babel-runtime/helpers/inherits": 22,
        "babel-runtime/helpers/possibleConstructorReturn": 24,
        react: "react",
        "react-dom": "react-dom"
    } ],
    167: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = function(e) {
            function t(e, t) {
                return t.left >= e.left && t.top >= e.top ? "se" : t.left >= e.left && t.top <= e.top ? "ne" : t.left <= e.left && t.top <= e.top ? "nw" : t.left <= e.left && t.top >= e.top ? "sw" : void 0;
            }
            function n(e, t, n, r) {
                var a = r.left + r.width + l, o = r.left - l, i = r.top + r.height + l, s = r.top - l, u = n.left - l, c = n.left + n.width + l, d = n.top - l, f = n.top + n.height + l, m = c > a ? c : a;
                return "se" == e && t.x >= u && t.x <= m && t.y >= d && t.y <= i ? !0 : "ne" == e && t.x >= u && t.x <= m && t.y >= s && t.y <= f ? !0 : "nw" == e && t.x >= o && t.x <= c && t.y >= s && t.y <= f ? !0 : "sw" == e && t.x >= o && t.x <= c && t.y >= d && t.y <= i ? !0 : !1;
            }
            function r(e) {
                var t = e.getBoundingClientRect();
                return {
                    height: t.height,
                    width: t.width,
                    top: t.top,
                    left: t.left
                };
            }
            function a(e) {
                var a = r(o), l = r(i), s = t(a, l);
                return n(s, e, a, l);
            }
            var o = e.editorEl, i = e.btnEl, l = e.padding, s = void 0;
            return s = {
                within: a
            };
        };
        n["default"] = r, t.exports = n["default"];
    }, {} ],
    168: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            function t(e) {
                return e.ghostarea ? e.ghostarea.gh.clone.firstChild : l;
            }
            function n(e) {
                var n = d(t(e)), r = e && e.getText().trim().length;
                if (n && r > 0) return m = r, "minimize";
                var a = m - r > u, o = !m || a || 0 == r;
                return o && "maximize";
            }
            function r(e, t) {
                return t && e != t ? t : void 0;
            }
            function a(e, t) {
                var a = e.minimize, o = e.maximize, i = e.editor, s = t ? "maximize" : "minimize";
                if (a || o) {
                    var u = f.forceMinimize && f.forceMinimize(l);
                    if (u || a && !o) return r(s, "minimize");
                    if (!i || !a && o) return r(s, "maximize");
                    var c = n(i);
                    return r(s, c);
                }
            }
            var o = e.btnEl, l = e.fieldEl, u = 200, c = o.ownerDocument, d = s["default"]({
                btnEl: o
            }), f = i["default"](c).getFixesForCurrentDomain(), m = void 0;
            return {
                get: a
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n["default"] = a;
        var o = e("lib/sites"), i = r(o), l = e("./intersect"), s = r(l);
        t.exports = n["default"];
    }, {
        "./intersect": 170,
        "lib/sites": 232
    } ],
    169: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/helpers/toConsumableArray"), o = r(a), i = e("babel-runtime/core-js/object/assign"), l = r(i), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("lodash"), m = r(f), p = e("emitter"), g = r(p), b = e("lib/window-events"), h = r(b), v = e("lib/util"), _ = e("lib/dom"), y = e("./position"), w = r(y), x = e("./condition"), k = r(x), E = function() {
            function e(t) {
                var n = this, r = t.btnEl, a = t.fieldEl, o = t.sourceEl, i = t.custom, s = t.isTextarea, c = t.initCondition;
                u["default"](this, e), this.state = {
                    minimize: !1,
                    maximize: !0,
                    editor: null,
                    show: !1
                }, this.max = !0, this.windowEvents = [ {
                    paste: function() {
                        return n.debouncedUpdate();
                    },
                    resize: function() {
                        return n.update();
                    },
                    keyup: function() {
                        _.isFocused(n.fieldEl) && n.debouncedUpdate();
                    }
                }, !0 ], this.checkResize = function() {
                    try {
                        n.position && n.position.resize() && n.debouncedUpdate();
                    } catch (e) {
                        console.error(e), v.cancelInterval(n.checkResize);
                    }
                }, this.debouncedUpdate = m["default"].debounce(function() {
                    return n.update();
                }, 50), this.update = function() {
                    if (n.state.show && n.position && (n.emit("update", {
                        visibility: "hidden"
                    }), n.emit("update", n.position.get(n.max)), n.state.editor)) {
                        var e = n.condition.get(n.state, n.max);
                        "undefined" != typeof e && (n.max = "maximize" == e, n.emit("change-state"), n.update());
                    }
                }, this.remove = function() {
                    n.listeners("off"), n.condition = null, n.position && n.position.remove(), n.position = null;
                }, this.max = c, this.state.minimize = !c, this.state.maximize = c, l["default"](this, g["default"]({
                    fieldEl: a
                })), this.position = w["default"]({
                    btnEl: r,
                    sourceEl: o,
                    custom: i,
                    isTextarea: s
                }), this.condition = k["default"]({
                    btnEl: r,
                    fieldEl: a,
                    custom: i
                }), this.listeners();
            }
            return d["default"](e, [ {
                key: "set",
                value: function(e, t) {
                    this.state[e] = t, this.update();
                }
            }, {
                key: "listeners",
                value: function() {
                    var e, t = arguments.length <= 0 || void 0 === arguments[0] ? "on" : arguments[0];
                    h["default"][t].apply(h["default"], o["default"](this.windowEvents));
                    var n = "on" == t ? _.on : _.off;
                    (e = this.fieldEl, n).call(e, "scroll", this.debouncedUpdate);
                    var r = "on" == t ? v.interval : v.cancelInterval;
                    r(this.checkResize, 200);
                }
            } ]), e;
        }();
        n["default"] = E, t.exports = n["default"];
    }, {
        "./condition": 168,
        "./position": 171,
        "babel-runtime/core-js/object/assign": 6,
        "babel-runtime/helpers/classCallCheck": 18,
        "babel-runtime/helpers/createClass": 19,
        "babel-runtime/helpers/toConsumableArray": 26,
        emitter: "emitter",
        "lib/dom": 179,
        "lib/util": 251,
        "lib/window-events": 252,
        lodash: "lodash"
    } ],
    170: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            function t(e, t, n) {
                var r = document.createElement("div");
                r.className = t, r.style.top = e.top + "px", r.style.left = e.left + "px", r.style.height = e.height + "px", 
                r.style.width = e.width + "px", r.style.position = "absolute", r.style.border = "1px dashed red", 
                r.style.zIndex = "1000000", r.style.pointerEvents = "none", n && (r.style.borderColor = n), 
                document.body.appendChild(r);
            }
            function n(e, t) {
                return e.left + e.width > t.left && (e.bottom > t.top && e.bottom < t.bottom || e.top < t.bottom && e.top > t.top);
            }
            function r(e, r) {
                var a = document.body.scrollTop;
                return o && i["default"](document.querySelectorAll(".gr-evade")).forEach(function(e) {
                    return e.parentElement.removeChild(e);
                }), e.map(function(e) {
                    return {
                        top: e.top + a,
                        bottom: e.bottom + a,
                        left: e.left,
                        width: e.width,
                        height: e.height
                    };
                }).some(function(e) {
                    return o && t(e, "gr-evade"), n(e, r);
                });
            }
            var a = e.btnEl, o = !1, l = 2;
            return function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1], n = a.getBoundingClientRect();
                if (n) {
                    n = {
                        top: n.top + document.body.scrollTop - l + t,
                        bottom: n.bottom + document.body.scrollTop + l + t,
                        left: n.left - l + t,
                        width: n.width,
                        height: n.height
                    };
                    var o = document.createRange();
                    o.selectNodeContents(e);
                    var s = e.clientWidth, u = i["default"](o.getClientRects()).filter(function(e) {
                        var t = e.width;
                        return s > t;
                    });
                    return r(u, n);
                }
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/core-js/array/from"), i = r(o);
        n["default"] = a, t.exports = n["default"];
    }, {
        "babel-runtime/core-js/array/from": 1
    } ],
    171: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            function t() {
                var e = g.getPos(d), t = e.x != j.x || e.y != j.y;
                return T.clientWidth != d.clientWidth || T.clientHeight != d.clientHeight || t ? (j = e, 
                !0) : void 0;
            }
            function n() {
                if (!A) {
                    T = f["default"]({
                        offsetHeight: d.offsetHeight,
                        clientWidth: d.clientWidth,
                        clientHeight: d.clientHeight
                    }, b.compStyle(d, "border-bottom-width", "border-right-width", "resize", "padding-top", "padding-bottom", "overflowX", "overflow", "padding-right"), g.getAbsRect(d)), 
                    T.resize = [ "both", "horizontal", "vertical" ].includes(T.resize);
                    var e = g.getAbsRect(u), t = e.left, n = e.top;
                    T.left += S - t, T.top += N - n, _ || "scroll" == T.overflowX || "scroll" == T.overflow || (T.height = Math.max(parseInt(T.height), T.offsetHeight));
                }
            }
            function r(e) {
                if (e) return 0;
                var t = parseInt(T["padding-right"]);
                return t > 0 ? -t / 2 + 2 : -5;
            }
            function a(e, t) {
                var n = e ? x : k;
                return e ? t ? (n - T.height) / 2 : -8 : 0;
            }
            function o() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0], t = {
                    visibility: ""
                };
                if (h) return c["default"](t, M.btnCustomStyles ? M.btnCustomStyles(e, d) : {});
                n();
                var o = !e && T.resize ? -10 : 0, l = T.clientHeight < y, u = a(e, l) + r(e), f = e || l ? 0 : -7, m = e ? x : k, p = M.btnDiff && M.btnDiff(d, e) || [ 0, 0 ], g = s["default"](p, 2), b = g[0], v = g[1], _ = T.left + T.width - parseInt(T["border-right-width"]) - m + u + b, w = T.top + T.height - parseInt(T["border-bottom-width"]) - m + u + f + v + o;
                return _ == S && w == N ? t : (c["default"](t, i["default"]({}, C, "translate(" + _ + "px, " + w + "px)")), 
                A = !0, S = _, N = w, t);
            }
            function l() {
                b.off.call(u, w, P);
            }
            var u = e.btnEl, d = e.sourceEl, m = e.custom, h = void 0 === m ? !1 : m, v = e.isTextarea, _ = void 0 === v ? !1 : v, y = 25, w = b.transitionEndEventName(), x = 22, k = 8, E = u.ownerDocument, C = b.transformProp(E), T = void 0, j = g.getPos(d), S = 0, N = 0, A = !1, M = p["default"](E).getFixesForCurrentDomain(), P = function() {
                A = !1, n();
            };
            return b.on.call(u, w, P), n(), {
                get: o,
                resize: t,
                remove: l
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/helpers/defineProperty"), i = r(o), l = e("babel-runtime/helpers/slicedToArray"), s = r(l), u = e("babel-runtime/core-js/object/assign"), c = r(u), d = e("babel-runtime/helpers/extends"), f = r(d);
        n["default"] = a;
        var m = e("lib/sites"), p = r(m), g = e("lib/position"), b = e("lib/dom");
        t.exports = n["default"];
    }, {
        "babel-runtime/core-js/object/assign": 6,
        "babel-runtime/helpers/defineProperty": 20,
        "babel-runtime/helpers/extends": 21,
        "babel-runtime/helpers/slicedToArray": 25,
        "lib/dom": 179,
        "lib/position": 227,
        "lib/sites": 232
    } ],
    172: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a() {
            function e(e, n) {
                var r = s["default"](e.ownerDocument).getFixesForCurrentDomain(), a = r.fieldStateForDomain && r.fieldStateForDomain(e);
                if (a) return a;
                var o = n && "IFRAME" == n.tagName, i = o ? n : e, l = [ i.getAttribute("id") || "", i.getAttribute("name") || "" ].filter(Boolean);
                return l.length || l.push(t(i)), o && l.push(n.ownerDocument.location.host || ""), 
                l.join(":");
            }
            function t(e, t) {
                return e && e.id && !t ? '//*[@id="' + e.id + '"]' : n(e);
            }
            function n(e) {
                for (var t = []; e && 1 == e.nodeType; e = e.parentNode) {
                    for (var n = 0, r = e.previousSibling; r; r = r.previousSibling) r.nodeType != Node.DOCUMENT_TYPE_NODE && r.nodeName == e.nodeName && ++n;
                    var a = e.nodeName.toLowerCase(), o = n ? "[" + (n + 1) + "]" : "";
                    t.splice(0, 0, a + o);
                }
                return t.length ? "/" + t.join("/") : null;
            }
            function r(t, n) {
                var r = e(t, n);
                return o[r];
            }
            function a(t, n, r) {
                var a = e(t, n);
                o[a] != r && l(i["default"]({}, a, r));
            }
            var o = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], l = arguments[1];
            return {
                getSelector: e,
                isFieldDisabled: r,
                changeFieldState: a
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/helpers/defineProperty"), i = r(o);
        n["default"] = a;
        var l = e("../sites"), s = r(l);
        t.exports = n["default"];
    }, {
        "../sites": 232,
        "babel-runtime/helpers/defineProperty": 20
    } ],
    173: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/helpers/defineProperty"), o = r(a), i = e("babel-runtime/core-js/object/get-prototype-of"), l = r(i), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), g = r(p), b = e("lodash"), h = r(b), v = e("react"), _ = r(v), y = e("../dom"), w = e("../util"), x = {
            textarea_btn: "_9b5ef6-textarea_btn",
            status: "_9b5ef6-status",
            field_hovered: "_9b5ef6-field_hovered",
            btn_text: "_9b5ef6-btn_text",
            not_focused: "_9b5ef6-not_focused",
            errors_100: "_9b5ef6-errors_100",
            anonymous: "_9b5ef6-anonymous",
            show: "_9b5ef6-show",
            errors: "_9b5ef6-errors",
            checking: "_9b5ef6-checking",
            has_errors: "_9b5ef6-has_errors",
            disabled: "_9b5ef6-disabled",
            transform_wrap: "_9b5ef6-transform_wrap",
            offline: "_9b5ef6-offline",
            plus_only: "_9b5ef6-plus_only",
            minimized: "_9b5ef6-minimized",
            hovered: "_9b5ef6-hovered",
            minimize_transition: "_9b5ef6-minimize_transition"
        }, k = r(x), E = function(e) {
            function t() {
                return u["default"](this, t), m["default"](this, l["default"](t).apply(this, arguments));
            }
            return g["default"](t, e), d["default"](t, [ {
                key: "render",
                value: function() {
                    var e, t = this.props.state, n = t.anonymous, r = t.premium, a = this.props.onViewClick, i = t.errors.critical, l = i > 0 && !t.checking, s = !t.enabled, u = t.offline, c = !s && !u && t.isFieldEmpty && n, d = h["default"]([ k["default"].textarea_btn ]).push(y.cs((e = {}, 
                    o["default"](e, k["default"].show, t.show), o["default"](e, k["default"].minimized, t.minimized), 
                    o["default"](e, k["default"].minimize_transition, t.wasMinimized), o["default"](e, k["default"].errors, l), 
                    o["default"](e, k["default"].has_errors, i > 0), o["default"](e, k["default"].errors_100, i > 99), 
                    o["default"](e, k["default"].offline, u), o["default"](e, k["default"].checking, t.checking && !u && !s), 
                    o["default"](e, k["default"].disabled, s), o["default"](e, k["default"].plus_only, r && !l && t.errors.plus > 0), 
                    o["default"](e, k["default"].anonymous, n), o["default"](e, k["default"].hovered, t.hovered), 
                    o["default"](e, k["default"].field_hovered, t.isFieldHovered), o["default"](e, k["default"].not_focused, !t.fieldWasFocused), 
                    e))).join(" "), f = y.camelizeAttrs(this.props.inlineStyle), m = l && i ? i : " ", p = "Found " + i + " " + w.declension(i, [ "error", "errors" ]) + " in text", g = "Not signed in";
                    return i || (p = "Protected by Grammarly"), _["default"].createElement("div", {
                        onClick: a,
                        style: f,
                        className: d
                    }, _["default"].createElement("div", {
                        className: k["default"].transform_wrap
                    }, _["default"].createElement("div", {
                        title: p,
                        className: k["default"].status
                    }, m)), c ? _["default"].createElement("span", {
                        className: k["default"].btn_text
                    }, g) : null);
                }
            } ]), t;
        }(_["default"].Component);
        n["default"] = E, t.exports = n["default"];
    }, {
        "../dom": 179,
        "../util": 251,
        "babel-runtime/core-js/object/get-prototype-of": 9,
        "babel-runtime/helpers/classCallCheck": 18,
        "babel-runtime/helpers/createClass": 19,
        "babel-runtime/helpers/defineProperty": 20,
        "babel-runtime/helpers/inherits": 22,
        "babel-runtime/helpers/possibleConstructorReturn": 24,
        lodash: "lodash",
        react: "react"
    } ],
    174: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e("dompurify"), a = function() {
            function e(e) {
                function n(e) {
                    function t(e) {
                        if (e.parentNode) if (e.childNodes.length > 1) {
                            for (var t = document.createDocumentFragment(); e.childNodes.length > 0; ) {
                                var n = e.childNodes[0];
                                t.appendChild(n);
                            }
                            e.parentNode.replaceChild(t, e);
                        } else e.firstChild ? e.parentNode.replaceChild(e.firstChild, e) : e.parentNode.removeChild(e);
                    }
                    function n(e) {
                        if (e) try {
                            for (var n = e.querySelectorAll(".gr_"), r = n.length, a = 0; r > a; a++) t(n[a]);
                        } catch (o) {}
                    }
                    function r(e) {
                        try {
                            Object.defineProperty(e, "innerHTML", {
                                get: function() {
                                    try {
                                        var t = e.ownerDocument.createRange();
                                        t.selectNodeContents(e);
                                        var r = t.cloneContents(), a = document.createElement("div");
                                        return a.appendChild(r), n(a), a.innerHTML;
                                    } catch (o) {}
                                },
                                set: function(t) {
                                    try {
                                        var n = e.ownerDocument.createRange();
                                        n.selectNodeContents(e), n.deleteContents();
                                        var r = n.createContextualFragment(t);
                                        e.appendChild(r);
                                    } catch (a) {}
                                }
                            });
                        } catch (t) {}
                    }
                    if (e) {
                        var a = e.cloneNode;
                        e.cloneNode = function(t) {
                            var o = a.call(e, t);
                            if (e.classList.contains("mceContentBody")) o.innerHTML = e.innerHTML, n(o); else try {
                                r(o);
                            } catch (i) {}
                            return o;
                        }, r(e);
                    }
                }
                if ("TEXTAREA" != e.tagName) try {
                    var a = e.ownerDocument, o = r.sanitize(e.getAttribute("data-gramm_id")), i = "document.querySelector(\"[data-gramm_id='" + o + "']\")";
                    t(a, n, [ i ]);
                } catch (l) {
                    console.log("error rewrite " + l);
                }
            }
            function t(e, t, n) {
                var r = e.createElement("script");
                n = n || [], Array.isArray(t) || (t = [ t ]);
                var a = t.join(" "), o = (t[t.length - 1].name, n.join(","));
                r.innerHTML = "(function(){(" + a + ")(" + o + ") })()", e.documentElement.appendChild(r);
            }
            return {
                rewriteInnerHTML: e,
                addScript: t
            };
        }();
        n["default"] = a, t.exports = n["default"];
    }, {
        dompurify: "dompurify"
    } ],
    175: [ function(e, t, n) {
        (function(r) {
            "use strict";
            function a(e) {
                return e && e.__esModule ? e : {
                    "default": e
                };
            }
            function o() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                c["default"](j, e);
            }
            function i() {
                return f["default"] ? f["default"].config.modules.parameters.version : void 0;
            }
            function l() {
                return f["default"] ? f["default"].config.modules.parameters.updateTime : void 0;
            }
            function s() {
                return f["default"] ? f["default"].config.uuid : void 0;
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var u = e("babel-runtime/core-js/object/assign"), c = a(u), d = "undefined" != typeof window ? window.forge : "undefined" != typeof r ? r.forge : null, f = a(d), m = e("spark-md5"), p = a(m), g = {
                key: "b37252e300204b00ad697fe1d3b979e1",
                project: "15",
                pingTimeout: 6e5
            }, b = {
                url: "https://gnar.grammarly.com",
                qaUrl: "https://gnar.qagr.io"
            }, h = "c10dd64c87f70ef5563a63c368797e8c", v = {
                qaKey: "7a5c95b5cba1b225d00cc3ba1c410c78",
                key: h,
                cookie: "mp_" + h + "_mixpanel"
            }, _ = {
                URL: "https://stats-public.grammarly.io/",
                PREFIX: "grammarly.ui"
            }, y = "grammarly.com", w = "https://www." + y, x = "https://data." + y, k = "https://app." + y, E = "https://auth." + y + "/v3", C = E + "/user", T = w + "/after_install_page", j = {
                app: k,
                capi: "wss://capi." + y + "/freews",
                dapiMimic: x + "/api/mimic",
                dapiProps: x + "/api/props",
                editorDictionary: k + "/profile/dictionary",
                dictionary: "https://capi." + y + "/api/defs",
                docs: k + "/docs",
                docsApi: "https://dox." + y + "/documents",
                authSettings: C + "/settings",
                authCreatePage: E + "/redirect-anonymous?location=" + T,
                userOrAnonymous: C + "/oranonymous",
                authSignin: E + "/login",
                authSignup: E + "/signup",
                signin: w + "/signin",
                signup: w + "/signup",
                resetPassword: w + "/resetpassword",
                raven: "felog.grammarly.io",
                referral: w + "/referral",
                welcomeC: w + "/extension-success",
                upgrade: w + "/upgrade",
                uninstall: w + "/extension-uninstall",
                terms: w + "/terms",
                policy: w + "/privacy-policy",
                pageConfigUrl: "https://d3cv4a9a9wh0bt.cloudfront.net/browserplugin/config.json"
            }, S = [ "The G logo gets out of the way when you're typing", "Switch between American and British English", "Quickly disable checking in certain types of text fields", "A fully redesigned and improved interface" ], N = [ "id", "email", "firstName", "anonymous", "type", "subscriptionFree", "premium", "settings", "registrationDate", "mimic", "groups", "extensionInstallDate", "fixed_errors", "referral" ];
            N.push("token");
            var A = {
                EXAMPLE_FEATURE: "example_feature"
            }, M = {
                example_feature: {
                    Free: [],
                    Premium: []
                }
            };
            n["default"] = {
                news: S,
                newsId: S.length && p["default"].hash(S.join("\n")),
                getUpdateTime: l,
                GRAMMARLY_DOMAIN: y,
                URLS: j,
                updateUrls: o,
                FELOG: g,
                STATSC: _,
                DAPI: x,
                MIXPANEL: v,
                GNAR: b,
                getVersion: i,
                getUuid: s,
                isTest: !f["default"],
                nextVerClass: "gr_ver_2",
                restrictedAttrs: [ "data-gramm_editor", "data-gramm", "data-gramm_id", "gramm_editor", "readonly", "pm-container", [ "class", "redactor-editor" ], [ "aria-label", "Search Facebook" ] ],
                restrictedParentAttrs: "[data-reactid]",
                userFields: N,
                externalEvents: [ "changed-user", "changed-plan", "changed-dialect", "cleanup", "editor-fix" ],
                development: "127.0.0.1:3117" == document.location.host,
                FEATURES: A,
                isFeatureDisabled: function(e, t, n) {
                    var r = M[e][n] || [];
                    return r && t && t.some(function(e) {
                        return r.includes(e);
                    });
                }
            }, t.exports = n["default"];
        }).call(this, "undefined" != typeof window ? window : {});
    }, {
        "babel-runtime/core-js/object/assign": 6,
        "spark-md5": "spark-md5"
    } ],
    176: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e("./util"), a = void 0, o = [ "info", "warn", "error", "time", "timeEnd", "debug" ];
        a = r.isBgOrPopup() ? window.console : window.gdebug = function() {
            var e = console;
            return function(t) {
                var n = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1];
                t === !1 ? (window.console = {}, window.console.log = r._f, o.forEach(function(t) {
                    window.console[t] = n ? r._f : e[t];
                })) : window.console = e;
            };
        }(), n["default"] = a, t.exports = n["default"];
    }, {
        "./util": 251
    } ],
    177: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a() {
            function e(e) {
                b.innerHTML = x["default"].sanitize(e);
                var t = b.querySelector("span.qualifier");
                return t ? (t.innerHTML = t.innerHTML.replace("(", "").replace(")", ""), b.innerHTML) : e;
            }
            function t(e) {
                return e.replace(/&lt;(sup|sub)&gt;(.*?)&lt;(\/sup|\/sub)&gt;/, "<$1>$2<$3>").replace(/&amp;(?=\w{1,8};)/, "&");
            }
            function n(n, a) {
                var o = {
                    ownerDocument: u,
                    getBoundingClientRect: function() {
                        return a.pos;
                    },
                    getClientRects: function() {
                        return [ a.pos ];
                    }
                };
                if (S = n, S.defs && S.defs.length) {
                    var i = g["default"].getAbsRect(o);
                    S.title = a.el.toString(), S.defs = S.defs.splice(0, 3).map(e).map(t), k = r(!1), 
                    C = y.findDOMNode(k.component), A = g["default"].posToRect(C, i), r();
                } else w.enable(), w.show({
                    posEl: a.el,
                    text: "No definition found"
                });
                E["default"].on($, !0), T["default"].start(v), j.call("statsc.ui.increment", "activity:defs.open");
            }
            function r() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                return f["default"].renderReactWithParent(_["default"].createElement(P, {
                    pos: A,
                    data: S,
                    visible: e,
                    className: p
                }), u.documentElement, v, "grammarly-card");
            }
            function a() {
                k && k.remove(), E["default"].off($, !0), O.emit("hide"), w.disable(), w.hide(), 
                k = null, j.call("statsc.ui.timing", "activity:defs.close", T["default"].stop(v));
            }
            function o(e) {
                27 == m.keyCode(e) && a();
            }
            function i(e) {
                var t = f["default"].inEl(e.target, C);
                (!t || t && f["default"].hasClass(e.target, M("btn-close"))) && a();
            }
            var l = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], s = l.doc, u = void 0 === s ? document : s, d = l.domCls, p = void 0 === d ? "" : d, b = u.createElement("div"), v = c["default"]("DictionaryCard"), w = N["default"]({
                cls: "gr-notfound-tooltip",
                enabled: !1,
                doc: u
            }), k = void 0, C = void 0, S = void 0, A = void 0, $ = {
                click: i,
                keydown: o,
                scroll: a,
                resize: a
            }, O = h["default"]({
                show: n,
                hide: a,
                unescapeSuperscript: t
            });
            return O;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/helpers/typeof"), i = r(o), l = e("babel-runtime/helpers/defineProperty"), s = r(l), u = e("babel-runtime/core-js/symbol"), c = r(u), d = e("./dom"), f = r(d), m = e("./util"), p = e("./position"), g = r(p), b = e("emitter"), h = r(b), v = e("react"), _ = r(v), y = e("react-dom"), w = e("dompurify"), x = r(w), k = e("./window-events"), E = r(k), C = e("./timers"), T = r(C), j = e("./tracking"), S = e("./elements/tooltip"), N = r(S), A = "gr-dictionary-card", M = function(e) {
            return A + "_" + e;
        }, P = _["default"].createClass({
            displayName: "DictionaryCard",
            getDefaultProps: function() {
                return {
                    pos: {
                        rect: {
                            top: 0,
                            left: 0,
                            width: 0
                        },
                        sourceRect: {
                            width: 0
                        },
                        delta: {
                            right: 0
                        },
                        className: "",
                        visible: !1
                    }
                };
            },
            getTriangleMargin: function() {
                var e = this.props.pos.sourceRect.width / 2;
                return this.props.pos.delta.right > 0 ? e : -this.props.pos.delta.right + e;
            },
            renderContent: function() {
                var e = this.props.data;
                return e.defs.map(function(t, n) {
                    var r, a = t.replace(/^([:,]\s)/, "");
                    a = a[0].toUpperCase() + a.substring(1, a.length);
                    var o = f["default"].cs((r = {}, s["default"](r, M("item-single"), 1 == e.defs.length), 
                    s["default"](r, M("item"), !0), r));
                    return _["default"].createElement("div", {
                        key: n,
                        className: o,
                        dangerouslySetInnerHTML: {
                            __html: x["default"].sanitize(a)
                        }
                    });
                });
            },
            renderFooterLink: function() {
                var e = this.props.data;
                if (e.url) {
                    var t = function() {
                        var t = "wiki" == e.origin ? "More on Wikipedia" : "More on Grammarly Words";
                        return {
                            v: _["default"].createElement("a", {
                                className: M("link"),
                                href: encodeURI(e.url),
                                onClick: function() {
                                    return j.call("felog.info", "dictionary_goto", {
                                        type: t
                                    });
                                },
                                target: "_blank"
                            }, t)
                        };
                    }();
                    if ("object" === ("undefined" == typeof t ? "undefined" : i["default"](t))) return t.v;
                }
            },
            render: function() {
                var e, t = {}, n = this.props.pos, r = f["default"].cs((e = {}, s["default"](e, A, !0), 
                s["default"](e, M("empty"), 0 == this.props.data.defs.length), s["default"](e, M("flip"), n.rect.flip), 
                s["default"](e, this.props.className, this.props.className), e)), a = {
                    marginLeft: this.getTriangleMargin()
                };
                return t.top = n.rect.top, t.left = n.rect.left, t.visibility = this.props.visible ? "" : "hidden", 
                _["default"].createElement("div", {
                    tabIndex: "-1",
                    style: t,
                    className: r
                }, _["default"].createElement("span", {
                    style: a,
                    className: M("triangle")
                }), _["default"].createElement("div", {
                    className: M("title")
                }, this.props.data.title), _["default"].createElement("div", {
                    className: M("content")
                }, this.renderContent()), _["default"].createElement("div", {
                    className: M("footer")
                }, this.renderFooterLink(), _["default"].createElement("div", {
                    className: M("btn-close")
                }, "Close")));
            }
        });
        a.component = P, n["default"] = a, t.exports = n["default"];
    }, {
        "./dom": 179,
        "./elements/tooltip": 205,
        "./position": 227,
        "./timers": 243,
        "./tracking": 247,
        "./util": 251,
        "./window-events": 252,
        "babel-runtime/core-js/symbol": 14,
        "babel-runtime/helpers/defineProperty": 20,
        "babel-runtime/helpers/typeof": 27,
        dompurify: "dompurify",
        emitter: "emitter",
        react: "react",
        "react-dom": "react-dom"
    } ],
    178: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/regenerator"), o = r(a), i = e("babel-runtime/helpers/extends"), l = r(i), s = e("babel-runtime/helpers/asyncToGenerator"), u = r(s);
        n["default"] = function(e) {
            function t() {
                s.release(), s = null, c = null, i = null;
            }
            var n = function() {
                var e = u["default"](o["default"].mark(function t(e) {
                    var n, s, u;
                    return o["default"].wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (n = e.el.startContainer ? e.el.startContainer.parentNode : e.el, s = b.matchesSelector(n, ".gr-grammar-card, .gr-grammar-card *, .gr-dictionary-card, .gr-dictionary-card *"), 
                            !s || a) {
                                t.next = 3;
                                break;
                            }
                            return t.abrupt("return");

                          case 3:
                            return p = "gr-selection-anim-dict " + h.nextVerClass, w["default"].animate(e.el, r, p), 
                            i = e, u = {}, t.prev = 7, t.next = 10, m.fetch(h.URLS.dictionary, {
                                data: l["default"]({}, e.data)
                            });

                          case 10:
                            if (u = t.sent, i == e) {
                                t.next = 13;
                                break;
                            }
                            return t.abrupt("return");

                          case 13:
                            t.next = 18;
                            break;

                          case 15:
                            t.prev = 15, t.t0 = t["catch"](7), f.call("felog.warn", "fetch_definitions_fail", {
                                error: t.t0
                            });

                          case 18:
                            w["default"].complete(), c.show(u, e), s && w["default"].remove();

                          case 21:
                          case "end":
                            return t.stop();
                        }
                    }, t, this, [ [ 7, 15 ] ]);
                }));
                return function(t) {
                    return e.apply(this, arguments);
                };
            }(), r = e.doc, a = e.cardInspection, i = void 0, s = g["default"](r), c = _["default"]({
                doc: r
            }), p = void 0;
            return s.on("select", n), s.on("unselect", w["default"].remove), c.on("hide", w["default"].remove), 
            d["default"]({
                clear: t
            });
        };
        var c = e("emitter"), d = r(c), f = e("./tracking"), m = e("./request"), p = e("./selection"), g = r(p), b = e("./dom"), h = e("./config"), v = e("./dictionary-card"), _ = r(v), y = e("./selection-animator"), w = r(y);
        t.exports = n["default"];
    }, {
        "./config": 175,
        "./dictionary-card": 177,
        "./dom": 179,
        "./request": 229,
        "./selection": 231,
        "./selection-animator": 230,
        "./tracking": 247,
        "babel-runtime/helpers/asyncToGenerator": 17,
        "babel-runtime/helpers/extends": 21,
        "babel-runtime/regenerator": 123,
        emitter: "emitter"
    } ],
    179: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e, t) {
            var n = (t || document).createElement("div");
            return n.innerHTML = e.trim(), n.firstElementChild;
        }
        function o(e, t, n) {
            var r = arguments.length <= 3 || void 0 === arguments[3] ? "div" : arguments[3], a = t[n] || {};
            t[n] = a, a.el || (a.el = t.ownerDocument.createElement(r), t.appendChild(a.el));
            var o = pe["default"].render(e, a.el);
            return a.remove || (a.remove = function() {
                delete t[n], t.removeChild(a.el), pe["default"].unmountComponentAtNode(a.el);
            }), {
                component: o,
                remove: a.remove,
                el: a.el
            };
        }
        function i(e, t) {
            for (var n = arguments.length <= 2 || void 0 === arguments[2] ? 1e3 : arguments[2], r = 0; e.parentNode && n > r; ) {
                if ("string" != typeof t && t == e) return !0;
                if (e.id == t || e == t) return !0;
                e = e.parentNode;
            }
            return !1;
        }
        function l(e, t) {
            return e && void 0 != e.className ? e.classList.contains(t) : !1;
        }
        function s(e, t) {
            return e && e.classList ? e.classList.remove(t) : void 0;
        }
        function u(e, t) {
            if (e) {
                if (-1 == t.indexOf(" ")) return e.classList.add(t);
                t = t.split(" ");
                for (var n = 0; n < t.length; n++) e.classList.add(t[n]);
            }
        }
        function c(e, t, n) {
            t ? u(e, n) : s(e, n);
        }
        function d(e, t) {
            for (;e = e.parentNode; ) if (p(e, t)) return e;
            return !1;
        }
        function f(e) {
            for (;e = e.parentNode; ) if (m(e)) return e;
            return !1;
        }
        function m(e) {
            return "true" == e.contentEditable || "plaintext-only" == e.contentEditable;
        }
        function p(e, t) {
            return e ? e.matches ? e.matches(t) : e.matchesSelector ? e.matchesSelector(t) : e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : e.mozMatchesSelector ? e.mozMatchesSelector(t) : window.$ && window.$.is ? window.$(e).is(t) : void 0 : !1;
        }
        function g(e) {
            return document.activeElement && "IFRAME" == document.activeElement.tagName ? e === e.ownerDocument.activeElement : document.activeElement && "BODY" == document.activeElement.tagName ? e === document.activeElement : e === document.activeElement;
        }
        function b(e, t, n, r) {
            var a = arguments.length <= 4 || void 0 === arguments[4] ? !1 : arguments[4];
            if (e) {
                if (de["default"].isObject(t)) return de["default"].each(t, function(t, n) {
                    b(e, n, t, r);
                });
                var o = r ? "removeEventListener" : "addEventListener", i = e[be] || [];
                return e[be] = i, r ? e[be] = i.filter(function(e) {
                    return !(e.event == t && e.cb == n);
                }) : i.push({
                    event: t,
                    cb: n
                }), e[o](t, n, a), {
                    el: e,
                    event: t,
                    cb: n,
                    bubble: a
                };
            }
        }
        function h(e, t, n, r) {
            return !t && e[be] ? e[be].each(function(t) {
                return h(e, t.event, t.cb, t.bubble);
            }) : void b(e, t, n, !0, r);
        }
        function v() {
            for (var e = this, t = arguments.length, n = Array(t), r = 0; t > r; r++) n[r] = arguments[r];
            return this.addEventListener.apply(this, n), {
                off: function() {
                    return _.call.apply(_, [ e ].concat(n));
                }
            };
        }
        function _() {
            this.removeEventListener.apply(this, arguments);
        }
        function y(e, t) {
            var n = this, r = function a(r) {
                t(r), _.call(n, e, a);
            };
            v.call(this, e, r);
        }
        function w(e, t) {
            var n = document.createEvent("CustomEvent");
            n.initCustomEvent(e, !0, !0, t), this.dispatchEvent(n);
        }
        function x(e) {
            var t = getComputedStyle(e, null), n = "none" != t.getPropertyValue("display") && "hidden" != t.getPropertyValue("visibility") && e.clientHeight > 0;
            return n;
        }
        function k() {
            for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
            return t.reduce(function(e, t) {
                return e.concat(de["default"].isObject(t) ? ue["default"](t).filter(function(e) {
                    return t[e];
                }) : t);
            }, []).join(" ");
        }
        function E(e, t) {
            return "number" != typeof t || he[j(e)] ? t : t + "px";
        }
        function C(e) {
            return e.replace(/-+(.)?/g, function(e, t) {
                return t ? t.toUpperCase() : "";
            });
        }
        function T(e) {
            return de["default"].transform(e, function(e, t, n) {
                return e[C(n)] = t;
            });
        }
        function j(e) {
            return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
        }
        function S(e, t, n) {
            if (arguments.length < 3) {
                var r = function() {
                    var n = e;
                    if (!n) return {
                        v: void 0
                    };
                    var r = getComputedStyle(n, "");
                    if ("string" == typeof t) return {
                        v: n.style[C(t)] || r.getPropertyValue(t)
                    };
                    if (de["default"].isArray(t)) {
                        var a = function() {
                            var e = {};
                            return de["default"].each(t, function(t, a) {
                                e[C(t)] = n.style[C(t)] || r.getPropertyValue(t);
                            }), {
                                v: {
                                    v: e
                                }
                            };
                        }();
                        if ("object" === ("undefined" == typeof a ? "undefined" : le["default"](a))) return a.v;
                    }
                }();
                if ("object" === ("undefined" == typeof r ? "undefined" : le["default"](r))) return r.v;
            }
            var a = "";
            if (de["default"].isString(t)) n || 0 === n ? a = j(t) + ":" + E(t, n) : e.style.removeProperty(j(t)); else for (var o in t) t[o] || 0 === t[o] ? a += j(o) + ":" + E(o, t[o]) + ";" : e.style.removeProperty(j(o));
            return e.style.cssText += ";" + a;
        }
        function N(e, t) {
            if (t && e) {
                var n = S(e, ue["default"](t));
                return S(e, t), function() {
                    return S(e, n);
                };
            }
        }
        function A(e, t) {
            for (;e = e.parentNode; ) if (e.tagName == t) return e;
            return !1;
        }
        function M(e, t, n) {
            for (;e = e.parentNode; ) if (e.dataset && e.dataset[t] && e.dataset[t] == n) return e;
        }
        function P(e, t) {
            return l(e, t) ? e : $(e, t);
        }
        function $(e, t) {
            for (;e = e.parentNode; ) if (l(e, t)) return e;
            return !1;
        }
        function O(e, t) {
            if (!e) return !1;
            for (;e.parentNode; ) {
                if (l(e, t)) return e;
                e = e.parentNode;
            }
            return !1;
        }
        function D() {
            var e, t = arguments.length <= 0 || void 0 === arguments[0] ? 1 : arguments[0];
            return t ? (e = this.parentNode, D).call(e, --t) : this;
        }
        function I(e, t) {
            if (!e) return !1;
            for (;e.parentNode; ) {
                if (t == e.parentNode) return e;
                e = e.parentNode;
            }
            return !1;
        }
        function R(e, t) {
            var n = t.parentNode;
            n.lastChild == t ? n.appendChild(e) : n.insertBefore(e, t.nextSibling);
        }
        function L(e, t) {
            t.parentNode.insertBefore(e, t);
        }
        function F(e, t) {
            for (t = t || document; e; ) {
                if (e == t) return !0;
                e = e.parentNode;
            }
            return !1;
        }
        function G(e) {
            var t = void 0, n = void 0, r = void 0, a = {
                ctrl: !1,
                meta: !1,
                shift: !1,
                alt: !1
            };
            e = de["default"].extend(a, e);
            try {
                t = e.el.ownerDocument.createEvent("KeyEvents"), n = e.el.ownerDocument.defaultView, 
                r = ge.keyCode(e), t.initKeyEvent(e.type, !0, !0, n, e.ctrl, e.alt, e.shift, e.meta, r, r);
            } catch (o) {
                t = e.el.ownerDocument.createEvent("UIEvents"), t.initUIEvent(e.name, !0, !0, window, 1), 
                t.keyCode = r, t.which = r, t.charCode = r, t.ctrlKey = e.ctrl, t.altKey = e.alt, 
                t.shiftKey = e.shift, t.metaKey = e.metaKey;
            }
            e.el.dispatchEvent(t);
        }
        function U(e) {
            return "undefined" != typeof e.hidden ? e.hidden : "undefined" != typeof e.mozHidden ? e.mozHidden : "undefined" != typeof e.webkitHidden ? e.webkitHidden : "undefined" != typeof e.msHidden ? e.msHidden : !1;
        }
        function B(e) {
            return "undefined" != typeof e.hidden ? "visibilitychange" : "undefined" != typeof e.mozHidden ? "mozvisibilitychange" : "undefined" != typeof e.webkitHidden ? "webkitvisibilitychange" : "undefined" != typeof e.msHidden ? "msvisibilitychange" : !1;
        }
        function V() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? document : arguments[0];
            return "undefined" != typeof e.body.style.transform ? "transform" : "undefined" != typeof e.body.style.WebkitTransform ? "WebkitTransform" : "undefined" != typeof e.body.style.MozTransform ? "MozTransform" : void 0;
        }
        function H(e) {
            if (e) {
                var t = e.ownerDocument;
                if (t) {
                    var n = t.defaultView || window;
                    if (n) {
                        var r = n.getComputedStyle(e, null);
                        if (r) {
                            for (var a = arguments.length, o = Array(a > 1 ? a - 1 : 0), i = 1; a > i; i++) o[i - 1] = arguments[i];
                            return 1 == o.length ? r.getPropertyValue(o[0]) : o.reduce(function(e, t) {
                                return oe["default"]({}, e, re["default"]({}, t, r.getPropertyValue(t)));
                            }, {});
                        }
                    }
                }
            }
        }
        function W(e) {
            return e.split(" ").map(function(e) {
                return "." != e[0] ? "." + e : e;
            }).join("").trim();
        }
        function z(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
            if (n.length > 0) {
                var a = function() {
                    var t = [];
                    return t.push(z(e)), n.forEach(function(e) {
                        return t.push(z(e));
                    }), {
                        v: t.join(", ")
                    };
                }();
                if ("object" === ("undefined" == typeof a ? "undefined" : le["default"](a))) return a.v;
            }
            return e = e.split(", ").map(function(e) {
                return "." != e[0] ? "." + e : e;
            }).join(", ").trim(), e + ", " + e + " *";
        }
        function q(e, t) {
            if (t == e) return !0;
            if (!e.children) return !1;
            for (var n = 0; n < e.children.length; n++) if (q(e.children[n], t)) return !0;
            return !1;
        }
        function K(e, t) {
            var n = function(n) {
                n.map(function(n) {
                    if (0 != n.removedNodes.length) for (var a = n.removedNodes, o = a.length, i = 0; o > i; i++) {
                        var l = a[i];
                        (l.contains && l.contains(e) || q(l, e)) && (r.disconnect(), t());
                    }
                });
            }, r = new MutationObserver(n);
            r.observe(e.ownerDocument.body, {
                childList: !0,
                subtree: !0
            });
        }
        function Y() {
            var e = void 0, t = document.createElement("fakeelement"), n = {
                animation: "animationend",
                MozAnimation: "animationend",
                WebkitAnimation: "webkitAnimationEnd"
            };
            for (e in n) if (void 0 != t.style[e]) return n[e];
        }
        function X() {
            var e = void 0, t = document.createElement("fakeelement"), n = {
                transition: "transitionend",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for (e in n) if (n.hasOwnProperty(e) && void 0 !== t.style[e]) return n[e];
        }
        function J(e) {
            if ("undefined" != typeof GR_INLINE_STYLES) {
                var t = e.createElement("style");
                t.innerHTML = GR_INLINE_STYLES;
                try {
                    e.querySelector("head").appendChild(t);
                } catch (n) {
                    console.log("can't append style", n);
                }
            }
        }
        function Z(e, t) {
            e.setAttribute("data-gramm_id", t), e.setAttribute("data-gramm", !0);
        }
        function Q(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], n = document.createEvent("CustomEvent");
            n.initCustomEvent(e + "-gr", !0, !0, t), document.dispatchEvent(n);
        }
        function ee(e, t) {
            var n = e.getSelection();
            n.removeAllRanges(), n.addRange(t);
        }
        function te(e, t) {
            var n = e.createRange();
            n.setStart(t.anchorNode, t.anchorOffset), n.setEnd(t.focusNode, t.focusOffset), 
            ee(e, n);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var ne = e("babel-runtime/helpers/defineProperty"), re = r(ne), ae = e("babel-runtime/helpers/extends"), oe = r(ae), ie = e("babel-runtime/helpers/typeof"), le = r(ie), se = e("babel-runtime/core-js/object/keys"), ue = r(se), ce = e("lodash"), de = r(ce), fe = e("react"), me = (r(fe), 
        e("react-dom")), pe = r(me), ge = e("./util"), be = ge.guid(), he = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        };
        n["default"] = {
            isVisible: x,
            createEl: a,
            renderReactWithParent: o,
            inEl: i,
            hasClass: l,
            addClass: u,
            removeClass: s,
            toggleClass: c,
            setDomRange: te,
            matchesSelector: p,
            getParentBySel: d,
            getParentByData: M,
            getParentByDepth: D,
            parentIsContentEditable: f,
            isContentEditable: m,
            isFocused: g,
            listen: b,
            unlisten: h,
            emitDomEvent: Q,
            on: v,
            off: _,
            once: y,
            emit: w,
            css: S,
            setCustomCss: N,
            addIframeCss: J,
            setGRAttributes: Z,
            compStyle: H,
            camelize: C,
            camelizeAttrs: T,
            insertBefore: L,
            insertAfter: R,
            elementInDocument: F,
            getParentByTag: A,
            parentHasClass: O,
            isParent: I,
            resolveEl: P,
            getParent: $,
            runKeyEvent: G,
            docHidden: U,
            visibilityEvent: B,
            transformProp: V,
            cs: k,
            selectorAll: z,
            classSelector: W,
            watchNodeRemove: K,
            whichAnimationEndEvent: Y,
            transitionEndEventName: X
        }, t.exports = n["default"];
    }, {
        "./util": 251,
        "babel-runtime/core-js/object/keys": 10,
        "babel-runtime/helpers/defineProperty": 20,
        "babel-runtime/helpers/extends": 21,
        "babel-runtime/helpers/typeof": 27,
        lodash: "lodash",
        react: "react",
        "react-dom": "react-dom"
    } ],
    180: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/core-js/object/assign"), o = r(a), i = e("grammarly-editor"), l = r(i), s = e("../socket"), u = r(s), c = e("../timers"), d = r(c), f = e("../message"), m = r(f), p = e("../util"), g = e("../tracking"), b = e("../benchmark"), h = (r(b), 
        e("lib/ghost/html-ghost-locator")), v = e("../position"), _ = e("../client-script"), y = r(_), w = e("../window-events"), x = r(w), k = e("../config"), E = e("../dom"), C = e("../ghost/html-ghost"), T = r(C), j = e("./track"), S = r(j), N = function(e) {
            function t() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? "on" : arguments[0];
                x["default"][e]("beforeunload", Z), m["default"][e]("editor-set-state", O, onerror), 
                m["default"][e]("dialog-closed", D), m["default"][e]("focus-editor", I), m["default"][e]("after-refresh-dialog", F), 
                ce[e]("track", S["default"]), ce[e]("fix", ae), ce[e]("serviceState", $), ce[e]("addedSynonym", A), 
                ce[e]("afterReplace", c), ce.dom[e]("badCursorPositionRetryFail", a), ce.dom[e]("badCursorPosition", r), 
                ce[e]("iframe-mousemove", M), s(!0);
                var t = "on" == e ? E.listen : E.unlisten;
                t(be, E.visibilityEvent(be), W), t(be, "grammarly:reset", P), fe && t(be.documentElement, "mousemove", f), 
                ee.card && (ee.card[e]("show", w), ee.card[e]("hide", C), ee.card[e]("toeditor", j), 
                ee.card[e]("addtodict", N));
            }
            function n() {
                d["default"].start(Q + "run"), t("on"), he(), y["default"].rewriteInnerHTML(de), 
                ce.getText() && ce.emit("sending"), J(re.enabledDefs), pe && G();
            }
            function r() {
                g.call("felog.info", "bad_cursor_position");
            }
            function a() {
                g.call("felog.error", "cursor_jump");
            }
            function i(e) {
                var t = e.user, n = e.page;
                le = t.settings.dialectStrong || n.dialectWeak, s(), se = t.anonymous, J(n.enabledDefs);
            }
            function s(e) {
                le || ue ? ue && (le || e) && ce.off("finished", b) : (ue = !0, ce.on("finished", b));
            }
            function c(e) {
                return Array.isArray(re.afterReplaceEvents) && re.afterReplaceEvents.forEach(function(e) {
                    return E.emit.call(de, e);
                }), e && e.remove();
            }
            function f(e) {
                ce.emit("iframe-mousemove", e);
            }
            function b(e) {
                var t = e.dialect;
                t && "undefined" !== t && (oe(t), le = t, s());
            }
            function _(e) {
                e && ce.setState(e), ce.api.ws.reconnect();
            }
            function w(e) {
                var t = ce.matches.byId(e);
                t && (ce.emit("context"), t.editorId = ce.id, t.select(), ee.card.setData(t));
            }
            function C() {
                L();
            }
            function j(e) {
                e == ce.id && (ce.showDialog({
                    caller: "card"
                }), d["default"].start("open_editor"), g.call("statsc.ui.increment", "stability:editor.open_from_card"));
            }
            function N(e) {
                e.match.editorId == ce.id && (se ? (e.hide(), ce.showDialog({
                    caller: "card"
                })) : e.match.addToDict());
            }
            function A(e) {
                e.editorId = ce.id, ee.card.showSynonyms(e);
            }
            function M(e) {
                ee.card.setOuterIframe(ge);
            }
            function P() {
                console.log("reseting capi session..."), _();
            }
            function $(e) {
                return "capi" == e.type ? e.available ? void (pe && B()) : G("Error checking is temporarily unavailable") : void 0;
            }
            function O(e) {
                e.editorId == ce.id && (ce.setState(e), ve && (ve = !1, Z()));
            }
            function D(e) {
                e == ce.id && (L(), ce.isHtmlGhost || R());
            }
            function I(e) {
                e == ce.id && R();
            }
            function R() {
                ce.srcEl.focus();
            }
            function L() {
                ce.selectedMatch && (ee.card.removeLoading(ce.selectedMatch.getEl()), ce.selectedMatch.deselect());
            }
            function F(e) {
                e.editorId == ce.id && _(e);
            }
            function G() {
                pe = !0, ce.clearData(), ce.api.close(), ce.render();
            }
            function U() {
                return pe;
            }
            function B() {
                pe = !1, _();
            }
            function V() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], t = e.caller, n = {
                    data: ce.getState(),
                    caller: t
                };
                ce.emit("show-dialog"), E.emitDomEvent("show-dialog"), m["default"].emitFocusedTab("show-dialog", n);
            }
            function H() {
                var e = de.ownerDocument.createRange();
                e.selectNodeContents(de);
                var t = e.cloneContents(), n = document.createElement("div");
                n.appendChild(t);
                for (var r = n.querySelectorAll("img"), a = r.length, o = 0; a > o; o++) r[o].src = r[o].src;
                return n.innerHTML;
            }
            function W() {
                return E.docHidden(be) ? K() : void Y();
            }
            function z(e) {
                return pe ? [] : e.filter(function(e) {
                    return e.free && !e.hidden;
                });
            }
            function q(e) {
                return E.matchesSelector(e, ".b-card.Synonyms .btn-close") ? !0 : !E.matchesSelector(e, ".b-card.Synonyms, .b-card.Synonyms *");
            }
            function K() {}
            function Y() {}
            function X() {
                var e = ce.getMatches();
                return {
                    critical: e.filter(function(e) {
                        return e.free && e.inDom;
                    }).length,
                    plus: e.filter(function(e) {
                        return !e.free;
                    }).length
                };
            }
            function J(e) {
                ce.enabledSynonyms != e && (ce.enabledSynonyms = e, ce.synonyms[e ? "fieldEnable" : "disable"]());
            }
            function Z(e) {
                if (!me || e) {
                    me = !0;
                    var n = ce.dom.getCleanHtml && ce.dom.getCleanHtml();
                    if (n && (ce.el.innerHTML = n), t("off"), ce.exit(), console.log("exit"), de.removeAttribute && k.restrictedAttrs.forEach(de.removeAttribute.bind(de)), 
                    fe && k.restrictedAttrs.forEach(ce.srcEl.removeAttribute.bind(ce.srcEl)), de.setAttribute("spellcheck", !0), 
                    h.isHtmlGhostSite()) {
                        var r = de.parentElement && de.parentElement.parentElement;
                        r && r.removeAttribute("spellcheck");
                    }
                    ce.emit("exit");
                }
            }
            var Q = (e.el || e.srcEl).getAttribute("gramm_id") || p.guid(), ee = e.app, te = e.user, ne = e.actions, re = e.page, ae = ne.incFixed, oe = ne.changeWeakDialect, ie = e.editorType.htmlghost, le = te.settings.dialectStrong || re.dialectWeak, se = te.anonymous, ue = void 0;
            o["default"](e, {
                capiUrl: k.URLS.capi,
                createWs: u["default"],
                docid: Q,
                textareaWrapSelector: '[gramm_id="' + Q + '"]',
                animatorContainer: e.el.ownerDocument.documentElement,
                getAnimatorElPos: v.getAbsRect,
                updateTextareaHeight: p._f,
                dialect: le,
                canRemoveSynonym: q,
                filter: z
            }), o["default"](l["default"].Capi, {
                CLIENT_NAME: "extension",
                clientVersion: k.getVersion(),
                extDomain: re.domain
            }), ie && (e.dom = T["default"]), l["default"].MatchPositions = function() {
                return {
                    generateMatchPositions: p._f
                };
            }, e.matchPrefix = k.nextVerClass;
            var ce = l["default"](e), de = ce.el, fe = e.posSourceEl && "IFRAME" == e.posSourceEl.tagName, me = !1, pe = !e.connection.online, ge = e.srcEl || de, be = de.ownerDocument, he = ce.run, ve = !1;
            o["default"](ce, {
                id: Q,
                srcEl: ge,
                camouflage: p._f,
                isHtmlGhost: ie,
                run: n,
                errorData: X,
                showDialog: V,
                isOffline: U,
                offline: G,
                online: B,
                updateState: i,
                outerIframe: e.outerIframe,
                cleanupText: p._f,
                activate: p._f,
                toggleBtn: p._f,
                remove: Z,
                reset: _
            });
            var _e = ce.getMatchClass;
            return ce.getMatchClass = function(e, t) {
                var n = _e(e, t);
                return n += e.renderedOnce || p.isSafari() ? " gr_disable_anim_appear" : " gr_run_anim", 
                e.renderedOnce = !0, n;
            }, ce.dom.changeSelection = p._f, ce.matches.fromReplaced = ce.matches.fromReplace = ce.matches.byId, 
            ce.current = ce.getFiltered, ce.started = !1, ce.el.setAttribute("data-gramm_editor", !0), 
            ce.getHtml && (ce.getHtml = H), ce;
        };
        n["default"] = N, t.exports = n["default"];
    }, {
        "../benchmark": 132,
        "../client-script": 174,
        "../config": 175,
        "../dom": 179,
        "../ghost/html-ghost": 213,
        "../message": 217,
        "../position": 227,
        "../socket": 235,
        "../timers": 243,
        "../tracking": 247,
        "../util": 251,
        "../window-events": 252,
        "./track": 182,
        "babel-runtime/core-js/object/assign": 6,
        "grammarly-editor": "grammarly-editor",
        "lib/ghost/html-ghost-locator": 212
    } ],
    181: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            var t, n = e.app, r = e.doc, a = e.type, o = e.field, s = e.connection, u = e.page, c = e.user, f = e.actions;
            return m.call("statsc.ui.increment", "activity:" + a + ".editor_init"), n.elements = n.elements || g["default"]({
                app: n,
                doc: r,
                user: c,
                actions: f
            }), "iframe" == a ? l(n, o, s, u, c, f) : i(n, o, (t = {}, d["default"](t, a, !0), 
            d["default"](t, "value", a), t), s, u, c, f);
        }
        function o(e, t) {
            if (b.setGRAttributes(e, t), e.setAttribute("spellcheck", !1), h.isHtmlGhostSite()) {
                var n = e.parentElement && e.parentElement.parentElement;
                n && n.setAttribute("spellcheck", !1);
            }
        }
        function i(e, t, n, r, a, i, l) {
            function s(t) {
                var s = t.el, u = t.id;
                return o(s, u), _["default"]({
                    id: u,
                    el: s,
                    app: e,
                    connection: r,
                    page: a,
                    user: i,
                    actions: l,
                    editorType: n
                });
            }
            var c = {
                el: t,
                id: f.guid()
            };
            return "contenteditable" == n.value ? s(u["default"]({}, c)) : w["default"](u["default"]({}, c, {
                createEditor: s
            }));
        }
        function l(e, t, n, r, a, i) {
            var l = f.guid(), s = t.contentDocument, u = s.body;
            return o(t, l), t.setAttribute("gramm-ifr", !0), b.addIframeCss(s), o(u, l), t.style.height = t.style.height || getComputedStyle(t).height, 
            _["default"]({
                el: u,
                app: e,
                connection: n,
                page: r,
                user: a,
                actions: i,
                srcEl: t,
                posSourceEl: t,
                editorType: {
                    contenteditable: !0,
                    value: "contenteditable"
                }
            });
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = e("babel-runtime/helpers/extends"), u = r(s), c = e("babel-runtime/helpers/defineProperty"), d = r(c);
        n["default"] = a;
        var f = e("../util"), m = e("../tracking"), p = e("../elements"), g = r(p), b = e("../dom"), h = e("lib/ghost/html-ghost-locator"), v = e("./editor"), _ = r(v), y = e("../ghost/ghostarea"), w = r(y);
        t.exports = n["default"];
    }, {
        "../dom": 179,
        "../elements": 190,
        "../ghost/ghostarea": 211,
        "../tracking": 247,
        "../util": 251,
        "./editor": 180,
        "babel-runtime/helpers/defineProperty": 20,
        "babel-runtime/helpers/extends": 21,
        "lib/ghost/html-ghost-locator": 212
    } ],
    182: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n["default"] = function(e) {
            var t = e.type, n = e.key, a = e.value, o = e.data;
            (n || o) && (n ? r.call("statsc.ui." + t, n, a) : r.call("statsc.ui." + t, o));
        };
        var r = e("../tracking");
        t.exports = n["default"];
    }, {
        "../tracking": 247
    } ],
    183: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            return null != e && null !== e.match(/^[.,;:!?\\\/-]$/);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/helpers/defineProperty"), i = r(o), l = e("babel-runtime/core-js/object/keys"), s = r(l), u = e("babel-runtime/core-js/object/get-prototype-of"), c = r(u), d = e("babel-runtime/helpers/classCallCheck"), f = r(d), m = e("babel-runtime/helpers/createClass"), p = r(m), g = e("babel-runtime/helpers/possibleConstructorReturn"), b = r(g), h = e("babel-runtime/helpers/inherits"), v = r(h), _ = e("react"), y = r(_), w = e("../dom"), x = e("../tracking"), k = {
            container: "_e9f3f1-container",
            flip: "_e9f3f1-flip",
            actions: "_e9f3f1-actions",
            ignore: "_e9f3f1-ignore",
            details: "_e9f3f1-details",
            replacements: "_e9f3f1-replacements",
            addToDict: "_e9f3f1-addToDict",
            replacement: "_e9f3f1-replacement",
            didYouMean: "_e9f3f1-didYouMean",
            insert: "_e9f3f1-insert",
            "delete": "_e9f3f1-delete",
            word: "_e9f3f1-word",
            delPart: "_e9f3f1-delPart",
            insPunc: "_e9f3f1-insPunc",
            delPunc: "_e9f3f1-delPunc"
        }, E = r(k), C = "gr-grammar-card", T = function(e) {
            return e.split(" ").map(function(e) {
                return C + "_" + e;
            }).join(" ");
        }, j = function(e) {
            function t() {
                return f["default"](this, t), b["default"](this, c["default"](t).apply(this, arguments));
            }
            return v["default"](t, e), p["default"](t, [ {
                key: "getInsertNode",
                value: function(e, t) {
                    var n = w.cs(E["default"].insPart, a(e) && E["default"].insPunc);
                    return y["default"].createElement("span", {
                        className: n,
                        key: t,
                        dangerouslySetInnerHTML: {
                            __html: e
                        }
                    });
                }
            }, {
                key: "getDeleteNode",
                value: function(e, t) {
                    var n = w.cs(E["default"].delPart, a(e) && E["default"].delPunc);
                    return y["default"].createElement("span", {
                        className: n,
                        key: t,
                        dangerouslySetInnerHTML: {
                            __html: e
                        }
                    });
                }
            }, {
                key: "getWordNode",
                value: function(e, t) {
                    return y["default"].createElement("span", {
                        className: E["default"].word,
                        key: t
                    }, e);
                }
            }, {
                key: "concatTransform",
                value: function(e) {
                    var t = this, n = "", r = e.map(function(e, r) {
                        var a = e.value, o = e.type;
                        switch (o) {
                          case "del":
                            return n = "delete", t.getDeleteNode(a, r);

                          case "ins":
                            return n = "insert", t.getInsertNode(a, r);

                          default:
                            return t.getWordNode(a, r);
                        }
                    });
                    return y["default"].createElement("div", {
                        className: E["default"][n]
                    }, r);
                }
            }, {
                key: "onReplaceClick",
                value: function n(e, t) {
                    var n = this.props.onReplaceClick;
                    n("replace", e), t.stopPropagation();
                }
            }, {
                key: "renderTransform",
                value: function(e, t) {
                    var n = this, r = [];
                    return e.forEach(function(e) {
                        "sep" == e.type && (r = []), r.push(e);
                    }), y["default"].createElement("div", {
                        className: E["default"].replacement,
                        onClick: function(e) {
                            return n.onReplaceClick(t, e);
                        }
                    }, this.concatTransform(r));
                }
            }, {
                key: "replacementToTransform",
                value: function(e) {
                    return [ {
                        value: e,
                        type: "ins"
                    } ];
                }
            }, {
                key: "reformatTransforms",
                value: function(e) {
                    return e.map(function(e) {
                        return e[0].del && e.length > 1 && (e = e.slice(1)), e.map(function(e) {
                            var t = {};
                            return s["default"](e).forEach(function(n) {
                                t.type = n, t.value = e[n];
                            }), t;
                        });
                    });
                }
            }, {
                key: "render",
                value: function() {
                    var e = this, t = this.props, n = t.transforms, r = t.replacements, a = t.didYouMean, o = this.reformatTransforms(n), i = null;
                    return o.length > 0 ? i = o.map(function(t, n) {
                        return e.renderTransform(t, r[n]);
                    }) : r.length > 0 && (i = r.map(function(t) {
                        return e.renderTransform(e.replacementToTransform(t), t);
                    })), y["default"].createElement("div", {
                        className: E["default"].replacements + (a ? " " + E["default"].didYouMean : "")
                    }, i);
                }
            } ]), t;
        }(y["default"].Component), S = function(e) {
            function t() {
                f["default"](this, t);
                var e = b["default"](this, c["default"](t).call(this));
                return e.handlers = function(t, n) {
                    var r = e.state.match, a = e.props;
                    if (e.state.addedToDict) return void x.fire("show-dictionary");
                    if (t) switch (t) {
                      case "replace":
                        r.replace(n), a.hide(), x.call("statsc.ui.increment", "activity:" + (r.syn ? "synonyms" : "replacement") + ".click");
                        break;

                      case "ignore":
                        r.ignore(), a.hide();
                        break;

                      case "hide":
                        a.hide();
                        break;

                      case "anim-hide":
                        a.hide();
                        break;

                      case "editor":
                        a.openEditor();
                        break;

                      case "login":
                        a.openEditor();
                        break;

                      case "add":
                        a.addToDict(), a.hide();
                    }
                }, e.state = {
                    pos: {
                        rect: {
                            top: 0,
                            left: 0,
                            width: 0
                        },
                        sourceRect: {
                            width: 0
                        },
                        delta: {
                            right: 0
                        },
                        className: "",
                        visible: !1
                    },
                    addedToDict: !1,
                    match: {},
                    visible: !1
                }, e;
            }
            return v["default"](t, e), p["default"](t, [ {
                key: "renderSynonymsContent",
                value: function() {
                    var e, t = this, n = this.state.match, r = n.synonyms.meanings;
                    if (0 == r.length) return y["default"].createElement("div", {
                        className: T("content")
                    }, y["default"].createElement("div", {
                        className: T("nothing")
                    }, "No synonyms found"));
                    var a = w.cs((e = {}, i["default"](e, T("item-single"), 1 == r.length), i["default"](e, T("item"), !0), 
                    e));
                    return y["default"].createElement("div", {
                        className: T("content")
                    }, r.map(function(e, n) {
                        return y["default"].createElement("div", {
                            className: a,
                            key: n
                        }, y["default"].createElement("div", {
                            className: T("meaning")
                        }, e.meaning), y["default"].createElement("div", {
                            className: T("replacements")
                        }, e.synonyms.map(function(e, n) {
                            return y["default"].createElement("span", {
                                className: T("ins"),
                                key: n,
                                onClick: function() {
                                    return t.handlers("replace", e.base);
                                }
                            }, e.base);
                        }, t)));
                    }, this));
                }
            }, {
                key: "renderSynonyms",
                value: function() {
                    var e, t = this, n = {}, r = "title", a = this.state, o = a.pos, l = a.match, s = o.sourceRect.width / 2, u = o.delta.right, c = u > 0 ? s : -u + s, d = {
                        marginLeft: c
                    }, f = w.cs((e = {}, i["default"](e, C, !0), i["default"](e, T("syn"), l.syn), i["default"](e, T("flip"), o.rect.flip), 
                    i["default"](e, T("animate"), this.state.animate), i["default"](e, T("anonymous"), this.props.isAnonymous()), 
                    e));
                    return n.top = o.rect.top, n.left = o.rect.left, 0 == o.rect.top && 0 == o.rect.left && this.state.visible && x.call("statsc.ui.increment", "stability:card.top_left_0"), 
                    o.rect.top > 0 && o.rect.top < 10 && o.rect.left > 0 && o.rect.left < 10 && this.state.visible && x.call("statsc.ui.increment", "stability:card.top_left_10"), 
                    n.visibility = this.state.visible ? "" : "hidden", y["default"].createElement("div", {
                        style: n,
                        className: f
                    }, y["default"].createElement("span", {
                        style: d,
                        className: T("triangle")
                    }), y["default"].createElement("div", {
                        className: T(r)
                    }, "Synonyms suggested by Grammarly"), this.renderSynonymsContent(), y["default"].createElement("div", {
                        className: T("footer")
                    }, y["default"].createElement("div", {
                        className: T("link"),
                        onClick: function() {
                            return t.handlers("editor");
                        }
                    }, "Correct with Grammarly"), y["default"].createElement("div", {
                        className: T("btn-close"),
                        onClick: function() {
                            return t.handlers("hide");
                        }
                    }, "Close")));
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this, n = {}, r = this.state, a = r.pos, o = r.match, l = r.visible, u = o.didYouMean, c = a.rect.flip;
                    if (!l) return y["default"].createElement("div", null);
                    if (o.syn) return this.renderSynonyms();
                    var d = o.transforms, f = o.origReplacements, m = y["default"].createElement("div", {
                        className: E["default"].actions
                    }, y["default"].createElement("div", {
                        className: E["default"].ignore,
                        onClick: function() {
                            return t.handlers("ignore");
                        }
                    }, "Ignore"), y["default"].createElement("div", {
                        className: E["default"].details,
                        onClick: function() {
                            return t.handlers("editor");
                        }
                    }, "Revise")), p = o.showAddToDictionary && y["default"].createElement("div", {
                        className: E["default"].addToDict,
                        onClick: function() {
                            return t.handlers("add");
                        }
                    }, "Add to Dictionary"), g = !s["default"](o).length;
                    u && (f = [ o.rFirst ]);
                    var b = y["default"].createElement(j, {
                        didYouMean: u,
                        transforms: c && d.reverse() || d,
                        replacements: c && f.reverse() || f,
                        onReplaceClick: this.handlers
                    }), h = !g && y["default"].createElement("div", null, c && m, c && p, b, !c && p, !c && m), v = w.cs((e = {}, 
                    i["default"](e, E["default"].container, !0), i["default"](e, E["default"].flip, c), 
                    e));
                    return n.top = a.rect.top, n.left = a.rect.left, 0 == a.rect.top && 0 == a.rect.left && this.state.visible && x.call("statsc.ui.increment", "stability:card.top_left_0"), 
                    a.rect.top > 0 && a.rect.top < 10 && a.rect.left > 0 && a.rect.left < 10 && this.state.visible && x.call("statsc.ui.increment", "stability:card.top_left_10"), 
                    n.visibility = this.state.visible ? "" : "hidden", y["default"].createElement("div", {
                        style: n,
                        className: v
                    }, h);
                }
            } ]), t;
        }(y["default"].Component);
        n["default"] = S, t.exports = n["default"];
    }, {
        "../dom": 179,
        "../tracking": 247,
        "babel-runtime/core-js/object/get-prototype-of": 9,
        "babel-runtime/core-js/object/keys": 10,
        "babel-runtime/helpers/classCallCheck": 18,
        "babel-runtime/helpers/createClass": 19,
        "babel-runtime/helpers/defineProperty": 20,
        "babel-runtime/helpers/inherits": 22,
        "babel-runtime/helpers/possibleConstructorReturn": 24,
        react: "react"
    } ],
    184: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            var t = /class=["']([^'"]+)['"]/g;
            return d.sanitize(e).replace(t, function(e, t) {
                return 'class="' + b(t.trim()) + '"';
            });
        }
        function o(e) {
            return e ? e.showAddToDictionary : void 0;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("babel-runtime/helpers/defineProperty"), l = r(i), s = e("react"), u = r(s), c = e("react-dom"), d = e("dompurify"), f = e("../dom"), m = e("../tracking"), p = e("../config"), g = "gr-grammar-card", b = function(e) {
            return e.split(" ").map(function(e) {
                return g + "_" + e;
            }).join(" ");
        };
        n["default"] = u["default"].createClass({
            displayName: "card-component",
            getInitialState: function() {
                return {
                    pos: {
                        rect: {
                            top: 0,
                            left: 0,
                            width: 0
                        },
                        sourceRect: {
                            width: 0
                        },
                        delta: {
                            right: 0
                        },
                        className: "",
                        visible: !1
                    },
                    addedToDict: !1,
                    match: {},
                    visible: !1
                };
            },
            renderHeader: function() {
                var e = this.state.match, t = "title";
                if (e.syn && e.synonyms.meanings.length) return u["default"].createElement("div", {
                    className: b(t)
                }, "Synonyms suggested by Grammarly");
                if (e.title) {
                    if (e.spell && "Unknown" != e.category || (t += " title-link"), !e.spell || e.showTitle || e.didYouMean) return u["default"].createElement("div", {
                        className: b(t),
                        dangerouslySetInnerHTML: {
                            __html: d.sanitize(e.title)
                        },
                        "data-action": "editor"
                    });
                    if (!e.rFirst || !e.rFirst.trim()) return u["default"].createElement("div", {
                        className: b(t)
                    }, u["default"].createElement("div", {
                        className: b("replacement-block")
                    }, u["default"].createElement("span", {
                        className: b("replacement"),
                        "data-action": "replace",
                        "data-replace": e.rFirst,
                        dangerouslySetInnerHTML: {
                            __html: a(e.header)
                        }
                    })));
                    var n = e.origReplacements || [];
                    return u["default"].createElement("div", {
                        className: b(t)
                    }, n.map(function(t, n) {
                        return u["default"].createElement("div", {
                            className: b("replacement-block"),
                            key: n
                        }, u["default"].createElement("span", {
                            className: b("replacement"),
                            "data-replace": t
                        }, u["default"].createElement("span", {
                            className: b("del")
                        }, e.oldVal), u["default"].createElement("span", {
                            className: b("arr")
                        }, " → "), u["default"].createElement("span", {
                            className: b("ins")
                        }, t)));
                    }, this));
                }
            },
            renderFooter: function(e) {
                var t = this.props.isAnonymous();
                return t ? u["default"].createElement("div", {
                    className: b("footer anonymous")
                }, u["default"].createElement("a", {
                    className: b("link"),
                    tabIndex: "-1",
                    "data-action": "login",
                    target: "__blank"
                }, "Log in"), " to enable personalized grammar and spelling checks,", u["default"].createElement("br", null), "a custom dictionary, and additional features. It's free!") : u["default"].createElement("div", {
                    className: b("footer")
                }, u["default"].createElement("div", {
                    className: b("link"),
                    tabIndex: "-1",
                    "data-action": "editor"
                }, "Correct with Grammarly"), this.renderAddToDict(), e.syn ? u["default"].createElement("div", {
                    className: b("btn-close"),
                    "data-action": "close"
                }, "Close") : u["default"].createElement("div", {
                    className: b("btn-close ignore"),
                    "data-action": "ignore"
                }, "Ignore"));
            },
            getTriangleMargin: function() {
                var e = this.state.pos.sourceRect.width / 2, t = this.state.pos.delta.right;
                return t > 0 ? e : -t + e;
            },
            renderConfused: function() {
                var e = this.state.match;
                return u["default"].createElement("div", {
                    className: b("replacement-block sub-title")
                }, u["default"].createElement("span", {
                    className: b("replacement")
                }, "Did you mean ", u["default"].createElement("span", {
                    className: b("ins"),
                    "data-replace": e.rFirst
                }, e.rFirst), "?"));
            },
            renderSynonyms: function() {
                var e, t = this, n = this.state.match, r = n.synonyms.meanings;
                if (0 == r.length) return u["default"].createElement("div", {
                    className: b("content")
                }, u["default"].createElement("div", {
                    className: b("nothing")
                }, "No synonyms found"));
                var a = f.cs((e = {}, l["default"](e, b("item-single"), 1 == r.length), l["default"](e, b("item"), !0), 
                e));
                return u["default"].createElement("div", {
                    className: b("content")
                }, r.map(function(e, n) {
                    return u["default"].createElement("div", {
                        className: a,
                        key: n
                    }, u["default"].createElement("div", {
                        className: b("meaning")
                    }, e.meaning), u["default"].createElement("div", {
                        className: b("replacements")
                    }, e.synonyms.map(function(e, t) {
                        return u["default"].createElement("span", {
                            className: b("ins"),
                            key: t,
                            "data-replace": e.base
                        }, e.base);
                    }, t)));
                }, this));
            },
            renderAddToDict: function() {
                return o(this.state.match) ? u["default"].createElement("div", {
                    className: b("link add-to-dict"),
                    "data-action": "add"
                }, "Add to dictionary") : void 0;
            },
            renderAddedToDict: function() {
                var e = this.state.pos.width, t = this.state.pos.height;
                return u["default"].createElement("div", {
                    className: b("added-to-dict-message")
                }, u["default"].createElement("div", {
                    className: b("added-to-dict-message-content")
                }, u["default"].createElement("div", {
                    className: b("added-to-dict-word")
                }, this.state.match.value), " is now in your ", u["default"].createElement("a", {
                    target: "__blank",
                    href: p.URLS.editorDictionary
                }, "personal dictionary")), u["default"].createElement("div", {
                    style: {
                        width: e,
                        height: t
                    },
                    "data-action": "hide",
                    className: b("added-to-dict-sizer")
                }));
            },
            componentWillMount: function() {
                var e = this;
                this.cardEvents = function(t) {
                    var n = t.target, r = n.dataset, a = r.action, o = r.replace, i = e.state.match, l = e.props;
                    if (e.state.addedToDict && "A" == n.tagName) return void m.fire("show-dictionary");
                    if (t.stopPropagation(), t.preventDefault(), a || o || (a = n.parentNode.dataset.action, 
                    o = n.parentNode.dataset.replace), o && (a = "replace"), a) switch (a) {
                      case "replace":
                        i.replace(o), l.hide(), m.call("statsc.ui.increment", "activity:" + (i.syn ? "synonyms" : "replacement") + ".click");
                        break;

                      case "ignore":
                        i.ignore(), l.hide();
                        break;

                      case "hide":
                        l.hide();
                        break;

                      case "anim-hide":
                        l.animHide();
                        break;

                      case "editor":
                        l.openEditor();
                        break;

                      case "login":
                        l.openEditor();
                        break;

                      case "add":
                        l.addToDict();
                    }
                };
            },
            componentDidMount: function() {
                var e;
                (e = c.findDOMNode(this), f.on).call(e, "click", this.cardEvents);
            },
            componentWillUnmount: function() {
                var e;
                (e = c.findDOMNode(this), f.off).call(e, "click", this.cardEvents);
            },
            render: function() {
                var e, t = {}, n = this.state.pos, r = this.state.match, a = this.state.addedToDict, i = f.cs((e = {}, 
                l["default"](e, g, !0), l["default"](e, b("syn"), r.syn), l["default"](e, b("flip"), n.rect.flip), 
                l["default"](e, b("animate"), this.state.animate), l["default"](e, this.state.className, this.state.className), 
                l["default"](e, b("wide-footer"), o(this.state.match)), l["default"](e, b("anonymous"), this.props.isAnonymous()), 
                l["default"](e, b("added-to-dict"), a), e)), s = {
                    marginLeft: this.getTriangleMargin()
                };
                return t.top = n.rect.top, t.left = n.rect.left, 0 == n.rect.top && 0 == n.rect.left && this.state.visible && m.call("statsc.ui.increment", "stability:card.top_left_0"), 
                n.rect.top > 0 && n.rect.top < 10 && n.rect.left > 0 && n.rect.left < 10 && this.state.visible && m.call("statsc.ui.increment", "stability:card.top_left_10"), 
                t.visibility = this.state.visible ? "" : "hidden", u["default"].createElement("div", {
                    tabIndex: "-1",
                    style: t,
                    className: i
                }, u["default"].createElement("span", {
                    style: s,
                    className: b("triangle")
                }), this.renderHeader(), a && this.renderAddedToDict(), r.syn && this.renderSynonyms(), r.didYouMean && this.renderConfused(), this.renderFooter(r));
            }
        }), t.exports = n["default"];
    }, {
        "../config": 175,
        "../dom": 179,
        "../tracking": 247,
        "babel-runtime/helpers/defineProperty": 20,
        dompurify: "dompurify",
        react: "react",
        "react-dom": "react-dom"
    } ],
    185: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e, t) {
            if (e) {
                if (!e.length) return e;
                if (1 == e.length || !t) return e[0];
                var n = t.pageX || t.clientX, r = t.pageY || t.clientY, a = void 0;
                return e.forEach(function(e) {
                    var t = e.top, o = e.left, i = e.width, l = e.height;
                    r >= t && t + l >= r && n >= o && o + i >= n && (a = e);
                }), a || e[0];
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/core-js/symbol"), i = r(o), l = e("babel-runtime/core-js/object/get-prototype-of"), s = r(l), u = e("babel-runtime/helpers/classCallCheck"), c = r(u), d = e("babel-runtime/helpers/createClass"), f = r(d), m = e("babel-runtime/helpers/possibleConstructorReturn"), p = r(m), g = e("babel-runtime/helpers/inherits"), b = r(g), h = e("react"), v = r(h), _ = e("react-dom"), y = e("emitter"), w = r(y), x = e("../timers"), k = r(x), E = e("../util"), C = e("../window-events"), T = r(C), j = e("../tracking"), S = e("../position"), N = e("../dom"), A = e("./hint"), M = r(A), P = e("./tooltip"), $ = r(P), O = e("./card-component"), D = r(O), I = e("./card-component-2"), R = r(I), L = {}, F = function(e) {
            function t() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], n = e.doc, r = void 0 === n ? document : n, a = e.domCls, o = void 0 === a ? "" : a, l = e.user, u = void 0 === l ? {} : l;
                c["default"](this, t);
                var d = p["default"](this, s["default"](t).call(this));
                return d.isAnonymous = function() {
                    return d.user.anonymous;
                }, d.show = function(e, t) {
                    return d.emit("show", e.id), d.updatePos(e, t), k["default"].start(L.id), j.call("statsc.ui.increment", "stability:card.open"), 
                    d;
                }, d.hide = function() {
                    if (L.hint.visible) {
                        L.container.el.style.display = "none", d.setState({
                            animate: !1,
                            visible: !1,
                            match: {}
                        });
                        var e = L.notfound && L.notfound.isEnabled();
                        L.notfound.disable(), L.notfound.hide(), d.emit("hide", d.match), d.removeLoading(L.hint.currentEl);
                        var t = k["default"].stop(L.id);
                        if (d.match) {
                            var n = d.match.syn;
                            j.call("statsc.ui.timing", "stability:" + (n ? "syn" : "card") + ".close", t);
                        }
                        return e && j.call("statsc.ui.timing", "stability:syn.close", t), d.match = null, 
                        L.container.el.style.display = "", d;
                    }
                }, d.animHide = function() {
                    var e;
                    return d.setState({
                        animate: !0
                    }), (e = L.el, N.once).call(e, N.whichAnimationEndEvent(), d.hide), d;
                }, d.openEditor = function() {
                    d.removeLoading(L.hint.currentEl), d.emit("toeditor", d.match.editorId), d.hide();
                }, d.addToDict = function() {
                    d.setState({
                        addedToDict: !0
                    }), d.emit("addtodict", {
                        match: d.match,
                        hide: d.hide,
                        animHide: d.animHide
                    });
                }, d.inTarget = function(e) {
                    var t = e.target, n = e.clientX, r = e.clientY, a = e.detail, o = L.hint.currentEl, i = (N.parentHasClass(t, L.cls) || N.hasClass(t, L.cls)) && !N.hasClass(o, "g-selection-anim"), l = d.elementsFromPoint(n, r).some(function(e) {
                        return N.hasClass(e, L.cls);
                    });
                    return l && L.hint.visible && 1 == a ? !0 : i ? o && o != t ? (L.hint.fastHide(), 
                    void d.removeLoading(o)) : (d.addLoading(t), !0) : void (!L.hint.visible && o && d.removeLoading(o));
                }, d.addLoading = function(e) {
                    return !N.hasClass(e, L.pCls) && N.addClass(e, L.pCls);
                }, d.removeLoading = function(e) {
                    N.hasClass(e, L.pCls) && N.removeClass(e, L.pCls), N.hasClass(e, "g-selection-anim") && e.parentNode && e.parentNode.removeChild(e);
                }, d.showSynonyms = function(e) {
                    return e.animEl && 0 != e.animEl.getClientRects().length ? (L.hint.currentEl && d.hide(), 
                    L.hint.currentEl = e.animEl, 0 == e.synonyms.meanings.length ? (L.notfound.enable(), 
                    L.notfound.show({
                        posEl: e.animEl,
                        text: "No synonyms found",
                        outerIframe: L.iframe
                    })) : (d.setData(e), d.updatePos(e.animEl), d.setState({
                        visible: !0
                    })), L.hint.setVisible(!0), k["default"].start(L.id), j.call("statsc.ui.increment", "stability:syn.open"), 
                    d) : d;
                }, d.setOuterIframe = function(e) {
                    var t = e.contentDocument;
                    !e || t && e == L.iframe || (L.iframe = e, L.hint.setDocs(L.doc, t));
                }, d.user = u, L = {
                    id: i["default"]("GrammarCard"),
                    notfound: $["default"]({
                        cls: "gr-notfound-tooltip",
                        enabled: !1,
                        doc: r
                    }),
                    windowEvents: {
                        keydown: d.hide,
                        scroll: d.hide,
                        resize: d.hide
                    },
                    doc: r,
                    domCls: o,
                    cls: "gr_",
                    pCls: "gr-progress"
                }, L.container = d.render(L), L.el = _.findDOMNode(L.container.component), L.hint = new M["default"]({
                    doc: L.doc,
                    hint: L.el,
                    hideDelay: 500,
                    inTarget: d.inTarget,
                    cls: L.cls,
                    delay: 400,
                    onshow: d.show,
                    onhide: d.hide
                }).bind(), d.hint = L.hint, T["default"].on(L.windowEvents, !0), d;
            }
            return b["default"](t, e), f["default"](t, [ {
                key: "updateState",
                value: function(e) {
                    this.user = e;
                }
            }, {
                key: "elementsFromPoint",
                value: function(e, t) {
                    return e && t ? L.doc.elementsFromPoint ? L.doc.elementsFromPoint(e, t) : [ L.doc.elementFromPoint(e, t) ] : [];
                }
            }, {
                key: "setState",
                value: function(e) {
                    L.container.component.setState(e);
                }
            }, {
                key: "setData",
                value: function(e) {
                    return e ? (this.setState({
                        match: e,
                        visible: !0,
                        addedToDict: !1
                    }), this.match = e, this) : this;
                }
            }, {
                key: "updatePos",
                value: function(e, t) {
                    if (null == e.parentNode) {
                        if (!e.id) return this.hide();
                        var n = L.doc.querySelector(".gr_" + e.id);
                        if (!n) return this.hide();
                        L.hint.currentEl = e = n;
                    }
                    var r = S.getAbsRect(e, L.iframe, !0), o = S.posToRect(L.el, a(r, t));
                    o.rect.flip && (o.rect.top = o.rect.top + L.el.clientHeight), o.width = L.el.clientWidth, 
                    o.height = L.el.clientHeight, this.setState({
                        pos: o
                    });
                }
            }, {
                key: "render",
                value: function() {
                    var e = {
                        className: L.domCls,
                        isAnonymous: this.isAnonymous,
                        hide: this.hide,
                        animHide: this.animHide,
                        openEditor: this.openEditor,
                        addToDict: this.addToDict
                    }, t = this.user && E.isGrammarlyEmail(this.user.email) ? R["default"] : D["default"];
                    return N.renderReactWithParent(v["default"].createElement(t, e), L.doc.documentElement, L.id, "grammarly-card");
                }
            }, {
                key: "remove",
                value: function() {
                    L.hint.unbind(), T["default"].off(L.windowEvents, !0), L.container.remove();
                }
            } ]), t;
        }(E.createClass(w["default"]));
        n["default"] = F, t.exports = n["default"];
    }, {
        "../dom": 179,
        "../position": 227,
        "../timers": 243,
        "../tracking": 247,
        "../util": 251,
        "../window-events": 252,
        "./card-component": 184,
        "./card-component-2": 183,
        "./hint": 188,
        "./tooltip": 205,
        "babel-runtime/core-js/object/get-prototype-of": 9,
        "babel-runtime/core-js/symbol": 14,
        "babel-runtime/helpers/classCallCheck": 18,
        "babel-runtime/helpers/createClass": 19,
        "babel-runtime/helpers/inherits": 22,
        "babel-runtime/helpers/possibleConstructorReturn": 24,
        emitter: "emitter",
        react: "react",
        "react-dom": "react-dom"
    } ],
    186: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            function t(e) {
                F = e, Y && Y.updateUser(e);
            }
            function n(e) {
                var t = "off" == e;
                $.toggleClass(O.body, t, "gr-disable-scroll"), $.toggleClass(O.documentElement, t, "gr-disable-scroll");
            }
            function r() {
                K && !F.anonymous && d();
            }
            function a(e) {
                return new C["default"]({
                    doc: O,
                    user: e
                });
            }
            function o(e, t) {
                n("off"), Y = a(t), Y.on("hide", function() {
                    n("on"), S["default"].emitFocusedTab("focus-editor", K.editorId), M.call("felog.info", "signin_close", {
                        active_time: A["default"].stop(V)
                    });
                }), M.call("felog.info", "signin_open"), M.fire("login-attempt", e);
            }
            function i() {
                q = !0, W = O.querySelector(D), W || (W = w.findDOMNode($.renderReactWithParent(y["default"].createElement(L, null), O.documentElement, T.guid()).component)), 
                z = W.querySelector(I("back"));
            }
            function l() {
                var e = {
                    "mail.google.com": "Gmail",
                    "facebook.com": "Facebook",
                    "twitter.com": "Twitter"
                };
                return "Back to " + (e[P.getDomain()] || document.title);
            }
            function s(e) {
                e.stopPropagation(e), E();
            }
            function u(e) {
                S["default"].emitFocusedTab("editor-set-state", e);
            }
            function c() {
                S["default"].emitFocusedTab("dialog-closed", K.editorId);
            }
            function d() {
                if (H) {
                    var e = function() {
                        R.el.style.background = "";
                        var e = u;
                        return u = function(t) {
                            u = e, R.refresh(), S["default"].emitFocusedTab("after-refresh-dialog", t);
                        }, E(), {
                            v: void 0
                        };
                    }();
                    if ("object" === ("undefined" == typeof e ? "undefined" : p["default"](e))) return e.v;
                }
                R.refresh();
            }
            function f(e) {
                S["default"].emitBackground("iframe-mode", {
                    iframeMode: e,
                    id: K.socketId
                });
            }
            function m() {
                F.anonymous || R.activate();
            }
            function g(e) {
                var t = e.data, n = e.caller;
                return A["default"].start(V), K = t, F.anonymous ? o(n, F) : (R.activate(), void h(t));
            }
            function h(e) {
                q || i(), W.style.opacity = 0, $.addClass(W, "gr-_show");
                var t = v["default"].extend({
                    favicon: P.getFavicon(),
                    page: l()
                }, e);
                R.send(t), f(!0), setTimeout(function() {
                    return W.style.opacity = 1;
                }, 10), n("off"), $.listen(O.body, "keydown", N), $.listen(z, "click", s), $.listen(W, "click", s), 
                H = !0;
            }
            function _(e) {
                var t = e.action;
                "edit" == t && u(e), "close" == t && E(), "initialized" == t && (k(e), setTimeout(function() {
                    return R.el.style.background = "transparent";
                }, 300)), "socket" == t && S["default"].emitBackground("socket-client", e), "setSettings" == t && U(e.data), 
                "tracking" == t && M.call(e.method, e.param), "popup-editor-fix" == t && B(), "open-url" == t && (M.fire("upgrade", "popup_editor_other"), 
                S["default"].emitBackground("open-url", e.url));
            }
            function x(e, t) {
                K && e.socketId == K.socketId && (t("ok"), e.action = "socket", R.send(e));
            }
            function k(e) {
                var t = "Premium" == e.userType ? "freemium-plus" : "freemium";
                O.documentElement.setAttribute("data-type", t);
            }
            function E() {
                H && (H = !1, n("on"), W.style.opacity = 0, $.removeClass(W, "gr-_show"), $.unlisten(O.body, "keydown", N), 
                $.unlisten(z, "click", s), $.unlisten(W, "click", s), R.send({
                    action: "hide"
                }), f(!1), c(), M.call("statsc.ui.timing", "stability:editor.close", A["default"].stop(V)));
            }
            function j() {
                window == window.top && (S["default"].off("show-dialog", g), S["default"].off("hide-dialog", E), 
                S["default"].off("reset", r), S["default"].off("socket-server-iframe", x)), R.deactivate(), 
                R.off("message", _), W.parentNode.removeChild(W);
            }
            function N(e) {
                return 27 == T.keyCode(e) && H ? (e.stopPropagation(), e.preventDefault(), E()) : void 0;
            }
            var O = e.doc, R = e.iframe, F = e.user, G = e.actions, U = G.updateSettings, B = G.incFixed, V = b["default"]("Dialog"), H = !1, W = void 0, z = void 0, q = void 0, K = void 0, Y = void 0, X = {
                show: g,
                hide: E,
                updateState: t,
                preActivate: m,
                render: i,
                getSignin: a,
                remove: j,
                refresh: d
            };
            return R.on("message", _), window == window.top && (S["default"].on("show-dialog", g), 
            S["default"].on("hide-dialog", E), S["default"].on("reset", r), S["default"].on("socket-server-iframe", x)), 
            X;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/core-js/object/get-prototype-of"), i = r(o), l = e("babel-runtime/helpers/classCallCheck"), s = r(l), u = e("babel-runtime/helpers/possibleConstructorReturn"), c = r(u), d = e("babel-runtime/helpers/inherits"), f = r(d), m = e("babel-runtime/helpers/typeof"), p = r(m), g = e("babel-runtime/core-js/symbol"), b = r(g);
        n["default"] = a;
        var h = e("lodash"), v = r(h), _ = e("react"), y = r(_), w = e("react-dom"), x = e("./iframe"), k = r(x), E = e("./signin-dialog"), C = r(E), T = e("../util"), j = e("../message"), S = r(j), N = e("../timers"), A = r(N), M = e("../tracking"), P = e("../location"), $ = e("../dom"), O = "gr_-editor", D = "." + O, I = function(e) {
            return "." + O + "_" + e;
        }, R = function(e) {
            return O + "_" + e;
        }, L = function(e) {
            function t() {
                var e, n, r, a;
                s["default"](this, t);
                for (var o = arguments.length, l = Array(o), u = 0; o > u; u++) l[u] = arguments[u];
                return n = r = c["default"](this, (e = i["default"](t)).call.apply(e, [ this ].concat(l))), 
                r.render = function() {
                    return y["default"].createElement("div", {
                        className: O,
                        style: {
                            display: "none"
                        }
                    }, y["default"].createElement("div", {
                        className: R("back")
                    }), y["default"].createElement(k["default"].IframeComponent, null));
                }, a = n, c["default"](r, a);
            }
            return f["default"](t, e), t;
        }(y["default"].Component);
        t.exports = n["default"];
    }, {
        "../dom": 179,
        "../location": 216,
        "../message": 217,
        "../timers": 243,
        "../tracking": 247,
        "../util": 251,
        "./iframe": 189,
        "./signin-dialog": 198,
        "babel-runtime/core-js/object/get-prototype-of": 9,
        "babel-runtime/core-js/symbol": 14,
        "babel-runtime/helpers/classCallCheck": 18,
        "babel-runtime/helpers/inherits": 22,
        "babel-runtime/helpers/possibleConstructorReturn": 24,
        "babel-runtime/helpers/typeof": 27,
        lodash: "lodash",
        react: "react",
        "react-dom": "react-dom"
    } ],
    187: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./tooltip"), o = r(a), i = e("../dom"), l = e("../tracking"), s = function(e) {
            function t(e) {
                i.hasClass(e.target, "fr-reload-tab") && (l.call("felog.info", "g_button_hover_reload_click"), 
                setTimeout(function() {
                    return window.location.reload(!0);
                }, 200));
            }
            var n = e.el, r = e.win, a = e.outerIframe, s = o["default"]({
                posEl: n,
                html: "<span class='fr-tooltip-title'>Cannot connect to Grammarly.</span> Please <span class='fr-reload-tab'>reload</span> the browser tab and check your internet connection. <span class='fr-dialog-br'></span>Don't lose your work! Copy any unsaved text before you reload the tab.",
                doc: n.ownerDocument,
                cls: "fr-btn-offline-tooltip",
                outerIframe: a,
                enabled: !1
            });
            i.listen(r, "click", t);
            var u = s.remove;
            return s.remove = function() {
                u(), i.unlisten(r, "click", t);
            }, s;
        };
        n["default"] = s, t.exports = n["default"];
    }, {
        "../dom": 179,
        "../tracking": 247,
        "./tooltip": 205
    } ],
    188: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/helpers/classCallCheck"), o = r(a), i = e("lodash"), l = r(i), s = e("../util"), u = e("../dom"), c = {
            hideDelay: 10,
            onshow: s._f,
            onhide: s._f,
            onmousemove: s._f,
            onInnerMouseMove: s._f,
            inTarget: function(e) {
                var t = e.target, n = u.parentHasClass(t, this.cls) || u.hasClass(t, this.cls);
                if (n) return this.currentEl && this.currentEl != t ? void this.fastHide() : !0;
            }
        }, d = function f(e) {
            var t = this;
            o["default"](this, f), l["default"].extend(this, c, e, {
                bind: function(e) {
                    var n = arguments.length <= 1 || void 0 === arguments[1] ? t.doc : arguments[1];
                    return t.doc2 && t.doc2 != n && t.bind(e, t.doc2), u.listen(n.body, "resize", t.fastHide, e), 
                    u.listen(n, {
                        gramMouse: t.mousemove,
                        mousemove: t.mousemove,
                        scroll: t.fastHide
                    }, s._f, e), u.listen(n, "click", t.click, e, !0), u.listen(t.hint, "mousemove", t.innerMouseMove, e), 
                    t;
                },
                setDocs: function(e, n) {
                    t.unbind(), l["default"].extend(t, {
                        doc: e,
                        doc2: n
                    }), t.bind();
                },
                unbind: function(e) {
                    return t.bind(!0, e);
                },
                fastHide: function() {
                    t.onhide(), t.cancelTimeout("show").cancelTimeout("hide"), t.visible = !1, t.currentEl = null;
                },
                innerMouseMove: function(e) {
                    t.onInnerMouseMove(e), e.preventDefault(), e.stopPropagation(), t.cancelTimeout("hide");
                },
                click: function(e) {
                    return !t.elInHint(e.target) && !t.inTarget(e) && t.fastHide();
                },
                elInHint: function(e) {
                    return e && (u.inEl(e, t.hint) || e == t.hint);
                },
                mousemove: function(e) {
                    var n = e.target;
                    if ("IFRAME" != n.tagName) {
                        if (e.detail && e.detail.el && (n = e.detail.el, e = {
                            target: n,
                            clientX: e.detail.e.clientX,
                            clientY: e.detail.e.clientY
                        }), s.isSafari() && "mousemove" == e.type) {
                            if (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) return t.mouseMoveCoordinates = e.x + "-" + e.y;
                            if (t.mouseMoveCoordinates == e.x + "-" + e.y) return;
                        }
                        if (t.elInHint(n)) return t.onmousemove(e, !0), void t.cancelTimeout("show").cancelTimeout("hide");
                        if (!t.inTarget(e)) return t.onmousemove(e, !1), void (t.visible ? t.hide() : t.cancelTimeout("show"));
                        t.onmousemove(e, !0), t.visible || (t.show(e, n).cancelTimeout("hide"), t.currentEl = n);
                    }
                },
                show: function(e, n) {
                    return t.showTimeout ? t : (t.cancelTimeout("hide"), t.showTimeout = setTimeout(function() {
                        this.cancelTimeout("show"), (this.elInHint(n) || this.inTarget(e)) && (this.visible = !0, 
                        this.onshow(n, {
                            pageX: e.pageX,
                            pageY: e.pageY,
                            clientX: e.clientX,
                            clientY: e.clientY
                        }));
                    }.bind(t), t.delay), t);
                },
                hide: function() {
                    return t.hideTimeout ? t : (t.hideTimeout = setTimeout(function() {
                        this.onhide(), this.visible = !1, this.currentEl = null;
                    }.bind(t), t.hideDelay), t);
                },
                cancelTimeout: function(e) {
                    var n = e + "Timeout";
                    return t[n] ? (clearTimeout(t[n]), t[n] = null, t) : t;
                },
                setVisible: function(e) {
                    t.visible = e, t.cancelTimeout("hide");
                }
            });
        };
        n["default"] = d, t.exports = n["default"];
    }, {
        "../dom": 179,
        "../util": 251,
        "babel-runtime/helpers/classCallCheck": 18,
        lodash: "lodash"
    } ],
    189: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            function t(e) {
                _ = e;
            }
            function n() {
                function e() {
                    (y || (y = v.querySelector(h), E.el = y, y)) && (g.listen(window.top, "message", l), 
                    y.srcdoc || r(t), g.addClass(y, "gr-freemium-ifr"), w = !0, E.activated = w);
                }
                var t = arguments.length <= 0 || void 0 === arguments[0] ? d._f : arguments[0];
                w || e();
            }
            function r() {
                var e, t = arguments.length <= 0 || void 0 === arguments[0] ? d._f : arguments[0];
                y.setAttribute("srcdoc", window.GR_INLINE_POPUP), (e = y, g.once).call(e, "load", function() {
                    try {
                        window.ACTIVATE_GR_POPUP(y.contentWindow, y.contentDocument, c["default"]), t();
                    } catch (e) {
                        console.error("Cannot activate popup", e), p.call("felog.error", "editor_popup_activation_error", {
                            error: e
                        });
                    }
                });
            }
            function a() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? d._f : arguments[0];
                y ? f() : n(e);
            }
            function o(e, t) {
                return k || t ? void i(e) : x.push(e);
            }
            function i(e) {
                e.grammarly = !0;
                try {
                    y.contentWindow.postMessage(e, "*");
                } catch (t) {
                    console.error("wtf", t);
                }
            }
            function l(e) {
                var t = e.data;
                e.origin;
                if (t && t.grammarly) {
                    var n = t.action;
                    if ("user" == n) return f();
                    if (k = !0, "initialized" == n && x) {
                        var r = m["default"].stop("open_editor");
                        r && p.call("statsc.ui.timing", "performance:popup.first.load_time", r), x.forEach(E.send);
                    }
                    var a = m["default"].stop("open_editor");
                    a && p.call("statsc.ui.timing", "performance:popup.load_time", a), "accepted" == n && (x = []), 
                    E.emit("message", t);
                }
            }
            function u() {
                g.unlisten(window.top, "message", l);
            }
            function f() {
                i({
                    action: "user",
                    user: _
                });
            }
            var v = e.doc, _ = e.user, y = void 0, w = void 0, x = [], k = !1, E = s["default"]({
                activate: n,
                refresh: a,
                send: o,
                selector: h,
                baseCls: b,
                updateState: t,
                deactivate: u
            });
            return E;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("react"), i = r(o), l = e("emitter"), s = r(l), u = e("dompurify"), c = r(u), d = e("../util"), f = e("../timers"), m = r(f), p = e("../tracking"), g = e("../dom"), b = "gr_-ifr", h = "." + b, v = i["default"].createClass({
            displayName: "IframeComponent",
            render: function() {
                return i["default"].createElement("iframe", {
                    className: b + " gr-_dialog-content"
                });
            }
        });
        a.IframeComponent = v, a.baseCls = b, a.selector = h, n["default"] = a, t.exports = n["default"];
    }, {
        "../dom": 179,
        "../timers": 243,
        "../tracking": 247,
        "../util": 251,
        dompurify: "dompurify",
        emitter: "emitter",
        react: "react"
    } ],
    190: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            function t(e) {
                var t = e.user;
                r.card && r.card.updateState(t), r.iframe && r.iframe.updateState(t), r.dialog && r.dialog.updateState(t);
            }
            function n() {
                r.iframe && r.iframe.deactivate(), r.dialog && r.dialog.remove(), r.card && r.card.remove(), 
                r.iframe = null, r.dialog = null, r.card = null;
            }
            var r = e.app, a = e.doc, o = void 0 === a ? document : a, l = e.user, u = e.actions, d = r.iframe = i["default"]({
                doc: o,
                user: l
            });
            return r.dialog = s["default"]({
                doc: o,
                iframe: d,
                user: l,
                actions: u
            }), r.dialog.render(), r.dialog.preActivate(), r.card = new c["default"]({
                doc: o,
                user: l
            }), {
                clear: n,
                updateState: t
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n["default"] = a;
        var o = e("./iframe"), i = r(o), l = e("./dialog"), s = r(l), u = e("./card"), c = r(u);
        t.exports = n["default"];
    }, {
        "./card": 185,
        "./dialog": 186,
        "./iframe": 189
    } ],
    191: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/helpers/defineProperty"), o = r(a), i = e("babel-runtime/core-js/object/get-prototype-of"), l = r(i), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), g = r(p), b = e("react"), h = r(b), v = e("./features"), _ = r(v), y = e("./quotes"), w = r(y), x = {
            wrapper: "_2ba6ba-wrapper",
            hide: "_2ba6ba-hide",
            content: "_2ba6ba-content",
            features: "_2ba6ba-features",
            quotes: "_2ba6ba-quotes"
        }, k = r(x), E = e("lib/dom"), C = function(e) {
            function t() {
                var e, n, r, a;
                u["default"](this, t);
                for (var o = arguments.length, i = Array(o), s = 0; o > s; s++) i[s] = arguments[s];
                return n = r = m["default"](this, (e = l["default"](t)).call.apply(e, [ this ].concat(i))), 
                r.state = {
                    hide: !1
                }, r.onClick = function(e) {
                    return !E.matchesSelector(e.target, "." + k["default"].content + ", ." + k["default"].content + " *") && r.handleClose(e);
                }, r.handleClose = function(e) {
                    e && e.stopPropagation(), r.setState({
                        hide: !0
                    }), setTimeout(function() {
                        return r.props.onClose(e);
                    }, 400);
                }, a = n, m["default"](r, a);
            }
            return g["default"](t, e), d["default"](t, [ {
                key: "render",
                value: function() {
                    return h["default"].createElement("div", {
                        className: E.cs(k["default"].wrapper, o["default"]({}, k["default"].hide, this.state.hide)),
                        onClick: this.onClick
                    }, h["default"].createElement("div", {
                        className: k["default"].content
                    }, h["default"].createElement("div", {
                        className: k["default"].features
                    }, h["default"].createElement(_["default"], {
                        plus: this.props.plus,
                        editor: this.props.editor
                    })), h["default"].createElement("div", {
                        className: k["default"].quotes
                    }, h["default"].createElement(w["default"], {
                        onClose: this.handleClose
                    }))));
                }
            } ]), t;
        }(b.Component);
        n["default"] = C, t.exports = n["default"];
    }, {
        "./features": 192,
        "./quotes": 194,
        "babel-runtime/core-js/object/get-prototype-of": 9,
        "babel-runtime/helpers/classCallCheck": 18,
        "babel-runtime/helpers/createClass": 19,
        "babel-runtime/helpers/defineProperty": 20,
        "babel-runtime/helpers/inherits": 22,
        "babel-runtime/helpers/possibleConstructorReturn": 24,
        "lib/dom": 179,
        react: "react"
    } ],
    192: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/core-js/object/get-prototype-of"), o = r(a), i = e("babel-runtime/helpers/classCallCheck"), l = r(i), s = e("babel-runtime/helpers/createClass"), u = r(s), c = e("babel-runtime/helpers/possibleConstructorReturn"), d = r(c), f = e("babel-runtime/helpers/inherits"), m = r(f), p = e("react"), g = r(p), b = e("grammarly-editor"), h = r(b), v = e("../../config"), _ = e("../../message"), y = r(_), w = e("../../tracking"), x = {
            wrapper: "_7d2e3f-wrapper",
            titleWrapper: "_7d2e3f-titleWrapper",
            plus: "_7d2e3f-plus",
            plusCount: "_7d2e3f-plusCount",
            title: "_7d2e3f-title",
            subtitle: "_7d2e3f-subtitle",
            featuresWrapper: "_7d2e3f-featuresWrapper",
            featureRow: "_7d2e3f-featureRow",
            featureRowContent: "_7d2e3f-featureRowContent",
            featureTypeCol: "_7d2e3f-featureTypeCol",
            featureFreeLabel: "_7d2e3f-featureFreeLabel",
            featureTypeLabel: "_7d2e3f-featureTypeLabel",
            featurePremiumLabel: "_7d2e3f-featurePremiumLabel",
            featureFreeCol: "_7d2e3f-featureFreeCol",
            featurePremiumCol: "_7d2e3f-featurePremiumCol",
            premium: "_7d2e3f-premium",
            freeNope: "_7d2e3f-freeNope",
            freeCheckMark: "_7d2e3f-freeCheckMark",
            premiumCheckMark: "_7d2e3f-premiumCheckMark",
            premiumGift: "_7d2e3f-premiumGift",
            premiumArrow: "_7d2e3f-premiumArrow",
            premiumHover: "_7d2e3f-premiumHover",
            premiumInfo: "_7d2e3f-premiumInfo",
            premiumInfoWrapper: "_7d2e3f-premiumInfoWrapper",
            premiumInfoFeatures: "_7d2e3f-premiumInfoFeatures",
            premiumInfoTitle: "_7d2e3f-premiumInfoTitle",
            btnWrapper: "_7d2e3f-btnWrapper",
            premiumButton: "_7d2e3f-premiumButton",
            inviteWrapper: "_7d2e3f-inviteWrapper",
            inviteText: "_7d2e3f-inviteText",
            inviteTextLabel: "_7d2e3f-inviteTextLabel"
        }, k = r(x), E = g["default"].createElement("span", null, "100+ additional advanced checks", g["default"].createElement("span", {
            className: k["default"].premiumHover
        }, g["default"].createElement("span", {
            className: k["default"].premiumInfo
        }), g["default"].createElement("div", {
            className: k["default"].premiumInfoWrapper
        }, g["default"].createElement("span", {
            className: k["default"].premiumInfoTitle
        }, "Premium comes with these checks:"), g["default"].createElement("span", {
            className: k["default"].premiumInfoFeatures
        }, "Repetitive Words", g["default"].createElement("br", null), "Overused Words", g["default"].createElement("br", null), "No Comma with Coordinate Clauses", g["default"].createElement("br", null), "Better Word Pair", g["default"].createElement("br", null), "Wordiness", g["default"].createElement("br", null), "No Comma with Introductory Clauses", g["default"].createElement("br", null), "Comma Splice", g["default"].createElement("br", null), "Fragment", g["default"].createElement("br", null), "Slang", g["default"].createElement("br", null), "Closing Punctuation", g["default"].createElement("br", null), "Squinting Modifier", g["default"].createElement("br", null), "Adjective Order", g["default"].createElement("br", null), "Sequence of Tenses", g["default"].createElement("br", null), "Lonely Gerund", g["default"].createElement("br", null), "Brevity", g["default"].createElement("br", null), "and many more…")))), C = function(e) {
            function t() {
                var e, n, r, a;
                l["default"](this, t);
                for (var i = arguments.length, s = Array(i), u = 0; i > u; u++) s[u] = arguments[u];
                return n = r = d["default"](this, (e = o["default"](t)).call.apply(e, [ this ].concat(s))), 
                r.features = [ {
                    text: "150 critical grammar and spelling checks",
                    free: !0,
                    id: 1
                }, {
                    text: E,
                    id: 2
                }, {
                    text: "Vocabulary enhancement suggestions",
                    id: 3
                }, {
                    text: "Genre-specific writing style checks",
                    id: 4
                }, {
                    text: "Sophisticated plagiarism detector",
                    id: 5
                } ], r.goPremium = function() {
                    var e = h["default"].getUpgradeUrlFromMatches({
                        baseUrl: v.URLS.upgrade,
                        returnUrl: "",
                        appType: "popup",
                        matches: r.props.editor.getMatches()
                    });
                    y["default"].emitBackground("open-url", e), w.fire("premium-popup-upgrade-click");
                }, r.goReferral = function() {
                    y["default"].emitBackground("open-url", v.URLS.referral), w.fire("premium-popup-referral-click");
                }, a = n, d["default"](r, a);
            }
            return m["default"](t, e), u["default"](t, [ {
                key: "render",
                value: function() {
                    return g["default"].createElement("div", {
                        className: k["default"].wrapper
                    }, g["default"].createElement("div", {
                        className: k["default"].titleWrapper
                    }, g["default"].createElement("span", {
                        className: k["default"].plus
                    }, "FIX ", g["default"].createElement("span", {
                        className: k["default"].plusCount
                    }, g["default"].createElement("span", null, this.props.plus)), " ADVANCED ISSUES WITH GRAMMARLY PREMIUM"), g["default"].createElement("span", {
                        className: k["default"].title
                    }, "Take Your Writing to the Next Level"), g["default"].createElement("span", {
                        className: k["default"].subtitle
                    }, "Built by linguists, Grammarly Premium finds and corrects hundreds of", g["default"].createElement("br", null), "complex writing errors — so you don’t have to.")), g["default"].createElement("div", {
                        className: k["default"].featuresWrapper
                    }, g["default"].createElement("div", {
                        className: k["default"].featureRow
                    }, g["default"].createElement("div", {
                        className: k["default"].featureTypeLabel
                    }, "Product features"), g["default"].createElement("div", {
                        className: k["default"].featureFreeLabel
                    }, "Free"), g["default"].createElement("div", {
                        className: k["default"].featurePremiumLabel
                    }, g["default"].createElement("span", {
                        className: k["default"].premium
                    }, "Premium"))), this.features.map(function(e) {
                        var t = e.text, n = e.free, r = e.id;
                        return g["default"].createElement("div", {
                            key: r,
                            className: k["default"].featureRowContent
                        }, g["default"].createElement("div", {
                            className: k["default"].featureTypeCol
                        }, t), g["default"].createElement("div", {
                            className: k["default"].featureFreeCol
                        }, g["default"].createElement("span", {
                            className: n ? k["default"].freeCheckMark : k["default"].freeNope
                        })), g["default"].createElement("div", {
                            className: k["default"].featurePremiumCol
                        }, g["default"].createElement("span", {
                            className: k["default"].premiumCheckMark
                        })));
                    })), g["default"].createElement("div", {
                        className: k["default"].btnWrapper
                    }, g["default"].createElement("div", {
                        className: k["default"].inviteWrapper,
                        onClick: this.goReferral
                    }, g["default"].createElement("span", {
                        className: k["default"].premiumGift
                    }), g["default"].createElement("span", {
                        className: k["default"].inviteText
                    }, g["default"].createElement("span", {
                        className: k["default"].inviteTextLabel
                    }, "Invite friends"), " and get Premium for free"), g["default"].createElement("span", {
                        className: k["default"].premiumArrow
                    })), g["default"].createElement("div", {
                        className: k["default"].premiumButton,
                        onClick: this.goPremium
                    }, "Go Premium")));
                }
            } ]), t;
        }(p.Component);
        n["default"] = C, t.exports = n["default"];
    }, {
        "../../config": 175,
        "../../message": 217,
        "../../tracking": 247,
        "babel-runtime/core-js/object/get-prototype-of": 9,
        "babel-runtime/helpers/classCallCheck": 18,
        "babel-runtime/helpers/createClass": 19,
        "babel-runtime/helpers/inherits": 22,
        "babel-runtime/helpers/possibleConstructorReturn": 24,
        "grammarly-editor": "grammarly-editor",
        react: "react"
    } ],
    193: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/core-js/object/get-prototype-of"), o = r(a), i = e("babel-runtime/helpers/classCallCheck"), l = r(i), s = e("babel-runtime/helpers/createClass"), u = r(s), c = e("babel-runtime/helpers/possibleConstructorReturn"), d = r(c), f = e("babel-runtime/helpers/inherits"), m = r(f), p = e("react"), g = r(p), b = e("react-dom"), h = r(b), v = e("emitter"), _ = r(v), y = e("lib/util"), w = e("./dialog"), x = r(w), k = function(e) {
            function t(e) {
                var n = e.container, r = e.doc, a = e.plus, i = e.editor;
                l["default"](this, t);
                var s = d["default"](this, o["default"](t).call(this));
                return s.dialogComponent = null, s.onClose = function() {
                    s.emit("hide"), s.remove();
                }, s.remove = function() {
                    return s.container.parentNode.removeChild(s.container);
                }, s.container = n, s.doc = r, s.editor = i, s.plus = a, s.render(), s;
            }
            return m["default"](t, e), u["default"](t, [ {
                key: "checkContainer",
                value: function() {
                    this.container || (this.container = this.doc.createElement("premium_dialog"), this.doc.documentElement.appendChild(this.container));
                }
            }, {
                key: "render",
                value: function() {
                    this.checkContainer(), this.dialogComponent = h["default"].render(g["default"].createElement(x["default"], {
                        onClose: this.onClose,
                        plus: this.plus,
                        editor: this.editor
                    }), this.container);
                }
            } ]), t;
        }(y.createClass(_["default"]));
        n["default"] = k, t.exports = n["default"];
    }, {
        "./dialog": 191,
        "babel-runtime/core-js/object/get-prototype-of": 9,
        "babel-runtime/helpers/classCallCheck": 18,
        "babel-runtime/helpers/createClass": 19,
        "babel-runtime/helpers/inherits": 22,
        "babel-runtime/helpers/possibleConstructorReturn": 24,
        emitter: "emitter",
        "lib/util": 251,
        react: "react",
        "react-dom": "react-dom"
    } ],
    194: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/core-js/object/get-prototype-of"), o = r(a), i = e("babel-runtime/helpers/classCallCheck"), l = r(i), s = e("babel-runtime/helpers/createClass"), u = r(s), c = e("babel-runtime/helpers/possibleConstructorReturn"), d = r(c), f = e("babel-runtime/helpers/inherits"), m = r(f), p = e("react"), g = r(p), b = {
            wrapper: "_884a1d-wrapper",
            cross: "_884a1d-cross",
            quote: "_884a1d-quote",
            text: "_884a1d-text",
            firstAuthor: "_884a1d-firstAuthor",
            secondAuthor: "_884a1d-secondAuthor",
            firstAuthorAvatar: "_884a1d-firstAuthorAvatar",
            secondAuthorAvatar: "_884a1d-secondAuthorAvatar"
        }, h = r(b), v = function(e) {
            function t() {
                return l["default"](this, t), d["default"](this, o["default"](t).apply(this, arguments));
            }
            return m["default"](t, e), u["default"](t, [ {
                key: "render",
                value: function() {
                    return g["default"].createElement("div", {
                        className: h["default"].wrapper
                    }, g["default"].createElement("div", {
                        className: h["default"].cross,
                        onClick: this.props.onClose
                    }), g["default"].createElement("div", {
                        className: h["default"].quotesWrapper
                    }, g["default"].createElement("div", {
                        className: h["default"].quote
                    }, g["default"].createElement("span", {
                        className: h["default"].text
                    }, "“Thinking about getting #grammarly? DO IT. I'm 100% sold. I bought a month of their premium service, about to extend for a year.”"), g["default"].createElement("span", {
                        className: h["default"].firstAuthorAvatar
                    }), g["default"].createElement("span", {
                        className: h["default"].firstAuthor
                    }, "J. M. Bush, Author")), g["default"].createElement("div", null, g["default"].createElement("span", {
                        className: h["default"].text
                    }, "“Immediately purchased \u2028the premium version of @grammarly after using it \u2028for a single piece of text. Highly recommended.”"), g["default"].createElement("span", {
                        className: h["default"].secondAuthorAvatar
                    }), g["default"].createElement("span", {
                        className: h["default"].secondAuthor
                    }, "Lara Littlefield, Software Engineer"))));
                }
            } ]), t;
        }(p.Component);
        n["default"] = v, t.exports = n["default"];
    }, {
        "babel-runtime/core-js/object/get-prototype-of": 9,
        "babel-runtime/helpers/classCallCheck": 18,
        "babel-runtime/helpers/createClass": 19,
        "babel-runtime/helpers/inherits": 22,
        "babel-runtime/helpers/possibleConstructorReturn": 24,
        react: "react"
    } ],
    195: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/helpers/defineProperty"), o = r(a), i = e("babel-runtime/core-js/object/get-prototype-of"), l = r(i), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), g = r(p), b = e("react"), h = r(b), v = e("lib/dom"), _ = e("lib/spinner"), y = {
            button_container: "_578484-button_container",
            button_spinner: "_578484-button_spinner",
            button: "_578484-button",
            loading: "_578484-loading"
        }, w = r(y), x = function(e) {
            function t() {
                var e, n, r, a;
                u["default"](this, t);
                for (var o = arguments.length, i = Array(o), s = 0; o > s; s++) i[s] = arguments[s];
                return n = r = m["default"](this, (e = l["default"](t)).call.apply(e, [ this ].concat(i))), 
                r.onClick = function(e) {
                    e.preventDefault(), r.props.loading || r.props.onClick(e);
                }, a = n, m["default"](r, a);
            }
            return g["default"](t, e), d["default"](t, [ {
                key: "render",
                value: function() {
                    var e, t = this.props.loading, n = t ? "" : this.props.text, r = v.cs((e = {}, o["default"](e, w["default"].button_container, !0), 
                    o["default"](e, w["default"].loading, t), e));
                    return h["default"].createElement("div", {
                        className: r
                    }, t && h["default"].createElement(_.SpinnerComponent, {
                        className: w["default"].button_spinner
                    }), h["default"].createElement("button", {
                        type: "button",
                        onClick: this.onClick,
                        className: w["default"].button
                    }, n));
                }
            } ]), t;
        }(h["default"].Component);
        n["default"] = x, t.exports = n["default"];
    }, {
        "babel-runtime/core-js/object/get-prototype-of": 9,
        "babel-runtime/helpers/classCallCheck": 18,
        "babel-runtime/helpers/createClass": 19,
        "babel-runtime/helpers/defineProperty": 20,
        "babel-runtime/helpers/inherits": 22,
        "babel-runtime/helpers/possibleConstructorReturn": 24,
        "lib/dom": 179,
        "lib/spinner": 236,
        react: "react"
    } ],
    196: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/helpers/extends"), o = r(a), i = e("babel-runtime/core-js/object/get-prototype-of"), l = r(i), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), g = r(p), b = e("react"), h = r(b), v = {
            signin_dialog: "_074fdf-signin_dialog",
            view_container: "_074fdf-view_container",
            view: "_074fdf-view",
            view_register: "_074fdf-view_register",
            register: "_074fdf-register",
            view_welcome: "_074fdf-view_welcome",
            welcome: "_074fdf-welcome",
            view_login: "_074fdf-view_login",
            login: "_074fdf-login",
            view_keep_register: "_074fdf-view_keep_register",
            view_login_success: "_074fdf-view_login_success",
            login_success: "_074fdf-login_success",
            login_name: "_074fdf-login_name",
            login_success_label: "_074fdf-login_success_label",
            windows: "_074fdf-windows",
            footer: "_074fdf-footer",
            navigation: "_074fdf-navigation",
            loading: "_074fdf-loading",
            navigation_item: "_074fdf-navigation_item",
            validation: "_074fdf-validation",
            hide: "_074fdf-hide",
            content: "_074fdf-content",
            inputs: "_074fdf-inputs",
            title: "_074fdf-title",
            btn_close: "_074fdf-btn_close",
            navigation_split: "_074fdf-navigation_split",
            hidden: "_074fdf-hidden",
            fakefield: "_074fdf-fakefield"
        }, _ = r(v), y = e("./input"), w = r(y), x = [ {
            label: "Name",
            name: "name",
            type: "text"
        }, {
            label: "Email",
            name: "email",
            type: "text"
        }, {
            label: "Password",
            name: "password",
            type: "password"
        } ], k = function(e) {
            function t() {
                var e, n, r, a;
                u["default"](this, t);
                for (var i = arguments.length, s = Array(i), c = 0; i > c; c++) s[c] = arguments[c];
                return n = r = m["default"](this, (e = l["default"](t)).call.apply(e, [ this ].concat(s))), 
                r.render = function() {
                    return h["default"].createElement("fieldset", {
                        className: _["default"].inputs
                    }, h["default"].createElement("input", {
                        className: _["default"].hidden,
                        type: "text",
                        name: "fakeusernameremembered"
                    }), h["default"].createElement("input", {
                        className: _["default"].hidden,
                        type: "password",
                        name: "fakepasswordremembered"
                    }), x.filter(function(e) {
                        var t = e.name;
                        return r.props.fields.includes(t);
                    }).map(function(e, t) {
                        return h["default"].createElement(w["default"], o["default"]({}, e, {
                            ref: e.name,
                            onSet: r.props.onSet(e.name),
                            value: r.props.formData[e.name],
                            validation: r.props.validation[e.name],
                            onValidate: r.props.onValidate(e.name),
                            forceValidation: r.props.forceValidation,
                            key: t
                        }));
                    }));
                }, a = n, m["default"](r, a);
            }
            return g["default"](t, e), d["default"](t, [ {
                key: "setFocus",
                value: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? this.props.fields[0] : arguments[0];
                    this.refs[e].refs.input.focus();
                }
            } ]), t;
        }(h["default"].Component);
        n["default"] = k, t.exports = n["default"];
    }, {
        "./input": 199,
        "babel-runtime/core-js/object/get-prototype-of": 9,
        "babel-runtime/helpers/classCallCheck": 18,
        "babel-runtime/helpers/createClass": 19,
        "babel-runtime/helpers/extends": 21,
        "babel-runtime/helpers/inherits": 22,
        "babel-runtime/helpers/possibleConstructorReturn": 24,
        react: "react"
    } ],
    197: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("react"), o = r(a), i = {
            signin_dialog: "_074fdf-signin_dialog",
            view_container: "_074fdf-view_container",
            view: "_074fdf-view",
            view_register: "_074fdf-view_register",
            register: "_074fdf-register",
            view_welcome: "_074fdf-view_welcome",
            welcome: "_074fdf-welcome",
            view_login: "_074fdf-view_login",
            login: "_074fdf-login",
            view_keep_register: "_074fdf-view_keep_register",
            view_login_success: "_074fdf-view_login_success",
            login_success: "_074fdf-login_success",
            login_name: "_074fdf-login_name",
            login_success_label: "_074fdf-login_success_label",
            windows: "_074fdf-windows",
            footer: "_074fdf-footer",
            navigation: "_074fdf-navigation",
            loading: "_074fdf-loading",
            navigation_item: "_074fdf-navigation_item",
            validation: "_074fdf-validation",
            hide: "_074fdf-hide",
            content: "_074fdf-content",
            inputs: "_074fdf-inputs",
            title: "_074fdf-title",
            btn_close: "_074fdf-btn_close",
            navigation_split: "_074fdf-navigation_split",
            hidden: "_074fdf-hidden",
            fakefield: "_074fdf-fakefield"
        }, l = r(i), s = e("lib/config");
        n["default"] = function() {
            return o["default"].createElement("div", {
                className: l["default"].footer
            }, "By signing up, you agree to our ", o["default"].createElement("a", {
                tabIndex: "-1",
                target: "__blank",
                href: s.URLS.terms
            }, "Terms and Conditions"), " and ", o["default"].createElement("a", {
                tabIndex: "-1",
                target: "__blank",
                href: s.URLS.policy
            }, "Privacy ", o["default"].createElement("br", null), " Policy"), ". You also agree to receive product-related emails from ", o["default"].createElement("br", null), "Grammarly, which you can unsubscribe from at any time.");
        }, t.exports = n["default"];
    }, {
        "lib/config": 175,
        react: "react"
    } ],
    198: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/helpers/extends"), o = r(a), i = e("babel-runtime/helpers/defineProperty"), l = r(i), s = e("babel-runtime/regenerator"), u = r(s), c = e("babel-runtime/helpers/asyncToGenerator"), d = r(c), f = e("babel-runtime/core-js/object/keys"), m = r(f), p = e("babel-runtime/core-js/object/get-prototype-of"), g = r(p), b = e("babel-runtime/helpers/classCallCheck"), h = r(b), v = e("babel-runtime/helpers/createClass"), _ = r(v), y = e("babel-runtime/helpers/possibleConstructorReturn"), w = r(y), x = e("babel-runtime/helpers/inherits"), k = r(x), E = e("react"), C = r(E), T = e("react-dom"), j = r(T), S = e("lib/config"), N = e("lib/util"), A = e("lib/dom"), M = e("lib/message"), P = r(M), $ = e("./signin-dialog"), O = r($), D = e("lib/tracking"), I = e("emitter"), R = r(I), L = {
            signin_dialog: "_074fdf-signin_dialog",
            view_container: "_074fdf-view_container",
            view: "_074fdf-view",
            view_register: "_074fdf-view_register",
            register: "_074fdf-register",
            view_welcome: "_074fdf-view_welcome",
            welcome: "_074fdf-welcome",
            view_login: "_074fdf-view_login",
            login: "_074fdf-login",
            view_keep_register: "_074fdf-view_keep_register",
            view_login_success: "_074fdf-view_login_success",
            login_success: "_074fdf-login_success",
            login_name: "_074fdf-login_name",
            login_success_label: "_074fdf-login_success_label",
            windows: "_074fdf-windows",
            footer: "_074fdf-footer",
            navigation: "_074fdf-navigation",
            loading: "_074fdf-loading",
            navigation_item: "_074fdf-navigation_item",
            validation: "_074fdf-validation",
            hide: "_074fdf-hide",
            content: "_074fdf-content",
            inputs: "_074fdf-inputs",
            title: "_074fdf-title",
            btn_close: "_074fdf-btn_close",
            navigation_split: "_074fdf-navigation_split",
            hidden: "_074fdf-hidden",
            fakefield: "_074fdf-fakefield"
        }, F = r(L), G = function(e) {
            function t(e) {
                var n = e.doc, r = e.container, a = e.view, o = void 0 === a ? "register" : a, i = e.user;
                h["default"](this, t);
                var l = w["default"](this, g["default"](t).call(this));
                return U.call(l), l.doc = n, l.user = i, l.container = r, l.setView(o), l;
            }
            return k["default"](t, e), _["default"](t, [ {
                key: "validate",
                value: function(e) {
                    var t = this, n = m["default"](e).reduce(function(n, r) {
                        var a = e[r];
                        return a && "" != a ? ("password" == r && "register" == t.view && a.length < 6 && (n[r] = t.validationMessages.shortPassword), 
                        "email" != r || N.isValidEmail(a) || (n[r] = t.validationMessages.incorrectEmail), 
                        n) : (n[r] = t.validationMessages.required, n);
                    }, {});
                    return n._valid = 0 == m["default"](n).length, n;
                }
            }, {
                key: "extendWithServerValidation",
                value: function(e, t) {
                    return t.error ? (e._valid = !1, "Conflict" == t.error ? (e.email = this.validationMessages.emailExists, 
                    e) : "Unauthorized" == t.error ? (e.error = this.validationMessages.invalidUser, 
                    e) : (e.error = this.validationMessages.fail, e)) : (e._valid = !0, e);
                }
            }, {
                key: "onAuth",
                value: function() {
                    function e(e, n) {
                        return t.apply(this, arguments);
                    }
                    var t = d["default"](u["default"].mark(function n(e, t) {
                        var r, a;
                        return u["default"].wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (this.validation = this.validate(t), this.forceValidation = !0, !this.validation._valid) {
                                    n.next = 18;
                                    break;
                                }
                                return this.loading = !0, this.render(), r = void 0, n.prev = 6, n.next = 9, P["default"].promiseBackground(e, t);

                              case 9:
                                r = n.sent, n.next = 16;
                                break;

                              case 12:
                                n.prev = 12, n.t0 = n["catch"](6), n.t0.message && n.t0.message.includes("rejected by timeout") && D.call("felog.error", "stability.cant_connect_to_bg_page_during_login"), 
                                r = {
                                    error: !0
                                };

                              case 16:
                                this.validation = this.extendWithServerValidation(this.validation, r), this.validation._valid || D.fire(e + "-error", this.validation);

                              case 18:
                                if (this.loading = !1, !this.validation._valid) {
                                    n.next = 22;
                                    break;
                                }
                                return a = "signup" == e ? "welcome" : "login_success", n.abrupt("return", this.setView(a));

                              case 22:
                                this.render();

                              case 23:
                              case "end":
                                return n.stop();
                            }
                        }, n, this, [ [ 6, 12 ] ]);
                    }));
                    return e;
                }()
            }, {
                key: "checkContainer",
                value: function() {
                    this.container || (this.container = this.doc.createElement("signin_dialog"), this.doc.documentElement.appendChild(this.container), 
                    A.listen(this.doc.defaultView, "keydown", this.onKey));
                }
            }, {
                key: "render",
                value: function() {
                    this.checkContainer(), this.dialogComponent = j["default"].render(C["default"].createElement(O["default"], {
                        username: this.user.firstName,
                        formData: this.formData,
                        onSet: this.onSet,
                        onGoPremium: this.onGoPremium,
                        onSubmit: this.onSubmit,
                        onGoLogin: this.onGoLogin,
                        onGoRegister: this.onGoRegister,
                        onClose: this.onClose,
                        view: this.view,
                        validation: this.validation,
                        forceValidation: this.forceValidation,
                        onValidate: this.onValidate,
                        loading: this.loading
                    }), this.container);
                }
            }, {
                key: "remove",
                value: function() {
                    A.unlisten(this.doc.defaultView, "keydown", this.onKey), this.container.parentNode.removeChild(this.container);
                }
            } ]), t;
        }(N.createClass(R["default"])), U = function() {
            var e = this;
            this.loading = !1, this.dialogComponent = null, this.formData = {
                name: null,
                email: null,
                password: null
            }, this.updateUser = function(t) {
                e.user = t, e.render();
            }, this.setView = function(t, n) {
                "login_success" != t && (e.formData = e.getFormData("password")), ("login" == t || "register" == t) && (e.formData.password = null), 
                e.forceValidation = !1, e.view = t, e.validation = {}, e.render(), "string" != typeof n && (n = void 0), 
                e.dialogComponent.setFocus(t, n);
            }, this.validationMessages = {
                fail: "Something went wrong. Please try again later.",
                invalidUser: "Invalid email address/password combination.",
                required: "Required",
                shortPassword: "Must be >5 characters",
                incorrectEmail: "Incorrect",
                emailExists: 'Already in use. Do you need to <a data-view="login">Log in</a>?'
            }, this.onValidate = function(t) {
                return function(n) {
                    e.validation[t] = e.validate(l["default"]({}, t, n))[t], delete e.validation.error, 
                    e.render();
                };
            }, this.onSet = function(t) {
                return function(n) {
                    e.formData = o["default"]({}, e.formData, l["default"]({}, t, n)), e.render();
                };
            }, this.getFormData = function(t) {
                var n = o["default"]({}, e.formData);
                return n.hasOwnProperty(t) && delete n[t], n;
            }, this.onClose = function() {
                e.emit("hide"), e.remove();
            }, this.onGoPremium = function() {
                D.fire("upgrade-after-register"), P["default"].emitBackground("open-url", S.URLS.upgrade);
            }, this.onLogin = function() {
                return e.onAuth("signin", e.getFormData("name"));
            }, this.onSignup = function() {
                return e.onAuth("signup", e.getFormData());
            }, this.onGoLogin = function(t) {
                return e.setView("login", t);
            }, this.onGoRegister = function() {
                return e.setView("register");
            }, this.onSubmit = function() {
                e.loading || ("welcome" == e.view ? e.onClose() : "login" == e.view ? e.onLogin() : "register" == e.view && e.onSignup());
            }, this.onKey = function(t) {
                if (delete e.validation.error, 27 == N.keyCode(t) && e.onClose(), 13 == N.keyCode(t)) {
                    var n = t.target;
                    if ("A" == n.tagName) return;
                    var r = A.matchesSelector(n, "." + F["default"].navigation_item);
                    r ? "login" == e.view ? e.onGoRegister() : "register" == e.view && e.onGoLogin() : e.onSubmit();
                }
            };
        };
        n["default"] = G, t.exports = n["default"];
    }, {
        "./signin-dialog": 203,
        "babel-runtime/core-js/object/get-prototype-of": 9,
        "babel-runtime/core-js/object/keys": 10,
        "babel-runtime/helpers/asyncToGenerator": 17,
        "babel-runtime/helpers/classCallCheck": 18,
        "babel-runtime/helpers/createClass": 19,
        "babel-runtime/helpers/defineProperty": 20,
        "babel-runtime/helpers/extends": 21,
        "babel-runtime/helpers/inherits": 22,
        "babel-runtime/helpers/possibleConstructorReturn": 24,
        "babel-runtime/regenerator": 123,
        emitter: "emitter",
        "lib/config": 175,
        "lib/dom": 179,
        "lib/message": 217,
        "lib/tracking": 247,
        "lib/util": 251,
        react: "react",
        "react-dom": "react-dom"
    } ],
    199: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/core-js/object/get-prototype-of"), o = r(a), i = e("babel-runtime/helpers/classCallCheck"), l = r(i), s = e("babel-runtime/helpers/createClass"), u = r(s), c = e("babel-runtime/helpers/possibleConstructorReturn"), d = r(c), f = e("babel-runtime/helpers/inherits"), m = r(f), p = e("react"), g = r(p), b = e("lib/util"), h = {
            input: "_5517df-input",
            label: "_5517df-label",
            input_element: "_5517df-input_element",
            validation: "_5517df-validation"
        }, v = r(h), _ = function(e) {
            function t() {
                var e, n, r, a;
                l["default"](this, t);
                for (var i = arguments.length, s = Array(i), u = 0; i > u; u++) s[u] = arguments[u];
                return n = r = d["default"](this, (e = o["default"](t)).call.apply(e, [ this ].concat(s))), 
                r.id = b.guid(), r.state = {
                    cancelValidation: !0,
                    dirty: !1
                }, r.onBlur = function() {
                    r.setState({
                        cancelValidation: !1
                    }), r.props.onValidate(r.value);
                }, r.onChange = function() {
                    r.setState({
                        cancelValidation: !0,
                        dirty: !0
                    }), r.props.onSet(r.value);
                }, a = n, d["default"](r, a);
            }
            return m["default"](t, e), u["default"](t, [ {
                key: "getValidation",
                value: function() {
                    return (this.props.validation && !this.state.cancelValidation && this.state.dirty || this.props.forceValidation) && g["default"].createElement("div", {
                        className: v["default"].validation,
                        dangerouslySetInnerHTML: {
                            __html: this.props.validation
                        }
                    });
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props, t = e.name, n = e.type, r = e.label, a = e.value, o = {
                        name: t,
                        type: n,
                        value: a,
                        id: this.id,
                        ref: "input",
                        required: "required",
                        spellCheck: !1,
                        onBlur: this.onBlur,
                        onChange: this.onChange,
                        className: v["default"].input_element
                    };
                    return g["default"].createElement("div", {
                        className: v["default"].input
                    }, this.getValidation(), g["default"].createElement("input", o), g["default"].createElement("label", {
                        htmlFor: this.id,
                        className: v["default"].label
                    }, r));
                }
            }, {
                key: "value",
                get: function() {
                    return this.refs.input.value;
                }
            } ]), t;
        }(g["default"].Component);
        n["default"] = _, t.exports = n["default"];
    }, {
        "babel-runtime/core-js/object/get-prototype-of": 9,
        "babel-runtime/helpers/classCallCheck": 18,
        "babel-runtime/helpers/createClass": 19,
        "babel-runtime/helpers/inherits": 22,
        "babel-runtime/helpers/possibleConstructorReturn": 24,
        "lib/util": 251,
        react: "react"
    } ],
    200: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("react"), o = r(a), i = {
            signin_dialog: "_074fdf-signin_dialog",
            view_container: "_074fdf-view_container",
            view: "_074fdf-view",
            view_register: "_074fdf-view_register",
            register: "_074fdf-register",
            view_welcome: "_074fdf-view_welcome",
            welcome: "_074fdf-welcome",
            view_login: "_074fdf-view_login",
            login: "_074fdf-login",
            view_keep_register: "_074fdf-view_keep_register",
            view_login_success: "_074fdf-view_login_success",
            login_success: "_074fdf-login_success",
            login_name: "_074fdf-login_name",
            login_success_label: "_074fdf-login_success_label",
            windows: "_074fdf-windows",
            footer: "_074fdf-footer",
            navigation: "_074fdf-navigation",
            loading: "_074fdf-loading",
            navigation_item: "_074fdf-navigation_item",
            validation: "_074fdf-validation",
            hide: "_074fdf-hide",
            content: "_074fdf-content",
            inputs: "_074fdf-inputs",
            title: "_074fdf-title",
            btn_close: "_074fdf-btn_close",
            navigation_split: "_074fdf-navigation_split",
            hidden: "_074fdf-hidden",
            fakefield: "_074fdf-fakefield"
        }, l = r(i);
        n["default"] = function(e) {
            var t = e.isAutoClose, n = e.onClose, r = e.username;
            return t && n && setTimeout(n, 1500), r ? o["default"].createElement("div", {
                className: l["default"].login_success_label
            }, "Welcome back, ", o["default"].createElement("span", {
                className: l["default"].login_name
            }, r), "!") : o["default"].createElement("div", {
                className: l["default"].login_success_label
            }, "Welcome back!");
        }, t.exports = n["default"];
    }, {
        react: "react"
    } ],
    201: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/helpers/extends"), o = r(a), i = e("babel-runtime/core-js/object/get-prototype-of"), l = r(i), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), g = r(p), b = e("react"), h = r(b), v = e("lib/config"), _ = e("./fieldset"), y = r(_), w = e("./button"), x = r(w), k = {
            signin_dialog: "_074fdf-signin_dialog",
            view_container: "_074fdf-view_container",
            view: "_074fdf-view",
            view_register: "_074fdf-view_register",
            register: "_074fdf-register",
            view_welcome: "_074fdf-view_welcome",
            welcome: "_074fdf-welcome",
            view_login: "_074fdf-view_login",
            login: "_074fdf-login",
            view_keep_register: "_074fdf-view_keep_register",
            view_login_success: "_074fdf-view_login_success",
            login_success: "_074fdf-login_success",
            login_name: "_074fdf-login_name",
            login_success_label: "_074fdf-login_success_label",
            windows: "_074fdf-windows",
            footer: "_074fdf-footer",
            navigation: "_074fdf-navigation",
            loading: "_074fdf-loading",
            navigation_item: "_074fdf-navigation_item",
            validation: "_074fdf-validation",
            hide: "_074fdf-hide",
            content: "_074fdf-content",
            inputs: "_074fdf-inputs",
            title: "_074fdf-title",
            btn_close: "_074fdf-btn_close",
            navigation_split: "_074fdf-navigation_split",
            hidden: "_074fdf-hidden",
            fakefield: "_074fdf-fakefield"
        }, E = r(k), C = function(e) {
            function t() {
                var e, n, r, a;
                u["default"](this, t);
                for (var i = arguments.length, s = Array(i), c = 0; i > c; c++) s[c] = arguments[c];
                return n = r = m["default"](this, (e = l["default"](t)).call.apply(e, [ this ].concat(s))), 
                r.fields = [ "email", "password" ], r.focusForm = function(e) {
                    return function(t) {
                        "start" == e && r.setFocus(), "end" == e && r.refs.end.focus();
                    };
                }, r.render = function() {
                    return h["default"].createElement("form", null, h["default"].createElement("div", {
                        className: E["default"].title
                    }, "Member Login"), h["default"].createElement("input", {
                        className: E["default"].fakefield,
                        type: "text",
                        name: "fakeformstart",
                        onFocus: r.focusForm("end")
                    }), h["default"].createElement(y["default"], o["default"]({
                        ref: "fieldset",
                        fields: r.fields
                    }, r.props)), h["default"].createElement(x["default"], {
                        loading: r.props.loading,
                        text: "Log In",
                        onClick: r.props.onSubmit
                    }), h["default"].createElement("div", {
                        className: E["default"].navigation
                    }, h["default"].createElement("span", {
                        tabIndex: "0",
                        onClick: r.props.onGoRegister,
                        className: E["default"].navigation_item
                    }, "Don’t have an account?"), h["default"].createElement("span", {
                        className: E["default"].navigation_split
                    }, "·"), h["default"].createElement("a", {
                        target: "__blank",
                        href: v.URLS.resetPassword,
                        ref: "end",
                        className: E["default"].navigation_item
                    }, "Forgot password?")), h["default"].createElement("input", {
                        className: E["default"].fakefield,
                        type: "text",
                        name: "fakeformend",
                        onFocus: r.focusForm("start")
                    }));
                }, a = n, m["default"](r, a);
            }
            return g["default"](t, e), d["default"](t, [ {
                key: "setFocus",
                value: function(e) {
                    this.refs.fieldset.setFocus(e);
                }
            } ]), t;
        }(h["default"].Component);
        n["default"] = C, t.exports = n["default"];
    }, {
        "./button": 195,
        "./fieldset": 196,
        "babel-runtime/core-js/object/get-prototype-of": 9,
        "babel-runtime/helpers/classCallCheck": 18,
        "babel-runtime/helpers/createClass": 19,
        "babel-runtime/helpers/extends": 21,
        "babel-runtime/helpers/inherits": 22,
        "babel-runtime/helpers/possibleConstructorReturn": 24,
        "lib/config": 175,
        react: "react"
    } ],
    202: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/helpers/extends"), o = r(a), i = e("babel-runtime/core-js/object/get-prototype-of"), l = r(i), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), g = r(p), b = e("react"), h = r(b), v = e("./button"), _ = r(v), y = e("./footer"), w = r(y), x = e("./fieldset"), k = r(x), E = {
            signin_dialog: "_074fdf-signin_dialog",
            view_container: "_074fdf-view_container",
            view: "_074fdf-view",
            view_register: "_074fdf-view_register",
            register: "_074fdf-register",
            view_welcome: "_074fdf-view_welcome",
            welcome: "_074fdf-welcome",
            view_login: "_074fdf-view_login",
            login: "_074fdf-login",
            view_keep_register: "_074fdf-view_keep_register",
            view_login_success: "_074fdf-view_login_success",
            login_success: "_074fdf-login_success",
            login_name: "_074fdf-login_name",
            login_success_label: "_074fdf-login_success_label",
            windows: "_074fdf-windows",
            footer: "_074fdf-footer",
            navigation: "_074fdf-navigation",
            loading: "_074fdf-loading",
            navigation_item: "_074fdf-navigation_item",
            validation: "_074fdf-validation",
            hide: "_074fdf-hide",
            content: "_074fdf-content",
            inputs: "_074fdf-inputs",
            title: "_074fdf-title",
            btn_close: "_074fdf-btn_close",
            navigation_split: "_074fdf-navigation_split",
            hidden: "_074fdf-hidden",
            fakefield: "_074fdf-fakefield"
        }, C = r(E), T = function(e) {
            function t() {
                var e, n, r, a;
                u["default"](this, t);
                for (var i = arguments.length, s = Array(i), c = 0; i > c; c++) s[c] = arguments[c];
                return n = r = m["default"](this, (e = l["default"](t)).call.apply(e, [ this ].concat(s))), 
                r.fields = [ "name", "email", "password" ], r.focusForm = function(e) {
                    return function(t) {
                        "start" == e && r.setFocus(), "end" == e && r.refs.end.focus();
                    };
                }, r.render = function() {
                    return h["default"].createElement("form", null, h["default"].createElement("div", {
                        className: C["default"].title
                    }, "Create an Account"), h["default"].createElement("input", {
                        className: C["default"].fakefield,
                        type: "text",
                        name: "fakeformstart",
                        onFocus: r.focusForm("end")
                    }), h["default"].createElement(k["default"], o["default"]({
                        ref: "fieldset",
                        fields: r.fields
                    }, r.props)), h["default"].createElement(_["default"], {
                        loading: r.props.loading,
                        onClick: r.props.onSubmit,
                        text: "Sign Up"
                    }), h["default"].createElement("div", {
                        className: C["default"].navigation
                    }, h["default"].createElement("span", {
                        tabIndex: "0",
                        ref: "end",
                        onClick: r.props.onGoLogin,
                        className: C["default"].navigation_item
                    }, "Already have an account?")), h["default"].createElement(w["default"], null), h["default"].createElement("input", {
                        className: C["default"].fakefield,
                        type: "text",
                        name: "fakeformend",
                        onFocus: r.focusForm("start")
                    }));
                }, a = n, m["default"](r, a);
            }
            return g["default"](t, e), d["default"](t, [ {
                key: "setFocus",
                value: function(e) {
                    this.refs.fieldset.setFocus(e);
                }
            } ]), t;
        }(h["default"].Component);
        n["default"] = T, t.exports = n["default"];
    }, {
        "./button": 195,
        "./fieldset": 196,
        "./footer": 197,
        "babel-runtime/core-js/object/get-prototype-of": 9,
        "babel-runtime/helpers/classCallCheck": 18,
        "babel-runtime/helpers/createClass": 19,
        "babel-runtime/helpers/extends": 21,
        "babel-runtime/helpers/inherits": 22,
        "babel-runtime/helpers/possibleConstructorReturn": 24,
        react: "react"
    } ],
    203: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/helpers/defineProperty"), o = r(a), i = e("babel-runtime/core-js/object/get-prototype-of"), l = r(i), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), g = r(p), b = e("react"), h = r(b), v = e("lib/util"), _ = e("lib/dom"), y = e("./login"), w = r(y), x = e("./welcome"), k = r(x), E = e("./register"), C = r(E), T = e("./login-success"), j = r(T), S = {
            signin_dialog: "_074fdf-signin_dialog",
            view_container: "_074fdf-view_container",
            view: "_074fdf-view",
            view_register: "_074fdf-view_register",
            register: "_074fdf-register",
            view_welcome: "_074fdf-view_welcome",
            welcome: "_074fdf-welcome",
            view_login: "_074fdf-view_login",
            login: "_074fdf-login",
            view_keep_register: "_074fdf-view_keep_register",
            view_login_success: "_074fdf-view_login_success",
            login_success: "_074fdf-login_success",
            login_name: "_074fdf-login_name",
            login_success_label: "_074fdf-login_success_label",
            windows: "_074fdf-windows",
            footer: "_074fdf-footer",
            navigation: "_074fdf-navigation",
            loading: "_074fdf-loading",
            navigation_item: "_074fdf-navigation_item",
            validation: "_074fdf-validation",
            hide: "_074fdf-hide",
            content: "_074fdf-content",
            inputs: "_074fdf-inputs",
            title: "_074fdf-title",
            btn_close: "_074fdf-btn_close",
            navigation_split: "_074fdf-navigation_split",
            hidden: "_074fdf-hidden",
            fakefield: "_074fdf-fakefield"
        }, N = r(S), A = function(e) {
            function t() {
                var e, n, r, a;
                u["default"](this, t);
                for (var o = arguments.length, i = Array(o), s = 0; o > s; s++) i[s] = arguments[s];
                return n = r = m["default"](this, (e = l["default"](t)).call.apply(e, [ this ].concat(i))), 
                r.state = {
                    hide: !1
                }, r.previousView = "register", r.onClick = function(e) {
                    return "login_success" == r.props.view ? r.onClose(e) : (_.matchesSelector(e.target, "." + N["default"].content + ", ." + N["default"].content + " *") || r.onClose(e), 
                    void ("login" == e.target.dataset.view && r.props.onGoLogin("password")));
                }, r.onClose = function(e) {
                    e && e.stopPropagation(), r.setState({
                        hide: !0
                    }), setTimeout(function() {
                        return r.props.onClose(e);
                    }, 400);
                }, r.viewClass = function(e) {
                    return N["default"]["view_" + e];
                }, a = n, m["default"](r, a);
            }
            return g["default"](t, e), d["default"](t, [ {
                key: "setFocus",
                value: function(e, t) {
                    ("register" == e || "login" == e) && this.refs[e].setFocus(t);
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.previousView, n = this.props.view, r = _.cs((e = {}, o["default"](e, this.viewClass(n), !0), 
                    o["default"](e, "keep_" + this.viewClass(t), !0), o["default"](e, N["default"].signin_dialog, !0), 
                    o["default"](e, N["default"].loading, this.props.loading), o["default"](e, N["default"].hide, this.state.hide), 
                    o["default"](e, N["default"].windows, v.isWindows()), e)), a = "login_success" == n && this.previousView != n;
                    return this.previousView = n, h["default"].createElement("div", {
                        ref: "dialogEl",
                        onClick: this.onClick,
                        className: r
                    }, h["default"].createElement("div", {
                        className: N["default"].content
                    }, h["default"].createElement("div", {
                        className: N["default"].validation
                    }, this.props.validation.error), h["default"].createElement("div", {
                        className: N["default"].btn_close,
                        onClick: this.onClose
                    }), h["default"].createElement("div", {
                        className: N["default"].view_container
                    }, h["default"].createElement("div", {
                        className: N["default"].view + " " + N["default"].register
                    }, h["default"].createElement(C["default"], {
                        ref: "register",
                        formData: this.props.formData,
                        onSet: this.props.onSet,
                        validation: this.props.validation,
                        onValidate: this.props.onValidate,
                        forceValidation: this.props.forceValidation,
                        loading: this.props.loading,
                        onSubmit: this.props.onSubmit,
                        onGoLogin: this.props.onGoLogin
                    })), h["default"].createElement("div", {
                        className: N["default"].view + " " + N["default"].login
                    }, h["default"].createElement(w["default"], {
                        ref: "login",
                        formData: this.props.formData,
                        onSet: this.props.onSet,
                        validation: this.props.validation,
                        onValidate: this.props.onValidate,
                        forceValidation: this.props.forceValidation,
                        loading: this.props.loading,
                        onSubmit: this.props.onSubmit,
                        onGoRegister: this.props.onGoRegister
                    })), h["default"].createElement("div", {
                        className: N["default"].view + " " + N["default"].welcome
                    }, h["default"].createElement(k["default"], {
                        isShow: "welcome" == n,
                        onGoPremium: this.props.onGoPremium,
                        onClose: this.props.onClose
                    })), h["default"].createElement("div", {
                        className: N["default"].view + " " + N["default"].login_success
                    }, h["default"].createElement(j["default"], {
                        username: this.props.username,
                        isAutoClose: a,
                        onClose: this.onClose
                    })))));
                }
            } ]), t;
        }(h["default"].Component);
        n["default"] = A, t.exports = n["default"];
    }, {
        "./login": 201,
        "./login-success": 200,
        "./register": 202,
        "./welcome": 204,
        "babel-runtime/core-js/object/get-prototype-of": 9,
        "babel-runtime/helpers/classCallCheck": 18,
        "babel-runtime/helpers/createClass": 19,
        "babel-runtime/helpers/defineProperty": 20,
        "babel-runtime/helpers/inherits": 22,
        "babel-runtime/helpers/possibleConstructorReturn": 24,
        "lib/dom": 179,
        "lib/util": 251,
        react: "react"
    } ],
    204: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/helpers/defineProperty"), o = r(a), i = e("babel-runtime/core-js/object/get-prototype-of"), l = r(i), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/possibleConstructorReturn"), d = r(c), f = e("babel-runtime/helpers/inherits"), m = r(f), p = e("react"), g = r(p), b = {
            welcome: "_4e742d-welcome",
            windows: "_4e742d-windows",
            image: "_4e742d-image",
            content: "_4e742d-content",
            show: "_4e742d-show",
            title: "_4e742d-title",
            text: "_4e742d-text",
            close: "_4e742d-close",
            learn_more: "_4e742d-learn_more",
            go_premium: "_4e742d-go_premium"
        }, h = r(b), v = e("lib/dom"), _ = e("lib/util"), y = e("./button"), w = r(y), x = function(e) {
            function t() {
                var e, n, r, a;
                u["default"](this, t);
                for (var i = arguments.length, s = Array(i), c = 0; i > c; c++) s[c] = arguments[c];
                return n = r = d["default"](this, (e = l["default"](t)).call.apply(e, [ this ].concat(s))), 
                r.render = function() {
                    var e, t = v.cs((e = {}, o["default"](e, h["default"].welcome, !0), o["default"](e, h["default"].show, r.props.isShow), 
                    o["default"](e, h["default"].windows, _.isWindows()), e));
                    return g["default"].createElement("div", {
                        className: t
                    }, g["default"].createElement("div", {
                        className: h["default"].image
                    }), g["default"].createElement("div", {
                        className: h["default"].content
                    }, g["default"].createElement("div", {
                        className: h["default"].title
                    }, "Welcome to Grammarly"), g["default"].createElement("div", {
                        className: h["default"].text
                    }, "Wave good-bye to the most frequent and pesky ", g["default"].createElement("br", null), "writing mistakes."), g["default"].createElement("div", {
                        className: h["default"].go_premium
                    }, g["default"].createElement("span", {
                        className: h["default"].checks
                    }, "Go Premium and get 150+ additional", g["default"].createElement("br", null), "advanced checks."), " ", g["default"].createElement("a", {
                        onClick: r.props.onGoPremium,
                        className: h["default"].learn_more
                    }, "Learn more")), g["default"].createElement("div", {
                        className: h["default"].close
                    }, g["default"].createElement(w["default"], {
                        onClick: r.props.onClose,
                        text: "Continue to Your Text"
                    }))));
                }, a = n, d["default"](r, a);
            }
            return m["default"](t, e), t;
        }(g["default"].Component);
        n["default"] = x, t.exports = n["default"];
    }, {
        "./button": 195,
        "babel-runtime/core-js/object/get-prototype-of": 9,
        "babel-runtime/helpers/classCallCheck": 18,
        "babel-runtime/helpers/defineProperty": 20,
        "babel-runtime/helpers/inherits": 22,
        "babel-runtime/helpers/possibleConstructorReturn": 24,
        "lib/dom": 179,
        "lib/util": 251,
        react: "react"
    } ],
    205: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a() {
            function e() {
                m.fastHide();
            }
            function t(e) {
                var t = e.target;
                return c.inEl(t, l.posEl);
            }
            function n() {
                l.posEl && (d.parentNode && d.parentNode.removeChild(d), c.unlisten(l.doc, "scroll", e), 
                c.unlisten(l.moveListenerDoc, "scroll", e));
            }
            function r() {
                p && (p = !1, d.style.opacity = 0, d.style.top = "-9999px", m && m.setVisible(!1), 
                c.removeClass(d, l.cls), console.log("hide tooltip"));
            }
            function a() {
                l.cls += " gr-no-transition", o(), setTimeout(function() {
                    l.cls = l.cls.replace(" gr-no-transition", ""), c.removeClass(d, "gr-no-transition");
                }, 100);
            }
            function o() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? l : arguments[0], t = e.posEl, n = void 0 === t ? l.posEl : t, r = e.html, a = void 0 === r ? l.html : r, o = e.text, s = void 0 === o ? l.text : o, b = e.cls, h = void 0 === b ? l.cls : b, v = e.doc, _ = void 0 === v ? l.doc : v, y = e.outerIframe, w = void 0 === y ? l.outerIframe : y;
                if (i["default"].extend(l, {
                    posEl: n,
                    html: a,
                    text: s,
                    cls: h,
                    doc: _,
                    outerIframe: w
                }), g) {
                    p = !0, m && m.setVisible(!0), s && d.setAttribute("data-content", s), a && (f.innerHTML = a), 
                    d.className = "gr__tooltip", h && c.addClass(d, h), c.removeClass(d, "gr__flipped");
                    var x = u.getAbsRect(n, w), k = u.posToRect(d, x), E = k.rect, C = E.top, T = E.left;
                    c.css(d, {
                        top: C,
                        left: T
                    }), k && k.rect && !k.rect.flip && c.addClass(d, "gr__flipped");
                    var j = d.clientWidth, S = d.querySelector(".gr__triangle"), N = x.width / 2;
                    N > j && (N = 0), k.delta.right <= 0 && (N -= k.delta.right), N -= parseInt(getComputedStyle(d, null).getPropertyValue("margin-left")), 
                    S.style.marginLeft = parseInt(N) + "px", d.style.opacity = 1;
                }
            }
            var l = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], d = document.querySelector(".gr__tooltip"), f = void 0, m = void 0, p = void 0, g = void 0 != l.enabled ? l.enabled : !0;
            if (d || (d = c.createEl('<span class="gr__tooltip"><span class="gr__tooltip-content"></span><i class="gr__tooltip-logo"></i><span class="gr__triangle"></span></span>'), 
            document.documentElement.appendChild(d)), f = d.querySelector(".gr__tooltip-content"), 
            l.posEl) {
                var b = l.outerIframe && l.outerIframe.contentDocument || l.doc;
                m = new s["default"]({
                    doc: b,
                    doc2: l.doc,
                    hint: d,
                    hideDelay: 500,
                    delay: 0,
                    onshow: o,
                    onhide: r,
                    inTarget: t
                }), c.listen(l.doc, "scroll", e), c.listen(b, "scroll", e), m.bind();
            }
            var h = {
                show: o,
                fastShow: a,
                hide: r,
                remove: n,
                el: d,
                enable: function() {
                    g = !0;
                },
                disable: function() {
                    g = !1;
                },
                isEnabled: function() {
                    return g;
                }
            };
            return h;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("lodash"), i = r(o), l = e("./hint"), s = r(l), u = e("../position"), c = e("../dom");
        n["default"] = a, t.exports = n["default"];
    }, {
        "../dom": 179,
        "../position": 227,
        "./hint": 188,
        lodash: "lodash"
    } ],
    206: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            var t = document.createElement("script");
            t.innerHTML = e, document.head.appendChild(t), t.parentNode.removeChild(t);
        }
        function o() {
            c.initContentScript(), a("window.GR_EXTENSION_ID='" + u.getUuid() + "'"), a("\n    window.GR_EXTENSION_SEND = function(key, data) {\n      if (!key) throw new TypeError('cant be called without message')\n      var e = document.createEvent('CustomEvent')\n      e.initCustomEvent('external:' + key, true, true, data)\n      document.dispatchEvent(e)\n    }\n  "), 
            u.externalEvents.map(function(e) {
                return "external:" + e;
            }).forEach(function(e) {
                var t;
                return (t = document, i.on).call(t, e, function(t) {
                    var n = t.detail;
                    console.log("external event", e, n), s["default"].emitBackground(e, n);
                });
            });
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n["default"] = o;
        var i = e("./dom"), l = e("./message"), s = r(l), u = e("./config"), c = e("./tracking");
        t.exports = n["default"];
    }, {
        "./config": 175,
        "./dom": 179,
        "./message": 217,
        "./tracking": 247
    } ],
    207: [ function(e, t, n) {
        "use strict";
        function r() {
            function e() {
                setTimeout(i, s), o.index_load = !1;
            }
            function t() {
                setTimeout(l, u), o.app_load = !1;
            }
            function n(e) {
                o[e] = !0;
            }
            function r(e, t) {
                o[e] ? a.call("statsc.ui.increment", "stability:" + t + "_success") : (a.call("statsc.ui.increment", "stability:" + t + "_timeout"), 
                a.call("felog.error", "stability." + t + "_timeout"));
            }
            function i() {
                r("index_load", "extension_loading");
            }
            function l() {
                r("app_load", "extension_app_loading");
            }
            var s = 12e4, u = 12e4, c = {
                startPageLoadTimer: e,
                startAppLoadTimer: t,
                success: n,
                setPageLoadTimeout: function(e) {
                    return s = e;
                },
                setAppLoadTimeout: function(e) {
                    return u = e;
                }
            };
            return c;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./tracking"), o = {};
        n["default"] = r(), t.exports = n["default"];
    }, {
        "./tracking": 247
    } ],
    208: [ function(e, t, n) {
        (function(e) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n["default"] = "undefined" != typeof window ? window.forge : "undefined" != typeof e ? e.forge : null, 
            t.exports = n["default"];
        }).call(this, "undefined" != typeof window ? window : {});
    }, {} ],
    209: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e, t) {
            t.setDomSelection = function(t) {
                var n = l["default"].getNodeByTextPos(e, t.begin), r = l["default"].getNodeByTextPos(e, t.end);
                s.setDomRange(e.ownerDocument, {
                    anchorNode: n.node,
                    anchorOffset: t.begin - n.pos,
                    focusNode: r.node,
                    focusOffset: t.end - r.pos
                });
            }, t.setCursor = function(e) {
                t.cursor = e;
            }, t.fireDomEvent = function(e) {
                u.isFF() && s.emitDomEvent("document-mousedown-mouseup-activeElement");
                var t = " " == e || e.trim() ? "paste" : "backspace";
                s.emitDomEvent("document-" + t + "-activeElement", {
                    value: e
                });
            }, t.doReplace = function(e, n) {
                t.safeFocus(), t.setDomSelection(e), u.asyncCall(function() {
                    return t.fireDomEvent(n);
                });
            }, t.setTextareaValue = function(n) {
                t.safeFocus(), e.ownerDocument.getSelection().selectAllChildren(e), u.asyncCall(function() {
                    t.fireDomEvent(n.trimRight()), u.asyncCall(t._setCursor, 100);
                }, u.isSafari() ? 100 : 10);
            };
        }
        function o() {
            function e(e) {
                var t = {
                    target: document.activeElement,
                    _inherits_from_prototype: !0,
                    defaultPrevented: !1,
                    preventDefault: function() {}
                };
                for (var n in e) t[n] = e[n];
                return t;
            }
            function t(e, t) {
                var r = n[e];
                r && r.forEach(function(e) {
                    e(t);
                });
            }
            var n = {};
            document.addEventListener("document-paste-activeElement-gr", function(n) {
                var r = n.detail ? n.detail.value : "";
                t("paste", e({
                    clipboardData: {
                        getData: function() {
                            return r;
                        },
                        items: [ "text/plain" ]
                    }
                }));
            }), document.addEventListener("document-mousedown-mouseup-activeElement-gr", function(n) {
                t("mousedown", e({
                    type: "mousedown"
                })), t("mouseup", e({
                    type: "mouseup"
                }));
            }), document.addEventListener("document-backspace-activeElement-gr", function(n) {
                t("keydown", e({
                    keyCode: 8,
                    which: 8,
                    charCode: 0,
                    type: "keydown"
                }));
            });
            var r = document.addEventListener.bind(document);
            document.addEventListener = function(e, t, a) {
                var o = n[e] || [];
                o.push(t), n[e] = o, r(e, t, a);
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("wrap"), l = r(i), s = e("lib/dom"), u = e("lib/util");
        n["default"] = {
            facebookRewriteFunction: o,
            extendDom: a
        }, t.exports = n["default"];
    }, {
        "lib/dom": 179,
        "lib/util": 251,
        wrap: "wrap"
    } ],
    210: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            function t() {
                k();
            }
            function n(e) {
                var t = A.getBoundingClientRect(), n = C(e.clientX - t.left, e.clientY - t.top, t.left, t.top);
                if (n) {
                    n.e = e, e.stopPropagation();
                    var r = document.createEvent("CustomEvent");
                    r.initCustomEvent("gramMouse", !0, !0, n), P.dispatchEvent(r);
                }
            }
            function r(e) {
                try {
                    V.child.height = A.scrollHeight, R.scrollTop = A.scrollTop, clearTimeout(z), z = setTimeout(r, 100);
                } catch (e) {
                    console.log(e), r = g._f;
                }
            }
            function a(e) {
                return e ? e.split(" ").map(function(e) {
                    return isNaN(parseFloat(e)) && -1 == e.indexOf("px") ? e : Math.floor(parseFloat(e)) + "px";
                }).join(" ") : e;
            }
            function o() {
                var e = {}, t = $.getComputedStyle(A, null);
                if (!t) return e;
                var n = function(e) {
                    return t.getPropertyValue(e);
                }, r = function(e) {
                    var t = {};
                    return e.map(function(e) {
                        t[e] = n(e), "z-index" == e && "auto" == t[e] && A.style.zIndex && (t[e] = A.style.zIndex);
                    }), t;
                };
                e = {
                    parent: r([ "border", "border-radius", "box-sizing", "height", "width", "margin", "padding", "z-index", "border-top-width", "border-right-width", "border-left-width", "border-bottom-width", "border-top-style", "border-right-style", "border-left-style", "border-bottom-style", "padding-top", "padding-left", "padding-bottom", "padding-right", "margin-top", "margin-left", "margin-bottom", "margin-right" ]),
                    child: r([ "font", "font-size", "font-family", "text-align", "line-height", "letter-spacing", "text-shadow" ]),
                    src: r([ "position", "margin-top", "line-height", "font-size", "font-family", "z-index" ])
                };
                var o = e.parent["z-index"];
                if (e.parent["z-index"] = o && "auto" != o ? parseInt(o) - 1 : 0, e.parent.marginTop = a(e.parent.marginTop), 
                e.src.marginTop = a(e.src.marginTop), e.parent.margin = a(e.parent.margin), e.parent.padding = a(e.parent.padding), 
                (e.parent["border-top-width"] || e.parent["border-left-width"]) && (e.parent["border-style"] = "solid"), 
                e.parent.border) {
                    var i = e.parent.border.split(" ");
                    e.parent["border-width"] = i[0], i.length > 1 && (e.parent["border-style"] = i[1]), 
                    delete e.parent.border;
                }
                if (e.parent["border-color"] = "transparent !important", "absolute" == e.src.position || "relative" == e.src.position ? e.parent = p["default"].extend(e.parent, r([ "top", "left" ])) : e.src.position = "relative", 
                W = K.customDefaultBg && K.customDefaultBg(A) || W || n("background"), g.isFF() && !W && (W = [ "background-color", "background-image", "background-repeat", "background-attachment", "background-position" ].map(n).join(" ")), 
                e.parent.background = W, g.isFF()) {
                    var l = parseInt(n("border-right-width")) - parseInt(n("border-left-width")), s = A.offsetWidth - A.clientWidth - l;
                    e.child["padding-right"] = s - 1 + "px";
                }
                return "start" == n("text-align") && (e.child["text-align"] = "ltr" == n("direction") ? "left" : "right"), 
                e;
            }
            function i(e) {
                U = e, u();
            }
            function l(e) {
                var t = {
                    background: "transparent !important",
                    "z-index": e["z-index"] || 1,
                    position: e.position,
                    "line-height": e["line-height"],
                    "font-size": e["font-size"],
                    "-webkit-transition": "none",
                    transition: "none"
                };
                parseInt(e["margin-top"]) > 0 && v.css(A.parentNode, {
                    width: "auto",
                    overflow: "hidden"
                });
                var n = $.devicePixelRatio > 1;
                if (n) {
                    var r = e["font-family"];
                    0 == r.indexOf("Consolas") && (r = r.replace("Consolas,", "Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace, serif"), 
                    V.child["font-family"] = r, t["font-family"] = r);
                }
                v.css(A, t);
            }
            function u() {
                var e = o();
                F || (l(e.src), B = A.previousElementSibling && "left" == v.css(A.previousElementSibling, "float"), 
                g.interval(u, 500), G || (G = !0, v.listen(A, X)), F = !0), V.parent.marginTop = a(V.parent.marginTop), 
                e = p["default"].merge(e, V), e.child.height = A.scrollHeight, K.fieldRestoreInlineStyles && K.fieldRestoreInlineStyles(A, e), 
                K.ghostHeight && (e.child.height = K.ghostHeight(e.child.height));
                var t = p["default"].merge(H, {
                    "data-id": D,
                    "data-gramm_id": D,
                    "data-gramm": "gramm",
                    "data-gramm_editor": !0,
                    dir: A.getAttribute("dir")
                });
                I || (I = P.createElement("grammarly-ghost"), I.setAttribute("spellcheck", !1), 
                v.insertBefore(I, M)), O.matchPrefix && (t.className = O.matchPrefix), K.ghostHeight && (e.parent.height = K.ghostHeight(e.parent.height));
                var n = f["default"].render(c["default"].createElement(x, {
                    style: e,
                    attrs: t,
                    val: U
                }), I);
                R = f["default"].findDOMNode(n), L = R.firstElementChild, R.contentEditable = !0, 
                Y.clone = R, Y.cloneVal = L, d(), m(), _(), 0 == A.offsetHeight ? j() : S(), Y.emit("render");
            }
            function d() {
                if (B) {
                    if (A.getBoundingClientRect().left == R.getBoundingClientRect().left && A.getBoundingClientRect().top == R.getBoundingClientRect().top) return B = !1;
                    var e = A.getBoundingClientRect(), t = A.parentNode.getBoundingClientRect(), n = e.left - t.left, r = e.top - t.top, a = "translate(" + n + "px, " + r + "px)";
                    V.parent["-webkit-transform"] = a, V.parent.transform = a;
                }
            }
            function m() {
                function e(e, r, a) {
                    var o = a ? [ A, R ] : [ t, n ];
                    V.parent[r] = parseInt(parseInt(R.style[r]) + o[0][e] - o[1][e]) + "px";
                }
                var t = h.getAbsRect(A), n = h.getAbsRect(R);
                if (n.left != t.left && e("left", "marginLeft", !1), n.top != t.top && e("top", "marginTop", !1), 
                R.clientWidth == A.clientWidth || g.isFF() ? n.width != t.width && (H.width = t.width) : n.width != t.width ? R.style.width = t.width : e("clientWidth", "width", !0), 
                g.isFF()) {
                    var r = v.css(A.parentNode, [ "margin-left", "margin-top", "position" ]);
                    r && (r.marginLeft || r.marginTop) && "static" == r.position && (A.parentNode.style.position = "relative", 
                    A.parentNode.style.overflow = "");
                }
                n.height != t.height && (V.parent.height = t.height);
            }
            function _() {
                function e(e, t) {
                    return b.isFacebookSite() ? e.nextElementSibling && e.nextElementSibling.childNodes[0] != t : e.nextElementSibling != t;
                }
                var t = function(e) {
                    return P.contains && P.contains(e) || v.elementInDocument(e, P);
                };
                I && t(A) && (e(I, A) || !t(I)) && v.insertBefore(I, M);
            }
            function w(e) {
                return R.querySelector(".gr_" + e);
            }
            function k() {
                var e = O.current();
                q = [];
                for (var t = R.scrollTop, n = function(e) {
                    return {
                        x1: e.left,
                        x2: e.right,
                        y1: e.top + t,
                        y2: e.bottom + t
                    };
                }, r = 0; r < e.length; r++) {
                    var a = e[r], o = w(a.id);
                    if (o) {
                        E(o);
                        var i = h.getPos(o, R), l = {
                            x1: i.x,
                            x2: i.x + o.offsetWidth,
                            y1: i.y,
                            y2: i.y + o.offsetHeight + 5
                        }, s = {
                            match: a,
                            el: o,
                            box: l
                        };
                        q.push(s);
                        var u = o.textContent.trim().split(" ").length > 1;
                        if (u) {
                            var c = o.getClientRects();
                            c.length < 2 || (s.rects = p["default"].map(c, n));
                        }
                    }
                }
            }
            function E(e) {
                e.setAttribute("style", e.parentNode.getAttribute("style")), !e.classList.contains("gr_disable_anim_appear") && e.addEventListener("animationend", function() {
                    return e.classList.add("gr_disable_anim_appear");
                }), v.css(e, {
                    display: "",
                    padding: "",
                    margin: "",
                    width: ""
                });
            }
            function C(e, t, n, r) {
                for (var a = R.scrollTop, o = 0; o < q.length; o++) {
                    var i = q[o], l = i.box;
                    if (e >= l.x1 && e <= l.x2 && t >= l.y1 - a && t <= l.y2 - a) return i;
                    if (i.rects) for (var s = 0; s < i.rects.length; s++) {
                        var u = i.rects[s], c = e + n, d = t + r;
                        if (c >= u.x1 && c <= u.x2 && d >= u.y1 - a && d <= u.y2 - a) return i;
                    }
                }
            }
            function T() {
                clearTimeout(z), g.cancelInterval(u);
            }
            function j() {
                I.style.display = "none", g.isSafari() && (A.style.background = "", A.style.backgroundColor = ""), 
                A.style.background = W, g.cancelInterval(u), setTimeout(function() {
                    return Y.emit("render");
                }, 300), F = !1, I.parentNode && I.parentNode.removeChild(I);
            }
            function S() {
                F || (I.style.display = "", I.parentNode || v.insertBefore(I, M), u(), r());
            }
            function N() {
                T(), v.unlisten(A, X), j();
            }
            var A = e.el, M = b.isFacebookSite() ? A.parentNode : A, P = A.ownerDocument, $ = P.defaultView, O = e.editor || {
                current: function() {
                    return [];
                }
            }, D = e.id, I = void 0, R = void 0, L = void 0, F = !1, G = void 0, U = "", B = !1, V = {
                parent: {},
                child: {}
            }, H = {}, W = void 0, z = void 0, q = [], K = y["default"](P).getFixesForCurrentDomain(), Y = s["default"]({
                render: u,
                getStyle: o,
                setText: i,
                generateAlertPositions: k,
                remove: N,
                hide: j,
                show: S
            }), X = {
                mousemove: n,
                mouseenter: t,
                keyup: r,
                scroll: r
            };
            return Y;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/helpers/extends"), i = r(o), l = e("emitter"), s = r(l), u = e("react"), c = r(u), d = e("react-dom"), f = r(d), m = e("lodash"), p = r(m), g = e("../util"), b = e("lib/location"), h = e("../position"), v = e("../dom"), _ = e("../sites"), y = r(_);
        n["default"] = a;
        var w = {
            style: {
                child: {
                    display: "inline-block",
                    "line-height": "initial",
                    color: "transparent",
                    overflow: "hidden",
                    "text-align": "left",
                    "float": "initial",
                    clear: "none",
                    "box-sizing": "border-box",
                    "vertical-align": "baseline",
                    "white-space": "pre-wrap",
                    width: "100%",
                    margin: 0,
                    padding: 0,
                    border: 0
                },
                parent: {
                    position: "absolute",
                    color: "transparent",
                    "border-color": "transparent !important",
                    overflow: "hidden",
                    "white-space": "pre-wrap"
                },
                src: {}
            },
            attrs: {},
            val: ""
        }, x = c["default"].createClass({
            displayName: "GhostComponent",
            getDefaultProps: function() {
                return w;
            },
            render: function() {
                var e = p["default"].merge(w.style, this.props.style), t = this.props.attrs, n = v.camelizeAttrs(e.parent), r = v.camelizeAttrs(e.child), a = this.props.val;
                return c["default"].createElement("div", i["default"]({
                    style: n
                }, t, {
                    gramm: !0
                }), c["default"].createElement("span", {
                    style: r,
                    dangerouslySetInnerHTML: {
                        __html: a
                    }
                }), c["default"].createElement("br", null));
            }
        });
        t.exports = n["default"];
    }, {
        "../dom": 179,
        "../position": 227,
        "../sites": 232,
        "../util": 251,
        "babel-runtime/helpers/extends": 21,
        emitter: "emitter",
        "lib/location": 216,
        lodash: "lodash",
        react: "react",
        "react-dom": "react-dom"
    } ],
    211: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            function t() {
                return F = R(U), F.on("exit", T), F.dom.insertGhost = w, L = u["default"]({
                    id: A,
                    el: j,
                    editor: F
                }), U.gh = L, F.ghostarea = U, F._run = F.run, F.run = n, F;
            }
            function n() {
                r("on"), D = !0, M = a(), F._run(), L.show();
            }
            function r() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? "on" : arguments[0], t = "on" == e ? o.listen : o.unlisten;
                t(j, "input", d), t(j, "keyup", _), t(j, "keydown", y), t(N, "click", g, null, !0), 
                L[e]("render", h), F[e]("rendered", k), F.isHtmlGhost || (F[e]("beforeReplace", m), 
                F[e]("afterReplace", x));
            }
            function a() {
                return "TEXTAREA" == j.tagName ? j.value : j.parentNode ? p["default"].getText(j) : "";
            }
            function s(e) {
                j.value = e;
            }
            function d() {
                D && (M = a());
            }
            function m() {
                O = j.scrollTop;
            }
            function g(e) {
                return l.isFacebookSite() && o.matchesSelector(e.target, G) ? v() : void 0;
            }
            function b() {
                var e = S.createEvent("TextEvent");
                e.initTextEvent ? F.latestCursor.s == F.latestCursor.e && (e.initTextEvent("textInput", !0, !0, null, String.fromCharCode(8203), 1, "en-US"), 
                setTimeout(function() {
                    F.saveCursor(), F.skipInputEvents(), j.dispatchEvent(e), setTimeout(function() {
                        s(a().replace(String.fromCharCode(8203), "")), F.restoreCursor(), F.skipInputEvents(!1);
                    }, 50);
                }, 50)) : (o.runKeyEvent({
                    el: j,
                    type: "keydown"
                }), o.runKeyEvent({
                    el: j,
                    type: "keyup"
                })), j.scrollTop = O, M = a();
            }
            function h() {
                if ((0 == M.length && a().length > 0 || I) && (M = a(), I = !1), D) {
                    M = M.replace(new RegExp(String.fromCharCode(8203), "g"), "");
                    var e = c.diffPos(M, a()), t = 1 != M.indexOf("@") && -1 == a().indexOf("@");
                    e.delta >= 2 && 0 == e.s && (P || $) && !t && v();
                }
            }
            function v() {
                D && (E(), F.clearData());
            }
            function _(e) {
                F.camouflage();
            }
            function y(e) {
                $ = 13 == i.keyCode(e);
            }
            function w() {
                return L.render(), {
                    clone: L.clone,
                    cloneVal: L.cloneVal
                };
            }
            function x() {
                setTimeout(b, 50);
            }
            function k() {
                L.generateAlertPositions();
            }
            function E() {
                D && L.hide();
            }
            function C() {
                D = !0, L.show();
            }
            function T() {
                r("off"), F && (F.off("exit", T), F.remove(), F = null), U.emit("exit"), j.removeAttribute("data-gramm"), 
                j.removeAttribute("data-txt_gramm_id"), L && (L.remove(), L = null);
            }
            var j = e.el, S = j.ownerDocument, N = S.defaultView, A = e.id, M = a(), P = !1, $ = !1, O = void 0, D = !1, I = void 0, R = e.createEditor, L = void 0, F = void 0;
            j.setAttribute("data-gramm", ""), j.setAttribute("data-txt_gramm_id", A);
            var G = "div[role=navigation] li[role=listitem] *", U = f["default"]({
                el: j,
                id: A,
                hideClone: E,
                showClone: C,
                insertGhost: w,
                remove: T,
                run: n
            });
            return t();
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n["default"] = a;
        var o = e("../dom"), i = e("../util"), l = e("lib/location"), s = e("./ghost"), u = r(s), c = e("textdiff"), d = e("emitter"), f = r(d), m = e("wrap"), p = r(m);
        t.exports = n["default"];
    }, {
        "../dom": 179,
        "../util": 251,
        "./ghost": 210,
        emitter: "emitter",
        "lib/location": 216,
        textdiff: "textdiff",
        wrap: "wrap"
    } ],
    212: [ function(e, t, n) {
        "use strict";
        function r() {
            return s.HTML_GHOST_SITES.includes(f);
        }
        function a() {
            return "[contenteditable]";
        }
        function o() {
            return l.isFacebookSite() ? u.facebookRewriteFunction : l.isJiraSite() ? (d.call("felog.info", "init_on_jira"), 
            c.jiraRewriteFunction) : void 0;
        }
        function i() {
            return l.isJiraSite() ? c.jiraGhostListener : void 0;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var l = e("lib/location"), s = e("../page-config/defaults"), u = e("./facebook-ghost"), c = e("./jira-ghost"), d = e("lib/tracking"), f = l.getDomain();
        n["default"] = {
            isHtmlGhostSite: r,
            getHtmlGhostSelector: a,
            getClientScriptFunction: o,
            getGhostListener: i
        }, t.exports = n["default"];
    }, {
        "../page-config/defaults": 221,
        "./facebook-ghost": 209,
        "./jira-ghost": 214,
        "lib/location": 216,
        "lib/tracking": 247
    } ],
    213: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("under"), o = e("wrap"), i = r(o), l = e("lib/util"), s = e("./facebook-ghost"), u = e("lib/location"), c = function(e) {
            var t = e.editor, n = e.el, r = n.ownerDocument, o = a.HtmlDom(e), c = a.TextareaDom(e);
            return c.safeFocus = function() {
                var e = r.body.scrollTop;
                n.focus(), r.body.scrollTop = e;
            }, c.getCursor = function() {
                return o.getCursor();
            }, c.setCursor = function(e) {
                c.cursor = e, c._setCursor();
            }, c._setCursor = function() {
                i["default"].invalidateNode(n), o.setCursor(c.cursor);
            }, c.getText = function() {
                return n.parentNode ? (i["default"].invalidateNode(n), delete n.__getText, i["default"].getText(n)) : "";
            }, c.replace = function(e, n, r) {
                t.inputListener.ignorePaste = !0, c.doReplace(e, n), e.replaced = !r, e.inDom = !r, 
                t.inputListener.ignorePaste = !1;
            }, c.doReplace = function(e, t) {
                var n = c.getText();
                n = n.substring(0, e.s) + t + n.substr(e.e), c.setTextareaValueSync(n), l.asyncCall(c._setCursor);
            }, c.setTextareaValueSync = function(e) {
                n.innerText = e, i["default"].invalidateNode(n), c.safeFocus();
            }, c.setTextareaValue = function(e) {
                c.safeFocus(), l.asyncCall(function() {
                    n.innerText = e, i["default"].invalidateNode(n);
                });
            }, u.isFacebookSite() && s.extendDom(n, c), c;
        };
        n["default"] = c, t.exports = n["default"];
    }, {
        "./facebook-ghost": 209,
        "lib/location": 216,
        "lib/util": 251,
        under: "under",
        wrap: "wrap"
    } ],
    214: [ function(e, t, n) {
        "use strict";
        function r() {
            o.listen(document, "jira-inline-support", function(e) {
                var t = e.activated, n = t ? "jira-inline-support-activated" : "jira-inline-support-deactivated";
                i.call("felog.info", n);
            });
        }
        function a() {
            function e(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], n = document.createEvent("CustomEvent");
                n.initCustomEvent(e + "-gr", !0, !0, t), document.dispatchEvent(n);
            }
            function t(e, t) {
                var n = arguments.length <= 2 || void 0 === arguments[2] ? 10 : arguments[2];
                if (e) {
                    for (;e && e != document.body && !t(e) && n > 0; ) e = e.parentElement, n--;
                    return e && t(e);
                }
            }
            function n(e) {
                return t(e, function(e) {
                    return e.classList && e.classList.contains("inline-edit-fields");
                });
            }
            function r(e) {
                return t(e, function(e) {
                    return "function" == typeof e.matches && e.matches("grammarly-card, .gr-top-zero");
                });
            }
            function a(e, t) {
                var n = t && t.getAttribute("data-action");
                "editor" != n && "login" != n && e.focus();
            }
            function o(e) {
                var t = e.target, o = e.relatedTarget || e.explicitOriginalTarget;
                o && t && n(t) && r(o) && (e.stopImmediatePropagation(), a(t, o));
            }
            document.addEventListener("blur", o, !0), document.addEventListener("DOMContentLoaded", function() {
                function t() {
                    return "jira" === document.body.id && document.body.getAttribute("data-version") || document.querySelector("input[type=hidden][title=JiraVersion]");
                }
                t() ? e("jira-inline-support", {
                    activated: !0
                }) : (e("jira-inline-support", {
                    activated: !1
                }), document.removeEventListener("blur", o, !0));
            });
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("lib/dom"), i = e("lib/tracking");
        n["default"] = {
            jiraRewriteFunction: a,
            jiraGhostListener: r
        }, t.exports = n["default"];
    }, {
        "lib/dom": 179,
        "lib/tracking": 247
    } ],
    215: [ function(e, t, n) {
        "use strict";
        function r(e, t) {
            function n() {
                r(), c = setTimeout(p, l), d = setTimeout(p, 1e3 * s[0]), f = setTimeout(p, 1e3 * s[1]), 
                m = setTimeout(p, 1e3 * s[2]);
            }
            function r() {
                u = 0, clearTimeout(c), clearTimeout(d), clearTimeout(f), clearTimeout(m);
            }
            var l = arguments.length <= 2 || void 0 === arguments[2] ? o : arguments[2], s = arguments.length <= 3 || void 0 === arguments[3] ? [ 30, 60, 120 ] : arguments[3], u = 0, c = void 0, d = void 0, f = void 0, m = void 0, p = function g() {
                return i > u ? (l == o && e(), c = setTimeout(g, l), void u++) : (a.call("felog.error", "infinity_check_reset_fail", {
                    delay: l
                }), void console.error("Infinity check reset fails, change to the offline state."));
            };
            return {
                start: n,
                finish: r
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n["default"] = r;
        var a = e("./tracking"), o = 2e4, i = 3;
        t.exports = n["default"];
    }, {
        "./tracking": 247
    } ],
    216: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a() {
            return new f["default"](function(e) {
                var t = setTimeout(function() {
                    return b["default"].tabs.getCurrentTabUrl(e);
                }, 2e3);
                b["default"].tabs.getCurrentTabUrl(function(n) {
                    clearTimeout(t), e(n);
                });
            });
        }
        function o(e, t) {
            return h.isFunction(e) && (t = e, e = ""), t ? !h.isBgOrPopup() && b["default"] ? void p["default"].emitBackground("get-domain", {}, t) : void (b["default"] && b["default"].tabs ? a().then(function(e) {
                return t(s(e));
            }) : t(l(e))) : l(e);
        }
        function i(e) {
            return !h.isBgOrPopup() && b["default"] ? p["default"].promiseBackground("get-domain") : b["default"] && b["default"].tabs ? f["default"].race([ a().then(s), h.delay(1e4).then(function() {
                throw new Error("Request to forge.tabs.getCurrentTabUrl rejected by timeout");
            }) ]) : l(e);
        }
        function l(e) {
            var t = e && e.ownerDocument || document, n = t.location || t.defaultView.location;
            return n ? w(n.hostname) : "";
        }
        function s(e) {
            if (h.isFF() && /^about:/.test(e)) return e;
            var t = document.createElement("a");
            return t.href = e, w(t.hostname);
        }
        function u(e) {
            var t = e && e.ownerDocument || document, n = t.location || t.defaultView.location;
            return n ? n.pathname + n.search : "";
        }
        function c() {
            for (var e = new RegExp("^(?:[a-z]+:)?//", "i"), t = "", n = document.getElementsByTagName("link"), r = 0; r < n.length; r++) {
                var a = n[r], o = '"' + a.getAttribute("rel") + '"', i = /(\"icon )|( icon\")|(\"icon\")|( icon )/i;
                -1 != o.search(i) && (t = a.getAttribute("href"));
            }
            return t || (t = "favicon.ico"), e.test(t) ? t : "/" != t[0] ? "//" + document.location.host + document.location.pathname + t : "//" + document.location.host + t;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var d = e("babel-runtime/core-js/promise"), f = r(d), m = e("./message"), p = r(m), g = e("./forge"), b = r(g), h = e("./util"), v = e("./page-config/defaults"), _ = function() {
            return v.FACEBOOK_SITES.includes(o());
        }, y = function() {
            return /grammarly.atlassian.net/.test(o());
        }, w = function(e) {
            return e.replace("www.", "");
        };
        n["default"] = {
            getDomain: o,
            isFacebookSite: _,
            isJiraSite: y,
            currentUrl: a,
            promiseGetDomain: i,
            domainFromUrl: s,
            getFavicon: c,
            getUrl: u
        }, t.exports = n["default"];
    }, {
        "./forge": 208,
        "./message": 217,
        "./page-config/defaults": 221,
        "./util": 251,
        "babel-runtime/core-js/promise": 13
    } ],
    217: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e, t) {
            function n() {
                i(e, n);
                for (var r = arguments.length, a = Array(r), o = 0; r > o; o++) a[o] = arguments[o];
                t.apply(this, a);
            }
            o(e, n);
        }
        function o(e, t, n, r) {
            if ("__bgerror" == e) return E.on("__bgerror", t);
            var a = C[e] = C[e] || [];
            if (a.length) a.push(t); else {
                a.push(t);
                try {
                    w["default"].message.listen(e, function() {
                        var e = !0, t = !1, n = void 0;
                        try {
                            for (var r, o = g["default"](a); !(e = (r = o.next()).done); e = !0) {
                                var i = r.value;
                                i.apply(void 0, arguments);
                            }
                        } catch (l) {
                            t = !0, n = l;
                        } finally {
                            try {
                                !e && o["return"] && o["return"]();
                            } finally {
                                if (t) throw n;
                            }
                        }
                    }, n, r);
                } catch (o) {
                    T(o);
                }
            }
        }
        function i(e, t) {
            if ("__bgerror" == e) return E.off("__bgerror", t);
            var n = C[e];
            if (n) {
                var r = n.indexOf(t);
                -1 != r && n.splice(r, 1), 0 == n.length && delete C[e];
            }
        }
        function l(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], n = arguments[2], r = arguments[3];
            try {
                w["default"].message.broadcast(e, t, n, r);
            } catch (a) {
                T(a);
            }
        }
        function s(e, t) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2], r = arguments[3], a = arguments[4];
            try {
                if (!e) throw TypeError("emitTo can't be used without destination point");
                w["default"].message.sendTo(e, t, n, r, a);
            } catch (o) {
                T(o);
            }
        }
        function u(e, t, n, r) {
            try {
                w["default"].message.toFocussed(e, t, n, r);
            } catch (a) {
                T(a);
            }
        }
        function c(e, t, n, r) {
            try {
                w["default"].message.broadcastBackground(e, t, n, r);
            } catch (a) {
                T(a);
            }
        }
        function d(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], n = arguments.length <= 2 || void 0 === arguments[2] ? 1e4 : arguments[2], r = new m["default"](function(n, r) {
                try {
                    w["default"].message.broadcastBackground(e, t, n, r);
                } catch (a) {
                    r(a), T(a);
                }
            });
            return m["default"].race([ r, x.delay(n).then(function() {
                throw new Error("Request to bg page (" + e + ") rejected by timeout");
            }) ]);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var f = e("babel-runtime/core-js/promise"), m = r(f), p = e("babel-runtime/core-js/get-iterator"), g = r(p), b = e("lodash"), h = r(b), v = e("emitter"), _ = r(v), y = e("./forge"), w = r(y), x = e("./util"), k = e("./dom"), E = _["default"]({}), C = {}, T = h["default"].throttle(function(e) {
            return E.emit("__bgerror", e);
        }, 1e3);
        x.isBg() && k.listen(document, "grammarly:offline", function() {
            return T("proxy dead");
        }), n["default"] = {
            on: o,
            one: a,
            off: i,
            emitError: T,
            emitTabs: l,
            emitTo: s,
            emitFocusedTab: u,
            emitBackground: c,
            promiseBackground: d
        }, t.exports = n["default"];
    }, {
        "./dom": 179,
        "./forge": 208,
        "./util": 251,
        "babel-runtime/core-js/get-iterator": 2,
        "babel-runtime/core-js/promise": 13,
        emitter: "emitter",
        lodash: "lodash"
    } ],
    218: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/core-js/object/keys"), o = r(a), i = e("babel-runtime/core-js/object/get-prototype-of"), l = r(i), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("babel-runtime/helpers/possibleConstructorReturn"), m = r(f), p = e("babel-runtime/helpers/inherits"), g = r(p), b = e("./defaults"), h = e("lib/location"), v = e("./config-loader"), _ = r(v), y = function(e) {
            function t() {
                var e, n, r, a;
                u["default"](this, t);
                for (var o = arguments.length, i = Array(o), s = 0; o > s; s++) i[s] = arguments[s];
                return n = r = m["default"](this, (e = l["default"](t)).call.apply(e, [ this ].concat(i))), 
                r.invalidate = function() {
                    return r.load();
                }, a = n, m["default"](r, a);
            }
            return g["default"](t, e), d["default"](t, [ {
                key: "getByPage",
                value: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? h.getUrl() : arguments[1];
                    if (e) {
                        var n = o["default"](e).find(function(e) {
                            return new RegExp(e).test(t);
                        });
                        return e[n];
                    }
                }
            }, {
                key: "get",
                value: function(e, t) {
                    var n = this.config.pageConfig[e] || this.config.partials.find(function(t) {
                        return e.includes(t.domain);
                    });
                    if (n && n.enabled === !1) return n;
                    var r = this.getByPage(n && n.pages, t), a = r || n || {};
                    return a.enabled = a.enabled !== !1, a;
                }
            }, {
                key: "toReload",
                value: function(e) {
                    return 0 == e.indexOf("http") && b.SITES_TO_RELOAD.some(function(t) {
                        return e.includes(t);
                    });
                }
            } ]), t;
        }(_["default"]);
        n["default"] = y, t.exports = n["default"];
    }, {
        "./config-loader": 219,
        "./defaults": 221,
        "babel-runtime/core-js/object/get-prototype-of": 9,
        "babel-runtime/core-js/object/keys": 10,
        "babel-runtime/helpers/classCallCheck": 18,
        "babel-runtime/helpers/createClass": 19,
        "babel-runtime/helpers/inherits": 22,
        "babel-runtime/helpers/possibleConstructorReturn": 24,
        "lib/location": 216
    } ],
    219: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/regenerator"), o = r(a), i = e("babel-runtime/helpers/asyncToGenerator"), l = r(i), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("./localforage"), m = r(f), p = e("lib/request"), g = e("lib/config"), b = e("lib/tracking"), h = e("lib/bg/prefs"), v = r(h), _ = e("./meta"), y = r(_), w = e("./utils"), x = e("./decorator"), k = e("lib/profiler"), E = r(k), C = 6e4, T = "Config missed", j = "Config malformed", S = function() {
            function e() {
                u["default"](this, e);
            }
            return d["default"](e, [ {
                key: "init",
                value: function() {
                    function e() {
                        return t.apply(this, arguments);
                    }
                    var t = l["default"](o["default"].mark(function n() {
                        var e;
                        return o["default"].wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return E["default"].start("pageConfig_init"), e = {}, t.next = 4, this.isSkipConfig();

                              case 4:
                                if (!t.sent) {
                                    t.next = 8;
                                    break;
                                }
                                console.warn("Config: use default config in DEBUG mode (skipConfig=true)"), t.next = 11;
                                break;

                              case 8:
                                return t.next = 10, this.loadFromStorage();

                              case 10:
                                e = t.sent;

                              case 11:
                                return this.config = e, t.next = 14, new y["default"]().load();

                              case 14:
                                return this.meta = t.sent, E["default"].stop("pageConfig_init"), t.abrupt("return", this);

                              case 17:
                              case "end":
                                return t.stop();
                            }
                        }, n, this);
                    }));
                    return e;
                }()
            }, {
                key: "isSkipConfig",
                value: function() {
                    function e() {
                        return t.apply(this, arguments);
                    }
                    var t = l["default"](o["default"].mark(function n() {
                        return o["default"].wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (e.t0 = !1, !e.t0) {
                                    e.next = 5;
                                    break;
                                }
                                return e.next = 4, v["default"].get("skipConfig");

                              case 4:
                                e.t0 = e.sent;

                              case 5:
                                return e.abrupt("return", e.t0);

                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, n, this);
                    }));
                    return e;
                }()
            }, {
                key: "load",
                value: function() {
                    function e() {
                        return t.apply(this, arguments);
                    }
                    var t = l["default"](o["default"].mark(function n() {
                        var e, t, r, a;
                        return o["default"].wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (e = this.meta.config, t = e.date, r = e.interval, !(t + r > new Date())) {
                                    n.next = 7;
                                    break;
                                }
                                return a = (t + r - new Date()) / 1e3 / 60, console.info("Config: next update in " + a.toFixed(2) + " m"), 
                                n.abrupt("return");

                              case 7:
                                return console.info("Config: going to update config from CDN..."), n.abrupt("return", this.updateFromCDN());

                              case 9:
                              case "end":
                                return n.stop();
                            }
                        }, n, this);
                    }));
                    return e;
                }()
            }, {
                key: "updateFromCDN",
                value: function() {
                    function e() {
                        return t.apply(this, arguments);
                    }
                    var t = l["default"](o["default"].mark(function n() {
                        var e;
                        return o["default"].wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return e = void 0, t.prev = 1, b.call("statsc.ui.increment", "stability:page_config_cdn_update"), 
                                t.next = 5, p.fetch(g.URLS.pageConfigUrl, {
                                    timeout: C
                                });

                              case 5:
                                if (e = t.sent, w.isValid(e)) {
                                    t.next = 8;
                                    break;
                                }
                                throw new Error(j);

                              case 8:
                                this.config = e, this.save(e), t.next = 16;
                                break;

                              case 12:
                                t.prev = 12, t.t0 = t["catch"](1), b.call("felog.error", "page_config_cdn_load_error", {
                                    error: t.t0
                                }), this.saveOnError("Config: can't get valid config - " + t.t0.message, e);

                              case 16:
                              case "end":
                                return t.stop();
                            }
                        }, n, this, [ [ 1, 12 ] ]);
                    }));
                    return e;
                }()
            }, {
                key: "loadFromStorage",
                value: function() {
                    function e() {
                        return t.apply(this, arguments);
                    }
                    var t = l["default"](o["default"].mark(function n() {
                        var e;
                        return o["default"].wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.prev = 0, t.next = 3, m["default"].getItem("config");

                              case 3:
                                if (e = t.sent) {
                                    t.next = 6;
                                    break;
                                }
                                throw new Error(T);

                              case 6:
                                if (w.isValid(e)) {
                                    t.next = 8;
                                    break;
                                }
                                throw new Error(j);

                              case 8:
                                return console.info("Config: loaded from local storage successfully"), t.abrupt("return", e);

                              case 12:
                                t.prev = 12, t.t0 = t["catch"](0), T === t.t0.message ? b.call("statsc.ui.increment", "stability:page_config_missed_from_storage") : b.call("felog.error", "page_config_local_storage_load_error", {
                                    error: t.t0
                                }), console.warn("Config: cannot get valid config from storage: " + t.t0);

                              case 16:
                              case "end":
                                return t.stop();
                            }
                        }, n, this, [ [ 0, 12 ] ]);
                    }));
                    return e;
                }()
            }, {
                key: "save",
                value: function(e) {
                    var t = e.interval, n = e.protocolVersion, r = e.version;
                    m["default"].setItem("config", e), this.fireVersionUpdate(r, this.meta.config.version), 
                    this.meta.set({
                        date: this.getCurrentTimestamp(),
                        status: "success",
                        interval: t,
                        protocolVersion: n,
                        version: r
                    }), console.info("Config: new config saved to local storage successfully:", e.version, e);
                }
            }, {
                key: "saveOnError",
                value: function(e, t) {
                    var n = this.meta.config, r = n.interval, a = n.protocolVersion, o = n.version;
                    console.warn(e, t), this.meta.set({
                        date: this.getCurrentTimestamp(),
                        status: "failed",
                        interval: r,
                        protocolVersion: a,
                        version: o,
                        info: e
                    });
                }
            }, {
                key: "fireVersionUpdate",
                value: function(e, t) {
                    e && t != e && b.call("felog.info", "page_config_updated", e);
                }
            }, {
                key: "getCurrentTimestamp",
                value: function() {
                    return +new Date();
                }
            }, {
                key: "config",
                set: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    this._config = x.decorateConfig(e);
                },
                get: function() {
                    return this._config;
                }
            } ]), e;
        }();
        n["default"] = S, t.exports = n["default"];
    }, {
        "./decorator": 220,
        "./localforage": 223,
        "./meta": 224,
        "./utils": 225,
        "babel-runtime/helpers/asyncToGenerator": 17,
        "babel-runtime/helpers/classCallCheck": 18,
        "babel-runtime/helpers/createClass": 19,
        "babel-runtime/regenerator": 123,
        "lib/bg/prefs": 160,
        "lib/config": 175,
        "lib/profiler": 228,
        "lib/request": 229,
        "lib/tracking": 247
    } ],
    220: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            return y.decorate(e);
        }
        function o(e) {
            var t = _.merge({
                pageConfig: {}
            }, e);
            return t.pageConfig || (t.pageConfig = {}), t;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.RawConfigDecorator = void 0;
        var i = e("babel-runtime/helpers/defineProperty"), l = r(i), s = e("babel-runtime/core-js/object/keys"), u = r(s), c = e("babel-runtime/helpers/extends"), d = r(c), f = e("babel-runtime/helpers/classCallCheck"), m = r(f), p = e("babel-runtime/helpers/createClass"), g = r(p);
        n.decorateConfig = a, n.deepCopyWithDefault = o;
        var b = e("../config"), h = e("./defaults"), v = e("../util"), _ = e("lodash"), y = n.RawConfigDecorator = function() {
            function e() {
                m["default"](this, e);
            }
            return g["default"](e, null, [ {
                key: "decorate",
                value: function(e) {
                    var t = this;
                    return [ "filterByVersion", "withDefault", "parseBooleans", "parseBrowserValues", "filterInvalidPageRegexp", "collectPartials" ].reduce(function(e, n) {
                        return t[n](e);
                    }, e || {});
                }
            }, {
                key: "withDefault",
                value: function(e) {
                    e = o(e);
                    var t = h.PAGE_CONFIG && h.PAGE_CONFIG.pageConfig || {};
                    h.OVERRIDE_PAGE_CONFIG || {};
                    return e.pageConfig = _.merge({}, t, e.pageConfig), e;
                }
            }, {
                key: "filterByVersion",
                value: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? b.getVersion() : arguments[1];
                    e = o(e);
                    var n = e.pageConfig;
                    return e.pageConfig = u["default"](n).filter(function(e) {
                        var r = n[e], a = r.version;
                        return !a || "*" === a || 1 !== v.versionComparator(t, a);
                    }).reduce(function(e, t) {
                        return d["default"]({}, e, l["default"]({}, t, n[t]));
                    }, {}), e;
                }
            }, {
                key: "parseBooleans",
                value: function(e) {
                    function t(e) {
                        return !(e === !1 || "false" == e);
                    }
                    function n(e) {
                        return e ? t(e) : !1;
                    }
                    e = o(e);
                    var r = e.pageConfig;
                    return u["default"](r).forEach(function(e) {
                        r[e] || (r[e] = {});
                        var a = r[e];
                        a.enabled = t(a.enabled), a.matchPartOfUrl = n(a.matchPartOfUrl), a.pages && u["default"](a.pages).forEach(function(e) {
                            a.pages[e].enabled = t(a.pages[e].enabled);
                        });
                    }), e;
                }
            }, {
                key: "parseBrowserValues",
                value: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? v.getBrowser() : arguments[1];
                    e = o(e);
                    var n = e.pageConfig;
                    return u["default"](n).map(function(e) {
                        var r = n[e] && n[e].disabledBrowsers;
                        r && r.includes(t) && (n[e].enabled = !1);
                    }), e;
                }
            }, {
                key: "filterInvalidPageRegexp",
                value: function(e) {
                    e = o(e);
                    var t = e.pageConfig;
                    return u["default"](t).forEach(function(e) {
                        var n = t[e];
                        n.pages && (n.pages = u["default"](n.pages).filter(function(e) {
                            try {
                                return new RegExp(e);
                            } catch (t) {
                                return !1;
                            }
                        }).reduce(function(e, t) {
                            return d["default"]({}, e, l["default"]({}, t, n.pages[t]));
                        }, {}));
                    }), e;
                }
            }, {
                key: "collectPartials",
                value: function(e) {
                    e = o(e);
                    var t = e.pageConfig;
                    e.partials = [];
                    try {
                        e.partials = u["default"](t).filter(function(e) {
                            return t[e].matchPartOfUrl;
                        }).map(function(e) {
                            return d["default"]({
                                domain: e
                            }, t[e]);
                        });
                    } catch (n) {
                        console.warn("Cannot collect partials from config");
                    }
                    return e;
                }
            } ]), e;
        }();
    }, {
        "../config": 175,
        "../util": 251,
        "./defaults": 221,
        "babel-runtime/core-js/object/keys": 10,
        "babel-runtime/helpers/classCallCheck": 18,
        "babel-runtime/helpers/createClass": 19,
        "babel-runtime/helpers/defineProperty": 20,
        "babel-runtime/helpers/extends": 21,
        lodash: "lodash"
    } ],
    221: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, o = e("babel-runtime/helpers/defineProperty"), i = r(o), l = e("lodash"), s = e("lib/config"), u = "1.0", c = [ "inbox.google.com", "mail.google.com", "yahoo.com", "mail.live.com", "facebook.com", "tumblr.com", "stackoverflow.com", "wordpress.com", "wordpress.org", "blogspot.com" ], d = [ "facebook.com", "messenger.com", "work.fb.com", "business.facebook.com" ], f = [ "twitter.com" ].concat(d), m = {
            "drive.google.com": {
                title: "Google Drive",
                message: 'We hope to support Google Drive apps<br/> in the future, but for now please use your</br> <a class="openGrammarly" href="' + s.URLS.app + '">Grammarly Editor</a>.'
            },
            "docs.google.com": {
                title: "Google Drive",
                message: 'We hope to support Google Drive apps<br/> in the future, but for now please use your</br> <a class="openGrammarly" href="' + s.URLS.app + '">Grammarly Editor</a>.'
            }
        }, p = 18e5, g = p, b = [ 6e5, g, 36e5, 108e5, 432e5, 864e5, 31536e6 ], h = {}, v = (a = {
            version: {
                enabled: !1,
                servicePage: !0
            },
            extensions: {
                enabled: !1,
                servicePage: !0
            },
            settings: {
                enabled: !1,
                servicePage: !0
            },
            "com.safari.grammarlyspellcheckergrammarchecker": {
                enabled: !1,
                matchPartOfUrl: !0,
                servicePage: !0
            }
        }, i["default"](a, "app." + s.GRAMMARLY_DOMAIN, {
            enabled: !1,
            grammarlyEditor: !0
        }), i["default"](a, "linkedin.com", {
            pages: {
                "/messaging": {
                    afterReplaceEvents: [ "input" ]
                }
            }
        }), i["default"](a, "plus.google.com", {
            afterReplaceEvents: [ "keyup" ],
            minFieldHeight: 0,
            minFieldWidth: 0
        }), i["default"](a, "facebook.com", {
            minFieldHeight: 0
        }), i["default"](a, "mail.google.com", {
            fields: [ {
                name: "to"
            }, {
                name: "cc"
            }, {
                name: "bcc"
            }, {
                className: "vO"
            } ],
            subframes: !1
        }), i["default"](a, "drive.google.com", {
            track: !0
        }), i["default"](a, "docs.google.com", {
            track: !0
        }), i["default"](a, "app.asana.com", {
            fields: [ {
                className: "task-row-text-input"
            } ]
        }), i["default"](a, "tumblr.com", {
            fields: [ {
                attr: [ "aria-label", "Post title" ]
            }, {
                attr: [ "aria-label", "Type or paste a URL" ]
            } ]
        }), a), _ = {
            "hootsuite.com": {
                enabled: !1
            },
            "chrome.google.com": {
                enabled: !1
            },
            "facebook.com": {
                enabled: !0,
                pages: {
                    ".*/notes": {
                        enabled: !1
                    }
                }
            },
            "onedrive.live.com": {
                enabled: !1
            },
            "docs.com": {
                enabled: !1
            },
            "sp.docs.com": {
                enabled: !1
            },
            "docs.google.com": {
                enabled: !1
            },
            "drive.google.com": {
                enabled: !1
            },
            "texteditor.nsspot.net": {
                enabled: !1
            },
            "jsbin.com": {
                enabled: !1
            },
            "jsfiddle.net": {
                enabled: !1
            },
            "quora.com": {
                enabled: !1
            },
            "paper.dropbox.com": {
                enabled: !1
            },
            "mail.live.com": {
                enabled: !1,
                matchPartOfUrl: !0
            },
            "imperavi.com": {
                enabled: !1
            },
            "usecanvas.com": {
                enabled: !1
            }
        }, y = {
            pageConfig: l.merge({}, _, v)
        };
        n["default"] = {
            PAGE_CONFIG: y,
            OVERRIDE_PAGE_CONFIG: h,
            PAGE_CONFIG_DEFAULT_INTERVAL: g,
            PAGE_CONFIG_UPDATE_INTERVALS: b,
            PROTOCOL_VERSION: u,
            SITES_TO_RELOAD: c,
            CUSTOM_UNSUPPORTED_MESSAGES: m,
            FACEBOOK_SITES: d,
            HTML_GHOST_SITES: f
        }, t.exports = n["default"];
    }, {
        "babel-runtime/helpers/defineProperty": 20,
        "lib/config": 175,
        lodash: "lodash"
    } ],
    222: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./config-base"), o = r(a);
        n["default"] = new o["default"](), t.exports = n["default"];
    }, {
        "./config-base": 218
    } ],
    223: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("localforage"), o = r(a), i = "Grammarly", l = 1, s = "configuration";
        o["default"].config({
            name: i,
            version: l,
            size: 4194304,
            storeName: s
        }), n["default"] = o["default"], t.exports = n["default"];
    }, {
        localforage: "localforage"
    } ],
    224: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/regenerator"), o = r(a), i = e("babel-runtime/helpers/asyncToGenerator"), l = r(i), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("./localforage"), m = r(f), p = e("./utils"), g = "lastConfigUpdate", b = function() {
            function e() {
                u["default"](this, e);
            }
            return d["default"](e, [ {
                key: "load",
                value: function() {
                    function e() {
                        return t.apply(this, arguments);
                    }
                    var t = l["default"](o["default"].mark(function n() {
                        return o["default"].wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.t0 = this, e.next = 3, m["default"].getItem(g);

                              case 3:
                                return e.t1 = e.sent, e.t0.set.call(e.t0, e.t1), e.abrupt("return", this);

                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, n, this);
                    }));
                    return e;
                }()
            }, {
                key: "set",
                value: function(e) {
                    var t = e || {}, n = t.protocolVersion, r = t.version, a = t.status, o = t.info, i = t.date, l = t.interval;
                    return this._meta = {
                        date: Number(i) || 0,
                        interval: p.getInterval(Number(l)),
                        protocolVersion: n,
                        version: r,
                        status: a,
                        info: o
                    }, m["default"].setItem(g, this._meta);
                }
            }, {
                key: "config",
                get: function() {
                    return this._meta;
                }
            } ]), e;
        }();
        n["default"] = b, t.exports = n["default"];
    }, {
        "./localforage": 223,
        "./utils": 225,
        "babel-runtime/helpers/asyncToGenerator": 17,
        "babel-runtime/helpers/classCallCheck": 18,
        "babel-runtime/helpers/createClass": 19,
        "babel-runtime/regenerator": 123
    } ],
    225: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            return e && e.pageConfig && l["default"](e).length && l["default"](e.pageConfig).length && (!e.protocolVersion || e.protocolVersion === s.PROTOCOL_VERSION) ? !0 : void 0;
        }
        function o(e) {
            return s.PAGE_CONFIG_UPDATE_INTERVALS.includes(e) ? e : s.PAGE_CONFIG_DEFAULT_INTERVAL;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("babel-runtime/core-js/object/keys"), l = r(i), s = e("./defaults");
        n["default"] = {
            isValid: a,
            getInterval: o
        }, t.exports = n["default"];
    }, {
        "./defaults": 221,
        "babel-runtime/core-js/object/keys": 10
    } ],
    226: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            function t() {
                N["default"].on("mousemove", o, !0), ye = !0, we = new MutationObserver(u), we.observe(be.body, {
                    childList: !0,
                    subtree: !0
                }), P.interval(g, 1e3);
            }
            function n(e) {
                var t = e.contentDocument, n = void 0, r = function(e) {
                    me = e.x, pe = e.y;
                    var n = se = t.body;
                    setTimeout(function() {
                        return xe.emit("hover", {
                            target: n,
                            x: me,
                            y: pe
                        });
                    }, 0);
                }, a = function() {
                    !n && $.listen(t, "mousemove", r), n = !0;
                };
                return a(), {
                    on: a,
                    off: function() {
                        n && $.unlisten(t, "mousemove", r), n = !1;
                    }
                };
            }
            function r() {
                return [].concat(b["default"](ge)).find(function(e) {
                    return "IFRAME" != e.tagName && (se == e || $.isParent(se, e));
                });
            }
            function a() {
                var e = r();
                setTimeout(function() {
                    return xe.emit("hover", {
                        target: e,
                        x: me,
                        y: pe
                    });
                }, 0);
            }
            function o(e) {
                me = e.x, pe = e.y, se = e.target, a();
            }
            function l(e) {
                function t(e) {
                    return -1 != r.indexOf(e) ? n.push(e) : void 0;
                }
                var n = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1], r = y["default"].flatten(y["default"].transform(ge, function(e, t) {
                    return e.push(t);
                }, []));
                if (t(e) || !e.children) return n;
                for (var a = 0; a < e.children.length; a++) l(e.children[a], n);
                return n;
            }
            function u(e) {
                e.map(function(e) {
                    var t = e.removedNodes;
                    return [].concat(b["default"](t)).map(function(e) {
                        return l(e);
                    });
                }).reduce(function(e, t) {
                    return e.concat.apply(e, b["default"](t));
                }, []).forEach(_);
            }
            function d() {
                ye && (N["default"].off("mousemove", o, !0), P.cancelInterval(g), we.disconnect(), 
                ye = !1);
            }
            function m() {
                return [].concat(b["default"](ge)).filter(function(e) {
                    return fe(e) || !e.offsetHeight;
                });
            }
            function g() {
                m().forEach(_);
                var e = Q();
                C(e) || xe.emit("add", e);
            }
            function h() {
                y["default"].each(ge, function(e) {
                    return e.forEach(U);
                }), ge = k(), xe.emit("add", Q()), t();
            }
            function _(e) {
                ue.has(e) && (ue.get(e).off(), ue["delete"](e)), [ "textareas", "contenteditables", "iframes", "htmlghosts" ].forEach(function(t) {
                    var n = ge[t].indexOf(e);
                    -1 != n && ge[t].splice(n, 1);
                }), xe.emit("remove", e);
            }
            function w() {
                return p["default"].wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.delegateYield(this.textareas, "t0", 1);

                      case 1:
                        return e.delegateYield(this.contenteditables, "t1", 2);

                      case 2:
                        return e.delegateYield(this.iframes, "t2", 3);

                      case 3:
                        return e.delegateYield(this.htmlghosts, "t3", 4);

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, te[0], this);
            }
            function k() {
                return c["default"]({
                    textareas: [],
                    contenteditables: [],
                    iframes: [],
                    htmlghosts: []
                }, f["default"], w);
            }
            function E(e) {
                be = e, ve = be.location.hostname, _e = new RegExp("://" + ve), he = be.defaultView, 
                ae && (ie = y["default"].isNumber(ae.minFieldHeight) ? ae.minFieldHeight : ie, le = y["default"].isNumber(ae.minFieldWidth) ? ae.minFieldHeight : le);
            }
            function C(e) {
                return 0 == e.textareas.length && 0 == e.contenteditables.length && 0 == e.iframes.length && 0 == e.htmlghosts.length;
            }
            function S(e) {
                if (!ae) return !0;
                if (ae.enabled === !1) return !1;
                if (!ae.fields && ae.enabled === !0) return !0;
                var t = function(t) {
                    var n = s["default"](t, 2), r = n[0], a = n[1];
                    return e.getAttribute(r) == a;
                };
                return !ae.fields.some(function(n) {
                    var r = n.name, a = n.id, o = n.className, i = n.attr;
                    return r && r == e.name || a && a == e.id || o && $.hasClass(e, o) || i && Array.isArray(i) && t(i);
                });
            }
            function A() {
                return !be.location || 0 == be.location.href.indexOf("about:") || 0 == be.location.href.indexOf("chrome:") || !be.body || 0 == be.body.childNodes.length;
            }
            function R() {
                return "interactive" != be.readyState && "complete" != be.readyState;
            }
            function L() {
                var e = be.documentElement.getBoundingClientRect();
                return e.height < oe && he.innerHeight < oe || e.width < oe;
            }
            function F(e) {
                return e.clientHeight < ie || e.clientWidth < le;
            }
            function G(e) {
                var t = O.some(function(t) {
                    return Array.isArray(t) ? e.hasAttribute(t[0]) && e.getAttribute(t[0]).includes(t[1]) : e.hasAttribute(t);
                });
                return t || "rtl" == e.getAttribute("dir");
            }
            function U(e) {
                if ([].concat(b["default"](O), [ "spellcheck" ]).forEach(function(t) {
                    return e.removeAttribute(t);
                }), j.isHtmlGhostSite()) {
                    var t = e.parentElement && e.parentElement.parentElement;
                    t && t.removeAttribute("spellcheck");
                }
            }
            function B(e) {
                return $.getParentBySel(e, D);
            }
            function V(e) {
                return !G(e) && !F(e) && ($.isVisible(e) && S(e) || $.hasClass(e, "grammDemo"));
            }
            function H(e) {
                return [].concat(b["default"](be.querySelectorAll(e))).filter(V);
            }
            function W(e) {
                return H("textarea", e);
            }
            function z(e) {
                return ce ? [] : H('[contenteditable]:not([contenteditable="false"]):not([data-reactid])', e).filter(function(e) {
                    return !B(e);
                });
            }
            function q(e) {
                return ce ? H(j.getHtmlGhostSelector(), e) : [];
            }
            function K(e) {
                if (I.href = e.src, (0 != e.src.indexOf("http") || _e.test(e.src)) && "about:blank" != e.src && (!e.src || -1 != e.src.indexOf("javascript:") || I.protocol == document.location.protocol && I.hostname == document.location.hostname && I.port == document.location.port) && !$.hasClass(e, M["default"].baseCls)) {
                    var t = null;
                    try {
                        t = e.contentDocument;
                    } catch (n) {
                        return;
                    }
                    if ((!t || t.body) && t && !G(e) && !G(t.body) && S(e)) {
                        var r = t.querySelector("html") || {
                            hasAttribute: P._f
                        };
                        if (("on" == t.designMode || t.body.hasAttribute("contenteditable") || "false" == t.body.getAttribute("contenteditable") || r.hasAttribute("contenteditable") || "false" == r.getAttribute("contenteditable")) && !F(e)) return P.isFF() && "on" == t.designMode && (t.designMode = "off", 
                        t.body.setAttribute("contenteditable", !0)), !0;
                    }
                }
            }
            function Y(e) {
                return [].concat(b["default"](be.querySelectorAll("iframe"))).filter(K);
            }
            function X(e) {
                ge = y["default"].mapValues(ge, function(t, n) {
                    return [].concat(t, e[n]);
                }), ge[f["default"]] = w;
            }
            function J(e, t) {
                return y["default"].difference(e[t], ge[t]);
            }
            function Z(e, t) {
                var n = J(e, t);
                return de.shouldRemove ? n.filter(function(e) {
                    return !de.shouldRemove(e);
                }) : n;
            }
            function Q() {
                var e = ee(), t = c["default"]({
                    textareas: Z(e, "textareas"),
                    contenteditables: Z(e, "contenteditables"),
                    iframes: Z(e, "iframes"),
                    htmlghosts: Z(e, "htmlghosts")
                }, f["default"], w);
                return X(t), t.iframes.forEach(function(e) {
                    return ue.set(e, n(e));
                }), t;
            }
            function ee() {
                var e = k();
                return A() || R() || L() ? e : i["default"]({}, e, {
                    textareas: W(),
                    contenteditables: z(),
                    iframes: Y(),
                    htmlghosts: q()
                });
            }
            var te = [ w ].map(p["default"].mark), ne = e.doc, re = void 0 === ne ? document : ne, ae = e.page, oe = 150, ie = 35, le = 300, se = void 0, ue = new v["default"](), ce = j.isHtmlGhostSite(), de = T["default"](re).getFixesForCurrentDomain(), fe = de.shouldRemove || P._f, me = void 0, pe = void 0, ge = k(), be = void 0, he = void 0, ve = void 0, _e = void 0, ye = void 0, we = void 0;
            E(re);
            var xe = x["default"]({
                get: Q,
                reset: h,
                remove: _,
                stop: d
            }), ke = xe.on;
            return xe.on = function(e, n) {
                ye || t(), ke(e, n), "hover" == e && a();
            }, xe;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/helpers/extends"), i = r(o), l = e("babel-runtime/helpers/slicedToArray"), s = r(l), u = e("babel-runtime/helpers/defineProperty"), c = r(u), d = e("babel-runtime/core-js/symbol/iterator"), f = r(d), m = e("babel-runtime/regenerator"), p = r(m), g = e("babel-runtime/helpers/toConsumableArray"), b = r(g), h = e("babel-runtime/core-js/map"), v = r(h), _ = e("lodash"), y = r(_), w = e("emitter"), x = r(w), k = e("./config"), E = r(k), C = e("./sites"), T = r(C), j = e("./ghost/html-ghost-locator"), S = e("./window-events"), N = r(S), A = e("./elements/iframe"), M = r(A), P = e("./util"), $ = e("./dom"), O = E["default"].restrictedAttrs, D = E["default"].restrictedParentAttrs, I = document.createElement("a");
        n["default"] = a, t.exports = n["default"];
    }, {
        "./config": 175,
        "./dom": 179,
        "./elements/iframe": 189,
        "./ghost/html-ghost-locator": 212,
        "./sites": 232,
        "./util": 251,
        "./window-events": 252,
        "babel-runtime/core-js/map": 5,
        "babel-runtime/core-js/symbol/iterator": 15,
        "babel-runtime/helpers/defineProperty": 20,
        "babel-runtime/helpers/extends": 21,
        "babel-runtime/helpers/slicedToArray": 25,
        "babel-runtime/helpers/toConsumableArray": 26,
        "babel-runtime/regenerator": 123,
        emitter: "emitter",
        lodash: "lodash"
    } ],
    227: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e, t, n) {
            var r = {
                top: 0,
                left: 0,
                height: 0,
                width: 0
            };
            if (!e) return r;
            var o = e.ownerDocument, i = o.documentElement, l = e.getClientRects(), s = i.scrollTop || o.body.scrollTop, u = i.scrollLeft || o.body.scrollLeft, c = t && t.contentDocument;
            if (0 == l.length) return r;
            var f = m["default"](l).map(function(e) {
                return {
                    top: e.top + s,
                    left: e.left + u,
                    height: e.height,
                    width: e.width
                };
            });
            return c && c.documentElement && c.documentElement == i && !function() {
                var e = a(t);
                f = f.map(function(t) {
                    return d["default"]({}, t, {
                        top: t.top + e.top - s,
                        left: t.left + e.left - u
                    });
                });
            }(), n && f || f[0];
        }
        function o(e, t, n) {
            var r = e.ownerDocument, a = s(r), o = e.clientWidth, i = e.clientHeight, l = {}, u = {
                top: t.top - r.body.scrollTop - i,
                left: t.left - o,
                bottom: r.body.scrollTop + a.height - t.top - t.height - i,
                right: r.body.scrollLeft + a.width - t.left - o
            };
            return u.bottom < 0 && u.bottom < u.top || n ? (l.top = t.top - i + 3, l.flip = !0) : (l.top = t.top + t.height - 3, 
            l.flip = !1), u.right < 0 ? l.left = a.width - o : l.left = t.left, t.forceCoords && (l.left = t.pageX, 
            l.top = l.flip ? t.pageY - i : t.pageY + 5), {
                rect: l,
                delta: u,
                sourceRect: t
            };
        }
        function i(e, t, n) {
            function r(e, t) {
                s[e] += o[t] / 2 - i[t] / 2, a[e] > s[e] && (s[e] = a[e]), a[e] + a[t] < s[e] + i[t] && (s[e] = a[e] + a[t] - i[t]);
            }
            var a = l(), o = t.getBoundingClientRect(), i = e.getBoundingClientRect(), s = {
                flipY: !1,
                flipX: !1
            }, u = {
                top: o.top - a.top,
                left: o.left - a.left,
                bottom: -o.bottom + a.bottom,
                right: -o.right + a.right
            };
            return n = n || "top:center", n = n.split(":"), s.top = o.top, "center" == n[0] ? r("top", "height") : "top" == n[0] ? u.top > i.height ? s.top -= i.height : (s.top += o.height, 
            s.flipY = !0) : "bottom" == n[0] && (u.bottom > i.height ? s.top += o.height : (s.top -= i.height, 
            s.flipY = !0)), s.left = o.left, "center" == n[1] ? r("left", "width") : "left" == n[1] ? (s.left += o.width - i.width, 
            u.left + o.width < i.width && (s.left = a.left)) : "right" == n[1] && u.right + o.width < i.width && (s.left += o.width + u.right - i.width), 
            s;
        }
        function l() {
            var e = document.createElement("div");
            e.style.cssText = "position: fixed;top: 0;left: 0;bottom: 0;right: 0;", document.documentElement.insertBefore(e, document.documentElement.firstChild);
            var t = e.getBoundingClientRect();
            return document.documentElement.removeChild(e), t;
        }
        function s(e) {
            var t = e.documentElement.clientTop || e.body.clientTop || 0, n = e.documentElement.clientLeft || e.body.clientLeft || 0, r = e.documentElement.scrollLeft || e.body.scrollLeft, a = e.documentElement.scrollTop || e.body.scrollTop, o = e.defaultView.innerHeight, i = e.defaultView.innerWidth;
            return {
                width: i,
                height: o,
                scrollTop: a - t,
                scrollLeft: r - n,
                top: t,
                left: n
            };
        }
        function u(e, t) {
            if (!e || e == t) return {
                x: 0,
                y: 0
            };
            var n = {
                x: e.offsetLeft,
                y: e.offsetTop
            }, r = u(e.offsetParent, t);
            for (var a in r) n[a] += r[a];
            return n;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = e("babel-runtime/helpers/extends"), d = r(c), f = e("babel-runtime/core-js/array/from"), m = r(f);
        n["default"] = {
            posToRect: o,
            getAbsRect: a,
            getPos: u,
            posToEl: i
        }, t.exports = n["default"];
    }, {
        "babel-runtime/core-js/array/from": 1,
        "babel-runtime/helpers/extends": 21
    } ],
    228: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/regenerator"), o = r(a), i = e("babel-runtime/helpers/asyncToGenerator"), l = r(i), s = e("babel-runtime/helpers/classCallCheck"), u = r(s), c = e("babel-runtime/helpers/createClass"), d = r(c), f = e("lib/timers"), m = r(f), p = e("lodash"), g = e("lib/tracking"), b = function() {
            function e() {
                var t = this;
                u["default"](this, e), this.timings = {}, this.track = function() {
                    var e = l["default"](o["default"].mark(function n(e, r) {
                        for (var a = arguments.length, i = Array(a > 2 ? a - 2 : 0), l = 2; a > l; l++) i[l - 2] = arguments[l];
                        var s, u, c;
                        return o["default"].wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (p.isPlainObject(e) || (i.unshift(r), r = e, e = {}), s = r.name + (e.wait ? "__sync" : ""), 
                                u = e, c = u.wait, m["default"].start(s), n.prev = 5, !c) {
                                    n.next = 11;
                                    break;
                                }
                                return n.next = 9, r.apply(void 0, i);

                              case 9:
                                n.next = 12;
                                break;

                              case 11:
                                r.apply(void 0, i);

                              case 12:
                                n.next = 17;
                                break;

                              case 14:
                                throw n.prev = 14, n.t0 = n["catch"](5), n.t0;

                              case 17:
                                return n.prev = 17, t.timings[s] = m["default"].stop(s), n.finish(17);

                              case 20:
                              case "end":
                                return n.stop();
                            }
                        }, n, t, [ [ 5, 14, 17, 20 ] ]);
                    }));
                    return function(t, n, r) {
                        return e.apply(this, arguments);
                    };
                }();
            }
            return d["default"](e, [ {
                key: "start",
                value: function(e) {
                    m["default"].start(e);
                }
            }, {
                key: "stop",
                value: function(e) {
                    this.timings[e] = m["default"].stop(e);
                }
            } ], [ {
                key: "start",
                value: function(e) {
                    m["default"].start(e);
                }
            }, {
                key: "stop",
                value: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? 3e4 : arguments[1], n = m["default"].stop(e);
                    return n > t && (console.warn("profiler_" + e + "_time_exceeded", n), g.call("felog.warn", "profiler_" + e + "_time_exceeded", {
                        active_time: n
                    })), n;
                }
            } ]), e;
        }();
        n["default"] = b, t.exports = n["default"];
    }, {
        "babel-runtime/helpers/asyncToGenerator": 17,
        "babel-runtime/helpers/classCallCheck": 18,
        "babel-runtime/helpers/createClass": 19,
        "babel-runtime/regenerator": 123,
        "lib/timers": 243,
        "lib/tracking": 247,
        lodash: "lodash"
    } ],
    229: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            if (e.data && (e.query || "post" != e.method) && (e.url += "?" + l(e.data)), e.data && "post" == e.method && !e.query && !e.body) {
                try {
                    e.body = m["default"](e.data);
                } catch (t) {
                    e.body = {}, console.warn(t);
                }
                e.headers = e.headers || {}, e.headers["Content-Type"] = e.headers["Content-Type"] || "application/json", 
                delete e.data;
            }
            return e.credentials = "include", e;
        }
        function o(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
            return t.url = e, a(t), h.isBg() || b.isTest ? i(t) : _["default"].promiseBackground("fetch", t).then(function(e) {
                if (p.isObject(e) && e.error) throw new Error(e.error);
                return e;
            });
        }
        function i(e) {
            function t(e) {
                return e.ok ? e[r.isText ? "text" : "json"]() : e.text().then(function(t) {
                    throw {
                        name: "RequestError",
                        body: t,
                        statusCode: e.status,
                        message: e.statusText
                    };
                });
            }
            var n = e.url, r = d["default"](e, [ "url" ]);
            return h.isFF() ? new u["default"](function(e, t) {
                g.request.ajax({
                    url: n,
                    data: r.data || r.body,
                    headers: r.headers,
                    type: (r.method || "GET").toUpperCase(),
                    dataType: "json",
                    timeout: r.timeout || y,
                    success: function(n) {
                        var r = "string" == typeof n ? JSON.parse(n) : n;
                        return r.error ? t({
                            message: r.error
                        }) : void e(r);
                    },
                    error: function(e) {
                        return t({
                            name: "RequestError",
                            message: e.message,
                            statusCode: e.statusCode,
                            url: "Request timed out" === e.message ? n : ""
                        });
                    }
                });
            }) : u["default"].race([ window.fetch(n, r).then(t).then(function(e) {
                if (e.error) throw new Error(e.error);
                return e;
            }), h.delay(r.timeout || y).then(function() {
                throw new Error("Fetch request to " + n + " rejected by timeout");
            }) ]);
        }
        function l(e) {
            var t = "", n = function(n) {
                Array.isArray(e[n]) ? e[n].length && (t += "" + (t.length ? "&" : "") + e[n].map(function(e) {
                    return n + "=" + e;
                }).join("&")) : t += "" + (t.length ? "&" : "") + n + "=" + encodeURIComponent(e[n]);
            };
            for (var r in e) n(r);
            return t;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = e("babel-runtime/core-js/promise"), u = r(s), c = e("babel-runtime/helpers/objectWithoutProperties"), d = r(c), f = e("babel-runtime/core-js/json/stringify"), m = r(f), p = e("lodash"), g = e("./forge"), b = e("./config"), h = e("./util"), v = e("./message"), _ = r(v), y = 1e4;
        h.isBg() && (e("whatwg-fetch"), _["default"].on("fetch", function(e, t) {
            return i(e).then(t, function(e) {
                return t({
                    error: e.message
                });
            });
        })), n["default"] = {
            fetch: o,
            transformOptions: a,
            paramStr: l
        }, t.exports = n["default"];
    }, {
        "./config": 175,
        "./forge": 208,
        "./message": 217,
        "./util": 251,
        "babel-runtime/core-js/json/stringify": 4,
        "babel-runtime/core-js/promise": 13,
        "babel-runtime/helpers/objectWithoutProperties": 23,
        lodash: "lodash",
        "whatwg-fetch": "whatwg-fetch"
    } ],
    230: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? document : arguments[1], n = arguments.length <= 2 || void 0 === arguments[2] ? "" : arguments[2];
            b = n;
            var r = d["default"].getAbsRect(e);
            y = t, g = {
                top: r.top + r.height + 1,
                left: r.left,
                width: 0,
                height: 2
            }, v = Math.ceil(r.width / 8), h = r.width - v, setTimeout(function() {
                g.width = h, o();
            }, 10), setTimeout(function() {
                l();
            }, 500), o();
        }
        function o() {
            _ = f.renderReactWithParent(p["default"].createElement(x, {
                style: g,
                className: b
            }), y.documentElement, w);
        }
        function i() {
            _ && (_.remove(), _ = null);
        }
        function l() {
            g.WebkitTransitionDuration = "0.2s", g.MozTransitionDuration = "0.2s", g.transitionDuration = "0.2s", 
            g.width = h + v, _ && o();
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = e("babel-runtime/core-js/symbol"), u = r(s), c = e("./position"), d = r(c), f = e("./dom"), m = e("react"), p = r(m), g = void 0, b = void 0, h = 0, v = 0, _ = void 0, y = void 0, w = u["default"]("SelectionAnimator"), x = p["default"].createClass({
            displayName: "AnimationLine",
            render: function() {
                return p["default"].createElement("div", {
                    style: this.props.style,
                    className: "g-selection-anim " + this.props.className
                });
            }
        }), k = {
            animate: a,
            remove: i,
            complete: l
        };
        n["default"] = k, t.exports = n["default"];
    }, {
        "./dom": 179,
        "./position": 227,
        "babel-runtime/core-js/symbol": 14,
        react: "react"
    } ],
    231: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("emitter"), o = r(a), i = e("./config"), l = e("./dom"), s = function(e) {
            function t(e) {
                return e.getRangeAt(0).getBoundingClientRect();
            }
            function n(e, t, n) {
                for (var r = e.split(/[.;!?]/g), a = 0, o = 0, i = 0; i < r.length; i++) {
                    if (o = a + r[i].length, t >= a && o >= n) {
                        var l = {
                            t: r[i],
                            s: t - a,
                            e: n - a
                        };
                        return l;
                    }
                    a = o + 1;
                }
            }
            function r(t) {
                var n = t.anchorNode;
                if (!n) return !1;
                var r = i.restrictedAttrs.map(function(e) {
                    return Array.isArray(e) ? "[" + e[0] + '="' + e[1] + '"]' : "[" + e + "]";
                }).join(","), a = t.toString().trim(), o = "TEXTAREA" != n.tagName && "INPUT" != n.tagName, s = !(e.activeElement && "INPUT" == e.activeElement.tagName || e.activeElement && "TEXTAREA" == e.activeElement.tagName), u = !l.isContentEditable(n), c = !l.getParentBySel(n, r) && !l.matchesSelector(n, r), d = !l.getParentBySel(n, "[contenteditable=true],[contenteditable=plaintext-only]") && !l.parentIsContentEditable(n);
                return !!(a && o && s && u && c && d);
            }
            function a(a) {
                var o = a.detail;
                if (2 != o) return void (u && (s.emit("unselect"), u = !1));
                u = !0;
                var i = e.getSelection(), l = r(i);
                if (l) {
                    var c = i.anchorNode.textContent, d = i.toString();
                    if (!d.match(/[0-9_±!@#$%^&*:"|<>?~().,:}{’=']/)) {
                        var f = {
                            t: d,
                            s: 0,
                            e: d.length
                        }, m = i.getRangeAt(0);
                        if (m.ownerDocument = e, i.anchorNode == i.focusNode) {
                            var p = i.anchorOffset, g = p + d.length;
                            f = n(c, p, g);
                        }
                        var b = {
                            data: {
                                v: f.t,
                                s: f.s,
                                e: f.e,
                                w: d
                            },
                            pos: t(i),
                            el: m
                        };
                        s.emit("select", b);
                    }
                }
            }
            l.listen(e, "click", a);
            var s = o["default"]({
                release: function() {
                    l.unlisten(e, "click", a);
                },
                isValidSelection: r
            }), u = !1;
            return s;
        };
        n["default"] = s, t.exports = n["default"];
    }, {
        "./config": 175,
        "./dom": 179,
        emitter: "emitter"
    } ],
    232: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e, t) {
            return e.find(function(e) {
                return o(t, e.split(":"));
            });
        }
        function o(e, t) {
            var n = f["default"](t, 2), r = n[0], a = n[1], o = e.getAttribute(r);
            return o && (o == a || o.includes(a) && r + ":" + a);
        }
        function i() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? document : arguments[0], t = m.getDomain({
                ownerDocument: e
            }), n = y[t];
            return {
                addDomainClass: function() {
                    e.documentElement.classList.add("gr__" + t.replace(/\./g, "_"));
                },
                customizeElements: function() {
                    n && b["default"](n).each(function(t, n) {
                        return [].concat(c["default"](e.querySelectorAll(n))).forEach(function(e) {
                            b["default"].extend(e.style, t);
                        });
                    });
                },
                getFixesForCurrentDomain: function() {
                    var e = x[t];
                    if (e) return e;
                    var n = s["default"](x).filter(function(e) {
                        return e.includes("*");
                    }).find(function(e) {
                        return t.indexOf(e.replace("*", "")) > -1;
                    });
                    return n && x[n] || {};
                }
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var l = e("babel-runtime/core-js/object/keys"), s = r(l), u = e("babel-runtime/helpers/toConsumableArray"), c = r(u), d = e("babel-runtime/helpers/slicedToArray"), f = r(d), m = e("./location"), p = e("./util"), g = e("lodash"), b = r(g), h = e("./client-script"), v = r(h), _ = e("./dom"), y = {
            "translate.google.com": {
                "#gt-clear": {
                    zIndex: 2
                }
            },
            "linkedin.com": {
                ".mentions-highlighter": {
                    zIndex: 0
                }
            },
            "us.nakedwines.com": {
                ".postbutton": {
                    display: "inline-block"
                }
            }
        }, w = function() {
            var e = void 0;
            return function() {
                return "undefined" == typeof e && (e = !!document.querySelector("c-wiz")), e;
            };
        }(), x = {
            "twitter.com": {
                btnMargin: function(e, t) {
                    t.clientHeight > 40 || (e["margin-left"] = e["margin-left"] - 30);
                },
                btnDiff: function(e) {
                    if ("tweet-box-dm-conversation" == e.id) return [ -25, 1 ];
                    if (!(e.clientHeight > 40 || "tweet-box-home-timeline" != e.id)) return [ -30, 0 ];
                },
                fieldRestoreInlineStyles: function(e, t) {
                    "tweet-box-dm-conversation" == e.id && e.style["z-index"] != t.src["z-index"] && (e.style["z-index"] = t.src["z-index"], 
                    e.style.position = t.src.position, e.style.transition = "none", e.style.background = "transparent");
                }
            },
            "linkedin.com": {
                fieldStateForDomain: function(e) {
                    if ("IFRAME" == e.tagName && e.id) return e.id.replace(/\d*\d/, "");
                    var t = [ "class:trans" ];
                    return a(t, e);
                },
                menuPosLeft: function(e, t, n) {
                    return !p.isSafari() || n.enabled ? t : t - 7;
                }
            },
            "*.slack.com": {
                forceMinimize: function(e) {
                    return e.clientHeight > 40 ? !0 : !1;
                },
                btnCustomContainer: function(e) {
                    return e;
                },
                btnCustomStyles: function(e, t) {
                    var n = t.clientHeight < 40 ? 25 : 0;
                    return e ? {
                        right: 10 + n,
                        bottom: 10,
                        left: "auto",
                        top: "auto"
                    } : {
                        right: -10,
                        bottom: -2,
                        left: "auto",
                        top: "auto"
                    };
                },
                customDefaultBg: function(e) {
                    return e.parentNode.parentNode.classList.contains("offline") ? "rgb(253, 241, 193)" : "rgb(255, 255, 255)";
                }
            },
            "*.zendesk.com": {
                customDefaultBg: function(e) {
                    return e.classList.contains("ember-text-area") && (e.parentNode.parentNode.parentNode.classList.contains("is-public") ? "#fff" : "#fff6d9") || null;
                }
            },
            "facebook.com": {
                fieldStateForDomain: function(e) {
                    var t = [ "role:textbox", "testid:ufi_comment_composer", "testid:react-composer-root" ], n = function(e, t) {
                        var n = f["default"](t, 2), r = (n[0], n[1]);
                        return e.dataset && e.dataset.testid == r ? "testid:" + r : _.getParentByData(e, "testid", r) ? "testid:" + r : void 0;
                    };
                    return t.find(function(t) {
                        var r = t.split(":"), a = f["default"](r, 2), i = a[0], l = a[1];
                        return "testid" == i ? n(e, [ i, l ]) : o(e, [ i, l ]);
                    });
                },
                ghostHeight: function(e) {
                    var t = parseInt(e, 10);
                    return t > 0 ? t + 1 + "px" : t + "px";
                },
                menuPosLeft: function(e, t) {
                    return e && e.el.name && "xhpc_message_text" == e.el.name ? Math.ceil(t) : t;
                },
                forceMinimize: function(e) {
                    return "ufi_reply_composer" == e.dataset.testid;
                },
                btnCustomContainer: function(e) {
                    if (e.dataset && ("ufi_comment_composer" == e.dataset.testid || "ufi_reply_composer" == e.dataset.testid)) return e;
                    if (e.name && "xhpc_message_text" == e.name) return e.parentNode;
                    var t = _.getParentByData(e, "testid", "react-composer-root");
                    if (t) {
                        var n = _.getParentByDepth.call(e, 3);
                        return n.parentNode.style.position = "relative", n;
                    }
                    return "webMessengerRecentMessages" == e.getAttribute("aria-controls") ? e : void 0;
                },
                btnCustomStyles: function(e, t) {
                    if ("webMessengerRecentMessages" == t.getAttribute("aria-controls")) return e ? {
                        right: 10,
                        bottom: 10,
                        left: "auto",
                        top: "auto"
                    } : {
                        right: -5,
                        bottom: 2,
                        left: "auto",
                        top: "auto"
                    };
                    if (t.dataset && "ufi_comment_composer" == t.dataset.testid) {
                        var n = _.getParentByDepth.call(t, 6).querySelector(".UFICommentAttachmentButtons"), r = n ? n.childNodes.length : 2, a = [ 56, 30, 0 ], o = e ? -a[r] : -74, i = e ? -3 : -14;
                        return {
                            right: o,
                            bottom: i,
                            left: "auto",
                            top: "auto"
                        };
                    }
                    if (t.dataset && "ufi_reply_composer" == t.dataset.testid || t.hasAttribute("aria-haspopup") && t.hasAttribute("aria-owns")) {
                        var l = _.getParentByDepth.call(t, 6).querySelector(".UFICommentAttachmentButtons"), s = l ? l.childNodes.length : 2, u = [ 60, 30, 0 ], c = e ? -u[s] : -74, d = e ? -3 : -8;
                        return {
                            right: c,
                            bottom: d,
                            left: "auto",
                            top: "auto"
                        };
                    }
                    return e ? {
                        right: 10,
                        bottom: 10,
                        left: "auto",
                        top: "auto"
                    } : {
                        right: -8,
                        bottom: -5,
                        left: "auto",
                        top: "auto"
                    };
                }
            },
            "mail.google.com": {
                btnCustomContainer: function(e) {
                    var t = _.getParentByTag(e, "TABLE"), n = t && _.getParentByTag(t, "TABLE"), r = n && n.querySelector('[command="Files"]');
                    return n && r && _.getParentByTag(r, "TABLE");
                },
                btnCustomStyles: function(e) {
                    return e ? {
                        right: 10,
                        top: -30,
                        left: "auto"
                    } : {
                        right: -2,
                        top: -25,
                        left: "auto"
                    };
                },
                shouldRemove: function(e) {
                    var t = _.getParentByTag(e, "TABLE");
                    if (t) {
                        var n = _.getParentByTag(t, "TABLE");
                        if (n) {
                            var r = n.querySelector('[role=toolbar][aria-label="Spell Check"]');
                            return r && r.offsetParent;
                        }
                    }
                }
            },
            "inbox.google.com": {
                btnCustomContainer: function(e) {
                    return e.parentNode;
                },
                btnCustomStyles: function(e) {
                    return e ? {
                        right: 12,
                        top: "auto",
                        left: "auto",
                        bottom: 62
                    } : {
                        right: -5,
                        top: "auto",
                        left: "auto",
                        bottom: 60
                    };
                }
            },
            "medium.com": {
                btnDiff: function(e) {
                    return _.parentHasClass(e, "postArticle--full") ? [ -75, 0, !1 ] : void 0;
                }
            },
            "plus.google.com": {
                forceMinimize: function(e) {
                    return e.clientHeight < 30 ? !0 : !1;
                },
                btnCustomContainer: function(e) {
                    var t = function(e) {
                        return /comment/i.test(e.getAttribute("aria-label"));
                    };
                    return w() && t(e) ? e.parentNode : e;
                },
                btnCustomStyles: function(e, t) {
                    var n = w() ? -12 : -18, r = w() ? -5 : -10;
                    return e ? {
                        right: 10,
                        bottom: 10,
                        left: "auto",
                        top: "auto"
                    } : {
                        right: n,
                        bottom: r,
                        left: "auto",
                        top: "auto"
                    };
                },
                fieldParentCustomStyle: function(e) {
                    var t = {
                        "padding-bottom": "2px",
                        "overflow-x": "hidden"
                    };
                    return w() ? t : {};
                }
            },
            "app.asana.com": {
                forceMinimize: function(e) {
                    return e.classList.contains("task-comments-input") ? !e.parentNode.parentNode.parentNode.classList.contains("focused") : void 0;
                }
            },
            "youtube.com": {
                btnDiff: function(e) {
                    return _.hasClass(e, "comment-simplebox-text") ? [ 15, 15 ] : void 0;
                }
            }
        };
        !function() {
            function e() {
                if (window.randomize) {
                    var e = window.randomize;
                    window.randomize = function(t) {
                        try {
                            if (t.data) {
                                var n = JSON.parse(t.data);
                                n[0] && n[0].parentWindowLocation && e(t);
                            }
                        } catch (t) {}
                    };
                }
            }
            (m.getDomain().indexOf("chase.com") > -1 || m.getDomain().indexOf("chaseonline.com") > -1) && v["default"].addScript(document, [ e ]);
        }(), n["default"] = i, t.exports = n["default"];
    }, {
        "./client-script": 174,
        "./dom": 179,
        "./location": 216,
        "./util": 251,
        "babel-runtime/core-js/object/keys": 10,
        "babel-runtime/helpers/slicedToArray": 25,
        "babel-runtime/helpers/toConsumableArray": 26,
        lodash: "lodash"
    } ],
    233: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            if ("disconnected" != e) {
                var t = {};
                "string" == typeof e ? t.msg = e : e.error && (t.readyState = e.error.currentTarget && e.error.currentTarget.readyState, 
                t.returnValue = e.error.returnValue), E.call("felog.error", "socket_fail_bg", t), 
                console.error("capi error", e), window.emit || _["default"](window), window.emit("bgerror", e || "when send message to the socket");
            }
        }
        function o(e) {
            function t(t, r, a) {
                if (t) {
                    var i = t.socketId, l = A[i], s = t.method, u = "close" == s;
                    (l || !u) && (e.get().authToCapiDegradation || (l || (l = O(t, n, a, e), A[i] = l), 
                    t.arg && "start" == t.arg.action && h["default"](t.arg, o), s && ("connect" == s ? e.refreshUser(!0, "onSessionStart").then(function() {
                        return l[s](t.arg);
                    }) : l[s](t.arg), u && n(i))));
                }
            }
            function n(e) {
                A[e] && (A[e].close(), A[e].emit = function(e, t) {}, delete A[e]);
            }
            var r = {};
            window.socketServer = r, k["default"].on("iframe-mode", function(e) {
                console.log("IFRAME MODE", e.id, A), A[e.id].iframeMode(e.iframeMode);
            }, a, !0), k["default"].on("socket-client", t, a, !0), r.sockets = A, r.toString = function() {
                return "[object SocketServer]";
            };
            var o = {};
            return r.wsReconnect = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                h["default"](o, e), g["default"](A).forEach(function(e) {
                    return e.reconnect();
                });
            }, r;
        }
        function i() {
            var e = M.slice(0);
            return M.length = 0, e;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var l = e("babel-runtime/regenerator"), s = r(l), u = e("babel-runtime/helpers/asyncToGenerator"), c = r(u), d = e("babel-runtime/core-js/promise"), f = r(d), m = e("babel-runtime/helpers/extends"), p = (r(m), 
        e("babel-runtime/core-js/object/values")), g = r(p), b = e("babel-runtime/core-js/object/assign"), h = r(b);
        n.SocketServer = o, n.getLog = i;
        var v = e("emitter"), _ = r(v), y = e("websocket"), w = r(y), x = e("lib/message"), k = r(x), E = e("lib/tracking"), C = e("lib/timers"), T = r(C), j = e("lib/util"), S = e("lib/config"), N = e("lib/bg/cookie"), A = {}, M = [], P = {
            docid: j.guid(),
            client: "extension",
            protocolVersion: "1.0",
            action: "start",
            id: 0
        }, $ = 12e4, O = function(e, t, n, r) {
            function o(e, t) {
                if (O(e, t), "disconnect" == e && D) return void (D = !1);
                var r = setTimeout(d, 5e3), o = x ? "socket-server-iframe" : "socket-server";
                return console.log("from ws", e, y, t, o), t && t.error && "not_authorized" == t.error ? m(_) : void k["default"].emitTo(n, o, {
                    socketId: y,
                    event: e,
                    msg: t,
                    id: j.guid()
                }, function(e) {
                    return e && clearTimeout(r);
                }, a);
            }
            function i() {
                I || (I = !0, l().then(function() {
                    return I = !1;
                }));
            }
            function l() {
                var e = void 0, t = new f["default"](function(t) {
                    return e = t;
                });
                return _.one("connect", e), _.isConnected() ? (_.one("disconnect", function() {
                    return setTimeout(_.connect.bind(null, !0), 0);
                }), D = !0, _.close()) : _.connect(!0), t;
            }
            function u(e) {
                x = e, console.log("USE EXT SOCKET", e);
            }
            function d() {
                console.log("CLOSE SOCKET"), C++, C > 7 && !M && (E.call("felog.warn", "too_frequent_socket_release", {
                    release_count: C
                }), M = !0);
                var e = u ? "socket_timeout_close_iframe:stability" : "socket_timeout_close:stability";
                E.call("statsc.ui.increment", e), _.close(), _.release(), t();
            }
            function m(e) {
                var t = r.get(), n = t.authToCapiDegradation, a = t.authDegradation, o = t.cookiesDisabled;
                return n ? (E.call("felog.error", "stability.capi_error_not_authorized_loop", {
                    authDegradation: a,
                    cookiesDisabled: o
                }), void console.error("User not authorized... Recovery fail =(")) : (o && (E.call("felog.error", "stability.capi_error_disabled_cookies"), 
                console.error("User disabled cookies... =(")), console.warn("User not authorized... Try to recover"), 
                r.update({
                    authToCapiDegradation: !0
                }), void p());
            }
            var p = function() {
                var e = c["default"](s["default"].mark(function t() {
                    var e, n;
                    return s["default"].wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return g["default"](A).forEach(function(e) {
                                e.close(), e.release();
                            }), e = "capiConnectionResolver", T["default"].start(e), t.next = 5, new f["default"](function(e) {
                                return v(e);
                            });

                          case 5:
                            n = t.sent, r.update({
                                authToCapiDegradation: !1
                            }), g["default"](A).forEach(function(e) {
                                return e.reconnect();
                            }), E.call("statsc.ui.timing", "stability:capi_restored_after_auth_degradation", T["default"].stop(e)), 
                            E.call("felog.warn", "stability.capi_restored_after_auth_degradation", {
                                count: n
                            });

                          case 10:
                          case "end":
                            return t.stop();
                        }
                    }, t, this);
                }));
                return function() {
                    return e.apply(this, arguments);
                };
            }(), b = function() {
                var e = c["default"](s["default"].mark(function t(e) {
                    var n, r = e.count, a = e.error;
                    return s["default"].wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return n = "exception", e.prev = 1, e.next = 4, N.getToken();

                          case 4:
                            n = e.sent, e.next = 9;
                            break;

                          case 7:
                            e.prev = 7, e.t0 = e["catch"](1);

                          case 9:
                            console.warn("log failed reconnect", r, a), E.call("felog.info", "stability:capi_error_in_fixer", {
                                token: n,
                                count: r,
                                error: a
                            });

                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, t, this, [ [ 1, 7 ] ]);
                }));
                return function(t) {
                    return e.apply(this, arguments);
                };
            }(), v = function() {
                var e = c["default"](s["default"].mark(function t(e) {
                    var n, a, o = arguments.length <= 1 || void 0 === arguments[1] ? 1e4 : arguments[1], i = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
                    return s["default"].wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return console.warn("Fixer inited, will try to connect in ", o / 1e3, "s., count:", i), 
                            t.next = 3, j.delay(o);

                          case 3:
                            return t.next = 5, r.refreshUser(!1, "recover_after_capi_error");

                          case 5:
                            n = w["default"]({
                                url: S.URLS.capi
                            }), a = function() {
                                n.close(), n.release(), n.emit = j._f, n = null;
                            }, n.emit = function(t) {
                                var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                                return "connect" == t ? n.send(P) : r.action && "start" == r.action ? (a(), console.warn("yay, we fixed capi connection!"), 
                                e(i)) : void ((r.error || "error" == t) && (a(), E.call("statsc.ui.increment", "stability:capi_error_in_fixer"), 
                                i % 10 == 0 && b({
                                    count: i,
                                    error: r.error
                                }), console.warn("still on error(", t, r), v(e, Math.min($, 2 * o), i + 1)));
                            }, n.connect();

                          case 9:
                          case "end":
                            return t.stop();
                        }
                    }, t, this);
                }));
                return function(t, n, r) {
                    return e.apply(this, arguments);
                };
            }(), _ = w["default"](e), y = e.socketId, x = void 0, C = 0, M = !1, O = _.emit, D = !1, I = void 0;
            return h["default"](_, {
                emit: o,
                reconnect: i,
                iframeMode: u,
                toString: function() {
                    return "[object BackgroundSocket]";
                }
            }), _;
        };
    }, {
        "babel-runtime/core-js/object/assign": 6,
        "babel-runtime/core-js/object/values": 12,
        "babel-runtime/core-js/promise": 13,
        "babel-runtime/helpers/asyncToGenerator": 17,
        "babel-runtime/helpers/extends": 21,
        "babel-runtime/regenerator": 123,
        emitter: "emitter",
        "lib/bg/cookie": 133,
        "lib/config": 175,
        "lib/message": 217,
        "lib/timers": 243,
        "lib/tracking": 247,
        "lib/util": 251,
        websocket: "websocket"
    } ],
    234: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            if ("disconnected" != e) {
                var t = {};
                "string" == typeof e ? t.msg = e : e.error && (t.readyState = e.error.currentTarget && e.error.currentTarget.readyState, 
                t.returnValue = e.error.returnValue), b.call("felog.error", "socket_fail_cs", t), 
                console.error("capi error", e), window.emit || c["default"](window), window.emit("bgerror", e || "when send message to the socket");
            }
        }
        function o(e) {
            g["default"].emitError(e);
        }
        function i(e) {
            function t(e, t) {
                var a = {
                    socketId: u,
                    method: e,
                    arg: t,
                    url: f,
                    useStandBy: p
                };
                _ || r(), g["default"].emitBackground("socket-client", a, null, o), "close" == e && n();
            }
            function n() {
                v.off("disconnect", n), g["default"].off("socket-server", i, o), _ = !1, h[u] && (delete h[u], 
                b.call("statsc.ui.timing", "activity:socket.close", m["default"].stop(u)));
            }
            function r() {
                _ = !0, g["default"].on("socket-server", i, o);
            }
            function i(e, t) {
                if (e.socketId == u) {
                    var n = e.msg || {};
                    n.action && "error" == n.action.toLowerCase() && (b.call("statsc.ui.increment", "stability:capi_error"), 
                    b.call("felog.error", "stability.capi_error", n)), t("ok"), v.emit(e.event, e.msg);
                }
            }
            var l = e.socketId, u = void 0 === l ? d.guid() : l, f = e.url, p = e.useStandBy, v = c["default"]({}), _ = !1, y = [ "connect", "send", "close", "reconnect", "release", "wsPlay", "wsPause" ];
            return y.forEach(function(e) {
                return v[e] = t.bind(null, e);
            }), v.one("connect", function() {
                h[u] = h[u] || u, m["default"].start(u), b.call("statsc.ui.timing", "activity:socket.open", s["default"](h).length);
            }), v.one("disconnect", n), v.on("error", a), v.socketId = u, v.toString = function() {
                return "[object SocketClient]";
            }, v;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var l = e("babel-runtime/core-js/object/keys"), s = r(l);
        n.SocketClient = i;
        var u = e("emitter"), c = r(u), d = e("lib/util"), f = e("lib/timers"), m = r(f), p = e("lib/message"), g = r(p), b = e("lib/tracking"), h = {};
    }, {
        "babel-runtime/core-js/object/keys": 10,
        emitter: "emitter",
        "lib/message": 217,
        "lib/timers": 243,
        "lib/tracking": 247,
        "lib/util": 251
    } ],
    235: [ function(e, t, n) {
        (function(r) {
            "use strict";
            function a(e) {
                return e && e.__esModule ? e : {
                    "default": e
                };
            }
            function o(t) {
                return (!l["default"] && !window.socketServer || window.gr___sandbox) && e("./bg").SocketServer(t), 
                s.isBg() ? e("./bg").SocketServer(t) : e("./cs").SocketClient(t);
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n["default"] = o;
            var i = "undefined" != typeof window ? window.forge : "undefined" != typeof r ? r.forge : null, l = a(i), s = e("lib/util");
            t.exports = n["default"];
        }).call(this, "undefined" != typeof window ? window : {});
    }, {
        "./bg": 233,
        "./cs": 234,
        "lib/util": 251
    } ],
    236: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            var t = e.el, n = i.guid(), r = o.renderReactWithParent(s["default"].createElement(c, null), t, n, "spinner");
            return {
                remove: r.remove,
                el: u.findDOMNode(r.component)
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./dom"), i = e("./util"), l = e("react"), s = r(l), u = e("react-dom"), c = s["default"].createClass({
            displayName: "SpinnerComponent",
            render: function() {
                return s["default"].createElement("div", {
                    className: "gr_-spinner " + this.props.className
                }, s["default"].createElement("div", {
                    className: "gr_-bounce1"
                }), s["default"].createElement("div", {
                    className: "gr_-bounce2"
                }), s["default"].createElement("div", {
                    className: "gr_-bounce3"
                }));
            }
        });
        a.SpinnerComponent = c, n["default"] = a, t.exports = n["default"];
    }, {
        "./dom": 179,
        "./util": 251,
        react: "react",
        "react-dom": "react-dom"
    } ],
    237: [ function(e, t, n) {
        "use strict";
        function r() {
            return {
                type: o,
                sync: !0
            };
        }
        function a(e) {
            return {
                type: i,
                data: {
                    bgNotConnected: !0,
                    online: !1
                },
                reason: e,
                sync: !1
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.incFixed = r, n.bgPageDown = a;
        var o = n.INC_FIXED = "user/INC_FIXED", i = (n.UPDATE_SETTINGS = "user/UPDATE_SETTINGS", 
        n.UPDATE_CONNECTION = "connection/UPDATE_CONNECTION");
    }, {} ],
    238: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            var t = l.createMirrorStore(e, {
                incFixed: c.incFixed,
                bgPageDown: c.bgPageDown
            }, u["default"]), n = t.store, r = t.actions;
            return i["default"].on("__bgerror", r.bgPageDown), {
                store: n,
                actions: r
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.createAndObserve = a;
        var o = e("lib/message"), i = r(o), l = e("lib/store-mirror"), s = e("./reducer"), u = r(s), c = e("./actions");
    }, {
        "./actions": 237,
        "./reducer": 239,
        "lib/message": 217,
        "lib/store-mirror": 241
    } ],
    239: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], t = arguments[1], n = t.type, r = t.data;
            switch (n) {
              case l.UPDATE_CONNECTION:
                return i["default"]({}, e, {
                    connection: i["default"]({}, e.connection, r)
                });

              default:
                return e;
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/helpers/extends"), i = r(o);
        n["default"] = a;
        var l = e("./actions");
        t.exports = n["default"];
    }, {
        "./actions": 237,
        "babel-runtime/helpers/extends": 21
    } ],
    240: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e, t) {
            function n() {
                var n = e.getState();
                m.isEmpty(n) || m.isEqual(r, n) || (r = n, t(n));
            }
            var r = void 0;
            return p.asyncCall(n), e.subscribe(n);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.bindActions = void 0;
        var o = e("babel-runtime/helpers/defineProperty"), i = r(o), l = e("babel-runtime/helpers/extends"), s = r(l), u = e("babel-runtime/core-js/object/assign"), c = r(u), d = e("babel-runtime/core-js/object/keys"), f = r(d);
        n.observeStore = a;
        var m = e("lodash"), p = e("lib/util");
        n.bindActions = function(e, t) {
            return f["default"](e).filter(function(t) {
                return e[t];
            }).reduce(function(n, r) {
                return c["default"](n, i["default"]({}, r, function() {
                    var n = e[r].apply(e, arguments), a = "undefined" == typeof n.sync ? !0 : n.sync;
                    return t(s["default"]({}, n, {
                        sync: a
                    }));
                }));
            }, {});
        };
    }, {
        "babel-runtime/core-js/object/assign": 6,
        "babel-runtime/core-js/object/keys": 10,
        "babel-runtime/helpers/defineProperty": 20,
        "babel-runtime/helpers/extends": 21,
        "lib/util": 251,
        lodash: "lodash"
    } ],
    241: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], n = arguments[2], r = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? h : arguments[0], t = arguments[1], r = (e.page || e.config || {}).domain;
                return t.sync && d["default"].emitBackground("dispatch", i["default"]({}, t, {
                    domain: r
                })), t.type == b ? i["default"]({}, e, t.data) : n ? n(e, t) : e;
            }, a = u.createStore(r, {}, u.applyMiddleware(g)), o = m.bindActions(i["default"]({}, f.actions, t), a.dispatch);
            return d["default"].on("state", function(e) {
                p.asyncCall(function() {
                    return a.dispatch({
                        type: b,
                        data: e
                    });
                }, 0);
            }), m.observeStore(a, e), {
                store: a,
                actions: o
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("babel-runtime/helpers/extends"), i = r(o);
        n.createMirrorStore = a;
        var l = e("redux-logger"), s = r(l), u = e("redux"), c = e("lib/message"), d = r(c), f = e("lib/bg/features"), m = e("./helpers"), p = e("../util"), g = s["default"]({
            level: "debug",
            collapsed: function() {
                return !0;
            },
            predicate: function() {
                return !1;
            }
        }), b = "store/SYNC", h = {
            page: {},
            connection: {}
        };
    }, {
        "../util": 251,
        "./helpers": 240,
        "babel-runtime/helpers/extends": 21,
        "lib/bg/features": 140,
        "lib/message": 217,
        redux: "redux",
        "redux-logger": "redux-logger"
    } ],
    242: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a() {
            function e() {
                l["default"].emitBackground("bg-reload", {});
            }
            function t() {
                l["default"].emitBackground("reset", {});
            }
            function n() {
                l["default"].emitBackground("get-tracker-log", {}, function(e) {
                    return o.emitDomEvent("tracker-log", e);
                });
            }
            function r() {
                l["default"].emitBackground("get-capi-log", {}, function(e) {
                    return o.emitDomEvent("capi-log", e);
                });
            }
            function a() {
                l["default"].emitBackground("get-extid", {}, function(e) {
                    return o.emitDomEvent("extid", e);
                });
            }
            function i() {
                l["default"].emitBackground("get-localforage", {}, function(e) {
                    return o.emitDomEvent("localforage", e);
                });
            }
            function s(e) {
                l["default"].emitBackground("set-localforage", {
                    key: e.key,
                    value: e.value
                }, function(e) {
                    return o.emitDomEvent("localforage", e);
                });
            }
            function c(e) {
                var t = e.key;
                u["default"].get(t).then(function(e) {
                    return o.emitDomEvent("pref", {
                        key: t,
                        value: e
                    });
                });
            }
            function d(e) {
                var t = e.key, n = e.value;
                u["default"].set(t, n);
            }
            o.listen(document, "bg-reload", e), o.listen(document, "reset", t), o.listen(document, "get-extid", a), 
            o.listen(document, "get-capi-log", r), o.listen(document, "get-tracker-log", n), 
            o.listen(document, "get-localforage", i), o.listen(document, "set-localforage", s), 
            o.listen(document, "get-pref", c), o.listen(document, "set-prefs", d);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n["default"] = a;
        var o = e("./dom"), i = e("./message"), l = r(i), s = e("./bg/prefs"), u = r(s);
        t.exports = n["default"];
    }, {
        "./bg/prefs": 160,
        "./dom": 179,
        "./message": 217
    } ],
    243: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = {};
        n["default"] = {
            start: function(e) {
                r[e] = Date.now();
            },
            stop: function(e) {
                var t = this.passed(e);
                return delete r[e], t;
            },
            passed: function(e) {
                return e && r[e] ? Date.now() - r[e] : 0;
            }
        }, t.exports = n["default"];
    }, {} ],
    244: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            function t(e, t) {
                t && (m["default"](e, t), d["default"](e, null), d["default"](e, t, i));
            }
            var n = e.mpCookie, r = e.gnar, a = e.dapi, o = w.getDomain(), i = {
                path: "/",
                domain: o,
                expires: new Date(new Date().setYear(new Date().getFullYear() + 1))
            };
            t(k.MIXPANEL.cookie, n), t(N, r), t("__fngrprnt__", a);
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.getContainerId = n.isValidContainerId = n.init = void 0;
        var o = e("babel-runtime/regenerator"), i = r(o), l = e("babel-runtime/helpers/asyncToGenerator"), s = r(l), u = (n.init = function() {
            var t = s["default"](i["default"].mark(function n() {
                var t, r;
                return i["default"].wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return t = function() {
                            return x.isFF() && y["default"].request.ajax;
                        }(), g["default"](), h["default"](), e("tracker"), T["default"]().init({
                            mixpanel: {
                                key: k.MIXPANEL.key,
                                qaKey: k.MIXPANEL.qaKey,
                                dapi: k.DAPI,
                                ajax: t
                            },
                            gnar: {
                                url: k.GNAR.url,
                                qaUrl: k.GNAR.qaUrl,
                                app: x.getBrowser() + "Ext",
                                appVersion: k.getVersion(),
                                ajax: t
                            },
                            felog: {
                                application: "browserplugin",
                                key: k.FELOG.key,
                                url: k.URLS.raven,
                                project: k.FELOG.project,
                                commit: k.getVersion(),
                                version: k.getVersion(),
                                readyOnSetUser: !0
                            },
                            statsc: {
                                url: k.STATSC.URL
                            }
                        }), T["default"]().statsc.createRoot({
                            prefix: k.STATSC.PREFIX,
                            postfix: x.getBrowser() + ".extension.world",
                            id: "ui"
                        }), setTimeout(function() {
                            return !T["default"]().felog.ready && T["default"]().felog.setUser({
                                id: 0,
                                type: "badUser"
                            });
                        }, S), n.next = 9, j();

                      case 9:
                        if (n.t0 = n.sent, n.t0) {
                            n.next = 12;
                            break;
                        }
                        n.t0 = m["default"]("mpCookie");

                      case 12:
                        if (r = n.t0) {
                            n.next = 15;
                            break;
                        }
                        return n.abrupt("return");

                      case 15:
                        window.mixpanel.persistence.load(), E.call("mixpanel.setProps", {
                            gProduct: "Extension-" + x.getBrowser(),
                            fullProductVersion: k.getVersion()
                        }, "Ext");

                      case 17:
                      case "end":
                        return n.stop();
                    }
                }, n, this);
            }));
            return function() {
                return t.apply(this, arguments);
            };
        }(), function() {
            var e = s["default"](i["default"].mark(function t() {
                var e;
                return i["default"].wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, t.next = 3, v.getCookie(N);

                      case 3:
                        if (e = t.sent, !M(e)) {
                            t.next = 7;
                            break;
                        }
                        return m["default"](N, e), t.abrupt("return", e);

                      case 7:
                        t.next = 12;
                        break;

                      case 9:
                        t.prev = 9, t.t0 = t["catch"](0), E.call("felog.error", "fetch_gnar_containerId_fail", {
                            error: t.t0,
                            placement: "cookie"
                        });

                      case 12:
                      case "end":
                        return t.stop();
                    }
                }, t, this, [ [ 0, 9 ] ]);
            }));
            return function() {
                return e.apply(this, arguments);
            };
        }());
        n.processCookiesFromGrammarly = a;
        var c = e("cookie"), d = r(c), f = e("local-storage"), m = r(f), p = e("vendor/mixpanel"), g = r(p), b = e("vendor/mixpanel-2.2"), h = r(b), v = e("../bg/cookie"), _ = e("lib/forge"), y = r(_), w = e("../location"), x = e("../util"), k = e("../config"), E = e("./call"), C = e("./tracker"), T = r(C), j = function() {
            return v.getCookie(k.MIXPANEL.cookie)["catch"](function() {
                return "";
            });
        }, S = 30 * x.SECOND, N = "gnar_containerId", A = "funnel_container_parsed", M = n.isValidContainerId = function(e) {
            if (!e || 12 != e.length) throw new Error("Invalid GNAR_CONTAINER_ID");
            return !0;
        };
        n.getContainerId = function() {
            var e = s["default"](i["default"].mark(function t() {
                var e, n;
                return i["default"].wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (t.prev = 0, e = m["default"](A)) {
                            t.next = 4;
                            break;
                        }
                        throw new Error("migrate me");

                      case 4:
                        t.next = 12;
                        break;

                      case 6:
                        return t.prev = 6, t.t0 = t["catch"](0), t.next = 10, u();

                      case 10:
                        E.call("felog.info", "migrated_to_fixed_containerId"), m["default"](A, !0);

                      case 12:
                        if (t.prev = 12, n = m["default"](N), !M(n)) {
                            t.next = 16;
                            break;
                        }
                        return t.abrupt("return", n);

                      case 16:
                        t.next = 21;
                        break;

                      case 18:
                        t.prev = 18, t.t1 = t["catch"](12), E.call("felog.error", "fetch_gnar_containerId_fail", {
                            error: t.t1,
                            placement: "prefs"
                        });

                      case 21:
                        return t.next = 23, u();

                      case 23:
                        return t.prev = 23, t.abrupt("return", T["default"]().gnar.meta().containerId);

                      case 27:
                        return t.prev = 27, t.t2 = t["catch"](23), E.call("felog.error", "fetch_gnar_containerId_fail", {
                            error: t.t2,
                            placement: "tracker"
                        }), t.abrupt("return", "");

                      case 31:
                      case "end":
                        return t.stop();
                    }
                }, t, void 0, [ [ 0, 6 ], [ 12, 18 ], [ 23, 27 ] ]);
            }));
            return function() {
                return e.apply(this, arguments);
            };
        }();
    }, {
        "../bg/cookie": 133,
        "../config": 175,
        "../location": 216,
        "../util": 251,
        "./call": 245,
        "./tracker": 250,
        "babel-runtime/helpers/asyncToGenerator": 17,
        "babel-runtime/regenerator": 123,
        cookie: "cookie",
        "lib/forge": 208,
        "local-storage": "local-storage",
        tracker: "tracker",
        "vendor/mixpanel": "vendor/mixpanel",
        "vendor/mixpanel-2.2": "vendor/mixpanel-2.2"
    } ],
    245: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
            var a = function(t) {
                return e.includes("felog") ? _["default"].apply(void 0, f["default"](l(n))) : e.includes("statsc.ui.increment") ? w["default"].apply(void 0, [ e.split(".").pop() ].concat(n)) : void console.warn("tracking call " + e + " failed, reason: ", t);
            };
            if (g.isBg()) return g.asyncCall(function() {
                try {
                    o(e, n);
                } catch (t) {
                    a(t);
                }
            }, 20);
            var i = 1e4, s = setTimeout(function() {
                return c("timeout call through bg page");
            }, i), u = function() {
                return clearInterval(s);
            }, c = function(e) {
                u(), a(e);
            };
            p["default"].emitBackground("tracking-call", {
                msg: e,
                data: n
            }, u, c);
        }
        function o(e, t) {
            var n = e.split("."), r = n.pop(), a = n.reduce(function(e, t) {
                return t in e ? e[t] : {};
            }, h["default"]());
            return a && a[r] ? (a[r].apply(a, f["default"](t)), void i(e, t)) : console.error("No method " + e + " in tracker object");
        }
        function i(e, t) {
            console.info(e, t);
        }
        function l() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0], t = {
                headers: {
                    "User-Agent": navigator.userAgent
                }
            };
            if (e.length < 2) return [ e[0], {
                request: t
            } ];
            var n = e[1], r = "string" == typeof n ? {
                message: n
            } : n;
            return [ e[0], c["default"]({}, r, {
                request: t
            }) ].concat(f["default"](e.slice(2)));
        }
        function s() {
            var e = x.slice(0);
            return x.length = 0, e;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var u = e("babel-runtime/helpers/extends"), c = r(u), d = e("babel-runtime/helpers/toConsumableArray"), f = r(d);
        n.call = a, n.runMessage = o, n.getLog = s;
        var m = e("../message"), p = r(m), g = e("../util"), b = e("./tracker"), h = r(b), v = e("./felogPixel"), _ = r(v), y = e("./statscPixel"), w = r(y), x = [];
    }, {
        "../message": 217,
        "../util": 251,
        "./felogPixel": 246,
        "./statscPixel": 249,
        "./tracker": 250,
        "babel-runtime/helpers/extends": 21,
        "babel-runtime/helpers/toConsumableArray": 26
    } ],
    246: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/core-js/json/stringify"), o = r(a);
        n["default"] = function(e, t) {
            var n = {};
            try {
                o["default"](t), n = t;
            } catch (r) {
                console.error(r);
            }
            var a = document.createElement("img"), l = {
                logger: "javascript",
                platform: "javascript",
                tags: {
                    application: "browserplugin",
                    fromPixel: !0,
                    commit: i.getVersion(),
                    version: i.getVersion()
                },
                message: e,
                extra: n
            }, s = "https://" + i.URLS.raven + "/api/" + i.FELOG.project + "/store/\n?sentry_version=4\n&sentry_client=raven-js/1.1.16\n&sentry_key=" + i.FELOG.key + "\n&sentry_data=" + encodeURIComponent(o["default"](l));
            return a.src = s, console.info(e, t), a;
        };
        var i = e("../config");
        t.exports = n["default"];
    }, {
        "../config": 175,
        "babel-runtime/core-js/json/stringify": 4
    } ],
    247: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a() {
            var t = e("./bgonly"), n = t.init, r = t.processCookiesFromGrammarly;
            n()["catch"](function(e) {
                return m.call("felog.error", "bg_tracking_start_fail", {
                    error: e
                });
            }), window.addEventListener("unhandledrejection", function(e) {
                window.onerror && window.onerror("Promise unhandledrejection", "", "", "", e.reason);
            }), window.__forgeExceptions && window.__forgeExceptions.length && window.onerror && window.__forgeExceptions.forEach(function(e) {
                var t;
                return (t = window).onerror.apply(t, s["default"](e));
            }), p = e("./on"), d["default"].on("tracking-fire", function(e) {
                var t = e.msg, n = e.data;
                return o.apply(void 0, [ t ].concat(s["default"](n)));
            }), d["default"].on("tracker-init", r), d["default"].on("tracking-call", function(e) {
                var t = e.msg, n = e.data, r = arguments.length <= 1 || void 0 === arguments[1] ? u._f : arguments[1];
                m.call.apply(void 0, [ t ].concat(s["default"](n))), r();
            }), o("activity-ping");
        }
        function o(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
            if (u.isBg()) {
                if (!p[e]) return console.error("No handler specified for message: " + e);
                u.asyncCall(function() {
                    var t;
                    return (t = p)[e].apply(t, n);
                }, 20);
            } else d["default"].emitBackground("tracking-fire", {
                msg: e,
                data: n
            });
        }
        function i() {
            function t() {
                n++, n > o && clearInterval(a);
                var e = {
                    mpCookie: r(f.MIXPANEL.cookie),
                    gnar: r("gnar_containerId"),
                    dapi: r("__fngrprnt__")
                };
                e.mpCookie && (clearInterval(a), d["default"].emitBackground("tracker-init", e));
            }
            var n = 0, r = e("cookie"), a = setInterval(t, 500), o = 10;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var l = e("babel-runtime/helpers/toConsumableArray"), s = r(l), u = e("../util"), c = e("../message"), d = r(c), f = e("../config"), m = e("./call"), p = {};
        n["default"] = {
            initBg: a,
            initContentScript: i,
            getLog: m.getLog,
            fire: o,
            call: m.call
        }, t.exports = n["default"];
    }, {
        "../config": 175,
        "../message": 217,
        "../util": 251,
        "./bgonly": 244,
        "./call": 245,
        "./on": 248,
        "babel-runtime/helpers/toConsumableArray": 26,
        cookie: "cookie"
    } ],
    248: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a, o = e("babel-runtime/helpers/defineProperty"), i = r(o), l = e("babel-runtime/regenerator"), s = r(l), u = e("babel-runtime/helpers/slicedToArray"), c = r(u), d = e("babel-runtime/helpers/asyncToGenerator"), f = r(d), m = e("../bg/prefs"), p = r(m), g = e("../config"), b = e("../util"), h = e("./call");
        n["default"] = (a = {}, i["default"](a, "activity-ping", function() {
            var e = function(e) {
                return parseFloat(Math.round(100 * e * 100) / 100).toFixed(2);
            };
            setInterval(function() {
                return b.isChrome() ? void (window.chrome.system && window.chrome.system.cpu && window.chrome.system.cpu.getInfo(function(t) {
                    var n = t.processors.map(function(e) {
                        return (e.usage.total - e.usage.idle) / e.usage.total;
                    }).reduce(function(e, t, n, r) {
                        return e + t / r.length;
                    }, 0), r = window.performance.memory, a = r.usedJSHeapSize, o = r.totalJSHeapSize;
                    n = e(n), h.call("statsc.ui.increment", "activity:activity_ping"), h.call("statsc.ui.gauge", {
                        "performance:memory_used": a,
                        "performance:memory_used_of_total": e((o - a) / o),
                        "performance:cpu_load": n
                    });
                })) : h.call("statsc.ui.increment", "activity:activity_ping");
            }, g.FELOG.pingTimeout);
        }), i["default"](a, "daily-ping", function(e, t) {
            var n = this;
            return f["default"](s["default"].mark(function r() {
                var a, o, i, l, u, d;
                return s["default"].wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (!g.debug && e) {
                            n.next = 2;
                            break;
                        }
                        return n.abrupt("return");

                      case 2:
                        return n.next = 4, p["default"].get("pingDate");

                      case 4:
                        if (a = n.sent, "string" != typeof a && (a = ""), o = a.split("|"), i = c["default"](o, 2), 
                        l = i[0], u = i[1], d = t ? "cookiesDisabled" : e, !(l && l > Date.now() && u == d)) {
                            n.next = 13;
                            break;
                        }
                        return n.abrupt("return");

                      case 13:
                        h.call("mixpanel.dapiEvent", "Daily_Ping", {
                            gProduct: "Extension-" + b.getBrowser()
                        }), h.call("gnar.trackTrackTrack"), h.call("mixpanel.track", "Ext:Daily_Ping"), 
                        h.call("felog.event", "daily_ping"), p["default"].set("pingDate", [ b.getNextPingDate(), d ].join("|"));

                      case 18:
                      case "end":
                        return n.stop();
                    }
                }, r, n);
            }))();
        }), i["default"](a, "app_signin_success", function() {
            h.call("mixpanel.track", "G:User_Login_Succeeded"), h.call("gnar.send", b.getBrowser() + "Ext/userLoginForm/accepted"), 
            h.call("statsc.ui.increment", "stability:app_signin_success");
        }), i["default"](a, "app_signup_success", function() {
            h.call("mixpanel.track", "G:User_Account_Created"), h.call("gnar.send", b.getBrowser() + "Ext/userAccountSignupForm/accepted"), 
            h.call("statsc.ui.increment", "stability:app_signup_success");
        }), i["default"](a, "signin-error", function(e) {
            e.errorType = "Server-Side", h.call("mixpanel.track", "G:User_Login_Rejected"), 
            h.call("gnar.send", b.getBrowser() + "Ext/userLoginForm/rejected");
        }), i["default"](a, "signup-error", function(e) {
            e.errorType = "Server-Side", h.call("mixpanel.track", "G:User_Signup_Rejected"), 
            h.call("gnar.send", b.getBrowser() + "Ext/userAccountSignupForm/rejected");
        }), i["default"](a, "upgrade-after-register", function() {
            function e() {
                return t.apply(this, arguments);
            }
            var t = f["default"](s["default"].mark(function n() {
                return s["default"].wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        h.call("mixpanel.track", "NE:Account_Type_Selected", {
                            accountTypeSelected: "premium"
                        }), h.call("gnar.send", b.getBrowser() + "Ext/Account_Type_Selected");

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, n, this);
            }));
            return e;
        }()), i["default"](a, "upgrade", function(e) {
            var t = {
                placement: e
            };
            h.call("gnar.send", b.getBrowser() + "Ext/upgradeButtonClicked", t), h.call("mixpanel.track", "Ext:Upgrade_To_Plus_Clicked", t), 
            h.call("felog.info", "upgrade_click", t), h.call("statsc.ui.increment", "activity:upgrade." + e + ".click");
        }), i["default"](a, "correct-btn-clicked", function() {
            h.call("mixpanel.track", "Ext:Gbutton_Clicked"), h.call("gnar.send", b.getBrowser() + "Ext/gbuttonClicked"), 
            h.call("statsc.ui.increment", "stability:editor.gbutton_clicked"), h.call("felog.event", "g_button_clicked");
        }), i["default"](a, "btn-disable-in-field", function(e) {
            h.call("mixpanel.track", "Ext:Checking_in_field_toggled", {
                enabled: e
            }), h.call("gnar.send", b.getBrowser() + "Ext/checkingInFieldToggled", {
                enabled: e
            }), h.call("statsc.ui.increment", "stability:disable_in_field." + (e ? "on" : "off")), 
            h.call("felog.info", "g_button_disable_in_field_click");
        }), i["default"](a, "button-change-state", function(e) {
            h.call("statsc.ui.increment", "stability:g_button_minimize_toggled");
        }), i["default"](a, "session-end", function(e) {
            h.call("mixpanel.track", "Ext:Only_Advanced_Mistakes", {
                advancedCount: e
            }), h.call("gnar.send", b.getBrowser() + "Ext/onlyAdvancedMistakes", {
                advancedCount: e
            }), h.call("felog.info", "only_advanced_mistakes", {
                advancedCount: e
            });
        }), i["default"](a, "login-attempt", function(e) {
            h.call("gnar.send", b.getBrowser() + "Ext/signInClicked", {
                placement: e
            }), h.call("mixpanel.track", "Ext:Sign_In_Clicked", {
                placement: e
            });
        }), i["default"](a, "show-dictionary", function() {
            h.call("gnar.send", b.getBrowser() + "Ext/showDictionary"), h.call("mixpanel.track", "Ext:Show_Dictionary");
        }), i["default"](a, "referral-shown", function(e) {
            h.call("mixpanel.track", "WE:Referral_Notification_Shown", {
                placement: e
            }), h.call("gnar.send", "referral/referralNotificationShown", {
                placement: e
            });
        }), i["default"](a, "referral-clicked", function(e) {
            h.call("mixpanel.track", "WE:Referral_Button_Clicked", {
                placement: e
            }), h.call("gnar.send", "referral/referralButtonClicked", {
                placement: e
            });
        }), i["default"](a, "tab-connected", function(e, t, n) {
            var r = t.enabled, a = n.cookiesDisabled;
            this["daily-ping"](e, a), r || (h.call("felog.info", "not_enable_on_domain"), h.call("gnar.send", b.getBrowser() + "Ext/notEnableOnDomain"));
        }), i["default"](a, "session-invalidate", function(e, t, n, r) {
            var a = e.id, o = e.name, i = e.anonymous, l = e.premium, s = e.email, u = e.type;
            a != t.id && (h.call("gnar.setUser", a), h.call("mixpanel.initProps"), h.call("felog.setUser", {
                id: a,
                name: o,
                anonymous: i,
                premium: l,
                email: s,
                type: u
            }), this["daily-ping"](a, r)), n && h.call("felog.info", "session_invalidated_by", {
                reason: n,
                userChanged: a != t.id
            }), t.email && !t.anonymous && i && h.call("felog.warn", "unexpected_user_convert_to_anonymous", {
                email: t.email,
                token: t.token,
                grauth: t.grauth,
                tokenEqualsGrauth: t.token == t.grauth,
                cookiesDisabled: r,
                reason: n
            });
        }), i["default"](a, "set-weak-dialect", function(e) {
            h.call("mixpanel.track", "G:Language_Weak_Preference", {
                dialect: e
            }), h.call("gnar.send", b.getBrowser() + "Ext/languageWeakPreference", {
                dialect: e
            }), h.call("statsc.ui.increment", "stability:weak_dialect_changed"), h.call("felog.info", "weak_dialect_changed", {
                dialect: e
            });
        }), i["default"](a, "change-dialect", function(e) {
            var t = e.language, n = e.dialectWeak, r = {
                language: t
            };
            n && (r.sameAsWeak = t == n), h.call("felog.info", "language_dialect_changed", r), 
            h.call("mixpanel.track", "G:Language_Strong_Preference", r), h.call("gnar.send", b.getBrowser() + "Ext/languageStrongPreference", r), 
            h.call("statsc.ui.increment", "stability:language_dialect_changed");
        }), i["default"](a, "get-dapi-prop-error", function(e, t) {
            h.call("statsc.ui.increment", "stability:get_dapi_prop_error"), h.call("felog.info", "get_dapi_prop_error", {
                error: t,
                property: e
            });
        }), i["default"](a, "set-dapi-prop-error", function(e, t) {
            h.call("statsc.ui.increment", "stability:set_dapi_prop_error"), h.call("felog.info", "set_dapi_prop_error", {
                error: t,
                property: e
            });
        }), i["default"](a, "change-defs", function(e) {
            h.call("felog.info", "toggle_extension_defs", e), h.call("mixpanel.track", "Ext:Definitions_Toggled:Popup", e), 
            h.call("statsc.ui.increment", "stability:definitions_toggled"), h.call("gnar.send", b.getBrowser() + "Ext/definitionsToggled", e);
        }), i["default"](a, "change-grammar", function(e) {
            h.call("felog.info", "toggle_extension_on_site", e), h.call("statsc.ui.increment", "stability:toggle_extension_on_site"), 
            h.call("mixpanel.track", "Ext:Checking_Toggled:Popup", e), h.call("gnar.send", b.getBrowser() + "Ext/checkingToggled", e);
        }), i["default"](a, "popup-open", function() {
            h.call("felog.info", "extension_toolbar_btn_click"), h.call("gnar.send", b.getBrowser() + "Ext/browserToolbarButtonClicked"), 
            h.call("mixpanel.track", "Ext:Browser_Toolbar_Button_Clicked");
        }), i["default"](a, "popup-open-on-unsupported", function() {
            h.call("gnar.send", b.getBrowser() + "Ext/browserToolbarButtonClicked/unsupported"), 
            h.call("mixpanel.track", "Ext:Settings_Open_Unsupported_Domain");
        }), i["default"](a, "cookie-overflow", function(e, t) {
            h.call("felog.warn", "too_big_cookie_header", {
                total: e,
                biggestCookie: t
            }), h.call("statsc.ui.timing", "stability:too_big_cookie_header.total", e);
        }), i["default"](a, "premium-popup-show", function() {
            h.call("mixpanel.track", "Ext:Upgrade_Referral_Popup_Shown"), h.call("gnar.send", b.getBrowser() + "Ext/upgradeReferralPopupShown");
        }), i["default"](a, "premium-popup-upgrade-click", function() {
            h.call("mixpanel.track", "Ext:Upgrade_Referral_Premium_Btn_Clicked"), h.call("gnar.send", b.getBrowser() + "Ext/upgradeReferralPremiumBtnClicked");
        }), i["default"](a, "premium-popup-referral-click", function() {
            h.call("mixpanel.track", "Ext:Upgrade_Referral_Invite_Btn_Clicked"), h.call("gnar.send", b.getBrowser() + "Ext/upgradeReferralInviteBtnClicked");
        }), a), t.exports = n["default"];
    }, {
        "../bg/prefs": 160,
        "../config": 175,
        "../util": 251,
        "./call": 245,
        "babel-runtime/helpers/asyncToGenerator": 17,
        "babel-runtime/helpers/defineProperty": 20,
        "babel-runtime/helpers/slicedToArray": 25,
        "babel-runtime/regenerator": 123
    } ],
    249: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("babel-runtime/core-js/json/stringify"), o = r(a);
        n["default"] = function(e, t) {
            var n = t && t.split(":");
            if (n[0] && n[1]) {
                var r = "grammarly.ui." + n[0] + "." + i.getBrowser() + ".extension.world." + n[1], a = {
                    c: {}
                };
                a.c[r] = [ "1" ];
                var s = document.createElement("img");
                return s.src = l.STATSC.URL + "?json=" + o["default"](a), console.info(e, t), s;
            }
        };
        var i = e("../util"), l = e("../config");
        t.exports = n["default"];
    }, {
        "../config": 175,
        "../util": 251,
        "babel-runtime/core-js/json/stringify": 4
    } ],
    250: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n["default"] = function() {
            return window.tracker;
        }, t.exports = n["default"];
    }, {} ],
    251: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a() {
            return -1 != window.navigator.userAgent.indexOf("Firefox");
        }
        function o() {
            return !!window.chrome;
        }
        function i() {
            return /^((?!chrome).)*safari/i.test(navigator.userAgent);
        }
        function l() {
            return /^((?!chrome).)*safari/i.test(navigator.userAgent) && -1 != navigator.userAgent.indexOf("Version/8.0");
        }
        function s() {
            return -1 != navigator.appVersion.indexOf("Win");
        }
        function u() {
            return window.IS_BG;
        }
        function c() {
            return window.IS_POPUP;
        }
        function d() {
            return u() || c();
        }
        function f() {
            return o() ? "chrome" : a() ? "firefox" : i() ? "safari" : "other";
        }
        function m(e) {
            var t = -1 != [ "freeeeeeee@grammarly.com", "premiumuser@grammarly.com" ].indexOf(e);
            return !t && /^.*@grammarly.com$/.test(e);
        }
        function p() {
            return window.chrome && window.chrome.runtime && window.chrome.runtime.lastError;
        }
        function g(e) {
            return !!(e && e.constructor && e.call && e.apply);
        }
        function b(e, t) {
            function n() {
                function n() {
                    a(), e();
                }
                function a() {
                    var a = setTimeout(n, t);
                    r[e] = a;
                }
                a();
            }
            var r = b.items = b.items || {}, a = r[e];
            if (a || t) return a && !t ? (clearTimeout(a), void delete r[e]) : void n();
        }
        function h(e) {
            b(e);
        }
        function v() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
        }
        function _() {
            return v() + v() + "-" + v() + "-" + v() + "-" + v() + "-" + v() + v() + v();
        }
        function y() {}
        function w() {
            return !0;
        }
        function x() {
            o() && window.chrome.runtime.reload();
        }
        function k(e) {
            if (e.location) {
                var t = "mail.google.com" == e.location.host, n = e.querySelector("iframe#js_frame") && e.querySelector("iframe#sound_frame");
                return t || n;
            }
        }
        function E(e) {
            return /^[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+@[-!#$%&\'*+\\/0-9=?A-Z^_`a-z{|}~]+\.[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+$/.test(e);
        }
        function C(e) {
            return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        function T(e, t) {
            return t[1 == e ? 0 : 1];
        }
        function j(e) {
            return re["default"].transform(e, function(e, t) {
                return e[t] = y;
            });
        }
        function S(e, t, n) {
            var r = {};
            return function() {
                var a = "_memoize_" + (t ? t.apply(this, arguments) : arguments[0]);
                return hasOwnProperty.call(r, a) ? r[a] : (n && setTimeout(function() {
                    delete r[a];
                }, n), r[a] = e.apply(this, arguments));
            };
        }
        function N(e, t) {
            return ee["default"](t).reduce(function(n, r) {
                return Z["default"]({}, n, X["default"]({}, r, function() {
                    for (var n = arguments.length, a = Array(n), o = 0; n > o; o++) a[o] = arguments[o];
                    return e.then(function() {
                        return t[r].apply(t, a);
                    });
                }));
            }, {});
        }
        function A(e) {
            return new K["default"](function(t) {
                return e(t);
            });
        }
        function M(e, t) {
            return Math.floor(Math.random() * (t - e + 1)) + e;
        }
        function P(e) {
            return new K["default"](function(t) {
                return setTimeout(t, e);
            });
        }
        function $(e) {
            if (e) {
                var t = new Date(e);
                if ("Invalid Date" != t.toString()) return ie[t.getMonth()] + " " + t.getDate() + ", " + t.getFullYear();
            }
        }
        function O(e) {
            var t = function() {};
            return t.prototype = e(), t;
        }
        function D() {
            function e(e) {
                return e.split(".").map(function(e) {
                    return Number(e) || 0;
                });
            }
            var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0], n = arguments.length <= 1 || void 0 === arguments[1] ? "" : arguments[1], r = e(t), a = e(n), o = Array(Math.abs(r.length - a.length)).fill(0);
            if (r.length > a.length ? a.push.apply(a, z["default"](o)) : r.push.apply(r, z["default"](o)), 
            r.every(function(e, t) {
                return e === a[t];
            })) return 0;
            for (var i = 0, l = r.length; l > i; i++) {
                if (r[i] > a[i]) return 1;
                if (r[i] < a[i]) return -1;
            }
            return -1;
        }
        function I(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? 10 : arguments[1];
            setTimeout(e, t);
        }
        function R() {
            function e(e) {
                if (i.length) {
                    var t = i.shift();
                    t(e);
                } else a ? o.push(e) : o[0] = e;
            }
            function t() {
                return o.length ? K["default"].resolve(o.shift()) : new K["default"](function(e) {
                    return i.push(e);
                });
            }
            var n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], r = n.buffered, a = void 0 === r ? !0 : r, o = [], i = [];
            return {
                take: t,
                put: e
            };
        }
        function L(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? 100 : arguments[1];
            if (!e) return NaN;
            var n = oe["default"].createHash("superfasthash");
            return parseInt(n.hash(e), 16) % t;
        }
        function F(e) {
            return e.which || e.charCode || e.keyCode || 0;
        }
        function G() {
            var e = new Date();
            return e.getHours() > 2 && e.setDate(e.getDate() + 1), e.setHours(3), e.setMinutes(Math.floor(60 * Math.random())), 
            e.getTime();
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var U = e("babel-runtime/regenerator"), B = r(U), V = e("babel-runtime/helpers/asyncToGenerator"), H = r(V), W = e("babel-runtime/helpers/toConsumableArray"), z = r(W), q = e("babel-runtime/core-js/promise"), K = r(q), Y = e("babel-runtime/helpers/defineProperty"), X = r(Y), J = e("babel-runtime/helpers/extends"), Z = r(J), Q = e("babel-runtime/core-js/object/keys"), ee = r(Q), te = function() {
            var e = H["default"](B["default"].mark(function t() {
                return B["default"].wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (o()) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return", null);

                      case 2:
                        return e.prev = 2, e.next = 5, K["default"].race([ new K["default"](function(e) {
                            return window.chrome.runtime.sendMessage("ping", e);
                        }), P(1e4).then(function() {
                            return "timeouted";
                        }) ]);

                      case 5:
                        return e.abrupt("return", e.sent);

                      case 8:
                        return e.prev = 8, e.t0 = e["catch"](2), e.abrupt("return", "orphaned");

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, t, this, [ [ 2, 8 ] ]);
            }));
            return function() {
                return e.apply(this, arguments);
            };
        }(), ne = e("lodash"), re = r(ne), ae = e("non-crypto-hash"), oe = r(ae), ie = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ], le = 1e3, se = 60 * le, ue = 60 * se, ce = 24 * ue, de = function(e) {
            return Math.round(Math.abs(new Date() - new Date(e)) / ce);
        };
        n["default"] = {
            getBrowser: f,
            isFunction: g,
            chromeBgError: p,
            interval: b,
            declension: T,
            cancelInterval: h,
            bgPageReload: x,
            isFF: a,
            isChrome: o,
            isSafari: i,
            isSafari8: l,
            isGmail: k,
            isWindows: s,
            isBg: u,
            isBgOrPopup: d,
            isPopup: c,
            isGrammarlyEmail: m,
            guid: _,
            formatNumber: C,
            getRandomIntInclusive: M,
            stub: j,
            memoize: S,
            syncWait: N,
            promisify: A,
            delay: P,
            formatDate: $,
            createClass: O,
            versionComparator: D,
            isValidEmail: E,
            isBgAlive: te,
            asyncCall: I,
            createChannel: R,
            normalizedHashCode: L,
            keyCode: F,
            _f: y,
            _F: w,
            getNextPingDate: G,
            pastDays: de,
            SECOND: le,
            MINUTE: se,
            HOUR: ue,
            DAY: ce
        }, t.exports = n["default"];
    }, {
        "babel-runtime/core-js/object/keys": 10,
        "babel-runtime/core-js/promise": 13,
        "babel-runtime/helpers/asyncToGenerator": 17,
        "babel-runtime/helpers/defineProperty": 20,
        "babel-runtime/helpers/extends": 21,
        "babel-runtime/helpers/toConsumableArray": 26,
        "babel-runtime/regenerator": 123,
        lodash: "lodash",
        "non-crypto-hash": "non-crypto-hash"
    } ],
    252: [ function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function a(e, t, n, r) {
            var a = r ? t + "_forced" : t, o = {
                listeners: []
            }, i = function(e) {
                var t = o.listeners.indexOf(n);
                t > -1 && o.listeners.splice(t, 1);
            };
            if (("on" == e || "once" == e) && (o = v[a] || (v[a] = {
                domEventListener: function(t) {
                    h.emit(a, t), "once" == e && i(n);
                },
                listeners: []
            }), o.domEventListener.__wrapFunc = o.domEventListener.__wrapFunc || function(e) {
                o.domEventListener(m["default"]({
                    originalEvent: e,
                    preventDefault: b._f,
                    stopPropagation: b._f
                }, e.detail));
            }, 0 == o.listeners.length && (window.addEventListener(t, o.domEventListener, r), 
            window.addEventListener(t + "-gr", o.domEventListener.__wrapFunc, r)), o.listeners.push(n)), 
            "un" == e) {
                var l = v[a];
                if (!l) return;
                i(n), 0 == l.listeners.length && (window.removeEventListener(t, l.domEventListener, r), 
                window.removeEventListener(t + "-gr", l.domEventListener.__wrapFunc, r));
            }
            h[e](a, n);
        }
        function o(e) {
            return function(t, n, r) {
                if ("object" == ("undefined" == typeof t ? "undefined" : d["default"](t))) {
                    var o = !0, i = !1, s = void 0;
                    try {
                        for (var c, f = u["default"](l["default"](t)); !(o = (c = f.next()).done); o = !0) {
                            var m = c.value;
                            a(e, m, t[m], n);
                        }
                    } catch (p) {
                        i = !0, s = p;
                    } finally {
                        try {
                            !o && f["return"] && f["return"]();
                        } finally {
                            if (i) throw s;
                        }
                    }
                } else a(e, t, n, r);
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("babel-runtime/core-js/object/keys"), l = r(i), s = e("babel-runtime/core-js/get-iterator"), u = r(s), c = e("babel-runtime/helpers/typeof"), d = r(c), f = e("babel-runtime/helpers/extends"), m = r(f), p = e("emitter"), g = r(p), b = e("./util"), h = g["default"]({}), v = {};
        n["default"] = {
            on: o("on"),
            off: o("un"),
            once: o("one")
        }, t.exports = n["default"];
    }, {
        "./util": 251,
        "babel-runtime/core-js/get-iterator": 2,
        "babel-runtime/core-js/object/keys": 10,
        "babel-runtime/helpers/extends": 21,
        "babel-runtime/helpers/typeof": 27,
        emitter: "emitter"
    } ]
}, {}, [ 130 ]);