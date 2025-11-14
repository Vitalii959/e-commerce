import {CustomerForm} from "@/features/customer-form/ui";
import s from "./customer.module.css";
export const Customer = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Customer Information</h1>
      <CustomerForm />
    </div>
  );
};
