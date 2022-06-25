import React from "react";
import clsx from "clsx";
import { useTheme } from "react-jss";
import { useSelector } from "react-redux";

import { useStyles } from "./styles";
import Clouds from "../../images/clouds.png";

function IndexPage() {
  const colorScheme = useSelector((state) => state.theme.colorScheme);
  const theme = useTheme();
  const classes = useStyles({ theme, colorScheme });

  return (
    <div className={clsx(classes.pageContainer)}>
      <div className={clsx(classes.section)}>
        <div className={clsx(classes.illustration)}>
          <img src={Clouds} alt="clouds" className="clouds" />
          <div className="rocket">🚀</div>
        </div>
        <div className={clsx(classes.text)}>
          <h2>Ready for take off!</h2>
          <p>
            Get started by editing <code>src/app/index.js</code>. This template
            comes with routing and state management already configured.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
