import "./button.css";

type Props = {
  text: string;
  option: "primary" | "secondary";
  logo?: string;
  onBtnClick: () => void;
};
export const Button = ({text, option, logo, onBtnClick, ...rest}: Props) => {
  return (
    <button
      className={`button ${option ? option : ""}`}
      onClick={onBtnClick}
      {...rest}
    >
      {logo && <div className='button__logo'>{logo}</div>}
      <div className='button__text'>{text}</div>
    </button>
  );
};
