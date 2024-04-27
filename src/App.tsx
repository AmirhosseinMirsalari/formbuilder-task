/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, CircularProgress, Pagination } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import BoxFilter from "./components/UI/boxFilter/BoxFilter";
import MainButton from "./components/UI/buttons/mainButton";
import FormBuilder from "./utils/FormBuilder";
import {
  getCounty,
  getFiles,
  getProvince,
  postDataForm,
} from "./utils/api/apicalls";
import { FormInputsData } from "./utils/formBuilderInterTypes";

function App() {
  const formController = useForm<FieldValues>();
  const [page, setPage] = useState(1);

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

  const {
    mutate,
    data: dataFiltered,
    isPending,
  } = useMutation({
    mutationFn: postDataForm,
    mutationKey: ["postDataForm", page],
    onSuccess: (res) => {
      console.log("res", res);
    },

    onError: (err) => {
      console.log("err", err);
    },
  });

  const FormInputsData: FormInputsData = [
    {
      type: "selectionInput",
      name: "file_type",
      label: "نوع پرونده",
      options: files,
      disabled: isLoadingFiles ? true : false,
    },
    {
      type: "selectionInput",
      name: "province",
      label: "نام استان",
      options: provinceData,
      disabled: isLoadingProvince ? true : false,
    },
    {
      type: "selectionInput",
      name: "county",
      label: "نام شهر",
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
    },
  ];

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    if (formController.formState.isSubmitSuccessful) {
      const newData = {
        file_type: formController.getValues().file_type,
        province: formController.getValues().province,
        county: formController.getValues().county,
        insurer_full_name: formController.getValues().insurer_full_name,
      };
      mutate({ data: newData, page });
    }
  }, [page]);

  return (
    <Box paddingBottom={2}>
      <Box
        component={"form"}
        sx={{
          display: "flex",
          padding: "10px 50px",
          marginBottom: "100px",
        }}
        onSubmit={formController.handleSubmit((data: any) =>
          mutate({ data, page })
        )}
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
      {dataFiltered?.results.map((item, index) => {
        return <BoxFilter item={item} index={index} page={page} />;
      })}
      {isPending && (
        <Box justifyContent="center" marginBottom={2} display="flex">
          <CircularProgress />
        </Box>
      )}
      {dataFiltered && (
        <Box justifyContent="center" marginBottom={2} display="flex">
          <Pagination
            count={dataFiltered?.page_count}
            page={page}
            onChange={handleChange}
          />
        </Box>
      )}
    </Box>
  );
}

export default App;
