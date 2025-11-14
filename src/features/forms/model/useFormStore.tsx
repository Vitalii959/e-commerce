import {useStore} from "@/features/forms/model/useStore";

export const useFormStore = () => {
  const customer = useStore((s) => s.customer);
  const address = useStore((s) => s.address);
  const shippingMethod = useStore((s) => s.shippingMethod);

  const setCustomer = useStore((s) => s.setCustomer);
  const setAddress = useStore((s) => s.setAddress);
  const setShippingMethod = useStore((s) => s.setShippingMethod);

  return {
    customer,
    address,
    shippingMethod,
    setCustomer,
    setAddress,
    setShippingMethod
  };
};
