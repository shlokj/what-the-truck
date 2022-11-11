import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const styles = {
  textInputsVertical: { flexDirection: "column" },
  usernameInput: { flexDirection: "column", margin: 16, width: 300 },
  grid: { width: 300 },
  loginButton: { margin: 16 },
};

export const Login = ({ handleChange }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  const handleSubmit = (e) => {
    // will be changed later
    e.preventDefault();
    console.log(username);
    console.log(password);
  };

  //TODO (anmol): validate email
  // function isValidEmail(email) {
  //   return /\S+@\S+\.\S+/.test(email);
  // }

  // const checkEmail = (e) => {
  //   if (!isValidEmail(e.target.value)) {
  //     setError("Email is invalid");
  //   } else {
  //     setError(null);
  //   }
  // };

  return (
    <>
      <Paper elevation={10} xs={12} sm={6}>
        <Grid
          container
          direction="column"
          align="center"
          // bottom-margin="100vh"
          height="70vh"
        >
          <br></br>
          <br></br>
          <Grid item>
            <h2> Log In </h2>
          </Grid>

          <br></br>
          <br></br>

          <TextField
            id="username"
            label="Username"
            variant="outlined"
            style={styles.usernameInput}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
          <TextField
            id="password"
            label="Password"
            tyoe
            variant="outlined"
            style={styles.usernameInput}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*******"
            type="password"
            required
          />

          <Grid container justifyContent="center" align="center">
            <Button
              variant="contained"
              onClick={handleSubmit}
              style={styles.loginButton}
              fullWidth
              color="primary"
            >
              Log in
            </Button>

            <Grid item>
              <Typography>
                <Link href="#" onClick={() => handleChange("event", 1)}>
                  I don't have an account
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
