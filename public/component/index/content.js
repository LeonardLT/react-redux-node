import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import Category from './category'
import Swiper from './swiper'
import DataContent from './data'
import Fix from './fix'
import Question from './question'
import Expert from './expert'
import Recommend from './recommend'

class Index extends React.Component {
    render() {

        return (
            <div className="">
                <Header></Header>
                <Category></Category>
                <Swiper></Swiper>
                <Fix></Fix>
                <DataContent></DataContent>
                <Question></Question>
                <Expert></Expert>
                <Recommend></Recommend>
                <Footer></Footer>
            </div>)
    }
}
export default Index;