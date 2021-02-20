import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './index.css'

import Unicon from 'vue-unicons'
import { uniYoutube, uniFacebook, uniInstagramAlt, uniLinkedin, uniGithub, uniPlay } from 'vue-unicons/src/icons'


Vue.config.productionTip = false

Unicon.add([uniYoutube, uniFacebook, uniInstagramAlt, uniLinkedin, uniGithub, uniPlay])

Vue.use(Unicon)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
