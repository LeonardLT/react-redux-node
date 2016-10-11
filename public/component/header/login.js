/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/11
 * Time: 下午1:15
 */
import React, {Component} from 'react';
import downloadImg from '../../img/login/code1.png'
import weixin from '../../img/login/weixin.png'
import FindPassIn from './findPasswordIn'
import FindPassOut from './findPasswordOut'
import Register from './reg'
import OverRegister from './overseaReg'

class Login extends Component {
    constructor(props) {
        super(props)
        this.closeModel = this.closeModel.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.showFindPasswordModel = this.showFindPasswordModel.bind(this);
        this.showRegModel = this.showRegModel.bind(this);
    }

    submitForm(e) {
        e.stopPropagation();
        e.preventDefault();

        console.log(123);
    }

    showRegModel() {
        document.getElementById('login').style.display = 'none';
        document.getElementById('reg').style.display = 'block';
    }

    closeModel(e) {
        e.stopPropagation();
        e.preventDefault();

        document.getElementById('model').style.display = 'none';
        document.getElementById('login').style.display = 'none';
        document.getElementById('f-p-1').style.display = 'none';
        document.getElementById('f-p-2').style.display = 'none';
        document.getElementById('reg').style.display = 'none';
        document.getElementById('oversea-reg').style.display = 'none';
    }

    showFindPasswordModel() {
        document.getElementById('login').style.display = 'none';
        document.getElementById('f-p-1').style.display = 'block';
    }

    render() {
        return (
            <div className="model fadeIn" id="model" ref='login-box'>
                <div className="flex-box">
                    {/*login box start*/}
                    <div className="model-box model-login model-fadeIn">
                        <div className="model-title">
                            <i className="iconfont icon-chacha model-close-i" onClick={ e => this.closeModel(e) }></i>
                        </div>
                        <div className="s-box" id="login">
                            <div className="login-box">
                                <div className="model-content">
                                    <div className="logo-box-out">
                                        <div className="logo-box-in">
                                            <div className="model-logo">
                                                <h1>登陆锦囊专家</h1>
                                            </div>
                                            <form onSubmit={ e => this.submitForm(e) }>
                                                <div className="input-box select-country">
                                                    <select name="" id="2">
                                                        <option value="123">+86 中国</option>
                                                        <option value="234">美国</option>
                                                    </select>
                                                </div>
                                                <div className="input-box">
                                                    <input type="text" className="input-text transition2" placeholder="手机号" />
                                                    <div className="input-info input-phone">请输入正确的11位手机号码</div>
                                                </div>
                                                <div className="input-box">
                                                    <input type="password" className="input-text transition2" placeholder="密码" />
                                                    <div className="input-info input-password">账号或密码错误</div>
                                                </div>

                                                <button className="i-btn transition2" type="submit">登陆</button>

                                                {/*<!--<div className="i-btn i-btn-disabled">登陆</div>-->*/}

                                                {/*<!--<div className="i-btn i-btn-disabled i-btn-loading"></div>-->*/}

                                                <div className="input-down clearfix">
                                                    <div className="left-pass">
                                                        <a className="i-red cursor"  onClick={ this.showFindPasswordModel }>忘记密码</a>
                                                    </div>
                                                    <div className="right-go-reg">
                                                        <a className="i-red cursor" onClick={ this.showRegModel }>新用户去注册</a>
                                                    </div>
                                                </div>
                                                <div className="model-line">
                                                    <span>or</span>
                                                </div>
                                                <div className="input-box clearfix">
                                                    <div className="col-5 tc">
                                                        <div className="or">
                                                            <img src={downloadImg} alt="下载"/>
                                                            <h3>扫码下载App</h3>
                                                        </div>
                                                    </div>
                                                    <div className="col-5 tc">
                                                        <div className="or">
                                                            <img src={weixin} alt="微信登陆" className="mt22"/>
                                                            <h3>第三方登陆</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/*find password start*/}
                        <FindPassIn></FindPassIn>
                        {/*find password end*/}

                        {/*find password oversea start*/}
                        <FindPassOut></FindPassOut>
                        {/*find password oversea end*/}

                        {/*register box start*/}
                        <Register></Register>
                        {/*register box end*/}

                        {/*Oversea register box start*/}
                        <OverRegister></OverRegister>
                        {/*Oversea register box end*/}
                    </div>
                    {/*login box end*/}
                </div>
            </div>
        );
    }
}

export default Login;
