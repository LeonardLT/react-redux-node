/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/10
 * Time: 下午6:55
 */
import React, {Component} from 'react';
const titleImg = require('../../img/index/font2.png')
const expertImg = require('../../img/expert/e8.jpg')

class question extends Component {
    render() {
        return (
            <div className="box gray">
                <div className="container">
                    <div className="tc">
                        <img src={titleImg} alt="" className="l-title" />
                    </div>
                    <div className="line"></div>
                    <div className="col-l-3 clearfix">
                        <div className="col-3">
                            <div className="img-card">
                                <img src={expertImg} alt=""/>
                            </div>
                            <div className="img-desc overflow">公司<span className="red">内部管理</span>出现问题</div>
                        </div>
                        <div className="col-3">
                            <div className="img-card">
                                <img src={expertImg} alt=""/>
                            </div>
                            <div className="img-desc overflow">已有产品但没有<span className="red">运营</span>团队</div>
                        </div>
                        <div className="col-3">
                            <div className="img-card">
                                <img src={expertImg} alt=""/>
                            </div>
                            <div className="img-desc overflow">创业者<span className="red">产品定位</span>不明确</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

question.propTypes = {};
question.defaultProps = {};

export default question;
