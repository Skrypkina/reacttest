import axios from 'axios';
import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersError,
} from './usersAction';

export const fetchUsers = query => dispatch => {
  dispatch(fetchUsersStart());

  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    .then(response => {
      console.log(response.data.items);
      dispatch(fetchUsersSuccess(response.data.items));
    })
    .catch(error => {
      dispatch(fetchUsersError(error));
    });
};
