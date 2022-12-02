import logo from "./logo.jpeg";

export default function Footer() {
  return (
    <div
      className="w-100 h-100 bg-primary text-white font-weight-bold
       d-flex justify-content-around gap-3 py-3"
    >
      <div className="w-25 d-flex flex-column align-items-center">
        <h4>What The Truck</h4>
        <div className="align-items-left">
          <img
            height="175px"
            src={logo}
            alt="logo"
            className="rounded rounded-3 border border-dark border-2"
          ></img>
        </div>
      </div>
      <div className="w-25">
        <h4 className="border-bottom py-1 border-light" align="center">
          Our Mission:
        </h4>
        <div className="justify-content-end">
          <p>
            What The Truck is a service - built by and for students at UCLA -
            that aims to ease the navigation of food truck options, menus, and
            schedules.
          </p>

          <p>
            Please keep in mind that any changes occuring on UCLA Dining's page
            may take a few days to reflect on our website. Please contact us if
            you would like to report a bug.
          </p>
        </div>
      </div>
      <div className="w-25 d-flex flex-column align-items-center">
        <h4 className="w-100 border-bottom py-1 border-light" align="center">
          Contact Us:
        </h4>
        <div className="d-flex flex-column justify-content-between gap-2">
          <li>
            <a
              className="text-light text-decoration-none fw-normal"
              href="mailto: shlokj@g.ucla.edu"
            >
              shlokj@g.ucla.edu
            </a>
          </li>
          <li>
            <a
              className="text-light text-decoration-none fw-normal"
              href="mailto: skath@g.ucla.edu"
            >
              skath@g.ucla.edu
            </a>
          </li>
          <li>
            <a
              className="text-light text-decoration-none fw-normal"
              href="mailto: sidharthsudhir@g.ucla.edu"
            >
              sidharthsudhir@g.ucla.edu
            </a>
          </li>
          <li>
            <a
              className="text-light text-decoration-none fw-normal"
              href="mailto: anmolgupta23@g.ucla.edu"
            >
              anmolgupta23@g.ucla.edu
            </a>
          </li>
          <li>
            <a
              className="text-light text-decoration-none fw-normal"
              href="mailto: ryanswkim2003@gmail.com"
            >
              ryanswkim2003@gmail.com
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}
