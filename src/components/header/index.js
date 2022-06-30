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
import TwitterIcon from "../../icons/twitter.svg";
import DiscordIcon from "../../icons/discord.svg";
import OpenSeaIcon from "../../icons/opensea.svg";
import CaretRightIcon from "../../icons/caret-right.svg";
import Searchbar from "../searchbar";

function Header() {
  const dispatch = useDispatch();
  const colorScheme = useSelector((state) => state.theme.colorScheme);
  const theme = useTheme();
  const classes = useStyles({ theme, colorScheme });
  const [showMenu, setShowMenu] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const linksMenu = [
    { path: "blog", name: "Blog" },
    { path: "products", name: "Products" },
  ];

  const socialsMenu = [
    {
      name: "Discord",
      href: "#",
      icon: DiscordIcon,
    },
    {
      name: "Twitter",
      href: "#",
      icon: TwitterIcon,
    },
    {
      name: "OpenSea",
      href: "#",
      icon: OpenSeaIcon,
    },
  ];

  const settingsMenu = [
    { path: "search", name: "Categories" },
    { path: "search", name: "Tags" },
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
            <h1 className={clsx(classes.title)}>SPACEIII</h1>
          </div>
        </Link>
        {linksMenu.map((link, i) => (
          <Link to={link.path} key={i} className={clsx(classes.navLink)}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className={clsx(classes.containerRight)}>
        <Searchbar width="384px" />
        <div className={clsx(classes.socialsContainer)}>
          {socialsMenu.map((social, i) => (
            <a key={i} href={social.href}>
              <img className={clsx(classes.socialIcon)} src={social.icon} />
            </a>
          ))}
        </div>
        <div
          className={clsx(classes.settingsContainer)}
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
              <div className={clsx(classes.switchTheme)}>
                <p>Dark mode</p>
                <Switch
                  onChange={(checked) =>
                    dispatch(setTheme(checked ? "dark" : "light"))
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
                  dispatch(setTheme(checked ? "dark" : "light"))
                }
                checked={colorScheme === "dark" ? true : false}
              />
            </div>
            <div className={clsx(classes.mobileSocials)}>
              {socialsMenu.map((social, i) => (
                <a key={i} href={social.href}>
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
