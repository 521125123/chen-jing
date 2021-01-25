- 图片性能优化， 我们想到了什么？ 减少http数， lazyload throttle
    - 浏览器 编解码 40kb
    data:img/jpg;base64, 是一种编码格式      /9j/文件内容
    google 大量的使用base64 减少请求数  是
    1. 每一个图片相当于一次http请求，图片多了的话，耗性能比较严重。而将jpg转化成base64格式的图片，则极大地减少了请求数，因为base64是文本格式，可以直接放在body里。
    2. 优点 (1)base64格式的图片是文本格式,占用内存小,转换后的大小比例大概为1/3,降低了资源服务器的消耗; (2)网页中使用base64格式的图片时,不用再请求..

    1. 网页性能优化
        - 精灵图片的优化技术  多张图(小图,icon) 合并到一张图
            减少http请求
        - 历史 lazyload scroll + API, 减少一些执行次数  throttle
        - 现在有 base64 把发送请求的机会都没了 不是所有图片
            衡量,  小一点的图片 
        ？ 哪种方法
        - 大图的话, 特别是头图, banner图 , 商品详情页的图片
            可以在 webp 大小减少25%++ 清晰度不受损,  + lazyload

    - js多线程的苗头 Worker 推出有一段时间了, 但是没有主流
    有多线程的能力
    new Worker('js 文件')  启动一个线程, js文件单独运行, 不会阻塞主线程
    1. 跟dom 相关的事情不能做 
        js是css和html的第三者 
        worker 不能和主线程去同时操作同一个元素



    npm i webp-converter
