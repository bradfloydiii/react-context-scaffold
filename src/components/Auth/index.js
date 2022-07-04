import React, { useContext, useEffect } from "react";
import { VaultContext } from "../../context/Vault";
import * as Actions from "../../context/actions/auth";

import { Alert } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const Auth = () => {
  const { vault, dispatch } = useContext(VaultContext);

  useEffect(() => {
    // REST call to /api/users/json
    Actions.getUsers(dispatch);
  }, []);

  return (
    <>
      {vault.error && (
        <Alert severity="error">
          {vault.error.name}: {vault.error.message}
        </Alert>
      )}

      {!vault.users && <h3>loading user data...</h3>}
      {vault.users && <h3>user names</h3>}
      {vault.users &&
        vault.users.map((user) => (
          <div key={uuidv4()}>{user.name}</div>
        ))}
    </>
  );
};

export default Auth;
