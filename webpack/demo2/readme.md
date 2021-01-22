# 史上最强工作流套件  webpack  企业级开发
完整的通知整个开发过程
1. parcel webpack
    parcel 约定 index.html .styl .css
    webpack 入口 js文件 entry output

    一个企业级开发传送带
    富士康 
    webpack 编译的
    webpack-dev-server webpack 一样的功能， 拿到
    webpack.config.js 配置 编译 http dev server
    在package.json中添加：
    "scripts": {
    "start": "webpack-dev-server --open",
    "build": "webpack --mode=production"
  },

    entry  ->  module(CSS|JSX?|PNG|VUE)  ->  output 


    npm i parcel
    npm i webpack-dev-server
    npm i -D style-loader
    npm i -D css-loader   npm i -D webpack-cli@3.3.12

