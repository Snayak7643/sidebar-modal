import React, { useContext } from "react";
import { ModalContext } from "../App";

const Home = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <div className="center">
      <h2>Home</h2>
      <button
        className="btn"
        onClick={() => {
          openModal("Tada!! It's Home Page");
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Home;
