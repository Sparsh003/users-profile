import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  fetchUsers,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./action";


const mockStore = configureMockStore([thunk]);
const mockAxios = new MockAdapter(axios);

describe("fetchUsers action", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it("dispatches FETCH_USERS_SUCCESS when fetching users is successful", async () => {
    const expectedUsers = [
      { id: 1, name: "User 1" },
      { id: 2, name: "User 2" },
    ];
    mockAxios.onGet("https://jsonplaceholder.typicode.com/users").reply(200, expectedUsers);

    const store = mockStore({});

    await store.dispatch(fetchUsers());

    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: FETCH_USERS_SUCCESS, payload: expectedUsers });
  });

  it("dispatches FETCH_USERS_FAILURE when fetching users fails", async () => {
    const errorMessage = "Network Error";
    mockAxios.onGet("https://jsonplaceholder.typicode.com/users").networkError();

    const store = mockStore({});

    await store.dispatch(fetchUsers());

    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: FETCH_USERS_FAILURE, payload: errorMessage });
  });
});
