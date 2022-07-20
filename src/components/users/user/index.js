/* eslint-disable react/prop-types */
import React from "react";

const User = ({ user }) => {
  return (
    <div>
      {user.name}: {user.group}
    </div>
  );
};

export default User;
