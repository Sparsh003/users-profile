import React from "react";
import { render } from "@testing-library/react";
import Error from "./Error";

describe("Error component", () => {
  it("should render the error message", () => {
    const { getByText } = render(<Error />);
    const errorMessage = getByText(
      "Something went wrong.Please try again later.."
    );

    expect(errorMessage).toBeInTheDocument();
  });
});
