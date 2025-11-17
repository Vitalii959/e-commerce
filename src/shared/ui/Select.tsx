import type {UseFormRegisterReturn} from "react-hook-form";
import s from "./select.module.css";

type SelectProps = {
  id: string;
  label: string;
  options: string[];
  register: UseFormRegisterReturn;
  error?: string;
};
export const Select = ({id, label, options, register, error}: SelectProps) => {
  return (
    <div className={s.container}>
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
      <select className={s.select} id={id} {...register}>
        {options?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      {error && <p className={s.error}>{error}</p>}
    </div>
  );
};
