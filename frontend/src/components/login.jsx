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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const styles = {
  textInputsVertical: { flexDirection: "column" },
  usernameInput: { flexDirection: "column", margin: 16, width: 300 },
  grid: { width: 300 },
  loginButton: { margin: 16 },
};

export default function Login({ handleChange }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInError, setSignInError] = useState(false);

  const navigate = useNavigate();

  const auth = getAuth();

  function signIn() {
    console.log("sign in");
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in
        setSignInError(false);
        navigate("/");
      })
      .catch((error) => {
        if (
          error.code === "auth/wrong-password" ||
          error.code === "auth/user-not-found"
        ) {
          setSignInError(true);
          return 1;
        }
        console.log("Error signing in.");
        console.error(error);
        alert("Failed to sign in. Please try again later.");
        return 1;
      });
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your email"
            error={signInError}
            required
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            style={styles.usernameInput}
            onChange={(e) => {
              setPassword(e.target.value);
              setSignInError(false);
            }}
            placeholder="*******"
            type="password"
            error={signInError}
            helperText={signInError ? "Incorrect email or password." : null}
            required
          />

          <Grid container justifyContent="center" align="center">
            <Button
              variant="contained"
              onClick={() => signIn()}
              style={styles.loginButton}
              fullWidth
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
}
