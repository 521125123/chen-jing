# 小程序是明年社区团购电商的核心
## 看文档进行写东西
- 电商来设计
    明年是电商爆发年
- 小程序有一个个的page构成
    每个page分成四部分
    index.js 提供了数据
    index.wxml提供了html的界面
    index.wxss 负责页面的东西

- 现代界面思想，MVVM
    数据驱动的界面
    ```js
    page({
        data:{

        }
    })
    ```
    app.json 是app全局变量
- setData 数据驱动界面的内置API
    修改了data中的数据 界面中{{}}会自动更新
    onLoad
    - 中的L是要大写的
    - 作用是页面加载后完成的动作
- "van-card": "@vant/weapp/card/index"可以引入vant-card
- node 是后端语言 阿里 java+node
    npm 包管理器
    npm i @vant/weapp -S --production
    安装了一个电商框架
- <van-card 属性值就是用这些
    num="2"
    price="11000.00"
    title="iphone13"
    desc="宇宙最香手机"
    thumb="{{imageURL}}"
    >
-  wx:for="{{phones}}"
    wx:for-item="phone"
    num="{{phone.num}}"
    price="{{phone.price}}"
    title="{{phone.title}}"
    desc="{{phone.desc}}"
    thumb="{{phone.thumb}}"