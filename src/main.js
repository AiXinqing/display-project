import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'
import vueSwiper from 'vue-awesome-swiper' // 引入vue-awesome-swiper
import 'swiper/dist/css/swiper.css' // 引入样式

Vue.config.productionTip = false
Vue.use(dataV)
Vue.use(vueSwiper) // 使用插件
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
