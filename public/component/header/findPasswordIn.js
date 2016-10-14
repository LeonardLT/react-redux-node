/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/11
 * Time: 下午2:33
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import Login from './login'
import FindPassOut from './findPasswordOut'
import request from 'superagent';
require('../../styles/register.css')

class FindPasswordIn extends Component {
    constructor(props) {
        super(props)
        this.submitFindPassForm = this.submitFindPassForm.bind(this);
        this.showPasswordModel2 = this.showPasswordModel2.bind(this)
    }

    submitFindPassForm(e) {
        e.stopPropagation();
        e.preventDefault();

        const dispatch = this.props.dispatch;

        let phone = this.refs.findPwordPhone.value;
        let vcode = this.refs.findPwordVcode.value;
        let password = this.refs.findPwordPword.value;

        const regTel = /^[1][0-9]{10}$/;
        if(!regTel.test(phone)) {
            document.getElementById('findPword-phone-sug').style.display = "block";

            return;
        } else {
            document.getElementById('findPword-phone-sug').style.display = "none";
        }

        if(vcode.length === 0) {
            document.getElementById('findPword-code-sug').style.display = "block";

            return;
        } else {
            document.getElementById('findPword-code-sug').style.display = "none";
        }

        if(password.length < 6 || password.length > 20) {
            document.getElementById('findPword-sug').style.display = "block";

            return;
        } else {
            document.getElementById('findPword-sug').style.display = "none";
        }

        const sendData = {
            data: [ phone, password, vcode ]
        }

        request
            .post('/api/findPword')
            .send(sendData)
            .end((err, res) => {

                if(res.body.status === 1) {
                    document.getElementById('model').style.display = "none";

                    document.getElementById('findPwordPhone').value = "";
                    document.getElementById('findPwordVcode').value = "";
                    document.getElementById('findPwordPword').value = "";

                    document.getElementById('model').style.display = 'none';
                    document.getElementById('login').style.display = 'none';
                    document.getElementById('f-p-1').style.display = 'none';
                    document.getElementById('f-p-2').style.display = 'none';
                    document.getElementById('reg').style.display = 'none';
                    document.getElementById('oversea-reg').style.display = 'none';


                } else {
                    document.getElementById('findPword-fail').style.display = "none";
                }

                if(res.body.status === 0) document.getElementById('findPword-fail').style.display = "block";
            })
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
                                <form onSubmit={ e => this.submitFindPassForm(e) }>
                                    <div className="input-box">
                                        <input type="text" className="input-text transition2" placeholder="手机号" id="findPwordPhone" ref="findPwordPhone"/>
                                        <div className="input-info input-phone" id="findPword-phone-sug">请输入正确的11位手机号码</div>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className="input-text transition2 pos-rel" placeholder="验证码" id="findPwordVcode" ref="findPwordVcode"/>
                                        <div className="input-btn">获取验证码</div>
                                        <div className="input-info input-phone" id="findPword-code-sug">请输入正确的验证码</div>
                                    </div>
                                    <div className="input-box">
                                        <input type="password" className="input-text transition2" placeholder="重置密码" id="findPwordPword" ref="findPwordPword"/>
                                        <div className="input-info input-password">重置密码</div>
                                        <div className="input-info input-phone" id="findPword-sug">请输入大于6位小于20位的密码</div>
                                        <div className="input-info input-phone" id="findPword-fail">重设密码失败，请重试</div>
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


export default FindPasswordIn;

