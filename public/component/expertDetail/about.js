/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/18
 * Time: 下午12:30
 */
import React, {Component} from 'react';
const img1 = require('../../img/expertDetail/2.png');
const img2 = require('../../img/expertDetail/ebg.jpg');

class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="tc mt30">
                    <img src={img1} alt="" className="l-title" />
                </div>
                <div className="line"></div>
                <div className="expert-card">
                    <div className="ae-head">
                        <img src={img2} alt="" />
                    </div>
                    <div className="mt30">
                        <p className="f16 f-font">
                            移动互联网时代，编辑、内容运营或者叫新媒体运营，工作的性质和作用都在发生变化，作为一名合格的编辑、运营需要掌握哪些技能？如何提升自己在媒体行业中的竞争力？转型能有哪些出路？各有什么利弊？
                            移动互联网时代，编辑、内容运营或者叫新媒体运营，工作的性质和作用都在发生变化
                        </p>
                    </div>
                    <div className="mt30">
                        <h1 className="bold">曾任职的公司</h1>
                        <h3 className="fc5 mt15">
                            <span className="mr15">长安汽车股份有限公司</span>
                            <span>资深副总裁</span>
                        </h3>
                        <h3 className="fc5 mt15">
                            <span className="mr15">爱德曼</span>
                            <span>资深副总裁</span>
                        </h3>
                    </div>
                    <div className="mt30">
                        <h1 className="bold">项目经历</h1>
                        <div className="mt22">
                            <h2 className="fc5">
                                <span className="mr15">长安汽车ERP系统</span>
                            </h2>
                            <div className="topic-intro mt15">
                                <p>
                                    移动互联网时代，编辑、内容运营或者叫新媒体运营，工作的性质和作用都在发生变化，作为一名合格的编辑、运营需要掌握哪些技能？如何提升自己在媒体行业中的竞争力？转型能有哪些出路？各有什么利弊？
                                    移动互联网时代，编辑、内容运营或者叫新媒体运营，工作的性质和作用都变化
                                </p>
                            </div>
                        </div>
                        <div className="mt22">
                            <h2 className="fc5">
                                <span className="mr15">长安汽车ERP系统</span>
                            </h2>
                            <div className="topic-intro mt15">
                                <p>
                                    移动互联网时代，编辑、内容运营或者叫新媒体运营，工作的性质和作用都在发生变化，作为一名合格的编辑、运营需要掌握哪些技能？如何提升自己在媒体行业中的竞争力？转型能有哪些出路？各有什么利弊？
                                    移动互联网时代，编辑、内容运营或者叫新媒体运营，工作的性质和作用都在发生
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
