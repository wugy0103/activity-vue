<template>
  <input type="hidden" id="shareData" :value="JSON.stringify(inputShareData)">
</template>


<script src='http://res.wx.qq.com/open/js/jweixin-1.0.0.js'></script>
<script>
import { DxHybrid } from '../../utils/hybrid'
import axios from 'axios'
import ipConfig from '../../config/ipConfig'
import { topicApis } from '../../config/apis'
export default {
  components: {
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
      return axios.get(ipConfig.apiBaseUrl + topicApis.wechatUrl, {
        params: { url: location.href }
      }).then((res) => {
        console.log(res.data)
        if (callback) callback(res.data)
        return res.data
      }, (rej) => {
        console.log(ipConfig.apiBaseUrl + topicApis.wechatUrl, rej)
        return rej
      })
    },
    wechatInit: function (shareData) {
      return this.getWechatConfig(function (config) {
        let paramObj = {
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
