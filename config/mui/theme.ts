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
          color: THEME_COLOR.TEXT_DESC,
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
    MuiNativeSelect: {
      styleOverrides: {
        icon: "KeyboardArrowDownSharpIcon",
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: "0px",
        },
      },
      defaultProps: {
        sx: {
          color: THEME_COLOR.TEXT_DESC,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0,
          "& .MuiFormControlLabel-label": {
            paddingLeft: "8px",
            fontSize: "12px",
            color: THEME_COLOR.TEXT_DESC,
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor:  THEME_COLOR.BG_COLOR,
            width: 4,
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor:  '#1e1f22',
          },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor:  THEME_COLOR.BG_COLOR,
          },
        },
      },
    },
  },
});
