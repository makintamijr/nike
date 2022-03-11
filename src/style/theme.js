import { createTheme } from "@mui/material/styles";

export const globalTheme = {
  palette: {
    type: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    h1: {
      fontFamily: "Bebas Neue",
      fontWeight: 400,
    },
    h2: {
      fontSize: "3.75em",
      fontFamily: "Open Sans",
    },
    h3: {
      fontFamily: "Open Sans",
    },
    h4: {
      fontFamily: "Open Sans",
    },
    h5: {
      fontFamily: "Bebas Neue",
    },
    h6: {
      fontFamily: "Open Sans",
    },
    body1: {
      fontFamily: "Open Sans",
    },
    button: {
      fontFamily: "Open Sans",
      textTransform: "none",
    },
  },

  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
};
