import { TagData } from "../../../contexts/UserContext/types";

export interface TagSearchProps {
  tags: TagData[];
  onTagAdded(tag: TagData): void;
  onCloseClicked(): void;
}
