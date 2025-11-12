import "./item.css";

import {Button} from "@/shared/ui/button";
import type {Product} from "@/features/products/api";

type Props = Pick<Product, "image" | "title" | "price"> & {
  handleClick: () => void;
};

export const Item = ({image, title, price, handleClick}: Props) => {
  return (
    <div className='cart__item'>
      <div className='cart__item-img'>
        <img src={image} alt='' />
      </div>
      <div className='cart__item-description'>
        <div className='cart__item-title'>{title}</div>
        <div className='cart__item-subtitle'>
          <div className='cart__item-qty'>{`Qty: ${1}`}</div>
          <div className='cart__item-btns'>
            <Button text='-' option='secondary' onBtnClick={handleClick} />
            <div className='cart__item-display'>5</div>
            <Button text='+' option='secondary' onBtnClick={handleClick} />
            <Button text='Delete' option='secondary' onBtnClick={handleClick} />
          </div>
        </div>
      </div>
      <div className='cart__item-price'>{`$${price}`}</div>
    </div>
  );
};
