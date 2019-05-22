import {createStore} from 'redux';

import {composeWithDevTools as devTools } from 'redux-devtools-extension';

import cartReducer from './cartReducer';

let store = createStore(cartReducer,devTools());

export default store;