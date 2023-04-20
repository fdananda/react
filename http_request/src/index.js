import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HTTPRequest from './HTTPRequest'

var destination = document.querySelector('#root')

ReactDOM.render(
  <div>
    <HTTPRequest/>
  </div>, destination
);
