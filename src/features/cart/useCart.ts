import {useCartStore} from "./store";

export const useCart = () => {
  const product = useCartStore((s) => s.products);
  const isCartDrawerOpen = useCartStore((s) => s.isCartDrawerOpen);

  const addProduct = useCartStore((s) => s.addProduct);
  const setCartDrawerOpen = useCartStore((s) => s.setCartDrawerOpen);
  const setQty = useCartStore((s) => s.setQty);
  const deleteProduct = useCartStore((s) => s.deleteProduct);

  const subtotal = product.reduce((sum, p) => sum + p.price * p.qty, 0);
  const shipping = 5;
  const taxes = subtotal * 0.1;
  const total = subtotal + taxes + shipping;
  return {
    product,
    isCartDrawerOpen,

    addProduct,
    setCartDrawerOpen,
    setQty,
    deleteProduct,

    subtotal,
    shipping,
    taxes,
    total
  };
};
