import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    width: "456px",
    "& h2": {
      fontSize: "36px",
    },
    "& p code": {
      backgroundColor: ({ theme, colorScheme }) =>
        theme.colors[colorScheme].background,
      border: ({ theme, colorScheme }) =>
        `1px solid ${theme.colors[colorScheme].secondary}40`,
      borderRadius: "4px",
      paddingTop: "1px",
      paddingLeft: "4px",
      paddingBottom: "1px",
      paddingRight: "4px",
      display: "inline",
    },
  },
  ctaContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    gap: "16px",
  },
  ctaButton: {
    border: ({ theme }) => `2px solid ${theme.colors.default.primary}`,
    borderRadius: "6px",
    padding: "8px",
    background: "transparent",
    color: ({ theme }) => theme.colors.default.primary,
    marginTop: "16px",
    "&.variation": {
      border: ({ theme, colorScheme }) =>
        `2px solid ${theme.colors[colorScheme].text}`,
      color: ({ theme, colorScheme }) => theme.colors[colorScheme].text,
    },
  },
});
