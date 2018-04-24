/**
 * Mobile Redirect 用于检测是否手持设备访问并跳转到指定URL
 * @author Tekin
 * @Date:   2018-04-24 09:07:53
 * @Last Modified by:   tekintian
 * @Last Modified time: 2018-04-24 09:18:11
 * @param  MR.redirect('跳转的网址')
 * @return URL
 * @see https://github.com/tekintian/js_mobile_redirect
 */
(function(w) {
    var MD = w.MD ? w.MD :{}, pattern = /android|bb\d+|ucweb|meego|avantgo|bada\/|blackberry|transcoder|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;
    MD.redirect = function(url) {
        if (w.navigator.userAgent.match(pattern)) w.location = url;
    };
    w.MD = MD;
})(window);

//跳转到的移动设备地址，用于全站完整跳转到统一地址时使用
// MD.redirect("http://m.yunnan.ws/");