import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import { db } from "..";
import Header from "../components/header";

import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  OutlinedInput,
  Rating,
} from "@mui/material";

import { ImageCarousel, ReviewsList, Footer } from "../components";
import "bootstrap/dist/css/bootstrap.css";

const DELTA = 5;

export default function FoodtruckPage() {
  const [search, setSearch] = useState("");
  const [best, setBest] = useState(true);
  const [i, setI] = useState(0);
  const [fbReviews, setFBReviews] = useState([]);
  const [truckName, setTruckName] = useState("");
  const [imageurls, setImageURLs] = useState([]);
  const [averageRating, setRating] = useState(0);
  const navigate = useNavigate();
  const foodTruckName = useParams()
    .foodTruckName.replace(/[^A-Za-z0-9]/g, "")
    .toLowerCase();

  async function getTruckRating() {
    const docRef = doc(db, "Trucks", foodTruckName);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    return data.avgRating;
  }

  async function getReviews() {
    const docRef = doc(db, "Trucks", foodTruckName);
    const colRef = collection(docRef, "Reviews");
    const reviews = await getDocs(colRef);
    const allReviews = [];
    reviews.forEach((doc) => {
      const data = doc.data();
      if (data != null && data.text != null && data.rating != null) {
        const reviewObj = {
          user:
            data.username ??
            ["shlokj", "gupann", "skath", "ryankim", "sidsud"][
              Math.floor(Math.random() * 5)
            ],
          description: data.text,
          rating: data.rating,
        };
        allReviews.push(reviewObj);
      }
    });
    return allReviews;
  }

  async function getImageURLs() {
    const docRef = doc(db, "Trucks", foodTruckName);
    const colRef = collection(docRef, "Reviews");
    const reviews = await getDocs(colRef);
    const imageURLs = [];
    reviews.forEach((doc) => {
      const data = doc.data();
      if (data.reviewImage != null) {
        imageURLs.push(data.reviewImage);
      }
    });
    return imageURLs;
  }

  useEffect(() => {
    getReviews().then(function (fbReviews) {
      setFBReviews(fbReviews);
    });
    getImageURLs().then(function (imageurls) {
      setImageURLs(imageurls);
    });
    getTruckRating().then(function (avgRating) {
      setRating(avgRating);
    });
    getName().catch(console.error);
  }, []);

  const reviewDisplay = fbReviews
    .filter(
      (review) =>
        review.description.toLowerCase().includes(search.toLowerCase()) ||
        review.user.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => (best ? -1 : 1) * (a.rating - b.rating));

  async function getName() {
    const docRef = doc(db, "Trucks", foodTruckName);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setTruckName(docSnap.data().Name);
        return docSnap.data().Name;
      } else {
        console.log("Document does not exist");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-between gap-3">
      <Header />
      {imageurls.length > 0 ? (
        <div style={{ width: "30%", height: "30%" }}>
          <ImageCarousel URLS={imageurls} />
        </div>
      ) : (
        ""
      )}

      <div className="d-flex w-75 flex-column align-items-center justify-content-between gap-4 py-3">
        <div
          style={{ width: "90%" }}
          className="d-flex align-items-center justify-content-between"
        >
          <div className="bg-primary py-2 px-3 rounded rounded-3 border border-2 border-dark">
            <h3 className="text-light">{truckName}</h3>
          </div>
          <div className="d-flex align-items-center gap-2 bg-primary py-2 px-3 rounded rounded-3 border border-2 border-dark">
            <div>
              <h3 className="text-light">Average Rating:</h3>
            </div>
            <Rating value={averageRating ?? 0} precision={0.5} readOnly />
          </div>
        </div>
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ width: "90%" }}
        >
          <div className="h-50 d-flex justify-content-between align-items-center gap-2">
            <Button
              className="p-0 fs-3 h-50"
              variant="outlined"
              onClick={() => {
                navigate("/truck/" + foodTruckName + "/review");
              }}
            >
              +
            </Button>
            <Button
              variant="outlined"
              className={`${
                i - DELTA < 0 ? "" : "bg-light"
              } p-0 fs-3 h-50 text-dark border-dark`}
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
                i + DELTA >= reviewDisplay.length ? "" : "bg-light"
              } p-0 fs-3 text-dark border-dark`}
              onClick={() => {
                setI(i + DELTA);
              }}
              disabled={i + DELTA >= reviewDisplay.length}
            >
              {`>`}
            </Button>
            <div className="ms-2 text-secondary">
              ({Math.min(i + 1, reviewDisplay.length)} -{" "}
              {Math.min(i + DELTA, reviewDisplay.length)}) out of{" "}
              {reviewDisplay.length}
            </div>
          </div>
          <div>
            <div className="h-75 d-flex justify-content-between gap-2 align-items-center">
              <FormControl>
                <RadioGroup row defaultValue="best" name="radio-buttons-group">
                  <FormControlLabel
                    value="worst"
                    control={<Radio />}
                    label="Worst Ratings"
                    onClick={() => {
                      setBest(false);
                    }}
                  />
                  <FormControlLabel
                    value="best"
                    control={<Radio />}
                    label="Best Ratings"
                    onClick={() => {
                      setBest(true);
                    }}
                  />
                </RadioGroup>
              </FormControl>
              <FormControl className="h-75 d-flex align-items-center justify-content-center">
                <OutlinedInput
                  placeholder="Search"
                  className="h-75 text-dark border-dark"
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setI(0);
                  }}
                />
              </FormControl>
            </div>
          </div>
        </div>
        {reviewDisplay.length > 0 ? (
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: "85%" }}
          >
            <ReviewsList reviews={reviewDisplay.slice(i, i + DELTA)} />
          </div>
        ) : (
          <div className="p-5" style={{ minHeight: "50vh" }}></div>
        )}
      </div>
      <Footer />
    </div>
  );
}
