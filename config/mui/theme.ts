import { createTheme } from "@mui/material";
import { THEME_COLOR } from "./constants";

export const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontSize: 12,
  },
  palette: {
    primary: {
      main: THEME_COLOR.PRIMARY_MAIN,
      contrastText: THEME_COLOR.TEXT_WHITE,
    },
    error: {
      main: THEME_COLOR.ERROR_MAIN,
      contrastText: THEME_COLOR.TEXT_WHITE,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderWidth: "0",
            },
            "&:hover fieldset": {
              borderWidth: "0",
            },
            "&.Mui-focused fieldset": {
              borderWidth: "0",
            },
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#1e1f22",
          color: "#aaa",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: "600",
        },
        sizeLarge: {
          fontSize: 14,
        },
      },
    },
  },
});
