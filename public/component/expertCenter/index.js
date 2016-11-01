/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/18
 * Time: 下午7:30
 */
// import $ from 'jquery';
import Content from './content';
import BasicInfo from './basicInfo'
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import reducers from '../../reducers/expertCenter'
// import { loadExpertData } from '../../actions/fetchData'

require('../../styles/common.css');
require('../../styles/expertCenter.css');

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Content} />
            <Route path="/modifyBasicInfo" component={BasicInfo} />
            {/*<Route path="/modifyPhone" component={} />*/}
            {/*<Route path="/modifyPassword" component={} />*/}
        </Router>
    </Provider>,
    document.getElementById("content")
)

// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
    module.hot.accept();
}
