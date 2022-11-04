import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const styles = {
  textInputsVertical: { flexDirection: "column" },
  usernameInput: { flexDirection: "column", margin: 16, width: 300 },
  grid: { width: 300 },
  loginButton: { margin: 16 },
};

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    // will be changed later
    e.preventDefault();
    console.log(username);
    console.log(password);
  };

  return (
    <>
      <Grid container direction="column">
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
          password
        />
      </Grid>
      <Grid container direction="row" spacing={2} style={styles.grid}>
        <Grid item xs={6}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            style={styles.loginButton}
            fullWidth
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
          >
            Sign up
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
