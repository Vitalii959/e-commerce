import type {UseFormRegisterReturn} from "react-hook-form";
import s from "./input.module.css";

type InputProps = {
  label: string;
  optional?: string;
  type: string;
  id: string;
  placeholder: string;
  error?: string | undefined;
  register: UseFormRegisterReturn;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  label,
  optional,
  type,
  id,
  placeholder,
  error,

  register
}: InputProps) => {
  return (
    <div className={s.container}>
      <label htmlFor={id} className={s.label}>
        {label} {optional && <span className={s.optional}>{optional}</span>}
      </label>
      <input
        className={s.input}
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
      />

      {error && <p className={s.error}>{error}</p>}
    </div>
  );
};
