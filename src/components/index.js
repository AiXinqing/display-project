import swiper from './swiper/'

export default {
  install: (Vue) => {
    // Vue.prototype.$notify = Notification;    //IE兼容
    Vue.component('swiper', swiper)
  }
}
