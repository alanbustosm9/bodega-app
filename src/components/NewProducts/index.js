import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { productNew } from "./../../actions/products";

import "./index.css";

const NewProducts = ({ closeModal }) => {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    name: "Coca Cola",
    quantity: "20",
    price: "1000",
    description: "Bebida coca-cola de 1L",
  });

  const { name, quantity, price, description } = formValues;

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (name.trim().length < 2) {
      return Swal.fire(
        "Error",
        "El nombre debe tener más de 2 caracteres",
        "error"
      );
    }

    if (quantity.trim().length < 1) {
      return Swal.fire("Error", "Debe ingresar una cantidad", "error");
    }

    if (price.trim().length < 1) {
      return Swal.fire("Error", "Debe ingresar un precio", "error");
    }

    if (description.trim().length < 2) {
      return Swal.fire(
        "Error",
        "La descripción debe tener más de 2 caracteres",
        "error"
      );
    }
    dispatch(productNew(formValues));
    closeModal();
  };

  return (
    <div className="row justify-content-center">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight bold">
              Agregar Producto
            </h2>

            <form onSubmit={handleSubmitForm}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Cantidad</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Cantidad"
                  name="quantity"
                  value={quantity}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Precio</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio"
                  name="price"
                  value={price}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Descripción</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Descripción"
                  name="description"
                  value={description}
                  onChange={handleInputChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold d-block w-100"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
