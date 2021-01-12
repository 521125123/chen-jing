# js 常考考点

- 要加一个用户怎莫办

es6/ 红宝书 你不知道的javascript leetcode 
单线程的语言 , 数据通信相关    vue/react 不学 
1. npm init -y  
2. npm i json-server 启动json的服务
    来个命令行，怎末启动db.json 成后台数据源
    http server 3000/users db.json 作为数据源
    提供出来访问 后台准备好了
    http GET  http://localhost:3000/users   获取users[]
    POST 用于保存表单 name ->http://localhost:3000/users
    在package.json 删除text再添加
    "scripts": {
    "server:json":"json-server --watch db.json"
    "server:json":"json-server --watch db.json"
    },
3. db.json 数据文件
    json 是前端和后端通信的数据文件
4. npm run server:json 启动服务
- promise  五星 异步
- postman 可以用来做http访问代理
    POST 那是再方便不过

- 前端 +后端
    live-sever http 前端服务 index.html  8080
    json-server 后端数据  3000
    前端和后端要数据通信？
    前端去拉取后端数据
    get  3000 /users
    post 3000
- ajax 的表达一下
    JS最重要的考点 XMLHttpRequest 对象
    1. 是历史性的突破, 带来前端主动请求数据的能力, 微博Ajax应用
    奇纳丹更主动, ajax + DOM 页面变得丰富， 动态
    2. http://localhost:3000/users 一切皆资源 Reatful
    数据资源 Get 发送 path/ users  []
    POST 新增的 /users  {name："陈sir"}
    3. XMLHttpRequest的前身是 ActiveXObject("Microsoft.XMLHTTP");
    但是这叫浏览器嗅探  if else
    let http Request   http 协议 基于请求返回的简单协议 Request Response
    - 创建好对象
    - .open("GET","http://localhost:3000/users",true); 打开一个请求通道 
        .send() 这个请求真的就发送了
        . onreadystatechange 监听
        XMLHttpRequest.Done
        JSON.parse(httpRequest.responseText) 返回的数据
        JSON 数组 -> html 数组  map
                 `
                <li>${user.id} - ${user.name}</li>
                `
        然后 innerHTML
