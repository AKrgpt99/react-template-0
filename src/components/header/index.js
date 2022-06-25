import React from "react";
import clsx from "clsx";
import { useTheme } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useStyles } from "./styles";
import Logo from "../../images/logo.svg";
import LogoDark from "../../images/logo-dark.svg";
import Switch from "../switch";
import { setTheme } from "../../features/theme/themeSlice";

function Header() {
  const dispatch = useDispatch();
  const colorScheme = useSelector((state) => state.theme.colorScheme);
  const theme = useTheme();
  const classes = useStyles({ theme, colorScheme });

  return (
    <div className={clsx(classes.headerContainer)}>
      <Link to="/" className={clsx(classes.containerLeft)}>
        <div className={clsx(classes.logo)}>
          <img src={colorScheme === "dark" ? Logo : LogoDark} alt="RTZN Logo" />
        </div>
        <div>
          <h1 className={clsx(classes.title)}>ReactJS Starter</h1>
        </div>
      </Link>
      <div className={clsx(classes.containerRight)}>
        <div>
          <p className={clsx(classes.caption)}>
            <i>{colorScheme} mode</i>
          </p>
        </div>
        <div className={clsx(classes.switchTheme)}>
          {/* dark theme - checked, light theme - unchecked */}
          <Switch
            onChange={(checked) => {
              console.log(checked ? "dark" : "light");
              dispatch(setTheme(checked ? "dark" : "light"));
            }}
            checked={colorScheme === "dark" ? true : false}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
