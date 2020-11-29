import React from "react";
import { render } from "@testing-library/react";
import WhoWeAre from "./WhoWeAre.jsx";

it("renders the WhoWeAre component correctly", () => {
  const { container } = render(<WhoWeAre />);
  expect(container).toMatchSnapshot();
});
