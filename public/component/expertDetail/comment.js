/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/18
 * Time: 下午12:17
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { receiveData } from '../../actions/fetchData';
const img1 = require('../../img/expertDetail/4.png');
const img2 = require('../../img/expertDetail/2.jpg');


class Comment extends Component {

    constructor(props) {
        super(props)
        this.fetchMoreData = this.fetchMoreData.bind(this);
    }

    fetchMoreData() {
        const { dispatch, listData } = this.props;
        let page = listData.page;

        page++;

        dispatch(receiveData(page));
        
    }
    

    render() {
        const commentList = this.props.listData.list;

        return (
            <div className="container">
                <div className="tc mt30">
                    <img src={img1} alt="" className="l-title" />
                </div>
                <div className="line"></div>
                {
                    commentList.map((item, index) => {
                        return (
                            <div className="expert-info clearfix" key={index}>
                                <div className="flex g-line ptb40">
                                    <div className="expert-img">
                                        <img src={img2} alt="" />
                                    </div>
                                    <div className="expert-intro mt13">
                                        <h1 className="bold">
                                            {item.memberName}
                                            <span className="mini-font">
                                    <i className="iconfont icon-heart"></i>
                                    <span>{item.commentTime}</span>
                                </span>
                                        </h1>
                                        <div className="topic-intro mt15">
                                            <p>{item.commentDetails}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="see-more mtb40">
                    <a onClick={ (e) => this.fetchMoreData() }>查看更多</a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listData: state.listData
    }
}

const WrapedComment = connect(mapStateToProps)(Comment);
export default WrapedComment;
