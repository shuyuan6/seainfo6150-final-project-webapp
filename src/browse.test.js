import React from "react";
import { render } from "@testing-library/react";
import Browse from "./browse.jsx";

it("renders the Browse component correctly", () => {
  const { container } = render(<Browse />);
  expect(container).toMatchSnapshot();
});
