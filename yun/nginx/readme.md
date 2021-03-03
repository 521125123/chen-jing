nginx  静态网页  http服务  html
动态 node 

1. centos node
    - nginx  wget taobao  mirrors .tar .tz linux 压缩包
    - 解压 tar -xvf  .tar.tz
    - /usr/local/bin/node/bin   node npm npx
    - 全局命令  linux ?  配置软链接(ln -s /usr/local/bin/node/bin/node /usr/bin/node)

2. Koa code
```
    const Koa = require('koa');  // 引入最好的node 开发框架
    const app = express();
    const app = new Koa();
    // 中间件  middlewares  函数
    app.get('/', (req, res) => {  // express
        res.send('hello world');
    })
    // 这次http服务流程  请求和响应的过程
    // app.use 启用一个中间件
    app.use(async ctx => {  // ctx express ctx = req + res
        ctx.body = 'Hello World';  // res body  响应体
    })
    // 再3000端口伺服
    app.listen(3000);
```
    3000 端口

    node app.js  命令行一直霸占在那
    3000 任何人发出请求  ctx 伺服

    后台运行  ps aux | grep ngnix


    




    ( cd /usr/local/bin/)
    ( wget https://npm.taobao.org/mirrors/node/v12.16.1/node-v12.16.1-linux-x64.tar.gz)
    (tar -xvf node-v12.16.1-linux-x64.tar.gz)
    (rm -rf node-v12.16.1-linux-x64.tar.gz)
    (mv node-v12.16.1-linux-x64/ node)
    (ln -s /usr/local/bin/node/bin/node /usr/bin/node)删除  rm -rf /usr/bin/node
    ( npm i koa --save       1. /www  mkdir  /koa-demo
                            2. cd koa-demo   npm init -y
                            3. npm i koa --save
                            vi app.js

    )

    npm i -g pm2
    (运行指令  ./node_modules/.bin/pm2 start app.js)