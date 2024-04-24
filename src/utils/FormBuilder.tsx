import { JSX } from "react";
import MainAutocomplete from "../components/UI/inputs/autocomplete/mainAutocomplete";
import MainInput from "../components/UI/inputs/main/mainInput";
import {
  FormBuilderInputComponents,
  FormBuilderProps,
  FormInputs,
  SelectionInputData,
  TextInputData,
} from "./formBuilderInterTypes";

const inputsComponents = (
  inputProps: FormBuilderInputComponents
): JSX.Element | null => {
  const { input, displayNone, type, ...rest } = inputProps;
  if (displayNone) return null;
  const inputs = {
    text: (
      <MainInput {...rest} {...(input as TextInputData)} key={input.name} />
    ),
    selectionInput: (
      <MainAutocomplete
        {...rest}
        {...(input as SelectionInputData)}
        key={input.name}
      />
    ),
  };
  return inputs[type as keyof typeof inputs];
};
const FormBuilder = ({
  FormInputsData,
  formController,
  formHandler,
}: FormBuilderProps): JSX.Element => {
  const form = FormInputsData.map((inputData: FormInputs) => {
    const { type, ...input } = inputData;
    return inputsComponents({
      formController,
      input,
      type,
      onChange: formHandler?.onChange?.[input.name],
      onClick: formHandler?.onClick?.[input.name],
      onFocus: formHandler?.onFocus?.[input.name],
      disabled: formHandler?.disableInputs?.[input.name],
      displayNone: formHandler?.noneDisplayedInputs?.[input.name],
    });
  });
  return <>{form}</>;
};

export default FormBuilder;
