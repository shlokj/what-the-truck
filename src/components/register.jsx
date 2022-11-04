import React, { useState } from "react";
import ReactDOM from "react-dom/client";
export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(email);
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
      <label for="email"> email </label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter your email address"
        id="email"
        name="email"
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
      <button type="submit"> Register </button>
    </form>
  );
};
