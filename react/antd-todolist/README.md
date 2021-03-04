- react + 业务库
在做react开发的时候 用过哪些业务库
react-router
redux 全家桶


antd ? 叫框架 大型

业务库 ? 
    1. 轻量级的css框架  semantic-ui  bootstrap
    2. 储存  lokijs  database
        - 数据表 notes
        - mysql 前端数据储存方案？ mongogb  NOSQL
            cookie  服务器种在客户端的文本数据
              每次 http 请求都会发送 不适合 因为比较小不够大只  4kb
        - localStorage  比cookie 大一些  选择它  5MB
        - IndexDB  更专业(复杂) 
    3. 循环jsx
        业务中建议 map 
        render return  外面
        让JSX更加具有可读性



- Notes 笔记 



npm i semantic-ui-css@2.2.12

npm i lockjs@1.5.1