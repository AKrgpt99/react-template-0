import renderer from "react-test-renderer";

import Layout from "./index";

it("renders the component", () => {
  const component = renderer.create(<Layout />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
