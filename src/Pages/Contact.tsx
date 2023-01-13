import React, { useContext } from "react";
import { ModalContext } from "../Contexts/ModalContext";

const Contact = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="center">
      <h2>Contact</h2>
      <button
        className="btn"
        onClick={() => {
          openModal("Tada!! It's Contact Page");
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Contact;
