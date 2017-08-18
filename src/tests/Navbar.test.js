import React from "react";
import Navbar from "../Navbar.js";
import renderer from "react-test-renderer";

test("Should load the navbar ", () => {
  const component = renderer.create(<Navbar />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
