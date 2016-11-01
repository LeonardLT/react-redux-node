/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/19
 * Time: 上午10:47
 */
import React, {Component} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import BasicInfoContent from './BasicInfoContent';

class BasicInfo extends Component {
    render() {

        return (
            <div className="">
                <Header></Header>
                <BasicInfoContent></BasicInfoContent>
                <Footer></Footer>
            </div>)
    }
}

export default BasicInfo;
