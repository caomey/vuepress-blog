(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{454:function(t,s,a){"use strict";a.r(s);var n=a(59),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"node-js-插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js-插件"}},[t._v("#")]),t._v(" Node.js 插件")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("在npmjs网站查询各种插件的使用方法"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"inflection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inflection"}},[t._v("#")]),t._v(" inflection")]),t._v(" "),a("blockquote",[a("p",[t._v("修改字符串命名规则")])]),t._v(" "),a("p",[t._v("安装")]),t._v(" "),a("ul",[a("li",[t._v("npm -i inflection")])]),t._v(" "),a("p",[t._v("用法")]),t._v(" "),a("ul",[a("li",[t._v("const name = require('inflection').classify(string)\n"),a("ul",[a("li",[t._v("将字符串改为类名称：category => Category")])])])]),t._v(" "),a("h2",{attrs:{id:"multer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multer"}},[t._v("#")]),t._v(" multer")]),t._v(" "),a("p",[t._v("安装")]),t._v(" "),a("ul",[a("li",[t._v("npm -i multer")])]),t._v(" "),a("p",[t._v("用法")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" multer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'multer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" upload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("multer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("dest"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("__dirname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/../../uploads'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//__dirname当前目录地址")]),t._v("\n")])])]),a("h2",{attrs:{id:"bcrypt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bcrypt"}},[t._v("#")]),t._v(" bcrypt")]),t._v(" "),a("blockquote",[a("p",[t._v("加密字符串密码")])]),t._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("ul",[a("li",[t._v("npm -i bcrypt")])]),t._v(" "),a("h3",{attrs:{id:"用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//加密")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bcrypt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hashSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//数字为加密指数，越大越安全越费时，一般10-12")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//校验")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isTrue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bcrypt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("明文，密文"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回的布尔值")]),t._v("\n")])])]),a("h1",{attrs:{id:"jsonwebtoken"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsonwebtoken"}},[t._v("#")]),t._v(" jsonwebtoken")]),t._v(" "),a("blockquote",[a("p",[t._v("返回token码")])]),t._v(" "),a("p",[t._v("安装")]),t._v(" "),a("ul",[a("li",[t._v("npm -i jsonwebtoken")])]),t._v(" "),a("p",[t._v("用法")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" jwt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jsonwebtoken'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    jwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"mangoose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mangoose"}},[t._v("#")]),t._v(" mangoose")]),t._v(" "),a("blockquote",[a("p",[t._v("操作mongodb数据库")])]),t._v(" "),a("p",[t._v("安装")]),t._v(" "),a("ul",[a("li",[t._v("npm intsall  mangoose")])]),t._v(" "),a("p",[t._v("安装")]),t._v(" "),a("ul",[a("li",[t._v("npm install cors")])]),t._v(" "),a("h2",{attrs:{id:"fs-库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fs-库"}},[t._v("#")]),t._v(" fs 库")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// file system 读写文件")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fileContent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFileSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'D:\\\\ Fang\\\\ Jirengu\\\\ node-demo-1\\\\ db'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读")]),t._v("\n\nfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("writeFileSync（"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'D:\\\\Fang\\\\Jirengu\\\\node-demo-1\\\\db'")]),t._v("，"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stringify（list））"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"qs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qs"}},[t._v("#")]),t._v(" qs")]),t._v(" "),a("p",[t._v("安装")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i qs \n")])])]),a("p",[t._v("方法一：将对象序列化，多个对象之间用&拼接（拼接是由底层处理，无需手动操作）")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" qs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("111")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("222")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wd=mutation&rsv_spt=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("qs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("qs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\ncontent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("111")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("222")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wd'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mutation'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  rsv_spt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  f"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  rsv_bp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  rsv_idx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ie"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("方法二：将序列化的内容拆分成一个个单一的对象")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("qs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 转换成json对象\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" comValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" qs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("comments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"lodash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lodash"}},[t._v("#")]),t._v(" lodash")]),t._v(" "),a("h2",{attrs:{id:"vue-page-stack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-page-stack"}},[t._v("#")]),t._v(" vue-page-stack")]),t._v(" "),a("p",[t._v("页面缓存")]),t._v(" "),a("h2",{attrs:{id:"mockjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mockjs"}},[t._v("#")]),t._v(" mockjs")]),t._v(" "),a("p",[t._v("模拟数据请求")]),t._v(" "),a("h2",{attrs:{id:"less"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#less"}},[t._v("#")]),t._v(" less")]),t._v(" "),a("p",[t._v("css预编译")]),t._v(" "),a("h2",{attrs:{id:"echarts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#echarts"}},[t._v("#")]),t._v(" echarts")]),t._v(" "),a("h2",{attrs:{id:"element-ui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-ui"}},[t._v("#")]),t._v(" element-ui")]),t._v(" "),a("h2",{attrs:{id:"sheetjs-xlsx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sheetjs-xlsx"}},[t._v("#")]),t._v(" sheetJS-xlsx")]),t._v(" "),a("p",[t._v("导入导出excel文件")])])}),[],!1,null,null,null);s.default=e.exports}}]);