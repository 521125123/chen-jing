# 进阶的开发方式
- parcel
- parcel 的哥哥 webpack
- webpack 是面试的重灾区
    工作流程 没有webpack 何以代码
    1. build dev 打包为了上线  dist/  dev  src/ 开发阶段(development)
        build  打包 编译 .c .o javac java
    "build": "webpack --mode=development"
    2. 入口文件 index.html 
    npm i webpack
    npm install -D webpack-cli
    npm run build
main.js -> bundle.js
js es6|7|8|9|10   老的浏览器不支持 编译一下
stylus css 编译一下  npm run build 编译一下

写的代码 build 用户执行的代码
webpack 来执行打包工艺(也叫代码生产)
webpack --mode=development