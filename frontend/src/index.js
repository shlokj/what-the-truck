import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBozYjNDDJMDDf_Za2sUB8gqHpOOIutUEU",
  authDomain: "what-the-truck-ucla.firebaseapp.com",
  projectId: "what-the-truck-ucla",
  storageBucket: "what-the-truck-ucla.appspot.com",
  messagingSenderId: "855501075279",
  appId: "1:855501075279:web:b4fbb86a771d81345e0b3a",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
