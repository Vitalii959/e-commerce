import "./formLayout.css";
import {Outlet} from "react-router";

import {CartWrapper} from "@/widgets/ui/cart-wrapper";

export const FormsLayout = () => {
  return (
    <div className='formLayout'>
      <CartWrapper />

      <Outlet />
    </div>
  );
};
