export const ActionType = {
  FETCH_USERS_START: 'FETCH_USERS_START',
  FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR: 'FETCH_USERS_ERROR',
  GET_QUERY: 'GET_QUERY',
};

export const fetchUsersStart = () => ({
  type: ActionType.FETCH_USERS_START,
});

export const fetchUsersSuccess = users => ({
  type: ActionType.FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersError = error => ({
  type: ActionType.FETCH_USERS_ERROR,
  payload: error,
});

export const getUserQuery = query => ({
  type: ActionType.GET_QUERY,
  payload: query,
});
