import { Stack, Button, Rating, TextField } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { fontFamily } from "@mui/system";
import { ClassNames } from "@emotion/react";
import React, { Component } from "react";
// TODO: change write your review customized to food truck page -> Line 17

export default function ReviewInput() {
  return (
    <Stack spacing={5}>
      <Stack direction="column" spacing={1}>
        <div className="reviewCard">
          <div className="title">
            <h1>write your review</h1>
          </div>
          <div className="descriptors">
            <h3> write your review of the food truck below </h3>
          </div>
          <div className="textField">
            <TextField
              style={{ textAlign: "left" }}
              fullWidth
              label="Review"
              id="fullWidth"
              default="your review here..."
              hintText="Message Field"
              floatingLabelText="MultiLine and FloatingLabel"
              multiline
              rows={5}
            />
          </div>
          <div className="descriptors">
            <h3> attach any images you have in the box below </h3>
          </div>
          <div className="textField">
            <TextField
              style={{ textAlign: "left" }}
              fullWidth
              label="Images"
              id="fullWidth"
              default="attach images"
              hintText="Message Field"
              floatingLabelText="MultiLine and FloatingLabel"
              multiline
              rows={5}
            />
          </div>
          <div className="descriptors">
            <h3>rate the food truck out of 5 stars</h3>
            <Rating size="large"></Rating>
          </div>
          <div className="button">
            <Button variant="contained">submit Your Review</Button>
          </div>
        </div>
      </Stack>
    </Stack>
  );
}
