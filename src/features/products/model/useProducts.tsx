import {useQuery} from "@tanstack/react-query";
import {fetchProduct} from "@/features/products/model/api";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProduct
  });
};
