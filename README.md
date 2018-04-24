# JS手机检测跳转 js_mobile_redirect
js mobile detection and redirect 采用JAVASCRIPT实现的 JS手机检测 手持设备检测跳转，比较全面而且准确，欢迎使用

## 使用方法：
1. 将本项目下载到你的网站跟目录，在网页的head头部添加如下代码

```js
 <script type="text/javascript" src="static/js/md.js"></script>
```
### 或者直接使用远程JS，无需下载md.js文件
```js
<script type="text/javascript" src="https://raw.githubusercontent.com/tekintian/js_mobile_redirect/v1.0/static/js/md.js"></script>
```

2. 在需要跳转的页面加入跳转代码
```js
 <!-- 跳转代码 -->
 <script type="text/javascript">MD.redirect("http://m.yunnan.ws/");</script>
 
```


## 后端移动设备检测
https://github.com/tekintian/Mobile-Detect



