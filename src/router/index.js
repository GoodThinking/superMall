import Vue from 'vue'
import VueRouter from 'vue-router'


const home = () => import('@/views/home/Home.vue')
const category = () => import('@/views/category/Category.vue')
const cart = () => import('@/views/cart/Cart.vue')
const user = () => import('@/views/user/User.vue')
const detail = () => import('@/views/detail/Detail.vue')
Vue.use(VueRouter)

  const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: home },
  { path: '/category', component: category },
  { path: '/cart', component: cart },
  { path: '/user', component: user },
  { path: '/detail/:id', component: detail}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
