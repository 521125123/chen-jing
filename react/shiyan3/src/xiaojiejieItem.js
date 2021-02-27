import React, { Component } from 'react';
import PropTypes from 'prop-types';
class xiaojiejieItem extends Component {
    
    constructor(props) {
        super(props)
        this.handleClick=this.handleClick.bind(this);
    }
    // 组件第一次存在于dom中, 函数是不会执行的。
    // 如果已经存在于DOM中, 函数才会执行
    // componentWillReceiveProps() {
    //     console.log('componentWillReceiveProps+C')
    // }
    // componentWillUnmount() {
    //     console.log('componentWillUnMount')
    // }
    shouldComponentUpdate(nextProps,nextState) {
        if(nextProps.content!==this.props.content)
        {
            return true;
        }else{
            return false;
        }       
    }
    render() { 
        console.log("Child-component")
        return (
            <li onClick={this.handleClick}>
                {this.props.avaname}为您服务-
                {this.props.content}
            </li>
        );
    }
    handleClick() {
        this.props.deleteItem(this.props.index);
    }
}
xiaojiejieItem.propTypes={
    avaname: PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}
xiaojiejieItem.defaultProps={
    avaname:'宋丹'
}
export default xiaojiejieItem;