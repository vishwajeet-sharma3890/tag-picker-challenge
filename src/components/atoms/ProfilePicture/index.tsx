import "./styles.scss";
import { ProfilePictureProps } from "./types";

export default function ProfilePicture({
  imageUrl,
  imageAlt
}: ProfilePictureProps) {
  return <img src={imageUrl} alt={imageAlt} />;
}
