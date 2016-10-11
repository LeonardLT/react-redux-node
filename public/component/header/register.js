/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/11
 * Time: 下午2:33
 */
import React, {Component} from 'react';
require('../../styles/register.css')

class Register extends Component {
    constructor(props) {
        super(props)
        this.closeModel = this.closeModel.bind(this);
        this.submitRegisterForm = this.submitRegisterForm.bind(this);
    }

    submitRegisterForm(e) {
        e.stopPropagation();
        e.preventDefault();

        console.log(123);
    }

    closeModel(e) {
        e.stopPropagation();
        e.preventDefault();

        const loginBox = document.getElementById('register-model');

        loginBox.style.display = 'none';
    }

    render() {
        return (
            <div className="model fadeIn" id="register-model" ref='register-box' style={{display: 'block'}}>
                <div className="flex-box">
                    <div className="model-box model-login model-fadeIn">
                        <div className="login-box">
                            <div className="model-title">
                                <i className="iconfont icon-chacha model-close-i" onClick={ e => this.closeModel(e) }></i>
                            </div>
                            <div className="model-content">
                                <div className="logo-box-out">
                                    <div className="logo-box-in">
                                        <div className="model-logo">
                                            <h1>注册锦囊专家</h1>
                                        </div>
                                        <form onSubmit={ e => this.submitRegisterForm(e) }>
                                            <div className="input-box">
                                                <input type="text" className="input-text transition2" placeholder="手机号" />
                                                <div className="input-info input-phone">请输入正确的11位手机号码</div>
                                            </div>
                                            <div className="input-box">
                                                <input type="text" className="input-text transition2" placeholder="验证码" />
                                                <div className="input-info input-phone">请输入验证码</div>
                                            </div>
                                            <div className="input-box">
                                                <input type="text" className="input-text transition2" placeholder="姓名" />
                                                <div className="input-info input-phone">请输入正确的11位手机号码</div>
                                            </div>1
                                            <div className="input-box">
                                                <input type="password" className="input-text transition2" placeholder="设置密码" />
                                                <div className="input-info input-password">账号或密码错误</div>
                                            </div>
                                            <div className="input-agreement">
                                                <label className="radio-box">
                                                    <input type="checkbox" name="-1" id="radio-1-5" />
                                                        <label for="radio-1-5" className="checkbox-label"></label>
                                                        <span>已阅读并同意</span>
                                                </label>
                                                <a href="" className="agreement" target="_blank">《锦囊专家用户协议》</a>
                                            </div>
                                            <button className="i-btn transition2" type="submit">注册</button>

                                            {/*<!--<div className="i-btn i-btn-disabled">登陆</div>-->*/}

                                            {/*<!--<div className="i-btn i-btn-disabled i-btn-loading"></div>-->*/}

                                            <div className="input-down clearfix">
                                                <div className="left-pass">
                                                    <span>已有账号?</span>
                                                    <a href="" className="i-red">直接登陆</a>

                                                </div>
                                                <div className="right-go-reg">
                                                    <a href="" className="i-red">海外用户注册</a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {};
Register.defaultProps = {};

export default Register;
