import {Stack, 
  Button, 
  Rating,
  TextField} from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { fontFamily } from "@mui/system";
import { ClassNames } from "@emotion/react";
import React, { Component } from 'react';
// TODO: change write your review customized to food truck page -> Line 17

const styles = {
  reviewCard: {
      alignItems: 'center',
      borderRadius: '50px',
      width: '700px',
      margin: 'auto',
      marginTop: '50px',
      marginBottom: '50px',
  },

  title: {
      fontWeight: 'bold',
      fontSize: '50px',
      marginTop: '0px',
      marginBottom: '0px',
      paddingBottom: '0px',
  },

  descriptors: {
      fontWeight:'lighter',
      textAlign: 'center',
      margin: 'auto',
      paddingTop: '20px',
      paddingBottom: '5px',
  },

  textField: {
      margin: '0px',
      textAlign: 'center',
      width: '300px',
      margin: 'auto',  
  },

  button: {
      paddingTop: '50px',
      paddingBottom: '30px', 
  },

  card: {
      backgroundColor: '#fff1a5',
      color: '#333',
      textAlign: 'left',
      borderRadius: '20px',
      margin: 'auto',
      padding: '20px 35px',
      margin: '20px 250px',
      position: 'relative',
  }
};

export default function ReviewInput() {
  return(
  <Stack spacing={5}>
      <Stack direction="column" spacing={1}>
          <div className="reviewCard" style={styles.reviewCard}>
              <div className="title" style={styles.title}> 
                  Write Your Review
              </div>
              <div className="descriptors" style={styles.descriptors}>
                  <h3>Rate the food truck out of 5 stars</h3>
                  <Rating size="large">
                  </Rating>
              </div>
              <div className="descriptors" style={styles.descriptors}>
                  <h3> Write your review of the food truck below </h3>
              </div>
              <div className="textField">
                  <TextField style={{textAlign: 'left'}} 
                  fullWidth label="Review" id="fullWidth"
                      default="your review here..."
                      hintText="Message Field"
                      floatingLabelText="MultiLine and FloatingLabel"
                      multiline rows={5}
                  />
              </div>
              <div className="descriptors" style={styles.descriptors}>
                  <h3> attach any images you have in the box below </h3>
              </div>
              <div className="textField">
                  <TextField style={{textAlign: 'left'}} 
                  fullWidth label="Images" id="fullWidth"
                  default="attach images"
                  hintText="Message Field"
                  floatingLabelText="MultiLine and FloatingLabel"
                  multiline rows={5}
                  />
              </div>
              <div className="button" style={styles.button}>
                  <Button variant="contained">
                      Submit Your Review
                  </Button>
              </div>
          </div>
      </Stack>
  </Stack>
  )
}