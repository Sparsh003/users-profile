import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import store from './redux/store';
import App from "./App";

test("renders App component", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const headLine = getByText(/User Record List/i);
  expect(headLine).toBeInTheDocument();
});
