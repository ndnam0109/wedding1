import Vue from 'vue'
import VScrollLock from 'v-scroll-lock'
import App from './App.vue'
import Divider from './components/Divider.vue'
import Button from './components/Button.vue'
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false

Vue.use(VScrollLock)
Vue.use(VueClipboard)
Vue.component('Divider', Divider)
Vue.component('Button', Button)

new Vue({
    render: (h) => h(App),
}).$mount('#app')