import "./cartDrawer.css";

import closeBtn from "@/shared/assets/x-mark.png";
import {useCart} from "@/features/cart/model/useCart";
import {Cart} from "@/features/cart/ui/";
import {useEffect, useRef} from "react";
import {Button} from "@/shared/ui";

export const CartDrawer = ({checkoutLink}: {checkoutLink: string}) => {
  const {isCartDrawerOpen: isOpen, setCartDrawerOpen: setIsOpen} = useCart();
  const isActive = isOpen ? "active" : "";

  const closeRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (isOpen) closeRef.current?.focus();
  }, [isOpen]);

  return (
    <div className={`cart__drawer ${isActive}`}>
      <div className='cart__drawer-header'>
        <h4 className='cart__drawer-header-title'>Order Summary</h4>
        <div className='closeBtn'>
          <Button
            ref={closeRef}
            text=''
            logo={closeBtn}
            option='secondary'
            onBtnClick={() => setIsOpen(false)}
          />
        </div>
      </div>
      <Cart
        type='edit'
        checkoutLink={checkoutLink}
        handleClick={() => setIsOpen(false)}
      />
    </div>
  );
};
