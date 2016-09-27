/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/9/27
 * Time: 下午6:02
 */
import React, {Component, PropTypes,} from 'react';
require('../../styles/header.css');

class Footer extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const hideEle = this.refs.index;
        console.log(hideEle);

        hideEle.style.display = "none";

        e.preventDefault();
        e.stopPropagation();
    }

    render() {
        return (
            <div className="header">
                <div className="container">
                    <ul className="clearfix">
                        <li>
                            版权信息
                        </li>
                        <li>
                            联系我们
                        </li>
                        <li>
                            关于我们
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
