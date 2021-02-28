import { Component } from "react";
import { UserContext } from "./context";
import { ProfileData, UserContextInterface, UserContextProps } from "./types";
import { fetchUser } from "../../api";

/**
 * Component which holds user profile data to be displayed and handles all database enquiries
 */
export default class UserProvider extends Component<
  UserContextProps,
  UserContextInterface
> {
  constructor(props: UserContextProps) {
    super(props);
    this.state = {
      user: null,
      refreshUser: this.refreshUser,
      loading: false
    };
  }

  /**
   * Function to fetch the latest user profile from the database
   */
  refreshUser = () => {
    // UserId to be received by url location or query params
    const userId = "1111-2222-3333-4444";

    this.setState({ loading: true });

    // TODO: Handle failure
    fetchUser(userId).then((user: ProfileData) => {
      this.setState({ user, loading: false });
    });
  };

  componentDidMount = () => {
    this.refreshUser();
  };

  render() {
    const { children } = this.props;
    return (
      <UserContext.Provider value={this.state}>{children}</UserContext.Provider>
    );
  }
}
