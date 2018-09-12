import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers'


const store = createStore(
    reducers,
    {},
    compose(
        //functional programming utility, used to apply multiple middlewares in a row
        applyMiddleware(thunk)
    )
);

export default store;