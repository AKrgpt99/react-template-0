import React from "react";
import clsx from "clsx";
import { useTheme } from "react-jss";
import { useSelector } from "react-redux";

import { useStyles } from "./styles";

function Switch({ checked, onChange }) {
  const colorScheme = useSelector((state) => state.theme.colorScheme);
  const theme = useTheme();
  const classes = useStyles({ theme, colorScheme });

  return (
    <button
      onClick={() => onChange(!checked)}
      className={clsx(classes.switchContainer)}
    >
      <div className={clsx(classes.handle, checked && "checked")}></div>
    </button>
  );
}

export default Switch;
