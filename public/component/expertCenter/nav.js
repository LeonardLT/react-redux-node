/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/18
 * Time: 下午8:10
 */
import React, {Component} from 'react'
import { Link } from 'react-router'

class Nav extends Component {
    render() {
        return (
            <nav className="e-l-nav e-c">
                <li>
                    <Link className="e-l-li" to="/" activeClassName="on">个人中心</Link>
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
                    <Link className="e-l-li" to="/modifyBasicInfo" activeClassName="on">个人设置</Link>
                </li>
                <li>
                    <Link className="mini-ell e-l-li"  to="/modifyBasicInfo" activeClassName="on">基本信息</Link>
                </li>
                <li>
                    <Link className="mini-ell e-l-li"  to="/modifyPhone" activeClassName="on">修改手机</Link>
                </li>
                <li>
                    <Link className="mini-ell e-l-li"  to="/modifyPassword" activeClassName="on">修改密码</Link>
                </li>
            </nav>
        );
    }
}

export default Nav;