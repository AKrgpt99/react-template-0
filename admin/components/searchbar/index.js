import React, { useState } from "react";
import clsx from "clsx";
import { useTheme } from "react-jss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useStyles } from "./styles.js";
import MagnifyingGlassIcon from "../../icons/magnifying-glass.svg";

function Searchbar({ width, className, ...props }) {
  const colorScheme = useSelector((state) => state.darkMode.colorScheme);
  const theme = useTheme();
  const classes = useStyles({ theme, colorScheme });
  const [showResults, setShowResults] = useState(false);
  const [query, setQuery] = useState("");

  const handleInput = (event) => {
    if (event.target.value === "") setShowResults(false);
    else setShowResults(true);
    setQuery(event.target.value);
  };

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
        onChange={handleInput}
        value={query}
      />
      <div
        className={clsx(classes.searchResultsContainer, showResults && "show")}
      >
        <div className={clsx(classes.searchResults)}>
          <Link to="products" className="result">
            <div className="__title">Result</div>
            <div className="__type">Category</div>
          </Link>
          <Link to="products" className="result">
            <div className="__title">Result</div>
            <div className="__type">Category</div>
          </Link>
          <Link to="products" className="result">
            <div className="__title">Result</div>
            <div className="__type">Category</div>
          </Link>
          <Link to="products" className="result">
            <div className="__title">Result</div>
            <div className="__type">Category</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
