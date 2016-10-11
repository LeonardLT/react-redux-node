/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/10
 * Time: 下午4:27
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';

const Category = ( {menus} ) => {
    return (
        <div className="container pos-rel mt">
            <div className="cate-container">
                <div className="category">
                    <div className="category-box">
                        <ul className="ca-ul">
                            {
                                menus.map((item, index) => {
                                    const containerClass = item.content.length > 8 ? 'citem-detail citem-col-2' : 'citem-detail citem-col-1';
                                    return (
                                        <li className="ca-li" key={index}>
                                            <a className="cate-a" href="">{item.item}</a>
                                            <div className={containerClass}>
                                                <ul className="citem-children citem-chi-col">
                                                    {
                                                        item.content.map((subMenu, index) => {
                                                            if(index >= 8) {
                                                                return;
                                                            }
                                                            return (
                                                                <li className="citem-chi-list" key={index}>
                                                                    <a href="#" className="choose">{subMenu}</a>
                                                                </li>
                                                            )
                                                        })
                                                    }

                                                </ul>
                                                <ul className="citem-children citem-chi-col">
                                                    {
                                                        item.content.map((subMenu, index) => {
                                                            if(index >= 8 && index < 16) {
                                                                return (
                                                                    <li className="citem-chi-list" key={index}>
                                                                        <a href="#" className="choose">{subMenu}</a>
                                                                    </li>
                                                                )
                                                            }
                                                        })
                                                    }

                                                </ul>
                                            </div>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => (state)

// category.propTypes = {};
// category.defaultProps = {};

let wrapedCategory = connect(mapStateToProps)(Category);

export default wrapedCategory;
