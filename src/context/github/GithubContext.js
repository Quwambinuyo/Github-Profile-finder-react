import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducers";

// Create a context for the Github application
const GithubContext = createContext();

// Define environment variables for API URL and Token
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Define the GithubProvider component
export const GithubProvider = ({ children }) => {
  // Initial state for the context
  const initialState = {
    users: [], // List of users
    user: {}, // Details of a single user
    repo: [], // Repositories of a user
    loading: false, // Loading state
  };

  // Initialize reducer with the initial state
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Function to search for users by text query
  const searchUsers = async (text) => {
    setLoading();

    // Prepare query parameters
    const params = new URLSearchParams({
      q: text,
    });

    // Fetch users from the GitHub API
    const response = await fetch(
      `https://api.github.com/search/users?${params}`,
      {
        headers: {
          Authorization: GITHUB_TOKEN,
        },
      }
    );
    const { items } = await response.json();

    // Dispatch an action to update the users in the state
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  // Function to clear the list of users
  const clearUsers = () =>
    dispatch({
      type: "CLEAR_USERS",
    });

  // Function to fetch details of a single user by login name
  const getUser = async (login) => {
    setLoading();

    // Fetch user details from the GitHub API
    const response = await fetch(`https://api.github.com/users/${login}`, {
      headers: {
        Authorization: GITHUB_TOKEN,
      },
    });

    if (response.status === 404) {
      // Redirect to "not found" page if user doesn't exist
      window.location = "/notfound";
    } else {
      const data = await response.json();

      // Dispatch an action to update the user details in the state
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  // Function to fetch repositories of a user by login name
  const getUserRepo = async (login) => {
    setLoading();

    // Fetch repositories from the GitHub API
    const response = await fetch(
      `https://api.github.com/users/${login}/repos`,
      {
        headers: {
          Authorization: GITHUB_TOKEN,
        },
      }
    );

    if (response.status === 404) {
      // Redirect to "not found" page if repos don't exist
      window.location = "/notfound";
    } else {
      const data = await response.json();

      // Dispatch an action to update the repositories in the state
      dispatch({
        type: "GET_USER_REPO",
        payload: data,
      });
    }
  };

  // Function to set the loading state
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  // Provide the state and functions to the context consumers
  return (
    <GithubContext.Provider
      value={{
        users: state.users, // List of users
        loading: state.loading, // Loading state
        user: state.user, // User details
        searchUsers, // Function to search users
        clearUsers, // Function to clear users
        getUser, // Function to fetch user details
        getUserRepo, // Function to fetch user repositories
        repo: state.repo, // List of repositories
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
