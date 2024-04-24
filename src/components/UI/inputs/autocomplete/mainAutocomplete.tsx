import { FC } from "react";

import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { useController } from "react-hook-form";
import { SelectionInputProps } from "../../../../utils/formBuilderInterTypes";

const MainAutocomplete: FC<SelectionInputProps> = (props) => {
  const {
    name,
    formController: { control },
    label,
    options,
    disabled,
  } = props;

  const { field } = useController({
    name,
    control,
  });
  return (
    <Box
      sx={{
        width: "250px",
        padding: "0 10px",
      }}
    >
      <FormControl fullWidth disabled={disabled}>
        <InputLabel id={label}>{label}</InputLabel>
        <Select
          labelId={label}
          label={label}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value ?? ""}
          name={field.name}
        >
          {options?.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default MainAutocomplete;
