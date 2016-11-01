/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/19
 * Time: 上午10:29
 */
import React, {Component} from 'react';
import ExpertCenter from './expertCenter';
import BasicInfo from './basicInfo';
import ModifyPhone from './modifyPhone';

class NavContent extends Component {
    render() {
        return (
            <div className="e-r-content">
                <ExpertCenter></ExpertCenter>
            </div>
        );
    }
}

export default NavContent;
