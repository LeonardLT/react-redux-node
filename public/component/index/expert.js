/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/11
 * Time: 下午6:05
 */
import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
const title = require('../../img/index/font-10.png');
const exp1 = require('../../img/expert/e1.jpg');
const exp2 = require('../../img/expert/e2.jpg');

class expert extends Component {
    render() {
        const paras = {
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
            slidesPerView : 4,
            slidesPerGroup : 4,
            observer:true,
            observeParents:true,
            autoplay: 4000,
            simulateTouch: false
        }

        return (
            <div className="box">
                <div className="container">
                    <div className="tc">
                        <img src={title} alt="" className="l-title" />
                    </div>
                    <div className="line"></div>
                    <div className="expert-box">
                        <div className="expert-slide">
                            <Swiper {...paras}>
                                <a href="#">
                                    <div className="swiper-slide ss-one">
                                        <div className="e-card">
                                            <div className="e-img">
                                                <img src={exp1} alt="" className="ex-img" />
                                                <div className="fb transition">
                                                    <h3>如果世界漆黑,其实我很美,在爱情里面进退,最多被消费,如果世界漆黑,其实我很美,在爱情里面进退,最多被消费,如果世界漆黑,其实我很美,在爱情里面进退,最多被消费</h3>
                                                </div>
                                            </div>
                                            <div className="e-name">舒伯特</div>
                                            <div className="e-title overflow">华侨城ITD丶国资委委员</div>
                                            <div className="e-tab overflow">
                                                <span className="blue">互联网</span>
                                                <span className="blue">产品经理</span>
                                                <span className="blue">创业营销</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="">
                                    <div className="swiper-slide">
                                        <div className="e-card">
                                            <div className="e-img">
                                                <img src={exp2} alt="" className="ex-img" />
                                                <div className="fb transition">
                                                    <h3>如果世界漆黑,其实我很美,在爱情里面进退,最多被消费,如果世界漆黑,其实我很美,在爱情里面进退</h3>
                                                </div>
                                            </div>
                                            <div className="e-name">
                                                <span>舒伯特</span>
                                                <span className="e-star">
                                                <i className="iconfont icon-star i-star"></i>
                                                <span className="i-star">五星专家</span>
                                            </span>
                                            </div>
                                            <div className="e-title overflow">华侨城ITD丶国资委委员</div>
                                            <div className="e-tab overflow">
                                                <span className="blue">互联网</span>
                                                <span className="blue">产品经理</span>
                                                <span className="blue">创业营销</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="swiper-slide">
                                        <div className="e-card">
                                            <div className="e-img">
                                                <img src={exp1} alt="" className="ex-img" />
                                                <div className="fb transition">
                                                    <h3>如果世界漆黑,其实我很美,在爱情里面进退,最多被消费,如果世界漆黑,其实我很美,在爱情里面进退</h3>
                                                </div>
                                            </div>
                                            <div className="e-name">
                                                <span>舒伯特</span>
                                                <span className="e-star">
                                                <i className="iconfont icon-star i-star"></i>
                                                <span className="i-star">五星专家</span>
                                            </span>
                                            </div>
                                            <div className="e-title overflow">华侨城ITD丶国资委委员</div>
                                            <div className="e-tab overflow">互联网,产品经理,创业营销</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="swiper-slide">
                                        <div className="e-card">
                                            <div className="e-img">
                                                <img src={exp2} alt="" className="ex-img" />
                                                <div className="fb transition">
                                                    <h3>如果世界漆黑,其实我很美,在爱情里面进退,最多被消费,如果世界漆黑,其实我很美,在爱情里面进退</h3>
                                                </div>
                                            </div>
                                            <div className="e-name">
                                                <span>舒伯特</span>
                                                <span className="e-star">
                                                <i className="iconfont icon-star i-star"></i>
                                                <span className="i-star">五星专家</span>
                                            </span>
                                            </div>
                                            <div className="e-title overflow">华侨城ITD丶国资委委员</div>
                                            <div className="e-tab overflow">
                                                <span className="blue">互联网</span>
                                                <span className="blue">产品经理</span>
                                                <span className="blue">创业营销</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="swiper-slide">
                                        <div className="e-card">
                                            <div className="e-img">
                                                <img src={exp1} alt="" className="ex-img" />
                                                <div className="fb transition">
                                                    <h3>如果世界漆黑,其实我很美,在爱情里面进退,最多被消费,如果世界漆黑,其实我很美,在爱情里面进退</h3>
                                                </div>
                                            </div>
                                            <div className="e-name">舒伯特</div>
                                            <div className="e-title overflow">华侨城ITD丶国资委委员</div>
                                            <div className="e-tab overflow">
                                                <span className="blue">互联网</span>
                                                <span className="blue">产品经理</span>
                                                <span className="blue">创业营销</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="swiper-slide">
                                        <div className="e-card">
                                            <div className="e-img">
                                                <img src={exp2} alt="" className="ex-img" />
                                                <div className="fb transition">
                                                    <h3>如果世界漆黑,其实我很美,在爱情里面进退,最多被消费,如果世界漆黑,其实我很美,在爱情里面进退</h3>
                                                </div>
                                            </div>
                                            <div className="e-name">舒伯特</div>
                                            <div className="e-title overflow">华侨城ITD丶国资委委员</div>
                                            <div className="e-tab overflow">
                                                <span className="blue">互联网</span>
                                                <span className="blue">产品经理</span>
                                                <span className="blue">创业营销</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Swiper>
                            {/*<div className="swiper-button-next"></div>*/}
                            {/*<div className="swiper-button-prev swiper-button-disabled"></div>*/}
                        </div>
                    </div>
                    <div className="publish-demand btn find">发现更多专家</div>
                </div>
            </div>
        );
    }
}

expert.propTypes = {};
expert.defaultProps = {};

export default expert;
