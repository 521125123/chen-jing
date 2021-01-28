# router    路由
    小程序 联想型学习react
    /page index  tabber  my  cart  小程序就给你内置了一个路由
- create-react-app  beers  react
- cd beers
    1. npm i react-router react-router-dom
     npm i react react-dom
    2. BrowserRouter 浏览器路由切换, 以前是由后端负责,
        前端也可以做 我们要启动前端路由功能, 不是标配。
    用BrowserRouter 包住 route的配置， 接管整个项目
    3. <Route path="" componnent=""/>
        location.path
    4. Main.js 组件化  切图
        html 结构 大体上  section
        header + loader + list + beer

    npm i prop-types