import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { SignIn, Home } from "./screens";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/custom.scss";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
