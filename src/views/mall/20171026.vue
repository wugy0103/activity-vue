<template>
  <div class="layout">
    <share v-if="topic.shareTitle" :title="topic.shareTitle" :desc="topic.shareDescription" :imgUrl="topic.wxPreviewPic" :link="link" :longPageUrl="longPageUrl" :sharePic="topic.activitySharePic || '/static/images/share.png'"></share>
    <singleTemplate :imgArr="[{ templatePic: '/static/images/coup1.jpg' }]"></singleTemplate>
    <div @click="getActiveCoupon(status, ipConfig.apiBaseUrl + 'couponApi/getActiveCoupon/121/41')">
      <singleTemplate :imgArr="[{ templatePic: '/static/images/coup2.jpg' }]"></singleTemplate>
    </div>
    <singleTemplate :imgArr="[{ templatePic: '/static/images/coup3.jpg' }]"></singleTemplate>
    <singleTemplate :imgArr="[{ templatePic: '/static/images/coup4.jpg' }]"></singleTemplate>
    <iconTemplate></iconTemplate>
  </div>
</template>

<script>
import singleTemplate from '../../components/home/singleTemplate.vue'
import iconTemplate from '../../components/home/iconTemplate.vue'
import share from '../../components/common/share.vue'
// 使用mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import ipConfig from '../../config/ipConfig'
export default {
  components: {
    singleTemplate,
    iconTemplate,
    share,
    MintUI,
    axios,
    ipConfig
  },
  data () {
    return {
      link: window.location.href,
      longPageUrl: window.location.origin + '/#/share/',
      topic: {
        shareTitle: '恭喜你通关，请领取99元商城优惠券',
        shareDescription: '游戏通关领券，商城购物满199立减99元。',
        wxPreviewPic: window.location.origin + '/static/images/coup1.jpg' || 'https://api.healthmall.cn/logo.jpg'
      },
      status: 1
    }
  },
  computed: {
    ipConfig () {
      return ipConfig
    }
  },
  methods: {
    getActiveCoupon (status, url) {
      console.log(status, url)
      MintUI.Indicator.open()
      axios.get(url).then((res) => {
        console.log(res)
        MintUI.Indicator.close()
        MintUI.Toast({
          message: res.data.message || '接口异常！',
          className: 'Toast'
        })
      }, (rej) => {
        console.log(url, rej)
        MintUI.Indicator.close()
        console.log(rej.response.status)
        if (rej.response.status !== 401) {
          MintUI.Toast({
            message: '网络繁忙！',
            className: 'Toast'
          })
        }
      })
    }
  },
  created () {
    document.title = '恭喜你通关，请领券'
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.layout {
  width: 100%;
  max-width: 768px;
  min-width: 300px;
  margin: 0 auto;
  background: #fff;
  // position: relative;
}
</style>
