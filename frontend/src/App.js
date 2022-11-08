import { Login } from "./components/login.jsx";
import { Register } from "./components/register.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./custom.scss";
import { Grid } from "@mui/material";

const styles = {
  main: { display: "flex", margin: "auto" },
};

function App() {
  return (
    <div className="App">
      <Grid
        container
        direction="row"
        justifyContent="center"
        style={styles.main}
      >
        <Grid item xs={6} justifyContent="center">
          <Login />
        </Grid>
        <Grid item xs={6} justifyContent="center">
          <Login />
        </Grid>
      </Grid>
      {/* <Register /> */}
    </div>
  );
}

export default App;
