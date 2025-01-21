import React from "react";
import { useEffect, useState } from "react";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
    console.log("Hello World");
  }, []);

  console.log(process.env.REACT_APP_GITHUB_URL);

  const fetchUsers = async () => {
    const response = await fetch(`https://api.github.com/users`, {
      headers: {
        Authorization: "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",
      },
    });
    console.log("Hello World");
    console.log(response);

    const data = await response.json();

    console.log(data);

    setUsers(data);
    setLoading(false);
  };

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((user) => (
        <h3>{user.login}</h3>
      ))}
    </div>
  );
}

console.log(`token ${process.env.REACT_APP_GITHUB_TOKEN}`);

export default UserResults;
