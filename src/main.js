import Vue from 'vue'
import App from './App.vue'
import TUi from '../dist/t-ui.umd.mini.js'
import '../dist/t-ui.css'
Vue.config.productionTip = false
Vue.use(TUi)
new Vue({
    render: h => h(App)
}).$mount('#app')
