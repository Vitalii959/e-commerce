import {ShippingForm, ShippingMethod} from "@/features/shipping-form/ui";
import "./shipping.css";

export const Shipping = () => {
  return (
    <div className='shipping__container'>
      <h1 className='shipping'>Shipping Information</h1>
      <ShippingForm />
      <ShippingMethod />
    </div>
  );
};
