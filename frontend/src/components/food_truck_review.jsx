import { Stack, Button, Rating, TextField, Paper, Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "..";
import { useParams } from "react-router-dom";
import { storage } from "..";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { getAuth } from "firebase/auth";

const styles = {
  heading: {
    margin: 32,
    marginTop: 50,
    marginBottom: 20,
  },

  fileUpload: {
    textAlign: "center",
    marginTop: 25,
    marginBottom: 32,
    marginLeft: 120,
  },

  paper: {
    align: "center",
    borderRadius: 40,
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
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const CHARACTER_LIMIT = 200;

  const [imageFile, setImageFile] = useState(null);

  const auth = getAuth();

  async function getRatingAndNumReviews() {
    const docRef = doc(db, "Trucks", foodTruckName);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        return [data.avgRating, data.numReviews];
      } else {
        console.log("Document does not exist");
        return 0;
      }
    } catch (error) {
      console.log(error);
    }
  }

  const foodTruckName = useParams()
    .foodTruckName.replace(/[^A-Za-z0-9]/g, "")
    .toLowerCase();

  function handleFileSelect(event) {
    setImageFile(event.target.files[0]);
  }

  function uploadImageAndAddReview() {
    if (!imageFile) {
      alert("Please choose an image first.");
      return;
    }

    const imagesRef = ref(storage, `/images/${imageFile.name}`);

    const uploadTask = uploadBytesResumable(imagesRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => {
        console.error(error);
        alert("Failed to upload image. Please try again later.");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          addReview(reviewText, rating, downloadURL);
        });
      }
    );
  }

  async function addReview(text, rating, reviewImage) {
    const docRef = doc(db, "Trucks", foodTruckName);
    const colRef = collection(docRef, "Reviews");

    const userEmail = auth.currentUser.email;
    let username = null;
    if (userEmail != null) {
      console.log(userEmail);
      const docRef = doc(db, "Users", userEmail);
      getDoc(docRef).then(async function (result) {
        username = result.data().Username;
        await addDoc(colRef, {
          username,
          text,
          rating,
          reviewImage,
        })
          .then(() => {
            console.log("CREATED");
            getRatingAndNumReviews().then(async function (result) {
              const dbRef = collection(db, "Trucks");
              const avgRating = result[0];
              const numReviews = result[1];
              const newRating =
                (avgRating * numReviews + rating) / (numReviews + 1);
              await updateDoc(doc(dbRef, foodTruckName), {
                avgRating: newRating,
                numReviews: numReviews + 1,
              });
            });
            setTimeout(function () {
              setUploading(false);
              setReviewText("");
              navigate(-1);
            }, 1000);
          })
          .catch((err) => {
            console.error("Error creating document", err);
          });
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText.length === 0 || rating === 0) {
      return;
    }
    setUploading(true);
    if (imageFile != null) {
      uploadImageAndAddReview();
    } else {
      addReview(reviewText, rating, null);
    }
  };

  return (
    <Grid
      container
      style={styles.paper}
      className="d-flex flex-column align-items-center"
    >
      <Stack>
        <Paper elevation={20}>
          <Stack direction="column" spacing={1}>
            <div className="reviewCard rounded" style={styles.reviewCard}>
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
                  rows={7}
                  inputProps={{
                    maxLength: CHARACTER_LIMIT,
                  }}
                  onChange={(e) => setReviewText(e.target.value)}
                  helperText={`${reviewText.length}/${CHARACTER_LIMIT}`}
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
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                />
              </form>

              <div className="descriptors">
                <h3 style={styles.heading} align="center">
                  Rate the food truck
                </h3>
                <div align="center">
                  <Rating
                    size="large"
                    value={rating}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                  />
                </div>
              </div>
              <div align="center" className="py-4">
                <Button variant="contained" onClick={handleSubmit}>
                  Submit Review
                </Button>
              </div>
              <div align="center">{uploading && <CircularProgress />}</div>
            </div>
          </Stack>
        </Paper>
      </Stack>
    </Grid>
  );
}
