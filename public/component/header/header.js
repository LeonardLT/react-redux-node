/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/9/26
 * Time: 上午10:47
 */
import React, {Component, PropTypes,} from 'react';
require('../../styles/header.css');

class Header extends Component {
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
                        <li ref="index">
                            <a href="#" onClick={ this.handleClick }>首页</a>
                        </li>
                        <li>
                            <a href="#">微课</a>
                        </li>
                        <li>
                            <a href="#">登陆</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
