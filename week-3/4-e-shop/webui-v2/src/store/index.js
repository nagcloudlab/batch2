

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const intialState = {
    cart: {},
    items: [],
    reviews: {}
}

const middleware = [thunk]
const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(rootReducer, intialState, composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
));
export default store;