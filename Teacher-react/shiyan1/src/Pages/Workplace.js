import React from 'react';
import { Route , Link} from 'react-router-dom';
import Slary from './workplace/Slary';
import Moring from './workplace/Moring';
function Workplace() {
    return(
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/workplace/slary/">程序员加薪</Link></li>
                    <li><Link to="/workplace/moring/">程序员早起</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>职场技能</h3></div>
                <Route path="/workplace/slary/" component={Slary} />
                <Route path="/workplace/moring/" component={Moring} />
            </div>
        </div>
    )
}
export default Workplace;