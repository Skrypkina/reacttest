export const ActionType = {
  FETCH_USERS: "FETCH_USERS"
};

export const fetchUsers = users => ({
  type: ActionType.FETCH_USERS,
  payload: users
});
