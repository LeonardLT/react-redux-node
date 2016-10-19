/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/19
 * Time: 上午11:27
 */
import React, {Component} from 'react';

class ModifyPhone extends Component {
    render() {
        return (
            <div className="e-c">
                <div className="e-r-title">修改手机</div>
                <div className="e-r-box">
                    <div className="input-box-max flex">
                        <div className="max-left">
                            <span className="">当前手机号码</span>
                        </div>
                        <div className="max-right">
                            <span>187123123123</span>
                        </div>
                    </div>
                    <div className="input-box-max flex">
                        <div className="max-left">
                            <span className="">新手机号码</span>
                        </div>
                        <div className="max-right pos-rel">
                            <div>
                                <input type="text" className="input-max" placeholder="新手机号" />
                            </div>
                            <div className="max-sug none">输入正确的xxxxx</div>
                        </div>
                    </div>
                    <div className="input-box-max flex">
                        <div className="max-left">
                            <span className="">验证码</span>
                        </div>
                        <div className="max-right">
                            <div>
                                <input type="text" className="max-code max-code2" placeholder="验证码" />
                                <div className="max-code-btn">获取验证码</div>
                            </div>
                        </div>
                    </div>
                    <div className="input-box-max flex">
                        <div className="max-left"></div>
                        <div className="max-right">
                            <div className="save-btn">保存</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModifyPhone;
