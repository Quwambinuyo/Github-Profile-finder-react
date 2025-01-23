import React, { useEffect, useContext } from "react"; // Importing React, useEffect, and useContext hooks
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa"; // Importing icons for stats
import { Link, useParams } from "react-router-dom"; // Importing Link for navigation and useParams to get URL parameters
import Spinner from "../components/layout/Spinner"; // Importing the Spinner component for loading state
import GithubContext from "../context/github/GithubContext"; // Importing context to access GitHub data
import RepoList from "../components/repos/RepoList"; // Importing RepoList to display repositories

function User() {
  const { login } = useParams(); // Getting the 'login' parameter from the URL (GitHub username)
  const { getUser, user, loading, getUserRepo, repo } =
    useContext(GithubContext); // Destructuring values from GithubContext

  useEffect(() => {
    // Fetching user and repositories data when the 'login' (GitHub username) changes
    getUser(login);
    getUserRepo(login);
  }, [login]);

  // Destructuring user data from the context
  const {
    name,
    avatar_url,
    location,
    bio,
    html_url,
    followers,
    following,
    public_repos,
    type,
    hireable,
    blog,
    twitter_username,
    public_gists,
  } = user;

  return (
    <div className="w-full mx-auto lg:w-10/12">
      <div className="mb-4">
        {/* Back to search button */}
        <Link to="/" className="btn btn-ghost">
          Back to search
        </Link>
      </div>

      <div className="grid grid-cols-1 mb-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 md:gap-8">
        {/* User's avatar and information */}
        <div className="mb-6 custom-card-image md:mb-0">
          <div className="rounded-lg shadow-xl card image-full">
            <figure>
              <img src={avatar_url} alt={`${name}'s avatar`} />
            </figure>
            <div className="justify-end card-body">
              <h2 className="mb-0 card-title">{name}</h2>
              <p>{login}</p>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          {/* User's bio and additional details */}
          <div className="mb-6">
            <h1 className="text-3xl card-title">
              {name}
              <div className="ml-2 mr-1 badge badge-success">{type}</div>
              {hireable && (
                <div className="mx-1 badge badge-info"> Hireable</div>
              )}
            </h1>
            <p>{bio}</p>
            <div className="mt-4 card-actions ">
              {/* Button to visit GitHub profile */}
              <a
                href={html_url}
                target="_blank"
                className="btn tbn-outline"
                rel="noreferrer"
              >
                Visit Github Profile
              </a>
            </div>
          </div>

          {/* Displaying user's location, blog, and twitter if available */}
          <div className="w-full rounded-lg shadow-md bg-base-100 stats">
            {location && (
              <div className="stat">
                <div className="stat-title text-md ">Location</div>
                <div className="text-lg stat-value ">{location}</div>
              </div>
            )}
            {blog && (
              <div className="stat">
                <div className="stat-title text-md ">Website</div>
                <div className="text-lg stat-value ">
                  <a href={`https://${blog}`} target="_blank" rel="noreferrer">
                    {blog}
                  </a>
                </div>
              </div>
            )}
            {twitter_username && (
              <div className="stat">
                <div className="stat-title text-md ">Twitter</div>
                <div className="text-lg stat-value ">
                  <a
                    href={`https://twitter.com/${twitter_username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {twitter_username}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Displaying user statistics like followers, following, public repos, and gists */}
      <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stat">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl md:text-5xl " />
          </div>
          <div className="pr-5 stat-title">Followers</div>
          <div className="pr-5 text-3xl stat-value md:text-4xl">
            {followers}
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUserFriends className="text-3xl md:text-5xl " />
          </div>
          <div className="pr-5 stat-title">Following</div>
          <div className="pr-5 text-3xl stat-value md:text-4xl">
            {following}
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaCodepen className="text-3xl md:text-5xl " />
          </div>
          <div className="pr-5 stat-title">Public Repos</div>
          <div className="pr-5 text-3xl stat-value md:text-4xl">
            {public_repos}
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaStore className="text-3xl md:text-5xl " />
          </div>
          <div className="pr-5 stat-title">Public Gists</div>
          <div className="pr-5 text-3xl stat-value md:text-4xl">
            {public_gists}
          </div>
        </div>

        {/* Displaying the user's repositories */}
        <RepoList repos={repo} />
      </div>
    </div>
  );
}

export default User; // Exporting the User component
