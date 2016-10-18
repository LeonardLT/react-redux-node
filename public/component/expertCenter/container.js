/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/18
 * Time: 下午7:53
 */
import React, {Component} from 'react';
import Nav from './nav'

class Container extends Component {
    render() {
        return (
            <div className="container">
                <div className="flex mt30">
                    <Nav></Nav>
                </div>
            </div>
        );
    }
}

export default Container;
