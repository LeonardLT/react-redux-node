/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/11
 * Time: 下午2:33
 */
import React, {Component} from 'react';
require('../../styles/register.css')

class FindPasswordIn extends Component {
    constructor(props) {
        super(props)
        this.showPasswordModel2 = this.showPasswordModel2.bind(this)
    }

    showPasswordModel2() {
        document.getElementById('f-p-1').style.display = 'none';
        document.getElementById('f-p-2').style.display = 'block';
    }

    render() {
        return (
            <div className="s-box" id="f-p-1">
                <div className="login-box">
                    <div className="model-content">
                        <div className="logo-box-out">
                            <div className="logo-box-in">
                                <div className="model-logo">
                                    <h1>找回密码</h1>
                                </div>
                                <form onSubmit={ e => this.submitRegisterForm(e) }>
                                    <div className="input-box">
                                        <input type="text" className="input-text transition2" placeholder="手机号" />
                                        <div className="input-info input-phone">请输入正确的11位手机号码</div>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className="input-text transition2 pos-rel" placeholder="验证码" />
                                        <div className="input-btn">获取验证码</div>
                                        <div className="input-info input-phone">请输入验证码</div>
                                    </div>
                                    <div className="input-box">
                                        <input type="password" className="input-text transition2" placeholder="重置密码" />
                                        <div className="input-info input-password">重置密码</div>
                                        <div className="input-info input-phone">请输入验证码</div>
                                    </div>
                                    <button className="i-btn transition2" type="submit">确定</button>

                                    {/*<!--<div className="i-btn i-btn-disabled">登陆</div>-->*/}

                                    {/*<!--<div className="i-btn i-btn-disabled i-btn-loading"></div>-->*/}

                                    <div className="input-down clearfix">
                                        <div className="right-go-reg">
                                            <a className="i-red cursor" onClick={ this.showPasswordModel2 }>海外用户</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

FindPasswordIn.propTypes = {};
FindPasswordIn.defaultProps = {};

export default FindPasswordIn;

