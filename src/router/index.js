import Vue from 'vue'
import VueRouter from 'vue-router'
import Books from '@/views/Books.vue'
import Checkout from '@/views/Checkout.vue'
import BookDetails from '@/views/BookDetails.vue'
import Order from '@/views/Order.vue'
import UserOrders from '@/views/UserOrders.vue'
import security from '@/store/modules/security'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'books', component: Books },
  { path: '/books/:id', name: 'bookDetails', component: BookDetails },
  { path: '/checkout', name: 'checkout', component: Checkout },
  { path: '/order', name: 'order', component: Order },
  {
    path: '/users/:id/orders', name: 'userOrders', component: UserOrders,
    beforeEnter(to, from, next) {
      if (security.state.token) {
        next()
      } else {
        next('/')
      }
    }
  },
  { path: '*', redirect: '/' }
]

export default new VueRouter({
  mode: 'history',
  routes
})