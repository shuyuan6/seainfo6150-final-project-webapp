import React from "react";
import { render } from "@testing-library/react";
import Faqs from "./Faqs.jsx";

it("renders the Faqs component correctly", () => {
  const { container } = render(<Faqs />);
  expect(container).toMatchSnapshot();
});
