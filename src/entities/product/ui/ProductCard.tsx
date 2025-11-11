import "./productCard.css";
import shopingCart from "@/shared/assets/shopping-cart.png";

import {useCart} from "@/features/cart/useCart";

import type {Product} from "@/features/products/api";

type Props = {
  product: Product;
};
export const ProductCard = ({product}: Props) => {
  const {addProduct} = useCart();

  return (
    <div className='card__container'>
      <div className='card__image'>
        <img src={product.image} alt='' />
      </div>
      <div className='card__about'>
        <div className='card__title'>{product.title}</div>
        <div className='card__description'>{product.des}</div>
        <div className='card__bottom-line'>
          <div className='card__price'>{`$${product.price}`}</div>
          <div
            className='card__add-to-bag-icon'
            onClick={() => addProduct(product)}
          >
            <img src={shopingCart} alt='Add' />
          </div>
        </div>
      </div>
    </div>
  );
};
