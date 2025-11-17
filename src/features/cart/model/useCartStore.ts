import {cartStore} from "@/features/cart/model/cartStore";

export const useCartStore = () => {
  const product = cartStore((s) => s.products);
  const isCartDrawerOpen = cartStore((s) => s.isCartDrawerOpen);

  const addProduct = cartStore((s) => s.addProduct);
  const setCartDrawerOpen = cartStore((s) => s.setCartDrawerOpen);
  const setQty = cartStore((s) => s.setQty);
  const deleteProduct = cartStore((s) => s.deleteProduct);

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
