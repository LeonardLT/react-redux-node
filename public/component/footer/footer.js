/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/9/27
 * Time: 下午6:02
 */
import React, {Component} from 'react'
import footerLogo from '../../img/index/logo2.png'
import weibo from '../../img/index/code.png'

class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="clearfix">
                        <div className="left-logo">
                            <div className="footer-logo">
                                <img src={footerLogo} alt="锦囊专家" />
                            </div>
                            <ul className="footer-left">
                                <li className="f-four"><a href="">首页</a></li>
                                <li className="f-four"><a href="">下载中心</a></li>
                                <li className="f-four"><a href="">成功案例</a></li>
                                <li className="f-four"><a href="">关于我们</a></li>
                            </ul>
                        </div>
                        <div className="right-phone">
                            <dl className="f-phone">
                                <dt>联系我们</dt>
                                <dd className="f-mb">
                                    <i className="iconfont icon-mail"></i>
                                    <a href="mailto:JNexpert@gmail.com">JNexpert@gmail.com</a>
                                </dd>
                                <dd>
                                    <i className="iconfont icon-phone"></i>010-89839968
                                </dd>
                            </dl>
                            <dl className="f-phone">
                                <dt>关注我们</dt>
                                <dd className="f-mb">
                                    <span className="f-weibo-f">新浪微博: </span><i className="iconfont icon-weibo f-weibo"></i>
                                </dd>
                                <dd>
                                    公众号: JNexpert
                                </dd>
                            </dl>
                            <dl className="f-code">
                                <img src={weibo} alt="" className="jn-code" />
                            </dl>
                        </div>
                    </div>
                    <p className="version">北京捷恩旭技术咨询有限公司 Copyright © 2016 | 京ICP备15002655号</p>
                </div>
            </div>
        );
    }
}

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
