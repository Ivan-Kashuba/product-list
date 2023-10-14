import { API_URL } from "@/shared/constants/constants.ts";

export const getApiUrl = (urlPart: string) => {
  return API_URL + urlPart;
};