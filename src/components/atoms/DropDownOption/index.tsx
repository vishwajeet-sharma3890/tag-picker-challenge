import "./styles.scss";
import { DropDownOptionProps } from "./types";

export default function DropDownOption({
  onClick,
  children
}: DropDownOptionProps) {
  return <li onClick={onClick}>{children}</li>;
}
