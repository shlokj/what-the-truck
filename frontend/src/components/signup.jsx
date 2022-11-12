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
  signUpText: { marginTop: 32 },
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

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function checkEmail(e) {
    if (!isValidEmail(e.target.value)) {
      return false;
    }
    const dom = e.substring(e.indexOf("@") + 1);
    if (dom.endsWith("ucla.edu")) {
      return true;
    }
    return false;
  }

  return (
    <>
      <Paper
        elevation={10}
        xs={12}
        sm={6}
        style={{
          padding: 40,
        }}
      >
        <Grid
          container
          direction="column"
          align="center"
          bottom-margin="100vh"
          height="auto"
        >
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            style={styles.usernameInput}
            onChange={(e) => setEmail(e.target.value)}
            // onBlur={(e) => checkEmail(e.target.value)}
            // error
            // helperText="Please enter a valid UCLA email."
            placeholder="Enter your email address"
            required
          />

          <TextField
            id="username"
            label="Username"
            variant="outlined"
            style={styles.usernameInput}
            onChange={(e) => setUsername(e.target.value)}
            // error
            // helperText="This username is taken."
            placeholder="Choose a username"
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
            // error
            // helperText="Your password must be at least 8 characters long."
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
            // error
            // helperText="Passwords don't match."
            required
            password
          />

          <Grid container justifyContent="center">
            <Button
              variant="contained"
              onClick={handleSubmit}
              style={styles.loginButton}
              fullWidth
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
    </>
  );
}
