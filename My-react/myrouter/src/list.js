import React, { Component } from 'react';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <ol>
            {
                this.state.list.map((item,index) => {
                    return (
                        <li 
                            key={index+item}
                            onDoubleClick={this.deleteItem.bind(this,index)}
                            dangerouslySetInnerHTML={{__html: item}}
                        >

                        </li>
                    ) 
                })
            }
                </ol>
        );
    }
}
 
export default List;