import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  illustration: {
    position: "relative",
    zIndex: 0,
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
    },
    "& .astronaut": {
      position: "absolute",
      bottom: "-30px",
    },
    "& div.bg": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "384px",
      height: "384px",
      borderRadius: "384px",
      backgroundColor: ({ theme, colorScheme }) => theme.colors.default.primary,
    },
  },
});
