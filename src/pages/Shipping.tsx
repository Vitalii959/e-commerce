import {ShippingForm, ShippingMethod} from "@/features/forms/ui";
import "./shipping.css";
import {Navigate} from "react-router";
import {useCartStore} from "@/features/cart/model/useCartStore";

export const Shipping = () => {
  const {product} = useCartStore();

  if (!product.length) {
    return <Navigate to='/' />;
  }

  return (
    <div className='shipping__container'>
      <h1 className='shipping__title'>Shipping Information</h1>
      <ShippingForm />
      <ShippingMethod />
    </div>
  );
};
