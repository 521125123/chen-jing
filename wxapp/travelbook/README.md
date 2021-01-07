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

- flex 布局的使用 
    元素比较简单, 用flex-direction:column  去搞定, 是移动端快速搞定的利器
    align-items:纵轴  水平方向
    margin 如火纯青 auto 顺时针方向对齐
    百分比用的好
- 小程序, 有大小限制(图片不能放在根目录image),2Mb
    (图片不能放在根目录image),图片放在腾讯服务器
    链接的方式呢？  服务器,
    云开发来解决, 存储
- 使用header footer 代替div标签,语义化标签
    html 语义化更好, 对百度的蜘蛛会更有好, 有利于SEO搜索引擎优化
    1. display:flex + flex-direcrion:column(写在父元素中,flex对子元素进行弹性)   
    flex:1 主体内容放在main中间
    假如 flex:2 放在header 或 footer中 ,则header和footer分得占整个页面的2份
    <body>
    <!-- 语意化html5标签-->
    <header class="header"></header>
    <main> </main>
    <footer class="footer"></footer>
    </body>
    弹性的意思无所谓具体多大, 我会分好。
    overflow-x: hidden; 在水平轴上进行隐藏
    overflow-y: auto;在纵轴上隐藏,但会出现滚动条
    overflow + overflow-scrolling:touch;

- vant 框架 解决了开发中常见的问题
    1. 页面布局 row + col
    2. 常用组件
        pannel button 60%的都不用写, 有框架
- MVVM 思想
    js data 里的数据叫model
    wxml 叫view
    VM 就叫做{{}} 视图模型层
    let account = this.data.account;
    account.value = e.detail.value;
    this.setData ({
      account:account
    })

- 小程序开发指令
    wx:if
    wx:for images
    wx:key 优化 index
    数组要修改的时候
    a=1  a=2
    [item]不需要把整个数组都改变, 用太多内存 MVVM
    wx:key="index" 给每一行都分配一个id key 一定要用
    index 不是最佳