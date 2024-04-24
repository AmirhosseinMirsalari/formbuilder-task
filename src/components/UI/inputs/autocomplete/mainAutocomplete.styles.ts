// mui

import { Autocomplete, Popper, styled } from "@mui/material";

export const StyledAutoComplete = styled(Autocomplete)(({ theme }) => ({
  "& .MuiAutocomplete-inputRoot": {
    label: {
      color: `${theme.palette.grey[400]} !important`,
    },

    paddingRight: "34px !important",
    fontSize: "1.2rem",
    "& .MuiAutocomplete-input": {
      marginLeft: "8px !important",
      padding: 0,
      color: "grey.900",
    },
  },
  "& .Mui-disabled": {
    backgroundColor: theme.palette.grey[100] + " !important",
    "& .MuiAutocomplete-endAdornment svg": {
      color: "grey.400",
    },
    "& input": {
      backgroundColor: theme.palette.grey[100] + " !important",
    },
  },

  "label.Mui-disabled": {
    background: "none !important",
  },

  "& .MuiAutocomplete-endAdornment": {
    position: "absolute",
    right: "12px !important",
    top: "24px",
    "& svg": {
      color: "grey.900",
    },
  },
}));

export const StyledPopper = styled(Popper)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  borderRadius: "11px",
  boxShadow: "unset",
  border: "2px solid",
  borderColor: theme.palette.primary[500],
  fontSize: "1.2rem",
  "& .MuiAutocomplete-groupUl": {
    color: "grey.100 !important",
    fontSize: "1.2rem",
  },
  "& .MuiAutocomplete-listbox": {
    maxHeight: {
      xs: "144px",
      sm: "174px",
    },
    py: { xs: "0 !important", sm: "8px 16px !important" },
    color: "grey.100 !important",
    fontSize: "1.2rem",
  },

  "& .MuiAutocomplete-option": {
    minHeight: "32px !important",
  },

  "& .MuiAutocomplete-noOptions": {
    fontSize: "1.2rem",
  },
  "& .MuiAutocomplete-loading": {
    fontSize: "1.2rem",
  },
}));
