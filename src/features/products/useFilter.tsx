import type {Product} from "@/features/products/api";
import {useCallback, useMemo, useState} from "react";

export const useFilter = (products?: Product[]) => {
  const [categorySelected, setCategorySelected] = useState<string>("");

  const toggleCategory = useCallback((category: string) => {
    setCategorySelected(category);
  }, []);

  const filterByCategory = useMemo(() => {
    let result = products || [];

    if (categorySelected)
      result = result.filter((product) =>
        product.category.includes(categorySelected)
      );

    return result;
  }, [categorySelected, products]);

  return {toggleCategory, categorySelected, filterByCategory};
};
