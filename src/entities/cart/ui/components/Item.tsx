import "./item.css";

import {Button} from "@/shared/ui/button";
import type {CartProduct} from "@/features/cart/store";
import {useCart} from "@/features/cart/useCart";

type Props = Pick<CartProduct, "image" | "title" | "price" | "qty" | "_id">;

export const Item = ({image, title, price, qty, _id}: Props) => {
  const {setQty, deleteProduct} = useCart();
  return (
    <div className='cart__item'>
      <div className='cart__item-img'>
        <img src={image} alt='' />
      </div>
      <div className='cart__item-description'>
        <div className='cart__item-title'>{title}</div>
        <div className='cart__item-subtitle'>
          <div className='cart__item-qty'>{`Qty:`}</div>
          <div className='cart__item-btns'>
            <Button
              text='-'
              option='secondary'
              onBtnClick={() => setQty("decrease", _id)}
            />
            <div className='cart__item-display'>{qty}</div>
            <Button
              text='+'
              option='secondary'
              onBtnClick={() => setQty("increase", _id)}
            />
            <Button
              text='Delete'
              option='secondary'
              onBtnClick={() => deleteProduct(_id)}
            />
          </div>
        </div>
      </div>
      <div className='cart__item-price'>{`$${price}`}</div>
    </div>
  );
};
