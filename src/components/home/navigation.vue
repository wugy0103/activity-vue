<template>
  <div class="navigation" :class="{ active: showFlag === true, fixed: fixed === true, whileStyle: anchorColor === '1'}">
    <div style="overflow:hidden;">
      <ul class="clear anchor">
        <li v-for="(item, index) of anchorContentList" :class="{ active: item.templateId === anchorLocation }" :key="item.templateId" @click="activeLi(item.templateId,index)">{{ item.templateName }}</li>
    </ul>
    </div>
    <a href="javascript:;" @click="switchanchorContent()" :class="{ active: showFlag === true}"></a>
    <transition name="slide-fade">
      <ul class="clear anchorContent" v-show="showFlag">
        <li class="ellipsis" v-for="(item, index) of anchorContentList" :class="{ active: item.templateId === anchorLocation }" :key="item.templateId" @click="activeLi(item.templateId,index)">{{ item.templateName }}</li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showFlag: false,
      fixed: false,
      click: 0
    }
  },
  props: {
    // 锚点内容
    anchorContentList: {
      type: Array,
      default: []
    },
    anchorLocation: {
      type: String,
      default: ''
    },
    anchorColor: {
      type: String,
      default: '0'
    }
  },
  methods: {
    switchanchorContent () {
      this.showFlag = !this.showFlag
    },
    activeLi (mid, index) {
      // 样式处理
      this.removeClass(document.querySelector('.anchor li.active'), 'active')
      this.removeClass(document.querySelector('.anchorContent li.active'), 'active')
      this.addClass(document.querySelectorAll('.anchor li')[index], 'active')
      this.addClass(document.querySelectorAll('.anchorContent li')[index], 'active')
      this.fixed = true
      this.click += 1
      let rem = document.documentElement.style.fontSize.split('px')[0]
      let navHeight = this.click > 1 ? 0.4 * rem : 2 * 0.4 * rem
      this.scrollToModel(mid, navHeight)
    },
    scrollToModel (mid, navHeight) {
      window.scrollTo(0, document.getElementById(mid).offsetTop - navHeight)
    },
    hasClass (elem, cls) {
      cls = cls || ''
      if (cls.replace(/\s/g, '').length === 0) return false
      // 当cls没有参数时，返回false
      return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ')
    },
    addClass (elem, cls) {
      if (!this.hasClass(elem, cls)) {
        elem.className = elem.className === '' ? cls : elem.className + ' ' + cls
      }
    },
    removeClass (elem, cls) {
      if (this.hasClass(elem, cls)) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' '
        while (newClass.indexOf(' ' + cls + ' ') >= 0) {
          newClass = newClass.replace(' ' + cls + ' ', ' ')
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '')
      }
    }
  },
  mounted () {
    let that = this
    window.onscroll = function () {
      if (document.body.scrollTop >= document.querySelector('.navigation').offsetTop) {
        that.fixed = true
        that.click = 1
      }
      if (document.body.scrollTop <= document.getElementById(that.anchorLocation).offsetTop) {
        that.fixed = false
        that.click = 0
      }
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
  position: relative;
  &.active::before {
    content: '切换楼层';
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 0.4rem;
    left: 0rem;
    top: 0rem;
    font-size: 0.14rem;
    color: #737787;
    line-height: 0.4rem;
    padding-left: 0.1rem;
    box-sizing: border-box;
    background: #464854;
  }
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }
  ul.anchor {
    height: 0.4rem;
    overflow: hidden;
    width: 200%;
  }
  ul.anchor>li {
      float: left;
      height: 0.4rem;
      line-height: 0.4rem;
      margin-left: 0.25rem;
      font-size: 0.14rem;
      color: #E4E7F2;
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
      &.active {
        color: #fff;
      }
  }
  &>a {
      position: absolute;
      z-index: 2;
      right: 0;
      top: 0;
      background: #464854;
      box-shadow: inset 0 0 0 0 #E4E7F2;
      border-left: 0.5px solid #999;
      width: 0.4rem;
      height: 0.4rem;
      background:#464854 url(../../images/icon_down@2x.png) no-repeat center;
      background-size: 0.12rem 0.07rem;
      &.active {
        transform: rotate(180deg)
      }
  }
  ul.anchorContent {
      width: 100%;
      position: absolute;
      z-index: 10;
      top: 0.4rem;
      left: 0;
      background: rgba(70,72,84,0.95);
      &>li {
          float: left;
          width: 33.333333%;
          height: 0.4rem;
          line-height: 0.4rem;
          text-align: center;
          font-size: 0.14rem;
          color: #E4E7F2;
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
          &.active {
            color: #fff;
          }
      }
  }
  &.whileStyle {
    background: #FFFFFF;
    box-shadow: 0 2px 6px 0 #E4E7F2;
    &.active::before {
      color: #737787;
      background: #FFFFFF;
    }
    ul.anchor>li {
      color: #464854;
      &.active {
        color: #FF2C29;
      }
    }
    &>a {
      background-color: #ffffff;
      box-shadow: inset 0 0 0 0 #E4E7F2;
      border-left: 0.5px solid #E4E7F2;
    }
    ul.anchorContent {
      background: rgba(255,255,255,0.95);
      &>li {
        color: #464854;
        &.active {
          color: #FF2C29;
        }
      }
    }
  }
}
</style>