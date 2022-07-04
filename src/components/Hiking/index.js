/* eslint-disable no-debugger */
import React, { useContext, useEffect } from "react";
import { VaultContext } from "../../context/Vault";
import * as hikingService from "../../context/actions/hiking";

import { Alert, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const Hiking = () => {
  const { state, dispatch } = useContext(VaultContext); // subscribes to global state
  
  // subscribes the component to changes in state.hikers
  useEffect(() => {
    loading = false;
  }, [state.hikers]);


  // local vars and methods
  let loading = false;

  const getHikers = () => {
    loading = true;
    hikingService.getHikers(dispatch);
  };

  // render
  return (
    <>
      {state.error && state.error.hikers && (
        <Alert severity="error">
          {state.error.hikers.name}: {state.error.hikers.message}
        </Alert>
      )}

      <Button onClick={() => getHikers()}>Get Hikers</Button>

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
