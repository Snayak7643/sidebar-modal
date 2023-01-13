import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Modal from "./Components/Modal";
import { ModalContext } from "./Contexts/ModalContext";
import useModal from "./Hooks/useModal";

function App() {
  const value = useModal();

  return (
    <ModalContext.Provider value={value}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Modal />
    </ModalContext.Provider>
  );
}

export default App;
