import MuiWrapper from "./muiProvider/muiProvider";
import ReactQueryProvider from "./reactQueryProvider/reactQueryProvider";
import { FC, PropsWithChildren } from "react";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <MuiWrapper>
        {children}
      </MuiWrapper>
    </ReactQueryProvider>
  );
};

export default Providers;