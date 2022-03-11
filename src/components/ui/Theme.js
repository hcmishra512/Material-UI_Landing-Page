import { createTheme } from "@material-ui/core/styles";

const grayBlack = "#1b211d";
const cyanBlue = "#0693e3";
const lightGrey = "#424242";

export default createTheme({
  palette: {
    common: {
      black: `${grayBlack}`,
      blue: `${cyanBlue}`,
    },
    primary: {
      main: `${grayBlack}`,
    },
    secondary: {
      main: `${cyanBlue}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontSize: "1rem",
      color: "white",
    },
    search: {
      fontFamily: "Raleway",
    },
  },
});
