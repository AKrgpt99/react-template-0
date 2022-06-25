import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  footerContainer: {
    width: "100%",
    backgroundColor: ({ theme, colorScheme }) =>
      theme.colors[colorScheme].background,
    color: ({ theme, colorScheme }) => theme.colors[colorScheme].text,
    "& > div": {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    boxShadow: ({ theme, colorScheme }) =>
      `0px 0px 64px ${theme.colors[colorScheme].secondary}60`,
  },
  footerContent: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginTop: "32px",
    marginBottom: "32px",
    "& img": {
      height: "64px",
    },
    "& h3": {
      fontWeight: 900,
      marginTop: "16px",
      marginBottom: "4px",
    },
    "& p": {
      margin: 0,
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  privacy: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "8px",
    fontSize: ({ theme }) => theme.fonts.sizes.caption,
    "& a": {
      color: ({ theme }) => theme.colors.default.primary,
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  copyright: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "16px",
    fontSize: ({ theme }) => theme.fonts.sizes.caption,
  },
});
