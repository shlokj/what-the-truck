import React, { useState } from "react";
import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import ReactDOM from "react-dom/client";

const styles = {
  textInputsVertical: { flexDirection: "column" },
  usernameInput: { flexDirection: "column", margin: 16, width: 300 },
  grid: { width: 300 },
  loginButton: { margin: 15 },
};

export default function SignUp({ handleChange }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [error, setError] = useState("");

  const handleSubmit = (e) => {
    // will be changed later
    e.preventDefault();
    console.log(username);
    console.log(password);
    console.log(email);
    console.log(confirmPassword);
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
      {/* <Grid container style={{ minHeight: "100vh" }}> */}

      <Paper elevation={10} xs={12} sm={6}>
        <Grid
          container
          direction="column"
          align="center"
          bottom-margin="100vh"
          height="70vh"
        >
          <br></br>
          <br></br>

          <h2 xs={12} sm={6}>
            Sign Up
          </h2>

          <TextField
            id="email"
            label="Email"
            variant="outlined"
            style={styles.usernameInput}
            onChange={(e) => setEmail(e.target.value)}
            // onBlur={(e) => checkEmail(e.target.value)}
            placeholder="Enter your email address"
            required
          />

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

          <TextField
            id="confirmPassword"
            label="Confirm Password"
            tyoe
            variant="outlined"
            style={styles.usernameInput}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="*******"
            type="password"
            required
            password
          />

          <Grid container justifyContent="center">
            <Button
              variant="contained"
              onClick={handleSubmit}
              style={styles.loginButton}
              fullWidth
              color="primary"
            >
              Sign Up
            </Button>

            <Grid item>
              <Typography>
                <Link href="#" onClick={() => handleChange("event", 0)}>
                  I already have an account
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      {/* </Grid> */}
    </>
  );
}
