import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../context/Store";

import Users from "../users";

import "./app.css";

const App = () => {
  const { state } = useContext(StoreContext);

  useEffect(() => {
    console.log("The Store():", state);
  });

  return (
    <>
      <Users />
    </>
  );
};

export default App;
