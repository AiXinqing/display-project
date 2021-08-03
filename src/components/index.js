import swiper from './swiper/'
import progress from './progress/'

export default {
  install: (Vue) => {
    // Vue.prototype.$notify = Notification;    //IE兼容
    Vue.component('swiper', swiper)
    Vue.component('vueProgress', progress)
  }
}
