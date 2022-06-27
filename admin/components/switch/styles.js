import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  switchContainer: {
    width: "48px",
    height: "32px",
    borderRadius: "32px",
    border: ({ theme, colorScheme }) =>
      `2px solid ${
        theme.colors[colorScheme === "dark" ? "light" : "dark"].primary
      }`,
    background: "transparent",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    padding: "2px",
    cursor: "pointer",
  },
  handle: {
    width: "24px",
    height: "24px",
    backgroundColor: ({ theme }) => theme.colors.default.primary,
    borderRadius: "24px",
    margin: 0,
    transition: "all 0.125s ease",
    "&.checked": {
      transform: "translateX(16px)",
    },
  },
});
