import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  "@media screen and (max-width: 640px)": {
    navLink: {
      display: "none",
    },
    switchTheme: {
      display: "none !important",
    },
    containerLeft: {
      paddingLeft: "24px !important",
    },
    containerRight: {
      paddingRight: "24px !important",
    },
    menuContainer: {
      display: "flex !important",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "32px",
      height: "32px",
      "& .menuButton": {
        border: "none",
        background: "none",
        "& img": {
          width: "32px",
          height: "32px",
          objectFit: "contain",
        },
      },
    },
  },
  "@media screen and (min-width: 768px)": {},
  "@media screen and (min-width: 1024px)": {},
  "@media screen and (min-width: 1280px)": {},
  "@media screen and (min-width: 1536px)": {},
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
    zIndex: 99,
  },
  containerLeft: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    gap: "32px",
    paddingLeft: ({ theme }) => theme.spacing.body.left,
  },
  containerRight: {
    width: "50%",
    height: "100%",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    gap: "16px",
    paddingRight: ({ theme }) => theme.spacing.body.right,
  },
  logo: {
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    gap: "16px",
  },
  switchMobileTheme: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
    alignItems: "center",
    gap: "16px",
  },
  menuContainer: {
    display: "none",
  },
  menu: {
    position: "fixed",
    width: "calc(100% - 48px)",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: -1,
    backgroundColor: ({ theme, colorScheme }) =>
      theme.colors[colorScheme].background,
    transition: "all 0.125s ease",
    transform: "translateX(100%)",
    "&.show": {
      transform: "translateX(0)",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    gap: "16px",
    paddingTop: "128px",
    paddingLeft: "24px",
    paddingRight: "24px",
  },
  mobileLinks: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    gap: "16px",
  },
  mobileLink: {
    width: "100%",
    height: "36px",
    fontWeight: 600,
    borderBottom: ({ theme, colorScheme }) =>
      `1px solid ${theme.colors[colorScheme].text}60`,
  },
});
