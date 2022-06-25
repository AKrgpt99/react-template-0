import React from "react";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import { useTheme } from "react-jss";
import { useSelector } from "react-redux";

import { useStyles } from "./styles";

function NotFoundPage() {
  const colorScheme = useSelector((state) => state.theme.colorScheme);
  const theme = useTheme();
  const classes = useStyles({ theme, colorScheme });
  const location = useLocation();
  const code = location.state.code;
  const views = {
    404: (
      <>
        <div className={clsx(classes.illustration)}>
          <div className="bg"></div>
          <div className="astronaut">👩🏽‍🚀</div>
        </div>
        <div className={clsx(classes.text)}>
          <h2>Houston, we have a problem.</h2>
          <h3>404: Not Found</h3>
          <p>
            The page you're looking for doesn't seem to exist. Please check the
            URL for any errors and try again.
          </p>
        </div>
      </>
    ),
  };

  return (
    <div className={clsx(classes.pageContainer)}>
      <div className={clsx(classes.section)}>{views[code]}</div>
    </div>
  );
}

export default NotFoundPage;
