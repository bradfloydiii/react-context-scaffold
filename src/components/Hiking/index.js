/* eslint-disable no-debugger */
import React, { useContext, useEffect } from "react";
import { VaultContext } from "../../context/Vault";
import * as Actions from "../../context/actions/hiking";

import { Alert } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const Hiking = () => {
  const { vault, dispatch } = useContext(VaultContext);

  useEffect(() => {
    // REST call to /api/hiking/json
    Actions.getHikers(dispatch);
  }, []);

  return (
    <>
      {vault.error && (
        <Alert severity="error">
          {vault.error.name}: {vault.error.message}
        </Alert>
      )}
      {!vault.hikers && <h3>loading hiking data...</h3>}
      {vault.hikers && <h3>hiker names</h3>}
      {vault.hikers &&
        vault.hikers.hikers.map((hiker) => (
          <div key={uuidv4()}>{hiker.name}</div>
        ))}
    </>
  );
};

export default Hiking;
