import React from "react";
import { render } from "@testing-library/react";
import ContactInfo from "./ContactInfo.jsx";

it("renders the ContactInfo component correctly", () => {
  const { container } = render(<ContactInfo />);
  expect(container).toMatchSnapshot();
});
