// import $ from 'jquery';
import Content from './content';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from '../../reducers/expertDetail'
import { loadExpertData } from '../../actions/fetchData'

require('../../styles/common.css');
require('../../styles/expertDetail.css');


const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

let id = location.pathname.split('/')[2];

store.dispatch(loadExpertData(id));

ReactDOM.render(
    <Provider store={store}>
        <Content />
    </Provider>,
    document.getElementById("content")
);


// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
    module.hot.accept();
}
