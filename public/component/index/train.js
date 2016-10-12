/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/12
 * Time: 下午5:48
 */
import React, {Component} from 'react';
const titleImg = require('../../img/index/font-13.png');
const img4 = require('../../img/expert/e3.jpg');
const img1 = require('../../img/expert/e4.jpg');
const img2 = require('../../img/expert/e5.jpg');
const img3 = require('../../img/expert/e6.jpg');

class train extends Component {
    render() {
        return (
            <div className="box gray">
                <div className="container">
                    <div className="tc">
                        <img src={titleImg} alt="" className="l-title" />
                    </div>
                    <div className="line"></div>
                    <div className="col-l-2 clearfix">
                        <div className="col-2">
                            <div className="pro-320">
                                <img src={img4} alt="" />
                            </div>
                            <div className="pro-card">
                                <div className="pro-name">舒伯特</div>
                                <div className="pro-icon">
                                    <div className="inline pro-mr">
                                        <i className="iconfont icon-heart pro-i"></i>
                                        <span>43</span>
                                    </div>
                                    <div className="inline">
                                        <i className="iconfont icon-chat pro-i p-h"></i>
                                        <span>6</span>
                                    </div>
                                </div>
                                <div className="e-tab overflow">社会学,骑行,心理学,🏃</div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="pro-320">
                                <img src={img1} alt="" />
                            </div>
                            <div className="pro-card">
                                <div className="pro-name">舒伯特</div>
                                <div className="pro-icon">
                                    <div className="inline pro-mr">
                                        <i className="iconfont icon-heart pro-i"></i>
                                        <span>43</span>
                                    </div>
                                    <div className="inline">
                                        <i className="iconfont icon-chat pro-i p-h"></i>
                                        <span>6</span>
                                    </div>
                                </div>
                                <div className="e-tab overflow">社会学,骑行,心理学,🏃</div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="pro-320">
                                <img src={img2} alt="" />
                            </div>
                            <div className="pro-card">
                                <div className="pro-name">舒伯特</div>
                                <div className="pro-icon">
                                    <div className="inline pro-mr">
                                        <i className="iconfont icon-heart pro-i"></i>
                                        <span>43</span>
                                    </div>
                                    <div className="inline">
                                        <i className="iconfont icon-chat pro-i p-h"></i>
                                        <span>6</span>
                                    </div>
                                </div>
                                <div className="e-tab overflow">社会学,骑行,心理学,🏃</div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="pro-320">
                                <img src={img3} alt="" />
                            </div>
                            <div className="pro-card">
                                <div className="pro-name">舒伯特</div>
                                <div className="pro-icon">
                                    <div className="inline pro-mr">
                                        <i className="iconfont icon-heart pro-i"></i>
                                        <span>43</span>
                                    </div>
                                    <div className="inline">
                                        <i className="iconfont icon-chat pro-i p-h"></i>
                                        <span>6</span>
                                    </div>
                                </div>
                                <div className="e-tab overflow">社会学,骑行,心理学,🏃</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

train.propTypes = {};
train.defaultProps = {};

export default train;
