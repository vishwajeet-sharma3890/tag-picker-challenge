import "./styles.scss";
import { useState } from "react";
import AddTagButton from "../../atoms/AddTagButton";
import Tag from "../../atoms/Tag";
import TagSearch from "../../molecules/TagSearch";
import { TagsProps } from "./types";

export default function Tags({
  allTags,
  userTags,
  onTagAdded,
  onTagRemoved
}: TagsProps) {
  // States
  const [showSearch, setShowSearch] = useState(false);

  // Function to close Search input
  const closeSearch = () => {
    setShowSearch(false);
  };

  return (
    <div className="tag-container">
      {userTags.map((tag, index) => (
        <Tag key={`Tag${index}`} tagData={tag} onTagRemoved={onTagRemoved} />
      ))}

      {showSearch ? (
        <TagSearch
          onTagAdded={onTagAdded}
          tags={allTags}
          onCloseClicked={closeSearch}
        />
      ) : (
        <AddTagButton onClick={() => setShowSearch(true)}>ADD</AddTagButton>
      )}
    </div>
  );
}
