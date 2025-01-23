import React from "react";
import PropTypes from "prop-types"; // Importing PropTypes for type-checking
import { Link } from "react-router-dom"; // Importing 'Link' for navigation to individual user profile pages

function UserItem({ user: { login, avatar_url } }) {
  return (
    // Card container for displaying a single user with Tailwind CSS styling
    <div className="shadow-md card compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          {/* User's avatar image */}
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          {/* User's login name */}
          <h2 className="card-title ">{login}</h2>
          {/* Link to navigate to the individual user profile page */}
          <Link
            className="text-base-content text-opacity-40"
            to={`/user/${login}`} // Dynamic path based on the user's login
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

// Prop type validation to ensure 'user' is an object and is required
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
