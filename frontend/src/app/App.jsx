import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadImage from "./components/Upload";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="">
        <NavBar />
        <Routes>
          <Route path="/upload" element={<div className=""><UploadImage /></div>} />
          <Route path="/profile" element={<div className=""><Profile /></div>} />
          <Route path="/" element={<div className=""><Home /></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
