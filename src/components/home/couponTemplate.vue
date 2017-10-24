<template>
  <div class="couponTemplate">
    <singleTemplate v-if="!!headerPic" :imgArr="[{templatePic: headerPic}]"></singleTemplate>
    <div class="clear">
      <div class="usageBtn" @click="introduceAlert()">使用规则</div>
    </div>

    <ul class="clear">
      <li class="clear" v-for="(item, index) of couponArr" :key="item.couponId"  @click="getActiveCoupon(item.getStatus, item.drawCouponUrl)" :class="{
        deactive: item.getStatus === 3,
        one: couponArr.length === 1,
        actived: item.getStatus === 2
      }">
        <div class="pull-left">
          <div class="price">¥<b>{{ item.offPrice }}</b>
          </div>
          <i class="usage">{{ item.couponName }}</i>
          <span class="info ellipsis">{{ item.couponScope }}</span>
        </div>
        <a class="pull-right" href="javascript:;"></a>
      </li>
  			<li class="placeholder" v-if="(couponArr.length % 2 === 1) && couponArr.length > 1">
  				<a class="clear" href="javascript:;">
  					<img src="../../images/youhuijuan_placeholder@2x.png" width="100%" alt="">
  				</a>
  			</li>

    </ul>

  </div>
</template>

<script>
import singleTemplate from './singleTemplate.vue'
// 使用mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
export default {
  components: {
    singleTemplate,
    MintUI,
    axios
  },
  props: {
    // 优惠券规则title
    couponRuleTitle: {
      type: String,
      default: ''
    },
    // 优惠券规则content
    couponRuleContent: {
      type: String,
      default: ''
    },
    // 优惠券集合
    couponArr: {
      type: Array,
      default: []
    },
    // 头图
    headerPic: {
      type: String,
      default: ''
    }
  },
  computed: {
    couponRuleContentOfSplited () {
      let ruleArr = !this.couponRuleContent ? ['每个订单仅可使用一张优惠券；', '优惠券一经使用，不予退还；', '优惠券不可抵扣运费；', '优惠券使用最终解释权归健康商城所有。'] : this.couponRuleContent.split('/n')
      let ruleHtml = ''
      for (let i = 0; i < ruleArr.length; i++) {
        ruleHtml += '<li>' + ruleArr[i] + '</li>'
      }
      return '<ol>' + ruleHtml + '</ol>'
    }
  },
  methods: {
    introduceAlert () {
      MintUI.MessageBox({
        title: this.couponRuleTitle || '优惠券使用说明',
        message: this.couponRuleContentOfSplited,
        confirmButtonText: '我知道了',
        confirmButtonClass: 'confirmButtonClass'
      })
    },
    getActiveCoupon (status, url) {
      if (status === 1) {
        MintUI.Indicator.open()
        axios.get(url).then((res) => {
          console.log(res.data)
          MintUI.Indicator.close()
          MintUI.Toast({
            message: res.data.message || '接口异常！',
            className: 'Toast'
          })
        }, (rej) => {
          console.log('http://192.168.60.11:8184/shopManage/wechatShare', rej)
          MintUI.Indicator.close()
          MintUI.Toast({
            message: '网络繁忙！',
            className: 'Toast'
          })
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/common';
.couponTemplate {
  div.usageBtn {
    background: #FFFFFF;
    border: 0.01rem solid #A2A7BA;
    border-radius: 0.6rem;
    width: 0.76rem;
    height: 0.26rem;
    font-family: $PingFangStyle;
    font-size: 0.14rem;
    color: #464854;
    line-height: 0.26rem;
    float: right;
    margin-right: 0.08rem;
    margin-bottom: 0.06rem;
    text-align: center;
    cursor: pointer;
  }
  ul {
    li {
      float: left;
      width: 50%;
      height: 0.9rem;
      background: url(../../images/bg_youhuiquan_nor@2x.png) no-repeat center;
      background-size: 1.87rem 0.9rem;
      padding: 0.04rem 0.06rem 0.07rem;
      .pull-left {
        width: 1.03rem;
        height: 0.78rem;
        div.price {
          font-family: $HelveticaNeuestyle;
          font-size: 0.16rem;
          color: $mainColor;
          line-height: 0.16rem;
          margin-top: 0.05rem;
          margin-left: 0.12rem;
          b {
            font-family: $HelveticaNeuestyle;
            font-size: 0.25rem;
            color: $mainColor;
            line-height: 0.25rem;
          }
        }
        i.usage {
          font-family: $PingFangStyle;
          font-size: 0.12rem;
          transform: scale(0.83);
          color: #464854;
          line-height: 0.1rem;
          display: block;
          margin-top: 0.05rem;
          margin-left: 0.03rem;
          width: 100%;
        }
        span.info {
          font-family: $PingFangStyle;
          font-size: 0.12rem;
          transform: scale(0.83);
          color: #737787;
          margin-top: 0.15rem;
          margin-left: 0.03rem;
          display: block;
          width: 100%;
        }
      }
      .pull-right {
        width: 0.72rem;
        height: 0.78rem;
        font-family: $PingFangStyle;
        font-size: 0.12rem;
        color: #FFFFFF;
        line-height: 0.78rem;
        text-align: center;
        &::after {
          content: '领取';
        }
      }
    }
    li.placeholder {
      background: none;
      padding: 0;
      a {
        display: block;
      }
      img {
        float: left;
      }
    }
    li.deactive {
      background: url(../../images/bg_youhuiquan_nothing@2x.png) no-repeat center;
      background-size: 1.87rem 0.9rem;
      .price,
      i,
      b,
      span {
        color: #A2A7BA !important;
      }
      a {
        &::after {
          content: '已抢光';
        }
      }
    }
    li.one {
      width: 2.57rem;
      background: url(../../images/bg_youhuiquan_nor_long@2x.png) no-repeat center;
      background-size: 2.57rem 0.9rem;
      margin-left: 0.59rem;
      .pull-left {
        width: 1.7rem;
        i,
        span {
          margin-left: -0.03rem !important;
        }
      }
    }
    li.one.deactive {
      background: url(../../images/bg_youhuiquan_nothing_long@2x.png) no-repeat center;
      background-size: 2.57rem 0.9rem;
      .price,
      i,
      b,
      span {
        color: #A2A7BA !important;
      }
      a {
        &::after {
          content: '已抢光';
        }
      }
    }
    li.actived {
      a {
        &::after {
          content: '已领取';
        }
      }
    }
  }
  
}
</style>