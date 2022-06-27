import renderer from "react-test-renderer";

import Footer from "./index";

it("renders the component", () => {
  const component = renderer.create(<Footer />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
