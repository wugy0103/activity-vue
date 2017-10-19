<template>
  <div>
    <singleTemplate v-if="!!headerPic" :imgSrc="headerPic"></singleTemplate>
    <div class="productTemplate">
      <ul class="clear">
        <li v-for="item of prodArr" :key="item.prodId">
          <a href="javascript:;">
            <product :product="item"></product>  
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import singleTemplate from './singleTemplate.vue'
import product from '../common/product.vue'
export default {
  components: {
    singleTemplate,
    product
  },
  props: {
    // 商品集合
    prodArr: {
      type: Array,
      default: []
    },
    // 头图
    headerPic: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/common';
.productTemplate {
  width: 100%;
  overflow: hidden;
  ul {
    margin: 0 -0.025rem;
    li {
      float: left;
      width: 50%;
      margin-bottom: 0.05rem;
      a {
        display: block;
        margin: 0 0.025rem;
      }
    }
  }
}
</style>