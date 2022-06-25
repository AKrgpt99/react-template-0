import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  pageContainer: {
    width: ({ theme }) => `calc(100% - 2 * ${theme.spacing.body.left})`,
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: ({ theme }) => theme.spacing.body.left,
    paddingRight: ({ theme }) => theme.spacing.body.right,
    backgroundColor: ({ theme, colorScheme }) =>
      theme.colors[colorScheme].backgroundVariation,
    color: ({ theme, colorScheme }) => theme.colors[colorScheme].text,
  },
  section: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: ({ theme }) => theme.spacing.body.left,
  },
  illustration: {
    position: "relative",
    zIndex: 0,
    width: "384px",
    height: "384px",
    borderRadius: "384px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: ({ theme, colorScheme }) =>
      `-32px 32px 64px ${theme.colors[colorScheme].secondary}60`,
    "& img.clouds": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "384px",
      height: "384px",
      borderRadius: "384px",
      objectFit: "cover",
      objectPosition: "-180px 0",
    },
    "& .rocket": {
      position: "absolute",
      top: "-32px",
      right: "-32px",
      fontSize: "256px",
    },
  },
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
