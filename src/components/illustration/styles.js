import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  "@media screen and (max-width: 640px)": {
    illustration: {
      width: "256px !important",
      height: "256px !important",
      borderRadius: "256px !important",
      "& img.clouds": {
        width: "256px !important",
        height: "256px !important",
        borderRadius: "256px !important",
      },
      "& .rocket": {
        fontSize: "196px !important",
      },
      "& .astronaut": {
        fontSize: "196px !important",
        bottom: "-32px !important",
      },
      "& div.bg": {
        width: "256px !important",
        height: "256px !important",
        borderRadius: "256px !important",
      },
    },
  },
  "@media screen and (min-width: 768px)": {},
  "@media screen and (min-width: 1024px)": {},
  "@media screen and (min-width: 1280px)": {},
  "@media screen and (min-width: 1536px)": {},
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
      objectFit: "cover",
      objectPosition: "-180px 0",
      width: "384px",
      height: "384px",
      borderRadius: "384px",
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
