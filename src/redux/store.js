import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { authReducer, terminalsReducer, buyersReducer } from './reducers';
const reducers = combineReducers({
	auth: authReducer,
	terminals: terminalsReducer,
	buyers: buyersReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunkMiddleware))
);
