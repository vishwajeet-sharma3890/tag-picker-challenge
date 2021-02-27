import { ProfilePictureProps } from "./types";

export const ProfilePicture: React.FC<ProfilePictureProps> = ({
  imageAlt,
  imageUrl
}) => <img src={imageUrl} alt={imageAlt} />;
export default ProfilePicture;
