<template>
  <div>
    <singleTemplate :imgSrc="'/static/images/toutu.png'"></singleTemplate>
    <div class="productTemplate">
      <ul class="clear">
        <li>
          <a href="javascript:;">
            <product></product>  
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <product></product>  
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <product></product>  
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <product></product>  
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