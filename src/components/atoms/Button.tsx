import { memo, FC, ReactNode } from "react";

type Props = {
  value: string;
  name: string;
  check?: boolean;
};

export const Button: FC<Props> = memo((props) => {
  const { value, name, check = false } = props;
  return (
    <label className="radio-label">
      <input
        value={value}
        name={name}
        type="radio"
        defaultChecked={check}
        className="radio-input"
      />
      <span className="radio-part">{value}</span>
    </label>
  );
});
