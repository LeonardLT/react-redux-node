/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/10
 * Time: 下午6:37
 */
import React, {Component} from 'react';

class fix extends Component {
    render() {
        return (
            <div className="right-fix">
                <ul className="fix-need">
                    <li className="fix-n-li">
                        <a className="fix-n-li-f" href="#">约专家</a>
                    </li>
                    <li className="fix-n-li">
                        <a href="#">找讲师</a>
                    </li>
                    <li className="fix-n-li">
                        <a href="#">聘顾问</a>
                    </li>
                    <li className="fix-n-li">
                        <a href="#">项目咨询</a>
                    </li>
                    <li className="fix-n-li">
                        <a className="fix-n-li-e" href="#">APP下载</a>
                    </li>
                </ul>
            </div>
        );
    }
}

fix.propTypes = {};
fix.defaultProps = {};

export default fix;
