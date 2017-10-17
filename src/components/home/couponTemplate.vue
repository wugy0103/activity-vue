<template>
  <div class="couponTemplate">
    <!-- <div class="header">
  			<a class="pull-left" href="javascript:;">
  				<img class="pull-left" src="../../images/toutu.png" width="100%" alt="png">
  			</a>
  		</div> -->
    <singleTemplate></singleTemplate>
    <div class="clear">
      <div class="usageBtn">使用规则</div>
    </div>

    <ul class="clear">
      <li class="clear">
        <div class="pull-left">
          <div class="price">¥
            <b>200</b>
          </div>
          <i class="usage">满¥1000使用</i>
          <span class="info ellipsis">全场满减商品通用</span>
        </div>
        <a class="pull-right" href="javascript:;"></a>
      </li>
      <li class="clear deactive">
  				<div class="pull-left">
  					<div class="price">¥
  						<b>200</b>
  					</div>
  					<i class="usage">满¥1000使用</i>
  					<span class="info ellipsis">全场满减商品通用</span>
  				</div>
  				<a class="pull-right" href="javascript:;"></a>
  			</li>
  			<li class="clear">
  				<div class="pull-left">
  					<div class="price">¥
  						<b>200</b>
  					</div>
  					<i class="usage">满¥1000使用</i>
  					<span class="info ellipsis">全场满减商品通用</span>
  				</div>
  				<a class="pull-right" href="javascript:;"></a>
  			</li>
  			<li class="placeholder">
  				<a class="clear" href="javascript:;">
  					<img src="../../images/youhuijuan_placeholder@2x.png" width="100%" alt="">
  				</a>
  			</li>

    </ul>

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
}
</style>