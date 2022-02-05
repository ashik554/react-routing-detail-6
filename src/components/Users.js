import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <h1>user 1</h1>
      <h1>user 2</h1>
      <h1>user 3</h1>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filters</button>
      </div>
      {showActiveUsers ? (
        <h1>Show all active users</h1>
      ) : (
        <h1>Show all users</h1>
      )}
    </div>
  );
};

export default Users;
