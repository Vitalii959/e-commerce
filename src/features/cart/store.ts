import {create} from "zustand";
import type {Product} from "@/features/products/api";

export type CartProduct = Product & {qty: number};

type CartStore = {
  products: CartProduct[];
  isCartDrawerOpen: boolean;
  addProduct: (product: Product) => void;
  setCartDrawerOpen: (v: boolean) => void;
  setQty: (value: "increase" | "decrease", id: number) => void;
  deleteProduct: (id: number) => void;
};

export const useCartStore = create<CartStore>()((set) => ({
  products: [],
  isCartDrawerOpen: false,

  addProduct: (product) =>
    set((state) => {
      const exist = state.products.find((p) => p._id === product._id);

      if (exist) {
        return {
          products: state.products.map((p) =>
            p._id === product._id ? {...p, qty: p.qty + 1} : p
          )
        };
      }
      return {products: [...state.products, {...product, qty: 1}]};
    }),

  setCartDrawerOpen: (isCartDrawerOpen) => set({isCartDrawerOpen}),
  setQty: (value, id) =>
    set((state) => {
      const action = value === "increase" ? 1 : -1;
      const exist = state.products.find((p) => p._id === id);

      if (!exist || (exist.qty === 1 && action === -1)) return state;
      else {
        return {
          products: state.products.map((product) =>
            product._id === id
              ? {...product, qty: product.qty + action}
              : product
          )
        };
      }
    }),
  deleteProduct: (id) =>
    set((state) => {
      const exist = state.products.find((p) => p._id === id);
      if (exist)
        return {
          products: state.products.filter((p) => p._id !== id)
        };
      return state;
    })
}));
