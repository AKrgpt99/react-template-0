import renderer from "react-test-renderer";

import Header from "./index";

it("renders the component", () => {
  const component = renderer.create(<Header />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
