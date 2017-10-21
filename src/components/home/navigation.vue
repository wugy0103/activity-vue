<template>
  <div class="navigation" :class="{ active: showFlag === true}">
    <ul class="clear anchor">
        <li v-for="(item, index) of anchorContentOfSplited" :class="{ active: index === 0}" :key="item" @click="activeLi(item,index)">{{ item }}</li>
    </ul>
    <a href="javascript:;" @click="switchanchorContent()" :class="{ active: showFlag === true}"></a>
    <transition name="slide-fade">
      <ul class="clear anchorContent" v-show="showFlag">
        <li v-for="(item, index) of anchorContentOfSplited" :class="{ active: index === 0}" :key="item" @click="activeLi(item,index)">{{ item }}</li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showFlag: false
    }
  },
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
      this.showFlag = !this.showFlag
    },
    activeLi (mid, index) {
      this.removeClass(document.querySelector('.anchor li.active'), 'active')
      this.removeClass(document.querySelector('.anchorContent li.active'), 'active')
      this.addClass(document.querySelectorAll('.anchor li')[index], 'active')
      this.addClass(document.querySelectorAll('.anchorContent li')[index], 'active')
    },
    scrollToModel (mid) {
      // document.body.scrollTop = self.scrollTop + speed;
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
      background: #464854;
    }
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
        z-index: 2;
        right: 0;
        top: 0;
        background: #464854;
        box-shadow: inset 0 0 0 0 #E4E7F2;
        border-left: 0.5px solid #999;
        width: 0.4rem;
        height: 0.4rem;
        background: url(../../images/icon_down@2x.png) no-repeat center;
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