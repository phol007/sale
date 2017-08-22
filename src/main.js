// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules/font-awesome/css/font-awesome.css'
import 'bulma/css/bulma.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import './css/index.css'
import './css/table.css'

Vue.config.productionTip = false
Vue.use(VueMaterial)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
