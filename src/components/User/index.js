import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../context/Store";
import { Alert, Button } from "@mui/material";

const User = () => {
  const { state, dispatch, UserService } = useContext(StoreContext);

  useEffect(() => {
    console.log("User component initialized...");
  }, []);

  const getAllUsers = (e) => {
    e.preventDefault();
    UserService.getAllUsers(dispatch);
  };

  const addUser = (e) => {
    e.preventDefault();

    const payload = {
      name: "Bradley Floyd III",
      group: "Lyran",
    };

    UserService.addUser(payload, dispatch);
  };

  return (
    <>
      {state.user?.users?.error && (
        <Alert severity="error">
          getAllUsers(): {state.user.users.error.name}:{" "}
          {state.user.users.error.message}
        </Alert>
      )}

      {state.user?.users.isLoading && (
        <Alert severity="info">Retrieving user data...</Alert>
      )}

      {!state.user?.users && (
        <Button onClick={() => getAllUsers(event)} variant="contained">
          Get Users
        </Button>
      )}

      {!state.user?.users && (
        <Button onClick={() => addUser(event)} variant="contained">
          Add User
        </Button>
      )}

      {state.user?.users.data && <h3>User Names</h3>}
      {state.user?.users.data &&
        state.user.users.data.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
    </>
  );
};

export default User;
