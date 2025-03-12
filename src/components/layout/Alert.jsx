import React from "react";
import AlertContext from "../../context/alert/AlertContext";
import { useContext } from "react";

function Alert() {
  // Access the alert state from AlertContext using useContext hook
  const { alert } = useContext(AlertContext);

  return (
    // Only render the alert if it's not null
    alert !== null && (
      <div className="flex items-center mb-4 space-x-2">
        {/* Check if the alert type is "error" and display an error icon */}
        {alert.type === "error" && (
          <svg
            className="w-6 h-6 flex-none mt-0.5" // Styling for the SVG icon
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="12" fill="#FECDD3"></circle>{" "}
            {/* Background circle */}
            <path
              d="M8 8l8 8M16 8l-8 8" // Cross mark for the error icon
              stroke="#B91C1C"
              strokeWidth="2"
            ></path>
          </svg>
        )}

        {/* Display the alert message */}
        <p className="flex-1 text-base font-semibold leading-7text-white">
          <strong>{alert.msg}</strong> {/* Alert message text */}
        </p>
      </div>
    )
  );
}

export default Alert;
