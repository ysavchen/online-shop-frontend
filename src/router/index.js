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
    name: 'Books',
    component: Books
  },
  {
    path: '/books/:id',
    name: 'BookDetails',
    component: BookDetails
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/checkout',
    name: 'Checkout',
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