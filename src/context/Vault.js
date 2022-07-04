/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from "react";
import VaultReducer from "./reducers/VaultReducer";

const Vault = {
  welcome: {
    entry: {
      message: "Welcome to the Vault...",
    },
  },
};

// creates the context for use by all components through it's
// provider (VaultProvider)
export const VaultContext = createContext(Vault);

// creates the global state provider for our context (VaultContext)
export const VaultProvider = ({ children }) => {
  const [state, dispatch] = useReducer(VaultReducer, Vault);

  return (
    <VaultContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </VaultContext.Provider>
  );
};
