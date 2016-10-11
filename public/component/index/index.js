// import $ from 'jquery';
import Index from './content.js';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from '../../reducers'
import { loadMenus, loadNumber } from '../../actions/menus'

require('../../styles/common.css');
require('../../styles/swiper.min.css');
require('../../styles/index.css');

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

store.dispatch(loadMenus);
store.dispatch(loadNumber);

ReactDOM.render(
    <Provider store={store}>
      <Index />
    </Provider>,
  document.getElementById("content")
);


// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
  module.hot.accept();
}
