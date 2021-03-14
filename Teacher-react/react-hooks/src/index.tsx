import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { App } from "./app";
// AppRouter 路由接管 最外层, 路由模块化成一个组件
// route jspang
// import { HelloComponent } from './hello';
import { AppRouter } from './router' // 路由模块
ReactDOM.render(
    // <App />,
    <AppRouter />,
    document.getElementById('root')
);