"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1200,
      lg: 1440,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#000000",
      light: "#242528"
    },
    secondary: {
      main: "#FFFFFF",
      light: "#8A9099",
      contrastText: "#FF5D55",
    },
    background: {
      default: "#EEF2F3",
    },
    divider: "#E0E4E7",
  },
  typography: {
    fontFamily: "var(--font-public-sans)",
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
      color: "#headingColorHex",
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 600,
      color: "#headingColorHex",
    },
  },
  spacing: 2,
  cssVariables: true,
});

export default theme;
