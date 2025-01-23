import React from "react";
import spinner from "./assets/Spinner.gif"; // Importing a spinner GIF for the loading animation

function Spinner() {
  return (
    // Container for the spinner with margin and styling
    <div className="mt-20 w-100 rounded-xl">
      {/* Display the spinner image */}
      <img
        width={180} // Set the width of the spinner image to 180px
        src={spinner} // Source of the spinner GIF
        alt="Loading...." // Alt text for accessibility
        className="mx-auto text-center" // Center the spinner image horizontally
      />
    </div>
  );
}

export default Spinner;
