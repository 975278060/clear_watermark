(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/unicorn-base/me"],{"138a":function(n,e,t){"use strict";var u={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("components/uni-forms/uni-forms")]).then(t.bind(null,"2176"))},uniEasyinput:function(){return Promise.all([t.e("common/vendor"),t.e("components/uni-easyinput/uni-easyinput")]).then(t.bind(null,"75a3"))}},r=function(){var n=this,e=n.$createElement;n._self._c},o=[];t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return u}))},"15dd":function(n,e,t){"use strict";(function(n){t("2217");u(t("66fd"));var e=u(t("1d5f"));function u(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"18e2":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{clearable:!0,formData:{name:"",email:"dcloud@email.com"},rules:{name:{rules:[{required:!0,errorMessage:"请输入姓名"},{minLength:3,maxLength:5,errorMessage:"姓名长度在 {minLength} 到 {maxLength} 个字符"}]},email:{rules:[{format:"email",errorMessage:"请输入正确的邮箱地址"}]}}}},methods:{submit:function(){this.$refs.form.submit().then((function(n){console.log("表单数据信息：",n)})).catch((function(n){console.log("表单错误信息：",n)}))}}};e.default=u},"1d5f":function(n,e,t){"use strict";t.r(e);var u=t("138a"),r=t("6ee0");for(var o in r)"default"!==o&&function(n){t.d(e,n,(function(){return r[n]}))}(o);var a,i=t("f0c5"),c=Object(i["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);e["default"]=c.exports},"6ee0":function(n,e,t){"use strict";t.r(e);var u=t("18e2"),r=t.n(u);for(var o in u)"default"!==o&&function(n){t.d(e,n,(function(){return u[n]}))}(o);e["default"]=r.a}},[["15dd","common/runtime","common/vendor"]]]);