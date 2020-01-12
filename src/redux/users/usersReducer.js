import { ActionType } from "./usersAction";

const usersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_USERS:
      return payload;
    default:
      return state;
  }
};

export default usersReducer;
