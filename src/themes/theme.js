import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fa5b49',
    },
    secondary: {
      main: '#252525',
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 560,
      md: 960,
      reg: 1140,
      lg: 1300,
      xl: 1536,
    }
  },
  components: {
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: 10,
        }
      }
    }
  }
})