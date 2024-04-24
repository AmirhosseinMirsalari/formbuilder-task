import { FC } from "react";

import MainButtonStyled from "./mainButton.styles";
import { LoadingButtonProps } from "@mui/lab";
import Loading from "../loading/loading";

const MainButton: FC<LoadingButtonProps> = ({ children, ...props }) => {
  return (
    <MainButtonStyled
      {...props}
      loadingIndicator={<Loading  />}
    >
      {children}
    </MainButtonStyled>
  );
};

export default MainButton;
