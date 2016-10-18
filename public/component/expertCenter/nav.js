/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/18
 * Time: 下午8:10
 */
import React, {Component} from 'react';

class Nav extends Component {
    render() {
        return (
            <nav className="e-l-nav e-c">
                <li>
                    <a className="e-l-li on">个人中心</a>
                </li>
                <li>
                    <a className="e-l-li">我的需求</a>
                </li>
                <li>
                    <a className="e-l-li">我的收藏</a>
                </li>
                <li>
                    <a className="e-l-li">提问和献计</a>
                </li>
                <li>
                    <a className="e-l-li">个人设置</a>
                </li>
                <li>
                    <a className="mini-ell e-l-li">基本信息</a>
                </li>
                <li>
                    <a className="mini-ell e-l-li">修改手机</a>
                </li>
                <li>
                    <a className="mini-ell e-l-li">修改密码</a>
                </li>
            </nav>
        );
    }
}

export default Nav;