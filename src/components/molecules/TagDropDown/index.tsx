import "./styles.scss";
import DropDownOption from "../../atoms/DropDownOption";
import { TagDropDownProps } from "./types";
import { useEffect, useRef } from "react";
import AddTagButton from "../../atoms/AddTagButton";

export default function TagDropDown({
  tags,
  closeDropDown,
  addTag,
  addUserTag
}: TagDropDownProps) {
  // Ref of current dropdown container
  const elementRef = useRef(null);

  // Function to close dropdown
  const handleClickOutside = (e: MouseEvent) => {
    if (
      elementRef &&
      elementRef.current &&
      e.target &&
      !elementRef.current.contains(e.target as Node)
    ) {
      closeDropDown();
    }
  };

  // Adding listener to DOM to close drop down if clicked outside
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <ul className="tag-dropdown" ref={elementRef}>
      {tags.map((tag, index) => (
        <DropDownOption
          onClick={() => addUserTag(tag)}
          key={`TagDropDown${index}`}
        >
          {tag.title}
        </DropDownOption>
      ))}
      <li>
        <AddTagButton onClick={addTag} shouldAnimate={false} buttonSize="small">
          CREATE TAG
        </AddTagButton>
      </li>
    </ul>
  );
}
