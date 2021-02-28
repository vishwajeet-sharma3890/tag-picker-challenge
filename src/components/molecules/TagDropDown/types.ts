import { TagData } from "../../../contexts/UserContext/types";

export interface TagDropDownProps {
  tags: TagData[];
  closeDropDown: () => void;
  addTag: () => void;
  addUserTag: (tag: TagData) => void;
}
