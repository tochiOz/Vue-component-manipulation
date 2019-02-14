import Vue from 'vue'
import Router from 'vue-router'
import User from './views/User.vue'
import Quote from './views/quotes.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'User',
      component: User
    },
    {
      path: '/quotes',
      name: 'Quote',
      component: Quote
    }
  ]
})