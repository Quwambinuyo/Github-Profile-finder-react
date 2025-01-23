import React from "react";
import PropTypes from "prop-types"; // Importing PropTypes for type-checking
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa"; // Importing FontAwesome icons for UI enhancements

function ReposItem({ repo }) {
  // Destructuring the repository details from the 'repo' prop
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    // Card container for a single repository with Tailwind CSS styling
    <div className="mb-2 text-white bg-gray-800 rounded-md card hover:bg-gray-900">
      <div className="card-body">
        {/* Repository name with a link to its GitHub page */}
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            <FaLink className="inline mr-1" /> {name}
          </a>
        </h3>
        {/* Repository description */}
        <p className="mb-3 text-gray-400">{description}</p>

        {/* Displaying repository stats using badges */}
        <div>
          {/* Watchers count */}
          <div className="mr-2 badge badge-info badge-lg">
            <FaEye className="mr-1" /> {watchers_count}
          </div>
          {/* Stargazers count */}
          <div className="mr-2 badge badge-success">
            <FaStar className="mr-1" /> {stargazers_count}
          </div>
          {/* Forks count */}
          <div className="mr-2 badge badge-warning">
            <FaUtensils className="mr-1" /> {forks}
          </div>
          {/* Open issues count */}
          <div className="badge badge-error">
            <FaInfo className="mr-1" /> {open_issues}
          </div>
        </div>
      </div>
    </div>
  );
}

// Prop type validation to ensure the 'repo' prop is an object and is required
ReposItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default ReposItem;
