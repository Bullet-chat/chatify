import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router";
import Authscreen from "./pages/Authscreen";
import ChatPage from "./pages/ChatPage";

function App() {
  console.log("dataenvfile=====>",import.meta.env.VITE_APP_URL)
  return (
    <React.Fragment>
      <Routes>
       <Route path="/" Component={Authscreen} />
       <Route path="/chat" Component={ChatPage} />
       </Routes>
    </React.Fragment>
  );
}

export default App;
