import axios from "axios";
/** action types declaration */
export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
export const DELETE_USER = "DELETE_USER";

export const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});
export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});
export const handleDeleteUser = (id) => ({ type: DELETE_USER, payload: id });

export const fetchUsers = () => async (dispatch) => {
  try {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    const response = data.data
    dispatch({
      type: FETCH_USERS_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: FETCH_USERS_FAILURE,
      payload: error.message,
    });
  }
};
