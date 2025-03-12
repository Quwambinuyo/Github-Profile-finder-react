import React from "react";
import { useState, useContext } from "react"; // Importing hooks for managing state and context
import GithubContext from "../../context/github/GithubContext"; // Importing GithubContext to access searchUsers and clearUsers functions
import AlertContext from "../../context/alert/AlertContext"; // Importing AlertContext to access the setAlert function for displaying alerts

function UserSearch() {
  // State to store the text entered in the search input field
  const [text, setText] = useState("");

  // Handle change in input field and update 'text' state
  const handleChange = (e) => setText(e.target.value);

  // Destructure context values for Github functions
  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  // Destructure 'setAlert' function from AlertContext to display alerts
  const { setAlert } = useContext(AlertContext);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on form submit

    // If search input is empty, show an alert
    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      // If text is not empty, perform the search
      searchUsers(text);

      // Clear the search input field after submitting
      setText("");
    }
  };

  return (
    // Grid layout for search form and clear button
    <div className="grid gap-8 mb-8 md:grid-cols-2">
      {/* Form for searching users */}
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <div className="relative">
            {/* Input field for user search */}
            <input
              type="text"
              className="w-full pr-40 text-black bg-gray-200 input input-lg"
              placeholder="Search......"
              value={text} // Bind input value to 'text' state
              onChange={handleChange} // Update 'text' state on input change
            />
            {/* Submit button for form */}
            <button
              type="submit"
              className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
            >
              Go
            </button>
          </div>
        </div>
      </form>

      {/* Show 'Clear' button if there are users in the state */}
      {users.length > 0 && (
        <div>
          <button onClick={clearUsers} className="btn btn-ghost btn-lg">
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
