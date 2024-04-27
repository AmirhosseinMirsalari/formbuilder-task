/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IGetfileResponse {
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

export interface IProvinceResponse {
  results: {
    name: string;
    id: number;
  }[];
}

export interface IGetcountyResponse {
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

export interface IPostDataProps {
  file_type: string;
  province: string;
  county: string;
  insurer_full_name: string;
}

export interface IPostDataResponse {
  current: number;
  page_count: number;
  page_size: number;
  count: number;
  next: string;
  previous: unknown;
  results: {
    file: {
      id: number;
      file_code: string;
      file_type: {
        const_name: string;
        fa_name: string;
      };
      insurance_section: {
        name: string;
        id: number;
      };
      insurance_type: {
        name: string;
        id: number;
      };
      last_status: {
        fa_name: string;
        const_name: string;
        type: string;
      };
      insurance_branch: {
        id: number;
        name: string;
        insurance: {
          id: number;
          code: string;
          name: string;
        };
      };
      visit_province: {
        name: string;
        id: number;
      };
      visit_county: {
        name: string;
        id: number;
      };
      adjuster: any;
      branch: {
        name: string;
        id: number;
      };
      work_title: string;
      created_date: string;
      insurer_full_name: string;
      message_number: number;
    };
    id: number;
    type: string;
    status_name: string;
  }[];
}
