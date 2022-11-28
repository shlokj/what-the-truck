import { Stack, Button, Rating, TextField } from "@mui/material";
import React, { useState } from "react";
// TODO: change write your review customized to food truck page -> Line 17

const styles = {
  heading: { margin: 32 },
  textbox: { marginTop: 32, marginBottom: 14, textAlign: "left" },
  fileUpload: {
    textAlign: "center",
    marginTop: 32,
    marginBottom: 32,
    marginLeft: 120,
  },
};

export default function ReviewInput() {
  const [reviewText, setReviewText] = useState("");

  return (
    <Stack spacing={5}>
      <Stack direction="column" spacing={1}>
        <div className="reviewCard">
          <div className="title">
            <h1 align="center">Write a review here!</h1>
          </div>

          <div className="textField">
            <TextField
              style={styles.textbox}
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
            <h3 style={styles.heading}>Upload an image</h3>
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
            <h3 style={styles.heading}>Rate the food truck out of 5 stars</h3>
            <Rating size="large"></Rating>
          </div>
          <div className="button" align="center">
            <Button variant="contained">Submit Review</Button>
          </div>
        </div>
      </Stack>
    </Stack>
  );
}
