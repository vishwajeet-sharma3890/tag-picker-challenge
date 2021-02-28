import { ReactChild } from "react";

export type ButtonSize = "small" | "medium" | "large";

export interface AddTagButtonProps {
  onClick: () => void;
  shouldAnimate?: boolean;
  buttonSize?: ButtonSize;
  children: ReactChild;
}
