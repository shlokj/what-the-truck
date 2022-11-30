import { Stack, Button, Rating, TextField, Paper, Grid } from "@mui/material";
import React, { useState } from "react";
import { collection, addDoc, doc } from "firebase/firestore";
import { db } from "..";
import { useParams } from "react-router-dom";
// TODO: change write your review customized to food truck page -> Line 17

const styles = {
  heading: {
    margin: 32,
    marginTop: 50,
    marginBottom: 20,
  },

  fileUpload: {
    textAlign: "center",
    marginTop: 32,
    marginBottom: 32,
    marginLeft: 120,
  },

  paper: {
    paddingTop: 32,
    paddingLeft: "25%",
    align: "center",
    borderRadius: 40,
  },

  button: {
    paddingTop: "40px",
    paddingBottom: "30px",
  },

  textField: {
    marginTop: 32,
    marginLeft: 150,
    marginRight: 150,
    width: 400,
    textAlign: "left",
    fontFamily: "Cambria, Cochin, Georgia, Times, Times New Roman, serif",
  },

  title: {
    fontWeight: "bold",
    fontSize: "30px",
    margin: "0px",
  },

  reviewCard: {
    alignItems: "center",
    borderRadius: 50,
    width: 700,
    margin: "auto",
    marginTop: 50,
    marginBottom: 50,
  },

  descriptors: {
    fontWeight: "lighter",
    textAlign: "center",
    margin: "auto",
    marginTop: 20,
  },
};

export default function ReviewInput() {
  const [reviewText, setReviewText] = useState("");

  const foodTruckName = useParams().foodTruckName.replace(/[^A-Za-z0-9]/g, "");

  console.log(foodTruckName);

  let temp = "";

  for (let i = 0; i < foodTruckName.length; i++) {
    let ch = foodTruckName[i];
    if (ch !== ch.toUpperCase()) {
      temp += ch;
    } else {
      if (i !== 0) {
        temp += " ";
        temp += ch;
      } else {
        temp += ch;
      }
    }
  }

  async function addReview(reviewText) {
    const docRef = doc(db, "Trucks", temp);
    const colRef = collection(docRef, "Reviews");

    await addDoc(colRef, {
      text: reviewText,
    })
      .then(() => {
        console.log("CREATED");
      })
      .catch((err) => {
        console.error("Error creating document", err);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(reviewText);
  };



  return (
    <Grid container style={styles.paper}>
      <Stack spacing={5}>
        <Paper elevation={20}>
          <Stack direction="column" spacing={1}>
            <div className="reviewCard" style={styles.reviewCard}>
              <div className="title">
                <h1 align="center">Write a review here!</h1>
              </div>

              <div className="textField">
                <TextField
                  style={styles.textField}
                  fullWidth
                  label="Review"
                  id="fullWidth"
                  default="your review here..."
                  hintText="Message Field"
                  floatingLabelText="MultiLine and FloatingLabel"
                  multiline
                  rows={8}
                  onChange={(e) => setReviewText(e.target.value)}
                />
              </div>
              <div className="descriptors">
                <h3 style={styles.heading} align="center">
                  Upload an image
                </h3>
              </div>

              <form
                id="upload_form"
                enctype="multipart/form-data"
                method="post"
                style={styles.fileUpload}
              >
                <input type="file" name="file1" id="file1" />
              </form>

              <div className="descriptors">
                <h3 style={styles.heading} align="center">
                  Rate the food truck out of 5 stars
                </h3>
                <div align="center">
                  <Rating size="large"></Rating>
                </div>
              </div>
              <div className="button" align="center" style={styles.button}>
                <Button variant="contained" onClick = {handleSubmit}>Submit Review</Button>
              </div>
            </div>
          </Stack>
        </Paper>
      </Stack>
    </Grid>
  );
}
