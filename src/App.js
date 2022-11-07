import React from "react";
import { Login, Register, FoodTruckCard } from "./components"
import "bootstrap/dist/css/bootstrap.css";
import "./styles/custom.scss";

function App() {
  return (
    <div className="App">
      <Login />
      {/* <Register /> */}
    </div>
  );
}

export default App;
