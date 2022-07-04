import React, { useContext, useEffect } from "react";
import { VaultContext } from "../../context/Vault";
import * as authService from "../../context/actions/auth";

import { Alert } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const Auth = () => {
  const { state, dispatch } = useContext(VaultContext);

  useEffect(() => {
    authService.getUsers(dispatch);
  }, []);

  useEffect(() => {
    loading = false;
  }, [state.users]);

  let loading = false;

  return (
    <>
      {state.error && state.error.users && (
        <Alert severity="error">
          {state.error.users.name}: {state.error.users.message}
        </Alert>
      )}

      {loading && <Alert severity="info">loading user data...</Alert>}
      {state.users && <h3>user names</h3>}
      {state.users &&
        state.users.map((user) => <div key={uuidv4()}>{user.name}</div>)}
    </>
  );
};

export default Auth;
