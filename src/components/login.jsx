import React, { useState } from "react";
import ReactDOM from "react-dom/client";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label for="username"> username </label>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Enter your username"
        id="username"
        name="username"
        required
      />

      <label for="password"> password </label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="***********"
        id="password"
        name="password"
        required
      />
      <button type="submit"> Log In </button>
    </form>
  );
};
