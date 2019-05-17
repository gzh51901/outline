import React from 'react';
import {render} from 'react-dom';

import {BrowserRouter,HashRouter,Route} from 'react-router-dom';

import App from './App';

render(
    <HashRouter>
        {/* <Route component={App}/> */}
        <App/>
    </HashRouter>
    ,
    document.querySelector('#app')
);