import {Button, Input} from "@/shared/ui";
import s from "./customerForm.module.css";
import {useForm, type SubmitHandler} from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  phone: string;
};
export const CustomerForm = () => {
  const {
    register,
    handleSubmit,

    formState: {errors}
  } = useForm<FormValues>();

  console.log(errors);

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  return (
    <div>
      <div className={s.formContainer}>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.addressContainer}>
            <Input
              label='Full Name'
              type='text'
              id='name'
              placeholder='Joe Dou'
              error={errors.name?.message}
              register={register("name", {
                required: "This field required",
                pattern: {
                  value: /^[A-Za-z]+([ '-][A-Za-z]+)+$/,
                  message: "Enter a valid full name"
                }
              })}
            />
            <Input
              label='Email Address'
              type='email'
              id='email'
              placeholder='example@gmail.com'
              error={errors.email?.message}
              register={register("email", {
                required: "This field required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email"
                }
              })}
            />
            <Input
              label='Phone Number'
              type='phone'
              id='phone'
              placeholder='(123) 456-7890'
              error={errors.phone?.message}
              register={register("phone", {
                required: "This field required",
                pattern: {
                  value: /^\+?[\d\s()-]{7,20}$/,
                  message: "Enter a valid phone number"
                }
              })}
            />
          </div>
          <Button type={"submit"} option='primary' text='Checkout' />
        </form>
      </div>
    </div>
  );
};
