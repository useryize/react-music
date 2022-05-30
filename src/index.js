import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './utils/flexible';
import './assets/style/global.module.css';
// import './assets/iconfont/iconfont.css'
import 'https://at.alicdn.com/t/font_3420473_4hc5n5rj5hg.css?spm=a313x.7781069.1998910419.86&file=font_3420473_4hc5n5rj5hg.css'
import VConsole from 'vconsole';
import 'antd-mobile/es/global'
new VConsole();

console.error(process, process.env);

const Root = () => (
    <App />
);

ReactDOM.render(<Root />, document.getElementById('root'));
