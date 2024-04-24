// mui
import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/system";

const StyledMainInput = styled(TextField)<TextFieldProps>(({ theme, size }) => {
  return {
    width: "285px",

    ".requied-label": {
      lineHeight: "0",
      color: theme.palette.error[500],
    },

    "label.MuiInputLabel-shrink": {
      color: `${theme.palette.grey[500]} !important`,
      top: "1px",
    },

    "& .MuiOutlinedInput-root": {
      borderRadius: "1.1rem",
      overflow: "hidden",

      "&:hover": {
        "& fieldset": {
          borderColor: theme.palette.grey[300], // change the border color here ,
        },
      },

      "& fieldset": {
        borderColor: theme.palette.grey[200], // change the border color here ,
      },

      "&:placeholder": {
        opacity: 1,
        color: theme.palette.grey[400],
      },

      "&.Mui-focused": {
        "& fieldset": {
          borderColor: theme.palette.primary.main, // change the border color here ,
        },
      },

      // On Disabled
      "&.Mui-disabled": {
        background: theme.palette.grey[100],
        cursor: "not-allowed",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.grey[300],
        },

        "& input": {
          cursor: "not-allowed",
        },
      },
    },

    "& .MuiInputBase-input:-webkit-autofill": {
      WebkitBoxShadow: `0 0 0 100px ${theme.palette.background.paper} inset`,
    },
    //inner label
    "& label": {
      fontSize: "1.2rem",
      color: `${theme.palette.grey[400]} !important`,
      top: size === "small" ? "5px" : "2px",
    },
  };
});

const mainInputStyles = {
  StyledMainInput,
};

export default mainInputStyles;
