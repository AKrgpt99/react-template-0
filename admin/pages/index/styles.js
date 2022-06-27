import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  text: {
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
    },
  },
});
