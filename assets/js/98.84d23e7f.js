(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{538:function(e,t,n){"use strict";n.r(t);var r=n(59),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"vue中实现token验证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue中实现token验证"}},[e._v("#")]),e._v(" Vue中实现token验证")]),e._v(" "),n("h3",{attrs:{id:"前后端流程分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前后端流程分析"}},[e._v("#")]),e._v(" 前后端流程分析")]),e._v(" "),n("ol",[n("li",[e._v("前端页面进行登录操作，将用户名和密码发给服务器")]),e._v(" "),n("li",[e._v("服务器进行校验，通过后生成token，包含信息有密匙、uid、过期时间等，然后返回给前端")]),e._v(" "),n("li",[e._v("前端将token保存在本地（建议在localStorage中）和state（vuex）中，下次对服务器请求时带上，然后返回给前端")]),e._v(" "),n("li",[e._v("服务器端对接收到的token进行校验。通过则进行相应的增删改查操作，并将数据返回给前端；未通过则返回错误码，提示错误信息，然后跳转到登录页")])]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/chenwenhao/p/10466774.html#_labelTop",target:"_blank",rel:"noopener noreferrer"}},[e._v("回到顶部"),n("OutboundLink")],1)]),e._v(" "),n("h3",{attrs:{id:"具体实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#具体实现"}},[e._v("#")]),e._v(" 具体实现")]),e._v(" "),n("p",[e._v("技术栈：vuex + axios + localStorage + vue-router")]),e._v(" "),n("ul",[n("li",[e._v("登录路由添加自定义meta字段，来记录该页面是否需要身份验证")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('复制// router.js\n{\n    path: "/index",\n    name: "index",\n    component: resolve => require([\'./index.vue\'], resolve),\n    meta: { \n        requiresAuth: true \n    }\n} \n')])])]),n("ul",[n("li",[e._v("设置路由拦截")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("复制router.beforeEach((to, from, next) => {\n    //  matched的数组中包含$route对象的检查元字段\n    //  arr.some() 表示判断该数组是否有元素符合相应的条件, 返回布尔值\n    if (to.matched.some(record => record.meta.requiresAuth)) {\n        // 判断当前是否有登录的权限\n        if (!auth.loggedIn()) {\n            next({\n                path: '/login',\n                query: { redirect: to.fullPath }\n            })\n        } else {\n            next()\n        }\n    } else {\n        next() // 确保一定要调用 next()\n    }\n})\n")])])]),n("ul",[n("li",[e._v("设置请求/响应拦截\n在后面的所有请求中都将携带token进行。\n利用axios中的请求拦截器, 通过配置http response inteceptor, 当后端接口返回401 (未授权), 让用户重新执行登录操作。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("复制// http request 拦截器\naxios.interceptors.request.use(\n    config => {\n        if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token\n            config.headers.Authorization = `token ${store.state.token}`;\n        }\n        return config;\n    },\n    err => {\n        return Promise.reject(err);\n    });\n\n// http response 拦截器\naxios.interceptors.response.use(\n    response => {\n        return response;\n    },\n    error => {\n        if (error.response) {\n            switch (error.response.status) {\n                case 401:\n                    // 返回 401 清除token信息并跳转到登录页面\n                    store.commit(types.LOGOUT);\n                    router.replace({\n                        path: 'login',\n                        query: {redirect: router.currentRoute.fullPath}\n                    })\n            }\n        }\n        return Promise.reject(error.response.data)   // 返回接口返回的错误信息\n});\n")])])]),n("ul",[n("li",[e._v("登录页面：")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("复制//login.vue\nmethods: {\n  login(){\n      if (this.token) {\n          // 存储在本地的localStograge中，可以使用cookies/local/sessionStograge\n          this.$store.commit(types.LOGIN, this.token)\n          // 跳转至其他页面\n          let redirect = decodeURIComponent(this.$route.query.redirect || '/');\n          this.$router.push({\n              path: redirect\n          })\n      }\n  }\n}\n")])])]),n("ul",[n("li",[e._v("vuex设置")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("复制import Vuex from 'vuex';\nimport Vue from 'vue';\nimport * as types from './types'\n\nVue.use(Vuex);\nexport default new Vuex.Store({\n    state: {\n        user: {},\n        token: null,\n        title: ''\n    },\n    mutations: {\n        // 登录成功将, token保存在localStorage中\n        [types.LOGIN]: (state, data) => {\n            localStorage.token = data;\n            state.token = data;\n        },\n        // 退出登录将, token清空\n        [types.LOGOUT]: (state) => {\n            localStorage.removeItem('token');\n            state.token = null\n        }\n    }\n});\n")])])]),n("p",[e._v("三者区别：")]),e._v(" "),n("ul",[n("li",[e._v("sessionStorage 不能跨页面共享的，关闭窗口即被清除")]),e._v(" "),n("li",[e._v("localStorage 可以同域共享，并且是持久化存储的")]),e._v(" "),n("li",[e._v("在 local / session storage 的 tokens，就不能从不同的域名中读取,甚至是子域名也不行.\n解决办法使用Cookie.demo: 假设当用户通过 app.yourdomain.com 上面的验证时你生成一个 token 并且作为一个 cookie 保存到 .yourdomain.com,然后，在 youromdain.com 中你可以检查这个 cookie 是不是已经存在了，并且如果存在的话就转到 app.youromdain.com去。这个 token 将会对程序的子域名以及之后通常的流程都有效（直到这个 token 超过有效期） 只是利用cookie的特性进行存储而非验证.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);