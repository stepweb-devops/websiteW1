import { applyMiddleware, combineReducers, createStore, compose } from 'redux';

import thunkMiddleware from 'redux-thunk';

import session from './pages/WelcomePage/reducers';

const rootReducer = combineReducers({
    session
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,

    composeEnhancers(
        applyMiddleware(
            thunkMiddleware
        )
    )
);

export default store;
