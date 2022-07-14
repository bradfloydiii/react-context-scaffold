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

const Store = {}; // global model

export const StoreContext = createContext(Store);
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    combineReducers({
      user: UserReducer,
    }),
    Store
  );

  UserService.setDispatcher(dispatch);

  return (
    <StoreContext.Provider
      value={{
        state,
        UserService,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
