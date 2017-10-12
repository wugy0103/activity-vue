<template>
<div class="layout">
   <singleTemplate></singleTemplate>
   <countDownTemplate></countDownTemplate>
 </div>
</template>

<script>
  import singleTemplate from '../components/home/singleTemplate.vue'
  import countDownTemplate from '../components/home/countDownTemplate.vue'
  
  export default {
    components: {
      singleTemplate,
      countDownTemplate
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .layout {
    width: 100%;
    max-width: 768px;
    min-width: 300px;
    margin: 0 auto;
  }

</style>
