import React, { useContext, useEffect } from "react";
import { VaultContext } from "./context/Vault";

import Auth from "./components/Auth";
import Hiking from "./components/Hiking";

import "./App.css";

const App = () => {
  const { state } = useContext(VaultContext);

  useEffect(() => {
    console.log("The Vault()", state);
  });

  return (
    <>
      <h2>{state.welcome.entry.message}</h2>
      <Auth />
      <Hiking />
    </>
  );
};

export default App;
