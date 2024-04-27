/* eslint-disable @typescript-eslint/no-explicit-any */
import { mainApi } from "./api";
import {
  IGetcountyResponse,
  IGetfileResponse,
  IPostDataProps,
  IPostDataResponse,
  IProvinceResponse,
} from "./apicalls.types";

export const getFiles = async (): Promise<IGetfileResponse> => {
  const response = await mainApi.get<IGetfileResponse>(
    "/constants/file_types/"
  );
  return response?.data;
};

export const getProvince = async (): Promise<IProvinceResponse> => {
  const response = await mainApi.get<IProvinceResponse>(
    "/portal/admin/setting/wop/?state=province"
  );
  return response?.data;
};

export const getCounty = async ({
  provinceId,
}: {
  provinceId: string;
}): Promise<IGetcountyResponse> => {
  const response = await mainApi.get<IGetcountyResponse>(
    `/portal/admin/setting/wop/?state=county&all_sub_county=1&province=${provinceId}`
  );
  return response?.data;
};

export const postDataForm = async ({
  data,
  page,
}: {
  data: IPostDataProps;
  page: number;
}): Promise<IPostDataResponse> => {
  const response = await mainApi.post<IPostDataResponse>(
    `/portal/branch/branch_file_list_v2/?page=${page}`,
    data
  );
  return response?.data;
};
