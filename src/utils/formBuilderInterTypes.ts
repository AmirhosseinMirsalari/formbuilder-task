/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextFieldProps, Theme } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import { JSX } from "react";
import {
  FieldValues,
  UseControllerProps,
  UseFormReturn,
} from "react-hook-form";

export type SelectionInputOptions = {
  label: string;
  value: string | number;
};

type TextFieldPropsWithoutOnchange = Omit<TextFieldProps, "onChange" | "type">;

interface BasicFormInputProps {
  name: string;
  rules?: UseControllerProps["rules"];
  label?: string;
  title?: string;
  formController: UseFormReturn<any, any>;
  onChange?: (value: string) => void;
}

export type OtpInputProps = {
  errorhandler?: boolean;
} & TextFieldProps;

export type TextInputProps = {
  icon?: JSX.Element;
  type?: "text";
  hasClear?: boolean;
  readOnly?: boolean;
  max?: number;
  inputSx?: SxProps;
  noHelperText?: boolean;
} & (TextFieldPropsWithoutOnchange & BasicFormInputProps);

export type SelectionModalInputProps = {
  title: string;
  type?: "selectionModalInput";
  options?: SelectionInputOptions[];
  search?: boolean;
  icon?: JSX.Element;
  onChange?: (value: string | number) => void;
  onClick?: (value: string | number) => void;
} & (TextFieldPropsWithoutOnchange & BasicFormInputProps);

export type SelectionInputProps = {
  title?: string;
  type?: "selectionInput";
  options?: SelectionInputOptions[];
  onChange?: (value: string | number) => void;
} & (TextFieldPropsWithoutOnchange & BasicFormInputProps);

export type NumberInputProps = {
  type?: "numberInput";
  max?: number;
  min?: number;
  hasClear?: boolean;
  tik?: boolean;
  noHelper?: boolean;
  hasSeparator?: boolean;
  hasVehiclePriceInquiry?: boolean;
  error?: boolean;
  inputSx?: SxProps<Theme>;
  onEmptyInputBackspace?: () => void;
} & (TextFieldPropsWithoutOnchange & BasicFormInputProps);

export type PhoneNumberInputProps = (TextFieldPropsWithoutOnchange &
  BasicFormInputProps) & {
  type?: "phoneNumber";
  placeholderPhone?: string;
  max?: number;
};

export type TextAreaInputProps = {
  icon?: JSX.Element;
  type?: "TextAreaInput";
  placeholder?: string;
  textLimited?: boolean;
} & (TextFieldPropsWithoutOnchange & BasicFormInputProps);

export type PriceInputProps = {
  type?: "priceInput";
  textLimited?: boolean;
  hasVehiclePriceInquiry?: boolean;
} & (TextFieldPropsWithoutOnchange & BasicFormInputProps);

export type PhoneInputProps = {
  type?: "phoneInput";
  codeLabel: string;
  codeName: string;
} & (TextFieldPropsWithoutOnchange & BasicFormInputProps);

export type CarPlateDataProps = {
  type?: "carPlate";
} & (TextFieldPropsWithoutOnchange & BasicFormInputProps);

export type MotorPlateProps = {
  type?: "motorPlate";
} & (TextFieldPropsWithoutOnchange & BasicFormInputProps);

export type NationalInputProps = {
  type?: "nationalInput";
} & (TextFieldPropsWithoutOnchange & BasicFormInputProps);

export type FreeZoneCarPlateProps = {
  type?: "freeZoneCarPlate";
} & (TextFieldPropsWithoutOnchange & BasicFormInputProps);

export type DatePickerProps = {
  type?: "datePicker";
} & (TextFieldPropsWithoutOnchange & BasicFormInputProps);

export type CheckBoxInputProps = BasicFormInputProps & {
  onChange?: (checked: boolean) => void;
  type?: "CheckBoxInput";
  sx?: SxProps;
};
export type RadioButtonProps = {
  type?: "radioButton";
  disabled?: boolean;
  sx?: SxProps;
  radioItems: SelectionInputOptions[];
} & BasicFormInputProps;

export type TextInputData = Omit<TextInputProps, "formController">;
export type SelectionInputData = Omit<SelectionInputProps, "formController">;

export type SelectionModalInputData = Omit<
  SelectionModalInputProps,
  "formController"
>;
export type TextAreaInputData = Omit<TextAreaInputProps, "formController">;
export type PhoneInputData = Omit<PhoneInputProps, "formController">;
export type PhoneNumberInputData = Omit<
  PhoneNumberInputProps,
  "formController"
>;
export type PriceInputData = Omit<PriceInputProps, "formController">;
export type CarPlateData = Omit<CarPlateDataProps, "formController">;
export type NationalInputData = Omit<NationalInputProps, "formController">;
export type NumberInputData = Omit<NumberInputProps, "formController">;
export type FreeZoneCarPlateData = Omit<
  FreeZoneCarPlateProps,
  "formController"
>;
export type MotorPlateData = Omit<MotorPlateProps, "formController">;
export type DatePickerData = Omit<DatePickerProps, "formController">;
export type RadioButtonData = Omit<RadioButtonProps, "formController">;
export type CheckBoxData = Omit<CheckBoxInputProps, "formController">;

export type FormInputs =
  | TextInputData
  | SelectionModalInputData
  | TextAreaInputData
  | PhoneInputData
  | PhoneNumberInputData
  | PriceInputData
  | CarPlateData
  | NationalInputData
  | NumberInputData
  | FreeZoneCarPlateData
  | MotorPlateData
  | DatePickerData
  | RadioButtonData
  | SelectionInputData
  | CheckBoxData;

export type FormInputsData = FormInputs[];

export type FormDataReturn = {
  onChange?: { [key: string]: (value: number | string) => void };
  onClick?: { [key: string]: (value: number | string) => void };
  onFocus?: Record<string, () => void>;
  disableInputs?: { [key: string]: boolean };
  noneDisplayedInputs?: { [key: string]: boolean };
  formData?: FormInputsData;
};

export interface FormBuilderProps {
  formHandler?: FormDataReturn;
  FormInputsData: FormInputsData;
  formController: UseFormReturn;
}

export type FormBuilderInputComponents = {
  input: FormInputs;
  type: FormInputs["type"];
  onChange?: (value: any) => any;
  onClick?: (value: any) => void;
  onFocus?: () => void;
  disabled?: boolean;
  displayNone?: boolean;
  formController: UseFormReturn<FieldValues, any, undefined>;
};

export type DisableInputs = { [key: string]: boolean };
