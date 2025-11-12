import "./checkoutNav.css";
import {NavLink} from "react-router";

export const CheckoutNav = () => {
  return (
    <div className='checkoutNav'>
      <NavLink to='/checkout/forms/shipping'>Shipping</NavLink>
      {" / "}
      <NavLink to='/checkout/forms/customer'>Customer</NavLink>
      {" / "}
      <NavLink to='/checkout/payment'>Checkout</NavLink>
    </div>
  );
};
