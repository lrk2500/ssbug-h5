// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import $ from 'jquery'
import Vue from 'vue'
import App from './App'
import router from './router'

import '../static/highlight/styles/tomorrow-night-eighties.css'
import '../static/NEditor/neditor.parse.js'
import '../node_modules/_bootstrap@3.3.7@bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/_bootstrap@3.3.7@bootstrap/dist/js/bootstrap.min.js'

//axios
import http from './request/http.js'
Vue.prototype.$http = http;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
