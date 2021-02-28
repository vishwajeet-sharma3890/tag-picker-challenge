import ProfileSection from "../../organisms/ProfileSection";
import TagsSection from "../../organisms/TagsSection";
import Loader from "../../atoms/Loader";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext/context";

/**
 * Component to show Profile page
 */
export default function ProfilePage() {
  // User Context to display data
  const { user } = useContext(UserContext);
  return (
    <>
      {user ? (
        <>
          <ProfileSection {...user} />
          <TagsSection tagIds={user.tags} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}
