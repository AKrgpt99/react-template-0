import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  "@media screen and (max-width: 640px)": {
    pageContainer: {
      width: "calc(100% - 48px) !important",
      paddingLeft: "24px !important",
      paddingRight: "24px !important",
    },
    section: {
      gap: "32px !important",
    },
  },
  "@media screen and (min-width: 768px)": {},
  "@media screen and (min-width: 1024px)": {},
  "@media screen and (min-width: 1280px)": {},
  "@media screen and (min-width: 1536px)": {},
  pageContainer: {
    width: ({ theme }) => `calc(100% - 2 * ${theme.spacing.body.left})`,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: ({ theme }) => theme.spacing.body.left,
    paddingRight: ({ theme }) => theme.spacing.body.right,
    backgroundColor: ({ theme, colorScheme }) =>
      theme.colors[colorScheme].backgroundVariation,
    color: ({ theme, colorScheme }) => theme.colors[colorScheme].text,
    paddingTop: "48px",
  },
  section: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: ({ theme }) => theme.spacing.body.left,
    flexWrap: "wrap",
  },
});
