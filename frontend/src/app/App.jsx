import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadImage from "./components/Upload";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Home from "./components/Home";
import "./components/Upload.css";

function App() {
  return (
    <Router>
      <div
        className="min-h-screen text-white"
        style={{
          backgroundImage: "url('https://static.thairath.co.th/media/dFQROr7oWzulq5FZUEkChtXvMzOVnTLffIUeJ0xlu25n0e7JNHglYUjEKfv5I7ySo0w.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/upload" element={<div className="p-4"><UploadImage /></div>} />
          <Route path="/profile" element={<div className="p-4"><Profile /></div>} />
          <Route path="/" element={<div className="p-4"><Home /></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
