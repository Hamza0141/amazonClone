
import './App.css';
import Checkout from './Components/Checkout/Checkout';
import React, { useState, useEffect } from "react";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Route, Routes } from "react-router-dom";
import Login from './Components/SignIn/Login';
import { useStateValue } from './Components/StateProvider/StateProvider';
import { auth } from './Firebase';
import Payment from './Components/Payment/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Components/Orders/Orders';

const promise = loadStripe(
  "pk_test_51NN3YzFEpWpdbGLrJElJpuUOe435JQfHmZLluVlMYPHqsaiRjpBm1NlV4BHjVeebFiQ083kAGTjyx2t6nVM7TMGx00DWyD5FIG"
);

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  return (
    <div className="app">
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/orders" element={[<Header />, <Orders />]} />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
        />
        <Route path="/checkout" element={[<Header />, <Checkout />]} />
        <Route path="/" element={[<Header />, <Home />]} />
      </Routes>
    </div>
  );
}

export default App;