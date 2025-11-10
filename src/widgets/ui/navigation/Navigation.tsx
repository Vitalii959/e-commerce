import "./navigation.css";

import logo from "@/shared/assets/logo.png";
import like from "@/shared/assets/heart.png";
import bag from "@/shared/assets/shopping-bag.png";
import {Container} from "@/shared/ui/container";

export const Navigation = () => {
  return (
    <Container>
      <nav className='nav__container'>
        <div className='nav__logo'>
          <img src={logo} alt='' />
        </div>
        <div className='nav__search'></div>
        <div className='nav__btns'>
          <div className='nav__btns-like'>
            <img src={like} alt='' />
          </div>
          <div className='nav__btns-bag'>
            <img src={bag} alt='' />
          </div>
        </div>
      </nav>
    </Container>
  );
};
