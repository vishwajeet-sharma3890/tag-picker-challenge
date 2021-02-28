import { TagData } from "../../../contexts/UserContext/types";

export interface TagsProps {
  userTags: TagData[];
  allTags: TagData[];
  onTagAdded(tag: TagData): void;
  onTagRemoved(tagId: string): void;
}
