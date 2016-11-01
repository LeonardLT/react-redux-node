/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/18
 * Time: 下午7:53
 */
import React, {Component} from 'react';
import Nav from './nav'
import ExpertCenter from './expertCenter';

class Container extends Component {
    render() {
        return (
            <div className="container">
                <div className="flex mt130">
                    <Nav></Nav>
                    <div className="e-r-content">
                        <ExpertCenter></ExpertCenter>
                    </div>
                </div>
            </div>
        );
    }
}

export default Container;
