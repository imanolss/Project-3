import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import MyProvider from './context/index'
import 'antd/dist/antd.css'

ReactDOM.render(<MyProvider>
                <Router />
                </MyProvider>, document.getElementById('root'));

serviceWorker.unregister();
