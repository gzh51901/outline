import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';console.log(store)


ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>, 
    document.getElementById('root')
);

