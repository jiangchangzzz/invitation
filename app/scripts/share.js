'use strict';

document.addEventListener('DOMContentLoaded',function(){
    var hash=location.hash;
    var inviter='';
    if(hash){
        hash=hash.slice(1);
        hash=decodeURIComponent(hash);
        if(checkExist(lecturers,hash) || checkExist(guests,hash)){
            inviter=hash;
        }   
    }

    var title = `${inviter}诚邀您出席IMWebConf2017前端开发者大会`;
    var title1 = `${inviter}诚邀您出席IMWebConf2017前端开发者大会`;
    var desc = 'IMWebConf2017前端大会即将在深圳科兴国际会议中心举行，届时，W3C、微软、Google、腾讯、阿里等业内专家将出席并分享实践经验。';
    var link = window.location.href;
    var imgUrl = 'http://m.2017.imweb.io/share.jpg';


    var timestamp = parseInt(new Date().getTime() / 1000, 10);
    var nonceStr = 'R' + parseInt(Math.random() * 1000000, 10);
    var url = window.location.href.replace(/#.*$/, '');
    var signature = '';

    fetchJsonp(`http://imweb.io/wx/signature?noncestr=${nonceStr}&timestamp=${timestamp}&url=${url}`,{
            timeout: 5000,
            jsonpCallbackFunction: 'callback'
        })
        .then(function(response){
            return response.json();
        }).then(function(json){
            signature = json.signature;
            console.log('ajax response result:', json);
            initWXAPI();
        }).catch(function(e){
            //请求出错处理
            console.error('获取weixin签名失败', e);
        });

    // $.ajax({
    //     url: 'http://imweb.io/wx/signature',
    //     type: "GET",
    //     dataType: 'jsonp',
    //     jsonp: 'callback',
    //     data: {
    //         noncestr: nonceStr,
    //         timestamp: timestamp,
    //         url: url
    //     },
    //     timeout: 5000,
    //     success: function (result) {
    //         signature = result.signature;
    //         console.log('ajax response result:', result)
    //         initWXAPI();
    //     },
    //     error: function (xhr) {
    //         //请求出错处理
    //         console.error('获取weixin签名失败', xhr);
    //     }
    // });


    var initWXAPI = function () {
        var configParams = {
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: 'wxd5841c34c4a7470a', // 必填，公众号的唯一标识
            timestamp: timestamp, // 必填，生成签名的时间戳
            nonceStr: nonceStr, // 必填，生成签名的随机串
            signature: signature, // 必填，签名，见附录1
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        };

        wx.config(configParams);

        wx.ready(function () {
            wx.onMenuShareTimeline({
                title: title1, // 分享标题
                link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
            wx.onMenuShareAppMessage({
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
            wx.onMenuShareQQ({
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: link, // 分享链接
                imgUrl: imgUrl, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
            wx.onMenuShareWeibo({
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: link, // 分享链接
                imgUrl: imgUrl, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
            wx.onMenuShareQZone({
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: link, // 分享链接
                imgUrl: imgUrl, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
        });

        wx.error(function (res) {
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
            console.error(res);
        });
    };  

    function checkExist(collection,name){
        return collection.some(function(item){
            if(item.name===name){
                return true;
            }
            else{
                return false;
            }
        })
    }
});