import { ReactChildren } from "react";

/**
 * Interface for defining Profile data
 */
export interface ProfileData {
  uuid: string;
  fullName: string;
  imageUrl: string;
  tags: string[];
}

/**
 * Interface for defining tag data
 */
export interface TagData {
  uuid: string;
  title: string;
  color: string;
}

/**
 * Interface for defining props to user context
 */
export interface UserContextProps {
  children: ReactChildren;
}

/**
 * Interface for defining context for user profile states
 */
export interface UserContextInterface {
  user: ProfileData | null;
  refreshUser(): void;
  loading: boolean;
}
