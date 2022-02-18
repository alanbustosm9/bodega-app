import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, name, price, quantity, description } = product;

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
        <button className="btn btn-danger mr-2">Eliminar</button>
      </td>
    </tr>
  );
};

export default Product;
