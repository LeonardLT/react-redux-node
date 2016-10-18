/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/18
 * Time: 下午12:33
 */
import React, {Component} from 'react';
const img1 = require('../../img/expertDetail/1.png');
const img2 = require('../../img/expertDetail/ebg.jpg');

class MicroClass extends Component {
    render() {
        return (
            <div className="container">
                <div className="tc mt30">
                    <img src={img1} alt="" className="l-title" />
                </div>
                <div className="line"></div>
                <div className="expert-card mt15">
                    <h1>长安汽车副总裁马俊: 工业4.0时代的企业治理如何破局?</h1>
                    <div className="mini-head mt26">
                        <img src={img2} alt="" />
                    </div>
                    <div className="f514 mt26">
                        <i className="iconfont icon-heart"></i>
                        <span>2015年7月7日</span>
                    </div>
                    <p className="f16 f-font mt34">
                        移动互联网时代，编辑、内容运营或者叫新媒体运营，工作的性质和作用都在发生变化，作为一名合格的编辑、运营需要掌握哪些技能？如何提升自己在媒体行业中的竞争力？转型能有哪些出路？各有什么利弊？
                        移动互联网时代，编辑、内容运营或者叫新媒体运营，工作的性质和作用都在发生变化
                    </p>
                    <div className="f514 mt26 tr">
                <span className="mr15">
                    <i className="iconfont icon-heart"></i>
                    <span>123</span>
                </span>
                        <span className="mr15">
                    <i className="iconfont icon-heart"></i>
                    <span>666</span>
                </span>
                    </div>
                </div>
                <div className="expert-card mt15">
                    <h1>长安汽车副总裁马俊: 工业4.0时代的企业治理如何破局?</h1>
                    <div className="mini-head mt26">
                        <img src={img2} alt="" />
                    </div>
                    <div className="f514 mt26">
                        <i className="iconfont icon-heart"></i>
                        <span>2015年7月7日</span>
                    </div>
                    <p className="f16 f-font mt34">
                        移动互联网时代，编辑、内容运营或者叫新媒体运营，工作的性质和作用都在发生变化，作为一名合格的编辑、运营需要掌握哪些技能？如何提升自己在媒体行业中的竞争力？转型能有哪些出路？各有什么利弊？
                        移动互联网时代，编辑、内容运营或者叫新媒体运营，工作的性质和作用都在发生变化
                    </p>
                    <div className="f514 mt26 tr">
                <span className="mr15">
                    <i className="iconfont icon-heart"></i>
                    <span>123</span>
                </span>
                        <span className="mr15">
                    <i className="iconfont icon-heart"></i>
                    <span>666</span>
                </span>
                    </div>
                </div>
                <div className="see-more mtb40">
                    <a>查看更多</a>
                </div>
                <div className="g-line"></div>
            </div>
        );
    }
}

export default MicroClass;
