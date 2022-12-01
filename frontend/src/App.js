import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { SignIn, Home, ReviewFoodTruck, FoodtruckPage } from "./screens";
import "bootstrap/dist/css/bootstrap.css";

import { getAuth } from "firebase/auth";

function App() {
  const auth = getAuth();
  const navigate = useNavigate();

  // check if the user is signed in
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (!user) {
        navigate("/signin");
      }
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/truck/:foodTruckName" element={<FoodtruckPage />} />
        <Route
          path="/truck/:foodTruckName/review"
          element={<ReviewFoodTruck />}
        />
      </Routes>
    </div>
  );
}

export default App;
