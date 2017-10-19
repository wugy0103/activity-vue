<template>
  <div class="product">
    <a class="prodPic clear" href="javascript:;">
      <span class="userIcon ellipsis-lin2">8.28七狂欢节</span>
      <img src="../../images/prodpic.png" alt="">
    </a>
    <div class="prodInfo">
      <a href="javascript:;">
        <h3 class="ellipsis-lin2">PUMA(彪马)2017新款亮红色休闲跑步鞋</h3>
      </a>
      <div class="tag clear">
        <i class="manjian"></i>
        <i class="tejia"></i>
        <i class="miaosa"></i>
        <!-- <i class="userDefined">最多显示7个字</i> -->
      </div>
      <div class="price clear">
        <span>¥779.00</span>
        <a class="btn" href="javascript:;">去抢购</a>

      </div>
    </div>

  </div>
</template>
<style lang="scss" scoped>
@import '../../style/common';
.product {
  width: 100%;
  background-color: #fff;
  a {
    display: block;
    width: 100%;
  }
  .prodPic {
    position: relative;
    .userIcon {
      position: absolute;
      top: -0.04rem;
      right: 0.06rem;
      width: 0.384rem;
      height: 0.432rem;
      background: url(../../images/bg_activity@2x.png) no-repeat center;
      background-size: 0.384rem 0.432rem;
      font-family: $PingFangStyle;
      font-size: 0.12rem;
      color: #FFFFFF;
      line-height: 0.18rem;
      transform: scale(0.83);
      padding-top: 0.01rem;
      padding-left: 0.01rem;
    }
  }
  .prodInfo {
    padding: 0.1rem;
    h3 {
      font-family: $PingFangStyle;
      font-size: 0.14rem;
      line-height: 0.2rem;
      height: 0.4rem;
      color: #464854;
      margin-bottom: 0.1rem;
    }
    .tag {
      max-height: 0.34rem;
      overflow: hidden;
      margin-bottom: 0.15rem;
      i {
        float: left;
        height: 0.16rem;
        margin-right: 0.02rem;
        margin-bottom: 0.02rem;
        &.manjian {
          width: 0.28rem;
          background: #FFC0BF;
          border-radius: 1px;
          position: relative;
          &::after {
            content: '满减';
            position: absolute;
            font-family: $PingFangStyle;
            font-size: 0.12rem;
            color: #FF2C29;
            line-height: 0.16rem;
            width: 100%;
            text-align: center;
          }
        }
        &.tejia {
          width: 0.28rem;
          background: url(../../images/label_jingwai@2x.png) no-repeat center;
          background-size: 0.28rem 0.16rem;
        }
        &.miaosa {
          width: 0.4rem;
          background: url(../../images/label_miaosha@2x.png) no-repeat center;
          background-size: 0.4rem 0.16rem;
        }
        &.userDefined {
          font-family: $PingFangStyle;
          font-size: 0.12rem;
          color: #677ac2;
          line-height: 0.16rem;
          background-color: #e4e7f2;
          padding: 0 0.02rem;
        }
      }
    }
  }
  .price {
    .btn {
      float: right;
      background-color: $mainColor;
      border-radius: 0.3rem;
      color: #fff;
      width: 0.72rem;
      height: 0.28rem;
      line-height: 0.28rem;
      font-family: $PingFangStyle;
      font-size: 0.12rem;
      padding: 0 0.18rem;
    }
    span {
      float: left;
      font-family: $PingFangStyle;
      font-size: 0.16rem;
      color: $mainColor;
      line-height: 0.28rem;
    }
  }
}
</style>