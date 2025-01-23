import React from "react";
import PropTypes from "prop-types"; // Importing PropTypes for type-checking
import ReposItem from "./ReposItem"; // Importing the ReposItem component to display individual repositories

function RepoList({ repos }) {
  return (
    // Card container for the list of repositories
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        {/* Heading for the repository list */}
        <h2 className="my-4 text-3xl font-bold card-title">
          Latest Repositories
        </h2>
        {/* Map through the 'repos' array and render a ReposItem component for each repository */}
        {repos?.map((repo) => (
          <ReposItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

// Prop type validation to ensure 'repos' is an array and is required
RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
