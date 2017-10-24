import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import timeout from '@/views/topic/timeout'
import longPageForShare from '@/views/topic/longPageForShare'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/topic/timeout/:type?/:error?',
      name: 'timeout',
      component: timeout
    },
    {
      path: '/topic/:id',
      component: Home
    },
    {
      path: '/share/:sharePic/:QRCodeBase64?',
      component: longPageForShare
    },
    {
      path: '*',
      component: timeout
    }
  ]
})
