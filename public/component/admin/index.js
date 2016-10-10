import Hello from './mana.js';
import React from 'react';
import ReactDOM from 'react-dom';

require('../../styles/common.css');
require('../../styles/index.css');
// import $ from 'jquery';

ReactDOM.render(
    <Hello />,
    document.getElementById("content")
);


// use jquery
// console.log($('#content').text());


// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
    module.hot.accept();
}
