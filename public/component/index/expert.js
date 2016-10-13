/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/11
 * Time: 下午6:05
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import Swiper from 'react-id-swiper';
const title = require('../../img/index/font-10.png');
const exp1 = require('../../img/expert/e1.jpg');
const exp2 = require('../../img/expert/e2.jpg');

class Expert extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let expertInfo = this.props.menus.expertInfo;

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

        return expertInfo?
        (
            <div className="box">
                <div className="container">
                    <div className="tc">
                        <img src={title} alt="" className="l-title" />
                    </div>
                    <div className="line"></div>
                    <div className="expert-box">
                        <div className="expert-slide">
                            <Swiper {...paras}>
                            {
                                expertInfo.map((item, index) => {
                                    return (
                                        <a href="#" id={item.id} key={index}>
                                            <div className="swiper-slide ss-one">                                      
                                                <div className="e-card">
                                                   <div className="e-img">
                                                        <img src={exp1} alt="" className="ex-img" />
                                                        <div className="fb transition">
                                                            <h3>{item.summary}</h3>
                                                        </div>
                                                    </div>
                                                    <div className="e-name"><span>{item.name}</span>{item.fiveStart==1?<span className="e-star"><i className="iconfont icon-star i-star"></i><span className="i-star">五星专家</span></span>:<span></span>}</div>
                                                    <div className="e-title overflow">{item.title}</div>
                                                    <div className="e-tab overflow">
                                                        {
                                                            item.tag.map((subMenu, index) =>{
                                                                return (
                                                                    <span className="blue" key={index}>{subMenu+" "}</span>
                                                                )

                                                            })                                                    
                                                        }                                                        
                                                    </div>
                                                </div>                                       
                                            </div>
                                        </a>
                                    )    
                                })
                            }     
                            </Swiper>
                            {/*<div className="swiper-button-next"></div>*/}
                            {/*<div className="swiper-button-prev swiper-button-disabled"></div>*/}
                        </div>
                    </div>
                    <div className="publish-demand btn find">发现更多专家</div>
                </div>
            </div>
        ): <div></div>;
    }
}

const mapStateToProps = (state) => {
    return state;
}

let wrapedExpert = connect(mapStateToProps)(Expert);
//expert.propTypes = {};
//expert.defaultProps = {};

export default wrapedExpert;
