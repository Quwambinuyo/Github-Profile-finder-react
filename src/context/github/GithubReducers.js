// Reducer function to manage the state based on dispatched actions
const githubReducer = (state, action) => {
  switch (action.type) {
    // Handle action to set the list of users
    case "GET_USERS":
      return {
        ...state, // Keep existing state properties
        users: action.payload, // Update users with the payload
        loading: false, // Set loading to false
      };

    // Handle action to set a single user's details
    case "GET_USER":
      return {
        ...state,
        user: action.payload, // Update user details with the payload
        loading: false, // Set loading to false
      };

    // Handle action to set a user's repositories
    case "GET_USER_REPO":
      return {
        ...state,
        repo: action.payload, // Update repositories with the payload
        loading: false, // Set loading to false
      };

    // Handle action to set the loading state to true
    case "SET_LOADING":
      return {
        ...state,
        loading: true, // Set loading to true
      };

    // Handle action to clear the list of users
    case "CLEAR_USERS":
      return {
        ...state,
        users: [], // Reset users to an empty array
      };

    // Return current state if no action matches
    default:
      return state;
  }
};

export default githubReducer;
