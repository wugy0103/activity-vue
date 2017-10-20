import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import timeout from '@/views/topic/timeout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/topic/timeout/:type?',
      name: 'timeout',
      component: timeout
    },
    {
      path: '/topic/:id',
      component: Home
    },
    {
      path: '*',
      component: timeout
    }
  ]
})
