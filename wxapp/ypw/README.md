# 向樱空释学习, 技术实力
    通过源码和成功方法, 走进这个人

1. 框架
    wui 小程序更像原生微信的框架
    比vant 小一些, 
2. 导航的自定义
3. 全局引入组件
    app.js app.wxss app.json
4. 全局启用了下拉更新 onPulldownRefresh
    耗时操作, 把下拉stop 模仿App中下拉刷新 
    全局启动有点鲁莽  在页面启动, 列表
5. "tabBar"在主页面设置五个页面进行页面跳转
6. 图片都放images 会让程序变大, 放在cdn下云存储 ,云中的地址, 减少了代码包的体积
7. colur-ui 大法好, 随心随性大法
    flex justify-center padding
    text-white text-blue
    margin-tb-sm lg text-xl
8. 在project.config.json中加"cloudfunctionRoot": "cloudbase/all/functions/",
