import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import { db } from "..";

import { Box, Rating, Button, Stack } from "@mui/material";

import { ImageCarousel, ReviewsList } from "../components";
import "bootstrap/dist/css/bootstrap.css";

export default function FoodtruckPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const foodTruckName = useParams()
    .foodTruckName.replace(/[^A-Za-z0-9]/g, "")
    .toLowerCase();

  async function getReviews() {
    const docRef = doc(db, "Trucks", foodTruckName);
    const colRef = collection(docRef, "Reviews");
    const reviews = await getDocs(colRef);
    const allReviews = [];
    reviews.forEach((doc) => {
      allReviews.push(doc.data().text);
    });

    return allReviews;
  }

  var finalReviews = getReviews().then(function (result) {
    let reviews = result;
    console.log(reviews);
  });

  async function getDesc() {
    const docRef = doc(db, "Trucks", foodTruckName);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data().Description;
      } else {
        console.log("Document does not exist");
      }
    } catch (error) {
      console.log(error);
    }
  }

  var desc = getDesc().then(function (result) {
    let truckDescription = result;
    console.log(truckDescription);
  });

  async function getName() {
    const docRef = doc(db, "Trucks", foodTruckName);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data().Name;
      } else {
        console.log("Document does not exist");
      }
    } catch (error) {
      console.log(error);
    }
  }

  var desc = getName().then(function (result) {
    let truckName = result;
    console.log(truckName);
  });

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
              navigate(location.pathname + "/review");
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
          {/* <h4>Today: Rieber 11 am- 2:30 pm, Sproul 9 pm - 12 am</h4> */}
        </Stack>
      </div>
      <div classname="ReviewsList">
        <ReviewsList />
      </div>
    </div>
  );
}
