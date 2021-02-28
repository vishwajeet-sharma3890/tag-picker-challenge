import "./styles.scss";
import ProfilePicture from "../../atoms/ProfilePicture";
import ProfileDescription from "../../atoms/ProfileDescription";
import { ProfileData } from "../../../contexts/UserContext/types";

/**
 * Component to show profile section of the page
 * @param userId (User Id of the user who's profile is being viewed)
 */
export default function ProfileSection({ imageUrl, fullName }: ProfileData) {
  return (
    <div className="profile-container">
      <ProfilePicture imageAlt="profile-picture" imageUrl={imageUrl} />
      <ProfileDescription name={fullName} />
    </div>
  );
}
