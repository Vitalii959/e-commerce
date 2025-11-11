import {useCartStore} from "./store";

export const useCart = () => {
  const addProduct = useCartStore().addProduct;

  return {addProduct};
};
