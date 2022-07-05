import React from "react";
import clsx from "clsx";
import { useTheme } from "react-jss";
import { useSelector } from "react-redux";

import { useStyles } from "./styles";
import Illustration from "../../components/illustration";

function NotFound() {
  const colorScheme = useSelector((state) => state.darkMode.colorScheme);
  const theme = useTheme();
  const classes = useStyles({ theme, colorScheme });

  return (
    <>
      <Illustration name="astronaut" overflow="hidden" />
      <div className={clsx(classes.text)}>
        <h2>Houston, we have a problem.</h2>
        <h3>404: Not Found</h3>
        <p>
          The page you're looking for doesn't seem to exist. Please check the
          URL for any errors and try again.
        </p>
      </div>
    </>
  );
}

export default NotFound;
