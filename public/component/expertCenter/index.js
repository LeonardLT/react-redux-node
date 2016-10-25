/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/18
 * Time: 下午7:30
 */
// import $ from 'jquery';
import Content from './content';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from '../../reducers/expertCenter'
import { Router, Route, hashHistory } from 'react-router';
// import { loadExpertData } from '../../actions/fetchData'

require('../../styles/common.css');
require('../../styles/expertCenter.css');

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        {/*<Router history={hashHistory}>*/}
            {/*<Route path="/expertCenter/:id" component={Content}/>*/}
        {/*</Router>*/}
        <Content></Content>
    </Provider>,
    document.getElementById("content")
);


// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
    module.hot.accept();
}
