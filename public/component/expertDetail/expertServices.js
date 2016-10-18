/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/17
 * Time: 下午6:56
 */
import React, {Component} from 'react';
const titleImg = require('../../img/expertDetail/3.png');
const consultant = require('../../img/expertDetail/11.png');
const training = require('../../img/expertDetail/10.png');
const img3 = require('../../img/expertDetail/12.png');
const img2 = require('../../img/expertDetail/13.png');
import { connect } from 'react-redux';

class ExpertServices extends Component {
    constructor(props) {
        super(props)
        this.toggleFont = this.toggleFont.bind(this);
    }

    toggleFont(id) {
        let dispatch = this.props.dispatch;

        dispatch({
            type: "expand",
            id: id
        })
    }

    render() {
        return (
            <div className="container">
                <div className="tc mt30">
                    <img src={titleImg} alt="" className="l-title" />
                </div>
                <div className="line"></div>

                <div className="expert-card pos-rel mb30">
                    <h1 className="bold">工业4.0-标准化管理体系建设</h1>
                    <div className="topic-price">
                        <span className="yuan">￥</span>
                        <span className="price">888</span>
                        <span className="time">/次</span>
                    </div>
                    <div className={"topic-content" + (this.props.toggle[0] ? " topic-content-toggle" : "")}>
                        <div className="topic-intro">
                            <p>
                                移动互联网时代，编辑、内容运营或者叫新媒体运营，工作的性质和作用都在发生变化，作为一名合格的编辑、运营需要掌握哪些技能？如何提升自己在媒体行业中的竞争力？转型能有哪些出路？各有什么利弊？
                            </p>
                        </div>
                        <div className={"fold" + (this.props.toggle[0] ? " none" : "")}></div>
                    </div>
                    <div className="btn mt30">立即预约</div>
                    <div className={"toggle-btn" + (this.props.toggle[0] ? " toggle-btn-on" : "")} onClick={(e) => this.toggleFont(0)}>
                        <i className="iconfont icon-down1"></i>
                    </div>
                    <div className="mark">
                        <img src={consultant} alt="" />
                    </div>
                </div>

                <div className="expert-card pos-rel mb30">
                    <h1 className="bold">工业4.0-标准化管理体系建设</h1>
                    <div className="topic-price">
                        <span className="price">价格面议</span>
                        <span className="time">/次</span>
                    </div>
                    <div className={"topic-content" + (this.props.toggle[1] ? " topic-content-toggle" : "")}>
                        <div className="topic-intro">
                            <p>
                                移动互联网时代，编辑、内容运营或者叫新媒体运营，工作的性质和作用都在发生变化，作为一名合格的编辑、运营需要掌握哪些技能？如何提升自己在媒体行业中的竞争力？转型能有哪些出路？各有什么利弊？
                                移动互联网时代，编辑、内容运营或者叫新媒体运营，工作的性质和作用都在发生变化
                            </p>
                            <p>从独当一面的专题编辑，到深入一线的采访记者，再到真枪实弹的运营负责人，我可以与你分享媒体、内容运营行业的变化，帮助你在职场上获得成长。</p>
                        </div>
                        <div className={"fold" + (this.props.toggle[1] ? " none" : "")}></div>
                    </div>
                    <div className="btn mt30">立即预约</div>
                    <div className={"toggle-btn" + (this.props.toggle[1] ? " toggle-btn-on" : "")} onClick={(e) => this.toggleFont(1)}>
                        <i className="iconfont icon-down1"></i>
                    </div>
                    <div className="mark">
                        <img src={training} alt="" />
                    </div>
                </div>

                <div className="expert-card pos-rel mb30">
                    <h1 className="bold">工业4.0-标准化管理体系建设</h1>
                    <div className="topic-price">
                        <span className="price">价格面议</span>
                        <span className="time">/次</span>
                    </div>
                    <div className={"topic-content" + (this.props.toggle[2] ? " topic-content-toggle" : "")}>
                        <div className="topic-intro">
                            <p>
                                移动互联网时代，编辑、内容运营或者叫新媒体运营，工作的性质和作用都在发生变化，作为一名合格的编辑、运营需要掌握哪些技能？如何提升自己在媒体行业中的竞争力？转型能有哪些出路？各有什么利弊？
                                移动互联网时代，编辑、内容运营或者叫新媒体运营，工作的性质和作用都在发生变化
                            </p>
                            <p>从独当一面的专题编辑，到深入一线的采访记者，再到真枪实弹的运营负责人，我可以与你分享媒体、内容运营行业的变化，帮助你在职场上获得成长。</p>
                        </div>
                        <div className={"fold" + (this.props.toggle[2] ? " none" : "")}></div>
                    </div>
                    <div className="btn mt30">立即预约</div>
                    <div className={"toggle-btn" + (this.props.toggle[2] ? " toggle-btn-on" : "")} onClick={(e) => this.toggleFont(2)}>
                        <i className="iconfont icon-down1"></i>
                    </div>
                    <div className="mark">
                        <img src={img2} alt="" />
                    </div>
                </div>

                <div className="expert-card pos-rel mb30">
                    <h1 className="bold">工业4.0-标准化管理体系建设</h1>
                    <div className="topic-price">
                        <span className="yuan">￥</span>
                        <span className="price">888</span>
                        <span className="time">/次</span>
                    </div>
                    <div className={"topic-content" + (this.props.toggle[3] ? " topic-content-toggle" : "")}>
                        <div className="topic-intro">
                            <p>
                                移动互联网时代，编辑、内容运营或者叫新媒体运营，工作的性质和作用都在发生变化，作为一名合格的编辑、运营需要掌握哪些技能？如何提升自己在媒体行业中的竞争力？转型能有哪些出路？各有什么利弊？
                                移动互联网时代，编辑、内容运营或者叫新媒体运营，工作的性质和作用都在发生变化
                            </p>
                            <p>从独当一面的专题编辑，到深入一线的采访记者，再到真枪实弹的运营负责人，我可以与你分享媒体、内容运营行业的变化，帮助你在职场上获得成长。</p>
                        </div>
                        <div className={"fold" + (this.props.toggle[3] ? " none" : "")}></div>
                    </div>
                    <div className="btn mt30">立即预约</div>
                    <div className={"toggle-btn" + (this.props.toggle[3] ? " toggle-btn-on" : "")} onClick={(e) => this.toggleFont(3)}>
                        <i className="iconfont icon-down1"></i>
                    </div>
                    <div className="mark">
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}
const WrapExpertServices = connect(mapStateToProps)(ExpertServices);

export default WrapExpertServices;
