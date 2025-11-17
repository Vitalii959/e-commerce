import {formStore} from "@/features/forms/model/formStore";

export const useFormStore = () => {
  const customer = formStore((s) => s.customer);
  const address = formStore((s) => s.address);
  const shippingMethod = formStore((s) => s.shippingMethod);

  const isShippingFormSuccess = formStore((s) => s.isShippingFormSuccess);
  const isCustomerFormSuccess = formStore((s) => s.isCustomerFormSuccess);

  const setCustomer = formStore((s) => s.setCustomer);
  const setAddress = formStore((s) => s.setAddress);
  const setShippingMethod = formStore((s) => s.setShippingMethod);

  const setIsShippingFormSuccess = formStore((s) => s.setIsShippingFormSuccess);
  const setIsCustomerFormSuccess = formStore((s) => s.setIsCustomerFormSuccess);

  return {
    customer,
    address,
    shippingMethod,

    isShippingFormSuccess,
    isCustomerFormSuccess,

    setCustomer,
    setAddress,
    setShippingMethod,

    setIsShippingFormSuccess,
    setIsCustomerFormSuccess
  };
};
