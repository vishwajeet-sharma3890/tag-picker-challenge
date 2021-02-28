import "./styles.scss";
import { useContext, useState } from "react";
import Input from "../../atoms/Input";
import TagDropDown from "../../molecules/TagDropDown";
import { TagSearchProps } from "./types";
import fuzzysort from "fuzzysort";
import { UserContext } from "../../../contexts/UserContext/context";
import { createTag, assignUserTag } from "../../../../src/api";
import { TagData } from "../../../contexts/UserContext/types";

export default function TagSearch({ tags, onCloseClicked }: TagSearchProps) {
  // User Context
  const { user, refreshUser } = useContext(UserContext);

  // States
  const [searchedTag, setSearchedTag] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredTags, setFilteredTags] = useState<TagData[]>([]);

  // Function to close drop down
  const closeDropDown = () => {
    setShowDropDown(false);
  };

  // Function to handle text searched
  const handleChange = (value: string) => {
    setSearchedTag(value);
    setShowDropDown(Boolean(value));

    // Filtering items based on search
    const updatedFilterTags: TagData[] = [];

    tags.map((tag: TagData) => {
      // TODO: Move this filtering logic to a util.js
      const fuzziedObject = fuzzysort.single(searchedTag, tag.title);
      if (fuzziedObject && fuzziedObject.score > -50) {
        updatedFilterTags.push(tag);
      }
    });

    setFilteredTags(updatedFilterTags);
  };

  // Function to close search input and refresh user with new tag
  const handleUserTagAdded = () => {
    refreshUser();
  };

  // Function to add tag to user
  const addUserTag = (tagId: string) => {
    onCloseClicked();
    // TODO: Handle failure
    if (user) {
      assignUserTag(user.uuid, tagId).then(handleUserTagAdded);
    }
  };

  // Function to add tag
  const addTag = () => {
    onCloseClicked();
    createTag({ title: searchedTag }).then((data: TagData) => {
      addUserTag(data.uuid);
    });
  };

  return (
    <div className="tag-search">
      <Input
        name="search"
        value={searchedTag}
        handleChange={handleChange}
        onCloseClicked={onCloseClicked}
        onEnterPressed={addTag}
        onFocusGained={() => setShowDropDown(Boolean(searchedTag))}
      />
      {showDropDown && (
        <TagDropDown
          addTag={addTag}
          tags={filteredTags}
          closeDropDown={closeDropDown}
          addUserTag={addUserTag}
        />
      )}
    </div>
  );
}
