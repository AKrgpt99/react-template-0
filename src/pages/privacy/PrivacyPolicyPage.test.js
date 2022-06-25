import renderer from "react-test-renderer";

import PrivacyPolicyPage from "./index";

it("renders the page", () => {
  const component = renderer.create(<PrivacyPolicyPage />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
