import React from "react";
import { Grid, Paper } from "@mui/material";
import { data } from "./mockData";
import "bootstrap/dist/css/bootstrap.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function ImageCarousel() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <Grid container>
        <img
          className="w-full h-[440px] object-cover"
          width="100%"
          height="500 px"
          src="creamyboyslogo.png"
          alt="creamy boys logo"
        />
      </Grid>

      <div className="relative flex items-center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {data.map((item) => (
            <img
              className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
              src={item.img}
              alt="/"
            />
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
    </>
  );
}
