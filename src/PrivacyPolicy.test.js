import React from "react";
import { render } from "@testing-library/react";
import PrivacyPolicy from "./PrivacyPolicy.jsx";

it("renders the PrivacyPolicy component correctly", () => {
  const { container } = render(<PrivacyPolicy />);
  expect(container).toMatchSnapshot();
});
