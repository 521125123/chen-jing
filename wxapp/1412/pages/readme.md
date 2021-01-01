# 小程序左滑
- 目录的意义
    1. pages/是最简单的页面架构
        四大天王 wxml wxss js json
    2. utils/
        工具目录
        各个页面公用的js工具函数 日期格式化
    3. components/
        组件化
    4. wxs 类js的利用， utils
        直接就被模版利用
        utils ->js文件中引入 + wxml里去复用
        新的语言wxs
- 你我他
    用户 (隐私) ->   开发者  ->   小程序微信(服务器)
- flex 等比例分配
    父元素上设置display:flex;
    子元素上设置flex:1 等比例分配
- focus="{{focus}}
    focus 进入这个搜索页面后自动获取焦点，也就是进来后自动调出微信键盘光标不停的在搜索框里闪啊闪的。
- 触控事件:
    ouchstart 手指触摸

    touchmove 手指触摸后移动

    touchcancel 手指触摸动作被打断，如弹窗和来电提醒

    touchend 手指触摸动作结束

    tap 手指触摸后离开

    longtap 手指触摸后后，超过350ms离开
