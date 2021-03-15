import React, { Component } from 'react';
import './style.css';
import ListItem from './ListItem';
class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue:"张龙辉",
            list: [
                "明平贵",
                "土匪饭"
            ]

        }
    }
    render() { 
        return (
            <>
                <div>
                    <label htmlFor="jspang">添加舍友:</label>
                    <input id="jspang" onChange={this.valueChange.bind(this)} className="input" value={this.state.inputValue} />
                    <button onClick={this.addFriend.bind(this)}>添加我的舍友</button>
                </div>
                <ol>
                    {
                        this.state.list.map((item,index) => {
                            return (
                               
                                <ListItem 
                                    key={index+item}
                                    content={item}
                                    index={index}
                                    deleteItem={this.deleteItem.bind(this)}  
                                />
                            ) 
                        })
                    }
                </ol>
            </>
        );
    }
    valueChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    addFriend() {
        this.setState({
            list: [...this.state.list,this.state.inputValue],
            inputValue: ""
        })
    }
    deleteItem(index) {
        let list = this.state.list;
        list.splice(index,1);
        this.setState({
            list: list
        })
    }
}
 
export default Hello;