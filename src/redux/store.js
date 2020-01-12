import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import usersReducer from "./users/usersReducer";

const rootReducer = combineReducers({
  users: usersReducer
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
