import React, { useContext } from "react";
import { StoreContext } from "../../context/Store";

import { Alert, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const Auth = () => {
  const { state, dispatch, AuthService } = useContext(StoreContext);

  const getUsers = (e) => {
    e.preventDefault();

    AuthService.getUsers(dispatch);
  };

  return (
    <>
      {state.user?.error && (
        <Alert severity="error">
          getUsers(): {state.user.error.name}: {state.user.error.message}
        </Alert>
      )}

      {!state.user && <Alert severity="info">loading user data...</Alert>}

      {state.user?.data && <h3>User Names</h3>}
      {state.user?.data &&
        state.user.data.users.map((user) => <div key={uuidv4()}>{user.name}</div>)}
      {!state.user?.data && (
        <Button onClick={() => getUsers(event)} variant="contained">
          Get Users
        </Button>
      )}
    </>
  );
};

export default Auth;
