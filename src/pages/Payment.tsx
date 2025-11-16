import {PaymentForm} from "@/features/payment/ui";
import s from "./payment.module.css";
import {OrderReview} from "@/widgets/ui/order-review/OrderReview";

export const Payment = () => {
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
