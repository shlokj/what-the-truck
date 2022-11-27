import React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "bootstrap/dist/css/bootstrap.css";
import { ImageCarousel } from "../components";
import { useParams } from "react-router-dom";

export default function FoodtruckPage() {
   const foodTruckName = useParams()
    .foodTruckName.replace(/[^A-Za-z0-9]/g, "")
    .toLowerCase();
  const [value, setValue] = React.useState(2);
  return (
    <>
      <Grid container>
        <img
          className="w-full h-[440px] object-cover"
          width="100%"
          height="500 px"
          src="../../creamyboyslogo.png"
          alt="creamy boys logo"
        />
        <Grid item width="100%">
          <div className="ImageCarousel">
            <ImageCarousel />
          </div>
        </Grid>
        <Grid item>
          <Stack
            direction="row"
            spacing={2}
            marginTop={4}
            marginLeft={10}
            alignContent={"center"}
          >
            <Button variant="outlined">Review this Foodtruck</Button>
            <Box>
              <Typography component="legend">Rate this Food Truck</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
            <h2>Today: Reiber 11 am- 2:30 pm, Sproul 9 pm - 12 am</h2>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
