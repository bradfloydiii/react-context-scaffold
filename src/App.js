import React, { useContext, useEffect } from "react";
import { StoreContext } from "./context/Store";

import Auth from "./components/Auth";
import Hike from "./components/Hike";

import "./App.css";

const App = () => {
  const { state } = useContext(StoreContext);

  useEffect(() => {
    console.log("The Store()", state);
  });

  return (
    <>
      <Auth />
      <Hike />
    </>
  );
};

export default App;
