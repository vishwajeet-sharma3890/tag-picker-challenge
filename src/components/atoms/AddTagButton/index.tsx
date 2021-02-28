import { useState } from "react";
import "./styles.scss";
import { AddTagButtonProps } from "./types";

export default function AddTagButton({
  onClick,
  buttonSize = "medium",
  children,
  shouldAnimate = true
}: AddTagButtonProps) {
  // States
  const [showAdd, setShowAdd] = useState(!shouldAnimate);

  return (
    <div
      className="add-tag-button-container"
      onMouseEnter={() => setShowAdd(true)}
      onMouseLeave={() => setShowAdd(!shouldAnimate)}
      onClick={onClick}
    >
      <button
        className={`add-tag-button-container__button add-tag-button-container__button__${buttonSize}`}
      >
        <img src={"/images/cross.svg"} alt="add-image" />
      </button>
      <span
        className={`add-tag-button-container__label${
          showAdd ? "__visible" : ""
        }`}
      >
        {children}
      </span>
    </div>
  );
}
