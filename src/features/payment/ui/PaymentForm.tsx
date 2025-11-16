import s from "./paymentForm.module.css";

import {FormProvider, useForm} from "react-hook-form";
import {PaymentOption} from "./PaymentOption";
import {CardPayment} from "./CardPayment";

import type {PaymentFormValues} from "../model/types";
import {PaypalPayment} from "./PaypalPayment";
import {ApplePayPayment} from "./ApplePayPayment";
import {Button} from "@/shared/ui";

export const PaymentForm = () => {
  const methods = useForm<PaymentFormValues>({
    defaultValues: {
      paymentMethod: "card"
    }
  });

  const onSubmit = (data: PaymentFormValues) => {
    console.log("PAYMENT DATA:", data);
  };

  return (
    <section className={s.payment}>
      <h3 className={s.title}>Payment method</h3>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className={s.methods}>
            {/* CARD */}
            <PaymentOption
              title='Credit / Debit Card'
              description='Pay with Visa, MasterCard, etc.'
              value='card'
            >
              <CardPayment />
            </PaymentOption>

            {/* PAYPAL */}
            <PaymentOption
              title='PayPal'
              description="You'll be redirected to PayPal."
              value='paypal'
            >
              <PaypalPayment />
            </PaymentOption>

            {/* APPLE PAY */}
            <PaymentOption
              title='Apple Pay'
              description='Use Apple Pay on supported devices and browsers.'
              value='applePay'
            >
              <ApplePayPayment />
            </PaymentOption>
          </div>

          <div className={s.actions}>
            <Button option='primary' text='Confirm payment method' />
          </div>
        </form>
      </FormProvider>
    </section>
  );
};
