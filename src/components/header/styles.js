import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  "@media screen and (max-width: 640px)": {
    navLink: {
      display: "none !important",
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
        background: "none",
        "& img": {
          width: "32px",
          height: "32px",
          objectFit: "contain",
        },
      },
    },
    socialsContainer: {
      display: "none !important",
    },
    settingsContainer: {
      display: "none !important",
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
    gap: "32px",
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
  switchTheme: {
    width: "calc(100% - 32px)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    color: ({ theme, colorScheme }) => theme.colors[colorScheme].caption,
    "& > p": {
      fontWeight: "600",
    },
    paddingLeft: "16px",
    paddingRight: "16px",
  },
  switchMobileTheme: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    color: ({ theme, colorScheme }) => theme.colors[colorScheme].caption,
    "& > button": {
      border: ({ theme }) => `2px solid ${theme.colors.default.primary}`,
    },
    "& > p": {
      fontWeight: "600",
    },
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
  },
  mobileLink: {
    width: "100%",
    height: "84px",
    fontWeight: 600,
    borderBottom: ({ theme, colorScheme }) =>
      `1px solid ${theme.colors[colorScheme].text}60`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    "& > p": {
      fontWeight: 600,
    },
    "& > img": {
      width: "16px",
      height: "16px",
    },
  },
  mobileSocials: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
    paddingTop: "32px",
  },
  socialsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
  },
  socialIcon: {
    width: "24px",
    height: "24px",
    objectFit: "contain",
  },
  settingsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    "& > .settingsButton": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: "8px",
      background: "transparent",
    },
  },
  settingsIcon: {
    width: "24px",
    height: "24px",
    objectFit: "contain",
  },
  settingsCaretIcon: {
    width: "16px",
    height: "16px",
    objectFit: "contain",
    transition: "all 0.25s ease",
    "&.rotate": {
      transform: "rotate(180deg)",
    },
  },
  settingsMenuContainer: {
    position: "absolute",
    width: "256px",
    top: "26px",
    right: 0,
    zIndex: 1,
    paddingTop: "35px",
    opacity: 0,
    pointerEvents: "none",
    transition: "all 0.25s ease",
    "&.show": {
      opacity: 1,
      pointerEvents: "all",
    },
  },
  settingsMenu: {
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
  },
  settingsMenuOption: {
    width: "calc(100% - 32px)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    paddingLeft: "16px",
    paddingRight: "16px",
    transition: "all 0.125s ease",
    borderBottom: ({ theme, colorScheme }) =>
      `1px solid ${theme.colors[colorScheme].secondary}60`,
    "&:hover": {
      backgroundColor: ({ theme, colorScheme }) =>
        `${theme.colors[colorScheme].secondary}10`,
    },
  },
});
