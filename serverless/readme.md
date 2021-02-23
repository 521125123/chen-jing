# 云开发 最新的技术方案 serverless  不需要服务器

- 纯静态网站,
要做一个网站  上线
    127.0.0.1  localhost
    IP  买服务器的原因
    没有服务器怎么？ 
    git 静态服务器  
    
- npm i -g serverless 
    无服务器, 
    serverless.yaml
    yaml 配置文件

    (serverless init website-starter --name example
     serverless deploy
    )
    (
    serverless init fullstack
    serverless deploy
    )
    npm run bootstrap 安装依赖
- serverless 全栈项目
    tencent模板
    1. serverless init fullstack --name=myblog
    2. npm run bootstrap
        - api 后端项目  express
        - frontend  前端 vue
        - db 数据库
    3. serverless deploy 到远程