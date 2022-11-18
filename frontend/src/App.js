import React from "react"
import { Routes, Route } from "react-router-dom";
import { SignIn, Home } from "./screens";

import "bootstrap/dist/css/bootstrap.css";
import "./styles/custom.scss"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
