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
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleSubmit = (e) => {
    // will be changed later
    e.preventDefault();
    handleEmail(e);
    handlePassword(e);
    handleConfirmPassword(e);
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleEmail = (e) => {
    if (!isValidEmail(e)) {
      setEmailError(true);
      return false;
    }
    const dom = e.substring(e.indexOf("@") + 1);
    if (dom.endsWith("ucla.edu")) {
      setEmailError(false);
      return true;
    }
    setEmailError(true);
    return false;
  };

  const handlePassword = (e) => {
    if (password && e.length < 8) {
      setPasswordError(true);
      return false;
    } else {
      setPasswordError(false);
      return true;
    }
  };

  const handleConfirmPassword = (e) => {
    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
      return false;
    } else {
      setConfirmPasswordError(false);
      return true;
    }
  };
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
            onBlurCapture={(e) => handleEmail(e.target.value)}
            error={emailError}
            helperText={emailError ? "Please enter a valid UCLA email." : null}
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
            onBlurCapture={(e) => handlePassword(e.target.value)}
            error={passwordError}
            helperText={
              passwordError ? "Must be at least 8 characters long." : null
            }
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
            onBlurCapture={(e) => handleConfirmPassword(e.target.value)}
            error={confirmPasswordError}
            helperText={confirmPasswordError ? "Passwords don't match." : null}
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
