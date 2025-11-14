import {ShippingForm, ShippingMethod} from "@/features/forms/ui";
import "./shipping.css";

export const Shipping = () => {
  return (
    <div className='shipping__container'>
      <h1 className='shipping__title'>Shipping Information</h1>
      <ShippingForm />
      <ShippingMethod />
    </div>
  );
};
