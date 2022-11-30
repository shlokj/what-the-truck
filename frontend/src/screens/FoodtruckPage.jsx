import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "bootstrap/dist/css/bootstrap.css";
import { ImageCarousel } from "../components";
import { ReviewsList } from "../components";
import { useParams } from "react-router-dom";

const styles = {
  image: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "40px",
  },
};

export default function FoodtruckPage() {
  const foodTruckName = useParams()
    .foodTruckName.replace(/[^A-Za-z0-9]/g, "")
    .toLowerCase();

  const [value, setValue] = React.useState(2);
  return (
    <div className="d-flex flex-column justify-content-between gap-3 align-items-center">
      <div style={styles.image}>
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
        <Stack direction="row" spacing={2} marginTop={4}>
          <Button variant="outlined">Review this Foodtruck</Button>
          <Box>
            <Typography component="legend">Average Rating</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          <h2>Today: Rieber 11 am- 2:30 pm, Sproul 9 pm - 12 am</h2>
        </Stack>
      </div>
      <div classname="ReviewsList">
        <ReviewsList />
      </div>
    </div>
  );
}
