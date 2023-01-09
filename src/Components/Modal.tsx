import React, { useContext } from "react";
import { ModalContext } from "../App";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
  const { open, closeModal } = useContext(ModalContext);

  return (
    <div className={open !== "" ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <h3>{open}</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default Modal;
