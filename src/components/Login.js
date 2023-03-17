import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (event) => {
    event.preventDefault(); //This stop refreshing
    //do the login logic ...
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        //logged In ,redirect to home page
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };
  const register = (event) => {
    event.preventDefault(); //This stop refreshing
    //do the register logic
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        //created user and logged In...
        navigate("/");
      })
      .catch((e) => alert(e.message));
    console.log("clicked");
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signinButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Condititons of Use & Sale.Please
          see our Privacy Notice,our Cookies Notice and our interest-Based Ads
          Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
