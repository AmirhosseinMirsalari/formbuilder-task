import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material";

const MainButtonStyled = styled(LoadingButton)(() => ({
  borderRadius: "1.1rem",
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none",
  },
}));

export default MainButtonStyled;
