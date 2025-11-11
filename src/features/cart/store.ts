import {create} from "zustand";
import type {Product} from "@/features/products/api";
type CartStore = {
  products: Product[];
  addProduct: (Product: Product) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({products: [...state.products, product]}))
}));
