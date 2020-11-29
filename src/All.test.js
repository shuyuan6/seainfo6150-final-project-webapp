import React from "react";
import { render } from "@testing-library/react";
import All from "./All.jsx";

it("renders the All component correctly", () => {
  const { container } = render(<All />);
  expect(container).toMatchSnapshot();
});
