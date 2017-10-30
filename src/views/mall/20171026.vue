<template>
  <div class="layout">
    <share v-if="topic.shareTitle" :title="topic.shareTitle" :desc="topic.shareDescription" :imgUrl="topic.wxPreviewPic" :link="link" :longPageUrl="longPageUrl" :sharePic="topic.activitySharePic || '/static/images/share.png'"></share>
    <singleTemplate :imgArr="[{ templatePic: '/static/images/coup1.jpg' }]"></singleTemplate>
    <singleTemplate :imgArr="[{ templatePic: '/static/images/coup2.jpg' }]"></singleTemplate>
    <singleTemplate :imgArr="[{ templatePic: '/static/images/coup3.jpg' }]"></singleTemplate>
    <singleTemplate :imgArr="[{ templatePic: '/static/images/coup4.jpg' }]"></singleTemplate>
    <iconTemplate></iconTemplate>
  </div>
</template>

<script>
import singleTemplate from '../../components/home/singleTemplate.vue'
import iconTemplate from '../../components/home/iconTemplate.vue'
import share from '../../components/common/share.vue'

export default {
  components: {
    singleTemplate,
    iconTemplate,
    share
  },
  data () {
    return {
      link: window.location.href,
      longPageUrl: window.location.origin + '/#/share/',
      topic: {
        shareTitle: '恭喜你通关，请领取99元商城优惠券',
        shareDescription: '游戏通关领券，商城购物满199立减99元。',
        wxPreviewPic: 'http://activity.daxmall.com/mall/img/20171026/coup1.jpg' || 'https://api.healthmall.cn/logo.jpg'
      }
    }
  },
  methods: {
  },
  created () {
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
