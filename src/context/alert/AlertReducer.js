// Reducer function to manage alert state
const alertReducer = (state, action) => {
  switch (action.type) {
    // Handle action to set an alert
    case "SET_ALERT":
      return action.payload; // Update the state with the alert payload (message and type)

    // Handle action to remove an alert
    case "REMOVE_ALERT":
      return null; // Reset the state to null (no alert)

    // Return current state if action type doesn't match
    default:
      return state;
  }
};

export default alertReducer;
