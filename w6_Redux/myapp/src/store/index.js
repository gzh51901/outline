import {createStore} from 'redux';

import cartReducer from './cartReducer';

let store = createStore(cartReducer);

export default store;