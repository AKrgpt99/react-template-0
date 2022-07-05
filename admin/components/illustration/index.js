import React from "react";
import clsx from "clsx";
import { useTheme } from "react-jss";
import { useSelector } from "react-redux";

import { useStyles } from "./styles";
import Rocket from "./Rocket.jsx";
import Astronaut from "./Astronaut.jsx";

function Illustration({ name, width, height, ...extraProps }) {
  const colorScheme = useSelector((state) => state.darkMode.colorScheme);
  const theme = useTheme();
  const classes = useStyles({ theme, colorScheme });

  const views = {
    rocket: <Rocket />,
    astronaut: <Astronaut />,
  };

  return (
    <div
      className={clsx(classes.illustration)}
      style={{
        width: width ? width : "384px",
        height: height ? height : width ? width : "384px",
        borderRadius: height ? height : width ? width : "384px",
        ...extraProps,
      }}
    >
      {views[name]}
    </div>
  );
}

export default Illustration;
