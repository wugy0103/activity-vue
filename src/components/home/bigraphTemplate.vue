<template>
<div>
	<singleTemplate></singleTemplate>
	<div class="bigraphTemplate clear">
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
	.bigraphTemplate{
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