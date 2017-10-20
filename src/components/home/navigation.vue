<template>
  <div class="navigation">
    <ul class="clear anchor">
        <li v-for="(item, index) of anchorContentOfSplited" :class="{ active: index === 0}" :key="item">{{ item }}</li>
    </ul>
    <a href="javascript:;" @click="switchanchorContent()"></a>
    <ul class="clear anchorContent">
        <li v-for="(item, index) of anchorContentOfSplited" :class="{ active: index === 0}" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    // 锚点内容
    anchorContent: {
      type: String,
      default: ''
    }
  },
  computed: {
    anchorContentOfSplited () {
      return this.anchorContent.split(',')
    }
  },
  methods: {
    switchanchorContent () {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/common';
.navigation {
    width: 100%;
    height: 0.4rem;
    background: #464854;
    overflow: hidden;
    position: relative;
    ul.anchor>li {
        float: left;
        height: 0.4rem;
        line-height: 0.4rem;
        margin-left: 0.25rem;
        font-size: 0.14rem;
        color: #FFFFFF;
        position: relative;
        cursor: pointer;
        &.active::before {
            content: '';
            position: absolute;
            width: 0.25rem;
            height: 0.4rem;
            left: -0.25rem;
            top: -0.01rem;
            background: url(../../images/icon_dingwie_red@2x.png) no-repeat center;
            background-size: 0.1rem 0.13rem;
        }
    }
    &>a {
        position: absolute;
        right: 0;
        top: 0;
        background: #464854;
        box-shadow: inset 0 0 0 0 #E4E7F2;
        border-left: 0.5px solid #E4E7F2;
        width: 0.4rem;
        height: 0.4rem;
        background: url(../../images/icon_down@2x.png) no-repeat center;
        background-size: 0.12rem 0.07rem;
    }
    ul.anchorContent {
        width: 100%;
        position: absolute;
        z-index: 10;
        top: 0.4rem;
        left: 0;
        background: #464854;
        &>li {
            float: left;
            width: 33.333333%;
            height: 0.4rem;
            line-height: 0.4rem;
            text-align: center;
            font-size: 0.14rem;
            color: #FFFFFF;
            cursor: pointer;
            &.active::before {
                content: '';
                position: absolute;
                width: 0.25rem;
                height: 0.4rem;
                margin-left: -0.25rem;
                margin-top: -0.01rem;
                background: url(../../images/icon_dingwie_red@2x.png) no-repeat center;
                background-size: 0.1rem 0.13rem;
            }
        }
    }
}
</style>