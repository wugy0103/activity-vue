<template>
  <div class="countDownTemplate">
    <div class="text">
      — 距离9.15秋上新活动结束还剩 —
    </div>
    <count-down class="count-down" v-on:start_callback="countDownS_cb(1)" v-on:end_callback="countDownE_cb(2)" :endTime="1508255999" :dayTxt="'天'" :hourTxt="'时'" :minutesTxt="'分'" :secondsTxt="'秒'"></count-down>
  </div>
</template>
<script>
import CountDown from '../common/countdown'
export default {
  components: {
    CountDown
  },
  methods: {
    countDownS_cb: function (x) {
      console.log(x)
    },
    countDownE_cb: function (x) {
      console.log(x)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/_variable';
.countDownTemplate {
  width: 100%;
  background: $countDownBGC;
  overflow: hidden;
  text-align: center;
  .text {
    font-family: $PingFangStyle;
    font-size: 0.14rem;
    color: #FFFFFF;
    line-height: 0.34rem;
    text-align: center;
  }
  
}
</style>