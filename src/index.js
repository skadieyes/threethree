import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Moon from './pages/moon';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Moon />, document.getElementById('root'));
registerServiceWorker();
