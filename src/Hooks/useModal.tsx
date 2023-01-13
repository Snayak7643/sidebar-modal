import { useState } from "react";

const useModal = () => {
  const [open, setOpen] = useState<string>("");

  const openModal = (name: string) => {
    setOpen(name);
  };

  const closeModal = () => {
    setOpen("");
  };

  return { open, openModal, closeModal };
};

export default useModal;
