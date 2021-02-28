import { TagData } from "../../../contexts/UserContext/types";

export interface TagSearchProps {
  tags: TagData[];
  onCloseClicked(): void;
}
