import React from "react";
import { render } from "@testing-library/react";
import Medication from "./medication.jsx";
import {useLocation } from "react-router-dom";
import routeData from 'react-router';

const mockLocation = {
  pathname: '/browse/2',
  hash: '',
  search: '',
  state: ''
}


beforeEach(() => {
  jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation)
});


it("renders the Medication component correctly", () => {


    const { container } = render(<Medication id="2"/>);
    expect(container).toMatchSnapshot();
});
