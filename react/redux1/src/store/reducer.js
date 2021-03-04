
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from './actionTypes';

const defaultState = {
    inputValue: 'Write Something',
    list: [
        '8点',
        '9点',
        '10点'
    ]
}
export default (state = defaultState,action) => {

    // console.log(state,action)
    // Reducer里只能接受state, 不能改变state
    if(action.type=== CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue) 
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        
        return newState
    }
    return state;
}