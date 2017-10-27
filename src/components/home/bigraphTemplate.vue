<template>
  <div :id="id">
    <singleTemplate v-if="!!headerPic" :imgArr="[{templatePic: headerPic}]"></singleTemplate>
    <div class="bigraphTemplate clear">
      <div v-for="item of imgArr" :key="item.id">
        <a :href="item.picLink">
          <img :src="item.templatePic" />
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import singleTemplate from './singleTemplate.vue'
export default {
  components: {
    singleTemplate
  },
  props: {
    // 图片集合
    imgArr: {
      type: Array,
      default: []
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
.bigraphTemplate {
  width: 100%;
  a {
    float: left;
    width: 50%;
    img {
      float: left;
    }
  }
}
</style>