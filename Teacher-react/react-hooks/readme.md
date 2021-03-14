# react hooks
- react
    - jishup react-router redux
    - react hooks class很少 函数式组件
    - ts

- 学习路线
    - yayu JS 系列
    - 山月 神三元 面试系列
    - leetcode

1. 开发流程 react+ts+hooks  大型项目 webpack
    1. npm i webpack --save-dev
    2. 在一种写"webpack-cli": "^3.3.12",
    3. npm i webpack-dev-server --save-dev


    - webpack webpack-cli webpack-dev-server
    - webpack-cli 4.0 与 webpack 5 有兼容性问题
    手动的指定 安装 webpack cli 3
    1.1 配置开发流程  三兄弟
        --hot 热更新
    1.2 (npm install css-loader style-loader file-loader url-loader html-webpack-plugin awesome-typescript-loader mini-css-extract-plugin --save-dev)
     (npm i typescript --save-dev)
        css-loader style-loader file-loader url-loader 
        webpack loader机制 转译 或编译
        html-webpack-plugin
        mini-css-extract-plugin  webpack插件
        awesome-typescript-loader  ts -> js
    1.3 typescript-loader typescript
        tsconfig.json

    1.4 js  babel es6 ->es5
        @babel/ployfill  ?
        babel-loader  也坑  npm install babel-loader
        .babelrc
    1.5 webpack.config.js
        entry -> output
        module test loader


    1.6 src/ index.html  root

2. react react-dom
    (
    npm i react react-dom  --save
    npm i @types/react @types/react-dom --save-dev
    )
    ts + react 这才是阿里郎
    npm i @types/react  @types/react-dom react的类型约定
    ts 类型化的js

- app.tsx
    跟组件 tsx webpack -> ts-loader -> babel-loader
- index.tsx 
    入口文件  webpack entry 打理
- react 16 后, 可以在函数组件里直接使用状态
全面拥抱函数式编程
    useState 超级函数
    1. 创建了name状态
    2. setName 修改状态的方法也有了
    3. 初始值
- ts 就是加类型约束

- 围绕name状态 两个组件开发实现
    App 父组件 有一个状态 name: defaultUserName
    <!-- this.state = {
        name:
    } -->
    // react 16 魔法函数 方便 this. this.setState
    setName 相当于 this.setState({})
    const [name, setName] = React.useState('defaultUserName')//state

2021/2/28::
- npm i react-router react-router-dom @types/react-router @types/react-router-dom
/about
<Switch>
    path="/about"
    path="/about/:id"
</Switch>
- exact 完全一样

- 大型项目的编写风格
    components 提供  index.tsx
    文档一样, 把这个目录的所有组件向外输出

- webpack 的优化
    1. entry 可以有多个入口
        引入的文件都可以打包到最后的output中
    2. bootstrap 引入是通过webpack 引入的 
        index.html app.tsx 不用引入
    3. vendor [router, react, react-router-dom]
        lib 不用反复编译， 
        组件是会变的
        不用反复去打包 lib,而业务每次都要打包

- react-router 嵌套路由
    分级 两到三级
    / -> Header  Route /   App  {props.chidren}
        / Alums  专辑列表   Switch 只匹配一个
            /Albums:id  某人专辑

- 应用的api应该统一放到api/ 目录下