<template>
  <div :id="id" class="singleTemplate clear">
    <img v-if="!!headerPic" :src="headerPic" alt="">
    <a class="clear" :href="imgArr[0].picLink">
      <img :src="imgArr[0].templatePic">
    </a>
  </div>
</template>

<script>
export default {
  props: {
    // 图片集合
    imgArr: {
      type: Array,
      default: [{
        picLink: '',
        templatePic: ''
      }]
    },
    // 头图
    headerPic: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: ''
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