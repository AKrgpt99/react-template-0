import React from "react";
import clsx from "clsx";
import { useTheme } from "react-jss";
import { useSelector } from "react-redux";

import { useStyles } from "./styles";
import Page from "../../components/page";
import Illustration from "../../components/illustration";

function IndexPage() {
  const colorScheme = useSelector((state) => state.theme.colorScheme);
  const theme = useTheme();
  const classes = useStyles({ theme, colorScheme });

  return (
    <Page>
      <Page.Section>
        <Illustration name="rocket" />
        <div className={clsx(classes.text)}>
          <h2>Ready for take off!</h2>
          <p>
            Get started by editing <code>src/app/index.js</code>. This template
            comes with routing and state management already configured.
          </p>
        </div>
      </Page.Section>
    </Page>
  );
}

export default IndexPage;
