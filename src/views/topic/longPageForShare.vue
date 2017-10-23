<template>
  <div class="longPageForShare">
    <div class="clear">
      <img :src="sharePic" onerror="onerror=null;src='/static/images/placeholder.png'">
    </div>
    <div class="QRCode">
      <img :src="'data:image/png;base64,' + QRCodeBase64" onerror="onerror=null;src='/static/images/placeholder.png'">
    </div>
    <p>长按识别二维码，和我一起抢优惠</p>
    <div class="logo">
      <img src="../../images/logo_jiankangmao@2x.png" alt="">
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      sharePic: decodeURIComponent(this.$route.params.sharePic),
      QRCodeBase64: decodeURIComponent(this.$route.params.QRCodeBase64)
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/common";
.longPageForShare {
  width: 100%;
  max-width: 768px;
  min-width: 300px;
  margin: 0 auto;
  background: #fff;
  text-align: center;
  overflow: hidden;
  min-height: 100%;
  .QRCode {
    width: 1.2rem;
    height: 1.2rem;
    margin: 0.5rem auto 0.2rem;
  }
  &>P {
    font-family: $PingFangStyle;
    font-size: 0.16REM;
    color: #333333;
    margin-bottom: 0.4rem;
  }
  .logo {
    width: 0.81rem;
    height: 0.49rem;
    margin: 0rem auto 0.4rem;
  }
}
</style>