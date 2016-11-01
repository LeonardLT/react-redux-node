/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/11/1
 * Time: 下午7:16
 */
import React, {Component} from 'react';
import Nav from './nav'
const img1 = require('../../img/expertDetail/ebg.jpg');

class BasicInfoContent extends Component {
    render() {
        return (

            <div className="container">
                <div className="flex mt130">
                    <Nav></Nav>
                    <div className="e-r-content">
                        <div className="e-c">
                            <div className="e-r-title">个人信息</div>
                            <div className="e-r-box">
                                <div className="input-box-max flex">
                                    <div className="max-left"></div>
                                    <div className="max-right pos-rel">
                                        <div className="upload">
                                            <img src={img1} alt="" />
                                            <input type="file" />
                                            <div className="hover-upload">
                                                <i className="iconfont icon-heart"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-box-max flex">
                                    <div className="max-left">
                                        <span className="">姓名</span>
                                    </div>
                                    <div className="max-right pos-rel">
                                        <div>
                                            <input type="text" className="input-max" />
                                        </div>
                                        <div className="max-sug none">输入正确的xxxxx</div>
                                    </div>
                                </div>
                                <div className="input-box-max flex">
                                    <div className="max-left">
                                        <span className="">邮箱</span>
                                    </div>
                                    <div className="max-right pos-rel">
                                        <div>
                                            <input type="text" className="input-max" />
                                        </div>
                                        <div className="max-sug none">输入正确的xxxxx</div>
                                    </div>
                                </div>
                                <div className="input-box-max flex">
                                    <div className="max-left">
                                        <span className="">公司名称</span>
                                    </div>
                                    <div className="max-right pos-rel">
                                        <div>
                                            <input type="text" className="input-max" />
                                        </div>
                                        <div className="max-sug none">输入正确的xxxxx</div>
                                    </div>
                                </div>
                                <div className="input-box-max flex">
                                    <div className="max-left">
                                        <span className="">行业</span>
                                    </div>
                                    <div className="max-right pos-rel">
                                        <div>
                                            <input type="text" className="input-max" />
                                        </div>
                                        <div className="max-sug none">输入正确的xxxxx</div>
                                    </div>
                                </div>
                                <div className="input-box-max flex">
                                    <div className="max-left">
                                        <span className="">职位</span>
                                    </div>
                                    <div className="max-right pos-rel">
                                        <div>
                                            <input type="text" className="input-max" />
                                        </div>
                                        <div className="max-sug none">输入正确的xxxxx</div>
                                    </div>
                                </div>
                                <div className="input-box-max flex">
                                    <div className="max-left">
                                        <span className="">常住地</span>
                                    </div>
                                    <div className="max-right pos-rel">
                                        <div>
                                            <div className="select-province2">
                                                <select name="" id="1">
                                                    <option value="123">北京</option>
                                                    <option value="234">陕西</option>
                                                    <option value="345">海南</option>
                                                </select>
                                            </div>
                                            <div className="select-city2">
                                                <select name="" id="2">
                                                    <option value="123">西安</option>
                                                    <option value="234">重庆</option>
                                                    <option value="345">北京</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="max-sug none">输入正确的xxxxx</div>
                                    </div>
                                </div>
                                <div className="input-box-max flex">
                                    <div className="max-left"></div>
                                    <div className="max-right">
                                        <div className="save-btn">保存</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

BasicInfoContent.propTypes = {};
BasicInfoContent.defaultProps = {};

export default BasicInfoContent;
