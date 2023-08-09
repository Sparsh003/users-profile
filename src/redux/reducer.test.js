import reducer from "./reducer";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  DELETE_USER,
} from "./action";

describe("reducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      loading: false,
      posts: [],
      error: "",
    };
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_USERS_REQUEST", () => {
    const initialState = {
      loading: false,
      posts: [],
      error: "",
    };
    const expectedState = {
      loading: true,
      posts: [],
      error: "",
    };
    const action = { type: FETCH_USERS_REQUEST };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle FETCH_USERS_SUCCESS", () => {
    const initialState = {
      loading: true,
      posts: [],
      error: "",
    };
    const users = [{ id: 1, name: "User 1" }, { id: 2, name: "User 2" }];
    const expectedState = {
      loading: false,
      posts: users,
      error: "",
    };
    const action = { type: FETCH_USERS_SUCCESS, payload: users };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle FETCH_USERS_FAILURE", () => {
    const initialState = {
      loading: true,
      posts: [],
      error: "",
    };
    const error = "Network Error";
    const expectedState = {
      loading: false,
      posts: [],
      error: error,
    };
    const action = { type: FETCH_USERS_FAILURE, payload: error };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle DELETE_USER", () => {
    const initialState = {
      loading: false,
      posts: [
        { id: 1, name: "Leanne Graham", email: "Sincere@april.biz", phone: "1-770-736-8031 x56442" },
        { id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv", phone: "010-692-6593 x09125" },
      ],
      error: "",
    };
    const userIdToDelete = 2;
    const expectedState = {
      loading: false,
      posts: [  { id: 1, name: "Leanne Graham", email: "Sincere@april.biz", phone: "1-770-736-8031 x56442" },],
      error: "",
    };
    const action = { type: DELETE_USER, payload: userIdToDelete };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("should return the current state for unknown action types", () => {
    const initialState = {
      loading: false,
      posts: [],
      error: "",
    };
    const unknownAction = { type: "UNKNOWN_ACTION" };
    expect(reducer(initialState, unknownAction)).toEqual(initialState);
  });
});
