import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

// Create a mock Redux store
const mockStore = configureMockStore([thunkMiddleware]);

describe('Redux Store Configuration', () => {
  it('should create a store', () => {
    const initialState = {};
    const store = mockStore(initialState);

    expect(store.getState()).toEqual(initialState);
  });
});
