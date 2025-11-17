import {CustomerForm} from "@/features/forms/ui";
import s from "./customer.module.css";
import {useCartStore} from "@/features/cart/model/useCartStore";
import {useFormStore} from "@/features/forms/model/useFormStore";
import {Navigate} from "react-router";

export const Customer = () => {
  const {product} = useCartStore();

  const {isShippingFormSuccess} = useFormStore();

  if (!product.length || !isShippingFormSuccess) {
    // console.log(isShippingFormSuccess);

    return <Navigate to='/checkout/forms/shipping' />;
  }

  return (
    <div className={s.container}>
      <h1 className={s.title}>Customer Information</h1>
      <CustomerForm />
    </div>
  );
};
