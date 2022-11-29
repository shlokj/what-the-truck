import { Stack, Button, Rating, TextField } from "@mui/material";
import React, { useState } from "react";
import { getFirestore, collection, collectionGroup, onSnapshot, addDoc, getDocs, getDoc, doc, query, where } from "firebase/firestore";
import { db } from "..";
import { useParams } from "react-router-dom";


// TODO: change write your review customized to food truck page -> Line 17

export default function ReviewInput() {
  const [reviewText, setReviewText] = useState("");

  const foodTruckName = useParams()
    .foodTruckName.replace(/[^A-Za-z0-9]/g, "");

    console.log(foodTruckName);

    let temp = "";

    for (let i = 0; i < foodTruckName.length; i++) {
      let ch = foodTruckName[i];
      if (ch !== ch.toUpperCase()) {
        temp += ch;
    } else {
      if (i!==0){
        temp += " ";
        temp += ch;
      } else {
        temp += ch;
      }
    }
  }

    console.log(temp);
  
  


  async function addReview(reviewText) {
    // const dbRef = collection(db, "Trucks");

    // const q = query(dbRef, where("Name","==",foodTruckName));
    
    // onSnapshot(q, (snapshot) => {
    //   let books = []
    //   snapshot.docs.forEach(doc => {
    //     books.push({ ...doc.data(), id: doc.id })
    //   })
    //   console.log(books[0]);

    //   // addDoc(reqCollection, reviewText);
      
    // })

    const docRef = doc(db, "Trucks", temp);
    const colRef = collection(docRef, "Reviews");

    await addDoc(colRef, {
      text: reviewText
    })
      .then(() => {
        console.log("CREATED");
      })
      .catch((err) => {
        console.error("Error creating document", err);
      });

    // const snapshots = await getDocs(dbRef);

    

    // const cityRef = doc(db, "Trucks", foodTruckName);
    // const doc = await cityRef.get();
    // if (!doc.exists) {
    //   console.log('No such document!');
    // } else {
    //   console.log('Document data:', doc.data());
    


    // var arrayLength = allReviews.length;
    // for (var i = 0; i < arrayLength; i++) {
  
    //     console.log(allReviews[i].data());
      
    // //Do something
    // }

    

    


  //   const data = {
  //     Body: reviewText
  //   };

  //   await addDoc(dbRef, data);

  }


  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(reviewText);
    
  };


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
              onChange={(e) => setReviewText(e.target.value)}
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
            <Button 
              variant="contained"
              onClick={handleSubmit}
            >
                submit Your Review
              </Button>
          </div>
        </div>
      </Stack>
    </Stack>
  );
}
