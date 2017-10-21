<template>
  <div class="layout" :style="{ background: topic.backgroundPic }">
    <share :title="topic.shareTitle" :desc="topic.shareDescription" :imgUrl="topic.wxPreviewPic" :link="link"></share>
    <div v-for="(item, index) of topic.templateList" :key="item.templateId">
      <navigation v-if="!!topic.anchorLocation && topic.anchorLocation === item.templateId" :anchorContent="topic.anchorContent"></navigation>
      <template v-if="index===1　&& topic.acitvityCountDown===0">
        <countDownTemplate :current="current" :endTime="topic.endDate" :countdownBg="topic.countdownBackgroundPic" :fontColor="topic.fontColor" :shortTitle="topic.shortTitle"></countDownTemplate>
      </template>
      <template v-if="item.type===1">
        <singleTemplate :imgArr="item.templatePics" :headerPic="item.templatePic"></singleTemplate>
      </template>
      <template v-else-if="item.type===2">
        <bigraphTemplate :imgArr="item.templatePics" :headerPic="item.templatePic"></bigraphTemplate>
      </template>
      <template v-else-if="item.type===3">
        <productTemplate :prodArr="item.templateProds" :headerPic="item.templatePic"></productTemplate>
      </template>
      <template v-else-if="item.type===4">
        <threeTemplate :imgArr="item.templatePics" :headerPic="item.templatePic"></threeTemplate>
      </template>
      <template v-else-if="item.type===5">
        <couponTemplate :couponRuleTitle="item.couponRuleTitle" :couponRuleContent="item.couponRuleContent" :couponArr="item.templateCoupons" :headerPic="item.templatePic"></couponTemplate>
      </template>
    </div>
    <iconTemplate :btns="topic.btns"></iconTemplate>
  </div>
</template>

<script>
import singleTemplate from '../components/home/singleTemplate.vue'
import countDownTemplate from '../components/home/countDownTemplate.vue'
import couponTemplate from '../components/home/couponTemplate.vue'
import bigraphTemplate from '../components/home/bigraphTemplate.vue'
import threeTemplate from '../components/home/threeTemplate.vue'
import productTemplate from '../components/home/productTemplate.vue'
import iconTemplate from '../components/home/iconTemplate.vue'
import share from '../components/common/share.vue'
import navigation from '../components/home/navigation.vue'

export default {
  components: {
    singleTemplate,
    countDownTemplate,
    couponTemplate,
    bigraphTemplate,
    threeTemplate,
    productTemplate,
    iconTemplate,
    share,
    navigation
  },
  data () {
    return {
      link: window.location.href
    }
  },
  methods: {
  },
  computed: {
    topic () {
      return this.$store.state.topic || ''
    },
    current () {
      return this.$store.state.nowDate
    }

  },
  created () {
    this.$store.dispatch('getTopic', this.$route.params)
    this.$store.dispatch('getNowDate')
  },
  mounted () {
    // if (this.$store.state.nowDate < this.$store.state.topic.startDate) {
    //   this.$router.push({ name: 'timeout', params: { type: 1 } })
    // } else if (this.$store.state.nowDate > this.$store.state.topic.endDate) {
    //   this.$router.push({ name: 'timeout', params: { type: 2 } })
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../style/common';
.layout {
  width: 100%;
  max-width: 768px;
  min-width: 300px;
  margin: 0 auto;
  background: $backgroundColor;
}
</style>
