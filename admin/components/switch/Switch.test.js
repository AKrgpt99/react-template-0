import renderer from "react-test-renderer";

import Switch from "./index";

it("renders the component", () => {
  const component = renderer.create(<Switch />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
