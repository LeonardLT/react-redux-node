import React from 'react';
import Header from '../header/header';
import Footer from '../footer/index';

class Hello extends React.Component {
    render() {
        const red = {
            display: 'inline-block',
            color: '#f65131',
            fontSize: '20px'
        };

        return (
            <div className="">
                <Header></Header>
                <div className="container">
                    <h2>test <span style={red}>index</span>'s page</h2>
                </div>
                <Footer></Footer>
            </div>)
    }
}
export default Hello;