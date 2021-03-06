import * as React from 'react';
import { Header } from './components';

// {} 空的对象
export const App: React.FC<{}> = (props) => {
    return (
        <div className="containter-fluid">
            <Header />
            {props.children}
        </div>
    )
}