/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-debugger */
import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../context/Store";

import { Alert, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const Hike = () => {
  const { state, dispatch, HikeService, AuthService } = useContext(StoreContext);

  useEffect(() => {
    console.log("User", state.user?.users[0]);
  }, [state.user]);

  const updateHiker = (e) => {
    e.preventDefault();
    HikeService.getHikers(dispatch);
  };

  const getUsers = (e) => {
    e.preventDefault();
    AuthService.getUsers(dispatch);
  }

  return (
    <>
      {state.hike?.error && (
        <Alert severity="error">
          getHikers(): {state.hike.error.name}: {state.hike.error.message}
        </Alert>
      )}

      {!state.hike && <Alert severity="info">loading hike data...</Alert>}

      {state.hike?.data && <h3>Hiker Names</h3>}
      {state.hike?.data &&
        state.hike.data.hikers.map((hiker) => (
          <div key={uuidv4()}>{hiker.name}</div>
        ))}
      {!state.hike?.data && (
        <Button onClick={() => updateHiker(event)} variant="contained">
          Get Hikers
        </Button>
      )}
      
      {!state.user?.users && (
        <Button onClick={() => getUsers(event)} variant="contained">
          Get Users
        </Button>
      )}

      {state.user?.users && (
        <ul>
          {state.user.users.map((user) => (
            <li key={uuidv4()}>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Hike;
