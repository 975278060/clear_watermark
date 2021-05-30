(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["colorui/components/cu-custom"],{"19a7":function(t,n,a){"use strict";var u,e=function(){var t=this,n=t.$createElement;t._self._c},c=[];a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return c})),a.d(n,"a",(function(){return u}))},"1ed1":function(t,n,a){"use strict";var u=a("c7ec"),e=a.n(u);e.a},"5c0b":function(t,n,a){"use strict";a.r(n);var u=a("19a7"),e=a("633d");for(var c in e)"default"!==c&&function(t){a.d(n,t,(function(){return e[t]}))}(c);a("1ed1");var r,o=a("f0c5"),i=Object(o["a"])(e["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);n["default"]=i.exports},"633d":function(t,n,a){"use strict";a.r(n);var u=a("ab45"),e=a.n(u);for(var c in u)"default"!==c&&function(t){a.d(n,t,(function(){return u[t]}))}(c);n["default"]=e.a},ab45:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar}},name:"cu-custom",computed:{style:function(){var t=this.StatusBar,n=this.CustomBar,a=this.bgImage,u="height:".concat(n,"px;padding-top:").concat(t,"px;");return this.bgImage&&(u="".concat(u,"background-image:url(").concat(a,");")),u}},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){t.navigateBack({delta:1})}}};n.default=a}).call(this,a("543d")["default"])},c7ec:function(t,n,a){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'colorui/components/cu-custom-create-component',
    {
        'colorui/components/cu-custom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5c0b"))
        })
    },
    [['colorui/components/cu-custom-create-component']]
]);
