/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/11
 * Time: 下午2:33
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import Login from './login'
import OverRegister from './overseaReg'
import request from 'superagent';
require('../../styles/register.css')


class Register extends Component {
    constructor(props) {
        super(props)
        this.submitRegisterForm = this.submitRegisterForm.bind(this);
        this.showLoginModel = this.showLoginModel.bind(this);
        this.showOverseaRegModel = this.showOverseaRegModel.bind(this);
    }

    submitRegisterForm(e) {
        e.stopPropagation();
        e.preventDefault();

        const dispatch = this.props.dispatch;

        let phone = this.refs.phone.value;
        let name = this.refs.name.value;
        let vcode = this.refs.verifyCode.value;
        let password = this.refs.password.value;

        const regTel = /^[1][0-9]{10}$/;
        if(!regTel.test(phone)) {
            document.getElementById('phone-sug1').style.display = "block";

            return;
        } else {
            document.getElementById('phone-sug1').style.display = "none";
        }

        if(vcode.length === 0) {
            document.getElementById('vcode-sug').style.display = "block";

            return;
        } else {
            document.getElementById('vcode-sug').style.display = "none";
        }

        if(name.length === 0) {
            document.getElementById('name-sug').style.display = "block";

            return;
        } else {
            document.getElementById('name-sug').style.display = "none";
        }

        if(password.length < 6 || password.length > 20) {
            document.getElementById('password-sug').style.display = "block";

            return;
        } else {
            document.getElementById('password-sug').style.display = "none";
        }

        if(!document.getElementById('radio-1-5').checked){
            document.getElementById('agreement-sug').style.display = "block";
            return;

        } else {
            document.getElementById('agreement-sug').style.display = "none";
        }

        const sendData = {
            data: [ phone, password, name, vcode ]
        }

        request
            .post('/api/reg')
            .send(sendData)
            .end((err, res) => {
                dispatch(
                    {
                        type: "login",
                        data: res.body
                    }
                );

                if(res.body.status === 1) {
                    document.getElementById('model').style.display = "none";
                } else {
                    document.getElementById('reg-failed').style.display = "none";
                }

                if(res.body.status === 0) document.getElementById('reg-failed').style.display = "block";
            })
    }

    showOverseaRegModel() {
        document.getElementById('reg').style.display = 'none';
        document.getElementById('oversea-reg').style.display = 'block';
    }

    showLoginModel() {
        document.getElementById('reg').style.display = 'none';
        document.getElementById('oversea-reg').style.display = 'none';
        document.getElementById('login').style.display = 'block';
    }

    render() {
        return (
            <div className="s-box" id="reg">
                <div className="login-box">
                    <div className="model-content">
                        <div className="logo-box-out">
                            <div className="logo-box-in">
                                <div className="model-logo">
                                    <h1>注册锦囊专家</h1>
                                </div>
                                <form onSubmit={ e => this.submitRegisterForm(e) }>
                                    <div className="input-box">
                                        <input type="text" className="input-text transition2" placeholder="手机号" ref="phone"/>
                                        <div className="input-info input-phone" id="phone-sug1">请输入正确的11位手机号码</div>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className="input-text transition2 pos-rel" placeholder="验证码" ref="verifyCode"/>
                                        <div className="input-btn">获取验证码</div>
                                        <div className="input-info input-phone" id="vcode-sug">请输入验证码</div>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className="input-text transition2" placeholder="姓名" ref="name"/>
                                        <div className="input-info input-phone" id="name-sug">请输入正确的姓名</div>
                                    </div>
                                    <div className="input-box">
                                        <input type="password" className="input-text transition2" placeholder="设置密码" ref="password"/>
                                        <div className="input-info input-password" id="password-sug">请输入大于6位小于20位的密码</div>
                                        <div className="input-info input-password" id="reg-failed">注册失败，请重试</div>
                                    </div>
                                    <div className="input-agreement">
                                        <label className="radio-box">
                                            <input type="checkbox" name="-1" id="radio-1-5" className="readAndAgree"/>
                                            <label htmlFor="radio-1-5" className="checkbox-label"></label>
                                            <span>已阅读并同意</span>
                                        </label>
                                        <a href="" className="agreement" target="_blank">《锦囊专家用户协议》</a>
                                        <div className="input-info none" id="agreement-sug">请先阅读用户协议</div>
                                    </div>
                                    <button className="i-btn transition2" type="submit">注册</button>

                                    {/*<!--<div className="i-btn i-btn-disabled">登陆</div>-->*/}

                                    {/*<!--<div className="i-btn i-btn-disabled i-btn-loading"></div>-->*/}

                                    <div className="input-down clearfix">
                                        <div className="left-pass">
                                            <span>已有账号?</span>
                                            <a className="i-red cursor" onClick={ this.showLoginModel }>直接登陆</a>

                                        </div>
                                        <div className="right-go-reg">
                                            <a className="i-red cursor" onClick={ this.showOverseaRegModel }>海外用户注册</a>
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

//Register.propTypes = {};
//Register.defaultProps = {};

const wrapedHeader = connect()(Register);

export default wrapedHeader;
