import React, {Component} from 'react'
import './style.css'
import axios from 'axios'
import XiaojiejieItem from './xiaojiejieItem'
class Xiaojiejie extends Component {
    //  在某一时刻, 可以自动执行函数
    constructor(props) {
        super(props)
        this.state = {
            invalue: '',
            list: ['sdfdsfsd','fdsfsd']
        }
    }
    // shouldComponentUpdate() {
    //     console.log('1-shouldComponentUpdate');
    //     return true;
    // }
    // componentWillUpdate() {
    //     console.log('2-componentWillUpdate');
    // }
    // componentDidUpdate() {
    //     console.log('4-componentDidUpdate')
    // }
    // componentWillReceiveProps() {
    //     console.log('componentWillReceiveProps+C')
    // }
    componentDidMount(){
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
            .then((res)=>{console.log('axios 获取数据成功:'+JSON.stringify(res))  })
            .catch((error)=>{console.log('axios 获取数据失败'+error)})
    }
    inChange() {
        
        this.setState({
            invalue: this.input.value
        }
        // () => { console.log(this.ul.querySelectorAll('li').length)}
        )
    }
    addList() {
        this.setState({
            list: [...this.state.list,this.state.invalue],
            invalue: ""
        })
       
    }
    deleteItem(index) {
        // console.log(index);
        let list = this.state.list;
        list.splice(index,1);
        this.setState({
            list: list
        })
    }
    render() { 
        // console.log('3-render')
        return (
            <div>
                <div>
                    <label htmlFor="jspang">增加服务</label>
                    <input 
                    id="jspang" 
                    className="input" 
                    value={this.state.invalue} 
                    onChange={this.inChange.bind(this)}
                    ref={(input) => {this.input=input}}
                    /> 
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                    <ul ref={(ul) => {this.ul=ul}}>
                        {
                            this.state.list.map((item,index) => {
                                return (
                                    
                                    <XiaojiejieItem
                                    
                                    key={index+item} 
                                    content={item}
                                    index={index}
                                    deleteItem={this.deleteItem.bind(this)}
                                    />
                    
                                // <li 
                                //     key={index+item}
                                //     onClick={this.deleteItem.bind(this,index)}
                                // >
                                //     {item}
                                // </li>
                                )
                            }
                            )
                        }
                    </ul >
                </div>
            </div>
        );
    }
}
export default Xiaojiejie;