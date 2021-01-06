1. 做一款小程序
2. 写一篇文章
3. 结合腾讯云 BASS Backend as service
    大前端 SDK 存
    投中一篇

- 小程序基本的架构是pages
    右键先建文件夹 .wxml + .wxss + .js + .json
    .js的架构思路
    ```js
    .wxml bindtap
    Page({
        startAccounts() {
            wx.showLoading + .hideLoading    小程序的内置API
            .navigateTo  它会跳转到那里去
        }
    })
    ```
- background-size 手机端图片  响应式背景方案
    1. 背景图片与盒子大小是有可能不一致
    2. 等比例缩放  100%  100%(在x轴和y轴) 盒子与图片的比例是相等的
    3. cover | contain 