import { createContext } from "react";
import { UserContextInterface } from "./types";

export const UserContext = createContext<UserContextInterface>({
  user: null,
  refreshUser: () => {},
  loading: false
});
UserContext.displayName = "UserContext";
