const BASE_URL = "https://stage-estate-api.iranianpooshesh.com";

import { Api, createAxiosInstance } from "./services/services";

// iranian poshesh api
export const mainApi = new Api(createAxiosInstance(BASE_URL));
