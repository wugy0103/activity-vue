import {
  topicApis
} from './apis'
import {
  Toast
} from 'mint-ui'
/**
 * 接口调用配置
 */

const AxiosConfig = {
  getParameter (name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    let r = window.location.href.substr(1).match(reg)
    if (r !== null) return decodeURIComponent(r[2])
    return null
  },
  install (Vue, axios) {
    // 缓存作用域
    let self = this
    axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
    // 携带上次的token
    axios.defaults.withCredentials = true

    // 请求拦截器
    axios.interceptors.request.use(function (config) {
      // Do something before request is sent
      // 添加Ucenter登录验证
      let uumsUsername = self.getParameter('ucenter_username')
      let uumsCode = self.getParameter('accessToken')
      let url = config.url
      if (uumsCode && uumsUsername) {
        url += '?ucenter_code=' + uumsCode + '&ucenter_username=' + uumsUsername
      }
      config.url = url
      return config
    }, function (error) {
      // Do something with request error
      return Promise.reject(error)
    })

    // 响应拦截器
    axios.interceptors.response.use(function (response) {
      let resultCode = response.data.resultCode
      if (resultCode) {
        switch (resultCode) {
          case 417:
            let location = window.location.href
            // 跳转到SSO
            window.location.href = topicApis.ssoLoginUrl + '?backurl=' + encodeURIComponent(location)
            break
          case 500:
            // alert('网络繁忙')
            let instance = Toast({
              message: '网络繁忙',
              iconClass: 'iconfont icon-cuowuguanbiquxiao-xianxingyuankuang'
            })
            setTimeout(function () {
              instance.close()
            }, 1000)
            break
        }
      }
      // Do something with response data
      return response
    }, function (error) {
      let status = error.response.status
      switch (status) {
        case 401:
          let location = window.location.href
          // 跳转到SSO
          window.location.href = topicApis.ssoLoginUrl + '?backurl=' + encodeURIComponent(location)
          break
        case 504:
          // alert('请求超时')
          let instance = Toast({
            message: '请求超时',
            iconClass: 'iconfont icon-cuowuguanbiquxiao-xianxingyuankuang'
          })
          setTimeout(function () {
            instance.close()
          }, 1000)
          break
        default:
          // alert('服务器正忙')
          let instances = Toast({
            message: '服务器繁忙',
            iconClass: 'iconfont icon-cuowuguanbiquxiao-xianxingyuankuang'
          })
          setTimeout(function () {
            instances.close()
          }, 1000)
          break
      }
      // Do something with response error
      return Promise.reject(error)
    })

    Vue.axios = axios

    Object.defineProperties(Vue.prototype, {

      axios: {
        get () {
          return axios
        }
      },

      $ajax: {
        get () {
          return axios
        }
      }

    })
  }
}

export default AxiosConfig
