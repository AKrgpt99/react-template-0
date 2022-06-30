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
  },
});
