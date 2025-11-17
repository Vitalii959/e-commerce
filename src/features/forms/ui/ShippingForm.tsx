import {Button, Input, Select} from "@/shared/ui";
import "./shippingForm.css";
import {useForm, type SubmitHandler} from "react-hook-form";
import {regionsHelper} from "../model/createRegionHelper";
import type {ShippingType} from "../model/shippingTypes";
import {useFormStore} from "../model/useFormStore";
import {useNavigate} from "react-router";

export const ShippingForm = () => {
  const {address, setAddress, setIsShippingFormSuccess} = useFormStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors}
  } = useForm<ShippingType>({defaultValues: address});

  const getCities = watch("country");

  const {getCity, getState} = regionsHelper();

  const onSubmit: SubmitHandler<ShippingType> = (data) => {
    setIsShippingFormSuccess(true);
    setAddress(data);
    navigate("/checkout/forms/customer");
  };
  return (
    <div>
      <div className='shipping-form__title-container'>
        <div className='shipping-form__title'>Spipping Address</div>
      </div>
      <div className='shipping-form__container'>
        <form className='shipping-form__form' onSubmit={handleSubmit(onSubmit)}>
          <div className='shipping-form__address-container'>
            <Input
              label='Street Address'
              type='text'
              id='street'
              placeholder='123 Main Street'
              error={errors.street?.message}
              register={register("street", {
                required: "This field required",
                pattern: {
                  value: /^[0-9A-Za-z\s.'-]{3,}$/,
                  message: "Enter a valid street address"
                }
              })}
              required
            />
            <Input
              label='Apartment suite, etc.'
              optional='(optional)'
              type='text'
              id='appartment'
              placeholder='Apt 123'
              register={register("appartment", {
                pattern: {
                  value: /^[0-9A-Za-z\s.'-]*$/,
                  message: "Enter a valid apartment/suite"
                }
              })}
            />
            <Input
              label='City'
              type='text'
              id='city'
              placeholder='New York'
              error={errors.city?.message}
              register={register("city", {
                required: "This field required",
                pattern: {
                  value: /^[A-Za-z\s.'-]{2,}$/,
                  message: "Enter a valid city"
                }
              })}
            />

            <Select
              label='Country'
              id='Country'
              options={getState}
              error={errors.country?.message}
              register={register("country", {required: true})}
            />
            <Select
              label='State'
              id='state'
              options={getCity(getCities)}
              error={errors.state?.message}
              register={register("state", {required: true})}
            />
            <Input
              label='Zip Code'
              type='text'
              id='zip'
              placeholder='10001'
              error={errors.zip?.message}
              register={register("zip", {
                required: "This field required",
                pattern: {
                  value: /^\d{5}(-\d{4})?$/,
                  message: "Enter a valid ZIP code"
                }
              })}
            />
          </div>

          <Button type={"submit"} option='primary' text='Confirm' />
        </form>
      </div>
    </div>
  );
};
