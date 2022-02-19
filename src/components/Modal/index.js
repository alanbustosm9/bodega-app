import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import NewProducts from "../NewProducts";

import "./index.css";
import { uiCloseModal } from "../../actions/ui";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const ModalProduct = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(uiCloseModal());
  };

  const { modalOpen } = useSelector((state) => state.ui);

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
    >
      <NewProducts closeModal={closeModal} />
    </Modal>
  );
};

export default ModalProduct;
