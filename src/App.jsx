import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import AdsPage from "./AdsPage";
import HomePage from "./HomePage";
import "./App.css";
import Game from "./Game";

function App() {
  return (
    <Router>
      <Header />
      <div className="application">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ads" element={<AdsPage />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
      <Navbar />
    </Router>
  );
}

export default App;
