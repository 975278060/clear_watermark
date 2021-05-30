import Vue from 'vue'
import App from './App'
import hxNavbar from "components/hx-navbar/hx-navbar.vue"

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
Vue.component('hx-navbar',hxNavbar)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
