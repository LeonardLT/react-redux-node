/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/11
 * Time: 下午7:04
 */
import React, {Component} from 'react';
const titleImg = require('../../img/index/font-12.png');
const img1 = require('../../img/expert/e9.jpg');
const img2 = require('../../img/expert/e10.jpg');
const img3 = require('../../img/expert/e6.jpg');
const img4 = require('../../img/expert/e5.jpg');
const img5 = require('../../img/expert/e4.jpg');
const img6 = require('../../img/expert/e8.jpg');

class recommend extends Component {
    render() {
        return (
            <div className="box gray">
                <div className="container">
                    <div className="tc">
                        <img src={titleImg} alt="" className="l-title" />
                    </div>
                    <div className="line"></div>
                    <div className="col-l-3 clearfix">
                        <a href="">
                            <div className="col-3">
                                <div className="ser-card ser-hover">
                                    <img src={img6} alt="" className="ex-img" />
                                        <div className="fb fb-top transition">
                                            <h3>如果世界漆黑,其实我很美,在爱情里面进退,最多被消费,如果世界漆黑,其实我很美,在爱情里面进退,最多被消费,如果世界漆黑,其实我很美,在爱情里面进退,最多被消费</h3>
                                        </div>
                                </div>
                                <div className="img-desc id-2 overflow">公司内部管理出现问题</div>
                            </div>
                        </a>
                        <div className="col-3">
                            <div className="ser-card ser-hover">
                                <img src={img1} alt="" className="ex-img" />
                                    <div className="fb fb-top transition">
                                        <h3>如果世界漆黑,其实我很美,在爱情里面进退,最多被消费,如果世界漆黑,其实我很美,在爱情里面进退,最多被消费,如果世界漆黑,其实我很美,在爱情里面进退,最多被消费</h3>
                                    </div>
                            </div>
                            <div className="img-desc id-2 overflow">公司内部管理出现问题</div>
                        </div>
                        <div className="col-3">
                            <div className="ser-card ser-hover">
                                <img src={img2} alt="" className="ex-img" />
                                    <div className="fb fb-top transition">
                                        <h3>如果世界漆黑,其实我很美,在爱情里面进退,最多被消费,如果世界漆黑,其实我很美,在爱情里面进退,最多被消费,如果世界漆黑,其实我很美,在爱情里面进退,最多被消费</h3>
                                    </div>
                            </div>
                            <div className="img-desc id-2 overflow">公司内部管理出现问题</div>
                        </div>
                        <div className="col-3">
                            <div className="ser-card ser-hover">
                                <img src={img3} alt="" className="ex-img" />
                                    <div className="fb fb-top transition">
                                        <h3>如果世界漆黑,其实我很美,在爱情里面进退,最多被消费,如果世界漆黑,其实我很美,在爱情里面进退,最多被消费,如果世界漆黑,其实我很美,在爱情里面进退,最多被消费</h3>
                                    </div>
                            </div>
                            <div className="img-desc id-2 overflow">公司内部管理出现问题</div>
                        </div>
                        <div className="col-3">
                            <div className="ser-card ser-hover">
                                <img src={img4} alt="" className="ex-img" />
                                    <div className="fb fb-top transition">
                                        <h3>如果世界漆黑,其实我很美,在爱情里面进退,最多被消费,如果世界漆黑,其实我很美,在爱情里面进退,最多被消费,如果世界漆黑,其实我很美,在爱情里面进退,最多被消费</h3>
                                    </div>
                            </div>
                            <div className="img-desc id-2 overflow">公司内部管理出现问题</div>
                        </div>
                        <div className="col-3">
                            <div className="ser-card ser-hover">
                                <img src={img5} alt="" className="ex-img" />
                                    <div className="fb fb-top transition">
                                        <h3>如果世界漆黑,其实我很美,在爱情里面进退,最多被消费,如果世界漆黑,其实我很美,在爱情里面进退,最多被消费,如果世界漆黑,其实我很美,在爱情里面进退,最多被消费</h3>
                                    </div>
                            </div>
                            <div className="img-desc id-2 overflow">公司内部管理出现问题</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

recommend.propTypes = {};
recommend.defaultProps = {};

export default recommend;
