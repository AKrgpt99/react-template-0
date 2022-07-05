import React from "react";
import clsx from "clsx";
import { useTheme } from "react-jss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useStyles } from "./styles";
import LogoIcon from "../../images/logo-icon.svg";
import LogoIconDark from "../../images/logo-icon-dark.svg";

function Footer() {
  const colorScheme = useSelector((state) => state.darkMode.colorScheme);
  const theme = useTheme();
  const classes = useStyles({ theme, colorScheme });

  return (
    <div className={clsx(classes.footerContainer)}>
      <div>
        <div className={clsx(classes.footerContent)}>
          <div className={clsx(classes.logo)}>
            <Link to="/">
              <img
                src={colorScheme === "light" ? LogoIconDark : LogoIcon}
                alt="Logo icon"
              />
            </Link>
            <h3>RTZN Labs</h3>
            <p>Liberating creativity.</p>
          </div>
        </div>
        <div className={clsx(classes.privacy)}>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <div className={clsx(classes.copyright)}>
          &copy; RTZN Labs 2022. Created with 💜
        </div>
      </div>
    </div>
  );
}

export default Footer;
