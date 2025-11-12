import "./cart.css";
import {Item} from "../components";
import {Button} from "@/shared/ui/button";
import {convertPrice} from "../../util/converter";

import closeBtn from "@/shared/assets/x-mark.png";
import {useCart} from "@/features/cart/useCart";

export const Cart = () => {
  const {
    product,
    isCartDrawerOpen: isOpen,
    setCartDrawerOpen: setIsOpen,
    subtotal,
    shipping,
    taxes,
    total
  } = useCart();
  const isActive = isOpen ? "active" : "";

  const handleClick = () => {};
  return (
    <div className={`cart ${isActive}`}>
      <div className='cart__header'>
        <h4 className='cart__header-title'>Order Summary</h4>
        <div
          className='cart__header-close-btn'
          onClick={() => setIsOpen(false)}
        >
          <img src={closeBtn} alt='close' />
        </div>
      </div>
      <div className='cart__items'>
        {product.map((item) => (
          <Item
            key={item._id}
            image={item.image}
            title={item.title}
            price={item.price}
            qty={item.qty}
            _id={item._id}
          />
        ))}
      </div>
      <div className='cart__price'>
        <div className='cart__price-subtotal'>
          <p>Subtotal</p>
          <p>{`$${convertPrice(subtotal)}`}</p>
        </div>
        <div className='cart__price-shipping'>
          <p>Shipping</p>
          <p>{`$${convertPrice(shipping)}`}</p>
        </div>
        <div className='cart__price-taxes'>
          <p>Taxes</p>
          <p>{`$${convertPrice(taxes)}`}</p>
        </div>
      </div>
      <div className='cart__total'>
        <p>Total</p>
        <p>{`$${convertPrice(total)}`}</p>
      </div>
      <Button option='primary' text='Checkout' onBtnClick={handleClick} />
    </div>
  );
};
