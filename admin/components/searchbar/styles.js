import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  searchbarContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    "& > img": {
      width: "16px",
      height: "16px",
      position: "absolute",
      left: "16px",
      zIndex: 2,
    },
  },
  searchbar: {
    width: "100%",
    height: "42px",
    border: ({ theme, colorScheme }) =>
      `2px solid ${
        theme.colors[colorScheme === "dark" ? "light" : "dark"].secondary
      }60`,
    paddingLeft: "42px",
    outline: "none",
    borderRadius: "10px",
    fontFamily: "'Montserrat', sans-serif",
    backgroundColor: ({ theme, colorScheme }) =>
      theme.colors[colorScheme].background,
    color: ({ theme, colorScheme }) => theme.colors[colorScheme].text,
    transition: "all 0.125s ease",
    "&:focus": {
      border: ({ theme, colorScheme }) =>
        `2px solid ${theme.colors[colorScheme].backgroundVariation}`,
    },
    position: "relative",
  },
  searchResultsContainer: {
    position: "absolute",
    width: "100%",
    top: "48px",
    right: 0,
    zIndex: 1,
    paddingTop: "24px",
    opacity: 0,
    pointerEvents: "none",
    transition: "all 0.25s ease",
    "&.show": {
      opacity: 1,
      pointerEvents: "all",
    },
  },
  searchResults: {
    width: "100%",
    borderTop: ({ theme, colorScheme }) =>
      `1px solid ${theme.colors[colorScheme].secondary}60`,
    backgroundColor: ({ theme, colorScheme }) =>
      theme.colors[colorScheme].background,
    borderBottomRightRadius: "5px",
    borderBottomLeftRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: ({ theme, colorScheme }) =>
      `0px 0px 12px ${theme.colors[colorScheme].secondary}30`,
    "& > .result": {
      width: "calc(100% - 32px)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: "16px",
      transition: "all 0.125s ease",
      color: ({ theme, colorScheme }) => theme.colors[colorScheme].text,
      "&:not(:last-child)": {
        borderBottom: ({ theme, colorScheme }) =>
          `1px solid ${theme.colors[colorScheme].secondary}60`,
      },
      "&:hover": {
        backgroundColor: ({ theme, colorScheme }) =>
          `${theme.colors[colorScheme].secondary}10`,
      },
      "& > .__title": {
        fontWeight: 600,
      },
      "& > .__type": {
        fontSize: "12px",
        color: ({ theme }) => theme.colors.default.caption,
      },
    },
  },
});
