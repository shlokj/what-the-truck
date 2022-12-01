import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "@mui/material";

export default function FoodTruckCard({ name, text, imageURL }) {
  return (
    <div className="bg-warning p-3 py-4 d-flex justify-content-center border border-2 border-primary rounded-3 gap-4">
      <div
        className="w-50 d-flex align-self-center justify-content-center align-items-center overflow-hidden rounded"
        style={{ height: "35vh" }}
      >
        <img
          src={imageURL}
          alt="Food truck"
          className="w-100 h-100"
          style={{ objectFit: "fill" }}
        />
      </div>

      <div className="w-50 h-100 d-flex flex-column align-items-center gap-2">
        <Button
          className="w-75 text-light bg-primary rounded-4 px-3 py-2 font-weight-bold"
          sx={{ fontWeight: "bold" }}
        >
          {name}
        </Button>
        <div className="p-1">{text}</div>
      </div>
    </div>
  );
}
