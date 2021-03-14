import React, { useState,useMemo } from 'react';

function Example7() {
    const [hong,setHong] = useState('小红在代课状态')
    const [bai,setBai] = useState('志玲在待客状态')
    return (
        <>
            <button onClick={() => {setHong(new Date().getTime())}}>小红</button>
            <button onClick={() => {setBai(new Date().getTime()+"志玲向我们走来")}}>志玲</button>
            <ChildComponent name={hong}>{bai}</ChildComponent>
        </>
    )
}

function ChildComponent({name,children}) {


    function changeHong(name) {
        console.log('小红向我们走来了!!!')
        return name + ',小红向我们走来了！！'
    }
    const actionHong = useMemo(() => changeHong(name),[name])
    return (
        <>
            <div>{actionHong}</div>
            <div>{children}</div>
        </>
    )
}
export default Example7;