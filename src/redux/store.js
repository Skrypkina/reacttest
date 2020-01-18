import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
import { composeWithDevTools } from 'redux-devtools-extension';

import usersReducer from './users/usersReducer';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  users: usersReducer,
});

const middleware = [ReduxThunk];
const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
