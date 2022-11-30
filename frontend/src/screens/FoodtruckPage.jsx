import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
// import { Image } from "mui-image";
import { ImageCarousel } from "../components";
import { ReviewsList } from "../components";
import { useParams } from "react-router-dom";
// import StarIcon from "@mui/icons-material/Star";

const styles = {
  image: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40px",
  },
};

export default function FoodtruckPage() {
  const navigate = useNavigate();
  const foodTruckName = useParams()
    .foodTruckName.replace(/[^A-Za-z0-9]/g, "")
    .toLowerCase();
  const [value, setValue] = useState(3.5); // replace 4 with variable that displays average rating of food truck
  return (
    <Paper style={{ maxHeight: "100vh", overflow: "auto" }}>
      <Grid container justifyContent="center">
        <div style={styles.image}>
          <img
            height="450px"
            style={{ borderRadius: "16px" }}
            src="../../creamyboyslogo.jpeg"
            alt="creamy boys logo"
          />
        </div>
        <div className="ImageCarousel">
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
      </Grid>
    </Paper>
  );
}
