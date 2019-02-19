import Vue from 'vue'
import Router from 'vue-router'
import User from './views/User.vue'
import Color from './views/color.vue'
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
      path: '/color',
      name: 'Color',
      component: Color
    },
    {
      path: '/quotes',
      name: 'Quote',
      component: Quote
    }
  ]
})