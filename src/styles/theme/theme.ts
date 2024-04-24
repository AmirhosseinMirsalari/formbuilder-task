import { createTheme } from "@mui/material/styles";

import componentsShared from "./components";
import colors from "./palette.module.scss";
import typographyShared from "./typography";

const mainTheme = createTheme({
  direction: "rtl",
  palette: {
    grey: {
      50: colors.grey50,
      100: colors.grey100,
      200: colors.grey200,
      300: colors.grey300,
      400: colors.grey400,
      500: colors.grey500,
      600: colors.grey600,
      700: colors.grey700,
      800: colors.grey800,
      900: colors.grey900,
    },

    error: {
      50: colors.error50,
      100: colors.error100,
      200: colors.error200,
      300: colors.error300,
      400: colors.error400,
      500: colors.error500,
      600: colors.error600,
      700: colors.error700,
      800: colors.error800,
      900: colors.error900,
    },

    warning: {
      50: colors.warning50,
      100: colors.warning100,
      200: colors.warning200,
      300: colors.warning300,
      400: colors.warning400,
      500: colors.warning500,
      600: colors.warning600,
      700: colors.warning700,
      800: colors.warning800,
      900: colors.warning900,
    },

    success: {
      50: colors.success50,
      100: colors.success100,
      200: colors.success200,
      300: colors.success300,
      400: colors.success400,
      500: colors.success500,
      600: colors.success600,
      700: colors.success700,
      800: colors.success800,
      900: colors.success900,
    },

    info: {
      50: colors.info50,
      100: colors.info100,
      200: colors.info200,
      300: colors.info300,
      400: colors.info400,
      500: colors.info500,
      600: colors.info600,
      700: colors.info700,
      800: colors.info800,
      900: colors.info900,
    },
    primary: {
      main: colors.primary500,
      50: colors.primary50,
      100: colors.primary100,
      200: colors.primary200,
      300: colors.primary300,
      400: colors.primary400,
      500: colors.primary500,
      600: colors.primary600,
      700: colors.primary700,
      800: colors.primary800,
      900: colors.primary900,
    },
    secondary: {
      main: colors.secondary500,
      50: colors.secondary50,
      100: colors.secondary100,
      200: colors.secondary200,
      300: colors.secondary300,
      400: colors.secondary400,
      500: colors.secondary500,
      600: colors.secondary600,
      700: colors.secondary700,
      800: colors.secondary800,
      900: colors.secondary900,
    },
  },
  typography: typographyShared,
  components: componentsShared,
});

export default mainTheme;
