import { createContext } from "react";

type ModalType = {
  open: string;
  openModal: (name: string) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalType>({} as ModalType);

export { ModalContext };
