import React from "react";
import Page from "../../components/page";

import { useStyles } from "./styles";

function BlogPage() {
  const classes = useStyles();

  return (
    <Page>
      <Page.Section>Blog</Page.Section>
    </Page>
  );
}

export default BlogPage;
