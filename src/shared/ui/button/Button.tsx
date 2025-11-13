import React from "react";
import "./button.css";

type Props = {
  text: string;
  option: "primary" | "secondary";
  logo?: string;
  onBtnClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = React.forwardRef<HTMLButtonElement, Props>(
  function Button({text, logo, option, onBtnClick, ...rest}, ref) {
    return (
      <button
        ref={ref}
        className={`button ${option ? option : ""}`}
        onClick={onBtnClick}
        {...rest}
      >
        {logo && <img src={logo}></img>}
        <div className='button__text'>{text}</div>
      </button>
    );
  }
);
