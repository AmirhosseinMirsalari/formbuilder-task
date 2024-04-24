/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
interface getfileResponse {
  count: number;
  results: {
    const_name: string;
    fa_name: string;
  }[];

  default: {
    name: string;
    fa_name: string;
  };
}

interface provinceResponse {
  results: {
    name: string;
    id: number;
  }[];
}

interface countyResponse {
  results: {
    id: number;
    name: string;
    province: {
      name: string;
      id: number;
      is_active: boolean;
      created_date: number;
    };
    is_active: boolean;
    created_date: number;
  }[];
}

export const getFiles = async (): Promise<getfileResponse> => {
  const response = await axios.get<getfileResponse>(
    "https://stage-estate-api.iranianpooshesh.com/constants/file_types/",
    {
      headers: {
        Authorization:
          "jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0NzQzNTUxLCJpYXQiOjE3MTM4Nzk1NTEsImp0aSI6ImMzNTc5MmI0MzQ2MTQ0OTU5MDkwMTc5Y2Q0ZGMyNWQ1IiwidXNlcl9pZCI6MzB9.qkOKDZk6t3CYeCxNqDD-FCoBtFDGhM9PmYPss_LTAy0",
      },
    }
  );
  return response?.data;
};

export const getProvince = async (): Promise<provinceResponse> => {
  const response = await axios.get<provinceResponse>(
    "https://stage-estate-api.iranianpooshesh.com/portal/admin/setting/wop/?state=province",
    {
      headers: {
        Authorization:
          "jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0NzQzNTUxLCJpYXQiOjE3MTM4Nzk1NTEsImp0aSI6ImMzNTc5MmI0MzQ2MTQ0OTU5MDkwMTc5Y2Q0ZGMyNWQ1IiwidXNlcl9pZCI6MzB9.qkOKDZk6t3CYeCxNqDD-FCoBtFDGhM9PmYPss_LTAy0",
      },
    }
  );
  return response?.data;
};

export const getCounty = async ({
  provinceId,
}: {
  provinceId: string;
}): Promise<countyResponse> => {
  const response = await axios.get<countyResponse>(
    `https://stage-estate-api.iranianpooshesh.com/portal/admin/setting/wop/?state=county&all_sub_county=1&province=${provinceId}`,
    {
      headers: {
        Authorization:
          "jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0NzQzNTUxLCJpYXQiOjE3MTM4Nzk1NTEsImp0aSI6ImMzNTc5MmI0MzQ2MTQ0OTU5MDkwMTc5Y2Q0ZGMyNWQ1IiwidXNlcl9pZCI6MzB9.qkOKDZk6t3CYeCxNqDD-FCoBtFDGhM9PmYPss_LTAy0",
      },
    }
  );
  return response?.data;
};
