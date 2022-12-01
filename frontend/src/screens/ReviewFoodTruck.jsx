import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { ReviewInput } from "../components";
import Footer from "../components/footer";
import Header from "../components/header";

export default function ReviewFoodTruck() {
  return (
    <div className="ReviewFoodTruck">
      <Header />
      <ReviewInput />
      <Footer />
    </div>
  );
}
