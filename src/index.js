import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './utils/flexible';
import './assets/style/global.module.css';
const Root = () => (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

ReactDOM.render(<Root />, document.getElementById('root'));