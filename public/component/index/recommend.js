/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/11
 * Time: 下午7:04
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
const titleImg = require('../../img/index/font-12.png');
const img1 = require('../../img/expert/e9.jpg');
const img2 = require('../../img/expert/e10.jpg');
const img3 = require('../../img/expert/e6.jpg');
const img4 = require('../../img/expert/e5.jpg');
const img5 = require('../../img/expert/e4.jpg');
const img6 = require('../../img/expert/e8.jpg');

class Recommend extends Component {
    render() {
        let recommendServ = this.props.menus.serviceInfo;

        return recommendServ?
        (
            <div className="box">
                <div className="container">
                    <div className="tc">
                        <img src={titleImg} alt="" className="l-title" />
                    </div>
                    <div className="line"></div>
                    <div className="col-l-3 clearfix">
                    {
                        recommendServ.map((item, index) =>{
                            return(
                                <a href="" className="col-3" id={item.memberid} key={index}>
                                    <div>
                                        <div className="ser-card ser-hover">
                                            <img src={img6} alt="" className="ex-img" />
                                                <div className="fb fb-top transition">
                                                    <h3>{item.describe}</h3>
                                                </div>
                                        </div>
                                        <div className="img-desc id-2 overflow">{item.title}</div>
                                    </div>
                                </a>
                                )
                            })
                    }
                    
                    </div>
                </div>
            </div>
        ): <div></div>;
    }
}

const mapStateToProps = (state) => {
    return state;
}

let wrapedRec = connect(mapStateToProps)(Recommend);

//recommend.propTypes = {};
//recommend.defaultProps = {};

export default wrapedRec;
