import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { ReviewInput } from "../components";
import Footer from "../components/footer";

export default function ReviewFoodTruck() {
  return (
    <div className="ReviewFoodTruck">
      <ReviewInput />
      <Footer />
    </div>
  );
}
