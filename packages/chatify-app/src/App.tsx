import React from "react";
import { SignupForm } from "./components/Authentication/Signup";
import { Route } from "react-router-dom";
import { Routes } from "react-router";

function App() {
  return (
    <React.Fragment>
      <Routes>
       <Route path="/" Component={SignupForm} />
       </Routes>
    </React.Fragment>
  );
}

export default App;
