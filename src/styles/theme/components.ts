import { Components, Theme } from "@mui/material";

const componentsShared: Components<Omit<Theme, "components">> | undefined = {
  MuiButton: {
    defaultProps: {
      size: "xLarge",
    },
    variants: [
      {
        props: { size: "baseSm" },
        style: {
          fontSize: "1.4rem",
          fontWeight: 400,
          padding: "0.5rem 3rem",
        },
      },
      {
        props: { size: "baseMd" },
        style: {
          fontSize: "1.6rem",
          fontWeight: 400,
          padding: "0.72rem 3rem",
        },
      },
      {
        props: { size: "baseLg" },
        style: {
          fontSize: "1.8rem",
          fontWeight: 400,
          padding: "0.745rem 3rem",
        },
      },
      {
        props: { size: "xLarge" },
        style: {
          padding: "1.575rem 3.2rem",
        },
      },
      {
        props: { size: "xxLarge" },
        style: {
          padding: "0.9rem 3.9rem",
          marginTop: "1.5rem !important",
        },
      },
    ],
  },
  MuiSkeleton: {
    defaultProps: {
      animation: "wave",
      variant: "rounded",
    },
  },
  MuiUseMediaQuery: {
    defaultProps: {
        noSsr: true,
    },
  },
};

export default componentsShared;

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    xLarge: true;
    xxLarge: true;
    baseSm: true;
    baseMd: true;
    baseLg: true;
  }
}
