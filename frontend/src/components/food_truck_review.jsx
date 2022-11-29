import { Stack, Button, Rating, TextField, Paper, Grid, autocompleteClasses } from "@mui/material";
import React, { useState } from "react";
// TODO: change write your review customized to food truck page -> Line 17

const styles = {
  heading: { 
    margin: 32,
  },

  fileUpload: {
    textAlign: "center",
    marginTop: 32,
    marginBottom: 32,
    marginLeft: 120,
  },

  paper: 
  { paddingTop: 32, 
    paddingLeft: "25%", 
    align: "center" 
  },

  button: {
    paddingTop: '40px',
    paddingBottom: '30px'
  },

  textField: {
    marginTop: 32, 
    marginBottom: 14, 
    marginLeft: 150,
    marginRight: 150,
    width: 400,
    textAlign: 'left',
    fontFamily:'Cambria, Cochin, Georgia, Times, Times New Roman, serif',
  },

  title: {
    fontWeight: 'bold',
    fontSize: '30px',
    margin: '0px',
  },

  descriptors: {
    fontWeight: 'lighter',
    textAlign: 'center',
    margin: 'auto'
  }

};

export default function ReviewInput() {
  const [reviewText, setReviewText] = useState("");

  return (
    <Grid container style={styles.paper}>
      <Stack spacing={5}>
        <Paper elevation={20}>
          <Stack direction="column" spacing={1}>
            <div className="reviewCard">
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
                <h3 style={styles.heading} align="center">Upload an image</h3>
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
                <Button variant="contained">Submit Review</Button>
              </div>
            </div>
          </Stack>
        </Paper>
      </Stack>
    </Grid>
  );
}
