import React from "react";

import {useFormContext} from "react-hook-form";
import s from "./paymentOption.module.css";
import type {PaymentFormValues} from "../model/types";

type Props = {
  title: string;
  description: string;
  value: string;

  children: React.ReactNode;
};

export const PaymentOption = ({title, description, value, children}: Props) => {
  const {register, watch} = useFormContext<PaymentFormValues>();

  const method = watch("paymentMethod");

  const isActive = method === value;

  return (
    <label
      className={`${s.paymentMethod} ${isActive ? s.paymentMethodActive : ""}`}
    >
      <input
        type='radio'
        value={value}
        className={s.radio}
        {...register(`paymentMethod`, {required: true})}
      />
      <div className={s.header}>
        <div className={s.name}>{title}</div>
        <div className={s.note}>{description}</div>
      </div>

      <div className={`${s.details} ${isActive ? s.detailsOpen : ""}`}>
        {children}
        <div />
      </div>
    </label>
  );
};
