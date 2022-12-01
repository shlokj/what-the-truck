import logo from "./pictures/logo.jpeg";

const column = {
  paddingTop: 10,
  fontWeight: "50px",
};

const image = {
  paddingBottom: 20,
};

export default function Footer() {
  return (
    <div
      className="w-100 h-100 bg-primary text-white font-weight-bold
       d-flex justify-content-around gap-3"
    >
      <div className="d-flex flex-column align-items-center" style={column}>
        <h4>What the Truck</h4>
        <div className="align-items-left" style={image}>
          <img
            height="150px"
            src={logo}
            alt="logo"
            className="rounded rounded-3 border border-dark border-2"
          ></img>
        </div>
      </div>
      <div style={column}>
        <h4>
          <u>Our Mission:</u>
        </h4>
        <div className="align-items-left" style={image}>
          Hello
        </div>
      </div>
      <div style={column}>
        <div>
          {" "}
          <h4>
            <u>Contact: </u>{" "}
          </h4>
        </div>
        <div className="d-flex flex-column justify-content-between gap-1">
          <a
            className="text-light text-decoration-none"
            href="mailto: shlokj@g.ucla.edu"
          >
            shlokj@g.ucla.edu
          </a>
          <a
            className="text-light text-decoration-none"
            href="mailto: skath@g.ucla.edu"
          >
            skath@g.ucla.edu
          </a>
          <a
            className="text-light text-decoration-none"
            href="mailto: sidharthsudhir@g.ucla.edu"
          >
            sidharthsudhir@g.ucla.edu
          </a>
          <a
            className="text-light text-decoration-none"
            href="mailto: anmolgupta23@g.ucla.edu"
          >
            anmolgupta23@g.ucla.edu
          </a>
          <a
            className="text-light text-decoration-none"
            href="mailto: ryanswkim2003@gmail.com"
          >
            ryanswkim2003@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
