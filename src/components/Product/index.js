import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../actions/products";

const Product = ({ product }) => {
  const { id, name, price, quantity, description } = product;

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(id));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>$ {price}</td>
      <td>{description}</td>

      <td className="actions">
        <Link to={`/edit-products/${id}`} className="btn btn-primary mr-2">
          Editar
        </Link>
        <button className="btn btn-danger mr-2" onClick={handleDelete}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Product;
