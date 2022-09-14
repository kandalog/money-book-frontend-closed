import { memo, FC, ReactNode } from "react";

type Props = {
  value: string;
  name: string;
  checked: boolean;
  onChange: () => void;
};

export const RadioButton: FC<Props> = memo((props) => {
  const { value, name, checked, onChange } = props;
  return (
    <label className="radio-label">
      <input
        value={value}
        name={name}
        type="radio"
        className="radio-input"
        checked={checked}
        onChange={onChange}
      />
      <span className="radio-part">{value}</span>
    </label>
  );
});
