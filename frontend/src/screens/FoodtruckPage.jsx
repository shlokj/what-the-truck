import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { Box, Rating, Button, Stack } from "@mui/material";

import { ImageCarousel, ReviewsList } from "../components";
import "bootstrap/dist/css/bootstrap.css";

export default function FoodtruckPage() {
  const navigate = useNavigate();
  const foodTruckName = useParams()
    .foodTruckName.replace(/[^A-Za-z0-9]/g, "")
    .toLowerCase();
  const [value, setValue] = useState(3.5); // replace 4 with variable that displays average rating of food truck
  return (
    <div className="d-flex flex-column align-items-center justify-content-between gap-3 p-2">
      <div className="d-flex justify-content-center align-items-center">
        <img
          height="450px"
          style={{ borderRadius: "16px" }}
          src="../../creamyboyslogo.jpeg"
          alt="creamy boys logo"
        />
      </div>
      <div style={{ width: "30%", height: "30%" }}>
        <ImageCarousel />
      </div>
      <div>
        <Stack
          direction="row"
          marginTop={4}
          justifyContent="center"
          spacing={4}
        >
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/truck/:foodTruckName/review");
            }}
          >
            Review this Food Truck
          </Button>
          <Box>
            <Rating
              name="half-rating-read"
              value={value}
              precision={0.5}
              readOnly
            />
          </Box>
          {/* get dates and location from website and display */}
          <h4>Today: Rieber 11 am- 2:30 pm, Sproul 9 pm - 12 am</h4>
        </Stack>
      </div>
      <div classname="ReviewsList">
        <ReviewsList />
      </div>
    </div>
  );
}
