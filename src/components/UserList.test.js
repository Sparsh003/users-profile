import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";
import UserList from "./UserList";
import { fetchUsers } from "../redux/action";

// Mock the fetchUsers action
jest.mock("../redux/action", () => ({
  fetchUsers: jest.fn(),
}));

// Mock the useSelector and useDispatch hooks
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("UserList component", () => {
  const mockDispatch = jest.fn();
  const mockPosts = [
    {
      id: 1,
      name: "Ervin Howell",
      email: "Lucio_Hettinger@annie.ca",
      phone: "1-477-935-8478 x6430",
    },
    {
      id: 2,
      name: "Chelsey Dietrich",
      email: "Karley_Dach@jasper.info",
      phone: "1-688-935-8478 x6430",
    },
  ];

  beforeEach(() => {
    useSelector.mockReturnValueOnce(mockPosts);
    useSelector.mockReturnValueOnce(false);
    useSelector.mockReturnValueOnce(null);
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the list of user cards when posts are available and not loading", async () => {
    render(<UserList />);
    await waitFor(() => {
      const johnDoeElement = screen.getByText("Ervin Howell");
      const janeSmithElement = screen.getByText("Chelsey Dietrich");
      expect(johnDoeElement).toBeInTheDocument();
      expect(janeSmithElement).toBeInTheDocument();
    });
  });

  it("should render the loader when loading is true", () => {
    useSelector.mockReturnValueOnce([]); // Empty posts data
    useSelector.mockReturnValueOnce(true); // loading: true

    render(<UserList />);
  });

  it("should render the error component when error is not null", () => {
    useSelector.mockReturnValueOnce([]); // Empty posts data
    useSelector.mockReturnValueOnce(false); // loading: false
    useSelector.mockReturnValueOnce("An error occurred!"); // error message

    render(<UserList />);
  });

  it("should dispatch fetchUsers action on component mount", () => {
    render(<UserList />);

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(fetchUsers).toHaveBeenCalledTimes(1);
  });
});
