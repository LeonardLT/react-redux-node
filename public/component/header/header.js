/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/9/26
 * Time: 上午10:47
 */
import React, { Component } from 'react';
import logo from '../../img/index/logo.png';
import Login from './login';
import Register from './reg';
import { connect } from 'react-redux'
require('../../less/form.less');

class Header extends Component {
    constructor(props) {
        super(props)
        this.loginClick = this.loginClick.bind(this);
        this.registerClick = this.registerClick.bind(this);
    }
    registerClick(e) {
        e.stopPropagation();
        e.preventDefault();

        document.getElementById('model').style.display = 'block';
        document.getElementById('reg').style.display = 'block';
    }

    loginClick(e) {
        e.stopPropagation();
        e.preventDefault();

        document.getElementById('model').style.display = 'block';
        document.getElementById('login').style.display = 'block';
    }

    render() {
        const userData = this.props.login;
   
        return  (
            <div className="header">
                <div className="container pos-rel">
                    <div className="h-box">
                        <div className="logo">
                            <a href="/">
                                <img src={logo} alt="锦囊专家" />
                            </a>
                        </div>
                        <div className="nav">
                            <ul className="h-nav-list">
                                <li className="nav-li nav-active">
                                    <a href="jn-index.html">首页</a>
                                </li>
                                <li className="nav-li">
                                    <a>微课</a>
                                </li>
                                <li className="nav-li">
                                    <a>献计</a>
                                </li>
                                {
                                    userData.status === 1? (
                                        <li className="nav-li nav-li-own">
                                            <a href="" className="h-name overflow">{userData.user.name}</a>
                                            <i className="iconfont icon-down icon-down-posi"></i>
                                            <ul className="own-list name-fadeIn">
                                                <li>
                                                    <a href="" className="">我的订单</a>
                                                </li>
                                                <li>
                                                    <a href="" className="">消息中心</a>
                                                    <i className="h-message-num"></i>
                                                </li>
                                                <li>
                                                    <a href="" className="">我的收藏</a>
                                                </li>
                                                <li>
                                                    <a href="" className="">个人设置</a>
                                                </li>
                                                <li>
                                                    <a href="" className="">退出</a>
                                                </li>
                                            </ul>
                                        </li>) : (
                                        <span>
                                            <li className="nav-li">
                                                <a className="login" ref='login' onClick={ e => this.loginClick(e) }>登陆</a>
                                            </li>
                                            <li className="nav-li" onClick={ e => this.registerClick(e) }>
                                                <a href="jn-register.html">注册</a>
                                            </li>
                                        </span>
                                        )
                                }
                                <li className="nav-li">
                                    <a>成为专家</a>
                                </li>
                                <li className="search">
                                    <i className="icon iconfont icon-search"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Login></Login>
                <Register></Register>
            </div>
        )
    }
}

// Header.propTypes = {};
// Header.defaultProps = {};

const mapStateToProps = (state) => {
    return state;
}

const WrapedLogin = connect(mapStateToProps)(Header);

export default WrapedLogin;
