import {ShippingForm} from "@/entities/shipping-form/ui";
import "./shipping.css";
import {ShippingMethod} from "@/entities/shipping-method";
export const Shipping = () => {
  return (
    <div className='shipping__container'>
      <h1 className='shipping'>Shipping Information</h1>
      <ShippingForm />
      <ShippingMethod />
    </div>
  );
};
