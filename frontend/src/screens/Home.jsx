import React from "react"
import "bootstrap/dist/css/bootstrap.css";
import { FoodTruckCard } from "../components";
import {
  Button,
  Link,
  TextField,
  FormControl,
  OutlinedInput,
} from "@mui/material";

const placeholderText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa 
eget. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. 
Tortor id aliquet lectus proin nibh nisl condimentum id. Facilisis leo 
vel fringilla est ullamcorper. Eget egestas purus viverra accumsan in 
nisl nisi scelerisque. Arcu odio ut sem nulla.`

const placeholderTrucks = ["Burger King", "Pizza Hut", "KFC"]

export default function Home() {
  return (
    // <div className="container vw-100 vh-100 d-flex justify-content-center">
      <div className="w-100 vh-100 d-flex flex-column align-items-center gap-4">
        <div className='header bg-success w-100 d-flex flex-column justify-content-between align-items-center gap-3 py-4 px-3'>
          <div className="top-bar w-100 d-flex justify-content-around">
            <div className="d-flex justify-content-between align-items-center gap-2">
              <div>Logo</div>
              <div><h1>what the tr*ck</h1></div>
            </div>
            <div className="w-25 d-flex justify-content-around align-items-center bg-light border border-dark rounded rounded-5">
              <Button variant="text">Home</Button>
              <Button variant="text">Restaurants</Button>
              <Button variant="text">Logout</Button>
            </div>
          </div>
          <div>____________________________________________________________________________________ </div>
          <div className="title">
            <h2>the ucla food trucks</h2>
          </div>
        </div>

        <div className='w-75 d-flex flex-column border border-dark align-items-center p-2 gap-4'>
          <div className="w-100 px-3 d-flex justify-content-between align-items-center">
            <div className="d-flex w-50">
              <Button variant="outlined" className="me-3 h-75 w-25">Filter</Button>
              <Button variant="outlined" className="h-75 w-25">Sort</Button>
            </div>
            <div className="h-100 d-flex align-items-center justify-content-center">
            <FormControl className="h-100 d-flex align-items-center justify-content-center">
              <OutlinedInput placeholder="Search" className="h-75" onChange={(e) => {console.log(e.target.value)}}/>
            </FormControl>
            </div>
          </div>

          <div className="food-trucks w-75 border border-dark d-flex flex-column justify-content-between gap-3">
            {placeholderTrucks.map(title => (
              <div className="mb-3">
                <FoodTruckCard name={title} text={placeholderText} />
              </div>
            ))}
          </div>
        </div>

        <div className='w-100 bg-success d-flex justify-content-between'>
          <div className="w-25 info d-flex flex-column align-items-center">Hello</div>
          <div className="w-25 locations d-flex flex-column justify-content-between align-items-center">
            {[1,2,3,4,5].map(_ => (<p>Filler</p>))}
          </div>
          <div className="w-25 links d-flex flex-column justify-content-between align-items-center">
            {[1,2,3,4,5].map(_ => (<p>Filler</p>))}
          </div>
          <div className="w-25 companies d-flex flex-column justify-content-between align-items-center">
            {[1,2,3,4,5].map(_ => (<p>Filler</p>))}
          </div>
        </div>
      </div>
    // </div>
  );
}