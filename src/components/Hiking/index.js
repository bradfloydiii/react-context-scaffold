/* eslint-disable no-debugger */
import React, { useContext, useEffect } from "react";
import { VaultContext } from "../../context/Vault";
import * as hikingService from "../../context/actions/hiking";

import { Alert } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const Hiking = () => {
  const { state, dispatch } = useContext(VaultContext);

  useEffect(() => {
    hikingService.getHikers(dispatch);
  }, []);

  useEffect(() => {
    loading = false;
  }, [state.hikers]);

  let loading = false;

  return (
    <>
      {state.error && state.error.hikers && (
        <Alert severity="error">
          {state.error.hikers.name}: {state.error.hikers.message}
        </Alert>
      )}

      {loading && <Alert severity="info">loading user data...</Alert>}
      {state.hikers && <h3>hiker names</h3>}
      {state.hikers &&
        state.hikers.hikers.map((hiker) => (
          <div key={uuidv4()}>{hiker.name}</div>
        ))}
    </>
  );
};

export default Hiking;
