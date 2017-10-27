// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入Vue框架及各模块
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'
import AxiosConfig from './config/axios-config'
import ipConfig from './config/ipConfig'
import { topicApis } from './config/apis'
// rem自适应
import './config/rem'
// 加载全局scss
import './style/common.scss'
// 使用mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

// 加载各模块
Vue.use(Vuex)
Vue.use(MintUI)
Vue.use(AxiosConfig, axios)

// 定义状态管理
var store = new Vuex.Store({
  state: {
    // 专题信息
    topic: {
      backgroundPic: '',
      btns: [
        {
          link: ''
        }
      ],
      templateList: [
        {
          templatePic: '',
          templatePics: [{
            id: '',
            picLink: '',
            templatePic: ''
          }]
        }
      ]
    }
  },
  mutations: {
    // 获取专题数据
    getTopic (state, data) {
      MintUI.Indicator.open()
      axios.get(ipConfig.apiBaseUrl + topicApis.topicInfo, {
        params: data
      }).then((res) => {
        MintUI.Indicator.close()
        if (res.data.success) {
          state.topic = res.data.model
          document.title = state.topic.shortTitle
        } else {
          MintUI.Toast({
            message: res.data.message || '接口异常！',
            className: 'Toast'
          })
        }
      }, (rej) => {
        console.log(ipConfig.apiBaseUrl + topicApis.topicInfo, rej)
        MintUI.Indicator.close()
        MintUI.Toast({
          message: '网络繁忙！',
          className: 'Toast'
        })
      })
    },
    // 获取服务器时间
    getNowDate (state, data) {
      axios.get(ipConfig.apiBaseUrl + topicApis.serverDate, {
        params: data
      }).then((res) => {
        state.nowDate = res.data.model.nowDate
      }, (rej) => {
        console.log(ipConfig.apiBaseUrl + topicApis.serverDate, rej)
      })
    }
  },
  actions: {
    // 列表页数据
    getTopic (context, data) {
      context.commit('getTopic', data)
    },
    getNowDate (context, data) {
      context.commit('getNowDate', data)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<router-view></router-view>'
})
