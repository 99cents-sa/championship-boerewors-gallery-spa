import Vue from 'vue'
import App from './App.vue'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
