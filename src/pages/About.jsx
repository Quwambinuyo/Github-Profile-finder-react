import React from "react"; // Importing React library to create the component

function About() {
  return (
    <>
      {/* Main heading displaying the app's title */}
      <h1 className="mb-4 text-6xl">Github Finder</h1>

      {/* Paragraph describing the purpose of the app with a link to the Udemy course */}
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This
        project is part of the
        <a href="https://www.udemy.com/course/modern-react-front-to-back/">
          {" "}
          React Front To Back
        </a>{" "}
        Udemy course by
        <strong>
          <a href="https://traversymedia.com"> Brad Traversy</a>
        </strong>
        .
      </p>

      {/* Paragraph showing the current version of the app */}
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>

      {/* Paragraph with the creator's information and a link to their Twitter profile */}
      <p className="text-lg text-gray-400">
        Created By:
        <a className="text-white" href="https://twitter.com/DevBoyQ">
          Quwam Bode
        </a>
      </p>
    </>
  );
}

export default About; // Exporting the About component for use in other parts of the app
