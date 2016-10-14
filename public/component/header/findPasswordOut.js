/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/11
 * Time: 下午2:33
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import request from 'superagent';
require('../../styles/register.css')

class FindPasswordOut extends Component {
    constructor(props) {
        super(props);
        this.submitFindPassOverSeasForm = this.submitFindPassOverSeasForm.bind(this);
        
    }

    submitFindPassOverSeasForm(e){
        e.stopPropagation();
        e.preventDefault();

        const dispatch = this.props.dispatch;

        let phone = this.refs.findPwordOutPhone.value;
        phone = "12332112345"
        let password = this.refs.findPwordOutPassword.value;

        if(password.length < 6 || password.length > 20) {
            document.getElementById('findPwordOut-sug').style.display = "block";

            return;
        } else {
            document.getElementById('findPwordOut-sug').style.display = "none";
        }

        const sendData = {
            data: [ phone, password ]
        }

        request
            .post('/api/findPwordOut')
            .send(sendData)
            .end((err, res) => {

                if(res.body.status === 1) {
                    document.getElementById('model').style.display = 'none';
                    document.getElementById('login').style.display = 'none';
                    document.getElementById('f-p-1').style.display = 'none';
                    document.getElementById('f-p-2').style.display = 'none';
                    document.getElementById('reg').style.display = 'none';
                    document.getElementById('oversea-reg').style.display = 'none';

                    document.getElementById('findPwordOutPassword').value = "";

                    


                } else {
                    document.getElementById('findPwordOut-fail').style.display = "none";
                }

                if(res.body.status === 0) document.getElementById('findPwordOut-fail').style.display = "block";
            })
    }

    render() {
        return (
            <div className="s-box" id="f-p-2">
                <div className="login-box">
                    <div className="model-content">
                        <div className="logo-box-out">
                            <div className="logo-box-in">
                                <div className="model-logo">
                                    <h1>找回密码</h1>
                                </div>
                                <form onSubmit={ e => this.submitFindPassOverSeasForm(e) }>
                                    <div className="input-box">
                                        <input type="text" className="input-text transition2" placeholder="手机号" disabled="disabled" ref="findPwordOutPhone"/>
                                        <div className="input-info input-phone">请输入正确的11位手机号码</div>
                                    </div>
                                    <div className="input-box">
                                        <input type="password" className="input-text transition2" placeholder="重置密码" id="findPwordOutPassword" ref="findPwordOutPassword"/>
                                        <div className="input-info input-password">重置密码</div>
                                        <div className="input-info input-phone" id="findPwordOut-sug">请输入大于6位小于20位的密码</div>
                                        <div className="input-info input-phone" id="findPwordOut-fail">重设密码失败，请重试</div>
                                    </div>
                                    <button className="i-btn transition2" type="submit">确定</button>

                                    {/*<!--<div className="i-btn i-btn-disabled">登陆</div>-->*/}

                                    {/*<!--<div className="i-btn i-btn-disabled i-btn-loading"></div>-->*/}

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FindPasswordOut;

