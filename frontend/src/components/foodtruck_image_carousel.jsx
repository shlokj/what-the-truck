// import React from "react";
// import { Grid, Paper } from "@mui/material";
// import { data } from "./mockData";
// import "bootstrap/dist/css/bootstrap.css";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// export default function ImageCarousel() {
//   const slideLeft = () => {
//     var slider = document.getElementById("slider");
//     slider.scrollLeft = slider.scrollLeft - 500;
//   };

//   const slideRight = () => {
//     var slider = document.getElementById("slider");
//     slider.scrollLeft = slider.scrollLeft + 500;
//   };

//   return (
//     <>
//       <Grid container>
//         <img
//           className="w-full h-[440px] object-cover"
//           width="100%"
//           height="500 px"
//           src="../../creamyboyslogo.png"
//           alt="creamy boys logo"
//         />
//       </Grid>

//       <div className="relative flex items-center">
//         <MdChevronLeft
//           className="opacity-50 cursor-pointer hover:opacity-100"
//           onClick={slideLeft}
//           size={40}
//         />
//         <div
//           id="slider"
//           className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
//         >
//           {data.map((item) => (
//             <img
//               className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
//               src={item.img}
//               alt="/"
//             />
//           ))}
//         </div>
//         <MdChevronRight
//           className="opacity-50 cursor-pointer hover:opacity-100"
//           onClick={slideRight}
//           size={40}
//         />
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import Magnifier from "./Magnifier";
import "./slider.scss";

const SNAP_DIST = 12.5;

export default function ImageCarousel() {
  const [imageIndex, setIndex] = useState(0);
  const [x, setX] = useState(25);
  const [anchor, setAnchor] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [mousePos, setMouse] = useState(0);
  const [lg, setLg] = useState(window.innerWidth >= 992);

  window.addEventListener("resize", () => {
    setLg(window.innerWidth >= 992);
  });

  function shift(index) {
    // shifting the carousel left and right
    setX(-50 * index + 25);
    setAnchor(-50 * index);
    setIndex(index);
  }

  function importImages(r) {
    // push back all images into one array
    const images = {};
    r.keys().forEach((item) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importImages(
    require.context("../pictures", false, /\.(jpg)$/)
  );
  const maxIndex = Object.values(images).length - 1;

  return (
    <div
      role="none"
      className="container"
      onMouseUp={() => {
        // snaps to nearest slide upon mouse release
        if (!dragging) {
          return;
        }
        setDragging(false);
        const i = 25 - imageIndex * 50;
        const d = x - i;
        if (d >= -SNAP_DIST && d <= SNAP_DIST) {
          shift(imageIndex);
        } else {
          shift(d < -SNAP_DIST ? imageIndex + 1 : imageIndex - 1);
        }
      }}
      onMouseMove={(e) => {
        // shifts carousel according to mouse movement
        if (!dragging) {
          return;
        }
        const diff =
          (100 * (e.clientX - mousePos)) / document.documentElement.clientWidth;

        if (diff > 0) {
          setX(Math.min(25, anchor + diff));
        } else if (diff < 0) {
          setX(Math.max(25 - 50 * maxIndex, anchor + diff));
        }
      }}
    >
      <div className="carousel-container">
        {Object.values(images).map(
          (
            item // create each slide
          ) => (
            <div
              key={item}
              className="slide"
              style={
                dragging
                  ? { transition: "none", transform: `translateX(${x * 2}%)` }
                  : { transition: "0.15s", transform: `translateX(${x * 2}%)` }
              }
            >
              <div
                role="none"
                className="image-container"
                onMouseDown={(e) => {
                  // initialize dragging sequence if clicking on image
                  setDragging(true);
                  setMouse(e.clientX);
                  setAnchor(x);
                }}
              >
                <Magnifier src={item} visible={lg} />
              </div>
            </div>
          )
        )}
      </div>

      <div className={lg ? "buttons-lg" : "buttons-small"} id="buttons">
        <input
          className="shift-btn"
          value="<"
          disabled={imageIndex === 0}
          style={lg ? { display: "inline-block" } : { display: "none" }}
          key="left"
          type="button"
          onClick={() => {
            shift(imageIndex - 1);
          }}
        />
        {Object.values(images).map((item, index) =>
          lg ? ( // image buttons for >= 992px
            <input
              style={
                imageIndex === index
                  ? { border: "2.5px solid black" }
                  : { border: "2px solid #EEE" }
              }
              key={item}
              type="image"
              onClick={() => {
                shift(index);
              }}
              src={item}
              alt="button"
            />
          ) : (
            <input // circle buttons for < 992px
              style={
                imageIndex === index
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "lightgrey" }
              }
              key={item}
              type="button"
              onClick={() => {
                shift(index);
              }}
            />
          )
        )}
        <input
          className="shift-btn"
          value=">"
          disabled={imageIndex === maxIndex}
          style={lg ? { display: "inline-block" } : { display: "none" }}
          key="right"
          type="button"
          onClick={() => {
            shift(imageIndex + 1);
          }}
        />
      </div>
    </div>
  );
}
