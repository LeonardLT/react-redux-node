/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/9/22
 * Time: 下午3:20
 */
import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Container from './container';

class Content extends React.Component {
    render() {

        return (
        <div className="">
            <Header></Header>
            <Container></Container>
            <Footer></Footer>
        </div>)
    }
}

export default Content;