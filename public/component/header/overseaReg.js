/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/11
 * Time: 下午2:33
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import Login from './login'
import request from 'superagent';
require('../../styles/register.css')

class OverseaReg extends Component {
    constructor(props) {
        super(props)
        this.submitRegisterOutForm = this.submitRegisterOutForm.bind(this);
        this.showLoginModel = this.showLoginModel.bind(this);
    }

    submitRegisterOutForm(e) {
        e.stopPropagation();
        e.preventDefault();

        const dispatch = this.props.dispatch;

        let phone = this.refs.regOutPhone.value;
        phone = "12332112345"
        let name = this.refs.regOutName.value;
        let password = this.refs.regOutPassword.value;

        if(name.length === 0) {
            document.getElementById('nameOut-sug').style.display = "block";

            return;
        } else {
            document.getElementById('nameOut-sug').style.display = "none";
        }

        if(password.length < 6 || password.length > 20) {
            document.getElementById('passwordOut-sug').style.display = "block";

            return;
        } else {
            document.getElementById('passwordOut-sug').style.display = "none";
        }

        if(!document.getElementById('radio-1-6').checked){
            document.getElementById('agreementOut-sug').style.display = "block";
            return;

        } else {
            document.getElementById('agreementOut-sug').style.display = "none";
        }

        let nationType = 1;
        
        const sendData = {
            data: [ phone, password, name, nationType ]
        }

        request
            .post('/api/reg')
            .send(sendData)
            .end((err, res) => {
                dispatch(
                    {
                        type: "reg",
                        data: res.body
                    }
                );

                if(res.body.status === 1) {
                    document.getElementById('model').style.display = "none";
                } else {
                    document.getElementById('regOut-failed').style.display = "none";
                }

                if(res.body.status === 0) document.getElementById('regOut-failed').style.display = "block";
            })
    }

    showLoginModel() {
        document.getElementById('reg').style.display = 'none';
        document.getElementById('oversea-reg').style.display = 'none';
        document.getElementById('login').style.display = 'block';
    }

    render() {
        return (
            <div className="s-box" id="oversea-reg">
                <div className="login-box">
                    <div className="model-content">
                        <div className="logo-box-out">
                            <div className="logo-box-in">
                                <div className="model-logo">
                                    <h1>注册锦囊专家</h1>
                                </div>
                                <form onSubmit={ e => this.submitRegisterOutForm(e) }>
                                    <div className="input-box">
                                        <input type="text" className="input-text transition2" placeholder="手机号" disabled="disabled" ref="regOutPhone"/>
                                        <div className="input-info input-phone" id="phoneOut-sug">请输入正确的11位手机号码</div>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className="input-text transition2" placeholder="姓名" ref="regOutName"/>
                                        <div className="input-info input-phone" id="nameOut-sug">请输入正确的姓名</div>
                                    </div>
                                    <div className="input-box">
                                        <input type="password" className="input-text transition2" placeholder="设置密码" ref="regOutPassword"/>
                                        <div className="input-info input-password" id="passwordOut-sug">请输入大于6位小于20位的密码</div>
                                        <div className="input-info input-password" id="regOut-failed">注册失败，请重试</div>
                                    </div>
                                    <div className="input-agreement">
                                        <label className="radio-box">
                                            <input type="checkbox" name="-1" id="radio-1-6" className="readAndAgree"/>
                                            <label htmlFor="radio-1-6" className="checkbox-label"></label>
                                            <span>已阅读并同意</span>
                                        </label>
                                        <a href="" className="agreement" target="_blank">《锦囊专家用户协议》</a>
                                        <div className="input-info none" id="agreementOut-sug">请先阅读用户协议</div>
                                    </div>
                                    <button className="i-btn transition2" type="submit">注册</button>

                                    {/*<!--<div className="i-btn i-btn-disabled">登陆</div>-->*/}

                                    {/*<!--<div className="i-btn i-btn-disabled i-btn-loading"></div>-->*/}

                                    <div className="input-down clearfix">
                                        <div className="left-pass">
                                            <span>已有账号?</span>
                                            <a className="i-red cursor" onClick={ this.showLoginModel }>直接登陆</a>
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

//OverseaReg.propTypes = {};
//OverseaReg.defaultProps = {};

const wrapedHeader = connect()(OverseaReg);

export default wrapedHeader;
