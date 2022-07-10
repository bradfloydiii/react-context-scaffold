import React, { useContext, useEffect } from "react";
import { StoreContext } from "./context/Store";

import User from "./components/User";

import "./App.css";

const App = () => {
  const { state } = useContext(StoreContext);

  useEffect(() => {
    console.log("The Store():", state);
  });

  return (
    <>
      <User />
    </>
  );
};

export default App;
