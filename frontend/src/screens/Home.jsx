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
import { getAuth } from "firebase/auth";

import "bootstrap/dist/css/bootstrap.css";
import { FoodTruckCard } from "../components";

const column = {
  paddingTop: 10,
  fontWeight: "50px",
};

const fontstyle = {
  fontWeight: "50px",
};

const image = {
  paddingBottom: 20,
  width: 400
};

const placeholderText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
	@@ -15,67 +20,201 @@ Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa
eget. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. 
Tortor id aliquet lectus proin nibh nisl condimentum id. Facilisis leo 
vel fringilla est ullamcorper. Eget egestas purus viverra accumsan in 
nisl nisi scelerisque. Arcu odio ut sem nulla.`;

export default function Home() {
  const DELTA = 4;
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

  const auth = getAuth();
  console.log(sort, decreasing);

  return (
    <div className="w-100 vh-100 d-flex flex-column align-items-center gap-4">
      <div
        className="bg-primary text-white w-100 font-weight-bold
       d-flex flex-column justify-content-between align-items-center gap-3 py-4 px-3"
      >
        <div className="w-100 d-flex justify-content-around">
          <div className="d-flex justify-content-between align-items-center gap-2">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" 
            fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
              <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg>
            </div>
            <div style={fontstyle} className="d-flex flex-row">
              <h1> What the Truck</h1>
            </div>
          </div>
          <Button
            className="px-3 py-2 position-absolute end-0 top-0 m-2 me-4 bg-light rounded rounded-2 border border-primary"
            variant="text"
            onClick={() => {
              auth.signOut();
              console.log("signed out");
            }}
          >
            Logout
          </Button>
        </div>
        <div className="border-top border-light pt-2 px-5" style={fontstyle}>
          <h4>the hub of ucla food truck reviews</h4>
        </div>
      </div>

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
          <div className="p-5 min-vh-100"></div>
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

      <div
        className="w-100 h-100 bg-primary text-white font-weight-bold
       d-flex justify-content-around gap-3"
      >
        <div className="d-flex flex-column align-items-center" style={column}>
          <h4>What the Truck</h4>
          <div className="align-items-left" >
            <img
              src="logo.jpeg"
              alt="logo"
              className="rounded rounded-3 border border-dark border-2"
            ></img>
          </div>
        </div>
        <div style={column}>
          <h4 align="center">
            <u>Our Mission:</u>
          </h4>
          <div className="justify-content-end" style={image}>
          <p>
              What The Truck is a service - built by and for students at UCLA - that 
            aims to ease the navigation of food truck options, menus, and schedules.
          </p>

           <p>
              Please keep in mind that any changes occuring on UCLA Dining's page may 
              take a few days to reflect on our website. If you would like to report a bug,
              please any of the given email IDs.
          </p>
            <p>
              <h7> 
                built with shlok's {}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="white" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>   in the olympic study lounge
              </h7>
            </p>
          </div>
        </div>
        <div style={column}>
          <div>
            {" "}
            <h4>
              <u>Contact: </u>{" "}
            </h4>
          </div>
          <div align="left">
            <li>
              <a className="text-light" href="mailto: shlokj@g.ucla.edu">
                shlokj@g.ucla.edu
              </a>
            </li>
            <li>
              <a className="text-light" href="mailto: skath@g.ucla.edu">
                skath@g.ucla.edu
              </a>
            </li>
            <li>
              <a
                className="text-light"
                href="mailto: sidharthsudhir@g.ucla.edu"
              >
                sidharthsudhir@g.ucla.edu
              </a>
            </li>
            <li>
              <a className="text-light" href="mailto: anmolgupta23@g.ucla.edu">
                anmolgupta23@g.ucla.edu
              </a>
            </li>
            <li>
              <a className="text-light" href="mailto: ryanswkim2003@gmail.com">
                ryanswkim2003@gmail.com
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
