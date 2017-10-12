<template>
  <div>
    <div :class="['end-time',{'auction-endtime':wantStyle=='auction-endtime','myCash':wantStyle=='myCash','myGetSale':wantStyle=='myGetSale'}]" v-if="isGoing">
      <span v-show="wantStyle!='auction-endtime'&&wantStyle!='myCash'&&wantStyle!='myGetSale'">距离结束：</span>
      <span>{{time}}</span>
    </div>
    <div :class="['end-time',{'auction-endtime':wantStyle=='auction-endtime','myCash':wantStyle=='myCash','myGetSale':wantStyle=='myGetSale'}]" v-else-if='isnotStrat'>
      <span v-show="wantStyle!='auction-endtime'&&wantStyle!='myCash'&&wantStyle!='myGetSale'">距离开始：</span>
      <span>{{time}}</span>
    </div>
    <div :class="['end-time',{'auction-endtime':wantStyle=='auction-endtime','myCash':wantStyle=='myCash','myGetSale':wantStyle=='myGetSale'}]" v-else-if='isEnd'>
      <span>活动已结束</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      now: 0,
      //各种状态标识
      isGoing: false,
      isnotStrat: false,
      isEnd: false,
      //倒计时初始数据
      time: '----',
      //定时器
      timer: '',
      // 阻止第一次初始化组件时间为结束时改变全部countdownArr值
      canPush: false
    };
  },
  props: ['endDate', 'startDate', 'wantStyle'],
  methods: {
    formate(time) {
      var days = Math.floor(time / 1000 / 60 / 60 / 24)
      var hour = parseInt(time / 1000 / 60 / 60 % 24)
      var min = Math.floor(time / 1000 / 60 % 60)
      var sec = Math.floor(time / 1000 % 60)
      if (days < 10) {
        days = "0" + days;
      }
      if (hour < 10) {
        hour = "0" + hour;
      }
      if (min < 10) {
        min = "0" + min;
      }
      if (sec < 10) {
        sec = "0" + sec;
      }
      return days + '天' + hour + '时' + min + '分' + sec + '秒'
    }
  },
  watch: {
    time2(newVal, oldVal) {
      this.time = newVal

    }
  },
  computed: {
    time2: function() {

      //开始时间-当前时间，大于为未开始，小于为进行时
      /*  var Notbegin = this.formate(new Date(this.startDate).getTime() - this.now); */
      var Notbegin = new Date(this.startDate).getTime() - this.now;
      //结束时间-当前时间，大于为进行中，小于为已结束
      /* var onGoingTime = this.formate(new Date(this.endDate).getTime() - this.now); */
      var onGoingTime = new Date(this.endDate).getTime() - this.now;
      var scountdown;
      // console.log(onGoingTime);
      if (Notbegin > 0) {
        this.isnotStrat = true;
        this.isGoing = false;
        this.isEnd = false;
        scountdown = this.formate(Notbegin)
      } else if (Notbegin <= 0 && onGoingTime > 0) {
        this.isnotStrat = false;
        this.isGoing = true;
        this.isEnd = false;
        scountdown = this.formate(onGoingTime)
      } else if (onGoingTime <= 0) {
        this.isnotStrat = false
        this.isGoing = false
        this.isEnd = true
        scountdown = ''
        // 当结束时清除定时器
        clearInterval(this.timer)
        // 给全局的倒计时标志数组添加值--?莫名向数组添加201次
        if (this.canPush === true) {
          this.$store.state.countdownArr.push(true)
        } else { this.canPush = true }
      }
      /* console.log(scountdown); */
      return scountdown
    }
  },
  mounted() {
    let self = this;
    this.timer = setInterval(function() {
      self.now = new Date().getTime();
    }, 1000)
  }

}
</script>
<style lang="scss" scoped>
@import '../../style/common';
@import '../../style/_variable';
.end-time {
  font-family: $PingFang-SC-style;
  font-size: 0.12rem;
  color: $textColorDarker;
  letter-spacing: 0;
}

.end-time span {
  color: $gradualColorLight;
} // 我的竞拍页面定时器所需样式
.auction-endtime {
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
  color: $textColorLight;
  font-size: 0.14rem;
  height: 0.14rem;
  span {
    &:nth-child(1) {
      color: $textColorLight;
      font-size: 0.14rem;
    }
    &:nth-child(2) {
      color: $backgroundMainColor;
      font-size: 0.14rem;
      margin-left: 0.98rem
    }
  }
} // 我的保证金/我的获拍页面定时器样式
.myCash,
.myGetSale {

  font-size: 0.12rem;
  position: absolute;
  left: 0.15rem;
  top: 0.11rem;
  height: 0.12rem;

  span {
    &:nth-child(2) {
      color: $backgroundMainColor!important;
    }
  }
}

.myGetSale {
  span {
    &:nth-child(1) {
      color: $backgroundMainColor!important;
    }
  }
}
</style>
