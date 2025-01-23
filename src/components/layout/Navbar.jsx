import React from "react";
import { FaGithub } from "react-icons/fa"; // Importing GitHub icon from react-icons
import { Link } from "react-router-dom"; // Importing Link component for navigation
import PropTypes from "prop-types"; // PropTypes for type-checking (not used here but imported)

function Navbar({ title }) {
  return (
    // Navbar container with Tailwind CSS classes for styling
    <nav className="mb-12 shadow-lg navbar bg-neutral text-neutral-content">
      <div className="container mx-auto">
        {/* Left section of the navbar with the logo and title */}
        <div className="flex-none px-2 mx-2">
          {/* GitHub icon */}
          <FaGithub className="inline pr-2 text-3xl" />
          {/* Link to the homepage with the app title */}
          <Link to="/" className="text-lg font-bold text-white align-middle">
            Github Finder
          </Link>
        </div>
        {/* Right section of the navbar with navigation links */}
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            {/* Link to the Home page */}
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            {/* Link to the About page */}
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
