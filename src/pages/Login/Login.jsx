import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import https from "https";

let url = process.env.REACT_APP_SERVER_URL;

const customAxios = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
     
     const response = await customAxios.post(`${url}users/login`, {
        username,
        password,
      },
      {
        httpsAgent: agent, // Use the custom agent
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/swap");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-form-container">
      <form action="submit" className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="login-form__username"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        ></input>

        <input
          type="password"
          className="login-form__password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        ></input>

        <div className="logged-container">
          <label htmlFor="keeploged" className="login-form__label">
            Keep me logged in:
          </label>
          <input
            type="checkbox"
            className="login-form-loged"
            id="keeploged"
          ></input>
          <Link to="/" className="forgot-pass">
            Forgot your password ?
          </Link>
        </div>
        <button type="submit" className="login-form__button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
