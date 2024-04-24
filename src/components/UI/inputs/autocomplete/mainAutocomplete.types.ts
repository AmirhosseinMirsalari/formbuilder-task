/* eslint-disable @typescript-eslint/no-explicit-any */
import { AutocompleteProps, SxProps, Theme } from "@mui/material";

export type TMainAutocompleteProps = AutocompleteProps<
  any,
  boolean | undefined,
  boolean | undefined,
  boolean | undefined,
  React.ElementType<any>
>;

export interface autocompleteSxProps {
  sx?: SxProps<Theme>;
}
