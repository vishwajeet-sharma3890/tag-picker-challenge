import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext/context";
import "./styles.scss";
import { TagProps } from "./types";
import { removeUserTag } from "../../../../src/api";

export default function Tag({ tagData, onTagRemoved }: TagProps) {
  // User Context
  const { user, refreshUser } = useContext(UserContext);

  // Show cross
  const [showCross, setShowCross] = useState(false);

  // Function to remove tag
  const handleRemoveUserTag = () => {
    if (user) {
      onTagRemoved(tagData.uuid);
      removeUserTag(user.uuid, tagData.uuid).then(refreshUser);
    }
  };

  return (
    <div
      className="tag"
      style={{ background: tagData.color }}
      onMouseEnter={() => setShowCross(true)}
      onMouseLeave={() => setShowCross(false)}
    >
      <span>{tagData.title}</span>
      <img
        className={`tag__cross${showCross ? "__visible" : ""}`}
        src={"/images/cross.svg"}
        alt="cross-image"
        onClick={handleRemoveUserTag}
      />
    </div>
  );
}
