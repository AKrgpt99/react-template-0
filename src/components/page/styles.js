import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  pageContainer: {
    width: ({ theme }) => `calc(100% - 2 * ${theme.spacing.body.left})`,
    height: "calc(100vh - 48px)",
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
  },
});
