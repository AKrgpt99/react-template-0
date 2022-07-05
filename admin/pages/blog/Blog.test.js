import renderer from "react-test-renderer";

import BlogPage from "./index";

it("renders the page", () => {
  const component = renderer.create(<BlogPage />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
