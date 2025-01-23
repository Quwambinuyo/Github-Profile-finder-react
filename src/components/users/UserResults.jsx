import React from "react";
import { useContext } from "react"; // Importing 'useContext' to access context values
import Spinner from "../layout/Spinner"; // Importing the Spinner component to show a loading animation
import UserItem from "../users/UserItem"; // Importing UserItem to display each user in a card
import GithubContext from "../../context/github/GithubContext"; // Importing the GithubContext to access the users and loading state

function UserResults() {
  // Accessing the 'users' and 'loading' values from the GithubContext
  const { users, loading } = useContext(GithubContext);

  // If 'loading' is false, display the users
  if (!loading) {
    return (
      // Grid layout for displaying users in a responsive grid
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {/* Iterating through 'users' array and rendering a 'UserItem' for each user */}
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    // If still loading, show the Spinner component
    return <Spinner />;
  }
}

export default UserResults;
