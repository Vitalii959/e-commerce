import "./cart.css";
import {Item} from "../components";
import {Button} from "@/shared/ui/button";

import closeBtn from "@/shared/assets/x-mark.png";
import {useCart} from "@/features/cart/useCart";

export const Cart = () => {
  // const [isOpen, setIsOpen] = useState(true);
  const {
    product,
    isCartDrawerOpen: isOpen,
    setCartDrawerOpen: setIsOpen
  } = useCart();
  const isActive = isOpen ? "active" : "";

  const handleClick = () => {};
  return (
    <div className={`cart ${isActive}`}>
      <div className='cart__header'>
        <h4 className='cart__header-title'>Title</h4>
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
            handleClick={handleClick}
          />
        ))}
      </div>
      <div className='cart__price'>
        <div className='cart__price-subtotal'>
          <p>Subtotal</p>
          <p>$370.00</p>
        </div>
        <div className='cart__price-shipping'>
          <p>Shipping</p>
          <p>$5.00</p>
        </div>
        <div className='cart__price-taxes'>
          <p>Taxes</p>
          <p>$29.60</p>
        </div>
      </div>
      <div className='cart__total'>
        <p>Total</p>
        <p>$404.60</p>
      </div>
      <Button option='primary' text='Checkout' onBtnClick={handleClick} />
    </div>
  );
};
