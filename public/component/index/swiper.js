/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/10
 * Time: 下午4:47
 */
import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
require('../../styles/swiper.min.css');

class swiper extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const params = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false,
            effect: 'fade'
        };

        return (
            <Swiper {...params}>
                <div className="swiper-slide slide-one swiper-slide-h">
                    <a href="#"></a>
                </div>
                <div className="swiper-slide slide-two swiper-slide-h">
                    <a href="#"></a>
                </div>
                <div className="swiper-slide slide-three swiper-slide-h">
                    <a href="#"></a>
                </div>
                <div className="swiper-slide slide-four swiper-slide-h">
                    <a href="#"></a>
                </div>
            </Swiper>
        )
    }
}

swiper.propTypes = {};
swiper.defaultProps = {};

export default swiper;
