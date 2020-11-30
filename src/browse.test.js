import React from "react";
import { render } from "@testing-library/react";
import Browse from "./browse.jsx";
import { BrowserRouter } from "react-router-dom";

it("renders the Browse component correctly", () => {
  const { container } = render(<BrowserRouter><Browse /></BrowserRouter>);
  expect(container).toMatchSnapshot();
});
