import {create} from "zustand";
import type {CustomerType} from "./customerTypes";
import type {ShippingType, MethodType} from "./shippingTypes";

export type FormType = {
  customer: CustomerType;
  address: ShippingType;
  shippingMethod: MethodType | null;

  setCustomer: (object: CustomerType) => void;
  setAddress: (object: ShippingType) => void;
  setShippingMethod: (object: MethodType) => void;
};

export const formStore = create<FormType>((set) => ({
  customer: {name: "", email: "", phone: ""},
  address: {
    appartment: "",
    city: "",
    country: "",
    name: "",
    state: "",
    street: "",
    zip: ""
  },
  shippingMethod: null,

  setCustomer: (object) => set({customer: object}),
  setAddress: (object) => set({address: object}),
  setShippingMethod: (object) => set({shippingMethod: object})
}));
