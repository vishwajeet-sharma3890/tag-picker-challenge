import { TagPickerProps } from "./types";
import Tags from "../../molecules/Tags";

export default function TagPicker({ userTags, allTags }: TagPickerProps) {
  return <Tags allTags={allTags} userTags={userTags} />;
}
