(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{225:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),a("p",[s._v("Object.is() 判断两个值是否相同. 如果下列任何一项成立, 则两个值相同：")]),s._v(" "),a("ul",[a("li",[s._v("两个值都是 undefined")]),s._v(" "),a("li",[s._v("两个值都是 null")]),s._v(" "),a("li",[s._v("两个值都是 true 或者都是 false")]),s._v(" "),a("li",[s._v("两个值是由相同个数的字符按照相同的顺序组成的字符串")]),s._v(" "),a("li",[s._v("两个值指向同一个对象")]),s._v(" "),a("li",[s._v("两个值都是数字并且\n"),a("ul",[a("li",[s._v("都是正零 +0")]),s._v(" "),a("li",[s._v("都是负零 -0")]),s._v(" "),a("li",[s._v("都是 NaN")]),s._v(" "),a("li",[s._v("都是除零和 NaN 外的其它同一个数字")])])])]),s._v(" "),a("p",[s._v("这种相等性判断逻辑和传统的 "),a("code",[s._v("==")]),s._v(" 运算不同, "),a("code",[s._v("==")]),s._v(" 运算符会对它两边的操作数做隐式类型转换(如果它们类型不同), 然后才进行相等性比较, (所以才会有类似 "),a("code",[s._v('""')]),s._v(" "),a("code",[s._v("==")]),s._v(" "),a("code",[s._v("false")]),s._v(" 等于 "),a("code",[s._v("true")]),s._v(" 的现象), 但 "),a("code",[s._v("Object.is")]),s._v(" 不会做这种类型转换.")]),s._v(" "),a("p",[s._v("这与 "),a("code",[s._v("===")]),s._v(" 运算符的判定方式也不一样. "),a("code",[s._v("===")]),s._v(" 运算符(和"),a("code",[s._v("==")]),s._v(" 运算符)将数字值 "),a("code",[s._v("-0")]),s._v(" 和 "),a("code",[s._v("+0")]),s._v(" 视为相等, 并认为 "),a("code",[s._v("Number.NaN")]),s._v(" 不等于 "),a("code",[s._v("NaN")]),s._v(".")]),s._v(" "),a("h2",{attrs:{id:"实现代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现代码"}},[s._v("#")]),s._v(" 实现代码")]),s._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n * @Author: Rainy\n * @Date: 2019-11-14 19:25:01\n * @LastEditors  : Rainy\n * @LastEditTime : 2020-01-02 19:18:50\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("_is")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("source"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("boolean")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("source "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" source "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" source "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" source "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" source "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" target "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is",target:"_blank",rel:"noopener noreferrer"}},[s._v("Object is"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);