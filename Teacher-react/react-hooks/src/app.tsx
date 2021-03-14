import * as React from 'react';
import { HelloComponent } from './hello';
import { Component } from 'react';
import { NameEditComponent } from './nameEdit';

// class App extends Component
// StatelessComponent
export const App = () => {
    // React hooks name 状态的名字  SetName 修改状态用setName
    // 共享状态  
    const [name, setName] = React.useState('defaultUserName')//state
     // react hooks
    // 函数式组件可以借助一些魔法函数来实现状态
    // class .bind  this 最高级的地方
    // ts 帮助我们在开发阶段可以避免很多错误
    // js 因为太随意 bad pattern the god parts the bad parts
    // ts 还可以像java 代码提示更好
    const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    // setTimeout(() => {
    //     setName('aaaa');
    // },3000)
   
    return (
        <>
            <HelloComponent userName={name} />
            <NameEditComponent userName={name} onChange={setUsernameState}/>
        </>
    )
    
    
    // <HelloComponent username={name} />
}