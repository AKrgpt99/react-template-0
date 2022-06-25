import renderer from "react-test-renderer";

import IndexPage from "./index";

it("renders the page", () => {
  const component = renderer.create(<IndexPage />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
