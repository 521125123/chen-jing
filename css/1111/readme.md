# 人生总要切一次阿里页面
1. 有标注图
    来自于设计师 标注尺寸
    在设计的时，用的大小是750px，
2. html结构快速的输入方式 emmet
    使用css 选择器的语法
    .tb_header>h2>img
    - div 标签不用写
    -  是什么意思 子元素选择器
    - 空格 后代选择 + 兄弟选择器 >子选择器
    - rem 相对html的font-size单位 px 是绝对单位
         width: 10rem;/* 占满整个屏 */
         
    - 空格表示后代选择器
        .tm_header img{

        }
         ul>li.flag>a.figure.flag-item其中的figure.flag-item变成figure flag-item
         figcaption.flag-item>.flag-title+.flag-price+.flag-type+a.flag-btn
         其中的+为同级
         (.tm_header>h2>img)+ul>li.flag>(a.figure.flag-item>img)+.figcaption.flag-item>.flag-title+.flag-price+.flag-type+a.flag-btn其中的()保证emmet执行的优先级
         npm i -g live-server进行安装可以自动保存的功能
         live-server --port=1224
         http://127.0.0.1:1224/
         - table-cell
3. 大厂css考点之布局方案
    - 同学，请问你能说下有那些比较高级的display用法？
        display 显示 inline行内元素 （不能设置宽跟高） 例如：a span/block 
    - 块级元素 做容器 例如:div ul li h2 独占一行（可以设置宽跟高，但是会独占一行）
        在父元素使用display:table,在其子元素上使用display:table-cell可以让多个子元素在，display: inline-block;
        一行内显示，如同表格里的单元格，我在阿里双11的demo里学到的。