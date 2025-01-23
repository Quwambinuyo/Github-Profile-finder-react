import React from "react"; // Importing React library to create the component
import UserResults from "../components/users/UserResults"; // Importing UserResults component to display user data
import UserSearch from "../components/users/UserSearch"; // Importing UserSearch component for searching users

function Home() {
  return (
    <>
      {/* The UserSearch component allows the user to input search terms */}
      <UserSearch />

      {/* The UserResults component displays the search results of users */}
      <UserResults />
    </>
  );
}

export default Home; // Exporting the Home component to be used in other parts of the app
