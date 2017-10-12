import Vue from 'vue'
import Router from 'vue-router'
// 首页
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})
