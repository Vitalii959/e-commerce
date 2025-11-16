import s from "./paypalPayment.module.css";

export const PaypalPayment = () => {
  return (
    <p className={s.info}>
      After placing the order we will redirect you to PayPal to complete your
      payment.
    </p>
  );
};
