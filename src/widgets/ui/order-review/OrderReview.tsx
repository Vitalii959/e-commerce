import {Cart} from "@/features/cart/ui";
import s from "./orderReview.module.css";
import {useFormStore} from "@/features/forms/model/useFormStore";

export const OrderReview = () => {
  const {address, customer} = useFormStore();
  const oneLineAddress = [
    address.street +
      ", " +
      address.appartment +
      ", " +
      address.city +
      ", " +
      address.state +
      ", " +
      address.zip
  ];

  return (
    <div className={s.container}>
      <h1 className={s.title}>Review Your Order</h1>

      <div className={s.customerContainer}>
        <h3 className={s.customerTitle}>Customer Information</h3>

        <div className={s.infoList}>
          <div className={s.item}>
            <p className={s.itemKey}>Shipping Address</p>
            <p className={s.itemValue}>{oneLineAddress}</p>
          </div>
          <div className={s.item}>
            <p className={s.itemKey}>Contact Information</p>
            <p className={s.itemValue}>{customer.email}</p>
          </div>
        </div>
      </div>

      <div className={s.cartInfo}>
        <h3 className={s.cartTitle}>Order Items</h3>

        <div className={s.cartContainer}>
          <div className={s.cartTitle}>
            <p className={s.cartProduct}>Product</p>
            <p className={s.cartPrice}>Price</p>
          </div>
          <div className={s.cartProducts}>
            <Cart type='view' />
          </div>
        </div>
      </div>
    </div>
  );
};
