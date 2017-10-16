<template>
  <div class="countDownTemplate">
    <div class="text">
      — 距离9.15秋上新活动结束还剩 —
    </div>
    <count-down class="count-down" v-on:start_callback="countDownS_cb(1)" v-on:end_callback="countDownE_cb(2)" :currentTime="1481450106" :startTime="1481450110" :endTime="1681450115" :tipText="'距离开始文字1'" :tipTextEnd="'距离结束文字1'" :endText="'结束自定义文字2'" :dayTxt="'天'" :hourTxt="'小时'" :minutesTxt="'分钟'" :secondsTxt="'秒'"></count-down>
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
  .count-down {
    font-family: $HelveticaNeuestyle;
    font-size: 0.18rem;
    color: $countDownForeColor;
    line-height: 0.28rem;
    margin-bottom: 0.1rem;
  }
}
</style>