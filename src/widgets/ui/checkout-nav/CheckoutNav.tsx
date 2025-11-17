import "./checkoutNav.css";
import {NavLink} from "react-router";

import {useFormStore} from "@/features/forms/model/useFormStore";
import {useCartStore} from "@/features/cart/model/useCartStore";

export const CheckoutNav = () => {
  const {product} = useCartStore();
  const {isShippingFormSuccess, isCustomerFormSuccess} = useFormStore();

  const customerDisabled = !product.length || !isShippingFormSuccess;
  const paymentDisabled =
    !product.length || !isShippingFormSuccess || !isCustomerFormSuccess;

  return (
    <div className='checkoutNav'>
      <NavLink to='/'>Home</NavLink>
      {" / "}
      <NavLink
        className={!product.length ? "disabled" : ""}
        to='/checkout/forms/shipping'
      >
        Shipping
      </NavLink>
      {" / "}
      <NavLink
        className={customerDisabled ? "disable" : ""}
        to='/checkout/forms/customer'
      >
        Customer
      </NavLink>
      {" / "}
      <NavLink
        className={paymentDisabled ? "disable" : ""}
        to='/checkout/payment'
      >
        Checkout
      </NavLink>
    </div>
  );
};
