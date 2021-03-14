import React, { useReducer } from 'react';

function ReducerDemo() {
    const [count, dispatch] = useReducer((state,action)=>{
        switch(action) {
            case 'add':
                return state+1
            case 'sub':
                return state-1
            default:
                return state
        }
    },0)
    return (
        <div>
            <h3>现在的分数是{count}</h3>
            <button onClick={()=>{dispatch('add')}}>Increment</button>
            <button onClick={()=>{dispatch('sub')}}>Decrement</button>
        </div>
    )
}
export default ReducerDemo;







// function countReducer(state,action) {
//     switch(action.type) {
//         case 'add':
//             return state+1
//         case 'sub':
//             return state-1
//         default:
//             return state
//     }
// }

// useReducer
