import "./cart.css";
import {Item} from "../components";
import {Button} from "@/shared/ui/button";
import {convertPrice} from "../../util/converter";

import {useCart} from "@/features/cart/useCart";
import {Link} from "react-router";

export const Cart = ({checkoutLink}: {checkoutLink?: string}) => {
  const {
    product,

    subtotal,
    shipping,
    taxes,
    total
  } = useCart();

  const handleClick = () => {};

  if (product.length === 0) return <p>Cart is empty</p>;
  return (
    <>
      <h4>Order summary</h4>
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
      {checkoutLink && (
        <Link to={checkoutLink}>
          <Button option='primary' text='Checkout' onBtnClick={handleClick} />
        </Link>
      )}
    </>
  );
};
