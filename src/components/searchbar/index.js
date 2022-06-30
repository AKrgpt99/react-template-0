import React from "react";
import clsx from "clsx";
import { useTheme } from "react-jss";
import { useSelector } from "react-redux";

import { useStyles } from "./styles.js";
import MagnifyingGlassIcon from "../../icons/magnifying-glass.svg";

function Searchbar({ width, className, ...props }) {
  const colorScheme = useSelector((state) => state.theme.colorScheme);
  const theme = useTheme();
  const classes = useStyles({ theme, colorScheme });

  return (
    <div
      className={clsx(classes.searchbarContainer, className)}
      style={{ width }}
      {...props}
    >
      <img
        src={MagnifyingGlassIcon}
        alt="search blogs, categories, and products"
      />
      <input
        type="text"
        placeholder="Search blogs, categories, and products"
        className={clsx(classes.searchbar)}
      />
    </div>
  );
}

export default Searchbar;
