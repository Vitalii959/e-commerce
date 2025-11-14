export type ShippingType = {
  appartment: string;
  city: string;
  country: string;
  name: string;
  state: string;
  street: string;
  zip: string;
};

export type MethodType = {
  title: string;
  deliveryTime: string;
  price: number;
  default?: boolean;
};
