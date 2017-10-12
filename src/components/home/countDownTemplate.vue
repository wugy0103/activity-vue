<template>
  <div class="countDownTemplate">
    <div class="text">
      —— 距离9.15秋上新活动结束还剩 ——
    </div>
    <counter :endDate='1507810620' :startDate='1507744740'></counter>
  </div>
</template>
<script>
import counter from '../common/countdown.vue'
export default {
  components: {
    // 倒计时组件
    counter
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
    color: $countDownFontColor;
    line-height: 0.28rem;
    margin-bottom: 0.1rem;
  }
}
</style>