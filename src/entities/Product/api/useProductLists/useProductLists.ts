import { useQuery } from "react-query";
import axios from "axios";
import { getApiUrl } from "@/shared/helpers/getApiUrl/getApiUrl.ts";
import { ProductI } from "../../model/types/product.ts";

export function useProductLists(limit: number) {
  return useQuery<ProductI[], Error>(
    ["products", limit],
    () => axios.get(getApiUrl(`products?limit=${limit}`)).then(response => response.data),
  );
}