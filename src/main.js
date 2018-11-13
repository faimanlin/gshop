/*
入口JS
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mockServer' // 加载mockServer
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router, //  使用上vue-router
  store // 使用上vuex
})
