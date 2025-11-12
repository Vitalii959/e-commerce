import {useCartStore} from "./store";

export const useCart = () => {
  const product = useCartStore((s) => s.products);
  const addProduct = useCartStore((s) => s.addProduct);
  const isCartDrawerOpen = useCartStore((s) => s.isCartDrawerOpen);
  const setCartDrawerOpen = useCartStore((s) => s.setCartDrawerOpen);

  return {product, addProduct, isCartDrawerOpen, setCartDrawerOpen};
};
