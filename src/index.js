import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './utils/flexible';
import './assets/style/global.module.css';
import VConsole from 'vconsole';
new VConsole();

const Root = () => (
    <App />
);

ReactDOM.render(<Root />, document.getElementById('root'));