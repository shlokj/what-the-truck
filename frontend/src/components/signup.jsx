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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  async function addUser(email, password) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // we are signed in
        navigate("/");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          alert("That email address is already in use.");
          return 1;
        } else if (error.code === "auth/invalid-email") {
          // we shouldn't reach here since we already have checks in place
          alert("That email address is invalid.");
          return 1;
        }
        console.log("Error signing up user.");
        console.error(error);
        return 1;
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(email, password);
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleEmail = (e) => {
    if (e.length === 0) {
      setEmailError(false);
      return true;
    }
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

  const anyTextBoxEmpty =
    username.length === 0 ||
    email.length === 0 ||
    password.length === 0 ||
    confirmPassword.length === 0;

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
              disabled={
                emailError ||
                usernameError ||
                passwordError ||
                confirmPasswordError ||
                anyTextBoxEmpty
              }
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
