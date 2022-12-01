import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { ReviewInput } from "../components";
import Footer from "../components/footer";
import Header from "../components/header";

export default function ReviewFoodTruck() {
  return (
    <div className="d-flex flex-column justify-content-between align-items-center gap-5">
      <Header />
      <ReviewInput />
      <Footer />
    </div>
  );
}
