import UserProvider from "../src/contexts/UserContext";
import ProfilePage from "./components/pages/ProfilePage";
import { UserContext } from "./contexts/UserContext/context";
import "./styles.scss";

/**
 * App component holding the base starting point for tag picker challenge
 */
export default function App() {
  return (
    <UserProvider>
      <UserContext.Consumer>{(user) => <ProfilePage />}</UserContext.Consumer>
    </UserProvider>
  );
}
