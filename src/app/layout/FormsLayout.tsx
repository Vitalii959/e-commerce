import "./formLayout.css";
import {Outlet} from "react-router";

import {Cart} from "@/features/cart/ui/Cart";

export const FormsLayout = () => {
  return (
    <div className='formLayout'>
      <div className='cart__container'>
        <Cart />
      </div>

      <Outlet />
    </div>
  );
};
