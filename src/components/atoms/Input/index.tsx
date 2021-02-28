import "./styles.scss";
import { InputProps } from "./types";

export default function Input({
  name,
  handleChange,
  type = "text",
  value,
  onCloseClicked,
  onFocusGained,
}: InputProps) {
  return (
    <div className="input-container">
      <input
        name={name}
        onChange={(e) => handleChange(e.target.value)}
        type={type}
        value={value}
        onFocus={onFocusGained}
      />
      <img
        className="input-container__close"
        alt="close"
        src="/images/cross.svg"
        onClick={onCloseClicked}
      />
    </div>
  );
}
