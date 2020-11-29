import React from "react";
import { render } from "@testing-library/react";
import Weather from "./Weather.jsx";

it("renders the Weather component correctly", () => {
  const { container } = render(<Weather />);
  expect(container).toMatchSnapshot();
});
