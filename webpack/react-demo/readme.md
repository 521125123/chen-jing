前端三个最重要的知识点
1. es6
2. webpack
    @5.17.0
    npm i -g webpack
    npm i -g webpack-cli   周边生态
3. react

- webpack 处理的入口 js 文件

- 写代码的时候在 src/index.js 上线的dist/main.js
webpack 有着掌控力, 天蝎座的

- react 初体验
    1. 每个文件都得引入react
    React 负责提供组件(小程序有内置的组件概念，网页(html/css/ js dom)，)
        模版编译功能 {{}} {name} 数据绑定....
    ```js
    import React from 'react';  // react?
    import ReactDOM from 'react-dom';
    import TextComponent from './text.jsx';
    ```

- index.js 

npm i babel-loader -D
npm i @babel/core @babel/preset-env @babel/preset-react -D