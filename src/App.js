import React, { useContext, useEffect } from "react";
import { VaultContext } from "./context/Vault";

import Auth from "./components/Auth";
import Hiking from "./components/Hiking";

import "./App.css";

const App = () => {
  const { vault } = useContext(VaultContext);

  useEffect(() => {
    console.log("The Vault()", vault);
  });

  return (
    <>
      <h2>{vault.welcome.entry.message}</h2>
      <Auth />
      <Hiking />
    </>
  );
};

export default App;
