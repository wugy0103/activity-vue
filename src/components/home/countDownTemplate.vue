<template>
  <div :id="id" class="countDownTemplate" :class="{ backStyle: fontColor==='0' }">
    <div class="text">
      — 距离{{ shortTitle }}活动结束还剩 —
    </div>
    <count-down class="count-down" v-on:start_callback="countDownS_cb('start')" v-on:end_callback="countDownE_cb('end')" :current="current" :endTime="endTime" :dayTxt="'天'" :hourTxt="'时'" :minutesTxt="'分'" :secondsTxt="'秒'" :backStyle="fontColor"></count-down>
  </div>
</template>
<script>
import CountDown from '../common/countdown'
export default {
  components: {
    CountDown
  },
  props: {
    current: {
      type: Number,
      default: ''
    },
    endTime: {
      type: Number,
      default: ''
    },
    countdownBg: {
      type: String,
      default: ''
    },
    fontColor: {
      type: String,
      default: ''
    },
    shortTitle: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    }
  },
  methods: {
    countDownS_cb: function (x) {
      console.log(x)
    },
    countDownE_cb: function (x) {
      console.log(x)
      alert("倒计时结束")
      this.$router.replace({
        name: 'timeout',
        params: {
          type: 2,
          error: '活动结束啦，下次早点来哦'
        }
      })
    }
  },
  mounted () {
    document.querySelector('.countDownTemplate').setAttribute('style', 'background: url(' + this.countdownBg + ') repeat left top')
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/common';
.countDownTemplate {
  width: 100%;
  background: none;
  overflow: hidden;
  text-align: center;
  .text {
    font-family: $PingFangStyle;
    font-size: 0.14rem;
    color: #FFFFFF;
    line-height: 0.34rem;
    text-align: center;
  }
  &.backStyle {
    .text {
      color: #464854;
    }
  }
  
}
</style>