import renderer from "react-test-renderer";

import Illustration from "./index";

it("renders the component", () => {
  const component = renderer.create(<Illustration />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
