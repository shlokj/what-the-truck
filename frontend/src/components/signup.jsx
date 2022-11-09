import { Button, Grid, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const styles = {
  textInputsVertical: { flexDirection: "column" },
  usernameInput: { flexDirection: "column", margin: 16, width: 300 },
  grid: { width: 300 },
  loginButton: { margin: 16 },
};

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  // const [error, setError] = useState("");

  const handleSubmit = (e) => {
    // will be changed later
    e.preventDefault();
    console.log(username);
    console.log(password);
    console.log(email);
    console.log(retypePassword);
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

  const paperStyle = {
    padding: 40,
    height: "70vh",
    width: "280",
    margin: "auto",
  };

  return (
    <>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={6}>
          <img
            src="https://i.pinimg.com/originals/d9/4a/49/d94a495eca526d82ebbe0640aea413a9.jpg"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="logo and truck images"
          />
        </Grid>

        <Paper elevation={10} style={paperStyle} xs={12} sm={6}>
          <Grid container direction="column" align="center">
            <h2>Sign Up</h2>
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
              id="retypePassword"
              label="Retype Password"
              tyoe
              variant="outlined"
              style={styles.usernameInput}
              onChange={(e) => setRetypePassword(e.target.value)}
              placeholder="*******"
              type="password"
              required
              password
            />

            <Grid container direction="row" spacing={2} style={styles.grid}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  style={styles.loginButton}
                  fullWidth
                  color="secondary" //change to gray
                >
                  Log in
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  style={styles.loginButton}
                  fullWidth
                  color="primary"
                >
                  Sign up
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};
