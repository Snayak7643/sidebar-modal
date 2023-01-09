import React, { useContext } from "react";
import { ModalContext } from "../App";

const Contact = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="center">
      <h2>Contact</h2>
      <button
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
