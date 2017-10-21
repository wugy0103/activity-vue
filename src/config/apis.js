import ipConfig from './ipConfig'

// 专题Api地址
const topicApis = {
  // Sso登录地址
  ssoLoginUrl: ipConfig.ssoBaseUrl + 'sso/login',
  // 专题信息
  topicInfo: 'acSubject/getSubjectInfoById',
  // 微信分享参数api地址
  wechatUrl: 'wechat/wechatShare',
  // 服务器时间
  serverDate: 'acSubject/getNowDate'
}

export {
  topicApis
}
