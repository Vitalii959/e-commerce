import {create} from "zustand";
import type {Product} from "@/features/products/api";

type CartStore = {
  products: Product[];
  isCartDrawerOpen: boolean;
  addProduct: (product: Product) => void;
  setCartDrawerOpen: (v: boolean) => void;
};

export const useCartStore = create<CartStore>()((set) => ({
  products: [],
  isCartDrawerOpen: false,
  addProduct: (product) =>
    set((state) => ({products: [...state.products, product]})),
  setCartDrawerOpen: (isCartDrawerOpen) => set({isCartDrawerOpen})
}));
