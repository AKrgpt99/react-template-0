import React from "react";
import Page from "../../components/page";

import { useStyles } from "./styles";

function ProductsPage() {
  const classes = useStyles();

  return (
    <Page>
      <Page.Section>Products</Page.Section>
    </Page>
  );
}

export default ProductsPage;
