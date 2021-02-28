const defaultState = {
    inputValue: 'Write Something',
    list: [
        '8点',
        '9点',
        '10点'
    ]
}
export default (state = defaultState,action) => {

    console.log(state,action)
    // Reducer里只能接受state, 不能改变state
    if(action.type==='changeInput'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    return state;
}