<template>
  <div class="iconTemplate clear">
    <a :href="btns[0].link || ipConfig.mShopUrl">
      <singleTemplate :imgArr="[{templatePic: '/static/images/icon_goHome@2x.png', picLink: btns[0].link || ipConfig.mShopUrl}]"></singleTemplate>
    </a>
    <a href="javascript:;" @click="goTop">
      <singleTemplate :imgArr="[{templatePic: '/static/images/icon_totop@2x.png'}]"></singleTemplate>
    </a>
  </div>
</template>

<script>
import singleTemplate from './singleTemplate.vue'
import ipConfig from '../../config/ipConfig'
export default {
  components: {
    singleTemplate,
    ipConfig
  },
  props: {
    // 商品集合
    btns: {
      type: Array,
      default: [
        {
          link: ipConfig.mShopUrl
        }
      ]
    }
  },
  computed: {
    ipConfig () {
      return ipConfig
    }
  },
  methods: {
    goTop () {
      window.scrollTo(0, 0)
    }
  },
  mounted () {
    console.log(this.btns)
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/common";
.iconTemplate {
  position: fixed;
  z-index: 999;
  width: 0.4rem;
  right: 0.1rem;
  bottom: 0.3rem;
  a {
    float: right;
    height: 0.4rem;
    margin-top: 0.08rem;
  }
}
</style>