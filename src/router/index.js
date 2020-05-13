import Vue from 'vue'
import VueRouter from 'vue-router'
import Books from '@/views/Books.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Checkout from '@/views/Checkout.vue'
import BookDetails from '@/views/BookDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'books',
    component: Books
  },
  {
    path: '/books/:id',
    name: 'bookDetails',
    component: BookDetails
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})