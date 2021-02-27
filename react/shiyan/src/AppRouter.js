import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Index from './application/Index';
import List from './application/List';
import Home from './application/Home';
// 设置规则   传递值  接受值  显示内容

function AppRouter() {
    return (
        <Router>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/list/123">列表</Link></li>
            </ul>
            <Route path="/" exact component={Index} />
            <Route path="/list/:id" component={List} />
            <Route path="/home/" component={Home} />
        </Router>
    )
}
export default AppRouter;