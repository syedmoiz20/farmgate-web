import React from 'react';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header/>
                <LandingPage/>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
