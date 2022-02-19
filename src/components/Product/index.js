import React from "react";
import { useDispatch } from "react-redux";
import { productAskDelete } from "../../actions/products";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { productToEdit } from "./../../actions/products";
import Swal from "sweetalert2";

const Product = ({ product }) => {
  const { _id, name, price, quantity, description } = product;

  const history = useHistory();

  const dispatch = useDispatch();

  const handleAskDelete = (_id) => {
    Swal.fire({
      title: "¿Esta seguro de eliminar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.value) {
        dispatch(productAskDelete(_id));
        history.push("/");
      }
    });
  };
  const redirectToEdit = (product) => {
    dispatch(productToEdit(product));
    history.push(`/edit-products/${product._id}`);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>${price}</td>
      <td>{description}</td>

      <td className="actions">
        <button
          className="btn btn-primary mr-2"
          onClick={() => redirectToEdit(product)}
        >
          Editar
        </button>
        <button
          className="btn btn-danger mr-2"
          onClick={() => handleAskDelete(_id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Product;
