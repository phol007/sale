// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'bulma/css/bulma.css'
import './css/table.css'
import './css/loading.css'
// import './css/index_moo.css'
import './css/index.css'
import './css/ipad.css'
import './css/iphone6.css'
import VueSweetAlert from 'sweetalert'
import 'sweetalert/dist/sweetalert.css'
import vueTouch from 'vue-touchjs'
import './js/mainFunction/main_function.js'

Vue.config.productionTip = false

Vue.use(VueMaterial.MdCore) // Required to boot vue material
Vue.use(VueMaterial.MdButton)
Vue.use(VueMaterial.MdIcon)
Vue.use(VueMaterial.MdSidenav)
Vue.use(VueMaterial.MdToolbar)
Vue.use(VueMaterial)
Vue.use(VueSweetAlert)
Vue.use(vueTouch, {name: 'v-touch'})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
