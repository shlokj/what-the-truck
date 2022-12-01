import React, { useState } from "react";

import {
  Button,
  FormControl,
  OutlinedInput,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import "bootstrap/dist/css/bootstrap.css";
import { FoodTruckCard, Footer } from "../components";
import Header from "../components/header";

const placeholderText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
	@@ -15,67 +20,201 @@ Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa
eget. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. 
Tortor id aliquet lectus proin nibh nisl condimentum id. Facilisis leo 
vel fringilla est ullamcorper. Eget egestas purus viverra accumsan in 
nisl nisi scelerisque. Arcu odio ut sem nulla.`;
const DELTA = 4;

export default function Home() {
  const placeholderTrucks = [
    "Burger King1",
    "Pizza Hut2",
    "KFC3",
    "Burger King4",
    "Pizza Hut5",
    "KFC6",
    "Burger King7",
    "Pizza Hut8",
    "KFC9",
    "Burger King10",
    "Pizza Hut11",
    "KFC12",
    "Burger King13",
    "Pizza Hut14",
    "KFC15",
  ];

  const [i, setI] = useState(0);
  const [search, setSearch] = useState("");
  const [popup, setPopup] = useState(false);
  const [sort, setSort] = useState("rating");
  const [decreasing, setDecreasing] = useState(true);
  const display = placeholderTrucks.filter((title) =>
    title.toLowerCase().includes(search.toLowerCase())
  );

  console.log(sort, decreasing);

  return (
    <div className="w-100 vh-100 d-flex flex-column align-items-center gap-4">
      <Header></Header>

      <div className="w-75 d-flex flex-column align-items-center p-2 gap-4">
        <div className="h-100 w-75 d-flex justify-content-between align-items-center">
          <div className="h-100 d-flex gap-1 align-items-center">
            <Button
              variant="outlined"
              className={`${
                i - DELTA < 0 ? "" : "bg-light"
              } p-0 fs-3 h-75 text-dark border-dark`}
              onClick={() => {
                setI(Math.max(i - DELTA, 0));
              }}
              disabled={i === 0}
            >
              {`<`}
            </Button>
            <Button
              variant="outlined"
              className={`${
                i + DELTA >= display.length ? "" : "bg-light"
              } p-0 fs-3 h-75 text-dark border-dark`}
              onClick={() => {
                setI(i + DELTA);
              }}
              disabled={i + DELTA >= display.length}
            >
              {`>`}
            </Button>
            <div className="ms-2 text-secondary">
              ({Math.min(i + 1, display.length)} -{" "}
              {Math.min(i + DELTA, display.length)})
            </div>
          </div>

          <div className="d-flex h-75 justify-content-end align-items-center gap-3">
            <div className="h-100 d-flex align-items-center justify-content-center">
              <FormControl className="h-100 d-flex align-items-center justify-content-center">
                <OutlinedInput
                  placeholder="Search"
                  className="h-100 text-dark border-dark"
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setI(0);
                  }}
                />
              </FormControl>
            </div>
            <Button
              variant="outlined"
              className="h-100 text-dark border-dark"
              onClick={() => {
                setPopup(!popup);
              }}
            >
              Sort
            </Button>
          </div>
        </div>

        {display.length > 0 ? (
          <div className="min-h-100 w-75 d-flex flex-column justify-content-between gap-3">
            {display.slice(i, i + DELTA).map((title) => (
              <div className="mb-3">
                <FoodTruckCard name={title} text={placeholderText} />
              </div>
            ))}
          </div>
        ) : (
          <div className="p-5" style={{ minHeight: "50vh" }}></div>
        )}

        {popup ? (
          <div
            className="position-absolute align-self-end mt-5
             p-4 d-flex flex-column align-items-center justify-content-between
              gap-2 border border-dark rounded rounded-3"
            style={{ left: "80%" }}
          >
            <FormControl>
              <RadioGroup defaultValue="rating" name="radio-buttons-group">
                <FormControlLabel
                  value="rating"
                  control={<Radio />}
                  label="Average Rating"
                  onClick={() => {
                    setSort("rating");
                  }}
                />
                <FormControlLabel
                  value="reviews"
                  control={<Radio />}
                  label="Number of Reviews"
                  onClick={() => {
                    setSort("reviews");
                  }}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Decreasing Order"
                  onClick={(e) => {
                    setDecreasing(e.target.checked);
                  }}
                />
              </RadioGroup>
            </FormControl>
            <Button
              variant="contained"
              className="h-100 mt-2"
              onClick={() => {
                setPopup(false);
              }}
            >
              Close
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </div>
  );
}
