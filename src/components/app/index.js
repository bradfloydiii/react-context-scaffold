import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../context/store";

import User from "../user";

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
