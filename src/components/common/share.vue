<template>
  <input type="hidden" :value="JSON.stringify(inputShareData)">
</template>

<script>
// import 'http://res.wx.qq.com/open/js/jweixin-1.0.0.js'
import { DxHybrid } from '../../utils/hybrid.js'
// 使用mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'

export default {
  components: {
    MintUI,
    axios
  },
  props: {
    // 分享标题
    title: {
      type: String,
      default: '健康商城-正品保证，全场包邮！'
    },
    // 分享描述
    desc: {
      type: String,
      default: '健康猫运动商城-涵盖运动鞋服、营养保健、运动数码等优选正品。'
    },
    // 分享图标
    imgUrl: {
      type: String,
      default: 'https://api.healthmall.cn/logo.jpg'
    },
    // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    link: {
      type: String,
      default: 'http://m.daxmall.com'
    }
  },
  data () {
    return {
      // 兼容旧分享按钮
      inputShareData: {
        'title': this.title,
        'content': this.desc,
        'img_url': this.imgUrl,
        'http_url': this.link,
        'topic': '#健康商城#',
        'shareFrom': '（分享自@健康猫APP）'
      },
      // 微信分享参数
      wechatShareData: {
        title: this.title,
        desc: this.desc,
        link: this.link,
        imgUrl: this.imgUrl
      },
      // app分享参数
      appShareData: {
        'title': this.title,
        'des': this.desc,
        'imgUrl': this.imgUrl,
        'url': this.link
      }
    }
  },
  methods: {
    getWechatConfig: function (callback) {
      MintUI.Indicator.open()
      return axios.get('http://192.168.60.11:8184/shopManage/wechatShare', {
        params: { url: location.href }
      }).then((res) => {
        console.log(res.data)
        MintUI.Indicator.close()
        if (callback) callback(res.data)
        return res.data
      }, (rej) => {
        console.log(rej)
        MintUI.Indicator.close()
        MintUI.Toast({
          message: '网络繁忙！',
          className: 'Toast'
        })
        return rej
      })
    },
    wechatInit: function (shareData) {
      return this.getWechatConfig(function (config) {
        var paramObj = {
          appId: config.appId,
          timestamp: config.timestamp,
          nonceStr: config.noncestr,
          signature: config.signature,
          jsApiList: ['checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'hideMenuItems',
            'chooseImage'
          ]
        }
        if (window.wx) {
          let wx = window.wx
          wx.config(paramObj)
          wx.ready(function () {
            wx.onMenuShareTimeline(shareData)
            wx.onMenuShareAppMessage(shareData)
          })
        }
      })
    },
    // 控制app右上角按钮分享图标
    setAppRightBtn: function () {
      DxHybrid.H5callApp('setTBRightButton', {
        'text': '分享',
        'iconId': 'icon1006',
        'enable': true,
        'textColor': '#333333'
      })
      window.onunload = function () {
        DxHybrid.H5callApp('setTBRightButton', {
          'text': '',
          'iconId': '0',
          'enable': false,
          'textColor': '#ffffff'
        })
      }
    },
    appShareInit: function (shareData) {
      DxHybrid.APPCallH5('notifyTBRightButtonClicked', function () {
        DxHybrid.H5callApp('mallToShare', shareData, function () { })
      })
    }
  },
  mounted () {
    this.setAppRightBtn()
    this.appShareInit(this.appShareData)
    this.wechatInit(this.wechatShareData)
  }
}
</script>
