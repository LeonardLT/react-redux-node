/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/19
 * Time: 上午10:32
 */
import React, {Component} from 'react';

class Data extends Component {
    render() {
        return (
            <div className="e-c mt-30">
                <div className="total clearfix pd25">
                    <div className="col-4 tc f24">
                        <span>订单</span>
                        <span className="red">11</span>
                    </div>
                    <div className="col-4 tc f24">
                        <span>收藏</span>
                        <span className="red">66</span>
                    </div>
                    <div className="col-4 tc f24">
                        <span>提问</span>
                        <span className="red">5</span>
                    </div>
                    <div className="col-4 tc f24">
                        <span>献计</span>
                        <span className="red">3</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Data;
