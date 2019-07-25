import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad)


new Vue({
  render: h => h(App),
}).$mount('#app')
