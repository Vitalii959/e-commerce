import {create} from "zustand";
import type {
  CartProduct,
  IsCartDrawerOpen,
  AddProduct,
  SetCartDrawerOpen,
  SetQtyType,
  DeleteProduct
} from "./types";

export type CartStore = {
  products: CartProduct[];
  isCartDrawerOpen: IsCartDrawerOpen;
  addProduct: AddProduct;
  setCartDrawerOpen: SetCartDrawerOpen;
  setQty: SetQtyType;
  deleteProduct: DeleteProduct;
};

export const cartStore = create<CartStore>()((set) => ({
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
