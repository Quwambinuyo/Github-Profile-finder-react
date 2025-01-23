import React from "react"; // Importing React to use JSX and create the component
import { FaHome } from "react-icons/fa"; // Importing the home icon from react-icons
import { Link } from "react-router-dom"; // Importing the Link component from react-router-dom to create navigation links

function NotFound() {
  return (
    <div className="hero ">
      {" "}
      {/* Main wrapper for the hero section (full-screen centered content) */}
      <div className="text-center hero-content">
        {" "}
        {/* Centering content within the hero section */}
        <div className="max-w-lg">
          {" "}
          {/* Limiting the width of the content to a maximum of large size */}
          <h1 className="mb-8 font-bold text-8xl">Oops!</h1>{" "}
          {/* Displaying a large heading with the text "Oops!" */}
          <p className="mb-8 text-5xl">404 Page not found!</p>{" "}
          {/* Displaying the message "404 Page not found!" */}
          {/* The button that links back to the home page */}
          <Link to="/" className="btn btn-primary btn-lg">
            <FaHome className="mr-2 " /> {/* Home icon before the text */}
            Back to Home {/* Button text */}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound; // Exporting the NotFound component to be used elsewhere in the app
