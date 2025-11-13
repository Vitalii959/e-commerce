import {Container} from "@/shared/ui";
import "./ckeckoutLayout.css";

import {CheckoutNav} from "@/widgets/ui/checkout-nav";
import {Outlet} from "react-router";

export const CheckoutLayout = () => {
  return (
    <Container>
      <div className='checkoutLayout'>
        <CheckoutNav />
        <Outlet />
      </div>
    </Container>
  );
};
