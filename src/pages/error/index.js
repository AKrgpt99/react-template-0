import React from "react";

import Page from "../../components/page";
import NotFound from "./NotFound.jsx";

function NotFoundPage({ code }) {
  const views = {
    404: <NotFound />,
  };

  return (
    <Page>
      <Page.Section>{views[code]}</Page.Section>
    </Page>
  );
}

export default NotFoundPage;
