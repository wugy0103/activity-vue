var wechatConfig = {
    getConfig: function() {
        //生成微信接口配置，缓存2小时-10分钟 = 6600秒
        var dfd = $.Deferred();
        var href = location.href.split('#')[0];
        var localWechatConfig = localStorage.wechatConfig;
        var lastTimestamp = !!localWechatConfig ? Date.parse(new Date(JSON.parse(localWechatConfig).time)) : 0;
        var url = !!localWechatConfig ? JSON.parse(localWechatConfig).url : null;
        if (!localWechatConfig || (this.getTime() - lastTimestamp) > 6600000 || href!=url) {
            $.ajax({
                url: 'http://activity.daxmall.com/common/getSignature',
                type: 'get',
                data: { url: location.href.split('#')[0] },
                success: function(data) {
                    if (!data.error && data.ConfigData) {
                        console.info("from api");
                        localStorage.wechatConfig = JSON.stringify(data.ConfigData);
                        dfd.resolve(data.ConfigData.config);
                    } else {
                        dfd.reject(data);
                    }
                }
            });
        } else {
            console.info("from localStorage");
            dfd.resolve(JSON.parse(localWechatConfig).config);
        }
        return dfd.promise();
    },
    getTime: function() {
        //获取服务器当前时间
        var now = 0;
        $.ajax({
            url: 'http://activity.daxmall.com/common/getTime',
            type: 'get',
            async: false,
            success: function(time) {
                now = Date.parse(new Date(time.serverTime));
            }
        });
        return now;
    },
    init: function() {
        return $.when(this.getConfig()).done(function(config) {
            wx.config({
                appId: config.appId,
                timestamp: config.timestamp,
                nonceStr: config.nonceStr,
                signature: config.signature,
                jsApiList: ['checkJsApi',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',
                    'hideMenuItems',
                    'chooseImage'
                ]
            });
        });
    }
}
