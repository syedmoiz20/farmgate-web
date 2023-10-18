import React from "react";
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import Browse from "./components/Browse";
import ListingPage from "./components/ListingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/Signup";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <LandingPage />
              </>
            }
          />
          <Route
            path="/browse"
            element={
              <>
                <Header />
                <Browse />
              </>
            }
          />
          <Route
            path="/list"
            element={
              <>
                <Header />
                <ListingPage />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Header />
                <LoginPage />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Header />
                <SignupPage />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
