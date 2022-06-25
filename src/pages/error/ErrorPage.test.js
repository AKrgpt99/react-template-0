import renderer from "react-test-renderer";

import ErrorPage from "./index";

it("renders the page", () => {
  const component = renderer.create(<ErrorPage />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
