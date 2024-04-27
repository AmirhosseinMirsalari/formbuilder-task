/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IBoxFilterProps {
  item: {
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
  };
  index: number;
  page: number;
}
