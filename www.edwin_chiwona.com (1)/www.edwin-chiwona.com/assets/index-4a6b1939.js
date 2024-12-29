function ig(t, e) {
    for (var n = 0; n < e.length; n++) {
        const i = e[n];
        if (typeof i != "string" && !Array.isArray(i)) {
            for (const r in i)
                if (r !== "default" && !(r in t)) {
                    const o = Object.getOwnPropertyDescriptor(i, r);
                    o && Object.defineProperty(t, r, o.get ? o : {
                        enumerable: !0,
                        get: () => i[r]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
    new MutationObserver(r => {
        for (const o of r)
            if (o.type === "childList")
                for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && i(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(r) {
        const o = {};
        return r.integrity && (o.integrity = r.integrity), r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? o.credentials = "include" : r.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function i(r) {
        if (r.ep) return;
        r.ep = !0;
        const o = n(r);
        fetch(r.href, o)
    }
})();

function Df(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var Af = {
        exports: {}
    },
    ws = {},
    Nf = {
        exports: {}
    },
    W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wr = Symbol.for("react.element"),
    rg = Symbol.for("react.portal"),
    og = Symbol.for("react.fragment"),
    sg = Symbol.for("react.strict_mode"),
    lg = Symbol.for("react.profiler"),
    ag = Symbol.for("react.provider"),
    ug = Symbol.for("react.context"),
    cg = Symbol.for("react.forward_ref"),
    dg = Symbol.for("react.suspense"),
    fg = Symbol.for("react.memo"),
    hg = Symbol.for("react.lazy"),
    jc = Symbol.iterator;

function pg(t) {
    return t === null || typeof t != "object" ? null : (t = jc && t[jc] || t["@@iterator"], typeof t == "function" ? t : null)
}
var Ff = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    Uf = Object.assign,
    Bf = {};

function Di(t, e, n) {
    this.props = t, this.context = e, this.refs = Bf, this.updater = n || Ff
}
Di.prototype.isReactComponent = {};
Di.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState")
};
Di.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate")
};

function Wf() {}
Wf.prototype = Di.prototype;

function pu(t, e, n) {
    this.props = t, this.context = e, this.refs = Bf, this.updater = n || Ff
}
var mu = pu.prototype = new Wf;
mu.constructor = pu;
Uf(mu, Di.prototype);
mu.isPureReactComponent = !0;
var Oc = Array.isArray,
    Vf = Object.prototype.hasOwnProperty,
    gu = {
        current: null
    },
    Hf = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Qf(t, e, n) {
    var i, r = {},
        o = null,
        s = null;
    if (e != null)
        for (i in e.ref !== void 0 && (s = e.ref), e.key !== void 0 && (o = "" + e.key), e) Vf.call(e, i) && !Hf.hasOwnProperty(i) && (r[i] = e[i]);
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a
    }
    if (t && t.defaultProps)
        for (i in l = t.defaultProps, l) r[i] === void 0 && (r[i] = l[i]);
    return {
        $$typeof: Wr,
        type: t,
        key: o,
        ref: s,
        props: r,
        _owner: gu.current
    }
}

function mg(t, e) {
    return {
        $$typeof: Wr,
        type: t.type,
        key: e,
        ref: t.ref,
        props: t.props,
        _owner: t._owner
    }
}

function vu(t) {
    return typeof t == "object" && t !== null && t.$$typeof === Wr
}

function gg(t) {
    var e = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function(n) {
        return e[n]
    })
}
var Ic = /\/+/g;

function fl(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? gg("" + t.key) : e.toString(36)
}

function ko(t, e, n, i, r) {
    var o = typeof t;
    (o === "undefined" || o === "boolean") && (t = null);
    var s = !1;
    if (t === null) s = !0;
    else switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (t.$$typeof) {
                case Wr:
                case rg:
                    s = !0
            }
    }
    if (s) return s = t, r = r(s), t = i === "" ? "." + fl(s, 0) : i, Oc(r) ? (n = "", t != null && (n = t.replace(Ic, "$&/") + "/"), ko(r, e, n, "", function(u) {
        return u
    })) : r != null && (vu(r) && (r = mg(r, n + (!r.key || s && s.key === r.key ? "" : ("" + r.key).replace(Ic, "$&/") + "/") + t)), e.push(r)), 1;
    if (s = 0, i = i === "" ? "." : i + ":", Oc(t))
        for (var l = 0; l < t.length; l++) {
            o = t[l];
            var a = i + fl(o, l);
            s += ko(o, e, n, a, r)
        } else if (a = pg(t), typeof a == "function")
            for (t = a.call(t), l = 0; !(o = t.next()).done;) o = o.value, a = i + fl(o, l++), s += ko(o, e, n, a, r);
        else if (o === "object") throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function Jr(t, e, n) {
    if (t == null) return t;
    var i = [],
        r = 0;
    return ko(t, i, "", "", function(o) {
        return e.call(n, o, r++)
    }), i
}

function vg(t) {
    if (t._status === -1) {
        var e = t._result;
        e = e(), e.then(function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 1, t._result = n)
        }, function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 2, t._result = n)
        }), t._status === -1 && (t._status = 0, t._result = e)
    }
    if (t._status === 1) return t._result.default;
    throw t._result
}
var Ge = {
        current: null
    },
    So = {
        transition: null
    },
    yg = {
        ReactCurrentDispatcher: Ge,
        ReactCurrentBatchConfig: So,
        ReactCurrentOwner: gu
    };
W.Children = {
    map: Jr,
    forEach: function(t, e, n) {
        Jr(t, function() {
            e.apply(this, arguments)
        }, n)
    },
    count: function(t) {
        var e = 0;
        return Jr(t, function() {
            e++
        }), e
    },
    toArray: function(t) {
        return Jr(t, function(e) {
            return e
        }) || []
    },
    only: function(t) {
        if (!vu(t)) throw Error("React.Children.only expected to receive a single React element child.");
        return t
    }
};
W.Component = Di;
W.Fragment = og;
W.Profiler = lg;
W.PureComponent = pu;
W.StrictMode = sg;
W.Suspense = dg;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yg;
W.cloneElement = function(t, e, n) {
    if (t == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
    var i = Uf({}, t.props),
        r = t.key,
        o = t.ref,
        s = t._owner;
    if (e != null) {
        if (e.ref !== void 0 && (o = e.ref, s = gu.current), e.key !== void 0 && (r = "" + e.key), t.type && t.type.defaultProps) var l = t.type.defaultProps;
        for (a in e) Vf.call(e, a) && !Hf.hasOwnProperty(a) && (i[a] = e[a] === void 0 && l !== void 0 ? l[a] : e[a])
    }
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
        i.children = l
    }
    return {
        $$typeof: Wr,
        type: t.type,
        key: r,
        ref: o,
        props: i,
        _owner: s
    }
};
W.createContext = function(t) {
    return t = {
        $$typeof: ug,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, t.Provider = {
        $$typeof: ag,
        _context: t
    }, t.Consumer = t
};
W.createElement = Qf;
W.createFactory = function(t) {
    var e = Qf.bind(null, t);
    return e.type = t, e
};
W.createRef = function() {
    return {
        current: null
    }
};
W.forwardRef = function(t) {
    return {
        $$typeof: cg,
        render: t
    }
};
W.isValidElement = vu;
W.lazy = function(t) {
    return {
        $$typeof: hg,
        _payload: {
            _status: -1,
            _result: t
        },
        _init: vg
    }
};
W.memo = function(t, e) {
    return {
        $$typeof: fg,
        type: t,
        compare: e === void 0 ? null : e
    }
};
W.startTransition = function(t) {
    var e = So.transition;
    So.transition = {};
    try {
        t()
    } finally {
        So.transition = e
    }
};
W.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
};
W.useCallback = function(t, e) {
    return Ge.current.useCallback(t, e)
};
W.useContext = function(t) {
    return Ge.current.useContext(t)
};
W.useDebugValue = function() {};
W.useDeferredValue = function(t) {
    return Ge.current.useDeferredValue(t)
};
W.useEffect = function(t, e) {
    return Ge.current.useEffect(t, e)
};
W.useId = function() {
    return Ge.current.useId()
};
W.useImperativeHandle = function(t, e, n) {
    return Ge.current.useImperativeHandle(t, e, n)
};
W.useInsertionEffect = function(t, e) {
    return Ge.current.useInsertionEffect(t, e)
};
W.useLayoutEffect = function(t, e) {
    return Ge.current.useLayoutEffect(t, e)
};
W.useMemo = function(t, e) {
    return Ge.current.useMemo(t, e)
};
W.useReducer = function(t, e, n) {
    return Ge.current.useReducer(t, e, n)
};
W.useRef = function(t) {
    return Ge.current.useRef(t)
};
W.useState = function(t) {
    return Ge.current.useState(t)
};
W.useSyncExternalStore = function(t, e, n) {
    return Ge.current.useSyncExternalStore(t, e, n)
};
W.useTransition = function() {
    return Ge.current.useTransition()
};
W.version = "18.2.0";
Nf.exports = W;
var x = Nf.exports;
const Ht = Df(x),
    wg = ig({
        __proto__: null,
        default: Ht
    }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xg = x,
    kg = Symbol.for("react.element"),
    Sg = Symbol.for("react.fragment"),
    _g = Object.prototype.hasOwnProperty,
    bg = xg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Cg = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Gf(t, e, n) {
    var i, r = {},
        o = null,
        s = null;
    n !== void 0 && (o = "" + n), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (s = e.ref);
    for (i in e) _g.call(e, i) && !Cg.hasOwnProperty(i) && (r[i] = e[i]);
    if (t && t.defaultProps)
        for (i in e = t.defaultProps, e) r[i] === void 0 && (r[i] = e[i]);
    return {
        $$typeof: kg,
        type: t,
        key: o,
        ref: s,
        props: r,
        _owner: bg.current
    }
}
ws.Fragment = Sg;
ws.jsx = Gf;
ws.jsxs = Gf;
Af.exports = ws;
var m = Af.exports,
    Oo = {},
    Yf = {
        exports: {}
    },
    dt = {},
    Xf = {
        exports: {}
    },
    Kf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(t) {
    function e(P, I) {
        var D = P.length;
        P.push(I);
        e: for (; 0 < D;) {
            var ne = D - 1 >>> 1,
                $ = P[ne];
            if (0 < r($, I)) P[ne] = I, P[D] = $, D = ne;
            else break e
        }
    }

    function n(P) {
        return P.length === 0 ? null : P[0]
    }

    function i(P) {
        if (P.length === 0) return null;
        var I = P[0],
            D = P.pop();
        if (D !== I) {
            P[0] = D;
            e: for (var ne = 0, $ = P.length, R = $ >>> 1; ne < R;) {
                var j = 2 * (ne + 1) - 1,
                    A = P[j],
                    S = j + 1,
                    V = P[S];
                if (0 > r(A, D)) S < $ && 0 > r(V, A) ? (P[ne] = V, P[S] = D, ne = S) : (P[ne] = A, P[j] = D, ne = j);
                else if (S < $ && 0 > r(V, D)) P[ne] = V, P[S] = D, ne = S;
                else break e
            }
        }
        return I
    }

    function r(P, I) {
        var D = P.sortIndex - I.sortIndex;
        return D !== 0 ? D : P.id - I.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        t.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date,
            l = s.now();
        t.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = [],
        u = [],
        c = 1,
        f = null,
        d = 3,
        v = !1,
        y = !1,
        w = !1,
        _ = typeof setTimeout == "function" ? setTimeout : null,
        p = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function g(P) {
        for (var I = n(u); I !== null;) {
            if (I.callback === null) i(u);
            else if (I.startTime <= P) i(u), I.sortIndex = I.expirationTime, e(a, I);
            else break;
            I = n(u)
        }
    }

    function k(P) {
        if (w = !1, g(P), !y)
            if (n(a) !== null) y = !0, Qt(C);
            else {
                var I = n(u);
                I !== null && We(k, I.startTime - P)
            }
    }

    function C(P, I) {
        y = !1, w && (w = !1, p(M), M = -1), v = !0;
        var D = d;
        try {
            for (g(I), f = n(a); f !== null && (!(f.expirationTime > I) || P && !Se());) {
                var ne = f.callback;
                if (typeof ne == "function") {
                    f.callback = null, d = f.priorityLevel;
                    var $ = ne(f.expirationTime <= I);
                    I = t.unstable_now(), typeof $ == "function" ? f.callback = $ : f === n(a) && i(a), g(I)
                } else i(a);
                f = n(a)
            }
            if (f !== null) var R = !0;
            else {
                var j = n(u);
                j !== null && We(k, j.startTime - I), R = !1
            }
            return R
        } finally {
            f = null, d = D, v = !1
        }
    }
    var T = !1,
        L = null,
        M = -1,
        H = 5,
        N = -1;

    function Se() {
        return !(t.unstable_now() - N < H)
    }

    function ve() {
        if (L !== null) {
            var P = t.unstable_now();
            N = P;
            var I = !0;
            try {
                I = L(!0, P)
            } finally {
                I ? Ee() : (T = !1, L = null)
            }
        } else T = !1
    }
    var Ee;
    if (typeof h == "function") Ee = function() {
        h(ve)
    };
    else if (typeof MessageChannel < "u") {
        var nt = new MessageChannel,
            je = nt.port2;
        nt.port1.onmessage = ve, Ee = function() {
            je.postMessage(null)
        }
    } else Ee = function() {
        _(ve, 0)
    };

    function Qt(P) {
        L = P, T || (T = !0, Ee())
    }

    function We(P, I) {
        M = _(function() {
            P(t.unstable_now())
        }, I)
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(P) {
        P.callback = null
    }, t.unstable_continueExecution = function() {
        y || v || (y = !0, Qt(C))
    }, t.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < P ? Math.floor(1e3 / P) : 5
    }, t.unstable_getCurrentPriorityLevel = function() {
        return d
    }, t.unstable_getFirstCallbackNode = function() {
        return n(a)
    }, t.unstable_next = function(P) {
        switch (d) {
            case 1:
            case 2:
            case 3:
                var I = 3;
                break;
            default:
                I = d
        }
        var D = d;
        d = I;
        try {
            return P()
        } finally {
            d = D
        }
    }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(P, I) {
        switch (P) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                P = 3
        }
        var D = d;
        d = P;
        try {
            return I()
        } finally {
            d = D
        }
    }, t.unstable_scheduleCallback = function(P, I, D) {
        var ne = t.unstable_now();
        switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? ne + D : ne) : D = ne, P) {
            case 1:
                var $ = -1;
                break;
            case 2:
                $ = 250;
                break;
            case 5:
                $ = 1073741823;
                break;
            case 4:
                $ = 1e4;
                break;
            default:
                $ = 5e3
        }
        return $ = D + $, P = {
            id: c++,
            callback: I,
            priorityLevel: P,
            startTime: D,
            expirationTime: $,
            sortIndex: -1
        }, D > ne ? (P.sortIndex = D, e(u, P), n(a) === null && P === n(u) && (w ? (p(M), M = -1) : w = !0, We(k, D - ne))) : (P.sortIndex = $, e(a, P), y || v || (y = !0, Qt(C))), P
    }, t.unstable_shouldYield = Se, t.unstable_wrapCallback = function(P) {
        var I = d;
        return function() {
            var D = d;
            d = I;
            try {
                return P.apply(this, arguments)
            } finally {
                d = D
            }
        }
    }
})(Kf);
Xf.exports = Kf;
var Eg = Xf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qf = x,
    at = Eg;

function E(t) {
    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Jf = new Set,
    xr = {};

function Jn(t, e) {
    bi(t, e), bi(t + "Capture", e)
}

function bi(t, e) {
    for (xr[t] = e, t = 0; t < e.length; t++) Jf.add(e[t])
}
var Jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    sa = Object.prototype.hasOwnProperty,
    Pg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Dc = {},
    Ac = {};

function zg(t) {
    return sa.call(Ac, t) ? !0 : sa.call(Dc, t) ? !1 : Pg.test(t) ? Ac[t] = !0 : (Dc[t] = !0, !1)
}

function $g(t, e, n, i) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof e) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return i ? !1 : n !== null ? !n.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
        default:
            return !1
    }
}

function Tg(t, e, n, i) {
    if (e === null || typeof e > "u" || $g(t, e, n, i)) return !0;
    if (i) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !e;
        case 4:
            return e === !1;
        case 5:
            return isNaN(e);
        case 6:
            return isNaN(e) || 1 > e
    }
    return !1
}

function Ye(t, e, n, i, r, o, s) {
    this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = i, this.attributeNamespace = r, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = o, this.removeEmptyString = s
}
var Le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    Le[t] = new Ye(t, 0, !1, t, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(t) {
    var e = t[0];
    Le[e] = new Ye(e, 1, !1, t[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    Le[t] = new Ye(t, 2, !1, t.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    Le[t] = new Ye(t, 2, !1, t, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    Le[t] = new Ye(t, 3, !1, t.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
    Le[t] = new Ye(t, 3, !0, t, null, !1, !1)
});
["capture", "download"].forEach(function(t) {
    Le[t] = new Ye(t, 4, !1, t, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(t) {
    Le[t] = new Ye(t, 6, !1, t, null, !1, !1)
});
["rowSpan", "start"].forEach(function(t) {
    Le[t] = new Ye(t, 5, !1, t.toLowerCase(), null, !1, !1)
});
var yu = /[\-:]([a-z])/g;

function wu(t) {
    return t[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var e = t.replace(yu, wu);
    Le[e] = new Ye(e, 1, !1, t, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var e = t.replace(yu, wu);
    Le[e] = new Ye(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var e = t.replace(yu, wu);
    Le[e] = new Ye(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(t) {
    Le[t] = new Ye(t, 1, !1, t.toLowerCase(), null, !1, !1)
});
Le.xlinkHref = new Ye("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(t) {
    Le[t] = new Ye(t, 1, !1, t.toLowerCase(), null, !0, !0)
});

function xu(t, e, n, i) {
    var r = Le.hasOwnProperty(e) ? Le[e] : null;
    (r !== null ? r.type !== 0 : i || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (Tg(e, n, r, i) && (n = null), i || r === null ? zg(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : r.mustUseProperty ? t[r.propertyName] = n === null ? r.type === 3 ? !1 : "" : n : (e = r.attributeName, i = r.attributeNamespace, n === null ? t.removeAttribute(e) : (r = r.type, n = r === 3 || r === 4 && n === !0 ? "" : "" + n, i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n))))
}
var nn = qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Zr = Symbol.for("react.element"),
    ii = Symbol.for("react.portal"),
    ri = Symbol.for("react.fragment"),
    ku = Symbol.for("react.strict_mode"),
    la = Symbol.for("react.profiler"),
    Zf = Symbol.for("react.provider"),
    eh = Symbol.for("react.context"),
    Su = Symbol.for("react.forward_ref"),
    aa = Symbol.for("react.suspense"),
    ua = Symbol.for("react.suspense_list"),
    _u = Symbol.for("react.memo"),
    sn = Symbol.for("react.lazy"),
    th = Symbol.for("react.offscreen"),
    Nc = Symbol.iterator;

function Qi(t) {
    return t === null || typeof t != "object" ? null : (t = Nc && t[Nc] || t["@@iterator"], typeof t == "function" ? t : null)
}
var ce = Object.assign,
    hl;

function tr(t) {
    if (hl === void 0) try {
        throw Error()
    } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        hl = e && e[1] || ""
    }
    return `
` + hl + t
}
var pl = !1;

function ml(t, e) {
    if (!t || pl) return "";
    pl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (e = function() {
                    throw Error()
                }, Object.defineProperty(e.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(e, [])
                } catch (u) {
                    var i = u
                }
                Reflect.construct(t, [], e)
            } else {
                try {
                    e.call()
                } catch (u) {
                    i = u
                }
                t.call(e.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                i = u
            }
            t()
        }
    } catch (u) {
        if (u && i && typeof u.stack == "string") {
            for (var r = u.stack.split(`
`), o = i.stack.split(`
`), s = r.length - 1, l = o.length - 1; 1 <= s && 0 <= l && r[s] !== o[l];) l--;
            for (; 1 <= s && 0 <= l; s--, l--)
                if (r[s] !== o[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--, l--, 0 > l || r[s] !== o[l]) {
                                var a = `
` + r[s].replace(" at new ", " at ");
                                return t.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", t.displayName)), a
                            }
                    while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        pl = !1, Error.prepareStackTrace = n
    }
    return (t = t ? t.displayName || t.name : "") ? tr(t) : ""
}

function Mg(t) {
    switch (t.tag) {
        case 5:
            return tr(t.type);
        case 16:
            return tr("Lazy");
        case 13:
            return tr("Suspense");
        case 19:
            return tr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return t = ml(t.type, !1), t;
        case 11:
            return t = ml(t.type.render, !1), t;
        case 1:
            return t = ml(t.type, !0), t;
        default:
            return ""
    }
}

function ca(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
        case ri:
            return "Fragment";
        case ii:
            return "Portal";
        case la:
            return "Profiler";
        case ku:
            return "StrictMode";
        case aa:
            return "Suspense";
        case ua:
            return "SuspenseList"
    }
    if (typeof t == "object") switch (t.$$typeof) {
        case eh:
            return (t.displayName || "Context") + ".Consumer";
        case Zf:
            return (t._context.displayName || "Context") + ".Provider";
        case Su:
            var e = t.render;
            return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case _u:
            return e = t.displayName || null, e !== null ? e : ca(t.type) || "Memo";
        case sn:
            e = t._payload, t = t._init;
            try {
                return ca(t(e))
            } catch {}
    }
    return null
}

function Rg(t) {
    var e = t.type;
    switch (t.tag) {
        case 24:
            return "Cache";
        case 9:
            return (e.displayName || "Context") + ".Consumer";
        case 10:
            return (e._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return t = e.render, t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return e;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return ca(e);
        case 8:
            return e === ku ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof e == "function") return e.displayName || e.name || null;
            if (typeof e == "string") return e
    }
    return null
}

function _n(t) {
    switch (typeof t) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
    }
}

function nh(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
}

function Lg(t) {
    var e = nh(t) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
        i = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var r = n.get,
            o = n.set;
        return Object.defineProperty(t, e, {
            configurable: !0,
            get: function() {
                return r.call(this)
            },
            set: function(s) {
                i = "" + s, o.call(this, s)
            }
        }), Object.defineProperty(t, e, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return i
            },
            setValue: function(s) {
                i = "" + s
            },
            stopTracking: function() {
                t._valueTracker = null, delete t[e]
            }
        }
    }
}

function eo(t) {
    t._valueTracker || (t._valueTracker = Lg(t))
}

function ih(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
        i = "";
    return t && (i = nh(t) ? t.checked ? "true" : "false" : t.value), t = i, t !== n ? (e.setValue(t), !0) : !1
}

function Io(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
        return t.activeElement || t.body
    } catch {
        return t.body
    }
}

function da(t, e) {
    var n = e.checked;
    return ce({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? t._wrapperState.initialChecked
    })
}

function Fc(t, e) {
    var n = e.defaultValue == null ? "" : e.defaultValue,
        i = e.checked != null ? e.checked : e.defaultChecked;
    n = _n(e.value != null ? e.value : n), t._wrapperState = {
        initialChecked: i,
        initialValue: n,
        controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
    }
}

function rh(t, e) {
    e = e.checked, e != null && xu(t, "checked", e, !1)
}

function fa(t, e) {
    rh(t, e);
    var n = _n(e.value),
        i = e.type;
    if (n != null) i === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
    else if (i === "submit" || i === "reset") {
        t.removeAttribute("value");
        return
    }
    e.hasOwnProperty("value") ? ha(t, e.type, n) : e.hasOwnProperty("defaultValue") && ha(t, e.type, _n(e.defaultValue)), e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked)
}

function Uc(t, e, n) {
    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
        var i = e.type;
        if (!(i !== "submit" && i !== "reset" || e.value !== void 0 && e.value !== null)) return;
        e = "" + t._wrapperState.initialValue, n || e === t.value || (t.value = e), t.defaultValue = e
    }
    n = t.name, n !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, n !== "" && (t.name = n)
}

function ha(t, e, n) {
    (e !== "number" || Io(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
}
var nr = Array.isArray;

function yi(t, e, n, i) {
    if (t = t.options, e) {
        e = {};
        for (var r = 0; r < n.length; r++) e["$" + n[r]] = !0;
        for (n = 0; n < t.length; n++) r = e.hasOwnProperty("$" + t[n].value), t[n].selected !== r && (t[n].selected = r), r && i && (t[n].defaultSelected = !0)
    } else {
        for (n = "" + _n(n), e = null, r = 0; r < t.length; r++) {
            if (t[r].value === n) {
                t[r].selected = !0, i && (t[r].defaultSelected = !0);
                return
            }
            e !== null || t[r].disabled || (e = t[r])
        }
        e !== null && (e.selected = !0)
    }
}

function pa(t, e) {
    if (e.dangerouslySetInnerHTML != null) throw Error(E(91));
    return ce({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t._wrapperState.initialValue
    })
}

function Bc(t, e) {
    var n = e.value;
    if (n == null) {
        if (n = e.children, e = e.defaultValue, n != null) {
            if (e != null) throw Error(E(92));
            if (nr(n)) {
                if (1 < n.length) throw Error(E(93));
                n = n[0]
            }
            e = n
        }
        e == null && (e = ""), n = e
    }
    t._wrapperState = {
        initialValue: _n(n)
    }
}

function oh(t, e) {
    var n = _n(e.value),
        i = _n(e.defaultValue);
    n != null && (n = "" + n, n !== t.value && (t.value = n), e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)), i != null && (t.defaultValue = "" + i)
}

function Wc(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e)
}

function sh(t) {
    switch (t) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function ma(t, e) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? sh(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
}
var to, lh = function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, n, i, r) {
        MSApp.execUnsafeLocalFunction(function() {
            return t(e, n, i, r)
        })
    } : t
}(function(t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = e;
    else {
        for (to = to || document.createElement("div"), to.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = to.firstChild; t.firstChild;) t.removeChild(t.firstChild);
        for (; e.firstChild;) t.appendChild(e.firstChild)
    }
});

function kr(t, e) {
    if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e;
            return
        }
    }
    t.textContent = e
}
var sr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    jg = ["Webkit", "ms", "Moz", "O"];
Object.keys(sr).forEach(function(t) {
    jg.forEach(function(e) {
        e = e + t.charAt(0).toUpperCase() + t.substring(1), sr[e] = sr[t]
    })
});

function ah(t, e, n) {
    return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || sr.hasOwnProperty(t) && sr[t] ? ("" + e).trim() : e + "px"
}

function uh(t, e) {
    t = t.style;
    for (var n in e)
        if (e.hasOwnProperty(n)) {
            var i = n.indexOf("--") === 0,
                r = ah(n, e[n], i);
            n === "float" && (n = "cssFloat"), i ? t.setProperty(n, r) : t[n] = r
        }
}
var Og = ce({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function ga(t, e) {
    if (e) {
        if (Og[t] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(E(137, t));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null) throw Error(E(60));
            if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML)) throw Error(E(61))
        }
        if (e.style != null && typeof e.style != "object") throw Error(E(62))
    }
}

function va(t, e) {
    if (t.indexOf("-") === -1) return typeof e.is == "string";
    switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var ya = null;

function bu(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
}
var wa = null,
    wi = null,
    xi = null;

function Vc(t) {
    if (t = Qr(t)) {
        if (typeof wa != "function") throw Error(E(280));
        var e = t.stateNode;
        e && (e = bs(e), wa(t.stateNode, t.type, e))
    }
}

function ch(t) {
    wi ? xi ? xi.push(t) : xi = [t] : wi = t
}

function dh() {
    if (wi) {
        var t = wi,
            e = xi;
        if (xi = wi = null, Vc(t), e)
            for (t = 0; t < e.length; t++) Vc(e[t])
    }
}

function fh(t, e) {
    return t(e)
}

function hh() {}
var gl = !1;

function ph(t, e, n) {
    if (gl) return t(e, n);
    gl = !0;
    try {
        return fh(t, e, n)
    } finally {
        gl = !1, (wi !== null || xi !== null) && (hh(), dh())
    }
}

function Sr(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var i = bs(n);
    if (i === null) return null;
    n = i[e];
    e: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (i = !i.disabled) || (t = t.type, i = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !i;
            break e;
        default:
            t = !1
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(E(231, e, typeof n));
    return n
}
var xa = !1;
if (Jt) try {
    var Gi = {};
    Object.defineProperty(Gi, "passive", {
        get: function() {
            xa = !0
        }
    }), window.addEventListener("test", Gi, Gi), window.removeEventListener("test", Gi, Gi)
} catch {
    xa = !1
}

function Ig(t, e, n, i, r, o, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var lr = !1,
    Do = null,
    Ao = !1,
    ka = null,
    Dg = {
        onError: function(t) {
            lr = !0, Do = t
        }
    };

function Ag(t, e, n, i, r, o, s, l, a) {
    lr = !1, Do = null, Ig.apply(Dg, arguments)
}

function Ng(t, e, n, i, r, o, s, l, a) {
    if (Ag.apply(this, arguments), lr) {
        if (lr) {
            var u = Do;
            lr = !1, Do = null
        } else throw Error(E(198));
        Ao || (Ao = !0, ka = u)
    }
}

function Zn(t) {
    var e = t,
        n = t;
    if (t.alternate)
        for (; e.return;) e = e.return;
    else {
        t = e;
        do e = t, e.flags & 4098 && (n = e.return), t = e.return; while (t)
    }
    return e.tag === 3 ? n : null
}

function mh(t) {
    if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
    }
    return null
}

function Hc(t) {
    if (Zn(t) !== t) throw Error(E(188))
}

function Fg(t) {
    var e = t.alternate;
    if (!e) {
        if (e = Zn(t), e === null) throw Error(E(188));
        return e !== t ? null : t
    }
    for (var n = t, i = e;;) {
        var r = n.return;
        if (r === null) break;
        var o = r.alternate;
        if (o === null) {
            if (i = r.return, i !== null) {
                n = i;
                continue
            }
            break
        }
        if (r.child === o.child) {
            for (o = r.child; o;) {
                if (o === n) return Hc(r), t;
                if (o === i) return Hc(r), e;
                o = o.sibling
            }
            throw Error(E(188))
        }
        if (n.return !== i.return) n = r, i = o;
        else {
            for (var s = !1, l = r.child; l;) {
                if (l === n) {
                    s = !0, n = r, i = o;
                    break
                }
                if (l === i) {
                    s = !0, i = r, n = o;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = o.child; l;) {
                    if (l === n) {
                        s = !0, n = o, i = r;
                        break
                    }
                    if (l === i) {
                        s = !0, i = o, n = r;
                        break
                    }
                    l = l.sibling
                }
                if (!s) throw Error(E(189))
            }
        }
        if (n.alternate !== i) throw Error(E(190))
    }
    if (n.tag !== 3) throw Error(E(188));
    return n.stateNode.current === n ? t : e
}

function gh(t) {
    return t = Fg(t), t !== null ? vh(t) : null
}

function vh(t) {
    if (t.tag === 5 || t.tag === 6) return t;
    for (t = t.child; t !== null;) {
        var e = vh(t);
        if (e !== null) return e;
        t = t.sibling
    }
    return null
}
var yh = at.unstable_scheduleCallback,
    Qc = at.unstable_cancelCallback,
    Ug = at.unstable_shouldYield,
    Bg = at.unstable_requestPaint,
    pe = at.unstable_now,
    Wg = at.unstable_getCurrentPriorityLevel,
    Cu = at.unstable_ImmediatePriority,
    wh = at.unstable_UserBlockingPriority,
    No = at.unstable_NormalPriority,
    Vg = at.unstable_LowPriority,
    xh = at.unstable_IdlePriority,
    xs = null,
    Ft = null;

function Hg(t) {
    if (Ft && typeof Ft.onCommitFiberRoot == "function") try {
        Ft.onCommitFiberRoot(xs, t, void 0, (t.current.flags & 128) === 128)
    } catch {}
}
var $t = Math.clz32 ? Math.clz32 : Yg,
    Qg = Math.log,
    Gg = Math.LN2;

function Yg(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Qg(t) / Gg | 0) | 0
}
var no = 64,
    io = 4194304;

function ir(t) {
    switch (t & -t) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return t & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return t
    }
}

function Fo(t, e) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var i = 0,
        r = t.suspendedLanes,
        o = t.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var l = s & ~r;
        l !== 0 ? i = ir(l) : (o &= s, o !== 0 && (i = ir(o)))
    } else s = n & ~r, s !== 0 ? i = ir(s) : o !== 0 && (i = ir(o));
    if (i === 0) return 0;
    if (e !== 0 && e !== i && !(e & r) && (r = i & -i, o = e & -e, r >= o || r === 16 && (o & 4194240) !== 0)) return e;
    if (i & 4 && (i |= n & 16), e = t.entangledLanes, e !== 0)
        for (t = t.entanglements, e &= i; 0 < e;) n = 31 - $t(e), r = 1 << n, i |= t[n], e &= ~r;
    return i
}

function Xg(t, e) {
    switch (t) {
        case 1:
        case 2:
        case 4:
            return e + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Kg(t, e) {
    for (var n = t.suspendedLanes, i = t.pingedLanes, r = t.expirationTimes, o = t.pendingLanes; 0 < o;) {
        var s = 31 - $t(o),
            l = 1 << s,
            a = r[s];
        a === -1 ? (!(l & n) || l & i) && (r[s] = Xg(l, e)) : a <= e && (t.expiredLanes |= l), o &= ~l
    }
}

function Sa(t) {
    return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
}

function kh() {
    var t = no;
    return no <<= 1, !(no & 4194240) && (no = 64), t
}

function vl(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e
}

function Vr(t, e, n) {
    t.pendingLanes |= e, e !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, e = 31 - $t(e), t[e] = n
}

function qg(t, e) {
    var n = t.pendingLanes & ~e;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= e, t.mutableReadLanes &= e, t.entangledLanes &= e, e = t.entanglements;
    var i = t.eventTimes;
    for (t = t.expirationTimes; 0 < n;) {
        var r = 31 - $t(n),
            o = 1 << r;
        e[r] = 0, i[r] = -1, t[r] = -1, n &= ~o
    }
}

function Eu(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n;) {
        var i = 31 - $t(n),
            r = 1 << i;
        r & e | t[i] & e && (t[i] |= e), n &= ~r
    }
}
var Z = 0;

function Sh(t) {
    return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1
}
var _h, Pu, bh, Ch, Eh, _a = !1,
    ro = [],
    fn = null,
    hn = null,
    pn = null,
    _r = new Map,
    br = new Map,
    an = [],
    Jg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Gc(t, e) {
    switch (t) {
        case "focusin":
        case "focusout":
            fn = null;
            break;
        case "dragenter":
        case "dragleave":
            hn = null;
            break;
        case "mouseover":
        case "mouseout":
            pn = null;
            break;
        case "pointerover":
        case "pointerout":
            _r.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            br.delete(e.pointerId)
    }
}

function Yi(t, e, n, i, r, o) {
    return t === null || t.nativeEvent !== o ? (t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: o,
        targetContainers: [r]
    }, e !== null && (e = Qr(e), e !== null && Pu(e)), t) : (t.eventSystemFlags |= i, e = t.targetContainers, r !== null && e.indexOf(r) === -1 && e.push(r), t)
}

function Zg(t, e, n, i, r) {
    switch (e) {
        case "focusin":
            return fn = Yi(fn, t, e, n, i, r), !0;
        case "dragenter":
            return hn = Yi(hn, t, e, n, i, r), !0;
        case "mouseover":
            return pn = Yi(pn, t, e, n, i, r), !0;
        case "pointerover":
            var o = r.pointerId;
            return _r.set(o, Yi(_r.get(o) || null, t, e, n, i, r)), !0;
        case "gotpointercapture":
            return o = r.pointerId, br.set(o, Yi(br.get(o) || null, t, e, n, i, r)), !0
    }
    return !1
}

function Ph(t) {
    var e = jn(t.target);
    if (e !== null) {
        var n = Zn(e);
        if (n !== null) {
            if (e = n.tag, e === 13) {
                if (e = mh(n), e !== null) {
                    t.blockedOn = e, Eh(t.priority, function() {
                        bh(n)
                    });
                    return
                }
            } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    t.blockedOn = null
}

function _o(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length;) {
        var n = ba(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (n === null) {
            n = t.nativeEvent;
            var i = new n.constructor(n.type, n);
            ya = i, n.target.dispatchEvent(i), ya = null
        } else return e = Qr(n), e !== null && Pu(e), t.blockedOn = n, !1;
        e.shift()
    }
    return !0
}

function Yc(t, e, n) {
    _o(t) && n.delete(e)
}

function ev() {
    _a = !1, fn !== null && _o(fn) && (fn = null), hn !== null && _o(hn) && (hn = null), pn !== null && _o(pn) && (pn = null), _r.forEach(Yc), br.forEach(Yc)
}

function Xi(t, e) {
    t.blockedOn === e && (t.blockedOn = null, _a || (_a = !0, at.unstable_scheduleCallback(at.unstable_NormalPriority, ev)))
}

function Cr(t) {
    function e(r) {
        return Xi(r, t)
    }
    if (0 < ro.length) {
        Xi(ro[0], t);
        for (var n = 1; n < ro.length; n++) {
            var i = ro[n];
            i.blockedOn === t && (i.blockedOn = null)
        }
    }
    for (fn !== null && Xi(fn, t), hn !== null && Xi(hn, t), pn !== null && Xi(pn, t), _r.forEach(e), br.forEach(e), n = 0; n < an.length; n++) i = an[n], i.blockedOn === t && (i.blockedOn = null);
    for (; 0 < an.length && (n = an[0], n.blockedOn === null);) Ph(n), n.blockedOn === null && an.shift()
}
var ki = nn.ReactCurrentBatchConfig,
    Uo = !0;

function tv(t, e, n, i) {
    var r = Z,
        o = ki.transition;
    ki.transition = null;
    try {
        Z = 1, zu(t, e, n, i)
    } finally {
        Z = r, ki.transition = o
    }
}

function nv(t, e, n, i) {
    var r = Z,
        o = ki.transition;
    ki.transition = null;
    try {
        Z = 4, zu(t, e, n, i)
    } finally {
        Z = r, ki.transition = o
    }
}

function zu(t, e, n, i) {
    if (Uo) {
        var r = ba(t, e, n, i);
        if (r === null) Pl(t, e, i, Bo, n), Gc(t, i);
        else if (Zg(r, t, e, n, i)) i.stopPropagation();
        else if (Gc(t, i), e & 4 && -1 < Jg.indexOf(t)) {
            for (; r !== null;) {
                var o = Qr(r);
                if (o !== null && _h(o), o = ba(t, e, n, i), o === null && Pl(t, e, i, Bo, n), o === r) break;
                r = o
            }
            r !== null && i.stopPropagation()
        } else Pl(t, e, i, null, n)
    }
}
var Bo = null;

function ba(t, e, n, i) {
    if (Bo = null, t = bu(i), t = jn(t), t !== null)
        if (e = Zn(t), e === null) t = null;
        else if (n = e.tag, n === 13) {
        if (t = mh(e), t !== null) return t;
        t = null
    } else if (n === 3) {
        if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
        t = null
    } else e !== t && (t = null);
    return Bo = t, null
}

function zh(t) {
    switch (t) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Wg()) {
                case Cu:
                    return 1;
                case wh:
                    return 4;
                case No:
                case Vg:
                    return 16;
                case xh:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var cn = null,
    $u = null,
    bo = null;

function $h() {
    if (bo) return bo;
    var t, e = $u,
        n = e.length,
        i, r = "value" in cn ? cn.value : cn.textContent,
        o = r.length;
    for (t = 0; t < n && e[t] === r[t]; t++);
    var s = n - t;
    for (i = 1; i <= s && e[n - i] === r[o - i]; i++);
    return bo = r.slice(t, 1 < i ? 1 - i : void 0)
}

function Co(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
}

function oo() {
    return !0
}

function Xc() {
    return !1
}

function ft(t) {
    function e(n, i, r, o, s) {
        this._reactName = n, this._targetInst = r, this.type = i, this.nativeEvent = o, this.target = s, this.currentTarget = null;
        for (var l in t) t.hasOwnProperty(l) && (n = t[l], this[l] = n ? n(o) : o[l]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? oo : Xc, this.isPropagationStopped = Xc, this
    }
    return ce(e.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = oo)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = oo)
        },
        persist: function() {},
        isPersistent: oo
    }), e
}
var Ai = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    Tu = ft(Ai),
    Hr = ce({}, Ai, {
        view: 0,
        detail: 0
    }),
    iv = ft(Hr),
    yl, wl, Ki, ks = ce({}, Hr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Mu,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX" in t ? t.movementX : (t !== Ki && (Ki && t.type === "mousemove" ? (yl = t.screenX - Ki.screenX, wl = t.screenY - Ki.screenY) : wl = yl = 0, Ki = t), yl)
        },
        movementY: function(t) {
            return "movementY" in t ? t.movementY : wl
        }
    }),
    Kc = ft(ks),
    rv = ce({}, ks, {
        dataTransfer: 0
    }),
    ov = ft(rv),
    sv = ce({}, Hr, {
        relatedTarget: 0
    }),
    xl = ft(sv),
    lv = ce({}, Ai, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    av = ft(lv),
    uv = ce({}, Ai, {
        clipboardData: function(t) {
            return "clipboardData" in t ? t.clipboardData : window.clipboardData
        }
    }),
    cv = ft(uv),
    dv = ce({}, Ai, {
        data: 0
    }),
    qc = ft(dv),
    fv = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    hv = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    pv = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function mv(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = pv[t]) ? !!e[t] : !1
}

function Mu() {
    return mv
}
var gv = ce({}, Hr, {
        key: function(t) {
            if (t.key) {
                var e = fv[t.key] || t.key;
                if (e !== "Unidentified") return e
            }
            return t.type === "keypress" ? (t = Co(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? hv[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Mu,
        charCode: function(t) {
            return t.type === "keypress" ? Co(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? Co(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    }),
    vv = ft(gv),
    yv = ce({}, ks, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Jc = ft(yv),
    wv = ce({}, Hr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Mu
    }),
    xv = ft(wv),
    kv = ce({}, Ai, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Sv = ft(kv),
    _v = ce({}, ks, {
        deltaX: function(t) {
            return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    bv = ft(_v),
    Cv = [9, 13, 27, 32],
    Ru = Jt && "CompositionEvent" in window,
    ar = null;
Jt && "documentMode" in document && (ar = document.documentMode);
var Ev = Jt && "TextEvent" in window && !ar,
    Th = Jt && (!Ru || ar && 8 < ar && 11 >= ar),
    Zc = String.fromCharCode(32),
    ed = !1;

function Mh(t, e) {
    switch (t) {
        case "keyup":
            return Cv.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Rh(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
}
var oi = !1;

function Pv(t, e) {
    switch (t) {
        case "compositionend":
            return Rh(e);
        case "keypress":
            return e.which !== 32 ? null : (ed = !0, Zc);
        case "textInput":
            return t = e.data, t === Zc && ed ? null : t;
        default:
            return null
    }
}

function zv(t, e) {
    if (oi) return t === "compositionend" || !Ru && Mh(t, e) ? (t = $h(), bo = $u = cn = null, oi = !1, t) : null;
    switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length) return e.char;
                if (e.which) return String.fromCharCode(e.which)
            }
            return null;
        case "compositionend":
            return Th && e.locale !== "ko" ? null : e.data;
        default:
            return null
    }
}
var $v = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function td(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!$v[t.type] : e === "textarea"
}

function Lh(t, e, n, i) {
    ch(i), e = Wo(e, "onChange"), 0 < e.length && (n = new Tu("onChange", "change", null, n, i), t.push({
        event: n,
        listeners: e
    }))
}
var ur = null,
    Er = null;

function Tv(t) {
    Vh(t, 0)
}

function Ss(t) {
    var e = ai(t);
    if (ih(e)) return t
}

function Mv(t, e) {
    if (t === "change") return e
}
var jh = !1;
if (Jt) {
    var kl;
    if (Jt) {
        var Sl = "oninput" in document;
        if (!Sl) {
            var nd = document.createElement("div");
            nd.setAttribute("oninput", "return;"), Sl = typeof nd.oninput == "function"
        }
        kl = Sl
    } else kl = !1;
    jh = kl && (!document.documentMode || 9 < document.documentMode)
}

function id() {
    ur && (ur.detachEvent("onpropertychange", Oh), Er = ur = null)
}

function Oh(t) {
    if (t.propertyName === "value" && Ss(Er)) {
        var e = [];
        Lh(e, Er, t, bu(t)), ph(Tv, e)
    }
}

function Rv(t, e, n) {
    t === "focusin" ? (id(), ur = e, Er = n, ur.attachEvent("onpropertychange", Oh)) : t === "focusout" && id()
}

function Lv(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Ss(Er)
}

function jv(t, e) {
    if (t === "click") return Ss(e)
}

function Ov(t, e) {
    if (t === "input" || t === "change") return Ss(e)
}

function Iv(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var Ot = typeof Object.is == "function" ? Object.is : Iv;

function Pr(t, e) {
    if (Ot(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
    var n = Object.keys(t),
        i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
        var r = n[i];
        if (!sa.call(e, r) || !Ot(t[r], e[r])) return !1
    }
    return !0
}

function rd(t) {
    for (; t && t.firstChild;) t = t.firstChild;
    return t
}

function od(t, e) {
    var n = rd(t);
    t = 0;
    for (var i; n;) {
        if (n.nodeType === 3) {
            if (i = t + n.textContent.length, t <= e && i >= e) return {
                node: n,
                offset: e - t
            };
            t = i
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = rd(n)
    }
}

function Ih(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Ih(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
}

function Dh() {
    for (var t = window, e = Io(); e instanceof t.HTMLIFrameElement;) {
        try {
            var n = typeof e.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) t = e.contentWindow;
        else break;
        e = Io(t.document)
    }
    return e
}

function Lu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
}

function Dv(t) {
    var e = Dh(),
        n = t.focusedElem,
        i = t.selectionRange;
    if (e !== n && n && n.ownerDocument && Ih(n.ownerDocument.documentElement, n)) {
        if (i !== null && Lu(n)) {
            if (e = i.start, t = i.end, t === void 0 && (t = e), "selectionStart" in n) n.selectionStart = e, n.selectionEnd = Math.min(t, n.value.length);
            else if (t = (e = n.ownerDocument || document) && e.defaultView || window, t.getSelection) {
                t = t.getSelection();
                var r = n.textContent.length,
                    o = Math.min(i.start, r);
                i = i.end === void 0 ? o : Math.min(i.end, r), !t.extend && o > i && (r = i, i = o, o = r), r = od(n, o);
                var s = od(n, i);
                r && s && (t.rangeCount !== 1 || t.anchorNode !== r.node || t.anchorOffset !== r.offset || t.focusNode !== s.node || t.focusOffset !== s.offset) && (e = e.createRange(), e.setStart(r.node, r.offset), t.removeAllRanges(), o > i ? (t.addRange(e), t.extend(s.node, s.offset)) : (e.setEnd(s.node, s.offset), t.addRange(e)))
            }
        }
        for (e = [], t = n; t = t.parentNode;) t.nodeType === 1 && e.push({
            element: t,
            left: t.scrollLeft,
            top: t.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++) t = e[n], t.element.scrollLeft = t.left, t.element.scrollTop = t.top
    }
}
var Av = Jt && "documentMode" in document && 11 >= document.documentMode,
    si = null,
    Ca = null,
    cr = null,
    Ea = !1;

function sd(t, e, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ea || si == null || si !== Io(i) || (i = si, "selectionStart" in i && Lu(i) ? i = {
        start: i.selectionStart,
        end: i.selectionEnd
    } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
    }), cr && Pr(cr, i) || (cr = i, i = Wo(Ca, "onSelect"), 0 < i.length && (e = new Tu("onSelect", "select", null, e, n), t.push({
        event: e,
        listeners: i
    }), e.target = si)))
}

function so(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n
}
var li = {
        animationend: so("Animation", "AnimationEnd"),
        animationiteration: so("Animation", "AnimationIteration"),
        animationstart: so("Animation", "AnimationStart"),
        transitionend: so("Transition", "TransitionEnd")
    },
    _l = {},
    Ah = {};
Jt && (Ah = document.createElement("div").style, "AnimationEvent" in window || (delete li.animationend.animation, delete li.animationiteration.animation, delete li.animationstart.animation), "TransitionEvent" in window || delete li.transitionend.transition);

function _s(t) {
    if (_l[t]) return _l[t];
    if (!li[t]) return t;
    var e = li[t],
        n;
    for (n in e)
        if (e.hasOwnProperty(n) && n in Ah) return _l[t] = e[n];
    return t
}
var Nh = _s("animationend"),
    Fh = _s("animationiteration"),
    Uh = _s("animationstart"),
    Bh = _s("transitionend"),
    Wh = new Map,
    ld = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Pn(t, e) {
    Wh.set(t, e), Jn(e, [t])
}
for (var bl = 0; bl < ld.length; bl++) {
    var Cl = ld[bl],
        Nv = Cl.toLowerCase(),
        Fv = Cl[0].toUpperCase() + Cl.slice(1);
    Pn(Nv, "on" + Fv)
}
Pn(Nh, "onAnimationEnd");
Pn(Fh, "onAnimationIteration");
Pn(Uh, "onAnimationStart");
Pn("dblclick", "onDoubleClick");
Pn("focusin", "onFocus");
Pn("focusout", "onBlur");
Pn(Bh, "onTransitionEnd");
bi("onMouseEnter", ["mouseout", "mouseover"]);
bi("onMouseLeave", ["mouseout", "mouseover"]);
bi("onPointerEnter", ["pointerout", "pointerover"]);
bi("onPointerLeave", ["pointerout", "pointerover"]);
Jn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Jn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Jn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Jn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var rr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Uv = new Set("cancel close invalid load scroll toggle".split(" ").concat(rr));

function ad(t, e, n) {
    var i = t.type || "unknown-event";
    t.currentTarget = n, Ng(i, e, void 0, t), t.currentTarget = null
}

function Vh(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
        var i = t[n],
            r = i.event;
        i = i.listeners;
        e: {
            var o = void 0;
            if (e)
                for (var s = i.length - 1; 0 <= s; s--) {
                    var l = i[s],
                        a = l.instance,
                        u = l.currentTarget;
                    if (l = l.listener, a !== o && r.isPropagationStopped()) break e;
                    ad(r, l, u), o = a
                } else
                    for (s = 0; s < i.length; s++) {
                        if (l = i[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== o && r.isPropagationStopped()) break e;
                        ad(r, l, u), o = a
                    }
        }
    }
    if (Ao) throw t = ka, Ao = !1, ka = null, t
}

function re(t, e) {
    var n = e[Ma];
    n === void 0 && (n = e[Ma] = new Set);
    var i = t + "__bubble";
    n.has(i) || (Hh(e, t, 2, !1), n.add(i))
}

function El(t, e, n) {
    var i = 0;
    e && (i |= 4), Hh(n, t, i, e)
}
var lo = "_reactListening" + Math.random().toString(36).slice(2);

function zr(t) {
    if (!t[lo]) {
        t[lo] = !0, Jf.forEach(function(n) {
            n !== "selectionchange" && (Uv.has(n) || El(n, !1, t), El(n, !0, t))
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[lo] || (e[lo] = !0, El("selectionchange", !1, e))
    }
}

function Hh(t, e, n, i) {
    switch (zh(e)) {
        case 1:
            var r = tv;
            break;
        case 4:
            r = nv;
            break;
        default:
            r = zu
    }
    n = r.bind(null, e, n, t), r = void 0, !xa || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (r = !0), i ? r !== void 0 ? t.addEventListener(e, n, {
        capture: !0,
        passive: r
    }) : t.addEventListener(e, n, !0) : r !== void 0 ? t.addEventListener(e, n, {
        passive: r
    }) : t.addEventListener(e, n, !1)
}

function Pl(t, e, n, i, r) {
    var o = i;
    if (!(e & 1) && !(e & 2) && i !== null) e: for (;;) {
        if (i === null) return;
        var s = i.tag;
        if (s === 3 || s === 4) {
            var l = i.stateNode.containerInfo;
            if (l === r || l.nodeType === 8 && l.parentNode === r) break;
            if (s === 4)
                for (s = i.return; s !== null;) {
                    var a = s.tag;
                    if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === r || a.nodeType === 8 && a.parentNode === r)) return;
                    s = s.return
                }
            for (; l !== null;) {
                if (s = jn(l), s === null) return;
                if (a = s.tag, a === 5 || a === 6) {
                    i = o = s;
                    continue e
                }
                l = l.parentNode
            }
        }
        i = i.return
    }
    ph(function() {
        var u = o,
            c = bu(n),
            f = [];
        e: {
            var d = Wh.get(t);
            if (d !== void 0) {
                var v = Tu,
                    y = t;
                switch (t) {
                    case "keypress":
                        if (Co(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        v = vv;
                        break;
                    case "focusin":
                        y = "focus", v = xl;
                        break;
                    case "focusout":
                        y = "blur", v = xl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        v = xl;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        v = Kc;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        v = ov;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        v = xv;
                        break;
                    case Nh:
                    case Fh:
                    case Uh:
                        v = av;
                        break;
                    case Bh:
                        v = Sv;
                        break;
                    case "scroll":
                        v = iv;
                        break;
                    case "wheel":
                        v = bv;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        v = cv;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        v = Jc
                }
                var w = (e & 4) !== 0,
                    _ = !w && t === "scroll",
                    p = w ? d !== null ? d + "Capture" : null : d;
                w = [];
                for (var h = u, g; h !== null;) {
                    g = h;
                    var k = g.stateNode;
                    if (g.tag === 5 && k !== null && (g = k, p !== null && (k = Sr(h, p), k != null && w.push($r(h, k, g)))), _) break;
                    h = h.return
                }
                0 < w.length && (d = new v(d, y, null, n, c), f.push({
                    event: d,
                    listeners: w
                }))
            }
        }
        if (!(e & 7)) {
            e: {
                if (d = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout", d && n !== ya && (y = n.relatedTarget || n.fromElement) && (jn(y) || y[Zt])) break e;
                if ((v || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, v ? (y = n.relatedTarget || n.toElement, v = u, y = y ? jn(y) : null, y !== null && (_ = Zn(y), y !== _ || y.tag !== 5 && y.tag !== 6) && (y = null)) : (v = null, y = u), v !== y)) {
                    if (w = Kc, k = "onMouseLeave", p = "onMouseEnter", h = "mouse", (t === "pointerout" || t === "pointerover") && (w = Jc, k = "onPointerLeave", p = "onPointerEnter", h = "pointer"), _ = v == null ? d : ai(v), g = y == null ? d : ai(y), d = new w(k, h + "leave", v, n, c), d.target = _, d.relatedTarget = g, k = null, jn(c) === u && (w = new w(p, h + "enter", y, n, c), w.target = g, w.relatedTarget = _, k = w), _ = k, v && y) t: {
                        for (w = v, p = y, h = 0, g = w; g; g = ti(g)) h++;
                        for (g = 0, k = p; k; k = ti(k)) g++;
                        for (; 0 < h - g;) w = ti(w),
                        h--;
                        for (; 0 < g - h;) p = ti(p),
                        g--;
                        for (; h--;) {
                            if (w === p || p !== null && w === p.alternate) break t;
                            w = ti(w), p = ti(p)
                        }
                        w = null
                    }
                    else w = null;
                    v !== null && ud(f, d, v, w, !1), y !== null && _ !== null && ud(f, _, y, w, !0)
                }
            }
            e: {
                if (d = u ? ai(u) : window, v = d.nodeName && d.nodeName.toLowerCase(), v === "select" || v === "input" && d.type === "file") var C = Mv;
                else if (td(d))
                    if (jh) C = Ov;
                    else {
                        C = Lv;
                        var T = Rv
                    }
                else(v = d.nodeName) && v.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (C = jv);
                if (C && (C = C(t, u))) {
                    Lh(f, C, n, c);
                    break e
                }
                T && T(t, d, u),
                t === "focusout" && (T = d._wrapperState) && T.controlled && d.type === "number" && ha(d, "number", d.value)
            }
            switch (T = u ? ai(u) : window, t) {
                case "focusin":
                    (td(T) || T.contentEditable === "true") && (si = T, Ca = u, cr = null);
                    break;
                case "focusout":
                    cr = Ca = si = null;
                    break;
                case "mousedown":
                    Ea = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ea = !1, sd(f, n, c);
                    break;
                case "selectionchange":
                    if (Av) break;
                case "keydown":
                case "keyup":
                    sd(f, n, c)
            }
            var L;
            if (Ru) e: {
                switch (t) {
                    case "compositionstart":
                        var M = "onCompositionStart";
                        break e;
                    case "compositionend":
                        M = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        M = "onCompositionUpdate";
                        break e
                }
                M = void 0
            }
            else oi ? Mh(t, n) && (M = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");M && (Th && n.locale !== "ko" && (oi || M !== "onCompositionStart" ? M === "onCompositionEnd" && oi && (L = $h()) : (cn = c, $u = "value" in cn ? cn.value : cn.textContent, oi = !0)), T = Wo(u, M), 0 < T.length && (M = new qc(M, t, null, n, c), f.push({
                event: M,
                listeners: T
            }), L ? M.data = L : (L = Rh(n), L !== null && (M.data = L)))),
            (L = Ev ? Pv(t, n) : zv(t, n)) && (u = Wo(u, "onBeforeInput"), 0 < u.length && (c = new qc("onBeforeInput", "beforeinput", null, n, c), f.push({
                event: c,
                listeners: u
            }), c.data = L))
        }
        Vh(f, e)
    })
}

function $r(t, e, n) {
    return {
        instance: t,
        listener: e,
        currentTarget: n
    }
}

function Wo(t, e) {
    for (var n = e + "Capture", i = []; t !== null;) {
        var r = t,
            o = r.stateNode;
        r.tag === 5 && o !== null && (r = o, o = Sr(t, n), o != null && i.unshift($r(t, o, r)), o = Sr(t, e), o != null && i.push($r(t, o, r))), t = t.return
    }
    return i
}

function ti(t) {
    if (t === null) return null;
    do t = t.return; while (t && t.tag !== 5);
    return t || null
}

function ud(t, e, n, i, r) {
    for (var o = e._reactName, s = []; n !== null && n !== i;) {
        var l = n,
            a = l.alternate,
            u = l.stateNode;
        if (a !== null && a === i) break;
        l.tag === 5 && u !== null && (l = u, r ? (a = Sr(n, o), a != null && s.unshift($r(n, a, l))) : r || (a = Sr(n, o), a != null && s.push($r(n, a, l)))), n = n.return
    }
    s.length !== 0 && t.push({
        event: e,
        listeners: s
    })
}
var Bv = /\r\n?/g,
    Wv = /\u0000|\uFFFD/g;

function cd(t) {
    return (typeof t == "string" ? t : "" + t).replace(Bv, `
`).replace(Wv, "")
}

function ao(t, e, n) {
    if (e = cd(e), cd(t) !== e && n) throw Error(E(425))
}

function Vo() {}
var Pa = null,
    za = null;

function $a(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
}
var Ta = typeof setTimeout == "function" ? setTimeout : void 0,
    Vv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    dd = typeof Promise == "function" ? Promise : void 0,
    Hv = typeof queueMicrotask == "function" ? queueMicrotask : typeof dd < "u" ? function(t) {
        return dd.resolve(null).then(t).catch(Qv)
    } : Ta;

function Qv(t) {
    setTimeout(function() {
        throw t
    })
}

function zl(t, e) {
    var n = e,
        i = 0;
    do {
        var r = n.nextSibling;
        if (t.removeChild(n), r && r.nodeType === 8)
            if (n = r.data, n === "/$") {
                if (i === 0) {
                    t.removeChild(r), Cr(e);
                    return
                }
                i--
            } else n !== "$" && n !== "$?" && n !== "$!" || i++;
        n = r
    } while (n);
    Cr(e)
}

function mn(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
            if (e = t.data, e === "$" || e === "$!" || e === "$?") break;
            if (e === "/$") return null
        }
    }
    return t
}

function fd(t) {
    t = t.previousSibling;
    for (var e = 0; t;) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (e === 0) return t;
                e--
            } else n === "/$" && e++
        }
        t = t.previousSibling
    }
    return null
}
var Ni = Math.random().toString(36).slice(2),
    At = "__reactFiber$" + Ni,
    Tr = "__reactProps$" + Ni,
    Zt = "__reactContainer$" + Ni,
    Ma = "__reactEvents$" + Ni,
    Gv = "__reactListeners$" + Ni,
    Yv = "__reactHandles$" + Ni;

function jn(t) {
    var e = t[At];
    if (e) return e;
    for (var n = t.parentNode; n;) {
        if (e = n[Zt] || n[At]) {
            if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
                for (t = fd(t); t !== null;) {
                    if (n = t[At]) return n;
                    t = fd(t)
                }
            return e
        }
        t = n, n = t.parentNode
    }
    return null
}

function Qr(t) {
    return t = t[At] || t[Zt], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
}

function ai(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(E(33))
}

function bs(t) {
    return t[Tr] || null
}
var Ra = [],
    ui = -1;

function zn(t) {
    return {
        current: t
    }
}

function oe(t) {
    0 > ui || (t.current = Ra[ui], Ra[ui] = null, ui--)
}

function ie(t, e) {
    ui++, Ra[ui] = t.current, t.current = e
}
var bn = {},
    Be = zn(bn),
    Ze = zn(!1),
    Un = bn;

function Ci(t, e) {
    var n = t.type.contextTypes;
    if (!n) return bn;
    var i = t.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === e) return i.__reactInternalMemoizedMaskedChildContext;
    var r = {},
        o;
    for (o in n) r[o] = e[o];
    return i && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = r), r
}

function et(t) {
    return t = t.childContextTypes, t != null
}

function Ho() {
    oe(Ze), oe(Be)
}

function hd(t, e, n) {
    if (Be.current !== bn) throw Error(E(168));
    ie(Be, e), ie(Ze, n)
}

function Qh(t, e, n) {
    var i = t.stateNode;
    if (e = e.childContextTypes, typeof i.getChildContext != "function") return n;
    i = i.getChildContext();
    for (var r in i)
        if (!(r in e)) throw Error(E(108, Rg(t) || "Unknown", r));
    return ce({}, n, i)
}

function Qo(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || bn, Un = Be.current, ie(Be, t), ie(Ze, Ze.current), !0
}

function pd(t, e, n) {
    var i = t.stateNode;
    if (!i) throw Error(E(169));
    n ? (t = Qh(t, e, Un), i.__reactInternalMemoizedMergedChildContext = t, oe(Ze), oe(Be), ie(Be, t)) : oe(Ze), ie(Ze, n)
}
var Yt = null,
    Cs = !1,
    $l = !1;

function Gh(t) {
    Yt === null ? Yt = [t] : Yt.push(t)
}

function Xv(t) {
    Cs = !0, Gh(t)
}

function $n() {
    if (!$l && Yt !== null) {
        $l = !0;
        var t = 0,
            e = Z;
        try {
            var n = Yt;
            for (Z = 1; t < n.length; t++) {
                var i = n[t];
                do i = i(!0); while (i !== null)
            }
            Yt = null, Cs = !1
        } catch (r) {
            throw Yt !== null && (Yt = Yt.slice(t + 1)), yh(Cu, $n), r
        } finally {
            Z = e, $l = !1
        }
    }
    return null
}
var ci = [],
    di = 0,
    Go = null,
    Yo = 0,
    mt = [],
    gt = 0,
    Bn = null,
    Xt = 1,
    Kt = "";

function Tn(t, e) {
    ci[di++] = Yo, ci[di++] = Go, Go = t, Yo = e
}

function Yh(t, e, n) {
    mt[gt++] = Xt, mt[gt++] = Kt, mt[gt++] = Bn, Bn = t;
    var i = Xt;
    t = Kt;
    var r = 32 - $t(i) - 1;
    i &= ~(1 << r), n += 1;
    var o = 32 - $t(e) + r;
    if (30 < o) {
        var s = r - r % 5;
        o = (i & (1 << s) - 1).toString(32), i >>= s, r -= s, Xt = 1 << 32 - $t(e) + r | n << r | i, Kt = o + t
    } else Xt = 1 << o | n << r | i, Kt = t
}

function ju(t) {
    t.return !== null && (Tn(t, 1), Yh(t, 1, 0))
}

function Ou(t) {
    for (; t === Go;) Go = ci[--di], ci[di] = null, Yo = ci[--di], ci[di] = null;
    for (; t === Bn;) Bn = mt[--gt], mt[gt] = null, Kt = mt[--gt], mt[gt] = null, Xt = mt[--gt], mt[gt] = null
}
var st = null,
    ot = null,
    se = !1,
    Et = null;

function Xh(t, e) {
    var n = vt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = e, n.return = t, e = t.deletions, e === null ? (t.deletions = [n], t.flags |= 16) : e.push(n)
}

function md(t, e) {
    switch (t.tag) {
        case 5:
            var n = t.type;
            return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (t.stateNode = e, st = t, ot = mn(e.firstChild), !0) : !1;
        case 6:
            return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (t.stateNode = e, st = t, ot = null, !0) : !1;
        case 13:
            return e = e.nodeType !== 8 ? null : e, e !== null ? (n = Bn !== null ? {
                id: Xt,
                overflow: Kt
            } : null, t.memoizedState = {
                dehydrated: e,
                treeContext: n,
                retryLane: 1073741824
            }, n = vt(18, null, null, 0), n.stateNode = e, n.return = t, t.child = n, st = t, ot = null, !0) : !1;
        default:
            return !1
    }
}

function La(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}

function ja(t) {
    if (se) {
        var e = ot;
        if (e) {
            var n = e;
            if (!md(t, e)) {
                if (La(t)) throw Error(E(418));
                e = mn(n.nextSibling);
                var i = st;
                e && md(t, e) ? Xh(i, n) : (t.flags = t.flags & -4097 | 2, se = !1, st = t)
            }
        } else {
            if (La(t)) throw Error(E(418));
            t.flags = t.flags & -4097 | 2, se = !1, st = t
        }
    }
}

function gd(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13;) t = t.return;
    st = t
}

function uo(t) {
    if (t !== st) return !1;
    if (!se) return gd(t), se = !0, !1;
    var e;
    if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type, e = e !== "head" && e !== "body" && !$a(t.type, t.memoizedProps)), e && (e = ot)) {
        if (La(t)) throw Kh(), Error(E(418));
        for (; e;) Xh(t, e), e = mn(e.nextSibling)
    }
    if (gd(t), t.tag === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(E(317));
        e: {
            for (t = t.nextSibling, e = 0; t;) {
                if (t.nodeType === 8) {
                    var n = t.data;
                    if (n === "/$") {
                        if (e === 0) {
                            ot = mn(t.nextSibling);
                            break e
                        }
                        e--
                    } else n !== "$" && n !== "$!" && n !== "$?" || e++
                }
                t = t.nextSibling
            }
            ot = null
        }
    } else ot = st ? mn(t.stateNode.nextSibling) : null;
    return !0
}

function Kh() {
    for (var t = ot; t;) t = mn(t.nextSibling)
}

function Ei() {
    ot = st = null, se = !1
}

function Iu(t) {
    Et === null ? Et = [t] : Et.push(t)
}
var Kv = nn.ReactCurrentBatchConfig;

function bt(t, e) {
    if (t && t.defaultProps) {
        e = ce({}, e), t = t.defaultProps;
        for (var n in t) e[n] === void 0 && (e[n] = t[n]);
        return e
    }
    return e
}
var Xo = zn(null),
    Ko = null,
    fi = null,
    Du = null;

function Au() {
    Du = fi = Ko = null
}

function Nu(t) {
    var e = Xo.current;
    oe(Xo), t._currentValue = e
}

function Oa(t, e, n) {
    for (; t !== null;) {
        var i = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e), t === n) break;
        t = t.return
    }
}

function Si(t, e) {
    Ko = t, Du = fi = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & e && (Je = !0), t.firstContext = null)
}

function wt(t) {
    var e = t._currentValue;
    if (Du !== t)
        if (t = {
                context: t,
                memoizedValue: e,
                next: null
            }, fi === null) {
            if (Ko === null) throw Error(E(308));
            fi = t, Ko.dependencies = {
                lanes: 0,
                firstContext: t
            }
        } else fi = fi.next = t;
    return e
}
var On = null;

function Fu(t) {
    On === null ? On = [t] : On.push(t)
}

function qh(t, e, n, i) {
    var r = e.interleaved;
    return r === null ? (n.next = n, Fu(e)) : (n.next = r.next, r.next = n), e.interleaved = n, en(t, i)
}

function en(t, e) {
    t.lanes |= e;
    var n = t.alternate;
    for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null;) t.childLanes |= e, n = t.alternate, n !== null && (n.childLanes |= e), n = t, t = t.return;
    return n.tag === 3 ? n.stateNode : null
}
var ln = !1;

function Uu(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Jh(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects
    })
}

function qt(t, e) {
    return {
        eventTime: t,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function gn(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (i = i.shared, Q & 2) {
        var r = i.pending;
        return r === null ? e.next = e : (e.next = r.next, r.next = e), i.pending = e, en(t, n)
    }
    return r = i.interleaved, r === null ? (e.next = e, Fu(i)) : (e.next = r.next, r.next = e), i.interleaved = e, en(t, n)
}

function Eo(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194240) !== 0)) {
        var i = e.lanes;
        i &= t.pendingLanes, n |= i, e.lanes = n, Eu(t, n)
    }
}

function vd(t, e) {
    var n = t.updateQueue,
        i = t.alternate;
    if (i !== null && (i = i.updateQueue, n === i)) {
        var r = null,
            o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? r = o = s : o = o.next = s, n = n.next
            } while (n !== null);
            o === null ? r = o = e : o = o.next = e
        } else r = o = e;
        n = {
            baseState: i.baseState,
            firstBaseUpdate: r,
            lastBaseUpdate: o,
            shared: i.shared,
            effects: i.effects
        }, t.updateQueue = n;
        return
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e
}

function qo(t, e, n, i) {
    var r = t.updateQueue;
    ln = !1;
    var o = r.firstBaseUpdate,
        s = r.lastBaseUpdate,
        l = r.shared.pending;
    if (l !== null) {
        r.shared.pending = null;
        var a = l,
            u = a.next;
        a.next = null, s === null ? o = u : s.next = u, s = a;
        var c = t.alternate;
        c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = a))
    }
    if (o !== null) {
        var f = r.baseState;
        s = 0, c = u = a = null, l = o;
        do {
            var d = l.lane,
                v = l.eventTime;
            if ((i & d) === d) {
                c !== null && (c = c.next = {
                    eventTime: v,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var y = t,
                        w = l;
                    switch (d = e, v = n, w.tag) {
                        case 1:
                            if (y = w.payload, typeof y == "function") {
                                f = y.call(v, f, d);
                                break e
                            }
                            f = y;
                            break e;
                        case 3:
                            y.flags = y.flags & -65537 | 128;
                        case 0:
                            if (y = w.payload, d = typeof y == "function" ? y.call(v, f, d) : y, d == null) break e;
                            f = ce({}, f, d);
                            break e;
                        case 2:
                            ln = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (t.flags |= 64, d = r.effects, d === null ? r.effects = [l] : d.push(l))
            } else v = {
                eventTime: v,
                lane: d,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
            }, c === null ? (u = c = v, a = f) : c = c.next = v, s |= d;
            if (l = l.next, l === null) {
                if (l = r.shared.pending, l === null) break;
                d = l, l = d.next, d.next = null, r.lastBaseUpdate = d, r.shared.pending = null
            }
        } while (1);
        if (c === null && (a = f), r.baseState = a, r.firstBaseUpdate = u, r.lastBaseUpdate = c, e = r.shared.interleaved, e !== null) {
            r = e;
            do s |= r.lane, r = r.next; while (r !== e)
        } else o === null && (r.shared.lanes = 0);
        Vn |= s, t.lanes = s, t.memoizedState = f
    }
}

function yd(t, e, n) {
    if (t = e.effects, e.effects = null, t !== null)
        for (e = 0; e < t.length; e++) {
            var i = t[e],
                r = i.callback;
            if (r !== null) {
                if (i.callback = null, i = n, typeof r != "function") throw Error(E(191, r));
                r.call(i)
            }
        }
}
var Zh = new qf.Component().refs;

function Ia(t, e, n, i) {
    e = t.memoizedState, n = n(i, e), n = n == null ? e : ce({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n)
}
var Es = {
    isMounted: function(t) {
        return (t = t._reactInternals) ? Zn(t) === t : !1
    },
    enqueueSetState: function(t, e, n) {
        t = t._reactInternals;
        var i = He(),
            r = yn(t),
            o = qt(i, r);
        o.payload = e, n != null && (o.callback = n), e = gn(t, o, r), e !== null && (Tt(e, t, r, i), Eo(e, t, r))
    },
    enqueueReplaceState: function(t, e, n) {
        t = t._reactInternals;
        var i = He(),
            r = yn(t),
            o = qt(i, r);
        o.tag = 1, o.payload = e, n != null && (o.callback = n), e = gn(t, o, r), e !== null && (Tt(e, t, r, i), Eo(e, t, r))
    },
    enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var n = He(),
            i = yn(t),
            r = qt(n, i);
        r.tag = 2, e != null && (r.callback = e), e = gn(t, r, i), e !== null && (Tt(e, t, i, n), Eo(e, t, i))
    }
};

function wd(t, e, n, i, r, o, s) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, o, s) : e.prototype && e.prototype.isPureReactComponent ? !Pr(n, i) || !Pr(r, o) : !0
}

function ep(t, e, n) {
    var i = !1,
        r = bn,
        o = e.contextType;
    return typeof o == "object" && o !== null ? o = wt(o) : (r = et(e) ? Un : Be.current, i = e.contextTypes, o = (i = i != null) ? Ci(t, r) : bn), e = new e(n, o), t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = Es, t.stateNode = e, e._reactInternals = t, i && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = r, t.__reactInternalMemoizedMaskedChildContext = o), e
}

function xd(t, e, n, i) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, i), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, i), e.state !== t && Es.enqueueReplaceState(e, e.state, null)
}

function Da(t, e, n, i) {
    var r = t.stateNode;
    r.props = n, r.state = t.memoizedState, r.refs = Zh, Uu(t);
    var o = e.contextType;
    typeof o == "object" && o !== null ? r.context = wt(o) : (o = et(e) ? Un : Be.current, r.context = Ci(t, o)), r.state = t.memoizedState, o = e.getDerivedStateFromProps, typeof o == "function" && (Ia(t, e, o, n), r.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (e = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), e !== r.state && Es.enqueueReplaceState(r, r.state, null), qo(t, n, r, i), r.state = t.memoizedState), typeof r.componentDidMount == "function" && (t.flags |= 4194308)
}

function qi(t, e, n) {
    if (t = n.ref, t !== null && typeof t != "function" && typeof t != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(E(309));
                var i = n.stateNode
            }
            if (!i) throw Error(E(147, t));
            var r = i,
                o = "" + t;
            return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === o ? e.ref : (e = function(s) {
                var l = r.refs;
                l === Zh && (l = r.refs = {}), s === null ? delete l[o] : l[o] = s
            }, e._stringRef = o, e)
        }
        if (typeof t != "string") throw Error(E(284));
        if (!n._owner) throw Error(E(290, t))
    }
    return t
}

function co(t, e) {
    throw t = Object.prototype.toString.call(e), Error(E(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))
}

function kd(t) {
    var e = t._init;
    return e(t._payload)
}

function tp(t) {
    function e(p, h) {
        if (t) {
            var g = p.deletions;
            g === null ? (p.deletions = [h], p.flags |= 16) : g.push(h)
        }
    }

    function n(p, h) {
        if (!t) return null;
        for (; h !== null;) e(p, h), h = h.sibling;
        return null
    }

    function i(p, h) {
        for (p = new Map; h !== null;) h.key !== null ? p.set(h.key, h) : p.set(h.index, h), h = h.sibling;
        return p
    }

    function r(p, h) {
        return p = wn(p, h), p.index = 0, p.sibling = null, p
    }

    function o(p, h, g) {
        return p.index = g, t ? (g = p.alternate, g !== null ? (g = g.index, g < h ? (p.flags |= 2, h) : g) : (p.flags |= 2, h)) : (p.flags |= 1048576, h)
    }

    function s(p) {
        return t && p.alternate === null && (p.flags |= 2), p
    }

    function l(p, h, g, k) {
        return h === null || h.tag !== 6 ? (h = Il(g, p.mode, k), h.return = p, h) : (h = r(h, g), h.return = p, h)
    }

    function a(p, h, g, k) {
        var C = g.type;
        return C === ri ? c(p, h, g.props.children, k, g.key) : h !== null && (h.elementType === C || typeof C == "object" && C !== null && C.$$typeof === sn && kd(C) === h.type) ? (k = r(h, g.props), k.ref = qi(p, h, g), k.return = p, k) : (k = Ro(g.type, g.key, g.props, null, p.mode, k), k.ref = qi(p, h, g), k.return = p, k)
    }

    function u(p, h, g, k) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== g.containerInfo || h.stateNode.implementation !== g.implementation ? (h = Dl(g, p.mode, k), h.return = p, h) : (h = r(h, g.children || []), h.return = p, h)
    }

    function c(p, h, g, k, C) {
        return h === null || h.tag !== 7 ? (h = Nn(g, p.mode, k, C), h.return = p, h) : (h = r(h, g), h.return = p, h)
    }

    function f(p, h, g) {
        if (typeof h == "string" && h !== "" || typeof h == "number") return h = Il("" + h, p.mode, g), h.return = p, h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case Zr:
                    return g = Ro(h.type, h.key, h.props, null, p.mode, g), g.ref = qi(p, null, h), g.return = p, g;
                case ii:
                    return h = Dl(h, p.mode, g), h.return = p, h;
                case sn:
                    var k = h._init;
                    return f(p, k(h._payload), g)
            }
            if (nr(h) || Qi(h)) return h = Nn(h, p.mode, g, null), h.return = p, h;
            co(p, h)
        }
        return null
    }

    function d(p, h, g, k) {
        var C = h !== null ? h.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number") return C !== null ? null : l(p, h, "" + g, k);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case Zr:
                    return g.key === C ? a(p, h, g, k) : null;
                case ii:
                    return g.key === C ? u(p, h, g, k) : null;
                case sn:
                    return C = g._init, d(p, h, C(g._payload), k)
            }
            if (nr(g) || Qi(g)) return C !== null ? null : c(p, h, g, k, null);
            co(p, g)
        }
        return null
    }

    function v(p, h, g, k, C) {
        if (typeof k == "string" && k !== "" || typeof k == "number") return p = p.get(g) || null, l(h, p, "" + k, C);
        if (typeof k == "object" && k !== null) {
            switch (k.$$typeof) {
                case Zr:
                    return p = p.get(k.key === null ? g : k.key) || null, a(h, p, k, C);
                case ii:
                    return p = p.get(k.key === null ? g : k.key) || null, u(h, p, k, C);
                case sn:
                    var T = k._init;
                    return v(p, h, g, T(k._payload), C)
            }
            if (nr(k) || Qi(k)) return p = p.get(g) || null, c(h, p, k, C, null);
            co(h, k)
        }
        return null
    }

    function y(p, h, g, k) {
        for (var C = null, T = null, L = h, M = h = 0, H = null; L !== null && M < g.length; M++) {
            L.index > M ? (H = L, L = null) : H = L.sibling;
            var N = d(p, L, g[M], k);
            if (N === null) {
                L === null && (L = H);
                break
            }
            t && L && N.alternate === null && e(p, L), h = o(N, h, M), T === null ? C = N : T.sibling = N, T = N, L = H
        }
        if (M === g.length) return n(p, L), se && Tn(p, M), C;
        if (L === null) {
            for (; M < g.length; M++) L = f(p, g[M], k), L !== null && (h = o(L, h, M), T === null ? C = L : T.sibling = L, T = L);
            return se && Tn(p, M), C
        }
        for (L = i(p, L); M < g.length; M++) H = v(L, p, M, g[M], k), H !== null && (t && H.alternate !== null && L.delete(H.key === null ? M : H.key), h = o(H, h, M), T === null ? C = H : T.sibling = H, T = H);
        return t && L.forEach(function(Se) {
            return e(p, Se)
        }), se && Tn(p, M), C
    }

    function w(p, h, g, k) {
        var C = Qi(g);
        if (typeof C != "function") throw Error(E(150));
        if (g = C.call(g), g == null) throw Error(E(151));
        for (var T = C = null, L = h, M = h = 0, H = null, N = g.next(); L !== null && !N.done; M++, N = g.next()) {
            L.index > M ? (H = L, L = null) : H = L.sibling;
            var Se = d(p, L, N.value, k);
            if (Se === null) {
                L === null && (L = H);
                break
            }
            t && L && Se.alternate === null && e(p, L), h = o(Se, h, M), T === null ? C = Se : T.sibling = Se, T = Se, L = H
        }
        if (N.done) return n(p, L), se && Tn(p, M), C;
        if (L === null) {
            for (; !N.done; M++, N = g.next()) N = f(p, N.value, k), N !== null && (h = o(N, h, M), T === null ? C = N : T.sibling = N, T = N);
            return se && Tn(p, M), C
        }
        for (L = i(p, L); !N.done; M++, N = g.next()) N = v(L, p, M, N.value, k), N !== null && (t && N.alternate !== null && L.delete(N.key === null ? M : N.key), h = o(N, h, M), T === null ? C = N : T.sibling = N, T = N);
        return t && L.forEach(function(ve) {
            return e(p, ve)
        }), se && Tn(p, M), C
    }

    function _(p, h, g, k) {
        if (typeof g == "object" && g !== null && g.type === ri && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case Zr:
                    e: {
                        for (var C = g.key, T = h; T !== null;) {
                            if (T.key === C) {
                                if (C = g.type, C === ri) {
                                    if (T.tag === 7) {
                                        n(p, T.sibling), h = r(T, g.props.children), h.return = p, p = h;
                                        break e
                                    }
                                } else if (T.elementType === C || typeof C == "object" && C !== null && C.$$typeof === sn && kd(C) === T.type) {
                                    n(p, T.sibling), h = r(T, g.props), h.ref = qi(p, T, g), h.return = p, p = h;
                                    break e
                                }
                                n(p, T);
                                break
                            } else e(p, T);
                            T = T.sibling
                        }
                        g.type === ri ? (h = Nn(g.props.children, p.mode, k, g.key), h.return = p, p = h) : (k = Ro(g.type, g.key, g.props, null, p.mode, k), k.ref = qi(p, h, g), k.return = p, p = k)
                    }
                    return s(p);
                case ii:
                    e: {
                        for (T = g.key; h !== null;) {
                            if (h.key === T)
                                if (h.tag === 4 && h.stateNode.containerInfo === g.containerInfo && h.stateNode.implementation === g.implementation) {
                                    n(p, h.sibling), h = r(h, g.children || []), h.return = p, p = h;
                                    break e
                                } else {
                                    n(p, h);
                                    break
                                }
                            else e(p, h);
                            h = h.sibling
                        }
                        h = Dl(g, p.mode, k),
                        h.return = p,
                        p = h
                    }
                    return s(p);
                case sn:
                    return T = g._init, _(p, h, T(g._payload), k)
            }
            if (nr(g)) return y(p, h, g, k);
            if (Qi(g)) return w(p, h, g, k);
            co(p, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, h !== null && h.tag === 6 ? (n(p, h.sibling), h = r(h, g), h.return = p, p = h) : (n(p, h), h = Il(g, p.mode, k), h.return = p, p = h), s(p)) : n(p, h)
    }
    return _
}
var Pi = tp(!0),
    np = tp(!1),
    Gr = {},
    Ut = zn(Gr),
    Mr = zn(Gr),
    Rr = zn(Gr);

function In(t) {
    if (t === Gr) throw Error(E(174));
    return t
}

function Bu(t, e) {
    switch (ie(Rr, e), ie(Mr, t), ie(Ut, Gr), t = e.nodeType, t) {
        case 9:
        case 11:
            e = (e = e.documentElement) ? e.namespaceURI : ma(null, "");
            break;
        default:
            t = t === 8 ? e.parentNode : e, e = t.namespaceURI || null, t = t.tagName, e = ma(e, t)
    }
    oe(Ut), ie(Ut, e)
}

function zi() {
    oe(Ut), oe(Mr), oe(Rr)
}

function ip(t) {
    In(Rr.current);
    var e = In(Ut.current),
        n = ma(e, t.type);
    e !== n && (ie(Mr, t), ie(Ut, n))
}

function Wu(t) {
    Mr.current === t && (oe(Ut), oe(Mr))
}
var ae = zn(0);

function Jo(t) {
    for (var e = t; e !== null;) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return e
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128) return e
        } else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue
        }
        if (e === t) break;
        for (; e.sibling === null;) {
            if (e.return === null || e.return === t) return null;
            e = e.return
        }
        e.sibling.return = e.return, e = e.sibling
    }
    return null
}
var Tl = [];

function Vu() {
    for (var t = 0; t < Tl.length; t++) Tl[t]._workInProgressVersionPrimary = null;
    Tl.length = 0
}
var Po = nn.ReactCurrentDispatcher,
    Ml = nn.ReactCurrentBatchConfig,
    Wn = 0,
    ue = null,
    ye = null,
    _e = null,
    Zo = !1,
    dr = !1,
    Lr = 0,
    qv = 0;

function Ie() {
    throw Error(E(321))
}

function Hu(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
        if (!Ot(t[n], e[n])) return !1;
    return !0
}

function Qu(t, e, n, i, r, o) {
    if (Wn = o, ue = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, Po.current = t === null || t.memoizedState === null ? ty : ny, t = n(i, r), dr) {
        o = 0;
        do {
            if (dr = !1, Lr = 0, 25 <= o) throw Error(E(301));
            o += 1, _e = ye = null, e.updateQueue = null, Po.current = iy, t = n(i, r)
        } while (dr)
    }
    if (Po.current = es, e = ye !== null && ye.next !== null, Wn = 0, _e = ye = ue = null, Zo = !1, e) throw Error(E(300));
    return t
}

function Gu() {
    var t = Lr !== 0;
    return Lr = 0, t
}

function Dt() {
    var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return _e === null ? ue.memoizedState = _e = t : _e = _e.next = t, _e
}

function xt() {
    if (ye === null) {
        var t = ue.alternate;
        t = t !== null ? t.memoizedState : null
    } else t = ye.next;
    var e = _e === null ? ue.memoizedState : _e.next;
    if (e !== null) _e = e, ye = t;
    else {
        if (t === null) throw Error(E(310));
        ye = t, t = {
            memoizedState: ye.memoizedState,
            baseState: ye.baseState,
            baseQueue: ye.baseQueue,
            queue: ye.queue,
            next: null
        }, _e === null ? ue.memoizedState = _e = t : _e = _e.next = t
    }
    return _e
}

function jr(t, e) {
    return typeof e == "function" ? e(t) : e
}

function Rl(t) {
    var e = xt(),
        n = e.queue;
    if (n === null) throw Error(E(311));
    n.lastRenderedReducer = t;
    var i = ye,
        r = i.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (r !== null) {
            var s = r.next;
            r.next = o.next, o.next = s
        }
        i.baseQueue = r = o, n.pending = null
    }
    if (r !== null) {
        o = r.next, i = i.baseState;
        var l = s = null,
            a = null,
            u = o;
        do {
            var c = u.lane;
            if ((Wn & c) === c) a !== null && (a = a.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), i = u.hasEagerState ? u.eagerState : t(i, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = f, s = i) : a = a.next = f, ue.lanes |= c, Vn |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        a === null ? s = i : a.next = l, Ot(i, e.memoizedState) || (Je = !0), e.memoizedState = i, e.baseState = s, e.baseQueue = a, n.lastRenderedState = i
    }
    if (t = n.interleaved, t !== null) {
        r = t;
        do o = r.lane, ue.lanes |= o, Vn |= o, r = r.next; while (r !== t)
    } else r === null && (n.lanes = 0);
    return [e.memoizedState, n.dispatch]
}

function Ll(t) {
    var e = xt(),
        n = e.queue;
    if (n === null) throw Error(E(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch,
        r = n.pending,
        o = e.memoizedState;
    if (r !== null) {
        n.pending = null;
        var s = r = r.next;
        do o = t(o, s.action), s = s.next; while (s !== r);
        Ot(o, e.memoizedState) || (Je = !0), e.memoizedState = o, e.baseQueue === null && (e.baseState = o), n.lastRenderedState = o
    }
    return [o, i]
}

function rp() {}

function op(t, e) {
    var n = ue,
        i = xt(),
        r = e(),
        o = !Ot(i.memoizedState, r);
    if (o && (i.memoizedState = r, Je = !0), i = i.queue, Yu(ap.bind(null, n, i, t), [t]), i.getSnapshot !== e || o || _e !== null && _e.memoizedState.tag & 1) {
        if (n.flags |= 2048, Or(9, lp.bind(null, n, i, r, e), void 0, null), be === null) throw Error(E(349));
        Wn & 30 || sp(n, e, r)
    }
    return r
}

function sp(t, e, n) {
    t.flags |= 16384, t = {
        getSnapshot: e,
        value: n
    }, e = ue.updateQueue, e === null ? (e = {
        lastEffect: null,
        stores: null
    }, ue.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t))
}

function lp(t, e, n, i) {
    e.value = n, e.getSnapshot = i, up(e) && cp(t)
}

function ap(t, e, n) {
    return n(function() {
        up(e) && cp(t)
    })
}

function up(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var n = e();
        return !Ot(t, n)
    } catch {
        return !0
    }
}

function cp(t) {
    var e = en(t, 1);
    e !== null && Tt(e, t, 1, -1)
}

function Sd(t) {
    var e = Dt();
    return typeof t == "function" && (t = t()), e.memoizedState = e.baseState = t, t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jr,
        lastRenderedState: t
    }, e.queue = t, t = t.dispatch = ey.bind(null, ue, t), [e.memoizedState, t]
}

function Or(t, e, n, i) {
    return t = {
        tag: t,
        create: e,
        destroy: n,
        deps: i,
        next: null
    }, e = ue.updateQueue, e === null ? (e = {
        lastEffect: null,
        stores: null
    }, ue.updateQueue = e, e.lastEffect = t.next = t) : (n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (i = n.next, n.next = t, t.next = i, e.lastEffect = t)), t
}

function dp() {
    return xt().memoizedState
}

function zo(t, e, n, i) {
    var r = Dt();
    ue.flags |= t, r.memoizedState = Or(1 | e, n, void 0, i === void 0 ? null : i)
}

function Ps(t, e, n, i) {
    var r = xt();
    i = i === void 0 ? null : i;
    var o = void 0;
    if (ye !== null) {
        var s = ye.memoizedState;
        if (o = s.destroy, i !== null && Hu(i, s.deps)) {
            r.memoizedState = Or(e, n, o, i);
            return
        }
    }
    ue.flags |= t, r.memoizedState = Or(1 | e, n, o, i)
}

function _d(t, e) {
    return zo(8390656, 8, t, e)
}

function Yu(t, e) {
    return Ps(2048, 8, t, e)
}

function fp(t, e) {
    return Ps(4, 2, t, e)
}

function hp(t, e) {
    return Ps(4, 4, t, e)
}

function pp(t, e) {
    if (typeof e == "function") return t = t(), e(t),
        function() {
            e(null)
        };
    if (e != null) return t = t(), e.current = t,
        function() {
            e.current = null
        }
}

function mp(t, e, n) {
    return n = n != null ? n.concat([t]) : null, Ps(4, 4, pp.bind(null, e, t), n)
}

function Xu() {}

function gp(t, e) {
    var n = xt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return i !== null && e !== null && Hu(e, i[1]) ? i[0] : (n.memoizedState = [t, e], t)
}

function vp(t, e) {
    var n = xt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return i !== null && e !== null && Hu(e, i[1]) ? i[0] : (t = t(), n.memoizedState = [t, e], t)
}

function yp(t, e, n) {
    return Wn & 21 ? (Ot(n, e) || (n = kh(), ue.lanes |= n, Vn |= n, t.baseState = !0), e) : (t.baseState && (t.baseState = !1, Je = !0), t.memoizedState = n)
}

function Jv(t, e) {
    var n = Z;
    Z = n !== 0 && 4 > n ? n : 4, t(!0);
    var i = Ml.transition;
    Ml.transition = {};
    try {
        t(!1), e()
    } finally {
        Z = n, Ml.transition = i
    }
}

function wp() {
    return xt().memoizedState
}

function Zv(t, e, n) {
    var i = yn(t);
    if (n = {
            lane: i,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, xp(t)) kp(e, n);
    else if (n = qh(t, e, n, i), n !== null) {
        var r = He();
        Tt(n, t, i, r), Sp(n, e, i)
    }
}

function ey(t, e, n) {
    var i = yn(t),
        r = {
            lane: i,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (xp(t)) kp(e, r);
    else {
        var o = t.alternate;
        if (t.lanes === 0 && (o === null || o.lanes === 0) && (o = e.lastRenderedReducer, o !== null)) try {
            var s = e.lastRenderedState,
                l = o(s, n);
            if (r.hasEagerState = !0, r.eagerState = l, Ot(l, s)) {
                var a = e.interleaved;
                a === null ? (r.next = r, Fu(e)) : (r.next = a.next, a.next = r), e.interleaved = r;
                return
            }
        } catch {} finally {}
        n = qh(t, e, r, i), n !== null && (r = He(), Tt(n, t, i, r), Sp(n, e, i))
    }
}

function xp(t) {
    var e = t.alternate;
    return t === ue || e !== null && e === ue
}

function kp(t, e) {
    dr = Zo = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e
}

function Sp(t, e, n) {
    if (n & 4194240) {
        var i = e.lanes;
        i &= t.pendingLanes, n |= i, e.lanes = n, Eu(t, n)
    }
}
var es = {
        readContext: wt,
        useCallback: Ie,
        useContext: Ie,
        useEffect: Ie,
        useImperativeHandle: Ie,
        useInsertionEffect: Ie,
        useLayoutEffect: Ie,
        useMemo: Ie,
        useReducer: Ie,
        useRef: Ie,
        useState: Ie,
        useDebugValue: Ie,
        useDeferredValue: Ie,
        useTransition: Ie,
        useMutableSource: Ie,
        useSyncExternalStore: Ie,
        useId: Ie,
        unstable_isNewReconciler: !1
    },
    ty = {
        readContext: wt,
        useCallback: function(t, e) {
            return Dt().memoizedState = [t, e === void 0 ? null : e], t
        },
        useContext: wt,
        useEffect: _d,
        useImperativeHandle: function(t, e, n) {
            return n = n != null ? n.concat([t]) : null, zo(4194308, 4, pp.bind(null, e, t), n)
        },
        useLayoutEffect: function(t, e) {
            return zo(4194308, 4, t, e)
        },
        useInsertionEffect: function(t, e) {
            return zo(4, 2, t, e)
        },
        useMemo: function(t, e) {
            var n = Dt();
            return e = e === void 0 ? null : e, t = t(), n.memoizedState = [t, e], t
        },
        useReducer: function(t, e, n) {
            var i = Dt();
            return e = n !== void 0 ? n(e) : e, i.memoizedState = i.baseState = e, t = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: e
            }, i.queue = t, t = t.dispatch = Zv.bind(null, ue, t), [i.memoizedState, t]
        },
        useRef: function(t) {
            var e = Dt();
            return t = {
                current: t
            }, e.memoizedState = t
        },
        useState: Sd,
        useDebugValue: Xu,
        useDeferredValue: function(t) {
            return Dt().memoizedState = t
        },
        useTransition: function() {
            var t = Sd(!1),
                e = t[0];
            return t = Jv.bind(null, t[1]), Dt().memoizedState = t, [e, t]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(t, e, n) {
            var i = ue,
                r = Dt();
            if (se) {
                if (n === void 0) throw Error(E(407));
                n = n()
            } else {
                if (n = e(), be === null) throw Error(E(349));
                Wn & 30 || sp(i, e, n)
            }
            r.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: e
            };
            return r.queue = o, _d(ap.bind(null, i, o, t), [t]), i.flags |= 2048, Or(9, lp.bind(null, i, o, n, e), void 0, null), n
        },
        useId: function() {
            var t = Dt(),
                e = be.identifierPrefix;
            if (se) {
                var n = Kt,
                    i = Xt;
                n = (i & ~(1 << 32 - $t(i) - 1)).toString(32) + n, e = ":" + e + "R" + n, n = Lr++, 0 < n && (e += "H" + n.toString(32)), e += ":"
            } else n = qv++, e = ":" + e + "r" + n.toString(32) + ":";
            return t.memoizedState = e
        },
        unstable_isNewReconciler: !1
    },
    ny = {
        readContext: wt,
        useCallback: gp,
        useContext: wt,
        useEffect: Yu,
        useImperativeHandle: mp,
        useInsertionEffect: fp,
        useLayoutEffect: hp,
        useMemo: vp,
        useReducer: Rl,
        useRef: dp,
        useState: function() {
            return Rl(jr)
        },
        useDebugValue: Xu,
        useDeferredValue: function(t) {
            var e = xt();
            return yp(e, ye.memoizedState, t)
        },
        useTransition: function() {
            var t = Rl(jr)[0],
                e = xt().memoizedState;
            return [t, e]
        },
        useMutableSource: rp,
        useSyncExternalStore: op,
        useId: wp,
        unstable_isNewReconciler: !1
    },
    iy = {
        readContext: wt,
        useCallback: gp,
        useContext: wt,
        useEffect: Yu,
        useImperativeHandle: mp,
        useInsertionEffect: fp,
        useLayoutEffect: hp,
        useMemo: vp,
        useReducer: Ll,
        useRef: dp,
        useState: function() {
            return Ll(jr)
        },
        useDebugValue: Xu,
        useDeferredValue: function(t) {
            var e = xt();
            return ye === null ? e.memoizedState = t : yp(e, ye.memoizedState, t)
        },
        useTransition: function() {
            var t = Ll(jr)[0],
                e = xt().memoizedState;
            return [t, e]
        },
        useMutableSource: rp,
        useSyncExternalStore: op,
        useId: wp,
        unstable_isNewReconciler: !1
    };

function $i(t, e) {
    try {
        var n = "",
            i = e;
        do n += Mg(i), i = i.return; while (i);
        var r = n
    } catch (o) {
        r = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: t,
        source: e,
        stack: r,
        digest: null
    }
}

function jl(t, e, n) {
    return {
        value: t,
        source: null,
        stack: n ? ? null,
        digest: e ? ? null
    }
}

function Aa(t, e) {
    try {
        console.error(e.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var ry = typeof WeakMap == "function" ? WeakMap : Map;

function _p(t, e, n) {
    n = qt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var i = e.value;
    return n.callback = function() {
        ns || (ns = !0, Ya = i), Aa(t, e)
    }, n
}

function bp(t, e, n) {
    n = qt(-1, n), n.tag = 3;
    var i = t.type.getDerivedStateFromError;
    if (typeof i == "function") {
        var r = e.value;
        n.payload = function() {
            return i(r)
        }, n.callback = function() {
            Aa(t, e)
        }
    }
    var o = t.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Aa(t, e), typeof i != "function" && (vn === null ? vn = new Set([this]) : vn.add(this));
        var s = e.stack;
        this.componentDidCatch(e.value, {
            componentStack: s !== null ? s : ""
        })
    }), n
}

function bd(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
        i = t.pingCache = new ry;
        var r = new Set;
        i.set(e, r)
    } else r = i.get(e), r === void 0 && (r = new Set, i.set(e, r));
    r.has(n) || (r.add(n), t = yy.bind(null, t, e, n), e.then(t, t))
}

function Cd(t) {
    do {
        var e;
        if ((e = t.tag === 13) && (e = t.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e) return t;
        t = t.return
    } while (t !== null);
    return null
}

function Ed(t, e, n, i, r) {
    return t.mode & 1 ? (t.flags |= 65536, t.lanes = r, t) : (t === e ? t.flags |= 65536 : (t.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = qt(-1, 1), e.tag = 2, gn(n, e, 1))), n.lanes |= 1), t)
}
var oy = nn.ReactCurrentOwner,
    Je = !1;

function Ve(t, e, n, i) {
    e.child = t === null ? np(e, null, n, i) : Pi(e, t.child, n, i)
}

function Pd(t, e, n, i, r) {
    n = n.render;
    var o = e.ref;
    return Si(e, r), i = Qu(t, e, n, i, o, r), n = Gu(), t !== null && !Je ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~r, tn(t, e, r)) : (se && n && ju(e), e.flags |= 1, Ve(t, e, i, r), e.child)
}

function zd(t, e, n, i, r) {
    if (t === null) {
        var o = n.type;
        return typeof o == "function" && !ic(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15, e.type = o, Cp(t, e, o, i, r)) : (t = Ro(n.type, null, i, e, e.mode, r), t.ref = e.ref, t.return = e, e.child = t)
    }
    if (o = t.child, !(t.lanes & r)) {
        var s = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Pr, n(s, i) && t.ref === e.ref) return tn(t, e, r)
    }
    return e.flags |= 1, t = wn(o, i), t.ref = e.ref, t.return = e, e.child = t
}

function Cp(t, e, n, i, r) {
    if (t !== null) {
        var o = t.memoizedProps;
        if (Pr(o, i) && t.ref === e.ref)
            if (Je = !1, e.pendingProps = i = o, (t.lanes & r) !== 0) t.flags & 131072 && (Je = !0);
            else return e.lanes = t.lanes, tn(t, e, r)
    }
    return Na(t, e, n, i, r)
}

function Ep(t, e, n) {
    var i = e.pendingProps,
        r = i.children,
        o = t !== null ? t.memoizedState : null;
    if (i.mode === "hidden")
        if (!(e.mode & 1)) e.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, ie(pi, rt), rt |= n;
        else {
            if (!(n & 1073741824)) return t = o !== null ? o.baseLanes | n : n, e.lanes = e.childLanes = 1073741824, e.memoizedState = {
                baseLanes: t,
                cachePool: null,
                transitions: null
            }, e.updateQueue = null, ie(pi, rt), rt |= t, null;
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, i = o !== null ? o.baseLanes : n, ie(pi, rt), rt |= i
        }
    else o !== null ? (i = o.baseLanes | n, e.memoizedState = null) : i = n, ie(pi, rt), rt |= i;
    return Ve(t, e, r, n), e.child
}

function Pp(t, e) {
    var n = e.ref;
    (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512, e.flags |= 2097152)
}

function Na(t, e, n, i, r) {
    var o = et(n) ? Un : Be.current;
    return o = Ci(e, o), Si(e, r), n = Qu(t, e, n, i, o, r), i = Gu(), t !== null && !Je ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~r, tn(t, e, r)) : (se && i && ju(e), e.flags |= 1, Ve(t, e, n, r), e.child)
}

function $d(t, e, n, i, r) {
    if (et(n)) {
        var o = !0;
        Qo(e)
    } else o = !1;
    if (Si(e, r), e.stateNode === null) $o(t, e), ep(e, n, i), Da(e, n, i, r), i = !0;
    else if (t === null) {
        var s = e.stateNode,
            l = e.memoizedProps;
        s.props = l;
        var a = s.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = wt(u) : (u = et(n) ? Un : Be.current, u = Ci(e, u));
        var c = n.getDerivedStateFromProps,
            f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== i || a !== u) && xd(e, s, i, u), ln = !1;
        var d = e.memoizedState;
        s.state = d, qo(e, i, s, r), a = e.memoizedState, l !== i || d !== a || Ze.current || ln ? (typeof c == "function" && (Ia(e, n, c, i), a = e.memoizedState), (l = ln || wd(e, n, l, i, d, a, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = i, e.memoizedState = a), s.props = i, s.state = a, s.context = u, i = l) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308), i = !1)
    } else {
        s = e.stateNode, Jh(t, e), l = e.memoizedProps, u = e.type === e.elementType ? l : bt(e.type, l), s.props = u, f = e.pendingProps, d = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = wt(a) : (a = et(n) ? Un : Be.current, a = Ci(e, a));
        var v = n.getDerivedStateFromProps;
        (c = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || d !== a) && xd(e, s, i, a), ln = !1, d = e.memoizedState, s.state = d, qo(e, i, s, r);
        var y = e.memoizedState;
        l !== f || d !== y || Ze.current || ln ? (typeof v == "function" && (Ia(e, n, v, i), y = e.memoizedState), (u = ln || wd(e, n, u, i, d, y, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, y, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, y, a)), typeof s.componentDidUpdate == "function" && (e.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === t.memoizedProps && d === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024), e.memoizedProps = i, e.memoizedState = y), s.props = i, s.state = y, s.context = a, i = u) : (typeof s.componentDidUpdate != "function" || l === t.memoizedProps && d === t.memoizedState || (e.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024), i = !1)
    }
    return Fa(t, e, n, i, o, r)
}

function Fa(t, e, n, i, r, o) {
    Pp(t, e);
    var s = (e.flags & 128) !== 0;
    if (!i && !s) return r && pd(e, n, !1), tn(t, e, o);
    i = e.stateNode, oy.current = e;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return e.flags |= 1, t !== null && s ? (e.child = Pi(e, t.child, null, o), e.child = Pi(e, null, l, o)) : Ve(t, e, l, o), e.memoizedState = i.state, r && pd(e, n, !0), e.child
}

function zp(t) {
    var e = t.stateNode;
    e.pendingContext ? hd(t, e.pendingContext, e.pendingContext !== e.context) : e.context && hd(t, e.context, !1), Bu(t, e.containerInfo)
}

function Td(t, e, n, i, r) {
    return Ei(), Iu(r), e.flags |= 256, Ve(t, e, n, i), e.child
}
var Ua = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Ba(t) {
    return {
        baseLanes: t,
        cachePool: null,
        transitions: null
    }
}

function $p(t, e, n) {
    var i = e.pendingProps,
        r = ae.current,
        o = !1,
        s = (e.flags & 128) !== 0,
        l;
    if ((l = s) || (l = t !== null && t.memoizedState === null ? !1 : (r & 2) !== 0), l ? (o = !0, e.flags &= -129) : (t === null || t.memoizedState !== null) && (r |= 1), ie(ae, r & 1), t === null) return ja(e), t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (s = i.children, t = i.fallback, o ? (i = e.mode, o = e.child, s = {
        mode: "hidden",
        children: s
    }, !(i & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Ts(s, i, 0, null), t = Nn(t, i, n, null), o.return = e, t.return = e, o.sibling = t, e.child = o, e.child.memoizedState = Ba(n), e.memoizedState = Ua, t) : Ku(e, s));
    if (r = t.memoizedState, r !== null && (l = r.dehydrated, l !== null)) return sy(t, e, s, i, l, r, n);
    if (o) {
        o = i.fallback, s = e.mode, r = t.child, l = r.sibling;
        var a = {
            mode: "hidden",
            children: i.children
        };
        return !(s & 1) && e.child !== r ? (i = e.child, i.childLanes = 0, i.pendingProps = a, e.deletions = null) : (i = wn(r, a), i.subtreeFlags = r.subtreeFlags & 14680064), l !== null ? o = wn(l, o) : (o = Nn(o, s, n, null), o.flags |= 2), o.return = e, i.return = e, i.sibling = o, e.child = i, i = o, o = e.child, s = t.child.memoizedState, s = s === null ? Ba(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, o.memoizedState = s, o.childLanes = t.childLanes & ~n, e.memoizedState = Ua, i
    }
    return o = t.child, t = o.sibling, i = wn(o, {
        mode: "visible",
        children: i.children
    }), !(e.mode & 1) && (i.lanes = n), i.return = e, i.sibling = null, t !== null && (n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t)), e.child = i, e.memoizedState = null, i
}

function Ku(t, e) {
    return e = Ts({
        mode: "visible",
        children: e
    }, t.mode, 0, null), e.return = t, t.child = e
}

function fo(t, e, n, i) {
    return i !== null && Iu(i), Pi(e, t.child, null, n), t = Ku(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t
}

function sy(t, e, n, i, r, o, s) {
    if (n) return e.flags & 256 ? (e.flags &= -257, i = jl(Error(E(422))), fo(t, e, s, i)) : e.memoizedState !== null ? (e.child = t.child, e.flags |= 128, null) : (o = i.fallback, r = e.mode, i = Ts({
        mode: "visible",
        children: i.children
    }, r, 0, null), o = Nn(o, r, s, null), o.flags |= 2, i.return = e, o.return = e, i.sibling = o, e.child = i, e.mode & 1 && Pi(e, t.child, null, s), e.child.memoizedState = Ba(s), e.memoizedState = Ua, o);
    if (!(e.mode & 1)) return fo(t, e, s, null);
    if (r.data === "$!") {
        if (i = r.nextSibling && r.nextSibling.dataset, i) var l = i.dgst;
        return i = l, o = Error(E(419)), i = jl(o, i, void 0), fo(t, e, s, i)
    }
    if (l = (s & t.childLanes) !== 0, Je || l) {
        if (i = be, i !== null) {
            switch (s & -s) {
                case 4:
                    r = 2;
                    break;
                case 16:
                    r = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    r = 32;
                    break;
                case 536870912:
                    r = 268435456;
                    break;
                default:
                    r = 0
            }
            r = r & (i.suspendedLanes | s) ? 0 : r, r !== 0 && r !== o.retryLane && (o.retryLane = r, en(t, r), Tt(i, t, r, -1))
        }
        return nc(), i = jl(Error(E(421))), fo(t, e, s, i)
    }
    return r.data === "$?" ? (e.flags |= 128, e.child = t.child, e = wy.bind(null, t), r._reactRetry = e, null) : (t = o.treeContext, ot = mn(r.nextSibling), st = e, se = !0, Et = null, t !== null && (mt[gt++] = Xt, mt[gt++] = Kt, mt[gt++] = Bn, Xt = t.id, Kt = t.overflow, Bn = e), e = Ku(e, i.children), e.flags |= 4096, e)
}

function Md(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e), Oa(t.return, e, n)
}

function Ol(t, e, n, i, r) {
    var o = t.memoizedState;
    o === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: r
    } : (o.isBackwards = e, o.rendering = null, o.renderingStartTime = 0, o.last = i, o.tail = n, o.tailMode = r)
}

function Tp(t, e, n) {
    var i = e.pendingProps,
        r = i.revealOrder,
        o = i.tail;
    if (Ve(t, e, i.children, n), i = ae.current, i & 2) i = i & 1 | 2, e.flags |= 128;
    else {
        if (t !== null && t.flags & 128) e: for (t = e.child; t !== null;) {
            if (t.tag === 13) t.memoizedState !== null && Md(t, n, e);
            else if (t.tag === 19) Md(t, n, e);
            else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break e;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) break e;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        i &= 1
    }
    if (ie(ae, i), !(e.mode & 1)) e.memoizedState = null;
    else switch (r) {
        case "forwards":
            for (n = e.child, r = null; n !== null;) t = n.alternate, t !== null && Jo(t) === null && (r = n), n = n.sibling;
            n = r, n === null ? (r = e.child, e.child = null) : (r = n.sibling, n.sibling = null), Ol(e, !1, r, n, o);
            break;
        case "backwards":
            for (n = null, r = e.child, e.child = null; r !== null;) {
                if (t = r.alternate, t !== null && Jo(t) === null) {
                    e.child = r;
                    break
                }
                t = r.sibling, r.sibling = n, n = r, r = t
            }
            Ol(e, !0, n, null, o);
            break;
        case "together":
            Ol(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
    }
    return e.child
}

function $o(t, e) {
    !(e.mode & 1) && t !== null && (t.alternate = null, e.alternate = null, e.flags |= 2)
}

function tn(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), Vn |= e.lanes, !(n & e.childLanes)) return null;
    if (t !== null && e.child !== t.child) throw Error(E(153));
    if (e.child !== null) {
        for (t = e.child, n = wn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null;) t = t.sibling, n = n.sibling = wn(t, t.pendingProps), n.return = e;
        n.sibling = null
    }
    return e.child
}

function ly(t, e, n) {
    switch (e.tag) {
        case 3:
            zp(e), Ei();
            break;
        case 5:
            ip(e);
            break;
        case 1:
            et(e.type) && Qo(e);
            break;
        case 4:
            Bu(e, e.stateNode.containerInfo);
            break;
        case 10:
            var i = e.type._context,
                r = e.memoizedProps.value;
            ie(Xo, i._currentValue), i._currentValue = r;
            break;
        case 13:
            if (i = e.memoizedState, i !== null) return i.dehydrated !== null ? (ie(ae, ae.current & 1), e.flags |= 128, null) : n & e.child.childLanes ? $p(t, e, n) : (ie(ae, ae.current & 1), t = tn(t, e, n), t !== null ? t.sibling : null);
            ie(ae, ae.current & 1);
            break;
        case 19:
            if (i = (n & e.childLanes) !== 0, t.flags & 128) {
                if (i) return Tp(t, e, n);
                e.flags |= 128
            }
            if (r = e.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), ie(ae, ae.current), i) break;
            return null;
        case 22:
        case 23:
            return e.lanes = 0, Ep(t, e, n)
    }
    return tn(t, e, n)
}
var Mp, Wa, Rp, Lp;
Mp = function(t, e) {
    for (var n = e.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === e) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === e) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Wa = function() {};
Rp = function(t, e, n, i) {
    var r = t.memoizedProps;
    if (r !== i) {
        t = e.stateNode, In(Ut.current);
        var o = null;
        switch (n) {
            case "input":
                r = da(t, r), i = da(t, i), o = [];
                break;
            case "select":
                r = ce({}, r, {
                    value: void 0
                }), i = ce({}, i, {
                    value: void 0
                }), o = [];
                break;
            case "textarea":
                r = pa(t, r), i = pa(t, i), o = [];
                break;
            default:
                typeof r.onClick != "function" && typeof i.onClick == "function" && (t.onclick = Vo)
        }
        ga(n, i);
        var s;
        n = null;
        for (u in r)
            if (!i.hasOwnProperty(u) && r.hasOwnProperty(u) && r[u] != null)
                if (u === "style") {
                    var l = r[u];
                    for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (xr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in i) {
            var a = i[u];
            if (l = r != null ? r[u] : void 0, i.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s])
                    } else n || (o || (o = []), o.push(u, n)), n = a;
            else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (xr.hasOwnProperty(u) ? (a != null && u === "onScroll" && re("scroll", t), o || l === a || (o = [])) : (o = o || []).push(u, a))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (e.updateQueue = u) && (e.flags |= 4)
    }
};
Lp = function(t, e, n, i) {
    n !== i && (e.flags |= 4)
};

function Ji(t, e) {
    if (!se) switch (t.tailMode) {
        case "hidden":
            e = t.tail;
            for (var n = null; e !== null;) e.alternate !== null && (n = e), e = e.sibling;
            n === null ? t.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = t.tail;
            for (var i = null; n !== null;) n.alternate !== null && (i = n), n = n.sibling;
            i === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : i.sibling = null
    }
}

function De(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
        n = 0,
        i = 0;
    if (e)
        for (var r = t.child; r !== null;) n |= r.lanes | r.childLanes, i |= r.subtreeFlags & 14680064, i |= r.flags & 14680064, r.return = t, r = r.sibling;
    else
        for (r = t.child; r !== null;) n |= r.lanes | r.childLanes, i |= r.subtreeFlags, i |= r.flags, r.return = t, r = r.sibling;
    return t.subtreeFlags |= i, t.childLanes = n, e
}

function ay(t, e, n) {
    var i = e.pendingProps;
    switch (Ou(e), e.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return De(e), null;
        case 1:
            return et(e.type) && Ho(), De(e), null;
        case 3:
            return i = e.stateNode, zi(), oe(Ze), oe(Be), Vu(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (t === null || t.child === null) && (uo(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, Et !== null && (qa(Et), Et = null))), Wa(t, e), De(e), null;
        case 5:
            Wu(e);
            var r = In(Rr.current);
            if (n = e.type, t !== null && e.stateNode != null) Rp(t, e, n, i, r), t.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
            else {
                if (!i) {
                    if (e.stateNode === null) throw Error(E(166));
                    return De(e), null
                }
                if (t = In(Ut.current), uo(e)) {
                    i = e.stateNode, n = e.type;
                    var o = e.memoizedProps;
                    switch (i[At] = e, i[Tr] = o, t = (e.mode & 1) !== 0, n) {
                        case "dialog":
                            re("cancel", i), re("close", i);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            re("load", i);
                            break;
                        case "video":
                        case "audio":
                            for (r = 0; r < rr.length; r++) re(rr[r], i);
                            break;
                        case "source":
                            re("error", i);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            re("error", i), re("load", i);
                            break;
                        case "details":
                            re("toggle", i);
                            break;
                        case "input":
                            Fc(i, o), re("invalid", i);
                            break;
                        case "select":
                            i._wrapperState = {
                                wasMultiple: !!o.multiple
                            }, re("invalid", i);
                            break;
                        case "textarea":
                            Bc(i, o), re("invalid", i)
                    }
                    ga(n, o), r = null;
                    for (var s in o)
                        if (o.hasOwnProperty(s)) {
                            var l = o[s];
                            s === "children" ? typeof l == "string" ? i.textContent !== l && (o.suppressHydrationWarning !== !0 && ao(i.textContent, l, t), r = ["children", l]) : typeof l == "number" && i.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && ao(i.textContent, l, t), r = ["children", "" + l]) : xr.hasOwnProperty(s) && l != null && s === "onScroll" && re("scroll", i)
                        }
                    switch (n) {
                        case "input":
                            eo(i), Uc(i, o, !0);
                            break;
                        case "textarea":
                            eo(i), Wc(i);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (i.onclick = Vo)
                    }
                    i = r, e.updateQueue = i, i !== null && (e.flags |= 4)
                } else {
                    s = r.nodeType === 9 ? r : r.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = sh(n)), t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = s.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof i.is == "string" ? t = s.createElement(n, {
                        is: i.is
                    }) : (t = s.createElement(n), n === "select" && (s = t, i.multiple ? s.multiple = !0 : i.size && (s.size = i.size))) : t = s.createElementNS(t, n), t[At] = e, t[Tr] = i, Mp(t, e, !1, !1), e.stateNode = t;
                    e: {
                        switch (s = va(n, i), n) {
                            case "dialog":
                                re("cancel", t), re("close", t), r = i;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                re("load", t), r = i;
                                break;
                            case "video":
                            case "audio":
                                for (r = 0; r < rr.length; r++) re(rr[r], t);
                                r = i;
                                break;
                            case "source":
                                re("error", t), r = i;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                re("error", t), re("load", t), r = i;
                                break;
                            case "details":
                                re("toggle", t), r = i;
                                break;
                            case "input":
                                Fc(t, i), r = da(t, i), re("invalid", t);
                                break;
                            case "option":
                                r = i;
                                break;
                            case "select":
                                t._wrapperState = {
                                    wasMultiple: !!i.multiple
                                }, r = ce({}, i, {
                                    value: void 0
                                }), re("invalid", t);
                                break;
                            case "textarea":
                                Bc(t, i), r = pa(t, i), re("invalid", t);
                                break;
                            default:
                                r = i
                        }
                        ga(n, r),
                        l = r;
                        for (o in l)
                            if (l.hasOwnProperty(o)) {
                                var a = l[o];
                                o === "style" ? uh(t, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && lh(t, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && kr(t, a) : typeof a == "number" && kr(t, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (xr.hasOwnProperty(o) ? a != null && o === "onScroll" && re("scroll", t) : a != null && xu(t, o, a, s))
                            }
                        switch (n) {
                            case "input":
                                eo(t), Uc(t, i, !1);
                                break;
                            case "textarea":
                                eo(t), Wc(t);
                                break;
                            case "option":
                                i.value != null && t.setAttribute("value", "" + _n(i.value));
                                break;
                            case "select":
                                t.multiple = !!i.multiple, o = i.value, o != null ? yi(t, !!i.multiple, o, !1) : i.defaultValue != null && yi(t, !!i.multiple, i.defaultValue, !0);
                                break;
                            default:
                                typeof r.onClick == "function" && (t.onclick = Vo)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                i = !!i.autoFocus;
                                break e;
                            case "img":
                                i = !0;
                                break e;
                            default:
                                i = !1
                        }
                    }
                    i && (e.flags |= 4)
                }
                e.ref !== null && (e.flags |= 512, e.flags |= 2097152)
            }
            return De(e), null;
        case 6:
            if (t && e.stateNode != null) Lp(t, e, t.memoizedProps, i);
            else {
                if (typeof i != "string" && e.stateNode === null) throw Error(E(166));
                if (n = In(Rr.current), In(Ut.current), uo(e)) {
                    if (i = e.stateNode, n = e.memoizedProps, i[At] = e, (o = i.nodeValue !== n) && (t = st, t !== null)) switch (t.tag) {
                        case 3:
                            ao(i.nodeValue, n, (t.mode & 1) !== 0);
                            break;
                        case 5:
                            t.memoizedProps.suppressHydrationWarning !== !0 && ao(i.nodeValue, n, (t.mode & 1) !== 0)
                    }
                    o && (e.flags |= 4)
                } else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[At] = e, e.stateNode = i
            }
            return De(e), null;
        case 13:
            if (oe(ae), i = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (se && ot !== null && e.mode & 1 && !(e.flags & 128)) Kh(), Ei(), e.flags |= 98560, o = !1;
                else if (o = uo(e), i !== null && i.dehydrated !== null) {
                    if (t === null) {
                        if (!o) throw Error(E(318));
                        if (o = e.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(E(317));
                        o[At] = e
                    } else Ei(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
                    De(e), o = !1
                } else Et !== null && (qa(Et), Et = null), o = !0;
                if (!o) return e.flags & 65536 ? e : null
            }
            return e.flags & 128 ? (e.lanes = n, e) : (i = i !== null, i !== (t !== null && t.memoizedState !== null) && i && (e.child.flags |= 8192, e.mode & 1 && (t === null || ae.current & 1 ? xe === 0 && (xe = 3) : nc())), e.updateQueue !== null && (e.flags |= 4), De(e), null);
        case 4:
            return zi(), Wa(t, e), t === null && zr(e.stateNode.containerInfo), De(e), null;
        case 10:
            return Nu(e.type._context), De(e), null;
        case 17:
            return et(e.type) && Ho(), De(e), null;
        case 19:
            if (oe(ae), o = e.memoizedState, o === null) return De(e), null;
            if (i = (e.flags & 128) !== 0, s = o.rendering, s === null)
                if (i) Ji(o, !1);
                else {
                    if (xe !== 0 || t !== null && t.flags & 128)
                        for (t = e.child; t !== null;) {
                            if (s = Jo(t), s !== null) {
                                for (e.flags |= 128, Ji(o, !1), i = s.updateQueue, i !== null && (e.updateQueue = i, e.flags |= 4), e.subtreeFlags = 0, i = n, n = e.child; n !== null;) o = n, t = i, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = t, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, t = s.dependencies, o.dependencies = t === null ? null : {
                                    lanes: t.lanes,
                                    firstContext: t.firstContext
                                }), n = n.sibling;
                                return ie(ae, ae.current & 1 | 2), e.child
                            }
                            t = t.sibling
                        }
                    o.tail !== null && pe() > Ti && (e.flags |= 128, i = !0, Ji(o, !1), e.lanes = 4194304)
                }
            else {
                if (!i)
                    if (t = Jo(s), t !== null) {
                        if (e.flags |= 128, i = !0, n = t.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), Ji(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !se) return De(e), null
                    } else 2 * pe() - o.renderingStartTime > Ti && n !== 1073741824 && (e.flags |= 128, i = !0, Ji(o, !1), e.lanes = 4194304);
                o.isBackwards ? (s.sibling = e.child, e.child = s) : (n = o.last, n !== null ? n.sibling = s : e.child = s, o.last = s)
            }
            return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = pe(), e.sibling = null, n = ae.current, ie(ae, i ? n & 1 | 2 : n & 1), e) : (De(e), null);
        case 22:
        case 23:
            return tc(), i = e.memoizedState !== null, t !== null && t.memoizedState !== null !== i && (e.flags |= 8192), i && e.mode & 1 ? rt & 1073741824 && (De(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : De(e), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(E(156, e.tag))
}

function uy(t, e) {
    switch (Ou(e), e.tag) {
        case 1:
            return et(e.type) && Ho(), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 3:
            return zi(), oe(Ze), oe(Be), Vu(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
        case 5:
            return Wu(e), null;
        case 13:
            if (oe(ae), t = e.memoizedState, t !== null && t.dehydrated !== null) {
                if (e.alternate === null) throw Error(E(340));
                Ei()
            }
            return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 19:
            return oe(ae), null;
        case 4:
            return zi(), null;
        case 10:
            return Nu(e.type._context), null;
        case 22:
        case 23:
            return tc(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var ho = !1,
    Ne = !1,
    cy = typeof WeakSet == "function" ? WeakSet : Set,
    O = null;

function hi(t, e) {
    var n = t.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (i) {
            fe(t, e, i)
        } else n.current = null
}

function Va(t, e, n) {
    try {
        n()
    } catch (i) {
        fe(t, e, i)
    }
}
var Rd = !1;

function dy(t, e) {
    if (Pa = Uo, t = Dh(), Lu(t)) {
        if ("selectionStart" in t) var n = {
            start: t.selectionStart,
            end: t.selectionEnd
        };
        else e: {
            n = (n = t.ownerDocument) && n.defaultView || window;
            var i = n.getSelection && n.getSelection();
            if (i && i.rangeCount !== 0) {
                n = i.anchorNode;
                var r = i.anchorOffset,
                    o = i.focusNode;
                i = i.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0,
                    l = -1,
                    a = -1,
                    u = 0,
                    c = 0,
                    f = t,
                    d = null;
                t: for (;;) {
                    for (var v; f !== n || r !== 0 && f.nodeType !== 3 || (l = s + r), f !== o || i !== 0 && f.nodeType !== 3 || (a = s + i), f.nodeType === 3 && (s += f.nodeValue.length), (v = f.firstChild) !== null;) d = f, f = v;
                    for (;;) {
                        if (f === t) break t;
                        if (d === n && ++u === r && (l = s), d === o && ++c === i && (a = s), (v = f.nextSibling) !== null) break;
                        f = d, d = f.parentNode
                    }
                    f = v
                }
                n = l === -1 || a === -1 ? null : {
                    start: l,
                    end: a
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (za = {
            focusedElem: t,
            selectionRange: n
        }, Uo = !1, O = e; O !== null;)
        if (e = O, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, O = t;
        else
            for (; O !== null;) {
                e = O;
                try {
                    var y = e.alternate;
                    if (e.flags & 1024) switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var w = y.memoizedProps,
                                    _ = y.memoizedState,
                                    p = e.stateNode,
                                    h = p.getSnapshotBeforeUpdate(e.elementType === e.type ? w : bt(e.type, w), _);
                                p.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var g = e.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(E(163))
                    }
                } catch (k) {
                    fe(e, e.return, k)
                }
                if (t = e.sibling, t !== null) {
                    t.return = e.return, O = t;
                    break
                }
                O = e.return
            }
    return y = Rd, Rd = !1, y
}

function fr(t, e, n) {
    var i = e.updateQueue;
    if (i = i !== null ? i.lastEffect : null, i !== null) {
        var r = i = i.next;
        do {
            if ((r.tag & t) === t) {
                var o = r.destroy;
                r.destroy = void 0, o !== void 0 && Va(e, n, o)
            }
            r = r.next
        } while (r !== i)
    }
}

function zs(t, e) {
    if (e = e.updateQueue, e = e !== null ? e.lastEffect : null, e !== null) {
        var n = e = e.next;
        do {
            if ((n.tag & t) === t) {
                var i = n.create;
                n.destroy = i()
            }
            n = n.next
        } while (n !== e)
    }
}

function Ha(t) {
    var e = t.ref;
    if (e !== null) {
        var n = t.stateNode;
        switch (t.tag) {
            case 5:
                t = n;
                break;
            default:
                t = n
        }
        typeof e == "function" ? e(t) : e.current = t
    }
}

function jp(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, jp(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && (delete e[At], delete e[Tr], delete e[Ma], delete e[Gv], delete e[Yv])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
}

function Op(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4
}

function Ld(t) {
    e: for (;;) {
        for (; t.sibling === null;) {
            if (t.return === null || Op(t.return)) return null;
            t = t.return
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
            if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
            t.child.return = t, t = t.child
        }
        if (!(t.flags & 2)) return t.stateNode
    }
}

function Qa(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6) t = t.stateNode, e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode, e.insertBefore(t, n)) : (e = n, e.appendChild(t)), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Vo));
    else if (i !== 4 && (t = t.child, t !== null))
        for (Qa(t, e, n), t = t.sibling; t !== null;) Qa(t, e, n), t = t.sibling
}

function Ga(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (i !== 4 && (t = t.child, t !== null))
        for (Ga(t, e, n), t = t.sibling; t !== null;) Ga(t, e, n), t = t.sibling
}
var Te = null,
    Ct = !1;

function on(t, e, n) {
    for (n = n.child; n !== null;) Ip(t, e, n), n = n.sibling
}

function Ip(t, e, n) {
    if (Ft && typeof Ft.onCommitFiberUnmount == "function") try {
        Ft.onCommitFiberUnmount(xs, n)
    } catch {}
    switch (n.tag) {
        case 5:
            Ne || hi(n, e);
        case 6:
            var i = Te,
                r = Ct;
            Te = null, on(t, e, n), Te = i, Ct = r, Te !== null && (Ct ? (t = Te, n = n.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : Te.removeChild(n.stateNode));
            break;
        case 18:
            Te !== null && (Ct ? (t = Te, n = n.stateNode, t.nodeType === 8 ? zl(t.parentNode, n) : t.nodeType === 1 && zl(t, n), Cr(t)) : zl(Te, n.stateNode));
            break;
        case 4:
            i = Te, r = Ct, Te = n.stateNode.containerInfo, Ct = !0, on(t, e, n), Te = i, Ct = r;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ne && (i = n.updateQueue, i !== null && (i = i.lastEffect, i !== null))) {
                r = i = i.next;
                do {
                    var o = r,
                        s = o.destroy;
                    o = o.tag, s !== void 0 && (o & 2 || o & 4) && Va(n, e, s), r = r.next
                } while (r !== i)
            }
            on(t, e, n);
            break;
        case 1:
            if (!Ne && (hi(n, e), i = n.stateNode, typeof i.componentWillUnmount == "function")) try {
                i.props = n.memoizedProps, i.state = n.memoizedState, i.componentWillUnmount()
            } catch (l) {
                fe(n, e, l)
            }
            on(t, e, n);
            break;
        case 21:
            on(t, e, n);
            break;
        case 22:
            n.mode & 1 ? (Ne = (i = Ne) || n.memoizedState !== null, on(t, e, n), Ne = i) : on(t, e, n);
            break;
        default:
            on(t, e, n)
    }
}

function jd(t) {
    var e = t.updateQueue;
    if (e !== null) {
        t.updateQueue = null;
        var n = t.stateNode;
        n === null && (n = t.stateNode = new cy), e.forEach(function(i) {
            var r = xy.bind(null, t, i);
            n.has(i) || (n.add(i), i.then(r, r))
        })
    }
}

function _t(t, e) {
    var n = e.deletions;
    if (n !== null)
        for (var i = 0; i < n.length; i++) {
            var r = n[i];
            try {
                var o = t,
                    s = e,
                    l = s;
                e: for (; l !== null;) {
                    switch (l.tag) {
                        case 5:
                            Te = l.stateNode, Ct = !1;
                            break e;
                        case 3:
                            Te = l.stateNode.containerInfo, Ct = !0;
                            break e;
                        case 4:
                            Te = l.stateNode.containerInfo, Ct = !0;
                            break e
                    }
                    l = l.return
                }
                if (Te === null) throw Error(E(160));
                Ip(o, s, r), Te = null, Ct = !1;
                var a = r.alternate;
                a !== null && (a.return = null), r.return = null
            } catch (u) {
                fe(r, e, u)
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null;) Dp(e, t), e = e.sibling
}

function Dp(t, e) {
    var n = t.alternate,
        i = t.flags;
    switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (_t(e, t), It(t), i & 4) {
                try {
                    fr(3, t, t.return), zs(3, t)
                } catch (w) {
                    fe(t, t.return, w)
                }
                try {
                    fr(5, t, t.return)
                } catch (w) {
                    fe(t, t.return, w)
                }
            }
            break;
        case 1:
            _t(e, t), It(t), i & 512 && n !== null && hi(n, n.return);
            break;
        case 5:
            if (_t(e, t), It(t), i & 512 && n !== null && hi(n, n.return), t.flags & 32) {
                var r = t.stateNode;
                try {
                    kr(r, "")
                } catch (w) {
                    fe(t, t.return, w)
                }
            }
            if (i & 4 && (r = t.stateNode, r != null)) {
                var o = t.memoizedProps,
                    s = n !== null ? n.memoizedProps : o,
                    l = t.type,
                    a = t.updateQueue;
                if (t.updateQueue = null, a !== null) try {
                    l === "input" && o.type === "radio" && o.name != null && rh(r, o), va(l, s);
                    var u = va(l, o);
                    for (s = 0; s < a.length; s += 2) {
                        var c = a[s],
                            f = a[s + 1];
                        c === "style" ? uh(r, f) : c === "dangerouslySetInnerHTML" ? lh(r, f) : c === "children" ? kr(r, f) : xu(r, c, f, u)
                    }
                    switch (l) {
                        case "input":
                            fa(r, o);
                            break;
                        case "textarea":
                            oh(r, o);
                            break;
                        case "select":
                            var d = r._wrapperState.wasMultiple;
                            r._wrapperState.wasMultiple = !!o.multiple;
                            var v = o.value;
                            v != null ? yi(r, !!o.multiple, v, !1) : d !== !!o.multiple && (o.defaultValue != null ? yi(r, !!o.multiple, o.defaultValue, !0) : yi(r, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    r[Tr] = o
                } catch (w) {
                    fe(t, t.return, w)
                }
            }
            break;
        case 6:
            if (_t(e, t), It(t), i & 4) {
                if (t.stateNode === null) throw Error(E(162));
                r = t.stateNode, o = t.memoizedProps;
                try {
                    r.nodeValue = o
                } catch (w) {
                    fe(t, t.return, w)
                }
            }
            break;
        case 3:
            if (_t(e, t), It(t), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Cr(e.containerInfo)
            } catch (w) {
                fe(t, t.return, w)
            }
            break;
        case 4:
            _t(e, t), It(t);
            break;
        case 13:
            _t(e, t), It(t), r = t.child, r.flags & 8192 && (o = r.memoizedState !== null, r.stateNode.isHidden = o, !o || r.alternate !== null && r.alternate.memoizedState !== null || (Zu = pe())), i & 4 && jd(t);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, t.mode & 1 ? (Ne = (u = Ne) || c, _t(e, t), Ne = u) : _t(e, t), It(t), i & 8192) {
                if (u = t.memoizedState !== null, (t.stateNode.isHidden = u) && !c && t.mode & 1)
                    for (O = t, c = t.child; c !== null;) {
                        for (f = O = c; O !== null;) {
                            switch (d = O, v = d.child, d.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    fr(4, d, d.return);
                                    break;
                                case 1:
                                    hi(d, d.return);
                                    var y = d.stateNode;
                                    if (typeof y.componentWillUnmount == "function") {
                                        i = d, n = d.return;
                                        try {
                                            e = i, y.props = e.memoizedProps, y.state = e.memoizedState, y.componentWillUnmount()
                                        } catch (w) {
                                            fe(i, n, w)
                                        }
                                    }
                                    break;
                                case 5:
                                    hi(d, d.return);
                                    break;
                                case 22:
                                    if (d.memoizedState !== null) {
                                        Id(f);
                                        continue
                                    }
                            }
                            v !== null ? (v.return = d, O = v) : Id(f)
                        }
                        c = c.sibling
                    }
                e: for (c = null, f = t;;) {
                    if (f.tag === 5) {
                        if (c === null) {
                            c = f;
                            try {
                                r = f.stateNode, u ? (o = r.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = f.stateNode, a = f.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = ah("display", s))
                            } catch (w) {
                                fe(t, t.return, w)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (c === null) try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (w) {
                            fe(t, t.return, w)
                        }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === t) && f.child !== null) {
                        f.child.return = f, f = f.child;
                        continue
                    }
                    if (f === t) break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === t) break e;
                        c === f && (c = null), f = f.return
                    }
                    c === f && (c = null), f.sibling.return = f.return, f = f.sibling
                }
            }
            break;
        case 19:
            _t(e, t), It(t), i & 4 && jd(t);
            break;
        case 21:
            break;
        default:
            _t(e, t), It(t)
    }
}

function It(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            e: {
                for (var n = t.return; n !== null;) {
                    if (Op(n)) {
                        var i = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(E(160))
            }
            switch (i.tag) {
                case 5:
                    var r = i.stateNode;
                    i.flags & 32 && (kr(r, ""), i.flags &= -33);
                    var o = Ld(t);
                    Ga(t, o, r);
                    break;
                case 3:
                case 4:
                    var s = i.stateNode.containerInfo,
                        l = Ld(t);
                    Qa(t, l, s);
                    break;
                default:
                    throw Error(E(161))
            }
        }
        catch (a) {
            fe(t, t.return, a)
        }
        t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
}

function fy(t, e, n) {
    O = t, Ap(t)
}

function Ap(t, e, n) {
    for (var i = (t.mode & 1) !== 0; O !== null;) {
        var r = O,
            o = r.child;
        if (r.tag === 22 && i) {
            var s = r.memoizedState !== null || ho;
            if (!s) {
                var l = r.alternate,
                    a = l !== null && l.memoizedState !== null || Ne;
                l = ho;
                var u = Ne;
                if (ho = s, (Ne = a) && !u)
                    for (O = r; O !== null;) s = O, a = s.child, s.tag === 22 && s.memoizedState !== null ? Dd(r) : a !== null ? (a.return = s, O = a) : Dd(r);
                for (; o !== null;) O = o, Ap(o), o = o.sibling;
                O = r, ho = l, Ne = u
            }
            Od(t)
        } else r.subtreeFlags & 8772 && o !== null ? (o.return = r, O = o) : Od(t)
    }
}

function Od(t) {
    for (; O !== null;) {
        var e = O;
        if (e.flags & 8772) {
            var n = e.alternate;
            try {
                if (e.flags & 8772) switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ne || zs(5, e);
                        break;
                    case 1:
                        var i = e.stateNode;
                        if (e.flags & 4 && !Ne)
                            if (n === null) i.componentDidMount();
                            else {
                                var r = e.elementType === e.type ? n.memoizedProps : bt(e.type, n.memoizedProps);
                                i.componentDidUpdate(r, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = e.updateQueue;
                        o !== null && yd(e, o, i);
                        break;
                    case 3:
                        var s = e.updateQueue;
                        if (s !== null) {
                            if (n = null, e.child !== null) switch (e.child.tag) {
                                case 5:
                                    n = e.child.stateNode;
                                    break;
                                case 1:
                                    n = e.child.stateNode
                            }
                            yd(e, s, n)
                        }
                        break;
                    case 5:
                        var l = e.stateNode;
                        if (n === null && e.flags & 4) {
                            n = l;
                            var a = e.memoizedProps;
                            switch (e.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    a.autoFocus && n.focus();
                                    break;
                                case "img":
                                    a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (e.memoizedState === null) {
                            var u = e.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && Cr(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(E(163))
                }
                Ne || e.flags & 512 && Ha(e)
            } catch (d) {
                fe(e, e.return, d)
            }
        }
        if (e === t) {
            O = null;
            break
        }
        if (n = e.sibling, n !== null) {
            n.return = e.return, O = n;
            break
        }
        O = e.return
    }
}

function Id(t) {
    for (; O !== null;) {
        var e = O;
        if (e === t) {
            O = null;
            break
        }
        var n = e.sibling;
        if (n !== null) {
            n.return = e.return, O = n;
            break
        }
        O = e.return
    }
}

function Dd(t) {
    for (; O !== null;) {
        var e = O;
        try {
            switch (e.tag) {
                case 0:
                case 11:
                case 15:
                    var n = e.return;
                    try {
                        zs(4, e)
                    } catch (a) {
                        fe(e, n, a)
                    }
                    break;
                case 1:
                    var i = e.stateNode;
                    if (typeof i.componentDidMount == "function") {
                        var r = e.return;
                        try {
                            i.componentDidMount()
                        } catch (a) {
                            fe(e, r, a)
                        }
                    }
                    var o = e.return;
                    try {
                        Ha(e)
                    } catch (a) {
                        fe(e, o, a)
                    }
                    break;
                case 5:
                    var s = e.return;
                    try {
                        Ha(e)
                    } catch (a) {
                        fe(e, s, a)
                    }
            }
        } catch (a) {
            fe(e, e.return, a)
        }
        if (e === t) {
            O = null;
            break
        }
        var l = e.sibling;
        if (l !== null) {
            l.return = e.return, O = l;
            break
        }
        O = e.return
    }
}
var hy = Math.ceil,
    ts = nn.ReactCurrentDispatcher,
    qu = nn.ReactCurrentOwner,
    yt = nn.ReactCurrentBatchConfig,
    Q = 0,
    be = null,
    ge = null,
    Re = 0,
    rt = 0,
    pi = zn(0),
    xe = 0,
    Ir = null,
    Vn = 0,
    $s = 0,
    Ju = 0,
    hr = null,
    qe = null,
    Zu = 0,
    Ti = 1 / 0,
    Gt = null,
    ns = !1,
    Ya = null,
    vn = null,
    po = !1,
    dn = null,
    is = 0,
    pr = 0,
    Xa = null,
    To = -1,
    Mo = 0;

function He() {
    return Q & 6 ? pe() : To !== -1 ? To : To = pe()
}

function yn(t) {
    return t.mode & 1 ? Q & 2 && Re !== 0 ? Re & -Re : Kv.transition !== null ? (Mo === 0 && (Mo = kh()), Mo) : (t = Z, t !== 0 || (t = window.event, t = t === void 0 ? 16 : zh(t.type)), t) : 1
}

function Tt(t, e, n, i) {
    if (50 < pr) throw pr = 0, Xa = null, Error(E(185));
    Vr(t, n, i), (!(Q & 2) || t !== be) && (t === be && (!(Q & 2) && ($s |= n), xe === 4 && un(t, Re)), tt(t, i), n === 1 && Q === 0 && !(e.mode & 1) && (Ti = pe() + 500, Cs && $n()))
}

function tt(t, e) {
    var n = t.callbackNode;
    Kg(t, e);
    var i = Fo(t, t === be ? Re : 0);
    if (i === 0) n !== null && Qc(n), t.callbackNode = null, t.callbackPriority = 0;
    else if (e = i & -i, t.callbackPriority !== e) {
        if (n != null && Qc(n), e === 1) t.tag === 0 ? Xv(Ad.bind(null, t)) : Gh(Ad.bind(null, t)), Hv(function() {
            !(Q & 6) && $n()
        }), n = null;
        else {
            switch (Sh(i)) {
                case 1:
                    n = Cu;
                    break;
                case 4:
                    n = wh;
                    break;
                case 16:
                    n = No;
                    break;
                case 536870912:
                    n = xh;
                    break;
                default:
                    n = No
            }
            n = Qp(n, Np.bind(null, t))
        }
        t.callbackPriority = e, t.callbackNode = n
    }
}

function Np(t, e) {
    if (To = -1, Mo = 0, Q & 6) throw Error(E(327));
    var n = t.callbackNode;
    if (_i() && t.callbackNode !== n) return null;
    var i = Fo(t, t === be ? Re : 0);
    if (i === 0) return null;
    if (i & 30 || i & t.expiredLanes || e) e = rs(t, i);
    else {
        e = i;
        var r = Q;
        Q |= 2;
        var o = Up();
        (be !== t || Re !== e) && (Gt = null, Ti = pe() + 500, An(t, e));
        do try {
            gy();
            break
        } catch (l) {
            Fp(t, l)
        }
        while (1);
        Au(), ts.current = o, Q = r, ge !== null ? e = 0 : (be = null, Re = 0, e = xe)
    }
    if (e !== 0) {
        if (e === 2 && (r = Sa(t), r !== 0 && (i = r, e = Ka(t, r))), e === 1) throw n = Ir, An(t, 0), un(t, i), tt(t, pe()), n;
        if (e === 6) un(t, i);
        else {
            if (r = t.current.alternate, !(i & 30) && !py(r) && (e = rs(t, i), e === 2 && (o = Sa(t), o !== 0 && (i = o, e = Ka(t, o))), e === 1)) throw n = Ir, An(t, 0), un(t, i), tt(t, pe()), n;
            switch (t.finishedWork = r, t.finishedLanes = i, e) {
                case 0:
                case 1:
                    throw Error(E(345));
                case 2:
                    Mn(t, qe, Gt);
                    break;
                case 3:
                    if (un(t, i), (i & 130023424) === i && (e = Zu + 500 - pe(), 10 < e)) {
                        if (Fo(t, 0) !== 0) break;
                        if (r = t.suspendedLanes, (r & i) !== i) {
                            He(), t.pingedLanes |= t.suspendedLanes & r;
                            break
                        }
                        t.timeoutHandle = Ta(Mn.bind(null, t, qe, Gt), e);
                        break
                    }
                    Mn(t, qe, Gt);
                    break;
                case 4:
                    if (un(t, i), (i & 4194240) === i) break;
                    for (e = t.eventTimes, r = -1; 0 < i;) {
                        var s = 31 - $t(i);
                        o = 1 << s, s = e[s], s > r && (r = s), i &= ~o
                    }
                    if (i = r, i = pe() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * hy(i / 1960)) - i, 10 < i) {
                        t.timeoutHandle = Ta(Mn.bind(null, t, qe, Gt), i);
                        break
                    }
                    Mn(t, qe, Gt);
                    break;
                case 5:
                    Mn(t, qe, Gt);
                    break;
                default:
                    throw Error(E(329))
            }
        }
    }
    return tt(t, pe()), t.callbackNode === n ? Np.bind(null, t) : null
}

function Ka(t, e) {
    var n = hr;
    return t.current.memoizedState.isDehydrated && (An(t, e).flags |= 256), t = rs(t, e), t !== 2 && (e = qe, qe = n, e !== null && qa(e)), t
}

function qa(t) {
    qe === null ? qe = t : qe.push.apply(qe, t)
}

function py(t) {
    for (var e = t;;) {
        if (e.flags & 16384) {
            var n = e.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var i = 0; i < n.length; i++) {
                    var r = n[i],
                        o = r.getSnapshot;
                    r = r.value;
                    try {
                        if (!Ot(o(), r)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = e.child, e.subtreeFlags & 16384 && n !== null) n.return = e, e = n;
        else {
            if (e === t) break;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) return !0;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
    }
    return !0
}

function un(t, e) {
    for (e &= ~Ju, e &= ~$s, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e;) {
        var n = 31 - $t(e),
            i = 1 << n;
        t[n] = -1, e &= ~i
    }
}

function Ad(t) {
    if (Q & 6) throw Error(E(327));
    _i();
    var e = Fo(t, 0);
    if (!(e & 1)) return tt(t, pe()), null;
    var n = rs(t, e);
    if (t.tag !== 0 && n === 2) {
        var i = Sa(t);
        i !== 0 && (e = i, n = Ka(t, i))
    }
    if (n === 1) throw n = Ir, An(t, 0), un(t, e), tt(t, pe()), n;
    if (n === 6) throw Error(E(345));
    return t.finishedWork = t.current.alternate, t.finishedLanes = e, Mn(t, qe, Gt), tt(t, pe()), null
}

function ec(t, e) {
    var n = Q;
    Q |= 1;
    try {
        return t(e)
    } finally {
        Q = n, Q === 0 && (Ti = pe() + 500, Cs && $n())
    }
}

function Hn(t) {
    dn !== null && dn.tag === 0 && !(Q & 6) && _i();
    var e = Q;
    Q |= 1;
    var n = yt.transition,
        i = Z;
    try {
        if (yt.transition = null, Z = 1, t) return t()
    } finally {
        Z = i, yt.transition = n, Q = e, !(Q & 6) && $n()
    }
}

function tc() {
    rt = pi.current, oe(pi)
}

function An(t, e) {
    t.finishedWork = null, t.finishedLanes = 0;
    var n = t.timeoutHandle;
    if (n !== -1 && (t.timeoutHandle = -1, Vv(n)), ge !== null)
        for (n = ge.return; n !== null;) {
            var i = n;
            switch (Ou(i), i.tag) {
                case 1:
                    i = i.type.childContextTypes, i != null && Ho();
                    break;
                case 3:
                    zi(), oe(Ze), oe(Be), Vu();
                    break;
                case 5:
                    Wu(i);
                    break;
                case 4:
                    zi();
                    break;
                case 13:
                    oe(ae);
                    break;
                case 19:
                    oe(ae);
                    break;
                case 10:
                    Nu(i.type._context);
                    break;
                case 22:
                case 23:
                    tc()
            }
            n = n.return
        }
    if (be = t, ge = t = wn(t.current, null), Re = rt = e, xe = 0, Ir = null, Ju = $s = Vn = 0, qe = hr = null, On !== null) {
        for (e = 0; e < On.length; e++)
            if (n = On[e], i = n.interleaved, i !== null) {
                n.interleaved = null;
                var r = i.next,
                    o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = r, i.next = s
                }
                n.pending = i
            }
        On = null
    }
    return t
}

function Fp(t, e) {
    do {
        var n = ge;
        try {
            if (Au(), Po.current = es, Zo) {
                for (var i = ue.memoizedState; i !== null;) {
                    var r = i.queue;
                    r !== null && (r.pending = null), i = i.next
                }
                Zo = !1
            }
            if (Wn = 0, _e = ye = ue = null, dr = !1, Lr = 0, qu.current = null, n === null || n.return === null) {
                xe = 1, Ir = e, ge = null;
                break
            }
            e: {
                var o = t,
                    s = n.return,
                    l = n,
                    a = e;
                if (e = Re, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a,
                        c = l,
                        f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var d = c.alternate;
                        d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var v = Cd(s);
                    if (v !== null) {
                        v.flags &= -257, Ed(v, s, l, o, e), v.mode & 1 && bd(o, u, e), e = v, a = u;
                        var y = e.updateQueue;
                        if (y === null) {
                            var w = new Set;
                            w.add(a), e.updateQueue = w
                        } else y.add(a);
                        break e
                    } else {
                        if (!(e & 1)) {
                            bd(o, u, e), nc();
                            break e
                        }
                        a = Error(E(426))
                    }
                } else if (se && l.mode & 1) {
                    var _ = Cd(s);
                    if (_ !== null) {
                        !(_.flags & 65536) && (_.flags |= 256), Ed(_, s, l, o, e), Iu($i(a, l));
                        break e
                    }
                }
                o = a = $i(a, l),
                xe !== 4 && (xe = 2),
                hr === null ? hr = [o] : hr.push(o),
                o = s;do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, e &= -e, o.lanes |= e;
                            var p = _p(o, a, e);
                            vd(o, p);
                            break e;
                        case 1:
                            l = a;
                            var h = o.type,
                                g = o.stateNode;
                            if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (vn === null || !vn.has(g)))) {
                                o.flags |= 65536, e &= -e, o.lanes |= e;
                                var k = bp(o, l, e);
                                vd(o, k);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            Wp(n)
        } catch (C) {
            e = C, ge === n && n !== null && (ge = n = n.return);
            continue
        }
        break
    } while (1)
}

function Up() {
    var t = ts.current;
    return ts.current = es, t === null ? es : t
}

function nc() {
    (xe === 0 || xe === 3 || xe === 2) && (xe = 4), be === null || !(Vn & 268435455) && !($s & 268435455) || un(be, Re)
}

function rs(t, e) {
    var n = Q;
    Q |= 2;
    var i = Up();
    (be !== t || Re !== e) && (Gt = null, An(t, e));
    do try {
        my();
        break
    } catch (r) {
        Fp(t, r)
    }
    while (1);
    if (Au(), Q = n, ts.current = i, ge !== null) throw Error(E(261));
    return be = null, Re = 0, xe
}

function my() {
    for (; ge !== null;) Bp(ge)
}

function gy() {
    for (; ge !== null && !Ug();) Bp(ge)
}

function Bp(t) {
    var e = Hp(t.alternate, t, rt);
    t.memoizedProps = t.pendingProps, e === null ? Wp(t) : ge = e, qu.current = null
}

function Wp(t) {
    var e = t;
    do {
        var n = e.alternate;
        if (t = e.return, e.flags & 32768) {
            if (n = uy(n, e), n !== null) {
                n.flags &= 32767, ge = n;
                return
            }
            if (t !== null) t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
            else {
                xe = 6, ge = null;
                return
            }
        } else if (n = ay(n, e, rt), n !== null) {
            ge = n;
            return
        }
        if (e = e.sibling, e !== null) {
            ge = e;
            return
        }
        ge = e = t
    } while (e !== null);
    xe === 0 && (xe = 5)
}

function Mn(t, e, n) {
    var i = Z,
        r = yt.transition;
    try {
        yt.transition = null, Z = 1, vy(t, e, n, i)
    } finally {
        yt.transition = r, Z = i
    }
    return null
}

function vy(t, e, n, i) {
    do _i(); while (dn !== null);
    if (Q & 6) throw Error(E(327));
    n = t.finishedWork;
    var r = t.finishedLanes;
    if (n === null) return null;
    if (t.finishedWork = null, t.finishedLanes = 0, n === t.current) throw Error(E(177));
    t.callbackNode = null, t.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (qg(t, o), t === be && (ge = be = null, Re = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || po || (po = !0, Qp(No, function() {
            return _i(), null
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = yt.transition, yt.transition = null;
        var s = Z;
        Z = 1;
        var l = Q;
        Q |= 4, qu.current = null, dy(t, n), Dp(n, t), Dv(za), Uo = !!Pa, za = Pa = null, t.current = n, fy(n), Bg(), Q = l, Z = s, yt.transition = o
    } else t.current = n;
    if (po && (po = !1, dn = t, is = r), o = t.pendingLanes, o === 0 && (vn = null), Hg(n.stateNode), tt(t, pe()), e !== null)
        for (i = t.onRecoverableError, n = 0; n < e.length; n++) r = e[n], i(r.value, {
            componentStack: r.stack,
            digest: r.digest
        });
    if (ns) throw ns = !1, t = Ya, Ya = null, t;
    return is & 1 && t.tag !== 0 && _i(), o = t.pendingLanes, o & 1 ? t === Xa ? pr++ : (pr = 0, Xa = t) : pr = 0, $n(), null
}

function _i() {
    if (dn !== null) {
        var t = Sh(is),
            e = yt.transition,
            n = Z;
        try {
            if (yt.transition = null, Z = 16 > t ? 16 : t, dn === null) var i = !1;
            else {
                if (t = dn, dn = null, is = 0, Q & 6) throw Error(E(331));
                var r = Q;
                for (Q |= 4, O = t.current; O !== null;) {
                    var o = O,
                        s = o.child;
                    if (O.flags & 16) {
                        var l = o.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (O = u; O !== null;) {
                                    var c = O;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            fr(8, c, o)
                                    }
                                    var f = c.child;
                                    if (f !== null) f.return = c, O = f;
                                    else
                                        for (; O !== null;) {
                                            c = O;
                                            var d = c.sibling,
                                                v = c.return;
                                            if (jp(c), c === u) {
                                                O = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = v, O = d;
                                                break
                                            }
                                            O = v
                                        }
                                }
                            }
                            var y = o.alternate;
                            if (y !== null) {
                                var w = y.child;
                                if (w !== null) {
                                    y.child = null;
                                    do {
                                        var _ = w.sibling;
                                        w.sibling = null, w = _
                                    } while (w !== null)
                                }
                            }
                            O = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null) s.return = o, O = s;
                    else e: for (; O !== null;) {
                        if (o = O, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                fr(9, o, o.return)
                        }
                        var p = o.sibling;
                        if (p !== null) {
                            p.return = o.return, O = p;
                            break e
                        }
                        O = o.return
                    }
                }
                var h = t.current;
                for (O = h; O !== null;) {
                    s = O;
                    var g = s.child;
                    if (s.subtreeFlags & 2064 && g !== null) g.return = s, O = g;
                    else e: for (s = h; O !== null;) {
                        if (l = O, l.flags & 2048) try {
                            switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    zs(9, l)
                            }
                        } catch (C) {
                            fe(l, l.return, C)
                        }
                        if (l === s) {
                            O = null;
                            break e
                        }
                        var k = l.sibling;
                        if (k !== null) {
                            k.return = l.return, O = k;
                            break e
                        }
                        O = l.return
                    }
                }
                if (Q = r, $n(), Ft && typeof Ft.onPostCommitFiberRoot == "function") try {
                    Ft.onPostCommitFiberRoot(xs, t)
                } catch {}
                i = !0
            }
            return i
        } finally {
            Z = n, yt.transition = e
        }
    }
    return !1
}

function Nd(t, e, n) {
    e = $i(n, e), e = _p(t, e, 1), t = gn(t, e, 1), e = He(), t !== null && (Vr(t, 1, e), tt(t, e))
}

function fe(t, e, n) {
    if (t.tag === 3) Nd(t, t, n);
    else
        for (; e !== null;) {
            if (e.tag === 3) {
                Nd(e, t, n);
                break
            } else if (e.tag === 1) {
                var i = e.stateNode;
                if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (vn === null || !vn.has(i))) {
                    t = $i(n, t), t = bp(e, t, 1), e = gn(e, t, 1), t = He(), e !== null && (Vr(e, 1, t), tt(e, t));
                    break
                }
            }
            e = e.return
        }
}

function yy(t, e, n) {
    var i = t.pingCache;
    i !== null && i.delete(e), e = He(), t.pingedLanes |= t.suspendedLanes & n, be === t && (Re & n) === n && (xe === 4 || xe === 3 && (Re & 130023424) === Re && 500 > pe() - Zu ? An(t, 0) : Ju |= n), tt(t, e)
}

function Vp(t, e) {
    e === 0 && (t.mode & 1 ? (e = io, io <<= 1, !(io & 130023424) && (io = 4194304)) : e = 1);
    var n = He();
    t = en(t, e), t !== null && (Vr(t, e, n), tt(t, n))
}

function wy(t) {
    var e = t.memoizedState,
        n = 0;
    e !== null && (n = e.retryLane), Vp(t, n)
}

function xy(t, e) {
    var n = 0;
    switch (t.tag) {
        case 13:
            var i = t.stateNode,
                r = t.memoizedState;
            r !== null && (n = r.retryLane);
            break;
        case 19:
            i = t.stateNode;
            break;
        default:
            throw Error(E(314))
    }
    i !== null && i.delete(e), Vp(t, n)
}
var Hp;
Hp = function(t, e, n) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || Ze.current) Je = !0;
        else {
            if (!(t.lanes & n) && !(e.flags & 128)) return Je = !1, ly(t, e, n);
            Je = !!(t.flags & 131072)
        }
    else Je = !1, se && e.flags & 1048576 && Yh(e, Yo, e.index);
    switch (e.lanes = 0, e.tag) {
        case 2:
            var i = e.type;
            $o(t, e), t = e.pendingProps;
            var r = Ci(e, Be.current);
            Si(e, n), r = Qu(null, e, i, t, r, n);
            var o = Gu();
            return e.flags |= 1, typeof r == "object" && r !== null && typeof r.render == "function" && r.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, et(i) ? (o = !0, Qo(e)) : o = !1, e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, Uu(e), r.updater = Es, e.stateNode = r, r._reactInternals = e, Da(e, i, t, n), e = Fa(null, e, i, !0, o, n)) : (e.tag = 0, se && o && ju(e), Ve(null, e, r, n), e = e.child), e;
        case 16:
            i = e.elementType;
            e: {
                switch ($o(t, e), t = e.pendingProps, r = i._init, i = r(i._payload), e.type = i, r = e.tag = Sy(i), t = bt(i, t), r) {
                    case 0:
                        e = Na(null, e, i, t, n);
                        break e;
                    case 1:
                        e = $d(null, e, i, t, n);
                        break e;
                    case 11:
                        e = Pd(null, e, i, t, n);
                        break e;
                    case 14:
                        e = zd(null, e, i, bt(i.type, t), n);
                        break e
                }
                throw Error(E(306, i, ""))
            }
            return e;
        case 0:
            return i = e.type, r = e.pendingProps, r = e.elementType === i ? r : bt(i, r), Na(t, e, i, r, n);
        case 1:
            return i = e.type, r = e.pendingProps, r = e.elementType === i ? r : bt(i, r), $d(t, e, i, r, n);
        case 3:
            e: {
                if (zp(e), t === null) throw Error(E(387));i = e.pendingProps,
                o = e.memoizedState,
                r = o.element,
                Jh(t, e),
                qo(e, i, null, n);
                var s = e.memoizedState;
                if (i = s.element, o.isDehydrated)
                    if (o = {
                            element: i,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions
                        }, e.updateQueue.baseState = o, e.memoizedState = o, e.flags & 256) {
                        r = $i(Error(E(423)), e), e = Td(t, e, i, n, r);
                        break e
                    } else if (i !== r) {
                    r = $i(Error(E(424)), e), e = Td(t, e, i, n, r);
                    break e
                } else
                    for (ot = mn(e.stateNode.containerInfo.firstChild), st = e, se = !0, Et = null, n = np(e, null, i, n), e.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (Ei(), i === r) {
                        e = tn(t, e, n);
                        break e
                    }
                    Ve(t, e, i, n)
                }
                e = e.child
            }
            return e;
        case 5:
            return ip(e), t === null && ja(e), i = e.type, r = e.pendingProps, o = t !== null ? t.memoizedProps : null, s = r.children, $a(i, r) ? s = null : o !== null && $a(i, o) && (e.flags |= 32), Pp(t, e), Ve(t, e, s, n), e.child;
        case 6:
            return t === null && ja(e), null;
        case 13:
            return $p(t, e, n);
        case 4:
            return Bu(e, e.stateNode.containerInfo), i = e.pendingProps, t === null ? e.child = Pi(e, null, i, n) : Ve(t, e, i, n), e.child;
        case 11:
            return i = e.type, r = e.pendingProps, r = e.elementType === i ? r : bt(i, r), Pd(t, e, i, r, n);
        case 7:
            return Ve(t, e, e.pendingProps, n), e.child;
        case 8:
            return Ve(t, e, e.pendingProps.children, n), e.child;
        case 12:
            return Ve(t, e, e.pendingProps.children, n), e.child;
        case 10:
            e: {
                if (i = e.type._context, r = e.pendingProps, o = e.memoizedProps, s = r.value, ie(Xo, i._currentValue), i._currentValue = s, o !== null)
                    if (Ot(o.value, s)) {
                        if (o.children === r.children && !Ze.current) {
                            e = tn(t, e, n);
                            break e
                        }
                    } else
                        for (o = e.child, o !== null && (o.return = e); o !== null;) {
                            var l = o.dependencies;
                            if (l !== null) {
                                s = o.child;
                                for (var a = l.firstContext; a !== null;) {
                                    if (a.context === i) {
                                        if (o.tag === 1) {
                                            a = qt(-1, n & -n), a.tag = 2;
                                            var u = o.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a
                                            }
                                        }
                                        o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Oa(o.return, n, e), l.lanes |= n;
                                        break
                                    }
                                    a = a.next
                                }
                            } else if (o.tag === 10) s = o.type === e.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (s = o.return, s === null) throw Error(E(341));
                                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Oa(s, n, e), s = o.sibling
                            } else s = o.child;
                            if (s !== null) s.return = o;
                            else
                                for (s = o; s !== null;) {
                                    if (s === e) {
                                        s = null;
                                        break
                                    }
                                    if (o = s.sibling, o !== null) {
                                        o.return = s.return, s = o;
                                        break
                                    }
                                    s = s.return
                                }
                            o = s
                        }
                Ve(t, e, r.children, n),
                e = e.child
            }
            return e;
        case 9:
            return r = e.type, i = e.pendingProps.children, Si(e, n), r = wt(r), i = i(r), e.flags |= 1, Ve(t, e, i, n), e.child;
        case 14:
            return i = e.type, r = bt(i, e.pendingProps), r = bt(i.type, r), zd(t, e, i, r, n);
        case 15:
            return Cp(t, e, e.type, e.pendingProps, n);
        case 17:
            return i = e.type, r = e.pendingProps, r = e.elementType === i ? r : bt(i, r), $o(t, e), e.tag = 1, et(i) ? (t = !0, Qo(e)) : t = !1, Si(e, n), ep(e, i, r), Da(e, i, r, n), Fa(null, e, i, !0, t, n);
        case 19:
            return Tp(t, e, n);
        case 22:
            return Ep(t, e, n)
    }
    throw Error(E(156, e.tag))
};

function Qp(t, e) {
    return yh(t, e)
}

function ky(t, e, n, i) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function vt(t, e, n, i) {
    return new ky(t, e, n, i)
}

function ic(t) {
    return t = t.prototype, !(!t || !t.isReactComponent)
}

function Sy(t) {
    if (typeof t == "function") return ic(t) ? 1 : 0;
    if (t != null) {
        if (t = t.$$typeof, t === Su) return 11;
        if (t === _u) return 14
    }
    return 2
}

function wn(t, e) {
    var n = t.alternate;
    return n === null ? (n = vt(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 14680064, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
    }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n
}

function Ro(t, e, n, i, r, o) {
    var s = 2;
    if (i = t, typeof t == "function") ic(t) && (s = 1);
    else if (typeof t == "string") s = 5;
    else e: switch (t) {
        case ri:
            return Nn(n.children, r, o, e);
        case ku:
            s = 8, r |= 8;
            break;
        case la:
            return t = vt(12, n, e, r | 2), t.elementType = la, t.lanes = o, t;
        case aa:
            return t = vt(13, n, e, r), t.elementType = aa, t.lanes = o, t;
        case ua:
            return t = vt(19, n, e, r), t.elementType = ua, t.lanes = o, t;
        case th:
            return Ts(n, r, o, e);
        default:
            if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                case Zf:
                    s = 10;
                    break e;
                case eh:
                    s = 9;
                    break e;
                case Su:
                    s = 11;
                    break e;
                case _u:
                    s = 14;
                    break e;
                case sn:
                    s = 16, i = null;
                    break e
            }
            throw Error(E(130, t == null ? t : typeof t, ""))
    }
    return e = vt(s, n, e, r), e.elementType = t, e.type = i, e.lanes = o, e
}

function Nn(t, e, n, i) {
    return t = vt(7, t, i, e), t.lanes = n, t
}

function Ts(t, e, n, i) {
    return t = vt(22, t, i, e), t.elementType = th, t.lanes = n, t.stateNode = {
        isHidden: !1
    }, t
}

function Il(t, e, n) {
    return t = vt(6, t, null, e), t.lanes = n, t
}

function Dl(t, e, n) {
    return e = vt(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
    }, e
}

function _y(t, e, n, i, r) {
    this.tag = e, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vl(0), this.expirationTimes = vl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vl(0), this.identifierPrefix = i, this.onRecoverableError = r, this.mutableSourceEagerHydrationData = null
}

function rc(t, e, n, i, r, o, s, l, a) {
    return t = new _y(t, e, n, l, a), e === 1 ? (e = 1, o === !0 && (e |= 8)) : e = 0, o = vt(3, null, null, e), t.current = o, o.stateNode = t, o.memoizedState = {
        element: i,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Uu(o), t
}

function by(t, e, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: ii,
        key: i == null ? null : "" + i,
        children: t,
        containerInfo: e,
        implementation: n
    }
}

function Gp(t) {
    if (!t) return bn;
    t = t._reactInternals;
    e: {
        if (Zn(t) !== t || t.tag !== 1) throw Error(E(170));
        var e = t;do {
            switch (e.tag) {
                case 3:
                    e = e.stateNode.context;
                    break e;
                case 1:
                    if (et(e.type)) {
                        e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            e = e.return
        } while (e !== null);
        throw Error(E(171))
    }
    if (t.tag === 1) {
        var n = t.type;
        if (et(n)) return Qh(t, n, e)
    }
    return e
}

function Yp(t, e, n, i, r, o, s, l, a) {
    return t = rc(n, i, !0, t, r, o, s, l, a), t.context = Gp(null), n = t.current, i = He(), r = yn(n), o = qt(i, r), o.callback = e ? ? null, gn(n, o, r), t.current.lanes = r, Vr(t, r, i), tt(t, i), t
}

function Ms(t, e, n, i) {
    var r = e.current,
        o = He(),
        s = yn(r);
    return n = Gp(n), e.context === null ? e.context = n : e.pendingContext = n, e = qt(o, s), e.payload = {
        element: t
    }, i = i === void 0 ? null : i, i !== null && (e.callback = i), t = gn(r, e, s), t !== null && (Tt(t, r, s, o), Eo(t, r, s)), s
}

function os(t) {
    if (t = t.current, !t.child) return null;
    switch (t.child.tag) {
        case 5:
            return t.child.stateNode;
        default:
            return t.child.stateNode
    }
}

function Fd(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e
    }
}

function oc(t, e) {
    Fd(t, e), (t = t.alternate) && Fd(t, e)
}

function Cy() {
    return null
}
var Xp = typeof reportError == "function" ? reportError : function(t) {
    console.error(t)
};

function sc(t) {
    this._internalRoot = t
}
Rs.prototype.render = sc.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(E(409));
    Ms(t, e, null, null)
};
Rs.prototype.unmount = sc.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Hn(function() {
            Ms(null, t, null, null)
        }), e[Zt] = null
    }
};

function Rs(t) {
    this._internalRoot = t
}
Rs.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
        var e = Ch();
        t = {
            blockedOn: null,
            target: t,
            priority: e
        };
        for (var n = 0; n < an.length && e !== 0 && e < an[n].priority; n++);
        an.splice(n, 0, t), n === 0 && Ph(t)
    }
};

function lc(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
}

function Ls(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
}

function Ud() {}

function Ey(t, e, n, i, r) {
    if (r) {
        if (typeof i == "function") {
            var o = i;
            i = function() {
                var u = os(s);
                o.call(u)
            }
        }
        var s = Yp(e, i, t, 0, null, !1, !1, "", Ud);
        return t._reactRootContainer = s, t[Zt] = s.current, zr(t.nodeType === 8 ? t.parentNode : t), Hn(), s
    }
    for (; r = t.lastChild;) t.removeChild(r);
    if (typeof i == "function") {
        var l = i;
        i = function() {
            var u = os(a);
            l.call(u)
        }
    }
    var a = rc(t, 0, !1, null, null, !1, !1, "", Ud);
    return t._reactRootContainer = a, t[Zt] = a.current, zr(t.nodeType === 8 ? t.parentNode : t), Hn(function() {
        Ms(e, a, n, i)
    }), a
}

function js(t, e, n, i, r) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof r == "function") {
            var l = r;
            r = function() {
                var a = os(s);
                l.call(a)
            }
        }
        Ms(e, s, t, r)
    } else s = Ey(n, e, t, r, i);
    return os(s)
}
_h = function(t) {
    switch (t.tag) {
        case 3:
            var e = t.stateNode;
            if (e.current.memoizedState.isDehydrated) {
                var n = ir(e.pendingLanes);
                n !== 0 && (Eu(e, n | 1), tt(e, pe()), !(Q & 6) && (Ti = pe() + 500, $n()))
            }
            break;
        case 13:
            Hn(function() {
                var i = en(t, 1);
                if (i !== null) {
                    var r = He();
                    Tt(i, t, 1, r)
                }
            }), oc(t, 1)
    }
};
Pu = function(t) {
    if (t.tag === 13) {
        var e = en(t, 134217728);
        if (e !== null) {
            var n = He();
            Tt(e, t, 134217728, n)
        }
        oc(t, 134217728)
    }
};
bh = function(t) {
    if (t.tag === 13) {
        var e = yn(t),
            n = en(t, e);
        if (n !== null) {
            var i = He();
            Tt(n, t, e, i)
        }
        oc(t, e)
    }
};
Ch = function() {
    return Z
};
Eh = function(t, e) {
    var n = Z;
    try {
        return Z = t, e()
    } finally {
        Z = n
    }
};
wa = function(t, e, n) {
    switch (e) {
        case "input":
            if (fa(t, n), e = n.name, n.type === "radio" && e != null) {
                for (n = t; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < n.length; e++) {
                    var i = n[e];
                    if (i !== t && i.form === t.form) {
                        var r = bs(i);
                        if (!r) throw Error(E(90));
                        ih(i), fa(i, r)
                    }
                }
            }
            break;
        case "textarea":
            oh(t, n);
            break;
        case "select":
            e = n.value, e != null && yi(t, !!n.multiple, e, !1)
    }
};
fh = ec;
hh = Hn;
var Py = {
        usingClientEntryPoint: !1,
        Events: [Qr, ai, bs, ch, dh, ec]
    },
    Zi = {
        findFiberByHostInstance: jn,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    },
    zy = {
        bundleType: Zi.bundleType,
        version: Zi.version,
        rendererPackageName: Zi.rendererPackageName,
        rendererConfig: Zi.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: nn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(t) {
            return t = gh(t), t === null ? null : t.stateNode
        },
        findFiberByHostInstance: Zi.findFiberByHostInstance || Cy,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var mo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!mo.isDisabled && mo.supportsFiber) try {
        xs = mo.inject(zy), Ft = mo
    } catch {}
}
dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Py;
dt.createPortal = function(t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!lc(e)) throw Error(E(200));
    return by(t, e, null, n)
};
dt.createRoot = function(t, e) {
    if (!lc(t)) throw Error(E(299));
    var n = !1,
        i = "",
        r = Xp;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (i = e.identifierPrefix), e.onRecoverableError !== void 0 && (r = e.onRecoverableError)), e = rc(t, 1, !1, null, null, n, !1, i, r), t[Zt] = e.current, zr(t.nodeType === 8 ? t.parentNode : t), new sc(e)
};
dt.findDOMNode = function(t) {
    if (t == null) return null;
    if (t.nodeType === 1) return t;
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(E(188)) : (t = Object.keys(t).join(","), Error(E(268, t)));
    return t = gh(e), t = t === null ? null : t.stateNode, t
};
dt.flushSync = function(t) {
    return Hn(t)
};
dt.hydrate = function(t, e, n) {
    if (!Ls(e)) throw Error(E(200));
    return js(null, t, e, !0, n)
};
dt.hydrateRoot = function(t, e, n) {
    if (!lc(t)) throw Error(E(405));
    var i = n != null && n.hydratedSources || null,
        r = !1,
        o = "",
        s = Xp;
    if (n != null && (n.unstable_strictMode === !0 && (r = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), e = Yp(e, null, t, 1, n ? ? null, r, !1, o, s), t[Zt] = e.current, zr(t), i)
        for (t = 0; t < i.length; t++) n = i[t], r = n._getVersion, r = r(n._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, r] : e.mutableSourceEagerHydrationData.push(n, r);
    return new Rs(e)
};
dt.render = function(t, e, n) {
    if (!Ls(e)) throw Error(E(200));
    return js(null, t, e, !1, n)
};
dt.unmountComponentAtNode = function(t) {
    if (!Ls(t)) throw Error(E(40));
    return t._reactRootContainer ? (Hn(function() {
        js(null, null, t, !1, function() {
            t._reactRootContainer = null, t[Zt] = null
        })
    }), !0) : !1
};
dt.unstable_batchedUpdates = ec;
dt.unstable_renderSubtreeIntoContainer = function(t, e, n, i) {
    if (!Ls(n)) throw Error(E(200));
    if (t == null || t._reactInternals === void 0) throw Error(E(38));
    return js(t, e, n, !1, i)
};
dt.version = "18.2.0-next-9e3b772b8-20220608";

function Kp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kp)
    } catch (t) {
        console.error(t)
    }
}
Kp(), Yf.exports = dt;
var $y = Yf.exports,
    Bd = $y;
Oo.createRoot = Bd.createRoot, Oo.hydrateRoot = Bd.hydrateRoot;
const Ty = "modulepreload",
    My = function(t) {
        return "/" + t
    },
    Wd = {},
    X = function(e, n, i) {
        if (!n || n.length === 0) return e();
        const r = document.getElementsByTagName("link");
        return Promise.all(n.map(o => {
            if (o = My(o), o in Wd) return;
            Wd[o] = !0;
            const s = o.endsWith(".css"),
                l = s ? '[rel="stylesheet"]' : "";
            if (!!i)
                for (let c = r.length - 1; c >= 0; c--) {
                    const f = r[c];
                    if (f.href === o && (!s || f.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${o}"]${l}`)) return;
            const u = document.createElement("link");
            if (u.rel = s ? "stylesheet" : Ty, s || (u.as = "script", u.crossOrigin = ""), u.href = o, document.head.appendChild(u), s) return new Promise((c, f) => {
                u.addEventListener("load", c), u.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${o}`)))
            })
        })).then(() => e()).catch(o => {
            const s = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (s.payload = o, window.dispatchEvent(s), !s.defaultPrevented) throw o
        })
    };
var qp = {
        exports: {}
    },
    ee = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ac = Symbol.for("react.element"),
    uc = Symbol.for("react.portal"),
    Os = Symbol.for("react.fragment"),
    Is = Symbol.for("react.strict_mode"),
    Ds = Symbol.for("react.profiler"),
    As = Symbol.for("react.provider"),
    Ns = Symbol.for("react.context"),
    Ry = Symbol.for("react.server_context"),
    Fs = Symbol.for("react.forward_ref"),
    Us = Symbol.for("react.suspense"),
    Bs = Symbol.for("react.suspense_list"),
    Ws = Symbol.for("react.memo"),
    Vs = Symbol.for("react.lazy"),
    Ly = Symbol.for("react.offscreen"),
    Jp;
Jp = Symbol.for("react.module.reference");

function kt(t) {
    if (typeof t == "object" && t !== null) {
        var e = t.$$typeof;
        switch (e) {
            case ac:
                switch (t = t.type, t) {
                    case Os:
                    case Ds:
                    case Is:
                    case Us:
                    case Bs:
                        return t;
                    default:
                        switch (t = t && t.$$typeof, t) {
                            case Ry:
                            case Ns:
                            case Fs:
                            case Vs:
                            case Ws:
                            case As:
                                return t;
                            default:
                                return e
                        }
                }
            case uc:
                return e
        }
    }
}
ee.ContextConsumer = Ns;
ee.ContextProvider = As;
ee.Element = ac;
ee.ForwardRef = Fs;
ee.Fragment = Os;
ee.Lazy = Vs;
ee.Memo = Ws;
ee.Portal = uc;
ee.Profiler = Ds;
ee.StrictMode = Is;
ee.Suspense = Us;
ee.SuspenseList = Bs;
ee.isAsyncMode = function() {
    return !1
};
ee.isConcurrentMode = function() {
    return !1
};
ee.isContextConsumer = function(t) {
    return kt(t) === Ns
};
ee.isContextProvider = function(t) {
    return kt(t) === As
};
ee.isElement = function(t) {
    return typeof t == "object" && t !== null && t.$$typeof === ac
};
ee.isForwardRef = function(t) {
    return kt(t) === Fs
};
ee.isFragment = function(t) {
    return kt(t) === Os
};
ee.isLazy = function(t) {
    return kt(t) === Vs
};
ee.isMemo = function(t) {
    return kt(t) === Ws
};
ee.isPortal = function(t) {
    return kt(t) === uc
};
ee.isProfiler = function(t) {
    return kt(t) === Ds
};
ee.isStrictMode = function(t) {
    return kt(t) === Is
};
ee.isSuspense = function(t) {
    return kt(t) === Us
};
ee.isSuspenseList = function(t) {
    return kt(t) === Bs
};
ee.isValidElementType = function(t) {
    return typeof t == "string" || typeof t == "function" || t === Os || t === Ds || t === Is || t === Us || t === Bs || t === Ly || typeof t == "object" && t !== null && (t.$$typeof === Vs || t.$$typeof === Ws || t.$$typeof === As || t.$$typeof === Ns || t.$$typeof === Fs || t.$$typeof === Jp || t.getModuleId !== void 0)
};
ee.typeOf = kt;
qp.exports = ee;
var Zp = qp.exports;

function jy(t) {
    function e($, R, j, A, S) {
        for (var V = 0, z = 0, de = 0, K = 0, J, U, Pe = 0, Xe = 0, G, Oe = G = J = 0, q = 0, ze = 0, Vi = 0, $e = 0, qr = j.length, Hi = qr - 1, St, F = "", he = "", cl = "", dl = "", rn; q < qr;) {
            if (U = j.charCodeAt(q), q === Hi && z + K + de + V !== 0 && (z !== 0 && (U = z === 47 ? 10 : 47), K = de = V = 0, qr++, Hi++), z + K + de + V === 0) {
                if (q === Hi && (0 < ze && (F = F.replace(d, "")), 0 < F.trim().length)) {
                    switch (U) {
                        case 32:
                        case 9:
                        case 59:
                        case 13:
                        case 10:
                            break;
                        default:
                            F += j.charAt(q)
                    }
                    U = 59
                }
                switch (U) {
                    case 123:
                        for (F = F.trim(), J = F.charCodeAt(0), G = 1, $e = ++q; q < qr;) {
                            switch (U = j.charCodeAt(q)) {
                                case 123:
                                    G++;
                                    break;
                                case 125:
                                    G--;
                                    break;
                                case 47:
                                    switch (U = j.charCodeAt(q + 1)) {
                                        case 42:
                                        case 47:
                                            e: {
                                                for (Oe = q + 1; Oe < Hi; ++Oe) switch (j.charCodeAt(Oe)) {
                                                    case 47:
                                                        if (U === 42 && j.charCodeAt(Oe - 1) === 42 && q + 2 !== Oe) {
                                                            q = Oe + 1;
                                                            break e
                                                        }
                                                        break;
                                                    case 10:
                                                        if (U === 47) {
                                                            q = Oe + 1;
                                                            break e
                                                        }
                                                }
                                                q = Oe
                                            }
                                    }
                                    break;
                                case 91:
                                    U++;
                                case 40:
                                    U++;
                                case 34:
                                case 39:
                                    for (; q++ < Hi && j.charCodeAt(q) !== U;);
                            }
                            if (G === 0) break;
                            q++
                        }
                        switch (G = j.substring($e, q), J === 0 && (J = (F = F.replace(f, "").trim()).charCodeAt(0)), J) {
                            case 64:
                                switch (0 < ze && (F = F.replace(d, "")), U = F.charCodeAt(1), U) {
                                    case 100:
                                    case 109:
                                    case 115:
                                    case 45:
                                        ze = R;
                                        break;
                                    default:
                                        ze = Qt
                                }
                                if (G = e(R, ze, G, U, S + 1), $e = G.length, 0 < P && (ze = n(Qt, F, Vi), rn = l(3, G, ze, R, Ee, ve, $e, U, S, A), F = ze.join(""), rn !== void 0 && ($e = (G = rn.trim()).length) === 0 && (U = 0, G = "")), 0 < $e) switch (U) {
                                    case 115:
                                        F = F.replace(T, s);
                                    case 100:
                                    case 109:
                                    case 45:
                                        G = F + "{" + G + "}";
                                        break;
                                    case 107:
                                        F = F.replace(h, "$1 $2"), G = F + "{" + G + "}", G = je === 1 || je === 2 && o("@" + G, 3) ? "@-webkit-" + G + "@" + G : "@" + G;
                                        break;
                                    default:
                                        G = F + G, A === 112 && (G = (he += G, ""))
                                } else G = "";
                                break;
                            default:
                                G = e(R, n(R, F, Vi), G, A, S + 1)
                        }
                        cl += G, G = Vi = ze = Oe = J = 0, F = "", U = j.charCodeAt(++q);
                        break;
                    case 125:
                    case 59:
                        if (F = (0 < ze ? F.replace(d, "") : F).trim(), 1 < ($e = F.length)) switch (Oe === 0 && (J = F.charCodeAt(0), J === 45 || 96 < J && 123 > J) && ($e = (F = F.replace(" ", ":")).length), 0 < P && (rn = l(1, F, R, $, Ee, ve, he.length, A, S, A)) !== void 0 && ($e = (F = rn.trim()).length) === 0 && (F = "\0\0"), J = F.charCodeAt(0), U = F.charCodeAt(1), J) {
                            case 0:
                                break;
                            case 64:
                                if (U === 105 || U === 99) {
                                    dl += F + j.charAt(q);
                                    break
                                }
                            default:
                                F.charCodeAt($e - 1) !== 58 && (he += r(F, J, U, F.charCodeAt(2)))
                        }
                        Vi = ze = Oe = J = 0, F = "", U = j.charCodeAt(++q)
                }
            }
            switch (U) {
                case 13:
                case 10:
                    z === 47 ? z = 0 : 1 + J === 0 && A !== 107 && 0 < F.length && (ze = 1, F += "\0"), 0 < P * D && l(0, F, R, $, Ee, ve, he.length, A, S, A), ve = 1, Ee++;
                    break;
                case 59:
                case 125:
                    if (z + K + de + V === 0) {
                        ve++;
                        break
                    }
                default:
                    switch (ve++, St = j.charAt(q), U) {
                        case 9:
                        case 32:
                            if (K + V + z === 0) switch (Pe) {
                                case 44:
                                case 58:
                                case 9:
                                case 32:
                                    St = "";
                                    break;
                                default:
                                    U !== 32 && (St = " ")
                            }
                            break;
                        case 0:
                            St = "\\0";
                            break;
                        case 12:
                            St = "\\f";
                            break;
                        case 11:
                            St = "\\v";
                            break;
                        case 38:
                            K + z + V === 0 && (ze = Vi = 1, St = "\f" + St);
                            break;
                        case 108:
                            if (K + z + V + nt === 0 && 0 < Oe) switch (q - Oe) {
                                case 2:
                                    Pe === 112 && j.charCodeAt(q - 3) === 58 && (nt = Pe);
                                case 8:
                                    Xe === 111 && (nt = Xe)
                            }
                            break;
                        case 58:
                            K + z + V === 0 && (Oe = q);
                            break;
                        case 44:
                            z + de + K + V === 0 && (ze = 1, St += "\r");
                            break;
                        case 34:
                        case 39:
                            z === 0 && (K = K === U ? 0 : K === 0 ? U : K);
                            break;
                        case 91:
                            K + z + de === 0 && V++;
                            break;
                        case 93:
                            K + z + de === 0 && V--;
                            break;
                        case 41:
                            K + z + V === 0 && de--;
                            break;
                        case 40:
                            if (K + z + V === 0) {
                                if (J === 0) switch (2 * Pe + 3 * Xe) {
                                    case 533:
                                        break;
                                    default:
                                        J = 1
                                }
                                de++
                            }
                            break;
                        case 64:
                            z + de + K + V + Oe + G === 0 && (G = 1);
                            break;
                        case 42:
                        case 47:
                            if (!(0 < K + V + de)) switch (z) {
                                case 0:
                                    switch (2 * U + 3 * j.charCodeAt(q + 1)) {
                                        case 235:
                                            z = 47;
                                            break;
                                        case 220:
                                            $e = q, z = 42
                                    }
                                    break;
                                case 42:
                                    U === 47 && Pe === 42 && $e + 2 !== q && (j.charCodeAt($e + 2) === 33 && (he += j.substring($e, q + 1)), St = "", z = 0)
                            }
                    }
                    z === 0 && (F += St)
            }
            Xe = Pe, Pe = U, q++
        }
        if ($e = he.length, 0 < $e) {
            if (ze = R, 0 < P && (rn = l(2, he, ze, $, Ee, ve, $e, A, S, A), rn !== void 0 && (he = rn).length === 0)) return dl + he + cl;
            if (he = ze.join(",") + "{" + he + "}", je * nt !== 0) {
                switch (je !== 2 || o(he, 2) || (nt = 0), nt) {
                    case 111:
                        he = he.replace(k, ":-moz-$1") + he;
                        break;
                    case 112:
                        he = he.replace(g, "::-webkit-input-$1") + he.replace(g, "::-moz-$1") + he.replace(g, ":-ms-input-$1") + he
                }
                nt = 0
            }
        }
        return dl + he + cl
    }

    function n($, R, j) {
        var A = R.trim().split(_);
        R = A;
        var S = A.length,
            V = $.length;
        switch (V) {
            case 0:
            case 1:
                var z = 0;
                for ($ = V === 0 ? "" : $[0] + " "; z < S; ++z) R[z] = i($, R[z], j).trim();
                break;
            default:
                var de = z = 0;
                for (R = []; z < S; ++z)
                    for (var K = 0; K < V; ++K) R[de++] = i($[K] + " ", A[z], j).trim()
        }
        return R
    }

    function i($, R, j) {
        var A = R.charCodeAt(0);
        switch (33 > A && (A = (R = R.trim()).charCodeAt(0)), A) {
            case 38:
                return R.replace(p, "$1" + $.trim());
            case 58:
                return $.trim() + R.replace(p, "$1" + $.trim());
            default:
                if (0 < 1 * j && 0 < R.indexOf("\f")) return R.replace(p, ($.charCodeAt(0) === 58 ? "" : "$1") + $.trim())
        }
        return $ + R
    }

    function r($, R, j, A) {
        var S = $ + ";",
            V = 2 * R + 3 * j + 4 * A;
        if (V === 944) {
            $ = S.indexOf(":", 9) + 1;
            var z = S.substring($, S.length - 1).trim();
            return z = S.substring(0, $).trim() + z + ";", je === 1 || je === 2 && o(z, 1) ? "-webkit-" + z + z : z
        }
        if (je === 0 || je === 2 && !o(S, 1)) return S;
        switch (V) {
            case 1015:
                return S.charCodeAt(10) === 97 ? "-webkit-" + S + S : S;
            case 951:
                return S.charCodeAt(3) === 116 ? "-webkit-" + S + S : S;
            case 963:
                return S.charCodeAt(5) === 110 ? "-webkit-" + S + S : S;
            case 1009:
                if (S.charCodeAt(4) !== 100) break;
            case 969:
            case 942:
                return "-webkit-" + S + S;
            case 978:
                return "-webkit-" + S + "-moz-" + S + S;
            case 1019:
            case 983:
                return "-webkit-" + S + "-moz-" + S + "-ms-" + S + S;
            case 883:
                if (S.charCodeAt(8) === 45) return "-webkit-" + S + S;
                if (0 < S.indexOf("image-set(", 11)) return S.replace(Se, "$1-webkit-$2") + S;
                break;
            case 932:
                if (S.charCodeAt(4) === 45) switch (S.charCodeAt(5)) {
                    case 103:
                        return "-webkit-box-" + S.replace("-grow", "") + "-webkit-" + S + "-ms-" + S.replace("grow", "positive") + S;
                    case 115:
                        return "-webkit-" + S + "-ms-" + S.replace("shrink", "negative") + S;
                    case 98:
                        return "-webkit-" + S + "-ms-" + S.replace("basis", "preferred-size") + S
                }
                return "-webkit-" + S + "-ms-" + S + S;
            case 964:
                return "-webkit-" + S + "-ms-flex-" + S + S;
            case 1023:
                if (S.charCodeAt(8) !== 99) break;
                return z = S.substring(S.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + z + "-webkit-" + S + "-ms-flex-pack" + z + S;
            case 1005:
                return y.test(S) ? S.replace(v, ":-webkit-") + S.replace(v, ":-moz-") + S : S;
            case 1e3:
                switch (z = S.substring(13).trim(), R = z.indexOf("-") + 1, z.charCodeAt(0) + z.charCodeAt(R)) {
                    case 226:
                        z = S.replace(C, "tb");
                        break;
                    case 232:
                        z = S.replace(C, "tb-rl");
                        break;
                    case 220:
                        z = S.replace(C, "lr");
                        break;
                    default:
                        return S
                }
                return "-webkit-" + S + "-ms-" + z + S;
            case 1017:
                if (S.indexOf("sticky", 9) === -1) break;
            case 975:
                switch (R = (S = $).length - 10, z = (S.charCodeAt(R) === 33 ? S.substring(0, R) : S).substring($.indexOf(":", 7) + 1).trim(), V = z.charCodeAt(0) + (z.charCodeAt(7) | 0)) {
                    case 203:
                        if (111 > z.charCodeAt(8)) break;
                    case 115:
                        S = S.replace(z, "-webkit-" + z) + ";" + S;
                        break;
                    case 207:
                    case 102:
                        S = S.replace(z, "-webkit-" + (102 < V ? "inline-" : "") + "box") + ";" + S.replace(z, "-webkit-" + z) + ";" + S.replace(z, "-ms-" + z + "box") + ";" + S
                }
                return S + ";";
            case 938:
                if (S.charCodeAt(5) === 45) switch (S.charCodeAt(6)) {
                    case 105:
                        return z = S.replace("-items", ""), "-webkit-" + S + "-webkit-box-" + z + "-ms-flex-" + z + S;
                    case 115:
                        return "-webkit-" + S + "-ms-flex-item-" + S.replace(M, "") + S;
                    default:
                        return "-webkit-" + S + "-ms-flex-line-pack" + S.replace("align-content", "").replace(M, "") + S
                }
                break;
            case 973:
            case 989:
                if (S.charCodeAt(3) !== 45 || S.charCodeAt(4) === 122) break;
            case 931:
            case 953:
                if (N.test($) === !0) return (z = $.substring($.indexOf(":") + 1)).charCodeAt(0) === 115 ? r($.replace("stretch", "fill-available"), R, j, A).replace(":fill-available", ":stretch") : S.replace(z, "-webkit-" + z) + S.replace(z, "-moz-" + z.replace("fill-", "")) + S;
                break;
            case 962:
                if (S = "-webkit-" + S + (S.charCodeAt(5) === 102 ? "-ms-" + S : "") + S, j + A === 211 && S.charCodeAt(13) === 105 && 0 < S.indexOf("transform", 10)) return S.substring(0, S.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + S
        }
        return S
    }

    function o($, R) {
        var j = $.indexOf(R === 1 ? ":" : "{"),
            A = $.substring(0, R !== 3 ? j : 10);
        return j = $.substring(j + 1, $.length - 1), I(R !== 2 ? A : A.replace(H, "$1"), j, R)
    }

    function s($, R) {
        var j = r(R, R.charCodeAt(0), R.charCodeAt(1), R.charCodeAt(2));
        return j !== R + ";" ? j.replace(L, " or ($1)").substring(4) : "(" + R + ")"
    }

    function l($, R, j, A, S, V, z, de, K, J) {
        for (var U = 0, Pe = R, Xe; U < P; ++U) switch (Xe = We[U].call(c, $, Pe, j, A, S, V, z, de, K, J)) {
            case void 0:
            case !1:
            case !0:
            case null:
                break;
            default:
                Pe = Xe
        }
        if (Pe !== R) return Pe
    }

    function a($) {
        switch ($) {
            case void 0:
            case null:
                P = We.length = 0;
                break;
            default:
                if (typeof $ == "function") We[P++] = $;
                else if (typeof $ == "object")
                    for (var R = 0, j = $.length; R < j; ++R) a($[R]);
                else D = !!$ | 0
        }
        return a
    }

    function u($) {
        return $ = $.prefix, $ !== void 0 && (I = null, $ ? typeof $ != "function" ? je = 1 : (je = 2, I = $) : je = 0), u
    }

    function c($, R) {
        var j = $;
        if (33 > j.charCodeAt(0) && (j = j.trim()), ne = j, j = [ne], 0 < P) {
            var A = l(-1, R, j, j, Ee, ve, 0, 0, 0, 0);
            A !== void 0 && typeof A == "string" && (R = A)
        }
        var S = e(Qt, j, R, 0, 0);
        return 0 < P && (A = l(-2, S, j, j, Ee, ve, S.length, 0, 0, 0), A !== void 0 && (S = A)), ne = "", nt = 0, ve = Ee = 1, S
    }
    var f = /^\0+/g,
        d = /[\0\r\f]/g,
        v = /: */g,
        y = /zoo|gra/,
        w = /([,: ])(transform)/g,
        _ = /,\r+?/g,
        p = /([\t\r\n ])*\f?&/g,
        h = /@(k\w+)\s*(\S*)\s*/,
        g = /::(place)/g,
        k = /:(read-only)/g,
        C = /[svh]\w+-[tblr]{2}/,
        T = /\(\s*(.*)\s*\)/g,
        L = /([\s\S]*?);/g,
        M = /-self|flex-/g,
        H = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
        N = /stretch|:\s*\w+\-(?:conte|avail)/,
        Se = /([^-])(image-set\()/,
        ve = 1,
        Ee = 1,
        nt = 0,
        je = 1,
        Qt = [],
        We = [],
        P = 0,
        I = null,
        D = 0,
        ne = "";
    return c.use = a, c.set = u, t !== void 0 && u(t), c
}
var Oy = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
};

function Iy(t) {
    var e = Object.create(null);
    return function(n) {
        return e[n] === void 0 && (e[n] = t(n)), e[n]
    }
}
var Dy = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    Vd = Iy(function(t) {
        return Dy.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91
    }),
    em = {
        exports: {}
    },
    te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce = typeof Symbol == "function" && Symbol.for,
    cc = Ce ? Symbol.for("react.element") : 60103,
    dc = Ce ? Symbol.for("react.portal") : 60106,
    Hs = Ce ? Symbol.for("react.fragment") : 60107,
    Qs = Ce ? Symbol.for("react.strict_mode") : 60108,
    Gs = Ce ? Symbol.for("react.profiler") : 60114,
    Ys = Ce ? Symbol.for("react.provider") : 60109,
    Xs = Ce ? Symbol.for("react.context") : 60110,
    fc = Ce ? Symbol.for("react.async_mode") : 60111,
    Ks = Ce ? Symbol.for("react.concurrent_mode") : 60111,
    qs = Ce ? Symbol.for("react.forward_ref") : 60112,
    Js = Ce ? Symbol.for("react.suspense") : 60113,
    Ay = Ce ? Symbol.for("react.suspense_list") : 60120,
    Zs = Ce ? Symbol.for("react.memo") : 60115,
    el = Ce ? Symbol.for("react.lazy") : 60116,
    Ny = Ce ? Symbol.for("react.block") : 60121,
    Fy = Ce ? Symbol.for("react.fundamental") : 60117,
    Uy = Ce ? Symbol.for("react.responder") : 60118,
    By = Ce ? Symbol.for("react.scope") : 60119;

function ht(t) {
    if (typeof t == "object" && t !== null) {
        var e = t.$$typeof;
        switch (e) {
            case cc:
                switch (t = t.type, t) {
                    case fc:
                    case Ks:
                    case Hs:
                    case Gs:
                    case Qs:
                    case Js:
                        return t;
                    default:
                        switch (t = t && t.$$typeof, t) {
                            case Xs:
                            case qs:
                            case el:
                            case Zs:
                            case Ys:
                                return t;
                            default:
                                return e
                        }
                }
            case dc:
                return e
        }
    }
}

function tm(t) {
    return ht(t) === Ks
}
te.AsyncMode = fc;
te.ConcurrentMode = Ks;
te.ContextConsumer = Xs;
te.ContextProvider = Ys;
te.Element = cc;
te.ForwardRef = qs;
te.Fragment = Hs;
te.Lazy = el;
te.Memo = Zs;
te.Portal = dc;
te.Profiler = Gs;
te.StrictMode = Qs;
te.Suspense = Js;
te.isAsyncMode = function(t) {
    return tm(t) || ht(t) === fc
};
te.isConcurrentMode = tm;
te.isContextConsumer = function(t) {
    return ht(t) === Xs
};
te.isContextProvider = function(t) {
    return ht(t) === Ys
};
te.isElement = function(t) {
    return typeof t == "object" && t !== null && t.$$typeof === cc
};
te.isForwardRef = function(t) {
    return ht(t) === qs
};
te.isFragment = function(t) {
    return ht(t) === Hs
};
te.isLazy = function(t) {
    return ht(t) === el
};
te.isMemo = function(t) {
    return ht(t) === Zs
};
te.isPortal = function(t) {
    return ht(t) === dc
};
te.isProfiler = function(t) {
    return ht(t) === Gs
};
te.isStrictMode = function(t) {
    return ht(t) === Qs
};
te.isSuspense = function(t) {
    return ht(t) === Js
};
te.isValidElementType = function(t) {
    return typeof t == "string" || typeof t == "function" || t === Hs || t === Ks || t === Gs || t === Qs || t === Js || t === Ay || typeof t == "object" && t !== null && (t.$$typeof === el || t.$$typeof === Zs || t.$$typeof === Ys || t.$$typeof === Xs || t.$$typeof === qs || t.$$typeof === Fy || t.$$typeof === Uy || t.$$typeof === By || t.$$typeof === Ny)
};
te.typeOf = ht;
em.exports = te;
var Wy = em.exports,
    hc = Wy,
    Vy = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
    },
    Hy = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
    },
    Qy = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    },
    nm = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    },
    pc = {};
pc[hc.ForwardRef] = Qy;
pc[hc.Memo] = nm;

function Hd(t) {
    return hc.isMemo(t) ? nm : pc[t.$$typeof] || Vy
}
var Gy = Object.defineProperty,
    Yy = Object.getOwnPropertyNames,
    Qd = Object.getOwnPropertySymbols,
    Xy = Object.getOwnPropertyDescriptor,
    Ky = Object.getPrototypeOf,
    Gd = Object.prototype;

function im(t, e, n) {
    if (typeof e != "string") {
        if (Gd) {
            var i = Ky(e);
            i && i !== Gd && im(t, i, n)
        }
        var r = Yy(e);
        Qd && (r = r.concat(Qd(e)));
        for (var o = Hd(t), s = Hd(e), l = 0; l < r.length; ++l) {
            var a = r[l];
            if (!Hy[a] && !(n && n[a]) && !(s && s[a]) && !(o && o[a])) {
                var u = Xy(e, a);
                try {
                    Gy(t, a, u)
                } catch {}
            }
        }
    }
    return t
}
var qy = im;
const Jy = Df(qy);

function Nt() {
    return (Nt = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }).apply(this, arguments)
}
var Yd = function(t, e) {
        for (var n = [t[0]], i = 0, r = e.length; i < r; i += 1) n.push(e[i], t[i + 1]);
        return n
    },
    Ja = function(t) {
        return t !== null && typeof t == "object" && (t.toString ? t.toString() : Object.prototype.toString.call(t)) === "[object Object]" && !Zp.typeOf(t)
    },
    ss = Object.freeze([]),
    xn = Object.freeze({});

function Mi(t) {
    return typeof t == "function"
}

function Xd(t) {
    return t.displayName || t.name || "Component"
}

function mc(t) {
    return t && typeof t.styledComponentId == "string"
}
var Ri = typeof process < "u" && process.env !== void 0 && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR) || "data-styled",
    gc = typeof window < "u" && "HTMLElement" in window,
    Zy = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && ({}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== "" ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" && {}.REACT_APP_SC_DISABLE_SPEEDY : {}.SC_DISABLE_SPEEDY !== void 0 && {}.SC_DISABLE_SPEEDY !== "" && {}.SC_DISABLE_SPEEDY !== "false" && {}.SC_DISABLE_SPEEDY));

function Qn(t) {
    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
    throw new Error("An error occurred. See https://git.io/JUIaE#" + t + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""))
}
var e0 = function() {
        function t(n) {
            this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n
        }
        var e = t.prototype;
        return e.indexOfGroup = function(n) {
            for (var i = 0, r = 0; r < n; r++) i += this.groupSizes[r];
            return i
        }, e.insertRules = function(n, i) {
            if (n >= this.groupSizes.length) {
                for (var r = this.groupSizes, o = r.length, s = o; n >= s;)(s <<= 1) < 0 && Qn(16, "" + n);
                this.groupSizes = new Uint32Array(s), this.groupSizes.set(r), this.length = s;
                for (var l = o; l < s; l++) this.groupSizes[l] = 0
            }
            for (var a = this.indexOfGroup(n + 1), u = 0, c = i.length; u < c; u++) this.tag.insertRule(a, i[u]) && (this.groupSizes[n]++, a++)
        }, e.clearGroup = function(n) {
            if (n < this.length) {
                var i = this.groupSizes[n],
                    r = this.indexOfGroup(n),
                    o = r + i;
                this.groupSizes[n] = 0;
                for (var s = r; s < o; s++) this.tag.deleteRule(r)
            }
        }, e.getGroup = function(n) {
            var i = "";
            if (n >= this.length || this.groupSizes[n] === 0) return i;
            for (var r = this.groupSizes[n], o = this.indexOfGroup(n), s = o + r, l = o; l < s; l++) i += this.tag.getRule(l) + `/*!sc*/
`;
            return i
        }, t
    }(),
    Lo = new Map,
    ls = new Map,
    mr = 1,
    go = function(t) {
        if (Lo.has(t)) return Lo.get(t);
        for (; ls.has(mr);) mr++;
        var e = mr++;
        return Lo.set(t, e), ls.set(e, t), e
    },
    t0 = function(t) {
        return ls.get(t)
    },
    n0 = function(t, e) {
        e >= mr && (mr = e + 1), Lo.set(t, e), ls.set(e, t)
    },
    i0 = "style[" + Ri + '][data-styled-version="5.3.11"]',
    r0 = new RegExp("^" + Ri + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
    o0 = function(t, e, n) {
        for (var i, r = n.split(","), o = 0, s = r.length; o < s; o++)(i = r[o]) && t.registerName(e, i)
    },
    s0 = function(t, e) {
        for (var n = (e.textContent || "").split(`/*!sc*/
`), i = [], r = 0, o = n.length; r < o; r++) {
            var s = n[r].trim();
            if (s) {
                var l = s.match(r0);
                if (l) {
                    var a = 0 | parseInt(l[1], 10),
                        u = l[2];
                    a !== 0 && (n0(u, a), o0(t, u, l[3]), t.getTag().insertRules(a, i)), i.length = 0
                } else i.push(s)
            }
        }
    },
    l0 = function() {
        return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null
    },
    rm = function(t) {
        var e = document.head,
            n = t || e,
            i = document.createElement("style"),
            r = function(l) {
                for (var a = l.childNodes, u = a.length; u >= 0; u--) {
                    var c = a[u];
                    if (c && c.nodeType === 1 && c.hasAttribute(Ri)) return c
                }
            }(n),
            o = r !== void 0 ? r.nextSibling : null;
        i.setAttribute(Ri, "active"), i.setAttribute("data-styled-version", "5.3.11");
        var s = l0();
        return s && i.setAttribute("nonce", s), n.insertBefore(i, o), i
    },
    a0 = function() {
        function t(n) {
            var i = this.element = rm(n);
            i.appendChild(document.createTextNode("")), this.sheet = function(r) {
                if (r.sheet) return r.sheet;
                for (var o = document.styleSheets, s = 0, l = o.length; s < l; s++) {
                    var a = o[s];
                    if (a.ownerNode === r) return a
                }
                Qn(17)
            }(i), this.length = 0
        }
        var e = t.prototype;
        return e.insertRule = function(n, i) {
            try {
                return this.sheet.insertRule(i, n), this.length++, !0
            } catch {
                return !1
            }
        }, e.deleteRule = function(n) {
            this.sheet.deleteRule(n), this.length--
        }, e.getRule = function(n) {
            var i = this.sheet.cssRules[n];
            return i !== void 0 && typeof i.cssText == "string" ? i.cssText : ""
        }, t
    }(),
    u0 = function() {
        function t(n) {
            var i = this.element = rm(n);
            this.nodes = i.childNodes, this.length = 0
        }
        var e = t.prototype;
        return e.insertRule = function(n, i) {
            if (n <= this.length && n >= 0) {
                var r = document.createTextNode(i),
                    o = this.nodes[n];
                return this.element.insertBefore(r, o || null), this.length++, !0
            }
            return !1
        }, e.deleteRule = function(n) {
            this.element.removeChild(this.nodes[n]), this.length--
        }, e.getRule = function(n) {
            return n < this.length ? this.nodes[n].textContent : ""
        }, t
    }(),
    c0 = function() {
        function t(n) {
            this.rules = [], this.length = 0
        }
        var e = t.prototype;
        return e.insertRule = function(n, i) {
            return n <= this.length && (this.rules.splice(n, 0, i), this.length++, !0)
        }, e.deleteRule = function(n) {
            this.rules.splice(n, 1), this.length--
        }, e.getRule = function(n) {
            return n < this.length ? this.rules[n] : ""
        }, t
    }(),
    Kd = gc,
    d0 = {
        isServer: !gc,
        useCSSOMInjection: !Zy
    },
    om = function() {
        function t(n, i, r) {
            n === void 0 && (n = xn), i === void 0 && (i = {}), this.options = Nt({}, d0, {}, n), this.gs = i, this.names = new Map(r), this.server = !!n.isServer, !this.server && gc && Kd && (Kd = !1, function(o) {
                for (var s = document.querySelectorAll(i0), l = 0, a = s.length; l < a; l++) {
                    var u = s[l];
                    u && u.getAttribute(Ri) !== "active" && (s0(o, u), u.parentNode && u.parentNode.removeChild(u))
                }
            }(this))
        }
        t.registerId = function(n) {
            return go(n)
        };
        var e = t.prototype;
        return e.reconstructWithOptions = function(n, i) {
            return i === void 0 && (i = !0), new t(Nt({}, this.options, {}, n), this.gs, i && this.names || void 0)
        }, e.allocateGSInstance = function(n) {
            return this.gs[n] = (this.gs[n] || 0) + 1
        }, e.getTag = function() {
            return this.tag || (this.tag = (r = (i = this.options).isServer, o = i.useCSSOMInjection, s = i.target, n = r ? new c0(s) : o ? new a0(s) : new u0(s), new e0(n)));
            var n, i, r, o, s
        }, e.hasNameForId = function(n, i) {
            return this.names.has(n) && this.names.get(n).has(i)
        }, e.registerName = function(n, i) {
            if (go(n), this.names.has(n)) this.names.get(n).add(i);
            else {
                var r = new Set;
                r.add(i), this.names.set(n, r)
            }
        }, e.insertRules = function(n, i, r) {
            this.registerName(n, i), this.getTag().insertRules(go(n), r)
        }, e.clearNames = function(n) {
            this.names.has(n) && this.names.get(n).clear()
        }, e.clearRules = function(n) {
            this.getTag().clearGroup(go(n)), this.clearNames(n)
        }, e.clearTag = function() {
            this.tag = void 0
        }, e.toString = function() {
            return function(n) {
                for (var i = n.getTag(), r = i.length, o = "", s = 0; s < r; s++) {
                    var l = t0(s);
                    if (l !== void 0) {
                        var a = n.names.get(l),
                            u = i.getGroup(s);
                        if (a && u && a.size) {
                            var c = Ri + ".g" + s + '[id="' + l + '"]',
                                f = "";
                            a !== void 0 && a.forEach(function(d) {
                                d.length > 0 && (f += d + ",")
                            }), o += "" + u + c + '{content:"' + f + `"}/*!sc*/
`
                        }
                    }
                }
                return o
            }(this)
        }, t
    }(),
    f0 = /(a)(d)/gi,
    qd = function(t) {
        return String.fromCharCode(t + (t > 25 ? 39 : 97))
    };

function Za(t) {
    var e, n = "";
    for (e = Math.abs(t); e > 52; e = e / 52 | 0) n = qd(e % 52) + n;
    return (qd(e % 52) + n).replace(f0, "$1-$2")
}
var mi = function(t, e) {
        for (var n = e.length; n;) t = 33 * t ^ e.charCodeAt(--n);
        return t
    },
    sm = function(t) {
        return mi(5381, t)
    };

function h0(t) {
    for (var e = 0; e < t.length; e += 1) {
        var n = t[e];
        if (Mi(n) && !mc(n)) return !1
    }
    return !0
}
var p0 = sm("5.3.11"),
    m0 = function() {
        function t(e, n, i) {
            this.rules = e, this.staticRulesId = "", this.isStatic = (i === void 0 || i.isStatic) && h0(e), this.componentId = n, this.baseHash = mi(p0, n), this.baseStyle = i, om.registerId(n)
        }
        return t.prototype.generateAndInjectStyles = function(e, n, i) {
            var r = this.componentId,
                o = [];
            if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, n, i)), this.isStatic && !i.hash)
                if (this.staticRulesId && n.hasNameForId(r, this.staticRulesId)) o.push(this.staticRulesId);
                else {
                    var s = Li(this.rules, e, n, i).join(""),
                        l = Za(mi(this.baseHash, s) >>> 0);
                    if (!n.hasNameForId(r, l)) {
                        var a = i(s, "." + l, void 0, r);
                        n.insertRules(r, l, a)
                    }
                    o.push(l), this.staticRulesId = l
                }
            else {
                for (var u = this.rules.length, c = mi(this.baseHash, i.hash), f = "", d = 0; d < u; d++) {
                    var v = this.rules[d];
                    if (typeof v == "string") f += v;
                    else if (v) {
                        var y = Li(v, e, n, i),
                            w = Array.isArray(y) ? y.join("") : y;
                        c = mi(c, w + d), f += w
                    }
                }
                if (f) {
                    var _ = Za(c >>> 0);
                    if (!n.hasNameForId(r, _)) {
                        var p = i(f, "." + _, void 0, r);
                        n.insertRules(r, _, p)
                    }
                    o.push(_)
                }
            }
            return o.join(" ")
        }, t
    }(),
    g0 = /^\s*\/\/.*$/gm,
    v0 = [":", "[", ".", "#"];

function y0(t) {
    var e, n, i, r, o = t === void 0 ? xn : t,
        s = o.options,
        l = s === void 0 ? xn : s,
        a = o.plugins,
        u = a === void 0 ? ss : a,
        c = new jy(l),
        f = [],
        d = function(w) {
            function _(p) {
                if (p) try {
                    w(p + "}")
                } catch {}
            }
            return function(p, h, g, k, C, T, L, M, H, N) {
                switch (p) {
                    case 1:
                        if (H === 0 && h.charCodeAt(0) === 64) return w(h + ";"), "";
                        break;
                    case 2:
                        if (M === 0) return h + "/*|*/";
                        break;
                    case 3:
                        switch (M) {
                            case 102:
                            case 112:
                                return w(g[0] + h), "";
                            default:
                                return h + (N === 0 ? "/*|*/" : "")
                        }
                    case -2:
                        h.split("/*|*/}").forEach(_)
                }
            }
        }(function(w) {
            f.push(w)
        }),
        v = function(w, _, p) {
            return _ === 0 && v0.indexOf(p[n.length]) !== -1 || p.match(r) ? w : "." + e
        };

    function y(w, _, p, h) {
        h === void 0 && (h = "&");
        var g = w.replace(g0, ""),
            k = _ && p ? p + " " + _ + " { " + g + " }" : g;
        return e = h, n = _, i = new RegExp("\\" + n + "\\b", "g"), r = new RegExp("(\\" + n + "\\b){2,}"), c(p || !_ ? "" : _, k)
    }
    return c.use([].concat(u, [function(w, _, p) {
        w === 2 && p.length && p[0].lastIndexOf(n) > 0 && (p[0] = p[0].replace(i, v))
    }, d, function(w) {
        if (w === -2) {
            var _ = f;
            return f = [], _
        }
    }])), y.hash = u.length ? u.reduce(function(w, _) {
        return _.name || Qn(15), mi(w, _.name)
    }, 5381).toString() : "", y
}
var lm = Ht.createContext();
lm.Consumer;
var am = Ht.createContext(),
    w0 = (am.Consumer, new om),
    eu = y0();

function x0() {
    return x.useContext(lm) || w0
}

function k0() {
    return x.useContext(am) || eu
}
var S0 = function() {
        function t(e, n) {
            var i = this;
            this.inject = function(r, o) {
                o === void 0 && (o = eu);
                var s = i.name + o.hash;
                r.hasNameForId(i.id, s) || r.insertRules(i.id, s, o(i.rules, s, "@keyframes"))
            }, this.toString = function() {
                return Qn(12, String(i.name))
            }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = n
        }
        return t.prototype.getName = function(e) {
            return e === void 0 && (e = eu), this.name + e.hash
        }, t
    }(),
    _0 = /([A-Z])/,
    b0 = /([A-Z])/g,
    C0 = /^ms-/,
    E0 = function(t) {
        return "-" + t.toLowerCase()
    };

function Jd(t) {
    return _0.test(t) ? t.replace(b0, E0).replace(C0, "-ms-") : t
}
var Zd = function(t) {
    return t == null || t === !1 || t === ""
};

function Li(t, e, n, i) {
    if (Array.isArray(t)) {
        for (var r, o = [], s = 0, l = t.length; s < l; s += 1)(r = Li(t[s], e, n, i)) !== "" && (Array.isArray(r) ? o.push.apply(o, r) : o.push(r));
        return o
    }
    if (Zd(t)) return "";
    if (mc(t)) return "." + t.styledComponentId;
    if (Mi(t)) {
        if (typeof(u = t) != "function" || u.prototype && u.prototype.isReactComponent || !e) return t;
        var a = t(e);
        return Li(a, e, n, i)
    }
    var u;
    return t instanceof S0 ? n ? (t.inject(n, i), t.getName(i)) : t : Ja(t) ? function c(f, d) {
        var v, y, w = [];
        for (var _ in f) f.hasOwnProperty(_) && !Zd(f[_]) && (Array.isArray(f[_]) && f[_].isCss || Mi(f[_]) ? w.push(Jd(_) + ":", f[_], ";") : Ja(f[_]) ? w.push.apply(w, c(f[_], _)) : w.push(Jd(_) + ": " + (v = _, (y = f[_]) == null || typeof y == "boolean" || y === "" ? "" : typeof y != "number" || y === 0 || v in Oy || v.startsWith("--") ? String(y).trim() : y + "px") + ";"));
        return d ? [d + " {"].concat(w, ["}"]) : w
    }(t) : t.toString()
}
var ef = function(t) {
    return Array.isArray(t) && (t.isCss = !0), t
};

function P0(t) {
    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
    return Mi(t) || Ja(t) ? ef(Li(Yd(ss, [t].concat(n)))) : n.length === 0 && t.length === 1 && typeof t[0] == "string" ? t : ef(Li(Yd(t, n)))
}
var z0 = function(t, e, n) {
        return n === void 0 && (n = xn), t.theme !== n.theme && t.theme || e || n.theme
    },
    $0 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
    T0 = /(^-|-$)/g;

function Al(t) {
    return t.replace($0, "-").replace(T0, "")
}
var M0 = function(t) {
    return Za(sm(t) >>> 0)
};

function vo(t) {
    return typeof t == "string" && !0
}
var tu = function(t) {
        return typeof t == "function" || typeof t == "object" && t !== null && !Array.isArray(t)
    },
    R0 = function(t) {
        return t !== "__proto__" && t !== "constructor" && t !== "prototype"
    };

function L0(t, e, n) {
    var i = t[n];
    tu(e) && tu(i) ? um(i, e) : t[n] = e
}

function um(t) {
    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
    for (var r = 0, o = n; r < o.length; r++) {
        var s = o[r];
        if (tu(s))
            for (var l in s) R0(l) && L0(t, s[l], l)
    }
    return t
}
var Dr = Ht.createContext();
Dr.Consumer;

function j0(t) {
    var e = x.useContext(Dr),
        n = x.useMemo(function() {
            return function(i, r) {
                if (!i) return Qn(14);
                if (Mi(i)) {
                    var o = i(r);
                    return o
                }
                return Array.isArray(i) || typeof i != "object" ? Qn(8) : r ? Nt({}, r, {}, i) : i
            }(t.theme, e)
        }, [t.theme, e]);
    return t.children ? Ht.createElement(Dr.Provider, {
        value: n
    }, t.children) : null
}
var Nl = {};

function cm(t, e, n) {
    var i = mc(t),
        r = !vo(t),
        o = e.attrs,
        s = o === void 0 ? ss : o,
        l = e.componentId,
        a = l === void 0 ? function(h, g) {
            var k = typeof h != "string" ? "sc" : Al(h);
            Nl[k] = (Nl[k] || 0) + 1;
            var C = k + "-" + M0("5.3.11" + k + Nl[k]);
            return g ? g + "-" + C : C
        }(e.displayName, e.parentComponentId) : l,
        u = e.displayName,
        c = u === void 0 ? function(h) {
            return vo(h) ? "styled." + h : "Styled(" + Xd(h) + ")"
        }(t) : u,
        f = e.displayName && e.componentId ? Al(e.displayName) + "-" + e.componentId : e.componentId || a,
        d = i && t.attrs ? Array.prototype.concat(t.attrs, s).filter(Boolean) : s,
        v = e.shouldForwardProp;
    i && t.shouldForwardProp && (v = e.shouldForwardProp ? function(h, g, k) {
        return t.shouldForwardProp(h, g, k) && e.shouldForwardProp(h, g, k)
    } : t.shouldForwardProp);
    var y, w = new m0(n, f, i ? t.componentStyle : void 0),
        _ = w.isStatic && s.length === 0,
        p = function(h, g) {
            return function(k, C, T, L) {
                var M = k.attrs,
                    H = k.componentStyle,
                    N = k.defaultProps,
                    Se = k.foldedComponentIds,
                    ve = k.shouldForwardProp,
                    Ee = k.styledComponentId,
                    nt = k.target,
                    je = function(A, S, V) {
                        A === void 0 && (A = xn);
                        var z = Nt({}, S, {
                                theme: A
                            }),
                            de = {};
                        return V.forEach(function(K) {
                            var J, U, Pe, Xe = K;
                            for (J in Mi(Xe) && (Xe = Xe(z)), Xe) z[J] = de[J] = J === "className" ? (U = de[J], Pe = Xe[J], U && Pe ? U + " " + Pe : U || Pe) : Xe[J]
                        }), [z, de]
                    }(z0(C, x.useContext(Dr), N) || xn, C, M),
                    Qt = je[0],
                    We = je[1],
                    P = function(A, S, V, z) {
                        var de = x0(),
                            K = k0(),
                            J = S ? A.generateAndInjectStyles(xn, de, K) : A.generateAndInjectStyles(V, de, K);
                        return J
                    }(H, L, Qt),
                    I = T,
                    D = We.$as || C.$as || We.as || C.as || nt,
                    ne = vo(D),
                    $ = We !== C ? Nt({}, C, {}, We) : C,
                    R = {};
                for (var j in $) j[0] !== "$" && j !== "as" && (j === "forwardedAs" ? R.as = $[j] : (ve ? ve(j, Vd, D) : !ne || Vd(j)) && (R[j] = $[j]));
                return C.style && We.style !== C.style && (R.style = Nt({}, C.style, {}, We.style)), R.className = Array.prototype.concat(Se, Ee, P !== Ee ? P : null, C.className, We.className).filter(Boolean).join(" "), R.ref = I, x.createElement(D, R)
            }(y, h, g, _)
        };
    return p.displayName = c, (y = Ht.forwardRef(p)).attrs = d, y.componentStyle = w, y.displayName = c, y.shouldForwardProp = v, y.foldedComponentIds = i ? Array.prototype.concat(t.foldedComponentIds, t.styledComponentId) : ss, y.styledComponentId = f, y.target = i ? t.target : t, y.withComponent = function(h) {
        var g = e.componentId,
            k = function(T, L) {
                if (T == null) return {};
                var M, H, N = {},
                    Se = Object.keys(T);
                for (H = 0; H < Se.length; H++) M = Se[H], L.indexOf(M) >= 0 || (N[M] = T[M]);
                return N
            }(e, ["componentId"]),
            C = g && g + "-" + (vo(h) ? h : Al(Xd(h)));
        return cm(h, Nt({}, k, {
            attrs: d,
            componentId: C
        }), n)
    }, Object.defineProperty(y, "defaultProps", {
        get: function() {
            return this._foldedDefaultProps
        },
        set: function(h) {
            this._foldedDefaultProps = i ? um({}, t.defaultProps, h) : h
        }
    }), Object.defineProperty(y, "toString", {
        value: function() {
            return "." + y.styledComponentId
        }
    }), r && Jy(y, t, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0
    }), y
}
var nu = function(t) {
    return function e(n, i, r) {
        if (r === void 0 && (r = xn), !Zp.isValidElementType(i)) return Qn(1, String(i));
        var o = function() {
            return n(i, r, P0.apply(void 0, arguments))
        };
        return o.withConfig = function(s) {
            return e(n, i, Nt({}, r, {}, s))
        }, o.attrs = function(s) {
            return e(n, i, Nt({}, r, {
                attrs: Array.prototype.concat(r.attrs, s).filter(Boolean)
            }))
        }, o
    }(cm, t)
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(t) {
    nu[t] = nu(t)
});
var Yr = function() {
    return x.useContext(Dr)
};
const b = nu,
    O0 = new Map(Object.entries({
        cube: x.lazy(async () => await X(() =>
            import ("./ico3DCube-3c536b65.js"), ["assets/ico3DCube-3c536b65.js", "assets/icoWrapper-26308639.js"])),
        css: x.lazy(async () => await X(() =>
            import ("./IcoCSS-3726f673.js"), [])),
        canJs: x.lazy(async () => await X(() =>
            import ("./IcoCanJs-8bb6e4a1.js"), ["assets/IcoCanJs-8bb6e4a1.js", "assets/icoWrapper-26308639.js"])),
        close: x.lazy(async () => await X(() =>
            import ("./IcoClose-9688b713.js"), ["assets/IcoClose-9688b713.js", "assets/icoWrapper-26308639.js"])),
        dark: x.lazy(async () => await X(() =>
            import ("./IcoDark-6d3eea11.js"), ["assets/IcoDark-6d3eea11.js", "assets/icoWrapper-26308639.js"])),
        down: x.lazy(async () => await X(() =>
            import ("./IcoDown-459a9d45.js"), ["assets/IcoDown-459a9d45.js", "assets/icoWrapper-26308639.js"])),
        github: x.lazy(async () => await X(() =>
            import ("./IcoGithub-ffa4cff4.js"), ["assets/IcoGithub-ffa4cff4.js", "assets/icoWrapper-26308639.js"])),
        html5: x.lazy(async () => await X(() =>
            import ("./icoHTML5-bac62d5b.js"), ["assets/icoHTML5-bac62d5b.js", "assets/icoWrapper-26308639.js"])),
        indeed: x.lazy(async () => await X(() =>
            import ("./IcoIndeed-2e392ae7.js"), ["assets/IcoIndeed-2e392ae7.js", "assets/icoWrapper-26308639.js"])),
        js: x.lazy(async () => await X(() =>
            import ("./icoJS-d3cb433b.js"), ["assets/icoJS-d3cb433b.js", "assets/icoWrapper-26308639.js"])),
        ts: x.lazy(async () => await X(() =>
            import ("./icoTS-7acaa93f.js"), ["assets/icoTS-7acaa93f.js", "assets/icoWrapper-26308639.js"])),
        linesCircle: x.lazy(async () => await X(() =>
            import ("./IcoLinesCircle-eaf6ac6b.js"), ["assets/IcoLinesCircle-eaf6ac6b.js", "assets/icoWrapper-26308639.js"])),
        linkedIn: x.lazy(async () => await X(() =>
            import ("./IcoLinkedIn-5c303a97.js"), ["assets/IcoLinkedIn-5c303a97.js", "assets/icoWrapper-26308639.js"])),
        loading: x.lazy(async () => await X(() =>
            import ("./IcoLoading-e5d97786.js"), ["assets/IcoLoading-e5d97786.js", "assets/icoWrapper-26308639.js"])),
        logo: x.lazy(async () => await X(() =>
            import ("./IcoLogo-db252998.js"), ["assets/IcoLogo-db252998.js", "assets/icoWrapper-26308639.js"])),
        more: x.lazy(async () => await X(() =>
            import ("./IcoMore-69212666.js"), ["assets/IcoMore-69212666.js", "assets/icoWrapper-26308639.js"])),
        mute: x.lazy(async () => await X(() =>
            import ("./IcoMute-b16c4092.js"), ["assets/IcoMute-b16c4092.js", "assets/icoWrapper-26308639.js"])),
        next: x.lazy(async () => await X(() =>
            import ("./icoNext-c7bcdad3.js"), ["assets/icoNext-c7bcdad3.js", "assets/icoWrapper-26308639.js"])),
        node: x.lazy(async () => await X(() =>
            import ("./icoNode-2b9027de.js"), ["assets/icoNode-2b9027de.js", "assets/icoWrapper-26308639.js"])),
        php: x.lazy(async () => await X(() =>
            import ("./IcoPhp-970a3bd9.js"), ["assets/IcoPhp-970a3bd9.js", "assets/icoWrapper-26308639.js"])),
        react: x.lazy(async () => await X(() =>
            import ("./icoReact-bdf5fb0c.js"), ["assets/icoReact-bdf5fb0c.js", "assets/icoWrapper-26308639.js"])),
        reset: x.lazy(async () => await X(() =>
            import ("./IcoReset-9d7a0876.js"), ["assets/IcoReset-9d7a0876.js", "assets/icoWrapper-26308639.js"])),
        sass: x.lazy(async () => await X(() =>
            import ("./icoSass-3f263baa.js"), ["assets/icoSass-3f263baa.js", "assets/icoWrapper-26308639.js"])),
        send: x.lazy(async () => await X(() =>
            import ("./IcoSend-b4632f7c.js"), ["assets/IcoSend-b4632f7c.js", "assets/icoWrapper-26308639.js"])),
        sound: x.lazy(async () => await X(() =>
            import ("./IcoSound-a068b24c.js"), ["assets/IcoSound-a068b24c.js", "assets/icoWrapper-26308639.js"])),
        stackOverflow: x.lazy(async () => await X(() =>
            import ("./IcoStackOverflow-60708a80.js"), ["assets/IcoStackOverflow-60708a80.js", "assets/icoWrapper-26308639.js"])),
        star: x.lazy(async () => await X(() =>
            import ("./IcoStar-bdb9544a.js"), ["assets/IcoStar-bdb9544a.js", "assets/icoWrapper-26308639.js"])),
        vue: x.lazy(async () => await X(() =>
            import ("./IcoVue-0e9f95e6.js"), ["assets/IcoVue-0e9f95e6.js", "assets/icoWrapper-26308639.js"])),
        webPack: x.lazy(async () => await X(() =>
            import ("./IcoWebPack-458f7c91.js"), ["assets/IcoWebPack-458f7c91.js", "assets/icoWrapper-26308639.js"])),
        whatsapp: x.lazy(async () => await X(() =>
            import ("./IcoWhatsapp-9a27c1ea.js"), ["assets/IcoWhatsapp-9a27c1ea.js", "assets/icoWrapper-26308639.js"]))
    })),
    Fe = ({
        name: t,
        gradient: e,
        compStyle: n
    }) => {
        const i = O0.get(t);
        return i ? m.jsx(x.Suspense, {
            children: m.jsx(i, {
                compStyle: n,
                gradient: e
            })
        }) : null
    };
b.figure.attrs(({
    gradient: t
}) => ({
    "--gradient": `${t}`
}))
`
  ${t=>null}
  svg {
    fill: url(#var(--gradient));
    display: block;
  }
`;
const I0 = "MainScrollingElement",
    dm = (t, e) => {
        e += `;display: inline-block;
        white-space: nowrap;
        postion: fixed;
    `;
        const n = document.createElement("div");
        n.setAttribute("style", e), n.textContent = t, document.body.append(n);
        const i = n.offsetWidth;
        return document.body.removeChild(n), i
    },
    D0 = () => {
        const t = window.getComputedStyle(document.body).getPropertyValue("font-size").match(/\d+/g);
        return t == null ? 16 : Number(t[0])
    },
    A0 = () => window.matchMedia("(min-width: 720px)").matches ? 8 : 2,
    Rn = t => {
        const e = Number(t.match(/\d+/g));
        return Number(e)
    },
    N0 = Rn,
    vc = t => {
        t.indexOf("/") === 0 && (t = t.substring(1));
        const e = document.getElementById(t || "home"),
            n = document.getElementById(I0);
        if (e == null || n == null) return;
        const i = e.offsetTop;
        return n.scrollTop = i, i
    },
    ke = (t, ...e) => {
        const n = ["top", "bottom", "right", "left"];
        let i = "position: absolute; content: '';";
        return n.forEach(r => {
            e != null && e.includes(r) || (i += `${r}: ${t}em;`)
        }), i
    },
    F0 = function() {
        let t = -1;
        const e = new Map;
        return {
            call: o => {
                e.forEach((s, l) => {
                    var a;
                    (a = e.get(l)) == null || a.item(o)
                })
            },
            add: (o, s = !1) => (++t, e.set(t, {
                item: o,
                debug: s
            }), t),
            remove: o => {
                e.delete(o)
            }
        }
    },
    fm = (t, e, n = 100) => {
        let i = !1;
        const r = new Map;
        let o = null,
            s = 0,
            l = 0;
        const a = function(f) {
                const d = e(f);
                r.forEach((v, y) => {
                    var w;
                    (w = r.get(y)) == null || w.item(d)
                })
            },
            u = function(f) {
                const d = Date.now();
                o && clearTimeout(o), o = window.setTimeout(() => a(f), n), s === 0 ? s = d : d - s > n && (a(f), clearTimeout(o), o = null, s = d)
            },
            c = () => {
                i = t(u), i && window.removeEventListener("click", c, !0)
            };
        return window.addEventListener("click", c, !0), c(), (f, d = !1) => (c(), typeof f == "number" ? (r.delete(f), f) : (r.set(l, {
            item: f,
            debug: d
        }), ++l, l - 1))
    },
    hm = (t, e = 1) => {
        const n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return n == null ? "rgba(0, 0, 0)" : `rgba(${parseInt(n[1],16)}, ${parseInt(n[2],16)}, ${parseInt(n[3],16)}, ${e})`
    },
    U0 = {
        background: "#FFFFFF",
        backgroundLight: "#f1f2f6",
        backgroundLighter: "#4d4e48",
        textColor: "#191b1e",
        textSaturated: "#000",
        highlightColor: "#f44336",
        gradientColor: "linear-gradient(90deg,#673ab7,#f44336)",
        danger: "#f04a4a",
        green: "#63ed54",
        blue: "blue",
        hex2Rgb: hm
    },
    as = {
        background: "#191b1e",
        backgroundLight: "#27292d",
        backgroundLighter: "#4d4e48",
        textColor: "#B8BCD1",
        textSaturated: "#fff",
        highlightColor: "#ffde19f0",
        gradientColor: "linear-gradient(90deg, #02f7c5, #ffde19f0);",
        danger: "#f04a4a",
        green: "#63ed54",
        blue: "blue",
        hex2Rgb: hm
    },
    pm = {
        dark: !0,
        colors: as
    },
    mm = {
        backgroundSound: !1,
        clickSound: !1,
        hoverSound: !1,
        switchSound: !1,
        notificationSound: !1
    },
    B0 = "MainScrollingElement",
    W0 = "/assets/new-select-6b0bda97.mp3",
    V0 = "/assets/switch-9ff07937.mp3",
    H0 = "/assets/tap-professional-17483637.mp3",
    yc = x.createContext(pm),
    Xr = x.createContext(mm),
    gm = () => {
        const [t, e] = x.useState({
            scrollTop: 0,
            width: window.innerWidth,
            height: window.innerHeight
        });
        return x.useEffect(() => {
            const n = us(e);
            return () => {
                us(n)
            }
        }, [e]), t
    },
    Q0 = () => {
        const [t, e] = x.useState({
            x: -40,
            y: -40
        });
        return x.useEffect(() => {
            G0(e)
        }, [e]), t
    },
    us = function() {
        let e = null;
        return fm(r => (e = document.getElementById(B0), e ? (e == null || e.addEventListener("scroll", r), window.addEventListener("resize", r), !0) : !1), function() {
            return {
                width: window.innerWidth,
                height: window.innerHeight,
                scrollTop: e != null ? e.scrollTop : 0
            }
        }, 100)
    }(),
    G0 = function() {
        return fm(n => (window.addEventListener("mousemove", n), !0), n => ({
            y: n.y,
            x: n.x
        }))
    }(),
    Y0 = () => {
        const [t, e] = x.useState(A0()), {
            width: n
        } = gm();
        return x.useEffect(() => {
            e(n >= 720 ? 8 : 2)
        }, [n]), t
    },
    X0 = (t, e, n) => {
        const [i, r] = x.useState(Rn(n.size));
        return x.useEffect(() => {
            const o = () => {
                if (t.current == null) return;
                const s = `
                font-family: ${n.name};
                font-weight: ${n.bold};
                font-size: ${n.size}
            `,
                    l = window.getComputedStyle(t.current),
                    a = Rn(l.paddingLeft),
                    u = Rn(l.paddingRight),
                    c = a + u,
                    f = Rn(l.width) - c - 20,
                    d = dm(e || "", s);
                if (f > d) return r(Rn(n.size));
                const v = f / d * Rn(n.size);
                r(v)
            };
            return document.fonts.load(`${n.size} ${n.name}`).then(o).catch(s => {}), o(), window.addEventListener("resize", o), () => window.removeEventListener("resize", o)
        }, [t, n, e]), i
    },
    vm = (t, e = 20, n = !1) => {
        const [i, r] = x.useState(!1);
        return x.useEffect(() => {
            const o = () => {
                    if (t.current == null) return;
                    const {
                        top: l
                    } = t.current.getBoundingClientRect(), {
                        innerHeight: a
                    } = window, u = l > 20 && l < a;
                    r(u)
                },
                s = us(o);
            return o(), () => {
                us(s)
            }
        }, [r, t]), i
    },
    ym = (t, e, n) => {
        const i = x.useContext(Xr);
        x.useEffect(() => {
            if (!t.current) return;
            const r = o => {
                const {
                    target: s
                } = o;
                t.current === s || t.current.contains(s) || !e || (i.clickSound && wm("switchSound"), n(o))
            };
            return document.body.addEventListener("click", r, !0), () => {
                document.body.removeEventListener("click", r, !0)
            }
        }, [t, i, e, n])
    },
    Cn = (t, e = {
        clickSound: !0,
        hoverSound: !0
    }, n = !0) => {
        const i = x.useContext(Xr);
        x.useEffect(() => {
            if (t.current == null) return;
            const r = a => () => {
                    !i[a === "switchSound" ? "clickSound" : a] || !n || wm(a)
                },
                o = r(e.switchSound ? "switchSound" : "clickSound"),
                s = r("hoverSound"),
                l = t.current;
            return (e.clickSound ? ? e.switchSound ? ? !1) && l.addEventListener("click", o), e.hoverSound && l.addEventListener("mouseenter", s), () => {
                (e.clickSound ? ? e.switchSound ? ? !1) && l.removeEventListener("click", o), e.hoverSound && l.removeEventListener("mouseenter", s)
            }
        }, [i, n, e, t])
    },
    wm = t => {
        const e = new Audio(K0[t]);
        e.volume = .7, e.play().catch(n => {})
    },
    K0 = {
        clickSound: W0,
        hoverSound: H0,
        switchSound: V0
    },
    q0 = ({
        text: t,
        visible: e,
        compStyle: n
    }) => {
        const [i, r] = x.useState(-1), [o, s] = x.useState(0);
        return x.useEffect(() => {
            if (!o) {
                setTimeout(() => {
                    s(1)
                }, 2e3);
                return
            }
            const l = () => r(a => e ? a >= t.length ? t.length : (setTimeout(l, 100), a + 1) : -1);
            l()
        }, [r, o, e]), m.jsx(m.Fragment, {
            children: t.split("").map((l, a) => m.jsx(J0, {
                active: i >= a,
                text: l,
                visible: e
            }, a))
        })
    },
    J0 = ({
        text: t,
        compStyle: e,
        active: n
    }) => m.jsx(Z0, {
        active: n,
        compStyle: e,
        children: t
    }),
    Z0 = b.span `
    display: inline-block;
    vertical-align: middle;
    position: relative;
    transition: padding-top .5s;
    ${({compStyle:t,active:e})=>`
$ {
    t ? ? ""
};
padding - top: $ {
    e ? 0 : 1
}
em;
`}
    white-space: pre;
    height: 1em;
    overflow: hidden;
`, Fi = ({
    children: t,
    text: e,
    fit: n,
    compStyle: i
}) => {
    const r = x.useRef(null),
        o = vm(r, 0),
        s = X0(r, e, {
            name: '"LeagueSpartan", "Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif',
            size: "4em",
            bold: "bold"
        });
    return m.jsx(t1, {
        size: s,
        text: e,
        fit: n,
        ref: r,
        compStyle: i,
        children: m.jsx(q0, {
            visible: o,
            text: e
        })
    })
}, e1 = ({
    callback: t
}) => {
    const {
        colors: e
    } = x.useContext(yc), n = () => {
        t != null && setTimeout(t, 1e3)
    };
    return m.jsx(n1, {
        children: m.jsxs(i1, {
            children: [m.jsxs(r1, {
                onClick: n,
                children: [m.jsx(Fe, {
                    name: "next"
                }), m.jsx("span", {
                    children: "Continue"
                })]
            }), m.jsx(xm, {
                time: 1e3,
                zeroGo: !0,
                max: 1,
                callback: n,
                compStyle: o1(e)
            })]
        })
    })
}, xm = ({
    max: t,
    time: e,
    callback: n,
    compStyle: i,
    zeroGo: r
}) => {
    const [o, s] = x.useState(0);
    return x.useEffect(() => {
        let l;
        const a = (u = 0) => {
            if (u > t) {
                n != null && n();
                return
            }
            s(u), l = window.setTimeout(() => {
                a(u + 1)
            }, e)
        };
        return a(), () => {
            l && window.clearTimeout(l)
        }
    }, [n, s, t, e]), m.jsx(s1, {
        compStyle: i,
        children: m.jsx(l1, {
            position: o,
            children: Array(t + 1).fill(0).map((l, a) => m.jsx(a1, {
                active: o === a,
                children: m.jsx("span", {
                    children: r && t - a === 0 ? "0_0" : t - a
                })
            }, a))
        })
    })
}, t1 = b.h1.attrs(({
    fit: t,
    size: e
}) => ({
    style: {
        fontSize: t ? `${e}em` : "3.2em"
    }
}))
`
    font-size: 3.4em; font-weight: bold; padding: 0;
    position: relative; line-height: 1;
    ${({theme:{colors:t}})=>`
color: $ {
    t.textColor
};
`}
    ${({fit:t,size:e,compStyle:n})=>`

$ {
    n
}
`}
`, n1 = b.div `
    position: absolute; left: 0; right: 0; width: 90%; bottom: 0.5em; z-index: 9; margin: 0 auto;
    font-weight: bold; font-size: 0.85em; color: #2a313b; padding: 0 1em; max-width: 140em;
`, i1 = b.div `
`, r1 = b.button `
    display: block; color: #000; padding: 0.25em; width: 4em; height: 4em; border-radius: 20em;
    margin: 0 auto;

    background: ${as.gradientColor};

    font-size: 1em; color: #fff; position: relative; bottom: 3em;
    span {
        display: block; border-radius: 0.45em; font-weight: bold; position: absolute; top: calc(100% + 1em);
        left: -10em; right: -10em; width: max-content; margin: 0 auto;
    }

    &::before {
        content: ''; position: absolute;
        // eslint-disable-next-line colon expected
        ${ke(.3)}; 
        background: ${as.background};
        border-radius: 20em;
    }

    @media (max-width: 720px) { font-size: 0.85em; }
    svg { position: relative; padding: 1em; fill: #fff; }
`, o1 = t => `
    width: 3em; font-size: 2em; position: fixed; top: 1em; right: 1em; overflow: hidden;
    ul {
        li { 
            font-family: monospace;
            span { color: #fff; }
            span::before { box-shadow: none; border: 1px solid ${t.backgroundLight}; border-radius: 0.25em; }
        }
    }
`, s1 = b.div `
    width: 2em;
    height: max-content;
    overflow: hidden;
    display: inline-block;
    &::before {
        content: '';
        padding-top: 100%;
        display: block;
    }
    ${({compStyle:t})=>`
$ {
    t ? ? ""
}
`}
`, l1 = b.ul.attrs(({
    position: t
}) => ({
    style: {
        top: ` -${t*100}%`
    }
}))
`
    position: absolute;
    ${ke(0)};
    transition: top .8s;
    ${({position:t})=>""}
`, a1 = b.li.attrs(({
    active: t
}) => ({
    style: {
        "--scale-active": t ? "1" : "0"
    }
}))
`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &::before {
        content: '';
        padding-top: 100%;
        display: block;
    }
    span {

        transform: scaleX(var(--scale-active));
        transition: transform .5s;

        &::before {
            position: absolute;
            border-radius: .4em;
            ${ke(.2)};
            content: '';
        }

        position: absolute;
        ${ke(0)};
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 5;
    }

    ${({active:t})=>""}
    
`;
b.div `
    position: absolute;
    background-color: #444;
    transition: all .4s ease-in-out;
    ${({style:t})=>`
bottom: $ {
    t.bottom
}
px;
right: $ {
    t.right
}
px;
top: $ {
    t.left
}
px;
left: $ {
    t.top
}
px;
display: $ {
    t.visible ? "block" : "none"
};
$ {
    t.compStyle
}
`}
`;
b.div `

`;
const ei = b.div `
    border-radius: ${({radius:t})=>typeof t=="number"?`
$ {
    t
}
em `:t==="box"?"0.5em":"50%"};

    ${({compStyle:t})=>t??""}
`, Ui = ({
    children: t,
    id: e
}) => {
    const n = Y0();
    return m.jsx(d1, {
        margin: n,
        id: e,
        children: t
    })
}, u1 = .25, c1 = `
    position: relative;
    width: 100%;
    height: max-content;
`;
b.div `
    position: relative;
    z-index: 1;
`;
b.div `
    ${c1};
    ${({compStyle:t})=>t??""}
`;
b(ei)
``;
const tf = .2;
b.div `
    height: ${u1}em;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    ${({index:t})=>{switch(t){case 1:return`
left: auto;
height: auto;
bottom: 0;
width: 50 % ;
`;case 2:return`
top: auto;
bottom: 0;
`;case 3:return`
right: auto;
bottom: 0;
width: 50 % ;
height: auto;
`}}};

    ${t=>t.borderStyle!=null?t.borderStyle(t):""}
`;
b.div `
    background-color: #03a9f4;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    ${({index:t,focused:e,delay:n,ratio:i,radius:r})=>{const o=Number(i.toFixed(2)),s=tf*(t%2===0?1:r==="circle"?0:o);let l=`--ratio: $ {
    s
};
transition: left $ {
    s
}
s, right $ {
    s
}
s, bottom $ {
    s
}
s, top $ {
    s
}
s;
transition - delay: $ {
    n * tf
}
s;
`;if(!e)switch(t){case 0:l+="right: 100%;",l+=r==="circle"?"bottom: 100%;":"";break;case 1:l+="bottom: 100%;";break;case 2:l+="left: 100%;",l+=r==="circle"?"top: 100%;":"";break;case 3:l+="top: 100%;";break}return l}};
`;
const d1 = b.div `
    min-height: 60vh;
    position: relative;
    align-items: center;
    display: flex;
    margin: 0 ${({margin:t})=>t}em;
    padding: 2em 0;
    z-index: 1;
`,
    km = [{
        name: "ReactJs",
        value: 100,
        iconName: "react"
    }, {
        name: "Javascript",
        value: 100,
        iconName: "js",
        lower: !0
    }, {
        name: "TypeScript",
        value: 95,
        iconName: "ts",
        lower: !0
    }, {
        name: "HTML 5",
        value: 95,
        iconName: "html5"
    }, {
        name: "CSS",
        value: 90,
        iconName: "css"
    }, {
        name: "NodeJs",
        value: 80,
        iconName: "node"
    }],
    f1 = {
        reactjs: {
            name: "ReactJs",
            value: 80,
            iconName: "react"
        },
        javascript: {
            name: "Javascript",
            value: 95,
            iconName: "js",
            lower: !0
        },
        typescript: {
            name: "TypeScript",
            value: 95,
            iconName: "ts",
            lower: !0
        },
        html: {
            name: "HTML 5",
            value: 95,
            iconName: "html5"
        },
        scss: {
            name: "Scss",
            value: 90,
            iconName: "sass"
        },
        nodejs: {
            name: "NodeJs",
            value: 60,
            iconName: "node"
        },
        mysql: {
            name: "Scss",
            value: 90,
            iconName: "sass"
        },
        php: {
            name: "Php",
            value: 60,
            iconName: "php"
        },
        laravel: {
            name: "Laravel",
            value: 60,
            iconName: "php"
        },
        webpack: {
            name: "Webpack",
            value: 60,
            iconName: "webPack"
        },
        vuejs: {
            name: "VueJs",
            value: 60,
            iconName: "vue"
        },
        canjs: {
            name: "CanJs",
            value: 60,
            iconName: "canJs"
        }
    },
    h1 = [{
        name: "Github",
        iconName: "github",
        link: "https://github.com/edwindijas"
    }, {
        name: "LinkedIn",
        iconName: "linkedIn",
        link: "https://www.linkedin.com/in/edwinchiwona/"
    }, {
        name: "StackOverflow",
        iconName: "stackOverflow",
        link: "https://stackoverflow.com/users/2756931/edwin-dijas-chiwona"
    }],
    p1 = "/assets/profile-9a92ddf2.png",
    m1 = b.div `
    position: absolute;
    top: 0.25em;
    left: 0.25em;
    bottom: 0.25em;
    right: 0.25em;
    border-radius: 0.5em 0 0.5em 0.5em;
    background-color: #eee;
    overflow: hidden;

    &::before {
        ${ke(.35)};
        border: 0.15em solid #fff;
        bottom: 0;
        border-bottom: 0;
        border-radius: 0.35em 0em 0 0;
    }

    &::after {
        position: absolute;
        content: '';
        left: 0;
        bottom: 0;
        height: 0.15em;
    }

    ${({theme:{colors:t}})=>`
background - color: $ {
    t.backgroundLight
}; &
::before {
    border - color: $ {
        t.background
    };
}
`}

    ${({value:t,noBorder:e})=>` &
::after {
    width: $ {
        t
    } % ;
    background: orange;
}

$ {
    e ? `
            &::after, &::before {
                display: none;
            }
        ` : ""
}

`}

`, g1 = b.div `
    padding-top: 100%;
`, v1 = b.div `
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    ${({lower:t,compStyle:e})=>`
padding: $ {
    t ? "3em 2em 2em 3em" : "2em"
};
$ {
    e ? ? ""
}
`}
`, y1 = b.ul `
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0.25em 0;
`, w1 = b.li `
    display: inline-block;
    text-align: center;
    width: 33.3%;
    position: relative;
`, x1 = b.div `
    width: 100%;
    max-width: 60em;
    margin: 0 auto;
`, k1 = b.p `
    margin-bottom: 2em;
    font-size: 1.2em;
    line-height: 1.5;
`, S1 = b.div `
    height: 1.5em;
`, _1 = b.figure `
    border-radius: .5em;
    max-width: 100%;
    position: relative;
    overflow: hidden;
    margin-bottom: 1em;
    &::before {
        content: '';
        padding-top: 100%;
        display: block;
    }

    &::after {
        ${ke(.2)};
        z-index: 2;
        opacity: .6;
        backdrop-filter: grayscale(1);
        border-radius: 0.4em;
    }


    ${({theme:{colors:t}})=>` &
    ::after {
        background: $ {
            t.hightlightColor
        };
    }
background: $ {
    t.gradientColor
};
opacity: 0.7;
`}

    &:hover {
        &::after {
            opacity: 0;
        }
        opacity: 1;
    }
`, b1 = b.div `
    display: flex;
    width: 100%;
    justify-content: space-between;
    > div:first-child {
        width: 100%;
        max-width: 30em;
    }
    position: relative;
    flex-wrap: wrap;
   
`, C1 = b.p `
    position: absolute;
    bottom: 0.5em;
    left: 0;
    right: 0;
    font-size: 0.85em;
    line-height: 2em;
`, E1 = b.div `
    width: 100%;
    max-width: 25em;
    margin-top: 1em;
    @media (max-width: 30em) {
        margin: 2em auto;
        max-width: 100%;
    }

    @media (max-width: 50em) {
        max-width: 30em;
    }

`, P1 = b.button `
    display: block;
    height: 3.5em;
    width: 20em;
    font-size: 1rem;
    
    background: none;
    position: relative;
    margin-bottom: 2em;
    max-width: 100%;

   

    span {
        position: relative;
        z-index: 4;
        text-align: center;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }

    &::before, &::after {
        border-radius: 0.25em;
    }

    @media (max-width: 30em) {
        margin: 0 auto 2em;
        &::before, &::after {
            border-radius: 3em;
        }
    }

    &::before{
        ${ke(0)}
    }

    &::after{
        ${ke(.2)}
    }

    span {

    }

    ${({theme:{colors:t}})=>`
span {
    background - image: $ {
        t.gradientColor
    };
}

&
::before {
    background: $ {
        t.gradientColor
    };
}

&
::after {
    background: $ {
        t.background
    };
}
}
`}

`, Ae = {
    Experience: m1,
    FixSize: g1,
    FigureWrap: E1,
    Main: b1,
    IconWrapper: v1,
    EleExp: y1,
    Figure: _1,
    Li: w1,
    Wrap: x1,
    Par: k1,
    Space: S1,
    LabelWrapper: C1,
    ContactButton: P1
}, z1 = () => {
    const t = () => {
        console.log("About"), vc("/contact")
    };
    return m.jsx(Ui, {
        id: "about",
        children: m.jsx(Ae.Wrap, {
            children: m.jsxs(Ae.Main, {
                children: [m.jsxs("div", {
                    children: [m.jsxs(Fi, {
                        text: "About Edwin",
                        fit: !0,
                        children: ["About ", m.jsx("span", {
                            children: "Edwin"
                        })]
                    }), m.jsx(Ae.Space, {}), m.jsx(Ae.Par, {
                        children: "Experienced frontend engineer with over seven years of relevant experience developing saas applications. Excellent reputation for resolving problems and improving customer satisfaction."
                    }), m.jsx(Ae.Par, {
                        children: "In 2012, I started my career as a website engineer. I have gained much experience in software engineering, delivering high-quality reactive applications during then and now. I worked with teams highly skilled individuals delivering enterprise-grade software solutions."
                    }), m.jsx(Ae.Par, {
                        children: "For my stack, I mainly use React, Redux, Node, and styled-components. Other skills and tools are but are not limited to  PHP, Loopback 4, ExpressJs, Linux, Networking, AWS, , git, Jira, and Git."
                    }), m.jsx(Ae.ContactButton, {
                        onClick: t,
                        children: m.jsx("span", {
                            children: "Get in touch"
                        })
                    })]
                }), m.jsxs(Ae.FigureWrap, {
                    children: [m.jsx(Ae.Figure, {
                        children: m.jsx("div", {
                            className: "absolute top-0 left-0 w-full h-full p-2",
                            children: m.jsx("img", {
                                alt: "",
                                className: "bg-white rounded-lg",
                                src: p1
                            })
                        })
                    }), m.jsx($1, {})]
                })]
            })
        })
    })
}, $1 = () => m.jsx(Ae.EleExp, {
    children: km.map((t, e) => m.jsxs(Ae.Li, {
        children: [m.jsx(Ae.FixSize, {}), m.jsx(Sm, { ...t
        })]
    }, e))
}), Sm = ({
    name: t,
    lower: e,
    value: n,
    iconName: i,
    useLabel: r,
    compStyle: o,
    noBorder: s
}) => m.jsxs(Ae.Experience, {
    value: n,
    noBorder: s,
    children: [m.jsx(Ae.FixSize, {}), m.jsx(Ae.IconWrapper, {
        lower: e,
        compStyle: o,
        children: m.jsx(Fe, {
            name: i
        })
    }), (r === void 0 || r) && m.jsx(Ae.LabelWrapper, {
        children: t
    })]
}), yo = ({
    label: t,
    inputType: e,
    passValue: n,
    duo: i,
    onChange: r,
    error: o
}) => {
    const [s, l] = x.useState(""), [, a] = x.useState(!1), u = x.useRef(null), c = x.useRef(null), f = () => {
        a(!0)
    }, d = () => {
        a(!1)
    }, v = y => {
        const {
            value: w
        } = y.target;
        l(w), r == null || r(y)
    };
    return x.useEffect(() => {
        if (l(n ? ? ""), u.current != null) {
            u.current.value = n ? ? "";
            return
        }
        c.current != null && (c.current.value = n ? ? "")
    }, [n]), m.jsxs(M1, {
        duo: i,
        children: [m.jsxs(I1, {
            children: [m.jsx(O1, {
                active: s.trim() !== "",
                children: t
            }), e === "text" && m.jsx(_m, {
                onFocus: f,
                onBlur: d,
                ref: u,
                onChange: v
            }), e === "textarea" && m.jsx(D1, {
                as: "textarea",
                onFocus: f,
                onBlur: d,
                ref: c,
                onChange: v
            })]
        }), o && m.jsx(j1, {
            children: o
        })]
    })
}, er = ({
    label: t,
    compStyle: e,
    value: n,
    onChange: i
}) => {
    const r = x.useRef(null),
        o = x.useRef(null);
    Cn(r, {
        switchSound: !0,
        hoverSound: !0
    });
    const s = l => {
        i == null || i()
    };
    return m.jsx(T1, {
        ref: o,
        compStyle: e,
        children: m.jsxs("label", {
            children: [t, m.jsx("input", {
                type: "hidden"
            }), m.jsx(R1, {
                onClick: s,
                as: "button",
                ref: r,
                className: "switch",
                children: m.jsx(L1, {
                    active: n,
                    className: "circle"
                })
            })]
        })
    })
}, T1 = b.div `
    & > label {
        display: flex;
        padding: 0.5em;
        align-items: center;
        justify-content: space-between;
    }

    ${({compStyle:t})=>t}
`, M1 = b.div `
    margin-bottom: 1.5em;
    border-radius: 0.5em;
    ${({duo:t})=>`
$ {
    t ? `
            display: inline-block;
            vertical-align: top;
            width: calc(50% - 0.5em);
            &:first-child {
                margin-right: 1em;
            }

        ` : ""
}
`}

    @media (max-width: 720px) {
        display: block;
        margin: 0 0 1em;
        width: 100%;
    }
`, R1 = b(ei)
`
    width: 3.5em;
    height: 1.75em;
    margin-left: 0.5em;
    border-radius: 1em;
    box-shadow: none;
    position: relative;
    ${({theme:{colors:t}})=>` &
::before {
    content: '';
    $ {
        ke(-.1)
    };
    border - radius: 1e m;
    background: $ {
        t.gradientColor
    };
    opacity: 0.5;
}

&
::after {
    content: '';
    border - radius: 1e m;
    $ {
        ke(0)
    }
    background - color: $ {
        t.background
    };
}

`}

`, L1 = b.div `
    height: 100%;
    width: 50%;
    border-radius: 50%;
    background-color: #000;
    padding: 0.15em;
    background-clip: content-box;
    position: relative;
    transition: left 0.2s, opacity 0.2s, background 0.2s;
    background-clip: content-box;
    z-index: 5;

    ${({theme:{colors:t}})=>`
border: 2 px solid $ {
    t.background
};
// Todo 
background: $ {
    t.textColor
};
`}

    ${({active:t})=>`
left: $ {
    t ? 50 : 0
} % ;
opacity: $ {
    t ? 1 : .5
};
--active: $ {
    t ? "initial" : ""
};
`};
`, j1 = b.p `
    padding: 0.75em;

    &::first-letter {
        text-transform: capitalize;
    }

    ${({theme:{colors:t}})=>`
color: $ {
    t.danger
};
`}
`, O1 = b.span `
    height: 0;
    line-height: 3em;
    padding: 0 1em;
    display: block;
    position: relative;
    transition: bottom .4s, font-size 0.4s;
    &::first-letter {
        text-transform: capitalize;
        font-size: 1.2em;
    }

    ${({theme:{colors:t}})=>`
color: $ {
    t.highlightColor
};
`}

    ${({active:t})=>`
font - size: $ {
    t ? .85 : 1
}
em;
bottom: $ {
    t ? 1.5 : 0
}
em;
font - weight: $ {
    t ? "bold" : "normnal"
};

`}
`, I1 = b.label `
    display: block;
    border-radius: 0.5em;
    ${({theme:{colors:t}})=>`
background - color: $ {
    t.hex2Rgb(t.backgroundLight, .8)
};
`}
`, _m = b.input `
    border: 0;
    height: 3em;
    width: 100%;
    padding: 0 1em;
    font-size: 1em;
    background: none;
    outline: none;
    border-radius: 0.5em;
    ${({theme:{colors:t}})=>`
color: $ {
    t.textColor
};
`}
`, D1 = b(_m)
`
    border: 0;
    min-height: 12em;
    padding: 1em;
    resize: none;
`;

function Pt(t) {
    for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
    throw Error("[Immer] minified error nr: " + t + (n.length ? " " + n.map(function(r) {
        return "'" + r + "'"
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
}

function ji(t) {
    return !!t && !!t[ut]
}

function Gn(t) {
    var e;
    return !!t && (function(n) {
        if (!n || typeof n != "object") return !1;
        var i = Object.getPrototypeOf(n);
        if (i === null) return !0;
        var r = Object.hasOwnProperty.call(i, "constructor") && i.constructor;
        return r === Object || typeof r == "function" && Function.toString.call(r) === H1
    }(t) || Array.isArray(t) || !!t[cf] || !!(!((e = t.constructor) === null || e === void 0) && e[cf]) || wc(t) || xc(t))
}

function Ar(t, e, n) {
    n === void 0 && (n = !1), Bi(t) === 0 ? (n ? Object.keys : Cc)(t).forEach(function(i) {
        n && typeof i == "symbol" || e(i, t[i], t)
    }) : t.forEach(function(i, r) {
        return e(r, i, t)
    })
}

function Bi(t) {
    var e = t[ut];
    return e ? e.i > 3 ? e.i - 4 : e.i : Array.isArray(t) ? 1 : wc(t) ? 2 : xc(t) ? 3 : 0
}

function iu(t, e) {
    return Bi(t) === 2 ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e)
}

function A1(t, e) {
    return Bi(t) === 2 ? t.get(e) : t[e]
}

function bm(t, e, n) {
    var i = Bi(t);
    i === 2 ? t.set(e, n) : i === 3 ? t.add(n) : t[e] = n
}

function N1(t, e) {
    return t === e ? t !== 0 || 1 / t == 1 / e : t != t && e != e
}

function wc(t) {
    return W1 && t instanceof Map
}

function xc(t) {
    return V1 && t instanceof Set
}

function Ln(t) {
    return t.o || t.t
}

function kc(t) {
    if (Array.isArray(t)) return Array.prototype.slice.call(t);
    var e = Q1(t);
    delete e[ut];
    for (var n = Cc(e), i = 0; i < n.length; i++) {
        var r = n[i],
            o = e[r];
        o.writable === !1 && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (e[r] = {
            configurable: !0,
            writable: !0,
            enumerable: o.enumerable,
            value: t[r]
        })
    }
    return Object.create(Object.getPrototypeOf(t), e)
}

function Sc(t, e) {
    return e === void 0 && (e = !1), _c(t) || ji(t) || !Gn(t) || (Bi(t) > 1 && (t.set = t.add = t.clear = t.delete = F1), Object.freeze(t), e && Ar(t, function(n, i) {
        return Sc(i, !0)
    }, !0)), t
}

function F1() {
    Pt(2)
}

function _c(t) {
    return t == null || typeof t != "object" || Object.isFrozen(t)
}

function Bt(t) {
    var e = G1[t];
    return e || Pt(18, t), e
}

function nf() {
    return Nr
}

function Fl(t, e) {
    e && (Bt("Patches"), t.u = [], t.s = [], t.v = e)
}

function cs(t) {
    ru(t), t.p.forEach(U1), t.p = null
}

function ru(t) {
    t === Nr && (Nr = t.l)
}

function rf(t) {
    return Nr = {
        p: [],
        l: Nr,
        h: t,
        m: !0,
        _: 0
    }
}

function U1(t) {
    var e = t[ut];
    e.i === 0 || e.i === 1 ? e.j() : e.g = !0
}

function Ul(t, e) {
    e._ = e.p.length;
    var n = e.p[0],
        i = t !== void 0 && t !== n;
    return e.h.O || Bt("ES5").S(e, t, i), i ? (n[ut].P && (cs(e), Pt(4)), Gn(t) && (t = ds(e, t), e.l || fs(e, t)), e.u && Bt("Patches").M(n[ut].t, t, e.u, e.s)) : t = ds(e, n, []), cs(e), e.u && e.v(e.u, e.s), t !== Cm ? t : void 0
}

function ds(t, e, n) {
    if (_c(e)) return e;
    var i = e[ut];
    if (!i) return Ar(e, function(l, a) {
        return of(t, i, e, l, a, n)
    }, !0), e;
    if (i.A !== t) return e;
    if (!i.P) return fs(t, i.t, !0), i.t;
    if (!i.I) {
        i.I = !0, i.A._--;
        var r = i.i === 4 || i.i === 5 ? i.o = kc(i.k) : i.o,
            o = r,
            s = !1;
        i.i === 3 && (o = new Set(r), r.clear(), s = !0), Ar(o, function(l, a) {
            return of(t, i, r, l, a, n, s)
        }), fs(t, r, !1), n && t.u && Bt("Patches").N(i, n, t.u, t.s)
    }
    return i.o
}

function of (t, e, n, i, r, o, s) {
    if (ji(r)) {
        var l = ds(t, r, o && e && e.i !== 3 && !iu(e.R, i) ? o.concat(i) : void 0);
        if (bm(n, i, l), !ji(l)) return;
        t.m = !1
    } else s && n.add(r);
    if (Gn(r) && !_c(r)) {
        if (!t.h.D && t._ < 1) return;
        ds(t, r), e && e.A.l || fs(t, r)
    }
}

function fs(t, e, n) {
    n === void 0 && (n = !1), !t.l && t.h.D && t.m && Sc(e, n)
}

function Bl(t, e) {
    var n = t[ut];
    return (n ? Ln(n) : t)[e]
}

function sf(t, e) {
    if (e in t)
        for (var n = Object.getPrototypeOf(t); n;) {
            var i = Object.getOwnPropertyDescriptor(n, e);
            if (i) return i;
            n = Object.getPrototypeOf(n)
        }
}

function ou(t) {
    t.P || (t.P = !0, t.l && ou(t.l))
}

function Wl(t) {
    t.o || (t.o = kc(t.t))
}

function su(t, e, n) {
    var i = wc(e) ? Bt("MapSet").F(e, n) : xc(e) ? Bt("MapSet").T(e, n) : t.O ? function(r, o) {
        var s = Array.isArray(r),
            l = {
                i: s ? 1 : 0,
                A: o ? o.A : nf(),
                P: !1,
                I: !1,
                R: {},
                l: o,
                t: r,
                k: null,
                o: null,
                j: null,
                C: !1
            },
            a = l,
            u = lu;
        s && (a = [l], u = or);
        var c = Proxy.revocable(a, u),
            f = c.revoke,
            d = c.proxy;
        return l.k = d, l.j = f, d
    }(e, n) : Bt("ES5").J(e, n);
    return (n ? n.A : nf()).p.push(i), i
}

function B1(t) {
    return ji(t) || Pt(22, t),
        function e(n) {
            if (!Gn(n)) return n;
            var i, r = n[ut],
                o = Bi(n);
            if (r) {
                if (!r.P && (r.i < 4 || !Bt("ES5").K(r))) return r.t;
                r.I = !0, i = lf(n, o), r.I = !1
            } else i = lf(n, o);
            return Ar(i, function(s, l) {
                r && A1(r.t, s) === l || bm(i, s, e(l))
            }), o === 3 ? new Set(i) : i
        }(t)
}

function lf(t, e) {
    switch (e) {
        case 2:
            return new Map(t);
        case 3:
            return Array.from(t)
    }
    return kc(t)
}
var af, Nr, bc = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
    W1 = typeof Map < "u",
    V1 = typeof Set < "u",
    uf = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
    Cm = bc ? Symbol.for("immer-nothing") : ((af = {})["immer-nothing"] = !0, af),
    cf = bc ? Symbol.for("immer-draftable") : "__$immer_draftable",
    ut = bc ? Symbol.for("immer-state") : "__$immer_state",
    H1 = "" + Object.prototype.constructor,
    Cc = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
    } : Object.getOwnPropertyNames,
    Q1 = Object.getOwnPropertyDescriptors || function(t) {
        var e = {};
        return Cc(t).forEach(function(n) {
            e[n] = Object.getOwnPropertyDescriptor(t, n)
        }), e
    },
    G1 = {},
    lu = {
        get: function(t, e) {
            if (e === ut) return t;
            var n = Ln(t);
            if (!iu(n, e)) return function(r, o, s) {
                var l, a = sf(o, s);
                return a ? "value" in a ? a.value : (l = a.get) === null || l === void 0 ? void 0 : l.call(r.k) : void 0
            }(t, n, e);
            var i = n[e];
            return t.I || !Gn(i) ? i : i === Bl(t.t, e) ? (Wl(t), t.o[e] = su(t.A.h, i, t)) : i
        },
        has: function(t, e) {
            return e in Ln(t)
        },
        ownKeys: function(t) {
            return Reflect.ownKeys(Ln(t))
        },
        set: function(t, e, n) {
            var i = sf(Ln(t), e);
            if (i != null && i.set) return i.set.call(t.k, n), !0;
            if (!t.P) {
                var r = Bl(Ln(t), e),
                    o = r == null ? void 0 : r[ut];
                if (o && o.t === n) return t.o[e] = n, t.R[e] = !1, !0;
                if (N1(n, r) && (n !== void 0 || iu(t.t, e))) return !0;
                Wl(t), ou(t)
            }
            return t.o[e] === n && (n !== void 0 || e in t.o) || Number.isNaN(n) && Number.isNaN(t.o[e]) || (t.o[e] = n, t.R[e] = !0), !0
        },
        deleteProperty: function(t, e) {
            return Bl(t.t, e) !== void 0 || e in t.t ? (t.R[e] = !1, Wl(t), ou(t)) : delete t.R[e], t.o && delete t.o[e], !0
        },
        getOwnPropertyDescriptor: function(t, e) {
            var n = Ln(t),
                i = Reflect.getOwnPropertyDescriptor(n, e);
            return i && {
                writable: !0,
                configurable: t.i !== 1 || e !== "length",
                enumerable: i.enumerable,
                value: n[e]
            }
        },
        defineProperty: function() {
            Pt(11)
        },
        getPrototypeOf: function(t) {
            return Object.getPrototypeOf(t.t)
        },
        setPrototypeOf: function() {
            Pt(12)
        }
    },
    or = {};
Ar(lu, function(t, e) {
    or[t] = function() {
        return arguments[0] = arguments[0][0], e.apply(this, arguments)
    }
}), or.deleteProperty = function(t, e) {
    return or.set.call(this, t, e, void 0)
}, or.set = function(t, e, n) {
    return lu.set.call(this, t[0], e, n, t[0])
};
var Y1 = function() {
        function t(n) {
            var i = this;
            this.O = uf, this.D = !0, this.produce = function(r, o, s) {
                if (typeof r == "function" && typeof o != "function") {
                    var l = o;
                    o = r;
                    var a = i;
                    return function(w) {
                        var _ = this;
                        w === void 0 && (w = l);
                        for (var p = arguments.length, h = Array(p > 1 ? p - 1 : 0), g = 1; g < p; g++) h[g - 1] = arguments[g];
                        return a.produce(w, function(k) {
                            var C;
                            return (C = o).call.apply(C, [_, k].concat(h))
                        })
                    }
                }
                var u;
                if (typeof o != "function" && Pt(6), s !== void 0 && typeof s != "function" && Pt(7), Gn(r)) {
                    var c = rf(i),
                        f = su(i, r, void 0),
                        d = !0;
                    try {
                        u = o(f), d = !1
                    } finally {
                        d ? cs(c) : ru(c)
                    }
                    return typeof Promise < "u" && u instanceof Promise ? u.then(function(w) {
                        return Fl(c, s), Ul(w, c)
                    }, function(w) {
                        throw cs(c), w
                    }) : (Fl(c, s), Ul(u, c))
                }
                if (!r || typeof r != "object") {
                    if ((u = o(r)) === void 0 && (u = r), u === Cm && (u = void 0), i.D && Sc(u, !0), s) {
                        var v = [],
                            y = [];
                        Bt("Patches").M(r, u, v, y), s(v, y)
                    }
                    return u
                }
                Pt(21, r)
            }, this.produceWithPatches = function(r, o) {
                if (typeof r == "function") return function(u) {
                    for (var c = arguments.length, f = Array(c > 1 ? c - 1 : 0), d = 1; d < c; d++) f[d - 1] = arguments[d];
                    return i.produceWithPatches(u, function(v) {
                        return r.apply(void 0, [v].concat(f))
                    })
                };
                var s, l, a = i.produce(r, o, function(u, c) {
                    s = u, l = c
                });
                return typeof Promise < "u" && a instanceof Promise ? a.then(function(u) {
                    return [u, s, l]
                }) : [a, s, l]
            }, typeof(n == null ? void 0 : n.useProxies) == "boolean" && this.setUseProxies(n.useProxies), typeof(n == null ? void 0 : n.autoFreeze) == "boolean" && this.setAutoFreeze(n.autoFreeze)
        }
        var e = t.prototype;
        return e.createDraft = function(n) {
            Gn(n) || Pt(8), ji(n) && (n = B1(n));
            var i = rf(this),
                r = su(this, n, void 0);
            return r[ut].C = !0, ru(i), r
        }, e.finishDraft = function(n, i) {
            var r = n && n[ut],
                o = r.A;
            return Fl(o, i), Ul(void 0, o)
        }, e.setAutoFreeze = function(n) {
            this.D = n
        }, e.setUseProxies = function(n) {
            n && !uf && Pt(20), this.O = n
        }, e.applyPatches = function(n, i) {
            var r;
            for (r = i.length - 1; r >= 0; r--) {
                var o = i[r];
                if (o.path.length === 0 && o.op === "replace") {
                    n = o.value;
                    break
                }
            }
            r > -1 && (i = i.slice(r + 1));
            var s = Bt("Patches").$;
            return ji(n) ? s(n, i) : this.produce(n, function(l) {
                return s(l, i)
            })
        }, t
    }(),
    ct = new Y1,
    X1 = ct.produce;
ct.produceWithPatches.bind(ct);
ct.setAutoFreeze.bind(ct);
ct.setUseProxies.bind(ct);
ct.applyPatches.bind(ct);
ct.createDraft.bind(ct);
ct.finishDraft.bind(ct);
const En = X1,
    Ke = {
        InternalWrap: b.div `
        width: 100%;
        max-width: 60em;
        margin: 0 auto;
    `,
        Form: b.form `
        width: 100%;
        max-width: 38em
    `,
        Button: b(ei)
        `
        padding: 1em 2em;
        display: block; margin: 1em auto 0; width: calc(50% - 1em); position: relative; font-weight: bold;

        &, &::before { border-radius: 0.45em; }
        span {
            display: block; text-align: center; color: transparent; position: relative; background-clip: text;
            -webkit-background-clip: text
        }

        @media screen and (max-width: 30em) {  width: 100%; }

        ${({theme:{colors:t}})=>` &
        ,
        & > span {
            background - image: $ {
                t.gradientColor
            };
        }

        color: $ {
            t.textSaturated
        };

        &
        ::before {
            $ {
                ke(.15)
            };
            background - color: $ {
                t.background
            };
        }

        &
        : first - child {
                background: none;
                background - color: $ {
                    t.backgroundLight
                };
            }

            &
            : first - child > span {
                background - image: linear - gradient(90 deg, $ {
                    t.danger
                }, $ {
                    t.highlightColor
                });
            }
        `}
    `,
        ButtonIcon: b.figure `
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 3em;
        padding: 0.9em;
        ${({theme:{colors:t}})=>`
        svg {
            fill: $ {
                t.highlightColor
            };
        }
        `}
    `,
        Controls: b.div `
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;
        flex-wrap: wrap;
    `,
        Paragraph: b.p `
        margin: 0em 0 1.5em;
        font-size: 1.4em;
    `,
        PopUp: b.div `
        ${ke(0)};
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;

        ${({theme:{colors:t}})=>`
        background - color: $ {
            t.hex2Rgb(t.background, .9)
        };
        z - index: 9999999;
        `}

    `,
        PopUpTitle: b.div `
        font-weight: bold;
        line-height: 2em;
        margin: 0 2.5em 0 0;
        padding: 0.5em 1em;
        text-overflow: ellispis;
        overflow: hidden;
    `,
        PopUpBody: b.div `
        padding: 1em;
        background-color: yellow;
        border-radius: 0 0 0.5em 0.5em;
        font-size: 0.84en;
        ${({theme:{colors:t}})=>`
        background - color: $ {
            t.background
        };
        `};
    `,
        PopUpWindow: b.div `
        position: relative;
        width: 24em;
        ${({theme:{colors:t}})=>`
        background - color: $ {
            t.backgroundLight
        };
        box - shadow: 0.5e m 0.5e m 1e m - 0.2e m rgba(0, 0, 0, 0.4);
        `};
        
        border-radius: 0.5em;
    `,
        PopUpBtnClose: b.button `
        width: 2em;
        height: 2em;
        background: none;
        padding: 0.6em;
        position: absolute;
        right: 0.5em;
        top: 0.5em;
    `,
        PopUpCountdown: b.div `
        height: 1em;
        width: 1em;
        display: inline-block;
        vertical-align:  middle;
        position: relative;
        color: #fff;
    `
    },
    K1 = () => {
        const [t, e] = x.useState(!1), n = () => {
            e(!1)
        };
        return x.useEffect(() => {
            const i = gr.callbacks.add(r => {
                e(r === 2)
            });
            return () => {
                gr.callbacks.remove(i)
            }
        }, [e]), m.jsxs(m.Fragment, {
            children: [m.jsxs(J1, {
                active: t,
                title: "Message Sent",
                children: ["Thank you for contacting me, Edwin Chiwona. ", m.jsx("br", {}), "I will be in touch shortly. ", m.jsx("br", {}), "Popup will disappear in ", m.jsx(Ke.PopUpCountdown, {
                    children: m.jsx(xm, {
                        callback: n,
                        time: 1e3,
                        max: 10
                    })
                })]
            }), m.jsx(Ui, {
                id: "contact",
                children: m.jsxs(Ke.InternalWrap, {
                    children: [m.jsx(Fi, {
                        text: "Contact Me"
                    }), m.jsx(q1, {})]
                })
            })]
        })
    },
    q1 = () => {
        const [t, e] = x.useState(!1), n = {
            value: "",
            error: ""
        }, l = {
            name: n,
            email: n,
            subject: n,
            message: n
        }, [a, u] = x.useState(l);
        x.useEffect(() => {
            const v = gr.callbacks.add(y => {
                e(y === 1)
            });
            return () => gr.callbacks.remove(v)
        }, [e]);
        const c = v => y => {
                const {
                    value: w
                } = y.target;
                u(_ => En(_, p => {
                    const h = p[v].error ? Pm[v](w, v) : "";
                    p[v] = {
                        error: h,
                        value: w
                    }
                }))
            },
            f = v => {
                v.preventDefault(), v.stopPropagation();
                const [y, w] = iw(a);
                if (w) {
                    u(y);
                    return
                }
                gr.send(y)
            },
            d = () => {
                u(l)
            };
        return m.jsxs(Ke.Form, {
            onSubmit: f,
            children: [m.jsx(Ke.Paragraph, {
                children: "I'd love to hear from you. Feel free to contact me using the form below."
            }), m.jsxs("div", {
                children: [m.jsx(yo, {
                    inputType: "text",
                    passValue: a.name.value,
                    error: a.name.error,
                    onChange: c("name"),
                    label: "Name",
                    duo: !0
                }), m.jsx(yo, {
                    inputType: "text",
                    passValue: a.email.value,
                    error: a.email.error,
                    onChange: c("email"),
                    label: "Email",
                    duo: !0
                })]
            }), m.jsx(yo, {
                inputType: "text",
                passValue: a.subject.value,
                error: a.subject.error,
                onChange: c("subject"),
                label: "Subject"
            }), m.jsx(yo, {
                inputType: "textarea",
                passValue: a.message.value,
                error: a.message.error,
                label: "Message",
                onChange: c("message")
            }), m.jsxs(Ke.Controls, {
                children: [m.jsxs(Ke.Button, {
                    as: "button",
                    type: "button",
                    onClick: d,
                    radius: "box",
                    children: [m.jsx("span", {
                        children: "Reset"
                    }), m.jsx(Ke.ButtonIcon, {
                        children: m.jsx(Fe, {
                            name: "reset"
                        })
                    })]
                }), m.jsxs(Ke.Button, {
                    as: "button",
                    onClick: f,
                    radius: "box",
                    children: [m.jsx("span", {
                        children: "Send Message"
                    }), m.jsx(Ke.ButtonIcon, {
                        children: t ? m.jsx(Fe, {
                            name: "loading"
                        }) : m.jsx(Fe, {
                            name: "send"
                        })
                    })]
                })]
            })]
        })
    },
    J1 = ({
        active: t,
        title: e,
        children: n
    }) => {
        const [i, r] = x.useState(!1), o = () => {
            r(!1)
        };
        return x.useEffect(() => {
            r(t)
        }, [t]), i ? m.jsx(Ke.PopUp, {
            onClick: o,
            children: m.jsxs(Ke.PopUpWindow, {
                children: [m.jsx(Ke.PopUpBtnClose, {
                    onClick: o,
                    children: m.jsx(Fe, {
                        name: "close"
                    })
                }), m.jsx(Ke.PopUpTitle, {
                    children: e
                }), m.jsx(Ke.PopUpBody, {
                    children: n
                })]
            })
        }) : null
    },
    Em = t => `${t} is invalid.`,
    Z1 = t => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(t.trim()) ? "" : Em("email"),
    ew = t => /^([a-zA-Z]{3,30}\s*)+$/g.test(t.trim()) ? "" : Em("name"),
    tw = t => t.trim().length < 3 ? `Subject should contain at least 10 characters, ${t.trim().length} provided.` : "",
    nw = t => t.trim().length < 100 ? `Message should contain at least 100 characters, ${t.trim().length} provided.` : "",
    wo = t => (e, n) => e.trim() === "" ? `${n} cannot be blank` : t(e),
    Pm = {
        name: (t, e) => wo(ew)(t, e),
        email: (t, e) => wo(Z1)(t, e),
        message: (t, e) => wo(nw)(t, e),
        subject: (t, e) => wo(tw)(t, e)
    },
    iw = t => {
        let e = "";
        return [En(t, i => {
            for (const r in i) {
                if (!{}.hasOwnProperty.call(t, r)) continue;
                const o = r;
                i[o].error = Pm[o](i[o].value, r), e += i[o].error
            }
            return i
        }), e]
    },
    gr = function() {
        const t = F0();
        return {
            send: n => {
                const i = {
                    access_key: "6a3d5eb4-6dc7-43aa-bc0f-b43b00bb5bcc"
                };
                for (const r in n) {
                    if (!{}.hasOwnProperty.call(n, r)) continue;
                    const o = r;
                    i[r] = n[o].value
                }
                t.call(1), fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(i)
                }).then(r => {
                    t.call(2)
                }).catch(r => {}), t.call(1), window.setTimeout(() => {
                    t.call(2)
                }, 1e3)
            },
            callbacks: t
        }
    }(),
    rw = {
        HeadingStyle: t => `
        margin: 0.2em 0 0.1em;
    `
    },
    ow = () => m.jsx(mw, {
        id: "home",
        children: m.jsx(cw, {
            children: m.jsx(lw, {})
        })
    }),
    sw = () => m.jsx(vw, {
        children: m.jsx(yw, {
            download: !0,
            href: "/assets/Resume-Edwin-Chiwona.pdf",
            radius: "box",
            as: "a",
            children: "Download Resume"
        })
    }),
    lw = () => {
        const {
            colors: t
        } = Yr();
        return m.jsxs(dw, {
            children: [m.jsxs(fw, {
                children: [m.jsx("span", {
                    children: "Hey there, I'm"
                }), m.jsx(Fi, {
                    fit: !0,
                    text: "Edwin Chiwona",
                    compStyle: rw.HeadingStyle(t)
                }), m.jsxs("span", {
                    children: [m.jsx("span", {}), "A software developer specialising in frontend web development. With advanced knowledge in Javascript and frontend libraries such as React, Redux, and Three.js"]
                })]
            }), m.jsx(sw, {}), m.jsx(aw, {})]
        })
    },
    aw = () => m.jsxs(ww, {
        children: [m.jsx(xw, {
            children: "Tech Stack"
        }), m.jsx(hw, {
            children: km.map(t => m.jsx(uw, {
                stack: t
            }, t.name))
        })]
    }),
    uw = ({
        stack: t
    }) => {
        const e = x.useRef(null);
        return Cn(e, {
            clickSound: !0,
            hoverSound: !0
        }), m.jsx(pw, {
            as: "button",
            ref: e,
            children: m.jsx(Fe, {
                name: t.iconName,
                compStyle: gw(t.lower)
            })
        })
    },
    cw = b.div `
    display: flex;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    overflow: hidden;
    max-width: 55em;
    margin: 0 auto;
    min-height: calc(100vh - 10em);
`,
    dw = b.div `
    max-width: 35em;
    z-index: 1;
`,
    fw = b.div `
    text-align: left;
    > span {
        display: block;
        font-size: 1.2em;
    }
`,
    hw = b.div `
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`,
    pw = b(ei)
`
    background: none;
    padding: 0.75em;
    height: 3.5em;
    width: 3.5em;
    margin-right: 1em;
    margin-bottom: 1em;
    box-shadow: none;
    border-radius: 0.5em;

    ${({theme:{colors:t}})=>`
background - color: $ {
    t.backgroundLight
};
`}
`, mw = b(Ui)
`

`, gw = t => `
        ${t?`
            padding: 0.5em 0 0 0.5em;
        `:""}
    `, vw = b.div `
    padding: 2em 0;
`, yw = b(ei)
`
    display: inline-block;
    margin-right: 2em;
    padding: 1em 2em;
    width: 15em;
    box-shadow: none;
    background: none;
    font-weight: 500;
    text-align: center;
    
    ${({theme:{colors:t}})=>`
background: $ {
    t.gradientColor
};
color: $ {
    t.background
}!important;
`}
`, ww = b.div `
    padding: 2em 0;
    position: absolute;
    bottom: 0;
    @media (max-width: 30em) {
        position: static;
    }
`, xw = b.p `
    font-size: 1.3em;
    font-weight: bold;
    padding-bottom: 1em;
    ${({theme:{colors:t}})=>`
color: $ {
    t.textSaturated
};
`}
`, kw = () => {
    const t = "Todo List",
        [e, n] = x.useState(0),
        i = x.useRef(null),
        r = vm(i, 20, !1),
        o = ["npx create-react-app todo --template typescript", "npm install -S styled-component", "npm install -S react-router-dom", "npm install -S immer", "npm install -S three"],
        s = () => {
            n(l => l + 1)
        };
    return x.useEffect(() => {
        n(0)
    }, [r, n]), m.jsx(Ui, {
        id: "projects",
        children: m.jsxs(_w, {
            children: [m.jsxs(Fi, {
                text: "Projects",
                children: ["Proj", m.jsx("span", {
                    children: "ects"
                })]
            }), m.jsx(bw, {
                children: "More projects coming soon"
            }), m.jsxs(Cw, {
                ref: i,
                children: [m.jsxs(Ew, {
                    children: ["Projects Coming Soon, ", t]
                }), m.jsxs(Pw, {
                    children: [m.jsx(df, {}), m.jsx(df, {})]
                }), m.jsxs(zw, {
                    children: [m.jsxs("p", {
                        children: [" Last login: ", new Date().toLocaleTimeString(), " on ttys0001"]
                    }), o.map((l, a) => e >= a && r && m.jsx(Sw, {
                        callback: s,
                        text: l,
                        begin: "$ > ",
                        done: e > a
                    }, a))]
                })]
            })]
        })
    })
}, Sw = ({
    text: t,
    begin: e,
    done: n,
    callback: i
}) => {
    const [r, o] = x.useState(e);
    return x.useEffect(() => {
        r.length - e.length === t.length && !n && i()
    }, [i, t, e, r, n]), x.useEffect(() => {
        let s, l = e;
        const a = () => {
            const u = t.charAt(l.length - e.length);
            l += u, o(l), l.length - e.length < t.length && (s = window.setTimeout(a, 100))
        };
        return a(), () => {
            s !== void 0 && window.clearTimeout(s)
        }
    }, [e, t]), m.jsxs($w, {
        children: [r, !n && m.jsx(Tw, {
            children: "|"
        })]
    })
}, _w = b.div `
    width: 100%;
    max-width: 60em;
    margin: 0 auto;
`, bw = b.p `
    padding: 1em 0;
    font-size: 1.5em;
`, Cw = b.div `
    width: 100%;
    height: 25em;
    border-radius: 1em;
    max-width: 45em;
    ${({theme:{colors:t}})=>`
background - color: $ {
    t.hex2Rgb(t.backgroundLight, .6)
};
`}
    position: relative;

`, Ew = b.p `
    padding: 1.25em 1.5em;
    font-weight: 600;
    white-space: nowrap;
    margin-right: 6em;
    overflow: hidden;
    text-overflow: ellipsis;
`, Pw = b.div `
    position: absolute;
    right: 1.5em;
    top: 1.5em;
`, zw = b.div `
    padding: 1em 2em;
    font-family: monospace;
    ${({theme:{colors:t}})=>`
border - top: 0.15e m solid $ {
    t.background
};
`}
`, df = b.button `
    width: 1.25em;
    height: 1.25em;
    border-radius: 50%;
    background-color: red;
    &:first-child {
        margin-right: 1em;
        background-color: green;
    }

    ${({theme:{colors:t}})=>`
background - color: $ {
    t.danger
}; &
: first - child {
    background - color: $ {
        t.green
    };
}
`}

`, $w = b.p ``, Tw = b.span `
    @keyframes blink {
        0%{
            opacity: 0;
        }

        50% {
            opacity: 1;
        }

        100% {
            opacity: 0
        }
    }

    color: yellow;
    animation: blink 1s infinite;
`, Mw = [{
        company: "Proxify Ab",
        position: "Senior Frontend Engineer",
        startDate: "Jun 2022",
        endDate: "Present",
        stack: ["javascript", "reactjs", "nodejs", "html", "scss"],
        roles: `
    •	Integrated 3D illustrations for enhanced engagement and immersive experience.
    •	Developed a video player component with pause functionality and a drawing mode for strategic planning.
    •	Demonstrated technical expertise in Git, Jenkins, JavaScript, Redux, React, HTML, and Tailwind CSS throughout the project.`
    }, {
        company: "Proxify Ab",
        position: "Senior Frontend Engineer Client: Vonaffensels, Germany",
        startDate: "Jun 2022",
        endDate: "Present",
        stack: ["javascript", "reactjs", "nodejs", "html", "scss"],
        roles: `•	Collaborated with the content strategy team, utilizing Storybook to develop components.
    •	Integrated data from Contentful to create engaging articles for multiple clients.
    •	Successfully delivered several key components, such as a custom slideshow, event registration pages, and a timeline for events.
    •	Demonstrated technical expertise in Git, JavaScript, React, Next.js, Storybook, HTML, and Tailwind CSS throughout the project.`
    }, {
        company: "On24",
        position: "Senior Frontend Engineer",
        startDate: "Nov 2021",
        endDate: "Sep 2022",
        stack: ["javascript", "reactjs", "nodejs", "vuejs", "webpack", "html", "scss"],
        roles: `• Led the development of webinars, virtual events, and personalized content experiences for ON24 clients, focusing on driving engagement.
            • Maintained multiple projects, ensuring their functionality, fixing bugs, and implementing new features.
            • Actively participated in daily meetings to discuss upcoming features, provide progress reports, and contribute to sprint planning.
            • Engineered a comprehensive ticketing system for physical engagements, involving QR code display for streamlined event management.
            • Collaborated with backend engineers to seamlessly integrate new features, ensuring the cohesion of the entire system.
            `
    }, {
        company: "Black British Women Exist",
        position: "Fullstack Developer",
        startDate: "Jun 2021",
        endDate: "Dec 2021",
        stack: ["javascript", "vuejs", "nodejs", "scss", "html", "typescript"],
        roles: `• Coded using VueJs, Typescript, HTML, CSS, and JavaScript to develop features for both mobile and desktop platforms.
            • Collaborated with stakeholders during development processes to confirm creative proposals and design best practices.
            • Integrated enhancements into web design to improve user stickiness, smooth functionality, and boost load times.
            • Oversaw back-end development using NodeJs to maintain website integrity.`
    }, {
        company: "Self Employed",
        position: "Freelancer (Multiple Roles)",
        startDate: "Sep 2020",
        endDate: "Jun 2021",
        stack: ["javascript", "nodejs", "html", "typescript"],
        roles: `• Corrected data entry errors to prevent duplication or data degradation.
            • Coded and processed applications into required electronic formats.
            • Developed clear specifications for project plans using customer requirements.
            • Developing features for both mobile and desktop platforms using HTML, CSS, and JavaScript to .`
    }, {
        company: "Agile Systems Malawi",
        position: "Frontend Developer",
        startDate: "Jun 2020",
        endDate: "Aug 2020",
        stack: ["javascript", "typescript", "reactjs", "scss", "html"],
        roles: `• Used React, Typescript, javascript HTML, CSS, and JavaScript to develop features for both mobile and desktop platforms.
        • Made recommendations for new technology integration based on suitability and alignment with business goals.
        • Mentoring developers on clean code, CI/CD pipelines, working with GIT and Jira • Advocated for well-tested and documented high-quality code.`
    }, {
        company: "BaseAfrique",
        position: "Senior Fullstack Developer",
        startDate: "Oct 2019",
        endDate: "May 2020",
        stack: ["vuejs", "javascript", "reactjs", "html", "scss", "php"],
        roles: `• Developed functional databases, applications, and servers to support websites on the back end. • Provided software application engineering and maintenance for the development lifecycle.
        • Participated in requirements gathering to solidify prerequisites and determine the best technical solution to meet business needs.
        • Used NodeJS, ORM, and SQL/No-SQL to develop and manage databases.`
    }, {
        company: "abstract records Malawi",
        position: "Fullstack Developer",
        startDate: "May 2016",
        endDate: "Dec 2018",
        stack: ["nodejs", "mysql", "javascript", "reactjs", "scss"],
        roles: `• Developed clear specifications for project plans using customer requirements.
        • Developed functional databases, applications, and servers to support websites on back-end. • Adjusted design parameters to incorporate new features.
        • Used NodeJS, ORM, and SQL/No-SQL to develop and manage databases.`
    }, {
        company: "Audio Visual Solutions",
        position: "Graphic Designer",
        startDate: "Mar 2015",
        endDate: "Oct 2015",
        description: "Audio Visual provides graphic solutions to clients, ranging from small to countrywide businesses",
        stack: [],
        roles: `• Gathered and defined requirements, establishing scopes and managing project milestones.
        • Met with customers to present mockups and collect information for adjustments.
        • Created digital image files for use in digital and traditional printing methods.
        • Developed creative design for print materials, banners, and signs.`
    }, {
        company: "Edwonder",
        position: "Fullstack Developer",
        startDate: "May 2012",
        endDate: "Mar 2015",
        stack: ["javascript", "html", "scss", "php", "mysql"],
        roles: `• Reviewed project specifications and design technology solutions that met or exceeded performance expectations.
        • Developed clear specifications for project plans using customer requirements.
        • Collaborated with fellow engineers to evaluate software and hardware interfaces.
        • Designed enhancements and updates for subsystems of end-user applications software running on local, networked, and Internet-based platforms.`
    }], Rw = b.ul `
    width: 10em;
    position: relative;
    ${({highlightStyle:t})=>` &
    ::before {
        $ {
            t
        };
        border - radius: 1e m 0 0 1e m;
        @media(max - width: 65e m) {
            border - radius: 1e m;
        }

    }

    &
    ::after {
        $ {
            t
        };
        left: calc(100 % +0.4e m);
        width: 0;
        background: none;
        border: 1.8e m solid transparent;
        height: 0;
        top: calc(var (--top) - 0e m);

        @media(max - width: 65e m) {
            left: calc(var (--left));
            top: 100 % ;
        }
    }
`}

    ${({theme:{colors:t}})=>`
border - right: 0.4e m solid $ {
    t.backgroundLight
}; &
::before {
    background - color: $ {
        t.backgroundLight
    };
}

&
::after {
    border - left - color: $ {
        t.backgroundLight
    };
}
`}

    @media (max-width: 65em) {
        width: 100%;
        white-space: nowrap;
        border: 0;
    }
`, Lw = b.li `
    padding: 1em 1em;
    cursor: pointer;
    position: relative;
    font-weight: bold;
    text-align: right;
    line-height: 1.7;
    @media (max-width: 65em) {
        display: inline-block;
        vertical-align: middle;
        font-weight: normal
    }
`, jw = b.div `
    width: 100%;
    margin: 0 auto;
    ${({theme:{colors:t}})=>`
background - color: $ {
    t.background
};
opacity: .8;
backdrop - filter: grayscale(1);
`}
`, Ow = b.ul.attrs(({
    currentPos: t
}) => ({
    style: {
        right: `${t}px`
    }
}))
`
    display: block;
    white-space: nowrap;
    position: relative;
    @media (max-width: 65em) {
        display: block;
    }
    transition: right .5s ease-in-out;
    ${({currentPos:t})=>""}
`, Iw = b.div `
    position: relative
`, Dw = b.div `
    position: relative;
    width: 10em;
    @media (max-width: 65em) {
        width: 100%;
        overflow: hidden;
    }

`, zm = b.button `
    position: absolute;
    background: none;
    width: 3em;
    height: 3em;
    z-index: 9;
    top: 0;
    bottom: 0;
    margin: auto 0;
    background-color: yellow;
    border-radius: 50%;
    right: -2em;
    padding: 1em;
    transition: opacity 1s;
    svg {
        fill: #000;
    }
    opacity: .4;
    

    ${({disabled:t})=>`
opacity: $ {
    t ? 0 : .4
}; &
: hover {
    opacity: $ {
        t ? 0 : 1
    };
}
`}
    
`, Aw = b(zm)
`
    right: auto;
    left: -2em;
    svg {
        transform: rotate(180deg);
    }
`, Nw = b.ul `
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    padding: 1em;
    
`, Fw = b.li `
    width: 2.5em;
    height: 2.5em;
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin: 0.5em;
    justify-content: space-between;
    border: 1px solid #a26cd6;
    border-radius: 0.25em;
`, Uw = `
    padding: 0.25em;
`, Bw = b.li `
    display: inline-block;
    vertical-align: top;
    white-space: normal;
    width: 100%;
    max-width: 28em;
    min-height: 35em;
    height: calc(100vh - 4em);
    max-height: 40em;
    margin-right: 2em;
    border-radius: 1em;

    position: relative;
    &::before, &::after {
        position: absolute;
        border: 0.15em solid #fff;
        width: 100%;
        height: 100%;
        top: 1em;
        left: 1em;
        content: '';
        border-radius: 1em;
    }

    &::after {
        left: 0;
        top: 0;
        border: 0;
    }

    ${({theme:{colors:t}})=>` &
    ::before {
        border - color: $ {
            t.backgroundLight
        };
    } &
    ::after {
        background - color: $ {
            t.backgroundLight
        };
    }

`}
`, Me = {
    Nav: Rw,
    Tab: Lw,
    NextButton: zm,
    PrevButton: Aw,
    Wrapper: jw,
    NavWrapper: Dw,
    Main: Ow,
    MainWrapper: Iw,
    Skills: Nw,
    Skill: Fw,
    ExperienceItem: Uw,
    ExList: Bw,
    headingColor: t => `
        padding-bottom: 0.5em;
    `,
    ListLabel: b.span `
        ${({theme:{colors:t}})=>`
    background - color: red;
    background: $ {
        t.gradientColor
    };
    `}

        ${({active:t})=>`
    $ {
        t ? `
                
                display: inline-block;
                background-clip: text;
                -webkit-background-clip: text;
                color: transparent
            ` : ""
    }
    `}
    `,
    PreviewTab: b.div `
        position: relative;
        z-index: 1;
        padding: 2em 2em;
        height: 100%;
    `,
    PreviewTabTitle: b.h3 `
        font-size: 1.35em;
        font-weight: 600;
        &::before {
            content: '';
            width: 0.75em;
            height: 0.75em;
            position: absolute;
            right: 0.65em;
            top: 0.65em;
            border-radius: 50%;
            border: 1px solid #000;
        }
        span {
            display: block;
            font-size: 0.7em;
        }

        ${({theme:{colors:t}})=>`
    color: $ {
        t.textSaturated
    }; &
    ::before {
        border - color: $ {
            t.textColor
        }
    }
    `};

        @media (max-width: 65em) {
            font-size: 1.2em;
            padding-top: 1em;
        }
    `,
    PreviewTabDate: b.p `
        padding: 0.5em 0;
        font-weight: 600;
        font-size: 0.8em
    `,
    PreviewOverview: b.div `
        
    `,
    PreviewDataUl: b.ul `
        padding: 1.5em 0 0;
        margin-top: 1em;
        ${({theme:{colors:t}})=>`
    border - top: 1 px solid $ {
        t.textColor
    };
    `}
    `,
    PreviewDataList: b.li `
        font-size: 0.9em;
        padding-bottom: 1em;
        display: block;
        line-height: 1.4em;
        position: relative;
        padding-left: 2em;
        span {
            display: block;
        }
    `,
    PreviewDataIcon: b.span `
        display: block;
        width: 1em;
        height: 1em;
        margin-right: 0.5em;
        position: absolute;
        left: 0.5em;
        top: 0.35em;
    `
}, Ww = () => {
    const {
        colors: t
    } = Yr(), e = x.useRef(null), [n, i] = x.useState({
        one: 0,
        page: 0
    }), [r, o] = x.useState(0), s = x.useRef(null), l = x.useRef(null), a = r >= n.page, u = r === 0;
    Cn(s), Cn(l);
    const c = (d = 1) => () => {
            if (a && d === 1 || u && d === -1) return;
            const v = r + n.one * d;
            o(v)
        },
        f = () => {
            if (e.current == null) return;
            const {
                children: d
            } = e.current, v = e.current.parentNode.offsetWidth;
            if (!d[0]) return;
            const y = N0(window.getComputedStyle(d[0]).marginRight),
                w = d[0].offsetWidth + y,
                _ = v % w,
                p = v - _,
                h = w * d.length - (p ? v : 2 * v);
            i({
                one: p || w,
                page: h
            }), o(0)
        };
    return x.useEffect(() => (f(), window.addEventListener("resize", f), () => {
        window.removeEventListener("resize", f)
    }), [o, i]), m.jsx(Ui, {
        id: "experience",
        children: m.jsxs(Me.Wrapper, {
            children: [m.jsx(Fi, {
                text: "Experience",
                compStyle: Me.headingColor(t),
                children: "Experience"
            }), m.jsxs(Me.MainWrapper, {
                children: [m.jsx(Me.NextButton, {
                    ref: s,
                    disabled: a,
                    onClick: c(),
                    children: m.jsx(Fe, {
                        name: "next"
                    })
                }), m.jsx(Me.PrevButton, {
                    ref: l,
                    disabled: u,
                    onClick: c(-1),
                    children: m.jsx(Fe, {
                        name: "next"
                    })
                }), m.jsx(Me.Main, {
                    ref: e,
                    currentPos: r,
                    children: Mw.map(d => m.jsx(Me.ExList, {
                        children: m.jsx(Vw, {
                            experience: d
                        })
                    }, d.company))
                })]
            })]
        })
    })
}, Vw = ({
    experience: t
}) => m.jsxs(Me.PreviewTab, {
    children: [m.jsxs(Me.PreviewOverview, {
        children: [m.jsxs(Me.PreviewTabTitle, {
            children: [" ", t.position, " ", m.jsx("span", {
                children: t.company
            }), " "]
        }), m.jsxs(Me.PreviewTabDate, {
            children: [" ", t.startDate, " - ", t.endDate, " "]
        })]
    }), m.jsx(Me.PreviewDataUl, {
        children: t.roles.trim().split(`
`).map((e, n) => m.jsxs(Me.PreviewDataList, {
            children: [m.jsx(Me.PreviewDataIcon, {
                children: m.jsx(Fe, {
                    name: "star"
                })
            }), m.jsx("span", {
                children: e.trim().indexOf("-") === 0 || e.trim().indexOf("•") === 0 ? e.trim().substring(1).trim() : e
            })]
        }, n))
    }), m.jsx(Me.Skills, {
        children: t.stack.map(e => {
            const n = f1[e];
            return m.jsx(Me.Skill, {
                children: m.jsx(Sm, {
                    useLabel: !1,
                    noBorder: !0,
                    ...n,
                    compStyle: Me.ExperienceItem
                })
            }, e)
        })
    })]
}), Hw = () => m.jsx(Ui, {
    id: "CreditsPage",
    children: m.jsx(Qw, {
        children: m.jsxs(qw, {
            children: [m.jsx(Fi, {
                text: "Credits"
            }), m.jsx(Yw, {})]
        })
    })
}), Qw = b.div `
    max-width: 60em;
    width: 100%;
    margin: 0 auto;
`, Gw = ({
    children: t,
    title: e
}) => m.jsxs(Xw, {
    children: [m.jsx(Kw, {
        children: e
    }), t]
}), Yw = () => m.jsxs(Gw, {
    title: "Background Music",
    children: [m.jsx(Vl, {
        href: "https://soundcloud.com/musicbyaden",
        target: "_blank",
        children: "Good by MusicbyAden"
    }), m.jsx(Vl, {
        href: "https://www.chosic.com/free-music/all/",
        target: "_blank",
        children: "Music promoted by https://www.chosic.com/free-music/all/"
    }), m.jsx(Vl, {
        href: "https://creativecommons.org/licenses/by/3.0/",
        target: "_blank",
        children: "Licensed under Creative Commons: Attribution 3.0 Unported (CC BY 3.0)"
    })]
}), Vl = b.a `
    display: block;
`, Xw = b.div `

`, Kw = b.h2 `
    font-size: 1.3em;
    margin: 1em 0 0.5em;
    font-weight: bold;
    ${({theme:{colors:t}})=>`
color: $ {
    t.highlightColor
}
`}
`;
b.p `
    margin: 1em 0 0;
`;
const qw = b.div `
    max-width: 35em;
`,
    vr = "generated",
    Jw = "pointerdown",
    Zw = "pointerup",
    ff = "pointerleave",
    ex = "pointerout",
    hf = "pointermove",
    tx = "touchstart",
    pf = "touchend",
    nx = "touchmove",
    ix = "touchcancel",
    rx = "resize",
    ox = "visibilitychange",
    Yn = "tsParticles - Error";
class it {
    constructor(e, n, i) {
        if (this._updateFromAngle = (r, o) => {
                this.x = Math.cos(r) * o, this.y = Math.sin(r) * o
            }, !Lt(e) && e) {
            this.x = e.x, this.y = e.y;
            const r = e;
            this.z = r.z ? r.z : 0
        } else if (e !== void 0 && n !== void 0) this.x = e, this.y = n, this.z = i ? ? 0;
        else throw new Error(`${Yn} Vector3d not initialized correctly`)
    }
    static get origin() {
        return it.create(0, 0, 0)
    }
    get angle() {
        return Math.atan2(this.y, this.x)
    }
    set angle(e) {
        this._updateFromAngle(e, this.length)
    }
    get length() {
        return Math.sqrt(this.getLengthSq())
    }
    set length(e) {
        this._updateFromAngle(this.angle, e)
    }
    static clone(e) {
        return it.create(e.x, e.y, e.z)
    }
    static create(e, n, i) {
        return new it(e, n, i)
    }
    add(e) {
        return it.create(this.x + e.x, this.y + e.y, this.z + e.z)
    }
    addTo(e) {
        this.x += e.x, this.y += e.y, this.z += e.z
    }
    copy() {
        return it.clone(this)
    }
    distanceTo(e) {
        return this.sub(e).length
    }
    distanceToSq(e) {
        return this.sub(e).getLengthSq()
    }
    div(e) {
        return it.create(this.x / e, this.y / e, this.z / e)
    }
    divTo(e) {
        this.x /= e, this.y /= e, this.z /= e
    }
    getLengthSq() {
        return this.x ** 2 + this.y ** 2
    }
    mult(e) {
        return it.create(this.x * e, this.y * e, this.z * e)
    }
    multTo(e) {
        this.x *= e, this.y *= e, this.z *= e
    }
    normalize() {
        const e = this.length;
        e != 0 && this.multTo(1 / e)
    }
    rotate(e) {
        return it.create(this.x * Math.cos(e) - this.y * Math.sin(e), this.x * Math.sin(e) + this.y * Math.cos(e), 0)
    }
    setTo(e) {
        this.x = e.x, this.y = e.y;
        const n = e;
        this.z = n.z ? n.z : 0
    }
    sub(e) {
        return it.create(this.x - e.x, this.y - e.y, this.z - e.z)
    }
    subFrom(e) {
        this.x -= e.x, this.y -= e.y, this.z -= e.z
    }
}
class Mt extends it {
    constructor(e, n) {
        super(e, n, 0)
    }
    static get origin() {
        return Mt.create(0, 0)
    }
    static clone(e) {
        return Mt.create(e.x, e.y)
    }
    static create(e, n) {
        return new Mt(e, n)
    }
}
let sx = Math.random;

function me() {
    return Oi(sx(), 0, 1 - 1e-16)
}

function Oi(t, e, n) {
    return Math.min(Math.max(t, e), n)
}

function Hl(t, e, n, i) {
    return Math.floor((t * n + e * i) / (n + i))
}

function zt(t) {
    const e = tl(t);
    let n = Ec(t);
    return e === n && (n = 0), me() * (e - n) + n
}

function B(t) {
    return Lt(t) ? t : zt(t)
}

function Ec(t) {
    return Lt(t) ? t : t.min
}

function tl(t) {
    return Lt(t) ? t : t.max
}

function Y(t, e) {
    if (t === e || e === void 0 && Lt(t)) return t;
    const n = Ec(t),
        i = tl(t);
    return e !== void 0 ? {
        min: Math.min(n, e),
        max: Math.max(i, e)
    } : Y(n, i)
}

function Pc(t) {
    const e = t.random,
        {
            enable: n,
            minimumValue: i
        } = Sn(e) ? {
            enable: e,
            minimumValue: 0
        } : e;
    return B(n ? Y(t.value, i) : t.value)
}

function Wt(t, e) {
    const n = t.x - e.x,
        i = t.y - e.y;
    return {
        dx: n,
        dy: i,
        distance: Math.sqrt(n ** 2 + i ** 2)
    }
}

function kn(t, e) {
    return Wt(t, e).distance
}

function lx(t, e, n) {
    if (Lt(t)) return t * Math.PI / 180;
    switch (t) {
        case "top":
            return -Math.PI / 2;
        case "top-right":
            return -Math.PI / 4;
        case "right":
            return 0;
        case "bottom-right":
            return Math.PI / 4;
        case "bottom":
            return Math.PI / 2;
        case "bottom-left":
            return 3 * Math.PI / 4;
        case "left":
            return Math.PI;
        case "top-left":
            return -3 * Math.PI / 4;
        case "inside":
            return Math.atan2(n.y - e.y, n.x - e.x);
        case "outside":
            return Math.atan2(e.y - n.y, e.x - n.x);
        default:
            return me() * Math.PI * 2
    }
}

function ax(t) {
    const e = Mt.origin;
    return e.length = 1, e.angle = t, e
}

function ux(t) {
    var e, n;
    return {
        x: ((e = t.position) == null ? void 0 : e.x) ? ? me() * t.size.width,
        y: ((n = t.position) == null ? void 0 : n.y) ? ? me() * t.size.height
    }
}

function $m(t) {
    return t ? t.endsWith("%") ? parseFloat(t) / 100 : parseFloat(t) : 1
}
const cx = {
    debug: console.debug,
    error: console.error,
    info: console.info,
    log: console.log,
    verbose: console.log,
    warning: console.warn
};

function Fr() {
    return cx
}

function nl() {
    return typeof window > "u" || !window || typeof window.document > "u" || !window.document
}

function dx() {
    return !nl() && typeof matchMedia < "u"
}

function Tm(t) {
    if (dx()) return matchMedia(t)
}

function fx(t) {
    if (!(nl() || typeof MutationObserver > "u")) return new MutationObserver(t)
}

function hx(t, e) {
    return t === e || Vt(e) && e.indexOf(t) > -1
}

function px(t) {
    return Math.floor(me() * t.length)
}

function zc(t, e, n = !0) {
    return t[e !== void 0 && n ? e % t.length : px(t)]
}

function $c(t, e, n, i, r) {
    return mx(Tc(t, i ? ? 0), e, n, r)
}

function mx(t, e, n, i) {
    let r = !0;
    return (!i || i === "bottom") && (r = t.top < e.height + n.x), r && (!i || i === "left") && (r = t.right > n.x), r && (!i || i === "right") && (r = t.left < e.width + n.y), r && (!i || i === "top") && (r = t.bottom > n.y), r
}

function Tc(t, e) {
    return {
        bottom: t.y + e,
        left: t.x - e,
        right: t.x + e,
        top: t.y - e
    }
}

function Ue(t, ...e) {
    for (const n of e) {
        if (n == null) continue;
        if (!gi(n)) {
            t = n;
            continue
        }
        const i = Array.isArray(n);
        i && (gi(t) || !t || !Array.isArray(t)) ? t = [] : !i && (gi(t) || !t || Array.isArray(t)) && (t = {});
        for (const r in n) {
            if (r === "__proto__") continue;
            const o = n,
                s = o[r],
                l = t;
            l[r] = gi(s) && Array.isArray(s) ? s.map(a => Ue(l[r], a)) : Ue(l[r], s)
        }
    }
    return t
}

function Xn(t, e) {
    return Vt(t) ? t.map((n, i) => e(n, i)) : e(t, 0)
}

function yr(t, e, n) {
    return Vt(t) ? zc(t, e, n) : t
}

function Mm(t, e) {
    const n = t.value,
        i = t.animation,
        r = {
            delayTime: B(i.delay) * 1e3,
            enable: i.enable,
            value: B(t.value) * e,
            max: tl(n) * e,
            min: Ec(n) * e,
            loops: 0,
            maxLoops: B(i.count),
            time: 0
        };
    if (i.enable) {
        switch (r.decay = 1 - B(i.decay), i.mode) {
            case "increase":
                r.status = "increasing";
                break;
            case "decrease":
                r.status = "decreasing";
                break;
            case "random":
                r.status = me() >= .5 ? "increasing" : "decreasing";
                break
        }
        const o = i.mode === "auto";
        switch (i.startValue) {
            case "min":
                r.value = r.min, o && (r.status = "increasing");
                break;
            case "max":
                r.value = r.max, o && (r.status = "decreasing");
                break;
            case "random":
            default:
                r.value = zt(r), o && (r.status = me() >= .5 ? "increasing" : "decreasing");
                break
        }
    }
    return r.initialValue = r.value, r
}

function gx(t, e) {
    if (!(t.mode === "percent")) {
        const {
            mode: r,
            ...o
        } = t;
        return o
    }
    return "x" in t ? {
        x: t.x / 100 * e.width,
        y: t.y / 100 * e.height
    } : {
        width: t.width / 100 * e.width,
        height: t.height / 100 * e.height
    }
}

function Rm(t, e) {
    return gx(t, e)
}

function Sn(t) {
    return typeof t == "boolean"
}

function Rt(t) {
    return typeof t == "string"
}

function Lt(t) {
    return typeof t == "number"
}

function Lm(t) {
    return typeof t == "function"
}

function gi(t) {
    return typeof t == "object" && t !== null
}

function Vt(t) {
    return Array.isArray(t)
}
const hs = "random",
    jo = "mid",
    il = new Map;

function mf(t) {
    il.set(t.key, t)
}

function Ql(t, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}

function vx(t) {
    for (const [, o] of il)
        if (t.startsWith(o.stringPrefix)) return o.parseString(t);
    const e = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
        n = t.replace(e, (o, s, l, a, u) => s + s + l + l + a + a + (u !== void 0 ? u + u : "")),
        i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,
        r = i.exec(n);
    return r ? {
        a: r[4] !== void 0 ? parseInt(r[4], 16) / 255 : 1,
        b: parseInt(r[3], 16),
        g: parseInt(r[2], 16),
        r: parseInt(r[1], 16)
    } : void 0
}

function jt(t, e, n = !0) {
    if (!t) return;
    const i = Rt(t) ? {
        value: t
    } : t;
    if (Rt(i.value)) return jm(i.value, e, n);
    if (Vt(i.value)) return jt({
        value: zc(i.value, e, n)
    });
    for (const [, r] of il) {
        const o = r.handleRangeColor(i);
        if (o) return o
    }
}

function jm(t, e, n = !0) {
    if (!t) return;
    const i = Rt(t) ? {
        value: t
    } : t;
    if (Rt(i.value)) return i.value === hs ? Om() : wx(i.value);
    if (Vt(i.value)) return jm({
        value: zc(i.value, e, n)
    });
    for (const [, r] of il) {
        const o = r.handleColor(i);
        if (o) return o
    }
}

function au(t, e, n = !0) {
    const i = jt(t, e, n);
    return i ? yx(i) : void 0
}

function yx(t) {
    const e = t.r / 255,
        n = t.g / 255,
        i = t.b / 255,
        r = Math.max(e, n, i),
        o = Math.min(e, n, i),
        s = {
            h: 0,
            l: (r + o) / 2,
            s: 0
        };
    return r !== o && (s.s = s.l < .5 ? (r - o) / (r + o) : (r - o) / (2 - r - o), s.h = e === r ? (n - i) / (r - o) : s.h = n === r ? 2 + (i - e) / (r - o) : 4 + (e - n) / (r - o)), s.l *= 100, s.s *= 100, s.h *= 60, s.h < 0 && (s.h += 360), s.h >= 360 && (s.h -= 360), s
}

function wx(t) {
    return vx(t)
}

function Ii(t) {
    const e = {
            b: 0,
            g: 0,
            r: 0
        },
        n = {
            h: t.h / 360,
            l: t.l / 100,
            s: t.s / 100
        };
    if (!n.s) e.r = e.g = e.b = n.l;
    else {
        const i = n.l < .5 ? n.l * (1 + n.s) : n.l + n.s - n.l * n.s,
            r = 2 * n.l - i;
        e.r = Ql(r, i, n.h + 1 / 3), e.g = Ql(r, i, n.h), e.b = Ql(r, i, n.h - 1 / 3)
    }
    return e.r = Math.floor(e.r * 255), e.g = Math.floor(e.g * 255), e.b = Math.floor(e.b * 255), e
}

function xx(t) {
    const e = Ii(t);
    return {
        a: t.a,
        b: e.b,
        g: e.g,
        r: e.r
    }
}

function Om(t) {
    const e = t ? ? 0;
    return {
        b: Math.floor(zt(Y(e, 256))),
        g: Math.floor(zt(Y(e, 256))),
        r: Math.floor(zt(Y(e, 256)))
    }
}

function Fn(t, e) {
    return `rgba(${t.r}, ${t.g}, ${t.b}, ${e??1})`
}

function gf(t, e) {
    return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${e??1})`
}

function kx(t, e, n, i) {
    let r = t,
        o = e;
    return r.r === void 0 && (r = Ii(t)), o.r === void 0 && (o = Ii(e)), {
        b: Hl(r.b, o.b, n, i),
        g: Hl(r.g, o.g, n, i),
        r: Hl(r.r, o.r, n, i)
    }
}

function vf(t, e, n) {
    if (n === hs) return Om();
    if (n === jo) {
        const i = t.getFillColor() ? ? t.getStrokeColor(),
            r = (e == null ? void 0 : e.getFillColor()) ? ? (e == null ? void 0 : e.getStrokeColor());
        if (i && r && e) return kx(i, r, t.getRadius(), e.getRadius()); {
            const o = i ? ? r;
            if (o) return Ii(o)
        }
    } else return n
}

function Sx(t, e, n) {
    const i = Rt(t) ? t : t.value;
    return i === hs ? n ? jt({
        value: i
    }) : e ? hs : jo : i === jo ? jo : jt({
        value: i
    })
}

function yf(t) {
    return t !== void 0 ? {
        h: t.h.value,
        s: t.s.value,
        l: t.l.value
    } : void 0
}

function _x(t, e, n) {
    const i = {
        h: {
            enable: !1,
            value: t.h
        },
        s: {
            enable: !1,
            value: t.s
        },
        l: {
            enable: !1,
            value: t.l
        }
    };
    return e && (Gl(i.h, e.h, n), Gl(i.s, e.s, n), Gl(i.l, e.l, n)), i
}

function Gl(t, e, n) {
    t.enable = e.enable, t.enable ? (t.velocity = B(e.speed) / 100 * n, t.decay = 1 - B(e.decay), t.status = "increasing", t.loops = 0, t.maxLoops = B(e.count), t.time = 0, t.delayTime = B(e.delay) * 1e3, e.sync || (t.velocity *= me(), t.value *= me()), t.initialValue = t.value) : t.velocity = 0
}

function Yl(t, e, n) {
    t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(n.x, n.y), t.closePath()
}

function bx(t, e, n, i) {
    t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(n.x, n.y), t.lineTo(i.x, i.y), t.closePath()
}

function Cx(t, e, n) {
    t.fillStyle = n ? ? "rgba(0,0,0,0)", t.fillRect(0, 0, e.width, e.height)
}

function Ex(t, e, n, i) {
    n && (t.globalAlpha = i, t.drawImage(n, 0, 0, e.width, e.height), t.globalAlpha = 1)
}

function Xl(t, e) {
    t.clearRect(0, 0, e.width, e.height)
}

function Px(t) {
    const {
        container: e,
        context: n,
        particle: i,
        delta: r,
        colorStyles: o,
        backgroundMask: s,
        composite: l,
        radius: a,
        opacity: u,
        shadow: c,
        transform: f
    } = t, d = i.getPosition(), v = i.rotation + (i.pathRotation ? i.velocity.angle : 0), y = {
        sin: Math.sin(v),
        cos: Math.cos(v)
    }, w = {
        a: y.cos * (f.a ? ? 1),
        b: y.sin * (f.b ? ? 1),
        c: -y.sin * (f.c ? ? 1),
        d: y.cos * (f.d ? ? 1)
    };
    n.setTransform(w.a, w.b, w.c, w.d, d.x, d.y), n.beginPath(), s && (n.globalCompositeOperation = l);
    const _ = i.shadowColor;
    c.enable && _ && (n.shadowBlur = c.blur, n.shadowColor = Fn(_), n.shadowOffsetX = c.offset.x, n.shadowOffsetY = c.offset.y), o.fill && (n.fillStyle = o.fill);
    const p = i.strokeWidth ? ? 0;
    n.lineWidth = p, o.stroke && (n.strokeStyle = o.stroke), zx(e, n, i, a, u, r), p > 0 && n.stroke(), i.close && n.closePath(), i.fill && n.fill(), $x(e, n, i, a, u, r), n.globalCompositeOperation = "source-over", n.setTransform(1, 0, 0, 1, 0, 0)
}

function zx(t, e, n, i, r, o) {
    if (!n.shape) return;
    const s = t.drawers.get(n.shape);
    s && s.draw(e, n, i, r, o, t.retina.pixelRatio)
}

function $x(t, e, n, i, r, o) {
    if (!n.shape) return;
    const s = t.drawers.get(n.shape);
    !s || !s.afterEffect || s.afterEffect(e, n, i, r, o, t.retina.pixelRatio)
}

function Tx(t, e, n) {
    e.draw && e.draw(t, n)
}

function Mx(t, e, n, i) {
    e.drawParticle && e.drawParticle(t, n, i)
}

function Rx(t, e, n) {
    return {
        h: t.h,
        s: t.s,
        l: t.l + (e === "darken" ? -1 : 1) * n
    }
}

function Lx(t, e, n) {
    const i = e[n];
    i !== void 0 && (t[n] = (t[n] ? ? 1) * i)
}
class jx {
    constructor(e) {
        this.container = e, this._applyPostDrawUpdaters = n => {
            for (const i of this._postDrawUpdaters) i.afterDraw && i.afterDraw(n)
        }, this._applyPreDrawUpdaters = (n, i, r, o, s, l) => {
            for (const a of this._preDrawUpdaters) {
                if (a.getColorStyles) {
                    const {
                        fill: u,
                        stroke: c
                    } = a.getColorStyles(i, n, r, o);
                    u && (s.fill = u), c && (s.stroke = c)
                }
                if (a.getTransformValues) {
                    const u = a.getTransformValues(i);
                    for (const c in u) Lx(l, u, c)
                }
                a.beforeDraw && a.beforeDraw(i)
            }
        }, this._applyResizePlugins = () => {
            for (const n of this._resizePlugins) n.resize && n.resize()
        }, this._getPluginParticleColors = n => {
            let i, r;
            for (const o of this._colorPlugins)
                if (!i && o.particleFillColor && (i = au(o.particleFillColor(n))), !r && o.particleStrokeColor && (r = au(o.particleStrokeColor(n))), i && r) break;
            return [i, r]
        }, this._initCover = () => {
            const n = this.container.actualOptions,
                i = n.backgroundMask.cover,
                r = i.color,
                o = jt(r);
            if (o) {
                const s = { ...o,
                    a: i.opacity
                };
                this._coverColorStyle = Fn(s, s.a)
            }
        }, this._initStyle = () => {
            const n = this.element,
                i = this.container.actualOptions;
            if (n) {
                this._fullScreen ? (this._originalStyle = Ue({}, n.style), this._setFullScreenStyle()) : this._resetOriginalStyle();
                for (const r in i.style) {
                    if (!r || !i.style) continue;
                    const o = i.style[r];
                    o && n.style.setProperty(r, o, "important")
                }
            }
        }, this._initTrail = async () => {
            const n = this.container.actualOptions,
                i = n.particles.move.trail,
                r = i.fill;
            if (i.enable)
                if (r.color) {
                    const o = jt(r.color);
                    if (!o) return;
                    const s = n.particles.move.trail;
                    this._trailFill = {
                        color: { ...o
                        },
                        opacity: 1 / s.length
                    }
                } else await new Promise((o, s) => {
                    if (!r.image) return;
                    const l = document.createElement("img");
                    l.addEventListener("load", () => {
                        this._trailFill = {
                            image: l,
                            opacity: 1 / i.length
                        }, o()
                    }), l.addEventListener("error", a => {
                        s(a.error)
                    }), l.src = r.image
                })
        }, this._paintBase = n => {
            this.draw(i => Cx(i, this.size, n))
        }, this._paintImage = (n, i) => {
            this.draw(r => Ex(r, this.size, n, i))
        }, this._repairStyle = () => {
            const n = this.element;
            n && (this._safeMutationObserver(i => i.disconnect()), this._initStyle(), this.initBackground(), this._safeMutationObserver(i => i.observe(n, {
                attributes: !0
            })))
        }, this._resetOriginalStyle = () => {
            const n = this.element,
                i = this._originalStyle;
            if (!(n && i)) return;
            const r = n.style;
            r.position = i.position, r.zIndex = i.zIndex, r.top = i.top, r.left = i.left, r.width = i.width, r.height = i.height
        }, this._safeMutationObserver = n => {
            this._mutationObserver && n(this._mutationObserver)
        }, this._setFullScreenStyle = () => {
            const n = this.element;
            if (!n) return;
            const i = "important",
                r = n.style;
            r.setProperty("position", "fixed", i), r.setProperty("z-index", this.container.actualOptions.fullScreen.zIndex.toString(10), i), r.setProperty("top", "0", i), r.setProperty("left", "0", i), r.setProperty("width", "100%", i), r.setProperty("height", "100%", i)
        }, this.size = {
            height: 0,
            width: 0
        }, this._context = null, this._generated = !1, this._preDrawUpdaters = [], this._postDrawUpdaters = [], this._resizePlugins = [], this._colorPlugins = []
    }
    get _fullScreen() {
        return this.container.actualOptions.fullScreen.enable
    }
    clear() {
        const e = this.container.actualOptions,
            n = e.particles.move.trail,
            i = this._trailFill;
        e.backgroundMask.enable ? this.paint() : n.enable && n.length > 0 && i ? i.color ? this._paintBase(Fn(i.color, i.opacity)) : i.image && this._paintImage(i.image, i.opacity) : this.draw(r => {
            Xl(r, this.size)
        })
    }
    destroy() {
        if (this.stop(), this._generated) {
            const e = this.element;
            e && e.remove()
        } else this._resetOriginalStyle();
        this._preDrawUpdaters = [], this._postDrawUpdaters = [], this._resizePlugins = [], this._colorPlugins = []
    }
    draw(e) {
        const n = this._context;
        if (n) return e(n)
    }
    drawParticle(e, n) {
        if (e.spawning || e.destroyed) return;
        const i = e.getRadius();
        if (i <= 0) return;
        const r = e.getFillColor(),
            o = e.getStrokeColor() ? ? r;
        let [s, l] = this._getPluginParticleColors(e);
        s || (s = r), l || (l = o), !(!s && !l) && this.draw(a => {
            var g;
            const u = this.container,
                c = u.actualOptions,
                f = e.options.zIndex,
                d = (1 - e.zIndexFactor) ** f.opacityRate,
                v = e.bubble.opacity ? ? ((g = e.opacity) == null ? void 0 : g.value) ? ? 1,
                y = e.strokeOpacity ? ? v,
                w = v * d,
                _ = y * d,
                p = {},
                h = {
                    fill: s ? gf(s, w) : void 0
                };
            h.stroke = l ? gf(l, _) : h.fill, this._applyPreDrawUpdaters(a, e, i, w, h, p), Px({
                container: u,
                context: a,
                particle: e,
                delta: n,
                colorStyles: h,
                backgroundMask: c.backgroundMask.enable,
                composite: c.backgroundMask.composite,
                radius: i * (1 - e.zIndexFactor) ** f.sizeRate,
                opacity: w,
                shadow: e.options.shadow,
                transform: p
            }), this._applyPostDrawUpdaters(e)
        })
    }
    drawParticlePlugin(e, n, i) {
        this.draw(r => Mx(r, e, n, i))
    }
    drawPlugin(e, n) {
        this.draw(i => Tx(i, e, n))
    }
    async init() {
        this._safeMutationObserver(e => e.disconnect()), this._mutationObserver = fx(e => {
            for (const n of e) n.type === "attributes" && n.attributeName === "style" && this._repairStyle()
        }), this.resize(), this._initStyle(), this._initCover();
        try {
            await this._initTrail()
        } catch (e) {
            Fr().error(e)
        }
        this.initBackground(), this._safeMutationObserver(e => {
            this.element && e.observe(this.element, {
                attributes: !0
            })
        }), this.initUpdaters(), this.initPlugins(), this.paint()
    }
    initBackground() {
        const e = this.container.actualOptions,
            n = e.background,
            i = this.element;
        if (!i) return;
        const r = i.style;
        if (r) {
            if (n.color) {
                const o = jt(n.color);
                r.backgroundColor = o ? Fn(o, n.opacity) : ""
            } else r.backgroundColor = "";
            r.backgroundImage = n.image || "", r.backgroundPosition = n.position || "", r.backgroundRepeat = n.repeat || "", r.backgroundSize = n.size || ""
        }
    }
    initPlugins() {
        this._resizePlugins = [];
        for (const [, e] of this.container.plugins) e.resize && this._resizePlugins.push(e), (e.particleFillColor || e.particleStrokeColor) && this._colorPlugins.push(e)
    }
    initUpdaters() {
        this._preDrawUpdaters = [], this._postDrawUpdaters = [];
        for (const e of this.container.particles.updaters) e.afterDraw && this._postDrawUpdaters.push(e), (e.getColorStyles || e.getTransformValues || e.beforeDraw) && this._preDrawUpdaters.push(e)
    }
    loadCanvas(e) {
        this._generated && this.element && this.element.remove(), this._generated = e.dataset && vr in e.dataset ? e.dataset[vr] === "true" : this._generated, this.element = e, this.element.ariaHidden = "true", this._originalStyle = Ue({}, this.element.style), this.size.height = e.offsetHeight, this.size.width = e.offsetWidth, this._context = this.element.getContext("2d"), this._safeMutationObserver(n => {
            this.element && n.observe(this.element, {
                attributes: !0
            })
        }), this.container.retina.init(), this.initBackground()
    }
    paint() {
        const e = this.container.actualOptions;
        this.draw(n => {
            e.backgroundMask.enable && e.backgroundMask.cover ? (Xl(n, this.size), this._paintBase(this._coverColorStyle)) : this._paintBase()
        })
    }
    resize() {
        if (!this.element) return !1;
        const e = this.container,
            n = e.retina.pixelRatio,
            i = e.canvas.size,
            r = {
                width: this.element.offsetWidth * n,
                height: this.element.offsetHeight * n
            };
        if (r.height === i.height && r.width === i.width && r.height === this.element.height && r.width === this.element.width) return !1;
        const o = { ...i
        };
        return this.element.width = i.width = this.element.offsetWidth * n, this.element.height = i.height = this.element.offsetHeight * n, this.container.started && (this.resizeFactor = {
            width: i.width / o.width,
            height: i.height / o.height
        }), !0
    }
    stop() {
        this._safeMutationObserver(e => e.disconnect()), this._mutationObserver = void 0, this.draw(e => Xl(e, this.size))
    }
    async windowResize() {
        if (!this.element || !this.resize()) return;
        const e = this.container,
            n = e.updateActualOptions();
        e.particles.setDensity(), this._applyResizePlugins(), n && await e.refresh()
    }
}

function pt(t, e, n, i, r) {
    if (i) {
        let o = {
            passive: !0
        };
        Sn(r) ? o.capture = r : r !== void 0 && (o = r), t.addEventListener(e, n, o)
    } else {
        const o = r;
        t.removeEventListener(e, n, o)
    }
}
class Ox {
    constructor(e) {
        this.container = e, this._doMouseTouchClick = n => {
            const i = this.container,
                r = i.actualOptions;
            if (this._canPush) {
                const o = i.interactivity.mouse,
                    s = o.position;
                if (!s) return;
                o.clickPosition = { ...s
                }, o.clickTime = new Date().getTime();
                const l = r.interactivity.events.onClick;
                Xn(l.mode, a => this.container.handleClickMode(a))
            }
            n.type === "touchend" && setTimeout(() => this._mouseTouchFinish(), 500)
        }, this._handleThemeChange = n => {
            const i = n,
                r = this.container,
                o = r.options,
                s = o.defaultThemes,
                l = i.matches ? s.dark : s.light,
                a = o.themes.find(u => u.name === l);
            a && a.default.auto && r.loadTheme(l)
        }, this._handleVisibilityChange = () => {
            const n = this.container,
                i = n.actualOptions;
            this._mouseTouchFinish(), i.pauseOnBlur && (document && document.hidden ? (n.pageHidden = !0, n.pause()) : (n.pageHidden = !1, n.getAnimationStatus() ? n.play(!0) : n.draw(!0)))
        }, this._handleWindowResize = async () => {
            this._resizeTimeout && (clearTimeout(this._resizeTimeout), delete this._resizeTimeout), this._resizeTimeout = setTimeout(async () => {
                const n = this.container.canvas;
                n && await n.windowResize()
            }, this.container.actualOptions.interactivity.events.resize.delay * 1e3)
        }, this._manageInteractivityListeners = (n, i) => {
            const r = this._handlers,
                o = this.container,
                s = o.actualOptions,
                l = o.interactivity.element;
            if (!l) return;
            const a = l,
                u = o.canvas.element;
            u && (u.style.pointerEvents = a === u ? "initial" : "none"), (s.interactivity.events.onHover.enable || s.interactivity.events.onClick.enable) && (pt(l, hf, r.mouseMove, i), pt(l, tx, r.touchStart, i), pt(l, nx, r.touchMove, i), s.interactivity.events.onClick.enable ? (pt(l, pf, r.touchEndClick, i), pt(l, Zw, r.mouseUp, i), pt(l, Jw, r.mouseDown, i)) : pt(l, pf, r.touchEnd, i), pt(l, n, r.mouseLeave, i), pt(l, ix, r.touchCancel, i))
        }, this._manageListeners = n => {
            const i = this._handlers,
                r = this.container,
                o = r.actualOptions,
                s = o.interactivity.detectsOn,
                l = r.canvas.element;
            let a = ff;
            s === "window" ? (r.interactivity.element = window, a = ex) : s === "parent" && l ? r.interactivity.element = l.parentElement ? ? l.parentNode : r.interactivity.element = l, this._manageMediaMatch(n), this._manageResize(n), this._manageInteractivityListeners(a, n), document && pt(document, ox, i.visibilityChange, n, !1)
        }, this._manageMediaMatch = n => {
            const i = this._handlers,
                r = Tm("(prefers-color-scheme: dark)");
            if (r) {
                if (r.addEventListener !== void 0) {
                    pt(r, "change", i.themeChange, n);
                    return
                }
                r.addListener !== void 0 && (n ? r.addListener(i.oldThemeChange) : r.removeListener(i.oldThemeChange))
            }
        }, this._manageResize = n => {
            const i = this._handlers,
                r = this.container;
            if (!r.actualOptions.interactivity.events.resize) return;
            if (typeof ResizeObserver > "u") {
                pt(window, rx, i.resize, n);
                return
            }
            const s = r.canvas.element;
            this._resizeObserver && !n ? (s && this._resizeObserver.unobserve(s), this._resizeObserver.disconnect(), delete this._resizeObserver) : !this._resizeObserver && n && s && (this._resizeObserver = new ResizeObserver(async l => {
                l.find(u => u.target === s) && await this._handleWindowResize()
            }), this._resizeObserver.observe(s))
        }, this._mouseDown = () => {
            const {
                interactivity: n
            } = this.container;
            if (!n) return;
            const {
                mouse: i
            } = n;
            i.clicking = !0, i.downPosition = i.position
        }, this._mouseTouchClick = n => {
            const i = this.container,
                r = i.actualOptions,
                {
                    mouse: o
                } = i.interactivity;
            o.inside = !0;
            let s = !1;
            const l = o.position;
            if (!(!l || !r.interactivity.events.onClick.enable)) {
                for (const [, a] of i.plugins)
                    if (a.clickPositionValid && (s = a.clickPositionValid(l), s)) break;
                s || this._doMouseTouchClick(n), o.clicking = !1
            }
        }, this._mouseTouchFinish = () => {
            const n = this.container.interactivity;
            if (!n) return;
            const i = n.mouse;
            delete i.position, delete i.clickPosition, delete i.downPosition, n.status = ff, i.inside = !1, i.clicking = !1
        }, this._mouseTouchMove = n => {
            const i = this.container,
                r = i.actualOptions,
                o = i.interactivity,
                s = i.canvas.element;
            if (!o || !o.element) return;
            o.mouse.inside = !0;
            let l;
            if (n.type.startsWith("pointer")) {
                this._canPush = !0;
                const u = n;
                if (o.element === window) {
                    if (s) {
                        const c = s.getBoundingClientRect();
                        l = {
                            x: u.clientX - c.left,
                            y: u.clientY - c.top
                        }
                    }
                } else if (r.interactivity.detectsOn === "parent") {
                    const c = u.target,
                        f = u.currentTarget;
                    if (c && f && s) {
                        const d = c.getBoundingClientRect(),
                            v = f.getBoundingClientRect(),
                            y = s.getBoundingClientRect();
                        l = {
                            x: u.offsetX + 2 * d.left - (v.left + y.left),
                            y: u.offsetY + 2 * d.top - (v.top + y.top)
                        }
                    } else l = {
                        x: u.offsetX ? ? u.clientX,
                        y: u.offsetY ? ? u.clientY
                    }
                } else u.target === s && (l = {
                    x: u.offsetX ? ? u.clientX,
                    y: u.offsetY ? ? u.clientY
                })
            } else if (this._canPush = n.type !== "touchmove", s) {
                const u = n,
                    c = u.touches[u.touches.length - 1],
                    f = s.getBoundingClientRect();
                l = {
                    x: c.clientX - (f.left ? ? 0),
                    y: c.clientY - (f.top ? ? 0)
                }
            }
            const a = i.retina.pixelRatio;
            l && (l.x *= a, l.y *= a), o.mouse.position = l, o.status = hf
        }, this._touchEnd = n => {
            const i = n,
                r = Array.from(i.changedTouches);
            for (const o of r) this._touches.delete(o.identifier);
            this._mouseTouchFinish()
        }, this._touchEndClick = n => {
            const i = n,
                r = Array.from(i.changedTouches);
            for (const o of r) this._touches.delete(o.identifier);
            this._mouseTouchClick(n)
        }, this._touchStart = n => {
            const i = n,
                r = Array.from(i.changedTouches);
            for (const o of r) this._touches.set(o.identifier, performance.now());
            this._mouseTouchMove(n)
        }, this._canPush = !0, this._touches = new Map, this._handlers = {
            mouseDown: () => this._mouseDown(),
            mouseLeave: () => this._mouseTouchFinish(),
            mouseMove: n => this._mouseTouchMove(n),
            mouseUp: n => this._mouseTouchClick(n),
            touchStart: n => this._touchStart(n),
            touchMove: n => this._mouseTouchMove(n),
            touchEnd: n => this._touchEnd(n),
            touchCancel: n => this._touchEnd(n),
            touchEndClick: n => this._touchEndClick(n),
            visibilityChange: () => this._handleVisibilityChange(),
            themeChange: n => this._handleThemeChange(n),
            oldThemeChange: n => this._handleThemeChange(n),
            resize: () => {
                this._handleWindowResize()
            }
        }
    }
    addListeners() {
        this._manageListeners(!0)
    }
    removeListeners() {
        this._manageListeners(!1)
    }
}
class Qe {
    constructor() {
        this.value = ""
    }
    static create(e, n) {
        const i = new Qe;
        return i.load(e), n !== void 0 && (Rt(n) || Vt(n) ? i.load({
            value: n
        }) : i.load(n)), i
    }
    load(e) {
        (e == null ? void 0 : e.value) !== void 0 && (this.value = e.value)
    }
}
let Ix = class {
    constructor() {
        this.color = new Qe, this.color.value = "", this.image = "", this.position = "", this.repeat = "", this.size = "", this.opacity = 1
    }
    load(e) {
        e && (e.color !== void 0 && (this.color = Qe.create(this.color, e.color)), e.image !== void 0 && (this.image = e.image), e.position !== void 0 && (this.position = e.position), e.repeat !== void 0 && (this.repeat = e.repeat), e.size !== void 0 && (this.size = e.size), e.opacity !== void 0 && (this.opacity = e.opacity))
    }
};
class Dx {
    constructor() {
        this.color = new Qe, this.color.value = "#fff", this.opacity = 1
    }
    load(e) {
        e && (e.color !== void 0 && (this.color = Qe.create(this.color, e.color)), e.opacity !== void 0 && (this.opacity = e.opacity))
    }
}
class Ax {
    constructor() {
        this.composite = "destination-out", this.cover = new Dx, this.enable = !1
    }
    load(e) {
        if (e) {
            if (e.composite !== void 0 && (this.composite = e.composite), e.cover !== void 0) {
                const n = e.cover,
                    i = Rt(e.cover) ? {
                        color: e.cover
                    } : e.cover;
                this.cover.load(n.color !== void 0 ? n : {
                    color: i
                })
            }
            e.enable !== void 0 && (this.enable = e.enable)
        }
    }
}
class Nx {
    constructor() {
        this.enable = !0, this.zIndex = 0
    }
    load(e) {
        e && (e.enable !== void 0 && (this.enable = e.enable), e.zIndex !== void 0 && (this.zIndex = e.zIndex))
    }
}
class Fx {
    constructor() {
        this.enable = !1, this.mode = []
    }
    load(e) {
        e && (e.enable !== void 0 && (this.enable = e.enable), e.mode !== void 0 && (this.mode = e.mode))
    }
}
class wf {
    constructor() {
        this.selectors = [], this.enable = !1, this.mode = [], this.type = "circle"
    }
    get el() {
        return this.elementId
    }
    set el(e) {
        this.elementId = e
    }
    get elementId() {
        return this.ids
    }
    set elementId(e) {
        this.ids = e
    }
    get ids() {
        return Xn(this.selectors, e => e.replace("#", ""))
    }
    set ids(e) {
        this.selectors = Xn(e, n => `#${n}`)
    }
    load(e) {
        if (!e) return;
        const n = e.ids ? ? e.elementId ? ? e.el;
        n !== void 0 && (this.ids = n), e.selectors !== void 0 && (this.selectors = e.selectors), e.enable !== void 0 && (this.enable = e.enable), e.mode !== void 0 && (this.mode = e.mode), e.type !== void 0 && (this.type = e.type)
    }
}
class Ux {
    constructor() {
        this.enable = !1, this.force = 2, this.smooth = 10
    }
    load(e) {
        e && (e.enable !== void 0 && (this.enable = e.enable), e.force !== void 0 && (this.force = e.force), e.smooth !== void 0 && (this.smooth = e.smooth))
    }
}
class Bx {
    constructor() {
        this.enable = !1, this.mode = [], this.parallax = new Ux
    }
    load(e) {
        e && (e.enable !== void 0 && (this.enable = e.enable), e.mode !== void 0 && (this.mode = e.mode), this.parallax.load(e.parallax))
    }
}
class Wx {
    constructor() {
        this.delay = .5, this.enable = !0
    }
    load(e) {
        e !== void 0 && (e.delay !== void 0 && (this.delay = e.delay), e.enable !== void 0 && (this.enable = e.enable))
    }
}
class Vx {
    constructor() {
        this.onClick = new Fx, this.onDiv = new wf, this.onHover = new Bx, this.resize = new Wx
    }
    get onclick() {
        return this.onClick
    }
    set onclick(e) {
        this.onClick = e
    }
    get ondiv() {
        return this.onDiv
    }
    set ondiv(e) {
        this.onDiv = e
    }
    get onhover() {
        return this.onHover
    }
    set onhover(e) {
        this.onHover = e
    }
    load(e) {
        if (!e) return;
        this.onClick.load(e.onClick ? ? e.onclick);
        const n = e.onDiv ? ? e.ondiv;
        n !== void 0 && (this.onDiv = Xn(n, i => {
            const r = new wf;
            return r.load(i), r
        })), this.onHover.load(e.onHover ? ? e.onhover), Sn(e.resize) ? this.resize.enable = e.resize : this.resize.load(e.resize)
    }
}
class Hx {
    constructor(e, n) {
        this._engine = e, this._container = n
    }
    load(e) {
        if (!e || !this._container) return;
        const n = this._engine.plugins.interactors.get(this._container);
        if (n)
            for (const i of n) i.loadModeOptions && i.loadModeOptions(this, e)
    }
}
class Im {
    constructor(e, n) {
        this.detectsOn = "window", this.events = new Vx, this.modes = new Hx(e, n)
    }
    get detect_on() {
        return this.detectsOn
    }
    set detect_on(e) {
        this.detectsOn = e
    }
    load(e) {
        if (!e) return;
        const n = e.detectsOn ? ? e.detect_on;
        n !== void 0 && (this.detectsOn = n), this.events.load(e.events), this.modes.load(e.modes)
    }
}
class Qx {
    load(e) {
        e && (e.position && (this.position = {
            x: e.position.x ? ? 50,
            y: e.position.y ? ? 50,
            mode: e.position.mode ? ? "percent"
        }), e.options && (this.options = Ue({}, e.options)))
    }
}
class Gx {
    constructor() {
        this.maxWidth = 1 / 0, this.options = {}, this.mode = "canvas"
    }
    load(e) {
        e && (e.maxWidth !== void 0 && (this.maxWidth = e.maxWidth), e.mode !== void 0 && (e.mode === "screen" ? this.mode = "screen" : this.mode = "canvas"), e.options !== void 0 && (this.options = Ue({}, e.options)))
    }
}
class Yx {
    constructor() {
        this.auto = !1, this.mode = "any", this.value = !1
    }
    load(e) {
        e && (e.auto !== void 0 && (this.auto = e.auto), e.mode !== void 0 && (this.mode = e.mode), e.value !== void 0 && (this.value = e.value))
    }
}
class Xx {
    constructor() {
        this.name = "", this.default = new Yx
    }
    load(e) {
        e && (e.name !== void 0 && (this.name = e.name), this.default.load(e.default), e.options !== void 0 && (this.options = Ue({}, e.options)))
    }
}
class Kl {
    constructor() {
        this.count = 0, this.enable = !1, this.offset = 0, this.speed = 1, this.delay = 0, this.decay = 0, this.sync = !0
    }
    load(e) {
        e && (e.count !== void 0 && (this.count = Y(e.count)), e.enable !== void 0 && (this.enable = e.enable), e.offset !== void 0 && (this.offset = Y(e.offset)), e.speed !== void 0 && (this.speed = Y(e.speed)), e.decay !== void 0 && (this.decay = Y(e.decay)), e.delay !== void 0 && (this.delay = Y(e.delay)), e.sync !== void 0 && (this.sync = e.sync))
    }
}
class Kx {
    constructor() {
        this.h = new Kl, this.s = new Kl, this.l = new Kl
    }
    load(e) {
        e && (this.h.load(e.h), this.s.load(e.s), this.l.load(e.l))
    }
}
class Ur extends Qe {
    constructor() {
        super(), this.animation = new Kx
    }
    static create(e, n) {
        const i = new Ur;
        return i.load(e), n !== void 0 && (Rt(n) || Vt(n) ? i.load({
            value: n
        }) : i.load(n)), i
    }
    load(e) {
        if (super.load(e), !e) return;
        const n = e.animation;
        n !== void 0 && (n.enable !== void 0 ? this.animation.h.load(n) : this.animation.load(e.animation))
    }
}
class qx {
    constructor() {
        this.speed = 2
    }
    load(e) {
        e && e.speed !== void 0 && (this.speed = e.speed)
    }
}
class Jx {
    constructor() {
        this.enable = !0, this.retries = 0
    }
    load(e) {
        e && (e.enable !== void 0 && (this.enable = e.enable), e.retries !== void 0 && (this.retries = e.retries))
    }
}
class Zx {
    constructor() {
        this.count = 0, this.enable = !1, this.speed = 1, this.decay = 0, this.delay = 0, this.sync = !1
    }
    load(e) {
        e && (e.count !== void 0 && (this.count = Y(e.count)), e.enable !== void 0 && (this.enable = e.enable), e.speed !== void 0 && (this.speed = Y(e.speed)), e.decay !== void 0 && (this.decay = Y(e.decay)), e.delay !== void 0 && (this.delay = Y(e.delay)), e.sync !== void 0 && (this.sync = e.sync))
    }
}
class Dm extends Zx {
    constructor() {
        super(), this.mode = "auto", this.startValue = "random"
    }
    load(e) {
        super.load(e), e && (e.minimumValue !== void 0 && (this.minimumValue = e.minimumValue), e.mode !== void 0 && (this.mode = e.mode), e.startValue !== void 0 && (this.startValue = e.startValue))
    }
}
class ek {
    constructor() {
        this.enable = !1, this.minimumValue = 0
    }
    load(e) {
        e && (e.enable !== void 0 && (this.enable = e.enable), e.minimumValue !== void 0 && (this.minimumValue = e.minimumValue))
    }
}
class Kr {
    constructor() {
        this.random = new ek, this.value = 0
    }
    load(e) {
        e && (Sn(e.random) ? this.random.enable = e.random : this.random.load(e.random), e.value !== void 0 && (this.value = Y(e.value, this.random.enable ? this.random.minimumValue : void 0)))
    }
}
class xf extends Kr {
    constructor() {
        super(), this.random.minimumValue = .1, this.value = 1
    }
}
class Am {
    constructor() {
        this.horizontal = new xf, this.vertical = new xf
    }
    load(e) {
        e && (this.horizontal.load(e.horizontal), this.vertical.load(e.vertical))
    }
}
class tk {
    constructor() {
        this.absorb = new qx, this.bounce = new Am, this.enable = !1, this.maxSpeed = 50, this.mode = "bounce", this.overlap = new Jx
    }
    load(e) {
        e && (this.absorb.load(e.absorb), this.bounce.load(e.bounce), e.enable !== void 0 && (this.enable = e.enable), e.maxSpeed !== void 0 && (this.maxSpeed = Y(e.maxSpeed)), e.mode !== void 0 && (this.mode = e.mode), this.overlap.load(e.overlap))
    }
}
class nk {
    constructor() {
        this.offset = 0, this.value = 90
    }
    load(e) {
        e && (e.offset !== void 0 && (this.offset = Y(e.offset)), e.value !== void 0 && (this.value = Y(e.value)))
    }
}
class ik {
    constructor() {
        this.distance = 200, this.enable = !1, this.rotate = {
            x: 3e3,
            y: 3e3
        }
    }
    get rotateX() {
        return this.rotate.x
    }
    set rotateX(e) {
        this.rotate.x = e
    }
    get rotateY() {
        return this.rotate.y
    }
    set rotateY(e) {
        this.rotate.y = e
    }
    load(e) {
        var r, o;
        if (!e) return;
        e.distance !== void 0 && (this.distance = Y(e.distance)), e.enable !== void 0 && (this.enable = e.enable);
        const n = ((r = e.rotate) == null ? void 0 : r.x) ? ? e.rotateX;
        n !== void 0 && (this.rotate.x = n);
        const i = ((o = e.rotate) == null ? void 0 : o.y) ? ? e.rotateY;
        i !== void 0 && (this.rotate.y = i)
    }
}
class rk {
    constructor() {
        this.x = 50, this.y = 50, this.mode = "percent", this.radius = 0
    }
    load(e) {
        e && (e.x !== void 0 && (this.x = e.x), e.y !== void 0 && (this.y = e.y), e.mode !== void 0 && (this.mode = e.mode), e.radius !== void 0 && (this.radius = e.radius))
    }
}
class ok {
    constructor() {
        this.acceleration = 9.81, this.enable = !1, this.inverse = !1, this.maxSpeed = 50
    }
    load(e) {
        e && (e.acceleration !== void 0 && (this.acceleration = Y(e.acceleration)), e.enable !== void 0 && (this.enable = e.enable), e.inverse !== void 0 && (this.inverse = e.inverse), e.maxSpeed !== void 0 && (this.maxSpeed = Y(e.maxSpeed)))
    }
}
class sk {
    constructor() {
        this.clamp = !0, this.delay = new Kr, this.enable = !1, this.options = {}
    }
    load(e) {
        e && (e.clamp !== void 0 && (this.clamp = e.clamp), this.delay.load(e.delay), e.enable !== void 0 && (this.enable = e.enable), this.generator = e.generator, e.options && (this.options = Ue(this.options, e.options)))
    }
}
class lk {
    load(e) {
        e && (e.color !== void 0 && (this.color = Qe.create(this.color, e.color)), e.image !== void 0 && (this.image = e.image))
    }
}
class ak {
    constructor() {
        this.enable = !1, this.length = 10, this.fill = new lk
    }
    get fillColor() {
        return this.fill.color
    }
    set fillColor(e) {
        this.fill.load({
            color: e
        })
    }
    load(e) {
        e && (e.enable !== void 0 && (this.enable = e.enable), (e.fill !== void 0 || e.fillColor !== void 0) && this.fill.load(e.fill || {
            color: e.fillColor
        }), e.length !== void 0 && (this.length = e.length))
    }
}
class uk {
    constructor() {
        this.default = "out"
    }
    load(e) {
        e && (e.default !== void 0 && (this.default = e.default), this.bottom = e.bottom ? ? e.default, this.left = e.left ? ? e.default, this.right = e.right ? ? e.default, this.top = e.top ? ? e.default)
    }
}
class ck {
    constructor() {
        this.acceleration = 0, this.enable = !1
    }
    load(e) {
        e && (e.acceleration !== void 0 && (this.acceleration = Y(e.acceleration)), e.enable !== void 0 && (this.enable = e.enable), e.position && (this.position = Ue({}, e.position)))
    }
}
class dk {
    constructor() {
        this.angle = new nk, this.attract = new ik, this.center = new rk, this.decay = 0, this.distance = {}, this.direction = "none", this.drift = 0, this.enable = !1, this.gravity = new ok, this.path = new sk, this.outModes = new uk, this.random = !1, this.size = !1, this.speed = 2, this.spin = new ck, this.straight = !1, this.trail = new ak, this.vibrate = !1, this.warp = !1
    }
    get bounce() {
        return this.collisions
    }
    set bounce(e) {
        this.collisions = e
    }
    get collisions() {
        return !1
    }
    set collisions(e) {}
    get noise() {
        return this.path
    }
    set noise(e) {
        this.path = e
    }
    get outMode() {
        return this.outModes.default
    }
    set outMode(e) {
        this.outModes.default = e
    }
    get out_mode() {
        return this.outMode
    }
    set out_mode(e) {
        this.outMode = e
    }
    load(e) {
        if (!e) return;
        this.angle.load(Lt(e.angle) ? {
            value: e.angle
        } : e.angle), this.attract.load(e.attract), this.center.load(e.center), e.decay !== void 0 && (this.decay = Y(e.decay)), e.direction !== void 0 && (this.direction = e.direction), e.distance !== void 0 && (this.distance = Lt(e.distance) ? {
            horizontal: e.distance,
            vertical: e.distance
        } : { ...e.distance
        }), e.drift !== void 0 && (this.drift = Y(e.drift)), e.enable !== void 0 && (this.enable = e.enable), this.gravity.load(e.gravity);
        const n = e.outModes ? ? e.outMode ? ? e.out_mode;
        n !== void 0 && (gi(n) ? this.outModes.load(n) : this.outModes.load({
            default: n
        })), this.path.load(e.path ? ? e.noise), e.random !== void 0 && (this.random = e.random), e.size !== void 0 && (this.size = e.size), e.speed !== void 0 && (this.speed = Y(e.speed)), this.spin.load(e.spin), e.straight !== void 0 && (this.straight = e.straight), this.trail.load(e.trail), e.vibrate !== void 0 && (this.vibrate = e.vibrate), e.warp !== void 0 && (this.warp = e.warp)
    }
}
class fk extends Dm {
    constructor() {
        super(), this.destroy = "none", this.speed = 2
    }
    get opacity_min() {
        return this.minimumValue
    }
    set opacity_min(e) {
        this.minimumValue = e
    }
    load(e) {
        (e == null ? void 0 : e.opacity_min) !== void 0 && e.minimumValue === void 0 && (e.minimumValue = e.opacity_min), super.load(e), e && e.destroy !== void 0 && (this.destroy = e.destroy)
    }
}
class hk extends Kr {
    constructor() {
        super(), this.animation = new fk, this.random.minimumValue = .1, this.value = 1
    }
    get anim() {
        return this.animation
    }
    set anim(e) {
        this.animation = e
    }
    load(e) {
        if (!e) return;
        super.load(e);
        const n = e.animation ? ? e.anim;
        n !== void 0 && (this.animation.load(n), this.value = Y(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
    }
}
class pk {
    constructor() {
        this.enable = !1, this.width = 1920, this.height = 1080
    }
    get area() {
        return this.width
    }
    set area(e) {
        this.width = e
    }
    get factor() {
        return this.height
    }
    set factor(e) {
        this.height = e
    }
    get value_area() {
        return this.area
    }
    set value_area(e) {
        this.area = e
    }
    load(e) {
        if (!e) return;
        e.enable !== void 0 && (this.enable = e.enable);
        const n = e.width ? ? e.area ? ? e.value_area;
        n !== void 0 && (this.width = n);
        const i = e.height ? ? e.factor;
        i !== void 0 && (this.height = i)
    }
}
class mk {
    constructor() {
        this.density = new pk, this.limit = 0, this.value = 0
    }
    get max() {
        return this.limit
    }
    set max(e) {
        this.limit = e
    }
    load(e) {
        if (!e) return;
        this.density.load(e.density);
        const n = e.limit ? ? e.max;
        n !== void 0 && (this.limit = n), e.value !== void 0 && (this.value = e.value)
    }
}
class gk {
    constructor() {
        this.blur = 0, this.color = new Qe, this.enable = !1, this.offset = {
            x: 0,
            y: 0
        }, this.color.value = "#000"
    }
    load(e) {
        e && (e.blur !== void 0 && (this.blur = e.blur), this.color = Qe.create(this.color, e.color), e.enable !== void 0 && (this.enable = e.enable), e.offset !== void 0 && (e.offset.x !== void 0 && (this.offset.x = e.offset.x), e.offset.y !== void 0 && (this.offset.y = e.offset.y)))
    }
}
const ql = "character",
    Jl = "char",
    Zl = "image",
    ea = "images",
    ta = "polygon",
    na = "star";
class vk {
    constructor() {
        this.loadShape = (e, n, i, r) => {
            if (!e) return;
            const o = Vt(e),
                s = o ? [] : {},
                l = o !== Vt(this.options[n]),
                a = o !== Vt(this.options[i]);
            l && (this.options[n] = s), a && r && (this.options[i] = s), this.options[n] = Ue(this.options[n] ? ? s, e), (!this.options[i] || r) && (this.options[i] = Ue(this.options[i] ? ? s, e))
        }, this.close = !0, this.fill = !0, this.options = {}, this.type = "circle"
    }
    get character() {
        return this.options[ql] ? ? this.options[Jl]
    }
    set character(e) {
        this.options[Jl] = this.options[ql] = e
    }
    get custom() {
        return this.options
    }
    set custom(e) {
        this.options = e
    }
    get image() {
        return this.options[Zl] ? ? this.options[ea]
    }
    set image(e) {
        this.options[ea] = this.options[Zl] = e
    }
    get images() {
        return this.image
    }
    set images(e) {
        this.image = e
    }
    get polygon() {
        return this.options[ta] ? ? this.options[na]
    }
    set polygon(e) {
        this.options[na] = this.options[ta] = e
    }
    get stroke() {
        return []
    }
    set stroke(e) {}
    load(e) {
        if (!e) return;
        const n = e.options ? ? e.custom;
        if (n !== void 0)
            for (const i in n) {
                const r = n[i];
                r && (this.options[i] = Ue(this.options[i] ? ? {}, r))
            }
        this.loadShape(e.character, ql, Jl, !0), this.loadShape(e.polygon, ta, na, !1), this.loadShape(e.image ? ? e.images, Zl, ea, !0), e.close !== void 0 && (this.close = e.close), e.fill !== void 0 && (this.fill = e.fill), e.type !== void 0 && (this.type = e.type)
    }
}
class yk extends Dm {
    constructor() {
        super(), this.destroy = "none", this.speed = 5
    }
    get size_min() {
        return this.minimumValue
    }
    set size_min(e) {
        this.minimumValue = e
    }
    load(e) {
        (e == null ? void 0 : e.size_min) !== void 0 && e.minimumValue === void 0 && (e.minimumValue = e.size_min), super.load(e), e && e.destroy !== void 0 && (this.destroy = e.destroy)
    }
}
class wk extends Kr {
    constructor() {
        super(), this.animation = new yk, this.random.minimumValue = 1, this.value = 3
    }
    get anim() {
        return this.animation
    }
    set anim(e) {
        this.animation = e
    }
    load(e) {
        if (super.load(e), !e) return;
        const n = e.animation ? ? e.anim;
        n !== void 0 && (this.animation.load(n), this.value = Y(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
    }
}
class kf {
    constructor() {
        this.width = 0
    }
    load(e) {
        e && (e.color !== void 0 && (this.color = Ur.create(this.color, e.color)), e.width !== void 0 && (this.width = Y(e.width)), e.opacity !== void 0 && (this.opacity = Y(e.opacity)))
    }
}
class xk extends Kr {
    constructor() {
        super(), this.opacityRate = 1, this.sizeRate = 1, this.velocityRate = 1
    }
    load(e) {
        super.load(e), e && (e.opacityRate !== void 0 && (this.opacityRate = e.opacityRate), e.sizeRate !== void 0 && (this.sizeRate = e.sizeRate), e.velocityRate !== void 0 && (this.velocityRate = e.velocityRate))
    }
}
class kk {
    constructor(e, n) {
        this._engine = e, this._container = n, this.bounce = new Am, this.collisions = new tk, this.color = new Ur, this.color.value = "#fff", this.groups = {}, this.move = new dk, this.number = new mk, this.opacity = new hk, this.reduceDuplicates = !1, this.shadow = new gk, this.shape = new vk, this.size = new wk, this.stroke = new kf, this.zIndex = new xk
    }
    load(e) {
        var r, o, s;
        if (!e) return;
        if (this.bounce.load(e.bounce), this.color.load(Ur.create(this.color, e.color)), e.groups !== void 0)
            for (const l in e.groups) {
                const a = e.groups[l];
                a !== void 0 && (this.groups[l] = Ue(this.groups[l] ? ? {}, a))
            }
        this.move.load(e.move), this.number.load(e.number), this.opacity.load(e.opacity), e.reduceDuplicates !== void 0 && (this.reduceDuplicates = e.reduceDuplicates), this.shape.load(e.shape), this.size.load(e.size), this.shadow.load(e.shadow), this.zIndex.load(e.zIndex);
        const n = ((r = e.move) == null ? void 0 : r.collisions) ? ? ((o = e.move) == null ? void 0 : o.bounce);
        n !== void 0 && (this.collisions.enable = n), this.collisions.load(e.collisions), e.interactivity !== void 0 && (this.interactivity = Ue({}, e.interactivity));
        const i = e.stroke ? ? ((s = e.shape) == null ? void 0 : s.stroke);
        if (i && (this.stroke = Xn(i, l => {
                const a = new kf;
                return a.load(l), a
            })), this._container) {
            const l = this._engine.plugins.updaters.get(this._container);
            if (l)
                for (const u of l) u.loadOptions && u.loadOptions(this, e);
            const a = this._engine.plugins.interactors.get(this._container);
            if (a)
                for (const u of a) u.loadParticlesOptions && u.loadParticlesOptions(this, e)
        }
    }
}

function Nm(t, ...e) {
    for (const n of e) t.load(n)
}

function Fm(t, e, ...n) {
    const i = new kk(t, e);
    return Nm(i, ...n), i
}
class Sk {
    constructor(e, n) {
        this._findDefaultTheme = i => this.themes.find(r => r.default.value && r.default.mode === i) ? ? this.themes.find(r => r.default.value && r.default.mode === "any"), this._importPreset = i => {
            this.load(this._engine.plugins.getPreset(i))
        }, this._engine = e, this._container = n, this.autoPlay = !0, this.background = new Ix, this.backgroundMask = new Ax, this.defaultThemes = {}, this.delay = 0, this.fullScreen = new Nx, this.detectRetina = !0, this.duration = 0, this.fpsLimit = 120, this.interactivity = new Im(e, n), this.manualParticles = [], this.particles = Fm(this._engine, this._container), this.pauseOnBlur = !0, this.pauseOnOutsideViewport = !0, this.responsive = [], this.smooth = !1, this.style = {}, this.themes = [], this.zLayers = 100
    }
    get backgroundMode() {
        return this.fullScreen
    }
    set backgroundMode(e) {
        this.fullScreen.load(e)
    }
    get fps_limit() {
        return this.fpsLimit
    }
    set fps_limit(e) {
        this.fpsLimit = e
    }
    get retina_detect() {
        return this.detectRetina
    }
    set retina_detect(e) {
        this.detectRetina = e
    }
    load(e) {
        var s, l;
        if (!e) return;
        e.preset !== void 0 && Xn(e.preset, a => this._importPreset(a)), e.autoPlay !== void 0 && (this.autoPlay = e.autoPlay), e.delay !== void 0 && (this.delay = Y(e.delay));
        const n = e.detectRetina ? ? e.retina_detect;
        n !== void 0 && (this.detectRetina = n), e.duration !== void 0 && (this.duration = Y(e.duration));
        const i = e.fpsLimit ? ? e.fps_limit;
        i !== void 0 && (this.fpsLimit = i), e.pauseOnBlur !== void 0 && (this.pauseOnBlur = e.pauseOnBlur), e.pauseOnOutsideViewport !== void 0 && (this.pauseOnOutsideViewport = e.pauseOnOutsideViewport), e.zLayers !== void 0 && (this.zLayers = e.zLayers), this.background.load(e.background);
        const r = e.fullScreen ? ? e.backgroundMode;
        Sn(r) ? this.fullScreen.enable = r : this.fullScreen.load(r), this.backgroundMask.load(e.backgroundMask), this.interactivity.load(e.interactivity), e.manualParticles && (this.manualParticles = e.manualParticles.map(a => {
            const u = new Qx;
            return u.load(a), u
        })), this.particles.load(e.particles), this.style = Ue(this.style, e.style), this._engine.plugins.loadOptions(this, e), e.smooth !== void 0 && (this.smooth = e.smooth);
        const o = this._engine.plugins.interactors.get(this._container);
        if (o)
            for (const a of o) a.loadOptions && a.loadOptions(this, e);
        if (e.responsive !== void 0)
            for (const a of e.responsive) {
                const u = new Gx;
                u.load(a), this.responsive.push(u)
            }
        if (this.responsive.sort((a, u) => a.maxWidth - u.maxWidth), e.themes !== void 0)
            for (const a of e.themes) {
                const u = this.themes.find(c => c.name === a.name);
                if (u) u.load(a);
                else {
                    const c = new Xx;
                    c.load(a), this.themes.push(c)
                }
            }
        this.defaultThemes.dark = (s = this._findDefaultTheme("dark")) == null ? void 0 : s.name, this.defaultThemes.light = (l = this._findDefaultTheme("light")) == null ? void 0 : l.name
    }
    setResponsive(e, n, i) {
        this.load(i);
        const r = this.responsive.find(o => o.mode === "screen" && screen ? o.maxWidth > screen.availWidth : o.maxWidth * n > e);
        return this.load(r == null ? void 0 : r.options), r == null ? void 0 : r.maxWidth
    }
    setTheme(e) {
        if (e) {
            const n = this.themes.find(i => i.name === e);
            n && this.load(n.options)
        } else {
            const n = Tm("(prefers-color-scheme: dark)"),
                i = n && n.matches,
                r = this._findDefaultTheme(i ? "dark" : "light");
            r && this.load(r.options)
        }
    }
}
class _k {
    constructor(e, n) {
        this.container = n, this._engine = e, this._interactors = e.plugins.getInteractors(this.container, !0), this._externalInteractors = [], this._particleInteractors = []
    }
    async externalInteract(e) {
        for (const n of this._externalInteractors) n.isEnabled() && await n.interact(e)
    }
    handleClickMode(e) {
        for (const n of this._externalInteractors) n.handleClickMode && n.handleClickMode(e)
    }
    init() {
        this._externalInteractors = [], this._particleInteractors = [];
        for (const e of this._interactors) {
            switch (e.type) {
                case "external":
                    this._externalInteractors.push(e);
                    break;
                case "particles":
                    this._particleInteractors.push(e);
                    break
            }
            e.init()
        }
    }
    async particlesInteract(e, n) {
        for (const i of this._externalInteractors) i.clear(e, n);
        for (const i of this._particleInteractors) i.isEnabled(e) && await i.interact(e, n)
    }
    async reset(e) {
        for (const n of this._externalInteractors) n.isEnabled() && n.reset(e);
        for (const n of this._particleInteractors) n.isEnabled(e) && n.reset(e)
    }
}
const Sf = t => {
    if (!hx(t.outMode, t.checkModes)) return;
    const e = t.radius * 2;
    t.coord > t.maxCoord - e ? t.setCb(-t.radius) : t.coord < e && t.setCb(t.radius)
};
class bk {
    constructor(e, n, i, r, o, s) {
        this.container = i, this._calcPosition = (l, a, u, c = 0) => {
            for (const [, h] of l.plugins) {
                const g = h.particlePosition !== void 0 ? h.particlePosition(a, this) : void 0;
                if (g) return it.create(g.x, g.y, u)
            }
            const f = l.canvas.size,
                d = ux({
                    size: f,
                    position: a
                }),
                v = it.create(d.x, d.y, u),
                y = this.getRadius(),
                w = this.options.move.outModes,
                _ = h => {
                    Sf({
                        outMode: h,
                        checkModes: ["bounce", "bounce-horizontal"],
                        coord: v.x,
                        maxCoord: l.canvas.size.width,
                        setCb: g => v.x += g,
                        radius: y
                    })
                },
                p = h => {
                    Sf({
                        outMode: h,
                        checkModes: ["bounce", "bounce-vertical"],
                        coord: v.y,
                        maxCoord: l.canvas.size.height,
                        setCb: g => v.y += g,
                        radius: y
                    })
                };
            return _(w.left ? ? w.default), _(w.right ? ? w.default), p(w.top ? ? w.default), p(w.bottom ? ? w.default), this._checkOverlap(v, c) ? this._calcPosition(l, void 0, u, c + 1) : v
        }, this._calculateVelocity = () => {
            const l = ax(this.direction),
                a = l.copy(),
                u = this.options.move;
            if (u.direction === "inside" || u.direction === "outside") return a;
            const c = Math.PI / 180 * B(u.angle.value),
                f = Math.PI / 180 * B(u.angle.offset),
                d = {
                    left: f - c / 2,
                    right: f + c / 2
                };
            return u.straight || (a.angle += zt(Y(d.left, d.right))), u.random && typeof u.speed == "number" && (a.length *= me()), a
        }, this._checkOverlap = (l, a = 0) => {
            const u = this.options.collisions,
                c = this.getRadius();
            if (!u.enable) return !1;
            const f = u.overlap;
            if (f.enable) return !1;
            const d = f.retries;
            if (d >= 0 && a > d) throw new Error(`${Yn} particle is overlapping and can't be placed`);
            return !!this.container.particles.find(v => kn(l, v.position) < c + v.getRadius())
        }, this._getRollColor = l => {
            if (!l || !this.roll || !this.backColor && !this.roll.alter) return l;
            const a = this.roll.horizontal && this.roll.vertical ? 2 : 1,
                u = this.roll.horizontal ? Math.PI / 2 : 0;
            return Math.floor(((this.roll.angle ? ? 0) + u) / (Math.PI / a)) % 2 ? this.backColor ? this.backColor : this.roll.alter ? Rx(l, this.roll.alter.type, this.roll.alter.value) : l : l
        }, this._initPosition = l => {
            const a = this.container,
                u = B(this.options.zIndex.value);
            this.position = this._calcPosition(a, l, Oi(u, 0, a.zLayers)), this.initialPosition = this.position.copy();
            const c = a.canvas.size;
            switch (this.moveCenter = { ...Rm(this.options.move.center, c),
                radius: this.options.move.center.radius ? ? 0,
                mode: this.options.move.center.mode ? ? "percent"
            }, this.direction = lx(this.options.move.direction, this.position, this.moveCenter), this.options.move.direction) {
                case "inside":
                    this.outType = "inside";
                    break;
                case "outside":
                    this.outType = "outside";
                    break
            }
            this.offset = Mt.origin
        }, this._loadShapeData = (l, a) => {
            const u = l.options[this.shape];
            if (u) return Ue({
                close: l.close,
                fill: l.fill
            }, yr(u, this.id, a))
        }, this._engine = e, this.init(n, r, o, s)
    }
    destroy(e) {
        if (this.unbreakable || this.destroyed) return;
        this.destroyed = !0, this.bubble.inRange = !1, this.slow.inRange = !1;
        const n = this.container,
            i = this.pathGenerator;
        for (const [, r] of n.plugins) r.particleDestroyed && r.particleDestroyed(this, e);
        for (const r of n.particles.updaters) r.particleDestroyed && r.particleDestroyed(this, e);
        i && i.reset(this)
    }
    draw(e) {
        const n = this.container;
        for (const [, i] of n.plugins) n.canvas.drawParticlePlugin(i, this, e);
        n.canvas.drawParticle(this, e)
    }
    getFillColor() {
        return this._getRollColor(this.bubble.color ? ? yf(this.color))
    }
    getMass() {
        return this.getRadius() ** 2 * Math.PI / 2
    }
    getPosition() {
        return {
            x: this.position.x + this.offset.x,
            y: this.position.y + this.offset.y,
            z: this.position.z
        }
    }
    getRadius() {
        return this.bubble.radius ? ? this.size.value
    }
    getStrokeColor() {
        return this._getRollColor(this.bubble.color ? ? yf(this.strokeColor))
    }
    init(e, n, i, r) {
        const o = this.container,
            s = this._engine;
        this.id = e, this.group = r, this.fill = !0, this.pathRotation = !1, this.close = !0, this.lastPathTime = 0, this.destroyed = !1, this.unbreakable = !1, this.rotation = 0, this.misplaced = !1, this.retina = {
            maxDistance: {}
        }, this.outType = "normal", this.ignoresResizeRatio = !0;
        const l = o.retina.pixelRatio,
            a = o.actualOptions,
            u = Fm(this._engine, o, a.particles),
            c = u.shape.type,
            {
                reduceDuplicates: f
            } = u;
        this.shape = yr(c, this.id, f);
        const d = u.shape;
        if (i && i.shape && i.shape.type) {
            const g = i.shape.type,
                k = yr(g, this.id, f);
            k && (this.shape = k, d.load(i.shape))
        }
        this.shapeData = this._loadShapeData(d, f), u.load(i);
        const v = this.shapeData;
        v && u.load(v.particles);
        const y = new Im(s, o);
        y.load(o.actualOptions.interactivity), y.load(u.interactivity), this.interactivity = y, this.fill = (v == null ? void 0 : v.fill) ? ? u.shape.fill, this.close = (v == null ? void 0 : v.close) ? ? u.shape.close, this.options = u;
        const w = this.options.move.path;
        this.pathDelay = Pc(w.delay) * 1e3, w.generator && (this.pathGenerator = this._engine.plugins.getPathGenerator(w.generator), this.pathGenerator && o.addPath(w.generator, this.pathGenerator) && this.pathGenerator.init(o)), o.retina.initParticle(this), this.size = Mm(this.options.size, l), this.bubble = {
            inRange: !1
        }, this.slow = {
            inRange: !1,
            factor: 1
        }, this._initPosition(n), this.initialVelocity = this._calculateVelocity(), this.velocity = this.initialVelocity.copy(), this.moveDecay = 1 - B(this.options.move.decay);
        const _ = o.particles;
        _.needsSort = _.needsSort || _.lastZIndex < this.position.z, _.lastZIndex = this.position.z, this.zIndexFactor = this.position.z / o.zLayers, this.sides = 24;
        let p = o.drawers.get(this.shape);
        p || (p = this._engine.plugins.getShapeDrawer(this.shape), p && o.drawers.set(this.shape, p)), p && p.loadShape && p.loadShape(this);
        const h = p == null ? void 0 : p.getSidesCount;
        h && (this.sides = h(this)), this.spawning = !1, this.shadowColor = jt(this.options.shadow.color);
        for (const g of o.particles.updaters) g.init(this);
        for (const g of o.particles.movers) g.init && g.init(this);
        p && p.particleInit && p.particleInit(o, this);
        for (const [, g] of o.plugins) g.particleCreated && g.particleCreated(this)
    }
    isInsideCanvas() {
        const e = this.getRadius(),
            n = this.container.canvas.size,
            i = this.position;
        return i.x >= -e && i.y >= -e && i.y <= n.height + e && i.x <= n.width + e
    }
    isVisible() {
        return !this.destroyed && !this.spawning && this.isInsideCanvas()
    }
    reset() {
        for (const e of this.container.particles.updaters) e.reset && e.reset(this)
    }
}
class Ck {
    constructor(e, n) {
        this.position = e, this.particle = n
    }
}
class Um {
    constructor(e, n) {
        this.position = {
            x: e,
            y: n
        }
    }
}
class Kn extends Um {
    constructor(e, n, i, r) {
        super(e, n), this.size = {
            height: r,
            width: i
        }
    }
    contains(e) {
        const n = this.size.width,
            i = this.size.height,
            r = this.position;
        return e.x >= r.x && e.x <= r.x + n && e.y >= r.y && e.y <= r.y + i
    }
    intersects(e) {
        e instanceof qn && e.intersects(this);
        const n = this.size.width,
            i = this.size.height,
            r = this.position,
            o = e.position,
            s = e instanceof Kn ? e.size : {
                width: 0,
                height: 0
            },
            l = s.width,
            a = s.height;
        return o.x < r.x + n && o.x + l > r.x && o.y < r.y + i && o.y + a > r.y
    }
}
class qn extends Um {
    constructor(e, n, i) {
        super(e, n), this.radius = i
    }
    contains(e) {
        return kn(e, this.position) <= this.radius
    }
    intersects(e) {
        const n = this.position,
            i = e.position,
            r = {
                x: Math.abs(i.x - n.x),
                y: Math.abs(i.y - n.y)
            },
            o = this.radius;
        if (e instanceof qn) {
            const s = o + e.radius,
                l = Math.sqrt(r.x ** 2 + r.y ** 2);
            return s > l
        } else if (e instanceof Kn) {
            const {
                width: s,
                height: l
            } = e.size;
            return Math.pow(r.x - s, 2) + Math.pow(r.y - l, 2) <= o ** 2 || r.x <= o + s && r.y <= o + l || r.x <= s || r.y <= l
        }
        return !1
    }
}
class ps {
    constructor(e, n) {
        this.rectangle = e, this.capacity = n, this._subdivide = () => {
            const {
                x: i,
                y: r
            } = this.rectangle.position, {
                width: o,
                height: s
            } = this.rectangle.size, {
                capacity: l
            } = this;
            for (let a = 0; a < 4; a++) this._subs.push(new ps(new Kn(i + o / 2 * (a % 2), r + s / 2 * (Math.round(a / 2) - a % 2), o / 2, s / 2), l));
            this._divided = !0
        }, this._points = [], this._divided = !1, this._subs = []
    }
    insert(e) {
        return this.rectangle.contains(e.position) ? this._points.length < this.capacity ? (this._points.push(e), !0) : (this._divided || this._subdivide(), this._subs.some(n => n.insert(e))) : !1
    }
    query(e, n, i) {
        const r = i || [];
        if (!e.intersects(this.rectangle)) return [];
        for (const o of this._points) !e.contains(o.position) && kn(e.position, o.position) > o.particle.getRadius() && (!n || n(o.particle)) || r.push(o.particle);
        if (this._divided)
            for (const o of this._subs) o.query(e, n, r);
        return r
    }
    queryCircle(e, n, i) {
        return this.query(new qn(e.x, e.y, n), i)
    }
    queryRectangle(e, n, i) {
        return this.query(new Kn(e.x, e.y, n.width, n.height), i)
    }
}
const _f = 4,
    bf = t => new Kn(-t.width / 4, -t.height / 4, t.width * 3 / 2, t.height * 3 / 2);
let Ek = class {
    constructor(e, n) {
        this._applyDensity = (r, o, s) => {
            var v;
            if (!((v = r.number.density) != null && v.enable)) return;
            const l = r.number,
                a = this._initDensityFactor(l.density),
                u = l.value,
                c = l.limit > 0 ? l.limit : u,
                f = Math.min(u, c) * a + o,
                d = Math.min(this.count, this.filter(y => y.group === s).length);
            this.limit = l.limit * a, d < f ? this.push(Math.abs(f - d), void 0, r, s) : d > f && this.removeQuantity(d - f, s)
        }, this._initDensityFactor = r => {
            const o = this._container;
            if (!o.canvas.element || !r.enable) return 1;
            const s = o.canvas.element,
                l = o.retina.pixelRatio;
            return s.width * s.height / (r.factor * l ** 2 * r.area)
        }, this._pushParticle = (r, o, s, l) => {
            try {
                let a = this.pool.pop();
                a ? a.init(this._nextId, r, o, s) : a = new bk(this._engine, this._nextId, this._container, r, o, s);
                let u = !0;
                return l && (u = l(a)), u ? (this._array.push(a), this._zArray.push(a), this._nextId++, this._engine.dispatchEvent("particleAdded", {
                    container: this._container,
                    data: {
                        particle: a
                    }
                }), a) : void 0
            } catch (a) {
                Fr().warning(`${Yn} adding particle: ${a}`);
                return
            }
        }, this._removeParticle = (r, o, s) => {
            const l = this._array[r];
            if (!l || l.group !== o) return !1;
            l.destroy(s);
            const a = this._zArray.indexOf(l);
            return this._array.splice(r, 1), this._zArray.splice(a, 1), this.pool.push(l), this._engine.dispatchEvent("particleRemoved", {
                container: this._container,
                data: {
                    particle: l
                }
            }), !0
        }, this._engine = e, this._container = n, this._nextId = 0, this._array = [], this._zArray = [], this.pool = [], this.limit = 0, this.needsSort = !1, this.lastZIndex = 0, this._interactionManager = new _k(e, n);
        const i = n.canvas.size;
        this.quadTree = new ps(bf(i), _f), this.movers = this._engine.plugins.getMovers(n, !0), this.updaters = this._engine.plugins.getUpdaters(n, !0)
    }
    get count() {
        return this._array.length
    }
    addManualParticles() {
        const e = this._container,
            n = e.actualOptions;
        for (const i of n.manualParticles) this.addParticle(i.position ? Rm(i.position, e.canvas.size) : void 0, i.options)
    }
    addParticle(e, n, i, r) {
        const o = this._container,
            s = o.actualOptions,
            l = s.particles.number.limit;
        if (l > 0) {
            const a = this.count + 1 - l;
            a > 0 && this.removeQuantity(a)
        }
        return this._pushParticle(e, n, i, r)
    }
    clear() {
        this._array = [], this._zArray = []
    }
    destroy() {
        this._array = [], this._zArray = [], this.movers = [], this.updaters = []
    }
    async draw(e) {
        const n = this._container;
        n.canvas.clear(), await this.update(e);
        for (const [, i] of n.plugins) n.canvas.drawPlugin(i, e);
        for (const i of this._zArray) i.draw(e)
    }
    filter(e) {
        return this._array.filter(e)
    }
    find(e) {
        return this._array.find(e)
    }
    handleClickMode(e) {
        this._interactionManager.handleClickMode(e)
    }
    init() {
        var r;
        const e = this._container,
            n = e.actualOptions;
        this.lastZIndex = 0, this.needsSort = !1;
        let i = !1;
        this.updaters = this._engine.plugins.getUpdaters(e, !0), this._interactionManager.init();
        for (const [, o] of e.plugins)
            if (o.particlesInitialization !== void 0 && (i = o.particlesInitialization()), i) break;
        this._interactionManager.init();
        for (const [, o] of e.pathGenerators) o.init(e);
        if (this.addManualParticles(), !i) {
            for (const o in n.particles.groups) {
                const s = n.particles.groups[o];
                for (let l = this.count, a = 0; a < ((r = s.number) == null ? void 0 : r.value) && l < n.particles.number.value; l++, a++) this.addParticle(void 0, s, o)
            }
            for (let o = this.count; o < n.particles.number.value; o++) this.addParticle()
        }
    }
    push(e, n, i, r) {
        this.pushing = !0;
        for (let o = 0; o < e; o++) this.addParticle(n == null ? void 0 : n.position, i, r);
        this.pushing = !1
    }
    async redraw() {
        this.clear(), this.init(), await this.draw({
            value: 0,
            factor: 0
        })
    }
    remove(e, n, i) {
        this.removeAt(this._array.indexOf(e), void 0, n, i)
    }
    removeAt(e, n = 1, i, r) {
        if (e < 0 || e > this.count) return;
        let o = 0;
        for (let s = e; o < n && s < this.count; s++) this._removeParticle(s--, i, r) && o++
    }
    removeQuantity(e, n) {
        this.removeAt(0, e, n)
    }
    setDensity() {
        const e = this._container.actualOptions,
            n = e.particles.groups;
        for (const i in n) this._applyDensity(n[i], 0, i);
        this._applyDensity(e.particles, e.manualParticles.length)
    }
    async update(e) {
        const n = this._container,
            i = new Set;
        this.quadTree = new ps(bf(n.canvas.size), _f);
        for (const [, r] of n.pathGenerators) r.update();
        for (const [, r] of n.plugins) r.update && r.update(e);
        for (const r of this._array) {
            const o = n.canvas.resizeFactor;
            o && !r.ignoresResizeRatio && (r.position.x *= o.width, r.position.y *= o.height, r.initialPosition.x *= o.width, r.initialPosition.y *= o.height), r.ignoresResizeRatio = !1, await this._interactionManager.reset(r);
            for (const [, s] of this._container.plugins) {
                if (r.destroyed) break;
                s.particleUpdate && s.particleUpdate(r, e)
            }
            for (const s of this.movers) s.isEnabled(r) && s.move(r, e);
            if (r.destroyed) {
                i.add(r);
                continue
            }
            this.quadTree.insert(new Ck(r.getPosition(), r))
        }
        if (i.size) {
            const r = o => !i.has(o);
            this._array = this.filter(r), this._zArray = this._zArray.filter(r), this.pool.push(...i)
        }
        await this._interactionManager.externalInteract(e);
        for (const r of this._array) {
            for (const o of this.updaters) o.update(r, e);
            !r.destroyed && !r.spawning && await this._interactionManager.particlesInteract(r, e)
        }
        if (delete n.canvas.resizeFactor, this.needsSort) {
            const r = this._zArray;
            r.sort((o, s) => s.position.z - o.position.z || o.id - s.id), this.lastZIndex = r[r.length - 1].position.z, this.needsSort = !1
        }
    }
};
class Pk {
    constructor(e) {
        this.container = e, this.pixelRatio = 1, this.reduceFactor = 1
    }
    init() {
        const e = this.container,
            n = e.actualOptions;
        this.pixelRatio = !n.detectRetina || nl() ? 1 : window.devicePixelRatio, this.reduceFactor = 1;
        const i = this.pixelRatio;
        if (e.canvas.element) {
            const s = e.canvas.element;
            e.canvas.size.width = s.offsetWidth * i, e.canvas.size.height = s.offsetHeight * i
        }
        const r = n.particles,
            o = r.move;
        this.attractDistance = B(o.attract.distance) * i, this.maxSpeed = B(o.gravity.maxSpeed) * i, this.sizeAnimationSpeed = B(r.size.animation.speed) * i
    }
    initParticle(e) {
        const n = e.options,
            i = this.pixelRatio,
            r = n.move,
            o = r.distance,
            s = e.retina;
        s.attractDistance = B(r.attract.distance) * i, s.moveDrift = B(r.drift) * i, s.moveSpeed = B(r.speed) * i, s.sizeAnimationSpeed = B(n.size.animation.speed) * i;
        const l = s.maxDistance;
        l.horizontal = o.horizontal !== void 0 ? o.horizontal * i : void 0, l.vertical = o.vertical !== void 0 ? o.vertical * i : void 0, s.maxSpeed = B(r.gravity.maxSpeed) * i
    }
}

function le(t) {
    return t && !t.destroyed
}

function zk(t, e = 60, n = !1) {
    return {
        value: t,
        factor: n ? 60 / e : 60 * t / 1e3
    }
}

function ni(t, e, ...n) {
    const i = new Sk(t, e);
    return Nm(i, ...n), i
}
const $k = "default",
    Cf = {
        generate: t => t.velocity,
        init: () => {},
        update: () => {},
        reset: () => {}
    };
class Tk {
    constructor(e, n, i) {
        this.id = n, this._intersectionManager = r => {
            if (!(!le(this) || !this.actualOptions.pauseOnOutsideViewport))
                for (const o of r) o.target === this.interactivity.element && (o.isIntersecting ? this.play : this.pause)()
        }, this._nextFrame = async r => {
            try {
                if (!this.smooth && this.lastFrameTime !== void 0 && r < this.lastFrameTime + 1e3 / this.fpsLimit) {
                    this.draw(!1);
                    return
                }
                this.lastFrameTime ? ? (this.lastFrameTime = r);
                const o = zk(r - this.lastFrameTime, this.fpsLimit, this.smooth);
                if (this.addLifeTime(o.value), this.lastFrameTime = r, o.value > 1e3) {
                    this.draw(!1);
                    return
                }
                if (await this.particles.draw(o), !this.alive()) {
                    this.destroy();
                    return
                }
                this.getAnimationStatus() && this.draw(!1)
            } catch (o) {
                Fr().error(`${Yn} in animation loop`, o)
            }
        }, this._engine = e, this.fpsLimit = 120, this.smooth = !1, this._delay = 0, this._duration = 0, this._lifeTime = 0, this._firstStart = !0, this.started = !1, this.destroyed = !1, this._paused = !0, this.lastFrameTime = 0, this.zLayers = 100, this.pageHidden = !1, this._sourceOptions = i, this._initialSourceOptions = i, this.retina = new Pk(this), this.canvas = new jx(this), this.particles = new Ek(this._engine, this), this.pathGenerators = new Map, this.interactivity = {
            mouse: {
                clicking: !1,
                inside: !1
            }
        }, this.plugins = new Map, this.drawers = new Map, this._options = ni(this._engine, this), this.actualOptions = ni(this._engine, this), this._eventListeners = new Ox(this), typeof IntersectionObserver < "u" && IntersectionObserver && (this._intersectionObserver = new IntersectionObserver(r => this._intersectionManager(r))), this._engine.dispatchEvent("containerBuilt", {
            container: this
        })
    }
    get options() {
        return this._options
    }
    get sourceOptions() {
        return this._sourceOptions
    }
    addClickHandler(e) {
        if (!le(this)) return;
        const n = this.interactivity.element;
        if (!n) return;
        const i = (f, d, v) => {
                if (!le(this)) return;
                const y = this.retina.pixelRatio,
                    w = {
                        x: d.x * y,
                        y: d.y * y
                    },
                    _ = this.particles.quadTree.queryCircle(w, v * y);
                e(f, _)
            },
            r = f => {
                if (!le(this)) return;
                const d = f,
                    v = {
                        x: d.offsetX || d.clientX,
                        y: d.offsetY || d.clientY
                    };
                i(f, v, 1)
            },
            o = () => {
                le(this) && (u = !0, c = !1)
            },
            s = () => {
                le(this) && (c = !0)
            },
            l = f => {
                if (le(this)) {
                    if (u && !c) {
                        const d = f;
                        let v = d.touches[d.touches.length - 1];
                        if (!v && (v = d.changedTouches[d.changedTouches.length - 1], !v)) return;
                        const y = this.canvas.element,
                            w = y ? y.getBoundingClientRect() : void 0,
                            _ = {
                                x: v.clientX - (w ? w.left : 0),
                                y: v.clientY - (w ? w.top : 0)
                            };
                        i(f, _, Math.max(v.radiusX, v.radiusY))
                    }
                    u = !1, c = !1
                }
            },
            a = () => {
                le(this) && (u = !1, c = !1)
            };
        let u = !1,
            c = !1;
        n.addEventListener("click", r), n.addEventListener("touchstart", o), n.addEventListener("touchmove", s), n.addEventListener("touchend", l), n.addEventListener("touchcancel", a)
    }
    addLifeTime(e) {
        this._lifeTime += e
    }
    addPath(e, n, i = !1) {
        return !le(this) || !i && this.pathGenerators.has(e) ? !1 : (this.pathGenerators.set(e, n ? ? Cf), !0)
    }
    alive() {
        return !this._duration || this._lifeTime <= this._duration
    }
    destroy() {
        if (!le(this)) return;
        this.stop(), this.particles.destroy(), this.canvas.destroy();
        for (const [, i] of this.drawers) i.destroy && i.destroy(this);
        for (const i of this.drawers.keys()) this.drawers.delete(i);
        this._engine.plugins.destroy(this), this.destroyed = !0;
        const e = this._engine.dom(),
            n = e.findIndex(i => i === this);
        n >= 0 && e.splice(n, 1), this._engine.dispatchEvent("containerDestroyed", {
            container: this
        })
    }
    draw(e) {
        if (!le(this)) return;
        let n = e;
        this._drawAnimationFrame = requestAnimationFrame(async i => {
            n && (this.lastFrameTime = void 0, n = !1), await this._nextFrame(i)
        })
    }
    async
    export (e, n = {}) {
        for (const [, i] of this.plugins) {
            if (!i.export) continue;
            const r = await i.export(e, n);
            if (r.supported) return r.blob
        }
        Fr().error(`${Yn} - Export plugin with type ${e} not found`)
    }
    getAnimationStatus() {
        return !this._paused && !this.pageHidden && le(this)
    }
    handleClickMode(e) {
        if (le(this)) {
            this.particles.handleClickMode(e);
            for (const [, n] of this.plugins) n.handleClickMode && n.handleClickMode(e)
        }
    }
    async init() {
        if (!le(this)) return;
        const e = this._engine.plugins.getSupportedShapes();
        for (const i of e) {
            const r = this._engine.plugins.getShapeDrawer(i);
            r && this.drawers.set(i, r)
        }
        this._options = ni(this._engine, this, this._initialSourceOptions, this.sourceOptions), this.actualOptions = ni(this._engine, this, this._options);
        const n = this._engine.plugins.getAvailablePlugins(this);
        for (const [i, r] of n) this.plugins.set(i, r);
        this.retina.init(), await this.canvas.init(), this.updateActualOptions(), this.canvas.initBackground(), this.canvas.resize(), this.zLayers = this.actualOptions.zLayers, this._duration = B(this.actualOptions.duration) * 1e3, this._delay = B(this.actualOptions.delay) * 1e3, this._lifeTime = 0, this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 120, this.smooth = this.actualOptions.smooth;
        for (const [, i] of this.drawers) i.init && await i.init(this);
        for (const [, i] of this.plugins) i.init && await i.init();
        this._engine.dispatchEvent("containerInit", {
            container: this
        }), this.particles.init(), this.particles.setDensity();
        for (const [, i] of this.plugins) i.particlesSetup && i.particlesSetup();
        this._engine.dispatchEvent("particlesSetup", {
            container: this
        })
    }
    async loadTheme(e) {
        le(this) && (this._currentTheme = e, await this.refresh())
    }
    pause() {
        if (le(this) && (this._drawAnimationFrame !== void 0 && (cancelAnimationFrame(this._drawAnimationFrame), delete this._drawAnimationFrame), !this._paused)) {
            for (const [, e] of this.plugins) e.pause && e.pause();
            this.pageHidden || (this._paused = !0), this._engine.dispatchEvent("containerPaused", {
                container: this
            })
        }
    }
    play(e) {
        if (!le(this)) return;
        const n = this._paused || e;
        if (this._firstStart && !this.actualOptions.autoPlay) {
            this._firstStart = !1;
            return
        }
        if (this._paused && (this._paused = !1), n)
            for (const [, i] of this.plugins) i.play && i.play();
        this._engine.dispatchEvent("containerPlay", {
            container: this
        }), this.draw(n || !1)
    }
    async refresh() {
        if (le(this)) return this.stop(), this.start()
    }
    async reset() {
        if (le(this)) return this._initialSourceOptions = void 0, this._options = ni(this._engine, this), this.actualOptions = ni(this._engine, this, this._options), this.refresh()
    }
    setNoise(e, n, i) {
        le(this) && this.setPath(e, n, i)
    }
    setPath(e, n, i) {
        if (!e || !le(this)) return;
        const r = { ...Cf
        };
        if (Lm(e)) r.generate = e, n && (r.init = n), i && (r.update = i);
        else {
            const o = r;
            r.generate = e.generate || o.generate, r.init = e.init || o.init, r.update = e.update || o.update
        }
        this.addPath($k, r, !0)
    }
    async start() {
        !le(this) || this.started || (await this.init(), this.started = !0, await new Promise(e => {
            this._delayTimeout = setTimeout(async () => {
                this._eventListeners.addListeners(), this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.observe(this.interactivity.element);
                for (const [, n] of this.plugins) n.start && await n.start();
                this._engine.dispatchEvent("containerStarted", {
                    container: this
                }), this.play(), e()
            }, this._delay)
        }))
    }
    stop() {
        if (!(!le(this) || !this.started)) {
            this._delayTimeout && (clearTimeout(this._delayTimeout), delete this._delayTimeout), this._firstStart = !0, this.started = !1, this._eventListeners.removeListeners(), this.pause(), this.particles.clear(), this.canvas.stop(), this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.unobserve(this.interactivity.element);
            for (const [, e] of this.plugins) e.stop && e.stop();
            for (const e of this.plugins.keys()) this.plugins.delete(e);
            this._sourceOptions = this._options, this._engine.dispatchEvent("containerStopped", {
                container: this
            })
        }
    }
    updateActualOptions() {
        this.actualOptions.responsive = [];
        const e = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
        return this.actualOptions.setTheme(this._currentTheme), this.responsiveMaxWidth === e ? !1 : (this.responsiveMaxWidth = e, !0)
    }
}
class Mk {
    constructor() {
        this._listeners = new Map
    }
    addEventListener(e, n) {
        this.removeEventListener(e, n);
        let i = this._listeners.get(e);
        i || (i = [], this._listeners.set(e, i)), i.push(n)
    }
    dispatchEvent(e, n) {
        const i = this._listeners.get(e);
        i && i.forEach(r => r(n))
    }
    hasEventListener(e) {
        return !!this._listeners.get(e)
    }
    removeAllEventListeners(e) {
        e ? this._listeners.delete(e) : this._listeners = new Map
    }
    removeEventListener(e, n) {
        const i = this._listeners.get(e);
        if (!i) return;
        const r = i.length,
            o = i.indexOf(n);
        o < 0 || (r === 1 ? this._listeners.delete(e) : i.splice(o, 1))
    }
}

function ia(t, e, n, i = !1) {
    let r = e.get(t);
    return (!r || i) && (r = [...n.values()].map(o => o(t)), e.set(t, r)), r
}
class Rk {
    constructor(e) {
        this._engine = e, this.plugins = [], this._initializers = {
            interactors: new Map,
            movers: new Map,
            updaters: new Map
        }, this.interactors = new Map, this.movers = new Map, this.updaters = new Map, this.presets = new Map, this.drawers = new Map, this.pathGenerators = new Map
    }
    addInteractor(e, n) {
        this._initializers.interactors.set(e, n)
    }
    addParticleMover(e, n) {
        this._initializers.movers.set(e, n)
    }
    addParticleUpdater(e, n) {
        this._initializers.updaters.set(e, n)
    }
    addPathGenerator(e, n) {
        !this.getPathGenerator(e) && this.pathGenerators.set(e, n)
    }
    addPlugin(e) {
        !this.getPlugin(e.id) && this.plugins.push(e)
    }
    addPreset(e, n, i = !1) {
        (i || !this.getPreset(e)) && this.presets.set(e, n)
    }
    addShapeDrawer(e, n) {
        Xn(e, i => {
            !this.getShapeDrawer(i) && this.drawers.set(i, n)
        })
    }
    destroy(e) {
        this.updaters.delete(e), this.movers.delete(e), this.interactors.delete(e)
    }
    getAvailablePlugins(e) {
        const n = new Map;
        for (const i of this.plugins) i.needsPlugin(e.actualOptions) && n.set(i.id, i.getPlugin(e));
        return n
    }
    getInteractors(e, n = !1) {
        return ia(e, this.interactors, this._initializers.interactors, n)
    }
    getMovers(e, n = !1) {
        return ia(e, this.movers, this._initializers.movers, n)
    }
    getPathGenerator(e) {
        return this.pathGenerators.get(e)
    }
    getPlugin(e) {
        return this.plugins.find(n => n.id === e)
    }
    getPreset(e) {
        return this.presets.get(e)
    }
    getShapeDrawer(e) {
        return this.drawers.get(e)
    }
    getSupportedShapes() {
        return this.drawers.keys()
    }
    getUpdaters(e, n = !1) {
        return ia(e, this.updaters, this._initializers.updaters, n)
    }
    loadOptions(e, n) {
        for (const i of this.plugins) i.loadOptions(e, n)
    }
    loadParticlesOptions(e, n, ...i) {
        const r = this.updaters.get(e);
        if (r)
            for (const o of r) o.loadOptions && o.loadOptions(n, ...i)
    }
}
async function Lk(t) {
    const e = yr(t.url, t.index);
    if (!e) return t.fallback;
    const n = await fetch(e);
    return n.ok ? n.json() : (Fr().error(`${Yn} ${n.status} while retrieving config file`), t.fallback)
}

function jk(t) {
    return !t.id && !t.element && !t.url && !t.options
}

function Ok(t) {
    return !jk(t)
}
class Ik {
    constructor() {
        this._configs = new Map, this._domArray = [], this._eventDispatcher = new Mk, this._initialized = !1, this.plugins = new Rk(this)
    }
    get configs() {
        const e = {};
        for (const [n, i] of this._configs) e[n] = i;
        return e
    }
    get version() {
        return "2.12.0"
    }
    addConfig(e, n) {
        Rt(e) ? n && (n.name = e, this._configs.set(e, n)) : this._configs.set(e.name ? ? "default", e)
    }
    addEventListener(e, n) {
        this._eventDispatcher.addEventListener(e, n)
    }
    async addInteractor(e, n, i = !0) {
        this.plugins.addInteractor(e, n), await this.refresh(i)
    }
    async addMover(e, n, i = !0) {
        this.plugins.addParticleMover(e, n), await this.refresh(i)
    }
    async addParticleUpdater(e, n, i = !0) {
        this.plugins.addParticleUpdater(e, n), await this.refresh(i)
    }
    async addPathGenerator(e, n, i = !0) {
        this.plugins.addPathGenerator(e, n), await this.refresh(i)
    }
    async addPlugin(e, n = !0) {
        this.plugins.addPlugin(e), await this.refresh(n)
    }
    async addPreset(e, n, i = !1, r = !0) {
        this.plugins.addPreset(e, n, i), await this.refresh(r)
    }
    async addShape(e, n, i, r, o, s = !0) {
        let l, a = s,
            u, c, f;
        Sn(i) ? (a = i, u = void 0) : u = i, Sn(r) ? (a = r, c = void 0) : c = r, Sn(o) ? (a = o, f = void 0) : f = o, Lm(n) ? l = {
            afterEffect: c,
            destroy: f,
            draw: n,
            init: u
        } : l = n, this.plugins.addShapeDrawer(e, l), await this.refresh(a)
    }
    dispatchEvent(e, n) {
        this._eventDispatcher.dispatchEvent(e, n)
    }
    dom() {
        return this._domArray
    }
    domItem(e) {
        const n = this.dom(),
            i = n[e];
        if (!i || i.destroyed) {
            n.splice(e, 1);
            return
        }
        return i
    }
    init() {
        this._initialized || (this._initialized = !0)
    }
    async load(e, n) {
        return this.loadFromArray(e, n)
    }
    async loadFromArray(e, n, i) {
        let r;
        return Ok(e) ? r = e : (r = {}, Rt(e) ? r.id = e : r.options = e, Lt(n) ? r.index = n : r.options = n ? ? r.options, r.index = i ? ? r.index), this._loadParams(r)
    }
    async loadJSON(e, n, i) {
        let r, o;
        return Lt(n) || n === void 0 ? r = e : (o = e, r = n), this._loadParams({
            id: o,
            url: r,
            index: i
        })
    }
    async refresh(e = !0) {
        e && this.dom().forEach(n => n.refresh())
    }
    removeEventListener(e, n) {
        this._eventDispatcher.removeEventListener(e, n)
    }
    async set(e, n, i, r) {
        const o = {
            index: r
        };
        return Rt(e) ? o.id = e : o.element = e, n instanceof HTMLElement ? o.element = n : o.options = n, Lt(i) ? o.index = i : o.options = i ? ? o.options, this._loadParams(o)
    }
    async setJSON(e, n, i, r) {
        const o = {};
        return e instanceof HTMLElement ? (o.element = e, o.url = n, o.index = i) : (o.id = e, o.element = n, o.url = i, o.index = r), this._loadParams(o)
    }
    setOnClickHandler(e) {
        const n = this.dom();
        if (!n.length) throw new Error(`${Yn} can only set click handlers after calling tsParticles.load()`);
        for (const i of n) i.addClickHandler(e)
    }
    async _loadParams(e) {
        const n = e.id ? ? `tsparticles${Math.floor(me()*1e4)}`,
            {
                index: i,
                url: r
            } = e,
            o = r ? await Lk({
                fallback: e.options,
                url: r,
                index: i
            }) : e.options;
        let s = e.element ? ? document.getElementById(n);
        s || (s = document.createElement("div"), s.id = n, document.body.append(s));
        const l = yr(o, i),
            a = this.dom(),
            u = a.findIndex(d => d.id === n);
        if (u >= 0) {
            const d = this.domItem(u);
            d && !d.destroyed && (d.destroy(), a.splice(u, 1))
        }
        let c;
        if (s.tagName.toLowerCase() === "canvas") c = s, c.dataset[vr] = "false";
        else {
            const d = s.getElementsByTagName("canvas");
            d.length ? (c = d[0], c.dataset[vr] = "false") : (c = document.createElement("canvas"), c.dataset[vr] = "true", s.appendChild(c))
        }
        c.style.width || (c.style.width = "100%"), c.style.height || (c.style.height = "100%");
        const f = new Tk(this, n, l);
        return u >= 0 ? a.splice(u, 0, f) : a.push(f), f.canvas.loadCanvas(c), await f.start(), f
    }
}
class Dk {
    constructor() {
        this.key = "hsl", this.stringPrefix = "hsl"
    }
    handleColor(e) {
        const n = e.value,
            i = n.hsl ? ? e.value;
        if (i.h !== void 0 && i.s !== void 0 && i.l !== void 0) return Ii(i)
    }
    handleRangeColor(e) {
        const n = e.value,
            i = n.hsl ? ? e.value;
        if (i.h !== void 0 && i.l !== void 0) return Ii({
            h: B(i.h),
            l: B(i.l),
            s: B(i.s)
        })
    }
    parseString(e) {
        if (!e.startsWith("hsl")) return;
        const n = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i,
            i = n.exec(e);
        return i ? xx({
            a: i.length > 4 ? $m(i[5]) : 1,
            h: parseInt(i[1], 10),
            l: parseInt(i[3], 10),
            s: parseInt(i[2], 10)
        }) : void 0
    }
}
class Ak {
    constructor() {
        this.key = "rgb", this.stringPrefix = "rgb"
    }
    handleColor(e) {
        const n = e.value,
            i = n.rgb ? ? e.value;
        if (i.r !== void 0) return i
    }
    handleRangeColor(e) {
        const n = e.value,
            i = n.rgb ? ? e.value;
        if (i.r !== void 0) return {
            r: B(i.r),
            g: B(i.g),
            b: B(i.b)
        }
    }
    parseString(e) {
        if (!e.startsWith(this.stringPrefix)) return;
        const n = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i,
            i = n.exec(e);
        return i ? {
            a: i.length > 4 ? $m(i[5]) : 1,
            b: parseInt(i[3], 10),
            g: parseInt(i[2], 10),
            r: parseInt(i[1], 10)
        } : void 0
    }
}

function Nk() {
    const t = new Ak,
        e = new Dk;
    mf(t), mf(e);
    const n = new Ik;
    return n.init(), n
}
class Fk {
    constructor(e) {
        this.container = e, this.type = "particles"
    }
}
const uu = Nk();
nl() || (window.tsParticles = uu);
const vi = t => typeof t == "object" && t !== null;

function ms(t, e, n = () => !1) {
    if (!vi(t) || !vi(e)) return t === e;
    const i = Object.keys(t).filter(o => !n(o)),
        r = Object.keys(e).filter(o => !n(o));
    if (i.length !== r.length) return !1;
    for (const o of i) {
        const s = t[o],
            l = e[o];
        if (vi(s) && vi(l)) {
            if (s === e && l === t) continue;
            if (!ms(s, l, n)) return !1
        } else if (Array.isArray(s) && Array.isArray(l)) {
            if (!Bm(s, l, n)) return !1
        } else if (s !== l) return !1
    }
    return !0
}

function Bm(t, e, n) {
    if (t.length !== e.length) return !1;
    for (let i = 0; i < t.length; i++) {
        const r = t[i],
            o = e[i];
        if (Array.isArray(r) && Array.isArray(o)) {
            if (!Bm(r, o, n)) return !1
        } else if (vi(r) && vi(o)) {
            if (!ms(r, o, n)) return !1
        } else if (r !== o) return !1
    }
    return !0
}
const Wm = "tsparticles";
class rl extends x.Component {
    constructor(e) {
        super(e), this.state = {
            init: !1,
            library: void 0
        }
    }
    destroy() {
        this.state.library && (this.state.library.destroy(), this.setState({
            library: void 0
        }))
    }
    shouldComponentUpdate(e) {
        const n = e.options ? ? e.params,
            i = this.props.options ? ? this.props.params;
        return e.url !== this.props.url || e.id !== this.props.id || e.canvasClassName !== this.props.canvasClassName || e.className !== this.props.className || e.height !== this.props.height || e.width !== this.props.width || !ms(e.style, this.props.style) || e.init !== this.props.init || e.loaded !== this.props.loaded || !ms(n, i, r => r.startsWith("_"))
    }
    componentDidUpdate() {
        this.refresh()
    }
    forceUpdate() {
        this.refresh().then(() => {
            super.forceUpdate()
        })
    }
    componentDidMount() {
        (async () => (this.props.init && await this.props.init(uu), this.setState({
            init: !0
        }, async () => {
            await this.loadParticles()
        })))()
    }
    componentWillUnmount() {
        this.destroy()
    }
    render() {
        const {
            width: e,
            height: n,
            className: i,
            canvasClassName: r,
            id: o
        } = this.props;
        return Ht.createElement("div", {
            className: i,
            id: o
        }, Ht.createElement("canvas", {
            className: r,
            style: { ...this.props.style,
                width: e,
                height: n
            }
        }))
    }
    async refresh() {
        this.destroy(), await this.loadParticles()
    }
    async loadParticles() {
        if (!this.state.init) return;
        const e = this.props.id ? ? rl.defaultProps.id ? ? Wm,
            n = await uu.load({
                url: this.props.url,
                id: e,
                options: this.props.options ? ? this.props.params
            });
        this.props.container && (this.props.container.current = n), this.setState({
            library: n
        }), this.props.loaded && await this.props.loaded(n)
    }
}
rl.defaultProps = {
    width: "100%",
    height: "100%",
    options: {},
    style: {},
    url: void 0,
    id: Wm
};

function Uk(t) {
    const e = t.initialPosition,
        {
            dx: n,
            dy: i
        } = Wt(e, t.position),
        r = Math.abs(n),
        o = Math.abs(i),
        {
            maxDistance: s
        } = t.retina,
        l = s.horizontal,
        a = s.vertical;
    if (!(!l && !a)) {
        if ((l && r >= l || a && o >= a) && !t.misplaced) t.misplaced = !!l && r > l || !!a && o > a, l && (t.velocity.x = t.velocity.y / 2 - t.velocity.x), a && (t.velocity.y = t.velocity.x / 2 - t.velocity.y);
        else if ((!l || r < l) && (!a || o < a) && t.misplaced) t.misplaced = !1;
        else if (t.misplaced) {
            const u = t.position,
                c = t.velocity;
            l && (u.x < e.x && c.x < 0 || u.x > e.x && c.x > 0) && (c.x *= -me()), a && (u.y < e.y && c.y < 0 || u.y > e.y && c.y > 0) && (c.y *= -me())
        }
    }
}

function Bk(t, e, n, i, r, o) {
    Vk(t, o);
    const s = t.gravity,
        l = s != null && s.enable && s.inverse ? -1 : 1;
    r && n && (t.velocity.x += r * o.factor / (60 * n)), s != null && s.enable && n && (t.velocity.y += l * (s.acceleration * o.factor) / (60 * n));
    const a = t.moveDecay;
    t.velocity.multTo(a);
    const u = t.velocity.mult(n);
    s != null && s.enable && i > 0 && (!s.inverse && u.y >= 0 && u.y >= i || s.inverse && u.y <= 0 && u.y <= -i) && (u.y = l * i, n && (t.velocity.y = u.y / n));
    const c = t.options.zIndex,
        f = (1 - t.zIndexFactor) ** c.velocityRate;
    u.multTo(f);
    const {
        position: d
    } = t;
    d.addTo(u), e.vibrate && (d.x += Math.sin(d.x * Math.cos(d.y)), d.y += Math.cos(d.y * Math.sin(d.x)))
}

function Wk(t, e) {
    const n = t.container;
    if (!t.spin) return;
    const i = {
        x: t.spin.direction === "clockwise" ? Math.cos : Math.sin,
        y: t.spin.direction === "clockwise" ? Math.sin : Math.cos
    };
    t.position.x = t.spin.center.x + t.spin.radius * i.x(t.spin.angle), t.position.y = t.spin.center.y + t.spin.radius * i.y(t.spin.angle), t.spin.radius += t.spin.acceleration;
    const r = Math.max(n.canvas.size.width, n.canvas.size.height);
    t.spin.radius > r / 2 ? (t.spin.radius = r / 2, t.spin.acceleration *= -1) : t.spin.radius < 0 && (t.spin.radius = 0, t.spin.acceleration *= -1), t.spin.angle += e / 100 * (1 - t.spin.radius / r)
}

function Vk(t, e) {
    var s;
    const n = t.options,
        i = n.move.path;
    if (!i.enable) return;
    if (t.lastPathTime <= t.pathDelay) {
        t.lastPathTime += e.value;
        return
    }
    const o = (s = t.pathGenerator) == null ? void 0 : s.generate(t, e);
    o && t.velocity.addTo(o), i.clamp && (t.velocity.x = Oi(t.velocity.x, -1, 1), t.velocity.y = Oi(t.velocity.y, -1, 1)), t.lastPathTime -= t.pathDelay
}

function Hk(t) {
    return t.slow.inRange ? t.slow.factor : 1
}
const Qk = 2;
class Gk {
    constructor() {
        this._initSpin = e => {
            const n = e.container,
                i = e.options,
                r = i.move.spin;
            if (!r.enable) return;
            const o = r.position ? ? {
                    x: 50,
                    y: 50
                },
                s = {
                    x: o.x / 100 * n.canvas.size.width,
                    y: o.y / 100 * n.canvas.size.height
                },
                l = e.getPosition(),
                a = kn(l, s),
                u = B(r.acceleration);
            e.retina.spinAcceleration = u * n.retina.pixelRatio, e.spin = {
                center: s,
                direction: e.velocity.x >= 0 ? "clockwise" : "counter-clockwise",
                angle: e.velocity.angle,
                radius: a,
                acceleration: e.retina.spinAcceleration
            }
        }
    }
    init(e) {
        const n = e.options,
            i = n.move.gravity;
        e.gravity = {
            enable: i.enable,
            acceleration: B(i.acceleration),
            inverse: i.inverse
        }, this._initSpin(e)
    }
    isEnabled(e) {
        return !e.destroyed && e.options.move.enable
    }
    move(e, n) {
        var y, w;
        const i = e.options,
            r = i.move;
        if (!r.enable) return;
        const o = e.container,
            s = o.retina.pixelRatio,
            l = Hk(e),
            a = ((y = e.retina).moveSpeed ? ? (y.moveSpeed = B(r.speed) * s)) * o.retina.reduceFactor,
            u = (w = e.retina).moveDrift ? ? (w.moveDrift = B(e.options.move.drift) * s),
            c = tl(i.size.value) * s,
            f = r.size ? e.getRadius() / c : 1,
            d = a * f * l * (n.factor || 1) / Qk,
            v = e.retina.maxSpeed ? ? o.retina.maxSpeed;
        r.spin.enable ? Wk(e, d) : Bk(e, r, d, v, u, n), Uk(e)
    }
}
async function Yk(t, e = !0) {
    await t.addMover("base", () => new Gk, e)
}
class Xk {
    draw(e, n, i) {
        n.circleRange || (n.circleRange = {
            min: 0,
            max: Math.PI * 2
        });
        const r = n.circleRange;
        e.arc(0, 0, i, r.min, r.max, !1)
    }
    getSidesCount() {
        return 12
    }
    particleInit(e, n) {
        const i = n.shapeData,
            r = (i == null ? void 0 : i.angle) ? ? {
                max: 360,
                min: 0
            };
        n.circleRange = gi(r) ? {
            min: r.min * Math.PI / 180,
            max: r.max * Math.PI / 180
        } : {
            min: 0,
            max: r * Math.PI / 180
        }
    }
}
async function Kk(t, e = !0) {
    await t.addShape("circle", new Xk, e)
}

function ra(t, e, n, i, r) {
    if (!e || !n.enable || (e.maxLoops ? ? 0) > 0 && (e.loops ? ? 0) > (e.maxLoops ? ? 0) || (e.time || (e.time = 0), (e.delayTime ? ? 0) > 0 && e.time < (e.delayTime ? ? 0) && (e.time += t.value), (e.delayTime ? ? 0) > 0 && e.time < (e.delayTime ? ? 0))) return;
    const o = zt(n.offset),
        s = (e.velocity ? ? 0) * t.factor + o * 3.6,
        l = e.decay ? ? 1;
    !r || e.status === "increasing" ? (e.value += s, e.value > i && (e.loops || (e.loops = 0), e.loops++, r && (e.status = "decreasing", e.value -= e.value % i))) : (e.value -= s, e.value < 0 && (e.loops || (e.loops = 0), e.loops++, e.status = "increasing", e.value += e.value)), e.velocity && l !== 1 && (e.velocity *= l), e.value > i && (e.value %= i)
}

function qk(t, e) {
    const {
        h: n,
        s: i,
        l: r
    } = t.options.color.animation, {
        color: o
    } = t;
    if (!o) return;
    const {
        h: s,
        s: l,
        l: a
    } = o;
    s && ra(e, s, n, 360, !1), l && ra(e, l, i, 100, !0), a && ra(e, a, r, 100, !0)
}
class Jk {
    constructor(e) {
        this.container = e
    }
    init(e) {
        const n = au(e.options.color, e.id, e.options.reduceDuplicates);
        n && (e.color = _x(n, e.options.color.animation, this.container.retina.reduceFactor))
    }
    isEnabled(e) {
        const {
            h: n,
            s: i,
            l: r
        } = e.options.color.animation, {
            color: o
        } = e;
        return !e.destroyed && !e.spawning && ((o == null ? void 0 : o.h.value) !== void 0 && n.enable || (o == null ? void 0 : o.s.value) !== void 0 && i.enable || (o == null ? void 0 : o.l.value) !== void 0 && r.enable)
    }
    update(e, n) {
        qk(e, n)
    }
}
async function Zk(t, e = !0) {
    await t.addParticleUpdater("color", n => new Jk(n), e)
}

function eS(t, e, n, i) {
    switch (t.options.opacity.animation.destroy) {
        case "max":
            e >= i && t.destroy();
            break;
        case "min":
            e <= n && t.destroy();
            break
    }
}

function tS(t, e) {
    const n = t.opacity;
    if (t.destroyed || !(n != null && n.enable) || (n.maxLoops ? ? 0) > 0 && (n.loops ? ? 0) > (n.maxLoops ? ? 0)) return;
    const i = n.min,
        r = n.max,
        o = n.decay ? ? 1;
    if (n.time || (n.time = 0), (n.delayTime ? ? 0) > 0 && n.time < (n.delayTime ? ? 0) && (n.time += e.value), !((n.delayTime ? ? 0) > 0 && n.time < (n.delayTime ? ? 0))) {
        switch (n.status) {
            case "increasing":
                n.value >= r ? (n.status = "decreasing", n.loops || (n.loops = 0), n.loops++) : n.value += (n.velocity ? ? 0) * e.factor;
                break;
            case "decreasing":
                n.value <= i ? (n.status = "increasing", n.loops || (n.loops = 0), n.loops++) : n.value -= (n.velocity ? ? 0) * e.factor;
                break
        }
        n.velocity && n.decay !== 1 && (n.velocity *= o), eS(t, n.value, i, r), t.destroyed || (n.value = Oi(n.value, i, r))
    }
}
class nS {
    constructor(e) {
        this.container = e
    }
    init(e) {
        const n = e.options.opacity;
        e.opacity = Mm(n, 1);
        const i = n.animation;
        i.enable && (e.opacity.velocity = B(i.speed) / 100 * this.container.retina.reduceFactor, i.sync || (e.opacity.velocity *= me()))
    }
    isEnabled(e) {
        return !e.destroyed && !e.spawning && !!e.opacity && e.opacity.enable && ((e.opacity.maxLoops ? ? 0) <= 0 || (e.opacity.maxLoops ? ? 0) > 0 && (e.opacity.loops ? ? 0) < (e.opacity.maxLoops ? ? 0))
    }
    reset(e) {
        e.opacity && (e.opacity.time = 0, e.opacity.loops = 0)
    }
    update(e, n) {
        this.isEnabled(e) && tS(e, n)
    }
}
async function iS(t, e = !0) {
    await t.addParticleUpdater("opacity", n => new nS(n), e)
}

function rS(t) {
    if (t.outMode !== "bounce" && t.outMode !== "bounce-horizontal" && t.outMode !== "bounceHorizontal" && t.outMode !== "split" || t.direction !== "left" && t.direction !== "right") return;
    t.bounds.right < 0 && t.direction === "left" ? t.particle.position.x = t.size + t.offset.x : t.bounds.left > t.canvasSize.width && t.direction === "right" && (t.particle.position.x = t.canvasSize.width - t.size - t.offset.x);
    const e = t.particle.velocity.x;
    let n = !1;
    if (t.direction === "right" && t.bounds.right >= t.canvasSize.width && e > 0 || t.direction === "left" && t.bounds.left <= 0 && e < 0) {
        const r = Pc(t.particle.options.bounce.horizontal);
        t.particle.velocity.x *= -r, n = !0
    }
    if (!n) return;
    const i = t.offset.x + t.size;
    t.bounds.right >= t.canvasSize.width && t.direction === "right" ? t.particle.position.x = t.canvasSize.width - i : t.bounds.left <= 0 && t.direction === "left" && (t.particle.position.x = i), t.outMode === "split" && t.particle.destroy()
}

function oS(t) {
    if (t.outMode !== "bounce" && t.outMode !== "bounce-vertical" && t.outMode !== "bounceVertical" && t.outMode !== "split" || t.direction !== "bottom" && t.direction !== "top") return;
    t.bounds.bottom < 0 && t.direction === "top" ? t.particle.position.y = t.size + t.offset.y : t.bounds.top > t.canvasSize.height && t.direction === "bottom" && (t.particle.position.y = t.canvasSize.height - t.size - t.offset.y);
    const e = t.particle.velocity.y;
    let n = !1;
    if (t.direction === "bottom" && t.bounds.bottom >= t.canvasSize.height && e > 0 || t.direction === "top" && t.bounds.top <= 0 && e < 0) {
        const r = Pc(t.particle.options.bounce.vertical);
        t.particle.velocity.y *= -r, n = !0
    }
    if (!n) return;
    const i = t.offset.y + t.size;
    t.bounds.bottom >= t.canvasSize.height && t.direction === "bottom" ? t.particle.position.y = t.canvasSize.height - i : t.bounds.top <= 0 && t.direction === "top" && (t.particle.position.y = i), t.outMode === "split" && t.particle.destroy()
}
class sS {
    constructor(e) {
        this.container = e, this.modes = ["bounce", "bounce-vertical", "bounce-horizontal", "bounceVertical", "bounceHorizontal", "split"]
    }
    update(e, n, i, r) {
        if (!this.modes.includes(r)) return;
        const o = this.container;
        let s = !1;
        for (const [, d] of o.plugins)
            if (d.particleBounce !== void 0 && (s = d.particleBounce(e, i, n)), s) break;
        if (s) return;
        const l = e.getPosition(),
            a = e.offset,
            u = e.getRadius(),
            c = Tc(l, u),
            f = o.canvas.size;
        rS({
            particle: e,
            outMode: r,
            direction: n,
            bounds: c,
            canvasSize: f,
            offset: a,
            size: u
        }), oS({
            particle: e,
            outMode: r,
            direction: n,
            bounds: c,
            canvasSize: f,
            offset: a,
            size: u
        })
    }
}
class lS {
    constructor(e) {
        this.container = e, this.modes = ["destroy"]
    }
    update(e, n, i, r) {
        if (!this.modes.includes(r)) return;
        const o = this.container;
        switch (e.outType) {
            case "normal":
            case "outside":
                if ($c(e.position, o.canvas.size, Mt.origin, e.getRadius(), n)) return;
                break;
            case "inside":
                {
                    const {
                        dx: s,
                        dy: l
                    } = Wt(e.position, e.moveCenter),
                    {
                        x: a,
                        y: u
                    } = e.velocity;
                    if (a < 0 && s > e.moveCenter.radius || u < 0 && l > e.moveCenter.radius || a >= 0 && s < -e.moveCenter.radius || u >= 0 && l < -e.moveCenter.radius) return;
                    break
                }
        }
        o.particles.remove(e, void 0, !0)
    }
}
class aS {
    constructor(e) {
        this.container = e, this.modes = ["none"]
    }
    update(e, n, i, r) {
        if (!this.modes.includes(r) || e.options.move.distance.horizontal && (n === "left" || n === "right") || e.options.move.distance.vertical && (n === "top" || n === "bottom")) return;
        const o = e.options.move.gravity,
            s = this.container,
            l = s.canvas.size,
            a = e.getRadius();
        if (o.enable) {
            const u = e.position;
            (!o.inverse && u.y > l.height + a && n === "bottom" || o.inverse && u.y < -a && n === "top") && s.particles.remove(e)
        } else {
            if (e.velocity.y > 0 && e.position.y <= l.height + a || e.velocity.y < 0 && e.position.y >= -a || e.velocity.x > 0 && e.position.x <= l.width + a || e.velocity.x < 0 && e.position.x >= -a) return;
            $c(e.position, s.canvas.size, Mt.origin, a, n) || s.particles.remove(e)
        }
    }
}
class uS {
    constructor(e) {
        this.container = e, this.modes = ["out"]
    }
    update(e, n, i, r) {
        if (!this.modes.includes(r)) return;
        const o = this.container;
        switch (e.outType) {
            case "inside":
                {
                    const {
                        x: s,
                        y: l
                    } = e.velocity,
                    a = Mt.origin;a.length = e.moveCenter.radius,
                    a.angle = e.velocity.angle + Math.PI,
                    a.addTo(Mt.create(e.moveCenter));
                    const {
                        dx: u,
                        dy: c
                    } = Wt(e.position, a);
                    if (s <= 0 && u >= 0 || l <= 0 && c >= 0 || s >= 0 && u <= 0 || l >= 0 && c <= 0) return;e.position.x = Math.floor(zt({
                        min: 0,
                        max: o.canvas.size.width
                    })),
                    e.position.y = Math.floor(zt({
                        min: 0,
                        max: o.canvas.size.height
                    }));
                    const {
                        dx: f,
                        dy: d
                    } = Wt(e.position, e.moveCenter);e.direction = Math.atan2(-d, -f),
                    e.velocity.angle = e.direction;
                    break
                }
            default:
                {
                    if ($c(e.position, o.canvas.size, Mt.origin, e.getRadius(), n)) return;
                    switch (e.outType) {
                        case "outside":
                            {
                                e.position.x = Math.floor(zt({
                                    min: -e.moveCenter.radius,
                                    max: e.moveCenter.radius
                                })) + e.moveCenter.x,
                                e.position.y = Math.floor(zt({
                                    min: -e.moveCenter.radius,
                                    max: e.moveCenter.radius
                                })) + e.moveCenter.y;
                                const {
                                    dx: s,
                                    dy: l
                                } = Wt(e.position, e.moveCenter);e.moveCenter.radius && (e.direction = Math.atan2(l, s), e.velocity.angle = e.direction);
                                break
                            }
                        case "normal":
                            {
                                const s = e.options.move.warp,
                                    l = o.canvas.size,
                                    a = {
                                        bottom: l.height + e.getRadius() + e.offset.y,
                                        left: -e.getRadius() - e.offset.x,
                                        right: l.width + e.getRadius() + e.offset.x,
                                        top: -e.getRadius() - e.offset.y
                                    },
                                    u = e.getRadius(),
                                    c = Tc(e.position, u);n === "right" && c.left > l.width + e.offset.x ? (e.position.x = a.left, e.initialPosition.x = e.position.x, s || (e.position.y = me() * l.height, e.initialPosition.y = e.position.y)) : n === "left" && c.right < -e.offset.x && (e.position.x = a.right, e.initialPosition.x = e.position.x, s || (e.position.y = me() * l.height, e.initialPosition.y = e.position.y)),
                                n === "bottom" && c.top > l.height + e.offset.y ? (s || (e.position.x = me() * l.width, e.initialPosition.x = e.position.x), e.position.y = a.top, e.initialPosition.y = e.position.y) : n === "top" && c.bottom < -e.offset.y && (s || (e.position.x = me() * l.width, e.initialPosition.x = e.position.x), e.position.y = a.bottom, e.initialPosition.y = e.position.y);
                                break
                            }
                    }
                    break
                }
        }
    }
}
class cS {
    constructor(e) {
        this.container = e, this._updateOutMode = (n, i, r, o) => {
            for (const s of this.updaters) s.update(n, o, i, r)
        }, this.updaters = [new sS(e), new lS(e), new uS(e), new aS(e)]
    }
    init() {}
    isEnabled(e) {
        return !e.destroyed && !e.spawning
    }
    update(e, n) {
        const i = e.options.move.outModes;
        this._updateOutMode(e, n, i.bottom ? ? i.default, "bottom"), this._updateOutMode(e, n, i.left ? ? i.default, "left"), this._updateOutMode(e, n, i.right ? ? i.default, "right"), this._updateOutMode(e, n, i.top ? ? i.default, "top")
    }
}
async function dS(t, e = !0) {
    await t.addParticleUpdater("outModes", n => new cS(n), e)
}

function fS(t, e, n, i) {
    switch (t.options.size.animation.destroy) {
        case "max":
            e >= i && t.destroy();
            break;
        case "min":
            e <= n && t.destroy();
            break
    }
}

function hS(t, e) {
    const n = t.size;
    if (t.destroyed || !n || !n.enable || (n.maxLoops ? ? 0) > 0 && (n.loops ? ? 0) > (n.maxLoops ? ? 0)) return;
    const i = (n.velocity ? ? 0) * e.factor,
        r = n.min,
        o = n.max,
        s = n.decay ? ? 1;
    if (n.time || (n.time = 0), (n.delayTime ? ? 0) > 0 && n.time < (n.delayTime ? ? 0) && (n.time += e.value), !((n.delayTime ? ? 0) > 0 && n.time < (n.delayTime ? ? 0))) {
        switch (n.status) {
            case "increasing":
                n.value >= o ? (n.status = "decreasing", n.loops || (n.loops = 0), n.loops++) : n.value += i;
                break;
            case "decreasing":
                n.value <= r ? (n.status = "increasing", n.loops || (n.loops = 0), n.loops++) : n.value -= i
        }
        n.velocity && s !== 1 && (n.velocity *= s), fS(t, n.value, r, o), t.destroyed || (n.value = Oi(n.value, r, o))
    }
}
class pS {
    init(e) {
        const n = e.container,
            i = e.options.size,
            r = i.animation;
        r.enable && (e.size.velocity = (e.retina.sizeAnimationSpeed ? ? n.retina.sizeAnimationSpeed) / 100 * n.retina.reduceFactor, r.sync || (e.size.velocity *= me()))
    }
    isEnabled(e) {
        return !e.destroyed && !e.spawning && e.size.enable && ((e.size.maxLoops ? ? 0) <= 0 || (e.size.maxLoops ? ? 0) > 0 && (e.size.loops ? ? 0) < (e.size.maxLoops ? ? 0))
    }
    reset(e) {
        e.size.loops = 0
    }
    update(e, n) {
        this.isEnabled(e) && hS(e, n)
    }
}
async function mS(t, e = !0) {
    await t.addParticleUpdater("size", () => new pS, e)
}
async function gS(t, e = !0) {
    await Yk(t, !1), await Kk(t, !1), await Zk(t, !1), await iS(t, !1), await dS(t, !1), await mS(t, !1), await t.refresh(e)
}
class vS extends qn {
    constructor(e, n, i, r) {
        super(e, n, i), this.canvasSize = r, this.canvasSize = { ...r
        }
    }
    contains(e) {
        const {
            width: n,
            height: i
        } = this.canvasSize, {
            x: r,
            y: o
        } = e;
        return super.contains(e) || super.contains({
            x: r - n,
            y: o
        }) || super.contains({
            x: r - n,
            y: o - i
        }) || super.contains({
            x: r,
            y: o - i
        })
    }
    intersects(e) {
        if (super.intersects(e)) return !0;
        const n = e,
            i = e,
            r = {
                x: e.position.x - this.canvasSize.width,
                y: e.position.y - this.canvasSize.height
            };
        if (i.radius !== void 0) {
            const o = new qn(r.x, r.y, i.radius * 2);
            return super.intersects(o)
        } else if (n.size !== void 0) {
            const o = new Kn(r.x, r.y, n.size.width * 2, n.size.height * 2);
            return super.intersects(o)
        }
        return !1
    }
}
class yS {
    constructor() {
        this.blur = 5, this.color = new Qe, this.color.value = "#000", this.enable = !1
    }
    load(e) {
        e && (e.blur !== void 0 && (this.blur = e.blur), this.color = Qe.create(this.color, e.color), e.enable !== void 0 && (this.enable = e.enable))
    }
}
class wS {
    constructor() {
        this.enable = !1, this.frequency = 1
    }
    load(e) {
        e && (e.color !== void 0 && (this.color = Qe.create(this.color, e.color)), e.enable !== void 0 && (this.enable = e.enable), e.frequency !== void 0 && (this.frequency = e.frequency), e.opacity !== void 0 && (this.opacity = e.opacity))
    }
}
class xS {
    constructor() {
        this.blink = !1, this.color = new Qe, this.color.value = "#fff", this.consent = !1, this.distance = 100, this.enable = !1, this.frequency = 1, this.opacity = 1, this.shadow = new yS, this.triangles = new wS, this.width = 1, this.warp = !1
    }
    load(e) {
        e && (e.id !== void 0 && (this.id = e.id), e.blink !== void 0 && (this.blink = e.blink), this.color = Qe.create(this.color, e.color), e.consent !== void 0 && (this.consent = e.consent), e.distance !== void 0 && (this.distance = e.distance), e.enable !== void 0 && (this.enable = e.enable), e.frequency !== void 0 && (this.frequency = e.frequency), e.opacity !== void 0 && (this.opacity = e.opacity), this.shadow.load(e.shadow), this.triangles.load(e.triangles), e.width !== void 0 && (this.width = e.width), e.warp !== void 0 && (this.warp = e.warp))
    }
}

function kS(t, e, n, i, r) {
    const {
        dx: o,
        dy: s,
        distance: l
    } = Wt(t, e);
    if (!r || l <= n) return l;
    const a = {
            x: Math.abs(o),
            y: Math.abs(s)
        },
        u = {
            x: Math.min(a.x, i.width - a.x),
            y: Math.min(a.y, i.height - a.y)
        };
    return Math.sqrt(u.x ** 2 + u.y ** 2)
}
class SS extends Fk {
    constructor(e) {
        super(e), this._setColor = n => {
            if (!n.options.links) return;
            const i = this.linkContainer,
                r = n.options.links;
            let o = r.id === void 0 ? i.particles.linksColor : i.particles.linksColors.get(r.id);
            if (o) return;
            const s = r.color;
            o = Sx(s, r.blink, r.consent), r.id === void 0 ? i.particles.linksColor = o : i.particles.linksColors.set(r.id, o)
        }, this.linkContainer = e
    }
    clear() {}
    init() {
        this.linkContainer.particles.linksColor = void 0, this.linkContainer.particles.linksColors = new Map
    }
    async interact(e) {
        if (!e.options.links) return;
        e.links = [];
        const n = e.getPosition(),
            i = this.container,
            r = i.canvas.size;
        if (n.x < 0 || n.y < 0 || n.x > r.width || n.y > r.height) return;
        const o = e.options.links,
            s = o.opacity,
            l = e.retina.linksDistance ? ? 0,
            a = o.warp,
            u = a ? new vS(n.x, n.y, l, r) : new qn(n.x, n.y, l),
            c = i.particles.quadTree.query(u);
        for (const f of c) {
            const d = f.options.links;
            if (e === f || !(d != null && d.enable) || o.id !== d.id || f.spawning || f.destroyed || !f.links || e.links.some(_ => _.destination === f) || f.links.some(_ => _.destination === e)) continue;
            const v = f.getPosition();
            if (v.x < 0 || v.y < 0 || v.x > r.width || v.y > r.height) continue;
            const y = kS(n, v, l, r, a && d.warp);
            if (y > l) continue;
            const w = (1 - y / l) * s;
            this._setColor(e), e.links.push({
                destination: f,
                opacity: w
            })
        }
    }
    isEnabled(e) {
        var n;
        return !!((n = e.options.links) != null && n.enable)
    }
    loadParticlesOptions(e, ...n) {
        e.links || (e.links = new xS);
        for (const i of n) e.links.load((i == null ? void 0 : i.links) ? ? (i == null ? void 0 : i.lineLinked) ? ? (i == null ? void 0 : i.line_linked))
    }
    reset() {}
}
async function _S(t, e = !0) {
    await t.addInteractor("particlesLinks", n => new SS(n), e)
}

function bS(t) {
    let e = !1;
    const {
        begin: n,
        end: i,
        maxDistance: r,
        context: o,
        canvasSize: s,
        width: l,
        backgroundMask: a,
        colorLine: u,
        opacity: c,
        links: f
    } = t;
    if (kn(n, i) <= r) Yl(o, n, i), e = !0;
    else if (f.warp) {
        let v, y;
        const w = {
                x: i.x - s.width,
                y: i.y
            },
            _ = Wt(n, w);
        if (_.distance <= r) {
            const p = n.y - _.dy / _.dx * n.x;
            v = {
                x: 0,
                y: p
            }, y = {
                x: s.width,
                y: p
            }
        } else {
            const p = {
                    x: i.x,
                    y: i.y - s.height
                },
                h = Wt(n, p);
            if (h.distance <= r) {
                const k = -(n.y - h.dy / h.dx * n.x) / (h.dy / h.dx);
                v = {
                    x: k,
                    y: 0
                }, y = {
                    x: k,
                    y: s.height
                }
            } else {
                const g = {
                        x: i.x - s.width,
                        y: i.y - s.height
                    },
                    k = Wt(n, g);
                if (k.distance <= r) {
                    const C = n.y - k.dy / k.dx * n.x;
                    v = {
                        x: -C / (k.dy / k.dx),
                        y: C
                    }, y = {
                        x: v.x + s.width,
                        y: v.y + s.height
                    }
                }
            }
        }
        v && y && (Yl(o, n, v), Yl(o, i, y), e = !0)
    }
    if (!e) return;
    o.lineWidth = l, a.enable && (o.globalCompositeOperation = a.composite), o.strokeStyle = Fn(u, c);
    const {
        shadow: d
    } = f;
    if (d.enable) {
        const v = jt(d.color);
        v && (o.shadowBlur = d.blur, o.shadowColor = Fn(v))
    }
    o.stroke()
}

function CS(t) {
    const {
        context: e,
        pos1: n,
        pos2: i,
        pos3: r,
        backgroundMask: o,
        colorTriangle: s,
        opacityTriangle: l
    } = t;
    bx(e, n, i, r), o.enable && (e.globalCompositeOperation = o.composite), e.fillStyle = Fn(s, l), e.fill()
}

function ES(t) {
    return t.sort((e, n) => e - n), t.join("_")
}

function Ef(t, e) {
    const n = ES(t.map(r => r.id));
    let i = e.get(n);
    return i === void 0 && (i = me(), e.set(n, i)), i
}
class PS {
    constructor(e) {
        this.container = e, this._drawLinkLine = (n, i) => {
            const r = n.options.links;
            if (!(r != null && r.enable)) return;
            const o = this.container,
                s = o.actualOptions,
                l = i.destination,
                a = n.getPosition(),
                u = l.getPosition();
            let c = i.opacity;
            o.canvas.draw(f => {
                var p;
                let d;
                const v = (p = n.options.twinkle) == null ? void 0 : p.lines;
                if (v != null && v.enable) {
                    const h = v.frequency,
                        g = jt(v.color);
                    me() < h && g && (d = g, c = B(v.opacity))
                }
                if (!d) {
                    const h = r.id !== void 0 ? o.particles.linksColors.get(r.id) : o.particles.linksColor;
                    d = vf(n, l, h)
                }
                if (!d) return;
                const y = n.retina.linksWidth ? ? 0,
                    w = n.retina.linksDistance ? ? 0,
                    {
                        backgroundMask: _
                    } = s;
                bS({
                    context: f,
                    width: y,
                    begin: a,
                    end: u,
                    maxDistance: w,
                    canvasSize: o.canvas.size,
                    links: r,
                    backgroundMask: _,
                    colorLine: d,
                    opacity: c
                })
            })
        }, this._drawLinkTriangle = (n, i, r) => {
            const o = n.options.links;
            if (!(o != null && o.enable)) return;
            const s = o.triangles;
            if (!s.enable) return;
            const l = this.container,
                a = l.actualOptions,
                u = i.destination,
                c = r.destination,
                f = s.opacity ? ? (i.opacity + r.opacity) / 2;
            f <= 0 || l.canvas.draw(d => {
                const v = n.getPosition(),
                    y = u.getPosition(),
                    w = c.getPosition(),
                    _ = n.retina.linksDistance ? ? 0;
                if (kn(v, y) > _ || kn(w, y) > _ || kn(w, v) > _) return;
                let p = jt(s.color);
                if (!p) {
                    const h = o.id !== void 0 ? l.particles.linksColors.get(o.id) : l.particles.linksColor;
                    p = vf(n, u, h)
                }
                p && CS({
                    context: d,
                    pos1: v,
                    pos2: y,
                    pos3: w,
                    backgroundMask: a.backgroundMask,
                    colorTriangle: p,
                    opacityTriangle: f
                })
            })
        }, this._drawTriangles = (n, i, r, o) => {
            var a, u, c;
            const s = r.destination;
            if (!((a = n.links) != null && a.triangles.enable && ((u = s.options.links) != null && u.triangles.enable))) return;
            const l = (c = s.links) == null ? void 0 : c.filter(f => {
                const d = this._getLinkFrequency(s, f.destination);
                return s.options.links && d <= s.options.links.frequency && o.findIndex(v => v.destination === f.destination) >= 0
            });
            if (l != null && l.length)
                for (const f of l) {
                    const d = f.destination;
                    this._getTriangleFrequency(i, s, d) > n.links.triangles.frequency || this._drawLinkTriangle(i, r, f)
                }
        }, this._getLinkFrequency = (n, i) => Ef([n, i], this._freqs.links), this._getTriangleFrequency = (n, i, r) => Ef([n, i, r], this._freqs.triangles), this._freqs = {
            links: new Map,
            triangles: new Map
        }
    }
    drawParticle(e, n) {
        const {
            links: i,
            options: r
        } = n;
        if (!i || i.length <= 0) return;
        const o = i.filter(s => r.links && this._getLinkFrequency(n, s.destination) <= r.links.frequency);
        for (const s of o) this._drawTriangles(r, n, s, o), s.opacity > 0 && (n.retina.linksWidth ? ? 0) > 0 && this._drawLinkLine(n, s)
    }
    async init() {
        this._freqs.links = new Map, this._freqs.triangles = new Map
    }
    particleCreated(e) {
        if (e.links = [], !e.options.links) return;
        const n = this.container.retina.pixelRatio,
            {
                retina: i
            } = e,
            {
                distance: r,
                width: o
            } = e.options.links;
        i.linksDistance = r * n, i.linksWidth = o * n
    }
    particleDestroyed(e) {
        e.links = []
    }
}
class zS {
    constructor() {
        this.id = "links"
    }
    getPlugin(e) {
        return new PS(e)
    }
    loadOptions() {}
    needsPlugin() {
        return !0
    }
}
async function $S(t, e = !0) {
    const n = new zS;
    await t.addPlugin(n, e)
}
async function TS(t, e = !0) {
    await _S(t, e), await $S(t, e)
}
const MS = {
    background: {
        color: "#000000"
    },
    particles: {
        number: {
            value: 100
        },
        links: {
            distance: 150,
            enable: !0
        },
        move: {
            enable: !0
        },
        size: {
            value: 1
        },
        shape: {
            type: "circle"
        }
    }
};
async function RS(t, e = !0) {
    await gS(t, !1), await TS(t, !1), await t.addPreset("links", MS, e)
}
const LS = () => {
        const {
            colors: t
        } = Yr(), e = x.useCallback(async o => {
            await RS(o)
        }, []), n = x.useCallback(() => ({
            preset: "links",
            background: {
                color: {
                    value: t.background
                }
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: !0,
                        mode: "push"
                    },
                    onHover: {
                        enable: !0,
                        mode: "repulse"
                    },
                    resize: !0
                },
                modes: {
                    push: {
                        quantity: 4
                    },
                    repulse: {
                        distance: 200,
                        duration: .4
                    }
                }
            },
            particles: {
                color: {
                    value: t.backgroundLighter
                },
                links: {
                    color: t.backgroundLighter,
                    distance: 150,
                    enable: !0,
                    opacity: .5,
                    width: 1
                },
                collisions: {
                    enable: !0
                },
                move: {
                    enable: !0,
                    outModes: {
                        default: "bounce"
                    },
                    random: !1,
                    speed: 2,
                    straight: !1
                },
                number: {
                    density: {
                        enable: !0,
                        area: 600
                    },
                    value: 50
                },
                opacity: {
                    value: .5
                },
                shape: {
                    type: "circle"
                },
                size: {
                    value: {
                        min: 1,
                        max: 5
                    }
                }
            },
            detectRetina: !0
        }), [t]), [i, r] = x.useState(null);
        return x.useEffect(() => {
            r(null), setTimeout(() => {
                r(n())
            }, 500)
        }, [t, n]), i && m.jsx(rl, {
            options: i,
            init: e
        })
    },
    Vm = () => m.jsxs(OS, {
        children: [m.jsx(jS, {}), m.jsx(LS, {})]
    }),
    jS = () => {
        const {
            x: t,
            y: e
        } = Q0();
        return m.jsx(IS, {
            x: t,
            y: e
        })
    },
    OS = b.div `
    position: fixed;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    z-index: 0;
`,
    xo = 1,
    IS = b.div.attrs(({
        x: t,
        y: e
    }) => ({
        style: {
            left: `calc(${t}px - ${xo/2}em)`,
            top: `calc(${e}px - ${xo/2}em)`
        }
    }))
`

    width: ${xo}em;
    height: ${xo}em;
    position: fixed;
    transition: left 0.1s, top 0.1s;
    border-radius: 50%;

    ${t=>""}

    ${({theme:{colors:t}})=>`
@keyframes animateMotion {
    0 % {
        box - shadow: 0 0 0 px $ {
            t.backgroundLight
        };
        $ {
            ke(0)
        }
    }

    50 % {
        box - shadow: 0 0 1e m - 0.2e m $ {
            t.highlightColor
        };
        $ {
            ke(-1.5)
        }
    }

    100 % {
        box - shadow: 0 0 0 px $ {
            t.backgroundLight
        };
        $ {
            ke(0)
        }
    }
} &
::before, & ::after {
    content: '';
    $ {
        ke(0)
    }
    border - radius: 50 % ;
    animation: animateMotion 3 s infinite;
    box - shadow: 0 0 10 px $ {
        t.highlightColor
    };
}

&
::after {
    animation - delay: 1.5 s;
}

`}

`, DS = () => m.jsxs(NS, {
    children: [m.jsx(Vm, {}), m.jsx(ow, {}), m.jsx(z1, {}), m.jsx(Ww, {}), m.jsx(kw, {}), m.jsx(K1, {}), m.jsx(AS, {}), m.jsx(Hw, {})]
}), AS = () => m.jsx(FS, {
    children: h1.map(({
        name: t,
        link: e,
        iconName: n
    }, i) => m.jsx(US, {
        children: m.jsx(BS, {
            href: e,
            target: "_blank",
            children: m.jsx(Fe, {
                name: n
            })
        })
    }, t))
}), NS = b.div `
    position: relative;
  
`, FS = b.ul `
    position: fixed;
    width: 4em;
    bottom: 2em;
    left: 1em;
    @media screen and (max-width: 720px) {
        position: static;
        width: max-content;
        margin: 0 auto 1em;
        height: 4em;
    }
`, US = b.li `
    display: block;
    padding: 0.5em 0;
    @media screen and (max-width: 720px) {
        display: inline-block;
        vertical-align: top;
    }
`, BS = b.a `
    width: 4em;
    height: 4em;
    padding: 1.2em;
    display: block;
`, Pf = [{
    title: "home",
    path: "/"
}, {
    title: "about",
    path: "/about"
}, {
    title: "experience",
    path: "/experience"
}, {
    title: "projects",
    path: "/projects"
}, {
    title: "Contact",
    path: "/contact"
}];
/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Br() {
    return Br = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }, Br.apply(this, arguments)
}
var Dn;
(function(t) {
    t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE"
})(Dn || (Dn = {}));
const zf = "popstate";

function WS(t) {
    t === void 0 && (t = {});

    function e(i, r) {
        let {
            pathname: o,
            search: s,
            hash: l
        } = i.location;
        return cu("", {
            pathname: o,
            search: s,
            hash: l
        }, r.state && r.state.usr || null, r.state && r.state.key || "default")
    }

    function n(i, r) {
        return typeof r == "string" ? r : gs(r)
    }
    return HS(e, n, null, t)
}

function lt(t, e) {
    if (t === !1 || t === null || typeof t > "u") throw new Error(e)
}

function Hm(t, e) {
    if (!t) {
        typeof console < "u" && console.warn(e);
        try {
            throw new Error(e)
        } catch {}
    }
}

function VS() {
    return Math.random().toString(36).substr(2, 8)
}

function $f(t, e) {
    return {
        usr: t.state,
        key: t.key,
        idx: e
    }
}

function cu(t, e, n, i) {
    return n === void 0 && (n = null), Br({
        pathname: typeof t == "string" ? t : t.pathname,
        search: "",
        hash: ""
    }, typeof e == "string" ? ol(e) : e, {
        state: n,
        key: e && e.key || i || VS()
    })
}

function gs(t) {
    let {
        pathname: e = "/",
        search: n = "",
        hash: i = ""
    } = t;
    return n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n), i && i !== "#" && (e += i.charAt(0) === "#" ? i : "#" + i), e
}

function ol(t) {
    let e = {};
    if (t) {
        let n = t.indexOf("#");
        n >= 0 && (e.hash = t.substr(n), t = t.substr(0, n));
        let i = t.indexOf("?");
        i >= 0 && (e.search = t.substr(i), t = t.substr(0, i)), t && (e.pathname = t)
    }
    return e
}

function HS(t, e, n, i) {
    i === void 0 && (i = {});
    let {
        window: r = document.defaultView,
        v5Compat: o = !1
    } = i, s = r.history, l = Dn.Pop, a = null, u = c();
    u == null && (u = 0, s.replaceState(Br({}, s.state, {
        idx: u
    }), ""));

    function c() {
        return (s.state || {
            idx: null
        }).idx
    }

    function f() {
        l = Dn.Pop;
        let _ = c(),
            p = _ == null ? null : _ - u;
        u = _, a && a({
            action: l,
            location: w.location,
            delta: p
        })
    }

    function d(_, p) {
        l = Dn.Push;
        let h = cu(w.location, _, p);
        n && n(h, _), u = c() + 1;
        let g = $f(h, u),
            k = w.createHref(h);
        try {
            s.pushState(g, "", k)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError") throw C;
            r.location.assign(k)
        }
        o && a && a({
            action: l,
            location: w.location,
            delta: 1
        })
    }

    function v(_, p) {
        l = Dn.Replace;
        let h = cu(w.location, _, p);
        n && n(h, _), u = c();
        let g = $f(h, u),
            k = w.createHref(h);
        s.replaceState(g, "", k), o && a && a({
            action: l,
            location: w.location,
            delta: 0
        })
    }

    function y(_) {
        let p = r.location.origin !== "null" ? r.location.origin : r.location.href,
            h = typeof _ == "string" ? _ : gs(_);
        return lt(p, "No window.location.(origin|href) available to create URL for href: " + h), new URL(h, p)
    }
    let w = {
        get action() {
            return l
        },
        get location() {
            return t(r, s)
        },
        listen(_) {
            if (a) throw new Error("A history only accepts one active listener");
            return r.addEventListener(zf, f), a = _, () => {
                r.removeEventListener(zf, f), a = null
            }
        },
        createHref(_) {
            return e(r, _)
        },
        createURL: y,
        encodeLocation(_) {
            let p = y(_);
            return {
                pathname: p.pathname,
                search: p.search,
                hash: p.hash
            }
        },
        push: d,
        replace: v,
        go(_) {
            return s.go(_)
        }
    };
    return w
}
var Tf;
(function(t) {
    t.data = "data", t.deferred = "deferred", t.redirect = "redirect", t.error = "error"
})(Tf || (Tf = {}));

function Mf(t, e) {
    typeof t == "string" && (t = {
        path: t,
        caseSensitive: !1,
        end: !0
    });
    let [n, i] = QS(t.path, t.caseSensitive, t.end), r = e.match(n);
    if (!r) return null;
    let o = r[0],
        s = o.replace(/(.)\/+$/, "$1"),
        l = r.slice(1);
    return {
        params: i.reduce((u, c, f) => {
            if (c === "*") {
                let d = l[f] || "";
                s = o.slice(0, o.length - d.length).replace(/(.)\/+$/, "$1")
            }
            return u[c] = GS(l[f] || "", c), u
        }, {}),
        pathname: o,
        pathnameBase: s,
        pattern: t
    }
}

function QS(t, e, n) {
    e === void 0 && (e = !1), n === void 0 && (n = !0), Hm(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
    let i = [],
        r = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (s, l) => (i.push(l), "/([^\\/]+)"));
    return t.endsWith("*") ? (i.push("*"), r += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? r += "\\/*$" : t !== "" && t !== "/" && (r += "(?:(?=\\/|$))"), [new RegExp(r, e ? void 0 : "i"), i]
}

function GS(t, e) {
    try {
        return decodeURIComponent(t)
    } catch (n) {
        return Hm(!1, 'The value for the URL param "' + e + '" will not be decoded because' + (' the string "' + t + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), t
    }
}

function vs(t, e) {
    if (e === "/") return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
    let n = e.endsWith("/") ? e.length - 1 : e.length,
        i = t.charAt(n);
    return i && i !== "/" ? null : t.slice(n) || "/"
}

function YS(t, e) {
    e === void 0 && (e = "/");
    let {
        pathname: n,
        search: i = "",
        hash: r = ""
    } = typeof t == "string" ? ol(t) : t;
    return {
        pathname: n ? n.startsWith("/") ? n : XS(n, e) : e,
        search: KS(i),
        hash: qS(r)
    }
}

function XS(t, e) {
    let n = e.replace(/\/+$/, "").split("/");
    return t.split("/").forEach(r => {
        r === ".." ? n.length > 1 && n.pop() : r !== "." && n.push(r)
    }), n.length > 1 ? n.join("/") : "/"
}

function oa(t, e, n, i) {
    return "Cannot include a '" + t + "' character in a manually specified " + ("`to." + e + "` field [" + JSON.stringify(i) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function Qm(t) {
    return t.filter((e, n) => n === 0 || e.route.path && e.route.path.length > 0)
}

function Gm(t, e, n, i) {
    i === void 0 && (i = !1);
    let r;
    typeof t == "string" ? r = ol(t) : (r = Br({}, t), lt(!r.pathname || !r.pathname.includes("?"), oa("?", "pathname", "search", r)), lt(!r.pathname || !r.pathname.includes("#"), oa("#", "pathname", "hash", r)), lt(!r.search || !r.search.includes("#"), oa("#", "search", "hash", r)));
    let o = t === "" || r.pathname === "",
        s = o ? "/" : r.pathname,
        l;
    if (i || s == null) l = n;
    else {
        let f = e.length - 1;
        if (s.startsWith("..")) {
            let d = s.split("/");
            for (; d[0] === "..";) d.shift(), f -= 1;
            r.pathname = d.join("/")
        }
        l = f >= 0 ? e[f] : "/"
    }
    let a = YS(r, l),
        u = s && s !== "/" && s.endsWith("/"),
        c = (o || s === ".") && n.endsWith("/");
    return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a
}
const Ym = t => t.join("/").replace(/\/\/+/g, "/"),
    KS = t => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t,
    qS = t => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t,
    Xm = ["post", "put", "patch", "delete"];
new Set(Xm);
const JS = ["get", ...Xm];
new Set(JS);
/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function du() {
    return du = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }, du.apply(this, arguments)
}
const Mc = x.createContext(null),
    ZS = x.createContext(null),
    Wi = x.createContext(null),
    Rc = x.createContext(null),
    sl = x.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    });

function e_(t, e) {
    let {
        relative: n
    } = e === void 0 ? {} : e;
    ll() || lt(!1);
    let {
        basename: i,
        navigator: r
    } = x.useContext(Wi), {
        hash: o,
        pathname: s,
        search: l
    } = ul(t, {
        relative: n
    }), a = s;
    return i !== "/" && (a = s === "/" ? i : Ym([i, s])), r.createHref({
        pathname: a,
        search: l,
        hash: o
    })
}

function ll() {
    return x.useContext(Rc) != null
}

function al() {
    return ll() || lt(!1), x.useContext(Rc).location
}

function Km(t) {
    x.useContext(Wi).static || x.useLayoutEffect(t)
}

function t_() {
    let {
        isDataRoute: t
    } = x.useContext(sl);
    return t ? s_() : n_()
}

function n_() {
    ll() || lt(!1);
    let t = x.useContext(Mc),
        {
            basename: e,
            navigator: n
        } = x.useContext(Wi),
        {
            matches: i
        } = x.useContext(sl),
        {
            pathname: r
        } = al(),
        o = JSON.stringify(Qm(i).map(a => a.pathnameBase)),
        s = x.useRef(!1);
    return Km(() => {
        s.current = !0
    }), x.useCallback(function(a, u) {
        if (u === void 0 && (u = {}), !s.current) return;
        if (typeof a == "number") {
            n.go(a);
            return
        }
        let c = Gm(a, JSON.parse(o), r, u.relative === "path");
        t == null && e !== "/" && (c.pathname = c.pathname === "/" ? e : Ym([e, c.pathname])), (u.replace ? n.replace : n.push)(c, u.state, u)
    }, [e, n, o, r, t])
}

function ul(t, e) {
    let {
        relative: n
    } = e === void 0 ? {} : e, {
        matches: i
    } = x.useContext(sl), {
        pathname: r
    } = al(), o = JSON.stringify(Qm(i).map(s => s.pathnameBase));
    return x.useMemo(() => Gm(t, JSON.parse(o), r, n === "path"), [t, o, r, n])
}
var qm = function(t) {
        return t.UseBlocker = "useBlocker", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t
    }(qm || {}),
    Jm = function(t) {
        return t.UseBlocker = "useBlocker", t.UseLoaderData = "useLoaderData", t.UseActionData = "useActionData", t.UseRouteError = "useRouteError", t.UseNavigation = "useNavigation", t.UseRouteLoaderData = "useRouteLoaderData", t.UseMatches = "useMatches", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t.UseRouteId = "useRouteId", t
    }(Jm || {});

function i_(t) {
    let e = x.useContext(Mc);
    return e || lt(!1), e
}

function r_(t) {
    let e = x.useContext(sl);
    return e || lt(!1), e
}

function o_(t) {
    let e = r_(),
        n = e.matches[e.matches.length - 1];
    return n.route.id || lt(!1), n.route.id
}

function s_() {
    let {
        router: t
    } = i_(qm.UseNavigateStable), e = o_(Jm.UseNavigateStable), n = x.useRef(!1);
    return Km(() => {
        n.current = !0
    }), x.useCallback(function(r, o) {
        o === void 0 && (o = {}), n.current && (typeof r == "number" ? t.navigate(r) : t.navigate(r, du({
            fromRouteId: e
        }, o)))
    }, [t, e])
}

function l_(t) {
    let {
        basename: e = "/",
        children: n = null,
        location: i,
        navigationType: r = Dn.Pop,
        navigator: o,
        static: s = !1
    } = t;
    ll() && lt(!1);
    let l = e.replace(/^\/*/, "/"),
        a = x.useMemo(() => ({
            basename: l,
            navigator: o,
            static: s
        }), [l, o, s]);
    typeof i == "string" && (i = ol(i));
    let {
        pathname: u = "/",
        search: c = "",
        hash: f = "",
        state: d = null,
        key: v = "default"
    } = i, y = x.useMemo(() => {
        let w = vs(u, l);
        return w == null ? null : {
            location: {
                pathname: w,
                search: c,
                hash: f,
                state: d,
                key: v
            },
            navigationType: r
        }
    }, [l, u, c, f, d, v, r]);
    return y == null ? null : x.createElement(Wi.Provider, {
        value: a
    }, x.createElement(Rc.Provider, {
        children: n,
        value: y
    }))
}
new Promise(() => {});
/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ys() {
    return ys = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }, ys.apply(this, arguments)
}

function Zm(t, e) {
    if (t == null) return {};
    var n = {},
        i = Object.keys(t),
        r, o;
    for (o = 0; o < i.length; o++) r = i[o], !(e.indexOf(r) >= 0) && (n[r] = t[r]);
    return n
}

function a_(t) {
    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
}

function u_(t, e) {
    return t.button === 0 && (!e || e === "_self") && !a_(t)
}
const c_ = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
    d_ = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"],
    f_ = x.createContext({
        isTransitioning: !1
    }),
    h_ = "startTransition",
    Rf = wg[h_];

function p_(t) {
    let {
        basename: e,
        children: n,
        future: i,
        window: r
    } = t, o = x.useRef();
    o.current == null && (o.current = WS({
        window: r,
        v5Compat: !0
    }));
    let s = o.current,
        [l, a] = x.useState({
            action: s.action,
            location: s.location
        }),
        {
            v7_startTransition: u
        } = i || {},
        c = x.useCallback(f => {
            u && Rf ? Rf(() => a(f)) : a(f)
        }, [a, u]);
    return x.useLayoutEffect(() => s.listen(c), [s, c]), x.createElement(l_, {
        basename: e,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: s
    })
}
const m_ = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    g_ = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    v_ = x.forwardRef(function(e, n) {
        let {
            onClick: i,
            relative: r,
            reloadDocument: o,
            replace: s,
            state: l,
            target: a,
            to: u,
            preventScrollReset: c,
            unstable_viewTransition: f
        } = e, d = Zm(e, c_), {
            basename: v
        } = x.useContext(Wi), y, w = !1;
        if (typeof u == "string" && g_.test(u) && (y = u, m_)) try {
            let g = new URL(window.location.href),
                k = u.startsWith("//") ? new URL(g.protocol + u) : new URL(u),
                C = vs(k.pathname, v);
            k.origin === g.origin && C != null ? u = C + k.search + k.hash : w = !0
        } catch {}
        let _ = e_(u, {
                relative: r
            }),
            p = x_(u, {
                replace: s,
                state: l,
                target: a,
                preventScrollReset: c,
                relative: r,
                unstable_viewTransition: f
            });

        function h(g) {
            i && i(g), g.defaultPrevented || p(g)
        }
        return x.createElement("a", ys({}, d, {
            href: y || _,
            onClick: w || o ? i : h,
            ref: n,
            target: a
        }))
    }),
    y_ = x.forwardRef(function(e, n) {
        let {
            "aria-current": i = "page",
            caseSensitive: r = !1,
            className: o = "",
            end: s = !1,
            style: l,
            to: a,
            unstable_viewTransition: u,
            children: c
        } = e, f = Zm(e, d_), d = ul(a, {
            relative: f.relative
        }), v = al(), y = x.useContext(ZS), {
            navigator: w
        } = x.useContext(Wi), _ = y != null && k_(d) && u === !0, p = w.encodeLocation ? w.encodeLocation(d).pathname : d.pathname, h = v.pathname, g = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
        r || (h = h.toLowerCase(), g = g ? g.toLowerCase() : null, p = p.toLowerCase());
        let k = h === p || !s && h.startsWith(p) && h.charAt(p.length) === "/",
            C = g != null && (g === p || !s && g.startsWith(p) && g.charAt(p.length) === "/"),
            T = {
                isActive: k,
                isPending: C,
                isTransitioning: _
            },
            L = k ? i : void 0,
            M;
        typeof o == "function" ? M = o(T) : M = [o, k ? "active" : null, C ? "pending" : null, _ ? "transitioning" : null].filter(Boolean).join(" ");
        let H = typeof l == "function" ? l(T) : l;
        return x.createElement(v_, ys({}, f, {
            "aria-current": L,
            className: M,
            ref: n,
            style: H,
            to: a,
            unstable_viewTransition: u
        }), typeof c == "function" ? c(T) : c)
    });
var fu;
(function(t) {
    t.UseScrollRestoration = "useScrollRestoration", t.UseSubmit = "useSubmit", t.UseSubmitFetcher = "useSubmitFetcher", t.UseFetcher = "useFetcher", t.useViewTransitionState = "useViewTransitionState"
})(fu || (fu = {}));
var Lf;
(function(t) {
    t.UseFetchers = "useFetchers", t.UseScrollRestoration = "useScrollRestoration"
})(Lf || (Lf = {}));

function w_(t) {
    let e = x.useContext(Mc);
    return e || lt(!1), e
}

function x_(t, e) {
    let {
        target: n,
        replace: i,
        state: r,
        preventScrollReset: o,
        relative: s,
        unstable_viewTransition: l
    } = e === void 0 ? {} : e, a = t_(), u = al(), c = ul(t, {
        relative: s
    });
    return x.useCallback(f => {
        if (u_(f, n)) {
            f.preventDefault();
            let d = i !== void 0 ? i : gs(u) === gs(c);
            a(t, {
                replace: d,
                state: r,
                preventScrollReset: o,
                relative: s,
                unstable_viewTransition: l
            })
        }
    }, [u, a, c, i, r, n, t, o, s, l])
}

function k_(t, e) {
    e === void 0 && (e = {});
    let n = x.useContext(f_);
    n == null && lt(!1);
    let {
        basename: i
    } = w_(fu.useViewTransitionState), r = ul(t, {
        relative: e.relative
    });
    if (!n.isTransitioning) return !1;
    let o = vs(n.currentLocation.pathname, i) || n.currentLocation.pathname,
        s = vs(n.nextLocation.pathname, i) || n.nextLocation.pathname;
    return Mf(r.pathname, s) != null || Mf(r.pathname, o) != null
}
const S_ = 2,
    __ = b.nav `
        display: flex; align-items: center; box-shadow: none; height: 100%; margin-left: 6em;
        margin-right: 21em; position: relative;
        @media (max-width: 720px) { margin-left: 0em; }
    `,
    b_ = b.ul `
    display: block;
    position: relative;
    ${({drop:t})=>`
$ {
    ke(t ? 1 : 0)
}
position: $ {
    t ? "absolute" : "relative"
};
margin: $ {
    t ? 0 : ""
};
`}


`, C_ = b.li `
    display: inline-block;
    vertical-align: top;
    &:nth-child(even) { a { border-color: #C9D1D6; } }

    ${({drop:t})=>`
$ {
    t ? "display: block;" : ""
}
`}
`, E_ = b(y_)
`
    display: block; padding: 1em ${S_}em; text-transform: capitalize; font-family: 'Open Sans', sans-serif; font-weight: 500; height: 3.6em; display: flex;  align-items: center;
    position: relative;
    span {  position: relative;  z-index: 6; width: 100%; height: 100%; display: flex;  align-items: center; }

    ${({drop:t})=>` &
: hover::before {
    $ {
        ke(.2)
    }
    border - radius: $ {
        t ? "0.5em" : "3em"
    };
}
span {
    justify - content: $ {
        t ? "left" : "center"
    };
    text - align: left;
    position: relative;
} &
.active - element > span, &: hover span {
    text - align: center;
    background - clip: text; - webkit - background - clip: text;
    color: transparent;
}
`}

    ${({theme:{colors:t}})=>` &
: hover::before {
        background: $ {
            t.backgroundLight
        };
    } &
    .active - element::before {
        background: none;
    } &
    .active - element > span, &: hover span {
        background - image: $ {
            t.gradientColor
        };
    }
`}

`, P_ = b.div `
    border-radius: 2em;
    transition: all 1s;
    ${({highlightStyle:t})=>`
$ {
    t
}
`}

    &::before {  }

    ${({theme:{colors:t}})=>`
background: $ {
    t.gradientColor
}; &
::before {
    $ {
        ke(.2)
    };
    border - radius: 2e m;
    background: $ {
        t.background
    };
}
`}
`, wr = {
    Anchor: E_,
    Highlighter: P_,
    Nav: __,
    NavListItem: C_,
    NavList: b_
}, we = {
    EleCustomiseSound: b.div `
        position: absolute; right: 0; min-width: 18em; width: 100%; border-radius: 0.85em;
        & > div:first-child > div {
            border-radius: 0.85em 0.85em 0 0 !important;
        } 
        transition: height 1s, transform 1s; overflow: hidden; transform-origin: 0 0;
        backdrop-filter: blur(2px);

        ${({theme:{colors:t}})=>`
    background - color: $ {
        t.hex2Rgb(t.backgroundLight, .9)
    };
    color: $ {
        t.textColor
    };
    `}

        ${({height:t,active:e})=>`
    height: $ {
        e ? t : 0
    }
    px;

    `}

    `,
    EleFormGroup: b.div `
        position: absolute; bottom: 0; left: 0; right: 0;
        p {
            padding: .75em 1.2em 0; font-weight: bold;
            ${({theme:{colors:t}})=>`
    color: $ {
        t.textSaturated
    };
    `}
        }
    `,
    EleSettingsComponent: b.div `
        position: absolute; top: 0; right: 0;`,
    EleWrapButtons: b.div `
        height: 5.6em; display: flex; align-items: center; position: relative; z-index: 1;
    `,
    switchStyle: `
        padding: 0.25em 0.5em; transition: background 0.6s;
        & > label { justify-content: space-between; }
        &:last-child { border: 0; border-radius: 0 0 0.85em 0.85em; }
    `,
    EleIcon: b.div `
        display: inline-block; vertical-align: middle; margin-right: 1em; width: 3em; height: 3em; position: relative; background-color: #fff; border-radius: 1rem;
        padding: 0.5rem;
        ${({theme:{colors:t}})=>`
    background - color: $ {
        t.background
    }
    `}
    `,
    SoundIcon: b.div `
        width: 15em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.4em 0 1em;
        border-radius: 3em;
        white-space: nowrap;
        background: none;
        ${({theme:{colors:t}})=>`
    border: 0.15e m solid $ {
        t.backgroundLight
    };
    color: $ {
        t.textColor
    };
    `}

        @media (max-width: 30em) {
            span {
                display: none;
            }
            width: 3em;
            padding: 0;
        }

    `,
    IcoStyle: `
        padding: 0.75em; fill: #383A3B;
    `,
    IcoStyleMute: `
        width: 3em;
        height: 3em;
        padding: 0.8em;
    `,
    EleCircleWrapper: b.div `
        width: 100%; height: 100%; padding: 0.5em; border-radius: 50%; position: absolute; top: 0; left: 0; transition: padding 0.4s;
        > div {
            padding: 0;
            overflow: hidden;
            position: relative;
        }

        ${({theme:{dark:t}})=>`
    padding: $ {
        t ? .15 : 1
    }
    em;
    `}
    `,
    EleCircle: b.div `
        border-radius: 50%; width: 100%; height: 100%;
        ${({theme:{dark:t,colors:e}})=>`
    border: $ {
        t ? `1px solid ${e.background}` : " 0;"
    };
    background - color: $ {
        e.textColor
    };
    `}

        &:first-child {
            border: 0; z-index: 1; position: absolute; left: 0.6em; bottom: 0.6em; transition: left 0.4s, bottom 0.4s;
            ${({theme:{dark:t,colors:e}})=>`
    left: $ {
        t ? "0.6em" : "100%"
    };
    bottom: $ {
        t ? "0.6em" : "100%"
    };
    background - color: $ {
        e.background
    }
    `}
        }
    `,
    IcoSpecialWrapper: b.div `
        position: absolute; top: 0; left: 0; right: 0; bottom: 0; border-radius: 50%; margin: 0.65em;
        ${({theme:{colors:t}})=>`
    background - color: $ {
        t.background
    };
    `}
    `,
    styleIcoLines: ({
        dark: t,
        colors: e
    }) => `
        width: 0; height: 0; position: absolute; top: 0; left: 0; bottom: 0; right: 0; margin: auto; transition: height 0.4s, width 0.4s, transform 1s; transform: rotate(0);
        ${t?"":"width: 80%; height: 80%;transform: rotate(90deg);"}
        fill: ${e.textColor};
    `,
    SettingsButtonStyle: t => `
        border-radius: 3em;
    `
}, z_ = 2.5, Lc = 3, eg = 1, $_ = () => {
    const [t, e] = x.useState([
        [...Pf],
        []
    ]), n = x.useRef(null);
    return x.useEffect(() => {
        const i = () => {
            e(T_(Pf, n))
        };
        return window.addEventListener("resize", i), i(), () => {
            window.removeEventListener("resize", i)
        }
    }, [e]), m.jsxs(wr.Nav, {
        ref: n,
        children: [m.jsx(tg, {
            routes: t[0]
        }), m.jsx(R_, {
            routes: t[1]
        })]
    })
}, T_ = (t, e) => {
    let n = 0,
        i = En(t, l => l);
    const r = [],
        o = D0();
    if (e.current == null) return [i, []];
    const s = e.current.offsetWidth;
    if (i = i.filter(l => {
            const a = typeof l == "object" ? l.title : l,
                u = dm(a, j_);
            return n + u > s || window.innerWidth < 720 ? (r.push(l), !1) : (n += u, !0)
        }), r.length > 0 && n + o * (Lc + eg) > s) {
        const l = i.pop();
        l !== void 0 && r.splice(0, 0, l)
    }
    return [i, r]
}, M_ = ({
    to: t,
    title: e,
    active: n
}) => {
    const i = x.useRef(null);
    Cn(i, {
        clickSound: !0,
        hoverSound: !0
    });
    const r = () => {
        vc(t)
    };
    return m.jsx(wr.Anchor, {
        onClick: r,
        className: n ? "active-element" : "",
        ref: i,
        to: t,
        children: m.jsx("span", {
            children: e
        })
    })
}, R_ = ({
    routes: t
}) => {
    const [e, n] = x.useState(!1), i = x.useRef(null), r = x.useRef(null), {
        colors: o
    } = Yr();
    if (Cn(i, {
            clickSound: !0,
            hoverSound: !0
        }), ym(r, e, l => {
            e && (n(!e), l == null || l.stopPropagation(), l == null || l.stopImmediatePropagation(), l == null || l.preventDefault())
        }), t.length === 0) return null;
    const s = l => {
        l.preventDefault(), l.stopPropagation(), n(!e)
    };
    return m.jsxs(D_, {
        children: [m.jsx(I_, {
            as: "button",
            radius: "circle",
            ref: i,
            onClick: s,
            children: m.jsx(Fe, {
                name: "more",
                compStyle: A_(o)
            })
        }), m.jsx(O_, {
            active: e,
            ref: r,
            itemsLength: t.length,
            children: m.jsx(tg, {
                routes: t,
                active: e,
                drop: !0
            })
        })]
    })
}, tg = ({
    routes: t,
    drop: e,
    active: n
}) => {
    const [i, r] = x.useState(t.findIndex(d => d.path === window.location.pathname)), o = x.useRef(null), s = L_(i, o), {
        height: l,
        scrollTop: a
    } = gm(), [u, c] = x.useState(!1), f = x.useRef(void 0);
    return x.useEffect(() => {
        const d = t[i] || t[t.length - 1];
        if (!d) return;
        window.location.pathname !== d.path && window.history.pushState({}, "", `${d.path}`)
    }, [i, t]), x.useEffect(() => {
        const d = jf(t);
        u || r(d)
    }, [l, a, t]), x.useEffect(() => {
        let d = null;
        f.current = v => () => {
            r(v), c(!0), d && clearTimeout(d), d = window.setTimeout(() => {
                c(!1);
                const y = jf(t);
                r(y)
            }, 4e3)
        }
    }, [r]), m.jsxs(wr.NavList, {
        drop: e,
        activeStyle: s,
        ref: o,
        children: [t.map((d, v) => {
            let y, w;
            return typeof d == "object" ? (y = d.title, w = d.path) : (y = d, w = d), m.jsx(wr.NavListItem, {
                drop: e,
                onClick: f.current != null ? f.current(v) : void 0,
                children: m.jsx(M_, {
                    to: w,
                    active: i === v,
                    drop: e,
                    title: y
                })
            }, y)
        }), m.jsx(wr.Highlighter, {
            highlightStyle: s
        })]
    })
}, L_ = (t, e) => {
    if (e.current == null) return "";
    const n = e.current.children[t];
    if (n == null) return "";
    const {
        top: i,
        left: r
    } = e.current.getBoundingClientRect(), {
        top: o,
        left: s
    } = n.getBoundingClientRect(), l = o - i, a = s - r, u = n.offsetWidth, f = {
        height: n.offsetHeight,
        left: a,
        width: u,
        top: l
    };
    return `${Object.entries(f).map(([v,y])=>`${v}: ${y}px; --${v}: ${y}px`).join(";")}; position: absolute; content: ''`
}, jf = (t, e) => {
    let n = -1;
    return t.forEach(({
        path: i
    }, r) => {
        const o = i.indexOf("/") === 0 ? i.substring(1) : i,
            s = document.getElementById(o || "home");
        if (s == null) return;
        const {
            top: l
        } = s.getBoundingClientRect(), a = window.innerHeight / 2;
        l < a / 2 && (n = r)
    }), n
}, j_ = `   display: inline-block;
    padding: 0 ${z_}em;
    fontFamily: Arial, sans-serif';
    fontSize: 600;
    textTransform: capitalize';
`, O_ = b(ei)
`
    position: absolute;
    top: calc(100% - 0.25em);
    right: 0;
    width: 18em;
    overflow: hidden;
    border-radius: 0.5em;
    transform-origin: 0 0;
    
    @media screen and (max-width: 700px) {
        right: 0;
        left: 0;
        position: fixed;
        top: 5em;
        width: 100%;
        margin: 0 auto;
        max-width: 90%;
    }

    ${({active:t,itemsLength:e})=>`
transition: height $ {
    e * .2
}
s, transform $ {
    e * .2
}
s;
transform: scale($ {
    t ? "1, 1" : "1, 0"
});
height: $ {
    t ? e * 3.6 + 2 : 0
}
em;

`}

    ${({theme:{colors:t}})=>`
background: $ {
    t.backgroundLight
};
`}
`, I_ = b(ei)
`
    width: ${Lc}em;
    height: 3em;
    border-radius: 0.5em;
    box-shadow: none;
    background: none;
`, D_ = b.div `
    height: 5.6em;
    display: flex;
    align-items: center;
    width: ${Lc}em;
    margin-left: ${eg}em;
    position: relative;

    @media (max-width: 40em) {
        margin-left: 0em;
    }
`, A_ = t => `
    padding: 0.75em;
    fill: ${t.textColor};
`, N_ = () => {
    const [t, e] = x.useState(!1), n = x.useRef(null), i = x.useRef(null), r = x.useContext(Xr);
    Cn(i, {
        hoverSound: !0,
        clickSound: !0
    });
    const o = l => {
        l.stopPropagation(), l.preventDefault(), e(a => !a)
    };
    ym(n, t, l => {
        t && (e(!t), l == null || l.stopPropagation(), l == null || l.stopImmediatePropagation(), l == null || l.preventDefault())
    });
    let s = !1;
    for (const l in r)({}).hasOwnProperty.call(r, l) && r[l] === !0 && (s = !0);
    return m.jsxs(we.EleSettingsComponent, {
        children: [m.jsxs(we.EleWrapButtons, {
            children: [m.jsx(F_, {}), m.jsxs(we.SoundIcon, {
                as: "button",
                ref: i,
                onClick: o,
                children: [m.jsx("span", {
                    children: "Sound Settings"
                }), s ? m.jsx(Fe, {
                    name: "sound",
                    compStyle: we.IcoStyleMute
                }) : m.jsx(Fe, {
                    name: "mute",
                    compStyle: we.IcoStyleMute
                })]
            })]
        }), m.jsx(U_, {
            active: t,
            passRef: n
        })]
    })
}, F_ = () => {
    const t = x.useContext(yc),
        e = x.useRef(null);
    Cn(e, {
        hoverSound: !0,
        switchSound: !0
    });
    const n = () => {
        var i;
        (i = t.toggleTheme) == null || i.call(t)
    };
    return m.jsxs(we.EleIcon, {
        as: "button",
        ref: e,
        children: [m.jsx(Fe, {
            name: "linesCircle",
            compStyle: we.styleIcoLines(t)
        }), m.jsx(we.IcoSpecialWrapper, {}), m.jsx(we.EleCircleWrapper, {
            theme: t,
            onClick: n,
            children: m.jsxs(we.EleCircleWrapper, {
                theme: t,
                children: [m.jsx(we.EleCircle, {
                    theme: t
                }), m.jsx(we.EleCircle, {
                    theme: t
                })]
            })
        })]
    })
}, U_ = ({
    active: t,
    passRef: e
}) => {
    const [n, i] = x.useState(), [r, o] = x.useState(), s = x.useRef(null), l = x.useContext(Xr);
    x.useEffect(() => {
        if (s.current == null) return;
        const u = () => {
            var f;
            const c = (f = s.current) == null ? void 0 : f.offsetHeight;
            i(c)
        };
        u(), document.fonts.load('1px "Roboto", sans-serif').then(u).catch(c => {})
    }, []), x.useEffect(() => {
        (() => {
            o(l.clickSound && l.hoverSound && l.notificationSound)
        })()
    }, [l, r]);
    const a = u => () => {
        var f, d;
        if (u !== "all") return (f = l.toggleSound) == null ? void 0 : f.call(l, u);
        const c = En(l, v => (v.clickSound = !r, v.hoverSound = !r, v.notificationSound = !r, v));
        (d = l.toggleSound) == null || d.call(l, c)
    };
    return m.jsx(we.EleCustomiseSound, {
        active: t,
        height: n,
        ref: e,
        children: m.jsxs(we.EleFormGroup, {
            ref: s,
            children: [m.jsx(er, {
                compStyle: we.switchStyle,
                value: l.backgroundSound,
                onChange: a("backgroundSound"),
                label: "Background Music"
            }), m.jsx("p", {
                children: "Sound Fx"
            }), m.jsx(er, {
                compStyle: we.switchStyle,
                value: !!r,
                onChange: a("all"),
                label: "Enable All Effects"
            }), m.jsx(er, {
                compStyle: we.switchStyle,
                value: l.clickSound,
                onChange: a("clickSound"),
                label: "Click"
            }), m.jsx(er, {
                compStyle: we.switchStyle,
                value: l.hoverSound,
                onChange: a("hoverSound"),
                label: "Hover"
            }), m.jsx(er, {
                compStyle: we.switchStyle,
                value: l.notificationSound,
                onChange: a("notificationSound"),
                label: "Notifications"
            })]
        })
    })
}, hu = 3, B_ = () => m.jsx(Y_, {
    children: m.jsxs(G_, {
        children: [m.jsx(W_, {}), m.jsx($_, {}), m.jsx(N_, {})]
    })
}), W_ = () => {
    const {
        colors: t
    } = Yr();
    return m.jsx(H_, {
        children: m.jsx(V_, {
            as: "figure",
            children: m.jsx(Fe, {
                name: "logo",
                compStyle: Q_(t)
            })
        })
    })
}, V_ = b.div `
    width: ${hu};
    height: ${hu};
`, H_ = b.div `
    height: 100%;
    width: ${hu}em;
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 4;
    left: 0;
    top: 0;
    @media (max-width: 46em) {
        left: 4em;
    }
`, Q_ = t => `
    border-radius: 0.35em;
    fill: ${t.textColor}; 
`, G_ = b.div `
    height: 5.6em;
    position: fixed;
    margin: 0 3em;
    z-index: 9999999;
    left: 0;
    right: 10px;
    &::before {
        position: absolute;
        left: 0;
        right: 0;
        background-color: rgba(#fff, .6);
        content: '';
        top: 0;
        height: 5.6em;
        backdrop-filter: blur(10px);
    }

    @media (max-width: 40em) {
        margin: 0 1em;
    }
    
`, Y_ = b.header `
    display: block;
    z-index: 9000;
    &::after {
        height: 5.6em;
        content: '';
        display: block;
    }
`, X_ = "/assets/Feel-Good-da3bc058.mp3";
const K_ = En(U0, t => t),
    q_ = En(as, t => t);

function J_() {
    const [t, e] = x.useState(pm), [n, i] = x.useState(mm), r = () => {
        e(s => En(s, l => (l.dark ? l.colors = K_ : l.colors = q_, l.dark = !l.dark, l)))
    }, o = s => {
        if (typeof s == "string") return i(En(n, l => (s !== "toggleSound" && (l[s] = !l[s]), s === "backgroundSound" && Of(l[s]), l)));
        Of(s.backgroundSound), i(s)
    };
    return x.useEffect(() => {
        vc(window.location.pathname)
    }, []), m.jsx(j0, {
        theme: { ...t,
            toggleTheme: r
        },
        children: m.jsx(yc.Provider, {
            value: { ...t,
                toggleTheme: r
            },
            children: m.jsx(Xr.Provider, {
                value: { ...n,
                    toggleSound: o
                },
                children: m.jsxs(Z_, {
                    className: "App",
                    id: "MainScrollingElement",
                    children: [m.jsx(Vm, {}), m.jsxs(p_, {
                        children: [m.jsx(B_, {}), m.jsx(DS, {})]
                    })]
                })
            })
        })
    })
}
const Of = function() {
        const t = new Audio(X_);
        return t.volume = .3, t.addEventListener("ended", () => {
            t.currentTime = 0, t.play().catch(e => console.log(e))
        }), (e = !0) => {
            e ? t.play().catch(n => console.log(n)) : t.pause()
        }
    }(),
    Z_ = b.div `
  height: 100%;
  width: 100%;
  overflow: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  position: relative;
  z-index: 1;
  ${({theme:{colors:t}})=>`
background - color: $ {
    t.background
};
`}

  &::-webkit-scrollbar {
    width: 15px;
    position: relative;
    z-index: 999999999;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 1em;
    background-clip: content-box;
    padding: 2px;
  }

  ${({theme:{colors:t}})=>` &
, a {
    color: $ {
        t.textColor
    };
    fill: $ {
        t.textColor
    };
}

&
::-webkit - scrollbar - track {
        background: $ {
            t.background
        };
    }

    &
    ::-webkit - scrollbar - thumb {
        background - color: $ {
            t.textColor
        };
        border: 3 px solid $ {
            t.background
        };
        transition: background - color .4 s;
    }

    &
    ::-webkit - scrollbar - thumb: hover {
        background - color: $ {
            t.textSaturated
        };
    }

`}
`, eb = t => {
    t != null && t instanceof Function && X(() =>
        import ("./web-vitals-60d3425a.js"), []).then(({
        getCLS: e,
        getFID: n,
        getFCP: i,
        getLCP: r,
        getTTFB: o
    }) => {
        e(t), n(t), i(t), r(t), o(t)
    }).catch(e => {})
}, tb = Oo.createRoot(document.getElementById("root")), nb = Oo.createRoot(document.getElementsByClassName("sound-settings")[0]), ib = () => {
    document.body.classList.add("loaded"), setTimeout(() => {
        var e;
        const t = document.body.querySelector(".loader");
        (e = t == null ? void 0 : t.parentElement) == null || e.removeChild(t)
    }, 1e3)
};
tb.render(m.jsx(Ht.StrictMode, {
    children: m.jsx(J_, {})
}));
nb.render(m.jsx(Ht.StrictMode, {
    children: m.jsx(e1, {
        callback: ib
    })
}));
const ng = function() {
    const t = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 207.51 207.51">
        <style>
            path {
              fill: #${window.matchMedia("(prefers-color-scheme: dark)").matches?"fff":"303940"};
            }
        </style>
    <path class="a" d="M129.15,207.31l-28.87-7.24a6.93,6.93,0,0,1-3.21-11.62l9-9a6.93,6.93,0,0,0-1.47-10.92L77.48,153A7.32,7.32,0,0,1,76,151.92L55.6,131.5A6.6,6.6,0,0,1,54.48,130L39,102.88a6.93,6.93,0,0,0-10.92-1.46l-9,9a6.93,6.93,0,0,1-11.61-3.22L.21,78.36A6.93,6.93,0,0,1,2,71.78L37.49,36.32A7,7,0,0,1,39.35,35L109.7.75c7-3.42,13.46,5.6,7.93,11.13L67,62.5a6.91,6.91,0,0,0-1.2,8.19L76.52,90.54a6.92,6.92,0,0,0,11,1.61l46-46a6.92,6.92,0,0,1,9.8,0L161.4,64.17a6.91,6.91,0,0,1,0,9.79l-46,46a6.92,6.92,0,0,0,1.6,11l19.86,10.71a6.91,6.91,0,0,0,8.18-1.19l50.63-50.63c5.52-5.52,14.54.91,11.12,7.93l-34.24,70.35a6.79,6.79,0,0,1-1.33,1.87l-35.46,35.46A6.93,6.93,0,0,1,129.15,207.31Z"/>
  </svg>
  `,
        e = new Blob([t], {
            type: "image/svg+xml"
        }),
        n = URL.createObjectURL(e),
        i = document.querySelector('link[rel="icon"]');
    i != null && (i.href = n)
};
ng();
var If;
(If = window.matchMedia) == null || If.call(window, "(prefers-color-scheme: dark)").addEventListener("change", () => {
    ng()
}); {
    let t = function() {
        window.dataLayer.push(arguments)
    };
    window.dataLayer = window.dataLayer || [], t("js", new Date), t("config", "G-09R52WMS3V")
}
eb();
export {
    m as j, En as p, b as s
};