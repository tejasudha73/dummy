import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {routerReducer} from 'react-router-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import jokesReducer from './reducers/jokesReducer';
export default createStore(
    combineReducers({
        jokesReducer,
        routing: routerReducer
    }),
    {},	
    applyMiddleware(thunk , promise())
);