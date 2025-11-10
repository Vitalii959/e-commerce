import {useQuery} from "@tanstack/react-query";
import {fetchProduct} from "./api";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProduct
  });
};
