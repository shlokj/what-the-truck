import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { Button, Rating } from "@mui/material";

export default function FoodTruckCard({
  name,
  text,
  imageURL,
  rating,
  numberOfReviews,
}) {
  const navigate = useNavigate();
  const foodTruckName = name.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return (
    <div className="position-relative bg-warning bg-opacity-75 p-3 py-4 d-flex justify-content-center border border-2 border-primary rounded-3 gap-4">
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

      <div className="position-relative w-50 h-100 d-flex flex-column align-items-center gap-2">
        <Button
          className="w-75 text-light bg-primary rounded-4 px-3 py-2 font-weight-bold"
          onClick={() => {
            navigate("/truck/" + foodTruckName);
            // window.scrollTo({top: 0, left: 0, behavior: "smooth" });
          }}
          sx={{ fontWeight: "bold" }}
        >
          {name}
        </Button>
        <div className="p-1 pb-3 mb-4">{text}</div>
      </div>
      <div className="d-flex w-50 justify-content-between position-absolute bottom-0 end-0">
        <div className="d-flex mb-3 ms-2 justify-content-center align-items-center bg-primary rounded rounded-3 px-3 py-1 text-light">
          Number of Reviews: {numberOfReviews}
        </div>
        <div className="d-flex mb-3 me-3 justify-content-center align-items-center bg-primary rounded rounded-3 px-3 py-1">
          <Rating value={rating} precision={0.5} readOnly />
        </div>
      </div>
    </div>
  );
}
