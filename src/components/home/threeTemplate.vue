<template>
<div>
	<singleTemplate :imgSrc="'/static/images/toutu.png'"></singleTemplate>
	<div class="threeTemplate clear">
        <a href="javascript:;">
            <img src="../../images/header.png" width="100%" alt="header.png">
        </a>
		<a href="javascript:;">
            <img src="../../images/header.png" width="100%" alt="header.png">
        </a>
		<a href="javascript:;">
            <img src="../../images/header.png" width="100%" alt="header.png">
        </a>
	</div>
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
	.threeTemplate{
		width: 100%;
		a {
			float: left;
			width: 33.333333333333333333333333333333333333%;
			img {
				float: left;
			}
		}
	}
	
</style>