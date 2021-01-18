# 开发工作流，交给node去做
- 工作内容和工作流程是两码事
    - 轻量级的开发流程
    parcel
    - 重量级的开发进程
    webpack   babel
- live-server http 静态服务
  stylus stylus 编译
  初阶阶段的开发流程 -》  高级阶段

  多个命令行，  有点复杂 ，统一起来!
- 轻量级的前端开发流程套件 parcel
    1.npm init -y
 - node 做后端流程工具。
    2.npm -i parcel 安装在当前项目下,
    node_modules依靠的包
 - npm node package management
    yarn facebook 更快,
    npm config set registry https://registry.npm.taobao.org
    3.npm i -g yarn
    4.yarn add parcel
    5.yarn add stylus -D
    npm -i stylus --save-dev 为了开发阶段node_modules
    -g 全局 不加的话，当前的项目
    6."scripts": {
        "start": "parcel index.html"
    },在 script放下一个"start": "parcel index.html"，index.html 是入口文件
    7.npm run start
- 现代开发工艺
    parcel live-server + stylus + ...全部包围
    index.html 是入口文件  http服务 1234端口服务
    Built 编译   stylus ->css
    .styl  devDependencies style.styl -> style.css
     src / 开发目录