/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/19
 * Time: 上午10:43
 */
import React, {Component} from 'react';
const img1 = require('../../img/expertDetail/2.jpg');

class HeaderCard extends Component {
    render() {
        return (
            <div className="e-c">
                <div className="flex-str">
                    <div className="expert-card ei1">
                        <div className="expert-info">
                            <div className="expert-img">
                                <img src={img1} alt="" />
                            </div>
                            <div className="expert-intro">
                                <h1 className="mb30">
                                    马胜军
                                    <i className="iconfont icon-heart"></i>
                                </h1>
                                <h3 className="mt10 blue alter">修改个人资料</h3>
                            </div>
                        </div>
                    </div>
                    <div className="expert-card ei2">
                        <div className="expert-info">
                            <div className="expert-intro">
                                <h1 className="mb30 pos-rel">
                                    <span>消息中心</span>
                                    <span className="circle">2</span>
                                </h1>
                                <h3 className="mt10">订阅的课程已经更新</h3>
                                <h6 className="mt10 time">2016.08.08</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderCard;
