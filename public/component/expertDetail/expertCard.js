/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/17
 * Time: 下午6:49
 */
import React, {Component} from 'react';
const headImg = require('../../img/expertDetail/2.jpg');

class expertCard extends Component {

    render() {
        return (
            <div className="main mt">
                <div className="expert-bg"></div>
                <div className="container">
                    <div className="expert-card pos-rel mt70">
                        <div className="expert-info clearfix">
                            <div className="expert-img fl">
                                <img src={headImg} alt="" />
                            </div>
                            <div className="expert-intro fl mt13">
                                <h1 className="bold">
                                    马胜军
                                    <span className="e-star">
                                <i className="iconfont icon-star i-star"></i>
                                <span className="i-star">五星专家</span>
                            </span>
                                    <span className="mini-font">
                                <i className="iconfont icon-heart"></i>
                                <span>北京</span>
                            </span>
                                </h1>
                                <h3 className="mt10 ls2">爱德曼企业品牌传播顾问</h3>
                                <div className="expert-see">123123人访问过此专家</div>
                            </div>
                        </div>
                        <p className="expert-desc">
                            随着内容创业的火爆，不管是媒体还是工具类产品的创业者，都在试图通过内容运营带来更多的收益，包括DAU、留存、转化、品牌传播，内容运营真正能影响有哪些运营指标？
                        </p>
                        <div>
                            <span className="mr30">精通行业</span>
                            <span className="e-blue">互联网+</span>
                            <span className="e-blue">工业4.0与精益制造</span>
                            <span className="e-blue">物联网</span>
                        </div>
                        <div className="mt15">
                            <span className="mr30">精通领域</span>
                            <span className="e-blue">互联网金融</span>
                            <span className="e-blue">在线教育</span>
                            <span className="e-blue">智慧城市</span>
                        </div>
                        <ul className="share-content clearfix">
                            <li className="fl share share1">
                                <i className="iconfont icon-weibo f-weibo"></i>
                            </li>
                            <li className="fl share share2">
                                <i className="iconfont icon-weibo f-weibo"></i>
                            </li>
                            <li className="fl share share3">
                                <i className="iconfont icon-weibo f-weibo"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

expertCard.propTypes = {};
expertCard.defaultProps = {};

export default expertCard;
