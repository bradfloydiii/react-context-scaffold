/* eslint-disable no-import-assign */
/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from "react";

import AuthReducer from "./reducers/AuthReducer";
import HikeReducer from "./reducers/HikeReducer";

import * as AuthService from "./services/AuthService";
import * as HikeService from "./services/HikeService";

const combineReducers = (reducers) => {
  return (state = {}, action) => {
    const newState = {};
    for (let key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }
    return newState;
  };
};

const Store = {}; // application state

export const StoreContext = createContext(Store);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    combineReducers({
      user: AuthReducer,
      hike: HikeReducer,
    }),
    Store
  );

  return (
    <StoreContext.Provider
      value={{
        state,
        dispatch,
        AuthService,
        HikeService,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
