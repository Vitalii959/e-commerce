import "./cart.css";
import {CartItem} from "./CartItem";
import {Button} from "@/shared/ui";
import {convertPrice} from "@/shared/util/converter";

import {Link} from "react-router";
import {useCartStore} from "../model/useCartStore";
import type {displayOption} from "../model/types";

type Props = {
  type: displayOption;
  title?: string;
  checkoutLink?: string;
  handleClick?: () => void;
};

export const Cart = ({type, title, checkoutLink, handleClick}: Props) => {
  const {product, subtotal, shipping, taxes, total, setQty, deleteProduct} =
    useCartStore();

  if (product.length === 0) return <p>Cart is empty</p>;
  return (
    <>
      {title && <h4 className='cart__title'>Order summary</h4>}
      <div className='cart__items'>
        {product.map((item) => (
          <CartItem
            type={type}
            key={item._id}
            image={item.image}
            title={item.title}
            price={item.price}
            qty={item.qty}
            _id={item._id}
            setQty={setQty}
            deleteProduct={deleteProduct}
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
