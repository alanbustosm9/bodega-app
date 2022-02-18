import React from "react";
import { useDispatch } from "react-redux";
import { uiOpenModal } from "./../../actions/ui";

const AddNewFab = () => {
  const dispatch = useDispatch();

  const handleClickOpenModal = () => {
    dispatch(uiOpenModal());
  };
  return (
    <div className="d-grid gap-2 col mx-auto">
      <button
        className="btn btn-primary"
        type="button"
        onClick={handleClickOpenModal}
      >
        <i className="fas fa-plus mr-4"></i>
        Agregar Producto
      </button>
    </div>
  );
};

export default AddNewFab;
