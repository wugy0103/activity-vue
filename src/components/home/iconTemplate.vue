<template>
  <div class="iconTemplate clear">
    <a href="javascript:;">
      <singleTemplate :imgSrc="'/static/images/icon_goHome@2x.png'"></singleTemplate>
    </a>
    <a href="javascript:;">
      <singleTemplate :imgSrc="'/static/images/icon_totop@2x.png'"></singleTemplate>
    </a>
  </div>
</template>

<script>
  import singleTemplate from './singleTemplate.vue'
  export default {
    components: {
      singleTemplate
    }
  }
</script>

<style lang="scss" scoped>
@import '../../style/common';
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