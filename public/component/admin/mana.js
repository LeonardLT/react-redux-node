/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/9/22
 * Time: 下午3:20
 */
import React from 'react';
import Header from '../header/header';
import Footer from '../footer/index';

class Hello extends React.Component {
    render() {
        const red = {
            display: 'inline-block',
            color: 'blue',
            fontSize: '20px'
        };

        return (
        <div className="">
            <Header></Header>
            <div className="container">
                <h2>test <span style={red}>admin</span>'s page</h2>
            </div>
            <Footer></Footer>
        </div>)
    }
}

export default Hello;