import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  DELETE_USER,
} from "./action";

/** Default inital state */
const initialState = {
  loading: false,
  posts: [],
  error: "",
};

/** In reducer action type function execution stored in state */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
