import type {Product} from "@/features/products/model/api";
import {useMemo} from "react";

export type Categories = {
  id: string;
  count: number;
};
export const useCategories = (products?: Product[]): Categories[] => {
  return useMemo(() => {
    const list = products ?? [];

    const map = new Map();
    for (const p of list) {
      const id = p.category ?? "uncategorized";
      map.set(id, (map.get(id) ?? 0) + 1);
    }
    return Array.from(map, ([id, count]) => ({id, count}));
  }, [products]);
};
