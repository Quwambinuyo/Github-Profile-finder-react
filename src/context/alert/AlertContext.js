import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

// Create a context for managing alerts
const AlertContext = createContext();

// Define the AlertProvider component to manage alert-related state
export const AlertProvider = ({ children }) => {
  // Initial state for the alert (no alert by default)
  const initialState = null;

  // Use the reducer to manage the alert state
  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Function to set an alert with a message and type
  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT", // Action to set the alert
      payload: { msg, type }, // Payload containing alert message and type
    });

    // Automatically remove the alert after 3 seconds
    setTimeout(
      () =>
        dispatch({
          type: "REMOVE_ALERT", // Action to remove the alert
        }),
      3000
    );
  };

  // Provide alert state and setAlert function to context consumers
  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
