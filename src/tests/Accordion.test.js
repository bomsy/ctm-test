import React from "react";
import Accordion from "../Accordion.js";
import renderer from "react-test-renderer";

test("Should load the accordion and collapse the first", () => {
  const cards = [
    {
      code: "CARD_274",
      name: "Barclaycard Platinum Credit Card",
      apr: 22.9,
      cashback: 120.0,
      information:
        "5% cashback during your first 3 months up to £2,000 in purchases (T&C's Apply)."
    },
    {
      code: "CARD_822",
      name: "Virgin Money Credit Card",
      apr: 28.2,
      cashback: 106.25,
      information:
        "5% cashback in first 3 months up to £125 (on the first £2,500 of purchases). After the first three months ongoing cashback is paid at 1.25%."
    }
  ];
  const component = renderer.create(<Accordion cards={cards} />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
