import React from "react";
import { render } from "@testing-library/react";
import Loader from "./Loader";

describe("Loader component", () => {
  it("should render the loader with three skeleton lines", () => {
    const { container } = render(<Loader />);
    const skeletonLines = container.querySelectorAll(".skeleton-line");

    expect(skeletonLines.length).toBe(2);
  });

  it("should have the 'skeleton', 'mb-3', 'm-3', 'shadow', and 'rounded' classes", () => {
    const { container } = render(<Loader />);
    const loaderDiv = container.querySelector(".skeleton");

    expect(loaderDiv).toHaveClass("mb-3");
    expect(loaderDiv).toHaveClass("m-3");
    expect(loaderDiv).toHaveClass("shadow");
    expect(loaderDiv).toHaveClass("rounded");
  });
});
