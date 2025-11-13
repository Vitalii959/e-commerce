import {convertPrice} from "@/shared/util/converter";
import "./shippingMethod.css";

const shipingMethods = [
  {title: "StandartShipping", deliveryTime: "5-7 Business Days", price: 5},
  {title: "StandartShipping", deliveryTime: "2-3 Business Days", price: 5},
  {title: "StandartShipping", deliveryTime: "Next Business Days", price: 25}
];
export const ShippingMethod = () => {
  return (
    <div>
      <div className='shipping-method__title-container'>
        <div className='shipping-method__title'>Spipping Address</div>
      </div>
      <div className='shipping-method__container'>
        <form className='shipping-method__form'>
          {shipingMethods.map((item, index) => (
            <label key={index} className='shipping-method__option'>
              <input type='radio' name='shipping' />
              <div className='shipping-method__options-desc'>
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.deliveryTime}</p>
                </div>
                {`$${convertPrice(item.price)}`}
              </div>
            </label>
          ))}
        </form>
      </div>
    </div>
  );
};
