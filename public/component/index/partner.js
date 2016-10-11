/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/11
 * Time: 下午7:14
 */
import React, {Component} from 'react';
const titleImg = require('../../img/index/font-11.png');

class Partner extends Component {
    render() {
        return (
            <div className="box">
                <div className="container">
                    <div className="tc">
                        <img src={titleImg} alt="" className="l-title" />
                    </div>
                    <div className="line"></div>
                    <div className="link-box clearfix">
                        <a href=""><div className="col-link-3 comp-1"></div></a>
                        <a href=""><div className="col-link-3 comp-2"></div></a>
                        <a href=""><div className="col-link-3 comp-3"></div></a>
                        <a href=""><div className="col-link-3 comp-4"></div></a>
                        <a href=""><div className="col-link-3 comp-5"></div></a>
                        <a href=""><div className="col-link-3 comp-6"></div></a>
                        <a href=""><div className="col-link-3 comp-7"></div></a>
                        <a href=""><div className="col-link-3 comp-8"></div></a>
                        <a href=""><div className="col-link-3 comp-9"></div></a>
                    </div>
                </div>
            </div>
        );
    }
}

    Partner.propTypes = {};
    Partner.defaultProps = {};

export default Partner;
