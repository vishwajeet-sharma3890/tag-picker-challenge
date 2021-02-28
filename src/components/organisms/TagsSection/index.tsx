import "./styles.scss";
import { useState, useEffect, useContext } from "react";
import Loader from "../../atoms/Loader";
import { TagsSectionProps } from "./types";
import { fetchTags } from "../../../../src/api";
import Card from "../../atoms/Card";
import SectionHeader from "../../atoms/SectionHeader";
import { UserContext } from "../../../contexts/UserContext/context";
import { TagData } from "../../../contexts/UserContext/types";
import Tags from "../../molecules/Tags";

/**
 * Component to show Tags, where user can view/add/edit user tags
 * @param userId (User Id of the user who's tags are being displayed)
 */
export default function TagsSection({ tagIds }: TagsSectionProps) {
  // Contexts
  const { user } = useContext(UserContext);

  // States
  const [userTags, setUserTags] = useState<TagData[] | null>(null);
  const [allTags, setAllTags] = useState<TagData[]>([]);

  // Functions to handle data callback
  const handleSuccess = (data: TagData[]) => {
    setAllTags(data);

    // Filtering user tags obtained from user profile
    const userTagsObtained = data.filter((tag: TagData) => {
      return tagIds.includes(String(tag.uuid));
    });

    // Setting user tags
    setUserTags(userTagsObtained);
  };

  // Fetching profile data
  useEffect(() => {
    if (!userTags) {
      fetchTags().then(handleSuccess);
    }
  });

  const onTagRemoved = (tagId: string) => {
    let updatedUserTags: TagData[] = [];
    if (userTags) {
      updatedUserTags = userTags.filter((userTag) => {
        return userTag.uuid !== tagId;
      });
    }
    setUserTags(updatedUserTags);
  };

  const onTagAdded = (tag: TagData) => {
    let updatedUserTags: TagData[] = [];
    if (userTags) {
      updatedUserTags.push(...userTags);
      updatedUserTags.push(tag);
      console.log(updatedUserTags);
    }
    setUserTags(updatedUserTags);
  };

  return (
    <div className="tag-section">
      <Card>
        <SectionHeader>Tags</SectionHeader>
        {userTags ? (
          <Tags
            allTags={allTags}
            userTags={userTags}
            onTagAdded={onTagAdded}
            onTagRemoved={onTagRemoved}
          />
        ) : (
          <Loader />
        )}
      </Card>
    </div>
  );
}
