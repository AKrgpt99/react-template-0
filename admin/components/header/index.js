import React, { useState } from "react";
import clsx from "clsx";
import { useTheme } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useStyles } from "./styles";
import Logo from "../../images/logo.svg";
import LogoDark from "../../images/logo-dark.svg";
import Switch from "../switch";
import { setTheme } from "../../features/theme/themeSlice";
import Bars from "../../icons/bars.svg";

function Header() {
  const dispatch = useDispatch();
  const colorScheme = useSelector((state) => state.theme.colorScheme);
  const theme = useTheme();
  const classes = useStyles({ theme, colorScheme });
  const [showMenu, setShowMenu] = useState(false);

  const links = {
    blog: "Blog",
    products: "Products",
  };

  return (
    <div className={clsx(classes.headerContainer)}>
      <div className={clsx(classes.containerLeft)}>
        <Link to="/" className={clsx(classes.logoContainer)}>
          <div className={clsx(classes.logo)}>
            <img
              src={colorScheme === "dark" ? Logo : LogoDark}
              alt="RTZN Logo"
            />
          </div>
          <div>
            <h1 className={clsx(classes.title)}>ReactJS Starter</h1>
          </div>
        </Link>
        {Object.keys(links).map((path) => (
          <Link to={path} className={clsx(classes.navLink)}>
            {links[path]}
          </Link>
        ))}
      </div>
      <div className={clsx(classes.containerRight)}>
        <div className={clsx(classes.switchTheme)}>
          <p className={clsx(classes.caption)}>
            <i>{colorScheme} mode</i>
          </p>
          <Switch
            onChange={(checked) => {
              console.log(checked ? "dark" : "light");
              dispatch(setTheme(checked ? "dark" : "light"));
            }}
            checked={colorScheme === "dark" ? true : false}
          />
        </div>
        <div className={clsx(classes.menuContainer)}>
          <button
            className="menuButton"
            onClick={() => {
              document.body.style.overflow = !showMenu ? "hidden" : "unset";
              setShowMenu(!showMenu);
            }}
          >
            <img src={Bars} alt="Enter menu" />
          </button>
          <div className={clsx(classes.menu, showMenu && "show")}>
            <div className={clsx(classes.mobileLinks)}>
              {Object.keys(links).map((path) => (
                <Link
                  to={path}
                  onClick={() => {
                    document.body.style.overflow = !showMenu
                      ? "hidden"
                      : "unset";
                    setShowMenu(!showMenu);
                  }}
                  className={clsx(classes.mobileLink)}
                >
                  {links[path]}
                </Link>
              ))}
            </div>
            <div className={clsx(classes.switchMobileTheme)}>
              <p className={clsx(classes.caption)}>
                <i>{colorScheme} mode</i>
              </p>
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
      </div>
    </div>
  );
}

export default Header;
