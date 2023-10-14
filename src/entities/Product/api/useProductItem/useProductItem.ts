import { useQuery } from "react-query";
import axios from "axios";
import { getApiUrl } from "@/shared/helpers/getApiUrl/getApiUrl.ts";
import { ProductI } from "../../model/types/product.ts";

export function useProductItem(productId: number) {
  return useQuery<ProductI, Error>(
    ["productItem", productId],
    () => axios.get(getApiUrl(`products/${productId}`)).then(response => response.data),
  );
}