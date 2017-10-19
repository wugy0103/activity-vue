<template>
  <div class="layout" :style="styleObj">
    <share :title="topic.shareTitle" :desc="topic.shareDescription" :imgUrl="topic.wxPreviewPic" :link="link"></share>
    <div v-for="(item, index) of topic.templateList" :key="item.templateId">
      <template v-if="item.type===1">
        <singleTemplate :imgSrc="item.templatePics[0].templatePic" :url="item.templatePics[0].picLink" :headerPic="item.templatePic"></singleTemplate>
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
        <!-- <couponTemplate :headerPic="item.templatePic"></couponTemplate> -->
      </template>
    </div>
    <iconTemplate></iconTemplate>
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
      },
      link: window.location.href
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
