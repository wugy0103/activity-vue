<template>
  <div class='timeout'>
      <div class='bg' :style='backgroundImage'></div>
      <p>{{ text }}</p>
      <div class='btn' @click='goHome()'>
        <mainBtn></mainBtn>
      </div>
  </div>
</template>

<script>
import mainBtn from '../../components/common/mainBtn'
import ipConfig from '../../config/ipConfig'
export default {
  components: {
    mainBtn
  },
  data () {
    return {
      backgroundImage: {
        'background-image': 'url(/static/images/bg_star@2x.png)'
      },
      text: this.$route.params.error || '喵！该网页被猫吃，请检查URL是否正确'
    }
  },
  methods: {
    goHome () {
      window.location.href = ipConfig.mShopUrl
    },
    changeData () {
      if (this.$route.params.type === '2') {
        this.backgroundImage = {
          'background-image': 'url(/static/images/bg_end@2x.png)'
        }
      }
    }
  },
  mounted () {
    this.changeData()
    console.log(this.$route.params)
  }
}
</script>

<style lang='scss' scoped>
@import '../../style/common';
.timeout {
  width: 100%;
  max-width: 768px;
  min-width: 300px;
  min-height: 100%;
  margin: 0 auto;
  background: #f5f6fa;
  overflow: hidden;
  text-align: center;
  .bg {
    width: 2.91rem;
    height: 3.36rem;
    margin: 0.59rem auto 0.3rem;
    background: url(../../images/bg_end@2x.png) no-repeat center;
    background-size: 2.91rem 3.36rem;
  }
  p {
    font-family: $PingFangStyle;
    font-size: 0.16rem;
    color: #464854;
    line-height: 0.16rem;
    text-align: center;
  }
  .btn {
    margin: 0.5rem auto;
  }
}
</style>

