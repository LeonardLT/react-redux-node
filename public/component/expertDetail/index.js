// import $ from 'jquery';
import Content from './content';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from '../../reducers/expertDetail'

require('../../styles/common.css');
require('../../styles/expertDetail.css');


const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

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
