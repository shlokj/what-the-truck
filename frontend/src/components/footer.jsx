import {
    Button,
    FormControl,
    OutlinedInput,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
  } 
  from "@mui/material";
import "bootstrap/dist/css/bootstrap.css";

const column = {
    paddingTop: 10,
    fontWeight: "50px",
  };
  
  const fontstyle = {
    fontWeight: "50px",
  };
  
  const image = {
    paddingBottom: 20,
    width: 400
  };

export default function Footer() {
    return (
        <div
        className="w-100 h-100 bg-primary text-white font-weight-bold
       d-flex justify-content-around gap-3"
        >
        <div className="d-flex flex-column align-items-center" style={column}>
          <h4>What the Truck</h4>
          <div className="align-items-left" >
            <img
              src="logo.jpeg"
              alt="logo"
              className="rounded rounded-3 border border-dark border-2"
            ></img>
          </div>
        </div>
        <div style={column}>
          <h4 align="center">
            <u>Our Mission:</u>
          </h4>
          <div className="justify-content-end" style={image}>
          <p>
              What The Truck is a service - built by and for students at UCLA - that 
            aims to ease the navigation of food truck options, menus, and schedules.
          </p>

           <p>
              Please keep in mind that any changes occuring on UCLA Dining's page may 
              take a few days to reflect on our website. If you would like to report a bug,
              please any of the given email IDs.
          </p>
            <p>
              <h7> 
                built with shlok's {}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="white" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>   in the olympic study lounge
              </h7>
            </p>
          </div>
        </div>
        <div style={column}>
          <div>
            {" "}
            <h4>
              <u>Contact: </u>{" "}
            </h4>
          </div>
          <div align="left">
            <li>
              <a className="text-light" href="mailto: shlokj@g.ucla.edu">
                shlokj@g.ucla.edu
              </a>
            </li>
            <li>
              <a className="text-light" href="mailto: skath@g.ucla.edu">
                skath@g.ucla.edu
              </a>
            </li>
            <li>
              <a
                className="text-light"
                href="mailto: sidharthsudhir@g.ucla.edu"
              >
                sidharthsudhir@g.ucla.edu
              </a>
            </li>
            <li>
              <a className="text-light" href="mailto: anmolgupta23@g.ucla.edu">
                anmolgupta23@g.ucla.edu
              </a>
            </li>
            <li>
              <a className="text-light" href="mailto: ryanswkim2003@gmail.com">
                ryanswkim2003@gmail.com
              </a>
            </li>
          </div>
        </div>
      </div>
    )
}
