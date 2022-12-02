import React, { useEffect, useState } from "react";
import { db } from "..";
import { collection, doc, getDocs } from "firebase/firestore";

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

const DELTA = 5;

export default function Home() {
  const [trucks, setTrucks] = useState([]);
  const [names, setNames] = useState([]);
  const [i, setI] = useState(0);
  const [search, setSearch] = useState("");
  const [popup, setPopup] = useState(false);
  const [sort, setSort] = useState("rating");
  const [decreasing, setDecreasing] = useState(true);
  const [lunchTrucks, setLunchTrucks] = useState([]);
  const [dinnerTrucks, setDinnerTrucks] = useState([]);
  const [extendedTrucks, setExtendedTrucks] = useState([]);
  const [lunch, setLunch] = useState(false);
  const [dinner, setDinner] = useState(false);
  const [extended, setExtended] = useState(false);

  const filteredSearch = names.filter(
    (title) =>
      title.toLowerCase().includes(search.toLowerCase()) ||
      trucks[title].description.toLowerCase().includes(search.toLowerCase())
  );

  let todaysTrucks = [];
  if (lunch || dinner || extended) {
    if (lunch) {
      todaysTrucks = todaysTrucks.concat(lunchTrucks);
    }
    if (dinner) {
      todaysTrucks = todaysTrucks.concat(dinnerTrucks);
    }
    if (extended) {
      todaysTrucks = todaysTrucks.concat(extendedTrucks);
    }
  }

  var filteredResults = filteredSearch;
  if (todaysTrucks.length > 0) {
    filteredResults = filteredSearch.filter((title) =>
      todaysTrucks.includes(title)
    );
  }

  const display = filteredResults.sort((a, b) =>
    sort === "rating"
      ? decreasing
        ? trucks[b].rating - trucks[a].rating
        : trucks[a].rating - trucks[b].rating
      : decreasing
      ? trucks[b].numReviews - trucks[a].numReviews
      : trucks[a].numReviews - trucks[b].numReviews
  );

  async function getReviews(foodTruckName) {
    const docRef = doc(db, "Trucks", foodTruckName);
    const colRef = collection(docRef, "Reviews");
    const reviews = await getDocs(colRef);
    const allReviews = [];
    reviews.forEach((doc) => {
      if (doc.data().rating !== NaN) {
        allReviews.push(doc.data().rating);
      }
    });

    const average = allReviews.reduce((a, b) => a + b, 0) / allReviews.length;
    return average;
  }

  async function getTrucks() {
    let trucks = [];
    let names = [];
    const colRef = collection(db, "Trucks");
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach((doc) => {
      const data = doc.data();
      const name = data.Name;
      names.push(name);
      trucks[name] = {
        description: data.Description,
        rating: data.avgRating,
        numReviews: data.numReviews,
      };
    });
    return [trucks, names];
  }

  async function getTodayTrucks() {
    let lunchTrucks = [];
    let dinnerTrucks = [];
    let extendedTrucks = [];
    const colRef = collection(db, "Trucks");
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach((doc) => {
      let time = doc.data().Time;
      if (time !== "") {
        if (time === "Lunch") {
          lunchTrucks.push(doc.data().Name);
        } else if (time === "Dinner") {
          dinnerTrucks.push(doc.data().Name);
        } else if (time === "Extended Dinner") {
          extendedTrucks.push(doc.data().Name);
        } else if (time === "Lunch/Dinner") {
          lunchTrucks.push(doc.data().Name);
          dinnerTrucks.push(doc.data().Name);
        } else if (time === "Dinner/Extended") {
          dinnerTrucks.push(doc.data().Name);
          extendedTrucks.push(doc.data().Name);
        }
      }
    });

    return [lunchTrucks, dinnerTrucks, extendedTrucks];
  }

  useEffect(() => {
    getTrucks().then(function (trucks) {
      setTrucks(trucks[0]);
      setNames(trucks[1]);
    });
    getTodayTrucks().then(function (trucks) {
      setLunchTrucks(trucks[0]);
      setDinnerTrucks(trucks[1]);
      setExtendedTrucks(trucks[2]);
    });
  }, []);

  console.log(trucks);

  return (
    <div className="w-100 vh-100 d-flex flex-column align-items-center gap-3">
      <Header></Header>

      <div className="w-75 d-flex flex-column align-items-center p-2 gap-3">
        <div className="h-100 w-75 d-flex justify-content-between align-items-center">
          <div className="h-100 d-flex gap-1 align-items-center">
            <Button
              variant="outlined"
              className={`${
                i - DELTA < 0 ? "" : "bg-light"
              } p-0 fs-3 h-75 text-primary border-primary`}
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
              } p-0 fs-3 h-75 text-primary border-primary`}
              onClick={() => {
                setI(i + DELTA);
              }}
              disabled={i + DELTA >= display.length}
            >
              {`>`}
            </Button>
            <div className="ms-2 text-secondary">
              ({Math.min(i + 1, display.length)} -{" "}
              {Math.min(i + DELTA, display.length)}) out of {display.length}
            </div>
          </div>

          <div className="d-flex h-75 justify-content-end align-items-center gap-3">
            <div className="h-100 d-flex align-items-center justify-content-center">
              <FormControl className="h-100 d-flex align-items-center justify-content-center">
                <OutlinedInput
                  placeholder="Search"
                  className="h-100"
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setI(0);
                  }}
                />
              </FormControl>
            </div>
            <Button
              color="primary"
              variant="outlined"
              className="border border-primary rounded rounded-1"
              onClick={() => {
                setPopup(!popup);
              }}
            >
              Sort & Filter
            </Button>
          </div>
        </div>

        {display.length > 0 ? (
          <div className="min-h-100 w-75 d-flex flex-column justify-content-between gap-4">
            {display.slice(i, i + DELTA).map((title) => (
              <div>
                <FoodTruckCard
                  name={title}
                  text={trucks[title].description}
                  imageURL={imagePaths[title]}
                  rating={trucks[title].rating}
                  numberOfReviews={trucks[title].numReviews}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="p-5" style={{ minHeight: "50vh" }}></div>
        )}

        <div className="h-100 w-75 d-flex justify-content-between align-items-center">
          <div className="h-100 d-flex gap-1 align-items-center">
            <Button
              variant="outlined"
              className={`${
                i - DELTA < 0 ? "" : "bg-light"
              } p-0 fs-3 h-75 text-primary border-primary`}
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
              } p-0 fs-3 h-75 text-primary border-primary`}
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
                  className="h-100"
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setI(0);
                  }}
                />
              </FormControl>
            </div>
            <Button
              color="primary"
              variant="outlined"
              className="border border-primary rounded rounded-1"
              onClick={() => {
                setPopup(!popup);
              }}
            >
              Sort & Filter
            </Button>
          </div>
        </div>

        {popup ? (
          <div
            className="position-absolute align-self-end
              p-4 pt-2 pb-3 d-flex flex-column align-items-center justify-content-between
              border border-primary rounded rounded-3"
            style={{ left: "79.25%" }}
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
                <FormControlLabel
                  control={<Checkbox />}
                  label="Today's Lunch"
                  onClick={(e) => {
                    setLunch(e.target.checked);
                  }}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Today's Dinner"
                  onClick={(e) => {
                    setDinner(e.target.checked);
                  }}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Today's Extended Dinner"
                  onClick={(e) => {
                    setExtended(e.target.checked);
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

const imagePaths = {
  "Cafe Vietnam": "../../food_truck_logos/cafevietnam.jpeg",
  "Kalamaki Greek Street Food":
    "../../food_truck_logos/kalamakigreekstreetfood.jpeg",
  "Paradise Cookies & Ice Cream":
    "../../food_truck_logos/paradisecookiesicecream.jpeg",
  Perro: "../../food_truck_logos/perro.jpeg",
  "Philly Jay's Steaks": "../../food_truck_logos/phillyjayssteaks.jpeg",
  "Savage Tacos": "../../food_truck_logos/savagetacos.jpeg",
  "Smile Hotdog": "../../food_truck_logos/smilehotdog.jpeg",
  "Sweets on Wheels": "../../food_truck_logos/sweetsonwheels.jpeg",
  "ThaiMex Cocina": "../../food_truck_logos/thaimexcocina.jpeg",
  "The Bollywood Kitchen": "../../food_truck_logos/thebollywoodkitchen.jpeg",
  "The Taco Cartel": "../../food_truck_logos/thetacocartel.jpeg",
  "Tokyo Style": "../../food_truck_logos/tokyostyle.jpeg",
  "Yunas Bob": "../../food_truck_logos/yunasbob.jpeg",
  "Creamy Boys": "../../food_truck_logos/creamyboys.jpeg",
  "Pinch of Flavor": "../../food_truck_logos/pinchofflavor.jpeg",
  "Pacifico Charbroiled Fish":
    "../../food_truck_logos/pacificocharbroiledfish.jpeg",
  Kogi: "../../food_truck_logos/kogi.jpeg",
  "Dinas Dumpling": "../../food_truck_logos/dinasdumpling.jpeg",
  Salpicon: "../../food_truck_logos/salpicon.jpeg",
  "BittieBitez Mini-Donuts": "../../food_truck_logos/bittiebitez.jpeg",
  "Original Herbivore": "../../food_truck_logos/originalherbivore.jpeg",
  "8E8 Thai Street Food": "../../food_truck_logos/8e8thaistreetfood.jpeg",
  "Baby's Burgers": "../../food_truck_logos/babysbadassburgers.jpeg",
  Wafl: "../../food_truck_logos/wafl.jpeg",
  "StopBye Cafe": "../../food_truck_logos/stopbyecafe.jpeg",
  "Cerda Vega Tacos": "../../food_truck_logos/cerdavegatacos.jpeg",
  "Poutine Brothers": "../../food_truck_logos/poutinebrothers.jpeg",
  "Uncle Al's Barbeque": "../../food_truck_logos/unclealsbarbeque.jpeg",
  "Aloha Fridays": "../../food_truck_logos/alohafridays.jpeg",
  "Dulce Europa Shaved Ice": "../../food_truck_logos/dulceeuropashavedice.jpeg",
  "Habibi Shack": "../../food_truck_logos/habibishack.jpeg",
  "Flaming Grain": "../../food_truck_logos/flaminggrain.jpeg",
  Yalla: "../../food_truck_logos/yalla.jpeg",
  "Bison Burger": "../../food_truck_logos/bisonburger.jpeg",
};
