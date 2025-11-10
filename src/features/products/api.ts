import {useQuery} from "@tanstack/react-query";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const fetchProduct = async (): Promise<Product[]> => {
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
