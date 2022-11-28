import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { ImageCarousel } from "../components";
import { useParams } from "react-router-dom";


export default function FoodtruckPage() {
   const foodTruckName = useParams()
    .foodTruckName.replace(/[^A-Za-z0-9]/g, "")
    .toLowerCase();

  return (
    <div className="ImageCarousel">
      <ImageCarousel />
    </div>
  );
}


