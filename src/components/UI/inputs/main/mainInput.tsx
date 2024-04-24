import { FC } from "react";

import { Box, Typography } from "@mui/material";

import { useController } from "react-hook-form";
import { TextInputProps } from "../../../../utils/formBuilderInterTypes";
import styles from "./mainInput.styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MainInput: FC<TextInputProps> = (props) => {
  const { StyledMainInput } = styles;

  const {
    required,
    label,
    name,
    formController: { control },
    rules,
  } = props;

  const {
    field,
    formState: { errors },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", padding: "0 20px" }}>
      <StyledMainInput
        label={
          label ? (
            <>
              {label}
              {required ? (
                <Typography component={"span"} className="requied-label">
                  *
                </Typography>
              ) : (
                ""
              )}
            </>
          ) : null
        }
        onChange={field.onChange} // send value to hook form
        onBlur={field.onBlur} // notify when input is touched/blur
        value={field.value ?? ""} // input value
        name={field.name} // send down the input name
        inputRef={field.ref} // send input ref, so we can focus on input when error appear
        // {...otherProps}
      />
      {errors && <Typography>{errors?.[name]?.message as string}</Typography>}
    </Box>
  );
};

export default MainInput;
