<template>
  <div class="singleTemplate clear">
    <a class="clear" :href="url">
      <img :src="imgSrc">
    </a>
  </div>
</template>

<script>
export default {
  props: {
    // 图片
    imgSrc: {
      type: String,
      default: '/static/images/placeholder.png'
    },
    // 链接
    url: {
      type: String,
      default: 'javascript:;'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/common';
.singleTemplate {
  width: 100%;
  img {
    float: left;
  }
}
</style>