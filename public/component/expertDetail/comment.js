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

    fetchMoreData(){
        const { dispatch, listData } = this.props;
        let page = listData.page;

        page++;

        dispatch(receiveData(page));
        
    }
    

    render() {
        return (
            <div className="container">
                <div className="tc mt30">
                    <img src={img1} alt="" className="l-title" />
                </div>
                <div className="line"></div>
                <div className="expert-info clearfix">
                    <div className="flex g-line ptb40">
                        <div className="expert-img">
                            <img src="" alt="" />
                        </div>
                        <div className="expert-intro mt13">
                            <h1 className="bold">
                                马胜军
                                <span className="mini-font">
                        <i className="iconfont icon-heart"></i>
                        <span>北京</span>
                    </span>
                            </h1>
                            <div className="topic-intro mt15">
                                <p>
                                    移动互联网时代，编辑、内容运营或者叫新媒体运营，工作的性质和作用都在发生变化，作为一名合格的编辑、运营需要掌握哪些技能？如何提升自己在媒体行业中的竞争力？转型能有哪些出路？各有什么利弊？
                                    移动互联网时代，编辑、内容运营或者叫新媒体运营，工作的性质和作用都变化
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="see-more mtb40">
                    <a onClick={ (e) => this.fetchMoreData() }>查看更多</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listData: state.listData
    }
}

const WrapedComment = connect(mapStateToProps)(Comment);
export default WrapedComment;

// export default connect(state => {
//   return {
//     listData: state.listData
//   }
// })(Comment);