import { InputProps } from "./types";

export const Input: React.FC<InputProps> = ({
  name,
  handleChange,
  type,
  value
}) => (
  <input
    name={name}
    onChange={(e) => handleChange(e.target.value)}
    type={type}
    value={value}
  />
);
export default Input;
