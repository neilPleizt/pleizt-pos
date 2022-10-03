import { createTheme } from "@mui/material/styles";

export const pleiztTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "12px",
          borderRadius: "12px",
          textTransform: "none",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            borderRadius: "12px",

            height: "40px",
            borderColor: "#c4c4c4",
          },
          "& .MuiInputBase-input": {
            fontSize: "12px",

            textTransform: "none",
          },
          "& .MuiFormLabel-root": {
            fontSize: "12px",
            color: "#979797",
            textTransform: "none",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      main: "#4d4d4d",
    },
    secondary: {
      main: "#ff007e",
    },
    accent: {
      dark: "#00a996",
      main: "#00f2d7",
      light: "#33f4df",
    },
  },
});
