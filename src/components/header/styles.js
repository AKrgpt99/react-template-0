import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  headerContainer: {
    width: "100%",
    height: "96px",
    boxShadow: ({ theme, colorScheme }) =>
      `0px 0px 64px ${theme.colors[colorScheme].secondary}60`,
    backgroundColor: ({ theme, colorScheme }) =>
      theme.colors[colorScheme].background,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    zIndex: 9,
  },
  containerLeft: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    gap: "32px",
  },
  containerRight: {
    width: "50%",
    height: "100%",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    gap: "16px",
  },
  logo: {
    marginLeft: ({ theme }) => theme.spacing.body.left,
    "& img": {
      height: "72px",
    },
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    gap: "32px",
  },
  navLink: {
    fontWeight: 600,
  },
  title: {
    color: ({ theme, colorScheme }) => theme.colors[colorScheme].text,
  },
  caption: {
    fontSize: ({ theme }) => theme.fonts.sizes.caption,
    color: ({ theme, colorScheme }) => theme.colors[colorScheme].caption,
  },
  switchTheme: {
    marginRight: ({ theme }) => theme.spacing.body.right,
  },
});
