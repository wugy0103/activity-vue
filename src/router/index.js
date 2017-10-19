import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Error from '@/views/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/topic/:id',
      component: Home
    },
    {
      path: '*',
      component: Error
    }
  ]
})
