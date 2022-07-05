import React, { useState } from "react";
import clsx from "clsx";
import { useTheme } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useStyles } from "./styles";
import Logo from "../../images/logo.svg";
import Space3Logo from "../../images/space3.svg";
import Space3LogoDark from "../../images/space3-dark.svg";
import LogoDark from "../../images/logo-dark.svg";
import Switch from "../switch";
import { setColorScheme } from "../../features/dark-mode/darkModeSlice";
import Bars from "../../icons/bars.svg";
import TwitterIcon from "../../icons/twitter.svg";
import DiscordIcon from "../../icons/discord.svg";
import OpenSeaIcon from "../../icons/opensea.svg";
import CaretRightIcon from "../../icons/caret-right.svg";
import Searchbar from "../searchbar";
// import { useGetAllMenusQuery } from "../../services/menus";

function Header() {
  const dispatch = useDispatch();
  const colorScheme = useSelector((state) => state.darkMode.colorScheme);
  const theme = useTheme();
  const classes = useStyles({ theme, colorScheme });
  const [showMenu, setShowMenu] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  // const { data, error } = useGetAllMenusQuery();
  // if (error) return;

  // const linksMenu = data.filter((menu) => menu.name === "links");
  // const socialsMenu = data.filter((menu) => menu.name === "socials");
  // const settingsMenu = data.filter((menu) => menu.name === "settings");

  const linksMenu = [
    {
      path: "blog",
      name: "Blog",
      icon: null,
    },
    {
      path: "products",
      name: "Products",
      icon: null,
    },
  ];

  const socialsMenu = [
    {
      name: "Discord",
      path: "#",
      icon: DiscordIcon,
    },
    {
      name: "Twitter",
      path: "#",
      icon: TwitterIcon,
    },
    {
      name: "OpenSea",
      path: "#",
      icon: OpenSeaIcon,
    },
  ];

  const settingsMenu = [
    {
      path: "search",
      name: "Categories",
      icon: null,
    },
    {
      path: "search",
      name: "Tags",
      icon: null,
    },
  ];

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
            <img
              src={colorScheme === "dark" ? Space3Logo : Space3LogoDark}
              className={classes.textLogo}
            />
          </div>
        </Link>
        {linksMenu.map((link, i) => (
          <Link
            to={link.path}
            key={i}
            className={clsx(classes.navLink, classes.collapse)}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className={clsx(classes.containerRight)}>
        <Searchbar width="384px" className={clsx(classes.collapse)} />
        <div className={clsx(classes.socialsContainer, classes.collapse)}>
          {socialsMenu.map((social, i) => (
            <a key={i} href={social.path}>
              <img className={clsx(classes.socialIcon)} src={social.icon} />
            </a>
          ))}
        </div>
        <div
          className={clsx(classes.settingsContainer, classes.collapse)}
          onMouseEnter={() => setShowSettings(true)}
          onMouseLeave={() => setShowSettings(false)}
        >
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="settingsButton"
          >
            <img
              className={clsx(classes.settingsIcon)}
              src={Bars}
              alt="Settings icon"
            />
          </button>
          <div
            className={clsx(
              classes.settingsMenuContainer,
              showSettings && "show"
            )}
          >
            <div className={clsx(classes.settingsMenu)}>
              {settingsMenu.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  className={clsx(classes.settingsMenuOption)}
                >
                  <p>{link.name}</p>
                </Link>
              ))}
              <div className={clsx(classes.switchTheme, classes.collapse)}>
                <p>Dark mode</p>
                <Switch
                  onChange={(checked) =>
                    dispatch(setColorScheme(checked ? "dark" : "light"))
                  }
                  checked={colorScheme === "dark" ? true : false}
                />
              </div>
            </div>
          </div>
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
            <Searchbar width="100%" />
            <div className={clsx(classes.mobileLinks)}>
              {linksMenu.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  onClick={() => {
                    document.body.style.overflow = !showMenu
                      ? "hidden"
                      : "unset";
                    setShowMenu(!showMenu);
                  }}
                  className={clsx(classes.mobileLink)}
                >
                  <p>{link.name}</p>
                  <img src={CaretRightIcon} />
                </Link>
              ))}
              {settingsMenu.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  onClick={() => {
                    document.body.style.overflow = !showMenu
                      ? "hidden"
                      : "unset";
                    setShowMenu(!showMenu);
                  }}
                  className={clsx(classes.mobileLink)}
                >
                  <p>{link.name}</p>
                  <img src={CaretRightIcon} />
                </Link>
              ))}
            </div>
            <div className={clsx(classes.switchMobileTheme)}>
              <p>Dark mode</p>
              <Switch
                onChange={(checked) =>
                  dispatch(setColorScheme(checked ? "dark" : "light"))
                }
                checked={colorScheme === "dark" ? true : false}
              />
            </div>
            <div className={clsx(classes.mobileSocials)}>
              {socialsMenu.map((social, i) => (
                <a key={i} href={social.path}>
                  <img className={clsx(classes.socialIcon)} src={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
