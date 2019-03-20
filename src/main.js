import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from "fastclick"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "./assets/styles/reset.css"
import "./assets/styles/border.css"
import "./assets/styles/iconfont.css"
import 'swiper/dist/css/swiper.css'
import store from "./store"


Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})