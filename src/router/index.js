import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import BookDetails from '@/components/items/BookDetails'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'iMain',
      component: Main
    },
    {
      path: '/book/:id',
      name: 'Id',
      component: BookDetails
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
      path: '*',
      redirect: '/'
    }
  ]
})
