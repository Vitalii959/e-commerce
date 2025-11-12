import "./cartDrawer.css";

import closeBtn from "@/shared/assets/x-mark.png";
import {useCart} from "@/features/cart/useCart";
import {Cart} from "@/entities/cart/ui/container";
import {useEffect, useRef} from "react";
import {Button} from "@/shared/ui/button";

export const CartDrawer = ({checkoutLink}: {checkoutLink: string}) => {
  const {isCartDrawerOpen: isOpen, setCartDrawerOpen: setIsOpen} = useCart();
  const isActive = isOpen ? "active" : "";

  const closeRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (isOpen) closeRef.current?.focus();
  }, [isOpen]);

  return (
    <div className={`cart ${isActive}`}>
      <div className='cart__header'>
        <h4 className='cart__header-title'>Order Summary</h4>
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
      <Cart checkoutLink={checkoutLink} />
    </div>
  );
};
