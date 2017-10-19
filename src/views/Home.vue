<template>
  <div class="layout" :style="styleObj">
    <singleTemplate :imgSrc="'/static/images/header.png'" :url="'http://m.daxmall.com'"></singleTemplate>
    <countDownTemplate></countDownTemplate>
    <couponTemplate></couponTemplate>
    <bigraphTemplate></bigraphTemplate>
    <threeTemplate></threeTemplate>
    <productTemplate></productTemplate>
    <iconTemplate></iconTemplate>
    <share></share>
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

export default {
  components: {
    singleTemplate,
    countDownTemplate,
    couponTemplate,
    bigraphTemplate,
    threeTemplate,
    productTemplate,
    iconTemplate,
    share
  },
  data () {
    return {
      styleObj: {
        background: '#fff url(' + this.$store.state.topic.backgroundPic + ') repeat-y top left'
      }
    }
  },
  methods: {
  },
  computed: {
    // 监听返回不同状态的数据
    topic () {
      return this.$store.state.topic
    }

  },
  mounted () {
    this.$store.dispatch('getTopic', this.$route.params)
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
