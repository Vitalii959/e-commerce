import "./formLayout.css";
import {Outlet} from "react-router";

import {Cart} from "@/features/cart/ui/Cart";

export const FormsLayout = () => {
  return (
    <div className='formLayout'>
      <Cart />

      <Outlet />
    </div>
  );
};
