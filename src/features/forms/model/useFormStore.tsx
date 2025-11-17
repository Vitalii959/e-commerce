import {formStore} from "@/features/forms/model/formStore";

export const useFormStore = () => {
  const customer = formStore((s) => s.customer);
  const address = formStore((s) => s.address);
  const shippingMethod = formStore((s) => s.shippingMethod);

  const setCustomer = formStore((s) => s.setCustomer);
  const setAddress = formStore((s) => s.setAddress);
  const setShippingMethod = formStore((s) => s.setShippingMethod);

  return {
    customer,
    address,
    shippingMethod,
    setCustomer,
    setAddress,
    setShippingMethod
  };
};
