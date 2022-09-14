import { memo, FC } from "react";

type Props = {
  type: string;
  name: string;
  placeholder: string;
  title: string;
  value: string;
  onChange: (e: any) => void;
};

export const AuthInput: FC<Props> = memo(
  ({ title, type, name, placeholder, value, onChange }) => {
    return (
      <li className="form__item">
        <p className="form__title">{title}</p>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </li>
    );
  }
);
