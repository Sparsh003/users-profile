import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useDispatch } from "react-redux";
import Card from "./Card";
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

const mockDispatch = jest.fn();

describe("Card component", () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const samplePost = {
    id: 1,
    name: "JLeanne Graham",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
  };

  it("should render card component", () => {
    const { getByText, getByAltText } = render(<Card  post={samplePost} />);

    expect(getByText("JLeanne Graham")).toBeInTheDocument();
    expect(getByText("Phone: 1-770-736-8031 x56442")).toBeInTheDocument();
    expect(getByText("Email: Sincere@april.biz")).toBeInTheDocument();

    fireEvent.click(getByAltText("delete"));
    expect(mockDispatch).toHaveBeenCalledWith({ type: "DELETE_USER", payload: 1 });
  });
});
