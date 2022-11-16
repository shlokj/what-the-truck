import React from "react"
import "bootstrap/dist/css/bootstrap.css";
import { LoginSignupTab } from "../components";

const styles = {
  main: { display: "flex", margin: "auto" },
};

export default function SignIn() {
  return (
    <div className="SignIn">
      <LoginSignupTab />
    </div>
  );
}
