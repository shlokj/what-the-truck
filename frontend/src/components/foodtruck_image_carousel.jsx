import React, { useState } from "react";
import "./slider.scss";

const SNAP_DIST = 12.5;

export default function ImageCarousel({ URLS }) {
  const [anchor, setAnchor] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [mousePos, setMouse] = useState(0);

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

  const images = importImages(require.context("./pictures", false, /\.(jpg)$/));
  const maxIndex = Object.values(images).length - 1;
  const [imageIndex, setIndex] = useState(0);
  const [x, setX] = useState(25);

  return (
    <div
      draggable={false}
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
        console.log(d);
        if (d >= -SNAP_DIST && d <= SNAP_DIST) {
          shift(imageIndex);
        } else {
          shift(imageIndex - Math.round(d / 50));
        }
      }}
      onMouseMove={(e) => {
        // shifts carousel according to mouse movement
        if (!dragging) {
          return;
        }
        const diff =
          (333 * (e.clientX - mousePos)) / document.documentElement.clientWidth;

        if (diff > 0) {
          setX(Math.min(25, anchor + diff));
        } else if (diff < 0) {
          setX(Math.max(25 - 50 * maxIndex, anchor + diff));
        }
      }}
    >
      <div className="carousel-container" draggable={false}>
        {URLS.map(
          (
            item,
            i // create each slide
          ) => (
            <div
              key={i}
              className="slide"
              draggable={false}
              style={
                dragging
                  ? { transition: "none", transform: `translateX(${x * 2}%)` }
                  : {
                      transition: "0.15s",
                      transform: `translateX(${x * 2}%)`,
                    }
              }
            >
              {console.log(item)}
              <div
                draggable={false}
                role="none"
                className="image-container"
                onMouseDown={(e) => {
                  // initialize dragging sequence if clicking on image
                  setDragging(true);
                  setMouse(e.clientX);
                  setAnchor(x);
                }}
              >
                <div
                  draggable={false}
                  style={{
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={item}
                    draggable={false}
                    style={{
                      width: "100%",
                      height: "100%",
                      userSelect: "none",
                      borderRadius: "5%",
                      border: "1px solid black",
                    }}
                    alt="Watch display"
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
