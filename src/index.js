import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './utils/flexible';
import './assets/style/global.module.css';
var VConsole = require('vconsole');
new VConsole();

const Root = () => (
    <App />
);

ReactDOM.render(<Root />, document.getElementById('root'));