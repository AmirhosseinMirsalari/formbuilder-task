import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import mainTheme from "../../../styles/theme/theme";

const MuiWrapper: FC<PropsWithChildren> = ({ children }) => {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
    </CacheProvider>
  );
};

export default MuiWrapper;
