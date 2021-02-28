import "./styles.scss";
import { useState, useEffect, useContext } from "react";
import Loader from "../../atoms/Loader";
import { TagsSectionProps } from "./types";
import { fetchTags } from "../../../../src/api";
import Card from "../../atoms/Card";
import SectionHeader from "../../atoms/SectionHeader";
import TagPicker from "../TagPicker";
import { UserContext } from "../../../contexts/UserContext/context";
import { TagData } from "../../../contexts/UserContext/types";

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

  // Function to refresh tags
  const refreshTags = () => {
    fetchTags().then(handleSuccess);
  };

  // Fetching profile data
  useEffect(() => {
    if (!userTags || (user && userTags.length !== user.tags.length)) {
      refreshTags();
    }
  });

  return (
    <div className="tag-section">
      <Card>
        <SectionHeader>Tags</SectionHeader>
        {userTags ? (
          <TagPicker allTags={allTags} userTags={userTags} />
        ) : (
          <Loader />
        )}
      </Card>
    </div>
  );
}
