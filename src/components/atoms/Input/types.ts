export interface InputProps {
  name: string;
  disabled?: boolean;
  type?: string;
  value: string;
  handleChange(value: string): void;
  onFocusGained(): void;
  onCloseClicked(): void;
}
