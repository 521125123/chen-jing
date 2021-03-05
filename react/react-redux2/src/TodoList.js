import React, { Component } from 'react';
import { connect } from 'react-redux';


class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div>
               <div>
                   <input value={this.props.inputValue} onChange={this.props.inputChange} />
                   <button>提交</button>
               </div>
               <ul>
                   <li>
                       明平贵
                   </li>
               </ul>
            </div>
        );
    }
    
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}
const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: 'change_input',
                value: e.target.value
            }
        }
    }
}
 
export default connect(stateToProps, dispatchToProps)(TodoList);