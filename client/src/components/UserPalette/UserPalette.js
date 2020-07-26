import React from "react";
import "./UserPalette.styles.scss";
const UserPalette = ({ users }) => {
  return (
    <div className="user-palette">
      <h3>Users</h3>
      {users.map((user) => (
        <p key={user}>{user}</p>
      ))}
    </div>
  );
};

export default UserPalette;
