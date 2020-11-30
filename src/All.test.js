import React from "react";
import { render } from "@testing-library/react";
import All from "./All.jsx";
import { BrowserRouter } from "react-router-dom";

it("renders the All component correctly", () => {
  const { container } = render(<BrowserRouter><All /></BrowserRouter>);
  expect(container).toMatchSnapshot();
});
