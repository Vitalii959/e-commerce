import "./cartItem.css";

import {Button} from "@/shared/ui";

import {convertPrice} from "@/shared/util/converter";

import type {
  SetQtyType,
  DeleteProduct,
  CartProduct,
  displayOption
} from "../model/types";

type Props = {
  type: displayOption;
  setQty: SetQtyType;
  deleteProduct: DeleteProduct;
} & Pick<CartProduct, "image" | "title" | "price" | "qty" | "_id">;

export const CartItem = ({
  type,
  image,
  title,
  price,
  qty,
  _id,
  setQty,
  deleteProduct
}: Props) => {
  // const {setQty, deleteProduct} = useCart();
  const isEditAllow = type === "edit" ? true : false;
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
            {isEditAllow && (
              <Button
                text='-'
                option='secondary'
                onBtnClick={() => setQty("decrease", _id)}
              />
            )}
            <div className='cart__item-display'>{qty}</div>
            {isEditAllow && (
              <Button
                text='+'
                option='secondary'
                onBtnClick={() => setQty("increase", _id)}
              />
            )}
            {isEditAllow && (
              <Button
                text='Delete'
                option='secondary'
                onBtnClick={() => deleteProduct(_id)}
              />
            )}
          </div>
        </div>
      </div>
      <div className='cart__item-price'>{`$${convertPrice(price)}`}</div>
    </div>
  );
};
