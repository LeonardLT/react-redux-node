/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/10
 * Time: 下午6:32
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
const img1 = require('../../img/index/font8.png');
const img2 = require('../../img/index/font7.png');
const img3 = require('../../img/index/font1.png');
const img4 = require('../../img/index/font3.png');

const Data = ( props ) => {
    let numberData = props.menus.number;

    return numberData ? (
        <div className="data-content tc">
            <div className="container">
                <p className="data-p dp1">
                    <span id="num1">{numberData[0]}</span>
                    <img src={img1} alt="" className="data-br num1-img" />
                    <span id="num2" className="num2">{numberData[1]}</span>
                    <img src={img2} alt="" className="num2-img" />
                </p>
                <p className="data-p dp2">
                    <span id="num3">{numberData[2]}</span>
                    <img src={img3} alt="" className="data-br num3-img" />
                    <span id="num4">{numberData[3]}</span>
                    <img src={img4} alt="" className="num4-img" />
                </p>
                <div className="publish-demand btn ">发布需求</div>
            </div>
        </div>
    ) : <div>error...</div>
}

const mapStateToProps = (state) => (state)

let wrapedData = connect(mapStateToProps)(Data);

export default wrapedData;
