import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import MainButton from "./components/UI/buttons/mainButton";
import FormBuilder from "./utils/FormBuilder";
import { getCounty, getFiles, getProvince } from "./utils/api/apicalls";
import { FormInputsData } from "./utils/formBuilderInterTypes";

function App() {
  const formController = useForm();

  const { data: files, isLoading: isLoadingFiles } = useQuery({
    queryFn: () => getFiles(),
    queryKey: ["files"],
    select(files) {
      return files.results.map((file) => {
        return { label: file.fa_name, value: file.const_name };
      });
    },
  });

  const { data: provinceData, isLoading: isLoadingProvince } = useQuery({
    queryFn: () => getProvince(),
    queryKey: ["province"],
    select(provinceData) {
      return provinceData.results.map((item) => {
        return { label: item.name, value: item.id.toString() };
      });
    },
  });

  const { data: countyData, isLoading: isLoadingCounty } = useQuery({
    queryKey: ["county", formController.watch("province")],
    queryFn: () => getCounty({ provinceId: formController.watch("province") }),
    enabled: !!formController.watch("province"),
    select(countyData) {
      return countyData.results.map((item) => {
        return { label: item.name, value: item.id.toString() };
      });
    },
  });

  const FormInputsData: FormInputsData = [
    {
      type: "selectionInput",
      name: "file_type",
      label: "نوع پرونده",
      rules: { required: { value: true, message: "وارد کردن الزامی" } },
      options: files,
      disabled: isLoadingFiles ? true : false,
    },
    {
      type: "selectionInput",
      name: "province",
      label: "نام استان",
      rules: { required: { value: true, message: "وارد کردن الزامی" } },
      options: provinceData,
      disabled: isLoadingProvince ? true : false,
    },
    {
      type: "selectionInput",
      name: "county",
      label: "نام شهر",
      rules: { required: { value: true, message: "وارد کردن الزامی" } },
      options: countyData,
      disabled:
        isLoadingCounty || Boolean(!formController.watch("province"))
          ? true
          : false,
    },
    {
      type: "text",
      name: "insurer_full_name",
      label: "نام بیمه گذار",
      rules: { required: { value: true, message: "وارد کردن الزامی" } },
    },
  ];

  return (
    <Box
      component={"form"}
      sx={{
        display: "flex",
        padding: "30px 50px",
      }}
      onSubmit={formController.handleSubmit((data) => {
        console.log(data);
      })}
    >
      <FormBuilder
        FormInputsData={FormInputsData}
        formController={formController}
      />
      <Box marginLeft={10}>
        <MainButton type="submit" variant="contained" size="baseLg">
          فیلتر
        </MainButton>
        <MainButton
          variant="contained"
          size="baseLg"
          sx={{ marginLeft: "10px" }}
          onClick={() => formController.reset()}
        >
          حذف فیلتر
        </MainButton>
      </Box>
    </Box>
  );
}

export default App;
