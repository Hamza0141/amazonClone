
import React, { useState } from "react";
import "./LogIn.css";
import { auth } from "../../Firebase";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
function CreatAccount() {

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const navigate = useNavigate();


         const register = (e) => {
           e.preventDefault();
           createUserWithEmailAndPassword(auth, email, password)
             .then((userCredential) => {
               if (userCredential) navigate("/");
             })
             .catch((error) => alert(error.message));
         };
  return (
    <div>
      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/">
            <button
              type="submit"
              className="login__signInButton"
            >
              Sign In
            </button>
          </Link>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon Account 
        </button>
      </div>
    </div>
  );
}

export default CreatAccount