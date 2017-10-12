// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入Vue框架及各模块
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'
// rem自适应
import './config/rem'
// 加载全局scss
import './style/common.scss'
// 使用mint-ui
// 按需引入部分组件
import { Indicator, Toast, MessageBox, Lazyload } from 'mint-ui'

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false
// 挂载axios在Vue构造器下
Vue.prototype.$ajax = axios

// 加载各模块
Vue.use(Vuex)

Vue.use(Indicator) // loading
Vue.use(Toast)// 提示框组件
Vue.use(MessageBox)// 弹框组件
Vue.use(Lazyload)// 懒加载

// 定义状态管理
var store = new Vuex.Store({
  state: {
    swiperOption: {
      autoplay: 3000,
      setWrapperSize: true,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      mousewheelControl: true,
      observeParents: true,
      autoplayDisableOnInteraction: false,
      myfavoriteTab: ''
    },
    swiperSlides: [],
    // demo测试
    isshow: false,
    // 竞拍须等5分钟
    isWaiting: false,
    // 切换列表页搜索栏状态
    isShowListSearch: true,
    // 是否进入筛选侧边栏
    isShowsideBar: false,
    // 是否进入列表页搜索
    isSearchGolist: false,
    // 是否竞拍
    isJingpai: '',
    // 点击发票信息是否进入发票需知
    isTicks: false,
    // 点击买家留言是否进入留言框
    isUserMesage: false,
    // 拍卖列表数据集合
    state: 0,
    // 拍卖列表是否为空
    isShowList: true,
    // 拍卖列表商品的个数
    saleTotal: '',
    // 倒计时时间毫秒数
    saleCountdown: [],
    // 我的竞拍页面标签页切换标志
    tabSign: 0,
    // 拍卖状态码
    orderStatus: 0,
    test: 1
  },
  getters: {
    // 处理state中的数据;
    getState (state) {
      return state.state
    },
    // 处理state中的总数;
    getSaleTotal (state) {
      return state.saleTotal
    },
    // 处理state中的list数据是否有;
    getShowList (state) {
      return state.isShowList
    },
    // 处理state中的sfilter数据状态;
    getStatus (state) {
      return state.orderStatus
    }
  },
  mutations: {
    // 获取拍卖列表不同状态的数据
    setState (state, data) {
      axios.post('/auctionList/auction/queryAuctionList', {
        pageNum: 1,
        status: data  // 0 1 2  3
      }).then((data) => {
        if (data.data.model === null) {
          alert('数据异常')
        } else if (data.data.model.length === 0) {
          state.isShowList = false
          state.saleTotal = 0
        } else {
          state.isShowList = true
          state.state = data.data.model
          console.log(data)
          state.saleTotal = data.data.query.total
        }
      })
      /* var data = [
        {
          currPrice: 1020,
          endDate: 1506112946000,
          prodName: '乔丹新品运动鞋防滑耐磨缓震篮球鞋战靴XM1560112',
          prodPic: 'group2/M00/00/1C/Z-veKFeOIB6AS7KZAAK0wMMkkIw990.jpg',
          totalBidPriceNum: 120,
          startDate:1506012946000
        },
        {
          currPrice: 1090,
          endDate: 1506978945500,
          prodName: '乔丹新品运动鞋防滑耐磨缓震篮球鞋战靴XM1560112',
          prodPic: 'group2/M00/00/1C/Z-veKFeOIB6AS7KZAAK0wMMkkIw990.jpg',
          totalBidPriceNum: 120,
          startDate:1506712946000
        },
        {
          currPrice: 1040,
          endDate: 1509872945040,
          prodName: '乔丹新品运动鞋防滑耐磨缓震篮球鞋战靴XM1560112',
          prodPic: 'group2/M00/00/1C/Z-veKFeOIB6AS7KZAAK0wMMkkIw990.jpg',
          totalBidPriceNum: 140,
          startDate:1509672945040
        },
        {
          currPrice: 1088,
          endDate: 1506972945000,
          prodName: '乔丹新品运动鞋防滑耐磨缓震篮球鞋战靴XM1560112',
          prodPic: 'group2/M00/00/1C/Z-veKFeOIB6AS7KZAAK0wMMkkIw990.jpg',
          totalBidPriceNum: 60,
          startDate:1509872945040

        }
      ]
      state.state = data */
    },
    setStatus (state, data) {
      state.orderStatus = data
      // console.log(state.orderStatus)
    }
  },
  actions: {
    // 列表页数据
    setState (context, data) {
      context.commit('setState', data)
      context.commit('setStatus', data)
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
