// Zepto 1.1.3 (generated with Zepto Builder) - zepto event ajax form ie - zeptojs.com/license 
var Zepto = function() {
	function t(t) {
		return null == t ? t + "" : X[V.call(t)] || "object"
	}

	function e(e) {
		return "function" == t(e)
	}

	function n(t) {
		return null != t && t == t.window
	}

	function i(t) {
		return null != t && t.nodeType == t.DOCUMENT_NODE
	}

	function r(e) {
		return "object" == t(e)
	}

	function o(t) {
		return r(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
	}

	function a(t) {
		return "number" == typeof t.length
	}

	function s(t) {
		return N.call(t, function(t) {
			return null != t
		})
	}

	function u(t) {
		return t.length > 0 ? E.fn.concat.apply([], t) : t
	}

	function c(t) {
		return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
	}

	function l(t) {
		return t in M ? M[t] : M[t] = RegExp("(^|\\s)" + t + "(\\s|$)")
	}

	function f(t, e) {
		return "number" != typeof e || Z[c(t)] ? e : e + "px"
	}

	function h(t) {
		var e, n;
		return D[t] || (e = O.createElement(t), O.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), D[t] = n), D[t]
	}

	function p(t) {
		return "children" in t ? P.call(t.children) : E.map(t.childNodes, function(t) {
			return 1 == t.nodeType ? t : w
		})
	}

	function d(t, e, n) {
		for (T in e) n && (o(e[T]) || J(e[T])) ? (o(e[T]) && !o(t[T]) && (t[T] = {}), J(e[T]) && !J(t[T]) && (t[T] = []), d(t[T], e[T], n)) : e[T] !== w && (t[T] = e[T])
	}

	function m(t, e) {
		return null == e ? E(t) : E(t).filter(e)
	}

	function g(t, n, i, r) {
		return e(n) ? n.call(t, i, r) : n
	}

	function v(t, e, n) {
		null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
	}

	function y(t, e) {
		var n = t.className,
			i = n && n.baseVal !== w;
		return e === w ? i ? n.baseVal : n : (i ? n.baseVal = e : t.className = e, w)
	}

	function x(t) {
		var e;
		try {
			return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : /^0/.test(t) || isNaN(e = Number(t)) ? /^[\[\{]/.test(t) ? E.parseJSON(t) : t : e) : t
		} catch (n) {
			return t
		}
	}

	function b(t, e) {
		e(t);
		for (var n = 0, i = t.childNodes.length; i > n; n++) b(t.childNodes[n], e)
	}
	var w, T, E, j, C, S, A = [],
		P = A.slice,
		N = A.filter,
		O = window.document,
		D = {},
		M = {},
		Z = {
			"column-count": 1,
			columns: 1,
			"font-weight": 1,
			"line-height": 1,
			opacity: 1,
			"z-index": 1,
			zoom: 1
		},
		L = /^\s*<(\w+|!)[^>]*>/,
		k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		_ = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		$ = /^(?:body|html)$/i,
		R = /([A-Z])/g,
		F = ["val", "css", "html", "text", "data", "width", "height", "offset"],
		z = ["after", "prepend", "before", "append"],
		q = O.createElement("table"),
		I = O.createElement("tr"),
		W = {
			tr: O.createElement("tbody"),
			tbody: q,
			thead: q,
			tfoot: q,
			td: I,
			th: I,
			"*": O.createElement("div")
		},
		H = /complete|loaded|interactive/,
		U = /^[\w-]*$/,
		X = {},
		V = X.toString,
		B = {},
		Y = O.createElement("div"),
		G = {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		J = Array.isArray || function(t) {
			return t instanceof Array
		};
	return B.matches = function(t, e) {
		if (!e || !t || 1 !== t.nodeType) return !1;
		var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
		if (n) return n.call(t, e);
		var i, r = t.parentNode,
			o = !r;
		return o && (r = Y).appendChild(t), i = ~B.qsa(r, e).indexOf(t), o && Y.removeChild(t), i
	}, C = function(t) {
		return t.replace(/-+(.)?/g, function(t, e) {
			return e ? e.toUpperCase() : ""
		})
	}, S = function(t) {
		return N.call(t, function(e, n) {
			return t.indexOf(e) == n
		})
	}, B.fragment = function(t, e, n) {
		var i, r, a;
		return k.test(t) && (i = E(O.createElement(RegExp.$1))), i || (t.replace && (t = t.replace(_, "<$1></$2>")), e === w && (e = L.test(t) && RegExp.$1), e in W || (e = "*"), a = W[e], a.innerHTML = "" + t, i = E.each(P.call(a.childNodes), function() {
			a.removeChild(this)
		})), o(n) && (r = E(i), E.each(n, function(t, e) {
			F.indexOf(t) > -1 ? r[t](e) : r.attr(t, e)
		})), i
	}, B.Z = function(t, e) {
		return t = t || [], t.__proto__ = E.fn, t.selector = e || "", t
	}, B.isZ = function(t) {
		return t instanceof B.Z
	}, B.init = function(t, n) {
		var i;
		if (!t) return B.Z();
		if ("string" == typeof t)
			if (t = t.trim(), "<" == t[0] && L.test(t)) i = B.fragment(t, RegExp.$1, n), t = null;
			else {
				if (n !== w) return E(n).find(t);
				i = B.qsa(O, t)
			} else {
			if (e(t)) return E(O).ready(t);
			if (B.isZ(t)) return t;
			if (J(t)) i = s(t);
			else if (r(t)) i = [t], t = null;
			else if (L.test(t)) i = B.fragment(t.trim(), RegExp.$1, n), t = null;
			else {
				if (n !== w) return E(n).find(t);
				i = B.qsa(O, t)
			}
		}
		return B.Z(i, t)
	}, E = function(t, e) {
		return B.init(t, e)
	}, E.extend = function(t) {
		var e, n = P.call(arguments, 1);
		return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
			d(t, n, e)
		}), t
	}, B.qsa = function(t, e) {
		var n, r = "#" == e[0],
			o = !r && "." == e[0],
			a = r || o ? e.slice(1) : e,
			s = U.test(a);
		return i(t) && s && r ? (n = t.getElementById(a)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : P.call(s && !r ? o ? t.getElementsByClassName(a) : t.getElementsByTagName(e) : t.querySelectorAll(e))
	}, E.contains = function(t, e) {
		return t !== e && t.contains(e)
	}, E.type = t, E.isFunction = e, E.isWindow = n, E.isArray = J, E.isPlainObject = o, E.isEmptyObject = function(t) {
		var e;
		for (e in t) return !1;
		return !0
	}, E.inArray = function(t, e, n) {
		return A.indexOf.call(e, t, n)
	}, E.camelCase = C, E.trim = function(t) {
		return null == t ? "" : String.prototype.trim.call(t)
	}, E.uuid = 0, E.support = {}, E.expr = {}, E.map = function(t, e) {
		var n, i, r, o = [];
		if (a(t))
			for (i = 0; t.length > i; i++) n = e(t[i], i), null != n && o.push(n);
		else
			for (r in t) n = e(t[r], r), null != n && o.push(n);
		return u(o)
	}, E.each = function(t, e) {
		var n, i;
		if (a(t)) {
			for (n = 0; t.length > n; n++)
				if (e.call(t[n], n, t[n]) === !1) return t
		} else
			for (i in t)
				if (e.call(t[i], i, t[i]) === !1) return t; return t
	}, E.grep = function(t, e) {
		return N.call(t, e)
	}, window.JSON && (E.parseJSON = JSON.parse), E.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
		X["[object " + e + "]"] = e.toLowerCase()
	}), E.fn = {
		forEach: A.forEach,
		reduce: A.reduce,
		push: A.push,
		sort: A.sort,
		indexOf: A.indexOf,
		concat: A.concat,
		map: function(t) {
			return E(E.map(this, function(e, n) {
				return t.call(e, n, e)
			}))
		},
		slice: function() {
			return E(P.apply(this, arguments))
		},
		ready: function(t) {
			return H.test(O.readyState) && O.body ? t(E) : O.addEventListener("DOMContentLoaded", function() {
				t(E)
			}, !1), this
		},
		get: function(t) {
			return t === w ? P.call(this) : this[t >= 0 ? t : t + this.length]
		},
		toArray: function() {
			return this.get()
		},
		size: function() {
			return this.length
		},
		remove: function() {
			return this.each(function() {
				null != this.parentNode && this.parentNode.removeChild(this)
			})
		},
		each: function(t) {
			return A.every.call(this, function(e, n) {
				return t.call(e, n, e) !== !1
			}), this
		},
		filter: function(t) {
			return e(t) ? this.not(this.not(t)) : E(N.call(this, function(e) {
				return B.matches(e, t)
			}))
		},
		add: function(t, e) {
			return E(S(this.concat(E(t, e))))
		},
		is: function(t) {
			return this.length > 0 && B.matches(this[0], t)
		},
		not: function(t) {
			var n = [];
			if (e(t) && t.call !== w) this.each(function(e) {
				t.call(this, e) || n.push(this)
			});
			else {
				var i = "string" == typeof t ? this.filter(t) : a(t) && e(t.item) ? P.call(t) : E(t);
				this.forEach(function(t) {
					0 > i.indexOf(t) && n.push(t)
				})
			}
			return E(n)
		},
		has: function(t) {
			return this.filter(function() {
				return r(t) ? E.contains(this, t) : E(this).find(t).size()
			})
		},
		eq: function(t) {
			return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
		},
		first: function() {
			var t = this[0];
			return t && !r(t) ? t : E(t)
		},
		last: function() {
			var t = this[this.length - 1];
			return t && !r(t) ? t : E(t)
		},
		find: function(t) {
			var e, n = this;
			return e = t ? "object" == typeof t ? E(t).filter(function() {
				var t = this;
				return A.some.call(n, function(e) {
					return E.contains(e, t)
				})
			}) : 1 == this.length ? E(B.qsa(this[0], t)) : this.map(function() {
				return B.qsa(this, t)
			}) : []
		},
		closest: function(t, e) {
			var n = this[0],
				r = !1;
			for ("object" == typeof t && (r = E(t)); n && !(r ? r.indexOf(n) >= 0 : B.matches(n, t));) n = n !== e && !i(n) && n.parentNode;
			return E(n)
		},
		parents: function(t) {
			for (var e = [], n = this; n.length > 0;) n = E.map(n, function(t) {
				return (t = t.parentNode) && !i(t) && 0 > e.indexOf(t) ? (e.push(t), t) : w
			});
			return m(e, t)
		},
		parent: function(t) {
			return m(S(this.pluck("parentNode")), t)
		},
		children: function(t) {
			return m(this.map(function() {
				return p(this)
			}), t)
		},
		contents: function() {
			return this.map(function() {
				return P.call(this.childNodes)
			})
		},
		siblings: function(t) {
			return m(this.map(function(t, e) {
				return N.call(p(e.parentNode), function(t) {
					return t !== e
				})
			}), t)
		},
		empty: function() {
			return this.each(function() {
				this.innerHTML = ""
			})
		},
		pluck: function(t) {
			return E.map(this, function(e) {
				return e[t]
			})
		},
		show: function() {
			return this.each(function() {
				"none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
			})
		},
		replaceWith: function(t) {
			return this.before(t).remove()
		},
		wrap: function(t) {
			var n = e(t);
			if (this[0] && !n) var i = E(t).get(0),
				r = i.parentNode || this.length > 1;
			return this.each(function(e) {
				E(this).wrapAll(n ? t.call(this, e) : r ? i.cloneNode(!0) : i)
			})
		},
		wrapAll: function(t) {
			if (this[0]) {
				E(this[0]).before(t = E(t));
				for (var e;
					(e = t.children()).length;) t = e.first();
				E(t).append(this)
			}
			return this
		},
		wrapInner: function(t) {
			var n = e(t);
			return this.each(function(e) {
				var i = E(this),
					r = i.contents(),
					o = n ? t.call(this, e) : t;
				r.length ? r.wrapAll(o) : i.append(o)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				E(this).replaceWith(E(this).children())
			}), this
		},
		clone: function() {
			return this.map(function() {
				return this.cloneNode(!0)
			})
		},
		hide: function() {
			return this.css("display", "none")
		},
		toggle: function(t) {
			return this.each(function() {
				var e = E(this);
				(t === w ? "none" == e.css("display") : t) ? e.show() : e.hide()
			})
		},
		prev: function(t) {
			return E(this.pluck("previousElementSibling")).filter(t || "*")
		},
		next: function(t) {
			return E(this.pluck("nextElementSibling")).filter(t || "*")
		},
		html: function(t) {
			return 0 in arguments ? this.each(function(e) {
				var n = this.innerHTML;
				E(this).empty().append(g(this, t, e, n))
			}) : 0 in this ? this[0].innerHTML : null
		},
		text: function(t) {
			return 0 in arguments ? this.each(function(e) {
				var n = g(this, t, e, this.textContent);
				this.textContent = null == n ? "" : "" + n
			}) : 0 in this ? this[0].textContent : null
		},
		attr: function(t, e) {
			var n;
			return "string" == typeof t && e === w ? this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n : w : this.each(function(n) {
				if (1 === this.nodeType)
					if (r(t))
						for (T in t) v(this, T, t[T]);
					else v(this, t, g(this, e, n, this.getAttribute(t)))
			})
		},
		removeAttr: function(t) {
			return this.each(function() {
				1 === this.nodeType && v(this, t)
			})
		},
		prop: function(t, e) {
			return t = G[t] || t, e === w ? this[0] && this[0][t] : this.each(function(n) {
				this[t] = g(this, e, n, this[t])
			})
		},
		data: function(t, e) {
			var n = this.attr("data-" + t.replace(R, "-$1").toLowerCase(), e);
			return null !== n ? x(n) : w
		},
		val: function(t) {
			return 0 in arguments ? this.each(function(e) {
				this.value = g(this, t, e, this.value)
			}) : this[0] && (this[0].multiple ? E(this[0]).find("option").filter(function() {
				return this.selected
			}).pluck("value") : this[0].value)
		},
		offset: function(t) {
			if (t) return this.each(function(e) {
				var n = E(this),
					i = g(this, t, e, n.offset()),
					r = n.offsetParent().offset(),
					o = {
						top: i.top - r.top,
						left: i.left - r.left
					};
				"static" == n.css("position") && (o.position = "relative"), n.css(o)
			});
			if (!this.length) return null;
			var e = this[0].getBoundingClientRect();
			return {
				left: e.left + window.pageXOffset,
				top: e.top + window.pageYOffset,
				width: Math.round(e.width),
				height: Math.round(e.height)
			}
		},
		css: function(e, n) {
			if (2 > arguments.length) {
				var i = this[0],
					r = getComputedStyle(i, "");
				if (!i) return;
				if ("string" == typeof e) return i.style[C(e)] || r.getPropertyValue(e);
				if (J(e)) {
					var o = {};
					return E.each(J(e) ? e : [e], function(t, e) {
						o[e] = i.style[C(e)] || r.getPropertyValue(e)
					}), o
				}
			}
			var a = "";
			if ("string" == t(e)) n || 0 === n ? a = c(e) + ":" + f(e, n) : this.each(function() {
				this.style.removeProperty(c(e))
			});
			else
				for (T in e) e[T] || 0 === e[T] ? a += c(T) + ":" + f(T, e[T]) + ";" : this.each(function() {
					this.style.removeProperty(c(T))
				});
			return this.each(function() {
				this.style.cssText += ";" + a
			})
		},
		index: function(t) {
			return t ? this.indexOf(E(t)[0]) : this.parent().children().indexOf(this[0])
		},
		hasClass: function(t) {
			return t ? A.some.call(this, function(t) {
				return this.test(y(t))
			}, l(t)) : !1
		},
		addClass: function(t) {
			return t ? this.each(function(e) {
				j = [];
				var n = y(this),
					i = g(this, t, e, n);
				i.split(/\s+/g).forEach(function(t) {
					E(this).hasClass(t) || j.push(t)
				}, this), j.length && y(this, n + (n ? " " : "") + j.join(" "))
			}) : this
		},
		removeClass: function(t) {
			return this.each(function(e) {
				return t === w ? y(this, "") : (j = y(this), g(this, t, e, j).split(/\s+/g).forEach(function(t) {
					j = j.replace(l(t), " ")
				}), y(this, j.trim()), w)
			})
		},
		toggleClass: function(t, e) {
			return t ? this.each(function(n) {
				var i = E(this),
					r = g(this, t, n, y(this));
				r.split(/\s+/g).forEach(function(t) {
					(e === w ? !i.hasClass(t) : e) ? i.addClass(t) : i.removeClass(t)
				})
			}) : this
		},
		scrollTop: function(t) {
			if (this.length) {
				var e = "scrollTop" in this[0];
				return t === w ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function() {
					this.scrollTop = t
				} : function() {
					this.scrollTo(this.scrollX, t)
				})
			}
		},
		scrollLeft: function(t) {
			if (this.length) {
				var e = "scrollLeft" in this[0];
				return t === w ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function() {
					this.scrollLeft = t
				} : function() {
					this.scrollTo(t, this.scrollY)
				})
			}
		},
		position: function() {
			if (this.length) {
				var t = this[0],
					e = this.offsetParent(),
					n = this.offset(),
					i = $.test(e[0].nodeName) ? {
						top: 0,
						left: 0
					} : e.offset();
				return n.top -= parseFloat(E(t).css("margin-top")) || 0, n.left -= parseFloat(E(t).css("margin-left")) || 0, i.top += parseFloat(E(e[0]).css("border-top-width")) || 0, i.left += parseFloat(E(e[0]).css("border-left-width")) || 0, {
					top: n.top - i.top,
					left: n.left - i.left
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var t = this.offsetParent || O.body; t && !$.test(t.nodeName) && "static" == E(t).css("position");) t = t.offsetParent;
				return t
			})
		}
	}, E.fn.detach = E.fn.remove, ["width", "height"].forEach(function(t) {
		var e = t.replace(/./, function(t) {
			return t[0].toUpperCase()
		});
		E.fn[t] = function(r) {
			var o, a = this[0];
			return r === w ? n(a) ? a["inner" + e] : i(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function(e) {
				a = E(this), a.css(t, g(this, r, e, a[t]()))
			})
		}
	}), z.forEach(function(e, n) {
		var i = n % 2;
		E.fn[e] = function() {
			var e, r, o = E.map(arguments, function(n) {
					return e = t(n), "object" == e || "array" == e || null == n ? n : B.fragment(n)
				}),
				a = this.length > 1;
			return 1 > o.length ? this : this.each(function(t, e) {
				r = i ? e : e.parentNode, e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null;
				var s = O.documentElement.contains(r);
				o.forEach(function(t) {
					if (a) t = t.cloneNode(!0);
					else if (!r) return E(t).remove();
					r.insertBefore(t, e), s && b(t, function(t) {
						null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
					})
				})
			})
		}, E.fn[i ? e + "To" : "insert" + (n ? "Before" : "After")] = function(t) {
			return E(t)[e](this), this
		}
	}), B.Z.prototype = E.fn, B.uniq = S, B.deserializeValue = x, E.zepto = B, E
}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto),
function(t) {
	function e(e, n, i) {
		var r = t.Event(n);
		return t(e).trigger(r, i), !r.isDefaultPrevented()
	}

	function n(t, n, i, r) {
		return t.global ? e(n || y, i, r) : void 0
	}

	function i(e) {
		e.global && 0 === t.active++ && n(e, null, "ajaxStart")
	}

	function r(e) {
		e.global && !--t.active && n(e, null, "ajaxStop")
	}

	function o(t, e) {
		var i = e.context;
		return e.beforeSend.call(i, t, e) === !1 || n(e, i, "ajaxBeforeSend", [t, e]) === !1 ? !1 : (n(e, i, "ajaxSend", [t, e]), void 0)
	}

	function a(t, e, i, r) {
		var o = i.context,
			a = "success";
		i.success.call(o, t, a, e), r && r.resolveWith(o, [t, a, e]), n(i, o, "ajaxSuccess", [e, i, t]), u(a, e, i)
	}

	function s(t, e, i, r, o) {
		var a = r.context;
		r.error.call(a, i, e, t), o && o.rejectWith(a, [i, e, t]), n(r, a, "ajaxError", [i, r, t || e]), u(e, i, r)
	}

	function u(t, e, i) {
		var o = i.context;
		i.complete.call(o, e, t), n(i, o, "ajaxComplete", [e, i]), r(i)
	}

	function c() {}

	function l(t) {
		return t && (t = t.split(";", 2)[0]), t && (t == E ? "html" : t == T ? "json" : b.test(t) ? "script" : w.test(t) && "xml") || "text"
	}

	function f(t, e) {
		return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
	}

	function h(e) {
		e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = f(e.url, e.data), e.data = void 0)
	}

	function p(e, n, i, r) {
		return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), {
			url: e,
			data: n,
			success: i,
			dataType: r
		}
	}

	function d(e, n, i, r) {
		var o, a = t.isArray(n),
			s = t.isPlainObject(n);
		t.each(n, function(n, u) {
			o = t.type(u), r && (n = i ? r : r + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !r && a ? e.add(u.name, u.value) : "array" == o || !i && "object" == o ? d(e, u, i, n) : e.add(n, u)
		})
	}
	var m, g, v = 0,
		y = window.document,
		x = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		b = /^(?:text|application)\/javascript/i,
		w = /^(?:text|application)\/xml/i,
		T = "application/json",
		E = "text/html",
		j = /^\s*$/;
	t.active = 0, t.ajaxJSONP = function(e, n) {
		if (!("type" in e)) return t.ajax(e);
		var i, r, u = e.jsonpCallback,
			c = (t.isFunction(u) ? u() : u) || "jsonp" + ++v,
			l = y.createElement("script"),
			f = window[c],
			h = function(e) {
				t(l).triggerHandler("error", e || "abort")
			},
			p = {
				abort: h
			};
		return n && n.promise(p), t(l).on("load error", function(o, u) {
			clearTimeout(r), t(l).off().remove(), "error" != o.type && i ? a(i[0], p, e, n) : s(null, u || "error", p, e, n), window[c] = f, i && t.isFunction(f) && f(i[0]), f = i = void 0
		}), o(p, e) === !1 ? (h("abort"), p) : (window[c] = function() {
			i = arguments
		}, l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + c), y.head.appendChild(l), e.timeout > 0 && (r = setTimeout(function() {
			h("timeout")
		}, e.timeout)), p)
	}, t.ajaxSettings = {
		type: "GET",
		beforeSend: c,
		success: c,
		error: c,
		complete: c,
		context: null,
		global: !0,
		xhr: function() {
			return new window.XMLHttpRequest
		},
		accepts: {
			script: "text/javascript, application/javascript, application/x-javascript",
			json: T,
			xml: "application/xml, text/xml",
			html: E,
			text: "text/plain"
		},
		crossDomain: !1,
		timeout: 0,
		processData: !0,
		cache: !0
	}, t.ajax = function(e) {
		var n = t.extend({}, e || {}),
			r = t.Deferred && t.Deferred();
		for (m in t.ajaxSettings) void 0 === n[m] && (n[m] = t.ajaxSettings[m]);
		i(n), n.crossDomain || (n.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(n.url) && RegExp.$2 != window.location.host), n.url || (n.url = "" + window.location), h(n), n.cache === !1 && (n.url = f(n.url, "_=" + Date.now()));
		var u = n.dataType,
			p = /\?.+=\?/.test(n.url);
		if ("jsonp" == u || p) return p || (n.url = f(n.url, n.jsonp ? n.jsonp + "=?" : n.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(n, r);
		var d, v = n.accepts[u],
			y = {},
			x = function(t, e) {
				y[t.toLowerCase()] = [t, e]
			},
			b = /^([\w-]+:)\/\//.test(n.url) ? RegExp.$1 : window.location.protocol,
			w = n.xhr(),
			T = w.setRequestHeader;
		if (r && r.promise(w), n.crossDomain || x("X-Requested-With", "XMLHttpRequest"), x("Accept", v || "*/*"), (v = n.mimeType || v) && (v.indexOf(",") > -1 && (v = v.split(",", 2)[0]), w.overrideMimeType && w.overrideMimeType(v)), (n.contentType || n.contentType !== !1 && n.data && "GET" != n.type.toUpperCase()) && x("Content-Type", n.contentType || "application/x-www-form-urlencoded"), n.headers)
			for (g in n.headers) x(g, n.headers[g]);
		if (w.setRequestHeader = x, w.onreadystatechange = function() {
			if (4 == w.readyState) {
				w.onreadystatechange = c, clearTimeout(d);
				var e, i = !1;
				if (w.status >= 200 && 300 > w.status || 304 == w.status || 0 == w.status && "file:" == b) {
					u = u || l(n.mimeType || w.getResponseHeader("content-type")), e = w.responseText;
					try {
						"script" == u ? (1, eval)(e) : "xml" == u ? e = w.responseXML : "json" == u && (e = j.test(e) ? null : t.parseJSON(e))
					} catch (o) {
						i = o
					}
					i ? s(i, "parsererror", w, n, r) : a(e, w, n, r)
				} else s(w.statusText || null, w.status ? "error" : "abort", w, n, r)
			}
		}, o(w, n) === !1) return w.abort(), s(null, "abort", w, n, r), w;
		if (n.xhrFields)
			for (g in n.xhrFields) w[g] = n.xhrFields[g];
		var E = "async" in n ? n.async : !0;
		w.open(n.type, n.url, E, n.username, n.password);
		for (g in y) T.apply(w, y[g]);
		return n.timeout > 0 && (d = setTimeout(function() {
			w.onreadystatechange = c, w.abort(), s(null, "timeout", w, n, r)
		}, n.timeout)), w.send(n.data ? n.data : null), w
	}, t.get = function() {
		return t.ajax(p.apply(null, arguments))
	}, t.post = function() {
		var e = p.apply(null, arguments);
		return e.type = "POST", t.ajax(e)
	}, t.getJSON = function() {
		var e = p.apply(null, arguments);
		return e.dataType = "json", t.ajax(e)
	}, t.fn.load = function(e, n, i) {
		if (!this.length) return this;
		var r, o = this,
			a = e.split(/\s/),
			s = p(e, n, i),
			u = s.success;
		return a.length > 1 && (s.url = a[0], r = a[1]), s.success = function(e) {
			o.html(r ? t("<div>").html(e.replace(x, "")).find(r) : e), u && u.apply(o, arguments)
		}, t.ajax(s), this
	};
	var C = encodeURIComponent;
	t.param = function(t, e) {
		var n = [];
		return n.add = function(t, e) {
			this.push(C(t) + "=" + C(e))
		}, d(n, t, e), n.join("&").replace(/%20/g, "+")
	}
}(Zepto),
function(t) {
	var e, n = [];
	t.fn.remove = function() {
		return this.each(function() {
			this.parentNode && ("IMG" === this.tagName && (n.push(this), this.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=", e && clearTimeout(e), e = setTimeout(function() {
				n = []
			}, 6e4)), this.parentNode.removeChild(this))
		})
	}
}(Zepto),
function(t) {
	t.Callbacks = function(e) {
		e = t.extend({}, e);
		var n, i, r, o, a, s, u = [],
			c = !e.once && [],
			l = function(t) {
				for (n = e.memory && t, i = !0, s = o || 0, o = 0, a = u.length, r = !0; u && a > s; ++s)
					if (u[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
						n = !1;
						break
					}
				r = !1, u && (c ? c.length && l(c.shift()) : n ? u.length = 0 : f.disable())
			},
			f = {
				add: function() {
					if (u) {
						var i = u.length,
							s = function(n) {
								t.each(n, function(t, n) {
									"function" == typeof n ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" != typeof n && s(n)
								})
							};
						s(arguments), r ? a = u.length : n && (o = i, l(n))
					}
					return this
				},
				remove: function() {
					return u && t.each(arguments, function(e, n) {
						for (var i;
							(i = t.inArray(n, u, i)) > -1;) u.splice(i, 1), r && (a >= i && --a, s >= i && --s)
					}), this
				},
				has: function(e) {
					return !(!u || !(e ? t.inArray(e, u) > -1 : u.length))
				},
				empty: function() {
					return a = u.length = 0, this
				},
				disable: function() {
					return u = c = n = void 0, this
				},
				disabled: function() {
					return !u
				},
				lock: function() {
					return c = void 0, n || f.disable(), this
				},
				locked: function() {
					return !c
				},
				fireWith: function(t, e) {
					return !u || i && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], r ? c.push(e) : l(e)), this
				},
				fire: function() {
					return f.fireWith(this, arguments)
				},
				fired: function() {
					return !!i
				}
			};
		return f
	}
}(Zepto),
function(t) {
	function e(e, i) {
		var u = e[s],
			c = u && r[u];
		if (void 0 === i) return c || n(e);
		if (c) {
			if (i in c) return c[i];
			var l = a(i);
			if (l in c) return c[l]
		}
		return o.call(t(e), i)
	}

	function n(e, n, o) {
		var u = e[s] || (e[s] = ++t.uuid),
			c = r[u] || (r[u] = i(e));
		return void 0 !== n && (c[a(n)] = o), c
	}

	function i(e) {
		var n = {};
		return t.each(e.attributes || u, function(e, i) {
			0 == i.name.indexOf("data-") && (n[a(i.name.replace("data-", ""))] = t.zepto.deserializeValue(i.value))
		}), n
	}
	var r = {},
		o = t.fn.data,
		a = t.camelCase,
		s = t.expando = "Zepto" + +new Date,
		u = [];
	t.fn.data = function(i, r) {
		return void 0 === r ? t.isPlainObject(i) ? this.each(function(e, r) {
			t.each(i, function(t, e) {
				n(r, t, e)
			})
		}) : 0 in this ? e(this[0], i) : void 0 : this.each(function() {
			n(this, i, r)
		})
	}, t.fn.removeData = function(e) {
		return "string" == typeof e && (e = e.split(/\s+/)), this.each(function() {
			var n = this[s],
				i = n && r[n];
			i && t.each(e || i, function(t) {
				delete i[e ? a(this) : t]
			})
		})
	}, ["remove", "empty"].forEach(function(e) {
		var n = t.fn[e];
		t.fn[e] = function() {
			var t = this.find("*");
			return "remove" === e && (t = t.add(this)), t.removeData(), n.call(this)
		}
	})
}(Zepto),
function(t) {
	function e(n) {
		var i = [
				["resolve", "done", t.Callbacks({
					once: 1,
					memory: 1
				}), "resolved"],
				["reject", "fail", t.Callbacks({
					once: 1,
					memory: 1
				}), "rejected"],
				["notify", "progress", t.Callbacks({
					memory: 1
				})]
			],
			r = "pending",
			o = {
				state: function() {
					return r
				},
				always: function() {
					return a.done(arguments).fail(arguments), this
				},
				then: function() {
					var n = arguments;
					return e(function(e) {
						t.each(i, function(i, r) {
							var s = t.isFunction(n[i]) && n[i];
							a[r[1]](function() {
								var n = s && s.apply(this, arguments);
								if (n && t.isFunction(n.promise)) n.promise().done(e.resolve).fail(e.reject).progress(e.notify);
								else {
									var i = this === o ? e.promise() : this,
										a = s ? [n] : arguments;
									e[r[0] + "With"](i, a)
								}
							})
						}), n = null
					}).promise()
				},
				promise: function(e) {
					return null != e ? t.extend(e, o) : o
				}
			},
			a = {};
		return t.each(i, function(t, e) {
			var n = e[2],
				s = e[3];
			o[e[1]] = n.add, s && n.add(function() {
				r = s
			}, i[1 ^ t][2].disable, i[2][2].lock), a[e[0]] = function() {
				return a[e[0] + "With"](this === a ? o : this, arguments), this
			}, a[e[0] + "With"] = n.fireWith
		}), o.promise(a), n && n.call(a, a), a
	}
	var n = Array.prototype.slice;
	t.when = function(i) {
		var r, o, a, s = n.call(arguments),
			u = s.length,
			c = 0,
			l = 1 !== u || i && t.isFunction(i.promise) ? u : 0,
			f = 1 === l ? i : e(),
			h = function(t, e, i) {
				return function(o) {
					e[t] = this, i[t] = arguments.length > 1 ? n.call(arguments) : o, i === r ? f.notifyWith(e, i) : --l || f.resolveWith(e, i)
				}
			};
		if (u > 1)
			for (r = Array(u), o = Array(u), a = Array(u); u > c; ++c) s[c] && t.isFunction(s[c].promise) ? s[c].promise().done(h(c, a, s)).fail(f.reject).progress(h(c, o, r)) : --l;
		return l || f.resolveWith(a, s), f.promise()
	}, t.Deferred = e
}(Zepto),
function(t) {
	function e(t) {
		return t._zid || (t._zid = h++)
	}

	function n(t, n, o, a) {
		if (n = i(n), n.ns) var s = r(n.ns);
		return (g[e(t)] || []).filter(function(t) {
			return !(!t || n.e && t.e != n.e || n.ns && !s.test(t.ns) || o && e(t.fn) !== e(o) || a && t.sel != a)
		})
	}

	function i(t) {
		var e = ("" + t).split(".");
		return {
			e: e[0],
			ns: e.slice(1).sort().join(" ")
		}
	}

	function r(t) {
		return RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
	}

	function o(t, e) {
		return t.del && !y && t.e in x || !!e
	}

	function a(t) {
		return b[t] || y && x[t] || t
	}

	function s(n, r, s, u, l, h, p) {
		var d = e(n),
			m = g[d] || (g[d] = []);
		r.split(/\s/).forEach(function(e) {
			if ("ready" == e) return t(document).ready(s);
			var r = i(e);
			r.fn = s, r.sel = l, r.e in b && (s = function(e) {
				var n = e.relatedTarget;
				return !n || n !== this && !t.contains(this, n) ? r.fn.apply(this, arguments) : f
			}), r.del = h;
			var d = h || s;
			r.proxy = function(t) {
				if (t = c(t), !t.isImmediatePropagationStopped()) {
					t.data = u;
					var e = d.apply(n, t._args == f ? [t] : [t].concat(t._args));
					return e === !1 && (t.preventDefault(), t.stopPropagation()), e
				}
			}, r.i = m.length, m.push(r), "addEventListener" in n && n.addEventListener(a(r.e), r.proxy, o(r, p))
		})
	}

	function u(t, i, r, s, u) {
		var c = e(t);
		(i || "").split(/\s/).forEach(function(e) {
			n(t, e, r, s).forEach(function(e) {
				delete g[c][e.i], "removeEventListener" in t && t.removeEventListener(a(e.e), e.proxy, o(e, u))
			})
		})
	}

	function c(e, n) {
		return (n || !e.isDefaultPrevented) && (n || (n = e), t.each(j, function(t, i) {
			var r = n[t];
			e[t] = function() {
				return this[i] = w, r && r.apply(n, arguments)
			}, e[i] = T
		}), (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = w)), e
	}

	function l(t) {
		var e, n = {
			originalEvent: t
		};
		for (e in t) E.test(e) || t[e] === f || (n[e] = t[e]);
		return c(n, t)
	}
	var f, h = 1,
		p = Array.prototype.slice,
		d = t.isFunction,
		m = function(t) {
			return "string" == typeof t
		},
		g = {},
		v = {},
		y = "onfocusin" in window,
		x = {
			focus: "focusin",
			blur: "focusout"
		},
		b = {
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		};
	v.click = v.mousedown = v.mouseup = v.mousemove = "MouseEvents", t.event = {
		add: s,
		remove: u
	}, t.proxy = function(n, i) {
		if (d(n)) {
			var r = function() {
				return n.apply(i, arguments)
			};
			return r._zid = e(n), r
		}
		if (m(i)) return t.proxy(n[i], n);
		throw new TypeError("expected function")
	}, t.fn.bind = function(t, e, n) {
		return this.on(t, e, n)
	}, t.fn.unbind = function(t, e) {
		return this.off(t, e)
	}, t.fn.one = function(t, e, n, i) {
		return this.on(t, e, n, i, 1)
	};
	var w = function() {
			return !0
		},
		T = function() {
			return !1
		},
		E = /^([A-Z]|returnValue$|layer[XY]$)/,
		j = {
			preventDefault: "isDefaultPrevented",
			stopImmediatePropagation: "isImmediatePropagationStopped",
			stopPropagation: "isPropagationStopped"
		};
	t.fn.delegate = function(t, e, n) {
		return this.on(e, t, n)
	}, t.fn.undelegate = function(t, e, n) {
		return this.off(e, t, n)
	}, t.fn.live = function(e, n) {
		return t(document.body).delegate(this.selector, e, n), this
	}, t.fn.die = function(e, n) {
		return t(document.body).undelegate(this.selector, e, n), this
	}, t.fn.on = function(e, n, i, r, o) {
		var a, c, h = this;
		return e && !m(e) ? (t.each(e, function(t, e) {
			h.on(t, n, i, e, o)
		}), h) : (m(n) || d(r) || r === !1 || (r = i, i = n, n = f), (d(i) || i === !1) && (r = i, i = f), r === !1 && (r = T), h.each(function(h, d) {
			o && (a = function(t) {
				return u(d, t.type, r), r.apply(this, arguments)
			}), n && (c = function(e) {
				var i, o = t(e.target).closest(n, d).get(0);
				return o && o !== d ? (i = t.extend(l(e), {
					currentTarget: o,
					liveFired: d
				}), (a || r).apply(o, [i].concat(p.call(arguments, 1)))) : f
			}), s(d, e, r, i, n, c || a)
		}))
	}, t.fn.off = function(e, n, i) {
		var r = this;
		return e && !m(e) ? (t.each(e, function(t, e) {
			r.off(t, n, e)
		}), r) : (m(n) || d(i) || i === !1 || (i = n, n = f), i === !1 && (i = T), r.each(function() {
			u(this, e, i, n)
		}))
	}, t.fn.trigger = function(e, n) {
		return e = m(e) || t.isPlainObject(e) ? t.Event(e) : c(e), e._args = n, this.each(function() {
			"dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
		})
	}, t.fn.triggerHandler = function(e, i) {
		var r, o;
		return this.each(function(a, s) {
			r = l(m(e) ? t.Event(e) : e), r._args = i, r.target = s, t.each(n(s, e.type || e), function(t, e) {
				return o = e.proxy(r), r.isImmediatePropagationStopped() ? !1 : f
			})
		}), o
	}, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
		t.fn[e] = function(t) {
			return t ? this.bind(e, t) : this.trigger(e)
		}
	}), ["focus", "blur"].forEach(function(e) {
		t.fn[e] = function(t) {
			return t ? this.bind(e, t) : this.each(function() {
				try {
					this[e]()
				} catch (t) {}
			}), this
		}
	}), t.Event = function(t, e) {
		m(t) || (e = t, t = e.type);
		var n = document.createEvent(v[t] || "Events"),
			i = !0;
		if (e)
			for (var r in e) "bubbles" == r ? i = !!e[r] : n[r] = e[r];
		return n.initEvent(t, i, !0), c(n)
	}
}(Zepto),
function(t) {
	t.fn.serializeArray = function() {
		var e, n = [];
		return t([].slice.call(this.get(0).elements)).each(function() {
			e = t(this);
			var i = e.attr("type");
			"fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != i && "reset" != i && "button" != i && ("radio" != i && "checkbox" != i || this.checked) && n.push({
				name: e.attr("name"),
				value: e.val()
			})
		}), n
	}, t.fn.serialize = function() {
		var t = [];
		return this.serializeArray().forEach(function(e) {
			t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
		}), t.join("&")
	}, t.fn.submit = function(e) {
		if (e) this.bind("submit", e);
		else if (this.length) {
			var n = t.Event("submit");
			this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
		}
		return this
	}
}(Zepto),
function(t, e) {
	function n(t) {
		return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
	}

	function i(t) {
		return r ? r + t : t.toLowerCase()
	}
	var r, o, a, s, u, c, l, f, h, p, d = "",
		m = {
			Webkit: "webkit",
			Moz: "",
			O: "o"
		},
		g = window.document,
		v = g.createElement("div"),
		y = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
		x = {};
	t.each(m, function(t, n) {
		return v.style[t + "TransitionProperty"] !== e ? (d = "-" + t.toLowerCase() + "-", r = n, !1) : e
	}), o = d + "transform", x[a = d + "transition-property"] = x[s = d + "transition-duration"] = x[c = d + "transition-delay"] = x[u = d + "transition-timing-function"] = x[l = d + "animation-name"] = x[f = d + "animation-duration"] = x[p = d + "animation-delay"] = x[h = d + "animation-timing-function"] = "", t.fx = {
		off: r === e && v.style.transitionProperty === e,
		speeds: {
			_default: 400,
			fast: 200,
			slow: 600
		},
		cssPrefix: d,
		transitionEnd: i("TransitionEnd"),
		animationEnd: i("AnimationEnd")
	}, t.fn.animate = function(n, i, r, o, a) {
		return t.isFunction(i) && (o = i, r = e, i = e), t.isFunction(r) && (o = r, r = e), t.isPlainObject(i) && (r = i.easing, o = i.complete, a = i.delay, i = i.duration), i && (i = ("number" == typeof i ? i : t.fx.speeds[i] || t.fx.speeds._default) / 1e3), a && (a = parseFloat(a) / 1e3), this.anim(n, i, r, o, a)
	}, t.fn.anim = function(i, r, d, m, g) {
		var v, b, w, T = {},
			E = "",
			j = this,
			C = t.fx.transitionEnd,
			S = !1;
		if (r === e && (r = t.fx.speeds._default / 1e3), g === e && (g = 0), t.fx.off && (r = 0), "string" == typeof i) T[l] = i, T[f] = r + "s", T[p] = g + "s", T[h] = d || "linear", C = t.fx.animationEnd;
		else {
			b = [];
			for (v in i) y.test(v) ? E += v + "(" + i[v] + ") " : (T[v] = i[v], b.push(n(v)));
			E && (T[o] = E, b.push(o)), r > 0 && "object" == typeof i && (T[a] = b.join(", "), T[s] = r + "s", T[c] = g + "s", T[u] = d || "linear")
		}
		return w = function(n) {
			if (n !== e) {
				if (n.target !== n.currentTarget) return;
				t(n.target).unbind(C, w)
			} else t(this).unbind(C, w);
			S = !0, t(this).css(x), m && m.call(this)
		}, r > 0 && (this.bind(C, w), setTimeout(function() {
			S || w.call(j)
		}, 1e3 * r + 25)), this.size() && this.get(0).clientLeft, this.css(T), 0 >= r && setTimeout(function() {
			j.each(function() {
				w.call(this)
			})
		}, 0), this
	}, v = null
}(Zepto),
function(t, e) {
	function n(n, i, r, o, a) {
		"function" != typeof i || a || (a = i, i = e);
		var s = {
			opacity: r
		};
		return o && (s.scale = o, n.css(t.fx.cssPrefix + "transform-origin", "0 0")), n.animate(s, i, null, a)
	}

	function i(e, i, r, o) {
		return n(e, i, 0, r, function() {
			a.call(t(this)), o && o.call(this)
		})
	}
	var r = window.document,
		o = (r.documentElement, t.fn.show),
		a = t.fn.hide,
		s = t.fn.toggle;
	t.fn.show = function(t, i) {
		return o.call(this), t === e ? t = 0 : this.css("opacity", 0), n(this, t, 1, "1,1", i)
	}, t.fn.hide = function(t, n) {
		return t === e ? a.call(this) : i(this, t, "0,0", n)
	}, t.fn.toggle = function(n, i) {
		return n === e || "boolean" == typeof n ? s.call(this, n) : this.each(function() {
			var e = t(this);
			e["none" == e.css("display") ? "show" : "hide"](n, i)
		})
	}, t.fn.fadeTo = function(t, e, i) {
		return n(this, t, e, null, i)
	}, t.fn.fadeIn = function(t, e) {
		var n = this.css("opacity");
		return n > 0 ? this.css("opacity", 0) : n = 1, o.call(this).fadeTo(t, n, e)
	}, t.fn.fadeOut = function(t, e) {
		return i(this, t, null, e)
	}, t.fn.fadeToggle = function(e, n) {
		return this.each(function() {
			var i = t(this);
			i[0 == i.css("opacity") || "none" == i.css("display") ? "fadeIn" : "fadeOut"](e, n)
		})
	}
}(Zepto),
function(t) {
	"__proto__" in {} || t.extend(t.zepto, {
		Z: function(e, n) {
			return e = e || [], t.extend(e, t.fn), e.selector = n || "", e.__Z = !0, e
		},
		isZ: function(e) {
			return "array" === t.type(e) && "__Z" in e
		}
	});
	try {
		getComputedStyle(void 0)
	} catch (e) {
		var n = getComputedStyle;
		window.getComputedStyle = function(t) {
			try {
				return n(t)
			} catch (e) {
				return null
			}
		}
	}
}(Zepto),
function(t) {
	function e(t, e, n, i) {
		return Math.abs(t - e) >= Math.abs(n - i) ? t - e > 0 ? "Left" : "Right" : n - i > 0 ? "Up" : "Down"
	}

	function n() {
		l = null, h.last && (h.el.trigger("longTap"), h = {})
	}

	function i() {
		l && clearTimeout(l), l = null
	}

	function r() {
		s && clearTimeout(s), u && clearTimeout(u), c && clearTimeout(c), l && clearTimeout(l), s = u = c = l = null, h = {}
	}

	function o(t) {
		return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary
	}

	function a(t, e) {
		return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e
	}
	var s, u, c, l, f, h = {},
		p = 750;
	t(document).ready(function() {
		var d, m, g, v, y = 0,
			x = 0;
		"MSGesture" in window && (f = new MSGesture, f.target = document.body), t(document).bind("MSGestureEnd", function(t) {

			var e = t.velocityX > 1 ? "Right" : -1 > t.velocityX ? "Left" : t.velocityY > 1 ? "Down" : -1 > t.velocityY ? "Up" : null;
			e && (h.el.trigger("swipe"), h.el.trigger("swipe" + e))
		}).on("touchstart MSPointerDown pointerdown", function(e) {
			e.preventDefault();
			(!(v = a(e, "down")) || o(e)) && (g = v ? e : e.touches[0], e.touches && 1 === e.touches.length && h.x2 && (h.x2 = void 0, h.y2 = void 0), d = Date.now(), m = d - (h.last || d), h.el = t("tagName" in g.target ? g.target : g.target.parentNode), s && clearTimeout(s), h.x1 = g.pageX, h.y1 = g.pageY, m > 0 && 250 >= m && (h.isDoubleTap = !0), h.last = d, l = setTimeout(n, p), f && v && f.addPointer(e.pointerId))
		}).on("touchmove MSPointerMove pointermove", function(t) {
			t.preventDefault();
			(!(v = a(t, "move")) || o(t)) && (g = v ? t : t.touches[0], i(), h.x2 = g.pageX, h.y2 = g.pageY, y += Math.abs(h.x1 - h.x2), x += Math.abs(h.y1 - h.y2))
		}).on("touchend MSPointerUp pointerup", function(n) {
			n.preventDefault();
			(!(v = a(n, "up")) || o(n)) && (i(), h.x2 && Math.abs(h.x1 - h.x2) > 30 || h.y2 && Math.abs(h.y1 - h.y2) > 30 ? c = setTimeout(function() {
				h.el.trigger("swipe"), h.el.trigger("swipe" + e(h.x1, h.x2, h.y1, h.y2)), h = {}
			}, 0) : "last" in h && (30 > y && 30 > x ? u = setTimeout(function() {
				var e = t.Event("tap");
				e.cancelTouch = r, h.el.trigger(e), h.isDoubleTap ? (h.el && h.el.trigger("doubleTap"), h = {}) : s = setTimeout(function() {
					s = null, h.el && h.el.trigger("singleTap"), h = {}
				}, 250)
			}, 0) : h = {}), y = x = 0)
		}).on("touchcancel MSPointerCancel pointercancel", r), t(window).on("scroll", r)
	}), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(e) {
		t.fn[e] = function(t) {
			return this.on(e, t)
		}
	})
}(Zepto);