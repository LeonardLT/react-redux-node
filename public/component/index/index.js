import Index from './hello.js';
import React from 'react';
import ReactDOM from 'react-dom';
require('../../styles/index.css');

// import $ from 'jquery';

ReactDOM.render(
  <Index />,
  document.getElementById("content")
);

// use jquery
// console.log($('#content').text());

// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
  module.hot.accept();
}
