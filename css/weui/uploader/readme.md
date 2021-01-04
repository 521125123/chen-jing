# weui 里学习命名风格，腾讯体系的套路
    .container + .page 业务惯例
- container,wrapper
    在PC端, 负责页面容器的宽度,左右留白
    搜狐 1200px + margin auto
    在移动端 没有auto 的需要
    pos: a+100% +overflower:hidden
    一屏移动效果
- page
    良好垂直滚动的页在容器
- .page_hd + .page_bd + .page_ft
    __国际命名规范 BEM __表示
    .page Block 区块
    Element 子元素 __
    .page(是Block) > .page__hd(Element)>.(page__title(作用) + .page__desc)(Element,BE 不受html的结构限制,)+.page__bd
    .weui-uploader> .weui-uploader__hd + .weui-uploader__bd
- css 编写顺序
  1. css reset 把浏览器变成一张白纸, 为了统一(margin padding)
  2. 业务公用样式 (.like  .page  .container 公用) 
  3. 业务样式 最下面 BEM
   .page(是Block) > .page__hd(Element)
    