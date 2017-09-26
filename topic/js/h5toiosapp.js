function isIOS() {
    //判断是否为IOS
    return navigator.platform === 'iPhone' ||
        navigator.platform === 'iPad' ||
        navigator.platform === 'iPod' ||
        navigator.platform === 'iPhone Simulator' ||
        navigator.platform === 'iPad Simulator' ||
        navigator.platform === 'iPod Simulator' ||
        navigator.platform === 'iPod touch' ||
        navigator.platform === 'iPod Touch';
}


function connectWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        callback(WebViewJavascriptBridge);
    } else {
        document.addEventListener('WebViewJavascriptBridgeReady', function() {
    		  callback(WebViewJavascriptBridge);
        }, false);
    }
}
// 初始化与iOS交互插件
connectWebViewJavascriptBridge(function(bridge) {
  bridge.init(function(message, responseCallback) {
       var data = { 'Javascript Responds':'Wee!' };
       responseCallback(data);
  });
});


//调用app方法
function H5callApp(func,json,callback){
    if(isIOS()){
        connectWebViewJavascriptBridge(function (bridge) {
            bridge.callHandler(func, json, function (responedata) {
                if(callback){
                    callback(responedata)
                }
            });
        });
    }else if(window.android) {
    	var H5callAppData;
    	if(JSON.stringify(json)=="{}"){
    		H5callAppData=window.android[func]();
    		if(callback){
    			callback(H5callAppData)
    		}
    	}else {
    		H5callAppData=window.android[func](JSON.stringify(json));
    		if(callback){
    			callback(H5callAppData)
    		}
    	}
        
    }else{
        console.info("请在健康猫APP打开！");
    }
}
//app调用h5
function IOSCallH5(func){
    if (isIOS()) {
        connectWebViewJavascriptBridge(function (bridge) {
            bridge.registerHandler(func, function (data, responseCallback) {
                responseCallback(window[func](data));
            });

        });
    }
}
//判断是否app环境
function isAppOpen() {
    var result = false;
    if (window.android) {
        result = android.isAppOpen();
    } else {
        var arr, reg = new RegExp("(^| )deviceType=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            result = unescape(arr[2]);
        }
    }
    return !!result;
}
var browser = {
   versions: function () {
       var u = navigator.userAgent, app = navigator.appVersion;
       return {         //移动终端浏览器版本信息
           trident: u.indexOf('Trident') > -1, //IE内核
           presto: u.indexOf('Presto') > -1, //opera内核
           webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
           gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
           mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
           ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
           android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
           iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
           iPad: u.indexOf('iPad') > -1, //是否iPad
           webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
       };
   }(),
   language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

function isWeiBo(){
	var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
	if (ua.match(/WeiBo/i) == "weibo")
        return true;
	return false;
}

function isQQ(){
	var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
	if (ua.match(/QQ/i) == "qq") 
        return true;
	return false;
}
function callIosApp(imgUrl,title,des,link){
	var data=null;
	connectWebViewJavascriptBridge(function(bridge) {
		bridge.callHandler("isAppOpen", data, function(response) { // 回调
			data = {'imgUrl':imgUrl,'title':title,'des':des,'url':link};
			bridge.callHandler('mallShare', data, function(response) {
				return true;
			});
	 	});
		return true;
	});
	return false;
}
