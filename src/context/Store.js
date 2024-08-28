/* eslint-disable no-import-assign */
/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from "react";

import UserReducer from "../reducers/User";
import * as UserService from "../services/User";

const combineReducers = (reducers) => {
  return (state = {}, action) => {
    const newState = {};
    for (let key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }
    return newState;
  };
};

const Store = {};

export const StoreContext = createContext(Store);
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    combineReducers({
      user: UserReducer,
    }),
    Store
  );

  console.log("dispatch in StoreContext", dispatch);
  UserService.setDispatcher(dispatch); // THIS IS NO LONGER WORKING

  return (
    <StoreContext.Provider
      value={{
        state,
        user: state.user,
        UserService,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
