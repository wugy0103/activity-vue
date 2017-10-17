<template>
<div class="layout">
   <singleTemplate></singleTemplate>
   <countDownTemplate></countDownTemplate>
   <couponTemplate></couponTemplate>
   <bigraphTemplate></bigraphTemplate>
   <threeTemplate></threeTemplate>
 </div>
</template>

<script>
  import singleTemplate from '../components/home/singleTemplate.vue'
  import countDownTemplate from '../components/home/countDownTemplate.vue'
  import couponTemplate from '../components/home/couponTemplate.vue'
  import bigraphTemplate from '../components/home/bigraphTemplate.vue'
  import threeTemplate from '../components/home/threeTemplate.vue'
  
  export default {
    components: {
      singleTemplate,
      countDownTemplate,
      couponTemplate,
      bigraphTemplate,
      threeTemplate
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
    background-color: $backgroundColor;
  }

</style>
