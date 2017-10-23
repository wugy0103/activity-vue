<template>
  <div class="longPageForShare">
    <img :src="sharePic" alt="">
    <img :src="QRCodeBase64" alt="">
  </div>
</template>

<script>
export default {
  data () {
      return {
          sharePic: this.$route.params.sharePic,
          QRCodeBase64: this.$route.params.QRCodeBase64
      }
  },
  methods: {
  },
  created () {
  },
  mounted () {
    console.log('decodeURIComponent')
    alert(JSON.stringify(this.$route.params))
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/common";
</style>