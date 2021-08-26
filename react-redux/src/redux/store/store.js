import { applyMiddleware, createStore } from "redux"
import loggerMiddleware  from "redux-logger";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from "../reducers/rootReducer";

export default function configureStore(preloadedState){

    const middlewares = [loggerMiddleware , thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer]
    const composedEnhancers = composeWithDevTools(...enhancers)

    const store = createStore(
        rootReducer, 
        preloadedState,
        composedEnhancers
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;

}


