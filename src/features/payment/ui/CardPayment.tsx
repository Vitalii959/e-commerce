import {useFormContext} from "react-hook-form";
import s from "./cardPayment.module.css";
import type {PaymentFormValues} from "../model/types";

export const CardPayment = () => {
  const {
    register,
    formState: {errors}
  } = useFormContext<PaymentFormValues>();
  return (
    <div>
      <div className={s.field}>
        <label htmlFor='cardNumber' className={s.label}>
          Card Number
        </label>
        <input
          id='cardNumber'
          type='text'
          className={s.input}
          placeholder='1234 5678 9012 3456'
          autoComplete='cc-number'
          inputMode='numeric'
          {...register("cardNumber", {
            required: "Card number required"
          })}
        />
        {errors.cardNumber && (
          <p className={s.error}>{errors.cardNumber?.message}</p>
        )}
      </div>
      <div className={s.field}>
        <label htmlFor='cardName' className={s.label}>
          Name on Card
        </label>
        <input
          id='cardName'
          type='text'
          className={s.input}
          placeholder='John Doe'
          {...register("cardName", {required: "Card name required"})}
        />
        {errors.cardName && (
          <p className={s.error}>{errors.cardName?.message}</p>
        )}
      </div>
      <div className={s.row}>
        <div className={`${s.field} ${s.half}`}>
          <label htmlFor='cardExpiry' className={s.label}>
            Expiry Date
          </label>
          <input
            id='cardExpiry'
            type='text'
            className={s.input}
            placeholder='MM/YY'
            autoComplete='cc-exp'
            inputMode='numeric'
            {...register("cardExpiry", {required: "Expiry date required"})}
          />
          {errors.cardExpiry && (
            <p className={s.error}>{errors.cardExpiry?.message}</p>
          )}
        </div>

        <div className={`${s.field} ${s.half}`}>
          <label htmlFor='cardCvv' className={s.label}>
            CVV
          </label>
          <input
            id='cardCvv'
            type='password'
            className={s.input}
            placeholder='123'
            autoComplete='cc-exp'
            inputMode='numeric'
            {...register("cardCvv", {required: "CVV required"})}
          />
          {errors.cardCvv && (
            <p className={s.error}>{errors.cardCvv?.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};
