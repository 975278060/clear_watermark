(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/unicorn-base/index"],{"1b03":function(n,t,e){"use strict";var o={hxNavbar:function(){return e.e("components/hx-navbar/hx-navbar").then(e.bind(null,"be26"))},uniForms:function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-forms/uni-forms")]).then(e.bind(null,"2176"))},uniFormsItem:function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-forms-item/uni-forms-item")]).then(e.bind(null,"4ed2"))},uniEasyinput:function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-easyinput/uni-easyinput")]).then(e.bind(null,"75a3"))}},i=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return o}))},"2a24":function(n,t,e){"use strict";(function(n){e("2217");o(e("66fd"));var t=o(e("82a1"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"53d3":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){e.e("components/beyondGod-roll/text-roll").then(function(){return resolve(e("17f3"))}.bind(null,e)).catch(e.oe)},i=function(){e.e("components/min-collapse/min-collep").then(function(){return resolve(e("583d"))}.bind(null,e)).catch(e.oe)},a=function(){e.e("components/s-input/s-input").then(function(){return resolve(e("1e23"))}.bind(null,e)).catch(e.oe)},c={data:function(){return{formData:{name:"",email:"dcloud@email.com"},speed:"100",list:'打开相关视频软件，点击分享  -  复制视频链接，<span style="color: red">点击按钮“一键去水印”</span>，复制相关链接到手机浏览器即可成功下载。',array:[{src:"/static/image/logo-douyin.png",text:"抖音"},{src:"/static/image/logo-gitShow.png",text:"快手"},{src:"/static/image/logo-meipai.png",text:"美拍"},{src:"/static/image/logo-volcano.png",text:"火山视频"},{src:"/static/image/logo-zuiyou.png",text:"最右"}],array1:[{src:"/static/image/logo-xiaohongshu.png",text:"小红书"},{src:"/static/image/logo-microview.png",text:"微视"},{src:"/static/image/logo-xiaokaxiu.png",text:"小咖秀"},{src:"/static/image/logo-ppx.png",text:"皮皮虾"},{src:"/static/image/logo-music.png",text:"全民K歌"}]}},components:{UniSInput:a,TextRoll:o,collapse:i},onLoad:function(){this.getHomePosts()},methods:{submit:function(){this.$refs.form.submit().then((function(n){console.log("表单数据信息：",n)})).catch((function(n){console.log("表单错误信息：",n)}))},getHomePosts:function(){n.request({url:"https://cdn.ipayy.net/wangyy/api.php",success:function(n){}})}}};t.default=c}).call(this,e("543d")["default"])},"82a1":function(n,t,e){"use strict";e.r(t);var o=e("1b03"),i=e("ba1a");for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);e("9284");var c,u=e("f0c5"),r=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);t["default"]=r.exports},9284:function(n,t,e){"use strict";var o=e("aa73"),i=e.n(o);i.a},aa73:function(n,t,e){},ba1a:function(n,t,e){"use strict";e.r(t);var o=e("53d3"),i=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,(function(){return o[n]}))}(a);t["default"]=i.a}},[["2a24","common/runtime","common/vendor"]]]);