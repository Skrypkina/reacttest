import { combineReducers } from 'redux';
import { ActionType } from './usersAction';

const usersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_USERS_SUCCESS:
      return payload;
    default:
      return state;
  }
};

const loadingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_USERS_START:
      return true;
    case ActionType.FETCH_USERS_SUCCESS:
    case ActionType.FETCH_USERS_ERROR:
      return false;
    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_USERS_START:
      return null;
    case ActionType.FETCH_USERS_ERROR:
      return payload;
    default:
      return state;
  }
};

const queryReducer = (state = '', { type, payload }) => {
  switch (type) {
    case ActionType.GET_QUERY:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items: usersReducer,
  loadind: loadingReducer,
  error: errorReducer,
  query: queryReducer,
});
