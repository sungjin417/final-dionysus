import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Traditional from "./pages/Traditional";
import Whiskey from "./pages/Whiskey";
import Wine from "./pages/Wine";
import Beer from "./pages/Beer";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/traditional" element={<Traditional />} />
          <Route path="/whiskey" element={<Whiskey />} />
          <Route path="/wine" element={<Wine />} />
          <Route path="/beer" element={<Beer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
