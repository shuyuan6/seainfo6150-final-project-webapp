import React from "react";
import { render } from "@testing-library/react";
import Certifications from "./Certifications.jsx";

it("renders the Certifications component correctly", () => {
  const { container } = render(<Certifications />);
  expect(container).toMatchSnapshot();
});
