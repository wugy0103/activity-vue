/**
 * 与移动端交互常用接口
 * @type {Object}
 */
const DxHybrid = {
  init () {
    this.connectWebViewJavascriptBridge(function (bridge) {
      bridge.init(function (message, responseCallback) {
        var data = {
          'Javascript Responds': 'Wee!'
        }
        responseCallback(data)
      })
    })
  },
  /**
   * 判断是否为ios客户端
   */
  isIOS: () => {
    // 判断是否为IOS
    return navigator.platform === 'iPhone' ||
      navigator.platform === 'iPad' ||
      navigator.platform === 'iPod' ||
      navigator.platform === 'iPhone Simulator' ||
      navigator.platform === 'iPad Simulator' ||
      navigator.platform === 'iPod Simulator' ||
      navigator.platform === 'iPod touch' ||
      navigator.platform === 'iPod Touch'
  },
  'connectWebViewJavascriptBridge': (callback) => {
    if (window.WebViewJavascriptBridge) {
      callback(window.WebViewJavascriptBridge)
    } else {
      document.addEventListener('WebViewJavascriptBridgeReady', function () {
        callback(window.WebViewJavascriptBridge)
      }, false)
    }
  },
  /**
   *  H5调用 App
   * @param func api 名称
   * @param json json 参数
   * @param callback 回调方法
   */
  H5callApp (func, json, callback) {
    if (this.isIOS()) {
      this.connectWebViewJavascriptBridge(function (bridge) {
        bridge.callHandler(func, json, function (responedata) {
          if (callback) {
            callback(responedata)
          }
        })
      })
    } else if (window.android) {
      let H5callAppData
      if (JSON.stringify(json) === '{}') {
        H5callAppData = window.android[func]()
        if (callback) {
          callback(H5callAppData)
        }
      } else {
        H5callAppData = window.android[func](JSON.stringify(json))
        if (callback) {
          callback(H5callAppData)
        }
      }
    } else {
      console.info('请在健康猫APP打开！')
    }
  },
  /**
   * ios调用h5
   * @param func 回调函数
   */
  IOSCallH5 (func) {
    if (this.isIOS()) {
      this.connectWebViewJavascriptBridge(function (bridge) {
        bridge.registerHandler(func, function (data, responseCallback) {
          responseCallback(window[func](data))
        })
      })
    }
  },
  /**
   * app调用h5
   * ios调用h5优化
   * @param func api 名称
   * @param callback 回调方法
   */
  APPCallH5 (func, callback) {
    if (this.isIOS()) {
      this.connectWebViewJavascriptBridge(function (bridge) {
        bridge.registerHandler(func, function (data, responseCallback) {
          responseCallback(callback(data))
        })
      })
    } else {
      window[func] = callback
    }
  },
  /**
   * 判断是否app环境
   */
  isAppOpen () {
    let result = false
    if (window.android) {
      result = window.android.isAppOpen()
    } else {
      let reg = new RegExp('(^| )deviceType=([^;]*)(;|$)')
      let arr = document.cookie.match(reg)
      if (arr !== null) {
        result = unescape(arr[2])
      }
    }
    return !!result
  },
  browser: {
    versions: () => {
      let u = navigator.userAgent
      return { // 移动终端浏览器版本信息
        trident: u.indexOf('Trident') > -1, // IE内核
        presto: u.indexOf('Presto') > -1, // opera内核
        webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或uc浏览器
        iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, // 是否iPad
        webApp: u.indexOf('Safari') === -1 // 是否web应该程序，没有头部与底部
      }
    },
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
  },
  /**
   * 是否为微博环境
   */
  isWeiBo () {
    var ua = navigator.userAgent.toLowerCase() // 获取判断用的对象
    return ua.match(/WeiBo/i) === 'weibo'
  },
  /**
   * 是否为QQ环境
   */
  isQQ () {
    var ua = navigator.userAgent.toLowerCase() // 获取判断用的对象
    return ua.match(/QQ/i) === 'qq'
  },
  /**
   * 调用IOS APP
   * @param imgUrl 图片地址（全路径）
   * @param title 标题
   * @param des 描述
   * @param link 跳转链接
   */
  callIosApp (imgUrl, title, des, link) {
    let data = null
    this.connectWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler('isAppOpen', data, function (response) { // 回调
        data = {
          'imgUrl': imgUrl,
          'title': title,
          'des': des,
          'url': link
        }
        bridge.callHandler('mallShare', data, function (response) {
          return true
        })
      })
      return true
    })
    return false
  },
  /**
   * 打开APP
   */
  openApp () {
    // 跳转到APP指定页面
    var scheme = 'healthmallapp://healthmall.tv'
    // 应用宝地址
    var url = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.zhanyun.ihealth'

    function trigger () {
      // 先尝试唤起app
      window.location.href = scheme
      setTimeout(function () {
        // 同时打开应用宝
        window.location.href = url
      }, 1000)
    }
    trigger()
  }

}

// 初始化与iOS交互插件
DxHybrid.init()

export {
  DxHybrid
}
