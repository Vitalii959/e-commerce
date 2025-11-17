import {PaymentForm} from "@/features/payment/ui";
import s from "./payment.module.css";
import {OrderReview} from "@/widgets/ui/order-review/OrderReview";

import {useCartStore} from "@/features/cart/model/useCartStore";
import {useFormStore} from "@/features/forms/model/useFormStore";
import {Navigate} from "react-router";

export const Payment = () => {
  const {isShippingFormSuccess, isCustomerFormSuccess} = useFormStore();
  const {product} = useCartStore();

  if (!product.length || !isShippingFormSuccess || !isCustomerFormSuccess) {
    return <Navigate to='/checkout/forms/customer' />;
  }

  return (
    <div className={s.container}>
      <div className={s.orderReview}>
        <OrderReview />
      </div>
      <div className={s.payment}>
        <PaymentForm />
      </div>
    </div>
  );
};
