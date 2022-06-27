import React from "react";
import clsx from "clsx";
import { useTheme } from "react-jss";
import { useSelector } from "react-redux";

import { useStyles } from "./styles";

function Page({ children }) {
  const colorScheme = useSelector((state) => state.theme.colorScheme);
  const theme = useTheme();
  const classes = useStyles({ theme, colorScheme });

  return <div className={clsx(classes.pageContainer)}>{children}</div>;
}

Page.Section = function ({ children }) {
  const colorScheme = useSelector((state) => state.theme.colorScheme);
  const theme = useTheme();
  const classes = useStyles({ theme, colorScheme });

  return <div className={clsx(classes.section)}>{children}</div>;
};

export default Page;
