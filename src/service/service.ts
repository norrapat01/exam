import httpClient from "src/api/httpClient";
import { ProductItem } from "src/interface/ProductItem";

export const getAllProduct = async (): Promise<ProductItem[]> => {
  return httpClient.get("starbuck-product").then(({ data }) => data);
};
