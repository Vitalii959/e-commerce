import {useQuery} from "@tanstack/react-query";

export type Product = {
  brand: string;
  category: string;
  des: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
};

export const fetchProduct = async (): Promise<Product[]> => {
  const URL = "https://fakestoreapiserver.reactbd.org/api/walmartproducts";

  const data = await fetch(URL).then((res) => res.json());
  return await data.data;
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProduct
  });
};
