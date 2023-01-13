import React, { useContext } from "react";
import { ModalContext } from "../Contexts/ModalContext";

const About = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="center">
      <h2>About</h2>
      <button
        className="btn"
        onClick={() => {
          openModal("Tada!! It's About Page");
        }}
      >
        Click
      </button>
    </div>
  );
};

export default About;
