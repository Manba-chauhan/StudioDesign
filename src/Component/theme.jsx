import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#355247",
      main: "#000",
      contrastText: "#355247",
      dark: "#355247",
    },
    secondary: {
      main: "#fff",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontFamily: "Open sans",
    // fontWeightLight:"lighter"
    // fontSize:"25px"
  },
});
export default theme;
