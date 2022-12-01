import "bootstrap/dist/css/bootstrap.css";
import { Button } from "@mui/material";
import { getAuth } from "firebase/auth";

const fontstyle = {
  fontWeight: "50px",
};

export default function Header() {
  const auth = getAuth();

  return (
    <div
      className="bg-primary text-white w-100 font-weight-bold
       d-flex flex-column justify-content-between align-items-center gap-3 py-4 px-3"
    >
      <div className="w-100 d-flex justify-content-around">
        <div className="d-flex justify-content-between align-items-center gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              class="bi bi-truck"
              viewBox="0 0 16 16"
            >
              <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
          </div>
          <div style={fontstyle} className="d-flex flex-row">
            <h1> What the Truck</h1>
          </div>
        </div>
        <Button
          className="px-3 py-2 position-absolute end-0 top-0 m-2 me-4 bg-light rounded rounded-2 border border-primary"
          variant="text"
          onClick={() => {
            auth.signOut();
            console.log("signed out");
          }}
        >
          Logout
        </Button>
      </div>
      <div className="border-top border-light pt-2 px-5" style={fontstyle}>
        <h4>the hub of ucla food truck reviews</h4>
      </div>
    </div>
  );
}
