import { type LinkProps, createTheme } from "@mui/material";

import { FontFamilies } from "./FontFamilies";
import { FontWeights } from "./FontWeights";
import LinkBehavior from "./LinkBehavior";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#729E65",
      light: "#ffffff",
      dark: "#000000",
    },
    text: {
      primary: "#ffffff",
      secondary: "#000000",
    },
    grey: {
      [100]: "#F9F9F9",
    },
    error: {
      main: "#EB5757",
    },
  },
  components: {
    MuiInputBase: {
      defaultProps: {
        style: {
          fontFamily: FontFamilies.publicSans,
          fontWeight: FontWeights.regular,
          fontSize: "1rem",
          lineHeight: "1.5rem",
          color: "#000000",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          lineHeight: "1.313rem",
          fontFamily: FontFamilies.inter,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButton: {
      styleOverrides: {
        startIcon: {
          "& svg": {
            fontSize: "1.5 !important",
          },
        },
        endIcon: {
          "& svg": {
            fontSize: "1.5 !important",
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#248823",
          },
        },
      },
    },
  },
});

theme.typography.h1 = {
  fontFamily: FontFamilies.inter,
  fontWeight: FontWeights.bold,
  fontSize: "2rem",
  lineHeight: "1.2rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
    lineHeight: "1.2rem",
  },
};

theme.typography.h2 = {
  fontFamily: FontFamilies.publicSans,
  fontWeight: FontWeights.semibold,
  fontSize: "1.25rem",
  lineHeight: "1.5rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.25rem",
    lineHeight: "1.5rem",
  },
};

theme.typography.body1 = {
  fontFamily: FontFamilies.publicSans,
  fontWeight: FontWeights.regular,
  fontSize: "1.25rem",
  lineHeight: "1.5rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    lineHeight: "1.25rem",
  },
};

export default theme;
