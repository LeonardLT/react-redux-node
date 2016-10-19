/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/19
 * Time: 上午10:51
 */
import React, {Component} from 'react';
import Data from './data';
import HeaderCard from './headerCard';
const img1 = require('../../img/expertDetail/2.jpg');

class ExpertCenter extends Component {
    render() {
        return (
            <div>
                <HeaderCard></HeaderCard>
                <Data></Data>
                <div className="model-line model-line2">
                    <span className="f18">最近的订单</span>
                </div>
                <div>
                    <div className="e-c mt-30 pos-rel">
                        <div className="total clearfix pdd35">
                            <div className="f24">
                            <span className="tag">
                                <i className="iconfont icon-star"></i>
                                <span className="">培训</span>
                            </span>
                                <span>理解未来的"7个原则"</span>
                            </div>
                            <h3 className="mt16">主讲人:
                                <span className="blue">
                                陈华月·华为首席技术家
                            </span>
                            </h3>
                            <h3 className="mt16">
                                <i className="iconfont icon-heart"></i>
                                2016/09/27 4:23
                            </h3>
                        </div>
                        <div className="blue-btn btn-pos">待付款</div>
                    </div>

                    <div className="e-c mt-30 pos-rel">
                        <div className="total clearfix pdd35">
                            <div className="f24">
                            <span className="tag">
                                <i className="iconfont icon-star"></i>
                                <span className="">培训</span>
                            </span>
                                <span>理解未来的"7个原则"</span>
                            </div>
                            <h3 className="mt16">主讲人:
                                <span className="blue">
                                陈华月·华为首席技术家
                            </span>
                            </h3>
                            <h3 className="mt16">
                                <i className="iconfont icon-heart"></i>
                                2016/09/27 4:23
                            </h3>
                        </div>
                        <div className="white-btn btn-pos">去评价</div>
                    </div>
                </div>
                <div className="model-line model-line2">
                    <span className="f18">最近收藏</span>
                </div>
                <div>
                    <div className="e-c mt-30 pos-rel pdd35">
                        <div className="expert-info clearfix">
                            <div className="expert-img fl">
                                <img src={img1} alt="" />
                            </div>
                            <div className="expert-intro fl mt13">
                                <h1 className="bold">
                                    <span>马胜军</span>
                                    <span className="e-star">
                                        <i className="iconfont icon-star i-star"></i>
                                        <span className="i-star">五星专家</span>
                                    </span>
                                </h1>
                                <h1 className="mt10 ls2">爱德曼企业品牌传播顾问</h1>
                            </div>
                        </div>
                        <div className="heart">
                            <i className="iconfont icon-heart f-heart"></i>
                        </div>
                    </div>
                    <div className="e-c mt-30 pos-rel pdd55">
                        <div className="expert-info flex-str">
                            <div className="s-wei">
                                <img src={img1} alt="" />
                            </div>
                            <div className="ml30 mt13 flex1">
                                <h1 className="bold">
                                    <span>事件营销的N种姿势</span>
                                </h1>
                                <h3 className="mt10 ls2 just">
                                    放纵我心里的鬼
                                    可是我不配
                                    丑八怪 能否别把灯打开
                                    我要的爱 出没在漆黑一片的舞台
                                    丑八怪 在这暧昧的时代
                                    放纵我心里的鬼
                                    可是我不配
                                    丑八怪 能否别把灯打开
                                    我要的爱 出没在漆黑一片的舞台
                                    丑八怪 在这暧昧的时代

                                </h3>
                            </div>
                        </div>
                        <div className="heart">
                            <i className="iconfont icon-heart f-heart"></i>
                        </div>
                    </div>
                    <div className="see-more mtb40">
                        <a>查看更多</a>
                    </div>
                </div>
                <div className="model-line model-line2">
                    <span className="f18">最近提问</span>
                </div>
                <div>
                    <div className="e-c mt-30 pos-rel pdd35">
                        <h3>如何才能微信快速引流?</h3>
                        <p className="mt16">
                            <span>
                                <i className="iconfont icon-heart"></i>
                                9条献计
                            </span>
                            <span>
                                <i className="iconfont icon-heart"></i>
                                999人浏览
                            </span>
                        </p>
                        <div className="time time-fix">2013 09-9</div>
                    </div>
                    <div className="e-c mt-30 pos-rel pdd35">
                        <h3>如何才能微信快速引流?</h3>
                        <p className="mt16">
                            <span>
                                <i className="iconfont icon-heart"></i>
                                9条献计
                            </span>
                            <span>
                                <i className="iconfont icon-heart"></i>
                                999人浏览
                            </span>
                        </p>
                        <div className="time time-fix">2013 09-9</div>
                    </div>
                    <div className="see-more mtb40">
                        <a>查看更多</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExpertCenter;
