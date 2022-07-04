import React, { useContext, useEffect } from "react";
import { VaultContext } from "../../context/Vault";
import * as authService from "../../context/actions/auth";

import { Alert, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const Auth = () => {
  const { state, dispatch } = useContext(VaultContext);

  useEffect(() => {
    // REST call to /api/users/json
    // Actions.getUsers(dispatch);
  }, []);

  useEffect(() => {
    loading = false;
  }, [state.users]);

  let loading = false;

  const getUsers = () => {
    loading = true;
    authService.getUsers(dispatch);
  };

  return (
    <>
      {state.error && state.error.users && (
        <Alert severity="error">
          {state.error.name}: {state.error.message}
        </Alert>
      )}

      <Button onClick={() => getUsers()}>Get User Data</Button>

      {loading && <Alert severity="info">
          loading user data...
        </Alert>}
      {state.users && <h3>user names</h3>}
      {state.users &&
        state.users.map((user) => <div key={uuidv4()}>{user.name}</div>)}
    </>
  );
};

export default Auth;
