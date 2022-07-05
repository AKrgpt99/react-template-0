import renderer from "react-test-renderer";

import Page from "./index";

it("renders the component", () => {
  const component = renderer.create(<Page />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
