import { TagData } from "../../../contexts/UserContext/types";

export interface TagProps {
  tagData: TagData;
  onTagRemoved(tagId: string): void;
}
