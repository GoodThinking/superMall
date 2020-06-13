import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from '@/components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//加载elementUi
Vue.use(ElementUi)
//Vue.use直接调用toast的install方法来加载插件
Vue.use(toast)

//解决移动端点击300ms问题
FastClick.attach(document.body);

//使用图片懒加载插件来对vue中的图片
Vue.use(VueLazyLoad,{
  loading: './assets/images/common/placeholder.png'
})

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
