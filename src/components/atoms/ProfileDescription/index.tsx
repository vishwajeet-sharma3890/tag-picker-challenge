import "./styles.scss";
import { ProfileDescriptionProps } from "./types";

export default function ProfileDescription({ name }: ProfileDescriptionProps) {
  return <span className="profile-description">{name}</span>;
}
