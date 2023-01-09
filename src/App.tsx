import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { IoIosList } from "react-icons/io";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/about" element={<h2>About</h2>} />
        <Route path="/contact" element={<h2>Contact</h2>} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
