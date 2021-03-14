import React ,{ Component} from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Loader from './Loader';
import List from './List';
import Item from './Item';
export default class Main extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    render() {
        return (
            <div>
               <Header siteName="Beer me!"/>
               <Loader />
               <List />
               <Item />
            </div>
        )
    }
}