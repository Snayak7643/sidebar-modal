import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Modal from "./Components/Modal";

type ModalType = {
  open: string;
  openModal: (name: string) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalType>({} as ModalType);

function App() {
  const [open, setOpen] = useState<string>("");

  const openModal = (name: string) => {
    setOpen(name);
  };

  const closeModal = () => {
    setOpen("");
  };

  return (
    <ModalContext.Provider value={{ open, openModal, closeModal }}>
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
export { ModalContext };
