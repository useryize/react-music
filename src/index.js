import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages';
const Root = () => (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

ReactDOM.render(<Root />, document.getElementById('root'));