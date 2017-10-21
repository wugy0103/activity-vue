<template>
  <div class="product">
    <a class="prodPic clear" :href="mShopUrl + 'views/' + product.prodId">
      <span class="userIcon ellipsis-lin2">{{ product.cornerTag }}</span>
      <img :src="product.pic">
    </a>
    <div class="prodInfo">
      <a href="javascript:;">
        <h3 class="ellipsis-lin2">{{ product.name }}</h3>
      </a>
      <div class="tag clear">
        <i class="userDefined" v-for="(item,index) of wordMarkTag" :key="index">{{ item }}</i>
        <i v-for="(item,index) of activityTags" :key="index" :class="{
          manjian: item === '3',
          tejia: item === '2',
          miaosa: item === '1',
        }"></i>
      </div>
      <div class="price clear">
        <span>¥{{ product.cash }}</span>
        <a class="btn" :href="mShopUrl + 'views/' + product.prodId">去抢购</a>

      </div>
    </div>

  </div>
</template>

<script>
import ipConfig from '../../config/ipConfig'
export default {
  components: {
    ipConfig
  },
  data () {
    return {
      mShopUrl: ipConfig.mShopUrl
    }
  },
  props: {
    // 商品集合
    product: {
      type: Object,
      default: {}
    }
  },
  computed: {
    wordMarkTag () {
      return this.product.wordMarkTag.split(',')
    },
    activityTags () {
      return this.product.activityTags.split(',')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/common";
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
      color: #ffffff;
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
      height: 0.34rem;
      overflow: hidden;
      margin-bottom: 0.15rem;
      i {
        float: left;
        height: 0.16rem;
        margin-right: 0.02rem;
        margin-bottom: 0.02rem;
        &.manjian {
          width: 0.28rem;
          background: #ffc0bf;
          border-radius: 1px;
          position: relative;
          &::after {
            content: "满减";
            position: absolute;
            font-family: $PingFangStyle;
            font-size: 0.12rem;
            color: #ff2c29;
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