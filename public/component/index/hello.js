import React from 'react';
import Header from '../header/header';
import Footer from '../footer/index';

class Index extends React.Component {
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
                    <div className="col clearfix">
                        <div className="col-li">1</div>
                        <div className="col-li">2</div>
                        <div className="col-li">3</div>
                        <div className="col-li">4</div>
                        <div className="col-li">5</div>
                        <div className="col-li">5</div>
                    </div>
                </div>
                <Footer></Footer>
            </div>)
    }
}
export default Index;