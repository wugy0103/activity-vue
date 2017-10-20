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
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false
// 挂载axios在Vue构造器下
Vue.prototype.$ajax = axios

// 加载各模块
Vue.use(Vuex)

Vue.use(MintUI)

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
    },
    nowDate: ''
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
    // 获取专题数据
    getTopic (state, data) {
      MintUI.Indicator.open()
      axios.get('http://192.168.60.11:8184/acSubject/getSubjectInfoById', {
        params: data
      }).then((res) => {
        MintUI.Indicator.close()
        res.data = {
          'message': '成功',
          'model': {
            'acitvityCountDown': 0,
            'activitySharePic': '/static/images/share.png',
            'anchorContent': '001,002,003,004,005,006',
            'anchorLocation': '003',
            'backgroundPic': '/static/images/bg.png',
            'backgroundStyle': '测试内容b4yt',
            'countdownBackgroundPic': '/static/images/countBg.png',
            'description': '分享描述=================',
            'endDate': '1508774399',
            'fontColor': 1,
            'id': 121,
            'ifBackground': '测试内容b4yt',
            'longTitle': '分享标题==========',
            'publishStatus': '测试内容b4yt',
            'shareDescription': '测试内容b4yt',
            'shareTitle': '测试内容94rc',
            'shortTitle': '专题标题=',
            'startDate': (new Date()).getTime(),
            'status': '测试内容01y4',
            'templateList': [
              {
                'subjectId': 121,
                'templateId': '001',
                'templateName': '测试内容1',
                'templatePic': '',
                'templatePics': [
                  {
                    'id': 1,
                    'picLink': '',
                    'templatePic': '/static/images/header.png'
                  }
                ],
                'templateProds': [],
                'type': 1
              },
              {
                'couponRuleContent': '每个订单仅可使用一张优惠券；/n优惠券一经使用，不予退还；/n优惠券不可抵扣运费；/n优惠券使用最终解释权归健康商城所有。',
                'couponRuleTitle': '优惠券使用说明',
                'isShowName': '测试内容01y4',
                'subjectId': 121,
                'templateCoupons': [
                  {
                    'activityId': 53,
                    'couponId': 283,
                    'couponName': '满1000送100',
                    'couponScope': '优惠券添加适用类目/品牌范围',
                    'drawCouponUrl': 'http://192.168.60.11:8082/coupon/getActiveCoupon/283/53',
                    'fullPrice': 1000,
                    'getStatus': 1,
                    'offPrice': 100
                  },
                  {
                    'activityId': 53,
                    'couponId': 281,
                    'couponName': '满1000送1001',
                    'couponScope': '优惠券添加适用类目/品牌范围',
                    'drawCouponUrl': 'http://192.168.60.11:8082/coupon/getActiveCoupon/281/53',
                    'fullPrice': 1000,
                    'getStatus': 3,
                    'offPrice': 1001
                  },
                  {
                    'activityId': 53,
                    'couponId': 279,
                    'couponName': '满1000送1002',
                    'couponScope': '优惠券添加适用类目/品牌范围',
                    'drawCouponUrl': 'http://192.168.60.11:8082/coupon/getActiveCoupon/279/53',
                    'fullPrice': 1000,
                    'getStatus': 2,
                    'offPrice': 1002
                  }
                ],
                'templateId': '002',
                'templateName': '测试内容2',
                'templatePic': '/static/images/toutu.png',
                'templatePics': [],
                'templateProds': [],
                'templateSort': '测试内容2rsg',
                'type': 5
              },
              {
                'subjectId': 121,
                'templateId': '003',
                'templateName': '测试内容3',
                'templatePic': '/static/images/toutu.png',
                'templatePics': [
                  {
                    'id': 31,
                    'picLink': 'http://www.baidu.com',
                    'templatePic': '/static/images/st.png'
                  },
                  {
                    'id': 32,
                    'picLink': 'http://www.baidu.com',
                    'templatePic': '/static/images/st.png'
                  }
                ],
                'templateProds': [],
                'type': 2
              },
              {
                'subjectId': 121,
                'templateId': '004',
                'templateName': '测试内容4',
                'templatePic': '/static/images/toutu.png',
                'templatePics': [
                  {
                    'id': 41,
                    'picLink': 'http://www.baidu.com',
                    'templatePic': '/static/images/st.png'
                  },
                  {
                    'id': 42,
                    'picLink': 'http://www.baidu.com',
                    'templatePic': '/static/images/st.png'
                  },
                  {
                    'id': 43,
                    'picLink': 'http://www.baidu.com',
                    'templatePic': '/static/images/st.png'
                  }
                ],
                'templateProds': [],
                'type': 4
              },
              {
                'subjectId': 121,
                'templateId': '005',
                'templateName': '测试内容5',
                'templatePic': '/static/images/toutu.png',
                'templatePics': [],
                'templateProds': [
                  {
                    'activityTags': '1,2,3',
                    'cash': 100,
                    'cornerTag': '9月上新哈哈',
                    'name': '测试内容32c3测试内容32c3测试内容32c3测试内容32c3测试内容32c3测试内容32c3测试内容32c3',
                    'pic': '/static/images/prodpic.png',
                    'prodId': 87248,
                    'sort': 58554,
                    'status': 70111,
                    'wordMarkTag': '模板下的商品集合'
                  },
                  {
                    'activityTags': '1,2,3',
                    'cash': 100,
                    'cornerTag': '9月上新哈哈',
                    'name': '测试内容32c3测试内容32c3测试内容32c3测试内容32c3测试内容32c3测试内容32c3测试内容32c3',
                    'pic': '/static/images/prodpic.png',
                    'prodId': 87248,
                    'sort': 58554,
                    'status': 70111,
                    'wordMarkTag': '模板下的商品集合,活动标签,角标'
                  },
                  {
                    'activityTags': '1,2,3',
                    'cash': 100,
                    'cornerTag': '9月上新哈哈',
                    'name': '测试内容32c3测试内容32c3测试内容32c3测试内容32c3测试内容32c3测试内容32c3测试内容32c3',
                    'pic': '/static/images/prodpic.png',
                    'prodId': 87248,
                    'sort': 58554,
                    'status': 70111,
                    'wordMarkTag': '模板下的商品集合,活动标签,角标,模板下的商品集合,活动标签,角标'
                  },
                  {
                    'activityTags': '1,2,3',
                    'cash': 100,
                    'cornerTag': '9月上新哈哈',
                    'name': '测试内容32c3测试',
                    'pic': '/static/images/prodpic.png',
                    'prodId': 87248,
                    'sort': 58554,
                    'status': 70111,
                    'wordMarkTag': '模板下的商品集合,活动标签,角标'
                  }
                ],
                'type': 3
              }
            ],
            'wxPreviewPic': '/static/images/wx.png',
            'btns': [
              {
                link: 'http://m.daxmall.com'
              }
            ]
          },
          'resultCode': 200,
          'success': true
        }
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
        console.log('http://192.168.60.11:8184/acSubject/getSubjectInfoById', rej)
        MintUI.Indicator.close()
        MintUI.Toast({
          message: '网络繁忙！',
          className: 'Toast'
        })
      })
    },
    // 获取服务器时间
    getNowDate (state, data) {
      axios.get('http://192.168.60.11:8184/acSubject/getNowDate', {
        params: data
      }).then((res) => {
        state.nowDate = res.data.model.nowDate
      }, (rej) => {
        console.log('http://192.168.60.11:8184/acSubject/getSubjectInfoById', rej)
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
