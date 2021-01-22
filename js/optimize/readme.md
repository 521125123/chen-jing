# 性能优化 永远大厂的主体

- DOM 是最贵的性能开销, 没有之一

- 差点挂了
    一万次吗？ 不会
    1. chrome tab 进程 都有一定的内存的最高峰
        10000条在边缘
    2. 内存消耗在那里呢？
        for循环 真不多 1ms
        getId document 性能开销
            JS 文档对象 JS操作DOM
    DOM 两步
    1. 下载html, css 浏览器在渲染页面的第一步
        - html DOM树 树的查询 用c++
            tree 的结构
        - css 解析执行 基于DOM 树 生成css渲染树 selector 属性构成
        Render tree layout 布局 width height margin padding position
        遍历这颗渲染树, 
        selector node css 
        attribute 节点上的数据
        
        js 是极其耗性能的家伙
        1. js跟java 比, 慢一点
            c/c++/java 内存操作级别
            js 1/5 php python 脚本语言
            应用场景 js 是目前唯一可以做前端的语言
            node 后端, 移动端 
        2. js 就是一个第三者, 浏览器逼出来的。
            DOM树+ css渲染树1. 快速的把静态页面显示出来 第一要务
            js  nb小三 动态DOM ajax 
            document.getElementById('')巨大的开销
            js(语言世界) -> html+css DOM 树世界
            别的语言没有
