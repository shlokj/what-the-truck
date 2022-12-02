import React from "react";
import Rating from "@mui/material/Rating";

export default function ReviewsList({ reviews }) {
  return (
    <div className="d-flex flex-column justify-content-between gap-4 align-items-center w-100">
      {reviews.map((review, i) => (
        <div
          key={i}
          className="bg-light shadow-sm d-flex w-100 flex-column justify-content-between gap-2 border border-dark rounded rounded-3 p-4 pb-2"
        >
          <div className="d-flex align-items-center justify-content-between">
            <h4>{review.user}</h4>
            <Rating value={review.rating} precision={0.5} readOnly />
          </div>
          <div className="px-3 fw-light">
            <p>{review.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
